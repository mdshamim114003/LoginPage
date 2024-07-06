import React from 'react';
import { Button, Grid } from '@mui/material';


function Password({password, passwordBtns, clockBtn, handlePasswordBtn}) {
    return (
        <Grid item xs={12} sm={5} md={4} sx={{marginTop: {xs:"20px", sm: "0px"}}} className=' flex flex-col items-center w-2/6'>
            <h6 className='text-sm text-white'>JONNY(M) CLOCKED OUT AT 12/01/2024</h6>
            <div className='w-80 text-center'>
              <div className='border-b border-white w-44 min-h-10 text-4xl mt-5 text-center mx-auto'>
                {password.split('').map(() => '*').join('')}
              </div>
              <div className='w-72 mx-auto mt-7'>
                {passwordBtns.map((btn, index) => (
                  <Button onClick={() => {
                    handlePasswordBtn(btn)
                  }} key={index} variant="contained" sx={{fontSize: "16px",backgroundColor: "#075E93", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"},pointerEvents: btn === '' ? 'none' : 'auto'}} style={{ width: '70px', height: "40px" }}  >{btn}</Button>
                ))}
              </div>
              <div className='max-w-60 mx-auto mt-8'>
                {(()=> {
                  if(clockBtn) {
                    return <Button onClick={() => {
                        console.log('clicked')
                      }} variant="contained" sx={{fontSize: "14px",backgroundColor: "#075E93", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} style={{ width: "95%", height: "40px" }}  >LOGIN</Button>
                  } else{
                    return (
                      <div>
                        <Button onClick={() => {
                          console.log('clicked')
                        }} variant="contained" sx={{fontSize: "14px",backgroundColor: "#075E93", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} style={{ width: "45%", height: "40px" }}  >Clock In</Button>
      
                        <Button onClick={() => {
                          console.log('clicked')
                        }} variant="contained" sx={{fontSize: "14px",backgroundColor: "#075E93", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} style={{ width: "45%", height: "40px" }}  >Clock Out</Button>
                      </div>
                  )
                  }
                })()}

              </div>
            </div>
          </Grid>
    );
}

export default Password;