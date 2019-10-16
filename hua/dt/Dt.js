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
class Dt extends Component{
  static navigationOptions = {
    title: '动态',
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
          show:false,
          show_img:undefined
         }
    }

  sc=(e)=>{
    this.props.mbx.shou(e)
  }  
  login_page=()=>{
    Alert.alert('提示','你还没有登录',[{'text':'稍后'},{'text':'去登录',onPress:()=>{
      this.props.navigation.navigate('DenL')
    }}])
  }
  componentDidMount(){
    fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/dongtai')
  .then(res=>res.json())
  .then(res=>{})
  .catch(err=>{})
   }
    render(){
       const dt=this.props.mbx.dt
       const login=this.props.mbx.login
       const images = [{
        // Simplest usage.
        url: this.state.show_img,
     
        // width: number
        // height: number
        // Optional, if you know the image size, you can set the optimization performance
     
        // You can pass props to <Image />.
        props: {
            // headers: ...
        }
    }, 
  ]
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
           <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,flex:1,height:'100%'}}>
           <View style={styles.shang_v}>
              <Button title='发布' 
              buttonStyle={{
                  backgroundColor:'white',
                  width:hua.hua_w*.2
                  }} 
                  titleStyle={{color:hua.hua_theme,}} 
                  onPress={()=>{
                 login?   this.props.navigation.navigate('Adddt'):this.login_page()
                  }}
                  />
                <View style={{width:hua.hua_w*.2,alignItems:'center'}}>
                <Text style={styles.zj}>动态</Text>
                  </View>  
               <View style={{width:hua.hua_w*.2}}>

               </View>
               
               
             </View>
               <ScrollView contentContainerStyle={{
                 width:'100%',
                 padding:20
                 }}>
                 {
                   dt.map((i,k)=>{
               return(
                <View key={k} style={{backgroundColor:'white',padding:5,flexDirection:'row',justifyContent:'space-between',marginTop:k==0?0:20}}>
                  <TouchableOpacity onPress={()=>{
                    this.setState({show:true,show_img:i.img})
                  }}>
                <Image source={{uri:i.img}}
                  style={{width:hua.hua_w*.4,height:hua.hua_w*.35}}
                />
                </TouchableOpacity>
                <View style={{justifyContent:'space-between'}}>
                  <TouchableOpacity onPress={()=>{
                  login?  this.props.navigation.navigate('Dtxq',{info:i}):this.login_page()
                  }}>
                <View style={{marginLeft:5,width:hua.hua_w*.45,}}>
                 <Text style={{lineHeight:18,color:hua.hua_hui}}>{i.con.substr(0,100)+'...'}</Text>
                 </View>
                 </TouchableOpacity>
                 <View style={{flexDirection:'row',marginLeft:5,justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{color:hua.hua_hui}}>2019/7/2</Text>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{
                 login? this.sc(k):this.login_page()
                }}>
                <AntDesign name='staro' style={{fontSize:20,color:i.shou==true?hua.hua_theme:hua.hua_hui2}}/>
                {/* <Text style={{marginLeft:5}}>collection</Text> */}
                </TouchableOpacity>
                 </View>
                </View>
                  </View>
               )
                   })
                 }
                   
               </ScrollView>
               <Modal visible={this.state.show} transparent={true} >
             <ImageViewer imageUrls={images} onClick={()=>{
                this.setState({show:false})
             }}/>
             </Modal>

           </View>
        </SafeAreaView>
        )
    }
}
export default Dt
const styles=StyleSheet.create({
    shang_v:{
    //  width:hua.hua_w,
    justifyContent:'space-between',
     height:hua.hua_h*.12,
     backgroundColor:hua.hua_theme,flexDirection:'row',
     alignItems:'center',
     padding:20
    },
    zj:{
     fontSize:20,fontWeight:'500',color:'white',
   
    },
 })