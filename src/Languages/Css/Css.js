import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Css() {

  const language = "Css"

  const Css_Concepts = [
    'Introduction to css',
    'Basics of css' ,
    'Id, Class and Tag', 
    'Colours', 
    'Font styles',
    'Styling tables and lists', 
    'Styling forms and links' ,
    'Positioning' ,
    'Flex box' ,
    'Grid' ,
    'Transforms', 
    'Animation and keyframes', 
    'Transitions' ,
    'All remaining properties',
  ];

  return (
    <div>

      <ConceptMap language={language} C_Concepts={Css_Concepts} />

    </div>
  )
}
