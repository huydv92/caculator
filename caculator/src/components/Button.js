import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const Button = ({ onPress, text, size, theme, border }) => {
    const { button, textFont, buttonDouble, borderTopStyles, borderBottomStyles, buttonAccent } = styles;
    const buttonStyles = [button];
    const textStyles = [textFont];

    if (size === "double") {
        buttonStyles.push(buttonDouble);
    }
    
    if (theme === "accent") {
        buttonStyles.push(buttonAccent);
        textStyles.push({color:'white'})
    }

    if (border === "top") {
        buttonStyles.push(borderTopStyles);
    } else if (border === "bottom") {
        buttonStyles.push(borderBottomStyles);
    }

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    textFont: {
        fontSize: 45,
        textAlign:'center',
        width: '100%'
    },
    button: {
        backgroundColor: "white",
        flex: 1,
        height: Math.floor(buttonWidth - 10),
        width: buttonWidth,
        alignItems: "center",
        justifyContent: "center",
        borderColor:'#B22222',
        borderWidth:1
    },
    buttonDouble: {
        flex: 0,
        width: screen.width - buttonWidth,
        alignItems: "flex-start"
    },
    buttonAccent: {
        backgroundColor: "red"
    },
    borderTopStyles: {
        borderTopColor:"#B22222",
        borderTopWidth: 2
    },
    borderBottomStyles: {
        borderBottomColor:"#B22222",
        borderBottomWidth: 2
    }
});

export default Button
