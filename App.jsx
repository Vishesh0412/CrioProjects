import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [Country, setCountry] = useState([])
  const url = "https://xcountries-backend.azurewebsites.net/all";

  console.log(Country);

  useEffect(()=>{
    fetch(url).then(res => res.json()).then(data => {setCountry(data);}).catch(error => console.error("Error: ", error));
  }, []);


  return (
    <>
    <div className="cards" style={{display: 'flex',
   flexWrap: "wrap"}}>

      {Country.map(ele => (
        <Card key = {ele.abbr} image = {ele.flag} abbr = {ele.abbr} country = {ele.name} />
      ))}
    </div>
    </>
  )
}

export default App