"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { navLink } from '../data/data'
import Image from 'next/image'
import ha from '../../asset/icons/hm.png'
import cr from '../../asset/icons/cr.png'
const Navbar = () => {
  const [active,setActive] = useState('Home')
  const [nav,setNav] = useState(false)
  const img = nav?cr:ha
  return (
    <header className='w-full h-[100px] bg-gray-100 fixed z-20 '>
     <nav className='flex justify-between items-center max-container h-full '>
        <h1 className='text-2xl font-bold text-green-600'>Birra Cafe.</h1>
        <div className='flex gap-8 max-md:hidden '>
            {navLink.map((links)=>(
                <Link href={links.id} key={links.name} className={`${active===links.name?'font-bold text-green-500':null}text-[18px] hover:border-b-2 border-green-500 `}onClick={()=>setActive(links.name)}>{links.name}</Link>
            ))}
        </div>
        <div className='max-md:block hidden' onClick={()=>setNav(!nav)}>
        <button><Image src={img} width={30} height={30} alt='hum' className='w-30 h-30 mr-2'/></button>
     </div>
     </nav>
    
     <div className={nav?'absolute top-20 flex flex-col w-full h-screen items-center space-y-8 bg-slate-200 opacity-100 md:hidden transition-all duration-400 ease-in ':'top-[-490] opacity-0'}>
            {navLink.map((links)=>(
                <Link href={links.id} key={links.name} className={`${active===links.name?'font-bold text-green-500':null}text-[18px] hover:font-bold md:hidden pt-6 ${!nav?'hidden':null} `}onClick={()=>setActive(links.name)}>{links.name}</Link>
            ))}
        </div>
     
    
    </header>
  )
}

export default Navbar
