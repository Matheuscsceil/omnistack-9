import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { SafeAreaView, ScrollView, Image, StyleSheet, AsyncStorage, Alert } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    }
})

export default function List() {
    const [techs, setTechs] = useState(["ReactJS", "NodeJS", "React Native"]);

    useEffect(() => {
        AsyncStorage.getItem("user").then(user_id => {
            const socket = socketio('http://lcoalhost:3333', {
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} from ${booking.approved ? "APROVADA" : "REJEITADA"}`)
            })
        });
    }, [])

    useEffect(() => {
        /* AsyncStorage.getItem("techs").then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        }); */
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>
        </SafeAreaView>
    );
}