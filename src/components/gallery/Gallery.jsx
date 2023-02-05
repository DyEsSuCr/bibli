import { Book } from './Book'

export function Gallery({ gallery }) {
  return (
    <div>
      {gallery.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  )
}
