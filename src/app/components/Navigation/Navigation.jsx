"use client"
import './Navigation.css'
import Link from 'next/link'
import useOpen from '@/app/hooks/useOpen';
import { usePathname } from 'next/navigation'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Navigation() {
  const pathname = usePathname()
  const { isOpen, close, open } = useOpen()

  return (
    <>
      {/* Icon burger */}
      <CiMenuBurger className='lg:hidden text-2xl' onClick={open} />

      <ul className={`absolute flex-col bg-black top-0 left-0 w-full h-screen flex justify-center gap-16 pt-10 lg:pt-0 lg:bg-transparent lg:flex-row lg:flex lg:relative lg:w-min lg:h-min lg:text-sm lg:gap-6 ${isOpen ? "navigaitor" : "hidden"}`}>

        <button className='absolute top-0 right-0 mt-12 p-3 pt-4 mx-3 sm:mx-5 md:mx-7 lg:hidden' onClick={close}>
          <IoMdClose className='text-3xl' />
        </button>

        <Link href="/" className='w-full' onClick={close}>
          <li className={`${pathname === "/" ? "hover-fixed" : ""} liNav w-fit pl-20 text-4xl lg:text-base lg:p-0 `}>
            <span className='font-thin text-xl opacity-20 pr-2 lg:opacity-100 lg:text-base lg:font-bold'>01</span>
            <span className='font-semibold lg:font-thin'>
              home
            </span>
          </li>
        </Link>
        <Link href="/Proyects" className='w-full' onClick={close}>
          <li className={`${pathname === "/Proyects" ? "hover-fixed" : ""} liNav w-fit pl-20 text-4xl lg:text-base lg:p-0 `}>
            <span className='font-thin text-xl opacity-20 pr-2 lg:opacity-100 lg:text-base lg:font-bold'>02</span>
            <span className='font-semibold lg:font-thin'>
              proyects
            </span>
          </li>
        </Link>
        <Link href="/Technology" className='w-full' onClick={close}>
          <li className={`${pathname === "/Technology" ? "hover-fixed" : ""} liNav w-fit pl-20 text-4xl lg:text-base lg:p-0 `}>
            <span className='font-thin text-xl opacity-20 pr-2 lg:opacity-100 lg:text-base lg:font-bold'>03</span>
            <span className='font-semibold lg:font-thin'>
              technology
            </span>
          </li>
        </Link>
        <Link href="/Education" className='w-full' onClick={close}>
          <li className={`${pathname === "/Education" ? "hover-fixed" : ""} liNav w-fit pl-20 text-4xl lg:text-base lg:p-0 `}>
            <span className='font-thin text-xl opacity-20 pr-2 lg:opacity-100 lg:text-base lg:font-bold'>04</span>
            <span className='font-semibold lg:font-thin'>
              education
            </span>
          </li>
        </Link>
        <Link href="/About" className='w-full' onClick={close}>
          <li className={`${pathname === "/About" ? "hover-fixed" : ""} liNav w-fit pl-20 text-4xl lg:text-base lg:p-0 `}>
            <span className='font-thin text-xl opacity-20 pr-2 lg:opacity-100 lg:text-base lg:font-bold'>05</span>
            <span className='font-semibold lg:font-thin'>
              about
            </span>
          </li>
        </Link>
      </ul>
    </>
  )
}
