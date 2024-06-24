// import { Component } from "react";
// import CustomSpinner from "../spinners/spinners";

// class RecepieData extends Component {
//   state = {
//     recepieList: [],
//     loding: false,
//     error: null,
//   };
//   componentDidMount() {
//     this.fetchData();
//   }
//   fetchData = () => {
//     this.setState({
//       loding: true,
//     });
//     fetch("https://dummyjson.com/recipes")
//       .then((response) => response.json())
//       .then((response) => {
//         this.setState({
//           recepieList: response.recipes,
//           loding: false,
//         });
//       });
//   };
//   render() {
//     return (
//       <>
//         <h2>List of Recepies</h2>
//         {this.state.loding ? (
//           <CustomSpinner />
//         ) : (
//           <div>
//             {this.state.recepieList.map((eachRecepie) => {
//               return (
//                 <>
//                   <h3
//                     key={eachRecepie.id}
//                   >{`${eachRecepie.id}. ${eachRecepie.name}`}</h3>
//                   <h4>Ingredients:</h4>
//                   <ul>
//                     {
//                         eachRecepie.ingredients.map((eachItem)=>{
//                             return(
//                                 <li key={eachItem.id}>{eachItem}</li>
//                             )
//                         })
//                     }
//                   </ul>
//                 </>
//               );
//             })}
//           </div>
//         )}
//       </>
//     );
//   }
// }
// export default RecepieData;






// import React, { Component } from "react";
// import CustomSpinner from "../spinners/spinners";

// class RecepieData extends Component {
//     state = {
//         recepieList: [],
//         loading: false,
//         error: null
//     };

//     componentDidMount() {
//         this.fetchData();
//     }

//     fetchData = () => {
//         this.setState({
//             loading: true,
//             error: null
//         });

//         fetch("https://dummyjson.com/recipes")
//             .then(response => response.json())
//             .then(response => {
//                 // Ensure that response.recipes is an array
//                 if (response && Array.isArray(response.recipes)) {
//                     this.setState({
//                         recepieList: response.recipes,
//                         loading: false
//                     });
//                 } else {
//                     this.setState({
//                         error: 'Unexpected data structure',
//                         loading: false
//                     });
//                 }
//             })
//             .catch(error => {
//                 this.setState({
//                     error: error.message,
//                     loading: false
//                 });
//             });
//     };

//     render() {
//         const { recepieList, loading, error } = this.state;

//         return (
//             <>
//                 <h2>List of Recipes</h2>
//                 {loading ? (
//                     <CustomSpinner />
//                 ) : error ? (
//                     <div>Error: {error}</div>
//                 ) : (
//                     <div>
//                         {recepieList.map((eachRecepie, index) => (
//                             <div key={eachRecepie.id}>
//                                 <h3>{`${eachRecepie.id}. ${eachRecepie.name}`}</h3>
//                                 <ul>
//                                     {eachRecepie.ingredients.map((ingredient, idx) => (
//                                         <li key={idx}>{ingredient}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </>
//         );
//     }
// }

// export default RecepieData;






// import { Component } from "react";
// import CustomSpinner from "../spinners/spinners";

// class RecipeData extends Component {
//   state = {
//     recipeList: [],
//     loading: false,
//     error: null
//   }

//   componentDidMount() {
//     this.fetchData()
//   }

//   fetchData = () => {
//     this.setState({
//       loading: true
//     })
//     fetch("https://dummyjson.com/recipes")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           recipeList: data.recipes, // Assuming the API returns an object with a 'recipes' array
//           loading: false
//         })
//       })
//       .catch((error) => {
//         this.setState({
//           error: error.message,
//           loading: false
//         })
//       })
//   }

//   render() {
//     const { recipeList, loading, error } = this.state;

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     return (
//       <>
//         <h2>List of Recipes</h2>
//         {loading ? (
//           <CustomSpinner />
//         ) : (
//           <div>
//             {recipeList.map((eachRecipe) => (
//               <h3 key={eachRecipe.id}>{`${eachRecipe.id}. ${eachRecipe.name}`}</h3>
//             ))}
//           </div>
//         )}
//       </>
//     )
//   }
// }

// export default RecipeData;



//fetching data using axios with .then
// import { Component } from "react";
// import CustomSpinner from "../spinners/spinners";
// import axios from "axios";

// class RecepieData extends Component {
//   state = {
//     recepieList: [],
//     loding: false,
//     error: null,
//   };
//   componentDidMount() {
//     this.fetchData();
//   }
//   fetchData = () => {
//     this.setState({
//       loding: true,
//     });
//     axios.get("https://dummyjson.com/recipes")  
//       .then((response) => {
//         this.setState({
//           recepieList: response.data.recipes,
//           loding: false,
//         });
//       });
//   };
//   render() {
//     return (
//       <>
//         <h2>List of Recepies</h2>
//         {this.state.loding ? (
//           <CustomSpinner />
//         ) : (
//           <div>
//             {this.state.recepieList.map((eachRecepie) => {
//               return (
//                 <>
//                   <h3
//                     key={eachRecepie.id}
//                   >{`${eachRecepie.id}. ${eachRecepie.name}`}</h3>
//                   <h4>Ingredients:</h4>
//                   <ul>
//                     {
//                         eachRecepie.ingredients.map((eachItem)=>{
//                             return(
//                                 <li key={eachItem.id}>{eachItem}</li>
//                             )
//                         })
//                     }
//                   </ul>
//                 </>
//               );
//             })}
//           </div>
//         )}
//       </>
//     );
//   }
// }
// export default RecepieData;




import { Component } from "react";
import CustomSpinner from "../spinners/spinners";

class RecepieData extends Component {
  state = {
    recepieList: [],
    loding: false,
    error: null,
  };
  componentDidMount() {
    this.fetchData();
  }
//   fetchData = () => {
//     this.setState({
//       loding: true,
//     });
//     fetch("https://dummyjson.com/recipes")
//       .then((response) => response.json())
//       .then((response) => {
//         this.setState({
//           recepieList: response.recipes,
//           loding: false,
//         });
//       });
//   };

fetchData=async()=>{
    this.setState({
        loding:true
    })
    try{
        let response=await fetch("https://dummyjson.com/recipes")
    let finalResoponse=await response.json()
    this.setState({
        recepieList:finalResoponse.recipes,
        loding:false
    })
    }
    catch(error){
        console.error(error)
        this.setState({
            loding:false,
            error:"Something went wrong"
        })
    }
    
}
  render() {
    return (
      <>
        <h2>List of Recepies</h2>
        {this.state.loding ? (
          <CustomSpinner />
        ) : (
          <div>
            {this.state.recepieList.map((eachRecepie) => {
              return (
                <>
                  <h3
                    key={eachRecepie.id}
                  >{`${eachRecepie.id}. ${eachRecepie.name}`}</h3>
                  <h4>Ingredients:</h4>
                  <ul>
                    {
                        eachRecepie.ingredients.map((eachItem)=>{
                            return(
                                <li key={eachItem.id}>{eachItem}</li>
                            )
                        })
                    }
                  </ul>
                </>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default RecepieData;


