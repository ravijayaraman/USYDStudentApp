import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";

const win = Dimensions.get('window');

export default function LinkButton({ title, navigation, object }) {
    let header = object;
    return (
        <TouchableHighlight>
            <TouchableOpacity style={styles.container} onPress={() => {
                navigation.push('Details', {
                    data: header
                })
            }}>
                <View style={styles.container}>
                    <Image source={require('../assets/tick.png')} resizeMode={'contain'} style={styles.image} borderWidth={1} borderColor={'red'} />
                    <Text style={styles.justifyLeft}>{title}</Text>
                </View>
                <View style={styles.justifyRight}>
                    <Image source={require('../assets/arrow-right.png')} resizeMode={'contain'} style={styles.image} />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
            </TouchableOpacity>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: win.width,
        flexDirection: 'row',
        height: 40,
        margin: 5,
        // justifyContent: 'flex-end'
    },
    justifyLeft: {
        justifyContent: 'flex-start',
    },
    justifyRight: {
        marginRight: 10
    },
    image: {
        padding: 5,
        width: 20,
        height: 20,
        margin: 20
    }
});

