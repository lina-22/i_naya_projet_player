import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Player() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="standard-basic" label="Player name" variant="outlined" />
      <TextField id="standard-basic" label="Player address" variant="outlined" />
    </Box>
  );
}