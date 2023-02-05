import { Book } from './Book'

export function Gallery({ getGallery }) {
  return (
    <div className="flex justify-evenly flex-wrap">
      <div>
        <h1>Favoritos</h1>
        {getGallery().Fav.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <div>
        <h1>No favoritos</h1>
        {getGallery().noFav.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
