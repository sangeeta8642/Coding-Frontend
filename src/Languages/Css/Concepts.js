// CombinedConcepts.js

import React, { useEffect, useState } from 'react';
import ContentPage from '../../CommonConcepts/ContentPage';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Concepts({ conceptType }) {
    let name, cases, ques, language = "Css", complete = false;
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


        case 'Introduction to css':
            name = 'Introduction to css';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>What is CSS?</p>
                <p>CSS stands for Cascading Style Sheets</p>
                <p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</p>
                <p>CSS saves a lot of work. It can control the layout of multiple web pages all at once</p>
                <p>External stylesheets are stored in CSS files</p>

            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Why Use CSS?</p>
                <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
                <p>Before CSS, tags like font, color, background style, element alignments, border and size had to be repeated on every web page. This was a very long process. CSS was created to solve this problem.</p>
                <p>CSS style definitions are saved in external CSS files so it is possible to change the entire website by changing just one file.</p>
                

            </div>
             },
                { value: 'Case3', data:
                <div className='case-div'>
                <p>CSS Syntax</p>
                <p>A CSS rule set contains a selector and a declaration block</p>
                <div className='code-block'>
                            <code >
                                <pre>
                                    {`h1{color:yellow; font-size:11px}`}
                                </pre>
                            </code>
                        </div><br></br>
            </div>
             },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>Let's understand the syntax one by one</p>
                <p>h1 is a selector and Selector indicates the HTML element you want to style. It could be any tag like <pre>{`<h1>`}</pre>,  <pre>{`<title>`}</pre> etc.</p>
                <p>The content inside the curly braces is called declaration blog and the declaration block can contain one or more declarations separated by a semicolon. For the last example, there are two declarations:</p>
                <p>color: yellow;<br></br>
font-size: 11 px;</p>
<p>Each declaration contains a property name and value, separated by a colon.</p>
<p>In the declaration blog Color is property and A Property is a type of attribute of HTML element. It could be color, border etc.</p>
<p>In the declaration blog yellow is the value and Values are assigned to CSS properties</p>

                <div className='code-block'>
                            <code >
                                <pre>
                                    {`Selector{Property1: value1; Property2: value2; ..........;}  `}
                                </pre>
                            </code>
                        </div><br></br>
            </div>
            },

            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },
          
                //{ value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What does CSS stand for?", a: "Cascading Style Sheets" },
                { q: "What separates declarations in a CSS rule set?", a: ";" },
                { q: "What term describes the content inside curly braces in CSS?", a: "Declaration block" },
                { q: "What punctuation separates property names and values in CSS declarations?", a: ":" },
                { q: "What is another term for a CSS property?", a: "Attribute" }
            ]
            break;


        case 'Basics of css':
            name = 'Basics of css';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>How to add CSS</p>
                <p>CSS is added to HTML pages to format the document according to information in the style sheet.</p>
                <p>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</p>
                <p>There are three ways to insert CSS in HTML documents.</p>
                <p>1. Inline CSS<br></br>
