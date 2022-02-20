import {View, Text, StyleSheet} from 'react-native';

function Header(props){
    return(
        <View style={styles.Header}>
            <Text style={{fontSize: 40, color: 'white'}}>{props.stringMath}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Header:{
        paddingVertical: 15,
        paddingHorizontal: '2%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        justifyContent: 'center',
        height: '30%'
    }
});

export default Header;
