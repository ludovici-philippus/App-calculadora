import {Text, TouchableOpacity} from "react-native";

export default function Botao(props){
    return(
        <TouchableOpacity onPress={() => props.logicaCalculadora(props.num)} style={{borderColor: 'white', borderWidth: 1, width: '33.3%', paddingVertical: 22, justifyContent: 'center'}}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 24}}>{props.num}</Text>
        </TouchableOpacity>	
    );
}
