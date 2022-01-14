import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { myIcon } from '../components/myIcon';

class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.headerItem}>
                        <View>
                            <Text style={styles.text}></Text>
                        </View>
                        <View style={styles.headerView}>
                            <Image style={styles.img} source={myIcon.nurse} />
                            <Text>contact nurse</Text>
                        </View>
                    </View>
                </View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'row',
        backgroundColor: 'orange',
        justifyContent: 'flex-end',
        // alignItems: '',
    },
    headerItem: {

    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    text: {
        textAlign: 'right',
        fontSize: 30,
        color: 'black'
    },
    img: {
        height: 50,
        width: 50
    }
})

export default Header;