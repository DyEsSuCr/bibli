import { Input } from './Input'

export function Modal({ form, handleChange, handleSubmit }) {
  return (
    <div className="bg-gray-600 max-w-screen-md p-4 absolute top-0 left-0 right-0 mx-auto">
      <form className="flex flex-col">
        <label htmlFor="title">Title</label>
        <Input type={'text'} name={'title'} myHandleChange={(e) => handleChange(e)} value={form.title} />
        <label htmlFor="title">Subtitle</label>
        <Input
          type={'text'}
          name={'subtitle'}
          myHandleChange={(e) => handleChange(e)}
          value={form.subtitle}
        />
        <label htmlFor="title">Front Page</label>
        <Input
          type={'url'}
          name={'front_page'}
          myHandleChange={(e) => handleChange(e)}
          value={form.front_page}
        />
        <label htmlFor="title">Pages</label>
        <Input type={'number'} name={'pages'} myHandleChange={(e) => handleChange(e)} value={form.pages} />
        <label htmlFor="title">Publoched date</label>
        <Input
          type={'date'}
          name={'publiched_date'}
          myHandleChange={(e) => handleChange(e)}
          value={form.publiched_date}
        />
        <label htmlFor="title">Gender</label>
        <Input type={'text'} name={'gender'} myHandleChange={(e) => handleChange(e)} value={form.gender} />
        <label htmlFor="title">Author</label>
        <Input type={'text'} name={'author'} myHandleChange={(e) => handleChange(e)} value={form.author} />
        <label htmlFor="title">Lenguaje</label>
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
