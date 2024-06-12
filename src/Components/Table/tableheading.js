


const Table=()=>{
    return(
        <div>
            <table style={{border:"1px solid black"}}>
                <TableHeading/>
                <TableRow/>
                <TableRow/>
                <TableRow/>
            </table>
        </div>
    )
}
export default Table;



const TableHeading=()=>{
    return(
        <div>
            <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Batch</th>
            <th>Phone no</th>
            </tr>
        </div>
    )
}

const TableRow=()=>{
    return(
        <div>
            <tr style={{border:"1px solid black"}}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </div>
    )
}

