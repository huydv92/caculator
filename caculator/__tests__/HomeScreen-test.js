
import 'react-native';
import React from 'react';
import HomeScreen from '../src/HomeScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Home snapshot', () => {
    const snap = renderer.create(
        <HomeScreen />
    ).toJSON();
    expect(snap).toMatchSnapshot();
});