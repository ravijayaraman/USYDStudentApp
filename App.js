import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Dimensions, Text, ScrollView, FlatList } from "react-native";
import LinkButton from "./components/LinkButton";
import UrlButton from "./components/UrlButton";
import FAQDetail from "./components/FAQDetail";
import contents from "./content.json";

const win = Dimensions.get('window');
const content = JSON.parse(JSON.stringify(contents));
const Stack = createStackNavigator();

//Function used to parse the json data after fetching from the local directory
function parseJSONObject(data) {
    let keys = [];
    for(let k in data) keys.push({"id": k});
    return keys;
}

//initial rendering done with flatlist to display all the links and buttons
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

function DetailsScreen({ route, navigation }) {
    let { data } = route.params;
    let objDetail = JSON.parse(JSON.stringify(data["introParagraph"]));
    let objQuestion = JSON.parse(JSON.stringify(data["FAQItems"]));
    navigation.setOptions({ title: data.sectionTitle });
    return (
        <View>
            <FAQDetail title={objDetail.text} object={objDetail} question={objQuestion}/>
        </View>
    );
}

//main application start with all the initial navigation stack
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing" screenOptions={{
                headerStyle: {
                    backgroundColor: '#424242',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerBackTitle: '',
            }}>
                <Stack.Screen
                    name="Landing"
                    component={LandingScreen}
                    options={{ title: 'International & Out of Town Guide' }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={({ route }) => ({ title: route.params.title })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: win.width,
        height: win.height,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    bottom: {
        marginBottom: 20
    }
});
