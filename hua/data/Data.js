import { observable, action } from "mobx";
class Abc {
    @observable circle;
    @observable dt;
    @observable find;
    @observable hd;
    @observable login;
    constructor(){
        this.login=false
        this.circle=[
            {
                u_img:'http://b-ssl.duitang.com/uploads/blog/201307/30/20130730094257_MKAse.png',
                u_name:'Brent',
                time:'2019/6/5',
                gz:false,
                like:false, 
                con:'There are many kinds of flowers in the world now, and different flowers are opened in different seasons. Representative flowers are available every season, such as spring flowers, tulips, hyacinths, and jasmine flowers.',
                con_img:[
                    {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201504/06/20150406H3132_vRumt.thumb.700_0.jpeg',   
                    },
                    {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201603/22/20160322160820_ATKsX.thumb.700_0.jpeg',   
                     },
                     {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201108/18/20110818164331_RncV3.thumb.700_0.jpg',   
                     },
                ]
            },
            {
                u_img:'https://c-ssl.duitang.com/uploads/item/201804/04/20180404172358_hnkZM.thumb.700_0.jpeg',
                u_name:'Alan',
                time:'2019/5/5',
                gz:false,
                like:false,
                con:'Once the autumn is over, the flowers and plants in the yard are large and green, and there are not a few flowers left. Only the ornamental grass planted is still full of spirit. When the breeze blows, it is even better than flowers. It is most suitable for flowers with yards. Friends planting Oh~',
                con_img:[
                    {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201503/13/20150313111856_LNw2e.thumb.700_0.jpeg',   
                    },
                    {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201501/11/20150111001026_tK3ft.thumb.700_0.jpeg',   
                     },
                     {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201506/30/20150630212251_B5QRa.thumb.700_0.jpeg',   
                     },
                ]
            },
            {
                u_img:'https://c-ssl.duitang.com/uploads/item/201603/17/20160317103559_AGYCf.thumb.700_0.jpeg',
                u_name:'Daniel',
                time:'2019/5/9',
                gz:false,
                like:false,
                con:'Once the autumn is over, the flowers and plants in the yard are large and green, and there are not a few flowers left. Only the ornamental grass planted is still full of spirit. When the breeze blows, it is even better than flowers. It is most suitable for flowers with yards. Friends planting Oh~',
                con_img:[
                    {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201603/02/20160302092725_UTEdM.thumb.700_0.jpeg',   
                    },
                    {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201601/05/20160105135115_GUc2J.thumb.700_0.jpeg',   
                     },
                     {
                     c_i:'https://c-ssl.duitang.com/uploads/item/201901/06/20190106003550_incqe.thumb.700_0.jpg',   
                     },
                ]
            },
        ],
        this.dt=[
            {   tit:'What kind of flowers do you like',
                img:'https://c-ssl.duitang.com/uploads/item/201309/28/20130928211031_wV5ci.thumb.700_0.jpeg',
                con:'Narcissus is also known as the multi-flower narcissus, the golden eucalyptus, the angiosperm, the monocotyledon, the lily, the onion, and more...',
                shou:false
            },
            {   tit:'What techniques do you have for arranging flowers',
                img:'https://c-ssl.duitang.com/uploads/item/201606/26/20160626075027_vBXdn.thumb.700_0.jpeg',
                con:'The cold-resistant season has strong adaptability, and it is suitable for the environment of yang, leeward and air circulation. The suitable cold temperature for the cold season is 8-25 °C, and the winter can withstand -35 °C...',
                shou:false
            },
            {   tit:'I love the chrysanthemum',
                img:'https://c-ssl.duitang.com/uploads/item/201505/04/20150504112700_AY5mw.thumb.700_0.jpeg',
                con:'Widely cultivated in southern China, it is one of the famous flowers in Europe. Species are often found in large Chinese cities and can be grown in gardens or greenhouses',
                shou:false
            },
            {   tit:'Come and enjoy the flowers',
                img:'https://c-ssl.duitang.com/uploads/item/201509/26/20150926132946_BvFdh.thumb.700_0.jpeg',
                con:'The former is an authentic variety, the vast majority of each plant only grows 1 flower bud, the body is thick and the flowers are large. The latter are mostly mutated hybrids, each of which can produce two or three flower buds, with weak body and fine flowers.',
                shou:false
            },
            {   tit:'Come and enjoy the flowers',
                img:'https://c-ssl.duitang.com/uploads/item/201608/16/20160816185348_NXAvy.thumb.700_0.jpeg',
                con:'There are about 2000 kinds of hyacinth horticultural varieties in the world, which are mainly divided into "Dutch species" and "Roman species"',
                shou:false
            },
        ]
        this.find=[
            {   tit:'In September, I want to plant some flower plants on the balcony, in addition to the ball, do you recommend it?',
                img:'https://c-ssl.duitang.com/uploads/item/201507/09/20150709204736_ynMsC.thumb.700_0.jpeg',
                con:'Narcissus is also known as the multi-flower narcissus, the golden eucalyptus, the angiosperm, the monocotyledon, the lily, the onion, and more...',
                shou:false,
                name:'Carl'
            },
            {   tit:'Finally, I have a small yard and slowly build a secret garden in my dreams.',
                img:'https://c-ssl.duitang.com/uploads/item/201604/03/20160403201117_AHKTr.thumb.700_0.jpeg',
                con:'The cold-resistant season has strong adaptability, and it is suitable for the environment of yang, leeward and air circulation. The suitable cold temperature for the cold season is 8-25 °C, and the winter can withstand -35 °C...',
                shou:false,
                name:'Mars'
            },
            {    tit:'In the summer, the shore is open, and the breeze is refreshing.',
                img:'https://c-ssl.duitang.com/uploads/item/201507/23/20150723175027_GcHdS.thumb.700_0.jpeg',
                con:'Widely cultivated in southern China, it is one of the famous flowers in Europe. Species are often found in large Chinese cities and can be grown in gardens or greenhouses',
                shou:false,
                name:'Kenneth'
            },
            {    tit:'At the end of this full moon, I posted a record (and chased) my garden life.',
                img:'https://c-ssl.duitang.com/uploads/item/201601/13/20160113171812_mWYzt.thumb.700_0.jpeg',
                con:'The former is an authentic variety, the vast majority of each plant only grows 1 flower bud, the body is thick and the flowers are large. The latter are mostly mutated hybrids, each of which can produce two or three flower buds, with weak body and fine flowers.',
                shou:false,
                name:'Hunk'
            },
            {   tit:'Late sunflowers complete the summer',
                img:'https://c-ssl.duitang.com/uploads/item/201201/18/20120118103843_sinKU.thumb.700_0.jpg',
                con:'There are about 2000 kinds of hyacinth horticultural varieties in the world, which are mainly divided into "Dutch species" and "Roman species"',
                shou:true,
                name:'John'
            },
        ]
        
    }
    change_att=(e)=>{
      this.circle[e].gz=this.circle[e].gz==true?false:true
    }
    change_like=(e)=>{
        this.circle[e].like=this.circle[e].like==true?false:true
      }
    shou=(e)=>{
      this.dt[e].shou=this.dt[e].shou==true?false:true
    }
    
    shou_fing=(e)=>{
        this.find[e].shou=this.find[e].shou==true?false:true
    }
    save_login=(e)=>{
        this.login=e
    }
}

const mbx=new Abc()
export {mbx}