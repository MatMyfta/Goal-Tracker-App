/**
 * GOAL COMPONENT
 * This file contains all the necessary instructions to create and render an 
 * Goal Component.
 */ 
import React from 'react';
import { Text, View } from 'react-native';

import { goalStyles, labelStyles } from "./goal_card_style";

/** 
 * This interface gives the ability to use the component as a JSX component.
 */ 
// interface Props{
//     id:string;
//     title:string;
//     label:string;
// }
/**
 * The card that represents one single Goal.
 */
const GoalComponent = ({title, label}) => {
    return (
        <View style={[goalStyles.card]}>
            
            <View style={[goalStyles.iconWrap]}>

                <View style={[goalStyles.icon]}>

                </View>

            </View>

            <View style={{flexGrow:1}}>

                <View style={goalStyles.row}>
                    <Text style={[goalStyles.title]}>{title}</Text>
                    <Text style={[goalStyles.due]}>16 Giu 2022</Text>
                </View>

                <View style={goalStyles.row}>
                    <View style={{flex:1,alignItems: 'flex-start',justifyContent: 'flex-start',}}>
                        <View style={[goalStyles.label, labelStyles.label1Bg]}>
                            <Text style={[goalStyles.labelText, labelStyles.label1Txt]}>{label}</Text>
                        </View>
                    </View>
                    <Text style={[goalStyles.activity]}>36:12:56</Text>
                </View>

                <View style={{flexDirection: 'row', flexShrink: 1}}>
                    <View style={{marginTop:8, flexGrow:1}}>
                        <View style={[goalStyles.progressBar]}></View>
                        <Text style={[goalStyles.comment]}>Occorrono <Text style={{fontWeight: 'bold'}}>25h</Text> e <Text style={{fontWeight: 'bold'}}>12min</Text> al giorno</Text>
                    </View>
                    <View style={{height:'100%', justifyContent: 'center'}}>    
                        <View style={goalStyles.startIcon}></View>
                    </View>
                </View>

            </View>


        </View>
    );
}

export default GoalComponent
