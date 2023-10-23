import Link from 'next/link'
import {FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav className=''>
      <ul className='py-2 border-t border-gray-300'>
        <li className='space-x-6 text-xs'>
          <Link href="/technology">Tecnologia</Link>
        </li>
      </ul>
      <div className='w-full h-[1px] bg-black mb-1' />
      <div className='w-full h-[1px] bg-black' />
    </nav>
  )
}

export default Navbar