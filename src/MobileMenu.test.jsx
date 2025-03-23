import { render, screen } from "@testing-library/react";

import MobileMenu from "./components/MobileMenu/MobileMenu.jsx";

test("renders the burger button", () => {
  render(<MobileMenu />);
  const burgerButton = screen.getByRole("button", { name: /burger menu/i });
  expect(burgerButton).toBeInTheDocument();
});
