import { render, screen } from "@testing-library/react";
import UsersPage from "../../../pages/UsersPage/UsersPage";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UsersPage", () => {
  it("renders UsersPage component properly with api data [MOCKING]", async () => {
    const userList = [
      {
        id: 1,
        name: "John",
        phone: "23452353245",
      },
      {
        id: 2,
        name: "Steve",
        phone: "5646776",
      },
    ];

    mockedAxios.get.mockResolvedValue({ data: userList });
    render(
      <BrowserRouter>
        <HelmetProvider>
          <UsersPage />
        </HelmetProvider>
      </BrowserRouter>
    );

    expect(await screen.findByText(/John/i)).toBeInTheDocument();
    expect(await screen.findByText(/23452353245/)).toBeInTheDocument();

    expect(await screen.findByText(/Steve/i)).toBeInTheDocument();
    expect(await screen.findByText(/5646776/)).toBeInTheDocument();
  });
});
