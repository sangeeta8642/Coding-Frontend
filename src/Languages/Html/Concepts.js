// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "Html", complete = false;
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
                            <p>What Is C++</p>
                            <p>C++ is a cross-platform language that can be used to create high-performance application</p>
                            <p>C++ was developed by Bjarne Stroustrup, as an extesnion</p>
                            <p>C++ gives programmers a high level of control over system resource and memory</p>
                            <p>The language was ,updated 4 major times in 2011, 2014, 2017 and 2020 to C++11, C++14, C++17, C++20</p>

                        </div>
                },
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


        case 'Introduction to html':
            name = 'Introduction to html';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>What is HTML?</p>
                            <p>HTML stands for Hyper Text Markup Language</p>
                            <p>HTML is the standard markup language for creating Web pages</p>
                            <p>HTML describes the structure of a Web page</p>
                          
                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>A Simple HTML Document</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>

</body>
</html>`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },

                {
                    value:
                        'Case3', data:
                        <div className='case-div'>
                            <p>Example Explained</p>
                            <p>The given declaration defines that this document is an HTML5 document</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>The given element is the root element of an HTML page</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<<html>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>The given element contains meta information about the HTML page</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<head>`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>The given element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<title>`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <p>The gievn element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<body>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>The given element defines a large heading</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<h1>`}
                                    </pre>
                                </code>
                            </div><br></br>

                        </div>
                },
                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>HTML Editors</p>
                            <p>HTML stands for Hyper Text Markup LanguageLearn HTML Using Notepad or TextEdit</p>
                            <p>For learning HTML we recommend a simple text editor like Notepad (PC)</p>
                            <p>Follow the steps below</p>
                            <p>Step 1: Open Notepad (PC)</p>
                            <p>Step 2: Write Some HTML</p>
                            <p>Save the HTML Page with extesnion .html like index.html</p>
                            <p>Step 4:Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").</p>
                        </div>
                },
                //{ value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Case8' },
                { value: 'Case9' },
                { value: 'Case10' },

                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "HTML stands for?", a: "Hyper Text Markup Language" },
                { q: "Which element specifies the title of an HTML page? ?", a: "<title>" },
                { q: "Where is meta information about the HTML page typically placed? ?", a: "<head>" },
                { q: "What HTML element is used to define the document's body", a: "<body>" },
                { q: "What file extension is commonly used for HTML pages ?", a: ".html" }
            ]
            break;


        case 'Basics of html':
            name = 'Basics of html';
            cases = [
                {
                    value: 'Case1', data:
                        <div className='case-div'>
                            <p>HTML Documents</p>
                            <p>All HTML documents must start with a document type declaration:<pre>{`<!DOCTYPE html>`}</pre></p>
                            <p>The HTML document itself begins with<pre>{`<html>`}</pre> and ends with <pre>{`</html>`}</pre></p>
                            <p>The visible part of the HTML document is between <pre>{`<body>`}</pre> and <pre>{`</body>`}</pre></p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Examples of some HTML elements:</p>

                        </div>
                },
                {
                    value: 'Case2', data:
                        <div className='case-div'>
                            <p>HTML Elements</p>
                            <p>The HTML element is everything from the start tag to the end tag:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<tagname>Content goes here...</tagname>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Examples of some HTML elements:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<h1>My First Heading</h1>
<p>My first paragraph.</p>
`}
                                    </pre>
                                </code>
                            </div><br></br>
                        </div>
                },
                {
                    value: 'Case3', data:
                        <div className='case-div'>
                            <p>HTML Headings</p>
                            <p>HTML headings are defined with the <pre>{`<h1> `}</pre>to <pre>{`<h6> `}</pre> tags.<br></br>

                                <pre>{`<h1> `}</pre>defines the most important heading.<pre>{`<h6> `}</pre> defines the least important heading: </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>
                            <h1>This is heading 1</h1>
                            <h2>This is heading 2</h2>
                            <h3>This is heading 3</h3>
                            <h4>This is heading 4</h4>
                            <h5>This is heading 5</h5>
                            <h6>This is heading 6</h6>
                            </p>
                        </div>
                },

                {
                    value: 'Case4', data:
                        <div className='case-div'>
                            <p>HTML Paragraphs</p>
                            <p>HTML paragraphs are defined with the<pre>{`<p>`}</pre>tag: </p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Output:<br></br>
                            <p>This is a paragraph.</p>
                            <p>This is another paragraph.</p>
                            </p>
                        </div>
                },
                {
                    value: 'Case5', data:
                        <div className='case-div'>
                            <p>HTML Comment Tag</p>
                            <p>You can add comments to your HTML source by using the following syntax:</p>
                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!-- Write your comments here -->`}
                                    </pre>
                                </code>
                            </div><br></br>
                            <p>Note: Comments are not displayed by the browser, but they can help document your HTML source code.</p>
                            <br></br>
                            <p>Hide Content:<br></br>
                                Comments can be used to hide content.<br></br>

                                This can be helpful if you hide content temporarily:</p>
                                <div className='code-block'>
                                <code >
                                    <pre>
                                        {`<!-- <p>This is another paragraph </p> -->`}
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
                { q: "What tag defines the most important heading?", a: "<h1>" },
                { q: "What tag defines the least important heading?", a: "<h6>" },
                { q: "What tag is used for HTML paragraphs?", a: "<p>" },
                { q: "What element marks the beginning of an HTML document?", a: "html" },
                { q: "What must all HTML documents start with?", a: "<!DOCTYPE html>" }
            ]
            break;


        case 'Text tags':
            name = 'Text tags';
            cases = [
                { value: 'Case1', data: 
                
                <div className='case-div'>
                <p>HTML Text Formatting</p>
                <p>HTML contains several elements for defining text with a special meaning.</p>
                <p>HTML Formatting Elements:</p>
                <p><pre>{`<b>`}- Bold text</pre></p>
                <p><pre>{`<strong>`}- Important text</pre></p>
                <p><pre>{`<i>`}-  Italic text</pre></p>
                <p><pre>{`<em>`}-Emphasized text</pre></p>
                <p><pre>{`<mark>`}- Marked text</pre></p>
                <p><pre>{`<small>`}- Smaller text</pre></p>
                <p><pre>{`<del>`}- Deleted text</pre></p>
                <p><pre>{`<ins>`}- Inserted text</pre></p>
                <p><pre>{`<sub>`}- Subscript text</pre></p>
                <p><pre>{`<sup>`}- Superscript text</pre></p>
                
            </div>
            },
                { value: 'Case2', data: 

                <div className='case-div'>
                <p>The HTML <pre>{`<b>`}</pre> element defines bold text, without any extra importance</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<b>This text is bold</b>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <b>This text is bold</b>
    
                </p>

                <p>The HTML <pre>{`<strong>`}</pre> element defines text with strong importance. The content inside is typically displayed in bold.
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<strong>This text is important!</strong>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <strong>This text is important!</strong>
                </p>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>The HTML <pre>{`<i>`}</pre> element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<i>This text is italic</i>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <i>This text is italic</i>
    
                </p>

                <p>The HTML <pre>{`<em>`}</pre> element defines emphasized text. The content inside is typically displayed in italic.
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<em>This text is emphasized</em>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <em>This text is emphasized</em>
                </p>
            </div>
            },
                { value: 'Case4', data: 
                
                <div className='case-div'>
                <p>The HTML <pre>{`<small>`}</pre> element defines smaller text</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<small>This is some smaller text.</small>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <small>This is some smaller text.</small>
                </p>

                <p>The HTML <pre>{`<mark>`}</pre> element defines text that should be marked or highlighted:
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p>Do not forget to buy <mark>milk</mark> today.</p>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <p>Do not forget to buy <mark>milk</mark> today.</p>
                </p>

                <p>The HTML <pre>{`<del>`}</pre> element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text:
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p>My favorite color is <del>blue</del> red.</p>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <p>My favorite color is <del>blue</del> red.</p>
                </p>
            </div>
            },
                { value: 'Case5', data: 

                <div className='case-div'>
                <p>The HTML <pre>{`<ins>`}</pre> element defines  a text that has been inserted into a document. Browsers will usually underline inserted text:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
                </p>

                <p>The HTML <pre>{`<sub>`}</pre> element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O:
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p>H<sub>2</sub>O</p>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <p>H<sub>2</sub>O</p>
                </p>

                <p>The HTML <pre>{`<sup>`}</pre> element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1]:

Example
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p>3<sup>2</sup> = 9</p>
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br>
                <p>3<sup>2</sup> = 9</p>

                </p>
            </div>
            },
            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },

                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Which HTML element specifies smaller text size ?", a: "<small>" },
                { q: "What HTML element marks or highlights text ?", a: "<mark>" },
                { q: "Which HTML element represents deleted text with a strikethrough ?", a: "<del>" },
                { q: "What HTML element defines bold text without adding extra importance ?", a: "<b>" },
                { q: "What HTML element defines subscript text, which appears slightly below the normal line?", a: "<sub>" }
            ]
            break;

        case 'Links, Images and Lists':
            name = 'Links, Images and Lists';
            cases = [
                { value: 'Case1', data: 

                <div className='case-div'>
                <p> HTML Links - Hyperlinks</p>
                <p>HTML links are hyperlinks. <br></br>
                You can click on a link and jump to another document.</p>
                <p>HTML Links - Syntax:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<a href="url">link text</a>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>The most important attribute of the <pre>{`<a>`}</pre> element is the href attribute, which indicates the link's destination.
                </p>

                <div className='code-block'>
                    <code >
                        <pre>
                            {`<a href="https://www.google.com/">Google go</a>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:<br></br><a href="https://www.google.com/">Google go</a></p>
                </div>
            },
                { value: 'Case2', data: 

                <div className='case-div'>
                <p>HTML Images </p>
                <p>Images can improve the design and the appearance of a web page</p>
                <p>The HTML <pre>{`<img>`}</pre> tag is used to embed an image in a web page.</p>
                <p>The <pre>{`<img>`}</pre> tag is empty, it contains attributes only, and does not have a closing tag.</p>
                <p>The <pre>{`<img>`}</pre> tag has two required attributes:<br></br>

src - Specifies the path to the image<br></br>
alt - Specifies an alternate text for the image</p><br></br>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<img src="pic_trulli.jpg" alt="Italian Trulli">`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case3', data:
                <div className='case-div'>
                <p>HTML Lists </p>
                <p>HTML lists allow web developers to group a set of related items in lists</p>
                <p>Unordered HTML List:</p>
                <p>An unordered list starts with the <pre>{`<ul>`}</pre> tag. Each list item starts with the <pre>{`<li>`}</pre> tag. <br></br>
                The list items will be marked with bullets (small black circles) by default</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
            
                <p>Ordered HTML List</p>
                <p>An ordered list starts with the <pre>{`<ol>`}</pre> tag. Each list item starts with the <pre>{`<li>`}</pre> tag. <br></br>
                The list items will be marked with numbers  by default</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
            
                <p>Here is a complete program having anchor tag, image tag, ol tag and ul tag</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Example</title>
</head>
<body>
    <!-- Anchor Tag -->
    <a href="https://www.example.com">Visit Example Website</a>
    
    <!-- Image Tag -->
    <img src="example.jpg" alt="Example Image">

    <!-- Ordered List -->
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>

    <!-- Unordered List -->
    <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
    </ul>
</body>
</html>
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
                { q: "What tag is used for each item in both ordered and unordered lists ?", a: "<li>" },
                { q: "Which tag indicates the start of an ordered list ?", a: "<ol>" },
                { q: "Which tag indicates the start of an unordered list?", a: "<ul>" },
                { q: "What HTML tag defines a hyperlink ?", a: "<a>" },
                { q: "What is the most important attribute of the <a> element", a: "href" }
            ]
            break;


        case 'Tables':
            name = 'Tables';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
            
                <p>HTML Tables</p>
                <p>HTML tables allow web developers to arrange data into rows and columns.</p>
                <p>A table in HTML consists of table cells inside rows and columns.</p>
                <p>Each table is defined by a <pre>{`<table>`}</pre> and a <pre>{`</table>`}</pre> tag. <br></br></p>
                <p>A simple HTML table:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
            
                <p>Table Cells</p>
                <p>Each table cell is defined by a <pre>{`<td>`}</pre> and a <pre>{`</td>`}</pre> tag. <br></br></p>
                <p>td stands for table data.</p>
                <p>Everything between <td> and </td> are the content of the table cell.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
            
                <p>Table Rows</p>
                <p>Each table row starts with a <pre>{`<tr>`}</pre> and ends with a <pre>{`</tr>`}</pre> tag. <br></br></p>
                <p>tr stands for table row.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>`}
                        </pre>
                    </code>
                </div><br></br>
                <p>You can have as many rows as you like in a table; just make sure that the number of cells are the same in each row.</p>

                </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
            
                <p>Table Headers</p>
                <p>Sometimes you want your cells to be table header cells. In those cases use the  <pre>{`<th>`}</pre> tag instead of the <pre>{`<td>`}</pre> tag. <br></br></p>
                <p>th stands for table header.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  </table>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
            
                <p>Here is the complete program</p>
               
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Table Example</title>
   
</head>
<body>
    <h2>HTML Table Example</h2>
    <table>
       
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
        
            <tr>
                <td>John</td>
                <td>30</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>25</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>Tom</td>
                <td>35</td>
                <td>Chicago</td>
            </tr>
       
    </table>
</body>
</html>
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Output:</p>
                <h2>HTML Table Example</h2>
    <table>
       
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
       
      
            <tr>
                <td>John</td>
                <td>30</td>
                <td>New York</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>25</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>Tom</td>
                <td>35</td>
                <td>Chicago</td>
            </tr>
        
    </table>
                

                </div>
            },

            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What HTML tag defines a table ?", a: "<table>" },
                { q: "What does the abbreviation td stand for in HTML tables", a: "Table data" },
                { q: "Which tag marks the beginning of a table row?", a: "<tr>" },
                { q: "What does the abbreviation tr stand for in HTML tables", a: "Table row" },
                { q: "which tag define a table header cell in HTML ?", a: "<th>" }
            ]
            break;


        case 'Forms':
            name = 'Forms';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
            
                <p>HTML Forms</p>
                <p>An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
                
                <p>The HTML <pre>{`<form>`}</pre> element is used to create an HTML form for user input:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<form>
.
form elements
.
</form>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
            
                <p>The <pre>{`<input>`}</pre>Element</p>
                <p>An <pre>{`<form>`}</pre>  element can be displayed in many ways, depending on the type attribute.</p>
                <p>example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`
Type                    Description
<input type="text">     Displays a single-line text input field
<input type="radio">    Displays a radio button`}
                        </pre>
                    </code>
                </div><br></br>

                </div>

               
            },
                { value: 'Case3', data:
                <div className='case-div'>
                <p>Text Fields</p>
                <p>The <pre>{`<input type="text">`}</pre>defines a single-line input field for text input.</p>
               
                <p>example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                
                <p>The <pre>{`<label>`}</pre>Element</p>
                <p>The <pre>{`<label>`}</pre> tag defines a label for many form elements.</p>
                <p>The <pre>{`<label>`}</pre> element is used to associate a text label with a form </p>
                <p>example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`}
                        </pre>
                    </code>
                </div><br></br>

                </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>Radio Buttons</p>
                <p>The <pre>{`<input type="radio">`}</pre> defines a radio button.</p>
                <p>Radio buttons let a user select ONE of a limited number of choices. </p>
                <p>example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p>Choose your favorite Web language:</p>

<form>
<input type="radio" >
<label >HTML</label><br>
<input type="radio">
<label>CS</label><br>
<input type="radio">
<label>JavaScript</label>
</form> 
`}
                        </pre>
                    </code>
                </div><br></br>

                <p>Checkboxes</p>
                <p>The <pre>{`<input type="radio">`}</pre> defines a checkbox.</p>
                <p>Checkboxes let a user select ZERO or MORE options of a limited number of choices. </p>
                <p>example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form> 
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
                { q: "What input type defines a checkbox in HTML forms ?", a: "Checkbox" },
                { q: "How many choices can a user select with a radio button ?", a: "One" },
                { q: "Which input type defines a radio button in HTML forms?", a: "Radio" },
                { q: "Which HTML input type defines a single-line input field for text input ?", a: "Text" },
                { q: "What HTML element is used to create a form?", a: "<form>" }
            ]
            break;

        case 'Attributes':
            name = 'Attributes';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>HTML Attributes<br></br>
All HTML elements can have attributes<br></br>
Attributes provide additional information about elements<br></br>
Attributes are always specified in the start tag<br></br>
Attributes usually come in name/value pairs like: name="value"</p>

<p>The href Attribute<br></br>
The a tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:
<br></br>
Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<a href="https://www.google.com/">Visit Google</a>`}
                        </pre>
                    </code>
                </div><br></br>

                <p>The src Attribute<br></br>
