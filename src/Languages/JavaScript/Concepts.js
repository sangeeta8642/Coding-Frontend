// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "JavaScript", complete = false;
    let user = JSON.parse(localStorage.getItem("user"))


    let [q1, setQ1] = useState("")
    let [q2, setQ2] = useState("")


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    let quesAndAns = [];


    switch (conceptType) {
        case 'Variables, Constants and Keywords Of C':
            name = 'Variables, Constants and Keywords Of C';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>VARIABLES:</p>
                        <br />

                        <h5 className='Quotes'> " A variable is a temporary storage of data in a memory."</h5>
                        <br />
                        <p>Tha variable stores the data as a "value" like we store the gloceries in containers in the kitchen.</p>
                        <p>Examples: <br /><br /> a=3, b=5.6, c='A'</p>

                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <p>But, for declaring a variable in C, we should follow some rules:</p>
                        <p>a. First character of a variable must be an alphabet or a underscore{`{ _ }`}.</p>
                        <p>b. No commas, blanks or any other special symbol other than {`{ _ }`} is allowed.</p>
                        <p>c. C is a case sensitive language so, in C a=3 and A=3 both are different variables</p>
                        <p>We should make our variable names meaningful to enhance the readability of our program.</p>

                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>CONSTANTS:</p>
                        <br />

                        <h5 className='Quotes'> " An entity in which changing its value is not allowed, once its initialized is called a CONSTANT."</h5>
                        <br />
                        <p>for a variable we can change its value even after initialized based on our need.<br />But we cant do this with a Constant</p>
                        <br />
                        <p>Rather than this difference, the Constant acts same as a variable</p>

                    </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>In C, there are three types of Constants:</p>
                            <br />
                            <p>a. Integer Constant:</p>
                            <p>Examples: 1, -6, 0, 10 </p>
                            <br />
                            <p>b. Real Constant</p>
                            <p>Examples: 2.6, 9.25, -569.4 </p>
                            <br />

                            <p>b. character Constant</p>
                            <p>Examples: 'a', '@', '%' </p>
                        </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>KEYWORDS:</p>
                        <br />

                        <h5 className='Quotes'> " These are reserved words, whose meaning is already known to the compiler is called a KEYWORD."</h5>
                        <br />
                        <p>There are 32 keywords available in C as follows.</p>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`auto     double   int    struct
break    long     else   switch
case     return   enum   typeof
char     register extern union
const    short    float  unsigned
continue signed   for    void
default  sizeof   goto   volatile
do       static   if     while`}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>Note: </p>
                        <p>We can not use keywords as a Variables or Constants.</p>
                        <br />


                    </div>
                },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Introduction to JavaScript':
            name = 'Introduction to JavaScript';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>JavaScript</p>
                            <p>JavaScript is the most popular scripting language for the Web.</p>

                            <p>It is easy to learn, lightweight, cross-platform, single-threaded, and interpreted compiled language.</p>
                            <p>It is widely used for web development, both on the client side and server side.</p>


                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Features of JavaScript</p>
                            <p>1. All popular web browsers support JavaScript as they provide built-in execution environments.</p>

                            <p>2. JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.</p>

                            <p>3. JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.</p>

                            <p>4. It is a case-sensitive language.</p>

                        </div>

                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Application of JavaScript</p>
                            <p>JavaScript is used to create interactive websites. It is mainly used for:</p>

                            <p>Client-side validation,</p>
                            <p>Dynamic drop-down menus,</p>
                            <p>Displaying date and time,</p>
                            <p>Displaying pop-up windows and dialog boxes (like an alert dialog box, confirm dialog box and prompt dialog box),</p>
                            <p></p>
                        </div>

                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>JavaScript Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<script type="text/javascript">  
