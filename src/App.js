import React from "react";
import Body from "./pages/body/body";
import Footer from "./pages/footer/footer";
import Headerpage from "./pages/header/HeaderPage";



function App() {


  return (
    <>
      <Headerpage />
      <Body post_date="post_date"
        post_title='post title'
        post_text="So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?"
        post_image='' />
      <Body />
      <Footer />

    </>
  );
}

export default App;





