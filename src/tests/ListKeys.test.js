import React from "react";
import { mount } from "enzyme";
import ListKeys from "./ListKeys";
import IndexAsKey from "./listKeys/IndexAsKey";
import IdAsIndex from "./ListKeys/IdAsKey";

describe("When index is used as key", () => {
  it("If key is the same, React assumes component in DOM is the same as before", () => {
    const indexOfElementToAdd = 0;
    const jorgeInputValue = "Value assigned to Jorge";

    const listKeysWrapper = mount(<ListKeys ListItem={IndexAsKey} />);
    const numberOfInitialInputs = listKeysWrapper.find("input").length;
    const jorgeInput = listKeysWrapper.find("input").at(indexOfElementToAdd);

    jorgeInput.instance().value = jorgeInputValue;

    (function addNewName() {
      listKeysWrapper.find("button").simulate("click");
    })();

    const finalNumberOfInputs = listKeysWrapper.find("input").length;
    const newNameInputValue = listKeysWrapper
      .find("input")
      .at(indexOfElementToAdd)
      .instance().value;

    expect(finalNumberOfInputs).toEqual(numberOfInitialInputs + 1);
    expect(newNameInputValue).toEqual(jorgeInputValue);
  });
});

describe("When unique id is used as key", () => {
  it("If new element is added React detects the difference in the DOM and updates", () => {
    const indexOfElementToAdd = 0;
    const jorgeInputValue = "Value assigned to Jorge";

    const listKeysWrapper = mount(<ListKeys ListItem={IdAsIndex} />);
    const numberOfInitialInputs = listKeysWrapper.find("input").length;
    const jorgeInput = listKeysWrapper.find("input").at(indexOfElementToAdd);

    jorgeInput.instance().value = jorgeInputValue;

    (function addNewName() {
      listKeysWrapper.find("button").simulate("click");
    })();

    const finalNumberOfInputs = listKeysWrapper.find("input").length;
    const newNameInputValue = listKeysWrapper
      .find("input")
      .at(indexOfElementToAdd)
      .instance().value;

    expect(finalNumberOfInputs).toEqual(numberOfInitialInputs + 1);
    expect(newNameInputValue).toEqual("");
  });
});
