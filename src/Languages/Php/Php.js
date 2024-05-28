import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Php() {

  const language = "Php"

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

  return (
    <div>

      <ConceptMap language={language} C_Concepts={Php_Concepts} />

    </div>
  )
}
