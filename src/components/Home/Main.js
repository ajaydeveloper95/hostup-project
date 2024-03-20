import React, { useState } from 'react'
import Header from '../Header/Main'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import Client from './Client'
import Pricing from './Pricing'
import Feature from './Feature'
import Robust from './Robust'
import Whychoose from './Whychoose'
import Testimonial from './Testimonial'
import Apps from './Apps'
import Blog from './Blog'
import Footer from '../Footer/Main'
import MobileHeader from '../MobileHeader/Main'

const Home = () => {
    const [show, setShow] = useState(true)
    const [active, setactive] = useState(false)
    return (
        <>
            {show &&
                <section className={`top-offer`}>
                    <div className="container text-center">
                        <span onClick={() => setShow(false)} className="top-offer__dismiss sec-dismiss" data-section-className=".top-offer">
                            <i className="icon-close"></i>
                        </span>
                        <p>
                            <i className="icon-stars"></i>
                            Hostup Flash Sale: Starting at $2.59/mo for a limited time <Link to="/#"><span>Read more</span>
                                <i className="icon-arrow"></i></Link> <i className="icon-stars"></i></p>
                    </div>
                </section>}
            <div class="page-wrapper">
                <Header setactive={setactive} />
                <Hero />
                <Client />
                <Pricing />
                <Feature />
                <Robust />
                <Whychoose />
                <Testimonial />
                <Apps />
                <Blog />
                <Footer />
            </div>
            <MobileHeader setactive={setactive} active={active} />
        </>
    )
}

export default Home