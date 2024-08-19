import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='containerr'>
          <nav className='navbar flex justify-between'>
            <Link to="/" className='logo cursor-pointer'>CRYPTOFOLIO</Link>
            <div className='flex items-center gap-[20px]'>
                <select className='w-[78px] h-[40px] rounded bg-transparent'>
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                    <option value="RUBl">RUBL</option>
                </select>
                <button className='w-[133px] h-[40px] rounded-[4px] bg-blue-300 nav-btn'>WATCH LIST</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar