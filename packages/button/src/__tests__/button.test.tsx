import React from "react";
import { cleanup, render } from "@testing-library/react";
import Component from "../index";

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    render(<Component text="s" data={[]} onClick={jest.fn()} />);
});
