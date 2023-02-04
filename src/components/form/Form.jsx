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
  const [visible, Setvisible] = useState(true)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
      <button onClick={() => Setvisible(!visible)}>MOdal</button>

      {visible &&
        createPortal(
          <Modal form={form} handleChange={handleChange} handleSubmit={handleSubmit} />,
          document.getElementById('modal-form')
        )}
    </>
  )
}
