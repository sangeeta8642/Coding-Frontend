// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "cpp", complete = false;
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
                    value: 'Case3', data: <div className='case-div'>
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


        case 'Introduction to C++':
            name = 'Introduction to C++';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>What Is C++</p>
                            <p>C++ is a cross-platform language that can be used to create high-performance application</p>
                            <p>C++ was developed by Bjarne Stroustrup, as an extesnion</p>
                            <p>C++ gives programmers a high level of control over system resource and memory</p>
                            <p>The language was ,updated 4 major times in 2011, 2014, 2017 and 2020 to C++11, C++14, C++17, C++20</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Why Use C++</p>
                            <p>C++ is one of the world's most popular programming languages.</p>
                            <p>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.</p>
                            <p>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</p>
                            <p>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.</p>
                            <p>As C++ is close to C, Cs and Java, it makes it easy for programmers to switch to C++ or vice versa.</p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Difference between C and C++</p>
                            <p>C++ was developed as an extension of C, and both languages have almost the same syntax.</p>
                            <p>The main difference between C and C++ is that C++ support classes and objects, while C does not.</p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>C++ Get Started</p>
                            <p>To start using C++, you need two things:</p>
                            <p>1. A text editor, like Notepad, to write C++ code</p>
                            <p>2. A compiler, like GCC, to translate the C++ code into a language that the computer will understand</p>
                            <p>There are many text editors and compilers to choose from. We will use an IDE </p>
                            <p>An IDE (Integrated Development Environment) is used to edit AND compile the code.</p>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                // { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Who Created C++ ?", a: "Bjarne Stroustrup" },
                { q: "Is C++ portable ?", a: "Yes" },
                { q: "How many major updtes has C++ had ?", a: "Four" },
                { q: "Is C++ a cross-plateform Language ?", a: "Yes" },
                { q: "IDE Stands for:", a: "Integrated Development Environment" }
            ]
            break;
        case 'Basics Of C++':
            name = 'Basics Of C++';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Basic Of C++</p>



                            <p>Let's start with a simple Program</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output: </p>
                            <p>Hello World!</p>
                            <br />


                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Let's understand the code</p>
                            <p>1. It is a header file library that lets us work with input and output objects,</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`#include <iostream>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>2. By using the given we can use names for objects and variables from the standard library.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`using namespace std `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>3. It is called a function. Any code inside its curly brackets { } will be executed.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int main()  `}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p> <pre>{`4. It is an object used together with the insertion operator (<<) to output/print text.
 Every C++ statement ends with a semicolon ;`}</pre></p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`cout << "Hello World!";  `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>5. It ends the function</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`  return 0;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Do not forget to add the closing curly bracket to actually end the main function.</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Comments</p>
                            <p>Comments can be used to explain C++ code, and to make it more readable</p>
                            <p>The compiler considers these comments as non-executabl statements</p>
                            <p>There are two types of comment</p>
                            <p>1. Single-line comments start with two forward slashes (//)</p>
                            <p>2. Multi-line comments start with /* and ends with */.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`  /* The code below will print the words Hello World!
  to the screen, and it is amazing */  
  cout << "Hello World!";
   cout << "Hello Coders"; //This is comment
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:</p>
                            <p>Hello World! Hello Coders</p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                // { value: 'Case4', data: 'DatatypesCase 4 data' },

                // { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "what symbol marks the beginning of a single-line comments in C++?", a: "//" },
                { q: "How do you start a multi-line comment", a: "/*" },
                { q: "Write the main function ?", a: "int main()" },
                { q: "Which operator is used to outputting text in C++", a: "insertion" },
                { q: "Which punctuation mark ends every C++ statements ?", a: ";" }
            ]
            break;

        case 'Variables, Constants and Keywords Of C++':
            name = 'Variables, Constants and Keywords Of C++';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Variables</p>
                            <p>Variables are containers for storing data values</p>
                            <p>There are different types of variables                   <br></br>
                                1. int - stores integers (whole numbers)                <br></br>
                                2. double - stores floating point numbers               <br></br>
                                3. char - stores single characters, such as 'a' or 'B'. <br></br>
                                4. string - stores text, such as "Hello World".         <br></br>
                                5. bool - stores values with two states: true or false  <br></br>
                            </p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Syntax: </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`type variable_name = Value;  `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Code:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int myNum = 15;
