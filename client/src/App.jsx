import React from 'react'
import HomePage from './pages/HomePage'
import Layout from './Layout'
import { Routes , Route } from 'react-router-dom'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListPage from './pages/ListPage'
import SinglePage from './pages/SinglePage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import RequireAuth from './RequireAuth'
import UpdateProfile from './pages/UpdateProfile'
import AddPostPage from './pages/AddPostPage'
import { singlePageLoader,listPageLoader } from './lib/loader.js'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          //loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <UpdateProfile/>,
        },
        {
          path: "/add",
          element: <AddPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

// const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element = {<Layout/>} >
//         <Route index element={<HomePage/>} />
//         <Route path='/list' element={<ListPage/>} />
//         <Route path='/:id' element = {<SinglePage/>} />
        
//         <Route path='/register' element = {<RegisterPage/>} />
//         <Route path='/login' element = {<LoginPage/>} />
//       </Route>
//       <Route path='/' element= {<RequireAuth/>}>
//         <Route path='/profile' element = {<ProfilePage/>} />
//         <Route path='/profile/update' element = {<UpdateProfile/>} />
//         <Route path='/add' element={<AddPostPage/>} />
//       </Route>
//     </Routes>
//   )
// }

export default App