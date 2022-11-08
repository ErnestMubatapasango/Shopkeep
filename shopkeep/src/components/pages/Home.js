import React from 'react'
import Invoice from '../featureSection/Invoice'
import Footer from '../footerSection/Footer'
import Hero from '../homeSection/Hero'
import Pricing from '../pricingSection/Prices'
import Product from '../productSection.js/Product'
import Review from '../reviewSection/Review'
import Services from '../serviceSection/Services'
import Benefits from '../whySection/Benefits'

function Home() {
  return (
    <div>
      <Hero />
      <Review /> 
      <Services />
      <Invoice />
      <Pricing />
      <Product />
      <Benefits />
      <Footer />
    </div>
  )
}

export default Home