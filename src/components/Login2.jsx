import * as React from 'react';
import Button from '@mui/material/Button';
import SupportIcon from '@mui/icons-material/Support';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


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


function Login2() {
  const [password, setPassword] = React.useState('')
  const handlePasswordBtn = (btn) => {
    setPassword((password) => password += btn)
  }
  console.log(password)
  
  return (
    <div className="w-screen h-screen p-5 bg-gradient-to-r from-[#00A6FB] to-[#006CAA] to-90%">
      <div className='flex mb-10 justify-between'>
        <div>
          <Button variant="contained" sx={{fontSize: "10px",backgroundColor: "transparent", border: 1, borderRadius: 50,"&:hover": {backgroundColor: "transparent", border: 1}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} startIcon={<AccessAlarmIcon />}>CLOCK IN / OUT</Button>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-10 h-10 rounded-full bg-white text-black text-xl'>e</div>
          <p><span>JONNY 1 - </span>01/07/2024 - 14.31</p>
        </div>
        <div>
          <Button variant="contained" sx={{fontSize: "10px",backgroundColor: "transparent", border: 1, borderRadius: 50,"&:hover": {backgroundColor: "transparent", border: 1}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} startIcon={<SupportIcon />}>HELP & SUPPORT</Button>
        </div>
      </div>
      <div className='flex justify-between items-start'>
        <div className='flex bg-green-500 flex-col justify-center items-center text-center  md:max-sm:bg-slate-500
        md:max-lg:w-3/6 w-4/6'>
          <h6>SELECT USERNAME</h6>
          <div className='flex bg-slate-400 flex-wrap justify-center w-3/6'>
            {data.map(user => (
            <Button key={user.id} variant="contained" sx={{fontSize: "10px",backgroundColor: "#066EA8", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} style={{ width: '85px', height: "50px" }} >{user.userName}</Button>
            ))}
          </div>
        </div>
        <div style={{height: "400px", borderRight: '1px solid #ddd', marginTop: '20px' }}></div>
        <div className='flex flex-col items-center w-2/6'>
          <h6 className='text-sm'>JONNY(M) CLOCKED OUT AT 12/01/2024</h6>
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
              {/* <Button onClick={() => {
                  console.log('clicked')
                }} variant="contained" sx={{fontSize: "14px",backgroundColor: "#075E93", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} style={{ width: "95%", height: "40px" }}  >LOGIN</Button> */}

                <Button onClick={() => {
                  console.log('clicked')
                }} variant="contained" sx={{fontSize: "14px",backgroundColor: "#075E93", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} style={{ width: "45%", height: "40px" }}  >Clock In</Button>

                <Button onClick={() => {
                  console.log('clicked')
                }} variant="contained" sx={{fontSize: "14px",backgroundColor: "#075E93", textTransform: 'none', margin: "5px", borderRadius: 0, "&:hover": {backgroundColor: "#066EA8"}, '&:focus': {backgroundColor: "#004266", outline: "none"}}} style={{ width: "45%", height: "40px" }}  >Clock Out</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Login2;