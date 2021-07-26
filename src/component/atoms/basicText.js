import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { fontSizes } from '../../res/style/fontStyle';

export const BasicText = ({text='Text', customStyle={}}) => {
    return(
        <Text style={{ ...styles.textStyle,...customStyle,}}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: fontSizes.normal
    }
})