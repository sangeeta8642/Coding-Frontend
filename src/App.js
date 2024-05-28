import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Screen3 from './screens/Screen3';
import Python from './Languages/Python/Python';
import Cpp from "./Languages/Cpp/cpp"
import Java from "./Languages/Java/java"
import JS from "./Languages/JavaScript/JS"
import ContentPage from './CommonConcepts/ContentPage';
import C from "./Languages/C/C"
import Introductioncpp from './Languages/Cpp/Introduction'
import Concepts from './Languages/C/Concepts';
import Intro from './Languages/C/Intro';
import ReactNavBar from './components/ReactNavBar';
import Protected from './components/Protected';
import Private from './components/Private';
import Profile from './components/Profile';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import UpdateProfile from './CommonConcepts/UpdateProfile';
import CppConcepts from './Languages/Cpp/Concepts'
import PyConcepts from './Languages/Python/Concepts'
import JavaConcepts from './Languages/Java/Concepts'
import Jsconcepts from './Languages/JavaScript/Concepts'
import Php from './Languages/Php/Php';
import Cs from './Languages/Cs/Cs';
import Css from './Languages/Css/Css';
import Html from './Languages/Html/Html';
import Sql from './Languages/SQL/Sql';
import Phpconcept from './Languages/Php/Concepts'
import Csconcept from './Languages/Cs/Concepts'
import Cssconcept from './Languages/Css/Concepts'
import Htmlconcept from './Languages/Html/Concepts'
import Sqlconcept from './Languages/SQL/Concepts'
import ChangePassword from './components/ChangePassword';
import MyProgress from './components/MyProgress'
import Compiler from './components/Compiler'
import ReactJs from './Languages/react/ReactJs';
// import S3 from 

// import Intro from "./Languages/C/Intro"
// import { lazy } from 'react';
// import Intro from "./Languages/C";
// import Intro from './Languages/Cpp/Intro';

