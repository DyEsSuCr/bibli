import { useEffect, useState } from 'react'

import { Form } from '../form/Form'
import { Gallery } from '../gallery/Gallery'

export function Blibli() {
  const [gallery, setGallery] = useState([])

  const isLocalGallery = JSON.parse(localStorage.getItem('gallery'))

  // NOTE: Crea El LocalStorage
  useEffect(() => {
    if (!isLocalGallery) localStorage.setItem('gallery', JSON.stringify(gallery))
    else setGallery(isLocalGallery)
  }, [])

  // NOTE: POST
  const createGallery = (data) => {
    data.id = crypto.randomUUID()

    // RECORD: Hacer validaciones

    setGallery([...gallery, data])
    localStorage.setItem('gallery', JSON.stringify([...gallery, data]))
  }

  // NOTE: GET
  const getGallery = (noFav = [], Fav = []) => {
    gallery.filter((books) => {
      if (books.fav === false) noFav.push(books)
      else Fav.push(books)
    })

    return {
      noFav,
      Fav,
    }
  }

  // NOTE: PUT
  const updGallery = (data, id) => {
    console.log('Se actualizo')
  }

  // NOTE: DELETE
  const delGallery = (id) => {
    console.log('Elimina post')
  }

  return (
    <div className="min-w-full min-h-screen">
      <Form createGallery={createGallery} updGallery={updGallery} />
      <Gallery getGallery={getGallery} gallery={gallery} />
    </div>
  )
}
