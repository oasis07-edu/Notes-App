
import React from 'react'
import { RiSearch2Line } from '@remixicon/react'
import Note_card from './Note_card'

const Whole = ({
  setOverlay,
  arr,
  fav,
  active,
  setArr,
  editNote,
  openAddNote,
  toggle,
  search,
  setSearch
}) => {
  const displayedNotes = (active === 'favourite' ? fav : arr)
    .filter(note => {
      const query = search.toLowerCase().trim()
      return (
        note.title?.toLowerCase().includes(query) ||
        note.para?.toLowerCase().includes(query) ||
        note.tag?.toLowerCase().includes(query)
      )
    })

  const deleteNote = (id) => {
    setArr(prev => prev.filter(note => note.id !== id))
  }

  return (
    <div className="h-full w-[80%] flex flex-col gap-3 relative">

      <div className="flex justify-between px-[18px]">

        <div className="flex gap-2 bg-search px-2 text-ui-text py-1 items-center rounded-xl">
          <RiSearch2Line />

          <input
            className="text-lg outline-none bg-transparent"
            type="text"
            placeholder="Search note"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <button
          onClick={openAddNote}
          className="bg-primary text-ui-bg text-lg px-2 py-1.5 rounded-xl cursor-pointer uppercase hover:bg-white hover:text-[#29BA9C] transition-colors duration-200"
        >
          Add New Note
        </button>
      </div>

      <div className="w-full h-200 overflow-y-auto p-[18px] flex gap-3 flex-wrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

        {displayedNotes.length > 0 ? (
          displayedNotes.map(note => (
            <Note_card
              key={note.id}
              elem={note}
              deletNote={deleteNote}
              editNote={editNote}
              toggle={toggle}
            />
          ))
        ) : (
          <div className="text-ui-text/50 w-full text-center mt-10">
            {search
              ? 'No notes found.'
              : active === 'favourite'
                ? 'No favourite notes yet.'
                : 'No notes yet. Create your first note!'}
          </div>
        )}

      </div>
    </div>
  )
}

export default Whole
