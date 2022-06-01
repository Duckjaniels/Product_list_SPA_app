import React, {useEffect, useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';


const columns = [
    {field: 'id', headerName: 'ID', cellClassName: 'super-app-theme--cell',},
    {field: 'name', headerName: 'Name', cellClassName: 'super-app-theme--cell',  width: 300},
    {field: 'year', headerName: 'Year', cellClassName: 'super-app-theme--cell', width: 600},
]
const DataTable = () =>{
    const [select, setSelection] = useState([]);
    const [ tableData, setTableData] = useState([])
    useEffect(() =>{
        fetch("https://reqres.in/api/products")
            .then((data) => data.json())
        .then((data) => setTableData(data.data))
    },[]);
    console.log(tableData)
    const styles = {
        height: 500,
        width: '100%',
        '& .super-app-theme--cell': {
            backgroundColor: `${tableData.color}`,
            color: '#1a3e72',
            fontWeight: '600',
        },
    }

    return(
        <Box
                sx={
                    styles
                }

            >
            <TextField id={tableData.id} type="number" label="Search" source="id"/>

             <DataGrid
             rows={tableData}
             columns={columns}
             pageSize={5}
             onSelectionChange={(newSelection) => {
                 setSelection(newSelection.rows)
             }}
            />
        </Box>

    )
}
export { DataTable };