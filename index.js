function Header()
{
   return React.createElement("h1",{className:"logo"},"HEADER");
}

function Footer()
{
   return React.createElement("h1",{className:"logo"},"FOOTER");
}


function App()
{
	return React.createElement(React.Fragment,{},
    Header(),
    Footer()
	);
}

ReactDOM.render(App(),document.getElementById("root"));