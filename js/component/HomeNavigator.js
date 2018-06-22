/**
 * Created by liangxingguo on 2018/6/19.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import Home from '../HomePager';
import Person from '../Personal';

export default HomeNavigator = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerTitle: '首页',
            headerRight: (<TouchableHighlight onPress={() => navigation.navigate("Personal")}>
                <Text style={styles.headerRight}>
                    跳转
                </Text>
            </TouchableHighlight>),
            headerLeft: (<View>
                <Text>

                </Text>
            </View>),
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                fontSize: 18,

            },
            headerBackTitle: '首页',
            gesturesEnabled: 'true',
        })
    },
    Personal: {
        screen: Person,
        navigationOptions: ({navigation}) => ({
            headerTitle: "个人中心",
            headerBackTitle: "返回",
            // headerLeft: (<View> <Text style={styles.headerRight}> 返回</Text></View>),
            headerRight: (<View>
                <Text> </Text>
            </View>),
            headerTitleStyle: {
                flex: 1,
                textAlign: 'center',
                fontSize: 18,
            },
        }),

    }
}, {
    //默认显示的界面
    initialRouteName: 'Home',
    cardStack: {
        gesturesEnabled: true,
    },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    headerRight: {
        fontSize: 18,
        padding: 15,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
