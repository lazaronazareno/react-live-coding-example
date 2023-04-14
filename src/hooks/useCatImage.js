import { useEffect, useState } from 'react'

const CAT_IMAGE_ENDPOINT = 'https://cataas.com/'

export default function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_IMAGE_ENDPOINT}${imageUrl}` }
}
