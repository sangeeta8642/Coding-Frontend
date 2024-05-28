// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "CSharp", complete = false;
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


        case 'Introduction to Cs Programming':
            name = 'Introduction to Cs Programming';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>What is C#?+</p>
                            <p>C# is pronounced "C-Sharp".</p>
                            <p>It is an object-oriented programming language created by Microsoft that runs on the .NET Framework.</p>

                            <p>C# has roots from the C family, and the language is close to other popular languages like C++ and Java.</p>
                            <p>The first version was released in year 2002. The latest version, C# 12, was released in November 2023.</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>C# is used for:
                                Mobile applications<br></br>
                                Desktop applications<br></br>
                                Web applications<br></br>
                                Web services<br></br>
                                Web sites<br></br>
                                Games<br></br>
                                VR<br></br>
                                Database applications<br></br>
                                And much, much more!
                            </p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>C# IDE</p>
                            <p>The easiest way to get started with C# is to use an IDE.</p>
                            <p>An IDE (Integrated Development Environment) is used to edit and compile code.</p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>C# IDE</p>
                            <p>Program.cs</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                // { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What is the pronunciation of C#?", a: "C-Sharp" },
                { q: "Who created the C# programming language?", a: "Microsoft" },
                { q: "What family of languages does C# have roots from?", a: "C" },
                { q: "What does IDE stand for?", a: "Integrated Development Environment" },
                { q: "What is the latest version of C# as of November 2023?", a: "12" }
            ]
            break;


        case 'Basics of Cs':
            name = 'Basics of Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>C# Syntax</p>
                            <p>It means that we can use classes from the System namespace.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`using System`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>It is used to organize your code, and it is a container for classes and other namespaces.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`namespace`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>The curly braces marks the beginning and the end of a block of code.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`{}`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>It is a container for data and methods, which brings functionality to your program. Every line of code that runs in C# must be inside a class. In our example, we named the class Program.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`class`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>C# Syntax</p>
                            <p>Another thing that always appear in a C# program is Main the method. Any code inside its curly brackets will be executed</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`Main`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Console is a class of the System namespace, which has a WriteLine() method that is used to output/print text.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`WriteLine()`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Every C# statement ends with a semicolon ;.</p>


                            <p>C# is case-sensitive; "MyClass" and "myclass" have different meaning.</p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>C# Output</p>
                            <p>To output values or print text in C#, you can use the WriteLine() method:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`Console.WriteLine("Hello World!");`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>You can add as many WriteLine() methods as you want. Note that it will add a new line for each method:<br></br>
                                Note that it will add a new line for each method:
                            </p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>The Write Method</p>
                            <p>There is also a Write() method, which is similar to WriteLine().<br></br>

                                The only difference is that it does not insert a new line at the end of the output:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`Console.Write("Hello World! ");
Console.Write("I will print on the same line.");`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>C# Comments</p>
                            <p>Comments can be used to explain C# code, and to make it more readable.<br></br>

                                It can also be used to prevent execution when testing alternative code.</p>
                            <p>Single-line Comments</p>
                            <p>Single-line comments start with two forward slashes (//).</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`// This is a comment
Console.WriteLine("Hello World!");`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>C# Multi-line Comments</p>
                            <p>Multi-line comments start with /* and ends with */.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`/* The code below will print the words Hello World
to the screen, and it is amazing */
Console.WriteLine("Hello World!"); `}
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
                { q: "How do single-line comments begin in C#", a: "//" },
                { q: "What is the alternative method to WriteLine() in C# that doesn't insert a new line?", a: "Write()" },
                { q: "Which method in the Console class is used to output text in C# with a new line?", a: " WriteLine()" },
                { q: "In C#, which method is executed first in a program?", a: "Main" },
                { q: "What marks the beginning and end of a block of code in C#?", a: "{}" }
            ]
            break;


        case 'Variables and Data Types in Cs':
            name = 'Variables and Data Types in Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>C#  Variables</p>
                            <p>Variables are containers for storing data values.</p>
                            <p>In C#, there are different types of variables (defined with different keywords), for example:</p>
                            <p>int - stores integers (whole numbers), without decimals, such as 123 or -123<br></br>
                                double - stores floating point numbers, with decimals, such as 19.99 or -19.99<br></br>
                                char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes<br></br>
                                string - stores text, such as "Hello World". String values are surrounded by double quotes<br></br>
                                bool - stores values with two states: true or false<br></br>
                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`/* The code below will print the words Hello World
to the screen, and it is amazing */
Console.WriteLine("Hello World!"); `}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Declaring (Creating) Variables<br></br>
                                To create a variable, you must specify the type and assign it a value:</p>
                            <p>Syntax:</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`type variableName = value; `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`string name = "Joshi";
Console.WriteLine(name); 
int myNum = 15;
Console.WriteLine(myNum);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output: <br></br>
                                Joshi
                                15
                            </p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>C# Data Types<br></br>
                                a variable in C# must be a specified data type:<br></br>
                            </p>
                            <p>Example</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int myNum = 5;     // Integer (whole number)
double myDoubleNum = 5.99D;  // Floating point number
char myLetter = 'D';         // Character `}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>A data type specifies the size and type of variable values.<br></br>
                                It is important to use the correct data type for the corresponding variable; to avoid errors, to save time and memory.<br></br>
                                The most common data types are:
                            </p>



                            <p>
                                <pre>
                                    {`
DataType        Size       Description
int	            4 bytes    Stores whole numbers from -2,147,483,648 to 2,147,483,647
long	        8 bytes    Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
float	        4 bytes    Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
double	        8 bytes    Stores fractional numbers. Sufficient for storing 15 decimal digits
bool	        1 bit      Stores true or false values
char            2 bytes    Stores a single character/letter, surrounded by single quotes
string          2 bytes    Stores a sequence of characters, surrounded by double quotes
                per 
                character `}
                                </pre>
                            </p>

                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int myNum = 100000; //Integer Types
long myNum = 15000000000L;  //long data type 
float myNum = 5.75F;  //Floating Point Types
double myNum = 19.99D;  //Double Type`}
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
                { q: "What data type stores whole numbers up to 9 quintillion in C?", a: " long" },
                { q: " Which data type is used to store fractional numbers with precision up to 15 decimal digits?", a: "double" },
                { q: "What data type is appropriate for storing true or false values in C?", a: "bool" },
                { q: " In C, what data type is used to represent a single character enclosed in single quotes?", a: "char" },
                { q: "Which data type in C is used to store sequences of characters enclosed in double quotes?", a: "string" }
            ]
            break;


        case 'Constants in Cs':
            name = 'Constants in Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>Constants:</p>
                            <p>In C#, the const keyword is used to define constants, which are values that remain the same throughout the execution of a program. </p>
                            <p> Here are some key points about const:</p>
                            <p>1. Declaration: Constants are declared using the const keyword followed by the data type and the constant's name. They must be initialized with a value at the time of declaration.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` const int daysInWeek = 7;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>2. Initialization: Constants must be initialized with a value when they are declared. Once initialized, their value cannot be changed throughout the execution of the program.
                            </p>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>3. Scope: Constants have a scope similar to variables. They can be declared within a method, class, or even at the namespace level. The scope of a constant determines where it can be accessed in the program.
                                <br></br>
                                4. Usage: Constants are useful for storing values that are known at compile-time and are not expected to change during the program's execution. Common examples include mathematical constants (like pi), fixed values (like the number of days in a week), and constant configuration values.</p>


                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>5. Compile-time Constants: Constants are resolved at compile-time, which means that their values are substituted directly into the code wherever they are used. This can improve performance compared to variables whose values are determined at runtime.</p>
                            <p>6. Naming Convention*: By convention, constant names are typically written in uppercase letters, with underscores separating words, to distinguish them from regular variables.</p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Here's a practical example illustrating the use of constants:</p>


                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`using System;

class Program
{
    const double Pi = 3.14159;

    static void Main()
    {
        const int daysInWeek = 7;
        const string appName = "MyApp";

        Console.WriteLine("There are " + daysInWeek + " days in a week.");
        Console.WriteLine("The value of Pi is: " + Pi);
        Console.WriteLine("Welcome to " + appName);
    }
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>In this example, daysInWeek, Pi, and appName are all constants. They are initialized with their respective values and cannot be changed during the program's execution.</p>
                            <p>Output:</p>
                            <p>There are 7 days in a week.<br></br>
                                The value of Pi is: 3.14159<br></br>
                                Welcome to MyApp</p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                // {value: 'Case5', data:},
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What keyword is used to define constants in C#?", a: "const" },
                { q: "What convention is typically followed for naming constants in C#?", a: "Uppercase" },
                { q: "What distinguishes constant names from regular variables in C#?", a: "Uppercase" },
                { q: "What must be provided when declaring a constant in C#?", a: "Initialization" },
                { q: "What remains constant throughout the execution of a program in C#?", a: "values" }
            ]
            break;

        case 'Operators in Cs':
            name = 'Operators in Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>Operators</p>
                            <p>Operators are used to perform operations on variables and values.</p>
                            <p>the + operator is often used to add together two values, it can also be used to add together a variable and a value, or a variable and another variable:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int sum1 = 100 + 50;    // 150 (100 + 50)
int sum2 = sum1 + 250;    // 400 (150 + 250)
int sum3 = sum2 + sum2;   // 800 (400 + 400)`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Arithmetic Operators</p>
                            <table >
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
                                        {`using System;

class Program
{
   static void Main(string[] args)
   {
       int a = 10;
       int b = 5;

       // Addition (+)
       int additionResult = a + b;
       Console.WriteLine("Addition Result: " + additionResult);

       // Subtraction (-)
       int subtractionResult = a - b;
       Console.WriteLine("Subtraction Result: " + subtractionResult);

       // Multiplication (*)
       int multiplicationResult = a * b;
       Console.WriteLine("Multiplication Result: " + multiplicationResult);

       // Division (/)
       int divisionResult = a / b;
       Console.WriteLine("Division Result: " + divisionResult);

       // Modulus (Remainder) (%)
       int modulusResult = a % b;
       Console.WriteLine("Modulus Result: " + modulusResult);

       // Increment (++)
       int x = 5;
       x++;
       Console.WriteLine("Increment Result: " + x);

       // Decrement (--)
       int y = 5;
       y--;
       Console.WriteLine("Decrement Result: " + y);
   }
}
`}
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
                            <table  >

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
                                        {`using System;

class Program
{
    static void Main(string[] args)
    {
        int a = 10;
        int b;

        // Assignment operator (=)
        b = a;
        Console.WriteLine("Assignment Operator Result (b): " + b);

        // Addition assignment (+=)
        b += 5;
        Console.WriteLine("Addition Assignment Operator Result (b += 5): " + b);

        // Subtraction assignment (-=)
        b -= 3;
        Console.WriteLine("Subtraction Assignment Operator Result (b -= 3): " + b);

        // Multiplication assignment (*=)
        b *= 2;
        Console.WriteLine("Multiplication Assignment Operator Result (b *= 2): " + b);

        // Division assignment (/=)
        b /= 4;
        Console.WriteLine("Division Assignment Operator Result (b /= 4): " + b);

        // Modulus assignment (%=)
        b %= 2;
        Console.WriteLine("Modulus Assignment Operator Result (b %= 2): " + b);

        // Bitwise AND assignment (&=)
        int c = 5;
        c &= 3;
        Console.WriteLine("Bitwise AND Assignment Operator Result (c &= 3): " + c);

        // Bitwise OR assignment (|=)
        c = 5;
        c |= 3;
        Console.WriteLine("Bitwise OR Assignment Operator Result (c |= 3): " + c);

        // Bitwise XOR assignment (^=)
        c = 5;
        c ^= 3;
        Console.WriteLine("Bitwise XOR Assignment Operator Result (c ^= 3): " + c);

        // Left shift assignment (<<=)
        c = 5;
        c <<= 2;
        Console.WriteLine("Left Shift Assignment Operator Result (c <<= 2): " + c);

        // Right shift assignment (>>=)
        c = 5;
        c >>= 1;
        Console.WriteLine("Right Shift Assignment Operator Result (c >>= 1): " + c);
    }
}
`}
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
                                        {`using System;

class Program
{
    static void Main(string[] args)
    {
        int a = 10;
        int b = 5;

        // Equal to (==)
        Console.WriteLine("Equal to (a == b): " + (a == b));

        // Not equal to (!=)
        Console.WriteLine("Not equal to (a != b): " + (a != b));

        // Greater than (>)
        Console.WriteLine("Greater than (a > b): " + (a > b));

        // Less than (<)
        Console.WriteLine("Less than (a < b): " + (a < b));

        // Greater than or equal to (>=)
        Console.WriteLine("Greater than or equal to (a >= b): " + (a >= b));

        // Less than or equal to (<=)
        Console.WriteLine("Less than or equal to (a <= b): " + (a <= b));
    }
}
`}
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
                                        {`using System;

class Program
{
    static void Main(string[] args)
    {
        bool a = true;
        bool b = false;

        // Logical AND (&&)
        Console.WriteLine("Logical AND (a && b): " + (a && b));

        // Logical OR (||)
        Console.WriteLine("Logical OR (a || b): " + (a || b));

        // Logical NOT (!)
        Console.WriteLine("Logical NOT (!a): " + (!a));

    }
}
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
                { q: "What operator is used to add two numbers together in C#?", a: "+" },
                { q: "Which operator is used to compare if two values are equal in C#?", a: "==" },
                { q: "Which logical operator in C# returns true only if both operands are true?", a: "&&" },
                { q: "What is the result of the logical AND operator (&&) when one operand is false and the other is true?", a: "false" },
                { q: "Which operator in C# increments the value of a variable by 1?", a: "++" }
            ]
            break;


        case 'Control Structures in Cs':
            name = 'Control Structures in Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>C# Switch Statements</p>
                            <p>Use the switch statement to select one of many code blocks to be executed.logic between variables or values</p>
                            <p>Syntax:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`switch(expression) 
{
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
    break;
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>This is how it works:<br></br>

                                The switch expression is evaluated once<br></br>
                                The value of the expression is compared with the values of each case<br></br>
                                If there is a match, the associated block of code is executed<br></br>
                                The break and default keywords will be described later in this chapter<br></br>
                                The example below uses the weekday number to calculate the weekday name:<br></br>

                                Example:</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int day = 4;
switch (day) 
{
  case 1:
    Console.WriteLine("Monday");
    break;
  case 2:
    Console.WriteLine("Tuesday");
    break;
  case 3:
    Console.WriteLine("Wednesday");
    break;
  case 4:
    Console.WriteLine("Thursday");
    break;
  case 5:
    Console.WriteLine("Friday");
    break;
  case 6:
    Console.WriteLine("Saturday");
    break;
  case 7:
    Console.WriteLine("Sunday");
    break;
}
// Outputs "Thursday" (day 4)
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Loops<br></br>
                                Loops can execute a block of code as long as a specified condition is reached.<br></br>

                                Loops are handy because they save time, reduce errors, and they make code more readable.</p>
                            <p>C# While Loop<br></br>
                                It checks the condition at the beginning of each iteration<br></br>

                                The while loop loops through a block of code as long as a specified condition is True:<br></br>

                                Syntax</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`while (condition) 
{
  // code block to be executed
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>In the example below, the code in the loop will run, over and over again, as long as a variable (i) is less than 5:<br></br>

                                Example</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int i = 0;
while (i < 5) 
{
  Console.WriteLine(i);
  i++;
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Note: Do not forget to increase the variable used in the condition, otherwise the loop will never end!</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>The Do/While Loop<br></br>
                                The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.<br></br>

                                Syntax</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`do 
{
  // code block to be executed
}
while (condition);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:<br></br>

                                Example</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int i = 0;
do 
{
  Console.WriteLine(i);
  i++;
}
while (i < 5);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Note: Do not forget to increase the variable used in the condition, otherwise the loop will never end!</p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>C# For Loop<br></br>
                                When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:<br></br>

                                Syntax</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`for (statement 1; statement 2; statement 3) 
{
  // code block to be executed
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Statement 1 is executed (one time) before the execution of the code block.<br></br>

                                Statement 2 defines the condition for executing the code block.<br></br>

                                Statement 3 is executed (every time) after the code block has been executed.<br></br>

                                The example below will print the numbers 0 to 4:<br></br>

                                Example</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`for (int i = 0; i < 5; i++) 
{
  Console.WriteLine(i);
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Example explained<br></br>
                                Statement 1 sets a variable before the loop starts (int i = 0).<br></br>

                                Statement 2 defines the condition for the loop to run (i must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.<br></br>

                                Statement 3 increases a value (i++) each time the code block in the loop has been executed.</p>
                        </div>
                },
                {
                    value: 'Case5', data:

                        <div className='case-div'>
                            <p>C# Break and Continue<br></br>
                                C# Break:<br></br>

                                You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch statement.<br></br>

                                The break statement can also be used to jump out of a loop.<br></br>

                                This example jumps out of the loop when i is equal to 4:</p>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`for (int i = 0; i < 10; i++) 
{
  if (i == 4) 
  {
    break;
  }
  Console.WriteLine(i);
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>C# Continue:<br></br>

                                The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.<br></br>

                                This example skips the value of 4:<br></br>

                                Example</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`for (int i = 0; i < 10; i++) 
{
  if (i == 4) 
  {
    continue;
  }
  Console.WriteLine(i);
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Break and Continue in While Loop<br></br>
                                You can also use break and continue in while loops:<br></br>

                                Break Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int i = 0;
while (i < 10) 
{
  Console.WriteLine(i);
  i++;
  if (i == 4) 
  {
    break;
  }
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Continue Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int i = 0;
while (i < 10) 
{
  if (i == 4) 
  {
    i++;
    continue;
  }
  Console.WriteLine(i);
  i++;
}`}
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
                { q: "What keyword is used to start a switch statement in C#?", a: "switch" },
                { q: "What statement in C# is used to exit a loop prematurely?", a: "break" },
                { q: "In C#, what keyword is used to skip the current iteration of a loop and move to the next one?", a: "continue" },
                { q: "What loop in C# checks the condition at the beginning of each iteration?", a: "while" },
                { q: "4What is your name ?Which loop in C# guarantees that the loop body will execute at least once, even if the condition is false initially?", a: "do" }
            ]
            break;


        case 'Methods and Functions in Cs':
            name = 'Methods and Functions in Csn';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>C# Methods</p>
                            <p>A method is a block of code which only runs when it is called.<br></br>

                                You can pass data, known as parameters, into a method.<br></br>

                                Methods are used to perform certain actions, and they are also known as functions.<br></br>

                                Why use methods? To reuse code: define the code once, and use it many times.

                            </p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Create a Method<br></br>
                                A method is defined with the name of the method, followed by parentheses ().<br></br>
                                C# provides some pre-defined methods, which you already are familiar with, such as Main(), but you can also create your own methods to perform certain actions:<br></br>
                                ExampleGet your own C# Server<br></br>
                                Create a method inside the Program class:
                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`class Program
{
  static void MyMethod() 
  {
    // code to be executed
  }
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Example Explained<br></br>
                                MyMethod() is the name of the method<br></br>
                                static means that the method belongs to the Program class and not an object of the Program class. <br></br>
                                void means that this method does not have a return value. <br></br>
                                Note: In C#, it is good practice to start with an uppercase letter when naming methods, as it makes the code easier to read.
                            </p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Call a Method </p>
                            <p>To call (execute) a method, write the method's name followed by two parentheses () and a semicolon;<br></br>

                                In the following example, MyMethod() is used to print a text (the action), when it is called:<br></br>

                                Example:<br></br>
                                Inside Main(), call the myMethod() method:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static void MyMethod() 
{
  Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
  MyMethod();
}
`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>
                                A method can be called multiple times:<br></br>
                                Example:
                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static void MyMethod() 
{
  Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
  MyMethod();
  MyMethod();
  MyMethod();
}

// I just got executed!
// I just got executed!
// I just got executed!
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
                { q: "What is the name given to the data passed into a method?", a: "Parameters" },
                { q: "What is another name for methods in C#?", a: "Functions" },
                { q: "What keyword is used to define a method in C#?", a: "static" },
                { q: "What is considered good practice when naming methods in C#?", a: "Uppercase" },
                { q: "Can a method have multiple parameters in C#?", a: "Yes" }
            ]
            break;

        case 'Parameters and Arguments in Cs':
            name = 'Parameters and Arguments in Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Parameters and Arguments:<br></br>
                                Information can be passed to methods as parameter. <br></br>
                                Parameters act as variables inside the method.<br></br>

                                They are specified after the method name, inside the parentheses.<br></br>
                                You can add as many parameters as you want, just separate them with a comma.<br></br>

                                The following example has a method that takes a string called fname as parameter.<br></br>
                                When the method is called, we pass along a first name, which is used inside the method to print the full namee</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static void MyMethod(string fname) 
{
  Console.WriteLine(fname + " Refsnes");
}

static void Main(string[] args)
{
  MyMethod("Liam");
  MyMethod("Jenny");
  MyMethod("Anja");
}

// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>When a parameter is passed to the method, it is called an argument. So, from the example above: fname is a parameter, while Liam, Jenny and Anja are arguments.</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Multiple Parameters:<br></br>
                                You can have as many parameters as you like, just separate them with commas:<br></br>
                                Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static void MyMethod(string fname, int age) 
{
  Console.WriteLine(fname + " is " + age);
}

static void Main(string[] args)
{
  MyMethod("Liam", 5);
  MyMethod("Jenny", 8);
  MyMethod("Anja", 31);
}

// Liam is 5
// Jenny is 8
// Anja is 31
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Note: that when you are working with multiple parameters, the method call must have the same number of arguments as there are parameters, and the arguments must be passed in the same order.

                            </p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Default Parameter Value<br></br>
                                You can also use a default parameter value, by using the equals sign (=).<br></br>

                                If we call the method without an argument, it uses the default value ("Norway"):<br></br>
                                Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static void MyMethod(string country = "Norway") 
{
  Console.WriteLine(country);
}

static void Main(string[] args)
{
  MyMethod("Sweden");
  MyMethod("India");
  MyMethod();
  MyMethod("USA");
}

// Sweden
// India
// Norway
// USA
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>A parameter with a default value, is often known as an "optional parameter". From the example above, country is an optional parameter and "Norway" is the default value.</p>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Return Values<br></br>
                                In the previous page, we used the void keyword in all examples, which indicates that the method should not return a value.<br></br>

                                If you want the method to return a value, you can use a primitive data type (such as int or double) instead of void, and use the return keyword inside the method:

                                Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static int MyMethod(int x) 
{
  return 5 + x;
}

static void Main(string[] args)
{
  Console.WriteLine(MyMethod(3));
}

// Outputs 8 (5 + 3)`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>This example returns the sum of a method's two parameters:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static int MyMethod(int x, int y) 
{
  return x + y;
}

static void Main(string[] args)
{
  Console.WriteLine(MyMethod(5, 3));
}

// Outputs 8 (5 + 3)`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>You can also store the result in a variable (recommended, as it is easier to read and maintain):
                                <br></br>
                                Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static int MyMethod(int x, int y) 
{
  return x + y;
}

static void Main(string[] args)
{
  int z = MyMethod(5, 3);
  Console.WriteLine(z);
}

// Outputs 8 (5 + 3)`}
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
                { q: "0What is your name ?If a method is not supposed to return a value, what keyword is used in its declaration?", a: "void" },
                { q: "What is the term for the information passed to methods?", a: "Parameters" },
                { q: "What is used to separate multiple parameters in a method declaration?", a: "Comma" },
                { q: "What keyword is used to indicate that a method should return a value in C#?", a: "return" },
                { q: "What is another name for a parameter with a default value in C# ?", a: "Optional" }
            ]
            break;


        case 'Return Types in Cs':
            name = 'Return Types in Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p></p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {``}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
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

        case 'Scope and Lifetime of Variables in Cs':
            name = 'Scope and Lifetime of Variables in Cs';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p></p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {``}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                { value: 'Case2', data: 'DatatypesCase 2 data' },
                { value: 'Case3', data: 'DatatypesCase 3 data' },
                { value: 'Case4', data: 'DatatypesCase 4 data' },
                { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
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

        case 'Arrays and Collections in Cs':
            name = 'Arrays and Collections in Cs';
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

        case 'Strings and String Manipulation in Cs':
            name = 'Strings and String Manipulation in Cs';
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


        case 'OOPs in Cs':
            name = 'OOPs in Cs';
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


        case 'Classes and Objects in Cs':
            name = 'Classes and Objects in Cs';
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

        case 'Inheritance in Cs':
            name = 'Inheritance in Cs';
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


        case 'Polymorphism in Cs':
            name = 'Polymorphism in Cs';
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


        case 'Encapsulation in Cs':
            name = 'Encapsulation in Cs';
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

        case 'Abstraction in Cs':
            name = 'Abstraction in Cs';
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

        case 'Constructors and Destructors in Cs':
            name = 'Constructors and Destructors in Cs';
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

        case 'Properties and Indexers in Cs':
            name = 'Properties and Indexers in Cs';
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

        case 'Interfaces and Abstract Classes in Cs':
            name = 'Interfaces and Abstract Classes in Cs';
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

        case 'Enums in Cs':
            name = 'Enums in Cs';
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

        case 'Delegates and Events in Cs':
            name = 'Delegates and Events in Cs';
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

        case 'Exception Handling in Cs':
            name = 'Exception Handling in Cs';
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