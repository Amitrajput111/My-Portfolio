import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero name", () => {
  render(<App />);
  expect(screen.getByText(/AMIT/i)).toBeInTheDocument();
  expect(screen.getByText(/RAJPUT/i)).toBeInTheDocument();
});
