import Header from '@/components/Header';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Pill from './components/Pill';
import { AnimalType } from './components/Pill/types';
import CallToAction from './components/CallToAction';
import puppy from "@/assets/puppy.png";

export default function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid sx={{
      backgroundColor: theme.palette.background.default,
      width: '100vw',
      height: '100vh',
      padding: isMobile ? '0 20px' : '0 70px',
      overflow: 'hidden'
    }}>
      <Header isLoggedIn={false} />
      <Grid 
        container
        sx={{
        marginTop: '80px',
        height: '50%'
      }}>
        <CallToAction />
        {isMobile ? (
          null
        ) : (
          <Grid 
            xs={12} 
            sm={12} 
            md={7}
            lg={7} 
            xl={7}
            gap={8}
            container 
            height='auto' 
          >
            <Pill type={AnimalType.Dog} />
            <Pill type={AnimalType.Cat} />
            <Pill type={AnimalType.GuineaPig} />
          </Grid>
        )}
      </Grid>
      {isMobile ? <img src={puppy} /> : null}
    </Grid>
  )
}