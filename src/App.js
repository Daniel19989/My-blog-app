import React from "react";
import Body from "./pages/body/Body";
import AddPostButton from "./pages/button/Button";
import Footer from "./pages/footer/Footer";
import Headerpage from "./pages/header/HeaderPage";
import { Route, Routes } from 'react-router-dom'
import Post from "./pages/postpage/Post";


function App() {
  return (
    <>
      <Headerpage />
      <Body
        post_date="post_date"
        post_title="post title"
        post_text="So perhaps, you'vedfancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?"
        post_image="https://images.unsplash.com/photo-1641292751383-7fdb66f46e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <Body />
      <Body />
      <Body />
      <Body />
      <AddPostButton />
      <Footer />
      <Routes>
        <Route path='/Post' element={<Post />} />
      </Routes>
    </>
  );
}

export default App;

//116
//41