cout << myNum;
  `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output: <br></br>
                                15 </p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Keywords</p>
                            <p>
                                Keywords(also known as reserved words)  have special meanings to the C++ compiler and are always written or typed in lower cases.<br></br>
                                Keywords are words that the language uses for a special purpose, such as void, int, public, etc
                            </p>
                            <p>
                                <pre>
                                    {`asm     double  new         switch
auto    else    operator    template
break   enum    private     this
case    extern  protected   throw
catch   float   public      try
char    for     register    typedef
class   friend  return      union
const   goto    short       unsigned
if      signed  virtual     continue
default inline  sizeo       void
delete  int     static      volatile
do      long    struct      while
`}
                                </pre>
                            </p>

                        </div>
                },

                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Constant</p>
                            <p>When you do not want others (or yourself) to change existing variable values, use the const keyword </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`const int myNum = 15;  // myNum will always be 15
  `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What type of variable stores integers ?", a: "int" },
                { q: "What type of variable stores text ??", a: "string" },
                { q: "How are keywords typically written in ?", a: "Lower case" },
                { q: "What keyword indicates that a variable's value remains unchanged ?", a: "const" },
                { q: " Which type of variable I have to write to store 15?", a: "int" }
            ]
            break;
        case 'Datatypes Of C++':
            name = 'Datatypes Of C++';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Datatypes</p>
                            <p>All variables use data type during declaration to restrict the type of data to be stored</p>
                            <p>Data types are used to tell the variables the type of data they can store</p>
                            <p>Every data type requires a different amount of memory. </p>
                            <p>Basic DataTypes:</p>
                            <p><pre>{`Data        Description
