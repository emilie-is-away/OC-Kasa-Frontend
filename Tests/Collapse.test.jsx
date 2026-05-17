import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "../src/components/Collapse";

test("ouvre et ferme le collapse", () => {
  render(<Collapse title="Description" content="Mon contenu" />);

  const title = screen.getByText("Description");
  const content = screen.getByText("Mon contenu");

  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();

  fireEvent.click(title);
  expect(content).toBeInTheDocument();

  fireEvent.click(title);
  expect(content).toBeInTheDocument();
});