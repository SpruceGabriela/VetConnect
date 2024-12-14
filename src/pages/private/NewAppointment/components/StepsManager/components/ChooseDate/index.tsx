import { Chip, Grid, useTheme } from "@mui/material";
import FormHeader from "../FormHeader";
import PetAvatar from "../../../Avatar";
import { StaticDatePicker } from "@mui/x-date-pickers";

export default function ChooseDate() {
  const theme = useTheme();

  return (
    <Grid>
      <Grid 
        sx={{
          display: 'flex',
          justifyContent: 'start',
          flexDirection: 'row',
          textAlign: 'start',
          marginBottom: '16px'
        }}
        gap={2}
      >
        <PetAvatar />
        <FormHeader 
          title='Select the date and time for'
          subtitle='Nome do pet'
        />
      </Grid>
      <Grid sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '20px'
      }}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={null}
          onChange={(newValue) => {
            console.log(newValue);
          }}
          sx={{
            backgroundColor: theme.palette.background.default
          }}
        />
        <Grid sx={{ 
          display: 'flex', 
          gap: '8px', 
          width: '350px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <Chip 
            clickable 
            label="13:30" 
            color="secondary" 
            variant="outlined"
            size="medium"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}