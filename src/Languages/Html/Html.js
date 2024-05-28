import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Html() {

  const language = "Html"

  const html_Concepts = [
    'Introduction to html',
    'Basics of html',
    'Text tags',
    'Links, Images and Lists',
    'Tables',
    'Forms',
    'Attributes',
    'Layout',
    'Image mapping',
    'All the remaining tags'
  ];

  return (
    <div>

      <ConceptMap language={language} C_Concepts={html_Concepts} />

    </div>
  )
}
