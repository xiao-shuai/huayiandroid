import React,{Component} from 'react'
import { 
     createAppContainer, 
    } from 'react-navigation';
    import { createBottomTabNavigator } from 'react-navigation-tabs'
    import { createStackNavigator } from 'react-navigation-stack'
import Hua from '../hua/Hua'
import Dt from '../dt/Dt'
import Find from '../Find/Find'
import Wo from '../wo/Wo'
import {hua} from '../sty/sty'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Adddt from '../hua/Adddt'
import Huaxq from '../hua/Huaxq'
import DenL from '../login/DenL'
import Dtxq from '../dt/Dtxq'
import Collection from '../wo/Collection'
import Feedbk from '../wo/Feedbk'
import Page from '../login/Page'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const HUA=createBottomTabNavigator(
    {
        Hua: Hua,
        Dt:Dt,
        Find:Find,
        Wo:Wo
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
           
            let iconName;
            if (routeName === 'Hua') {
              iconName = 'flower-poppy';
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'Dt') {
                 iconName = `flower`;
            } else if (routeName==='Find'){
                iconName=`flower-outline`
            }else if (routeName==`Wo`){
                iconName=`flower-tulip`
            }
    
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} style={{fontSize:25,color:focused?hua.hua_theme:hua.hua_hui}}/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: hua.hua_theme,
          inactiveTintColor: 'gray',
        },
      }
  )
 const NAVIGSTION=createStackNavigator({
     Hua:{
        screen:HUA,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
     },
     Page:{
      screen:Page,
      navigationOptions:()=>({
          // header:null,
          title:'隐私政策'
          // headerBackTitle:null,
      })
   },
     Adddt:{
      screen:Adddt,
      navigationOptions:()=>({
          // header:null,
          headerBackTitle:null,
          title:'发布',
          headerTintColor:'white',
          headerStyle:{backgroundColor: hua.hua_theme,}
          
      })
   },
   Huaxq:{
    screen:Huaxq,
    navigationOptions:()=>({
        // header:null,
        headerBackTitle:null,
        title:'详情',
        headerTintColor:'white',
       headerStyle:{backgroundColor: hua.hua_theme,}
    })
 },
 DenL:{
  screen:DenL,
  navigationOptions:()=>({
      header:null,
    //   headerBackTitle:null,
    //   title:'Details',
    //   headerTintColor:'white',
    //  headerStyle:{backgroundColor: hua.hua_theme,}
  })
},
Dtxq:{screen:Dtxq},
Collection:{screen:Collection},
Feedbk:{screen:Feedbk}
  
 })   
 export default createAppContainer(NAVIGSTION)