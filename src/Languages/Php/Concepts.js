// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "Php", complete = false;
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


        case 'Introduction to PHP':
            name = 'Introduction to PHP';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>What Is PHP</p>
                            <p>PHP is an open-source, interpreted, and object-oriented scripting language that can be executed at the server-side</p>
                            <p>PHP is well suited for web development.</p>
                            <p>Therefore, it is used to develop web applications (an application that executes on the server and generates the dynamic page.).</p>
                            <p>Therefore, it is used to develop web applications (an application that executes on the server and generates the dynamic page.).</p>
                            <p>PHP was created by Rasmus Lerdorf in 1994 but appeared in the market in 1995</p>
                            <p> PHP 7.4.0 is the latest version of PHP, which was released on 28 November.</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Some important points need to be noticed about PHP are as followed:</p>
                            <p>1. PHP stands for Hypertext Preprocessor.</p>
                            <p>2. PHP is an interpreted language, i.e., there is no need for compilation.</p>
                            <p>3. PHP is faster than other scripting languages, for example, ASP and JSP.</p>
                            <p>4. PHP is a server-side scripting language, which is used to manage the dynamic content of the website.</p>
                            <p>5. PHP can be embedded into HTML.</p>
                            <p>6. PHP is an object-oriented language</p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Why use PHP</p>
                            <p>PHP is a server-side scripting language, which is used to design the dynamic web applications with MySQL database.</p>
                            <p>1. It handles dynamic content, database as well as session tracking for the website.</p>
                            <p>2. You can create sessions in PHP. </p>
                            <p>3. It can access cookies variable and also set cookies.</p>
                            <p>4. It helps to encrypt the data and apply validation.</p>
                            <p>5. PHP supports several protocols such as HTTP, POP3, SNMP, LDAP, IMAP, and many more.</p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>PHP Features</p>
                            <p>PHP is very popular language because of its simplicity and open source. There are some important features of PHP given below:</p>
                            <p>1. Performance: PHP script is executed much faster than those scripts which are written in other languages such as JSP and ASP. </p>
                            <p>2. Open Source: PHP source code and software are freely available on the web.</p>
                            <p>3. Familiarity with syntax: PHP has easily understandable syntax. Programmers are comfortable coding with it.</p>
                            <p>4. Embedded: PHP code can be easily embedded within HTML tags and script</p>
                            <p>5. Platform Independent: PHP is available for WINDOWS, MAC, LINUX & UNIX operating system. A PHP application developed in one OS can be easily executed in other OS also.</p>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>PHP Features</p>
                            <p>6. Database Support: PHP supports all the leading databases such as MySQL, SQLite, ODBC, etc.</p>

                            <p>7. Loosely Typed Language: PHP allows us to use a variable without declaring its datatype. It will be taken automatically at the time of execution based on the type of data it contains on its value.</p>

                            <p>8. Web servers Support: PHP is compatible with almost all local servers used today like Apache, Netscape, Microsoft IIS, etc.</p>

                            <p>9. Security: PHP is a secure language to develop the website. It consists of multiple layers of security to prevent threads and malicious attacks.</p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Is there a need for compilation in PHP?", a: "No" },
                { q: "Which version of PHP was released on 28 November?", a: "7.4.0" },
                { q: "What does PHP stand for?", a: "Hypertext Preprocessor" },
                { q: "Can PHP be embedded into HTML?", a: "Yes" },
                { q: "What type of tracking can PHP perform for websites?", a: "Session" }
            ]
            break;


        case 'Basics of PHP':
            name = 'Basics of PHP';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>PHP Syntax</p>
                            <p>A PHP script can be placed anywhere in the document.</p>
                            <p>A PHP script starts with <pre>{`<?php`}</pre> and ends with <pre>{`?>`}</pre>:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<?php
