import React from 'react'
import Links from './Links'
import BottomIcons from './BottomIcons'

const Bottom = ({links}) => {
  return (
    <div className='w-[90%] lg:w-[80%] mx-auto hidden lg:flex items-center justify-between'>
        <img src="/images/logo.png" alt="logo" className='w-[80px] object-contain' />
        <Links links={links} />
        <BottomIcons />
    </div>
  )
}

export default Bottom