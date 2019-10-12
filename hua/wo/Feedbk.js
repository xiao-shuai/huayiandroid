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
class Feedbk extends Component{
    static navigationOptions = {
        title: 'Feedback',
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
           loading:true
         }
    }
    componentDidMount(){
        fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/collection')
        .then(res=>res.json())
        .then(res=>{
            this.setState({loading:false})
        })
        .catch(err=>{})
    }
    feed=()=>{
        if(this.state.con==undefined){
            Alert.alert('prompt','Please enter the content',[
                {'text':'ok'}
            ])
        }else{
            Alert.alert('prompt','Thank you for your feedback, we will deal with it as soon as possible',[
                {'text':'ok'}
            ])
            fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/feedback',{method:'POST'})
            .then(res=>res.json())
            .then()
            .catch()
        }
    }
    render(){

        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,flex:1,
                alignItems:'center',padding:20
                }}>
             <View style={{width:'100%',height:hua.hua_h*.2,backgroundColor:'white',padding:10}}>
                 <TextInput style={{height:'100%'}} multiline={true} 
                  onChangeText={(con)=>{
                      this.setState({con})
                  }}
                 />
             </View>
            <Button title={'submit'} buttonStyle={{width:hua.hua_w*.9,marginTop:20,backgroundColor:hua.hua_theme}}
             onPress={()=>{
              this.feed()
             }}
            />
            </View>

        </SafeAreaView>
        )
    }
}
export default Feedbk
const styles=StyleSheet.create({

})