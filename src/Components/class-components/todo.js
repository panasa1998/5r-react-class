import { Component } from "react";

class TodoComponent extends Component() {
  state = {
    todos: ["Wakeup at 7am", "Have breakfast"],
  };
  render() {
    return (
      <>
        <ol>
            <h3>List of Todos</h3>
            {this.state.todos.map((eachItem) => {
                return(
                    <li>{eachItem}</li>
                )
            })}
        </ol>
      </>
    );
  }
}
export default TodoComponent;
