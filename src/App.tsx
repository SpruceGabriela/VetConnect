import { Button, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h1">This is a heading</Typography>
      <Typography variant="body1">This is body text</Typography>
      <Button variant="contained" color="primary">This is a button</Button>
      <Button variant="contained" color="secondary">This is a button</Button>
      <Button variant="outlined" color="secondary">This is a button</Button>
      <Button variant="text" color="secondary">This is a button</Button>
    </>
  );
}

export default App;
