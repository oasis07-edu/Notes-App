
import React from 'react'
import Sidebar from './Sidebar'
import Whole from './Whole'

const Body = ({
  setOverlay,
  fav,
  allNotes,
  setActive,
  active,
  arr,
  setArr,
  editNote,
  openAddNote,
  toggle,
  favourite,
  search,
  setSearch
}) => {
  return (
    <div className="w-full h-screen bg-ui-bg p-5 flex justify-between">
      <Sidebar
        favourite={favourite}
        allNotes={allNotes}
        setActive={setActive}
        active={active}
      />

      <Whole
        setOverlay={setOverlay}
        arr={arr}
        fav={fav}
        active={active}
        openAddNote={openAddNote}
        toggle={toggle}
        setArr={setArr}
        editNote={editNote}
        search={search}
        setSearch={setSearch}
      />
    </div>
  )
}

export default Body
