"use strict";

var React = require('react');

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<div data-test-hook="title">
					<span data-test-hook="title-label">Title: </span>
					<span data-test-hook="title-value">Test Title</span>
				</div>
				<div>
					<span data-test-hook="description-label">Description: </span>
					<span data-test-hook="description-value">test description</span>
				</div>

				<div>
					<label>
						<span data-test-hook="input-label">Input Name</span>
						<input
							data-test-hook="input-value"
							type="name" value="Khazi"
							name="name" />
					</label>
				</div>
			</div>

		);
	}
});

module.exports = Home;