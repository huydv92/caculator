
import 'react-native';
import React from 'react';
import HomeScreen from '../src/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('function +',()=> {
    let Home = renderer.create(<HomeScreen />).getInstance();
    Home.handleTap("number",2)
    expect(parseFloat(Home.state.currentValue)).toEqual(2)

    Home.handleTap("number",3)
    expect(parseFloat(Home.state.currentValue)).toEqual(23)

    Home.handleTap("operator", "+")
    expect(Home.state.operator).toEqual("+")
    expect(parseFloat(Home.state.previousValue)).toEqual(23)
    expect(parseFloat(Home.state.currentValue)).toEqual(0)

    Home.handleTap("number",5)
    expect(parseFloat(Home.state.currentValue)).toEqual(5)

    Home.handleTap("equal")
    expect(parseFloat(Home.state.currentValue)).toEqual(28)

});

it('function -',()=> {
    let Home = renderer.create(<HomeScreen />).getInstance();
    Home.handleTap("number",10)
    expect(parseFloat(Home.state.currentValue)).toEqual(10)

    Home.handleTap("operator", "-")
    expect(Home.state.operator).toEqual("-")
    expect(parseFloat(Home.state.previousValue)).toEqual(10)
    expect(parseFloat(Home.state.currentValue)).toEqual(0)

    Home.handleTap("number",5)
    expect(parseFloat(Home.state.currentValue)).toEqual(5)

    Home.handleTap("equal")
    expect(parseFloat(Home.state.currentValue)).toEqual(5)

});


it('function *',()=> {
    let Home = renderer.create(<HomeScreen />).getInstance();
    Home.handleTap("number",100)
    expect(parseFloat(Home.state.currentValue)).toEqual(100)

    Home.handleTap("operator", "*")
    expect(Home.state.operator).toEqual("*")
    expect(parseFloat(Home.state.previousValue)).toEqual(100)
    expect(parseFloat(Home.state.currentValue)).toEqual(0)

    Home.handleTap("number",5)
    expect(parseFloat(Home.state.currentValue)).toEqual(5)
    Home.handleTap("number",0)
    expect(parseFloat(Home.state.currentValue)).toEqual(50)

    Home.handleTap("equal")
    expect(parseFloat(Home.state.currentValue)).toEqual(5000)

});


it('function /',()=> {
    let Home = renderer.create(<HomeScreen />).getInstance();
    Home.handleTap("number",3)
    expect(parseFloat(Home.state.currentValue)).toEqual(3)
    Home.handleTap("number",0)
    expect(parseFloat(Home.state.currentValue)).toEqual(30)

    Home.handleTap("operator", "/")
    expect(Home.state.operator).toEqual("/")
    expect(parseFloat(Home.state.previousValue)).toEqual(30)
    expect(parseFloat(Home.state.currentValue)).toEqual(0)

    Home.handleTap("number",1)
    expect(parseFloat(Home.state.currentValue)).toEqual(1)
    Home.handleTap("number",0)
    expect(parseFloat(Home.state.currentValue)).toEqual(10)

    Home.handleTap("equal")
    expect(parseFloat(Home.state.currentValue)).toEqual(3)

});


it('function clear',()=> {
    let Home = renderer.create(<HomeScreen />).getInstance();
    Home.handleTap("number",3)
    expect(parseFloat(Home.state.currentValue)).toEqual(3)
    Home.handleTap("number",0)
    expect(parseFloat(Home.state.currentValue)).toEqual(30)

    Home.handleTap("operator", "clear")
    expect(parseFloat(Home.state.previousValue)).toEqual(30)
    expect(parseFloat(Home.state.currentValue)).toEqual(0)

});