Boolean     Stores true or false values
Char        Stores a single character/letter/number, or ASCII values
Int         Stores whole numbers, without decimals
Float       Stores fractional numbers, containing one or more decimals. Sufficient for storing 6-7 decimal digits
Double      Stores fractional numbers, containing one or more decimals. Sufficient for storing 15 decimal digits
String      Stores a sequence of character.
`}</pre></p>


                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Numeric Types</p>
                            <p>Use int when you need to store a whole number without decimals, like 35 or 1000, and float or double when you need a floating point number (with decimals), like 9.99 or 3.14515.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int myNum = 1000;
float myNum = 5.75;
double myNum = 19.99;  `}
                                    </pre>
                                </code>
                            </div><br></br>


                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Boolean Types</p>
                            <p>A boolean data type is declared with the bool keyword and can only take the values true or false.</p>
                            <p>When the value is returned, true = 1 and false = 0.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`bool isCodingFun = true;
bool isFishTasty = false;
cout << isCodingFun;  // Outputs 1 (true)
cout << isFishTasty;  // Outputs 0 (false)  `}
                                    </pre>
                                </code>
                            </div><br></br>


                        </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>Character Types</p>
                        <p>The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c':</p>

                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`char myGrade = 'B';
cout << myGrade;  `}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>Output:<br></br>
                            B
                        </p>

                    </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>String Types</p>
                            <p>The string type is used to store a sequence of characters (text).</p>
                            <p>String values must be surrounded by double quotes,</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`string greeting = "Hello";
cout << greeting;  `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>
                                Hello</p>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What data type is suitable for storing whole numbers without decimals ?", a: "int" },
                { q: "What data type is used to store a sequence of characters (text) ?", a: "string" },
                { q: "If a boolean variable is set to false, what numeric value does it represent?", a: "0" },
                { q: "What keyword is used to declare a boolean data type ?", a: "bool" },
                { q: "What data type is used to store a single character ?", a: "char" }
            ]
            break;

        case 'Operators Of C++':
            name = 'Operators Of C++';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Operators Of C++</p>
                            <p>Operators are used to perform operations on variables and values.<br></br>
                                In the example below, we use the + operator to add together two values:</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int x = 100 + 50;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Arithmetic Operators</p>

                            <Table >
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
                            </Table>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`  int x = 10;
  int y = 6;
  cout << x + y; //Output: 16
  cout << x - y; //Output: 4
  cout << x * y; //Output: 60
  cout << x / y; //Output: 1
  cout << x % y; //Output: 4
  cout << ++x; //Output:7
  cout << --y; //Output:9`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Assignment Operators</p>
                            <p>Assignment operators are used to assign values to variables.</p>

                            <Table  >

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
                            </Table>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`  int x = 10;

cout << x; //Output: 10
cout << x += 3; //Output: 13
cout << x -= 3; //Output: 7
cout << x *= 3; //Output: 1
cout << x /= 3; //Output: 3.33333
cout << x %= 3; //Output:1
cout << x &= 3; //Output:9
cout << x |= 3; //Output:11
cout << x <<= 3; //Output:80
cout << x >>= 3; //Output:1
cout << x ^= 3; //Output:9`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Comparison Operators</p>
                            <p>Comparison operators are used to compare two values (or variables).</p>
                            <p>The return value of a comparison is either 1 or 0, which means true (1) or false (0).</p>
                            <table >
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
                                        {`  int x = 10;
int y = 6;
cout << x == y; //Output: 0 (false)
cout << x != y; //Output: 1 (true)
cout << x > y; //Output:  1 (true)
cout << x < y; //Output: 0 (false)
cout << x >= y; //Output: 1 (true)
cout << x <= y; //Output:0 (false)`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },

                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Logical Operators</p>
                            <p>Logical operators are used to determine the logic between variables or values</p>
                            <table >
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
                                        {`  int x = 10;
int y = 6;
cout << (x > 3 && x < 10); // returns true (1)
cout << (x > 3 || x < 4); // returns true (1)
cout << (!(x > 3 && x < 10)); // returns false (0)`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },                {value:'Case8'},
                {value:'Case9'},
                {value:'Case10'},
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Add the numbers 2 and 4, then store the result in variable a", a: "int a=2+4" },
                { q: "Substract the 3 from 8, then store the result in variable x", a: "int x=5-3" },
                { q: "Divide the 8 with 2, then store the result in variable m", a: "int m=8/2" },
                { q: "Multiply the 3 and 5, then store the result in variable y", a: "int y=3*5" },
                { q: "Guess the result of 2>3 in 0 or 1", a: "0" },
                { q: "Guess the result of 5>2 in 0 or 1", a: "1" },
            ]
            break;


        case 'ConditionalFlow of C++':
            name = 'ConditionalFlow of C++';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <br />
                            <p>In C++ programming, <br />if statement is used to test the condition. We use conditional statements<br />as follows</p>
                            <br />
                            <p>if statement:-</p>
                            <p>Syntax</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`  if(condition){    
//code to be executed    
}  `}
                                    </pre>
                                </code>
                            </div><br />
                            <p>Here is the complete program of a if statement:</p>
                            <div className='code-block'>
                                <code>
                                    <pre>
                                        {`#include <iostream>  
int main () {  
   int num = 10;    
            if (num % 2 == 0)    
            {    
                cout<<"It is even number";    
            }   
   return 0;  
}  `}
                                    </pre>
                                </code>
                            </div><br />
                            <p>Output:-</p>
                            <div >
                                <p>It is even number</p>
                            </div>
                        </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <p> IF-else Statement</p>
                        <p>The C++ if-else statement also tests the condition. <br />It executes if block if condition is true otherwise else block is executed</p>
                        <br />
                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`if(condition){    
//code if condition is true    
}else{    
//code if condition is false    
}    `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Here is the complete program of it</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
int main () {  
   int num = 11;    
            if (num % 2 == 0)    
            {    
                cout<<"It is even number";    
            }   
            else  
            {    
                cout<<"It is odd number";    
            }  
   return 0;  
}     
}    `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>It is odd number</p>
                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p> IF-else-if Statement</p>
                        <p>The C++ if-else-if ladder statement executes one condition from multiple statements.</p>
                        <br />
                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`if(condition1){    
//code to be executed if condition1 is true    
}else if(condition2){    
//code to be executed if condition2 is true    
}    
else if(condition3){    
//code to be executed if condition3 is true    
}    
...    
else{    
//code to be executed if all the conditions are false    
}        `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Here is the complete program of it</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
int main () {  
       int num;  
       cout<<"Enter a number to check grade:";    
       cin>>num;  
            if (num <0 || num >100)    
            {    
                cout<<"wrong number";    
            }    
            else if(num >= 0 && num < 50){    
                cout<<"Fail";    
            }    
            else if (num >= 50 && num < 60)    
            {    
                cout<<"D Grade";    
            }    
            else if (num >= 60 && num < 70)    
            {    
                cout<<"C Grade";    
            }    
            else if (num >= 70 && num < 80)    
            {    
                cout<<"B Grade";    
            }    
            else if (num >= 80 && num < 90)    
            {    
                cout<<"A Grade";    
            }    
            else if (num >= 90 && num <= 100)    
            {    
                cout<<"A+ Grade";  
            }    
    }        `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>Enter a number to check grade:66
                            C Grad</p><br />
                        <p>Output:-</p>
                        <p>Enter a number to check grade:-2
                            wrong number</p>
                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p> C++ switch</p>
                        <p>The switch statement in C++ is a potent control structure that enables you<br /> to run several code segments based on the result of an expression. <br />It offers a sophisticated and effective substitute for utilizing a succession of if-else-if statements<br /> when you have to make a decision between several possibilities.
                            <br /><br />
                            The C++ switch statement executes one statement from multiple conditions. <br />It is like if-else-if statement in C++.</p>
                        <br />
                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`switch(expression){      
case value1:      
 //code to be executed;      
 break;    
case value2:      
 //code to be executed;      
 break;    
......      
      
default:       
 //code to be executed if all cases are not matched;      
 break;    
}            `}
                                </pre>
                            </code>
                        </div>
                        <br />

                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <p>Here is the complete program of it</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>    
