import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { hairColors } from '../../../res/style/colors';
import { fontSizes } from '../../../res/style/fontStyle';
import { wp } from '../../../res/style/mixins';
import { BasicText } from '../../atoms/basicText';
import { CharacterFace } from '../CharacterFace';


export const CharacterComponent = ({ name = 'Name', hairColor, onPress=() => {} }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.containerStyle}
		>
			<View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
				<CharacterFace hairColor={hairColor} size={60}/>
			</View>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<BasicText customStyle={styles.nameFont} text={name}/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		height: 100,
		backgroundColor: '#ccc',
		marginHorizontal: 10,
		flexDirection: 'row',
		marginVertical: 10,
		borderRadius: 10,
		justifyContent: 'space-between'
	},
	nameFont: {
		fontWeight:'bold',
		fontSize: fontSizes.name
	}
})
