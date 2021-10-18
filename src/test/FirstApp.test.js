/* import React from "react";
import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe("Tests in FirstApp Component", () => {
  test('should display the message "hello', () => {
    const greeting = "hello";
    const { getByText } = render(<FirstApp greeting={greeting} />);

    expect(getByText(greeting)).toBeInTheDocument();
  });
});
 */

import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";

describe("Tests in First A", () => {
  test("should display First App correctly", () => {
    const greeting = "hello";
    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });
  test("should display subtitle prop", () => {
    const greeting = "hello";
    const subtitle = "subtitle";
    const wrapper = shallow(
      <FirstApp greeting={greeting} subtitle={subtitle} />
    );

    const textP = wrapper.find('p').text()
    const textPClass = wrapper.find('#subtitle').text()
    expect(textP).toBe(subtitle)
    expect(textPClass).toBe(subtitle)
  });
});
