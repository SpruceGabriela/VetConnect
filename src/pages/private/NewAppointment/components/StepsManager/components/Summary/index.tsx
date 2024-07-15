import { Card, Grid, Typography, useTheme } from "@mui/material";
import FormHeader from "../FormHeader";
import PetAvatar from "../../../Avatar";
import CustomLabel from "../CustomLabel";
import { ErrorOutline } from "@mui/icons-material";

export default function Summary() {
  const theme = useTheme();

  return (
    <Grid>
      <Grid 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          textAlign: 'start',
          marginBottom: '16px'
        }}
        gap={2}
      >
        <PetAvatar />
        <FormHeader 
          title='Summary of your reservation for'
          subtitle='Legoshi'
        />
      </Grid>
      <Typography fontSize={20}>
        Summary
      </Typography>
      <Grid sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '20px'
      }}>
        <CustomLabel label='Service' value='Vaccine' />
        <CustomLabel label='Date' value='06/10/2024' />
        <CustomLabel label='Time' value='16:00' />
        <CustomLabel label='Professional' value='Joana' />
      </Grid>
      <Grid sx={{ marginTop: '20px' }}>
        <Card 
          variant='outlined'
          sx={{
            padding: '16px',
            display: 'flex',
            gap: '12px',
            backgroundColor: theme.palette.error.light,
            borderRadius: '8px'
          }}
        >
          <ErrorOutline />
          <Grid>
            <Typography fontSize={14}>Bring your document and your pet's vaccination card.</Typography>
            <Typography fontSize={14}>If possible, arrive 30 minutes early.</Typography>
            <Typography fontSize={14}>The payment methods will be provided by the unit.</Typography>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}