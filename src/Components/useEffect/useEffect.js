import axios from "axios";
import React, { useEffect, useState } from "react";
import RecepieTable from "../Table/RecepieTable";


const RecepieData=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
        fetchData();
    },[])


    const fetchData=async()=>{
        try{
            const response1=await axios.get("https://dummyjson.com/recipes")
            console.log(response1,"response1")

            if(response1.status===200){
                let recepieList=response1.data.recipes
                setData(recepieList)
            }

        }
        catch(err){
            console.log(err)
        }
    }
    return(
       <div>
            {
                data.length>0?<RecepieTable data={ data }/>:<h3>Loading...</h3>
            }
       </div>
    )
}
export default RecepieData;