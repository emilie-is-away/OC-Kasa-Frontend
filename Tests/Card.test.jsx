import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../src/components/Card";

test("affiche correctement une card", () => {
  const logement = {
    id: "123",
    title: "Appartement cosy",
    cover: "/image.jpg",
  };

  render(
    <MemoryRouter
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
>
  <Card logement={logement} />
</MemoryRouter>
  );

  expect(screen.getByText("Appartement cosy")).toBeInTheDocument();

  const image = screen.getByAltText("Appartement cosy");
  expect(image).toHaveAttribute("src", "/image.jpg");

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/logement/123");
});