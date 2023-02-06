import { Input } from './Input'

export function Modal({ form, handleChange, handleSubmit, handleChecked, handleFile }) {
  return (
    <div className="bg-gray-600 max-w-screen-md p-4 absolute top-0 left-0 right-0 mx-auto">
      <form className="flex flex-col">
        <Input
          label={'Title'}
          type={'text'}
          name={'title'}
          myHandleChange={(e) => handleChange(e)}
          value={form.title}
        />

        <Input
          label={'Subtitle'}
          type={'text'}
          name={'subtitle'}
          myHandleChange={(e) => handleChange(e)}
          value={form.subtitle}
        />

        <label htmlFor="file">Fron Page</label>
        <input type="file" name="front_page" onChange={handleFile} />

        <Input
          label={'Pages'}
          type={'number'}
          name={'pages'}
          myHandleChange={(e) => handleChange(e)}
          value={form.pages}
        />

        <Input
          label={'Publoched date'}
          type={'date'}
          name={'publiched_date'}
          myHandleChange={(e) => handleChange(e)}
          value={form.publiched_date}
        />

        <Input
          label={'Gender'}
          type={'text'}
          name={'gender'}
          myHandleChange={(e) => handleChange(e)}
          value={form.gender}
        />

        <Input
          label={'Author'}
          type={'text'}
          name={'author'}
          myHandleChange={(e) => handleChange(e)}
          value={form.author}
        />

        <Input
          label={'Lenguaje'}
          type={'text'}
          name={'lenguaje'}
          myHandleChange={(e) => handleChange(e)}
          value={form.lenguaje}
        />

        <input type="checkbox" name="fav" onChange={handleChecked} />

        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  )
}