The img tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:<br></br>

Example</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`<img src="img_girl.jpg">
`}
                        </pre>
                    </code>
                </div><br></br>
<p>There are two ways to specify the URL in the src attribute:<br></br>

1. Absolute URL - Links to an external image that is hosted on another website<br></br>
2. Relative URL - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page.
</p>

            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>The width and height Attributes<br></br>
The img tag should also contain the width and height attributes, which specify the width and height of the image (in pixels)<br></br>
Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<img src="img_girl.jpg" width="500" height="600">`}
                        </pre>
                    </code>
                </div><br></br>
                <p>The alt Attribute<br></br>
The required alt attribute for the img tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.<br></br>
Example:</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`<img src="img_girl.jpg" alt="Girl with a jacket">`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>
                The style Attribute<br></br>
The style attribute is used to add styles to an element, such as color, font, size, and more.<br></br>
Example:
                </p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p style="color:red;">This is a red paragraph.</p>`}
                        </pre>
                    </code>
                </div><br></br>

                <p>The title Attribute<br></br>
The title attribute defines some extra information about an element.
<br></br>
The value of the title attribute will be displayed as a tooltip when you mouse over the element:<br></br>

Example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`<p title="I'm a tooltip">This is a paragraph.</p>`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case4', data:
                <div className='case-div'>
                <p>Always Use Lowercase Attributes:<br></br>
                he HTML standard does not require lowercase attribute names.<br></br>

