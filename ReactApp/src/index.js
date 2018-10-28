$ = JQuery = require('jquery');
var React = require('react');
var Home = require('./containers/home/homePage');
var About = require('./containers/about/aboutPage');
var Header = require('./components/header');

(function (win) {
	"use strict";

	var App = React.createClass({
		render: function () {
			var Child;

			switch (this.props.route) {
				case 'about':
					Child = About;
					break;
				default:
					Child = Home;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);
		}
	});

	function render () {
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	};

	win.addEventListener('hashchange', render);
	render();

})(window);

