import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' w-2/3  rounded-4xl h-full p-6 gap-10 flex flex-nowrap overflow-x-auto'>
      {
        props.users.map((ele,idx)=>{
return <RightCard
img={ele.img} tag={ele.tag} intro={ele.intro} key={idx} id={idx}
/>
        })
      }
    </div>
  )
}

export default RightContent
