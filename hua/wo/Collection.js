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
class Collection extends Component{
    static navigationOptions = {
        title: 'Floral master',
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
    render(){

        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
             {
                 this.state.loading?
                 <ActivityIndicator size='large' style={{marginTop:100}}/>
                 :
                 <View style={{backgroundColor:hua.hua_bg,width:hua.hua_w,flex:1,alignItems:'center'}}>
             
                 <Image source={require('../img/nodata.png')} style={{
                     width:100,height:100,marginTop:hua.hua_h*.2
                 }}/>
                 <Text style={{color:hua.hua_hui2}}>No data yet</Text>
                 </View>
             }

        </SafeAreaView>
        )
    }
}
export default Collection
const styles=StyleSheet.create({

})