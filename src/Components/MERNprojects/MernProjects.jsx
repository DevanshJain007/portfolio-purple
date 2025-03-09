import React from 'react'

const MernProjects = () => {
  const dataProjects=[{
    id:1,
    title:"News Aggregation Page",
    description:"lorem loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dignissimos saepe assumenda veritatis vel minima, adipisci inventore facilis reprehenderit rem maxime minus, provident corrupti dolores placeat perferendis, itaque illum harum?",
    img:""
  },{
    id:1,
    title:"Quora Backend Project",
    description:"lorem loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dignissimos saepe assumenda veritatis vel minima, adipisci inventore facilis reprehenderit rem maxime minus, provident corrupti dolores placeat perferendis, itaque illum harum?",
    img:""
  },{
    id:1,
    title:"Movie Booking Page",
    description:"lorem loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dignissimos saepe assumenda veritatis vel minima, adipisci inventore facilis reprehenderit rem maxime minus, provident corrupti dolores placeat perferendis, itaque illum harum?",
    img:""
  },{
    id:1,
    title:"Movie Booking Page",
    description:"lorem loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dignissimos saepe assumenda veritatis vel minima, adipisci inventore facilis reprehenderit rem maxime minus, provident corrupti dolores placeat perferendis, itaque illum harum?",
    img:""
  },]
  return (
    <>
    <div className='grid grid-cols-2 h-screen'>
      {
        dataProjects.map((data,id)=>{
          const {title,description,img}=data
          return(
           <div key={id} className="flex text-left items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <div>

              <h2 className='text-5xl'>{title}</h2>
              <p className='mt-6'>{description}</p>
            </div>
              <img src={img} alt="" />
           </div>
          )
        })}
    </div>
    </>
  )
}

export default MernProjects