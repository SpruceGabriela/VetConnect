import Header from '@/components/Header';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import StepsManager from './components/StepsManager';

export default function NewAppointment() {
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
      <Header isLoggedIn />
      <Grid sx={{ height: '100%' }}>
        <Typography variant='h3' sx={{ fontSize: '20px' }}>
          Schedule a new appointment
        </Typography>
        <Grid sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
        }}>
          <StepsManager />
        </Grid>
      </Grid>
    </Grid>
  )
}