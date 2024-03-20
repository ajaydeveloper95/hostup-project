import React, { useState } from 'react'
import Header from '../Header2/Main'
import Banner from './Banner'
import Domain from './Domain'
import Customer from './Customer'
import Services from './Services'
import Pricing from './Pricing'
import Award from './Award'
import Performance from './Performance'
import Testimonial from './Testimonial'
import Support from './Support'
import Faq from './Faq'
import MobileHeader from '../MobileHeader/Main'
import Footer from '../Footer/Main'


const Home2 = () => {
    const [active, setactive] = useState(false)
    return (
        <>
            <div class="page-wrapper">
                <Header setactive={setactive} />
                <Banner />
                <Domain />
                <Customer />
                <Services />
                <Pricing />
                <Award />
                <Performance />
                <Testimonial />
                <Support />
                <Faq />
                <Footer />
            </div>
            <MobileHeader setactive={setactive} active={active} />
        </>
    )
}

export default Home2