document.write("JavaScript is a simple language");  
</script>  `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },

                {
                    value: 'Case5', data:
                        <div className='case-div'>

                            <p>The script tag specifies that we are using JavaScript.</p>
                            <p>The text/javascript is the content type that provides information to the browser about the data.</p>
                            <p>document.write() function</p>
                        </div>

                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What function in JavaScript is commonly used for displaying output to the screen?", a: "document.write()" },
                { q: "What tag specifies the usage of JavaScript in HTML documents?", a: "script" },
                { q: "Is JavaScript case-sensitive?", a: "Yes" },
                { q: "Which programming language's syntax and structure does JavaScript follow?", a: "C" },
                { q: "What is the primary application of the document.write() function in JavaScript?", a: "Output" }
            ]
            break;


        case 'Basics of JavaScript':
            name = 'Basics of JavaScript';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Places to put JavaScript code:
                                <br />
                                1. Between the body tag of HTML.
                                <br />
                                2. Between the head tag of HTML.
                                <br />
                                3. In a .js file (external JavaScript).
                            </p>

                            <p><p>JavaScript Example: code between the body tag</p>
                            </p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<body>  
<script type="text/javascript">  
document.write("Hello Javatpoint");  
</script>  
</body>     `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>

                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>JavaScript Example: code between the head tag</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<head>
<script type="text/javascript">
// JavaScript code here
alert("This is a JavaScript example between the head tag");
</script>
</head>`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>External JavaScript file
                                <br />
                                We can create external JavaScript file and embed it in many html page.
                                <br />
                                It provides code re usability because single JavaScript file can be used in several html pages.
                                <br />
                                An external JavaScript file must be saved by .js extension.
                            </p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`message.js
function msg(){  
alert("Hello Javatpoint");  
}  `}
                                    </pre>
                                </code>
                            </div><br></br>


                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`index.html
<html>  
<head>  
<script type="text/javascript" src="message.js"></script>  
</head>  
<body>  
<p>Welcome to JavaScript</p>  
<form>  
<input type="button" value="click" onclick="msg()"/>  
</form>  
</body>  
</html>  `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>JavaScript Comment</p>
                            <p>The JavaScript comments are meaningful way to deliver message.</p>
                            <p>It is used to add information about the code, warnings or suggestions so that end user can easily interpret the code.</p>
                            <p>Types of JavaScript Comments<br></br>

                                Single-line Comment<br></br>
                                Multi-line Comment</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<head>
<script type="text/javascript">
// JavaScript code here
alert("This is a JavaScript example between the head tag");
</script>
</head>`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>JavaScript Single line Comment</p>
                            <p>It is represented by double forward slashes (//). It can be used before and after the statement.</p>
                            <p>Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<script>  
// It is single line comment  
document.write("hello javascript");  
</script> `}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>JavaScript Multi line Comment</p>
                            <p>It can be used to add single as well as multi line comments. So, it is more convenient.<br></br>

                                It is represented by forward slash with asterisk then asterisk with forward slash. For example:</p>
                            <p>Syntax</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`/* comment here  */  `}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<script>  
/* It is multi line comment.  
It will not be displayed */  
document.write("example of javascript multiline comment");  
</script>`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                { value: 'Case8' },
                {value:'Case9'},
                {value:'Case10'},
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What type of file extension must be used for saving an external JavaScript file?", a: ".js" },
                { q: "What symbol represents a single-line comment in JavaScript?", a: "//" },
                { q: "What is the main advantage of using external JavaScript files?", a: "Reusability" },
                { q: "What symbol(s) denote a multiline comment in JavaScript?", a: "/**/" },
                { q: "How is a single-line comment denoted in JavaScript?", a: "//" }
            ]
            break;


        case 'Variables and Data Types in JavaScript':
            name = 'Variables and Data Types in JavaScript';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>JavaScript Variable</p>
                            <p>Variables are Containers for Storing Data</p>
                            <p>JavaScript Variables can be declared in 4 ways:</p>
                            <p>Automatically<br></br>
                                Using var<br></br>
                                Using let<br></br>
                                Using const</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>When to Use var, let, or const?</p>
                            <p>1. Always declare variables<br></br>

                                2. Always use const if the value should not be changed<br></br>

                                3. Always use const if the type should not be changed (Arrays and Objects)<br></br>

                                4. Only use let if you can't use const<br></br>

                                5. Only use var if you MUST support old browsers.</p>


                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Example</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`x = 5; //automatically declared
var x = 5;//using var
let x = 5;//let x = 5;
const x = 5;//using const
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Program:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Variables</h1>



<p id="demo"></p>

<script>
let x = 5;
let y = 6;
let z = x + y;
document.write(z);
</script>

</body>
</html>



`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:</p>
                            <h1>JavaScript Variables</h1>
                            <p>11</p>
                        </div>
                },
                {
                    value: 'Case4', data:

                        <div className='case-div'>
                            <p>JavaScript Data Types</p>
                            <p>JavaScript has 8 Datatypes<br></br>
                                1. String<br></br>
                                2. Number<br></br>
                                3. Bigint<br></br>
                                4. Boolean<br></br>
                                5. Undefined<br></br>
                                6. Null<br></br>
                                7. Symbol<br></br>
                                8. Object
                            </p>
                            <br></br>

                            <p>The Object Datatype<br></br>
                                The object data type can contain:<br></br>

                                1. An object<br></br>
                                2. An array<br></br>
                                3. A date</p>


                        </div>
                },

                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Program:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<p>When adding a number and a string, JavaScript will treat the number as a string.</p>

