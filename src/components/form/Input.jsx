export function Input({ type, name, value, myHandleChange }) {
  return <input className="mb-4" type={type} name={name} value={value} onChange={myHandleChange} />
}
