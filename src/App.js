
//import BasicExample from "./Components/Accordian/accordian.js";
//import FirstComponent from "./Components/bootstrap/first-component.js";
//import Card from "./Components/Card/card.js";
import { ButtonComponent } from "./Components/Button/button.js";
import { fakeData } from "./Components/FakeData/fakedata.js";
import ImageComponent from "./Components/ImageComponent/image.js";
import { Heading1 } from "./Components/heading.js";

const App=()=>{
  return(
    <div>
      {/* <ButtonComponent text="Login" bgColor="green" height={100} width={100} onPress={()=>{}}/>
      <ButtonComponent text="SignUp" bgColor="red" height={100} width={100} onPress={()=>{}}/> */}
      {
       fakeData.map((eachData)=>{
        return(
          <>
          <Heading1 title={`${eachData.id} ${eachData.title}`}/>
          <h4>{eachData.description}</h4>
          <h5>{eachData.category}</h5>
          <ImageComponent src={eachData.image} height="100" width="100" alt="image"/>
          <ButtonComponent text={`$${eachData.price}`} bgColor="green" height={100} width={100} onPress={()=>{}}/>
          </>
        )
       })
      }
    
    </div>
  )
}
export default App;