// PHP code goes here
?>`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>

                            <p>The default file extension for PHP files is ".php".</p>
                            <p>A PHP file normally contains HTML tags, and some PHP scripting code.</p>
                            <p>Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function "echo" to output the text "Hello World!" on a web page:</p>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Note: PHP statements end with a semicolon (;).</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>

                            <p>PHP Case Sensitivity</p>
                            <p>In PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are not case-sensitive.</p>
                            <p>In the example below, all three echo statements below are equal and legal:</p>
                            <p>Example:</p>
                            <p>ECHO is the same as echo:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>

                            <p>Note: However; all variable names are case-sensitive!</p>
                            <p>Look at the example below; only the first statement will display the value of the $color variable! This is because $color, $COLOR, and $coLOR are treated as three different variables:</p>
                            <p>Example:</p>
                            <p>$COLOR is not same as $color:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>`}
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
                { q: "Waht is default file extension for PHP files?", a: ".php" },
                { q: "How we can end PHP statements?", a: ";" },
                { q: " Which built-in PHP function PHP script  uses to output the text  on a web ?", a: "echo" },
                { q: "PHP script starts with.....?", a: "<?php" },
                { q: "PHP script ends with.....?", a: "?>" }
            ]
            break;


        case 'Variables and Data Types in PHP':
            name = 'Variables and Data Types in PHP';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>PHP Variables</p>
                            <p>Variables are "containers" for storing information.</p>
                            <p>Creating (Declaring) PHP Variables</p>
                            <p>In PHP, a variable starts with the $ sign, followed by the name of the variable:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`$x = 5;
$y = "John"`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>In the example above, the variable $x will hold the value 5, and the variable $y will hold the value "John".
                                <br></br>
                                Note: When you assign a text value to a variable, put quotes around the value.<br></br>

                                Note: Unlike other programming languages, PHP has no command for declaring a variable. It is created the moment you first assign a value to it.</p>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>

                            <p>PHP Variables</p>
                            <p>A variable can have a short name (like $x and $y) or a more descriptive name ($age, $carname, $total_volume).
                            </p>
                            <p>Rules for PHP variables:</p>
                            <p>A variable starts with the $ sign, followed by the name of the variable<br></br>
                                A variable name must start with a letter or the underscore character<br></br>
                                A variable name cannot start with a number<br></br>
                                A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )<br></br>
                                Variable names are case-sensitive ($age and $AGE are two different variables)</p>
                            <p>Remember that PHP variable names are case-sensitive!</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>

                            <p>Output Variables</p>
                            <p>The PHP echo statement is often used to output data to the screen.</p>
                            <p>The following example will show how to output text and a variable:</p>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`$txt = "India";
echo "I love $txt!";`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>

                            <p>PHP Data Types</p>
                            <p>Variables can store data of different types, and different data types can do different things.<br></br>
                                PHP supports the following data types:</p>
                            <p>String<br></br>
                                Integer<br></br>
                                Float (floating point numbers - also called double)<br></br>
                                Boolean<br></br>
                                Array<br></br>
                                Object<br></br>
                                NULL<br></br>
                                Resource</p>

                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Getting the Data Type</p>
                            <p>You can get the data type of any object by using the var_dump() function.</p>
                            <p>Example:<br></br>
                                The var_dump() function returns the data type and the value:
                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`$x = 5;
var_dump($x);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>
                                int(5)</p>

                            <p>PHP String<br></br>
                                A string is a sequence of characters, like "Hello world!".<br></br>

                                A string can be any text inside quotes. You can use single or double quotes:<br></br>
                                Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`$x = "Hello world!";
$y = 'Hello world!';

var_dump($x);
echo "<br>";
var_dump($y);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>
                                string(12) "Hello world!"
                                string(12) "Hello world!"</p>
                        </div>
                }, { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What character does a variable name in PHP start with?", a: "$" },
                { q: "Can a variable name in PHP start with a number?", a: "No" },
                { q: "What PHP statement is commonly used to output data to the screen?", a: "echo" },
                { q: "How is the data type of an object retrieved in PHP?", a: "var_dump()" },
                { q: "Can a PHP variable name contain special characters like @ or #?", a: "No" }
            ]
            break;


        case 'Constants in PHP':
            name = 'Constants in PHP';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>PHP Constants<br></br>
                                A constant is an identifier (name) for a simple value. The value cannot be changed during the script.<br></br>

                                A valid constant name starts with a letter or underscore (no $ sign before the constant name).<br></br>

                                Note: Unlike variables, constants are automatically global across the entire script.

                            </p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>

                            <p>Create a PHP Constant</p>
                            <p>To create a constant, use the define() function.<br></br>

                                Syntax</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`define(name, value, case-insensitive);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Parameters:</p>
                            <p>1. name: Specifies the name of the constant</p>
                            <p>2. value: Specifies the value of the constant</p>
                            <p>3. case-insensitive: Specifies whether the constant name should be case-insensitive. Default is false.</p>
                            <p></p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>

                            <p>Example</p>
                            <p>Create a constant with a case-sensitive name:</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`define("GREETING", "Welcome ");
