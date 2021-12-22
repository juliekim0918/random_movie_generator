const React = require("react");
const { render } = require("react-dom");
const { act } = require("react-dom/test-utils");
const { expect } = require("chai");
var jsdom = require("mocha-jsdom");
// const Main = require("../src/index");

// global.document = jsdom({
//   url: "http://localhost:3000",
// });

// let rootContainer;
// beforeEach(() => {
//   rootContainer = document.createElement("div");
//   document.body.appendChild(rootContainer);
// });

// afterEach(() => {
//   document.body.removeChild(rootContainer);
//   rootContainer = null;
// });

// describe("App Component Testing", () => {
//   it("renders something", () => {
//     act(() => {
//       render(<Main />, rootContainer);
//     });
//     const h1 = document.querySelector("h1");
//     expect(h1.textContent).to.equal("Hello world!");
//   });
// });
