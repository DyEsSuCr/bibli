import { useEffect, useState } from 'react'
import { Forn } from '../form/Form'

export function Blibli() {
  const [gallery, setGallery] = useState([])

  const isLocalGallery = JSON.parse(localStorage.getItem('gallery'))

  // NOTE: Crea El LocalStorage
  useEffect(() => {
    if (!isLocalGallery) {
      localStorage.setItem('gallery', JSON.stringify(gallery))
    } else {
      setGallery(isLocalGallery)
    }
  }, [])

  // NOTE: POST
  const createGallery = (data) => {
    console.log(data)
  }

  // NOTE: GET
  const getGallery = (data) => {
    console.log('Obtener favoritos')
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
      <h1>BIBLI</h1>
      <Forn createGallery={createGallery} updGallery={updGallery} />
    </div>
  )
}
