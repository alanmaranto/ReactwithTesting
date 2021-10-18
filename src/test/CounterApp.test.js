import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../components/CounterApp";

describe("Tests in counter App", () => {
  test("should display App Correctly", () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });
  test('should display counter with value of 100', () => {
    const counter = 100;
    const wrapper = shallow(<CounterApp value={counter} />);

    const counterValue = '100';
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe(counterValue);
  })
  
});
