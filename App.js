import { StyleSheet, Text, View } from 'react-native';

import ContactsScreen from './src/screens/ContactsScreen';
import Header from './src/components/Header';


export default function App() {
  return (
     <View style={styles.container} >
       <Header />
       <ContactsScreen />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'#0070aa',
      paddingTop:40
   }
});
