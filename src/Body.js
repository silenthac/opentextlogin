import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from './Main'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'

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
    </div>
  )
}

export default Body