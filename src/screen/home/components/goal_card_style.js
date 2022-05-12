import { StyleSheet } from 'react-native';

import colors from "../../../utils/colors";

const labelColors = [
    {bg: '#FFF2E5', txt: '#C57F3F'},
];

export const goalStyles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: colors.get("white"),
        borderRadius: 8,
        padding:12,
        marginVertical:4,
        flex:2,
        flexDirection: "row",
        alignItems: 'flex-start',
    },
    
    icon: {
        width: 36,
        height: 36,
        backgroundColor: colors.get("accentColor"),
        borderRadius: 36,
        marginRight: 12,
    },
    iconWrap: {
        height: '100%',
        flexDirection: "row",
        alignItems: "center",
        flexBasis:'auto',
        flexShrink:1,
    },

    row: {
        flex: 1, 
        flexDirection:'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },

    title: {
        fontSize:14,
        fontWeight: "bold",
        marginBottom:6,
    },
    due: {
        fontSize:11,
        fontWeight: "bold",
        textAlign: "right",
    },
    activity: {
        fontSize:11,
        fontWeight: "bold",
        textAlign: "right",
    },

    label: {
        paddingHorizontal:8,
        paddingVertical:4,
        borderRadius:4,
        marginBottom: 4,
    },
    labelText: {
        fontSize:11,
    },

    progressBar: {
        width: '100%',
        height: 3,
        borderRadius: 3,
        backgroundColor: colors.get('lightGrey'),
        marginBottom:8,
    },

    comment: {
        fontSize:11,
        color: colors.get('greyText'),
    },

    startIcon: {
        width: 26,
        height: 26,
        backgroundColor: colors.get('accentLightColor'),
        borderRadius:4,
        marginLeft: 36,
    },
});

export const labelStyles = StyleSheet.create({
    label1Bg: {
        backgroundColor: labelColors[0].bg,
    },
    label1Txt: {
        color: labelColors[0].txt,
    },
});