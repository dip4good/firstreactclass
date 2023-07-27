import React from "react";
import Home from "./Pages/Home";
import Button from "./Component/Button";

function App(){
  const user={
    Name:"Mr Sayo",
    Age:"85 years",
    image:"https://codemastar.netlify.app/images/my_picture.jpg"

  }
  return(
    <>
    <Home/>
    <Button/>
      {/* <h1>Hello World</h1> */}
      <h1>Name: {user.Name}</h1>
      <h3>Age:{user.Age}</h3>
      <img src={user.image} alt="" />
    </>
  )
}

export default App;