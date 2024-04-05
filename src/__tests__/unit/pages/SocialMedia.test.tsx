import { render, screen } from "@testing-library/react";
import SocialMedia from "../../../pages/UnitTesttingDemoPage/SocialMedia";

it("has Social Media in heading", () => {
  render(<SocialMedia name="Facebook" followersCount="2.3M+" />);
  const headingElement = screen.getByText(/Social Media Info/i);
  expect(headingElement).toBeDefined();
});

it("receives the props name, followersCount and displays in paragraph", () => {
  render(<SocialMedia name="Facebook" followersCount="2.3M+" />);
  const followersDetailElement = screen.getByTestId("followersDetails");
  expect(followersDetailElement.textContent).toBe(
    "Facebook with 2.3M+ followers"
  );
});
