(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/codenames/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("e2a1"),r=a.n(n);r.a},"21bd":function(t,e,a){var n=a("7f1f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("010bffb5",n,!0,{sourceMap:!1,shadowMode:!1})},"2b11":function(t,e,a){var n=a("b117");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("0e8dacc2",n,!0,{sourceMap:!1,shadowMode:!1})},"3f8c":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'#app{width:100vw;height:100vh}#app[data-rotate=true]{-webkit-transform:rotate(90deg) translateY(-100%);transform:rotate(90deg) translateY(-100%);-webkit-transform-origin:top left;transform-origin:top left;height:100vw;width:100vh}body{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGZpbGw9IiM0MDNjM2YiIGQ9Ik0wIDBoOHY4SDB6Ii8+PHBhdGggZD0iTTAgMGw4IDh6bTggMEwwIDh6IiBzdHJva2U9IiMxZTI5MmQiLz48L3N2Zz4=")}footer.navbar{font-size:.6em}.btn{cursor:pointer}.modal.show{display:block}.modal.backdrop{background:rgba(0,0,0,.53)}.cr-pointer{cursor:pointer}',""])},4917:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"nav.navbar[data-v-5d0fde98]{z-index:9999}.app-logo[data-v-5d0fde98]{height:30px;width:30px}",""])},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{id:"app"}},[t.userStore.user?a("Toolbar"):t._e(),a("main",{staticClass:"flex-grow-1 d-flex"},[t.userStore.user?a("router-view"):a("Login")],1),a("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[t._m(0),a("div",{staticClass:"d-flex"},[a("div",{staticClass:"btn btn-dark rounded-pill p-2 material-icons",attrs:{hidden:!t.$route.path.startsWith("/game/"),to:"/",title:"Create New Game"},on:{click:function(e){t.showNewGameModal=!0}}},[t._v("add_to_photos")]),a("div",{staticClass:"btn btn-dark material-icons rounded-pill p-2",attrs:{title:"Load Game"},on:{click:function(e){t.showLoadGameModal=!0}}},[t._v("cloud_download")]),a("div",{staticClass:"btn btn-dark rounded-pill p-2 material-icons",attrs:{hidden:!t.$route.path.startsWith("/game/"),title:"Share Game"},on:{click:t.onShare}},[t._v("share")]),a("Dropdown",{attrs:{alignRight:!0},scopedSlots:t._u([{key:"items",fn:function(){return[a("a",{staticClass:"dropdown-item cr-pointer",on:{click:t.onSignOut}},[t._v("Sign Out")])]},proxy:!0}])},[t._v("\n      "+t._s(t.userStore.user.displayName)+"\n      ")])],1),t.showNewGameModal?a("NewGameModal",{on:{result:function(e){t.showNewGameModal=!1}}}):t._e(),t.showLoadGameModal?a("LoadGameModal",{on:{result:function(e){t.showLoadGameModal=!1}}}):t._e(),t.showShareModal?a("ShareModal",{on:{result:function(e){t.showShareModal=!1}}}):t._e()],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"navbar-brand"},[a("img",{staticClass:"app-logo align-top bg-light d-inline-block p-1 rounded mr-2",attrs:{src:"icons/icon.svg",alt:"website logo"}}),t._v("Code Names")])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",[a("div",{staticClass:"modal-header justify-content-center"},[a("h5",{staticClass:"modal-title"},[t._v("Share Your Game")])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"input-group"},[a("input",{staticClass:"form-control",attrs:{id:"url",readonly:""},domProps:{value:t.url}}),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"btn btn-outline-secondary",on:{click:t.onCopy}},[t._v("Copy")])])])]),a("div",{staticClass:"modal-footer"},[t.hintCopied?a("div",{staticClass:"text-success"},[t._v("link has been copied!")]):t._e(),a("div",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$emit("result")}}},[t._v("OK")])])])},d=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade show backdrop"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content bg-light"},[t._t("default")],2)])])},f=[],m={name:"Modal"},v=m,p=a("2877"),h=Object(p["a"])(v,u,f,!1,null,null,null),b=h.exports,g={name:"ShareModal",components:{Modal:b},data:function(){return{hintCopied:!1,hintTimer:null}},computed:{url:function(){return location.href}},methods:{onCopy:function(){var t=this;document.getElementById("url").select(),document.execCommand("copy"),this.hintCopied=!0,this.hintTimer&&clearTimeout(this.hintTimer),this.hintTimer=setTimeout(function(){return t.hintCopied=!1},2e3)}}},w=g,C=Object(p["a"])(w,c,d,!1,null,null,null),_=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",[a("div",{staticClass:"modal-header justify-content-center"},[a("h5",{staticClass:"modal-title"},[t._v("Load Game")])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Game Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],class:["form-control",{"is-invalid":t.invalidUrl}],attrs:{id:"url",placeholder:"Paste the url here..."},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),a("div",{staticClass:"invalid-feedback"},[t._v("This is an invalid link")])])]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"btn btn-secondary",on:{click:t.onLoad}},[t._v("Load")]),a("div",{staticClass:"btn btn-light",on:{click:function(e){return t.$emit("result",!1)}}},[t._v("Cancel")])])])},x=[],k=(a("a481"),{name:"LoadGameModal",components:{Modal:b},data:function(){return{url:"",invalidUrl:!1}},methods:{onLoad:function(){var t=/https?:\/\/(?:localhost:\d*|jamiezmzhang\.github\.io)\/codenames\/?#\/game\/([\w\d=]+)/,e=t.exec(this.url);e?(this.$router.replace("/game/".concat(e[1])),this.$emit("result",!0)):this.invalidUrl=!0}}}),M=k,S=Object(p["a"])(M,y,x,!1,null,null,null),T=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",[a("div",{staticClass:"modal-header justify-content-center"},[a("h5",{staticClass:"modal-title"},[t._v("Create New Game")])]),a("div",{staticClass:"modal-body"},[t._v("\n    Are you sure you want to "+t._s(t.isOwner?"delete":"leave")+" this game")]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"btn btn-secondary",on:{click:t.onConfirm}},[t._v("YES")]),a("div",{staticClass:"btn btn-light",on:{click:function(e){return t.$emit("result",!1)}}},[t._v("NO")])])])},$=[],j=n["a"].observable({user:null});window.userStore=j;var E={name:"NewGameModal",components:{Modal:b},data:function(){return{hintCopied:!1,hintTimer:null}},computed:{isOwner:function(){return this.$route.params.room===j.user.email}},methods:{onConfirm:function(){this.isOwner&&window.database.ref("clients/".concat(j.user.email.replace(/\./g,"_"))).set(null),this.$router.replace("/"),this.$emit("result",!0)}}},L=E,A=Object(p["a"])(L,O,$,!1,null,null,null),G=A.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"outsideClick",rawName:"v-outsideClick",value:t.onOutsideClick,expression:"onOutsideClick"}],staticClass:"dropdown",on:{click:t.toggleItems}},[a("div",{staticClass:"btn btn-dark dropdown-toggle"},[t._t("default")],2),a("div",{class:["dropdown-menu w-100",{show:t.show,"dropdown-menu-right":t.alignRight}]},[t._t("items")],2)])},I=[],z={name:"outsideClick",bind:function(t,e){var a=function(a){t.contains(a.target)||("function"===typeof e.value?e.value():console.error("directive outsideClick only supports function value"))};t.outsideClickListener=a,document.addEventListener("click",a),t.addEventListener("blur",a)},unbind:function(t){var e=t.outsideClickListener;document.removeEventListener("click",e),t.removeEventListener("blur",e)}},D={name:"Dropdown",directives:{outsideClick:z},props:{alignRight:Boolean},data:function(){return{show:!1}},methods:{toggleItems:function(){this.show=!this.show},onOutsideClick:function(){this.show=!1}}},R=D,B=Object(p["a"])(R,N,I,!1,null,"3da4ac06",null),P=B.exports,Z={name:"GameToolbar",components:{NewGameModal:G,LoadGameModal:T,Dropdown:P,ShareModal:_},data:function(){return{showShareModal:!1,showLoadGameModal:!1,showNewGameModal:!1}},computed:{userStore:function(){return j}},methods:{onShare:function(){"share"in navigator?navigator.share({title:"Code Names",text:"Code Names",url:window.location.href}):this.showShareModal=!0},onSignOut:function(){window.firebase.auth().signOut(),delete localStorage.user,this.userStore.user=null}}},W=Z,H=(a("7820"),Object(p["a"])(W,s,l,!1,null,"5d0fde98",null)),Y=H.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"navbar navbar-dark bg-dark justify-content-end py-1",attrs:{hidden:t.hide},on:{click:t.onClick}},[t._m(0)])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"navbar-text py-0"},[t._v("\n    Icons made by "),a("a",{attrs:{href:"https://www.freepik.com/",title:"Freepik"}},[t._v("Freepik")]),t._v(" from "),a("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is licensed by "),a("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")])])}],U={name:"Footer",data:function(){return{hide:!1,clickTime:0}},methods:{onClick:function(){var t=+new Date;t-this.clickTime<500?this.hide=!0:this.clickTime=t}}},J=U,K=Object(p["a"])(J,q,F,!1,null,null,null),Q=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",[a("div",{staticClass:"modal-header justify-content-center"},[a("h5",{staticClass:"modal-title"},[t._v("Sign In to Code Names")])]),a("div",{staticClass:"modal-body text-center d-flex flex-column"},[t.errorMessage?a("div",{staticClass:"text-danger"},[t._v("Sign In Error: "+t._s(t.errorMessage))]):t._e(),a("div",{staticClass:"btn btn-light",on:{click:t.signInGoogle}},[a("img",{staticClass:"mr-1",staticStyle:{height:"1em"},attrs:{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"}}),t._v("\n      Sign In With Google")])])])},V=[],tt=window.firebase.auth,et={name:"Login",components:{Modal:b},data:function(){return{errorMessage:null}},methods:{signInGoogle:function(){var t=new tt.GoogleAuthProvider;tt().signInWithRedirect(t)}},mounted:function(){var t=this;localStorage.user?j.user=JSON.parse(localStorage.user):tt().getRedirectResult().then(function(t){if(t.credential){var e=t.user,a=e.email,n=e.displayName;j.user={email:a,displayName:n},localStorage.user=JSON.stringify(j.user)}}).catch(function(e){return t.errorMessage=e.message})}},at=et,nt=Object(p["a"])(at,X,V,!1,null,null,null),rt=nt.exports,ot={components:{Toolbar:Y,Footer:Q,Login:rt},computed:{userStore:function(){return j}}},it=ot,st=(a("034f"),Object(p["a"])(it,o,i,!1,null,null,null)),lt=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.board?-1===t.board?a("Modal",[a("div",{staticClass:"modal-body"},[t._v("\n    This link doesn't have any games going on. Please create a new game and share the new link with your friends or wait for this room's owner to create one.\n  ")]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$router.replace("/")}}},[t._v("OK")])])]):a(t.board.type,{tag:"component",attrs:{board:t.board},on:{tileClick:t.onTileClick}}):a("LoadingModal")},dt=[],ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade show"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body text-center"},[a("div",{staticClass:"spinner-border spinner-border-sm"},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])]),t._v("\n        Loading......\n      ")])])])])}],mt={name:"LoadingModal"},vt=mt,pt=Object(p["a"])(vt,ut,ft,!1,null,null,null),ht=pt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center w-100"},[null!==t.selectConfirm?a("SelectConfirmModal",{attrs:{word:t.tiles[t.selectConfirm][t.STANDARD_TILE.word]},on:{result:t.onConfirm}}):t._e(),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"btn blue"},[t._v(t._s(t.tileCount.blue))]),a("div",{staticClass:"btn red"},[t._v(t._s(t.tileCount.red))]),a("div",{staticClass:"btn nutral"},[t._v(t._s(t.tileCount.nutral))])]),a("div",{class:["card-body board p-3",t.displayType],style:t.boardStyle},t._l(t.tiles,function(e,n){return a("div",{key:"tile-"+n,class:["btn",{selected:e[t.STANDARD_TILE.selected]},t.STANDARD_COLORS[e[t.STANDARD_TILE.color]]],attrs:{"data-glow":n===t.board.lastSelected},on:{click:function(e){return t.onWordClick(n)}}},[t._v(t._s(e[t.STANDARD_TILE.word]))])}),0)])],1)},gt=[],wt=(a("ac6a"),a("96cf"),a("20d6"),a("75fc")),Ct=a("3b8d"),_t=(a("5df3"),a("4f7f"),a("28a5"),a("0d6d"),a("bc3a")),yt=a.n(_t);function xt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(t-e+1))+e}function kt(t,e){return Mt.apply(this,arguments)}function Mt(){return Mt=Object(Ct["a"])(regeneratorRuntime.mark(function t(e,a){var n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.a.get("".concat(document.baseURI,"dicts/").concat(a,".txt")).then(function(t){return t.data.replace(/\r/g,"").split("\n").filter(function(t){return t})});case 2:n=t.sent,r=new Set;do{r.add(n[xt(n.length-1)])}while(r.size<e);return t.abrupt("return",Object(wt["a"])(r.values()));case 6:case"end":return t.stop()}},t)})),Mt.apply(this,arguments)}function St(t){var e={};return t.forEach(function(t,a){e[t]=a,e[a]=t}),Object.freeze(e),e}var Tt=St(["mine","red","blue","nutral"]),Ot=St(["color","word","selected"]);function $t(t,e,a){return jt.apply(this,arguments)}function jt(){return jt=Object(Ct["a"])(regeneratorRuntime.mark(function t(e,a,n){var r,o,i,s,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e*a,o=[],t.next=4,kt(r,n);case 4:for(i=t.sent,s=Lt(r),l=0;l<r;++l)o.push([s[l],i[l],0]);return t.abrupt("return",{width:e,type:"standard",tiles:o});case 8:case"end":return t.stop()}},t)})),jt.apply(this,arguments)}function Et(t){var e=[];e[Tt.mine]=1,e[Tt.nutral]=Math.floor(t/3),t%3===1&&(e[Tt.nutral]-=1);var a=(t-e[Tt.nutral])/2,n=xt(1);return e[n?Tt.red:Tt.blue]=a,e[n?Tt.blue:Tt.red]=a-1,e}function Lt(t){var e=Et(t),a=[],n=Object(wt["a"])(e);do{var r=xt(4);n[r]>0&&(a.push(r),n[r]-=1)}while(a.length<t);var o=xt(t-1),i=a.findIndex(function(t){return t===Tt.mine});return a[i]=a[o],a[o]=Tt.mine,a}var At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade show backdrop"},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content bg-light"},[t._m(0),a("div",{staticClass:"modal-body"},[t._v("\n        Choosing "),a("span",{staticClass:"font-weight-bold text-capitalize"},[t._v(t._s(t.word))]),t._v("?\n      ")]),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"btn btn-secondary",on:{click:function(e){return t.$emit("result",!0)}}},[t._v("YES")]),a("div",{staticClass:"btn btn-light",on:{click:function(e){return t.$emit("result",!1)}}},[t._v("NO")])])])])])},Gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header justify-content-center"},[a("h5",{staticClass:"modal-title"},[t._v("Confirm")])])}],Nt={name:"SelectConfirmModal",props:{word:{type:String,required:!0}}},It=Nt,zt=Object(p["a"])(It,At,Gt,!1,null,null,null),Dt=zt.exports,Rt=a("c8b5"),Bt={name:"StandardBoard",props:{board:Object},components:{SelectConfirmModal:Dt},data:function(){return{selectConfirm:null,mc:null,zoom:1,oldZoom:1}},computed:{displayType:function(){var t=this.$route.params.room;return t&&t!==j.user.email?"spy":"master"},tiles:function(){return this.board.tiles},STANDARD_COLORS:function(){return Tt},STANDARD_TILE:function(){return Ot},tileCount:function(){var t=this,e={};return["red","blue","nutral"].forEach(function(a){e[a]=t.tiles.filter(function(t){return t[Ot.color]===Tt[a]&&!t[Ot.selected]}).length}),e},boardStyle:function(){return{gridTemplateColumns:"repeat(".concat(this.board.width,", 1fr)"),fontSize:"".concat(this.zoom,"rem"),zoom:this.zoom}}},methods:{onWordClick:function(t){this.board.tiles[t][Ot.selected]||(this.selectConfirm=t)},onConfirm:function(t){t&&(this.$emit("tileClick","tiles/".concat(this.selectConfirm,"/").concat(Ot.selected),1),this.$emit("tileClick","lastSelected",this.selectConfirm)),this.selectConfirm=null}},mounted:function(){var t=this;this.mc=new Rt["Manager"](this.$el),this.mc.add(new Rt["Pinch"]),this.mc.on("pinchstart",function(){t.oldZoom=t.zoom}),this.mc.on("pinchmove",function(e){t.zoom=t.oldZoom*e.scale})},destroyed:function(){this.mc.destroy()}},Pt=Bt,Zt=(a("e09f"),Object(p["a"])(Pt,bt,gt,!1,null,"bfad6696",null)),Wt=Zt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column justify-content-center align-items-center w-100"},[null!==t.selectConfirm?a("SelectConfirmModal",{attrs:{word:t.tiles[t.selectConfirm].word},on:{result:t.onConfirm}}):t._e(),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header d-flex"},[a("div",{staticClass:"btn",staticStyle:{background:"var(--green)",color:"white",cursor:"default"}},[t._v(t._s(t.tileCount.green))]),a("div",{staticClass:"align-items-center d-inline-flex flex-grow-1 font-weight-bold justify-content-center text-center text-white",staticStyle:{"font-size":"25px"}},[t._v("Team "+t._s(t.playerTeam))]),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.onSwitch(e)}}},[t._v("Switch Side\n        "),a("span",{staticClass:"badge badge-light"},[t._v(t._s(t.board.turns||0))])])]),a("div",{staticClass:"card-body board p-3",style:t.boardStyle,attrs:{"data-master":!t.isGuessingTeam}},t._l(t.tiles,function(e,n){return a("div",{key:"tile-"+n,staticClass:"btn px-1",attrs:{"data-color":e["color"+t.guessingTeam],"data-selected":e["selected"+t.guessingTeam],"data-selectedGreen":"green"===e.colorA&&!!e.selectedA||"green"===e.colorB&&!!e.selectedB,"data-glow":t.board.lastSelected===n},on:{click:function(e){return t.onWordClick(n)}}},[t._v(t._s(e.word))])}),0)])],1)},Yt=[],qt={name:"DualBoard",props:{board:Object},components:{SelectConfirmModal:Dt},data:function(){return{selectConfirm:null,mc:null,zoom:1,oldZoom:1}},computed:{playerTeam:function(){return this.$route.params.room===j.user.email?"A":"B"},tiles:function(){return this.board.tiles},tileCount:function(){return{green:this.tiles.filter(function(t){return t.colorA===t.colorB&&"green"===t.colorA?!t.selectedA&&!t.selectedB:"green"===t.colorA&&!t.selectedA||"green"===t.colorB&&!t.selectedB}).length}},guessingTeam:function(){return this.board.guessingTeam},isGuessingTeam:function(){return this.guessingTeam===this.playerTeam},boardStyle:function(){return{gridTemplateColumns:"repeat(".concat(this.board.width,", 1fr)"),fontSize:"".concat(this.zoom,"rem"),zoom:this.zoom}}},methods:{onWordClick:function(t){this.isGuessingTeam&&!this.board.tiles[t]["selected".concat(this.guessingTeam)]&&(this.selectConfirm=t)},onConfirm:function(t){t&&(this.$emit("tileClick","tiles/".concat(this.selectConfirm,"/selected").concat(this.guessingTeam),1),this.$emit("tileClick","lastSelected",this.selectConfirm)),this.selectConfirm=null},onSwitch:function(){this.$emit("tileClick","guessingTeam","A"===this.guessingTeam?"B":"A"),this.$emit("tileClick","turns",this.board.turns=(this.board.turns||0)+1)}},mounted:function(){var t=this;this.mc=new Rt["Manager"](this.$el),this.mc.add(new Rt["Pinch"]),this.mc.on("pinchstart",function(){t.oldZoom=t.zoom}),this.mc.on("pinchmove",function(e){t.zoom=t.oldZoom*e.scale})},destroyed:function(){this.mc.destroy()}},Ft=qt,Ut=(a("ada9"),Object(p["a"])(Ft,Ht,Yt,!1,null,"7149dab5",null)),Jt=Ut.exports,Kt=window.database,Qt=null,Xt={name:"view-game",components:{LoadingModal:ht,Modal:b,standard:Wt,dual:Jt},data:function(){return{board:null}},computed:{room:function(){return this.$route.params.room}},watch:{room:function(t){this.subscribeDb(t)}},methods:{subscribeDb:function(t){var e=this;Qt&&Qt.off("value"),t&&(Qt=Kt.ref("clients/".concat(t.replace(/\./g,"_"))),Qt.on("value",function(t){var a=t.val();e.board=a||-1}))},onTileClick:function(t,e){Qt.child(t).set(e)},checkRotate:function(){document.getElementById("app").dataset.rotate=window.innerHeight>window.innerWidth}},mounted:function(){var t=this;window.addEventListener("orientationchange",function(){setTimeout(t.checkRotate,100)}),window.addEventListener("resize",function(){setTimeout(t.checkRotate,100)}),this.checkRotate(),this.room?this.subscribeDb(this.room):Kt.ref("clients/".concat(this.room.replace(/\./g,"_"))).once("value",function(e){e?t.$router.push("/game/".concat(j.user.email)):t.$router.push("/")})},destroyed:function(){this.subscribeDb(null),document.getElementById("app").dataset.rotate=!1}},Vt=Xt,te=Object(p["a"])(Vt,ct,dt,!1,null,null,null),ee=te.exports,ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",[t.error?[a("div",{staticClass:"modal-body"},[t._v("Error generating a new game. Please choose another dictionary or try again later.")]),a("div",{staticClass:"modal-footer"},[a("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/"}},[t._v("OK")])],1)]:a("div",{staticClass:"modal-body"},[a("div",{staticClass:"text-center"},[a("span",{staticClass:"spinner-grow spinner-grow-sm"}),t._v("\n      Generating......\n    ")])])],2)},ne=[];a("6c7b");function re(t,e,a){return oe.apply(this,arguments)}function oe(){return oe=Object(Ct["a"])(regeneratorRuntime.mark(function t(e,a,n){var r,o,i,s,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e*a,o=[],t.next=4,kt(r,n);case 4:for(i=t.sent,s=se(r),l=0;l<r;++l)o.push({word:i[l],colorA:s[0][l],colorB:s[1][l],selectedA:0,selectedB:0});return t.abrupt("return",{width:e,type:"dual",tiles:o,guessingTeam:"A"});case 8:case"end":return t.stop()}},t)})),oe.apply(this,arguments)}function ie(t){var e=Math.ceil(Math.sqrt(t))-2,a={};return a.mine=e,a.green=e*e,a}function se(t){var e="green",a="nutral",n="mine",r=ie(t),o=[new Array(t).fill(a),new Array(t).fill(a)],i=2*r.green-r.mine,s=new Set;while(s.size<i)s.add(xt(t-1));for(var l=Object(wt["a"])(s),c=0;c<2;++c)for(var d=0;d<r.green;++d){var u=l[(r.green-r.mine)*c+d];o[c][u]=e}return o.forEach(function(e){var o=0;while(o<r.mine){var i=xt(t-1);e[i]===a&&(e[i]=n,++o)}}),o}var le=window.database,ce={standard:$t,dual:re},de={name:"view-generator",components:{Modal:b},data:function(){return{error:!1}},mounted:function(){var t=this,e=this.$route.params,a=e.type,n=e.file,r=e.size,o=r.split("x").map(function(t){return parseInt(t,10)});ce[a](o[0],o[1],n).then(function(e){var a=j.user.email;le.ref("clients/".concat(a.replace(/\./g,"_"))).set(e),t.$router.replace("/game/".concat(a))}).catch(function(e){t.error=!0,console.error(e)})}},ue=de,fe=Object(p["a"])(ue,ae,ne,!1,null,"269c5d72",null),me=fe.exports,ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.generate(e)}}},[a("Modal",[a("div",{staticClass:"modal-header justify-content-center"},[a("h2",{staticClass:"modal-title"},[t._v("Code Names")])]),t.dicts&&!t.dicts.length?[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"text-center"},[t._v("\n          Error loading dictionary files. Please try again later.\n        ")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"submit"},on:{click:t.onReload}},[t._v("Reload")])])]:[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Width")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.width,expression:"form.width"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"width",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"4"}},[t._v("4")]),a("option",{attrs:{value:"5"}},[t._v("5")]),a("option",{attrs:{value:"6"}},[t._v("6")]),a("option",{attrs:{value:"7"}},[t._v("7")])]),a("div",{staticClass:"input-group-prepend input-group-append"},[a("span",{staticClass:"input-group-text"},[t._v("Height")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.height,expression:"form.height"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"height",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"4"}},[t._v("4")]),a("option",{attrs:{value:"5"}},[t._v("5")]),a("option",{attrs:{value:"6"}},[t._v("6")]),a("option",{attrs:{value:"7"}},[t._v("7")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Type")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.type,expression:"form.type"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"standard"}},[t._v("Stanard")]),a("option",{attrs:{value:"dual"}},[t._v("Dual")])])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text"},[t._v("Dict")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.dict,expression:"form.dict"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"dict",e.target.multiple?a:a[0])}}},t._l(t.dicts,function(e){return a("option",{key:e.file,domProps:{value:e.file}},[t._v(t._s(e.label))])}),0)])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"submit"}},[t._v("Create Game")])])]],2)],1)},pe=[],he=null,be={name:"view-menu",components:{Modal:b},data:function(){return{dicts:he,form:{width:5,height:5,dict:"",type:"standard"}}},watch:{dicts:function(t){t&&(he=t)}},methods:{generate:function(){var t=this.form,e=t.type,a=t.width,n=t.height,r=t.dict;this.$router.replace("/generator/".concat(e,"/").concat(a,"x").concat(n,"/").concat(r))},onReload:function(){window.location.reload()}},mounted:function(){var t=this;this.menu||yt.a.get("".concat(document.baseURI,"dicts/list.json")).then(function(e){return t.dicts=e.data}).catch(function(){return t.dicts=[]})}},ge=be,we=(a("6ee4"),Object(p["a"])(ge,ve,pe,!1,null,"502fd98e",null)),Ce=we.exports,_e=[{path:"/",component:Ce},{path:"/generator/:type/:size/:file",component:me},{path:"/game/:room?",component:ee},{path:"*",redirect:"/"}];n["a"].config.productionTip=!1;var ye=new r["a"]({routes:_e});n["a"].use(r["a"]),new n["a"]({router:ye,render:function(t){return t(lt)}}).$mount("#app")},"697f":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".row+.row[data-v-502fd98e]{margin-top:.8em}",""])},"6ee4":function(t,e,a){"use strict";var n=a("b1d6"),r=a.n(n);r.a},7820:function(t,e,a){"use strict";var n=a("b4ab"),r=a.n(n);r.a},"7f1f":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'.card[data-v-7149dab5]{background:hsla(0,0%,100%,.25);border-radius:15px}.card .card-header .btn[data-v-7149dab5]{font-weight:700}.card .card-header .btn+.btn[data-v-7149dab5]{margin-left:12px}.board[data-v-7149dab5]{display:grid;grid-auto-rows:1fr;max-width:var(--breakpoint-xl)}.board .btn[data-v-7149dab5]{font-weight:700;text-transform:capitalize;display:inline-grid;-ms-flex-line-pack:center;align-content:center;margin:5px;font-size:inherit}.board .btn[data-selected="1"][data-v-7149dab5]{cursor:default}.board .btn[data-v-7149dab5]{background-color:var(--light);border-color:transparent;color:#000}.board .btn[data-selected="1"][data-v-7149dab5]{background-color:var(--bg);color:var(--color)}.board .btn[data-selectedgreen][data-v-7149dab5]{color:#fff;background:var(--green)}.board[data-master] .btn[data-v-7149dab5]{background-color:var(--bg);color:var(--color);cursor:default}.board[data-master] .btn[data-selected="1"][data-v-7149dab5]{background-color:#fff;border-width:1px;border-color:var(--bg);color:var(--bg)}.board[data-master] .btn[data-selectedgreen][data-v-7149dab5]{background:#fff;color:var(--green)}[data-glow][data-v-7149dab5]{-webkit-box-shadow:0 0 10px 5px hsla(0,0%,100%,.27);box-shadow:0 0 10px 5px hsla(0,0%,100%,.27)}[data-color=green][data-v-7149dab5]{--bg:var(--green);--color:#fff}[data-color=mine][data-v-7149dab5]{--bg:var(--dark);--color:#fff}[data-color=nutral][data-v-7149dab5]{--bg:var(--yellow);--color:#000}',""])},ada9:function(t,e,a){"use strict";var n=a("21bd"),r=a.n(n);r.a},b117:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".red[data-v-bfad6696]{--bg:var(--red)}.blue[data-v-bfad6696],.red[data-v-bfad6696]{--color:#fff}.blue[data-v-bfad6696]{--bg:var(--blue)}.mine[data-v-bfad6696]{--bg:var(--dark);--color:#fff}.nutral[data-v-bfad6696]{--bg:var(--yellow);--color:#000}[data-glow][data-v-bfad6696]{-webkit-box-shadow:0 0 10px 5px hsla(0,0%,100%,.27);box-shadow:0 0 10px 5px hsla(0,0%,100%,.27)}.card[data-v-bfad6696]{background:hsla(0,0%,100%,.25);border-radius:15px}.card .card-header .btn[data-v-bfad6696]{background-color:var(--bg);border-color:var(--bg);color:var(--color);font-weight:700;cursor:default}.card .card-header .btn+.btn[data-v-bfad6696]{margin-left:12px}.board[data-v-bfad6696]{display:grid;grid-auto-rows:1fr;max-width:var(--breakpoint-xl)}.board .btn[data-v-bfad6696]{font-weight:700;text-transform:capitalize;display:inline-grid;-ms-flex-line-pack:center;align-content:center;margin:5px;font-size:inherit}.board .btn.selected[data-v-bfad6696]{cursor:default}.board.spy .btn[data-v-bfad6696]{background-color:var(--light);border-color:transparent;color:#000}.board.master .btn[data-v-bfad6696],.board.spy .btn.selected[data-v-bfad6696]{background-color:var(--bg);color:var(--color)}.board.master .btn.selected[data-v-bfad6696]{background-color:#fff;border-width:1px;border-color:var(--bg);color:var(--bg)}",""])},b1d6:function(t,e,a){var n=a("697f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("946ee476",n,!0,{sourceMap:!1,shadowMode:!1})},b4ab:function(t,e,a){var n=a("4917");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("4d9204cd",n,!0,{sourceMap:!1,shadowMode:!1})},e09f:function(t,e,a){"use strict";var n=a("2b11"),r=a.n(n);r.a},e2a1:function(t,e,a){var n=a("3f8c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("1f50beb8",n,!0,{sourceMap:!1,shadowMode:!1})}});