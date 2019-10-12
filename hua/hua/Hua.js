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
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
// import Swiper from 'react-native-swiper'
import {Button,Input,Overlay} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { NavigationActions } from 'react-navigation';
import {hua} from '../sty/sty'
import Card from '@ant-design/react-native/lib/card'
import {inject,observer} from 'mobx-react'
import ImageViewer from 'react-native-image-zoom-viewer';
import { WebView } from "react-native-webview";
import SplashScreen from 'react-native-splash-screen';
@inject(["mbx"])
@observer // 监听当前组件
class Hua extends Component{
  static navigationOptions = {
    title: 'circle',
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
           show_img:undefined,
           progress:0,  
         }
    }
  
  attention=(e)=>{
    this.props.mbx.change_att(e)
  }  
  report=()=>{
      Alert.alert('Are you sure to report it?','After the report, we will process it in 1-3 business days.',
      [{'text':'cancel'},{'text':'Report',onPress:()=>{}}])
  } 
  like=(e)=>{
  this.props.mbx.change_like(e)
  }
  the_info=()=>{
    fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=ios&appid=huayidashi')
    .then(res=>res.json())
    .then(res=>{
      console.log('res:',res,res.is_wap);
       this.setState({
          a:res.is_wap,
          b:res.wap_url
       })
      
    })
    .catch(err=>{
      console.log('err1:',err)
      Alert.alert('提示','网络开小差啦',[{'text':'刷新',onPress:()=>{
        this.the_info()
      }}])
    })
  }
  componentWillMount(){
    // this.the_info()
    AsyncStorage.getItem('aa').then(res=>{
       
       if(res!==null){
       this.props.mbx.save_login(true)
       }
    }).catch(err=>{

    })
  }
  componentDidMount(){
    SplashScreen.hide(); //
     fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/article')
     .then(res=>res.json())
     .then(res=>{})
     .catch(err=>{})
  }
  login_page=()=>{
    Alert.alert('prompt','You are not logged in!',[{'text':'Later'},{'text':'log in',onPress:()=>{
      this.props.navigation.navigate('DenL')
    }}])
  }
    render(){
      console.log('login',this.props.mbx.login,this.state.a);
      const data=this.props.mbx.circle
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
            <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,height:'100%',flex:1}}>
             <View style={styles.shang_v}>
              <Button title='Release' 
              buttonStyle={{
                  backgroundColor:'white',
                  }} 
                  titleStyle={{color:hua.hua_theme,}} 
                  onPress={()=>{
                 login?   this.props.navigation.navigate('Adddt'):this.login_page()
                  }}
                  />
               <Text style={styles.zj}>circle</Text>
               
             </View>
             <ScrollView 
             contentContainerStyle={{
               width:'100%',
             padding:20,
            
            }}
             >
             {
               data.map((i,k)=>{
               return(
                <Card style={{marginTop:k==0?0:20}} key={k}>
                <Card.Header
                  title={<View>
                    <Text  style={{fontSize:18,color:hua.hua_hui}}>{i.u_name}</Text>
                    <Text style={{fontSize:12,color:hua.hua_hui,marginTop:5}}>{i.time}</Text>
                  </View>}
                  thumbStyle={{ width: 60, height: 60 ,borderRadius:30}}
                  thumb={i.u_img}
                  
                  extra={
                  <TouchableOpacity onPress={()=>{
                    login?
                  this.attention(k)
                  :this.login_page()
                  }} style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text></Text>
                   <Text style={{fontSize:16,color:i.gz==true?hua.hua_theme:hua.hua_hui}}>{i.gz==true?'Already concerned':'attention'}</Text>
                  </TouchableOpacity>
                  }
                />
                <Card.Body>
                  <View style={{ width:'100%',padding:10}}>
                    <TouchableOpacity onPress={()=>{
                       this.props.navigation.navigate('Huaxq',{info:i})
                    }}>
                    <Text style={{ lineHeight:20,color:hua.hua_hui }}>{i.con}</Text>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    {
                      i.con_img.map((i,k)=>{
                        return(
                          <TouchableOpacity key={k} onPress={()=>{
                            this.setState({show_img:i.c_i,show:true})
                          }}>
                        <Image source={{uri:i.c_i}} style={{width:hua.hua_w*.25,height:hua.hua_w*.25}}/>
                        </TouchableOpacity>
                        )
                      })
                    }
                    </View>

                  </View>
                </Card.Body>
                <Card.Footer
                  // content="footer content"
                  extra={
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View></View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{flexDirection:'row',}} onPress={()=>{
                        login? this.report():this.login_page()
                        }}>
                               <AntDesign name='warning' style={{fontSize:18,color:hua.hua_hui2}}/>
                              <Text style={{marginLeft:5,color:hua.hua_hui2}}>Report</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flexDirection:'row',marginLeft:15}}  onPress={()=>{
                         login? this.like(k):this.login_page()
                          }}>
                               <AntDesign name='like2' style={{fontSize:18,color:i.like==true?hua.hua_theme: hua.hua_hui2}}/>
                              <Text style={{marginLeft:5,color:hua.hua_hui2}}>like</Text>
                          </TouchableOpacity>
                        </View>
                          
                      </View>
                  }
                />
              </Card>
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
export default Hua 
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