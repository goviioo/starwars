import React from 'react';
import { StyleSheet, View } from 'react-native';
import { hairColors } from '../../../res/style/colors';

export const CharacterFace = ({ hairColor, size = 60 }) => {
    return (
        <View style={[styles.face, { width: size, height: size, borderRadius: size / 2 }]}>
            <View style={[styles.hair,
            {
                backgroundColor: hairColors[hairColor] || '#000', width: size, height: size / 3,
                borderTopRightRadius: size / 2, borderTopLeftRadius: size / 2
            }]}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    hair: { position: 'absolute' },
    face: { backgroundColor: '#fff' },
})