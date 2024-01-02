import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="UB_Promo_800x800.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div className=''>
            <h1 className="text-5xl font-bold">Learning that gets you</h1>
            <p className="py-6">Skills for your present (and your future). Get started with us.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
