import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const ErrorComponent = () => {
	return (
		<View key=""
			style={styles.containerStyle}
		>
			<Text>Error</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		height: 100,
		marginHorizontal: 10,
		flexDirection: 'row',
		alignSelf: 'stretch',
		marginVertical: 10,
		borderRadius:10,
        borderColor:'red'
	}
})
