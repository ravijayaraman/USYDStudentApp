//This javascript file contain all the code for the FAQDetails componenet that is used with in the application

//Importing the mandatory libraries
import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView
} from "react-native";

//import the URL buttom componenet which will be reused with the Flatlist to shown all the links for the FAQs
import UrlButton from "./UrlButton";

//Constant to get the dimension of the screen the user is currently viewing
const win = Dimensions.get('window');

//Function definition for the FAQDetails containing piece of code for rendering the view when called
export default function FAQDetail({ title, object, question }) {

    //Set the local variables after passing from the function to display on the screen here
    let strTitle = title;
    let header = JSON.parse(JSON.stringify(object));
    let objQuestion = JSON.parse(JSON.stringify(question));
    let arrLinks = JSON.parse(JSON.stringify(header.links));

    return (
        //Return scrollview for the content to display all the details in the page
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.fontQuestion}>{strTitle}</Text>
                <FlatList
                    data={arrLinks}
                    renderItem={({ item }) => {
                        return (
                            <UrlButton title={item.title} url={JSON.stringify(item.uri)} />
                        );
                    }}
                />
                <View>
                    <Text style={styles.textUnderline}>FAQ</Text>
                </View>
                <FlatList
                    data={objQuestion}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text>{item.question}</Text>
                                <Text>{item.answer}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: win.width,
        flexDirection: 'column',
        padding: 20,
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
    },
    textUnderline: {
        textDecorationLine: 'underline',
        justifyContent: 'center'
    },
    fontQuestion: {
        fontWeight: 'bold'
    }
});