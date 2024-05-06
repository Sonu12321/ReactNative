import React from "react";
import { Text, View,StyleSheet,useColorScheme,SafeAreaView} from 'react-native'

function Apppro():JSX.Element{
const isdarkmode = useColorScheme() === 'light'

    return (
        <View style={styles.constainer}>
            <Text style={isdarkmode ? styles.whitetext : styles.whitetext }>hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whitetext: {
        color:'#FFFFFF'
    },
    darkmode: {
        color:'#000000'
    }

})


export default Apppro;