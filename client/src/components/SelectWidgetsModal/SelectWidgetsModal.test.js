import React from "react";
import SelectWidgetsModal from ".";
import Enzyme, { ReactWrapper, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

Enzyme.configure({ adapter: new Adapter() });

test("Button opens modal when clicked", () => {
    const wrapper = shallow(<SelectWidgetsModal />);
    expect(wrapper.find(Dialog).prop("open")).toBe(false);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Dialog).prop("open")).toBe(true);
});
