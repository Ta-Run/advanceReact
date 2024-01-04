import React, { Suspense, lazy } from "react";
import { Main, ImageSlide } from "./components/main";
import ImageState from "./components/context/image";
import ChildTwo from "./components/HOC/childTwo";
import ChildOne from "./components/HOC/childOne";
import CheckItem from "./redux/container/CheckContainer";

const SecMain = lazy(() => import("./components/secMain"))

function App() {
  const Greeting = 'Good Morning';
  // remove element from array and
  const removeItem = [100, 200, 300, 400, 500];
  const filterItem = removeItem.filter((item) => {
    return item !== 100;
  })
  // the splice method is remove the array from orginal array
  removeItem.splice(1, 3)
  // console.log(filterItem)

  // object key and values example
  var skillData = {
    name: 'tarun',
    age: 18,
    education: 'mca',
    professional: "web dev"
  }
  let bioData = []

  let key = Object.keys(skillData)
  let values = Object.values(skillData)
  let entries = Object.entries(skillData)
  Object.assign(skillData, { skill: 'react' })
  bioData.push(skillData)
  const setItem = localStorage.setItem('userDetails', JSON.stringify(bioData));
  const getItem = localStorage.getItem('userDetails')


  return (
    <div>
      <Suspense fallback={<h1>Please Wait</h1>}>
        <ImageState>
          <Main greet={Greeting} />
          <SecMain />
          <ImageSlide />
        </ImageState>
        <ChildTwo />
        <ChildOne />
        <CheckItem />
      </Suspense>
    </div>
  );
}

export default App;