<p id="demo"></p>

<script>
// String
let myString = "Hello, World!";
document.write("String: ", myString, "<br>");

// Number
let myNumber = 42;
document.write("Number: ", myNumber, "<br>");

// BigInt
let myBigInt = 9007199254740991n;
document.write("BigInt: ", myBigInt, "<br>");

// Boolean
let myBoolean = true;
document.write("Boolean: ", myBoolean, "<br>");

// Undefined
let myUndefined = undefined;
document.write("Undefined: ", myUndefined, "<br>");

// Null
let myNull = null;
document.write("Null: ", myNull, "<br>");

// Symbol
const mySymbol = Symbol("foo");
document.write("Symbol: ", mySymbol.toString(), "<br>");

// Object
let myObject = {
    name: "John",
    age: 30
};
document.write("Object: ", JSON.stringify(myObject), "<br>");

// Array
let myArray = [1, 2, 3, 4, 5];
document.write("Array: ", myArray.toString(), "<br>");

// Date
let myDate = new Date();
document.write("Date: ", myDate.toString(), "<br>");

</script>

</body>
</html>


`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:</p>
                            <h2>JavaScript</h2>
                            <p>When adding a number and a string, JavaScript will treat the number as a string.</p>
                            <p><pre>{`String: Hello, World!
Number: 42
BigInt: 9007199254740991
Boolean: true
Undefined: undefined
Null: null
Symbol: Symbol(foo)
Object: {"name":"John","age":30}
Array: 1,2,3,4,5
Date: Tue Mar 19 2024 21:25:25 GMT+0530 (India Standard Time)`}</pre></p>
                        </div>
                },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Constants in JavaScript':
            name = 'Constants in JavaScript';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>JavaScript Const</p>
                            <p>The const keyword was introduced in ES6 (2015)<br></br>

                                Variables defined with const cannot be Redeclared<br></br>

                                Variables defined with const cannot be Reassigned<br></br>

                                Variables defined with const have Block Scope</p>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>

                            <p>Cannot be Reassigned</p>
                            <p>A variable defined with the const keyword cannot be reassigned:</p>


                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>

                            <p>Must be Assigned</p>
                            <p>JavaScript const variables must be assigned a value when they are declared:</p>

                            <p>Correct</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`const PI = 3.14159265359;`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Incorrect</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`const PI;