The title attribute (and all other attributes) can be written with uppercase or lowercase like title or TITLE.<br></br>

However, We recommends lowercase attributes in HTML, and demands lowercase attributes for stricter document types like XHTML.
                </p>
                
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p> Always Quote Attribute Values<br></br>
The HTML standard does not require quotes around attribute values.

                </p>
                <div className='code-block'>
                                <code >
                                    <pre>
                                        {`Good:
<img src="img_girl.jpg"`}
                                    </pre>
                                </code>
                            </div><br></br>

                            <div className='code-block'>
                                <code >
                                    <pre>
                                        {`Bad:
<img src=img_girl.jpg`}
                                    </pre>
                                </code>
                            </div><br></br>
<p>Single or Double Quotes?<br></br>
Double quotes around attribute values are the most common in HTML, but single quotes can also be used.<br></br>

In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:</p>
            </div>
            },
            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },

            ];
            ques = [
                { q: "What does the alt attribute specify for the img tag?", a: "Alternate" },
                { q: " What do HTML elements have that provide additional information?", a: "Attributes" },
                { q: "What do the width and height attributes specify for the img tag?", a: " Dimensions" },
                { q: "In which case the attribute name should be write", a: "Lowercase" },
                { q: "What does the title attribute provide?", a: "Title" }
            ]
            break;


        case 'Layout':
            name = 'Layout';
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

        case 'Image mapping':
            name = 'Image mapping';
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

        case 'All the remaining tags':
            name = 'All the remaining tags';
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