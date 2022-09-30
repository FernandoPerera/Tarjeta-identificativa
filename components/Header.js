import { Text, View, StyleSheet, Image } from "react-native";

const Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Image style={styles.imagenUsuario} source={require('../images/fotoUsuario.jpg')}/>
            <Text style={styles.nombreUsuario}>Fernando Ándres Perera Oropeza</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
      },
    nombreUsuario: {
        color: 'white',
        fontSize:'29',
        fontFamily: 'Calibri',
        flex: 3
    },
    imagenUsuario: {
        height: 92,
        width: 92,
        borderStyle: 'solid',
        borderWidth: '3',
        borderColor: 'black',
        borderRadius: '50%',
        flex: 1,
        margin: 20
    }
})

export default Header