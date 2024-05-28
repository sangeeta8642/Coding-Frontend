// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "reactjs", complete = false;
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
        case 'Introduction to reactjs':
            name = 'Introduction to reactjs';
            cases = [
                {
                    value: 'Case1',
                    data:
                        <div className='case-div'>
                            {user ? <p>Hello {user.Fname},</p> : <p> Hello User,</p>}
                            <p>Now we are going to learn one of the oldest yet the powerful programming language "C". </p>
                            <p>It is developed by "Danis Ritchie" in 1972.</p>
                            <p>Many of the programming languages like C++, Java etc are derived from C.<br />that's why it known to be a mother of programming languages.</p>
                            <p>For the beginners, starting their coding journey with C seems to be the great choice.</p>
                            <p>So, Let's dig inside.</p>
                        </div>

                },

                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Basic C Syntax.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` #include<stdio.h>

int main(){
    printf("Hello World");
}                    
                    `}
                                    </pre>
                                </code>
                            </div>
                            <br />
                            <p>This is the basic Structure of C to print "Hello World".</p>
                            <p>Let's learn it line by line.</p>
                            {/* https://godbolt.org/ */}
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <br></br>
                            <h5 className='Quotes'> "Directory or Library is a unique type of file that stores<br></br> the information needed to access other files/directories."</h5>
                            <br></br>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {` #include<stdio.h> `}
                                    </pre>
                                </code>
                            </div>
                            <br></br>

                            <p>It is a "Directory". which lets us to use many in-built (already built) input/output functions.</p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <h5 className='Quotes'>"Compiletion is a process of traslating our code which is written<br></br> in normal english language into computer understanding language." </h5>
                            <br></br>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int main() { \\ Your code will come here.} `}
                                    </pre>
                                </code>
                            </div>
                            <br></br>
                            <p>"main()", this is called main function and it acts as a starting point of "compilation" process.</p>
                            <p>without this function, may any program we write in C, is workless.</p>

                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div' >
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`printf("Hello World"); `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>"printf()", &nbsp; this is the in-built function in C, accessable from the library  "{`#include<stdio.h>`}".</p>
                            <p>This function is lets us to write anything in the console window.</p>
                            <p>Remember:-</p>
                            <p>To print the normal text like we did in previous program, make sure that text should be surrounded by double quotes {`{" "}`}</p>
                        </div>
                },
                {
                    value: 'Case6', data:
                        <div className='case-div'><br></br>
                            <p>In coding, every line of code is gives some kind of intructions to the compiler.</p>
                            <p>So, here every line of code is called as "Statement".</p>
                            <p>And in C each Statement should be end with semicolon. {"{ ; }"}</p>
                            <p>Example,</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`printf("Hello World"); `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>The ; tells to the compiler that the Statement is ends here. </p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: "Done a Greate job" },
            ];
            ques = [
                { q: "Who developed the C ?", a: "Dennis Ritchie" },
                { q: "In which year the C has developed", a: "1972" },
                { q: 'fix the error and re-write the statemet. printf("Hello World")', a: 'printf("Hello World");' },
                { q: 'fix the error and re-write the statemet. printf(Hello World)', a: 'printf("Hello World");' },
                { q: 'Help us to print "Happy Coding..!" in the console ', a: 'printf("Happy Coding..!");' },
            ]
            break;
        case 'Basics Of C':
            name = 'Basics Of C';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>So, till now we learnt "how to print something in the console?".<br />Now let's look at "how can we get something from console."</p>
                            <p>To achieve this, in C we have a in-built function called "scanf()"</p>
                            <p>here is how can we use it:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`printf("Enter your name:");
scanf("%s",&var) `}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>%s its called format specifiers which indicates that we are receiveing, a text from the console window</p>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>We need to use multiple type of format specifiers according to the data we get from the console.</p>
                            <p>Like</p>
                            <p>%d for integers</p>
                            <p>%ld for long integers</p>
                            <p>%lld for long long integers</p>
                            <p>%s for string</p>
                            <p>%c for characters and</p>
                            <p>%f for floating point</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>uhh, Thinking that what are they even are?</p>
                            <p>They are called DATATYPES.</p>
                            <p>we will going to learn about them ahead and for now just focus on "scanf()"</p>
                            <p>Let's see the example for this</p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>here is the coomplete example for scanf() in C:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`#include<stdio.h>