2. Internal CSS <br></br>
3. External CSS</p>

            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Inline CSS</p>
              <p>An inline style may be used to apply a unique style for a single element.</p>
              <p>To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property</p>
              <div className='code-block'>
                            <code >
                                <pre>
                                    {`<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>`}
                                </pre>
                            </code>
                        </div><br></br>


            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>Internal CSS</p>
              <p>An internal style sheet may be used if one single HTML page has a unique style.</p>
              <p>The internal style is defined inside the <pre>{`<style>`}</pre> element, inside the head section.</p>
              <div className='code-block'>
                            <code >
                                <pre>
                                    {`<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
                                </pre>
                            </code>
                        </div><br></br>


            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>External CSS</p>
              <p>With an external style sheet, you can change the look of an entire website by changing just one file!</p>
              <p>Each HTML page must include a reference to the external style sheet file inside the<pre>{`<link>`}</pre> element, inside the head section.</p>
              <div className='code-block'>
                            <code >
                                <pre>
                                    {`<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
                                </pre>
                            </code>
                        </div><br></br>


            </div>
            },
            { value: 'Case8' },
            {value:'Case9'},
            {value:'Case10'},
                // { value: 'Case5', data: 'DatatypesCase 5 data' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "Which type of CSS is applied to a specific HTML element ?", a: "Inline" },
                { q: "What type of style sheet is defined in a separate file ?", a: "External" },
                { q: "Which type of style sheet is defined within the HTML document?", a: "Internal" },
                { q: "Where should the reference to an external style sheet file be placed within an HTML page?", a: "Head" },
                { q: "What HTML element is used to include a reference to an external style sheet?", a: "Link" }
            ]
            break;


        case 'Id, Class and Tag':
            name = 'Id, Class and Tag';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>CSS Selectors</p>
                <p>CSS selectors are used to "find" (or select) the HTML elements you want to style.</p>
               <p>There are various types of selectors some of them are:<br></br>
               The CSS element Selector<br></br>
               The CSS id Selector<br></br>
               The CSS class Selector<br></br>
               The CSS Universal Selector</p>
        
            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>The CSS element Selector</p>
                <p>The element selector selects HTML elements based on the element name.</p>
               <p>Example :</p>
               <p>Here, all <pre>{`<p>`}</pre> elements on the page will be center-aligned, with a red text color: </p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`p {
  text-align: center;
  color: red;
}
`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>The CSS id Selector</p>
                <p>The id selector uses the id attribute of an HTML element to select a specific element.</p>
                <p>The id of an element is unique within a page, so the id selector is used to select one unique element!</p>
                <p>To select an element with a specific id, write a hash (#) character, followed by the id of the element.</p>
               <p>Example :</p>
               <p>The CSS rule below will be applied to the HTML element with id="para1": </p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`#para1 {
  text-align: center;
  color: red;
}
`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>The CSS class Selector</p>
                <p>The class selector selects HTML elements with a specific class attribute.</p>
                <p>To select elements with a specific class, write a period (.) character, followed by the class name.</p>
               
               <p>Example :</p>
               <p>In this example all HTML elements with class="center" will be red and center-aligned:  </p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`.center {
  text-align: center;
  color: red;
}
`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>The CSS Universal Selector</p>
                <p>The universal selector (*) selects all HTML elements on the page.</p>
                
               
               <p>Example :</p>
               <p>The CSS rule below will affect every HTML element on the page: </p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`* {
  text-align: center;
  color: blue;
}
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
                { q: "What does the element selector target?", a: "All" },
                { q: "Which selector targets a specific HTML element by its unique identifier?", a: "Id" },
                { q: "Which selector targets multiple HTML elements with a common class name?", a: "Class" },
                { q: "Which selector targets all elements in an HTML document?", a: "Universal" },
                { q: "Which selector is represented by a dot (.) in CSS syntax?", a: "Class" }
            ]
            break;

        case 'Colours':
            name = 'Colours';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>CSS Colors</p>
               <p>Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.</p>
               <p>CSS Color Names:<br></br>
               In CSS, a color can be specified by using a predefined color name:</p>
               <p>Example:</p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`<!DOCTYPE html>
<html>
<body>

<h1 style="background-color:Tomato;">Tomato</h1>
<h1 style="background-color:Orange;">Orange</h1>
<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
</body>
</html>
`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>CSS Background Color</p>
               <p>You can set the background color for HTML elements:</p>
               
               <p>Example:</p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>CSS Text Color</p>
                        <p>You can set the color of text:</p>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>`}
                                </pre>
                            </code>
                        </div><br></br>
                        <p>CSS Border Color</p>
                        <p>You can set the color of borders:</p>
                        <div className='code-block'>
                            <code >
                                <pre>
                                    {`<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>`}
                                </pre>
                            </code>
                        </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>CSS RGB Colors</p>
               <p>An RGB color value represents RED, GREEN, and BLUE light sources.</p>
               <p>RGB Value<br></br>
               In CSS, a color can be specified as an RGB value, using this formula:</p>

               <p>rgb(red, green, blue)<br></br>

