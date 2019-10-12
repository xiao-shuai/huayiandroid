/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Fragment} from 'react';
import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,ProgressBarAndroid,ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import JPush from 'jpush-react-native';
import  NAVIGSTION from './hua/navigate/navigate'
import {Provider} from 'mobx-react'
import store from './hua/data/index'
import { WebView } from "react-native-webview";
import SplashScreen from 'react-native-splash-screen';
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


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      show:true,
      progress: 0,
    }
}
get_info=()=>{

  fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=android&appid=20914')
  .then(res=>res.json())
  .then(res=>{
    console.log('res11:',res);
     this.setState({
         aa:res.is_wap,
         bb:res.wap_url,
         show:false
     })
  })
  .catch(err=>{
   console.log('err:',err);
   
  })
  }

  componentWillMount(){
    this.get_info()
  }
  componentDidMount(){
    SplashScreen.hide(); //
  }
  render() {

    if(this.state.show){
      return (
          <SafeAreaView style={{flex:1}}>
        <ActivityIndicator  size={'large'} style={{marginTop:200}}/>
          </SafeAreaView>
      )   
    }

    if(this.state.aa==1){
      return(
          <SafeAreaView style={{flex:1}}>
          {
           this.state.progress ==0||this.state.progress<0.5?
          <ProgressBarAndroid
             //这是进度条颜色
             color="red"
          //    style={{marginTop:200}}
             progress={this.state.progress}
             styleAttr={'Horizontal'}
             />
             :
             null
             }

          <WebView source={{uri:this.state.bb}} 
           //设置进度 progress值为0～1
           onLoadProgress={({nativeEvent}) => this.setState(
             {progress: nativeEvent.progress}
         )}                  
          />
          </SafeAreaView>
      )
  }

    return (
      <Provider {...store}>
   <NAVIGSTION />
    </Provider>
    );
  }
}

// const App = () => {
//   return (
//     <Provider {...store}>
//     <NAVIGSTION />
//     </Provider>
//   );
// };

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

// export default App;
