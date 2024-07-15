import { Avatar, Grid, Typography } from '@mui/material';

interface Props {
  petName: string;
}

export default function PetCard({ petName }: Props) {
  return (
    <Grid sx={{
      width: 'min-content',
      textAlign: 'center'
    }}>
      <Avatar sx={{ 
        height: '80px', 
        width: '80px', 
        marginBottom: '8px' 
      }}/>
      <Typography>
        { petName }
      </Typography>
    </Grid>
  )
}