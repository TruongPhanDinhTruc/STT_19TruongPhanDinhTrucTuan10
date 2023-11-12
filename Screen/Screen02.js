import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function Screen02({ route, navigation }) {
    const [toDo, setToDo] = useState([]); // đại diện cho danh sách các mục công việc cần làm
    const [data, setData] = useState([]); // lưu trữ dữ liệu được fetch từ API
    const [update, setUpdate] = useState(0); // theo dõi các cập nhật
    const { email } = route.params; 
    const [search, setSearch] = useState(''); // giữ thông tin truy vấn tìm kiếm được nhập bởi người dùng

    useEffect(() => {
        fetch("https://6544b4795a0b4b04436ccc12.mockapi.io/lab7") // fetch dữ liệu từ một API dựa trên email được cung cấp
            .then(response => response.json())
            .then(data => {
                const username1Data = data.find(item => item.name === email);
                setToDo(username1Data.text);
                setData(username1Data);
                if (username1Data) {
                    const textArray = username1Data.text;
                    console.log(textArray);
                    update = 0;
                } else {
                    console.log("Không tìm thấy dữ liệu cho 'username1'");
                }
            })
            .catch(error => {
                console.error("Đã xảy ra lỗi khi lấy dữ liệu:", error);
            });
    }, [route.params.update]);

    useEffect(() => {
        if (search === "") {
            setToDo(toDo)
        } else {
            const filtered = toDo.filter(item => item.text && item.text.toLowerCase().includes(search.toLowerCase()));
            setToDo(filtered);
        }
    }, [search]);


    console.log(toDo)
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, width: "100%" }}>
                <Pressable onPress={() => { navigation.navigate("Screen01") }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
                <View style={{ marginLeft: 30, flexDirection: "row", alignItems: "center" }}>
                    <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={require("../img/avt.png")} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{email}</Text>
                        <Text style={{ fontSize: 18 }}>Have a agrete day a head</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 30, width: '300px', height: '50px', borderColor: "#111", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                <AntDesign style={{ marginLeft: 10 }} name="search1" size={24} color="black" />
                <TextInput style={{ outlineStyle: 'none', marginLeft: 10, width: "80%", height: "100%", fontSize: 20 }} value={search} onChangeText={text => setSearch(text)} placeholder="Search" />
            </View>
            <View>
                {toDo.map((item, index) => (
                    <Pressable  onPress={() => { navigation.navigate("Screen03", { email, data }); }} style={{ backgroundColor: "#e4e8ea", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginTop: 20, flexDirection: "row", width: 300, justifyContent: "space-between", height: 50, alignItems: "center" }}>
                        <AntDesign name="checksquareo" size={24} color="#4faa71" />
                        <Text style={{ fontSize: 17 }}>{item}</Text>
                        <FontAwesome name="pencil" size={24} color="#de7d80" />
                    </Pressable>

                ))}
            </View>
                <Pressable onPress={() => { navigation.navigate("Screen03", { email, data, update }) }} style={{marginTop: 15, backgroundColor: "#24c3d9", width: 60, height: 60, borderRadius: 50, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                    <Entypo name="plus" size={40} color="#fff" />
                </Pressable>
            </View>
            )
}
export default Screen02
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
});