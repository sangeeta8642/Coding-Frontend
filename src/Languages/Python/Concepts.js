// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "Python", complete = false;
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


        case 'Introduction to python':
            name = 'Introduction to python';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>What is Python?</p>
                            <p> Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
                            <p>It is used for:</p>
                            <p>web development (server-side),<br></br>
                                software development,<br></br>
                                mathematics,<br></br>
                                system scripting.</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>What can Python do?</p>

                            <p>Python can be used on a server to create web applications.<br></br>
                                Python can be used alongside software to create workflows.<br></br>
                                Python can connect to database systems. It can also read and modify files.<br></br>
                                Python can be used to handle big data and perform complex mathematics.</p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Why Python?</p>

                            <p>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).<br></br>
                                Python has a simple syntax similar to the English language.<br></br>
                                Python has syntax that allows developers to write programs with fewer lines than some other programming languages.<br></br>
                                Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</p>

                        </div>
                },

                // { value: 'Case4', data: 'DatatypesCase 4 data' },
                // { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Who created Python?", a: "Guido" },
                { q: "When was Python released?", a: "1991" },
                { q: "Where can Python be used for web development?", a: "Server-side" },
                { q: "What is Python's syntax similar to?", a: "English" },
                { q: "On which platforms does Python work?", a: "Mac, Linux, Raspberry Pi" }
            ]
            break;


        case 'Basics of python':
            name = 'Basics of python';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>First Python Program</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`print("Hello, World!")`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>In Python, print() is a built-in function used to display output. When you call print("Hello, World!"), you're telling Python to output the text "Hello, World!" to the console or standard output.</p>


                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Here's a breakdown of the syntax</p>

                            <p>print: This is the keyword in Python used to display output.<br></br>
                                "Hello, World!": This is the argument passed to the print() function. It's enclosed in double quotes " to indicate that it's a string, which is a sequence of characters. In this case, the string contains the text "Hello, World!".<br></br>
                                The parentheses () after print indicate that it's a function call, and any arguments to the function are enclosed within these parentheses.</p>


                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Here's a breakdown of the syntax</p>

                            <p>print: This is the keyword in Python used to display output.<br></br>
                                "Hello, World!": This is the argument passed to the print() function. It's enclosed in double quotes " to indicate that it's a string, which is a sequence of characters. In this case, the string contains the text "Hello, World!".<br></br>
                                The parentheses () after print indicate that it's a function call, and any arguments to the function are enclosed within these parentheses.</p>


                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Python Comments</p>

                            <p>Comments can be used to explain Python code.<br></br>
                                Comments can be used to explain Python code.<br></br>
                                Comments can be used to prevent execution when testing code.</p>
                            <p>Comments starts with a #, and Python will ignore them:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`#This is a comment
print("Hello, World!")`}
                                    </pre>
                                </code>
                            </div><br></br>


                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Multiline Comments</p>

                            <p>Python does not really have a syntax for multiline comments.<br></br>
                                To add a multiline comment you could insert a # for each line:<br></br>
                            </p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`#This is a comment
