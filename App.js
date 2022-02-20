import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react'
import Header from './components/Header';
import Numeros from './components/Numeros';
import Sinais from './components/Sinais';

export default function App() {
    const [stringMath, setStringMath] = useState("0");
    var numeros = [];
    for(let i=9; i>=0; i--){
        numeros.push(i);
    }
    numeros.push("AC");

    function logicaCalculadora(n){
        if(stringMath == "0"){
            setStringMath(n);
        }else{
            if(n == '=')
                setStringMath(eval(stringMath));
            else if(n == "AC")
                setStringMath(stringMath.slice(0, -1));
            else
                setStringMath(stringMath.toString() + n.toString());
        }
    }

    return (
        <View style={styles.container}>
            <Header stringMath={stringMath}/>
            <Sinais logicaCalculadora={logicaCalculadora}/>
            <Numeros logicaCalc={logicaCalculadora} numeros={numeros}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
});
