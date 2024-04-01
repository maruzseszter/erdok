import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { lekerErdok } from './services/erdoService';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export default function App() {
  const [erdok, setErdok] = useState([]);
  useEffect(() => {
    lekerErdok()
    .then(data => {
      console.log(data) 
      setErdok(data);
    })
  }, []);

  return (
    <View style={styles.container}>
      <Text>Erdők</Text>
      <FlatList
        data={erdok}
        renderItem={({item}) => (
          <View style={styles.erdoLista}>
            <Text>Név: {item.nev}</Text>
            <View style={styles.footer}>
              <Text style={styles.meretText}>Méret: {item.meret},</Text>
              <Text style={styles.teruletText}>Terület: {item.terulet}</Text>
            </View>
          </View>
        )}
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
  erdoLista: {
    border: '2px solid #555',
    borderRadius: 8,
    paddingHorizontal:25,
    paddingVertical: 5,
    margin: 5,
    backgroundColor: '#aaa',
  },
  meretText: {
    color: '#fff',
    fontSize: 12,
    },
    teruletText: {
      color: '#fff',
      fontSize: 12,
      marginStart: 3,
    },
    footer: {
      display: 'flex',
      flexDirection: 'row'
    }
});
