export function Input({ type, name, value, myHandleChange }) {
  return <input type={type} name={name} value={value} onChange={myHandleChange} />
}
