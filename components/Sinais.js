import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Sinais(props){
    return(
        <View style={{flexDirection: 'row', marginBottom: 10, height: '13.6%'}}>
            <TouchableOpacity onPress={() => props.logicaCalculadora('+')} style={styles.sinalSingle}><Text style={styles.textSingle}>+</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => props.logicaCalculadora('-')} style={styles.sinalSingle}><Text style={styles.textSingle}>-</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => props.logicaCalculadora('*')} style={styles.sinalSingle}><Text style={styles.textSingle}>*</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => props.logicaCalculadora('/')} style={styles.sinalSingle}><Text style={styles.textSingle}>/</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => props.logicaCalculadora('=')} style={styles.sinalSingle}><Text style={styles.textSingle}>=</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    sinalSingle: {	
        backgroundColor: '#333',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: 'white',
        borderRightWidth: 1
    },
    textSingle: {
        fontSize: 24,
        color: 'white'
    }
});
