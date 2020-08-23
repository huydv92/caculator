import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';
import calculator from './util/calculator';

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const KeyBoardShowByPress = React.forwardRef((props, ref) => (
    <TextInput
        ref={ref}
        onSubmitEditing={Keyboard.dismiss}
        style={{ top: -500, position: 'absolute' }}
        returnKeyType={"done"}
        keyboardType={"number-pad"}
        onChangeText={props.onChangeText}
        onKeyPress={props.onKeyPress}
        onSubmitEditing = {props.onSubmitEditing}
    />
));

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0
        };
    }

    handleTap = (type, value) => {
        if(this.state && this.state.isEqual) {
            this.setState({currentValue: 0, isEqual : false})
        }
        this.setState(state => calculator(type, value, state));
        this.clearTextInput();
    };

    onFloatingButtonPress() {
        this.textInputField && this.textInputField.focus();
    }

    onChangeText = (text) => {
        this.setState({ currentValue: text });
    }

    clearTextInput() {
        this.textInputField && this.textInputField.clear();
    }

    keyPress = (event) => {
        event.persist();
        if (event.nativeEvent.key === "Backspace") {
            const text = this.state.currentValue;
            var editedText = text.slice(0, -1) //'abcde'
            if (editedText === "" || !editedText) {
                editedText = "0";
            }
            this.setState({ currentValue: editedText });
        }
    }

    onSubmit = (e) => {
        if(this.state && this.state.operator) {
            this.handleTap("equal");
        }
    }



    render() {
        const { valueView, valueText, button } = styles;
        const currentValue = parseFloat(this.state.currentValue).toLocaleString();
        return (
            <View>
                <SafeAreaView>
                    <View style={valueView}>
                        <TouchableOpacity style={button} onPress={() => this.onFloatingButtonPress()}>
                            <Text style={valueText}>
                                {currentValue}
                            </Text>
                            <KeyBoardShowByPress
                                ref={(ref) => { this.textInputField = ref }}
                                onChangeText={(t) => this.onChangeText(t)}
                                onKeyPress={this.keyPress}
                                onSubmitEditing = {(e) => (this.onSubmit(e))}

                            />
                        </TouchableOpacity>
                    </View>
                    <Row>
                        <Button
                            text="clear"
                            size="double"
                            border={"top"}
                            onPress={() => this.handleTap("clear")}
                        />
                        <Button
                            text="/"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "/")}
                        />
                    </Row>
                    <Row>
                        <Button text="7" onPress={() => this.handleTap("number", 7)} />
                        <Button text="8" onPress={() => this.handleTap("number", 8)} />
                        <Button text="9" onPress={() => this.handleTap("number", 9)} />
                        <Button
                            text="x"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "*")}
                        />
                    </Row>
                    <Row>
                        <Button text="4" onPress={() => this.handleTap("number", 4)} />
                        <Button text="5" onPress={() => this.handleTap("number", 5)} />
                        <Button text="6" onPress={() => this.handleTap("number", 6)} />
                        <Button
                            text="-"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "-")}
                        />
                    </Row>
                    <Row>
                        <Button text="1" onPress={() => this.handleTap("number", 1)} />
                        <Button text="2" onPress={() => this.handleTap("number", 2)} />
                        <Button text="3" onPress={() => this.handleTap("number", 3)} />
                        <Button
                            text="+"
                            theme="accent"
                            onPress={() => this.handleTap("operator", "+")}
                        />
                    </Row>
                    <Row>
                        <Button
                            text="0"
                            size="double"
                            border={"bottom"}
                            onPress={() => this.handleTap("number", 0)}
                        />
                        <Button
                            text="="
                            theme="accent"
                            onPress={() => this.handleTap("equal")}
                        />
                    </Row>
                </SafeAreaView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#202020",
        justifyContent: "flex-end"
    },
    valueText: {
        color: "#fff",
        fontSize: 40,
        textAlign: "right",
        right: 10
    },
    valueView: {
        width: '100%',
        height: Math.floor(buttonWidth),
        backgroundColor: '#331100',
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'center',
        flex: 1
    }
});

export default HomeScreen;
