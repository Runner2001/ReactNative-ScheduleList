import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import GoalInput from './components/goalinput.com';
import ListData from './components/listdata.com';

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [allGoal, setAllGoal] = useState([]);

  const userInputHandler = (data) => {
    setUserInput(data);
  }

  const addGoalHandler = () => {
    setAllGoal(current => [...current, { id: allGoal.length, text: userInput }])
  }

  const removeGoalHandler = goalId => {
    setAllGoal(current => {
      return current.filter(item => item.id !== goalId)
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <GoalInput userInput={userInput} userInputHandler={userInputHandler} addGoalHandler={addGoalHandler} />
        <View style={styles.listData}>
          {allGoal.length !== 0 ? <Text style={{ fontSize: 18, marginBottom: 8, fontWeight: '500' }}>Your Goals</Text> : ""}
          {allGoal.map(data => <ListData key={data.id} id={data.id} ondelete={removeGoalHandler} title={data.text} />)}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  listData: {
    marginTop: 32
  },
});
