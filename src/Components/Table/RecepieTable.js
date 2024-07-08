import Table from 'react-bootstrap/Table';

function RecepieTable(props) {
    const { data }=props;
    console.log(data)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Image</th>
          <th>Ingredients</th>
          <th>Instructions</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((eachRecipe)=>{
                const{id,name,image,ingredients,instructions}=eachRecipe
                return(
                    <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                {
                                    <img src={image} height={100} width={100} alt={name}/>
                                }
                            </td>
                            <td>
                                {
                                    ingredients.map((eachIngredient=>{
                                        return(
                                            <div>
                                                <ul>
                                                    <li>{eachIngredient}</li>
                                                </ul>
                                            </div>
                                        )
                                    }))
                                }
                            </td>
                            <td>
                            {
                                    instructions.map((eachInstruction=>{
                                        return(
                                            <div>
                                                <ul>
                                                    <li>{eachInstruction}</li>
                                                </ul>
                                            </div>
                                        )
                                    }))
                                }
                            </td>
                    </tr>
                )
            })
        }
      </tbody>
    </Table>
  );
}

export default RecepieTable;