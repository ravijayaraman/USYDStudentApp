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

function parseJSONObject(data) {
    let keys = [];
    for(let k in data) keys.push({"id": k});
    console.log(keys);
    return keys;
}

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
    const { data } = route.params;
    let objDetail = data.introParagraph;
    navigation.setOptions({ title: data.sectionTitle });
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FAQDetail title={objDetail["text"]} object={data}/>
                <View>
                    <Text style={styles.textUnderline}>FAQ</Text>
                </View>
                <FAQDetail title={objDetail["text"]} object={data}/>
            </ScrollView>
        </View>
    );
}

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
    },
    textUnderline: {
        textDecorationLine: 'underline',
        justifyContent: 'center'
    }
});
