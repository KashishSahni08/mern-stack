import React from 'react'

const Card = ({imgUrl,title,desc,btnText}) => {
  return (
    <div className = 'bg-white  rounded x-l shadow-lg'>
        <img className='rounded t-xl' src={imgUrl}></img>

        <div className= 'p-4 space-y-4'>
            <h2 className='text-bold text-2xl'>{title}</h2>
            <p>{desc}</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                {btnText}

            </button>
            </div>
            </div>

  )
}

export default Card