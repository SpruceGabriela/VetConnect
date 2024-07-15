import { Grid, Typography } from '@mui/material';

interface Props {
  label: string;
  value: string;
}

export default function CustomLabel({
  label,
  value
}: Props) {
  return (
    <Grid container justifyContent='space-between' sx={{ marginBottom: '12px' }}>
      <Typography>
        {label}
      </Typography>
      <Typography fontWeight={600}>
        {value}
      </Typography>
    </Grid>
  );
}