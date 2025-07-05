/*
*<div id="parent">
    <div id="child1"> 
        <h1> h1 tag </h1>
        <h2> h2 tag </h2>
    </div>,
    <div id="child2">
        <h1> h3 tag </h1>
        <h2> h4 tag </h2>
    </div>
*</div>
React Element (Object) = HTML Element (Browser Understand)
*/

const heading = React.createElement
("div", {id:"parent"}, [

React.createElement
("div",{id:"child1"},[ React.createElement 
("h1",{},"H1 Tag"),React.createElement ("h2",{},"H2 Tag") ] ) ,

React.createElement
("div",{id:"child2"},[ React.createElement 
("h3",{},"H3 Tag"),React.createElement ("h4",{},"H4 Tag") ] ) 

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading); // Object
//JSX
