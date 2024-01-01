import { Main, ImageSlide } from "./components/main";
import ImageState from "./components/context/image";
import ChildTwo from "./components/HOC/childTwo";
import ChildOne from "./components/HOC/childOne";
import SecMain from "./components/secMain";
import CheckItem from "./components/ClassCom/ClassCom";

function App() {
  const Greeting = 'Good Morning';
  // remove element from array and
  const removeItem = [100, 200, 300, 400, 500];
  const filterItem = removeItem.filter((item) => {
    // if(item==100){
    //   item
    // }
    return item !== 100;

  })
  // the splice method is remove the array from orginal array
  removeItem.splice(0, 1)
  console.log(removeItem)
  // console.log(filterItem)

  return (
    <div>
      <ImageState>
        <Main greet={Greeting} />
        <SecMain />
        <ImageSlide />
      </ImageState>
      <ChildTwo />
      <ChildOne />
       <CheckItem/>
    </div>
  );
}

export default App;