#written in
#more than just one line
print("Hello, World!")`}
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
                { q: "What is the built-in function used to display output in Python?", a: "print" },
                { q: "What symbol indicates the beginning of a comment in Python?", a: "#" },
                { q: "How do you denote a multiline comment in Python?", a: "#" },
                { q: "What follows the print keyword in a function call to indicate that it's a function?", a: "()" },
                { q: "How can you denote a single-line comment in Python?", a: "#" }
            ]
            break;


        case 'Memory and Variables':
            name = 'Memory and Variables';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>Memory and variables</p>
                            <p>In Python, variables are used to store references to objects in memory rather than the actual values themselves.</p>
                            <p>When you assign a value to a variable, you're essentially creating an object in memory and then creating a reference to that object with the variable name.
                            </p>
                            <p>Here's how it works:</p>
                            <p>Variable Assignment: When you assign a value to a variable, Python creates an object in memory to represent that value.
                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`x = 10`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Memory Allocation: Python allocates memory space for the object 10 and stores it in memory.</p>
                            <p>Variable Reference: The variable x now holds a reference to the memory location where the object 10 is stored.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`x ---> [Memory: 10]`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>Reassignment: If you reassign the variable, it points to a new object in memory.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {` x = 20`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Now, x points to the memory location where the object 20 is stored.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`  x ---> [Memory: 20]`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>Variables in Python are dynamically typed, meaning you don't need to explicitly declare the data type of a variable.</p>
                <p>Instead, the type of the variable is inferred at runtime based on the value assigned to it.</p>
                <p></p>
            </div>
            },
                //{ value: 'Case5', data: 'DatatypesCase 5 data' },
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


        case 'Datatypes in python':
            name = 'Datatypes in python';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Datatypes in python:</p>
                            <p>A data type is a classification that specifies the type of data that a variable can hold in computer programming.</p>
                            <p>In Python, common data types include:<br></br>
                                1. Integers (int): Whole numbers without decimal points.<br></br>
                                2. Floats (float): Numbers with decimal points or in exponential form.<br></br>
                                3. Strings (str): Sequences of characters, enclosed in single, double, or triple quotes.<br></br>
                                4. Booleans (bool): Represents True or False values.<br></br>
                                5. Lists (list): Ordered collection of items, mutable.<br></br>
                                6. Tuples (tuple): Ordered collection of items, immutable.<br></br>
                                7. Dictionaries (dict): Collection of key-value pairs.<br></br>
                                8. Sets (set): Unordered collection of unique items.
                            </p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Explanation of each data type with examples:</p>
                            <p>Integers (int): Whole numbers without decimal points.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`x = 10
   y = -5`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Floats (float): Numbers with decimal points or in exponential form</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` pi = 3.14
e = 2.71828`}
                                    </pre>
                                </code>
                            </div><br></br>


                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>

                            <p>Strings (str): Sequences of characters, enclosed in single, double, or triple quotes.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`message_single = 'Hello, world!'
   message_double = "Hello, world!"
   message_triple = '''Hello, world!'''`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Booleans (bool)*: Represents True or False values.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` is_raining = True
   is_sunny = False`}
                                    </pre>
                                </code>
                            </div><br></br>


                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>

                            <p>Lists (list): Ordered collection of items, mutable.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`numbers = [1, 2, 3, 4, 5]
   names = ['Alice', 'Bob', 'Charlie']`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Tuples (tuple)*: Ordered collection of items, immutable.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` point = (10, 20)
   colors = ('red', 'green', 'blue')`}
                                    </pre>
                                </code>
                            </div><br></br>


                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>

                            <p>Dictionaries (dict)*: Collection of key-value pairs.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`person = {'name': 'Alice', 'age': 30, 'city': 'New York'}`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>Sets (set)*: Unordered collection of unique items.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` unique_numbers = {1, 2, 3, 4, 5}
   vowels = {'a', 'e', 'i', 'o', 'u'}`}
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
                { q: "What Python data type represents whole numbers without decimal points?", a: "Integers" },
                { q: "Which Python data type represents numbers with decimal points or in exponential form?", a: "Floats" },
                { q: "What Python data type represents sequences of characters?", a: "String" },
                { q: "Which Python data type represents True or False values?", a: "Booleans" },
                { q: "What Python collection represents a collection of key-value pairs?", a: "Dictionaries" }
            ]
            break;

        case 'Operators in python':
            name = 'Operators in python';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p> Operators</p>
                            <p> operators are used to perform different types of mathematical and logical computations.</p>
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
                                        {`# Addition
a = 10
b = 5
addition_result = a + b
print("Addition:", addition_result)

# Subtraction
subtraction_result = a - b
print("Subtraction:", subtraction_result)

# Multiplication
multiplication_result = a * b
print("Multiplication:", multiplication_result)

# Division
division_result = a / b
print("Division:", division_result)

# Floor Division
floor_division_result = a // b
print("Floor Division:", floor_division_result)

