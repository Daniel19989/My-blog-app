import React from "react";

import AddPostButton from "./components/button/Button"
import Footer from "./components/footer/Footer"
import HeaderPage from "./components/header/HeaderPage"
import { Route, Routes } from 'react-router-dom'
import Post from "./components/postpage/Post"
import GetApiPosts from "./getApiPost/GetApiPosts"






function App() {

  return (
    <>
      <Routes>
        <Route path='/Post' element={<Post />} />
        <Route path='/' element={
          <>
            <HeaderPage />
            <AddPostButton />
            <GetApiPosts />
            <Footer />
          </>}
        />
      </Routes>
    </>
  )
}

export default App;