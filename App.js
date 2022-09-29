import { StyleSheet, Text, View } from 'react-native';

/**
 * Usar git y ir generando la documentación en el Readme
 */

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        
      </View>

      <View style={styles.biographyContainer}>
        
      </View>

      <View style={styles.qrContainer}>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    backgroundColor: 'lightgray',
    flex: 1,
    width: '100%'
  },
  biographyContainer: {
    flex: 2
  },
  qrContainer: {
    flex: 1
  }
});
