import React,{ Component } from "react";
import CustomSpinner from "../spinners/spinners";
import axios from "axios";

class FakeData extends Component {
  state = {
    productlist: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchData();
  }
  // fetchData = () => {
  //   this.setState({
  //       loading:true,   
  //   })
  //   fetch("https://fakestoreapi.com/products").then((response)=>response.json())
  //   .then((response)=>{
  //       this.setState({
  //           productlist:response,
  //           loading:false
  //       })
  //   })
  // };

//  fetchData=async()=>{

//   try{ 
//     this.setState({
//     loading:true,
//   })
//   let response= await fetch("https://fakestoreapi.com/products")
//   let finalResoponse=await response.json();
//   this.setState({
//     productlist:finalResoponse,
//     loading:false,
//   })
// }
// catch(error){
//   console.error(error)
//   this.setState({
//     error:"Server is busy"
//   })
// }
// finally{
//   this.setState({
//     loading:false
//   })
// }
 
//  }
 fetchData=async()=>{
  this.setState({
    loading:true,
  })
  try{ 
  let response= await axios.get("https://fakestoreapi.com/products")
  if(response.status===200){
    this.setState({
      productlist:response.data,
      loading:false,
    })
  }
  
}
catch(error){
  console.error(error)
  this.setState({
    error:"Server is busy"
  })
}
finally{
  this.setState({
    loading:false
  })
}
 
 }
  render() {
    return (
      <>
        <h3>List of Products</h3>
       
       {
        this.state.loading?<CustomSpinner/>:
        <div>
            {
                this.state.productlist.map((eachObject)=>{
                    return(
                        <h3 key={eachObject.id}>{eachObject.title}</h3>
                    )
                })
            }
        </div>
       }
      </>
    );
  }
}
export default FakeData;
