import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SupportIcon from '@mui/icons-material/Support';
import CurrentDate from './CurrentDate';
import SelectUserName from './SelectUserName';
import {data} from "./Data"
import Password from './Password';




const passwordBtns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'x']

function Login() {
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
          <SelectUserName setSelectedUser={setSelectedUser} selectedUser={selectedUser} />

          <Grid item xs={0} sm={1} md={1} sx={{display: {xs:"none", sm: "block"}}} style={{height: "400px", borderRight: '1px solid #ddd', marginTop: '20px' }}></Grid>

          <Password password={password} passwordBtns={passwordBtns} clockBtn={clockBtn} handlePasswordBtn={handlePasswordBtn} />
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default Login;