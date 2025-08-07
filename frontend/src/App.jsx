
import './App.css'

import MovieCard from './components/MovieCard'  

// there is a root component with App function in it we can keep other components in it Text component is a child of App component
// combine the components in one 
function App() {  

  const movieNumber = 2; 
  
  // Example variable, can be used to conditionally render components
  return (
    <>
 { movieNumber ===1 ? 
 (<MovieCard movie={{title: "Inception", release_date: "2010-07-16", url: "https://example.com/inception.jpg"}} /> ):

 (<MovieCard movie={{title: "The Matrix", release_date: "1999-03-31", url: "https://example.com/matrix.jpg"}} />)}

 
    </>
  )
}

// movieNumber == 1 && if true then

export default App
