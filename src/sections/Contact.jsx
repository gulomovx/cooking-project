import React from 'react'

const Contact = () => {
  return (
      <div>
          <div className="container">
              <h1 className="text-[35px] text-center font-medium mt-8 ">Subscribe to the Newsletter</h1>
              <p className="text-xl text-center text-slate-700">Enter your email below to get our daily offers and news</p>
              <form action="" className='text-center mt-12 '>
                  <input type="text" className='rounded-3xl p-2 w-[300px] outline-none border' placeholder='Enter your email '/>
                  <button className="px-6 py-2 bg-green-600 rounded-3xl mx-4 text-white text-xl">Get Started</button>
              </form>
          </div>
    </div>
  )
}

export default Contact