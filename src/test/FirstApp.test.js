import React from "react";
import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe("Tests in FirstApp Component", () => {
  test('should display the message "hello', () => {
    const greeting = "hello";
    const { getByText } = render(<FirstApp greeting={greeting} />);

    expect(getByText(greeting)).toBeInTheDocument();
  });
});
