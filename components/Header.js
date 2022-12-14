import Image from 'next/image'
import React from 'react'
import HeaderIcon from './HeaderIcon'
import { BeakerIcon,HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className='bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
        <div className='flex '>
            <HeaderIcon Icon={HomeIcon} title="Home"/>
            <HeaderIcon Icon={UserIcon} title="Account"/>
            <HeaderIcon Icon={PhoneIcon} title="Contact"/>
            <HeaderIcon Icon={InformationCircleIcon} title="ABout"/>
        </div>
        <Image
        src={"https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"}
        width={100}
        height={100}
        className=" cursor-pointer active:brightness-110"
        />
    </div>
  )
}
