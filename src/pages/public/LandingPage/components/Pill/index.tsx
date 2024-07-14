import { Box, useTheme } from '@mui/material';
import puppy from "@/assets/puppy.png";
import kitten from "@/assets/kitten.png";
import guineapig from "@/assets/guineapig.png";
import { AnimalType } from './types';

interface Props {
  type: AnimalType;
}

export default function Pill({
  type
}: Props) {
  const theme = useTheme();

  const commonStyles = {
    width: '200px',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '100px',
  };

  const pillStyles = {
    dog: {
      ...commonStyles,
      backgroundColor: theme.palette.tertiary.main,
      backgroundImage: `url(${puppy})`,
      backgroundPosition: 'bottom',
      backgroundSize: '130% 80%',
    },
    cat: {
      ...commonStyles,
      backgroundColor: theme.palette.primary.main,
      backgroundImage: `url(${kitten})`,
      backgroundPosition: 'bottom right',
      backgroundSize: '140% 100%',
    },
    guineapig: {
      ...commonStyles,
      backgroundColor: theme.palette.info.main,
      backgroundImage: `url(${guineapig})`,
      backgroundPosition: '0px 25px',
      backgroundSize: '130% 80%',
    },
  }

  const boxStyles = {
    ...pillStyles[type],
  };

  return <Box sx={boxStyles} />;
}