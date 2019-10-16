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
import {Button,Input,Overlay,ButtonGroup} from 'react-native-elements'
// import { NavigationActions } from 'react-navigation';
import {hua} from '../sty/sty'
import TabBar from '@ant-design/react-native/lib/tab-bar'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {inject,observer} from 'mobx-react'

@inject(["mbx"])
@observer // 监听当前组件
class Find extends Component{
  static navigationOptions = {
    title: '达人',
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
            selectedTab: 'redTab',
            selectedIndex: 0, 
            aa:[
              {
                name:'Grandmaster',
                color:hua.hua_theme
              },
              {
                name:'activity',
                color:hua.hua_hui2
              },
            ]
         }
         this.updateIndex = this.updateIndex.bind(this)
    }
    onChangeTab(tabName: any) {
        this.setState({
          selectedTab: tabName,
        });
      }
      renderContent(pageText: any) {
        return (
          <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            {/* <SearchBar placeholder="Search" showCancelButton /> */}
            <Text style={{ margin: 50 }}>{pageText}</Text>
          </View>
        );
      }
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      sc=(e)=>{
        this.props.mbx.shou_fing(e)
      } 
      login_page=()=>{
        Alert.alert('提示',' 你还没有登录!',[{'text':'稍后'},{'text':'去登录',onPress:()=>{
          this.props.navigation.navigate('DenL')
        }}])
      } 
      componentDidMount(){
       fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/find')
     .then(res=>res.json())
     .then(res=>{})
     .catch(err=>{})
      }
    render(){
      const buttons = ['大师', '活动']
     const { selectedIndex } = this.state
     const login=this.props.mbx.login
    const hd=[
      { tit:'把一个夏天扔进木筏里，不要浇水，不要施肥，看你今天掉进这样的境地。',
        img:'https://c-ssl.duitang.com/uploads/item/201309/14/20130914160303_YBenS.thumb.700_0.jpeg',
        con:'一年一度的花卉展览即将开始。这次花展采用了多项新技术，花友们很快就会报名。',
      },
      { tit:'我射的那棵果树，谁比我的好…来吧，一个~',
        img:'https://c-ssl.duitang.com/uploads/item/201605/15/20160515132655_Gu38y.thumb.700_0.jpeg',
        con:'一年一度的花卉展览即将开始。这次花展采用了多项新技术，花友们很快就会报名。',
      },
    ]
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
         <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,flex:1}}>

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
                <Text style={styles.zj}>发现</Text>
                  </View>  
               <View style={{width:hua.hua_w*.2}}>

               </View>
               
               
             </View>
         <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: hua.hua_h*.05}}
      selectedButtonStyle={{backgroundColor:hua.hua_theme}}
    />

         <ScrollView contentContainerStyle={{width:hua.hua_w,padding:20}}>
         {
           selectedIndex==0?
           <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
             {
               this.props.mbx.find.map((i,k)=>{
               return(
                <View style={{width:'48%',backgroundColor:'white',marginTop:k==0||k==1?0:10}}>
                <TouchableOpacity onPress={()=>{
                login? this.props.navigation.navigate('Dtxq',{info:i}):this.login_page()
                }}>
                <Image source={{uri:i.img}}
                 style={{width:'100%',height:hua.hua_h*.25}}
                />
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'space-between',
                alignItems:'center',padding:10}}>
                    <Text>{i.name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>{
                       login?   this.props.mbx.shou_fing(k):this.login_page()
                          // this.sc(k)
                        }}>
                        <AntDesign name='staro' style={{fontSize:20,color:i.shou==true?hua.hua_theme:hua.hua_hui2}}/>
                        </TouchableOpacity>
                        {/* <Text style={{color:hua.hua_hui2,marginLeft:5}}>12</Text> */}
                    </View>
                </View>
               </View>
               )
             })}
           </View>
           
      :
      <View style={{width:'100%',}}>
       {
         hd.map((i,k)=>{
            return(
            <View style={{backgroundColor:'white',padding:10,marginTop:k==0?0:20}}>
              <TouchableOpacity onPress={()=>{
              login?    this.props.navigation.navigate('Dtxq',{info:i}):this.login_page()
              }}>
           <Image source={{uri:i.img}} style={{width:'100%',height:hua.hua_h*.2}}/>
          </TouchableOpacity>
        <Text style={{marginTop:10,color:hua.hua_hui,lineHeight:18,fontSize:16}}>{i.con.substr(0,100)+'...'}</Text>
            </View>
            )
         })
       }
      </View>
         }
      

         </ScrollView>

         </View>
        </SafeAreaView>
        )
    }
}
export default Find 
const styles=StyleSheet.create({
    shang_v:{
    //  width:hua.hua_w,
     height:hua.hua_h*.12,
     backgroundColor:hua.hua_theme,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     padding:20
    },
    zj:{
     fontSize:20,fontWeight:'500',color:'white',
     
    },
 })