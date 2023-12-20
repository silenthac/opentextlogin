import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from './Main'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Comp1 from './Comp1'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element: <Main/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}/>
        {/* <Comp1/> */}
    </div>
  )
}

export default Body