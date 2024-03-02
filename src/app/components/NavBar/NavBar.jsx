import Navigation from "../Navigation/Navigation"
import Link from 'next/link'

export default function NavBar() {

  return (
    <header>
      <nav className='text-xl text-white my-14'>

        {/* Info personal */}
        <div className="w-full flex items-center justify-between lg:justify-around">
          <Link href="/" className='flex items-center gap-2 hover:text-strongPink'>
            <img src="/images/avatar.png" alt="avatar" className='w-10 h-10 rounded-full' />
            <span className='font-bold text-base'>Fermín Solaberrieta</span>
          </Link>

          {/* Navigation */}
          <Navigation />
        </div>

      </nav>
    </header>
  )
}
