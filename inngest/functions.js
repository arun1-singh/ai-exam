import { inngest } from "./client";
import { db } from '@/configs/db';
import { STUDY_MATERIAL_TABLE, USER_TABLE, CHAPTER_NOTES_TABLE, STUDY_TYPE_CONTENT_TABLE, } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { generateNotesAiModel, GenerateQuizAiModel, GenerateStudyTypeContentAiModel } from '@/configs/AiModel'

// export const testFunction = inngest.createFunction(
//   { name: "Test Function" },
//   { event: "test.event" } ,
//   async ({ event }) => {
//     console.log("Event received:",event);
//   }
// );

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { event, body: "Hello, World!" };
  },
);

export const CreateNewUser = inngest.createFunction(
  { id: 'create-user' },
  { event: 'user.create' },
  async ({ event, step }) => {
    const { user } = event.data;
    const result = await step.run('Check User and create New if Not in DB', async () => {
      const result = await db.select().from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))
      console.log(result)
      if (result?.length == 0) {
        const userResp = await db.insert(USER_TABLE).values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress
        }).returning({ id: USER_TABLE.id })
        return userResp;
      }
      return result;
    })
    return 'Success';
  }
)



export const GenerateNotes = inngest.createFunction(
  { id: 'generate-course' },
  { event: 'notes.generate' },
  async ({ event, step }) => {
    const { course } = event.data;

    const notesResult = await step.run('Generate Chapter Notes', async () => {
      const Chapters = course?.courseLayout?.chapters;
      let index = 0;
      // Chapters.forEach(async(chapter)=>{
      for (const chapter of Chapters) {
        const PROMPT = "Generate  an exam material detail content for each chapter, Make sure to include all topic point in the content, make sure to give content in HTML format (Do not Add HTML, Head, Body, title tag, The chapters :" + JSON.stringify(chapter);
        const result = await generateNotesAiModel.sendMessage(PROMPT);
        console.log(result);
        const aiResp = result.response.text();




        
        await db.insert(CHAPTER_NOTES_TABLE).values({
          chapterId: index,
          courseId: course?.courseId,
          notes: aiResp,
        });


        index = index + 1;
      }
      return 'Completed'
    });


    const updateCourseStatusResult = await step.run('Update Course Status to Ready', async () => {
      const result = await db.update(STUDY_MATERIAL_TABLE).set({
        status: 'Ready'
      }).where(eq(STUDY_MATERIAL_TABLE.courseId, course?.courseId))
      return 'Success';
    });
  }
)

export const GenerateStudyTypeContent = inngest.createFunction(
  { id: 'Generate Study Type Content' },
  { event: 'studyType.content' },

  async ({ event, step }) => {
    const { studyType, prompt, courseId, recordId } = event.data;

    const AiResult= await step.run('Generating Flashcard using AI', async () => {
      const result= 
      studyType=='Flashcard'?
      await GenerateStudyTypeContentAiModel.sendMessage(prompt):
      await GenerateQuizAiModel.sendMessage(prompt);
      const AIResult = JSON.parse(result.response.text());
      return AIResult;

    })
  


    const DbResult = await step.run('Save Result to DB', async () => {
      const result = await db.update(STUDY_TYPE_CONTENT_TABLE)
        .set({
          content: AiResult,
          status: 'Ready'
        }).where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId))

      return 'Data Inserted'

    })
  }
)
