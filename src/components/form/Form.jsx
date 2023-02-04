import { Input } from './Input'

export function Forn() {
  return (
    <div className="bg-gray-600 max-w-screen-md">
      <form className="flex flex-col">
        <Input type={'text'} />
        <Input type={'text'} />
        <Input type={'url'} />
        <Input type={'number'} />
        <Input type={'date'} />
        <Input type={'text'} />
        <Input type={'text'} />
        <Input type={'text'} />
        <Input type={'checkbox'} />
        <Input type={'submit'} />
      </form>
    </div>
  )
}
