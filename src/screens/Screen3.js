import React from 'react'
import "../Css Files/Screen3.css"
import "../Css Files/About2.css";
import { Element } from 'react-scroll'
import Footer from '../components/Footer'
import ReactNavBar from '../components/ReactNavBar'


export default function Screen3() {
  return (
    <Element name='screen3'>
        <ReactNavBar />
      <div className='screen3'>
        <h2>Why Learn Here</h2>

        <div className='SCards'>
          <div className='scard c1'>
            <h3>Friendly and Simple Explanation</h3>
            <p> We specialize in providing friendly and simple explanations to make
              learning programming a breeze. Whether you're a beginner or looking to
              brush up on your skills, our platform offers clear, step-by-step tutorials
              and interactive exercises.</p>
          </div>
          <div className='scard c2'>
            <h3>Accurate and Clear Concepts</h3>
            <p> We pride ourselves on offering topics with Accurate and Clear Concepts.
              Our tutorials are designed to ensure that every aspect of programming is
              explained in a straightforward manner, making it easy for learners of all
              levels to understand. </p>
          </div>
          <div className='scard c3'>
            <h3>Practice and Excercise Provision</h3>
            <p> We're dedicated to providing ample opportunities for Practice and Exercise
              Provision. Our platform offers a wide range of interactive exercises and
              coding challenges designed to reinforce your learning and strengthen your skills. </p>
          </div>
        </div>
      </div>

      <div >
        <header className='Testi' >
          <h1>Testimonals</h1>
        </header>
        <div className='CntringItem' >
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p >If you do the job badly enough, sometimes you don't get asked to do it again.</p>
              </blockquote>
              <h3>Wisteria Ravenclaw</h3>
              <h4>Google Inc.</h4>
            </figcaption>
          </figure>
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
              </blockquote>
              <h3>Ursula Gurnmeister</h3>
              <h4>Facebook</h4>
            </figcaption>
          </figure>
          <figure class="snip1533">
            <figcaption>
              <blockquote>
                <p>The only skills I have the patience to learn are those that have no real application in life. </p>
              </blockquote>
              <h3>Ingredia Nutrisha</h3>
              <h4>Twitter</h4>
            </figcaption>
          </figure>
        </div>
      </div>

      <Footer />
    </Element>
  )
}
