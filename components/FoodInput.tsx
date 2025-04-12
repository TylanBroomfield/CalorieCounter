import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

type Props = {
  onSubmit: (desc: string) => void;
};

export default function FoodInput({ onSubmit }: Props) {
  const [input, setInput] = useState('');

  const handlePress = () => {
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="e.g. Chicken wrap and smoothie"
        style={styles.input}
        placeholderTextColor="#a0a0a0"
      />
      <Button title="Estimate Calories" onPress={handlePress} color="#2a4d69" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 14,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
