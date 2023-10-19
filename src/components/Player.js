import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';

import { useState, useEffect } from 'react';
//import { makeStyles } from '@mui/styles';

export default function Player() {
// const useStyles = makeStyles((theme)=>({
//     root:{'&>*':{
//         margin:theme.spacing(1),
//     },},
// }));

    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
    // const classes = useStyles();
    const[name, setName]=useState('');
    const[address, setAddress]=useState('');
    const [players, setPlayers]=useState([]);

     const handleClick=(e)=>{
        e.preventDefault()
        const player={name,address}
        console.log(player)
        fetch("http://localhost:8080/player/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(player)
    
      }).then(()=>{
        console.log("New Player added")
      })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/player/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setPlayers(result);
        }
      )
      },[])
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Players</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="standard-basic" label="Player name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="standard-basic" label="Player address" variant="outlined" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Box>
   
    </Paper>
    <h1>Players List</h1>
    <Paper elevation={3} style={paperStyle}>
  
{players.map(player=>(
  <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={player.id}>
   Id:{player.id}<br/>
   Name:{player.name}<br/>
   Address:{player.address}

  </Paper>
))
}


</Paper>
    </Container>
  );
}