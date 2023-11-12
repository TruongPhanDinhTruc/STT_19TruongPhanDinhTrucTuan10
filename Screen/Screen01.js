import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
function Screen01({navigation}) {
    const [email, setEmail] = React.useState('name 1');

    return (
        <View style={styles.container}>
            <Image style={{ width: '200px', height: '200px' }} resizeMode="contain" source={require("../img/image.png")} />
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#8353E2", textAlign: 'center'}}>MANAGE YOUR {'\n'} TASK</Text>
            <View style={{width: '350px', height: '50px', borderColor: "#111", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons style={{marginLeft: 10}} name="email-outline" size={30} color="black" />
                <TextInput style={{outlineStyle: 'none', marginLeft: 10,width: "80%", height: "100%", fontSize: 20 }} value={email} onChangeText={setEmail} placeholder="Enter your name" />
            </View>
            <Pressable onPress={()=>{navigation.navigate("Screen02", {email})}}  style={{marginTop: 20,width: 200, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff"}}>GET STARTED </Text>
                <AntDesign name="arrowright" size={20} color="#fff" />
            </Pressable>
        </View>
    )
}
export default Screen01
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});