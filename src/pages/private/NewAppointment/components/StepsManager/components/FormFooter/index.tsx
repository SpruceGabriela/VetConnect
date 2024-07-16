import { Box, Button, Grid, LinearProgress } from "@mui/material";

export default function FormFooter() {
  return (
    <Grid sx={{
      padding: '30px',
      height: '100px',
      position: 'absolute',
      bottom: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px'
    }}>
      <Button 
        variant="outlined"
        size="large"
        color="secondary"
      >
        Back
      </Button>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" value={50} color="secondary" />
      </Box>
      <Button
        variant="contained"
        size="large"
        color="secondary"
      >
        Next
      </Button>
    </Grid>
  );
}