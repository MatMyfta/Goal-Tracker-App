import { StyleSheet } from 'react-native';

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    textinput: {
        backgroundColor: colors.get('white'),
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.get('lightGrey'),
        marginHorizontal: 12,
        marginVertical: 6,
        paddingHorizontal: 12,
    },
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    buttons_view: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        margin: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    button_text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button_cancel: {
        backgroundColor: colors.get('red')
    },
    button_submit: {
        backgroundColor: colors.get('accentLightColor')
    },
})