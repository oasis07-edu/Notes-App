
import React, { useEffect, useState } from 'react'
import { FiSearch, FiStar } from 'react-icons/fi'
import {
    RiDownload2Line,
    RiSunLine,
    RiMoonLine,
    RiMenuLine,
    RiCrossLine,
    RiCloseFill
} from '@remixicon/react'

const Sidebar = ({ favourite, setActive, active, allNotes, openSidebar, sidebar, setSidebar }) => {

    // Load saved theme when the app starts
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('oasis-theme') || 'default'
    })

    // Apply theme and save it whenever it changes
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('oasis-theme', theme)
    }, [theme])
    return (
        <>
            <div className={`h-full hidden md:flex w-60 bg-ui-sidebar rounded-2xl p-5 gap-4 flex-col justify-between `}>

                <div className="flex gap-4 flex-col">

                    <div className="flex items-center">
                        <img
                            alt="Profile"
                            className="h-12 w-12 rounded-full border-green-500 border-2 p-0.5"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QcoKW0sYOiHbzsRIr4Q2_MwlWBPDXotONCsRDUoTnA&s=10"
                        />
                        <h2 className="text-ui-text text-xl ml-2">Oasis Dhakal</h2>
                    </div>

                    <div className="flex flex-col gap-3">

                        <div
                            onClick={() => {
                                allNotes()
                                setActive('all')
                            }}
                            className={`flex gap-2 items-center px-3 w-full text-lg py-2 rounded-xl text-ui-text cursor-pointer
              ${active === 'all' ? 'bg-primary' : 'hover:bg-btns transition-colors duration-200'}`}
                        >
                            <FiSearch size={20} /> All Notes
                        </div>

                        <div
                            onClick={() => {
                                favourite()
                                setActive('favourite')
                            }}
                            className={`flex gap-2 items-center px-3 w-full text-lg py-2 rounded-xl text-ui-text cursor-pointer
              ${active === 'favourite' ? 'bg-primary' : 'hover:bg-btns transition-colors duration-200'}`}
                        >
                            <FiStar size={20} /> Favourites
                        </div>

                    </div>
                </div>

                {/* Theme controls */}
                <div className="flex justify-center items-center gap-5">

                    {/* Light Mode */}
                    <button
                        onClick={() => setTheme('light')}
                        aria-label="Enable light mode"
                        title="Light mode"
                    >
                        <RiSunLine className="text-ui-text hover:text-amber-500 transition-colors duration-200" />
                    </button>

                    {/* Dark Mode */}
                    <button
                        onClick={() => setTheme('default')}
                        aria-label="Enable dark mode"
                        title="Dark mode"
                    >
                        <RiMoonLine className="text-ui-text hover:text-purple-600 transition-colors duration-200" />
                    </button>



                </div>
            </div>
            <div className='relative flex md:hidden text-white justify-center mt-1 md:border-r-grey border-r-1   '>
                <RiMenuLine className='text-lg  text-white active:text-[#dadada]/50 transition-colors duration-200'
                    onClick={() => {
                        openSidebar()
                        setSidebar(true)
                    }}
                />
                <div className={`${sidebar ? 'bg-black w-50 h-50 absolute top-0 left-0 z-1 rounded-xl' : 'hidden'}`}>
                    <div className='flex gap-5 flex-col p-2'>

                        <div className='flex justify-between  '>
                            <div className='flex items-center'>

                            <img
                                alt="Profile"
                                className="h-8 w-8 rounded-full border-green-500 border-2 p-0.5"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QcoKW0sYOiHbzsRIr4Q2_MwlWBPDXotONCsRDUoTnA&s=10"
                                />
                            <h2 className="text-ui-text text-2sm ml-1">Oasis Dhakal</h2>

                            </div>

                            <div>
                            </div>

                        </div>

                        <div className='flex flex-col gap-2 items-center'>
                             <div
                            onClick={() => {
                                allNotes()
                                setActive('all')
                                setSidebar(false)
                            }}
                            className={`flex gap-2 items-center px-3 w-full text-2sm py-2 rounded-xl text-ui-text cursor-pointer
              ${active === 'all' ? 'bg-primary' : 'hover:bg-btns transition-colors duration-200'}`}
                        >
                            <FiSearch size={20} /> All Notes
                        </div>

                        <div
                            onClick={() => {
                                favourite()
                                setActive('favourite')
                                setSidebar(false)
                            }}
                            className={`flex gap-2 items-center px-3 w-full text-2sm py-2 rounded-xl text-ui-text cursor-pointer
              ${active === 'favourite' ? 'bg-primary' : 'hover:bg-btns transition-colors duration-200'}`}
                        >
                            <FiStar size={20} /> Favourites
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
