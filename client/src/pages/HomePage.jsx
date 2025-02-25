import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import NewArrivals from '../components/Products/NewArrivals'

function HomePage() {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>
    </div>
  )
}

export default HomePage