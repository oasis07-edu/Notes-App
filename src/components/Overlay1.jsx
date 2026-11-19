import React from 'react'
import { RiSearch2Line, RiPriceTag3Line, RiPaletteLine, RiDeleteBin2Fill, RiFileCopyLine, RiCheckLine, RiCloseFill } from "@remixicon/react";
import { useState } from 'react';

// FIXED: Storing the complete Tailwind utility classes directly in the array

const Overlay1= ({
    setOverlay,
    btnCLicked,
    setTitle,
    setPara,
    para ,
    title,
    Color,
    setColor,
    Colors,
    tag,
    setTag,
    editNote
    }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md -inset-4">

        <div className=' flex absolute top-0 left-0 h-screen w-full justify-center items-center '>
            {/* FIXED: Directly using Color.bg variable instead of broken string concatenation */}
            <div className={`h-[80vh] w-180 p-5 rounded-xl flex flex-col gap-3 ${Color.bg}`}>

                <div className='flex justify-between items-center'>
                    <div>
                        <input
                            className='text-xl outline-none text-white placeholder-white/60 bg-transparent'
                            type="text"
                            value={title}
                            onChange={(e)=>{
                                setTitle(e.target.value)
                            }}
                            placeholder='Enter Title Here'
                        />
                    </div>
                    <div className='flex gap-3 text-white items-center '>
                        <div>
                        <RiFileCopyLine className='cursor-pointer' />
                        </div>
                        <button
                        onClick={()=>{
                            {
                            if(title.trim()==='' || tag.trim()==='' || para.trim()===''){
                                alert("fill all the inputs muther fucher")
                                return
                            }
                            
                                btnCLicked()
                            }
                        }}
                        className='bg-[#29BA9C]/50 rounded-full p-1 cursor-pointer'>
                            <RiCheckLine />
                        </button>
                        <button 
                        onClick={()=>{
                            setOverlay(false)
                        }}
                        className='bg-red-500/50 rounded-full p-1 cursor-pointer'
                        >
                        <RiCloseFill className='cursor-pointer' />
                        </button>
                    </div>
                </div>

                <div className={`flex gap-2 items-center border-b-2 ${Color.border} pb-3`}>

                    <div className='flex gap-1 items-center border-r-2 border-white/20 pr-3'>
                        <RiPaletteLine size={17} color='white' />
                        {Colors.map((col, indx) => (
                            <div
                                onClick={() => {
                                    setColor(col)
                                }}
                                key={indx}
                                className={`${col.bg} h-5 w-5 rounded-full cursor-pointer border border-white/20 hover:scale-110 transition-transform`}
                            />
                        ))}
                    </div>

                    <div className='flex gap-1 items-center'>
                        <RiPriceTag3Line color='white' size={16} />
                        <input
                            className='outline-none text-white text-sm bg-transparent placeholder-white/60'
                            type="text"
                            value={tag}
                            onChange={(e)=>{
                                setTag(e.target.value)
                            }}
                            placeholder='Enter Tag'
                        />
                    </div>

                </div>

                <div>
                    <textarea 
                        className='w-full h-80 text-lg text-white outline-none bg-transparent placeholder-white/60 resize-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
                        placeholder='Start typing from here'
                        value={para}
                        onChange={(e)=>{
                            setPara(e.target.value)
                        }}
                    />
                </div>

            </div>
        </div>
        </div>
    )
}

export default Overlay1
