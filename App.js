/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {store} from './shouhu/config/data'

import JPush from 'jpush-react-native';
import  NAVIGSTION from './hua/navigate/navigate'
import {Provider} from 'mobx-react'
import store from './hua/data/index'

// componentDidMount() {
  JPush.init();
  //连接状态
  this.connectListener = result => {
    console.log("connectListener:" + JSON.stringify(result))
  };
  JPush.addConnectEventListener(this.connectListener);
  //通知回调
  this.notificationListener = result => {
    console.log("notificationListener:" + JSON.stringify(result))
  };
  JPush.addNotificationListener(this.notificationListener);
  //自定义消息回调
  this.customMessageListener = result => {
    console.log("customMessageListener:" + JSON.stringify(result))
  };
  JPush.addCustomMessagegListener(this.customMessageListener);
  //本地通知回调 todo
  this.localNotificationListener = result => {
    console.log("localNotificationListener:" + JSON.stringify(result))
  };
  JPush.addLocalNotificationListener(this.localNotificationListener);
  //tag alias事件回调
  this.tagAliasListener = result => {
    console.log("tagAliasListener:" + JSON.stringify(result))
  };
  JPush.addTagAliasListener(this.tagAliasListener);
  //手机号码事件回调
  this.mobileNumberListener = result => {
    console.log("mobileNumberListener:" + JSON.stringify(result))
  };
  JPush.addMobileNumberListener(this.mobileNumberListener);
// }
console.disableYellowBox=true


const App = () => {
  return (
    <Provider {...store}>
    <NAVIGSTION />
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
