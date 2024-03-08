// const heading=React.createElement("h1",{id:"heading"},"This is H1 heading");
// // here heading is a react element which is a object

// // console.log(heading);
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading)

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 heading"),
    React.createElement("h2", {}, "this is h2 heading"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/**
 * we have to create this by react
 * <div id="parent">
 *        <div id="child">
 *          <h1>h1 heading></h1>
 *          <h2>h2 heading></h2> now to add h2 tag ,it is a sibling of h1 ,so we will pass an array
 *          to the 3 argument of React.createElement
 *  </div>
 * </div
 */