echo GREETING;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br>Welcome</br></p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>

                            <p>PHP const Keyword</p>
                            <p>You can also create a constant by using the const keyword.</p>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`const MYCAR = "Volvo";
echo MYCAR;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Volvo</p>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>

                            <p>const vs. define()</p>
                            <p>1. const are always case-sensitive</p>
                            <p>2. define() has has a case-insensitive option.</p>
                            <p>3. const cannot be created inside another block scope, like inside a function or inside an if statement.</p>
                            <p>4. define can be created inside another block scope.</p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What function is used to create a constant in PHP?", a: "define()" },
                { q: "What parameter of the define() function specifies the name of the constant?", a: "name" },
                { q: "What parameter of the define() function specifies the value of the constant?", a: "value" },
                { q: "In PHP, are constants automatically global or local?", a: "Global" },
                { q: "What is the default value for the case-insensitive parameter in the define() function?", a: "false" }
            ]
            break;

        case 'Operators in PHP':
            name = 'Operators in PHP';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>

                            <p>Operators</p>
                            <p>Operators are used to perform different types of mathematical and logical computations.</p>
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
                                        {`$x = 10;
$y = 3;

$sum = $x + $y;        // 13
$difference = $x - $y; // 7
$product = $x * $y;    // 30
$quotient = $x / $y;   // 3.333...
$remainder = $x % $y;  // 1
$power = $x ** $y;     // 100`}
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
                                        {`
$x = 10;
echo "x after assignment: $x <br>";


$x += 5;
echo "x after addition assignment: $x <br>";


$x -= 3;
echo "x after subtraction assignment: $x <br>";


$x *= 2;
echo "x after multiplication assignment: $x <br>";


$x /= 4;
echo "x after division assignment: $x <br>";


$x %= 3;
echo "x after modulus assignment: $x <br>";

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
                                        {`$x = 10;
$y = 5;

$result = ($x == $y); // false
$result = ($x != $y); // true
$result = ($x > $y);  // true
$result = ($x <= $y); // false
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
                                        {`$x = 10;
$y = 5;

$result = ($x > 5) && ($y < 10); // true
$result = ($x > 5) || ($y < 3);  // true
$result = !($x == $y);           // true`}
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
                { q: "What operator is used for multiplication in PHP?", a: "*" },
                { q: "What operator is used for logical AND in PHP?", a: "&&" },
                { q: "Which operator is used for logical OR in PHP?", a: "||" },
                { q: "What logical operator is used to check if both conditions are true in PHP?", a: "AND" },
                { q: "What operator is used for finding the remainder of a division operation in PHP?", a: "%" }
            ]
            break;


        case 'Control Structures in PHP':
            name = 'Control Structures in PHP';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>A control structure is a block of code that decides the execution path of a program depending on the value of the set condition.</p>
                        <p>Let’s now look at some of the control structures that PHP supports.</p>
                        <h3>IF-ELSE:</h3>
                        <p>If… then… else is the simplest control structure. It evaluates the conditions using Boolean logic
                            When to use if… then… else</p>
                        <p><ul><li>You have a block of code that should be executed only if a certain condition is true</li>
                            <li>You have two options, and you have to select one.</li>
                            <li>If… then… else if… is used when you have to select more than two options and you have to select one or more</li>
                            {/* https://www.guru99.com/control-structures-and-loops.html */}
                        </ul></p>
                        <img src='https://www.guru99.com/images/2013/04/if_then_flowchart.png' style={{ marginLeft: "200px", height: "500px", width: "500px" }} />
                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <p>HERE,</p>
                        <p>
                            <ul>
                                <li>“if (condition is true)” is the control structure</li>
                                <li>“block one” is the code to be executed if the condition is true</li>
                                <li>(…else…) is the fallback if the condition is false</li>
                                <li>“block two” is the block of code executed if the condition is false</li>
                            </ul>
                        </p>
                        <p>Syntax:</p>
                        <div className='code-block'><code><pre>{`<?php
if (condition is true) {

block one

else

block two

}
?>`}</pre></code></div>
                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <p>Let’s see this in action The code below uses “if… then… else” to determine the larger value between two numbers.</p>
                        <div className='code-block'><code><pre>{`<?php

$first_number = 7;

$second_number = 21;

if ($first_number > $second_number){

echo "$first_number is greater than $second_number";

}else{

echo "$second_number is greater than $first_number";

}

?>`}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`21 is greater than 7`}</pre></code></div>
                    </div>
                },
                {
                    value: 'Case4', data:
                     <div className='case-div'>
                        <h3>PHP Switch Case</h3><br />
                        <p>Switch… case is similar to the if then… else control structure.</p>
                        <p>It only executes a single block of code depending on the value of the condition.
                            <br />
                            If no condition has been met then the default block of code is executed.
                            <br />
                            It has the following basic syntax. </p>
                        <div className='code-block'><code><pre>{`<?php
switch(condition){

case value:

//block of code to be executed

break;

case value2:

//block of code to be executed

break;

default:

//default block code

break;

}
?>`}</pre></code></div>
                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <p>HERE,</p>
                        <p>
                            <ul>
                                <li>“switch(…){ }” is the control structure block code`</li>
                                <li>“case value: case…” are the blocks of code to be executed depending on the value of the condition</li>
                                <li>“default:” is the block of code to be executed when no value matches with the condition</li>
                            </ul>
                        </p>
                        <p>How it works</p>
                        <img src='https://www.guru99.com/images/2013/04/switch_flowchart.png' style={{ marginLeft: "200px", height: "700px", width: "500px" }} />

                    </div>
                },
                {
                    value: 'Case6', data: <div className='case-div'>
                        <p>Practical example</p>
                        <div className='code-block'><code><pre>{`<?php

$today = "wednesday";

switch($today){

case "sunday":

echo "pray for us sinners.";

break;

case "wednesday":

echo "ladies night, take her out for dinner";

break;

case "saturday":

echo "take care as you go out tonight.";

break;

default:

echo "have a nice day at work";

break;

}

?>`}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`go out for dinner`}</pre></code>
                        </div>
                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What is the PHP control structure for executing a single block of code based on a condition?", a: "if" },
                { q: "What block of code is executed in switch… case if no condition is met?", a: "Default" },
                { q: "What PHP control structure is similar to switch… case?", a: "switch" },
                { q: "What logic does the if… then… else control structure in PHP evaluate?", a: "Boolean" },
                { q: "What is the simplest control structure in PHP?", a: "if" }
            ]
            break;

            case 'Functions in PHP':
            name = 'Functions in PHP';
            cases = [
                { value: 'Case1', data:
                 <div className='case-div'>
                    <p>PHP function is a piece of code that can be reused many times. It can take input as argument list and return value. There are thousands of built-in functions in PHP.</p>
                    <br/>
                    <h4>PHP User-defined Functions</h4>
                    <p>We can declare and call user-defined functions easily. Let's see the syntax to declare user-defined functions.</p>
                    <p>Syntax</p>
                    <div className='code-block'><code><pre>{`function functionname(){  
//code to be executed  
}  `}</pre></code></div>
<p>Example</p>
<div className='code-block'><code><pre>{`<?php  
function sayHello(){  
echo "Hello PHP Function";  
}  
sayHello();//calling function  
?> `}</pre></code></div>
<p>Output:</p>
<div className='code-block'><code><pre>{`Hello PHP Function`}</pre></code></div>



                </div>},
                { value: 'Case2', data: <div className='case-div'>
                    <h4>PHP Function Arguments</h4>
                    <p>We can pass the information in PHP function through arguments which is separated by comma.</p>
                    <p>Example 1</p>
                    <div className='code-block'><code><pre>{`<?php  
function sayHello($name){  
echo "Hello $name<br/>";  
}  
sayHello("Sonoo");  
sayHello("Vimal");  
sayHello("John");  
?>  `}</pre></code></div>
<p>Output:</p>
<div className='code-block'><code><pre>{`Hello Sonoo
Hello Vimal
Hello John`}</pre></code></div>

          <br/>
          <p>Example 2</p>
                    <div className='code-block'><code><pre>{`<?php  
function sayHello($name,$age){  
echo "Hello $name, you are $age years old<br/>";  
}  
sayHello("Sonoo",27);  
sayHello("Vimal",29);  
sayHello("John",23);  
?>  `}</pre></code></div>
<p>Output:</p>
<div className='code-block'><code><pre>{`Hello Sonoo, you are 27 years old
Hello Vimal, you are 29 years old
Hello John, you are 23 years old`}</pre></code></div>
   </div> },
                { value: 'Case3', data:
                <div className='case-div'>
                    <h4>PHP Call By Reference</h4>
                    <p>Value passed to the function doesn't modify the actual value by default (call by value). But we can do so by passing value as a reference.</p>
                    <p>By default, value passed to the function is call by value. To pass value as a reference, you need to use ampersand (&) symbol before the argument name.</p>
                    <p>Example</p>
                    <div className='code-block'><code><pre>{`<?php  
function adder(&$str2)  
{  
    $str2 .= 'Call By Reference';  
}  
$str = 'Hello ';  
adder($str);  
echo $str;  
?>  `}</pre></code></div>
<p>Output:</p>
<div className='code-block'><code><pre>{`Hello Call By Reference`}</pre></code></div>
                </div>},
                { value: 'Case4', data:
                <div className='case-div'>
                    <h4>PHP Function: Default Argument Value</h4>
                    <p>We can specify a default argument value in function. While calling PHP function if you don't specify any argument, it will take the default argument. Let's see a simple example of using default argument value in PHP function.</p>
                    <p>Example</p>
                    <div className='code-block'><code><pre>{`<?php  
function sayHello($name="Sonoo"){  
echo "Hello $name<br/>";  
}  
sayHello("Rajesh");  
sayHello();//passing no value  
sayHello("John");  
?>  `}</pre></code></div>
<p>Output:</p>
<div className='code-block'><code><pre>{`Hello Rajesh
Hello Sonoo
Hello John`}</pre></code></div>
                </div> },
                { value: 'Case5', data: 
                <div className='case-div'>
                     <h4>PHP Function: Returning Value</h4>
                    <p>Example</p>
                    <div className='code-block'><code><pre>{`<?php  
function cube($n){  
return $n*$n*$n;  
}  
echo "Cube of 3 is: ".cube(3);  
?>  `}</pre></code></div>
<p>Output:</p>
<div className='code-block'><code><pre>{`Cube of 3 is: 27`}</pre></code></div>
                </div> },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What is taken if no argument is specified while calling a PHP function with default argument value", a: "Default" },
                { q: "What symbol is used before the argument name to pass a value as a reference in PHP?", a: "&" },
                { q: "What type of code can be reused many times in PHP?", a: "Function" },
                { q: " What is separated by commas in PHP function arguments?", a: "List" },
                { q: "What type of functions can be easily declared and called in PHP?", a: "User-defined" }
            ]
            break;


        case 'Arrays in PHP':
            name = 'Arrays in PHP';
            cases = [
                {
                    value: 'Case1', data:
                     <div className='case-div'>
                        <p>PHP array is an ordered map (contains value on the basis of key). It is used to hold multiple values of similar type in a single variable.</p>
                        <p>PHP Array Types</p>
                        <h3>Indexed Array</h3><br />
                        <p>PHP index is represented by number which starts from 0. We can store number, string and object in the PHP array. All PHP array elements are assigned to an index number by default.</p>
                        <p>There are two ways to define indexed array:</p>
                        <p>1st way:</p>
                        <div className='code-block'><code><pre>{`$season=array("summer","winter","spring","autumn");  `}</pre></code></div>
                        <p>2nd way:</p>
                        <div className='code-block'><code><pre>{`$season[0]="summer";  
$season[1]="winter";  
$season[2]="spring";  
$season[3]="autumn";  `}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case2', data:
                     <div className='case-div'>
                        <p>Example 1</p>
                        <div className='code-block'><code><pre>{`<?php  
$season=array("summer","winter","spring","autumn");  
echo "Season are: $season[0], $season[1], $season[2] and $season[3]";  
?>  `}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`Season are: summer, winter, spring and autumn`}</pre></code></div>
                        <p>Example 2</p>
                        <div className='code-block'><code><pre>{`<?php  
$season[0]="summer";  
$season[1]="winter";  
$season[2]="spring";  
$season[3]="autumn";  
echo "Season are: $season[0], $season[1], $season[2] and $season[3]";  
?>  `}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`Season are: summer, winter, spring and autumn`}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case3', data:
                     <div className='case-div'>
                        <h3>Associative Array</h3><br />
                        <p>We can associate name with each array elements in PHP using {"=>"} symbol.</p>
                        <p>There are two ways to define indexed array:</p>
                        <p>1st way:</p>
                        <div className='code-block'><code><pre>{`$salary=array("Sonoo"=>"350000","John"=>"450000","Kartik"=>"200000");  `}</pre></code></div>
                        <p>2nd way:</p>
                        <div className='code-block'><code><pre>{`$salary["Sonoo"]="350000";  
$salary["John"]="450000";  
$salary["Kartik"]="200000";  `}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <p>Example 1</p>
                        <div className='code-block'><code><pre>{`<?php    
$salary=array("Sonoo"=>"350000","John"=>"450000","Kartik"=>"200000");    
echo "Sonoo salary: ".$salary["Sonoo"]."<br/>";  
echo "John salary: ".$salary["John"]."<br/>";  
echo "Kartik salary: ".$salary["Kartik"]."<br/>";  
?>    `}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`Sonoo salary: 350000
John salary: 450000
Kartik salary: 200000`}</pre></code></div>
                        <p>Example 2</p>
                        <div className='code-block'><code><pre>{`<?php    
$salary["Sonoo"]="350000";    
$salary["John"]="450000";    
$salary["Kartik"]="200000";    
echo "Sonoo salary: ".$salary["Sonoo"]."<br/>";  
echo "John salary: ".$salary["John"]."<br/>";  
echo "Kartik salary: ".$salary["Kartik"]."<br/>";  
?>    `}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`Sonoo salary: 350000
John salary: 450000
Kartik salary: 200000`}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case5', data:
                     <div className='case-div'>
                        <h3>Multidimensional Array</h3><br />
                        <p>PHP multidimensional array is also known as array of arrays. It allows you to store tabular data in an array. PHP multidimensional array can be represented in the form of matrix which is represented by row * column.</p>
                        <p>Definition:</p>
                        <div className='code-block'><code><pre>{`$emp = array  
  (  
  array(1,"sonoo",400000),  
  array(2,"john",500000),  
  array(3,"rahul",300000)  
  );  `}</pre></code></div><br />
                        <p>Example</p>
                        <Table variant='info'>
                            <tbody>
                                <tr>
                                    <th style={{ textAlign: "center" }}>Id</th>
                                    <th style={{ textAlign: "center" }}>Name</th>
                                    <th style={{ textAlign: "center" }}>Salary</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>sonoo</td>
                                    <td>40000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>john</td>
                                    <td>500000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>rahul</td>
                                    <td>300000</td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                },
                {
                    value: 'Case6', data: <div className='case-div'>
                        <p>Program:</p>
                        <div className='code-block'><code><pre>{`<?php    
$emp = array  
  (  
  array(1,"sonoo",400000),  
  array(2,"john",500000),  
  array(3,"rahul",300000)  
  );  
  
for ($row = 0; $row < 3; $row++) {  
  for ($col = 0; $col < 3; $col++) {  
    echo $emp[$row][$col]."  ";  
  }  
  echo "<br/>";  
}  
?>    `}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`1 sonoo 400000 
2 john 500000 
3 rahul 300000 `}</pre></code></div>
                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What type of map is PHP array?", a: "Ordered" },
                { q: "How can you associate a name with each array element in PHP?", a: "=>" },
                { q: "What type of index does an indexed array in PHP use?", a: "Number" },
                { q: "What does PHP indexed array start from?", a: "0" },
                { q: "How are PHP array elements assigned by default?", a: "index" }
            ]
            break;

        case 'Strings in PHP':
            name = 'Strings in PHP';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div'>
                        <p>A string is a sequence of letters, numbers, special characters and arithmetic values or combination of all. The simplest way to create a string is to enclose the string literal (i.e. string characters) in single quotation marks ('), like this:</p>
                        <div className='code-block'><code><pre>{`$my_string = 'Hello World';`}</pre></code></div>
                        <p>Strings enclosed in single-quotes are treated almost literally, whereas the strings delimited by the double quotes replaces variables with the string representations of their values as well as specially interpreting certain escape sequences.</p>
                        <p>The escape-sequence replacements are:</p>
                        <p><ul><li>\n is replaced by the newline character</li>
                            <li>\r is replaced by the carriage-return character</li>
                            <li>\t is replaced by the tab character</li>
                            <li>\$ is replaced by the dollar sign itself ($)</li>
                            <li>\" is replaced by a single double-quote (")</li>
                            <li>\\ is replaced by a single backslash (\)</li>
                        </ul></p>
                        <p>Example</p>
                        <div className='code-block'><code><pre>{`<?php
$my_str = 'World';
echo "Hello, $my_str!<br>";      // Displays: Hello World!
echo 'Hello, $my_str!<br>';      // Displays: Hello, $my_str!
 
echo '<pre>Hello World!</pre>'; // Displays: Hello\tWorld!
echo "<pre>Hello World!</pre>"; // Displays: Hello   World!
echo 'I\'ll be back';            // Displays: I'll be back
?>`}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <h3>Manipulating PHP Strings</h3>
                        <br />
                        <h4 style={{ textDecoration: 'underline' }}>Calculating the Length of a String</h4>
                        <p>The strlen() function is used to calculate the number of characters inside a string. It also includes the blank spaces inside the string.</p>
                        <div className='code-block'><code><pre>{`<?php
$my_str = 'Welcome to Tutorial Republic';
 
echo strlen($my_str);
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: 28`}</pre></code></div>
                        <br />
                        <h4 style={{ textDecoration: 'underline' }}>Counting Number of Words in a String</h4>
                        <p>The str_word_count() function counts the number of words in a string.</p>
                        <div className='code-block'><code><pre>{`<?php
$my_str = 'The quick brown fox jumps over the lazy dog.';
 
echo str_word_count($my_str);
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: 9`}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case3', data: <div className='case-div'>
                        <h4 style={{ textDecoration: 'underline' }}>Replacing Text within Strings</h4>
                        <p>The str_replace() replaces all occurrences of the search text within the target string.</p>
                        <div className='code-block'><code><pre>{`<?php
$my_str = 'If the facts do not fit the theory, change the facts.';
 
// Display replaced string
echo str_replace("facts", "truth", $my_str);
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: If the truth do not fit the theory, change the truth.`}</pre></code></div>
                        <br />
                        <h4 style={{ textDecoration: 'underline' }}>Reversing a String</h4>
                        <p>The strrev() function reverses a string.</p>
                        <div className='code-block'><code><pre>{`<?php
$my_str = 'You can do anything, but not everything.';
 
// Display reversed string
echo strrev($my_str);
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: .gnihtyreve ton tub ,gnihtyna od nac uoY`}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case4', data: <div className='case-div'>
                        <h4 style={{ textDecoration: 'underline' }}>String Concatenation Operator</h4>
                        <p>To concatenate two string variables together, PHP uses the dot (.) operator</p>
                        <div className='code-block'><code><pre>{`<?php
   $string1="Hello World";
   $string2="1234";

   echo $string1 . " " . $string2;
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: Hello World 1234`}</pre></code></div>
                        <br />
                        <h4 style={{ textDecoration: 'underline' }}>The strpos() Function</h4>
                        <p>The strpos() function is used to search for a string or character within a string.</p>
                        <p><ul>
                            <li>If a match is found in the string, this function will return the position of the first match.</li>
                            <li>If no match is found, it will return FALSE.</li>
                        </ul></p>
                        <div className='code-block'><code><pre>{`<?php
   echo strpos("Hello world!","world");
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: 6`}</pre></code></div>

                    </div>
                },
                {
                    value: 'Case5', data: <div className='case-div'>
                        <h4 style={{ textDecoration: 'underline' }}>PHP strtolower() Function</h4>
                        <p>Convert all characters to lowercase:</p>
                        <div className='code-block'><code><pre>{`<?php
echo strtolower("Hello WORLD.");
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: hello world.`}</pre></code></div>
                        <br />
                        <h4 style={{ textDecoration: 'underline' }}>PHP strtoupper() Function</h4>
                        <p>Convert all characters to uppercase:</p>
                        <div className='code-block'><code><pre>{`<?php
echo strtoupper("Hello WORLD!");
?>`}</pre></code></div>
                        <br />
                        <div className='code-block'><code><pre>{`Outputs: HELLO WORLD!`}</pre></code></div>

                    </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },

            ];
            ques = [
                { q: "What function counts the number of characters inside a string in PHP?", a: "strlen" },
                { q: " What escape sequence is replaced by the newline character?", a: "\n" },
                { q: "What PHP function counts the number of words in a string?", a: "str_word_count" },
                { q: "What PHP function replaces all occurrences of the search text within the target string?", a: " str_replace" },
                { q: "What PHP function converts all characters to lowercase?", a: "strtolower" }
            ]
            break;


        case 'Super Global Variables in PHP':
            name = 'Super Global Variables in PHP';
            cases = [
                {
                    value: 'Case1', data: <div className='case-div' >
                        <p>Several predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special.</p>
                        <p>The PHP superglobal variables are:</p>
                        <h4>PHP $GLOBALS</h4>
                        <p>$GLOBALS is a PHP super global variable which is used to access global variables from anywhere in the PHP script (also from within functions or methods).</p>
                        <p>PHP stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable.
                            <b />
                            The example below shows how to use the super global variable $GLOBALS:</p>
                        <div className='code-block'><code><pre>{`<?php
$x = 75;
$y = 25;
 
function addition() {
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}
 
addition();
echo $z;
?>`}</pre></code></div>
                        <p>Output:
                            <div className='code-block'><code><pre>{`100`}</pre></code></div>
                        </p>
                    </div>
                },
                {
                    value: 'Case2', data: <div className='case-div'>
                        <h4>PHP $_SERVER</h4>
                        <p>$_SERVER is a PHP super global variable which holds information about headers, paths, and script locations.
                            <br />
                            The example below shows how to use some of the elements in $_SERVER:</p>
                        <div className='code-block'><code><pre>{`<?php
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
?>`}</pre></code></div>
                        <p>Output:</p>
                        <div className='code-block'><code><pre>{`HelloWorld.php<br><br><br><br><br>HelloWorld.php
PHP Notice:  Undefined index: SERVER_NAME in /HelloWorld.php on line 4
PHP Notice:  Undefined index: HTTP_HOST in /HelloWorld.php on line 6
PHP Notice:  Undefined index: HTTP_REFERER in /HelloWorld.php on line 8
PHP Notice:  Undefined index: HTTP_USER_AGENT in /HelloWorld.php on line 10`}</pre></code></div>
                        <br />
                                           </div>
                },

                { value: 'Case3', data: <div className='case-div'>
                         <br />
                <h4>PHP $_GET</h4>
                <p>PHP $_GET can also be used to collect form data after submitting an HTML form with method="get".</p>
                <p>Example:</p>
                <div className='code-block'><code><pre>{`<html>
<body>

<?php
echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>

</body>
</html>`}</pre></code></div>
            </div> },
                { value: 'Case4', data: <div className='case-div'>
<h4>PHP $_POST</h4>
                    <p>PHP $_POST is widely used to collect form data after submitting an HTML form with method="post". $_POST is also widely used to pass variables.</p>
                    <br />
                <div className='code-block'><code><pre>{`
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_POST['fname'];
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo $name;
    }
}
?>

