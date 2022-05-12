import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screen/home/home'
import CreateGoal from '../screen/goal/create_goal'
import colors from '../utils/colors'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 24,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: colors.get("white"),
                borderRadius: 15,
                height: 90,
            }
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Goal" component={CreateGoal} />
        </Tab.Navigator>
    );
}

export default Tabs
