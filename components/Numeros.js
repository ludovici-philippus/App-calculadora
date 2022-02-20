import {View} from 'react-native';

import Botao from './Botao';

function Numeros({numeros, logicaCalc}){
    return(
        <View style={{flexDirection: 'row', flexWrap: 'wrap', borderTopColor: 'black', borderTopWidth: 2}}>
        {
            numeros.map((val) => {
                return (<Botao logicaCalculadora={logicaCalc} num={val}/>)
            })
        }
        </View>
    );
}

export default Numeros;
