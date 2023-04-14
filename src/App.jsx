import './App.css'
import useCatImage from './hooks/useCatImage'
import useCatFact from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main className='App'>
      <h1>hello gatitos</h1>
      <button onClick={handleClick}>New Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={fact} />}
    </main>
  )
}

export default App
