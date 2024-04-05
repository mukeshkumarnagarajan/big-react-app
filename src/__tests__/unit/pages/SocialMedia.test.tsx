import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
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

it('should have input field with placeholder "Enter Country Name"', () => {
  render(<SocialMedia name="Facebook" followersCount="2.3M+" />);
  const countryInput = screen.getAllByPlaceholderText("Enter Country Name");
  expect(countryInput).toBeTruthy();
});

it("should have input field with default value India", () => {
  render(<SocialMedia name="Facebook" followersCount="2.3M+" />);
  const countryInput: HTMLInputElement = screen.getByRole("textbox");
  expect(countryInput.value).toBe("India");
});

it("should update country name on change event", () => {
  render(<SocialMedia name="Facebook" followersCount="2.3M+" />);
  const countryInput: HTMLInputElement = screen.getByRole("textbox");

  fireEvent.change(countryInput, {
    target: {
      value: "Singapore",
    },
  });

  expect(countryInput.value).toBe("Singapore");

  const webSiteInfoElement = screen.getByTestId("webSiteInfo");
  expect(webSiteInfoElement.textContent).toBe(
    "Visit Genesys Singapore Website"
  );
});

it("displays social media followers count with background color green", () => {
  render(<SocialMedia name="Facebook" followersCount="2.3M+" />);
  const followersDetailElement = screen.getByTestId("followersDetails");
  expect(followersDetailElement).toHaveStyle("background-color:#ffff00");
});

it("has right SocialMedia component snapshot", () => {
  const snapshotJson = renderer.create(
    <SocialMedia name="Facebook" followersCount="2.3M+" />
  );
  expect(snapshotJson).toMatchSnapshot();
});