PI = 3.14159265359;`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>

                            <p>The keyword const is a little misleading.</p>
                            <p>Always declare a variable with const when you know that the value should not be changed.<br></br>

                                It does not define a constant value. It defines a constant reference to a value.<br></br>

                                Because of this you can NOT:<br></br>
                                Reassign a constant value<br></br>
                                Reassign a constant array<br></br>
                                Reassign a constant object<br></br>

                            </p>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>

                            <p>Constant Arrays</p>
                            <p>You can change the elements of a constant array:</p>

                            <p>Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>But you can NOT reassign the array:</p>

                            <p>Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                { value: 'Case8' },
                {value:'Case9'},
                {value:'Case10'},
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What keyword was introduced in ES6 for declaring unchangeable variables?", a: "const" },
                { q: "Can you reassign a constant array in JavaScript?", a: "No" },
                { q: "When was the const keyword introduced in JavaScript?", a: "ES6" },
                { q: "Can you modify the elements of a constant array in JavaScript?", a: "Yes" },
                { q: "Can variables defined with const be redeclared?", a: "No" }
            ]
            break;

        case 'Operators in JavaScript':
            name = 'Operators in JavaScript';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>

                <p>JavaScript Operators</p>
                <p>Javascript operators are used to perform different types of mathematical and logical computations.</p>
                <p>Arithmetic Operators</p>
                <table>
                                <tr>
                                    <th>Operator</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                                <tr>
                                    <th>+</th>
                                    <th>Addition</th>
                                    <th>Adds together two values</th>
                                </tr>
                                <tr>
                                    <th>-</th>
                                    <th>Subtraction</th>
                                    <th>Subtracts one value from another</th>
                                </tr>
                                <tr>
                                    <th>*</th>
                                    <th>Multiplication</th>
                                    <th>Multiplies two values</th>
                                </tr>
                                <tr>
                                    <th>/</th>
                                    <th>Division</th>
                                    <th>Divides one value by another</th>
                                </tr>
                                <tr>
                                    <th>%</th>
                                    <th>Modulus</th>
                                    <th>Returns the division remainder</th>
                                </tr>
                                <tr>
                                    <th>++</th>
                                    <th>Increment</th>
                                    <th>Increases the value of a variable by 1</th>
                                </tr>
                                <tr>
                                    <th>--</th>
                                    <th>Decrement</th>
                                    <th>Decreases the value of a variable by 1</th>
                                </tr>
                            </table>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` // Addition
let additionResult = 10 + 5;
console.log("Addition Result:", additionResult);

// Subtraction
let subtractionResult = 10 - 5;
console.log("Subtraction Result:", subtractionResult);

// Multiplication
let multiplicationResult = 10 * 5;
console.log("Multiplication Result:", multiplicationResult);

// Division
let divisionResult = 10 / 5;
console.log("Division Result:", divisionResult);

// Modulus (Remainder)
let modulusResult = 10 % 3;
console.log("Modulus Result:", modulusResult);

// Increment
let x = 5;
x++;
console.log("Increment Result:", x);

// Decrement
let y = 5;
y--;
console.log("Decrement Result:", y);
`}
                                    </pre>
                                </code>
                            </div><br></br>
            </div>
             },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Assignment Operators</p>
                <p>Assignment operators are used to assign values to variables.</p>
                <table>

                    <tr>
                        <th>Operator</th>
                        <th>Example</th>
                        <th>Same As</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <th>=</th>
                        <th>x = 5</th>
                        <th>x = 5</th>
                        <th>Assign a value to a variable</th>
                    </tr>
                    <tr>
                        <th>+=</th>
                        <th>x+=3</th>
                        <th>x = x + 3</th>
                        <th>Adds and assign</th>
                    </tr>
                    <tr>
                        <th>-=</th>
                        <th>x -= 3</th>
                        <th>x = x - 3</th>
                        <th>Subtracts and assign</th>
                    </tr>
                    <tr>
                        <th>*=</th>
                        <th>x *= 3</th>
                        <th>x = x * 3</th>
                        <th>Multiply and assign</th>
                    </tr>
                    <tr>
                        <th>/=</th>
                        <th>x /= 3</th>
                        <th>x = x / 3</th>
                        <th>Divides and assign</th>
                    </tr>
                    <tr>
                        <th>%=</th>
                        <th>x %= 3</th>
                        <th>x = x % 3</th>
                        <th>Modulus and assign</th>
                    </tr>
                    <tr>
                        <th>&=</th>
                        <th>x &= 3</th>
                        <th>x = x & 3</th>
                        <th>Bitwise AND and assign</th>
                    </tr>
                    <tr>
                        <th>|=</th>
                        <th>x |= 3</th>
                        <th>x = x | 3</th>
                        <th>Bitwise OR and assign</th>

                    </tr>
                    <tr>
                        <th><pre>{`>>=`}</pre></th>
                        <th><pre>{`x >>= 3`}</pre></th>
                        <th><pre>{`x = x >> 3`}</pre></th>
                        <th>Bitwise right shift and assign</th>
                    </tr>
                    <tr>
                        <th><pre>{`<<=`}</pre></th>
                        <th><pre>{`x <<= 3`}</pre></th>
                        <th><pre>{`x = x << 3`}</pre></th>
                        <th>Bitwise left shift and assign</th>
                    </tr>
                    <tr>
                        <th><pre>{`^=`}</pre></th>
                        <th><pre>{`x ^= 3`}</pre></th>
                        <th><pre>{`x = x ^ 3`}</pre></th>
                        <th>Bitwise XOR and assign</th>
                    </tr>
                </table>

                <div className='code-block'>
                    <code >
                        <pre>
                            {`let a = 10;

