import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LinkButton from './components/LinkButton';

class LandingScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LinkButton title={"Before Your Leave"} />
                <LinkButton title={"When You Arrive"} />
                <LinkButton title={"Living in Australia"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        width: win.width,
        height: win.height,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        // flexDirection: 'column',
        // display: 'flex'
    }
});