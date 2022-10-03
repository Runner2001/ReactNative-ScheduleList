import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ setUserInput, userInput, userInputHandler, addGoalHandler }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Enter Your Goals'
                style={styles.input}
                value={userInput}
                onChangeText={userInputHandler}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title='Clear'
                        color='red'
                        styles={styles.Standardbutton}
                        onPress={() => setUserInput("")}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Add'
                        style={styles.Standardbutton}
                        onPress={addGoalHandler}
                    />
                </View>
            </View>
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        borderColor: '#323232',
        borderWidth: 1,
        padding: 10,
        width: '100%',
    },
    Standardbutton: {
        width: '50%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        width: '100%'
    },
    button: {
        width: '48%',
    }
})