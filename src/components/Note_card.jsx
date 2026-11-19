
import React from 'react'
import {
  RiDeleteBin2Fill,
  RiEdit2Line,
  RiPokerHeartsLine,
  RiPokerHeartsFill
} from '@remixicon/react'

const Note_card = ({ elem, deletNote, editNote, toggle }) => {
  const date = elem.createdAt
    ? new Date(elem.createdAt).toLocaleDateString('en-GB')
    : ''

  const noteColor = elem.Color?.bg || 'bg-neutral-800/40'

  return (
    <div className={`${noteColor} cursor-pointer w-80 h-66 rounded-xl flex flex-col justify-between p-4`}>

      <div className="flex flex-col gap-3">

        <div className="flex justify-between items-center">

          <h2 className="text-ui-text text-lg font-bold break-words">
            {elem.title}
          </h2>

          <div className="flex items-center gap-1">

            <button
              onClick={() => toggle(elem.id)}
              className="cursor-pointer"
              aria-label="Toggle favourite"
            >
              {elem.isLiked ? (
                <RiPokerHeartsFill className="text-white" />
              ) : (
                <RiPokerHeartsLine className="text-white" />
              )}
            </button>

            <RiEdit2Line
              onClick={() => editNote(elem)}
              size={35}
              className="text-white transition-colors duration-200 p-1 active:bg-[#dadada]/30 rounded-full cursor-pointer"
            />
          </div>
        </div>

        <div className="overflow-hidden w-full h-36 text-ui-text text-xs leading-7 border-neutral-500 border-b border-t mb-2 whitespace-pre-wrap break-words">
          {elem.para}
        </div>

        
      </div>

      <div className="flex justify-between items-center">
        <div className="text-[#737373]">{date}</div>

        <button
          onClick={() => deletNote(elem.id)}
          aria-label="Delete note"
        >
          <RiDeleteBin2Fill
            className="text-white active:scale-95 bg-red-500 px-2 rounded-lg hover:bg-white hover:text-red-500 transition-colors duration-200 cursor-pointer"
            size={40}
          />
        </button>
      </div>
    </div>
  )
}

export default Note_card
