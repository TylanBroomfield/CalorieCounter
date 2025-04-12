import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FoodInput from '../components/FoodInput';
import { getCalorieEstimate } from '../services/chatgptServices';

export default function HomeScreen() {
  const [entries, setEntries] = useState<{ food: string; calories: string }[]>([]);

  const handleSubmit = async (desc: string) => {
    const calories = await getCalorieEstimate(desc);
    setEntries((prev) => [...prev, { food: desc, calories }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calorie Counter 🔥</Text>
      <FoodInput onSubmit={handleSubmit} />
      <FlatList
        data={entries}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Text>{item.food} → {item.calories}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0fa', // Soft blue
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2a4d69',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  food: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2a4d69',
  },
  calories: {
    fontSize: 16,
    color: '#4b6584',
    marginTop: 4,
  },
});
