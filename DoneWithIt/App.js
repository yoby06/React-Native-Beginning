import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback ,StyleSheet, Text, View , SafeAreaView, Image, TouchableOpacity,TouchableHighlight,Alert,Button} from 'react-native';

export default function App() {  

  return (  
    <SafeAreaView style={{backgroundColor:"orange"}}>
      <Button 
      title="Click Me" onPress={() => Alert.prompt("My Title","My Message",text => console.log(text))}/> 
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center"
  },
});
