import React, {useEffect, useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import Box from '@mui/material/Box';


const columns = [
    {field: 'id', headerName: 'ID', cellClassName: 'super-app-theme--cell'},
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
    })

    return(

        <Box

                sx={{
                    height: 500,
                    width: '100%',
                    '& .super-app-theme--cell': {
                        backgroundColor: '#98B2D1',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                }}
            >
             <DataGrid
             rows={tableData}
             columns={columns}
             pageSize={5}
             onSelectionChange={(newSelection) => {
                 setSelection(newSelection.rows)
             }}
             />
            <h1>{select.map((data) => data.data.id)}</h1>
        </Box>

    )
}
export { DataTable };