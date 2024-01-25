import React from 'react'

const Footer = () => {
  return (
      <div className='w-full bg-slate-100 mt-16'>
          <div className="container p-12">
              <div className="flex justify-between ">
                  {/* first */}
                  <div className="w-[300px]">
                      <h1 className="text-2xl font-medium mb-8">UI.desk</h1>
                      <p className="text-slate-400">On formed merits hunted unable merely by mr whence or. </p>
                  </div>
                  {/* second */}
                  <div className="flex justify-between gap-32">
                      <div className="">
                          <h1 className="text-2xl">Home</h1>
                          <ul className='flex flex-col gap-2 mt-4'>
                              <li><a href="#">Company</a></li>
                              <li><a href="#">News</a></li>
                              <li><a href="#">Team</a></li>
                          </ul>
                      </div>
                      <div className="">
                          <h1 className="text-2xl">Partner</h1>
                          <ul className='flex flex-col gap-2 mt-4'>
                              <li><a href="#">Business</a></li>
                              <li><a href="#">Plan</a></li>
                              <li><a href="#">Marketing</a></li>
                          </ul>
                      </div>
                      <div className="">
                          <h1 className="text-2xl">About</h1>
                          <ul className='flex flex-col gap-2 mt-4'>
                              <li><a href="#">History</a></li>
                              <li><a href="#">service</a></li>
                              <li><a href="#">Pricing</a></li>
                          </ul>
                      </div>
                      <div className="">
                          <h1 className="text-2xl">Contact</h1>
                          <ul className='flex flex-col gap-2 mt-4'>
                              <li><a href="#">UI.desk</a></li>
                              <li><a href="#">(465)954-8487</a></li>
                              <li><a href="#">Lahore, Pakistan</a></li>
                          </ul>
                      </div>
                  </div>
          </div>
          </div> 
          <div className="bg-green-600 p-4">
              <p className="text-center text-white font-medium">© Copyright 2020 by ui.desk. All right reserved.</p>
          </div>
    </div>
  )
}

export default Footer