const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const courseOutlineAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate a study material for Python for Exam and also giving the level of difficulty as EASY by mentioning it with summary of course,List of chapters along with summary for each chapter, Topic list in each chapter, All results in JSON format.\n" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"courseTitle\": \"Python for Beginners\",\n  \"difficultyLevel\": \"EASY\",\n  \"courseSummary\": \"This course provides a gentle introduction to Python programming.  It covers fundamental concepts and syntax, enabling students to write basic Python programs. No prior programming experience is required.\",\n  \"chapters\": [\n    {\n      \"chapterTitle\": \"Introduction to Python\",\n      \"chapterSummary\": \"This chapter introduces the Python programming language, its features, and its applications. It also covers setting up the Python environment and writing your first Python program.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Why learn Python?\",\n        \"Setting up Python (Installation and IDE)\",\n        \"Your First Python Program (Hello, World!)\",\n        \"Basic Syntax (Indentation, Comments)\",\n        \"Running Python code (using an interpreter or IDE)\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Data Types and Variables\",\n      \"chapterSummary\": \"This chapter explores fundamental data types in Python such as integers, floats, strings, and booleans, along with how to declare and use variables.\",\n      \"topics\": [\n        \"Integers\",\n        \"Floating-point numbers\",\n        \"Strings (text)\",\n        \"Booleans (True/False)\",\n        \"Variables and assignment\",\n        \"Type conversion (casting)\",\n        \"String manipulation (basic slicing and concatenation)\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Operators\",\n      \"chapterSummary\": \"This chapter covers various operators in Python, including arithmetic, comparison, logical, and assignment operators.\",\n      \"topics\": [\n        \"Arithmetic operators (+, -, *, /, //, %, **)\",\n        \"Comparison operators (==, !=, >, <, >=, <=)\",\n        \"Logical operators (and, or, not)\",\n        \"Assignment operators (=, +=, -=, *=, /=)\",\n        \"Operator precedence\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Input and Output\",\n      \"chapterSummary\": \"This chapter explains how to take input from the user and display output using the `input()` and `print()` functions.\",\n      \"topics\": [\n        \"The `print()` function\",\n        \"Formatting output using f-strings\",\n        \"The `input()` function\",\n        \"Taking numerical input and type conversion\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Control Flow (Conditional Statements)\",\n      \"chapterSummary\": \"This chapter introduces conditional statements (`if`, `elif`, `else`) to control the flow of execution in a program based on conditions.\",\n      \"topics\": [\n        \"The `if` statement\",\n        \"The `if-else` statement\",\n        \"The `if-elif-else` statement\",\n        \"Nested `if` statements\",\n        \"Boolean expressions\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Loops\",\n      \"chapterSummary\": \"This chapter covers loops (`for` and `while`) for repetitive execution of code blocks.\",\n      \"topics\": [\n        \"The `for` loop (iterating over sequences)\",\n        \"The `while` loop\",\n        \"Loop control statements (`break`, `continue`)\",\n        \"Nested loops\"\n      ]\n    },\n    {\n      \"chapterTitle\": \"Basic Data Structures: Lists and Tuples\",\n      \"chapterSummary\": \"This chapter introduces lists and tuples – ordered collections of items.\",\n      \"topics\": [\n        \"Lists: creation, accessing elements, modifying lists\",\n        \"List methods (append, insert, remove, pop)\",\n        \"Tuples: creation, accessing elements (immutable)\",\n        \"List vs. Tuple\"\n\n      ]\n    }\n  ]\n}\n```\n" },
        
      ],
    },
  ],
});


