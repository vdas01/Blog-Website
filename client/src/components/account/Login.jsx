import React,{useState} from 'react'
import {Box,TextField,Button,styled,Typography} from '@mui/material';


const Component = styled(Box)`
 width:400px;
 margin:auto;
 box-shadow:3px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width:100,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
})

const Wrap = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex:1;
  flex-direction:column;
  & > div, & > button, & > p[
    margin-top:20px;
  ]
`
const LoginButton = styled(Button)`
   text-transform:none;
   background:#fb641d;
   color:#fff;
   height:48px;
   border-radius:2px;
   margin-top:20px;
`
const SignUpButton = styled(Button) `
        text-transform:none;
        background:#fff;
        color:#2874f0;
        height:48px;
        border-radius:2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
        margin-top:10px;
`
const Text = styled(Typography)`
    color:#874747;
    margin-top:10px;
`

const Login = () => {
    const signUpInitialValues = {
        name: '',
        username: '',
        password:''
    }
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleAccount] = useState('login');
     const [signup, setSignUp] = useState(signUpInitialValues);
 
    const toggleSignUp = () =>{
        account === "login" ? toggleAccount("signUp"): toggleAccount("login");
    }
    const onInputChange = (e) =>{
       setSignUp({...signup, [e.target.name]:e.target.value})
    }
  return (
    <Component> 
        <Box>
        <Image src={imageURL} alt="img"/>
        { account === "login" ? 
        //login
        ( <Wrap>
            <TextField variant='standard' label="Enter username"/>
            <TextField variant='standard'label="Enter password"/>
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{textAlign: "center"}}> OR</Text>
            <SignUpButton onClick={() => toggleSignUp()}>Create an account</SignUpButton>
         </Wrap>):
         //signUp:-
          (<Wrap>
            <TextField variant='standard' label="Enter Name" onChange={(e)=> onInputChange(e)} name="name"/>
            <TextField variant='standard'label="Enter Username" name="username" onChange={(e)=> onInputChange(e)}/>
            <TextField variant='standard'label="Enter Password" name="password" onChange={(e)=> onInputChange(e)}/>
            <SignUpButton >Signup</SignUpButton>
            <Text style={{textAlign: "center"}}> OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignUp()}>Already have an account</LoginButton>
         </Wrap>)
          }
       </Box>
    </Component>
  )
}

export default Login;