/**
 * Created by liangxingguo on 2018/6/19.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Personal extends Component {

    static navigationOptions = {
        title: "个人中心",
        flex:1,
        textAlign:'center',
        fontSize:15,
        headerRight:(<Text>跳转</Text>)
    };


    render() {
        return (
            <View style={styles.container}>
                <Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            flex: 1,
        }
    }
);