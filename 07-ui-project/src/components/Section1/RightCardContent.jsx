import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
<h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
<div>
    <p className='text-lg leading-normal text-white mb-14'>{props.intro}</p>
    <div className='justify-between flex'>
        <button className='bg-blue-600 text-white font-semibold px-8 py-3 rounded-full '>{props.tag}</button>
        <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
    </div>
</div>
      </div>
    </div>
  )
}

export default RightCardContent
