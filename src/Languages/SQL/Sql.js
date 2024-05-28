import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Sql() {

  const language = "SQL"

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

  return (
    <div>

      <ConceptMap language={language} C_Concepts={sql_Concepts} />

    </div>
  )
}
