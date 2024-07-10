const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        borderRadius: '32px'
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
};

export default components;