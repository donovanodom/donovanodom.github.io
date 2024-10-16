import { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import dologo from '../../../public/DO.svg'

const NavBar = () => {

  const [toggleOpen, setToggleOpen] = useState(false)

  const [size, setSize] = useState(0)
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <nav className={`h-[72px] bg-white border-b border-b-black fixed top-0 w-full ${toggleOpen ? 'z-[6]' : 'z-[1]'}`}>
      <div className="bg-white flex flex-wrap items-center justify-between mx-auto p-4 border-b border-b-black">
        <Link to='/' className='flex items-center'>
          <img src={dologo} className='h-8 mr-2 '/>
          <div className="text-black text-xl leading-tight tracking-tight rounded-lg focus:outline-none focus:shadow-outline">
              DONOVAN ODOM
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            onClick={() => setToggleOpen(!toggleOpen)}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {(toggleOpen || size >= 768) && ( 
          <div className="py-4 w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/" 
                  className="block py-2 px-3 font-light text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={() => size < 768 ? setToggleOpen(!toggleOpen) : null}
                >
                  About Me
                </Link>
              </li>
              <div className="w-[1px] bg-black"></div>
              <li>
                <Link
                  to="/projects"
                  className="block py-2 px-3 font-light text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={() => size < 768 ? setToggleOpen(!toggleOpen) : null}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/algorithms"
                  className="block py-2 px-3 font-light text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={() => size < 768 ? setToggleOpen(!toggleOpen) : null}
                >
                  Algorithms
                </Link>
              </li>
              <li>
                <Link
                  to="/write-ups"
                  className="block py-2 px-3 font-light text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  onClick={() => size < 768 ? setToggleOpen(!toggleOpen) : null}
                >
                  Write-ups
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>

  )
}

export default NavBar
