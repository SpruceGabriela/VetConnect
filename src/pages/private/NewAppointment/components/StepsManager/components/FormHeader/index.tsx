import { Grid, Typography, useTheme } from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
}

export default function FormHeader({
  title,
  subtitle
}: Props) {
  const theme = useTheme();

  return (
    <Grid sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'start'
    }}>
      <Typography sx={{ fontWeight: 500 }}>
        { title }
      </Typography>
      <Typography color={theme.palette.text.disabled}>
        { subtitle }
      </Typography>
    </Grid>
  );
}