import React from 'react';
import { View } from 'react-native';
import { hp, wp } from '../../../res/style/mixins';
import { BasicText } from '../../atoms/basicText';
export const BasicHeader = ({ children = null }) => {
    return (
        <View style={{ height: hp(10), width: wp(100), backgroundColor: 'red' }}>
            <BasicText text="Header home" />
        </View>
    )
}