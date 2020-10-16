(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),r=a.n(o),c=a(59),s=a(18),i=a(14),m=a(3),u={unescape:function(e){var t=document.createElement("span");return t.innerHTML=e,t.innerText},formatSeconds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=parseInt(e/60).toString(),a=parseInt(e%60).toString();return t.length<2&&(t="0".repeat(2-t.length)+t),a.length<2&&(a="0".repeat(2-a.length)+a),t+":"+a},completionPercentage:function(e,t){return e/t*100},downloadJson:function(e,t){var a=document.createElement("a");a.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,4))),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},downloadSong:function(e){var t=document.createElement("a");t.setAttribute("href",e.media_url),t.setAttribute("target","_blank"),t.setAttribute("download",e.song+".mp4"),t.style.display="none",document.body.appendChild(t),t.click(),console.log({element:t}),document.body.removeChild(t)}},d=a(135),g=a(129),f={song:"Some Song",singers:"Some Singer",play_count:9999999,media_url:"",label:"Some Label",image:"https://images.unsplash.com/photo-1573247353133-0290e4606fbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"};function p(e){var t=e.song,a=e.nextSong,o=e.prevSong;t||(t=f);var r=Object(n.useState)(!0),c=Object(m.a)(r,2),s=(c[0],c[1]),i=Object(n.useState)(.3),p=Object(m.a)(i,2),y=p[0],v=p[1],b=Object(n.useState)(0),x=Object(m.a)(b,2),h=x[0],E=x[1],N=Object(n.useState)(0),w=Object(m.a)(N,2),S=w[0],j=w[1],k=Object(n.useState)(new Audio),O=Object(m.a)(k,2),C=O[0],P=O[1];if(Object(n.useEffect)((function(){if(t){var e=new Audio(t.media_url);e.volume=y,P(e)}}),[t]),Object(n.useEffect)((function(){return C&&(C.onloadedmetadata=function(e){E(C.duration),j(C.currentTime),I()},C.onerror=function(e){e=C.error,console.log("Error "+C.error.code+"; details: "+C.error.message),2===e.code&&(C.src=t.media_url+"?v="+(new Date).getTime(),C.load(),C.play())},C.onwaiting=function(e){},C.onended=function(e){a()},C.ontimeupdate=function(e){j(e.target.currentTime)}),console.info("Player updated!"),function(){C.pause(),C.removeAttribute("src"),C.load()}}),[C]),!t||!C||!C.src)return l.a.createElement("span",null,"Please choose a song!");var I=function(){return s(!1),C.play()};return l.a.createElement("div",{className:"player p-5"},l.a.createElement("div",{className:"player-card px-8 text-center bg-white p-3 rounded-lg"},l.a.createElement("div",{className:"beat-box mx-auto my-3 flex justify-center items-center",style:{width:"150px",height:"150px"}},l.a.createElement("img",{src:t.image,alt:t.song,style:{width:"150px",height:"150px"},className:"rounded-full shadow-lg mx-auto mb-5 "+(C.paused?"":"heart-beat")})),l.a.createElement("div",{className:"font-bold text-gray-800"},u.unescape(t.song)),l.a.createElement("div",{className:"text-gray-500 text-xs"},u.unescape(t.singers)),l.a.createElement(d.a,{value:u.completionPercentage(S,h),onChange:function(e,t){var a;a=h*(t/100),C.currentTime=a,j(a)}}),l.a.createElement("div",{className:"flex justify-between text-gray-500 text-xxs"},l.a.createElement("span",null,u.formatSeconds(S)),l.a.createElement("span",null,u.formatSeconds(h)))),l.a.createElement("div",{className:"flex player-card bg-white shadow rounded-lg justify-center mt-5"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("i",{className:"icon icon-to-start cursor-pointer text-gray-600 hover:text-red-500",title:"Play Previous",onClick:function(){o()}}),l.a.createElement("div",{className:"play-pause-overlay p-2 shadow rounded-full m-5"},C.paused?l.a.createElement("i",{className:"text-xl icon icon-play bg-white cursor-pointer text-gray-800 hover:bg-red-500 hover:text-white flex justify-center items-center rounded-full text-center w-10 h-10 play-button",title:"Play",onClick:function(){I()}}):l.a.createElement("i",{className:"text-xl icon icon-pause bg-white cursor-pointer text-gray-800 hover:bg-red-500 hover:text-white flex justify-center items-center rounded-full text-center w-10 h-10 pause-button",title:"Pause",onClick:function(){s(!0),C.pause()}})),l.a.createElement("i",{className:"icon icon-to-end cursor-pointer text-gray-600 hover:text-red-500",title:"Play Next",onClick:function(){a()}})),l.a.createElement("div",{className:"flex items-center text-xs text-gray-500"},l.a.createElement(g.a,{item:!0,xs:!0,style:{margin:"5px 0 0 1.25rem"}},l.a.createElement(d.a,{value:100*y,color:"primary",onChange:function(e,t){var a;a=t/100,C.volume=a,v(a)},"aria-labelledby":"continuous-slider",style:{width:"100px"}})))))}var y=a(58),v=a.n(y),b=a(134);function x(e){var t=e.recent,a=e.songIndex,n=e.playSong;return l.a.createElement("div",{className:"pr-5 cursor-pointer",title:"Play "+t.song,onClick:function(){n("Recent",a)}},l.a.createElement("div",{style:{height:"150px",width:"150px"},className:"mb-3"},l.a.createElement("img",{src:t.image_500?t.image_500:t.image,className:"shadow rounded-lg",alt:t.song})),l.a.createElement("div",{className:"text-gray-800 text-sm truncate"},l.a.createElement("div",{className:"font-bold"},u.unescape(t.song)),l.a.createElement("div",{className:"text-gray-500 text-xs"},"Album: ",u.unescape(t.album))))}var h=a(130),E=a(131);function N(e){var t=e.song,a=e.songIndex,o=e.playSong,r=e.playingList,c=e.selectedPlaylist,s=e.playlists,i=e.addToPlaylist,d=e.removeFromPlaylist,g=Object(n.useState)(!1),f=Object(m.a)(g,2),p=f[0],y=f[1];return l.a.createElement("div",{onMouseLeave:function(){p&&y(!1)},className:"px-2 py-2 bg-white playlist-item rounded my-3 flex items-center hover:shadow-lg"},l.a.createElement("span",{className:"font-bold mx-3 w-4"},a+1),l.a.createElement("img",{src:t.image,className:"rounded w-12 h-12 border",alt:t.song}),l.a.createElement("i",{className:"icon icon-play text-gray-300 mx-1",style:c===r[0]&&a===r[1]?{color:"red"}:{}}),l.a.createElement("div",{title:"Play "+t.song,className:"font-bold truncate w-56 flex-grow pr-3 flex-shrink-0 cursor-pointer",onClick:function(){o(c,a)}},t.song),l.a.createElement("div",{className:"text-gray-500 font-semibold w-48 truncate flex-shrink-0"},t.singers),l.a.createElement("div",{className:"text-gray-500 font-semibold w-24"},u.formatSeconds(t.duration)),l.a.createElement("div",{className:"text-gray-500 font-semibold w-16 cursor-pointer"},l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){i("Favorite",t)}},l.a.createElement(h.a,{htmlColor:t.isFavorite?"red":"#ddd",className:"favorite-maker"}))),l.a.createElement("div",{className:"text-gray-500 font-semibold w-16 cursor-pointer relative"},l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){y(!p)}},l.a.createElement(E.a,{className:"favorite-maker"})),p&&l.a.createElement("div",{className:"item-menu bg-white shadow-lg py-2 rounded"},s.map((function(e){return l.a.createElement("button",{key:e,onClick:function(){i(e,t)},className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none"},"Add to ",e)})),l.a.createElement("button",{className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none",onClick:function(){u.downloadSong(t)}},"Download"),l.a.createElement("button",{className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none",onClick:function(){d(c,t)}},"Remove"))))}var w=a(55),S=a.n(w);function j(e){var t=e.children,a={dots:!1,infinite:!0,slidesToShow:t.length>=4?4:t.length,slidesToScroll:1};return l.a.createElement("div",null,l.a.createElement(S.a,Object.assign({},a,{arrows:!0}),t))}var k=a(19),O=a.n(k),C=a(56),P=a.n(C),I=a(132);function R(e){var t=e.suggestion,a=e.playSong;return l.a.createElement("div",{className:"p-2 hover:bg-gray-100 animated flex items-center cursor-pointer",title:"Play "+t.song,onClick:function(){a(t)}},l.a.createElement("img",{src:t.image,className:"rounded w-12 h-12 border",alt:t.song}),l.a.createElement("div",{className:"flex-grow text-gray-800 text-xs truncate pl-2"},l.a.createElement("div",null,"Song: ",t.song),l.a.createElement("div",null,"Album: ",t.album),l.a.createElement("div",null,"Singers: ",t.singers)))}var T="https://pru-saavn.herokuapp.com/api",A={search:function(e){return T+"/search?query="+e},signIn:T+"/google-signin",syncUp:T+"/sync-up",syncDown:T+"/sync-down"};function F(e){var t=e.size,a=void 0===t?"48px":t,n=e.color,o=void 0===n?"#202020":n,r=e.className,c=void 0===r?"":r;return l.a.createElement("div",{className:c},l.a.createElement("span",{className:"spinner",style:{width:a,height:a,borderRightColor:o}}))}function z(e){var t=e.suggestions,a=e.setSuggestions,o=e.addToPlaylist,r=e.playSong,c=Object(n.useState)(!1),s=Object(m.a)(c,2),i=s[0],u=s[1],d=Object(n.useState)(""),g=Object(m.a)(d,2),f=g[0],p=g[1],y=Object(n.useCallback)(P()((function(e){u(!0),O.a.get(A.search(e)).then((function(e){a(e.data),u(!1)}))}),1e3),[]),v=function(e){p(""),a([])},x=function(e){v();var t=o("Recent",e);Number.isInteger(t)&&r("Recent",t)};return l.a.createElement("div",{onMouseLeave:function(){v()},className:"pt-6 py-2 px-10 search-box w-full md:w-1/2"},l.a.createElement("input",{value:f,className:"border py-3 px-5 w-full focus:outline-none",style:t.length>0?{borderTopLeftRadius:"0.5em",borderTopRightRadius:"0.5em",borderBottom:"none"}:{borderRadius:"2em"},placeholder:"Search...",onChange:function(e){var t=e.target.value;p(t),t.trim()?y(t):y.cancel()}}),i?l.a.createElement(F,{size:"24px",className:"loading-suggestion"}):t.length>0?l.a.createElement(b.a,{className:"clear-suggestion focus:outline-none",title:"Clear Suggestions",onClick:function(){v()}},l.a.createElement(I.a,{fontSize:"small"})):l.a.createElement("span",null),t.length>0&&l.a.createElement("div",{className:"suggestion-box rounded-lg px-10 w-full md:w-1/2"},l.a.createElement("div",{className:"bg-white py-2 shadow-lg border"},i?l.a.createElement(F,{size:"24px",className:"mt-2 w-full flex justify-center"}):t.map((function(e){return l.a.createElement(R,{suggestion:e,playSong:x,key:e.id})})))))}var L=a(133);function M(e){var t=e.buttons,a=void 0===t?[]:t,o=e.small,r=void 0!==o&&o,c=e.onClick,s=void 0===c?function(e){}:c,i=Object(n.useState)(!1),u=Object(m.a)(i,2),d=u[0],g=u[1];return l.a.createElement("span",{onMouseLeave:function(){g(!1)},onClick:s,className:"text-gray-500 font-semibold cursor-pointer relative"},l.a.createElement(b.a,{className:"focus:outline-none",size:r?"small":"medium",onClick:function(){g(!d)}},l.a.createElement(E.a,{className:"favorite-maker"})),d&&l.a.createElement("div",{className:"item-menu bg-white shadow-lg py-2 rounded"},a.map((function(e,t){return l.a.createElement("button",{key:t,onClick:function(){e.action()},className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none"},e.label)}))))}function _(e){var t=e.playlists,a=e.addPlaylist,o=e.removePlaylist,r=e.selectPlaylist,c=e.selectedPlaylist,s=Object(n.useState)(""),i=Object(m.a)(s,2),u=i[0],d=i[1];return l.a.createElement("div",{className:"sidebar bg-white"},l.a.createElement("div",{className:"p-10 flex flex-col items-center"},l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/20546147?s=460&v=4",className:"rounded-full w-32 h-32 shadow-lg"}),l.a.createElement("div",{className:"font-bold text-gray-800 text-xl mt-5 text-center"},"Chahar"),l.a.createElement("div",{className:"text-gray-500 text-center"},"chaharshubhamsingh")),l.a.createElement("div",{className:"px-4"},l.a.createElement("div",{className:"px-4 mb-5 uppercase font-bold text-gray-500"},"My Music"),Object.keys(t).map((function(e){return l.a.createElement("div",{className:"px-4 text-gray-800 flex justify-between items-center font-bold py-2 hover:bg-gray-300 my-1 rounded-lg cursor-pointer "+(e===c?"bg-gray-300":""),onClick:function(){r(e)},key:e},l.a.createElement("span",null,e),l.a.createElement(M,{onClick:function(e){return e.stopPropagation()},small:!0,buttons:[{action:function(){!function(e){r(e)}("Recent"),o(e)},label:"Remove"}]}))})),l.a.createElement("div",{className:"relative"},l.a.createElement("input",{className:"px-4 text-gray-800 font-bold py-2 my-2 bg-gray-100 rounded-lg focus:outline-none",placeholder:"Add playlist...",value:u,onKeyDown:function(e){"Enter"===e.key&&e.target.value.length>0&&(a(u),d(""))},onChange:function(e){d(e.target.value)}}),u&&l.a.createElement(b.a,{size:"small",className:"focus:outline-none",onClick:function(){a(u),d("")},style:{position:"absolute",right:"15px",top:"13px"}},l.a.createElement(L.a,null)))))}var J="68653039486-gp4tfq33cq0q70v9nb0f9bk46d3r53ca.apps.googleusercontent.com",B=a(57),D=a.n(B);function q(e){var t=e.onSignIn,a=e.onSignInError,o=e.user,r=e.syncToServer,c=e.syncFromServer,s=Object(n.useState)(!1),i=Object(m.a)(s,2),u=i[0],d=i[1];return l.a.createElement("span",{className:"px-4 pt-6"},o?l.a.createElement("div",{className:"relative",onMouseLeave:function(){d(!1)},onMouseEnter:function(){d(!0)}},l.a.createElement("span",{onClick:function(){d(!u)},className:"px-2 mx-2 py-1 cursor-pointer"},o.name),u&&l.a.createElement("div",{className:"bg-white rounded text-gray-800 shadow-lg py-2",style:{position:"absolute",right:"1rem",zIndex:5}},l.a.createElement("div",{className:"px-4 py-2 cursor-pointer"},o.email),l.a.createElement("div",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",title:"Sync playlist to server",onClick:function(){r()}},"Sync to server"),l.a.createElement("div",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer",title:"Sync playlist to server",onClick:function(){c()}},"Sync from server"))):l.a.createElement(D.a,{clientId:J,buttonText:"Login",onSuccess:t,render:function(e){return l.a.createElement("button",{className:"px-2 mx-2 rounded py-1 cursor-pointer shadow "+(e.disabled?"bg-gray-200 text-gray-500":"bg-blue-500 text-white"),onClick:e.onClick,disabled:e.disabled},"Login")},onFailure:a,isSignedIn:!0,cookiePolicy:"single_host_origin"}))}var U=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(["Recent",0]),u=Object(m.a)(r,2),d=u[0],g=u[1],f=Object(n.useState)("Recent"),y=Object(m.a)(f,2),h=y[0],E=y[1],w=Object(n.useState)([]),S=Object(m.a)(w,2),k=S[0],C=S[1],P=Object(n.useState)({Recent:[],Favorite:[]}),I=Object(m.a)(P,2),R=I[0],T=I[1],F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.log("updating",Object(i.a)(Object(i.a)({},R),{},Object(s.a)({},e,t))),L(Object(i.a)(Object(i.a)({},R),{},Object(s.a)({},e,t)))},L=function(e){localStorage.setItem("playlists",JSON.stringify(e)),T(e)},M=function(e,t){if(e in R){var a=R[e],n=R[e].findIndex((function(e){return e.id===t.id}));return n<0?(F(e,[].concat(Object(c.a)(a),[t])),a.length):n}},J=function(e,t){if(e in R){var a=R[e].findIndex((function(e){return e.id===t.id}));if(a>-1){var n=R[e];n.splice(a,1),F(e,n)}}},B=function(e,t){console.log("playing",e,t),g([e,t]);try{var a=R[e][t];a&&-1===R.Recent.findIndex((function(e){return e.id===a.id}))&&M("Recent",a)}catch(n){console.log("adding to recent failed at playSong")}},D=function(e){O.a.get(A.signIn,{headers:{Authorization:"Bearer "+e.tokenId}}).then((function(e){var t=e.data.user;o(t),localStorage.setItem("user",JSON.stringify(t))})).catch((function(e){console.log({error:e})}))},U=function(e){console.error(e)};return Object(n.useEffect)((function(){var e=localStorage.getItem("playlists"),t=[],a=[],n={};try{var l=JSON.parse(e);if(l&&"object"===typeof l)for(var o in"Recent"in l&&(t=l.Recent,delete l.Recent),"Favorite"in l&&(a=l.Favorite,delete l.Favorite),l)n[o]=l[o]}catch(r){}n.Recent=t,n.Favorite=a,localStorage.setItem("playlists",JSON.stringify(n)),T(n)}),[]),l.a.createElement("div",{className:"bg-gray-100"},l.a.createElement(_,{playlists:R,addPlaylist:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(i.a)(Object(i.a)({},R),{},Object(s.a)({},e,t));L(a)},selectedPlaylist:h,removePlaylist:function(e){if(e in R&&!["Recent","Favorite"].includes(e)){var t=Object(i.a)({},R);delete t[e],console.log("updating",t),L(t),h===e&&E("Recent")}},selectPlaylist:function(e){E(e)}}),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"flex justify-between items-center"},l.a.createElement(z,{suggestions:k,setSuggestions:C,addToPlaylist:M,playSong:B,onSignIn:D,onSignInError:U}),l.a.createElement(q,{onSignIn:D,onSignInError:U,syncToServer:function(){O.a.post(A.syncUp,{playlists:R},{headers:{Authorization:"Bearer "+a.token}})},syncFromServer:function(){O.a.get(A.syncDown,{headers:{Authorization:"Bearer "+a.token}}).then((function(e){var t=e.data;L(t.playlists)}))},user:a})),l.a.createElement("div",{className:"pl-10 pt-3 flex pb-48"},l.a.createElement("div",{className:"md:w-3/5 w-full"},R.Recent.length>0&&l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-center"},l.a.createElement("span",{className:"text-xl font-bold text-gray-800 mr-3"},"Recent Played"),l.a.createElement(b.a,{typeof:"danger",className:"focus:outline-none",onClick:function(){R.Recent.length>0&&F("Recent",[])}},l.a.createElement(v.a,{fontSize:"small"}))),l.a.createElement("div",{className:"mt-3"},l.a.createElement(j,null,R.Recent.map((function(e,t){return l.a.createElement(x,{recent:e,songIndex:t,playSong:B,key:e.id})}))))),l.a.createElement("div",{className:"py-5"},l.a.createElement("h1",{className:"text-xl font-bold text-gray-800"},h||"No playlist selected"),l.a.createElement("span",{className:"font-bold text-gray-500 text-xs"},h&&R[h]?R[h].length:"0"," Song(s)"),l.a.createElement("div",{className:"py-2"},h&&R[h]&&R[h].map((function(e,t){return l.a.createElement(N,{song:e,songIndex:t,playSong:B,key:e.id,playingList:d,selectedPlaylist:h,playlists:Object.keys(R),addToPlaylist:M,removeFromPlaylist:J})}))))),l.a.createElement("div",{className:"md:w-2/5 w-full px-5"},l.a.createElement("h1",{className:"text-xl font-bold text-gray-800"},"Now Playing > ",d[0]),l.a.createElement("span",{className:"font-bold text-gray-500 text-xs"},R[d[0]].length," Song(s) on the list"),l.a.createElement("div",{className:"py-2"},l.a.createElement(p,{song:R[d[0]][d[1]],nextSong:function(){var e=Object(m.a)(d,2),t=e[0],a=e[1];a===R[t].length-1?g([t,0]):g([t,a+1])},prevSong:function(){var e=Object(m.a)(d,2),t=e[0],a=e[1];g(0===a?[t,R[t].length-1]:[t,a-1])}}))))))};a(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(115)}},[[63,1,2]]]);
//# sourceMappingURL=main.4773986c.chunk.js.map