int main(){
    String name;
    printf("Enter Your name:")
    scanf("%s",&name);
    printf("Your name is %s",name)
}`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>OUTPUT:</p>
                            <p>Enter Your name: Reema</p>
                            <p>Your name is Reema</p>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Now the another basic concept in C is</p>
                            <p>COMMENTS.<br /><br />
                                <h5 className='Quotes'> "The comments in C are human-readable explanations or notes in the source code of a C program. "</h5>
                                <br />
                                <p>which means they are the statements used to give a clear information about our code to other people.</p>
                                <p>The compiler never compiles these statements.</p>

                            </p>
                        </div>
                }, {
                    value: 'Case6', data:
                        <div className='case-div'>
                            <p>In C, there are two types of comments known as:</p>
                            <p>single line comment:</p>
                            <p>this type of comment is only appicable for a single line.<br /> It starts with adding double slash {`{ // }`} at the start of the line.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`// This statement prints the "hello world" in the console.
printf("hello world"); `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                }, {
                    value: 'Case7', data:
                        <div className='case-div'>
                            <p>multi line comment:   </p>
                            <p>this type of comment is appicable for more than single line of code.<br />It used by adding {`{ /* }`} at the start and {`{ */ }`} at the end of the line.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`/* This statement prints the "hello world" in the console.
then we can see the out put at the console. */
printf("hello world"); `}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'Basics Last case data' },

            ];
            ques = [
                { q: " In C, what function can be used to obtain input from the console in a program?", a: "scanf()" },
                { q: "Which format specifier is used for receiving long integers in C's scanf function?", a: "%ld" },
                { q: "What is the conventional way in C to comment out a single line of code?", a: "//" },
                { q: "What placeholder represents characters in C's scanf function?", a: "%c" },
                { q: "Which format specifier is used for long integers in C's scanf function?", a: " %ld" }
            ]
            break;


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
                    value: 'Case4', data:
                        <div className='case-div'>
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
                { value: "Case8" },
                { value: "Case9" },
                { value: "Case10" },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Help us to assign value 25 to a variable 'age' ", a: "int age=25" },
                { q: "Identify the datatype of variable 'Marks' whhich stores the value as 75.86?", a: "float" },
                { q: "Help us to assign value 27.2 to a variable 'temparature' ?", a: "float temparature=27.2 " },
                { q: "Re-write by correcting the mistake int x=36.8", a: "float x=36.8" },
                { q: "Re-write by correcting the mistake chat C=26", a: "int C=26" }
            ]
            break;

        case 'Datatypes Of C':
            name = 'Datatypes Of C';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>The data type specifies the size and type of information the variable will store.</p>
                        <p>In C we have 4 types of datatypes as illustated below</p>
                        <img src='https://static.javatpoint.com/cpages/images/c-data-types.jpg' style={{ height: '300px', width: '500px', marginLeft: '200px' }} />
                        <br />
                        <br />
                        <p>Here we are going to descuss about basic Datatypes in c and remaining 3 will be descussed ahead. </p>
                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div' >
                        <Table variant='info' >
                            <tbody >
                                <tr >
                                    <th style={{ color: "red", textAlign: "center" }}>Data Type</th>
                                    <th style={{ color: "red", textAlign: "center" }}>Size</th>
                                    <th style={{ color: "red", textAlign: "center" }}>Description</th>
                                    <th style={{ color: "red", textAlign: "center" }}>Format Specifier</th>
                                </tr>
                                <tr>
                                    <td><p>int</p></td>
                                    <td><p>2 or 4 bytes</p></td>
                                    <td><p>Stores whole numbers, without decimals</p></td>
                                    <td><p>%d or %i</p></td>
                                </tr>
                                <tr>
                                    <td><p>float</p></td>
                                    <td><p>4 bytes</p></td>
                                    <td><p>Stores fractional numbers, containing one or more decimals. Sufficient for storing 7 decimal digits</p></td>
                                    <td><p>%f</p></td>
                                </tr>
                                <tr>
                                    <td><p>double</p></td>
                                    <td><p>8 bytes</p></td>
                                    <td><p>Stores fractional numbers, containing one or more decimals. Sufficient for storing 7 decimal digits</p></td>
                                    <td><p>%lf</p></td>
                                </tr>
                                <tr>
                                    <td><p>char</p></td>
                                    <td><p>1 byte</p></td>
                                    <td><p>Stores a single character/letter/number, or ASCII values</p></td>
                                    <td><p>%c</p></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                },
                { value: 'Case3', data: <div className='case-div'>
                    <p>Here is the example:</p>
                    <div className='code-block'><code><pre>{`#include <stdio.h>
 
 int main()
 {
     // Creating variables having different data types
     int integer = 26;
     float floating = 39.32;
     char character = 'A';
  
     // Printing variables with the help of their respective format specifiers
     printf("%d", integer);
     printf("%f", floating);
     printf("%c", character);
 }
 `}</pre></code></div>
 <p>Output:</p>
 <p>26
<br/>
39.320000
<br/>
A</p>
                </div> },
                { value: 'Case4', data: <div className='case-div'>
                    <p>DERIVED DATATYPES</p>
                    <p>They are the datatypes which depends on the basic datatypes</p>
                    <p>They includes Array,Pointers,Structure, Union which we will learn ahead</p>
                    <br></br>
                    <br></br>
                    <p>ENUMERATION DATATYPE</p>
                    <p>In enum we can create a set of variables called group</p>

                </div> },
                { value: 'Case5', data: <div  className='case-div'>
                    <p>Void DATATYPE</p>
                    <p>The void data type in the C language is used to denote the lack of a particular type.<br/>
                     Function return types, function parameters, and pointers are three situations where it is<br/>
                      frequently utilized.</p>
                      <p>It includes Function Return Type, Function Parameters, Pointers etc</p>
                </div> },
                {value:"Case8"},
                {value:"Case9"},
                {value:"Case10"},
                { value: 'Lastcase', data: 'Variables Last case data' },
            ];
            ques = [
                { q: "What is the datatype in which we can store 'age' ?", a: "int" },
                { q: "What is the datatype in which we can store 'grade' ?", a: "char" },
                { q: "What we call the long float?", a: "double" },
                { q: "what is the format specifier of int", a: "%d" },
                { q: "what is the format specifier of float", a: "%f" },
                { q: "what is the format specifier of double", a: "%lf" },
                { q: "what is the format specifier of char", a: "%c" },
            ]
            break;
        case 'Operators Of C':
            name = 'Operators Of C';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Operators Of C</p>
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
  printf("%d",x+y); //Output: 16
  printf("%d",x-y);//Output: 4
  printf("%d",x*y); //Output: 60
  printf("%d",x / y); //Output: 1
  printf("%d",x % y); //Output: 4
  printf("%d",++x); //Output:7
  printf("%d",--y); //Output:9`}
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

