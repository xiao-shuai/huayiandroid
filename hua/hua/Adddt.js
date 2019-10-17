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
    SafeAreaView,Alert,Linking
} from 'react-native'
// import {qq} from '../global/ju'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Swiper from 'react-native-swiper'
import {Button,Input,Overlay} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { NavigationActions } from 'react-navigation';
import {hua} from '../sty/sty'
import ImagePicker from 'react-native-image-picker';

class Adddt extends Component {
    constructor(props){
     super(props)
     this.state={
        iscover:false
     }
     this.option={

        title: '选择图片',
        
        cancelButtonTitle: '返回',
        
        takePhotoButtonTitle:'拍照',
        
        chooseFromLibraryButtonTitle:'相册',
        
        allowsEditing:true,
        
        quality: 0.8,
        
        noData: false,
        
        storageOptions: {
        
        skipBackup: true,
        
        path: 'images'
        
        }
        
        }
    }
    choosePicker = () => {
        ImagePicker.showImagePicker(this.option, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            console.log('source--!!')
            let source = response.uri;
            // this.props.oneStore.change_tx(source)
            this.setState({
              iscover: true,
              fm:source,
            })
          }
        });
      }

    sub=()=>{
      if(this.state.con==undefined){
        Alert.alert('提示','请输入要发布的内容',[{'text':'ok'}])
      }else{
        Alert.alert('提示','分享成功, 高质量的图片我们会优先展示',[{'text':'知道了'}])
        fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/find')
        .then(res=>res.json())
        .then(res=>{})
        .catch(err=>{})
      }
    }  
    render(){
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,flex:1,padding:20}}>
             <TextInput style={{width:'100%',height:hua.hua_h*.2}} multiline={true} placeholder='这里写分享内容哦'
               onChangeText={(con)=>{
                this.setState({con})
               }}
             />

             <TouchableOpacity onPress={()=>{
                 this.choosePicker()
             }}>
                 {
                     this.state.iscover?
                     <Image source={{uri:this.state.fm}} style={{width:hua.hua_w*.3,height:hua.hua_w*.3,marginTop:20}}/>
                     :
                     <Image source={require('../img/add.png')} style={{width:hua.hua_w*.3,height:hua.hua_w*.3,marginTop:20}}/>
                 }
            
             </TouchableOpacity>
             
             <Button title='马上发布' buttonStyle={{backgroundColor:hua.hua_theme,marginTop:20}} 
              onPress={()=>{
                this.sub()
              }}
             />
            </View>
            </SafeAreaView>
        )
    }
}
export default Adddt