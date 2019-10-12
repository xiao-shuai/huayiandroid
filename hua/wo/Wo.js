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
    SafeAreaView,Alert,Linking,ImageBackground
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,Input,Overlay,Divider} from 'react-native-elements'
// import { NavigationActions } from 'react-navigation';
import {hua} from '../sty/sty'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class Wo extends Component{
    static navigationOptions = {
        title: 'mine',
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

    login_page=()=>{
        Alert.alert('prompt','You are not logged in!',[{'text':'Later'},{'text':'log in',onPress:()=>{
          this.props.navigation.navigate('DenL')
        }}])
      }

    render(){
        const login=this.props.mbx.login
        const dd=[
            {
             icons:'staro',
             nm:'my collection',
             page:'Collection',
             
            },
            {
                icons:'hearto',
                nm:'my focus',
                page:'Collection',
                
               },
               {
                icons:'edit',
                nm:'Feedback',
                page:'Feedbk',
                
               },
               {
                icons:'profile',
                nm:'My release',
                page:'Collection',
                
               }
               
        ]
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
             <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,flex:1,alignItems:'center'}}>
              <ImageBackground source={require('../img/dise.png')} style={{
                  width:hua.hua_w,
                  height:hua.hua_h*.25,
                  flexDirection:'row',
                  alignItems:'center'
              }}>
                  {
                      login?
                      <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201601/06/20160106213513_yQHNm.thumb.700_0.jpeg'}} 
                      style={{width:80,height:80,borderRadius:40,marginLeft:20}}
                   />
                   :
                   <Image source={require('../img/tx.png')} 
                   style={{width:80,height:80,borderRadius:40,marginLeft:20}}
                />
                  }
   
               {/* <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzyWWz0XirCCzvudq-ZnskTKOr9vXzfdiCLqjlFAjJ2AK_3qYfA'}} 
                  style={{width:80,height:80,borderRadius:40,marginLeft:20}}
               /> */}
               {
                   login?
                   <View style={{marginLeft:20}}>
                   <Text style={{color:'white',fontSize:18,fontWeight:'500'}}>UOOO</Text>
                   <Text style={{fontSize:16,color:'white',marginTop:10}}>He is lazy, leaving nothing</Text>
               </View>
               :null

               }
               
              </ImageBackground>
              {
                  dd.map((i,m)=>{
                return(  
                    <TouchableOpacity onPress={()=>{
                      login?  this.props.navigation.navigate(i.page):this.login_page()
                    }} key={m}>
                    <View style={styles.i_tm}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View style={{width:'20%'}}>
                              <AntDesign name={i.icons} style={{fontSize:20,color:hua.hua_theme}}/>
                            </View>
                            <Text style={{marginLeft:10,color:hua.hua_hui}}>{i.nm}</Text>
                        </View>
                        <AntDesign name={'right'} style={{color:hua.hua_hui2}}/>
                    </View>
                     
                    </TouchableOpacity>
                    )
                  })
              }
   {/* <Divider style={{height:10,backgroundColor:'#E5E7E9',marginTop:10,width:hua.hua_w}}/> */}
       <Button title={login?'sign out':'Please log in'} buttonStyle={{
           backgroundColor:hua.hua_theme,
           marginTop:30,width:hua.hua_w*.9
    }} onPress={()=>{
         this.props.navigation.navigate('DenL')
         AsyncStorage.removeItem('aa')
    }}/>
                </View>
        </SafeAreaView>
        )
    }
}
export default Wo 
const styles=StyleSheet.create({
       i_tm:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingLeft:0,
        paddingRight:0,
        alignItems:'center',
        width:hua.hua_w*.9,
        borderBottomColor:'#DDDDDDFF',borderBottomWidth:1
       },
})