import { FaHeart } from 'react-icons/fa'

export function Book({ book }) {
  const { id, title, subtitle, front_page, pages, publiched_date, gender, author, lenguaje, fav } = book

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <img src={front_page} alt={title} />
      <p>{pages}</p>
      <p>{publiched_date}</p>
      <p>{gender}</p>
      <p>{author}</p>
      <p>{lenguaje}</p>
      <p>{fav ? <FaHeart className="text-red-600" /> : <FaHeart />}</p>
    </div>
  )
}
