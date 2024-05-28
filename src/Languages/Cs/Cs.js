import React from 'react'
import ConceptMap from '../../CommonConcepts/ConceptMap'


export default function Cs() {

  const language = "CSharp"

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

  ];

  return (
    <div>

      <ConceptMap language={language} C_Concepts={Cs_Concepts} />

    </div>
  )
}
