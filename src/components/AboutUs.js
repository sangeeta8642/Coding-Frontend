import React from 'react';
import "../Css Files/AboutUs.css";

import { Element } from 'react-scroll';
import Proff from '../images/proff.png'
import Me from '../images/me.png'
import jyo from '../images/jyo.png'
import Footer from './Footer';
import ContactUs from './ContactUs';
import ReactNavBar from './ReactNavBar';

export default function AboutUs() {
    return (
        <div>
            {/* <div id="target">I'm the target element</div> */}
            <ReactNavBar />

            <div>
                <div className='aboutUs' id='aboutUs'>
                    <header>
                        <h1>About Us</h1>
                    </header>

                    <div className='SCards'>
                        <div className='scard c1'>

                            <h4>Content Writer</h4>
                            <div className='MemberImg'>
                                <img src={jyo} />
                            </div>
                            <div className='MemberInfo'>
                                <h4>Jyoti Das</h4>
                                <p>( Bsc IT student )</p>
                                <p>Contact:<br />Jyotidas4803@gmail.com</p>
                            </div>
                        </div>
                        <div className='scard c2'>
                            <h4>Professor and<br /> Project Guide</h4>
                            <div className='MemberImg'>
                                <img src={Proff} />
                            </div>
                            <div className='MemberInfo'>
                                <h4>Sumiya Madoo</h4>
                                <p>( Msc IT )</p>
                                <p>Contact:<br />sumiyamadoo@gmail.com</p>
                            </div>
                        </div>
                        <div className='scard c3'>
                            <h4>Frontend and Backend Developer </h4>
                            <div className='MemberImg'>
                                <img src={Me} />
                            </div>
                            <div className='MemberInfo'>
                                <h4>Sangeeta Peragani</h4>
                                <p>( Bsc IT student )</p>
                                <p>Contact:<br />sangeetaperagani@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ContactUs />

            <Footer />
        </div>
    );
}