int main () {  
       int num;  
       cout<<"Enter a number to check grade:";    
       cin>>num;  
           switch (num)    
          {    
              case 10: cout<<"It is 10"; break;    
              case 20: cout<<"It is 20"; break;    
              case 30: cout<<"It is 30"; break;    
              default: cout<<"Not 10, 20 or 30"; break;    
          }    
    }            `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>Enter a number:
                            10
                            It is 10</p><br />
                        <p>Output:-</p>
                        <p>Enter a number:
                            55
                            Not 10, 20 or 30</p>
                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Write the output 3<15", a: "true" },
                { q: "Write the output 20<15", a: "false" },
                { q: "Re-write by correcting the syntax; if{condition}(code)", a: "if(condition){code}" },
                { q: "Guess the condition here if(10>15){retunr true}", a: "10>15" },
                { q: `Guess the output: int age = 16 if(age>=18){cout<<"You can vote";}else{cout<<"You cannot vote"}`, a: "You cannot vote" }
            ]
            break;

        case 'ControlFlow Of C++':
            name = 'ControlFlow Of C++';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>For loop</p>
                        <p>The C++ for loop is used to iterate a part of the program several times.<br /> If the number of iteration is fixed, it is recommended to use for loop than while or do-while loops.</p>
                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`for(initialization; condition; incr/decr){    
//code to be executed    
}                `}
                                </pre>
                            </code>

                        </div>
                        <br />
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
int main() {  
         for(int i=1;i<=10;i++){      
            cout<<i <<"\n";      
          }       
    }               `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>1<br />
                            2<br />
                            3<br />
                            4<br />
                            5<br />
                            6<br />
                            7<br />
                            8<br />
                            9<br />
                            10</p><br />

                    </div>
                },

                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>While loop</p>
                            <p>In C++, while loop is used to iterate a part of the program several times. If the number of iteration is not fixed, it is recommended to use while loop than for loop.</p>
                            <p>Syntax:</p>
                            <div className='code-block'>
                                <code>
                                    <pre>
                                        {`while(condition){    
//code to be executed    
}                    `}
                                    </pre>
                                </code>
                            </div>
                            <br />
                            <p>Here is the complete program of it</p>
                            <div className='code-block'>
                                <code>
                                    <pre>
                                        {`#include <iostream>  
using namespace std;  
int main() {         
 int i=1;      
         while(i<=10)   
       {      
            cout<<i ;    
            i++;  
          }       
    }                 `}
                                    </pre>
                                </code>
                            </div>
                            <br />
                            <p>Output:-</p>
                            <p>1<br />
                                2<br />
                                3<br />
                                4<br />
                                5<br />
                                6<br />
                                7<br />
                                8<br />
                                9<br />
                                10</p><br />

                        </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>Do-While Loop</p>
                        <p>The C++ do-while loop is used to iterate a part of the program several times.<br /> If the number of iteration is not fixed and you must have to execute the loop at least once,<br /> it is recommended to use do-while loop.</p>
                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`do{    
//code to be executed    
}while(condition);  
                `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
