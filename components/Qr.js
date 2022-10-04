import { View, StyleSheet, Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

const Qr = () => {
    return ( 
      <View>

        <View style={styles.qrBorder}>
            <QRCode value='https://github.com/FernandoPerera' />
        </View>

        <Text style={styles.qrText}>    Accede a mi {'\n'}GitHub personal</Text>

      </View>
    )
}

const styles = StyleSheet.create ({
    qrBorder : {
        border: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        padding: 7
    },
    qrText: {
        marginTop: 10,
        padding: 4,
        borderColor: 'black',
        borderWidth:2,
        borderRadius: 10,
    }
})

export default Qr