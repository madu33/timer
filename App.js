import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const screen = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light-content" />
      <TouchableOpacity onPress={()=> null} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderRadius:100,
    borderWidth:10,
    borderColor:'#A52A2A',
    width:screen.width/2,
    height:screen.width/2,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:45,
    fontWeight:'bold',
    color: '#800000',
  }
});
