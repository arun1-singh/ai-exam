import { STUDY_TYPE_CONTENT_TABLE } from "@/configs/schema";
import { db } from "@/configs/db";
import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client";


export async function POST(req) {
    const {chapters,courseId,type}=await req.json();

    // const PROMPT=type='Flashcard'?
    // 'Generate the flashcard on topic : '+chapters+'  in JSON format with front back content, Maximum 15'
    // :'Generate Quiz on topic : '+chapters+' with Question and Options along with correct answer in JSON format,(Max 10)'
let PROMPT;
if (type === 'Flashcard') {
  PROMPT = 'Generate the flashcard on topic : ' + chapters + ' in JSON format with front back content, Maximum 15';
} else {
  PROMPT = 'Generate Quiz on topic : ' + chapters + ' with Question and Options along with correct answer in JSON format,(Max 10)';
}

   
    const result=await db.insert(STUDY_TYPE_CONTENT_TABLE).values({
        courseId:courseId,
        type:type
    }).returning({id:STUDY_TYPE_CONTENT_TABLE.id});


   const result_ = await inngest.send({
        name:'studyType.content',
        data:{
           studyType:type,
           prompt:PROMPT,
           courseId:courseId,
           recordId:result[0].id
        }
        
    })

    return NextResponse.json(result[0].id)

}
