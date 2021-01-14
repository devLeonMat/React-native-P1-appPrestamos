import React, {useState} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";

export default function App() {
    const [capital, setCapital] = useState(null);
    const [interest, setInterest] = useState(null);
    const [months, setMonths] = useState(null);

    const calculate = () => {
        console.log("capital->", capital);
        console.log("interest->", interest);
        console.log("months->", months);
    };

    return (
        <>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.background}/>
                <Text style={styles.titleApp}>Cotizador de prestamos</Text>
                <Form
                    setCapital={setCapital}
                    setInterest={setInterest}
                    setMonths={setMonths}
                />
            </SafeAreaView>
            <View>
                <Text>Resultado</Text>
            </View>
            <Footer calculate={calculate}/>
        </>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        height: 290,
        alignItems: "center"
    },
    background: {
        backgroundColor: colors.PRIMARY_COLOR,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 200,
        width: '100%',
        position: 'absolute',
        zIndex: -1
    },
    titleApp: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15
    }
});
