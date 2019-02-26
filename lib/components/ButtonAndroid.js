import React, {
	PureComponent,
} from "react";
import {
	View,
	TouchableWithoutFeedback,
	requireNativeComponent
} from "react-native";

const NativeComponent = requireNativeComponent("ButtonAndroid", ButtonAndroid, {});

export class ButtonAndroid extends PureComponent {
	static defaultProps = {
		textSize: 15,
		textColor: "black",
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableWithoutFeedback {...this.props}>
				<NativeComponent
					style={this.props.style}
					backgroundColor={this.props.backgroundColor}
					textColor={this.props.textColor}
					textSize={this.props.textSize}
					text={this.props.text} />
			</TouchableWithoutFeedback>
		);
	}
}
