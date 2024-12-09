import React from 'react'
import c1 from '../../img/c1.png'
import c2 from '../../img/c2.png'
import c3 from '../../img/c3.png'

function AboutMeList() {
  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-[#D8DAF1]'>
          <div className='w-[50%] m-[auto]'> <img src={c2} /></div>
          <div className='font-bold text-[20px] mb-[10px] m-[auto]'>Profile</div>
        </div>
        <div className='bg-[#ECDEEE]'>
          <div className='w-[50%] m-[auto]'> <img src={c1} /></div>
          <div className='font-bold text-[20px] mb-[10px] m-[auto]'>Activities</div>
        </div>

        <div className='bg-[#C6CBE0]'>
          <div className='w-[50%] m-[auto]'> <img src={c3} /></div>
          <div className='font-bold text-[20px] mb-[10px] m-[auto]'>Skills</div>
        </div>
      </div>
    </>
  )
}

export default AboutMeList