# Modulus
modulus_result = a % b
print("Modulus:", modulus_result)

 `}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case2', data:
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
                                        {`# Assignment operator (=)
x = 5
print("x after assignment:", x)

# Addition assignment operator (+=)
x += 3
print("x after addition assignment:", x)

# Subtraction assignment operator (-=)
x -= 2
print("x after subtraction assignment:", x)

# Multiplication assignment operator (*=)
x *= 4
print("x after multiplication assignment:", x)

# Division assignment operator (/=)
x /= 2
print("x after division assignment:", x)

# Floor Division assignment operator (//=)
x //= 3
print("x after floor division assignment:", x)

# Modulus assignment operator (%=)
x %= 2
print("x after modulus assignment:", x)

# Exponentiation assignment operator (**=)
x **= 3
print("x after exponentiation assignment:", x)

# Bitwise AND assignment operator (&=)
x &= 5
print("x after bitwise AND assignment:", x)

# Bitwise OR assignment operator (|=)
x |= 3
print("x after bitwise OR assignment:", x)

# Bitwise XOR assignment operator (^=)
x ^= 6
print("x after bitwise XOR assignment:", x)

# Bitwise right shift assignment operator (>>=)
x >>= 1
print("x after bitwise right shift assignment:", x)

# Bitwise left shift assignment operator (<<=)
x <<= 2
print("x after bitwise left shift assignment:", x)

`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:
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
                                        {`# Equal to (==)
x = 5
y = 5
print("Equal to:", x == y)

# Not equal to (!=)
print("Not equal to:", x != y)

# Greater than (>)
print("Greater than:", x > y)

# Less than (<)
print("Less than:", x < y)

# Greater than or equal to (>=)
print("Greater than or equal to:", x >= y)

# Less than or equal to (<=)
print("Less than or equal to:", x <= y)

`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case4', data:
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
                                        {`# Logical AND (and)
x = True
y = False
print("Logical AND:", x and y)

# Logical OR (or)
print("Logical OR:", x or y)

# Logical NOT (not)
print("Logical NOT of x:", not x)

# Logical XOR (exclusive OR)
print("Logical XOR:", (x and not y) or (not x and y))
`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                { value: 'Case8' },
                {value:'Case9'},
                {value:'Case10'},
                //{ value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What operator is used for addition in Python?", a: "+" },
                { q: "What operator is used to compare two values for equality in Python?", a: "==" },
                { q: "Which operator is used to check if one value is greater than another in Python?", a: ">" },
                { q: "What operator is used for multiplication in Python?", a: "*" },
                { q: "Which operator is used for division in Python?", a: "/" }
            ]
            break;


        case 'Functions in python':
            name = 'Functions in python';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>Function:
                    <br></br>
                    In Python, functions are blocks of reusable code that perform a specific task. They allow you to break down your program into smaller, modular pieces, making your code more organized, readable, and easier to maintain. Here's an explanation of functions in Python:
                    <br></br>
                    Function Definition: To define a function in Python, you use the def keyword followed by the function name and parentheses (). If the function takes parameters, you specify them within the parentheses. The function body is then indented below the definition</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`def greet(name):
    print("Hello,", name)
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Function Call: Once a function is defined, you can call it by using its name followed by parentheses. If the function expects parameters, you pass them within the parentheses.<br></br>
                    Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`greet("Alice")  # Output: Hello, Alice
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>Parameters and Arguments: Parameters are variables declared in the function definition, while arguments are the actual values passed to the function when it's called. Parameters receive the values of the arguments.<br></br>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`def add(a, b):
    return a + b

