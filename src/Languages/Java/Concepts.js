// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "Java", complete = false;
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


        case 'Introduction to java':
            name = 'Introduction to java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Java Introduction</p>
                            <p>What is Java?</p>
                            <p>Java is a popular programming language, created in 1995.</p>
                            <p>It is used for:<br></br>
                                1.  Mobile applications (specially Android apps)<br></br>
                                2.  Desktop applications<br></br>
                                3.  Web applications<br></br>
                                4.  Web servers and application servers<br></br>
                                5.  Games<br></br>
                                6.  Database connection<br></br>
                                And much, much more!<br></br>
                            </p>
                        </div>

                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Why Use Java?</p>
                            <p>1. Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)<br></br>
                                2. It is one of the most popular programming languages in the world<br></br>
                                3. It has a large demand in the current job market<br></br>
                                4. It is easy to learn and simple to use<br></br>
                                5. It is open-source and free<br></br>
                                6. It is secure, fast and powerful<br></br>
                                7. It has huge community support (tens of millions of developers)<br></br>
                                8. Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs<br></br>
                            </p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Java Syntax</p>
                            <p> we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:   </p>
                            <p>Main.java</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>Hello World</p>
                            <p>Note:<br></br>Java is case-sensitive<br></br>
                                Every line of code that runs in Java must be inside a class<br></br>
                                The name of the java file must match the class name.<br></br>
                                When saving the file, save it using the class name and add ".java" to the end of the filename.
                            </p>
                        </div>
                },

                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Let's learn the program line by line</p>
                            <p>The main Method:</p>
                            <p>The main() method is required and you will see it in every Java program:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public static void main(String[] args)`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p> Any code inside the main() method will be executed. Don't worry about the keywords before and after main. You will get to know them bit by bit while reading this
                            </p>

                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>System.out.println():</p>
                            <p>Inside the main() method, we can use the println() method to print a line of text to the screen:</p>
                            <p>System is a built-in Java class that contains useful members, such as out, which is short for "output". The println() method, short for "print line", is used to print a value to the screen (or a file).</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public static void main(String[] args) {
  System.out.println("Hello World");
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Note: <br></br> The curly braces { } marks the beginning and the end of a block of code.</p>

                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What should be extension to the filename when saving a Java file?", a: ".java" },
                { q: "Which method is used to print a line of text in Java?", a: "println()" },
                { q: "Which method is commonly used to start Java programs?", a: "main()" },
                { q: "Where should every line of Java code be placed for execution?", a: "class" },
                { q: "What does println() stand for?", a: "Print line" }
            ]
            break;


        case 'Basics of java':
            name = 'Basics of java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Java Output / Print</p>
                            <p>Print Text:</p>
                            <p>You learned from the previous chapter that you can use the println() method to output values or print text in Java:</p>
                            <p>You can add as many println() methods as you want. Note that it will add a new line for each method:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`System.out.println("Hello World!");  //Output:Hello World!
System.out.println("I am learning Java.");  //Output:I am learning Java.
System.out.println("It is awesome!");  //Output:It is awesome!`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:Hello World!<br></br>
                                I am learning Java.<br></br>
                                It is awesome!<br></br>
                            </p>
                            <p>Double Quotes: <br></br>
                                When you are working with text, it must be wrapped inside double quotations marks "". <br></br>

                                If you forget the double quotes, an error occurs:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`System.out.println("This sentence will work!");
System.out.println(This sentence will produce an error);`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },

                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Java Output / Print</p>
                            <p>The Print() Method</p>
                            <p>There is also a print() method, which is similar to println().</p>
                            <p>The only difference is that it does not insert a new line at the end of the output:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`System.out.print("Hello World! ");
System.out.print("I will print on the same line.");`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>Hello World! I will print on the same line.</p>
                        </div>
                },

                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Java Output / Print</p>
                            <p>Print Numbers</p>
                            <p>You can also use the println() method to print numbers.</p>
                            <p>However, unlike text, we don't put numbers inside double quotes:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`System.out.println(3);
