import React, {useEffect, useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'


const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name',  width: 300},
    {field: 'year', headerName: 'Year', width: 600}
]
const DataTable = () =>{

    const [ tableData, setTableData] = useState([])
    useEffect(() =>{
        fetch("https://reqres.in/api/products")
            .then((data) => data.json())
        .then((data) => setTableData(data.data))
    })

    return(
        <div style={{height: 500, width: '100%' }}>
             <DataGrid
             rows={tableData}
             columns={columns}
             pageSize={5}
             checkboxSelection
             />
        </div>
    )
}
export { DataTable };