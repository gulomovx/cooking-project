import React from 'react'
import Cart from './Cart'
import cart1 from '../../assets/cart1.svg'
import cart2 from '../../assets/cart2.svg'
import cart3 from '../../assets/cart3.svg'
const Special = () => {
  return (
      <div className=''>
          <h1 className="text-[35px] font-semibold text-center mt-32">Special Dishes for you</h1>
          <p className="text-center text-xl">Made with premium & 100% Organic ingredients</p>
          <div className="flex justify-between items-center mt-8 gap-4">
              <Cart img={cart1} title='Green Salad'/>
              <Cart img={cart2} title='Beef Salad'/>
              <Cart img={cart3} title='Nut Salad'/>
          </div>
          <button className="py-3 text-center mt-16 text-xl px-8 rounded-3xl bg-green-600 text-white">
              Learn More
            </button>
    </div>
  )
}

export default Special