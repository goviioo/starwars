import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';
import { fontSizes } from '../../res/style/fontStyle';

export const BasicLoader = () => {
    return(
        <Modal>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator color="red" size={40} />
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: fontSizes.normal
    }
})