import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import GoalList from './components/goal_list';
import { styles } from './home_style'

/**
 * Screen component for the home page, this should contain all the information
 * of the application in a structured manner, in order to give to the user 
 * a resume of the goals.
 */
const Home = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.listHead}>
                <Text style={styles.listTitle}>I tuoi obiettivi</Text>
                <View style={styles.listTitleIcon}></View>
            </View>
            <GoalList/>
        </SafeAreaView>
        
    );
}

export default Home