// Assignment operator (=)
let b = a;
console.log("Assignment Operator Result (b):", b);

// Addition assignment (+=)
b += 5;
console.log("Addition Assignment Operator Result (b += 5):", b);

// Subtraction assignment (-=)
b -= 3;
console.log("Subtraction Assignment Operator Result (b -= 3):", b);

// Multiplication assignment (*=)
b *= 2;
console.log("Multiplication Assignment Operator Result (b *= 2):", b);

// Division assignment (/=)
b /= 4;
console.log("Division Assignment Operator Result (b /= 4):", b);

// Modulus assignment (%=)
b %= 2;
console.log("Modulus Assignment Operator Result (b %= 2):", b);
 `}
                        </pre>
                    </code>
                </div><br></br>
                </div>

            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>Comparison Operators</p>
                <p>Comparison operators are used to compare two values (or variables).</p>
                <p>The return value of a comparison is either 1 or 0, which means true (1) or false (0).</p>
                <table>
                    <tr>
                        <th>Operator</th>
                        <th>Name</th>
                        
                    </tr>
                    <tr>
                        <th>==</th>
                        <th>Equal to</th>
                       
                    </tr>
                    <tr>
                        <th>!=</th>
                        <th>Not equal</th>
                        
                    </tr>
                    <tr>
                        <th><pre>{`<`}</pre></th>
                        <th>Greater than</th>
                        
                    </tr>
                    <tr>
                        <th><pre>{`>`}</pre></th>
                        <th>Less than</th>
                        
                    </tr>
                    <tr>
                        <th><pre>{`>=`}</pre></th>
                        <th>Greater than or equal to</th>
                        
                    </tr>
                    <tr>
                        <th><pre>{`<=`}</pre></th>
                        <th>Less than or equal to</th>
                       
                    </tr>
                   
                </table>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`let a = 10;
let b = 5;

// Equal to (==)
console.log("Equal to (a == b):", a == b);

// Not equal to (!=)
console.log("Not equal to (a != b):", a != b);

// Greater than (>)
console.log("Greater than (a > b):", a > b);

// Less than (<)
console.log("Less than (a < b):", a < b);

// Greater than or equal to (>=)
console.log("Greater than or equal to (a >= b):", a >= b);

