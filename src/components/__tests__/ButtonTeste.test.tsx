import { render, screen } from "@testing-library/react";
import ButtonTeste from "../ButtonTeste";

describe("ButtonTeste", () => {
  it("should be defined", () => {
    expect(ButtonTeste).toBeDefined();
  })

  it("should render button correctly", () => {
    render(<ButtonTeste label="teste" />);

    expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });
});