export const generateNotesAiModel = model.startChat({
  generationConfig2,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate  exam material detail Content for each chapter, Make sure to include all the topics in the content,make sure to give content in HTML format(Do not Add HTML, Head, Body,title tag), The chapters:  {\n      \"chapterTitle\": \"Advanced Data Structures\",\n      \"chapterSummary\": \"Explore complex data structures and their optimized implementations, including advanced tree structures and graph algorithms.\",\n      \"emoji\": \"🤔\",\n      \"topics\": [\n        \"Trie Data Structure and Applications\",\n        \"Segment Trees and Range Queries\",\n        \"Advanced Graph Algorithms (Dijkstra's, Bellman-Ford, Floyd-Warshall)\",\n        \"Minimum Spanning Trees (Prim's, Kruskal's)\",\n        \"Disjoint Set Union (Union-Find)\"\n      ]\n    }," },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```html\n<h2>PHP Fundamentals</h2>\n<p>This chapter reviews core PHP concepts, including syntax, data types, operators, and control structures.</p>\n\n<h3>Variables and Data Types</h3>\n<ul>\n  <li>Declaring variables using the dollar sign ($) prefix.</li>\n  <li>Common data types: integer, float, string, boolean, array, null.</li>\n  <li>Type juggling and type casting.</li>\n  <li>Variable scope and lifetime.</li>\n</ul>\n\n<h3>Operators (Arithmetic, Comparison, Logical)</h3>\n<ul>\n  <li>Arithmetic operators (+, -, *, /, %, ++, --).</li>\n  <li>Comparison operators (==, !=, ===, !==, >, <, >=, <=).</li>\n  <li>Logical operators (&&, ||, !).</li>\n  <li>Operator precedence and associativity.</li>\n</ul>\n\n<h3>Control Structures (if/else, switch, loops)</h3>\n<ul>\n  <li>Conditional statements: if, else if, else.</li>\n  <li>switch statement for multiple conditional branches.</li>\n  <li>Looping structures: for, while, do-while, foreach.</li>\n  <li>Breaking and continuing loops.</li>\n</ul>\n\n<h3>Functions and their usage</h3>\n<ul>\n  <li>Defining and calling functions.</li>\n  <li>Function parameters and return values.</li>\n  <li>Function scope.</li>\n  <li>Built-in functions and user-defined functions.</li>\n  <li>Anonymous functions and closures.</li>\n</ul>\n\n<h3>Arrays (indexed and associative)</h3>\n<ul>\n  <li>Creating and accessing arrays.</li>\n  <li>Indexed arrays.</li>\n  <li>Associative arrays (key-value pairs).</li>\n  <li>Array functions (e.g., array_push, array_pop, sort).</li>\n</ul>\n\n<h3>Working with strings</h3>\n<ul>\n  <li>String manipulation functions (e.g., strlen, strpos, substr, str_replace).</li>\n  <li>String concatenation.</li>\n  <li>String formatting.</li>\n  <li>Working with different character encodings (e.g., UTF-8).</li>\n</ul>\n```\n"},
        ],
      },
    ],
  });

   


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());


 export const GenerateStudyTypeContentAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate the flashcard on topic: Flutter Fundamentals,User Interface(UI) Development, Basic App Navigation in JSON format with front back content, Maximum 15"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"The fundamental building block of Flutter UI. Everything you see on the screen is a widget.\"\n  },\n  {\n    \"front\": \"What are the two main types of widgets?\",\n    \"back\": \"StatelessWidget and StatefulWidget.\"\n  },\n  {\n    \"front\": \"Difference between StatelessWidget and StatefulWidget?\",\n    \"back\": \"StatelessWidget: UI doesn't change. StatefulWidget: UI can change based on state.\"\n  },\n  {\n    \"front\": \"How to build a simple text widget?\",\n    \"back\": \" `Text('Hello World!')`\"\n  },\n  {\n    \"front\": \"How to create a column of widgets?\",\n    \"back\": \"Use `Column(children: [widget1, widget2, ...])`\"\n  },\n  {\n    \"front\": \"How to create a row of widgets?\",\n    \"back\": \"Use `Row(children: [widget1, widget2, ...])`\"\n  },\n  {\n    \"front\": \"What is a Scaffold widget?\",\n    \"back\": \"A basic structure for a Material Design app, providing AppBar, body, etc.\"\n  },\n  {\n    \"front\": \"How to navigate to a new screen using Navigator?\",\n    \"back\": \"Use `Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()));`\"\n  },\n  {\n    \"front\": \"How to pop (go back) from a screen?\",\n    \"back\": \"Use `Navigator.pop(context);` or `Navigator.pop(context, data);` to pass data back.\"\n  },\n  {\n    \"front\": \"What is a `BuildContext`?\",\n    \"back\": \"Provides information about the widget's location in the widget tree.  Needed for navigation and accessing context-dependent data.\"\n  },\n  {\n    \"front\": \"What is the purpose of `MaterialApp`?\",\n    \"back\": \"The root widget of a Material Design app. It sets up the theme and manages navigation.\"\n  },\n  {\n    \"front\": \"How to handle user input in Flutter?\",\n    \"back\": \"Use widgets like `TextField` and `TextFormField` and associate them with state variables to capture input.\"\n  },\n  {\n    \"front\": \"What is a key in Flutter?\",\n    \"back\": \"Used to uniquely identify widgets in the widget tree; crucial for efficient updates and maintaining widget state across rebuilds.\"\n  },\n  {\n    \"front\": \"What is `setState()` used for?\",\n    \"back\": \"To rebuild a StatefulWidget after its internal state has changed.\"\n  },\n  {\n    \"front\": \"Name a common layout widget besides Row and Column.\",\n    \"back\": \"Stack, GridView, ListView\"\n  }\n]\n```\n"},
      ],
    },
  ],
});

 export const GenerateQuizAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Quiz on topic : Flutter Fundamentals , User Interface (UI) Development,Basic App Navigation with Question and Options along with correct answer in JSON format.\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"quizTitle\": \"Flutter Fundamentals, UI, and Basic Navigation\",\n  \"questions\": [\n    {\n      \"question\": \"What is the fundamental building block of a Flutter UI?\",\n      \"options\": [\"Widget\", \"Layout\", \"Screen\", \"View\"],\n      \"answer\": \"Widget\"\n    },\n    {\n      \"question\": \"Which type of widget is responsible for arranging other widgets in a specific layout?\",\n      \"options\": [\"StatelessWidget\", \"StatefulWidget\", \"Layout Widget\", \"InheritedWidget\"],\n      \"answer\": \"Layout Widget\"\n    },\n    {\n      \"question\": \"What is the difference between a StatefulWidget and a StatelessWidget?\",\n      \"options\": [\n        \"StatelessWidget can change its state during runtime, while StatefulWidget cannot.\",\n        \"StatefulWidget can change its state during runtime, while StatelessWidget cannot.\",\n        \"Both are identical and can be used interchangeably.\",\n        \"StatelessWidget handles user input, while StatefulWidget does not.\"\n      ],\n      \"answer\": \"StatefulWidget can change its state during runtime, while StatelessWidget cannot.\"\n    },\n    {\n      \"question\": \"Which widget is commonly used for displaying a list of items in Flutter?\",\n      \"options\": [\"Row\", \"Column\", \"ListView\", \"GridView\"],\n      \"answer\": \"ListView\"\n    },\n    {\n      \"question\": \"What is the purpose of the `BuildContext` in Flutter?\",\n      \"options\": [\n        \"To store application-level state\",\n        \"To provide access to the widget tree and its context\",\n        \"To handle user input events\",\n        \"To manage network requests\"\n      ],\n      \"answer\": \"To provide access to the widget tree and its context\"\n    },\n    {\n      \"question\": \"Which widget is used for navigating between screens in Flutter?\",\n      \"options\": [\"Navigator\", \"Route\", \"Page\", \"Screen\"],\n      \"answer\": \"Navigator\"\n    },\n    {\n      \"question\": \"What is the role of a `MaterialApp` widget?\",\n      \"options\": [\n        \"It provides a basic structure for a Flutter application, including Material Design theming and navigation.\",\n        \"It's used for handling network requests.\",\n        \"It's specifically for creating custom widgets.\",\n        \"It's used for database interactions.\"\n      ],\n      \"answer\": \"It provides a basic structure for a Flutter application, including Material Design theming and navigation.\"\n    },\n    {\n      \"question\": \"Which method is used to push a new route onto the navigation stack?\",\n      \"options\": [\"Navigator.push()\", \"Navigator.pop()\", \"Navigator.remove()\", \"Navigator.replace()\"],\n      \"answer\": \"Navigator.push()\"\n    },\n    {\n      \"question\": \"What does the `key` property do in a widget?\",\n      \"options\": [\n        \"It's used for styling purposes.\",\n        \"It's used to uniquely identify a widget for state management or animation.\",\n        \"It's used for storing user data.\",\n        \"It's not relevant for widget functionality.\"\n      ],\n      \"answer\": \"It's used to uniquely identify a widget for state management or animation.\"\n    },\n    {\n      \"question\": \"What is the purpose of the `Scaffold` widget?\",\n      \"options\": [\n        \"Provides a basic visual layout structure for a screen, including AppBar, body, and bottom navigation.\",\n        \"It is used for creating animations.\",\n        \"It is used for handling network requests.\",\n        \"It is used for creating custom layouts.\"\n      ],\n      \"answer\": \"Provides a basic visual layout structure for a screen, including AppBar, body, and bottom navigation.\"\n    }\n  ]\n}\n```\n"},
      ],
    },
  ],
});
