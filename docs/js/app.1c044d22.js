(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},i={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b41c8d07"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"1e9d8434"}[t]+".css",i=c.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],p.parentNode.removeChild(p),a(r)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01a4":function(t,e,a){a("d3b7");var s=a("971e"),n=s.createPool({connectionLimit:10,host:Object({NODE_ENV:"production",BASE_URL:""}).MYSQL_HOST,user:Object({NODE_ENV:"production",BASE_URL:""}).MYSQL_USER,password:Object({NODE_ENV:"production",BASE_URL:""}).MYSQL_PASSWORD,database:Object({NODE_ENV:"production",BASE_URL:""}).MYSQL_DATABASE}),i=function(t,e){return new Promise((function(a,s){n.query(t,e,(function(t,e,n){t&&s(t),a(e)}))}))};t.exports={pool:n,query:i}},"02b1":function(t,e,a){"use strict";var s=a("7f46"),n=a.n(s);n.a},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},2:function(t,e){},"2ab8":function(t,e,a){"use strict";var s=a("70d5"),n=a.n(s);n.a},3:function(t,e){},3530:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin",attrs:{id:"submit"}},[a("h1",[t._v("Admin Tools")]),a("h1",{staticClass:"title"},[t._v(" Add an exercise ")]),a("div",[t._v("Exercise Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.exercisename,expression:"exercisename"}],ref:"my_input",attrs:{type:"text"},domProps:{value:t.exercisename},on:{input:function(e){e.target.composing||(t.exercisename=e.target.value)}}}),t._m(0),a("div",{staticClass:"select is-multiple"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{multiple:"",size:"3"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Cardio"}},[t._v("Cardio")]),a("option",{attrs:{value:"Resistance"}},[t._v("Resistance")]),a("option",{attrs:{value:"Stretch"}},[t._v("Stretch")])])]),t._m(1),a("div",{staticClass:"select is-multiple"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.musclegroup,expression:"musclegroup"}],attrs:{multiple:"",size:"4"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.musclegroup=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Legs"}},[t._v("Legs")]),a("option",{attrs:{value:"Arms"}},[t._v("Arms")]),a("option",{attrs:{value:"Back"}},[t._v("Back")]),a("option",{attrs:{value:"Core"}},[t._v("Core")])])]),a("br"),a("button",{on:{click:t.submit}},[t._v("Submit")])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v("Type:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v("Muscle Group:")])}],i=(a("35e7"),a("bc3a")),r=a.n(i),o={name:"Admin",data:{exercisename:"",type:"",musclegroup:""},components:{},methods:{submit:function(t){r.a.post("https://damp-chamber-63928.herokuapp.com/admin",{exercisename:this.exercisename,type:this.type,musclegroup:this.musclegroup}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}}},c=o,l=a("2877"),u=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=u.exports},"35e7":function(t,e,a){a("99af"),a("96cf");var s=a("c973"),n=a("01a4"),i=Object({NODE_ENV:"production",BASE_URL:""}).MYSQL_TABLE_PREFIX||"Fall2020_";function r(t,e,a){return o.apply(this,arguments)}function o(){return o=s(regeneratorRuntime.mark((function t(e,a,s){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="INSERT INTO ".concat(i,"Exercise_Types (created_at, Name, Type, Muscle_Group, Video_Url, Relative_Difficulty) VALUES (CURRENT_TIMESTAMP, '").concat(e,"', '").concat(a,"', '").concat(s,"', 'videourl', 1);"),console.log("hello"),t.next=4,n.query(r,[e,a,s]);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}t.exports={submitbackend:r}},4:function(t,e){},5:function(t,e){},5147:function(t,e,a){"use strict";a("a434");var s={user:null,id:null,type:null,notifications:[],login:function(t,e,a){t=t,e=e,a=a},addNotification:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";this.notifications.push({text:t,type:e})},deleteNotification:function(t){this.notifications.splice(t,1)}};e["a"]=s},"53c4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("Nav"),a("div",{staticClass:"container"},[a("Notifications"),a("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar container is-fixed-top is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),"Admin"===t.session.user.name?a("div",{staticClass:"navbar-menu ",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/feed"}},[t._v("Feed")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/record"}},[t._v("Record")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" Admin ")]),a("div",{staticClass:"navbar-dropdown"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/users"}},[t._v("Users")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/admin"}},[t._v("Edit exercises")])],1)])],1)]):a("div",{staticClass:"navbar-menu ",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/feed"}},[t._v("Feed")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/record"}},[t._v("Record")])],1)]),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("LoginBadge")],1)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[s("img",{attrs:{src:a("cf05"),height:"28"}})])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"LoginBadge"}},[t.session.user?a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.session.user.profile,alt:"Placeholder image"}})])]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"has-text-weight-bold"},[t._v(t._s(t.session.user.name))]),a("p",{staticClass:"is-size-7"},[t._v("@"+t._s(t.session.user.handle))])])]):a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-light",attrs:{to:"/signup"}},[t._v(" Sign Up ")]),a("router-link",{staticClass:"button is-light",attrs:{to:"/login"}},[t._v(" Log in ")])],1)])},l=[],u=a("5147"),d={data:function(){return{session:u["a"]}}},p=d,m=(a("2ab8"),a("2877")),f=Object(m["a"])(p,c,l,!1,null,null,null),v=f.exports,h={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:v}},_=h,b=Object(m["a"])(_,r,o,!1,null,null,null),g=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"notifications"}},t._l(t.session.notifications,(function(e,s){return a("div",{key:s,staticClass:"notification",class:"is-"+e.type},[a("button",{staticClass:"delete",on:{click:function(e){return t.deleteNotification(s)}}}),t._v(" "+t._s(e.text)+" ")])})),0)},y=[],w={data:function(){return{session:u["a"]}},methods:{deleteNotification:function(t){u["a"].deleteNotification(t)}}},E=w,x=(a("cf45"),Object(m["a"])(E,C,y,!1,null,null,null)),k=x.exports,O={components:{Nav:g,Notifications:k}},j=O,N=Object(m["a"])(j,n,i,!1,null,null,null),T=N.exports,A=(a("d3b7"),a("8c4f")),S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h1",[t._v("Welcome to ExerciseApp!")]),a("h1",{staticClass:"title"}),a("p",{staticClass:"subtitle"},[t._v(' Click "Record" above to begin tracking your exercise! ')]),a("p",{staticClass:"subtitle"},[t._v(" Sign up or log in to begin! ")])])}],B={name:"Home",components:{}},P=B,R=Object(m["a"])(P,S,L,!1,null,null,null),$=R.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"level section"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._m(0),t._m(1)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._m(2)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-success",on:{click:t.login}},[t._v(" Login ")]),a("button",{staticClass:"button is-primary",on:{click:function(e){return e.preventDefault(),t.fbLogin(e)}}},[t._v(" FB Login ")])])])])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])}],I=(a("b0c0"),a("bc3a")),D=a.n(I),F={data:{email:"",password:""},methods:{login:function(t){"admin@email.com"!=this.email||"1234"!=password?(D.a.post("https://damp-chamber-63928.herokuapp.com/users/login",{email:this.email,password:this.password}).then((function(t){console.log(t),verification=t.data,console.log(verification)})).catch((function(t){console.log(t)})),console.log(verification)):u["a"].user={name:"Admin",handle:"admin"}},fbLogin:function(){var t=this;FB.login((function(e){console.log(e),FB.api("me?fields=id,name,email,picture",(function(e){u["a"].user={name:e.name,handle:e.email,profile:e.picture.data.url},u["a"].addNotification("Yay! You logged in","success"),t.$router.push("feed"),console.log(e)}))}),{scope:"public_profile,email,user_photos"})}}};window.fbAsyncInit=function(){FB.init({appId:"5373206126038310",cookie:!0,xfbml:!0,version:"v9.0"}),FB.AppEvents.logPageView()},function(t,e,a){var s,n=t.getElementsByTagName(e)[0];t.getElementById(a)||(s=t.createElement(e),s.id=a,s.src="https://connect.facebook.net/en_US/sdk.js",n.parentNode.insertBefore(s,n))}(document,"script","facebook-jssdk");var H=F,V=(a("d6db"),Object(m["a"])(H,M,U,!1,null,null,null)),Y=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("h2",{staticClass:"title is-2"},[t._v("Users Page")]),a("table",{staticClass:"table is-narrow is-hoverable is-fullwidth"},[t._m(0),a("tbody",t._l(t.users,(function(e,s){return a("tr",{key:s,attrs:{i:s,post:e}},[a("th",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.FirstName))]),a("td",[t._v(t._s(e.LastName))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.Password))]),a("td",[t._v(t._s(e.DOB))]),a("td",[t._v(t._s(e.User_Type))])])})),0)])])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("id")]),a("th",[t._v("First Name")]),a("th",[t._v("Last Name")]),a("th",[t._v("E-Mail")]),a("th",[t._v("Password")]),a("th",[t._v("DOB")]),a("th",[t._v("Type")])])])}];a("773f");var Q={data:function(){return{users:[]}},components:{},methods:{getUsers:function(){var t=this;D.a.get("https://damp-chamber-63928.herokuapp.com/users").then((function(e){t.users=e.data})).catch((function(t){console.log(t.message)}))}},created:function(){this.getUsers()}},z=Q,J=Object(m["a"])(z,W,q,!1,null,null,null),G=J.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Select exercises from the list: "),a("div",{staticClass:"dropdown is-active"},[a("div",{staticClass:"dropdown-trigger"},[a("button",{staticClass:"button"},[a("span",[t._v("Exercise Types")]),a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[a("div",{staticClass:"dropdown-content"},[a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Walking <br>'"}},[t._v(" Walking ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Running <br>'"}},[t._v(" Running ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Swimming <br>'"}},[t._v(" Swimming ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Cycling <br>'"}},[t._v(" Cycling ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Weight lifting <br>'"}},[t._v(" Weight lifting ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Push-ups <br>'"}},[t._v(" Push-ups ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Tennis <br>'"}},[t._v(" Tennis ")]),a("a",{staticClass:"dropdown-item",attrs:{href:"#",onmousedown:"javascript:document.getElementById('list').innerHTML += 'Soccer <br>'"}},[t._v(" Soccer ")])])])]),a("div",{attrs:{id:"list"}},[t._v(" Today's Exercises: "),a("br")])])}],Z=a("5ea5"),tt=a("9c93"),et=a("a195"),at={data:function(){return{posts:et["posts"]}},components:{Sidebar:Z["a"],Post:tt["a"]},methods:{error:function(){}}},st=at,nt=(a("cdbb"),Object(m["a"])(st,K,X,!1,null,null,null)),it=nt.exports,rt=a("3530");s["a"].use(A["a"]);var ot=[{path:"/",name:"Home",component:$},{path:"/login",name:"Login",component:Y},{path:"/users",name:"Users",component:G},{path:"/record",name:"Record",component:it},{path:"/admin",name:"Admin",component:rt["default"]},{path:"/feed",name:"Feed",component:function(){return a.e("about").then(a.bind(null,"4787"))},beforeEnter:ut},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/admin",name:"Admin",component:function(){return Promise.resolve().then(a.bind(null,"3530"))}}],ct=new A["a"]({mode:"history",base:"",routes:ot}),lt=ct;function ut(t,e,a){u["a"].user?a():a("Login")}a("5abe"),a("15f5");s["a"].config.productionTip=!1,new s["a"]({router:lt,render:function(t){return t(T)}}).$mount("#app")},"5ea5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"panel"},[a("p",{staticClass:"panel-heading"},[t._v(" Side Bar ")]),a("div",{staticClass:"panel-block"},[a("p",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Search"}}),a("span",{staticClass:"icon is-left"},[a("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])])]),a("p",{staticClass:"panel-tabs"},[a("a",{staticClass:"is-active"},[t._v("All")]),a("a",[t._v("Public")]),a("a",[t._v("Private")]),a("a",[t._v("Sources")]),a("a",[t._v("Forks")])]),a("a",{staticClass:"panel-block is-active"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" bulma ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" marksheet ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" minireset.css ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-book",attrs:{"aria-hidden":"true"}})]),t._v(" jgthms.github.io ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-code-branch",attrs:{"aria-hidden":"true"}})]),t._v(" daniellowtw/infboard ")]),a("a",{staticClass:"panel-block"},[a("span",{staticClass:"panel-icon"},[a("i",{staticClass:"fas fa-code-branch",attrs:{"aria-hidden":"true"}})]),t._v(" mojs ")]),a("label",{staticClass:"panel-block"},[a("input",{attrs:{type:"checkbox"}}),t._v(" remember me ")]),a("div",{staticClass:"panel-block"},[a("button",{staticClass:"button is-link is-outlined is-fullwidth"},[t._v(" Reset all filters ")])])])}],i={},r=i,o=a("2877"),c=Object(o["a"])(r,s,n,!1,null,null,null);e["a"]=c.exports},6:function(t,e){},7:function(t,e){},"70d5":function(t,e,a){},"773f":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("d3b7");var s=Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"http://localhost:3001/";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?fetch(s+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(s+t).then((function(t){return t.json()}))}},"7f46":function(t,e,a){},8:function(t,e){},9:function(t,e){},"9c93":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.post.URL}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[t._v(" "+t._s(t.post.Reactions)+" people reacted to this ")]),a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48 "},[a("img",{attrs:{src:"http://localhost:3001/public/profiles/"+t.post.Owner_id+".jpg",alt:"Placeholder image"}})])]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(t.post.FirstName)+" "+t._s(t.post.LastName))]),a("p",{staticClass:"subtitle is-6"},[t._v("("+t._s(t.post.PrimaryEmail)+")")])])]),a("div",{staticClass:"content"},[t._v(" "+t._s(t.post.Text)+" "),a("time",{attrs:{datetime:t.post.created_at}},[t._v(t._s(t.post.created_at))])]),t._l(t.post.Comments,(function(e){return a("div",{key:e.id,staticClass:"media"},[a("div",{staticClass:"media-content"},[a("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName)+" ")]),a("span",[t._v(t._s(e.Text))])])])}))],2),a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"field has-addons",staticStyle:{width:"100%"}},[a("div",{staticClass:"control  is-expanded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a comment"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}})]),a("div",{staticClass:"control"},[a("a",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.comment(e)}}},[t._v(" Post ")])])])]),a("footer",{staticClass:"card-footer"},[t._m(1),t._m(2),a("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.react(e)}}},[t._m(3),t._v(" React ")])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title"}),a("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-reply",attrs:{"aria-hidden":"true"}})]),t._v(" Reply ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-retweet",attrs:{"aria-hidden":"true"}})]),t._v(" Repost ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])}],i=(a("a9e3"),a("96cf"),a("1da1")),r=a("a195"),o={data:function(){return{commentText:""}},props:{post:Object,i:Number},methods:{react:function(){var t=this;Object(r["d"])(this.post.id).then((function(e){return t.post.Reactions+=1})).catch((function(t){return console.error(t)}))},comment:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["a"])(t.post.id,t.commentText);case 2:a=e.sent,t.post.Comments.push(a);case 4:case"end":return e.stop()}}),e)})))()}}},c=o,l=(a("02b1"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,null,null);e["a"]=u.exports},a195:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return r}));var s=a("773f"),n=(a("5147"),function(){return Object(s["a"])("posts/byUser/1")});function i(t){return Object(s["a"])("reactions",{Post_id:t,Owner_id:1})}function r(t,e){return Object(s["a"])("comments",{Post_id:t,Owner_id:1,Text:e})}},cdbb:function(t,e,a){"use strict";var s=a("e3f0"),n=a.n(s);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.cbd3c6a8.png"},cf45:function(t,e,a){"use strict";var s=a("53c4"),n=a.n(s);n.a},d6db:function(t,e,a){"use strict";var s=a("e67a"),n=a.n(s);n.a},e3f0:function(t,e,a){},e67a:function(t,e,a){}});
//# sourceMappingURL=app.1c044d22.js.map