'use client'

import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <div className="h-20 w-full fixed bg-white shadow-sm border-b-[1px]">
      <Container>
        <div className="flex flex-grow items-center justify-center gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
