import { Button, Grid, Typography, useTheme } from '@mui/material';

interface Props {
  isLoggedIn: boolean;
}

export default function Header({ isLoggedIn }: Props) {
  const theme = useTheme();

  return (
    <Grid 
      container
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{
        height: '80px',
      }}
    >
      <Typography 
        variant='h2'
        fontWeight={600}
        color={theme.palette.text.secondary}
      >
        VetConnect
      </Typography>
      {!isLoggedIn ? (
        <Grid>
          <Button 
            variant='text'
            color='secondary'
          >
            Login
          </Button>
          <Button
            variant='contained'
            color='secondary'
          >
            Sign up
          </Button>
        </Grid>
      ) : null}
    </Grid>
  )
}