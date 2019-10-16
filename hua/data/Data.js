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
                u_name:'晓明',
                time:'2019/6/5',
                gz:false,
                like:false, 
                con:'现在世界上有很多种花，不同的季节开不同的花。每个季节都有代表性的花，如春天的花、郁金香、风信子和茉莉花。',
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
                u_name:'古丽',
                time:'2019/5/5',
                gz:false,
                like:false,
                con:'秋天一过，院子里的花草又大又绿，还剩下不少花。只种的观赏草还精神饱满。当微风吹拂时，它甚至比花还美。它最适合有院子的花。朋友种植哦~',
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
                con:'秋天一过，院子里的花草又大又绿，还剩下不少花。只种的观赏草还精神饱满。当微风吹拂时，它甚至比花还美。它最适合有院子的花。朋友种植哦~',
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
            {   tit:'你喜欢什么样的花?',
                img:'https://c-ssl.duitang.com/uploads/item/201309/28/20130928211031_wV5ci.thumb.700_0.jpeg',
                con:'水仙又称多花水仙、金桉树、被子植物、单子叶植物、百合、洋葱等等…',
                shou:false
            },
            {   tit:'你有什么插花技巧?',
                img:'https://c-ssl.duitang.com/uploads/item/201606/26/20160626075027_vBXdn.thumb.700_0.jpeg',
                con:'抗寒季节适应性强，适宜阳气、背风和空气流通的环境。寒冷季节适宜的低温为8-25℃，冬季可耐受-35℃。',
                shou:false
            },
            {   tit:'我喜欢菊花',
                img:'https://c-ssl.duitang.com/uploads/item/201505/04/20150504112700_AY5mw.thumb.700_0.jpeg',
                con:'在中国南方广泛种植，是欧洲著名的花卉之一。在中国的大城市里经常能发现物种，它们可以在花园或温室里生长。',
                shou:false
            },
            {   tit:'来赏花吧',
                img:'https://c-ssl.duitang.com/uploads/item/201509/26/20150926132946_BvFdh.thumb.700_0.jpeg',
                con:'前者是正宗品种，绝大多数每株植物只长一个花蕾，体厚花大。后者大多是变异杂种，每一个都能产生两三个花蕾，体弱花细。',
                shou:false
            },
            {   tit:'来赏花吧',
                img:'https://c-ssl.duitang.com/uploads/item/201608/16/20160816185348_NXAvy.thumb.700_0.jpeg',
                con:'世界上约有2000种风信子园艺品种，主要分为“荷兰种”和“罗马种”',
                shou:false
            },
        ]
        this.find=[
            {   tit:'九月，我想在阳台上种些花草，除了舞会，你推荐吗？',
                img:'https://c-ssl.duitang.com/uploads/item/201507/09/20150709204736_ynMsC.thumb.700_0.jpeg',
                con:'水仙又称多花水仙、金桉树、被子植物、单子叶植物、百合、洋葱等等…',
                shou:false,
                name:'Carl'
            },
            {   tit:'最后，我有了一个小院子，在梦中慢慢地建造了一个秘密花园。',
                img:'https://c-ssl.duitang.com/uploads/item/201604/03/20160403201117_AHKTr.thumb.700_0.jpeg',
                con:'抗寒季节适应性强，适宜阳气、背风和空气流通的环境。寒冷季节适宜的低温为8-25℃，冬季可耐受-35℃。',
                shou:false,
                name:'Mars'
            },
            {    tit:'夏天，海岸是开放的，微风清爽。',
                img:'https://c-ssl.duitang.com/uploads/item/201507/23/20150723175027_GcHdS.thumb.700_0.jpeg',
                con:'在中国南方广泛种植，是欧洲著名的花卉之一。在中国的大城市里经常能发现物种，它们可以在花园或温室里生长。',
                shou:false,
                name:'Kenneth'
            },
            {    tit:'在这个满月的最后，我贴了一张我的花园生活记录。',
                img:'https://c-ssl.duitang.com/uploads/item/201601/13/20160113171812_mWYzt.thumb.700_0.jpeg',
                con:'前者是正宗品种，绝大多数每株植物只长一个花蕾，体厚花大。后者大多是变异杂种，每一个都能产生两三个花蕾，体弱花细。',
                shou:false,
                name:'Hunk'
            },
            {   tit:'晚熟的向日葵完成了夏天',
                img:'https://c-ssl.duitang.com/uploads/item/201201/18/20120118103843_sinKU.thumb.700_0.jpg',
                con:'世界上约有2000种风信子园艺品种，主要分为“荷兰种”和“罗马种”',
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