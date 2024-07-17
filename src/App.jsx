import './App.css'

function App() {
    const myName = "Sonia Obasuyi";
    const year = new Date().getFullYear();

  return (
    <>
        <h1>My favorite RnB singers</h1>
        <ul>
            <li>John Legend</li>
            <li>Beyonce</li>
            <li>Chloe x Halle</li>
        </ul>

        <p>Created by {myName}.</p>
        <p>Copyright {year}</p>
    </>
  )
}

export default App
