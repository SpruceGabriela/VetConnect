import { Button, Grid } from "@mui/material";
import { BiPlusCircle } from "react-icons/bi";
import PetCard from "../../../PetCard";
import FormHeader from "../FormHeader";

export default function ChoosePet() {
  return (
    <Grid>
      <FormHeader 
        title='My pets'
        subtitle='Which pet will be attended?'
      />
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