import { Component } from "react";
import ButtonComponent from "../Button/button.js";



class TodoComponent extends Component{
  state = {
    todos: ["Wakeup at 7am", "Have breakfast"],
  };

  todoAddHandler=()=>{
    this.setState({
      todos:[...this.state.todos,"Attend the class at 9:00am"]
    })
  }
  todoUpdateHandler=(index)=>{
      let newTodo=this.state.todos
      newTodo[index]="Attend the class at 9:30am"
      this.setState({
        todos:newTodo
      })

  }
  todoDeleteHandler=(index)=>{
    let newTodos=this.state.todos.filter((eachItem,i)=>index!=i)
    this.setState({
      todos:newTodos,
    })
  }




  render() {
    return (
      <>
        <ol>
            <h3>List of Todos</h3>
            {this.state.todos.map((eachItem,index) => {
                return(
                  <>
                     <li>{eachItem}</li>
                     <ButtonComponent text={"Add"} onPress={()=>this.todoAddHandler(index)}/>
                     <ButtonComponent text={"Update"} onPress={()=>this.todoUpdateHandler(index)}/>
                     <ButtonComponent text={"Delete"} onPress={()=>this.todoDeleteHandler(index)}/>
                  </>
                   
                )
            })}
        </ol>
      </>
    );
  }
}
export default TodoComponent;

