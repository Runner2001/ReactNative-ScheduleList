import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListData = ({ id, title, ondelete }) => {
    return (
        <TouchableOpacity onPress={() => ondelete(id)}>
            <Text style={styles.list}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ListData;

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 10,
        paddingVertical: 16,
        backgroundColor: '#f5f5f5',
        marginVertical: 4,
        borderRadius: 8,
        width: '100%'
    }
})