import React from "react";
import { createRoot } from "react-dom";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(Pizza, {
      name: "Pepporoni",
      description: "Some cool peppo pijja",
    }),
    React.createElement(Pizza),
    React.createElement(Pizza),
    React.createElement(Pizza),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(React.createElement(App));