// Less than or equal to (<=)
console.log("Less than or equal to (a <= b):", a <= b);
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>Logical Operators</p>
                <p>Logical operators are used to determine the logic between variables or values</p>
                 <table>
                    <tr>
                        <th>Operator</th>
                        <th>Name</th>
                        <th>Description</th>
                        
                    </tr>
                    <tr>
                        <th>&&</th>
                        <th>Logical and</th>
                        <th>Returns true if both statements are true</th>
                       
                    </tr>
                    <tr>
                        <th>||</th>
                        <th>Logical or</th>
                        <th>Returns true if one of the statements is true</th>
                        
                    </tr>
                    <tr>
                        <th>!</th>
                        <th>Logical not</th>
                        <th>Reverse the result, returns false if the result is true</th>
                        
                    </tr>
                 
                </table>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`let b = false;

// Logical AND (&&)
console.log("Logical AND (a && b):", a && b);

// Logical OR (||)
console.log("Logical OR (a || b):", a || b);

// Logical NOT (!)
console.log("Logical NOT (!a):", !a);`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },{ value: 'Case8' },
            {value:'Case9'},
            {value:'Case10'},
               // { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What operator assigns a value to a variable in JavaScript?", a: "Assignment" },
                { q: "Which operator adds two values together in JavaScript?", a: "Addition" },
                { q: "Which operator multiplies two values in JavaScript?", a: "Multiplication" },
                { q: "What operator increments a variable by one in JavaScript?", a: "Increment" },
                { q: "Which operator evaluates to true only if both of its operands are true in JavaScript?", a: "AND" }
            ]
            break;


        case 'Control Structures in JavaScript':
            name = 'Control Structures in JavaScript';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>Control Structures in JavaScript:
                    <br></br>
                    1. Conditional Statements: These are used to execute different code blocks based on specified conditions.<br></br>
if statement: Executes a block of code if a specified condition is true.<br></br>
Syntax:
                </p>
                
                <div className='code-block'>
                    <code >
                        <pre>
                            {`if (condition) {
    // code block to be executed if condition is true
}
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>if...else statement: Executes one block of code if the condition is true and another block if the condition is false.<br></br>Syntax:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`if (condition) {
    // code block to be executed if condition is true
} else {
    // code block to be executed if condition is false
}

`}
                        </pre>
                    </code>
                </div><br></br>
                <p>if...else if...else statement: Allows for multiple conditions to be tested.<br></br>Syntax:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`if (condition1) {
    // code block to be executed if condition1 is true
} else if (condition2) {
    // code block to be executed if condition2 is true
} else {
    // code block to be executed if neither condition1 nor condition2 is true
}


`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Example of if...else statement</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`let y = 3;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");
}
`}
                        </pre>
                    </code>
                </div><br></br>

                <p>Example of if...else if...else statement</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`let z = 7;
if (z < 5) {
    console.log("z is less than 5");
} else if (z === 5) {
    console.log("z is equal to 5");
} else {
    console.log("z is greater than 5");
}
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>switch statement: Allows a variable to be tested for equality against a list of values.<br></br>Syntax:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`switch (expression) {
    case value1:
        // code block to be executed if expression === value1
        break;
    case value2:
        // code block to be executed if expression === value2
        break;
    default:
        // code block to be executed if expression doesn't match any case
}`}
                        </pre>
                    </code>
                </div><br></br>
<p>Example:</p>
<div className='code-block'>
                                <code >
                                    <pre>
                                        {`switch (expression) {
    case value1:
        // code block to be executed if expression === value1
        break;
    case value2:
        // code block to be executed if expression === value2
        break;
    default:
        // code block to be executed if expression doesn't match any case
}
`}
                                    </pre>
                                </code>
                            </div><br></br>

            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>2. Loops: These are used to repeatedly execute a block of code as long as a specified condition is true.<br></br>
for loop: Executes a block of code a specified number of times.<br></br>Syntax:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`for (initialization; condition; iteration) {
    // code block to be executed
}
`}
                        </pre>
                    </code>
                </div><br></br>

                <p>while loop: Executes a block of code as long as the specified condition is true.<br></br>Syntax:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`while (condition) {
    // code block to be executed
}

`}
                        </pre>
                    </code>
                </div><br></br>

                <p>do...while loop: Similar to a while loop, but the block of code is executed once before the condition is tested.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`do {
    // code block to be executed
} while (condition);

`}
                        </pre>
                    </code>
                </div><br></br>

                <p>Jump Statements: These are used to interrupt the normal flow of a program's execution.<br></br>
