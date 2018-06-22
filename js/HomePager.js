/**
 * Created by liangxingguo on 2018/6/19.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TouchableHighlight,
    Dimensions,
} from 'react-native';

export default class HomePager extends Component {

    static navigationOptions = {
        headerTitle: '开出来',
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [{title: '定期理财', desc: '万元起购 稳健理财'},
                {title: '活期理财', desc: '千元起购 随存随取'},
                {title: '定期理财', desc: '万元起购 稳健理财'},
                {title: '定期理财', desc: '万元起购 稳健理财'},]

        }
    }

    render() {
        return (
            <View style={styles.container3}>
                <View style={styles.container2}>
                    <Image style={styles.image} resizeMode='contain'
                           source={require('../images/banner_default_main.png')}/>
                </View>
                <View style={styles.flatlist}>
                    <FlatList
                        style={{flex: 1}}
                        data={this.state.data}
                        renderItem={({item}) =>
                            <TouchableHighlight onPress={() => {
                                this.props.navigation.navigate('Personal')
                            }}
                                                underlayColor='#eeeeee'
                            >
                                <View style={styles.flatlistItem1}>
                                    <View style={styles.flatlistItem2}>
                                        <Text style={{marginBottom: 6, color: '#bfa160'}}>
                                            {item.title}
                                        </Text>
                                        <Text>
                                            {item.desc}
                                        </Text>
                                    </View>

                                    <Image
                                        style={{width: 45, height: 45, marginLeft: 5, marginRight: 6}}
                                        source={require('../images/icon1_vision_item.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                            </TouchableHighlight>}
                        numColumns={2}
                        ItemSeparatorComponent={() => <Text style={{height: 1, backgroundColor: '#666666'}}/>}
                    >
                    </FlatList>

                </View>

                <View style={{
                    flexDirection: 'column', backgroundColor: 'white', marginTop: 10,
                    marginLeft: 0,
                    marginRight: 0,
                    width: Dimensions.get('window').width,
                }}>
                    <Text style={{textAlign: 'center', marginBottom: 5, marginLeft: 0, marginRight: 0}}>
                        活期理财
                    </Text>
                    <Text style={{
                        textAlign: 'center',
                        marginBottom: 8,
                        color: '#bfa160',
                        fontSize: 29,
                        marginLeft: 0,
                        marginRight: 0,
                    }}>
                        7.9%
                    </Text>
                    <Text style={{textAlign: 'center', marginBottom: 5, marginLeft: 0, marginRight: 0}}>
                        起投金融1000元 | 新手专享14天
                    </Text>

                </View>


                <TouchableOpacity style={[styles.button]} activeOpacity={0.5} onPress={
                    () => {
                        this.props.navigation.navigate('Personal')
                    }
                }>
                    <Text style={{color: 'white'}}>首页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container3: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    container2: {
        height: 150,
    },
    image: {
        borderRadius: 10,
        flex: 1,
        marginTop: 5,
        marginBottom: 10,
        width: Dimensions.get('window').width,
    },
    flatlist: {
        height: 130,
        backgroundColor: 'white',
    },
    flatlistItem1: {
        flexDirection: 'row',
        paddingTop: 10,
        // paddingLeft: 6,
        paddingBottom: 10,
    },
    flatlistItem2: {
        flexDirection: 'column',

    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#4398ff',
        marginTop: 30,

    }
});