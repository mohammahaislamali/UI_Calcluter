import React from 'react';
import {
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    View,
} from 'react-native';
import colors from '../../constanst/colors';
import { globalStyle } from '../../constanst/globalStyle';

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
const FormContainer = ({
    children,
    backgroundColor = colors.white,
    style = {},
}) => {
    return (
        <View
            style={{
                flex: 1,
                ...globalStyle.container(backgroundColor)
            }}>
            <KeyboardAvoidingView
                style={globalStyle.container(backgroundColor)}
                behavior={behavior}>
                <ScrollView style={[globalStyle.container(backgroundColor)]}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default FormContainer;
