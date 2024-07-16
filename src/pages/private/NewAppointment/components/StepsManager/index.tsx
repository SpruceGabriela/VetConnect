import { Grid } from '@mui/material';
import ChooseDate from './components/ChooseDate';

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
      <ChooseDate />
      {/* <Summary /> */}
    </Grid>
  );
}