function App() {
  const C_Concepts = [
    'Introduction to C',
    'Basics Of C',
    'Variables, Constants and Keywords Of C',
    'Datatypes Of C',
    'Operators Of C',
    'ConditionalFlow Of C',
    'ControlFlow Of C',
    'Functions Of C',
    'Array And Strings Of C',
    'Pointers And Memory Of C',
    'Structures And Unions Of C',
    'File Handling Of C',
    'Error Handling Of C',
    'Advanced Topics Of C',
  ];

  const Cpp_Concepts = [
    'Introduction to C++',
    'Basics Of C++',
    'Variables, Constants and Keywords Of C++',
    'Datatypes Of C++',
    'Operators Of C++',
    'ConditionalFlow of C++',
    'ControlFlow Of C++',
    'Array And Pointers Of C++',
    'Functions Of C++',
    'OOPS',
    'Classes and Objects',
    'Encapsulation',
    'Abstarction',
    'Inheritance',
    'Polymorphism',
    'File handling',
    'Exception handling',
  ];

  const python_Concepts = [
    'Introduction to python',
    'Basics of python',
    'Memory and Variables',
    'Datatypes in python',
    'Operators in python',
    'Arrays in python',
    'Functions in python',
    'ConditionalFlow in python',
    'ControlFlow in python',
    'Lists, Tuples and Dictionaries in python',
    'Classes and objects in python',
    'Inheritance in python',
    'Encapsulation in python',
    'Abstraction in python',
    'Polymorphism in python',
    'Contructor and destructor',
    'File handling in python'
  ];


  const java_Concepts = [
    'Introduction to java',
    'Basics of java',
    'Access modifiers in java',
    'Variables, constants and keywords in java',
    'Datatypes in java',
    'Operators in java',
    'Arrays in java',
    'Functions in java',
    'Conditional flow in java',
    'Control flow in java',
    'Oops in java',
    'Classes and objects in java',
    'Encapsulation in java',
    'Inheritance in java',
    'Polymorphism in java',
    'Abstraction in java',
    'Constructor in java',
    'Abstract classes in java',
    'Interfaces in java',
    'Enums in java',
    'Exception handling in java',
    'Threads in java',
    'File handling in java'
  ];

  const Js_Concepts = [
    'Introduction to JavaScript',
    'Basics of JavaScript',
    'Variables and Data Types in JavaScript',
    'Constants in JavaScript',
    'Operators in JavaScript',
    'Control Structures in JavaScript',
    'Functions in JavaScript',
    'Scope and Closure in JavaScript',
    'Arrays in JavaScript',
    'Objects in JavaScript',
    'Classes and Inheritance in JavaScript',
    'Asynchronous JavaScript ',
    'Error Handling in JavaScript',
    'Event Handling in JavaScript',
    'DOM Manipulation in JavaScript',
    'Form Handling and Validation in JavaScript',
    'Local Storage and Session Storage in JavaScript',
    'JSON in JavaScript',
    'AJAX in JavaScript'
  ];

  const Cs_Concepts = [
    'Introduction to Cs Programming',
    'Basics of Cs',
    'Variables and Data Types in Cs',
    'Constants in Cs',
    'Operators in Cs',
    'Control Structures in Cs',
    'Methods and Functions in Cs',
    'Parameters and Arguments in Cs',
    'Return Types in Cs',
    'Scope and Lifetime of Variables in Cs',
    'Arrays and Collections in Cs',
    'Strings and String Manipulation in Cs',
    'OOPs in Cs',
    'Classes and Objects in Cs',
    'Inheritance in Cs',
    'Polymorphism in Cs',
    'Encapsulation in Cs',
    'Abstraction in Cs',
    'Constructors and Destructors in Cs',
    'Properties and Indexers in Cs',
    'Interfaces and Abstract Classes in Cs',
    'Enums in Cs',
    'Delegates and Events in Cs',
    'Exception Handling in Cs'
  ]


  const Css_Concepts = [
    'Introduction to css',
    'Basics of css',
    'Id, Class and Tag',
    'Colours',
    'Font styles ',
    'Styling tables and lists',
    'Styling forms and links',
    'Positioning',
    'Flex box',
    'Grid',
    'Transforms',
    'Animation and keyframes',
    'Transitions',
    'All remaining properties',
  ];

  const html_Concepts = [
    'Introduction to html',
    'Basics of html ',
    'Text tags',
    'Links, Images and Lists ',
    'Tables',
    'Forms',
    'Attributes',
    'Layout',
    'Image mapping',
    'All the remaining tags'
  ];


  const Php_Concepts = [
    'Introduction to PHP',
    'Basics of PHP',
    'Variables and Data Types in PHP',
    'Constants in PHP',
    'Operators in PHP',
    'Control Structures in PHP',
    'Functions in PHP',
    'Arrays in PHP',
    'Strings in PHP',
    'Super Global Variables in PHP',
    'Form Handling in PHP',
    'File Handling in PHP',
    'Working with Dates and Times in PHP',
    'Error Handling in PHP',
    'Sessions and Cookies in PHP',
    'Working with Databases in PHP',
    'Connecting to MySQL Database in PHP',
    'Executing SQL Queries in PHP',
    'Fetching Data from Database in PHP',
  ];

  const sql_Concepts = [
    'Introduction to Databases',
    'Basic SQL Syntax',
    'Data Types in SQL',
    'Creating Databases',
    'Creating Tables',
    'Inserting Data',
    'Selecting Data',
    'Filtering Data',
    'Sorting Data',
    'Updating Data',
    'Deleting Data',
    'Aggregating Data',
    'Aggregate Functions',
    'Joining Tables',
    'Subqueries',
    'Aliases',
    'Views',
    'Indexes',
    'Transactions',
    'Constraints'
  ];

  const React_concepts = [
    'Introduction to reactjs'
  ]

  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/whyLearnHere' element={<Screen3 />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/codeItYourSelf/:language' element={<Compiler />} />

          <Route element={<Protected />} >
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route element={<Private />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/progress' element={<MyProgress />} />

            <Route path='/updateProfile/:id' element={<UpdateProfile />} />
          </Route>

          <Route path='/s3' element={<Screen3 />} />

          <Route path='/Python' element={<Python />} />
          {python_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`Python/${concept}/*`}
              element={<PyConcepts conceptType={concept} />}
            />
          ))}

          <Route path='/cpp' element={<Cpp />} />
          {Cpp_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`cpp/${concept}/*`}
              element={<CppConcepts conceptType={concept} />}
            />
          ))}

          {/* <Route path='/c++/Introduction' element={<Introductioncpp />} /> */}

          <Route path='/C' element={<C />} />
          {C_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`C/${concept}/*`}
              element={<Concepts conceptType={concept} />}
            />
          ))}


          <Route path='/JavaScript' element={<JS />} />
          {Js_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`JavaScript/${concept}/*`}
              element={<Jsconcepts conceptType={concept} />}
            />
          ))}


          <Route path='/Java' element={<Java />} />
          {java_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`Java/${concept}/*`}
              element={<JavaConcepts conceptType={concept} />}
            />
          ))}

          <Route path='/Php' element={<Php />} />
          {Php_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`Php/${concept}/*`}
              element={<Phpconcept conceptType={concept} />}
            />
          ))}

          <Route path='/CSharp' element={<Cs />} />
          {Cs_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`CSharp/${concept}/*`}
              element={<Csconcept conceptType={concept} />}
            />
          ))}

          <Route path='/Css' element={<Css />} />
          {Css_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`Css/${concept}/*`}
              element={<Cssconcept conceptType={concept} />}
            />
          ))}

          <Route path='/Html' element={<Html />} />
          {html_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`Html/${concept}/*`}
              element={<Htmlconcept conceptType={concept} />}
            />
          ))}

          <Route path='/Sql' element={<Sql />} />
          {sql_Concepts.map((concept) => (
            <Route
              key={concept}
              path={`SQL/${concept}/*`}
              element={<Sqlconcept conceptType={concept} />}
            />
          ))}

          <Route path='/reactjs' element={<ReactJs />} />
          {
              React_concepts.map((concept) => (
                <Route
                  key={concept}
                  path={`reactjs/${concept}/*`}
                  element={<ReactJs conceptType={concept} />}
                />
              ))
            
          }

          <Route path='/changePswrd' element={<ChangePassword />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/help' element={<Help />} />
          {/* npm install -g react-devtools */}
          {/* <Route path='/*' element={<h1>Page Not Found</h1>}/> */}

        </Routes>

      </BrowserRouter>
      {/* <Intro/> */}
      {/* <Intro/> */}
    </div>
  );
}

export default App;
