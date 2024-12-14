import { Grid, Typography } from '@mui/material';
import PetAvatar from '../Avatar';

interface Props {
  petName: string;
}

export default function PetCard({ petName }: Props) {
  return (
    <Grid sx={{
      width: 'min-content',
      textAlign: 'center'
    }}>
      <PetAvatar />
      <Typography>
        { petName }
      </Typography>
    </Grid>
  )
}