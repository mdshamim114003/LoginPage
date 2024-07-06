import React from 'react';
import {data} from './Data';
import { Button, Grid } from '@mui/material';


function SelectUserName({setSelectedUser, selectedUser}) {
    return (
        <Grid item xs={12} sm={6} md={7} className='flex flex-col text-center '>
            <h6 className='text-white mb-3'>SELECT USERNAME</h6>
            <Grid container justifyContent={"center"}>
              <Grid item xs={12} md={7} lg={7} className='flex flex-wrap items-center justify-center'>
                {data.map(user => {
                  const bgColor = selectedUser === user.id? "#004266": '#066EA8'
                  return (
                    <Button key={user.id} onClick={() => setSelectedUser(user.id)} variant="contained" sx={{fontSize: "10px", backgroundColor: bgColor, textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#075985"}, }} style={{ width: '85px', height: "50px" }} >{user.userName}</Button>
                    )
                })}
              </Grid>
            </Grid>
        </Grid>
    );
}

export default SelectUserName;