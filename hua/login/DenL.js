import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,Alert,Linking,Modal,ImageBackground
} from 'react-native'
// import {qq} from '../global/ju'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,Input,Overlay,ButtonGroup} from 'react-native-elements'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {inject,observer} from 'mobx-react'
import {hua} from '../sty/sty'
import AntDesign from 'react-native-vector-icons/AntDesign'
@inject(["mbx"])
@observer // 监听当前组件
class DenL extends Component{
    constructor(props){
      super(props)
      this.state={
        selectedIndex: 0,
      }
      this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
    }
   
 login=()=>{
   if(this.state.user==undefined){
     Alert.alert('提示','请输入你的账户.',
     [{'text':'好的'}])
   }else if(this.state.pwd==undefined){
    Alert.alert('提示','请输入你的密码',
    [{'text':'好的'}])
   } else{
     AsyncStorage.setItem('aa','ok')
     this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Hua' })], 0)
     fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/login',{method:'POST'})
     .then(res=>res.json())
     .then(res=>{})
     .catch(err=>{})
   }
 }   
 regg=()=>{
   if(this.state.user2==undefined){
    Alert.alert('提示','请输入账户',
    [{'text':'知道了'}])
   }else if(this.state.pwd2!==this.state.pwd3){
    Alert.alert('提示','两次密码不一样',
    [{'text':'知道了'}])
   }else if (this.state.pwd2==undefined){
    Alert.alert('提示','请输入你的密码',
    [{'text':'知道了'}])
   }else {
    AsyncStorage.setItem('aa','ok')
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Hua' })], 0)
    fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/login',{method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(err=>{})
   }
 }

    render(){
      const buttons = ['登录', '注册']
  const { selectedIndex } = this.state

        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}> 

               <ImageBackground source={require('../img/dlimg.png')} style={{
                 width:hua.hua_w,height:hua.hua_h*.3,alignItems:'center',justifyContent:'center'
               }} resizeMode='stretch'>
                 <Image source={require('../img/logo.png')} 
                  style={{width:80,height:80,borderRadius:40,}}
               />
               </ImageBackground>

              <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center',width:hua.hua_w}}>
              <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: hua.hua_h*.05}}
      selectedButtonStyle={{backgroundColor:hua.hua_theme}}
    />
    {
    selectedIndex==0?
    <View style={{alignItems:'center'}}>
   <Input placeholder='请输入姓名' containerStyle={{
     width:hua.hua_w,marginTop:20,
   }} inputContainerStyle={{borderBottomColor:hua.hua_bg}} 
     leftIcon={
      <EvilIcons name={'user'} style={{fontSize:30,color:hua.hua_hui}}/>
     }
      inputStyle={{marginLeft:10}}
      leftIconContainerStyle={{width:'10%'}}
      onChangeText={(user)=>{
       this.setState({user})
      }}
   />
   <Input placeholder='请输入密码' 
   secureTextEntry={true}
   containerStyle={{
     width:hua.hua_w,marginTop:20,
   }} inputContainerStyle={{borderBottomColor:hua.hua_bg}} 
     leftIcon={
      <AntDesign name={'Safety'} style={{fontSize:25,color:hua.hua_hui}}/>
     }
     leftIconContainerStyle={{width:'10%'}}
      inputStyle={{marginLeft:10}}
      onChangeText={(pwd)=>{
       this.setState({pwd})
      }}
   />
   <Button buttonStyle={{width:hua.hua_w*.9,marginTop:30,backgroundColor:hua.hua_theme}} 
   title='登录' onPress={()=>{this.login()}}/>
   
   <TouchableOpacity onPress={()=>{
    //  Linking.openURL('https://shimo.im/docs/96GPtYqXgQX3tyxQ')
    this.props.navigation.navigate('Page')
   }} style={{marginTop:30,alignItems:'center'}}>
  <Text style={{color:hua.hua_hui}}>登录代表你同意《花艺隐私政策》</Text>
   </TouchableOpacity>
   
    </View>
    :
    <View style={{alignItems:'center'}}>
<Input placeholder='请输入账号' containerStyle={{
     width:hua.hua_w,marginTop:20,
   }} inputContainerStyle={{borderBottomColor:hua.hua_bg}} 
     leftIcon={
      <EvilIcons name={'user'} style={{fontSize:30,color:hua.hua_hui}}/>
     }
      inputStyle={{marginLeft:10}}
      leftIconContainerStyle={{width:'10%'}}
      onChangeText={(user2)=>{
       this.setState({user2})
      }}
   />
   <Input placeholder='请输入你的密码' 
   secureTextEntry={true}
   containerStyle={{
     width:hua.hua_w,marginTop:20,
   }} inputContainerStyle={{borderBottomColor:hua.hua_bg}} 
     leftIcon={
      <AntDesign name={'Safety'} style={{fontSize:25,color:hua.hua_hui}}/>
     }
     leftIconContainerStyle={{width:'10%'}}
      inputStyle={{marginLeft:10}}
      onChangeText={(pwd2)=>{
       this.setState({pwd2})
      }}
   />
    <Input placeholder='确认密码' 
     secureTextEntry={true}
    containerStyle={{
     width:hua.hua_w,marginTop:20,
   }} inputContainerStyle={{borderBottomColor:hua.hua_bg}} 
     leftIcon={
      <AntDesign name={'Safety'} style={{fontSize:25,color:hua.hua_hui}}/>
     }
     leftIconContainerStyle={{width:'10%'}}
      inputStyle={{marginLeft:10}}
      onChangeText={(pwd3)=>{
       this.setState({pwd3})
      }}
   />
   <Button buttonStyle={{width:hua.hua_w*.9,marginTop:30,backgroundColor:hua.hua_theme}} 
   title='注册' onPress={()=>{
     this.regg()
   }}/>
   
   <TouchableOpacity onPress={()=>{
    //  Linking.openURL('https://shimo.im/docs/96GPtYqXgQX3tyxQ')
    this.props.navigation.navigate('Page')
   }} style={{marginTop:30,alignItems:'center'}}>
  <Text style={{color:hua.hua_hui}}>登录代表你同意《花艺隐私政策》</Text>
   </TouchableOpacity>
   
    </View>
    }
              </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}
export default DenL