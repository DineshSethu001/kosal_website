import React from 'react'
import {About,Services} from './index.js'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className='pt-8'>
        <About/>
      </div>
      <div className='pt-8'>
        <Services/>
      </div>
    </div>
  )
}

export default Home