</body>
</html>`}</pre></code></div>
       
                </div> },
                { value: 'Case5', data: <div className='case-div'>
                     <h4>PHP $_REQUEST</h4>
                        <p>PHP $_REQUEST is used to collect data after submitting an HTML form.</p>
                        <p>Example:</p>
                        <div className='code-block'><code><pre>{`<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_REQUEST['fname'];
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo $name;
    }
}
?>

</body>
</html>`}</pre></code></div>

                </div> },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What superglobal variable in PHP holds information about headers, paths, and script locations?", a: " $_SERVER" },
                { q: " What superglobal variable in PHP is used to collect data after submitting an HTML form?", a: " $_REQUEST" },
                { q: "What PHP variable holds all global variables in an array?", a: "$GLOBALS" },
                { q: "What HTML form method does $_POST collect data from?", a: "post" },
                { q: "What PHP superglobal is used to access information about headers?", a: "$_SERVER" }
            ]
            break;

        case 'Form Handling in PHP':
            name = 'Form Handling in PHP';
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

        case 'File Handling in PHP':
            name = 'File Handling in PHP';
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

        case 'Working with Dates and Times in PHP':
            name = 'Working with Dates and Times in PHP';
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


        case 'Error Handling in PHP':
            name = 'Error Handling in PHP';
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


        case 'Sessions and Cookies in PHP':
            name = 'Sessions and Cookies in PHP';
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

        case 'Working with Databases in PHP':
            name = 'Working with Databases in PHP';
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


        case 'Connecting to MySQL Database in PHP':
            name = 'Connecting to MySQL Database in PHP';
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


        case 'Executing SQL Queries in PHP':
            name = 'Executing SQL Queries in PHP';
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

        case 'Fetching Data from Database in PHP':
            name = 'Fetching Data from Database in PHP';
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