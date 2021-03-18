import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import SelectWidgetsModal from "../SelectWidgetsModal";

test("Button opens modal when clicked", () => {
    // const component = renderer.create(
    //     <SelectWidgetsModal/>
    // )

    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // tree.props.onClick();

    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    const { container } = render(<SelectWidgetsModal />);
    console.log(container);
    fireEvent.click(screen.getByText("Manage widgets"));
});
