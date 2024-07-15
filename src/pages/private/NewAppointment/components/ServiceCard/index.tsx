import {
  Box,
  Card,
  Chip,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
  useTheme
} from "@mui/material";

interface Props {
  icon: JSX.Element;
  title: string;
  id: string;
  color: string;
  onClick: () => void;
}

export default function ServiceCard({
  icon,
  title,
  id,
  color
}: Props) {
  const theme = useTheme();

  return (
    <Card 
      key={title}
      variant='outlined' 
      sx={{
        backgroundColor: theme.palette.background.default,
        borderRadius: '16px',
        marginBottom: '16px'
      }}
    >
      <Box sx={{
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Grid container gap={2} alignItems='center'>
          <Chip 
            label={icon} 
            sx={{ backgroundColor: color, height: '45px' }}
          />
          <Typography>
            {title}
          </Typography>
        </Grid>
        <FormControlLabel
          label=""
          className='service-radio'
          control={
            <Radio 
              value={id} 
              color='secondary' 
              className='service-radio' 
            />
          }
          sx={{
            marginLeft: "0",
            marginRight: "0",
          }}
        />
      </Box>
    </Card>
  );
}