int main() {  
     int i = 1;    
          do{    
              cout<<i<<"\n";    
              i++;    
          } while (i <= 10) ;    
}                 `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>1<br />
                            2<br />
                            3<br />
                            4<br />
                            5<br />
                            6<br />
                            7<br />
                            8<br />
                            9<br />
                            10</p><br />

                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>Break Statement</p>
                        <p>The C++ break is used to break loop or switch statement.<br /> It breaks the current flow of the program at the given condition. <br />In case of inner loop, it breaks only inner loop.</p>
                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`jump-statement;      
break;   
                `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
int main() {  
      for (int i = 1; i <= 10; i++)    
          {    
              if (i == 5)    
              {    
                  break;    
              }    
        cout<<i<<"\n";    
          }    
}                   `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>1<br />
                            2<br />
                            3<br />
                            4</p><br />

                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <p>Continue Statement</p>
                        <p>The C++ continue statement is used to continue loop.<br /> It continues the current flow of the program and skips the remaining code at specified condition.<br /> In case of inner loop, it continues only inner loop.</p>
                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`jump-statement;      
continue;   `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
int main()  
{  
     for(int i=1;i<=10;i++){      
            if(i==5){      
                continue;      
            }      
            cout<<i<<"\n";      
        }        
}                    `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>1<br />
                            2<br />
                            3<br />
                            5<br />
                            6<br />
                            7<br />
                            8<br />
                            9<br />
                            10</p><br />

                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <p>Goto Statement</p>
                        <p>The C++ goto statement is also known as jump statement. <br />
                            It is used to transfer control to the other part of the program. <br />
                            It unconditionally jumps to the specified label.</p>
                        <br />
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
int main()  
{  
ineligible:    
         cout<<"You are not eligible to vote!\n";    
      cout<<"Enter your age:\n";    
      int age;  
      cin>>age;  
      if (age < 18){    
              goto ineligible;    
      }    
      else    
      {    
              cout<<"You are eligible to vote!";     
      }         
}                      `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>You are not eligible to vote!<br />
                            Enter your age:<br />
                            16<br />
                            You are not eligible to vote!<br />
                            Enter your age:<br />
                            7<br />
                            You are not eligible to vote!<br />
                            Enter your age:<br />
                            22<br />
                            You are eligible to vote!</p><br /><br />

                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Which keyword can be used for coming out of recursion ?", a: "break" },
                { q: "Which loop is gauranteed to execute at leat one time ?", a: "do while" },
                { q: "do-while loop terminated when conditional expression returns?", a: "zero" },
                { q: `how many times the loop prints the string 'hello': for(i=1;i<=50;i++){printf("hello")} ?`, a: "50" },
                { q: "Which loop is best for traversing multi-dimentional array?", a: "nested loop" }
            ]
            break;
        case 'Array And Pointers Of C++':
            name = 'Array And Pointers Of C++';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>Arrays</p>
                        <p>Like other programming languages, <br />
                            array in C++ is a group of similar types of elements that have contiguous memory location.</p>
                        <p>In C++ std::array is a container that encapsulates fixed size arrays.<br />
                            In C++, array index starts from 0. We can store only fixed set of elements in C++ array.</p>
                        <br />
                        <p>A collection of related data items stored in adjacent memory places is referred to <br />
                            as an array in the C/C++ programming language or any other programming language for that matter.<br />
                            Elements of an array can be accessed arbitrarily using its indices. They can be used to<br />
                            store a collection of any type of primitive data type, including int, float, double, char, etc.<br />
                            An array in C/C++ can also store derived data types like structures, pointers,<br />
                            and other data types, which is an addition.
                            <br /><br />The array representation in a picture is provided below.</p>
                        <img src='https://static.javatpoint.com/cpp/images/c-array1.png' style={{ height: "300px", width: "80%" }} />

                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <p>Types of arrays in c++</p>
                        <p>There are 2 types of arrays in C++ programming:</p><br />
                        <p>1. Single Dimensional Array</p>
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
int main()  
{  
 int arr[5]={10, 0, 20, 0, 30};  //creating and initializing array    
        //traversing array    
        for (int i = 0; i < 5; i++)    
        {    
            cout<<arr[i]<<"\n";    
        }    
}                        `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>10
                            <br />
                            0
                            <br />
                            20
                            <br />
                            0
                            <br />
                            30</p><br /><br />

                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>Types of arrays in c++</p>
                        <p>2. Multidimensional Arrays</p>
                        <p>The multidimensional array is also known as rectangular arrays in C++.<br />
                            It can be two dimensional or three dimensional. <br />
                            The data is stored in tabular form (row ∗ column) which is also known as matrix.</p>
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
int main()  
{  
  int test[3][3];  //declaration of 2D array   
    test[0][0]=5;  //initialization   
    test[0][1]=10;   
    test[1][1]=15;  
    test[1][2]=20;  
    test[2][0]=30;  
    test[2][2]=10;  
    //traversal    
    for(int i = 0; i < 3; ++i)  
    {  
        for(int j = 0; j < 3; ++j)  
        {  
            cout<< test[i][j]<<" ";  
        }  
        cout<<"\n"; //new line at each row   
    }  
    return 0;  
}          `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>
                            5  10  0 <br />
                            0 15 20 <br />
                            30 0 10
                        </p><br /><br />

                    </div>
                },

                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>Pointers</p>
                        <p>The pointer in C++ language is a variable, it is also known as <br />
                            locator or indicator that points to an address of a value. <br />
                        </p>
                        <p>
                            The symbol of an address is represented by a pointer. <br />
                            In addition to creating and modifying dynamic data structures, they allow programs<br />
                            to emulate call-by-reference. One of the principal applications of pointers is<br />
                            iterating through the components of arrays or other data structures. <br />
                            The pointer variable that refers to the same data type as the variable<br />
                            you're dealing with has the address of that variable set to it (such as an int or string)
                        </p>

                        <p>Syntax:</p>
                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`datatype *var_name;   
int *ptr;   // ptr can point to an address which holds int data   `}
                                </pre>
                            </code>
                        </div>

                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <p>How to use a pointer?</p>
                        <p>1. Establish a pointer variable.</p>
                        <p>2. employing the unary operator (&), which yields the address of the variable,<br />
                            to assign a pointer to a variable's address.</p>
                        <p>3. Using the unary operator (*), which gives the variable's value<br />
                            at the address provided by its argument, one can access the value stored in an address.</p>
                        <p>Since the data type knows how many bytes the information is held in, <br />
                            we associate it with a reference. The size of the data type to which a pointer <br />
                            points is added when we increment a pointer.</p><br />
                        <img src='https://static.javatpoint.com/cpp/images/cpp-pointers1.png' style={{ height: "200px", width: "40%" }} />

                    </div>
                },
                {
                    value: "Case6", data: <div className='case-div'>
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
int main()  
{  
int number=30;    
int ∗   p;      
p=&number;//stores the address of number variable    
cout<<"Address of number variable is:"<<&number<<endl;    
cout<<"Address of p variable is:"<<p<<endl;    
cout<<"Value of p variable is:"<<*p<<endl;    
   return 0;  
}            `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>
                            Address of number variable is:0x7ffccc8724c4<br />
                            Address of p variable is:0x7ffccc8724c4<br />
                            Value of p variable is:30
                        </p><br /><br />
                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },

            ];
            ques = [
                { q: "Create a pointer with name ptn and store the value of int city=4 ?", a: "int *ptn=&city" },
                { q: "Create a pointer with name fptn and store the value of float marks=3.54 ?", a: "float *fptn=&marks" },
                { q: "Create a pointer with name Char and store the value of int letter='A' ?", a: "char *Char=&letter" },
                { q: "Create the array with name 'alphabet' and store the elements a,b,c,d and e", a: "int alphabet={a,b,c,d,e}"},
                { q: "Create the array with name 'CodeBud' and store the elements c,o,d,e,b,u and d", a: "char CodeBud={c,o,d,e,b,u,d}"},
                { q: "Create the array with name 'Marks' and store the elements 25,6 , 31,4, 91.6 and 72.70,", a: "float Marks={25.6,31.4,72.70}"},
            ]
            break;

        case 'Functions Of C++':
            name = 'Functions Of C++';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div' >
                            <p>The function in C++ language is also known as procedure or subroutine in other programming languages.</p>
                            <p>To perform any task, we can create function. A function can be called many times. <br />It provides modularity and code reusability.</p>
                            <p>Types of Functions</p>
                            <p>1. Library Functions: are the functions which are declared in the C++ header files such<br />
                                as ceil(x), cos(x), exp(x), etc.</p>
                            <p>2. User-defined functions: are the functions which are created by the C++ programmer, <br></br>
                                so that he/she can use it many times. It reduces complexity of a big program and optimizes the code.<p>
                                    <br></br>
                                    <p>Declaration of Functions
                                        <br />
                                    </p>
                                    Syntax:
                                </p>
                                <div className='code-block'>
                                    <code>
                                        <pre>
                                            {`return_type function_name(data_type parameter...)  
{    
//code to be executed    
}  `}
                                        </pre>
                                    </code>
                                </div>
                            </p>
                        </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <p>Here is the program of it</p>
                        <div className='code-block'><code><pre>{`#include <iostream>  
using namespace std;  
void func() {    
   static int i=0; //static variable    
   int j=0; //local variable    
   i++;    
   j++;    
   cout<<"i=" << i<<" and j=" <<j<<endl;    
}    
int main()  
{  
 func();    
 func();    
 func();    
}  `}</pre></code></div>
                        <br /><p>Output:</p>
                        <p>i= 1 and j= 1<br />
                            i= 2 and j= 1<br />
                            i= 3 and j= 1<br />
                        </p>           </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>Calling the function</p>
                        <p>There are two ways to pass value or data to function in C language: <br />
                            call by value and call by reference. Original value is not modified in <br />
                            call by value but it is modified in call by reference.</p>
                        <img src='https://static.javatpoint.com/cpp/images/call-by-value-and-call-by-reference-in-cpp1.png' style={{ height: "400px", width: "40%" }} />

                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>Call by value in C++</p>
                        <p>In call by value, original value is not modified.</p>
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include <iostream>  
using namespace std;  
void change(int data);  
int main()  
{  
int data = 3;  
change(data);  
cout << "Value of the data is: " << data<< endl;  
return 0;  
}  
void change(int data)  
{  
data = 5;  
}          `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>
                            Value of the data is: 3
                        </p>

                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <p>Call by reference in C++</p>
                        <p>In call by reference, original value is modified because we pass reference (address).</p>
                        <p>Here is the complete program of it</p>

                        <div className='code-block'>
                            <code>
                                <pre>
                                    {`#include<iostream>  
using namespace std;    
void swap(int *x, int *y)  
{  
 int swap;  
 swap=*x;  
 *x=*y;  
 *y=swap;  
}  
int main()   
{    
 int x=500, y=100;    
 swap(&x, &y);  // passing value to function  
 cout<<"Value of x is: "<<x<<endl;  
 cout<<"Value of y is: "<<y<<endl;  
 return 0;  
}              `}
                                </pre>
                            </code>
                        </div>
                        <br />
                        <p>Output:-</p>
                        <p>
                            Value of x is: 100<br />
                            Value of y is: 500
                        </p>

                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Create a function with name Playing with blank paranthesis and code?", a: "function Playing(){}" },
                { q: "What is the datatype of parameter here: function alpha(int a, int b)", a: "int" },
                { q: "What is the name of parameter here: function Grades(char grade)", a: "grade" },
                { q: "What is the name of function here: function Score(float marks)", a: "Score" },
                { q: "How many no. of agruments are here in: function eating(fload dog, char char)", a: "0" },
            ]
            break;

        case 'OOPS':
            name = 'OOPS';
            cases = [
                {
                    value: 'Case1', data:
                     <div className='case-div'>
                        <p>The major purpose of C++ programming is to introduce the concept of object <br />
                            orientation to the C programming language.</p>
                        <p>Object Oriented Programming is a paradigm that provides many concepts such as <br />
                            inheritance, data binding, polymorphism etc.</p><br></br>
                        <p>OOPs(Object Oriented Programming System) </p>
                        <p>Object means a real word entity such as pen, chair, table etc. Object-Oriented<br />
                            Programming is a methodology or paradigm to design a program using classes and objects. <br>
                            </br>It simplifies the software development and maintenance by providing some concepts:</p>


                    </div>
                },
                {
                    value: 'Case2', data:
                     <div className='case-div'>
                        <p>C++ Object and Class</p>
                        <p>In C++, Object is a real world entity, for example, chair, car, pen, mobile, laptop etc.                    </p>
                        <p>In C++, class is a group of similar objects. It is a template from which objects are created. <br />It can have fields, methods, constructors etc.</p>
                        <p>Here is an example:</p>
                        <div className='code-block'><code><pre>{`#include <iostream>  
class Student {  
    public:  
    int id;//data member (also instance variable)      
    string name;//data member(also instance variable)      
};  
int main() {  
    Student s1; //creating an object of Student   
    s1.id = 201;    
    s1.name = "Sonoo Jaiswal";   
    cout<<s1.id<<endl;  
    out<<s1.name<<endl;  
    return 0;  
}  `}</pre></code>

                        </div>
                        <p>Output:</p>
                        <p>201<br />
                            Sonoo Jaiswal</p>
                    </div>
                },
                {
                    value: 'Case3', data:
                     <div className='case-div'>
                        <p>Inheritance</p>
                        <p>When one object acquires all the properties and behaviours of parent object<br />
                            i.e. known as inheritance. It provides code reusability. <br />
                            It is used to achieve runtime polymorphism.</p><br />
                        <p>1. Sub class - Subclass or Derived Class refers to a class that<br />
                            receives properties from another class.</p><br />
                        <p>2. Super class - The term "Base Class" or "Super Class" refers to <br />
                            the class from which a subclass inherits its properties.</p><br />
                        <p>3. Reusability - As a result, when we wish to create a new class, <br></br>
                            but an existing class already contains some of the code we need,<br />
                            we can generate our new class from the old class thanks to inheritance. <br></br>
                            This allows us to utilize the fields and methods of the pre-existing class.</p>
                    </div>
                },
                {
                    value: 'Case4', data:
                     <div className='case-div'>
                        <p>Polymorphism</p>
                        <p>When one task is performed by different ways i.e. known as polymorphism. <br></br>
                            For example: to convince the customer differently, to draw something e.g. <br />
                            shape or rectangle etc.</p><br />
                        <p>Different situations may cause an operation to behave differently. The type of data <br />
                            utilized in the operation determines the behavior.</p>
                    </div>
                },
                {
                    value: 'Case5', data:
                     <div className='case-div'>
                        <p>Abstraction</p>
                        <p>Hiding internal details and showing functionality is known as abstraction.<br />
                            Data abstraction is the process of exposing to the outside world only the information that is<br />
                            absolutely necessary while concealing implementation or background information.<br />
                            For example: phone call, we don't know the internal processing.</p>
                        <br />
                        <p>In C++, we use abstract class and interface to achieve abstraction.</p>
                        <br></br>
                        <br></br>
                        <p>Encapsulation</p>
                        <p>Binding (or wrapping) code and data together into a single unit is known as encapsulation. <br />
                            For example: capsule, it is wrapped with different medicines.</p>
                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Which oop concept hides the unnecessary data from the user ?", a: "Abstraction" },
                { q: "Which oop concept stands for multiple forms?", a: "Polymorphism" },
                { q: "Which oop concept passes the characteristics from class to another ?", a: "Inheritance" },
                { q: "Which oop concept helps to join the data?", a: "Encapsulation" },
                { q: "Create the object for the class named planet ?", a: "Anthoni" },
                {q:"What is the name of the class here.. Age a1;", a:"Age"}
            ]
            break;

        case 'Encapsulation':
            name = 'Encapsulation';
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


        case 'Abstraction':
            name = 'Abstraction';
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


        case 'Inheritance':
            name = 'Inheritance';
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

        case 'Polymorphism':
            name = 'Polymorphism';
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


        case 'File handling':
            name = 'File handling';
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


        case 'Exception handling':
            name = 'Exception handling';
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