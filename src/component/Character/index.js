import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const CharacterComponent = () => {
	return (
		<View key=""
			style={styles.containerStyle}
		>
			<Text>Starwars Home</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		height: 100,
		backgroundColor: '#ccc',
		marginHorizontal: 10,
		flexDirection: 'row',
		alignSelf: 'stretch',
		marginVertical: 10,
		borderRadius:10
	}
})
