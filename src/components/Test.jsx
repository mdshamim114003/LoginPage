import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SupportIcon from '@mui/icons-material/Support';
import CurrentDate from './CurrentDate';


const data = [
    {
      id: "1",
      userName: "Aaron",
      password: "123"
    },
    {
      id: "2",
      userName: "Brendan",
      password: "123"
    },
    {
      id: "3",
      userName: "Clair",
      password: "123"
    },
    {
      id: "4",
      userName: "Harry",
      password: "123"
    },
    {
      id: "5",
      userName: "Joel",
      password: "123"
    },
    {
      id: "6",
      userName: "Joel",
      password: "123"
    },
    {
      id: "7",
      userName: "Joel",
      password: "123"
    },
    {
      id: "8",
      userName: "Joel",
      password: "123"
    },
    {
      id: "9",
      userName: "Joel",
      password: "123"
    },
    {
      id: "10",
      userName: "Joel",
      password: "123"
    },
    {
      id: "11",
      userName: "Joel",
      password: "123"
    },
    {
      id: "12",
      userName: "Joel",
      password: "123"
    },
    {
      id: "13",
      userName: "Joel",
      password: "123"
    },
  ]

const passwordBtnArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'x']

function Test() {
  const [password, setPassword] = useState('')
  const [clockBtn, setClockBtn] = useState(true)
  const [selectedUser, setSelectedUser] = useState('')
  const handlePasswordBtn = (btn) => {
    if(btn === "x") {
      setPassword('')
    } else{
      setPassword((password) => password += btn)
    }
  }
  const handleClock =  (e) => {
    if(clockBtn) {
      setClockBtn(false)
    } else {
      setClockBtn(true)
    }
    e.target.classList.toggle('bg-[#004266]')
  }
  return (
    <div className="h-screen p-5 bg-gradient-to-r from-[#00A6FB] to-[#006CAA] to-90% ">
      <Grid container>
      <Grid item xs={12} >
        <Grid container  spacing={{xs: 2}}>
        <Grid item xs={12} sm={4} sx={{textAlign: {xs: "center", sm:"left"}}} >
          <Button onClick={(e) => handleClock(e)} variant='contained' startIcon={<AccessAlarmIcon />} sx={{fontSize: "10px",backgroundColor: "transparent", border: 1, borderRadius: 50,"&:hover": {backgroundColor: "transparent", border: 1}}}>CLOCK IN / OUT</Button>
        </Grid>
        <Grid item xs={12} sm={4} className=' flex flex-col justify-center items-center'>
          <Grid container justifyContent={"center"}>
            <Grid item className='w-10 h-10 rounded-full bg-white text-black text-xl'>e</Grid>
            <Grid item xs={12} className='text-white'>
              <Grid container justifyContent={"center"}>
                <span>JONNY 1 -</span>
                <CurrentDate />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} sx={{textAlign: {xs: "center", sm: 'right'}}} >
          <Button variant='contained' startIcon={<SupportIcon />} sx={{fontSize: "10px",backgroundColor: "transparent", border: 1, borderRadius: 50,"&:hover": {backgroundColor: "transparent", border: 1}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} href='#'>HELP & SUPPORT</Button>
        </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} >
        <Grid container className='mt-10' >
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

          <Grid item xs={0} sm={1} md={1} sx={{display: {xs:"none", sm: "block"}}} style={{height: "400px", borderRight: '1px solid #ddd', marginTop: '20px' }}></Grid>

          <Grid item xs={12} sm={5} md={4} sx={{marginTop: {xs:"20px", sm: "0px"}}} className=' flex flex-col items-center w-2/6'>
            <h6 className='text-sm text-white'>JONNY(M) CLOCKED OUT AT 12/01/2024</h6>
            <div className='w-80 text-center'>
              <div className='border-b border-white w-44 min-h-10 text-4xl mt-5 text-center mx-auto'>
                {password.split('').map(() => '*').join('')}
              </div>
              <div className='w-72 mx-auto mt-7'>
                {passwordBtnArray.map((btn, index) => (
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
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default Test;