System.out.println(358);
System.out.println(50000);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>3<br></br>358<br></br>50000</p>
                        </div>
                },

                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Java Comments</p>
                            <p>Single-line Comments:</p>
                            <p>Single-line comments start with two forward slashes (//).<br></br>
                                Any text between // and the end of the line is ignored by Java (will not be executed).<br></br>
                                This example uses a single-line comment before a line of code:</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`System.out.println("Hello World"); // This is a comment`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>Hello World</p>
                        </div>
                },

                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Java Comments</p>
                            <p>Java Multi-line Comments</p>
                            <p>Multi-line comments start with /* and ends with */.<br></br>
                                Any text between /* and */ will be ignored by Java.<br></br>
                                This example uses a multi-line comment (a comment block) to explain the code:</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`/* The code below will print the words Hello World
to the screen, and it is amazing */
System.out.println("Hello World");`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>Hello World</p>
                        </div>
                },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What method in Java is similar to println() but doesn't add a new line?", a: "print()" },
                { q: "What characters start a single-line comment in Java?", a: "//" },
                { q: "How do multi-line comments start in Java?", a: "/*" },
                { q: "Which type of comments are enclosed between /* and */?", a: "Multi-line" },
                { q: "How many forward slashes start a single-line comment in Java?", a: "2" }
            ]
            break;


        case 'Access modifiers in java':
            name = 'Access modifiers in java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Access modifiers in java:</p>
                            <p>1. Public:<br></br>
                                - Public members are accessible from any other class, regardless of the package. <br></br>
                                - This means that classes, methods, variables, and constructors marked as public can be accessed from anywhere in your program.<br></br>
                                - Public access should be used for members that are meant to be widely accessible and part of the public interface of your class or package.
                            </p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Access modifiers in java:</p>
                            <p>2. Private:<br></br>
                                - Private members are accessible only within the same class.<br></br>
                                - They are not visible to any other class, including subclasses.<br></br>
                                - Private access is used to hide implementation details and to enforce encapsulation by preventing direct access to sensitive data or methods from outside the class.
                            </p>

                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Access modifiers in java:</p>
                            <p>3. Protected:<br></br>
                                - Protected members are accessible within the same package or subclasses, even if they are in different packages.<br></br>
                                - This means that subclasses outside the package can access protected members only through inheritance.<br></br>
                                - Protected access is useful when you want to allow subclasses to access certain members while still restricting access to other classes.
                            </p>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Access modifiers in java:</p>
                            <p>4. Default (no modifier):<br></br>
                                - If no access modifier is specified, the member has default (package-private) access.<br></br>
                                - Default members are accessible only within the same package.<br></br>
                                - They are not visible to classes outside the package, even if they are in the same project.<br></br>
                                - Default access is useful for creating classes with package-private members that are intended to be used only within a specific package.
                            </p>

                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class MyClass {
    public int publicVar; // Accessible from any other class
    private int privateVar; // Accessible only within MyClass
    protected int protectedVar; // Accessible within the same package or subclasses
    int defaultVar; // Accessible only within the same package
}`}
                                    </pre>
                                </code>
                            </div><br></br>
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


        case 'Variables, constants and keywords in java':
            name = 'Variables, constants and keywords in java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Java Variables</p>
                            <p>Variables are containers for storing data values.<br></br>
                                In Java, there are different types of variables, for example:</p>
                            <p>String - stores text, such as "Hello". String values are surrounded by double quotes<br></br>
                                int - stores integers (whole numbers), without decimals, such as 123 or -123<br></br>
                                float - stores floating point numbers, with decimals, such as 19.99 or -19.99<br></br>
                                char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes<br></br>
                                boolean - stores values with two states: true or false
                            </p>
                            <p>Syntax:</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`type variableName = value;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Create a variable called name of type String and assign it the value "John":</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`String name = "Jivaa";
System.out.println(name);`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>Jivaa</p>
                        </div>
                },

                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Java constants</p>
                            <p>In Java, constants are typically declared using the final keyword</p>
                            <p>This keyword indicates that the value of the variable cannot be changed once it has been assigned. </p>
                            <p> Constants are often declared using static final modifiers to make them class-level constants accessible without needing an instance of the class. For example:</p>
                            <p>Identifier name must be in capital letters.</p>
                            <p>Syntax:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`static final datatype identifier_name=value;`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class Constants {
    public static final int MAX_VALUE = 100;
    public static final String APPLICATION_NAME = "MyApp";
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },

                {
                    value: 'Case3', data:


                        <div className='case-div'>
                            <p>Java Keywords</p>
                            <p>Java has a set of keywords that are reserved words that cannot be used as variables, methods, classes, or any other identifiers:</p>
                            <p><pre>{`    abstract    assert      boolean     break       byte
    case        catch       char        class       const  
    continue    default     do          double      else
    enum        extends     final       finally     float     
    for         if          goto        implements  import  
    instanceof  int         interface   long        native
    new         package     private     protected   public 
    return      short       static      strictfp    synchronized
    switch      super       this        throw       throws
    transient   try         void        volatile    while`}</pre></p>

                        </div>
                },
                // { value: 'Case4', data: 'DatatypesCase 4 data' },
                //{ value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "How are constants typically declared in Java?", a: "final" },
                { q: "What type of data does String store?", a: "Text" },
                { q: "Which data type stores whole numbers without decimals?", a: "int" },
                { q: "What type of numbers does float store?", a: "Decimals" },
                { q: "Can the value of a variable declared with the final keyword be modified after assignment?", a: "No" }
            ]
            break;

        case 'Datatypes in java':
            name = 'Datatypes in java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Data types in java</p>
                            <p>A datatype is a classification that specifies the type of data that a variable or object can hold in computer programming.</p>
                            <p>Data Types:<br></br>
                                - byte: 8-bit signed integer (-128 to 127)<br></br>
                                - short: 16-bit signed integer (-32,768 to 32,767)<br></br>
                                - int: 32-bit signed integer (-2^31 to 2^31 - 1)<br></br>
                                - long: 64-bit signed integer (-2^63 to 2^63 - 1)<br></br>
                                - float: 32-bit floating point (single precision)<br></br>
                                - double: 64-bit floating point (double precision)<br></br>
                                - char: 16-bit Unicode character<br></br>
                                - boolean: Represents true or false values<br></br>
                            </p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>byte: It's a signed 8-bit integer.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`byte myByte = 10;`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>short: It's a signed 16-bit integer.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`short myShort = 1000;`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:

                        <div className='case-div' >
                            <p>int: It's a signed 32-bit integer.</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int myInt = 100000;`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>long: It's a signed 64-bit integer.</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`long myLong = 100000000L;`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div' >
                            <p>float: It's a single-precision 32-bit floating-point.</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`float myFloat = 3.14f;`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>double: It's a double-precision 64-bit floating-point.</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`double myDouble = 3.14159;`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div' >
                            <p>char: It's a single 16-bit Unicode characte</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`char myChar = 'A';`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>boolean: It represents true or false values</p>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`boolean myBoolean = true;`}
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
                { q: "What is the range of values for byte data type?", a: "128 to 127" },
                { q: "How many bits does a short data type occupy?", a: "16" },
                { q: "What is the size of long data type in bits?", a: "64" },
                { q: "Which data type represents true or false values?", a: "boolean" },
                { q: "What is the data type for representing 16-bit Unicode characters?", a: "char" }
            ]
            break;


        case 'Operators in java':
            name = 'Operators in java';
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
                                        {`
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
                                        {`
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
                                        {`

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
                                        {`

`}
                                    </pre>
                                </code>
                            </div><br></br>
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


        case 'Arrays in java':
            name = 'Arrays in java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Array in Java</p>
                            <p>ava, an array is a data structure used to store a fixed-size sequential collection of elements of the same type.<br></br>
                                Arrays can hold primitive data types (like int, char, etc.) as well as objects (like String, MyClass, etc.).<br></br>

                                Here's a breakdown of key aspects of arrays in Java:<br></br>

                                1. Declaration: To declare an array, you specify the type of elements it will hold, followed by square brackets [] and the array name. For example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int[] myArray; // Declares an array of integers
String[] names; // Declares an array of strings
`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Initialization:<br></br>
                                After declaring an array, you must initialize it with a specific size.<br></br>
                                You can do this using the new keyword, followed by the type of elements and the size of the array in square brackets.<br></br>
                                For example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`myArray = new int[5]; // Creates an array of 5 integers
names = new String[10]; // Creates an array of 10 strings`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Alternatively, you can declare and initialize an array in one step:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int[] myArray = new int[5]; // Declares and initializes an array of 5 integers`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Accessing Elements: You can access individual elements of an array using their index.<br></br>
                                In Java, arrays are zero-indexed, meaning the index of the first element is 0, the second element is 1, and so on. <br></br>
                                For example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`myArray[0] = 10; // Sets the first element of myArray to 10
int x = myArray[2]; // Retrieves the third element of myArray
`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            
                            <p>Length:
                                <br></br> The length of an array  (i.e., the number of elements it can hold) can be obtained using the length property.<br></br>
                                For example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int size = myArray.length; // Retrieves the length of myArray`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Iterating Over Arrays:<br></br>
                                You can use loops, such as for loops, to iterate over the elements of an array. <br></br>
                                For example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`for (int i = 0; i < myArray.length; i++) {
    // Access myArray[i] here
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Multidimensional Arrays</p>
                            <p>In Java, a multidimensional array is an array of arrays, where each element of the main array holds a reference to another array. <br></br>
                                These arrays can be of the same size or different sizes, depending on the application.<br></br> Multidimensional arrays are often used to represent matrices, tables, or other tabular data structures.<br></br>

                                Here's a detailed explanation of multidimensional arrays in Java:
                                <br></br>
                                Declaration and Initialization:<br></br>

                                You can declare and initialize a multidimensional array in Java using nested square brackets. For example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int[][] matrix = new int[3][3]; // Creates a 3x3 matrix
`}
                                    </pre>
                                </code>
                            </div><br></br>

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

        case 'Functions in java':
            name = 'Functions in java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Java Methods<br></br>
                                A method is a block of code which only runs when it is called.<br></br>

                                You can pass data, known as parameters, into a method.<br></br>

                                Methods are used to perform certain actions, and they are also known as functions.<br></br>

                                Why use methods? To reuse code: define the code once, and use it many times.
                            </p>

                            <p>Create a Method<br></br>
                                A method must be declared within a class. It is defined with the name of the method, followed by parentheses (). Java provides some pre-defined methods, such as System.out.println(), but you can also create your own methods to perform certain actions:<br></br>
                                Create a method inside Main:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class Main {
  static void myMethod() {
    // code to be executed
  }
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Example Explained<br></br>
                                myMethod() is the name of the method<br></br>
                                static means that the method belongs to the Main class and not an object of the Main class. <br></br>
                                void means that this method does not have a return value.</p>
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>Call a Method<br></br>
                                To call a method in Java, write the method's name followed by two parentheses () and a semicolon;<br></br>

                                In the following example, myMethod() is used to print a text (the action), when it is called:<br></br>

                                Example<br></br>
                                Inside main, call the myMethod() method:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class Main {
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod();
  }
}

// Outputs "I just got executed!"`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>A method can also be called multiple times:</p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Parameters and Arguments<br></br>
                                Information can be passed to methods as parameter. Parameters act as variables inside the method.<br></br>

                                Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.<br></br>

                                The following example has a method that takes a String called fname as parameter. When the method is called, we pass along a first name, which is used inside the method to print the full name:<br></br>

                                Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class Main {
  static void myMethod(String fname) {
    System.out.println(fname + " Refsnes");
  }

  public static void main(String[] args) {
    myMethod("Liam");
    myMethod("Jenny");
    myMethod("Anja");
  }
}
// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>When a parameter is passed to the method, it is called an argument. So, from the example above: fname is a parameter, while Liam, Jenny and Anja are arguments.</p>
                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>Multiple Parameters<br></br>
                                You can have as many parameters as you like:<br></br>

                                Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class Main {
  static void myMethod(String fname, int age) {
    System.out.println(fname + " is " + age);
  }

  public static void main(String[] args) {
    myMethod("Liam", 5);
    myMethod("Jenny", 8);
    myMethod("Anja", 31);
  }
}

// Liam is 5
// Jenny is 8
// Anja is 31`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Note that when you are working with multiple parameters, the method call must have the same number of arguments as there are parameters, and the arguments must be passed in the same order</p>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>Return Values<br></br>
                                The void keyword, used in the examples above, indicates that the method should not return a value. If you want the method to return a value, you can use a primitive data type (such as int, char, etc.) instead of void, and use the return keyword inside the method:
                                <br></br>
                                Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`public class Main {
  static int myMethod(int x) {
    return 5 + x;
  }

  public static void main(String[] args) {
    System.out.println(myMethod(3));
  }
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
                { q: "What is another term for methods in Java?", a: " Functions" },
                { q: "Where must a method be declared in Java?", a: "Class" },
                { q: "What are the variables specified after the method name inside the parentheses called?", a: "Parameters" },
                { q: "What keyword indicates that a method should not return a value?", a: " void" },
                { q: "What keyword do you use if you want a method to return a value in Java?", a: "return" }
            ]
            break;


        case 'Conditional flow in java':
            name = 'Conditional flow in java';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>Conditional flow statements in java <br></br>

                                Conditional flow statements in Java allow you to execute certain code blocks conditionally based on whether a specific condition is true or false. There are mainly three types of conditional flow statements in Java:
                            </p>
                            <p>
                                1. If Statement: The if statement is used to execute a block of code only if a specified condition is true. It can be followed by an optional else statement, which executes a block of code if the condition is false.<br></br>
                                The syntax is as follows:
                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`if (condition) {
    // code block to be executed if the condition is true
}`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>
                                Certainly! Let's delve deeper into conditional flow statements in Java.

                                1. if Statement:

                                The if statement is one of the most fundamental conditional statements in Java. It allows you to execute a block of code if a specified condition is true. The syntax is as follows:

                                java
                                Copy code
                                if (condition) {
                                    // code block to be executed if the condition is true
                                }
                                Optionally, you can also include an else block to execute a different block of code if the condition is false. The syntax for if-else is:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`if (condition) {
    // code block to be executed if the condition is true
} else {
    // code block to be executed if the condition is false
}
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Example:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int x = 10;
if (x > 5) {
    System.out.println("x is greater than 5");
} else {
    System.out.println("x is not greater than 5");
}
`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },

                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>The if-else if-else statement allows you to test multiple conditions. It is useful when you have multiple conditions to check and only want to execute one block of code based on the first condition that is true. The syntax is:

                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`if (condition1) {
    // code block to be executed if condition1 is true
} else if (condition2) {
    // code block to be executed if condition2 is true
} else {
    // code block to be executed if all conditions are false
}
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>You can have any number of else if blocks to test additional conditions.

                            </p>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>Example</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`int x = 10;
if (x > 10) {
    System.out.println("x is greater than 10");
} else if (x < 10) {
    System.out.println("x is less than 10");
} else {
    System.out.println("x is equal to 10");
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
                            <p>3. switch Statement:

                                The switch statement is used when you have a single expression that you want to evaluate against multiple possible values. It provides a more concise way to write multiple if-else if statements. The syntax is:

                            </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`switch (expression) {
    case value1:
        // code block to be executed if expression matches value1
        break;
    case value2:
        // code block to be executed if expression matches value2
        break;
    // more case statements as needed
    default:
        // code block to be executed if expression doesn't match any case
}
`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Here's a more detailed breakdown:<br></br>

                                Condition: In all these statements, the condition is an expression that evaluates to a boolean value (true or false). Based on the evaluation of this condition, the associated block of code is executed.
                                <br></br>
                                Execution Flow: The flow of execution depends on whether the condition evaluates to true or false. If the condition is true, the corresponding block of code is executed; otherwise, if there's an else or else if, the associated block of code under else or else if is executed.
                                <br></br>
                                Multiple Conditions: With if-else if-else and switch statements, you can test multiple conditions. In if-else if-else, the conditions are evaluated in order, and the block of code associated with the first true condition is executed. In switch, the expression is compared with each case value, and the block of code associated with the matching case is executed.
                                <br></br>
                                Default Case: In a switch statement, the default case is optional. If none of the case values match the expression, the block of code associated with default is executed.
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
                                        {`int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
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
                { q: "What Java statement allows you to execute a block of code conditionally based on whether a specified condition is true or false?", a: "if" },
                { q: "Which conditional statement is used when you have multiple conditions to check and only want to execute one block of code based on the first condition that is true?", a: "if-else if-else" },
                { q: "What Java statement is used when you have a single expression to evaluate against multiple possible values?", a: "switch" },
                { q: "In a switch statement, what keyword is used to define the block of code to be executed if none of the case values match the expression?", a: "default" },
                { q: "Which keyword is used to break out of a switch statement once a match is found?", a: "break" }
            ]
            break;

        case 'Control flow in java':
            name = 'Control flow in java';
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

        case 'Oops in java':
            name = 'Oops in java';
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

        case 'Classes and objects in java':
            name = 'Classes and objects in java';
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


        case 'Encapsulation in java':
            name = 'Encapsulation in java';
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


        case 'Inheritance in java':
            name = 'Inheritance in java';
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

        case 'Polymorphism in java':
            name = 'Polymorphism in java';
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


        case 'Abstraction in java':
            name = 'Abstraction in java';
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


        case 'Constructor in java':
            name = 'Constructor in java';
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

        case 'Abstract classes in java':
            name = 'Abstract classes in java';
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

        case 'Interfaces in java':
            name = 'Interfaces in java';
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


        case 'Enums in java':
            name = 'Enums in java';
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

        case 'Exception handling in java':
            name = 'Exception handling in java';
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

        case 'Threads in java':
            name = 'Threads in java';
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

        case 'File handling in java':
            name = 'File handling in java';
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