import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, RadioButtons } from 'react-native';
import Form from 'react-native-form'

import { styles } from './create_goal_style'

const CreateGoal = () => {
    return(
        <View style={styles.container}>
            <TextInput placeholder="Goal name" style={styles.textinput}/>
            <TextInput placeholder="Label" style={styles.textinput} />

            <View style={styles.buttons_view}>
                <TouchableOpacity
                    onPress={() => Alert.alert('Cancel button pressed')}
                    style={[styles.button, styles.button_cancel]}>
                    <Text style={styles.button_text}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Alert.alert('Right TouchableOpacity pressed')}
                    style={[styles.button, styles.button_submit]}>
                    <Text style={styles.button_text}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CreateGoal;