printf("%d",x) ; //Output: 10
printf("%d",x += 3) ; //Output: 13
printf("%d",x -= 3) ; //Output: 7
printf("%d", x *= 3) ; //Output: 1
printf("%f",x /= 3) ; //Output: 3.3333
printf("%d",x %= 3) ; //Output: 1
printf("%d",x &= 3) ; //Output: 9
printf("%d",x |= 3) ; //Output: 11
printf("%d",x <<= 3) ; //Output: 80
printf("%d",x >>= 3) ; //Output: 1
printf("%d",x ^= 3) ; //Output: 9
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
                                        {`  int x = 10;
int y = 6;
printf("%d",x == y)//Output: 0 (false)
printf("%d",x != y)//Output: 1 (true)
printf("%d",x > y)//Output: 1 (true)
printf("%d", x < y)//Output: 0 (false)
printf("%d",x >= y)//Output: 1 (true)
printf("%d",x <= y)//Output: 0 (false)
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
                                        {`  int x = 10;
int y = 6;
printf("%d",(x > 3 && x < 10))// returns true (1)
printf("%d",(x > 3 || x < 4))// returns true (1)
printf("%d",(!(x > 3 && x < 10)))// returns false (0)
`}
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
            
            case 'ConditionalFlow Of C':
                name = 'ConditionalFlow Of C';
                cases = [
                    {
                        value: 'Case1', data:
                            <div className='case-div'>
                                <br />
                                <p>In C programming, <br />if statement is used to test the condition. We use conditional statements<br />as follows</p>
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
                                            {`#include <stdio.h>  
    int main () {  
       int num = 10;    
                if (num % 2 == 0)    
                {    
                    printf("It is even number")
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
                                        {`#include <stdio.h>  
    int main () {  
       int num = 11;    
                if (num % 2 == 0)    
                {    
                    printf("It is even number")
                }   
                else  
                {    
                    printf("It is odd number")
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
                                        {`#include <stdio.h>  
    int main () {  
           int num;  
           printf("Enter a number to check grade:");
           scanf("%d",&num)
                if (num <0 || num >100)    
                {    
                    printf("wrong number");
        }    
                else if(num >= 0 && num < 50){  
                    printf("Fail");
       }    
                else if (num >= 50 && num < 60)    
                {    
                    printf("D Grade"); 
       }    
                else if (num >= 60 && num < 70)    
                {    
                    printf("C Grade");  
       }    
                else if (num >= 70 && num < 80)    
                {    
                    printf("B Grade");  
        }    
                else if (num >= 80 && num < 90)    
                {    
                    printf("A Grade"); 
        }    
                else if (num >= 90 && num <= 100)    
                {    
                    printf("A+ Grade"); 
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
                                        {`#include <stdio.h>    
    int main () {  
           int num;  
           printf("Enter a number to check grade:");
           scanf("%d",&num)
               switch (num)    
              {    
                  case 10: printf("It is 10"); break;    
                  case 20: printf("It is 20"); break;    
                  case 30: printf("It is 30"); break;    
                  default: printf("It isn't 10, 20 or 30"); break;    
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

        case 'ControlFlow Of C':
            name = 'ControlFlow Of C';
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

        case 'Functions Of C':
            name = 'Functions Of C';
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
                { q: "How many no. of agruments are here in: function eating(fload dog, char char)", a: "2" },
            ]
            break;

        case 'Array And Strings Of C':
            name = 'Array And Strings Of C';
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

                { value: 'Case4', data: <div className='case-div' >
                    <p>Strings</p>
                    <p>The string can be defined as the one-dimensional array of characters terminated by a null ('\0').<br/>
                     The character array or the string is used to manipulate text such as word or sentences. <br/>
                     Each character in the array occupies one byte of memory, and the last character must always be 0.<br/>
                      The termination character ('\0') is important in a string since it is the only way to identify <br/>
                      where the string ends. When we define a string as char s[10], the character s[10] is implicitly <br/>
                      initialized with the null in the memory.</p>
                      <br></br>
                      <br></br>
                      <p>Here is how the string stored in memory.</p>
                      <img src='https://static.javatpoint.com/cpages/images/c-array.png' style={{height:"150px",width:"30vw"}} />
                </div> },

                { value: 'Case5', data: <div className='case-div' >
                    <p>There are two ways to declare a string in c language.</p>
                    <p>1. By char array</p>
                    <p>Example:</p>
                    <div className='code-block'><code><pre>{`char ch[10]={'c', 'o', 'd', 'e', 'B', 'u', 'd','\0'};  `}</pre></code></div>
                    <br/>
                    <br/>
                    <p>2. By string literal</p>
                    <p>Example:</p>
                    <div className='code-block'><code><pre>{`char ch[]="codeBud"; `}</pre></code></div>

                </div> },
                { value: 'Case6', data: <div className='case-div'>
                    <p>Here the complete program of string in C.</p>
                    <br/>
                    <div className='code-block' ><code><pre>{`#include<stdio.h>  
#include <string.h>    
int main(){    
  char ch[11]={'c', 'o', 'd', 'e', 'B', 'u', 'd','\0'};    
   char ch2[11]="codeBud";    
    
   printf("Char Array Value is: %s\n", ch);    
   printf("String Literal Value is: %s\n", ch2);    
 return 0;    
}    `}</pre></code></div>
<p>Output:</p>
<p>Char Array Value is: codeBud<br/>
String Literal Value is: codeBud</p>
                </div> },
                {value:"Case8"},
                {value:"Case9"},
                {value:"Case10"},
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Create the array with name 'alphabet' and store the elements a,b,c,d and e", a: "int alphabet={a,b,c,d,e}"},
                { q: "Create the array with name 'CodeBud' and store the elements c,o,d,e,b,u and d", a: "char CodeBud={c,o,d,e,b,u,d}"},
                { q: "Create the array with name 'Marks' and store the elements 25,6 , 31,4, 91.6 and 72.70,", a: "float Marks={25.6,31.4,72.70}"},
            ]
            break;

        case 'Pointers And Memory Of C':
            name = 'Pointers And Memory Of C';
            cases = [
                { value: 'Case1', data: <div className='case-div'>
                    <p>The pointer in C language is a variable which stores the address of another variable.<br/>
                    This variable can be of type int, char, array, function, or any other pointer. <br/>
                    The size of the pointer depends on the architecture. <br/>
                    However, in 32-bit architecture the size of a pointer is 2 byte.</p>
                    <br/>
                    <br/>
                    <p>Example to define a pointer which stores the address of an integer.</p>
                    <div className='code-block'><code><pre>{`int n = 10;   
int* p = &n; 
// Variable p of type pointer is pointing to the address of the variable n of type integer.

`}</pre></code></div>
                </div> },
                { value: 'Case2', data: <div className='case-div'>
                    <p>DECLARATION OF POINTER IN C</p>
                    <p>The pointer in c language can be declared using * (asterisk symbol).<br></br>
                     It is also known as indirection pointer used to dereference a pointer.</p>
                     <div className='code-block'><code><pre>{`int *a;//pointer to int  
char *c;//pointer to char  `}</pre></code></div>
<br/>
<br/>
<img src='https://static.javatpoint.com/cpages/images/pointer.png' style={{height:"200px",width:"20vw"}} />
                </div> },
                { value: 'Case3', data: <div className='case-div'>
                    <p>Here is the complete program od pointer</p>
                    <div className='code-block'><code><pre>{`#include<stdio.h>  
int main(){  
int number=50;    
int *p;      
p=&number;//stores the address of number variable    
printf("Address of p variable is %x \n",p); // p contains the address of the number therefore printing p gives the address of number.     
printf("Value of p variable is %d \n",*p); // As we know that * is used to dereference a pointer therefore if we print *p, we will get the value stored at the address contained by p.    
return 0;  
}    `}</pre></code></div>
<p>Output:</p>
<p>Address of number variable is fff4<br/>
Address of p variable is fff4<br/>
Value of p variable is 50</p>
                </div> },
                { value: 'Case4', data: <div className='case-div'>
                    <p>Pointer to array</p>
                    <div className='code-block'><code><pre>{`int arr[10];  
int *p[10]=&arr; // Variable p of type pointer is pointing to the address of an integer array arr.  

`}</pre></code></div>
<br/>
<br/>
<p>Pointer to a function</p>
                    <div className='code-block'><code><pre>{`void show (int);  
void(*p)(int) = &display; // Pointer p is pointing to the address of a function   

`}</pre></code></div>
<br/>
<br/>

                </div> },
                { value: 'Case5', data: <div className='case-div'>
<p>Pointer to structure</p>
                    <div className='code-block'><code><pre>{`struct st {  
    int i;  
    float f;  
}ref;  
struct st *p = &ref;    

`}</pre></code></div>
<br/>
<br/>

<img src='https://static.javatpoint.com/cpages/images/cpointer1.png' style={{height:"200px",width:"30vw"}} />
                </div> },
                {value:"Case8"},
                {value:"Case9"},
                {value:"Case10"},
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Create a pointer with name ptn and store the value of int city=4 ?", a: "int *ptn=&city" },
                { q: "Create a pointer with name fptn and store the value of float marks=3.54 ?", a: "float *fptn=&marks" },
                { q: "Create a pointer with name Char and store the value of int letter='A' ?", a: "char *Char=&letter" },
            ]
            break;
        case 'Structures And Unions Of C':
            name = 'Structures And Unions Of C';
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
        case 'File Handling Of C':
            name = 'File Handling Of C';
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
        case 'Error Handling Of C':
            name = 'Error Handling Of C';
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
        case 'Advanced Topics Of C':
            name = 'Advanced Topics Of C';
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