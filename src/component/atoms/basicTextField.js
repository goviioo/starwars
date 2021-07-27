import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../res/style/colors';
import { fontSizes } from '../../res/style/fontStyle';

export const BasicTextField = ({value='', placeholder='Placeholder', customStyle={}, onChange=() => {}}) => {
    return(
        <View style={{...styles.containerStyle, ...customStyle}}>
        <TextInput placeholderTextColor={colors.black} placeholder={placeholder} value={value} onChangeText={onChange} style={styles.textStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: fontSizes.normal,
        // backgroundColor: colors.white,
        color:colors.black
    },
    containerStyle: {
        borderRadius:10,
        borderWidth:1,
        borderColor: colors.borderColor,
        backgroundColor: colors.white
    }
})