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
        To commemorate the first flower that I first raised in the bowl of lotus, it is beautiful, not the drop-shaped petals of the lotus, and the long petals, a bit like a water lily, I don’t know what kind of variety, from the bubble to the present. Ten days, so fast, there are two more pots and leaves, but there is no movement at all.
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