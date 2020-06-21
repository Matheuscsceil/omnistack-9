import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import api from '../services/api';
import { Alert } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    label: {
        fontWeight: 'bold',
        color: "#444",
        marginBottom: 8,
        marginTop: 30
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#444",
        height: 44,
        marginBottom: 20,
        borderRadius: 5
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    cancellButton: {
        height: 42,
        backgroundColor: '#CCC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default function Book({ route, navigation }) {
    const id = route.params.id;
    const [date, setDate] = useState('');

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem("user");
        api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        });

        Alert.alert('Solicitação enviada!');
        navigation.goBack();
    }

    async function handleCancel() {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <Text>Text style={styles.label}>Data de interesse *</Text>
            <TextInput
                style={styles.input}
                placeholder="Qual data você quer reservar ?"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
\
            <TouchableOpacity onPress={handleCancel} style={styles.cancellButton}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
        </SafeAreaView >
    );
}
