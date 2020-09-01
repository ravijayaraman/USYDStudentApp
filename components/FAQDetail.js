import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from "react-native";
import LinkButton from "./LinkButton";
import UrlButton from "./UrlButton";

const win = Dimensions.get('window');

export default function FAQDetail({ title, subtitle, object }) {
    let header = JSON.parse(object);
    let strSubTitle = subtitle;
    let data = JSON.parse(header["introParagraph"]);
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{strSubTitle}</Text>
            <FlatList
                data={JSON.parse(data["links"])}
                renderItem={({ item }) => {
                    return (
                        <UrlButton title={item.title} url={item.uri} />
                    );
                }}
            />
        </View>
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



function LandingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={parseJSONObject(content)}
                renderItem={({ item }) => {
                    return (
                        <LinkButton title={item.id} navigation={navigation} object={content[item.id]}/>
                    );
                }}
            />
        </View>
    );
}