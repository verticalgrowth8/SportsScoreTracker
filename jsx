// App.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, marginBottom: 20 }}>Sports Score Tracker</Text>
      <Text style={{ fontSize: 48, fontWeight: 'bold' }}>{score}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Increase Score" onPress={increaseScore} />
        <Button title="Decrease Score" onPress={decreaseScore} />
      </View>
    </View>
  );
};

export default App;
