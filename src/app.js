import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const AppLayout = () => {
    return ( 
            <div className="app">
                <Header/>
                <Body/>
            </div>  
    )
};

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);




/*
*<div id="parent">
    <div id="child1"> 
        <h1> h1 tag Toshi 1 </h1>
        <h2> h2 tag Tejaswini 1 </h2>
    </div>,
    <div id="child2">
        <h1> h3 tag Sam 1 </h1>
        <h2> h4 tag Samsung 1 </h2>
    </div>
*</div>
React Element (Object) = HTML Element (Browser Understand)
*/

/*

import React from "react";
import ReactDOM from "react-dom/client"

*/

/**const heading = React.createElement
("div", {id:"parent"}, [

React.createElement
("div",{id:"child1"},[ React.createElement 
("h1",{},"H1 bitter Tag"),React.createElement ("h2",{},"H2 Tag") ] ) ,

React.createElement
("div",{id:"child2"},[ React.createElement 
("h3",{},"H3 Tag"),React.createElement ("h4",{},"H4 Tag") ] ) 

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading); // Object
//JSX
**/