break statement: Terminates the current loop or switch statement.<br></br>
continue statement: Jumps to the next iteration of a loop.<br></br>
return statement: Exits the current function and optionally returns a value.</p>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>Example of for loop</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}`}
                        </pre>
                    </code>
                </div><br></br>

                <p>Example of while loop</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`let counter = 0;
while (counter < 5) {
    console.log("Counter: " + counter);
    counter++;
}
`}
                        </pre>
                    </code>
                </div><br></br>

                <p>Example of do...while loop</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`let num = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);`}
                        </pre>
                    </code>
                </div><br></br>

                <p>Example of Jump Statements:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`// break statement
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

// return statement
function add(a, b) {
    return a + b;
}
let result = add(3, 4);
console.log("Result: " + result);
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },

                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What JavaScript statement is used to execute a block of code only if a specified condition is true?", a: "if" },
                { q: "In a switch statement, what keyword is used to specify the code block to be executed if none of the cases match?", a: "default" },
                { q: "What loop executes a block of code as long as a specified condition is true, and the condition is tested before executing the block?", a: "while" },
                { q: "Which jump statement is used to terminate the current loop or switch statement?", a: "break" },
                { q: "What keyword is used to skip the current iteration of a loop and continue with the next iteration?", a: "continue" }
            ]
            break;


        case 'Functions in JavaScript':
            name = 'Functions in JavaScript';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>Functions in JavaScript:<br></br>
                    A JavaScript function is a block of code designed to perform a particular task.
                    <br></br>
A JavaScript function is executed when "something" invokes it (calls it).<br></br>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>JavaScript Function Syntax:<br></br>
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().<br></br>

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).<br></br>

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)<br></br>

The code to be executed, by the function, is placed inside curly brackets: {}
<br></br>
</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`function name(parameter1, parameter2, parameter3) {
  // code to be executed
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Function parameters are listed inside the parentheses () in the function definition.<br></br>

Function arguments are the values received by the function when it is invoked.
<br></br>
Inside the function, the arguments (the parameters) behave as local variables.</p>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>Function Invocation:<br></br>
                Function invocation in JavaScript refers to the process of calling or executing a function. When a function is invoked, the JavaScript engine executes the code inside the function's body.
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`// Function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function invocation
greet("Alice"); // Output: Hello, Alice!
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>In this example, the greet function is declared with a single parameter name. When greet("Alice") is called, the function is invoked with the argument "Alice", and the code inside the function's body is executed.</p>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>Function Return:<br></br>
When JavaScript reaches a return statement, the function will stop executing.
<br></br>
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
<br></br>
Functions often compute a return value. The return value is "returned" back to the "caller":
<br></br>
Example:<br></br>
Calculate the product of two numbers, and return the result:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
            //     { value: 'Case5', data: 
            //     <div className='case-div'>
            //     <p></p>
            //     <div className='code-block'>
            //         <code >
            //             <pre>
            //                 {``}
            //             </pre>
            //         </code>
            //     </div><br></br>
            // </div>
            // },
            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What keyword signifies the end of a function's execution?", a: "return" },
                { q: "What punctuation is used to enclose the parameters of a function?", a: "()" },
                { q: "What is the process of executing a function called in JavaScript?", a: "invocation" },
                { q: "How is a JavaScript function defined?", a: "function" },
                { q: "Where is the code to be executed by a function placed?", a: "{}" }
            ]
            break;


        case 'Scope and Closure in JavaScript':
            name = 'Scope and Closure in JavaScript';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>Scope:<br></br>

Scope defines the visibility and accessibility of variables and functions within your code. When you declare a variable or function in JavaScript, it becomes part of a specific scope. JavaScript primarily has two types of scope:
<br></br>
1. Global Scope:<br></br>
Variables and functions declared outside of any function or block have global scope.<br></br>
They can be accessed from anywhere within the code, including inside functions and blocks.<br></br>
Global variables and functions are accessible throughout the entire JavaScript program.</p>
            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`var globalVar = 'I am global';

function foo() {
    console.log(globalVar); // Accessible
}

foo();
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>2. Local Scope:<br></br>
Variables and functions declared within a function or block have local scope.<br></br>
They are only accessible within that specific function or block.<br></br>
Local variables and functions exist only within the context in which they are declared.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`function bar() {
    var localVar = 'I am local';
    console.log(localVar); // Accessible
}