result = add(3, 5)  # Parameters: a=3, b=5, Output: 8
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>Default Parameters: You can provide default values for parameters in a function. If no argument is provided for a parameter with a default value, the default value is used.<br></br>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`def greet(name="world"):
    print("Hello,", name)

greet()      # Output: Hello, world
greet("Bob") # Output: Hello, Bob

`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>Variable Number of Arguments: You can define functions that accept a variable number of arguments using the *args and **kwargs syntax. *args collects extra positional arguments into a tuple, while **kwargs collects extra keyword arguments into a dictionary.<br></br>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`def add(*args):
    return sum(args)

result = add(1, 2, 3, 4, 5)  # Output: 15


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
                { q: "What keyword is used to define a function in Python?", a: "def" },
                { q: "What is the term for the values passed to a function when it's called?", a: "Arguments" },
                { q: "What is the term for variables declared in a function definition?", a: "Parameters" },
                { q: "What syntax allows a function to accept a variable number of arguments?", a: "*args" },
                { q: "What is the term for providing default values for function parameters?", a: "Default" }
            ]
            break;

        case 'ControlFlow in python':
            name = 'ControlFlow in python';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>1. Conditional Statements (if, elif, else):<br></br>
                    Conditional statements allow you to execute different blocks of code based on whether certain conditions are true or false. Here's how they work:<br></br>
if: It checks a condition. If the condition evaluates to true, the code block following the if statement is executed.<br></br>
elif (else if): It allows you to check multiple conditions after the initial if statement.<br></br>
 If the condition in the if statement is false, it moves on to check the conditions in the elif statements sequentially until one is found to be true.<br></br>
  If none of the elif conditions are true, the code block following the else statement (if present) is executed.<br></br>
else: This block is executed if none of the preceding conditions are true.
</p>
             
            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`x = 10
if x > 0:
    print("x is positive")
elif x == 0:
    print("x is zero")
else:
    print("x is negative")
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>2. Loops (for, while):<br></br>
                Loops allow you to execute a block of code repeatedly. Python supports two main types of loops:<br></br>
For Loop: It iterates over a sequence (such as a list, tuple, string, etc.) and executes the block of code for each item in the sequence.<br></br>
While Loop: It repeatedly executes a block of code as long as a specified condition is true.<br></br>
Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`# For Loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# While Loop
i = 0
while i < 5:
    print(i)
    i += 1
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>3. Break and Continue:<br></br>
Break: It terminates the current loop and resumes execution at the next statement after the loop.<br></br>
Continue: It skips the rest of the code inside the loop for the current iteration and moves on to the next iteration of the loop.<br></br>
Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`for i in range(10):
    if i == 5:
        break
    print(i)
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>4. Exception Handling (try, except, finally):
                    <br></br>
                    Exception handling is used to gracefully manage errors or exceptional situations that may occur during program execution.<br></br>
Try: It contains the code that might raise an exception.<br></br>
Except: It specifies how to handle the exception that occurred in the try block.<br></br>
Finally: It contains cleanup code that will be executed regardless of whether an exception occurred or not.<br></br>
Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`try:
    result = 10 / 0
except ZeroDivisionError:
    print("Division by zero!")
finally:
    print("This will always execute")
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
                { q: "What Python construct allows you to execute different code blocks based on conditions?", a: "if" },
                { q: "Which loop type in Python iterates over a sequence of items?", a: "for" },
                { q: "What keyword terminates the current loop prematurely in Python?", a: "break" },
                { q: "Which Python construct is used to gracefully handle errors during program execution?", a: "try" },
                { q: "What is the Python keyword used to specify a block of code that will always execute regardless of exceptions?", a: "finally" }
            ]
            break;


        case 'Lists, Tuples and Dictionaries in python':
            name = 'Lists, Tuples and Dictionaries in python';
            cases = [
                { value: 'Case1', data:
                  <div className='case-div'>
                <p>1. Lists:<br></br>
                Lists are ordered collections of items, which can be of different data types such as integers, strings, or even other lists.<br></br>
                 Lists are mutable, meaning you can change the elements after the list has been created.<br></br>
                  Lists are created using square brackets [], and elements are separated by commas.<br></br>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`my_list = [1, 2, 3, "apple", "banana", "cherry"]
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Key features:<br></br>
Ordered: Items in a list maintain their order, and you can access them by their index.<br></br>
Mutable: You can modify the elements of a list after it has been created.<br></br>
Dynamic: Lists can grow or shrink in size as needed.<br></br>
Allows Duplicate Elements: Lists can contain duplicate elements.</p>
            </div> },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>2.Tuples:<br></br>
                Tuples are similar to lists, but they are immutable, meaning once created, you cannot change the elements of a tuple.<br></br>
                 Tuples are created using parentheses () or just commas , (with or without parentheses). <br></br>
                 Tuples are commonly used for storing related pieces of data.<br></br>Example:
