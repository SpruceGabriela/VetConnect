import { Grid } from '@mui/material';
import ChoosePet from './components/ChoosePet';

export default function StepsManager() {
  return (
    <Grid container sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      minWidth: '500px',
    }}>
      <ChoosePet />
    </Grid>
  );
}