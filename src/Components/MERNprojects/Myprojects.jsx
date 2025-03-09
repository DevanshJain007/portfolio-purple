import React from 'react'
import img1 from '../MERNprojects/hey.png'
import img12 from '../MERNprojects/icon.png'
const Myprojects = () => {
  return (
    <div className='flex gap-10 mt-[20%]'>
        {/**left */}
        <div className='w-1/2 '>
            <div>
                <h6 className='text-xl text-left text-purple-400'>Featured Project</h6>
               <h2 className='text-4xl text-left'>Example Project</h2>
            </div>
          <div>
            <p className='text-left mt-10 ml-[10%] border max-w-200'> A web apps for visualizing personalised Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio informatuion about each track . Create and save new playlist of recommended tracks based on your existing playlists and more.</p>
          </div>
          <div className='flex'>
            <img src={img12} alt="icons1" />
            <img src={img12} alt="icons2" />
          </div>
        </div>
        {/**Right*/}
        <div className='max-w-1/2'>
            <div className='border-2 '>
                <img src={img1} alt="" className='m-10 mb-0 mr-0'/>
            </div>
        </div>
    </div>
  )
}

export default Myprojects
// https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D