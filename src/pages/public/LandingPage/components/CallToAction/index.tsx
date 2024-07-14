import { Button, Grid, Typography, useTheme } from '@mui/material';
import Bubble from '../Bubble';
import { LuBone } from 'react-icons/lu';
import { PiPawPrint } from 'react-icons/pi';

export default function CallToAction() {
  const theme = useTheme();

  return (
    <Grid 
      item 
      xs={5} 
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Grid container sx={{ width: '80%', position: 'relative' }} gap={4}>
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