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
    SafeAreaView,Alert,Linking,Modal
} from 'react-native'
// import {qq} from '../global/ju'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Swiper from 'react-native-swiper'
import {Button,Input,Overlay} from 'react-native-elements'
// import MapView from 'react-native-maps'
// import { NavigationActions } from 'react-navigation';
import {hua} from '../sty/sty'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {inject,observer} from 'mobx-react'
import ImageViewer from 'react-native-image-zoom-viewer';
@inject(["mbx"])
@observer // 监听当前组件
class Dtxq extends Component{
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  };
    constructor(props){
         super(props)
         this.state={
         
         }
    }

  sc=(e)=>{
    this.props.mbx.shou(e)
  }  
    render(){
       const dt=this.props.mbx.dt
       const info=this.props.navigation.getParam('info')
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
           <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,flex:1,height:'100%'}}>
            <ScrollView style={{padding:20,}}>
                <View style={{backgroundColor:'white',padding:10,borderRadius:10}}>
               <Text style={{fontSize:18,fontWeight:'500'}}>{info.tit}</Text>
               <Text style={{color:hua.hua_hui,lineHeight:20,letterSpacing:1,marginTop:20}}>
               {info.con}
               </Text>
        <Image source={{uri:info.img}} style={{width:'100%',height:hua.hua_h*.2,marginTop:20}}/>
        <Text style={{color:hua.hua_hui,lineHeight:20,letterSpacing:1,marginTop:20}}>
        为了纪念我第一次在荷花盆里养大的花，它很美，不是荷花的水滴形花瓣，还有长长的花瓣，有点像睡莲，不知是什么样的品种，从泡泡到现在。十天，如此之快，又有两盆叶子，却一点动静也没有。
        第一盆花买来的时候，我买了营养土和花盆，然后就种了。然后我就查了百度百科，还有很多贴吧什么的，去求教经验
        但找出来的经验大同小异：浇水一次性浇透，然后见干浇水。然后如果叶子黄了就施肥，什么硫酸亚铁，什么磷酸二氢钾，还有很多的书面化比配浓度。
               </Text>
               </View>
            </ScrollView>

           </View>
        </SafeAreaView>
        )
    }
}
export default Dtxq
const styles=StyleSheet.create({
    shang_v:{
     width:hua.hua_w,height:hua.hua_h*.12,
     backgroundColor:hua.hua_theme,flexDirection:'row',
     alignItems:'center',
     padding:20
    },
    zj:{
     fontSize:20,fontWeight:'500',color:'white',marginLeft:'20%'
    },
 })