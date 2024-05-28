import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function JS() {

  const language = "JavaScript"

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

  return (
    <div>

      <ConceptMap language={language} C_Concepts={Js_Concepts} />

    </div>
  )
}