Each parameter (red, green, and blue) defines the intensity of the color between 0 and 255.<br></br>

For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255) and the others are set to 0.
<br></br>

To display black, set all color parameters to 0, like this: rgb(0, 0, 0).<br></br>

To display white, set all color parameters to 255, like this: rgb(255, 255, 255).</p>
               <p>Example:</p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`<!DOCTYPE html>
<html>
<body>

<h1>Specify colors using RGB values</h1>

<h2 style="background-color:rgb(255, 0, 0);">rgb(255, 0, 0)</h2>
<h2 style="background-color:rgb(0, 0, 255);">rgb(0, 0, 255)</h2>
<h2 style="background-color:rgb(60, 179, 113);">rgb(60, 179, 113)</h2>
<h2 style="background-color:rgb(238, 130, 238);">rgb(238, 130, 238)</h2>
<h2 style="background-color:rgb(255, 165, 0);">rgb(255, 165, 0)</h2>
<h2 style="background-color:rgb(106, 90, 205);">rgb(106, 90, 205)</h2>

</body>
</html>
`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Case4', data:
                <div className='case-div'>
                <p>CSS HEX Colors</p>
               <p>A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.</p>
               <p>HEX Value<br></br>
               In CSS, a color can be specified using a hexadecimal value in the form:</p>

               <p>#rrggbb<br></br>

               Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).<br></br>

               For example, #ff0000 is displayed as red, because red is set to its highest value (ff) and the others are set to the lowest value (00).<br></br>

               To display black, set all values to 00, like this: #000000.<br></br>

               To display white, set all values to ff, like this: #ffffff.  </p>
               <p>Example:</p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`<!DOCTYPE html>
<html>
<body>

<h1>Specify colors using HEX values</h1>

<h2 style="background-color:#ff0000;">#ff0000</h2>
<h2 style="background-color:#0000ff;">#0000ff</h2>
<h2 style="background-color:#3cb371;">#3cb371</h2>
<h2 style="background-color:#ee82ee;">#ee82ee</h2>
<h2 style="background-color:#ffa500;">#ffa500</h2>
<h2 style="background-color:#6a5acd;">#6a5acd</h2>

</body>
</html>
`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>CSS HSL Colors</p>
               <p>HSL stands for hue, saturation, and lightness.</p>
               <p>HSL Value<br></br>
               In CSS, a color can be specified using hue, saturation, and lightness (HSL) in the form:</p>

               <p>hsl(hue, saturation, lightness)<br></br>

               Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.<br></br>

               Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.<br></br>

               Lightness is also a percentage. 0% is black, 50% is neither light or dark, 100% is white<br></br>

               </p>
               <p>Example:</p>
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`<!DOCTYPE html>
<html>
<body>

<h1>HSL Saturation</h1>

<p>The second parameter of hsl() defines the saturation. Less saturation mean less color. 0% is completely gray:</p>

<h2 style="background-color:hsl(0, 100%, 50%);">hsl(0, 100%, 50%)</h2>
<h2 style="background-color:hsl(0, 80%, 50%);">hsl(0, 80%, 50%)</h2>
<h2 style="background-color:hsl(0, 60%, 50%);">hsl(0, 60%, 50%)</h2>
<h2 style="background-color:hsl(0, 40%, 50%);">hsl(0, 40%, 50%)</h2>
<h2 style="background-color:hsl(0, 20%, 50%);">hsl(0, 20%, 50%)</h2>
<h2 style="background-color:hsl(0, 0%, 50%);">hsl(0, 0%, 50%)</h2>

</body>
</html>`}
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
                { q: "What are the acceptable range of values for each parameter in an RGB value? ?", a: "0-255" },
                { q: "In the example rgb(255, 0, 0), which color is displayed?", a: "Red" },
                { q: "hat is the maximum intensity value for each parameter in an RGB value?", a: "255" },
                { q: "What is the range of values for hue on the color wheel?", a: "0-360" },
                { q: "Which hue on the color wheel is represented by the value 240?", a: "Blue" }
            ]
            break;


        case 'Font styles':
            name = 'Font styles';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>CSS Fonts</p>
               <p>Font Selection is Important.</p>
              <p>Choosing the right font has a huge impact on how the readers experience a website.</p>

              <p>The right font can create a strong identity for your brand.</p>

              <p>Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font.</p>
            
            </div>
            },
                { value: 'Case2', data: 
            <div className='case-div'>
                <p>The CSS font-family Property</p>
               <p>In CSS, we use the font-family property to specify the font of a text.</p>
              <p>If the font name is more than one word, it must be in quotation marks, like: "Times New Roman".</p>

              <p>The font-family property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems.</p>
<p>Example <br></br>Specify some different fonts for three paragraphs:</p>
             
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`.p1 {
  font-family: "Times New Roman", Times, serif;
}

.p2 {
  font-family: Arial, Helvetica, sans-serif;
}

.p3 {
  font-family: "Lucida Console", "Courier New", monospace;
}`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
 
                { value: 'Case3', data:
                <div className='case-div'>
                <p>Font Style</p>
               <p>The font-style property is mostly used to specify italic text</p>
              <p>This property has three values:<br></br>
              normal - The text is shown normally<br></br>
              italic - The text is shown in italics<br></br>
              oblique - The text is "leaning" (oblique is very similar to italic, but less supported)
              </p>

              
<p>Example:</p>
             
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`p.normal {
  font-style: normal;
}

p.italic {
  font-style: italic;
}

p.oblique {
  font-style: oblique;
}`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Case4', data: 
                <div className='case-div'>
                <p>Font Size</p>
               <p>The font-size property sets the size of the text.</p>
             <p>Set Font Size With Pixels<br></br>
Setting the text size with pixels gives you full control over the text size:</p>
<p>Example:</p>
             
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

p {
  font-size: 14px;
}`}
                                </pre>
                            </code>
                        </div><br></br>

                        <p>Set Font Size With Em<br></br>
To allow users to resize the text (in the browser menu), many developers use em instead of pixels.<br></br>

1em is equal to the current font size. The default text size in browsers is 16px. So, the default size of 1em is 16px.</p>

<div className='code-block'>
                            <code >
                                <pre>
                                    {`h1 {
  font-size: 2.5em; /* 40px/16=2.5em */
}

h2 {
  font-size: 1.875em; /* 30px/16=1.875em */
}

p {
  font-size: 0.875em; /* 14px/16=0.875em */
}
`}
                                </pre>
                            </code>
                        </div><br></br>

                        <p>Responsive Font Size<br></br>
The text size can be set with a vw unit, which means the "viewport width".<br></br>

That way the text size will follow the size of the browser window:</p>

<div className='code-block'>
                            <code >
                                <pre>
                                    {`<h1 style="font-size:10vw">Hello World</h1>`}
                                </pre>
                            </code>
                        </div><br></br>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>Font Weight</p>
               <p>The font-weight property specifies the weight/thickness  of a font:</p>
              
<p>Example:</p>
             
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`p.normal {
  font-weight: normal;
}

p.thick {
  font-weight: bold;
}`}
                                </pre>
                            </code>
                        </div><br></br>

                        <p>Font Variant</p>
               <p>The font-variant property specifies whether or not a text should be displayed in a small-caps font.</p>
              <p>In a small-caps font, all lowercase letters are converted to uppercase letters. However, the converted uppercase letters appears in a smaller font size than the original uppercase letters in the text.</p>
              

<p>Example:</p>
             
               <div className='code-block'>
                            <code >
                                <pre>
                                    {`p.normal {
  font-variant: normal;
}

p.small {
  font-variant: small-caps;
}`}
                                </pre>
                            </code>
                        </div><br></br>

            </div>
            },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "hich CSS property allows you to make text characters appear bold?", a: "Font-weight" },
                { q: "Which property specifies the specific font family for text characters?", a: "Font-family" },
                { q: "Which CSS property determines the thickness of text characters? ?", a: "Font-weight" },
                { q: "What CSS property specifies the size of text characters? ?", a: "Font-size" },
                { q: "What CSS property controls whether text characters are displayed in italics?", a: "Font-style" }
            ]
            break;


        case 'Styling tables and lists':
            name = 'Styling tables and lists';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>CSS Tables</p>
                <p>The look of an HTML table can be greatly improved with CSS</p>
                <p>Table Borders<br></br>
To specify table borders in CSS, use the border property.<br></br>

The example below specifies a solid border for <pre> {`<table>, <th>, and <td>`}</pre> elements:</p>
<p>Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`table, th, td {
  border: 1px solid;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Full-Width Table</p>
                <p>If you need a table that should span the entire screen (full-width), add width: 100% to the <pre>{`<table>`}</pre> element:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`table {
  width: 100%;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Collapse Table Borders<br></br>
The border-collapse property sets whether the table borders should be collapsed into a single border:</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`table {
  border-collapse: collapse;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>If you only want a border around the table, only specify the border property for <pre>{`<table>`}</pre> :

</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`table {
  border: 1px solid;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case2', data: 
                <div className='case-div'>
                <p>Table Width and Height<br></br>
The width and height of a table are defined by the width and height properties.<br></br>

The example below sets the width of the table to 100%, and the height of the<pre>{` <th>`}</pre> elements to 70px:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`table {
  width: 100%;
}

th {
  height: 70px;
}
`}
                        </pre>
                    </code>
                </div><br></br>
                <p>To create a table that should only span half the page, use width: 50%:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`table {
  width: 50%;
}
`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },

                { value: 'Case3', data: 
                <div className='case-div'>
                <p>CSS Table Alignment<br></br>
                Horizontal Alignment<br></br>
The text-align property sets the horizontal alignment (like left, right, or center) of the content in <pre>{`<th> or <td>.`}</pre> <br></br>

By default, the content of <pre>{`<th>`}</pre> elements are center-aligned and the content of  <pre>{`<td>`}</pre> elements are left-aligned.<br></br>

To center-align the content of  <pre>{`<td>`}</pre> elements as well, use text-align: center:</p>

                <div className='code-block'>
                    <code >
                        <pre>
                            {`td {
  text-align: center;
}`}
                        </pre>
                    </code>
                </div><br></br>

                <p>To left-align the content, force the alignment of <pre>{`<th>`}</pre> elements to be left-aligned, with the text-align: left property:</p>

                <div className='code-block'>
                    <code >
                        <pre>
                            {`th {
  text-align: left;
}`}
                        </pre>
                    </code>
                </div><br></br>
<p>
Vertical Alignment<br></br>
The vertical-align property sets the vertical alignment (like top, bottom, or middle) of the content in <pre>{`<th> or <td>.`}</pre><br></br>

By default, the vertical alignment of the content in a table is middle (for both <pre>{`<th> or <td>`}</pre> elements).<br></br>

The following example sets the vertical text alignment to bottom for <pre>{`<td>`}</pre> elements:
</p>

<div className='code-block'>
                    <code >
                        <pre>
                            {`td {
  height: 50px;
  vertical-align: bottom;
}`}
                        </pre>
                    </code>
                </div><br></br>

            </div>},

                { value: 'Case4', data:
                <div className='case-div'>
                <p>HTML Lists and CSS List Properties<br></br>
In HTML, there are two main types of lists:<br></br>

1. unordered lists - the list items are marked with bullets<br></br>
2. ordered lists  - the list items are marked with numbers or letters<br></br><br></br>
The CSS list properties allow you to:<br></br>

1. Set different list item markers for ordered lists<br></br>
2. different list item markers for unordered lists<br></br>
3. Set an image as the list item marker<br></br>
4. Add background colors to lists and list items
</p><br></br>

<p>Different List Item Markers<br></br>
The list-style-type property specifies the type of list item marker.<br></br>

The following example shows some of the available list item markers:
<br></br>
Example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}`}
                        </pre>
                    </code>
                </div><br></br>

<p>Position The List Item Markers<br></br>
The list-style-position property specifies the position of the list-item markers (bullet points).<br></br>

"list-style-position: outside;" means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. This is default:</p>
<p>"list-style-position: inside;" means that the bullet points will be inside the list item. As it is part of the list item, it will be part of the text and push the text at the start:</p>

<div className='code-block'>
                    <code >
                        <pre>
                            {`ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case5', data:
                <div className='case-div'>
                <p>Remove Default Settings<br></br>
The list-style-type:none property can also be used to remove the markers/bullets. Note that the list also has default margin and padding. To remove this, add margin:0 and padding:0 to ul or ol:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}`}
                        </pre>
                    </code>
                </div><br></br>

<p>Styling List With Colors<br></br>
We can also style lists with colors, to make them look a little more interesting.<br></br>

Anything added to the ol or ul tag, affects the entire list, while properties added to the li tag will affect the individual list items:</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`ol {
  background: #ff9999;
  padding: 20px;
}

ul {
  background: #3399ff;
  padding: 20px;
}

ol li {
  background: #ffe5e5;
  color: darkred;
  padding: 5px;
  margin-left: 35px;
}

ul li {
  background: #cce5ff;
  color: darkblue;
  margin: 5px;
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
                { q: "What CSS property is used to specify table borders?", a: "Border" },
                { q: "What CSS property defines the width of a table?", a: "Width" },
                { q: "What are the two main types of lists in HTML?", a: "Unordered, Ordered" },
                { q: "What CSS property allows you to set different list item markers?", a: "list-style-type" },
                { q: "With the help odf whichproperty you center-align the content of <td> elements?", a: "text-align" }
            ]
            break;

        case 'Styling forms and links':
            name = 'Styling forms and links';
            cases = [
                { value: 'Case1', data:
                <div className='case-div'>
                <p>CSS Forms<br></br>
                The look of an HTML form can be greatly improved with CSS:</p>
                <p>Styling Input Fields<br></br>
Use the width property to determine the width of the input field:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`input {
  width: 100%;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>The example above applies to all input elements. If you only want to style a specific input type, you can use attribute selectors:<br></br>

input[type=text] - will only select text fields<br></br>
input[type=password] - will only select password fields<br></br>
input[type=number] - will only select number fields<br></br>
etc..</p>

<p>Padded Inputs<br></br>
Use the padding property to add space inside the text field.<br></br>

Tip: When you have many inputs after each other, you might also want to add some margin, to add more space outside of them:</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case2', data:
                <div className='case-div'>
                <p>Bordered Inputs<br></br>
Use the border property to change the border size and color, and use the border-radius property to add rounded corners:

</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>If you only want a bottom border, use the border-bottom property:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`input[type=text] {
  border: none;
  border-bottom: 2px solid red;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data:
                <div className='case-div'>
                <p>Colored Inputs<br></br>
Use the background-color property to add a background color to the input, and the color property to change the text color:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`input[type=text] {
  background-color: #3CBC8D;
  color: white;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>Focused Inputs<br></br>
By default, some browsers will add a blue outline around the input when it gets focus (clicked on). You can remove this behavior by adding outline: none; to the input.<br></br>

Use the :focus selector to do something with the input field when it gets focus:</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`input[type=text]:focus {
  background-color: lightblue;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case4', data:
                <div className='case-div'>
                <p>Styling Links<br></br>
Links can be styled with any CSS property (e.g. color, font-family, background, etc.).<br></br>

Example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`a {
  color: hotpink;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>In addition, links can be styled differently depending on what state they are in.<br></br>

The four links states are:<br></br>

a:link - a normal, unvisited link<br></br>
a:visited - a link the user has visited<br></br>
a:hover - a link when the user mouses over it<br></br>
a:active - a link the moment it is clicked<br></br>
Example</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}`}
                        </pre>
                    </code>
                </div><br></br>
<p>When setting the style for several link states, there are some order rules:<br></br>

a:hover MUST come after a:link and a:visited<br></br>
a:active MUST come after a:hover
</p>
            </div>
            },
                { value: 'Case5', data:
                <div className='case-div'>
                <p>Text Decoration<br></br>
The text-decoration property is mostly used to remove underlines from links:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
`}
                        </pre>
                    </code>
                </div><br></br>
<p>Background Color<br></br>
The background-color property can be used to specify a background color for links:<br></br>

Example</p>
<div className='code-block'>
                    <code >
                        <pre>
                            {`a:link {
  background-color: yellow;
}

a:visited {
  background-color: cyan;
}

a:hover {
  background-color: lightgreen;
}

a:active {
  background-color: hotpink;
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
                { q: "What CSS property can be used to specify a background color for links?", a: "background-color" },
                { q: "Which property is used to remove underlines from links?", a: "text-decoration" },
                { q: ": What must come after a:link and a:visited when setting link styles?", a: "a:hover" },
                { q: "What selector is used to style an input field when it gets focus?", a: "focus" },
                { q: "What CSS property is used to change the text color of an input field?", a: "color" }
            ]
            break;


        case 'Positioning':
            name = 'Positioning';
            cases = [
                { value: 'Case1', data: 
                <div className='case-div'>
                <p>CSS Layout - The position Property</p>
                <p>The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).<br></br>

The position Property<br></br>
The position property specifies the type of positioning method used for an element.<br></br>

There are five different position values:<br></br>

static<br></br>
relative<br></br>
fixed<br></br>
absolute<br></br>
sticky<br></br>
Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.<br></br><br></br>

position: static;<br></br>
HTML elements are positioned static by default.<br></br>

Static positioned elements are not affected by the top, bottom, left, and right properties.<br></br>

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:
<br></br>
Example:</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`div.static {
  position: static;
  border: 3px solid #73AD21;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case2', data:
                <div className='case-div'>
                <p>position: relative;<br></br>
An element with position: relative; is positioned relative to its normal position.<br></br>

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case3', data: 
                <div className='case-div'>
                <p>position: fixed;<br></br>
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.<br></br>

A fixed element does not leave a gap in the page where it would normally have been located.<br></br>

Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used:<br></br>

Example</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case4', data:
                <div className='case-div'>
                <p>position: absolute;<br></br>
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).<br></br>

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.<br></br>

Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid #73AD21;
}

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}`}
                        </pre>
                    </code>
                </div><br></br>
            </div>
            },
                { value: 'Case5', data: 
                <div className='case-div'>
                <p>position: sticky;<br></br>
An element with position: sticky; is positioned based on the user's scroll position.<br></br>

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).</p>
                <div className='code-block'>
                    <code >
                        <pre>
                            {`div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}`}
                        </pre>
                    </code>
                </div><br></br>
                <p>In this example, the sticky element sticks to the top of the page (top: 0), when you reach its scroll position.</p>
            </div>
            },
            { value: 'Case8' },
            { value: 'Case9' },
            { value: 'Case10' },
                { value: 'Lastcase', data: 'DatatypesLast case data' },
            ];
            ques = [
                { q: "What CSS property specifies the type of positioning method used for an element?", a: "position" },
                { q: "What is the default positioning method for HTML elements?", a: "static" },
                { q: "Which position value is relative to its normal position?", a: "relative" },
                { q: "Which position value is relative to the viewport?", a: "fixed" },
                { q: "Which position value toggles between relative and fixed?", a: "sticky" }
            ]
            break;

        case 'Flex box':
            name = 'Flex box';
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

        case 'Grid':
            name = 'Grid';
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

        case 'Transforms':
            name = 'Transforms';
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

        case 'Animation and keyframes':
            name = 'Animation and keyframes';
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

        case 'Transitions':
            name = 'Transitions';
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

        case 'All remaining properties':
            name = 'All remaining properties';
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