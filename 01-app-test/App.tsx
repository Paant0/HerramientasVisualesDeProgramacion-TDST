import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      {/* <FAB
        label="+1"
        onPress={() => {if (count < 20) setCount(count + 1);
      }}
      onLongPress={() => {
        if (count < 20) setCount(count + 1);
      }}
      position="right"
      color="#0400ffff"
      /> */}
      <FAB
        label="reset"
        onPress={() => setCount(0)}
        onLongPress={() => setCount(0)}
        position="left"
        color="red"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#000",
  },
  redColor:{
    color:"#e40000ff"
  }

});
