import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView } from 'react-native';
import FAB from './components/FAB';
import { useCounter } from './components/UseCounter';

export default function App() {
  const { count, onPress, onLongPress } = useCounter();
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    setHistory((prev) => [...prev, count]);
  }, [count]);

  const incrementar = () => {
    if (count < 20) {
      onPress();
    }
  };

  const CrearBotonAlertRESET = () =>
  Alert.alert('Resetear', 'Acaso deseas resetear el contador de casualidad?', [
    {
      text: 'Confirmar',
      onPress: () => {
        onLongPress();
        setHistory([]);
      },
      style: 'cancel',
    },
  ]);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.textHuge}>{count}</Text>
      <Text style={{ color: '#FFFF' }}>Valor actual: {count}</Text>
      <Text style={{ color: '#FFFF', fontSize: 18, marginBottom: 5 }}>
        Historial de valores:
      </Text>
      <ScrollView
        style={{ maxHeight: 150, marginBottom: 20 }}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {history.map((val, index) => (
          <Text key={index} style={{ color: '#aaa' }}>
            {index + 1}. {val}
          </Text>
        ))}
      </ScrollView>

      <FAB
        label="+1"
        position="right"
        color="blue"
        backgroundColor='#3f00d3ff'
        onPress={onPress}
        onLongPress={onLongPress}
      />

      <FAB
        label="reset"
        position="left"
        color="red"
        backgroundColor='#e21111ff'
        onPress={() => {
          CrearBotonAlertRESET
          setHistory([]);
        }}
        onLongPress={CrearBotonAlertRESET}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000ff",
  },
  textHuge: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#FFFF",
  },
  redColor: {
    color: "#e40000ff"
  }

});
