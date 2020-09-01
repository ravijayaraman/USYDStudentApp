import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    Dimensions,
    Linking
} from "react-native";

const win = Dimensions.get('window');

export default function UrlButton({ title, url }) {
    let strURL = String(url);
    return (
        <TouchableHighlight>
            <TouchableOpacity style={styles.container} onPress={() => { Linking.openURL(strURL)}}>
                <View style={[styles.container, styles.justifyLeft]}>
                    <Image source={require('../assets/metro-link.png')} resizeMode={'contain'} style={styles.image} />
                    <Text>{title}</Text>
                </View>
            </TouchableOpacity>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: win.width,
        flexDirection: 'row'
    },
    justifyLeft: {
        justifyContent: 'flex-start',
    },
    justifyRight: {
        justifyContent: 'flex-end',
    },
    image: {
        width: 15,
        height: 15,
        margin: 15
    }
});

