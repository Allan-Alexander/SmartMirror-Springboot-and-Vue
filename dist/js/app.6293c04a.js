(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b5d2b1a6"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"fba5bb1e"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"079d":function(t,e,n){t.exports=n.p+"img/wind.05f5c4cf.svg"},"07ae":function(t,e,n){t.exports=n.p+"img/rain.a56a7915.svg"},"0c167":function(t,e,n){t.exports=n.p+"img/humidity.e7cc8477.svg"},"2a68":function(t,e,n){},"2b35":function(t,e,n){t.exports=n.p+"img/cloud.2b02f907.svg"},4058:function(t,e,n){t.exports=n.p+"img/low.61a481cf.svg"},5270:function(t,e,n){t.exports=n.p+"img/thunderstorm.7e644c1a.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar"),n("v-main",[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{staticClass:"text-uppercase",attrs:{dark:"",dense:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-icon",{staticClass:"pr-1",attrs:{right:""}},[t._v("mdi-leaf")]),n("span",{staticClass:"font-weight-light grey--text"},[t._v("Smart")]),n("span",[t._v("Mirror")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-export")])],1)],1),n("v-navigation-drawer",{attrs:{app:"",absolute:"",bottom:"",temporary:"",src:"background2.jpg",width:"15%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-white--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},t._l(t.links,(function(e){return n("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[n("v-icon",{staticClass:"white--text pr-5",attrs:{right:""}},[t._v(t._s(e.icon))]),n("v-list-item-title",[t._v(t._s(e.text))])],1)})),1)],1)],1)],1)},s=[],c={name:"Navbar",data:function(){return{drawer:!1,group:null,links:[{icon:"mdi-view-dashboard",text:"Dashboard",route:"/"},{icon:"mdi-toggle-switch",text:"Control System",route:"/control"},{icon:"mdi-chart-histogram",text:"Analytics",route:"/monitor"}]}},watch:{group:function(){this.drawer=!1}}},l=c,u=n("2877"),d=n("6544"),p=n.n(d),h=n("5bc1"),f=n("8336"),m=n("b0af"),v=n("132d"),g=n("8860"),b=n("da13"),_=n("1baa"),w=n("5d23"),y=n("f774"),x=n("2fa4"),C=n("71d9"),k=Object(u["a"])(l,i,s,!1,null,null,null),T=k.exports;p()(k,{VAppBarNavIcon:h["a"],VBtn:f["a"],VCard:m["a"],VIcon:v["a"],VList:g["a"],VListItem:b["a"],VListItemGroup:_["a"],VListItemTitle:w["a"],VNavigationDrawer:y["a"],VSpacer:x["a"],VToolbar:C["a"]});var S={name:"App",components:{Navbar:T},data:function(){return{}}},V=S,A=n("7496"),j=n("f6c4"),O=Object(u["a"])(V,r,o,!1,null,null,null),N=O.exports;p()(O,{VApp:A["a"],VMain:j["a"]});n("d3b7");var E=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl-15"},[n("h2",[t._v("Dashboard")]),n("v-container",[n("div",{attrs:{id:"parent_div_1"}},[n("div",{staticClass:"app"},[n("WeatherApp")],1)]),n("div",{attrs:{id:"parent_div_2"}},[n("div",{staticClass:"todo"},[n("Todo")],1)])]),n("div",[n("v-carousel",{attrs:{cycle:"","hide-delimiters":"","show-arrows-on-hover":""}},t._l(t.articles,(function(e){return n("v-carousel-item",{key:e.title},[n("v-sheet",{attrs:{color:t.colors,height:"100%",align:"center",justify:"center"}},[n("v-row",{attrs:{align:"top",justify:"center"}},[n("div",{staticClass:"display-1"},[t._v(" "+t._s(e.title)+" "),n("br"),n("br"),n("span",{staticClass:"font-weight-light grey--text"},[t._v(t._s(e.description))])])])],1)],1)})),1)],1)],1)},I=[],R=n("bb36"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Measurements",{attrs:{cloudiness:this.forecast.cloudiness,windSpeed:this.forecast.windSpeed,humidity:this.forecast.humidity}}),n("Temperature",{attrs:{value:this.forecast.temperatureValue,high:this.forecast.temperatureHigh,low:this.forecast.temperatureLow}}),n("Weather",{attrs:{location:this.forecast.location,description:this.forecast.description,icon:this.forecast.weatherIcon}})],1)},M=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"location"},[t._v("CHENNAI")]),n("div",{staticClass:"weather__description"},[t._v(t._s(t.description))]),n("img",{staticClass:"weather__icon",attrs:{src:t.icon,alt:t.description}})])},D=[],F={name:"Weather",props:{location:{type:String,required:!0},description:{type:String,required:!0},icon:{type:String,required:!0}}},P=F,H=(n("89b9"),Object(u["a"])(P,$,D,!1,null,"d29be04a",null)),B=H.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"temperature__value"},[t._v(t._s("C"===t.scaleSymbol?t.value:t.fValue))]),a("div",{staticClass:"temperature__right"},[a("div",{staticClass:"temperature__scale"},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.toggleTemperature(e)}}},[t._v("°"+t._s(t.scaleSymbol))])]),a("div",{staticClass:"temperature__high"},[a("img",{attrs:{src:n("ae25"),alt:"high temperature"}}),a("span",[t._v(t._s("C"===t.scaleSymbol?t.high:t.fHigh))]),t._v("° ")]),a("div",{staticClass:"temperature__low"},[a("img",{attrs:{src:n("4058"),alt:"low temperature"}}),a("span",[t._v(t._s("C"===t.scaleSymbol?t.low:t.fLow))]),t._v("° ")])])])},z=[],K=(n("a9e3"),{name:"Temperature",props:{value:{type:Number,required:!0},high:{type:Number,required:!0},low:{type:Number,required:!0}},data:function(){return{scale:"Celcius"}},computed:{scaleSymbol:function(){return this.scale.charAt(0)},fValue:function(){return this.toFahrenheit(this.value)},fHigh:function(){return this.toFahrenheit(this.high)},fLow:function(){return this.toFahrenheit(this.low)}},methods:{toFahrenheit:function(t){return Math.floor(1.8*t+32)},toggleTemperature:function(){"Celcius"===this.scale?this.scale="Fahrenheit":this.scale="Celcius"}}}),J=K,U=(n("ee81"),Object(u["a"])(J,W,z,!1,null,"b4ed71e0",null)),G=U.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"cloudiness"},[a("img",{attrs:{src:n("2b35"),alt:"cloudiness"}}),a("span",{staticClass:"cloudiness__value"},[t._v(t._s(t.cloudiness))]),t._v("% ")]),a("div",{staticClass:"wind-speed"},[a("img",{attrs:{src:n("079d"),alt:"wind speed"}}),a("span",{staticClass:"wind__value"},[t._v(t._s(t.windSpeed))]),t._v("m/s ")]),a("div",{staticClass:"humidity"},[a("img",{attrs:{src:n("0c167"),alt:"humidity"}}),a("span",{staticClass:"humidity__value"},[t._v(t._s(t.humidity))]),t._v("% ")])])},Q=[],Y={name:"Measurements",props:{cloudiness:{type:Number,required:!0},windSpeed:{type:Number,required:!0},humidity:{type:Number,required:!0}}},Z=Y,tt=(n("e1ee"),Object(u["a"])(Z,X,Q,!1,null,"a8acd09e",null)),et=tt.exports,nt=(n("a4d3"),n("e01a"),n("99af"),n("b0c0"),n("96cf"),n("1da1")),at=n("d4ec"),rt=n("bee2"),ot=function(){function t(){Object(at["a"])(this,t),this.cloudiness=0,this.windSpeed=0,this.humidity=0,this.temperatureValue=0,this.temperatureHigh=0,this.temperatureLow=0,this.location=" ",this.description="Please connect to internet to fetch latest forecast :)",this.weatherIcon=n("cf1d"),this.update()}return Object(rt["a"])(t,[{key:"update",value:function(){var t=this;navigator.onLine&&navigator.geolocation.getCurrentPosition((function(e){return t.updateForecast(e)}))}},{key:"updateForecast",value:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=null,t.prev=1,t.next=4,this.getForecast(e.coords);case 4:n=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),n=this.getErrorData();case 10:this.populate(n);case 11:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getForecast",value:function(){var t=Object(nt["a"])(regeneratorRuntime.mark((function t(e){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="a3e7bdc246b811691b06aab13ccb0dbb",a="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.latitude,"&lon=").concat(e.longitude,"&appid=").concat(n,"&units=metric"),t.next=4,fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getErrorData",value:function(){return{clouds:{all:0},wind:{speed:0},main:{humidity:0,temp:0,temp_max:0,temp_min:0},weather:[{id:0,description:"There's a problem at the weather forecast server ¯\\_(ツ)_/¯"}],name:null,sys:{country:null}}}},{key:"populate",value:function(t){this.cloudiness=t.clouds.all,this.windSpeed=t.wind.speed,this.humidity=t.main.humidity,this.temperatureValue=Math.round(t.main.temp),this.temperatureHigh=Math.round(t.main.temp_max),this.temperatureLow=Math.round(t.main.temp_min),this.location=this.formatLocation(t.name,t.sys.country),this.description=t.weather[0].description,this.weatherIcon=this.getWeatherIcon(t.weather[0].id)}},{key:"formatLocation",value:function(t,e){return null===t&&null===e?"":"".concat(t,", ").concat(e)}},{key:"getWeatherIcon",value:function(t){return this.isThunderstorm(t)?n("5270"):this.isDrizzle(t)||this.isRain(t)?n("07ae"):this.isSnow(t)?n("8a67"):n("cf1d")}},{key:"isThunderstorm",value:function(t){return t>199&&t<233}},{key:"isDrizzle",value:function(t){return t>299&&t<322}},{key:"isRain",value:function(t){return t>499&&t<532}},{key:"isSnow",value:function(t){return t>599&&t<623}}]),t}(),it=ot,st={name:"WeatherApp",components:{Weather:B,Temperature:G,Measurements:et},data:function(){return{forecast:new it}}},ct=st,lt=(n("ffd2"),Object(u["a"])(ct,q,M,!1,null,"28b4d787",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),0==t.allTodo.length?n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({},"v-btn",r,!1),a),[n("v-icon",{staticClass:"mr-1 blue--text"},[t._v(" mdi-plus-circle ")]),n("span",{staticClass:"subheading mr-2 blue--text"},[t._v("Add")])],1)]}}],null,!1,1096600156),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("New Todo")])]),n("v-card-text",[n("v-container",[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Heading",required:"",rules:t.headingRules,counter:25},model:{value:t.myTodo.heading,callback:function(e){t.$set(t.myTodo,"heading",e)},expression:"myTodo.heading"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Content",required:"",rules:t.contentRules,counter:50},model:{value:t.myTodo.content,callback:function(e){t.$set(t.myTodo,"content",e)},expression:"myTodo.content"}})],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.createTodoApi}},[t._v(" Save ")])],1)],1)],1):t._e(),t._l(t.allTodo,(function(e){return n("v-card",{key:e.id,staticClass:"mx-auto mb-2",attrs:{color:"#212121",dark:"",width:"600"}},[n("v-card-title",[n("v-icon",{attrs:{left:""}},[t._v(" mdi-twitter ")]),n("span",{staticClass:"title font-weight-bold"},[t._v(t._s(e.heading))])],1),n("v-card-text",{staticStyle:{"font-size":"20px"}},[t._v(" "+t._s(e.content)+" ")]),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("v-btn",{staticClass:"mr-2",on:{click:function(n){return t.deleteTodoApi(e.id)}}},[n("v-icon",{staticClass:"mr-1 red--text"},[t._v(" mdi-delete ")]),n("span",{staticClass:"subheading mr-2 red--text"},[t._v("Delete")])],1),n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({},"v-btn",r,!1),a),[n("v-icon",{staticClass:"mr-1 blue--text"},[t._v(" mdi-plus-circle ")]),n("span",{staticClass:"subheading mr-2 blue--text"},[t._v("Add")])],1)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("New Todo")])]),n("v-card-text",[n("v-container",[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Heading",required:"",rules:t.headingRules,counter:25},model:{value:t.myTodo.heading,callback:function(e){t.$set(t.myTodo,"heading",e)},expression:"myTodo.heading"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Content",required:"",rules:t.contentRules,counter:50},model:{value:t.myTodo.content,callback:function(e){t.$set(t.myTodo,"content",e)},expression:"myTodo.content"}})],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.createTodoApi}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)}))],2)},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-2"},[n("h4",[n("span",{staticClass:"font-weight-light grey--text"},[t._v("Todo ")]),n("span",[t._v("List")])])])}],ht=(n("4160"),n("159b"),n("2591")),ft=(n("e71f"),{apiKey:"AIzaSyC4dso0A-fqVD852B8BKjLJFbexcX6VLkM",authDomain:"smart-mirror-2021-e5eae.firebaseapp.com",databaseURL:"https://smart-mirror-2021-e5eae-default-rtdb.firebaseio.com",projectId:"smart-mirror-2021-e5eae",storageBucket:"smart-mirror-2021-e5eae.appspot.com",messagingSenderId:"189486919922",appId:"1:189486919922:web:ea895aa7005dd5b2e6a06b"}),mt=ht["a"].initializeApp(ft).firestore(),vt={data:function(){return{dialog:!1,valid:!1,allTodo:[],myTodo:{heading:"",content:""},headingRules:[function(t){return!!t||"Heading is required"},function(t){return t.length<=25||"Heading must be less than 25 characters"}],contentRules:[function(t){return!!t||"Content is required"},function(t){return t.length<=100||"Content must be less than 100 characters"}]}},methods:{callTodoApi:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=mt.collection("allTodo"),e.next=3,n.get();case 3:a=e.sent,a.forEach((function(e){t.allTodo.push({id:e.id,heading:e.data().heading,content:e.data().content}),console.log(t.allTodo)}));case 5:case"end":return e.stop()}}),e)})))()},deleteTodoApi:function(t){var e=this;return Object(nt["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),n.next=3,mt.collection("allTodo").doc(t).delete();case 3:e.$router.go();case 4:case"end":return n.stop()}}),n)})))()},createTodoApi:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.myTodo.heading.length>25||t.myTodo.content.length>100||0==t.myTodo.heading.length||0==t.myTodo.content.length)){e.next=4;break}alert("input beyond limit or empty"),e.next=7;break;case 4:return e.next=6,mt.collection("allTodo").add(t.myTodo);case 6:t.$router.go();case 7:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){this.callTodoApi()}},gt=vt,bt=n("99d9"),_t=n("62ad"),wt=n("a523"),yt=n("169a"),xt=n("4bd4"),Ct=n("0fd9"),kt=n("8654"),Tt=Object(u["a"])(gt,dt,pt,!1,null,null,null),St=Tt.exports;p()(Tt,{VBtn:f["a"],VCard:m["a"],VCardActions:bt["a"],VCardText:bt["b"],VCardTitle:bt["c"],VCol:_t["a"],VContainer:wt["a"],VDialog:yt["a"],VForm:xt["a"],VIcon:v["a"],VListItem:b["a"],VRow:Ct["a"],VSpacer:x["a"],VTextField:kt["a"]});var Vt={name:"App",components:{WeatherApp:ut,Todo:St},data:function(){return{date:new Date,newsApi:[],articles:[],colors:"#121212"}},methods:{NewsApi:function(){var t=this;R["a"].getNews().then((function(e){t.newsApi=e.data,t.articles=t.newsApi.articles,console.log(e.data)})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.NewsApi()}},At=Vt,jt=(n("ffe3"),n("5e66")),Ot=n("3e35"),Nt=n("8dd9"),Et=Object(u["a"])(At,L,I,!1,null,"e94181c6",null),Lt=Et.exports;p()(Et,{VCarousel:jt["a"],VCarouselItem:Ot["a"],VContainer:wt["a"],VRow:Ct["a"],VSheet:Nt["a"]}),a["a"].use(E["a"]);var It=[{path:"/",name:"Home",component:Lt},{path:"/control",name:"Control",component:function(){return n.e("about").then(n.bind(null,"0616"))}},{path:"/monitor",name:"Monitor",component:function(){return n.e("about").then(n.bind(null,"a373"))}}],Rt=new E["a"]({mode:"history",base:"/",routes:It}),qt=Rt,Mt=n("f309");a["a"].use(Mt["a"]);var $t=new Mt["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{light:{background:"#212121",secondary:"#b0bec5",info:"#8c9eff",error:"#b71c1c"}}}}),Dt=n("daa7"),Ft=n.n(Dt);a["a"].use(Ft.a,"ws://mqtt.eclipseprojects.io/mqtt",{clientId:"WebClient-"+parseInt(1e5*Math.random())}),new a["a"]({router:qt,vuetify:$t,render:function(t){return t(N)}}).$mount("#app")},7610:function(t,e,n){},"89b9":function(t,e,n){"use strict";n("8ef3")},"8a67":function(t,e,n){t.exports=n.p+"img/snow.0bb8cb16.svg"},"8ef3":function(t,e,n){},"8f2b":function(t,e,n){},ae25:function(t,e,n){t.exports=n.p+"img/high.d70bbaa2.svg"},bb36:function(t,e,n){"use strict";var a=n("1052"),r=n.n(a),o=r.a.create({timeout:2e3,headers:{}});e["a"]={getAllSwitch:function(){return o.get("http://localhost:9000/api/switch/all")},deleteSwitch:function(t){return o.delete("http://localhost:9000/api/switch/delete/"+t)},getAllTodo:function(){return o.get("http://localhost:9000/api/todo/all")},deleteTodo:function(t){return o.delete("http://localhost:9000/api/todo/delete/"+t)},getNews:function(){return o.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=c82c749536ea43a7ad66b6e6d027891d")}}},cb15:function(t,e,n){},cf1d:function(t,e,n){t.exports=n.p+"img/cloud.775ad4d1.svg"},e1ee:function(t,e,n){"use strict";n("7610")},ee81:function(t,e,n){"use strict";n("8f2b")},ffd2:function(t,e,n){"use strict";n("cb15")},ffe3:function(t,e,n){"use strict";n("2a68")}});
//# sourceMappingURL=app.6293c04a.js.map