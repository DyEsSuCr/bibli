export function Input({ label, type, name, value, myHandleChange }) {
  return (
    <>
      <label>{label}</label>
      <input className="mb-4" type={type} name={name} value={value} onChange={myHandleChange} />
    </>
  )
}
