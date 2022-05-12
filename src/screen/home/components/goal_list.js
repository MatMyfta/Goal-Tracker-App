import React from 'react';
import { FlatList } from "react-native";

import Goal from "../../../data/model/goal";
import GoalComponent from "./goal_card";

// Provisory list of activities.
// TODO: remove this list and read them from storage.
const GoalsList = [
    new Goal("1","Fisica",["Università"]),
    new Goal("2","Flessioni",["Training"]),
    new Goal("3","Flessioni",["Training"]),
    new Goal("4","Flessioni",["Training"]),
    new Goal("5","Flessioni",["Training"]),
    new Goal("6","Flessioni",["Training"]),
];

/**
 * @param data: the user goal.
 * @returns: the Card for a single goal.
 */
function renderRow(data) {
    return (
        <GoalComponent
            title={data.title}
            label={data.label[0]}
        />
    );
}

/**
 * Function that creates a list of Cards of multiple user activities.
 * @returns: FlatList containing GoalComponent objects.
 */
const GoalList = () => {
    return(
        <FlatList
            data={GoalsList}
            renderItem={({item}) => renderRow(item)}
            keyExtractor={(item) => item.id}
            scrollEnabled
        />
    );
}

export default GoalList
