import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import api from '../services/api';

import { withNavigation } from '@react-navigation/compat';

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    title: {
        fontSize: 20,
        color: "#444",
        paddingHorizontal: 20,
        marginBottom: 15
    },
    bold: {
        fontWeight: 'bold'
    },
    list: {
        paddingHorizontal: 20
    },
    listItem: {
        marginRight: 15
    },
    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2
    },
    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10
    },
    price: {
        fontSize: 15,
        color: "#999",
        marginTop: 5
    },
    button: {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15
    }
});

function SpotList({ tech, navigation }) {
    const [spots, setSpots] = useState([
        {
            _id: 1,
            thumbnail_url: 'https://instagram.fmcp1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/94952361_1895441663921219_4856067140718952448_n.jpg?_nc_ht=instagram.fmcp1-1.fna.fbcdn.net&_nc_ohc=LL7Kvy6oDSwAX_aqtg3&oh=19371a988240d456f7bd27aa159d8179&oe=5EFD860D',
            company: "Rocktseat",
            price: null
        },
        {
            _id: 2,
            thumbnail_url: 'https://instagram.fmcp1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/94952361_1895441663921219_4856067140718952448_n.jpg?_nc_ht=instagram.fmcp1-1.fna.fbcdn.net&_nc_ohc=LL7Kvy6oDSwAX_aqtg3&oh=19371a988240d456f7bd27aa159d8179&oe=5EFD860D',
            company: "Rocktseat",
            price: null
        },
        {
            _id: 3,
            thumbnail_url: 'https://instagram.fmcp1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/94952361_1895441663921219_4856067140718952448_n.jpg?_nc_ht=instagram.fmcp1-1.fna.fbcdn.net&_nc_ohc=LL7Kvy6oDSwAX_aqtg3&oh=19371a988240d456f7bd27aa159d8179&oe=5EFD860D',
            company: "Rocktseat",
            price: null
        },
        {
            _id: 4,
            thumbnail_url: 'https://instagram.fmcp1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/94952361_1895441663921219_4856067140718952448_n.jpg?_nc_ht=instagram.fmcp1-1.fna.fbcdn.net&_nc_ohc=LL7Kvy6oDSwAX_aqtg3&oh=19371a988240d456f7bd27aa159d8179&oe=5EFD860D',
            company: "Rocktseat",
            price: null
        }
    ]);

    useEffect(() => {
        /* async function loadSpots() {
            const { data } = await api.get('/spots', {
                params: { techs }
            });
            setSpots(data);
        }
        loadSpots(); */
    }, []);

    function handleNavigate(id) {
        navigation.navigate("Book", { id });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

            <FlatList
                style={styles.list}
                data={spots}
                keyExtractor={spot => spot._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `${item.price}/dia` : 'GRATUITO'}</Text>
                        <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
                            <Text style={styles.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default withNavigation(SpotList);
