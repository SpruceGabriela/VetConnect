import { Grid } from '@mui/material';
import Summary from './components/Summary';

export default function StepsManager() {
  return (
    <Grid container sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      minWidth: '500px',
    }}>
      {/* <ChoosePet /> */}
      {/* <ChooseService /> */}
      <Summary />
    </Grid>
  );
}