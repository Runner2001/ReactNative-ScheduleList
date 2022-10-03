import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ userInput, userInputHandler, addGoalHandler }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Enter Your Goals'
                style={styles.input}
                value={userInput}
                onChangeText={userInputHandler}
            />
            <Button
                title='Add'
                style={styles.Standardbutton}
                onPress={addGoalHandler}
                color='#323232'
            />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderColor: '#323232',
        borderWidth: 1,
        padding: 10,
        width: '80%',
    },
    Standardbutton: {
        paddingHorizontal: 32,
        paddingVertical: 10,
    },
})