import { createPortal } from 'react-dom'
import { useState } from 'react'

import { Modal } from './Modal'

export function Form({ createGallery, updGallery }) {
  const initialForm = {
    id: null,
    title: '',
    subtitle: '',
    front_page: '',
    pages: '',
    publiched_date: '',
    gender: '',
    author: '',
    lenguaje: '',
    fav: false,
  }

  const [form, setForm] = useState(initialForm)
  const [visible, Setvisible] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    })
  }

  const handleFile = (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('load', (e) => {
      setForm({
        ...form,
        front_page: e.target.result,
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.id === null) {
      createGallery(form)
    } else {
      updGallery()
    }

    setForm(initialForm)
    Setvisible(!visible)
  }

  return (
    <>
      <button onClick={() => Setvisible(!visible)}>Add book</button>

      {visible &&
        createPortal(
          <Modal
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleChecked={handleChecked}
            handleFile={handleFile}
          />,
          document.getElementById('modal-form')
        )}
    </>
  )
}
