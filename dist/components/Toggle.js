/*
 * <Toggle
 *	className=string
 *	label=required string
 *	onToggle=func
 *	toggled=bool
 * >
 */

var React = require("react");
var PropTypes = React.PropTypes;
var PureRenderMixin = require("react-addons-pure-render-mixin");

var Toggle = React.createClass({
	displayName: "Toggle",


	mixins: [PureRenderMixin],

	propTypes: {
		className: PropTypes.string,
		label: PropTypes.string.isRequired,
		onToggle: PropTypes.func,
		toggled: PropTypes.bool
	},

	getDefaultProps: function () {
		return {
			toggled: false
		};
	},

	getInitialState: function () {
		return {
			toggled: this.props.toggled || false
		};
	},

	handleClick: function () {
		this.setState({ toggled: !this.state.toggled }, function () {
			if (this.props.onToggle) {
				this.props.onToggle(this.state.toggled);
			}
		});
	},

	render: function () {
		var toggleClass = this.state.toggled ? 'toggled' : '';
		return React.createElement(
			"div",
			{ className: ["cb-toggle", toggleClass, this.props.className].join(" "), onClick: this.handleClick },
			React.createElement("div", { className: "cb-toggle-container" }),
			React.createElement("div", { className: "cb-toggle-switch" }),
			React.createElement("input", {
				checked: this.state.toggled,
				readOnly: true,
				type: "checkbox",
				name: this.props.name
			}),
			React.createElement(
				"label",
				null,
				this.props.label
			)
		);
	}
});

module.exports = Toggle;