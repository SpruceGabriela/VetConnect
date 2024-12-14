import { Avatar, Grid } from '@mui/material';

export default function PetAvatar() {
  return (
    <Grid>
      <Avatar
        sx={{ 
          height: '80px', 
          width: '80px', 
          marginBottom: '8px' 
        }}
      />
    </Grid>
  );
}