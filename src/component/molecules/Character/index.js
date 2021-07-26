import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { hairColors } from '../../../res/style/colors';
import { fontSizes } from '../../../res/style/fontStyle';
import { wp } from '../../../res/style/mixins';
import { BasicText } from '../../atoms/basicText';


export const CharacterComponent = ({ name = 'Name', hairColor }) => {
	console.log(hairColor)
	return (
		<View
			style={styles.containerStyle}
		>
			<View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
				<View style={styles.face}>
					<View style={[styles.hair, {backgroundColor: hairColors[hairColor]||'#000'}]}>
					</View>
				</View>
			</View>
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<BasicText customStyle={styles.nameFont} text={name}/>
			</View>
		</View>
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
	hair: { position: 'absolute', width: 60, height: 20, borderTopRightRadius: 30, borderTopLeftRadius: 30 },
	face:{ width: 60, height: 60, backgroundColor: '#fff', borderRadius: 30 },
	nameFont: {
		fontWeight:'bold',
		fontSize: fontSizes.name
	}
})
