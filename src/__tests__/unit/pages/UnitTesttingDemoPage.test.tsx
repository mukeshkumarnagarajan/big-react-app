import { render, screen } from "@testing-library/react";
import UnitTestingDemoPage from "../../../pages/UnitTesttingDemoPage/UnitTestingDemoPage";

it("has heading with 'Unit Testing Demo'", () => {
  render(<UnitTestingDemoPage />);
  const headingElement = screen.getByText("Unit Testing Demo");
  expect(headingElement).toBeInTheDocument();
});
