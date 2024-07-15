import { Button, Grid, Typography, useTheme } from "@mui/material";
import PetCard from "../PetCard";
import { BiPlusCircle } from "react-icons/bi";

export default function ChoosePet() {
  const theme = useTheme();

  return (
    <Grid>
      <Grid sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <Typography sx={{ fontWeight: 500 }}>My pets</Typography>
        <Typography color={theme.palette.text.disabled}>Which pet will be attended?</Typography>
      </Grid>
      <Grid 
        container sx={{ 
          margin: '24px 0',
        }}
        gap={3}
      >
        <PetCard petName="Legoshi" />
        <PetCard petName="Legoshi" />
        <PetCard petName="Legoshi" />
        <PetCard petName="Legoshi" />
      </Grid>
      <Grid
        sx={{ textAlign: 'center' }}
      >
        <Button 
          variant='text'
          color='secondary'
          startIcon={<BiPlusCircle />}
        >
          Add new pet
        </Button>
      </Grid>
    </Grid>
  );
}