bar();
console.log(localVar); // Error: localVar is not defined
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Local variables in JavaScript can shadow global variables with the same name within the scope where they are declared. This means that if you declare a variable with the same name inside a function as a global variable, the local variable will take precedence within that function's scope.</p>
            </div>
            },
                { value: 'Case4', data:  
                <div className='case-div'>
                <p>Closure:<br></br>

Closure is a powerful feature in JavaScript that allows functions to retain access to variables from their lexical scope, even after the outer function has finished executing. Let's break down how closures work:<br></br>

When a function is defined within another function, the inner function has access to the outer function's variables and parameters. This access is preserved even after the outer function has completed execution.<br></br>
A closure is created when an inner function is returned from an outer function, and that inner function maintains a reference to the variables of the outer function's scope.<br></br>
Closures allow for encapsulation and data privacy in JavaScript, enabling functions to access variables from their parent scopes even when those variables are not accessible from outside the parent scope.<br></br>
Closures are commonly used in scenarios like callbacks, event handlers, and maintaining state in functional programming.</p>
                
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>Here's an example demonstrating closure:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`function outerFunction() {
    var outerVar = 'I am from outer';

    function innerFunction() {
        console.log(outerVar); // Accessing outerVar from the outer function's scope
    }

    return innerFunction;
}

var innerFunc = outerFunction();
innerFunc(); // Outputs: I am from outer
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
            { value: 'Case8' },
                { value: 'Case9' },
               
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Where are variables and functions declared outside of any function or block placed in JavaScript?", a: "Global" },
                { q: "What type of variables and functions are only accessible within a specific function or block?", a: "Local" },
                { q: "Which type of variable takes precedence if a local variable shares the same name as a global variable?", a: "Local" },
                { q: "What feature in JavaScript allows functions to retain access to variables from their lexical scope?", a: "Closure" },
                { q: "What concept in JavaScript enables encapsulation and data privacy?", a: "Closure" }
            ]
            break;

        case 'Arrays in JavaScript':
            name = 'Arrays in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Objects in JavaScript':
            name = 'Objects in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Classes and Inheritance in JavaScript':
            name = 'Classes and Inheritance in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Asynchronous JavaScript ':
            name = 'Asynchronous JavaScript ';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Error Handling in JavaScript':
            name = 'Error Handling in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Event Handling in JavaScript':
            name = 'Event Handling in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'DOM Manipulation in JavaScript':
            name = 'DOM Manipulation in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;


        case 'Form Handling and Validation in JavaScript':
            name = 'Form Handling and Validation in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'Local Storage and Session Storage in JavaScript':
            name = 'Local Storage and Session Storage in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'JSON in JavaScript':
            name = 'JSON in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

        case 'AJAX in JavaScript':
            name = 'AJAX in JavaScript';
            cases = [
                { value: 'Case1', data: 'DatatypesCase 1 data' },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'LastCase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "0What is your name ?", a: "Anthoni" },
                { q: "1What is your name ?", a: "Anthoni" },
                { q: "2What is your name ?", a: "Anthoni" },
                { q: "3What is your name ?", a: "Anthoni" },
                { q: "4What is your name ?", a: "Anthoni" }
            ]
            break;

    }

    ques = shuffleArray(ques);

    if (ques.length >= 4) {
        for (let i = 0; i < 4; i++) {
            quesAndAns.push({ q: ques[i].q, a: ques[i].a });
        }
    }

    // quesAndAns.push({complete:false})
    // console.log(quesAndAns);

    return (
        <div>

            <ContentPage name={name} cases={cases} ques={ques} language={language} questions={quesAndAns} complete={complete} />
        </div>
    );
}