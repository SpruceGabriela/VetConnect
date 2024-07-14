import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Bubble from '../Bubble';
import { LuBone } from 'react-icons/lu';
import { PiPawPrint } from 'react-icons/pi';

export default function CallToAction() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const mobileStyles = {
    'textAlign': 'center',
    'justifyContent': 'center',
  }

  return (
    <Grid 
      item 
      xs={12} 
      sm={12} 
      md={5}
      lg={5} 
      xl={5} 
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Grid 
        container 
        xs={12} 
        sm={12} 
        md={10}
        lg={10} 
        xl={10}
        gap={4}
        sx={{ 
          width: '80%',
          position: 'relative',
          ...(isMobile ? mobileStyles : {})
        }} 
      >
        <Grid item sx={{ position: 'relative' }}>
          <Bubble 
            styles={{ 
              top: '-45px',
              left: '-40px',
              backgroundColor: theme.palette.tertiary.main
            }}
            icon={<LuBone size={50} />}
          />
          <Typography 
            variant='h1' 
            fontSize={60}
            sx={{ 
              position: 'relative', 
              zIndex: 2 
            }}
          >
            We take care of your furry best friend
          </Typography>
        </Grid>
        <Grid>
          <Typography variant='body2' fontSize={16}>
            Add all your beloved pets, choose your preferred professional, 
            and effortlessly schedule your appointment. 
            It's as simple as that!
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant='contained' 
            color='secondary'
            size='large'
          >
            Book an appointment
          </Button>
        </Grid>
        <Bubble 
          styles={{ 
            bottom: '-50px',
            right: '-20px',
            backgroundColor: theme.palette.error.light
          }}
          icon={<PiPawPrint size={50} style={{ transform: "rotate(40deg)" }} />}
        />
      </Grid>
    </Grid>
  );
}