import { Button } from "@mui/material";

interface Props {
  label: string;
}

export default function ButtonTeste({
  label
}: Props) {
  return <Button>{label}</Button>
}