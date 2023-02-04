import { useState } from 'react'

import { Input } from './Input'

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
  }

  return (
    <div className="bg-gray-600 max-w-screen-md p-4">
      <form className="flex flex-col gap-4">
        <Input type={'text'} name={'title'} myHandleChange={(e) => handleChange(e)} value={form.title} />
        <Input
          type={'text'}
          name={'subtitle'}
          myHandleChange={(e) => handleChange(e)}
          value={form.subtitle}
        />
        <Input
          type={'url'}
          name={'front_page'}
          myHandleChange={(e) => handleChange(e)}
          value={form.front_page}
        />
        <Input type={'number'} name={'pages'} myHandleChange={(e) => handleChange(e)} value={form.pages} />
        <Input
          type={'date'}
          name={'publiched_date'}
          myHandleChange={(e) => handleChange(e)}
          value={form.publiched_date}
        />
        <Input type={'text'} name={'gender'} myHandleChange={(e) => handleChange(e)} value={form.gender} />
        <Input type={'text'} name={'author'} myHandleChange={(e) => handleChange(e)} value={form.author} />
        <Input
          type={'text'}
          name={'lenguaje'}
          myHandleChange={(e) => handleChange(e)}
          value={form.lenguaje}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  )
}
