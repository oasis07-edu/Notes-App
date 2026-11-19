
import React, { useEffect, useState } from 'react'
import Body from './Body'
import Overlay1 from './Overlay1'

const Colors = [
  { bg: 'bg-[#000000]/40', border: 'border-[#000000]/60' },
  { bg: 'bg-[#E24C7F]/40', border: 'border-[#E24C7F]/60' },
  { bg: 'bg-[#DE821E]/40', border: 'border-[#DE821E]/60' },
  { bg: 'bg-[#435ED2]/40', border: 'border-[#435ED2]/60' },
  { bg: 'bg-[#29BA9C]/40', border: 'border-[#29BA9C]/60' },
  { bg: 'bg-[#BC3EC9]/40', border: 'border-[#BC3EC9]/60' }
]

const STORAGE_KEY = 'oasis-notes'

  const Cover = () => {
  const [overlay, setOverlay] = useState(false)
  const [Color, setColor] = useState(Colors[0])
  const [edit, setEdit] = useState(null)
  const [tag, setTag] = useState('')
  const [para, setPara] = useState('')
  const [title, setTitle] = useState('')
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState('')

  // Load notes from Local Storage on initial render
  const [arr, setArr] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Save notes whenever arr changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
  }, [arr])

  const fav = arr.filter(note => note.isLiked)

  const toggle = (id) => {
    setArr(prev =>
      prev.map(note =>
        note.id === id
          ? { ...note, isLiked: !note.isLiked }
          : note
      )
    )
  }

  const favourite = () => setActive('favourite')
  const allNotes = () => setActive('all')

  const openAddNote = () => {
    setEdit(null)
    setTitle('')
    setTag('')
    setPara('')
    setColor(Colors[0])
    setOverlay(true)
  }

  const editNote = (elem) => {
    setEdit(elem.id)
    setTitle(elem.title)
    setTag(elem.tag || '')
    setPara(elem.para)
    setColor(elem.Color || Colors[0])
    setOverlay(true)
  }

  const btnCLicked = () => {
    setArr(prev => {
      if (edit !== null) {
        return prev.map(note =>
          note.id === edit
            ? { ...note, title, para, tag, Color }
            : note
        )
      }

      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          para,
          tag,
          Color,
          isLiked: false,
          createdAt: new Date().toISOString()
        }
      ]
    })

    setEdit(null)
    setPara('')
    setTitle('')
    setTag('')
    setColor(Colors[0])
    setOverlay(false)
  }

  return (
    <div>
      <Body
        setOverlay={setOverlay}
        allNotes={allNotes}
        active={active}
        fav={fav}
        setActive={setActive}
        favourite={favourite}
        toggle={toggle}
        openAddNote={openAddNote}
        arr={arr}
        setArr={setArr}
        editNote={editNote}
        search={search}
        setSearch={setSearch}
      />

      {overlay && (
        <Overlay1
          setOverlay={setOverlay}
          btnCLicked={btnCLicked}
          setTitle={setTitle}
          setPara={setPara}
          title={title}
          para={para}
          Color={Color}
          setColor={setColor}
          Colors={Colors}
          tag={tag}
          setTag={setTag}
        />
      )}
    </div>
  )
}

export default Cover
