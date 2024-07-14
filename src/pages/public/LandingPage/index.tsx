import Header from '@/components/Header';
import { Grid, useTheme } from '@mui/material';
import Pill from './components/Pill';
import { AnimalType } from './components/Pill/types';
import CallToAction from './components/CallToAction';

export default function LandingPage() {
  const theme = useTheme();

  return (
    <Grid sx={{
      backgroundColor: theme.palette.background.default,
      width: '100vw',
      height: '100vh',
      padding: '0 70px'
    }}>
      <Header />
      <Grid 
        container
        sx={{
        marginTop: '80px',
        height: '50%'
      }}>
        <CallToAction />
        <Grid container xs={7} height='auto' gap={8}>
          <Pill type={AnimalType.Dog} />
          <Pill type={AnimalType.Cat} />
          <Pill type={AnimalType.GuineaPig} />
        </Grid>
      </Grid>
    </Grid>
  )
}