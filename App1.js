/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Button,
} from 'react-native';
import {
    TabBarBottom,
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import Home from './js/HomePager';
import Person from './js/Personal';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export  default class App1 extends Component<Props> {
    render() {
        return (
            <Navigator/>
        );
    }
}

const TabRouteConfigs = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={{uri: 'ic_launcher'}}
                    selectedImage={{uri: 'ic_launcher'}}
                />
            ),
        }),
    },
    NearBy: {
        screen: Person,
        navigationOptions: {
            tabBarLabel: '附近',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={{uri: 'ic_launcher'}}
                    selectedImage={{uri: 'ic_launcher'}}
                />
            ),
        },
    }
    ,
};
const TabNavigatorConfigs = {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {
        tabBarComponent: TabBarBottom,
    },
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    },
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            headerTitle: '首页',
            headerRight: (<TouchableHighlight onPress={() => navigation.navigate("Personal", {name: '梁兴国'})}>
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
};
const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
};
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
