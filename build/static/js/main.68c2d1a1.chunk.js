(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},48:function(e,a,t){},53:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(13),o=t.n(s),r=(t(47),t(28)),m=t(87),l=t(83),i=t(84),u=(t(48),Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return c.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},c.a.createElement(m.a,{className:n?"message__userCard":"message__guestCard"},c.a.createElement(l.a,null,c.a.createElement(i.a,{variant:"h5",component:"h2"},c.a.createElement("span",{style:{fontWeight:"bold"}},!n&&"".concat(t.username||"unknown user",": ")),t.message))))}))),p=t(88),f=t(86),d=t(85),g=(t(53),t(27)),b=t.n(g),h=b.a.initializeApp({apiKey:"AIzaSyAdBkSbyfxmpyr8RJFbt7VcLJwAM-DjNgI",authDomain:"facebook-messenger-clone-97e3c.firebaseapp.com",databaseURL:"https://facebook-messenger-clone-97e3c.firebaseio.com",projectId:"facebook-messenger-clone-97e3c",storageBucket:"facebook-messenger-clone-97e3c.appspot.com",messagingSenderId:"1062331767222",appId:"1:1062331767222:web:b39ecfc3b65312e5928917",measurementId:"G-KM4TCWH6FM"}).firestore(),E=t(39),v=t(38),w=t.n(v);var k=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],s=a[1],o=Object(n.useState)([]),m=Object(r.a)(o,2),l=m[0],i=m[1],g=Object(n.useState)(""),v=Object(r.a)(g,2),k=v[0],_=v[1];return Object(n.useEffect)((function(){h.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(n.useEffect)((function(){_(prompt("Please enter your name"))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement("img",{alt:"",src:"https://www.bing.com/th?id=AMMS_d682234ca450e69f1c2b3f29ae450359&w=110&h=110&c=7&rs=1&qlt=80&pcl=f9f9f9&cdv=1&pid=16.1"}),c.a.createElement("h1",null,"Facebook Messenger app"),c.a.createElement("p",null,"welcome ",k),c.a.createElement("form",{className:"app__form"},c.a.createElement(p.a,{className:"app__formControl"},c.a.createElement(f.a,{value:t,className:"app__input",placeholder:"enter a message ...",onChange:function(e){return s(e.target.value)}}),c.a.createElement(d.a,{className:"app__iconButton",disabled:!t,type:"submit",variant:"contained",color:"primary",onClick:function(e){return e.preventDefault(),h.collection("messages").add({message:t,username:k,timestamp:b.a.firestore.FieldValue.serverTimestamp()}),void s("")}},c.a.createElement(w.a,null)))),c.a.createElement(E.a,null,l.map((function(e){var a=e.id,t=e.message;return c.a.createElement(u,{key:a,message:t,username:k})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.68c2d1a1.chunk.js.map