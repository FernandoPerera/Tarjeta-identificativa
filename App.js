import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";

/**
 * Usar git y ir generando la documentación en el Readme
 * 
 * No accede al componente de Header
 */

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Header />
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  biographyContainer: {
    flex: 2
  },
  qrContainer: {
    flex: 1
  }
});

export default App;