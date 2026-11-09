import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import pinkFlowers from './assets/images/Pink_Flowers.png'
import woman from './assets/images/mujer.png'
import man from './assets/images/hombre.png'
import itinerary from './assets/images/itinerario.jpeg'

for (const imageUrl of [pinkFlowers, woman, man, itinerary]) {
  const image = new Image()
  image.src = imageUrl
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
