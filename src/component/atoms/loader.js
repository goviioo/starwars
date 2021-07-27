import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../res/style/colors';
import { fontSizes } from '../../res/style/fontStyle';

export const BasicLoader = () => {
    return (
        <Modal>
            <View style={styles.loaderCont}>
                <ActivityIndicator color={colors.primary} size={40} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: fontSizes.normal
    },
    loaderCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})