"use strict";

var React = require('react');

var Header = React.createClass({
	render: function () {
		return (
			<div>
				<div data-test-hook="title">
					<span data-test-hook="title-label">Title: </span>
					<span data-test-hook="title-value">Common Title</span>
					<img src="favicon.ico"/>
				</div>

				<div>
					<ul className="nav navbar-nav">
						<li><a href="/">Home</a></li>
						<li><a href="/#about">About</a></li>
					</ul>
				</div>
			</div>

		);
	}
});

module.exports = Header;