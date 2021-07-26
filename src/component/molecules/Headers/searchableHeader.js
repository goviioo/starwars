import React from 'react';
import { StyleSheet, View } from 'react-native';
import { onChange } from 'react-native-reanimated';
import { colors } from '../../../res/style/colors';
import { fontSizes } from '../../../res/style/fontStyle';
import { hp, wp } from '../../../res/style/mixins';
import { BasicText } from '../../atoms/basicText';
import { BasicTextField } from '../../atoms/basicTextField';
export const SearchHeader = ({ onChange }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><BasicText customStyle={{ fontWeight: 'bold', fontSize: fontSizes.title }} text={"STAR WARS"} /></View>
            <BasicTextField onChange={onChange} customStyle={{ width: '95%', marginVertical:10 }} placeholder="Search" />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: { height: hp(20), width: wp(100), backgroundColor: colors.white, elevation: 1, marginBottom: 30, justifyContent: 'center', alignItems: 'center' }
})