</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`my_tuple = (1, 2, 3, "apple", "banana", "cherry")
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Key features:<br></br>
Ordered: Like lists, tuples maintain the order of elements and allow for indexed access.<br></br>
Immutable: Once a tuple is created, its elements cannot be changed.<br></br>
Faster than Lists: Tuples are generally faster to iterate over than lists due to their immutability.<br></br>
Can be Used as Dictionary Keys: Unlike lists, tuples can be used as keys in dictionaries because they are immutable.</p>
            </div>
            },
                { value: 'Case3', data:
                <div className='case-div'>
                <p>3. Dictionaries:<br></br>
                Dictionaries are unordered collections of key-value pairs. Each key-value pair maps the key to its corresponding value.<br></br> Dictionaries are mutable and are created using curly braces {}.<br></br> 
                Keys must be unique within a dictionary, but values can be duplicated.Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`my_dict = {"name": "Alice", "age": 30, "city": "New York"}
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Key features:<br></br>
Unordered: Items in a dictionary are not ordered, so you cannot rely on the order of insertion.<br></br>
Mutable: You can add, remove, or modify key-value pairs after the dictionary has been created.<br></br>
Key-Value Mapping: Each value in a dictionary is accessed by its corresponding key.<br></br>
Flexible Keys and Values: Keys and values in a dictionary can be of any data type, including lists, tuples, or even other dictionaries.</p>
            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>Here's a complete Python program for lists & tuples.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`# Define a list of fruits
fruits_list = ["apple", "banana", "cherry", "apple", "banana"]

# Print the list
print("List of Fruits:", fruits_list)

# Define a tuple of colors
colors_tuple = ("red", "green", "blue", "red")

# Print the tuple
print("Tuple of Colors:", colors_tuple)`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>Complete Python program for Dictionary</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`# Print the dictionary
print("Student Information:")
print("Name:", student_dict["name"])
print("Age:", student_dict["age"])
print("Major:", student_dict["major"])
print("Courses:", student_dict["courses"])

# Update the dictionary
student_dict["age"] = 26
student_dict["courses"].append("Data Structures")

# Print the updated dictionary
print("Updated Student Information:")
print("Name:", student_dict["name"])
print("Age:", student_dict["age"])
print("Major:", student_dict["major"])
print("Courses:", student_dict["courses"])`}
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
                { q: "What is the data structure in Python used for ordered collections of items that can be modified after creation?", a: "List" },
                { q: "Which data structure in Python is similar to lists but immutable, meaning its elements cannot be changed after creation?", a: "Tuples" },
                { q: "What type of Python data structure is commonly used for key-value mappings?", a: "Dictionaries" },
                { q: "What Python data structure allows duplicate elements and maintains the order of insertion?", a: "Lists" },
                { q: "What is the Python data structure used for storing related pieces of data that cannot be modified after creation?", a: "Tuples" }
            ]
            break;

        case 'Oops in python':
            name = 'Oops in python';
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


        case 'Classes and objects in python':
            name = 'Classes and objects in python';
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


        case 'Inheritance in python':
            name = 'Inheritance in python';
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

        case 'Encapsulation in python':
            name = 'Encapsulation in python';
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


        case 'Abstraction in python':
            name = 'Abstraction in python';
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


        case 'Polymorphism in python':
            name = 'Polymorphism in python';
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

        case 'Contructor and destructor':
            name = 'Contructor and destructor';
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

        case 'File handling in python':
            name = 'File handling in python';
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