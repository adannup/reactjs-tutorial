## Primer forma

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		return (
			<h1>It works</h1>
		);
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);


## Segunda Forma

var React = require('react');
var ReactDOM = require('react-dom');

var Layout = React.createClass({
	render: function() {
		return (
			<h1>Esto funciona</h1>
		);
	}
});

ReactDOM.render(<Layout />, document.getElementById('app'));


## Tercera Forma
### Stateless functional components

var React = require('react');
var ReactDOM = require('react-dom');


function Layout() {
	return (
		<h1>Esto funciona tambien</h1>
	);
}

ReactDOM.render(<Layout />, document.getElementById('app'));
*/