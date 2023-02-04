import { useEffect, useState } from 'react'

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

  return (
    <div className="min-w-full min-h-screen">
      <h1>BIBLI</h1>
    </div>
  )
}
