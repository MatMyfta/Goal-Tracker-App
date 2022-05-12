import { StyleSheet, StatusBar } from 'react-native';

import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"90%",
      marginHorizontal: "5%",
    },
    listHead: {
        marginVertical:12,
        paddingHorizontal: 8,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listTitle: {
        fontWeight: "bold",
        fontSize:14,
        color: colors.get("mainTextColor"),
    },
    listTitleIcon: {
        width: 26,
        height: 26,
        borderRadius: 3,
        backgroundColor: colors.get("opaqueColor"),
    }
});
