import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Cpp() {

  const language = "cpp"

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
    'Encapsulation',
    'Abstraction',
    'Inheritance',
    'Polymorphism',
    'File handling',
    'Exception handling',
  ];

  return (
    <div>

      <ConceptMap language={language} C_Concepts={Cpp_Concepts} />

    </div>
  )
}
