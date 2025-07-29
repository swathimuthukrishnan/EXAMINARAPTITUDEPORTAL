import { Question } from '../types';

// Comprehensive set of 150 questions covering various topics
export const questions: Question[] = [
  // Mathematics & Logic Questions (1-30)
  {
  id: 1,
  question: "Evaluate the expression: 3 > 6 && 7 > 4",
  options: ["True", "False"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 2,
  question: "A reference is declared using the _ symbol.",
  options: ["&&", "&", "||", "!"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 3,
  question: "A group collected as many paise from each member as the number of members. If total is Rs. 59.29, number of members is:",
  options: ["57", "67", "77", "87"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 4,
  question: "The square root of (7 + 35)(7 - 35) is:",
  options: [],
  correctAnswer: "28",
  type: "fill-blank",
  points: 1
},

{
  id: 5,
  question: "How many two-digit numbers have a square ending in 8?",
  options: ["1", "2", "3", "None of these"],
  correctAnswer: 3,
  type: "multiple-choice",
  points: 1
},
{
  id: 6,
  question: "What does the declaration int (*ptr)[10]; mean?",
  options: ["ptr is array of pointers to 10 integers", "ptr is a pointer to an array of 10 integers", "ptr is an array of 10 integers", "ptr is a pointer to array"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 7,
  question: "If a file contains \"I am a boy\\r\\n\" and is read using fgets(), what will str contain?",
  options: ["I am a boy\\r\\n\\0", "I am a boy\\r\\0", "I am a boy\\n\\0", "I am a boy"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 8,
  question: "What does fp point to in the code?\n\nFILE *fp;\nfp = fopen(\"trial\", \"r\");",
  options: ["The first character in the file", "A structure which contains a char pointer", "The name of the file", "The last character in the file"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 9,
  question: "Which operations can be performed on the file opened with fopen(\"NOTES.TXT\", \"r+\")?",
  options: ["Reading", "Writing", "Appending", "Read and Write"],
  correctAnswer: 3,
  type: "multiple-choice",
  points: 1
},
{
  id: 10,
  question: "Choose correct printf for printing float a and double b:\n\nfloat a = 3.14;\ndouble b = 3.14;",
  options: [],
  correctAnswer: "printf(\"%f %lf\", a, b);",
  type: "fill-blank",
  points: 1
},
{
  id: 11,
  question: "Which function is safer?",
  options: ["gets()", "fgets()"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 12,
  question: "3 pumps working 8 hours/day empty tank in 2 days. How many hours/day must 4 pumps work to empty in 1 day?",
  options: ["9", "10", "11", "12"],
  correctAnswer: 3,
  type: "multiple-choice",
  points: 1
},
{
  id: 13,
  question: "36 men finish work in 18 days. In how many days will 27 men finish?",
  options: ["12", "18", "22", "24"],
  correctAnswer: 3,
  type: "multiple-choice",
  points: 1
},
{
  id: 14,
  question: "A 17.5m flagstaff casts a 40.25m shadow. Height of building casting 28.75m shadow is:",
  options: ["10 m", "12.5 m", "17.5 m", "21.25 m"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 15,
  question: "4 mat-weavers weave 4 mats in 4 days. How many by 8 weavers in 8 days?",
  options: ["4", "8", "12", "16"],
  correctAnswer: 3,
  type: "multiple-choice",
  points: 1
},
{
  id: 16,
  question: "A and B invest in ratio 3:2. If 5% goes to charity and A’s share is Rs. 855, total profit is:",
  options: ["Rs. 1425", "Rs. 1500", "Rs. 1537.50", "Rs. 1576"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 17,
  question: "A, B, C rent pasture. A: 10 oxen 7 months, B: 12 oxen 5 months, C: 15 oxen 3 months. Rent is Rs. 175. C's share?",
  options: ["Rs. 45", "Rs. 50", "Rs. 55", "Rs. 60"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 18,
  question: "If 0.75 : x :: 5 : 8, then x = ?",
  options: ["1.12", "1.2", "1.25", "1.30"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 19,
  question: "HTML was first proposed in:",
  options: ["1980", "1990", "1995", "2000"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 20,
  question: "HTML tag to embed CSS in an element:",
  options: ["Design", "Style", "Modify", "Define"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 21,
  question: "What does this CSS do?\n\n#box {\n  position: absolute;\n  top: 20px;\n  left: 50px;\n}",
  options: ["Relative to parent", "Fixed to top-left corner", "20px from top, 50px from left of page", "Floating effect"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 22,
  question: "HTML tag to include external JavaScript file:",
  options: ["<script>", "<link>", "<style>", "<js>"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 23,
  question: "HTML tag to link to anchor on same page:",
  options: [],
  correctAnswer: "<a href=\"#anchor\">",
  type: "fill-blank",
  points: 1
},
{
  id: 24,
  question: "Primary purpose of caching in back-end web development:",
  options: ["Optimize images/videos", "Improve visuals", "Store frequently accessed data", "Avoid downtime"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 25,
  question: "Meaning of RESTful API:",
  options: ["Used for web & mobile", "Data read-only", "Uses HTTP methods and REST principles", "For advanced users only"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 26,
  question: "NOT a common function of a web server:",
  options: ["Handle HTTP requests", "Serve web pages/files", "Create animations and effects", "Manage session data"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 27,
  question: "Purpose of MVC architecture:",
  options: ["Create designs", "Handle user login", "Separate data, view, logic", "Optimize for mobile"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 28,
  question: "How do back-end developers handle encryption?",
  options: ["Use weak encryption", "Avoid it for performance", "Use strong algorithms", "Show encrypted data"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 29,
  question: "Function to count all records (including nulls):",
  options: ["Min()", "Count(*)", "Max()", "Avg()"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 30,
  question: "A broad view of a database showing all tables and relationships is called:",
  options: ["Many-to-many", "Schema", "Insert", "Derived Column"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},


  // Programming Questions (31-60)
 {
  id: 31,
  question: "Tea worth Rs. 126/kg and Rs. 135/kg are mixed with a third variety in 1:1:2 ratio. Mixture worth Rs.153/kg. What is price of third variety?",
  options: ["Rs. 169.50", "Rs. 170", "Rs. 175.50", "Rs. 180"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 32,
  question: "Ratio to mix pulses at Rs. 15 and Rs. 20 to get Rs. 16.50 mixture?",
  options: [],
  correctAnswer: "7:3",
  type: "fill-blank",
  points: 1
},
{
  id: 33,
  question: "A container has 40L milk. 4L replaced with water three times. Final milk content?",
  options: ["26.34 L", "27.36 L", "28 L", "29.16 L"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 34,
  question: "Ratio for mixing rice at Rs. 7.20/kg and Rs. 5.70/kg to get Rs. 6.30/kg?",
  options: ["1:3", "2:3", "3:4", "4:5"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 35,
  question: "8L wine drawn and replaced by water 3 times. Wine:Water = 16:65. Original wine?",
  options: ["18 L", "24 L", "32 L", "42 L"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 36,
  question: "Library functions for dynamic memory allocation:",
  options: ["malloc() and memalloc()", "alloc() and memalloc()", "malloc() and calloc()", "memalloc() and faralloc()"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 37,
  question: "Function to free memory allocated by calloc():",
  options: ["dealloc();", "malloc(variable_name, 0)", "free();", "memalloc(variable_name, 0)"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 38,
  question: "Which compiles without error?",
  options: ["int a = Math.abs(-5);", "int b = Math.abs(5.0);", "int c = Math.abs(5.5F);", "int d = Math.abs(5L);"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 39,
  question: "Output of program with -ea flag:\n\nint x = 0;\nassert (x > 0) : \"assertion failed\";\nSystem.out.println(\"finished\");",
  options: ["finished", "Compilation fails", "An AssertionError is thrown", "AssertionError is thrown and finished is output"],
  correctAnswer: 2,
  type: "multiple-choice",
  points: 1
},
{
  id: 40,
  question: "Instantiate nested class MyInner outside outer class:",
  options: ["MyOuter.MyInner m = new MyOuter.MyInner();", "MyOuter.MyInner mi = new MyInner();", "MyOuter m = new MyOuter();", "MyOuter.MyInner mi = m.new MyOuter.MyInner();"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 41,
  question: "Valid float declaration:",
  options: ["float f = 1F;", "float f = 1.0;", "float f = \"1\";", "float f = 1.0d;"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 42,
  question: "Which are NOT valid .NET namespaces?",
  options: [],
  correctAnswer: "System.Process",
  type: "fill-blank",
  points: 1
},
{
  id: 43,
  question: "Meaning of: int (*ptr)[10];",
  options: ["ptr is array of pointers to 10 integers", "ptr is a pointer to an array of 10 integers", "ptr is an array of 10 integers", "ptr is a pointer to array"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 44,
  question: "Which legally declares, constructs, and initializes an array?",
  options: ["int [] myList = {\"1\", \"2\", \"3\"};", "int [] myList = (5, 8, 2);", "int myList [][] = {4,9,7,0};", "int [] myList = {4, 3, 7};"],
  correctAnswer: 3,
  type: "multiple-choice",
  points: 1
},
{
  id: 45,
  question: "Declare and initialize array with five numbers:",
  options: ["Array a = new Array(5);", "int [] a = {23,22,21,20,19};", "int a [] = new int[5];", "int [5] array;"],
  correctAnswer: 1,
  type: "multiple-choice",
  points: 1
},
{
  id: 46,
  question: "Valid String declaration:",
  options: ["String s1 = null;", "String s2 = 'null';", "String s3 = (String) 'abc';", "String s4 = (String) '\\ufeed';"],
  correctAnswer: 0,
  type: "multiple-choice",
  points: 1
},
{
  id: 47,
  question: "Six bells toll together at intervals 2, 4, 6, 8, 10, 12 sec. Times they toll together in 30 min?",
  options: ["4", "10", "15", "16"],
  correctAnswer: 3,
  type: "multiple-choice",
  points: 1
},
  {
    "id": 48,
    "question": "HTML/CSS: What does z-index: -1 do when position is not set?",
    "options": ["Brings element to front", "Has no effect", "Sends element behind parent", "Causes rendering error"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 49,
    "question": "React.js: What happens when you mutate state directly?",
    "options": ["Immediate re-render", "No re-render occurs", "Performance optimization", "Automatic deep copy"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 50,
    "question": "Node.js: What's the risk of JSON.parse(unsafeString)?",
    "options": ["Memory leak", "Blocking event loop", "Prototype pollution", "Cache poisoning"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 51,
    "question": "Backend: Which is NOT a valid JWT signing algorithm?",
    "options": ["HS256", "RS512", "ES384", "AES128"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 52,
    "question": "Aptitude: If 3 pumps empty a tank in 4 hours, how long for 7 pumps?",
    "options": ["1.14 hours", "1.71 hours", "2.28 hours", "3.42 hours"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 53,
    "question": "HTML/CSS: Which pseudo-element works on <input>?",
    "options": ["::before", "::after", "::placeholder", "::selection"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 54,
    "question": "React.js: What does useLayoutEffect fire before?",
    "options": ["Component unmount", "Browser paint", "State update", "Parent re-render"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 55,
    "question": "Node.js: What's the output of console.log(Buffer.from('test').toString('base64'))?",
    "options": ["dGVzdA==", "test", "74657374", "Error"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 56,
    "question": "Backend: Which Redis command is atomic?",
    "options": ["GET + SET", "INCR", "KEYS *", "FLUSHALL"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 57,
    "question": "Aptitude: 20% loss on selling price = what % loss on cost?",
    "options": ["16.67%", "20%", "25%", "33.33%"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 58,
    "question": "HTML/CSS: Which CSS unit is NOT relative?",
    "options": ["vh", "rem", "px", "ch"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 59,
    "question": "React.js: What breaks when using key={Math.random()}?",
    "options": ["Performance", "Component state", "Event bubbling", "Prop validation"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 60,
    "question": "Node.js: What does require.main === module check?",
    "options": ["If file is entry point", "For circular dependencies", "Module cache status", "ES6 import compatibility"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 61,
    "question": "Backend: Which PostgreSQL isolation level prevents phantom reads?",
    "options": ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 62,
    "question": "Aptitude: 15% of 15% of 500 = ?",
    "options": ["11.25", "15.75", "22.50", "33.75"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 63,
    "question": "HTML/CSS: Which property enables GPU acceleration?",
    "options": ["will-change: transform", "display: flex", "position: sticky", "overflow: hidden"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 64,
    "question": "React.js: What's missing here? useEffect(() => { const timer = setInterval(() => setState(state + 1), 1000); return () => clearInterval(timer); }, []);",
    "options": ["Dependency array", "Cleanup function", "State initializer", "Memoization"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 65,
    "question": "Node.js: Which is NOT a core module?",
    "options": ["querystring", "v8", "fs/promises", "axios"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 66,
    "question": "Backend: Which HTTP status is inappropriate for validation errors?",
    "options": ["400", "422", "500", "403"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 67,
    "question": "Aptitude: If 3x + 5y = 44 and 10x - 2y = 16, then x = ?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 68,
    "question": "HTML/CSS: Which selector has highest specificity?",
    "options": ["#id .class", "div[attr=\"value\"]", "body > main + section", ":not(.ignore)"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 69,
    "question": "React.js: What's wrong with this context? <Context.Provider><Child /></Context.Provider>",
    "options": ["Missing value prop", "No default state", "Requires memoization", "Should use Redux"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 70,
    "question": "Node.js: What's the risk of process.nextTick() recursion?",
    "options": ["Stack overflow", "Event loop starvation", "Memory leak", "Zombie processes"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 71,
    "question": "Backend: Which is NOT a valid GraphQL operation?",
    "options": ["query", "mutation", "subscription", "aggregation"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 72,
    "question": "Aptitude: 12 workers build 24 walls in 6 days. How many workers for 36 walls in 9 days?",
    "options": ["8", "12", "16", "24"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 73,
    "question": "HTML/CSS: Which CSS feature has worst browser support?",
    "options": ["CSS Grid", "Container Queries", "Flexbox", "Custom Properties"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 74,
    "question": "React.js: What's the output? const obj = { a: 1 }; const [state] = useState(obj); return <div>{state === obj ? 'Same' : 'Different'}</div>;",
    "options": ["Same", "Different", "Error", "Undefined"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 75,
    "question": "Node.js: What does --inspect-brk do?",
    "options": ["Enables cluster mode", "Starts debugger with breakpoint", "Forces garbage collection", "Disables TLS verification"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 76,
    "question": "Backend: Which is NOT a valid Cassandra consistency level?",
    "options": ["ONE", "QUORUM", "MAJORITY", "LEADER"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 77,
    "question": "Aptitude: If 20% of x = 30% of y, then x:y = ?",
    "options": ["2:3", "3:2", "4:9", "9:4"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 78,
    "question": "What is the time complexity of finding the longest increasing subsequence (LIS) using dynamic programming?",
    "options": ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 79,
    "question": "Which of these is not a valid way to prevent a race condition in C++?",
    "options": ["std::mutex", "std::atomic<T>", "volatile", "std::lock_guard"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 80,
    "question": "What does (x & (x - 1)) == 0 check for?",
    "options": ["Power of 2", "Odd number", "Prime number", "Negative number"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 81,
    "question": "Which consistency model does Amazon DynamoDB default to?",
    "options": ["Strong consistency", "Eventual consistency", "Linearizability", "Sequential consistency"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 82,
    "question": "How many trailing zeros are in 100! (100 factorial)?",
    "options": ["20", "24", "50", "100"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 83,
    "question": "What does LEA EAX, [EBX+4*ESI+8] do in x86?",
    "options": [
      "Loads EBX + ESI + 8 into EAX",
      "Computes EBX + 4*ESI + 8 without memory access",
      "Divides EBX by ESI",
      "Raises a segmentation fault"
    ],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 84,
    "question": "Which query finds employees earning more than their managers?",
    "options": [
      "SELECT e1.name FROM Employee e1, Employee e2 WHERE e1.manager_id = e2.id AND e1.salary > e2.salary",
      "SELECT e1.name FROM Employee e1 JOIN Employee e2 ON e1.id = e2.manager_id WHERE e1.salary > e2.salary",
      "SELECT name FROM Employee WHERE salary > (SELECT salary FROM Employee WHERE id = manager_id)",
      "None of the above"
    ],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 85,
    "question": "What is the chromatic number of a graph where every node has degree ≤ 3?",
    "options": ["2", "3", "4", "NP-hard to determine"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 86,
    "question": "Which command lists all open files by process PID=1234, including deleted ones?",
    "options": ["ls -l /proc/1234/fd", "lsof -p 1234", "strace -e file 1234", "find / -pid 1234"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 87,
    "question": "In C++, what happens if you throw from a destructor during stack unwinding?",
    "options": ["Undefined behavior", "Program terminates", "Both exceptions propagate", "Compiler error"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 88,
    "question": "Which is not a property of AES-256?",
    "options": ["256-bit key size", "128-bit block size", "Vulnerable to quantum attacks", "Uses Feistel network"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 89,
    "question": "Which regex matches valid email addresses and rejects user@.com?",
    "options": [
      "^\\S+@\\S+.\\S+$",
      "^[A-Za-z0-9.*%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
      "^.@.*$",
      "^[^@]+@[^@]+\\.[^@]+$"
    ],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 90,
    "question": "What does a TLB (Translation Lookaside Buffer) cache?",
    "options": ["Virtual-to-physical address mappings", "Disk block locations", "CPU opcodes", "Network routes"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },

  {
    "id": 91,
    "question": "What happens when you call notify() on an object with no waiting threads?",
    "options": ["IllegalMonitorStateException", "Silent no-op", "JVM crash", "Deadlock"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 92,
    "question": "What's wrong with this?\nc\nint *foo() {\n    int x = 42;\n    return &x;\n}\n",
    "options": ["Stack memory returned", "Memory leak", "Perfectly valid", "Segmentation fault"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 93,
    "question": "What does this output?\ncpp\ntemplate<int N> struct Fact { enum { val = N * Fact<N-1>::val }; };\ntemplate<> struct Fact<0> { enum { val = 1 }; };\ncout << Fact<5>::val;\n",
    "options": ["120", "Compile error", "0", "Infinite recursion"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 94,
    "question": "Which CSS selector has highest specificity?\ncss\n:not(#foo.bar:hover) > input[type=\"text\"]\n",
    "options": ["0,2,2", "0,3,1", "1,1,2", "1,2,1"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 95,
    "question": "What happens with this Flutter widget?\ndart\nCustomPaint(\n  painter: MyPainter(),\n  child: SizedBox.expand(),\n  size: Size.zero\n)\n",
    "options": ["Invisible but interactive", "Rendering exception", "Full-screen painter", "Memory leak"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 96,
    "question": "What does this recursive CTE do?\nsql\nWITH RECURSIVE boom(n) AS (\n  SELECT 1 UNION ALL SELECT n+1 FROM boom WHERE n < 1000000000\n) SELECT COUNT(*) FROM boom;\n",
    "options": ["Counts to 1 billion", "Stack overflow", "Returns 1", "Hangs forever"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 97,
    "question": "What happens when you query a sharded collection during chunk migration in MongoDB?",
    "options": ["Consistent results", "Partial results", "Duplicate documents", "ShardConfigStaleError"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 98,
    "question": "Which gradient descent variant fails hardest with saddle points?",
    "options": ["SGD", "Adam", "Adagrad", "RMSprop"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 99,
    "question": "What does this output?\npython\na = [[]]*3\na[0].append(1)\nprint(a)\n",
    "options": ["[[1], [1], [1]]", "[[1], [], []]", "[1, [], []]", "TypeError"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 100,
    "question": "What logs here?\njavascript\nconsole.log(0.1 + 0.2 === 0.3, Math.abs(0.3 - (0.1 + 0.2)) < Number.EPSILON);\n",
    "options": ["true true", "false true", "true false", "false false"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 101,
    "question": "If a 20% loss on selling price equals what % loss on cost?",
    "options": ["16.67%", "20%", "25%", "33.33%"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 102,
    "question": "What breaks when overriding finalize() with this?\njava\nprotected void finalize() throws IOException {\n    Files.write(Path.of(\"log.txt\"), \"bye\".getBytes());\n}\n",
    "options": ["Nothing", "SecurityException", "Silent failure", "JVM crash"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 103,
    "question": "What's the output?\nc\nint i = 0;\nprintf(\"%d %d\", i++, i++);\n",
    "options": ["0 1", "1 0", "0 0", "Compiler-dependent"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 104,
    "question": "What happens here in C++?\ncpp\nstd::unique_ptr<int> foo() {\n    auto p = std::make_unique<int>(42);\n    return p;\n}\nauto x = foo();\n",
    "options": ["Memory leak", "Compile error", "Perfect move", "Double free"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 105,
    "question": "What happens with this HTML Shadow DOM snippet?\nhtml\n<div id=\"host\"></div>\n<script>\n  host.attachShadow({mode: 'closed'});\n  host.shadowRoot.innerHTML = \"<style>:host { display: none; }</style>\";\n</script>\n",
    "options": ["Element disappears", "TypeError", "Style ignored", "Element stays visible"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 106,
    "question": "What happens when you compute() a function using a GlobalKey in Flutter?",
    "options": ["Works fine", "InvalidArgumentException", "Silent failure", "Memory leak"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 107,
    "question": "What does this PostgreSQL query return?\nsql\nSELECT array_agg(n) FROM generate_series(1,100) n WHERE n % 2 = 0;\n",
    "options": ["[2,4,...,100]", "Syntax error", "NULL", "Infinite loop"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 108,
    "question": "What's wrong with this MongoDB aggregation?\njavascript\ndb.coll.aggregate([{ $project: { _id: 0 } }])\n",
    "options": ["Nothing", "Drops all documents", "Returns empty cursors", "Needs $match first"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 109,
    "question": "Which activation function causes most vanishing gradients?",
    "options": ["Sigmoid", "ReLU", "Tanh", "LeakyReLU"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 110,
    "question": "What does this do?\npython\nclass Meta(type):\n    def __getattribute__(self, name):\n        return lambda: 42\nclass Foo(metaclass=Meta): pass\nprint(Foo.bar())\n",
    "options": ["42", "AttributeError", "TypeError", "Infinite recursion"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 111,
    "question": "What happens after this JavaScript code?\njavascript\nObject.prototype.polluted = true;\nconst obj = {};\nconsole.log(obj.polluted);\n",
    "options": ["true", "undefined", "TypeError", "false"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 112,
    "question": "If 3^x = 5^y = 45^z, what's 2/x + 1/y?",
    "options": ["1/z", "2/z", "3/z", "4/z"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 113,
    "question": "What does invokedynamic primarily enable in Java bytecode?",
    "options": ["Lambda expressions", "Garbage collection", "Thread synchronization", "Reflection"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 114,
    "question": "What's the size of this struct?\nc\n#pragma pack(1)\nstruct { char a; int b; char c; };\n",
    "options": ["6 bytes", "9 bytes", "12 bytes", "Compiler-dependent"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 115,
    "question": "What's missing here?\ncpp\ntask<void> foo() { co_return; }\n",
    "options": ["#include <coroutine>", "task definition", "co_await", "Nothing"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 116,
    "question": "What does this CSS grid declaration do?\ncss\n.grid { grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); }\n",
    "options": ["Equal-width columns", "Single column", "Overflow container", "Invalid syntax"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 117,
    "question": "What's wrong with this Flutter animation controller?\ndart\nAnimationController(duration: Duration.zero);\n",
    "options": ["Needs vsync", "Valid instant animation", "Duration too short", "Memory leak"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 118,
    "question": "What does this SQL window function return?\nsql\nSELECT x, SUM(x) OVER (ORDER BY x ROWS 1 PRECEDING) FROM (VALUES (1), (2), (3)) t(x);\n",
    "options": ["(1,1), (2,3), (3,5)", "(1,1), (2,2), (3,3)", "Syntax error", "(1,NULL), (2,1), (3,2)"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 119,
    "question": "What happens if you commit a MongoDB transaction after 60 seconds?",
    "options": ["Success", "TransactionExpired", "Silent rollback", "Cluster restart"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 120,
    "question": "What releases the Python GIL?",
    "options": ["time.sleep(1)", "list.append()", "x = 42", "\"a\" + \"b\""],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 121,
    "question": "What logs last in JavaScript?\njavascript\nsetTimeout(()=>console.log(1),0);\nPromise.resolve().then(()=>console.log(2));\nconsole.log(3);\n",
    "options": ["1", "2", "3", "Random"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 122,
    "question": "What is the time complexity of Ford-Fulkerson algorithm?",
    "options": ["O(EV²)", "O(E²V)", "O(max_flow * E)", "O(V³)"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 123,
    "question": "In Java modules, what happens if module A requires transitive B and C requires A?",
    "options": ["C gets B implicitly", "Compile error", "Runtime error", "Nothing special"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 124,
    "question": "What does this macro do?\nc\n#define SQR(x) x*x\nprintf(\"%d\", SQR(2+3));\n",
    "options": ["25", "11", "13", "Compile error"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 125,
    "question": "What does this C++ template enable?\ncpp\ntemplate<typename T, typename = decltype(T::foo())>\nvoid bar(int);\n",
    "options": ["Compile-time introspection", "Runtime polymorphism", "Template specialization", "CRTP pattern"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 126,
    "question": "What happens with this HTML Web Component?\nhtml\n<template id=\"t\"><slot name=\"foo\"></slot></template>\n<x-foo><div slot=\"foo\">Hi</div></x-foo>\n",
    "options": ["Renders \"Hi\"", "DOMException", "Empty element", "Infinite loop"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 127,
    "question": "What's wrong with this Flutter platform channel call?\ndart\nfinal result = await MethodChannel('foo').invokeMethod(42);\n",
    "options": ["Missing method name", "Invalid argument type", "Needs try/catch", "Nothing"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 128,
    "question": "Which SQL query can't use this index?\nsql\nCREATE INDEX idx ON users(name, age);\n",
    "options": ["WHERE name = 'Alice'", "WHERE age = 25", "WHERE name = 'Bob' AND age = 30", "WHERE name LIKE 'C%'"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 129,
    "question": "What happens with two indexes {a:1} and {b:1} on find({a:1,b:1}) in MongoDB?",
    "options": ["Uses both indexes", "Uses one randomly", "Full collection scan", "IndexMergeError"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 130,
    "question": "What does this Python metaclass code print?\npython\nclass Meta(type):\n    def __new__(cls, name, bases, dct):\n        dct['answer'] = 42\n        return super().__new__(cls, name, bases, dct)\nclass Foo(metaclass=Meta): pass\nprint(Foo.answer)\n",
    "options": ["42", "AttributeError", "TypeError", "RecursionError"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 131,
    "question": "What's the possible output of the following Java code involving memory model?\njava\nint x = 0;\nboolean y = false;\n// Thread 1\nx = 1;\ny = true;\n// Thread 2\nif (y) System.out.println(x);\n",
    "options": ["Only 1", "Only 0", "Either 0 or 1", "Always throws exception"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 132,
    "question": "What's the output of this C++ code involving undefined behavior?\ncpp\nint i = 0;\nint a[] = {1,2,3};\na[i] = i++;\ncout << a[0] << a[1];\n",
    "options": ["11", "12", "21", "All of the above"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 133,
    "question": "Why does the SQL transaction pair cause a deadlock?\nsql\n-- Transaction 1\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n-- Transaction 2\nUPDATE accounts SET balance = balance - 50 WHERE id = 2;\nUPDATE accounts SET balance = balance + 50 WHERE id = 1;\n",
    "options": ["Missing indexes", "Cross-transaction resource ordering", "Insufficient isolation level", "All transactions need SERIALIZABLE"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 134,
    "question": "Why doesn't this Python code run faster with threads?\npython\ndef count(n):\n    while n > 0: n -= 1\nThread(target=count, args=(10**8,)).start()\nThread(target=count, args=(10**8,)).start()\n",
    "options": ["GIL prevents parallel execution", "Thread startup overhead", "Memory contention", "Python's interpreter optimization"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 135,
    "question": "What's the output order of this JavaScript async code?\njavascript\nasync function foo() {\n  console.log(1);\n  await Promise.resolve();\n  console.log(2);\n}\nsetTimeout(() => console.log(3), 0);\nfoo();\nPromise.resolve().then(() => console.log(4));\nconsole.log(5);\n",
    "options": ["1,5,4,2,3", "1,5,2,4,3", "5,1,4,2,3", "1,4,5,2,3"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 136,
    "question": "What happens when you run this Linux command?\nbash\necho c > /proc/sysrq-trigger\n",
    "options": ["Crash kernel immediately", "Trigger OOM killer", "Sync all filesystems", "Reboot immediately"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 137,
    "question": "Why do generator outputs in GANs often collapse when using BatchNorm?",
    "options": ["Mode collapse amplifies", "Internal covariate shift disappears", "Discriminator overfits", "Gradient penalty fails"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 138,
    "question": "Why is this Flutter widget inefficient?\ndart\nRepaintBoundary(\n  child: AnimatedBuilder(\n    animation: controller,\n    builder: (_, child) => Transform.rotate(\n      angle: controller.value,\n      child: child,\n    ),\n  ),\n)\n",
    "options": ["RepaintBoundary prevents rotation", "AnimatedBuilder outside RepaintBoundary", "Missing GlobalKey", "Rotates entire subtree unnecessarily"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 139,
    "question": "What does this SQL query return?\nsql\nWITH RECURSIVE t(n) AS (\n  SELECT 1 UNION ALL SELECT n+1 FROM t WHERE n < 100\n)\nSELECT SUM(n) OVER (ORDER BY n ROWS UNBOUNDED PRECEDING) FROM t;\n",
    "options": ["Triangular numbers", "Fibonacci sequence", "Prime numbers", "Arithmetic overflow"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 140,
    "question": "In this C code, what happens if a == b?\nc\nint foo(int *a, int *b) {\n  *a = 5;\n  *b = 6;\n  return *a;\n}\n",
    "options": ["Always 5", "Always 6", "Either 5 or 6", "Undefined behavior"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 141,
    "question": "What happens when this JNI call is made?\nc\nJNIEnv *env;\n(*env)->FatalError(env, \"Oops\");\n",
    "options": ["Throws Java exception", "Terminates JVM immediately", "Logs error and continues", "Undefined behavior"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 142,
    "question": "What's special about this Python metaclass definition?\npython\nclass Meta(type):\n  def __prepare__(name, bases):\n    return defaultdict(list)\nclass Foo(metaclass=Meta):\n  x = 1\n  y = 2\n",
    "options": ["All attributes are lists", "x and y are merged", "Attribute order is reversed", "Default values are 0"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 143,
    "question": "Why does React render twice here?\njsx\nfunction App() {\n  const [state, setState] = useState(0);\n  useEffect(() => { setState(1); }, []);\n  return <div>{state}</div>;\n}\n",
    "options": ["StrictMode double-render", "Race condition", "Missing dependency", "Concurrent mode artifact"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 144,
    "question": "What happens when this Kubernetes command runs?\nbash\nkubectl drain node --ignore-daemonsets\n",
    "options": ["Deletes node permanently", "Evicts all non-DaemonSet pods", "Causes data loss", "Only works on control plane"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 145,
    "question": "Breaking AES-256 encryption practically would require:",
    "options": ["2^256 operations", "2^128 operations", "Quantum computer", "No known practical attack"],
    "correctAnswer": 3,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 146,
    "question": "What does this x86 assembly code perform?\nasm\nmov rax, [rdi]\nlock cmpxchg [rsi], rdx\n",
    "options": ["Atomic compare-and-swap", "Memory barrier", "Cache flush", "Undefined opcode"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 147,
    "question": "In Raft consensus, what happens if the leader crashes during log replication?",
    "options": ["All uncommitted logs are lost", "New leader completes replication", "Split-brain occurs", "Cluster halts"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 148,
    "question": "What optimization does this demonstrate in compiler theory?\ncpp\nint foo() { int x = 5; return x + 1; }\n// Becomes: int foo() { return 6; }\n",
    "options": ["Constant propagation", "Dead code elimination", "Loop unrolling", "Tail call optimization"],
    "correctAnswer": 0,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 149,
    "question": "What is the speedup provided by Grover's quantum algorithm?",
    "options": ["Exponential speedup", "Quadratic speedup", "Polynomial speedup", "No speedup"],
    "correctAnswer": 1,
    "type": "multiple-choice",
    "points": 1
  },
  {
    "id": 150,
    "question": "Why does speculative execution lead to the Meltdown vulnerability?",
    "options": ["Bypasses MMU protection", "Flushes cache incorrectly", "Leaks data via side channels", "Overflows TLB"],
    "correctAnswer": 2,
    "type": "multiple-choice",
    "points": 1
  }
];

// Function to get random questions for a quiz session
export function getRandomQuestions(count: number = 30): Question[] {
  const shuffled = [...questions];
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Function to get questions by category or difficulty
export function getQuestionsByCategory(category: string, count: number = 10): Question[] {
  let filteredQuestions: Question[] = [];
  
  switch (category.toLowerCase()) {
    case 'mathematics':
      filteredQuestions = questions.filter(q => q.id >= 1 && q.id <= 30);
      break;
    case 'programming':
      filteredQuestions = questions.filter(q => q.id >= 31 && q.id <= 60);
      break;
    case 'general':
      filteredQuestions = questions.filter(q => q.id >= 61 && q.id <= 90);
      break;
    case 'reasoning':
      filteredQuestions = questions.filter(q => q.id >= 91 && q.id <= 120);
      break;
    case 'advanced':
      filteredQuestions = questions.filter(q => q.id >= 121 && q.id <= 150);
      break;
    default:
      filteredQuestions = [...questions];
  }
  
  // Shuffle and return requested count
  const shuffled = [...filteredQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, Math.min(count, shuffled.length));
}