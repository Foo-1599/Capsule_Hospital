import React from 'react';
import { View, Text } from 'react-native';

const CardTypeA = (props) => {
    return (
        <TouchableOpacity style={[styles.card]}>
            {/* <View style={[styles.card]}> */}
            <View style={[styles.column, { alignItems: 'flex-end', paddingRight: 20 }]}>
                <Image style={[styles.image, { width: 50, height: 50 }]} source={props.img} />
                <Text style={[styles.label]}>{props.text}</Text>
            </View>
            {/* </View> */}
        </TouchableOpacity>
    );
};
const CardTypeB = (props) => {
    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: props.cardColor, }]}>
            <View style={{ margin: 10, flexDirection: 'row' }}>

                <View style={[styles.column, { flex: 3, justifyContent: 'space-between' }]}>
                    <Image style={[styles.image, { width: '30%', height: '50%' }]} source={props.img}></Image>
                    <Text style={[styles.lb4]}>{props.subText}</Text>
                    <Text style={[styles.lb1, { color: 'white' }]}>{props.mainState} <Text style={{ fontSize: 12, color: 'white' }}>{props.uom}</Text></Text>
                </View>

                <View style={[styles.column, { flex: 1, alignItems: 'flex-end', justifyContent: 'flex-start' }]}>
                    <Text style={[styles.lb4, { color: 'white', marginTop: 10 }]}>{props.subState}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
};

export { CardTypeA, CardTypeB };

