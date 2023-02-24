import React, {useEffect} from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Routes from '../Routes/Routes'
import Home from '../Components/Home'
import Sobre from '../Components/About'
import Work from '../Components/Work'
import Scheduling from '../Components/Scheduling'
import Thank from '../Components/ThankYou'

function App() {

  useEffect(()=>{
Aos.init({duration: 2000});
  },[])

  const router = createBrowserRouter([
 
    {
      path:'/',
      element: <Routes/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/sobre',
          element: <Sobre/>
        },
        {
          path:'/work',
          element: <Work/>
        },
        {
          path:'/agendamento',
          element: <Scheduling />
        },
        {
          path:'/obrigado',
          element: <Thank />
        }]
    }
  
  ])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
