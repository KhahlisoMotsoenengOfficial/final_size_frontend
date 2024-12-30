import { FormControl, Select } from "@mui/material";
import React from "react";

const Options = [
    {id:1,value:'option1',label:'Option1'},
    {id:1,value:'option2',label:'Option2'},
    {id:1,value:'option3',label:'Option3'},
    {id:1,value:'option4',label:'Option4'}
]

export default function Dropdown(){
    return(
        <div>
        <h1> The Dropdown </h1>
        <FormControl sx={{width: '20%'}}>
            <Select></Select>
            
            <MenuItem></MenuItem>
        </FormControl>
        
        </div>
    );
}