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
import Card from '@ant-design/react-native/lib/card'

class Huaxq extends Component {
    constructor(props){
     super(props)
     this.state={

     }
    }

    render(){
        const info=this.props.navigation.getParam('info')
         console.log('ifno1',info);
         const comment=[
             {
              img:'https://c-ssl.duitang.com/uploads/item/201810/09/20181009002920_gyqmm.thumb.700_0.png',
              name:'Abraham',
              time:'2019/3/8',
              con:'这些花真的很新鲜.'   
             },
             {
                img:'https://c-ssl.duitang.com/uploads/item/201506/18/20150618194503_CJ3ex.thumb.700_0.jpeg',
                name:'Caesar',
                time:'2019/3/2',
                con:'这个博主是什么品种的?.'   
               },
         ]
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
           <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,height:'100%',flex:1}}>
          <ScrollView contentContainerStyle={{padding:20}}>
          <Card style={{marginTop:20}}>
                <Card.Header
                  title={<View>
                    <Text  style={{fontSize:18,color:hua.hua_hui}}>{info.u_name}</Text>
                    <Text style={{fontSize:12,color:hua.hua_hui,marginTop:5}}>{info.time}</Text>
                  </View>}
                  thumbStyle={{ width: 60, height: 60 ,borderRadius:30}}
                  thumb={info.u_img}
                  
                  extra={
                  <TouchableOpacity onPress={()=>{
                //   this.attention(k)
                  }} style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text></Text>
                   {/* <Text style={{fontSize:16,color:info.gz==true?hua.hua_theme:hua.hua_hui}}>{info.gz==true?'Already concerned':'attention'}</Text> */}
                  </TouchableOpacity>
                  }
                />
                <Card.Body>
                  <View style={{ width:'100%',padding:10}}>
                    <TouchableOpacity onPress={()=>{
                    //    this.props.navigation.navigate('Huaxq',{info:i})
                    }}>
                    <Text style={{ lineHeight:20,color:hua.hua_hui }}>{info.con}</Text>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    {
                      info.con_img.map((i,k)=>{
                        return(
                          <TouchableOpacity onPress={()=>{
                            // this.setState({show_img:info.c_i,show:true})
                          }} key={k}>
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
                        {/* <TouchableOpacity style={{flexDirection:'row',}} onPress={()=>{
                        //  this.report()
                        }}>
                               <AntDesign name='warning' style={{fontSize:18,color:hua.hua_hui2}}/>
                              <Text style={{marginLeft:5,color:hua.hua_hui2}}>Report</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{flexDirection:'row',marginLeft:15}}  onPress={()=>{
                            // this.like(k)
                          }}>
                               <AntDesign name='like2' style={{fontSize:18,color:info.like==true?hua.hua_theme: hua.hua_hui2}}/>
                              <Text style={{marginLeft:5,color:hua.hua_hui2}}>like</Text>
                          </TouchableOpacity> */}
                        </View>
                          
                      </View>
                  }
                />
              </Card>
             <View style={{padding:20,backgroundColor:'white',marginTop:20,borderRadius:5}}>
               <Text style={{fontSize:18,color:hua.hua_theme}}>评论</Text>
               {
                   comment.map((i,k)=>{
                    return(
                <View key={k} style={{width:'100%',marginTop:20,borderBottomColor:hua.hua_bg,borderBottomWidth:1,}}>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={{uri:i.img}} 
                 style={{width:50,height:50,borderRadius:25}}
                />
                <View style={{marginLeft:20}}>
                    <Text>{i.name}</Text>
                    <Text style={{color:hua.hua_hui2,marginTop:5}}>{i.time}</Text>
                </View>
                </View>
                <Text style={{fontSize:16,color:hua.hua_hui,marginTop:10,marginBottom:10}}>{i.con}</Text>
               </View>
                    )
                   })
               }
               
             </View>

          </ScrollView>
           </View>
            </SafeAreaView>
        )
    }
}
export default Huaxq