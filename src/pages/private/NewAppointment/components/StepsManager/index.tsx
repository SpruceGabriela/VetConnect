import { Grid } from '@mui/material';
import FormFooter from './components/FormFooter';
import Summary from './components/Summary';

export default function StepsManager() {
  return (
    <Grid container sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      width: '500px',
      position: 'relative',
      height: '83%'
    }}>
      {/* <ChoosePet /> */}
      {/* <ChooseService /> */}
      {/* <ChooseDate /> */}
      <Summary />
      <FormFooter />
    </Grid>
  );
}