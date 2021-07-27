import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../res/style/colors';
import { hp, wp } from '../../../res/style/mixins';
import { BasicTextField } from '../../atoms/basicTextField';
export const SearchHeader = ({ onChange, value }) => {
    return (
        <View style={styles.headerContainer}>
            <BasicTextField value={value} onChange={onChange} customStyle={{ width: '95%', marginVertical:10 }} placeholder="Search" />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: { height: hp(10), width: wp(100), backgroundColor: colors.primary, elevation: 1, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }
})