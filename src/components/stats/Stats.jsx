import React from 'react'

const Stats = ({img, title, text}) => {
  return (
      <div className='flex flex-col items-center '>
          <img src={img} alt="" />
          <h1 className="text-[30px] font-medium">{title}</h1>
          <p className="text-xl">{ text}</p>
    </div>
  )
}

export default Stats