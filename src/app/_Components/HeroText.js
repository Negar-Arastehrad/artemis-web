import React from 'react'

const HeroText = () => {
  return (
    <div className="w-full h-full tracking-wider flex justify-center items-center">
      <div className="w-full max-w-[550px] h-full m-auto rounded-xl py-8 px-8 text-center relative clouds z-10 flex justify-center items-center">
        <div className="relative z-50 font-bold bg-glass rounded-xl py-8 px-8"> 
          <h1 className="text-3xl text-blue">
            Your Journey Begins Here <span className='text-4xl block mt-4'>At Artemis</span> 
          </h1>
          <h1 className="mt-4 text-2xl text-slate-600">
            Let us guide you to the worlds most extraordinary places
          </h1>
          <h1 className="mt-4 text-2xl text-blue">Visualize Your Joy with Us</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroText
