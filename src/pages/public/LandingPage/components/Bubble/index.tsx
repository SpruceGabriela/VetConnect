import { Box } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  styles: CSSProperties;
}

export default function Bubble({ icon, styles }: Props) {
  const commonStyles = {
    height: '50px', 
    width: '50px', 
    position: 'absolute',
    borderRadius: '50%',
  };

  return (
    <Box 
      sx={{ 
        ...commonStyles,
        ...styles
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: '-15px',
        right: '-10px',
      }}>
        { icon }
      </Box>
    </Box>
  )
}