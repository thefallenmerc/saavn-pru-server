(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(18),r=a.n(o),s=a(35),c=a(20),i=a(14),m=a(3),u={unescape:function(e){var t=document.createElement("span");return t.innerHTML=e,t.innerText},formatSeconds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=parseInt(e/60).toString(),a=parseInt(e%60).toString();return t.length<2&&(t="0".repeat(2-t.length)+t),a.length<2&&(a="0".repeat(2-a.length)+a),t+":"+a},completionPercentage:function(e,t){return e/t*100},downloadJson:function(e,t){var a=document.createElement("a");a.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,4))),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},downloadSong:function(e){var t=document.createElement("a");t.setAttribute("href",e.media_url),t.setAttribute("target","_blank"),t.setAttribute("download",e.song+".mp4"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}},d=a(137),g=a(129),f={song:"Some Song",singers:"Some Singer",play_count:9999999,media_url:"",label:"Some Label",image:"https://images.unsplash.com/photo-1573247353133-0290e4606fbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"};function p(e){var t=e.song,a=e.nextSong,o=e.prevSong,r=e.isMusicPlayerVisible,s=e.setIsMusicPlayerVisible;t||(t=f);var c=Object(n.useState)(!0),i=Object(m.a)(c,2),p=(i[0],i[1]),y=Object(n.useState)(.3),v=Object(m.a)(y,2),b=v[0],x=v[1],h=Object(n.useState)(0),E=Object(m.a)(h,2),N=E[0],S=E[1],w=Object(n.useState)(0),k=Object(m.a)(w,2),j=k[0],O=k[1],P=Object(n.useState)(new Audio),C=Object(m.a)(P,2),I=C[0],T=C[1];if(Object(n.useEffect)((function(){if(t){var e=new Audio(t.media_url);e.volume=b,T(e)}}),[t]),Object(n.useEffect)((function(){return I&&(I.onloadedmetadata=function(e){S(I.duration),O(I.currentTime),R()},I.onerror=function(e){e=I.error,console.log("Error "+I.error.code+"; details: "+I.error.message),2===e.code&&(I.src=t.media_url+"?v="+(new Date).getTime(),I.load(),I.play())},I.onwaiting=function(e){},I.onended=function(e){a()},I.ontimeupdate=function(e){O(e.target.currentTime)}),console.info("Player updated!"),function(){I.pause(),I.removeAttribute("src"),I.load()}}),[I]),!t||!I||!I.src)return l.a.createElement("span",null,"Please choose a song!");var R=function(){return p(!1),I.play()};return l.a.createElement("div",{onClick:function(){s(!1)},className:"MusicPlayer animated player p-5 "+(r?" visible-on-mobile":"")},l.a.createElement("div",{onClick:function(e){e.stopPropagation()},className:"player-card px-8 text-center bg-white p-3 rounded-lg"},l.a.createElement("div",{className:"beat-box mx-auto my-3 flex justify-center items-center",style:{width:"150px",height:"150px"}},l.a.createElement("img",{src:t.image,alt:t.song,style:{width:"150px",height:"150px"},className:"rounded-full shadow-lg mx-auto mb-5 "+(I.paused?"":"heart-beat")})),l.a.createElement("div",{className:"font-bold text-gray-800"},u.unescape(t.song)),l.a.createElement("div",{className:"text-gray-500 text-xs"},u.unescape(t.singers)),l.a.createElement(d.a,{value:u.completionPercentage(j,N),onChange:function(e,t){var a;a=N*(t/100),I.currentTime=a,O(a)}}),l.a.createElement("div",{className:"flex justify-between text-gray-500 text-xxs"},l.a.createElement("span",null,u.formatSeconds(j)),l.a.createElement("span",null,u.formatSeconds(N)))),l.a.createElement("div",{onClick:function(e){e.stopPropagation()},className:"flex player-card bg-white shadow rounded-lg justify-center mt-5"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("i",{className:"icon icon-to-start cursor-pointer text-gray-600 hover:text-red-500",title:"Play Previous",onClick:function(){o()}}),l.a.createElement("div",{className:"play-pause-overlay p-2 shadow rounded-full m-5"},I.paused?l.a.createElement("i",{className:"text-xl icon icon-play bg-white cursor-pointer text-gray-800 hover:bg-red-500 hover:text-white flex justify-center items-center rounded-full text-center w-10 h-10 play-button",title:"Play",onClick:function(){R()}}):l.a.createElement("i",{className:"text-xl icon icon-pause bg-white cursor-pointer text-gray-800 hover:bg-red-500 hover:text-white flex justify-center items-center rounded-full text-center w-10 h-10 pause-button",title:"Pause",onClick:function(){p(!0),I.pause()}})),l.a.createElement("i",{className:"icon icon-to-end cursor-pointer text-gray-600 hover:text-red-500",title:"Play Next",onClick:function(){a()}})),l.a.createElement("div",{className:"flex items-center text-xs text-gray-500"},l.a.createElement(g.a,{item:!0,xs:!0,style:{margin:"5px 0 0 1.25rem"}},l.a.createElement(d.a,{value:100*b,color:"primary",onChange:function(e,t){var a;a=t/100,I.volume=a,x(a)},"aria-labelledby":"continuous-slider",style:{width:"100px"}})))))}var y=a(37),v=a.n(y),b=a(136),x=a(134),h=a(135);function E(e){var t=e.recent,a=e.songIndex,n=e.playSong;return l.a.createElement("div",{className:"pr-5 cursor-pointer",title:"Play "+t.song,onClick:function(){n("Recent",a)}},l.a.createElement("div",{style:{height:"150px",width:"150px"},className:"mb-3"},l.a.createElement("img",{src:t.image_500?t.image_500:t.image,className:"shadow rounded-lg",alt:t.song})),l.a.createElement("div",{className:"text-gray-800 text-sm truncate"},l.a.createElement("div",{className:"font-bold"},u.unescape(t.song)),l.a.createElement("div",{className:"text-gray-500 text-xs"},"Album: ",u.unescape(t.album))))}var N=a(130),S=a(131);function w(e){var t=e.song,a=e.songIndex,o=e.playSong,r=e.playingList,s=e.selectedPlaylist,c=e.playlists,i=e.addToPlaylist,d=e.removeFromPlaylist,g=Object(n.useState)(!1),f=Object(m.a)(g,2),p=f[0],y=f[1];return l.a.createElement("div",{onMouseLeave:function(){p&&y(!1)},className:"PlaylistItem px-2 py-2 bg-white playlist-item rounded my-3 flex items-center hover:shadow-lg"},l.a.createElement("span",{className:"font-bold mx-3 w-4 hidden md:block"},a+1),l.a.createElement("img",{src:t.image,className:"rounded w-12 h-12 border",alt:t.song}),l.a.createElement("i",{className:"icon icon-play text-gray-300 mx-1",style:s===r[0]&&a===r[1]?{color:"red"}:{}}),l.a.createElement("div",{className:"flex-grow"},l.a.createElement("div",{title:"Play "+t.song,className:"font-bold truncate md:w-56 md:flex-grow pr-3 md:flex-shrink-0 cursor-pointer",onClick:function(){o(s,a)}},t.song),l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"text-gray-500 font-semibold pr-2 truncate md:flex-shrink-0"},t.singers),l.a.createElement("div",{className:"text-gray-500 font-semibold md:w-24"},u.formatSeconds(t.duration)))),l.a.createElement("div",{className:"text-gray-500 font-semibold flex-shrink-0 cursor-pointer hidden md:block"},l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){i("Favorite",t)}},l.a.createElement(N.a,{htmlColor:t.isFavorite?"red":"#ddd",className:"favorite-maker"}))),l.a.createElement("div",{className:"text-gray-500 font-semibold flex-shrink-0 cursor-pointer relative"},l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){y(!p)}},l.a.createElement(S.a,{className:"favorite-maker"})),p&&l.a.createElement("div",{className:"item-menu bg-white shadow-lg py-2 rounded"},c.map((function(e){return l.a.createElement("button",{key:e,onClick:function(){i(e,t)},className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none"},"Add to ",e)})),l.a.createElement("button",{className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none",onClick:function(){u.downloadSong(t)}},"Download"),l.a.createElement("button",{className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none",onClick:function(){d(s,t)}},"Remove"))))}var k=a(57),j=a.n(k);function O(e){var t=e.children,a={dots:!1,infinite:!0,slidesToShow:t.length>=4?4:t.length,slidesToScroll:1,responsive:[{breakpoint:1400,settings:{slidesToShow:t.length>=3?3:t.length,slidesToScroll:3}},{breakpoint:1200,settings:{slidesToShow:t.length>=2?2:t.length,slidesToScroll:2}},{breakpoint:720,settings:{slidesToShow:t.length>=3?3:t.length,slidesToScroll:3}},{breakpoint:640,settings:{slidesToShow:t.length>=2?2:t.length,slidesToScroll:2}}]};return l.a.createElement("div",{className:"RecentCarousal"},l.a.createElement(j.a,Object.assign({},a,{arrows:!0}),t))}var P=a(21),C=a.n(P),I=a(58),T=a.n(I),R=a(132);function F(e){var t=e.suggestion,a=e.playSong,o=e.playlists,r=(e.selectedPlaylist,e.addToPlaylist),s=(e.removeFromPlaylist,e.setIsFocused),c=Object(n.useState)(!1),i=Object(m.a)(c,2),d=i[0],g=i[1];return l.a.createElement("div",{onMouseLeave:function(){},className:"p-2 hover:bg-gray-100 animated flex items-center cursor-pointer"},l.a.createElement("div",{title:"Play "+t.song,className:"flex items-center justify-between flex-grow",onClick:function(){a(t),s(!1)}},l.a.createElement("img",{src:t.image,className:"rounded w-12 h-12 border",alt:t.song}),l.a.createElement("div",{className:"flex-grow text-gray-800 text-xs truncate pl-2"},l.a.createElement("div",null,"Song: ",t.song),l.a.createElement("div",null,"Album: ",t.album),l.a.createElement("div",null,"Singers: ",t.singers))),l.a.createElement("div",{className:"text-gray-500 font-semibold w-16 cursor-pointer relative"},l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){g(!d)}},l.a.createElement(S.a,{className:"favorite-maker"})),d&&l.a.createElement("div",{className:"item-menu bg-white shadow-lg py-2 rounded"},o.map((function(e){return l.a.createElement("button",{key:e,onClick:function(){r(e,t)},className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none"},"Add to ",e)})),l.a.createElement("button",{className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none",onClick:function(){u.downloadSong(t)}},"Download"))))}var A="https://pru-saavn.herokuapp.com/api",M={search:function(e){return A+"/search?query="+e},signIn:A+"/google-signin",syncUp:A+"/sync-up",syncDown:A+"/sync-down"};function L(e){var t=e.size,a=void 0===t?"48px":t,n=e.color,o=void 0===n?"#202020":n,r=e.className,s=void 0===r?"":r;return l.a.createElement("div",{className:s},l.a.createElement("span",{className:"spinner",style:{width:a,height:a,borderRightColor:o}}))}function z(e){var t=e.suggestions,a=e.setSuggestions,o=e.addToPlaylist,r=e.playSong,s=(e.playingList,e.selectedPlaylist),c=e.playlists,i=e.removeFromPlaylist,u=(e.isSidebarOpen,e.setIsSidebarOpen,e.isMusicPlayerVisible,e.setIsMusicPlayerVisible,Object(n.useState)(!1)),d=Object(m.a)(u,2),g=d[0],f=d[1],p=Object(n.useState)(!1),y=Object(m.a)(p,2),v=y[0],x=y[1],h=Object(n.useState)(""),E=Object(m.a)(h,2),N=E[0],S=E[1],w=Object(n.useCallback)(T()((function(e){f(!0),C.a.get(M.search(e)).then((function(e){a(e.data),f(!1)}))}),1e3),[]),k=function(e){S(""),a([])},j=function(e){k();var t=o("Recent",e);Number.isInteger(t)&&r("Recent",t)};return l.a.createElement("div",{onMouseLeave:function(){},onClick:function(){x(!0)},className:"SearchBox animated md:px-10 search-box w-full md:w-1/2 flex items-center "+(v?"focused ":"")+(t.length>0?"has-suggestions":"")},l.a.createElement("input",{value:N,className:"border px-3 py-2 m:py-3 m:px-5 w-full focus:outline-none flex-grow",style:t.length>0?{borderTopLeftRadius:"0.5em",borderTopRightRadius:"0.5em",borderBottom:"none"}:{borderRadius:"2em"},placeholder:"Search...",onChange:function(e){var t=e.target.value;S(t),t.trim()?w(t):w.cancel()}}),g?l.a.createElement(L,{size:"24px",className:"loading-suggestion"}):t.length>0?l.a.createElement(b.a,{className:"clear-suggestion focus:outline-none",title:"Clear Suggestions",onClick:function(e){k(),x(!1),e.stopPropagation()}},l.a.createElement(R.a,{fontSize:"small"})):l.a.createElement("span",null),t.length>0&&l.a.createElement("div",{className:"suggestion-box rounded-lg px-10 w-full md:w-1/2"},l.a.createElement("div",{className:"bg-white py-2 shadow-lg border"},g?l.a.createElement(L,{size:"24px",className:"mt-2 w-full flex justify-center"}):t.map((function(e){return l.a.createElement(F,{suggestion:e,playSong:j,key:e.id,playlists:c,selectedPlaylist:s,addToPlaylist:o,removeFromPlaylist:i,setIsFocused:x})})))))}var _=a(133);function J(e){var t=e.buttons,a=void 0===t?[]:t,o=e.small,r=void 0!==o&&o,s=e.onClick,c=void 0===s?function(e){}:s,i=Object(n.useState)(!1),u=Object(m.a)(i,2),d=u[0],g=u[1];return l.a.createElement("span",{onMouseLeave:function(){g(!1)},onClick:c,className:"text-gray-500 font-semibold cursor-pointer relative"},l.a.createElement(b.a,{className:"focus:outline-none",size:r?"small":"medium",onClick:function(){g(!d)}},l.a.createElement(S.a,{className:"favorite-maker"})),d&&l.a.createElement("div",{className:"item-menu bg-white shadow-lg py-2 rounded"},a.map((function(e,t){return l.a.createElement("button",{key:t,onClick:function(){e.action()},className:"px-3 py-2 text-left text-sm block w-full hover:bg-gray-200 focus:outline-none"},e.label)}))))}var B=l.a.createContext(null),D=function(e){return function(t){return l.a.createElement(B.Consumer,null,(function(a){return l.a.createElement(e,Object.assign({},a,t))}))}},V=D((function(e){var t=e.toasts,a=e.removeToast,n=function(e){switch(e){case"danger":return"bg-red-300";case"success":return"bg-green-300";case"warning":return"bg-orange-300";default:return"bg-blue-300"}};return l.a.createElement("div",{className:"ToastNotifier"},t.map((function(e){return l.a.createElement("div",{className:"toast items-center flex pl-4 pr-2 py-2 mt-2 rounded text-white "+n(e.type),key:e.timestamp},l.a.createElement("div",{className:"toast-body flex-grow pr-2"},l.a.createElement("div",{className:"toast-title"},e.title),l.a.createElement("div",{className:"toast-message"},e.message)),l.a.createElement(b.a,{className:"focus:outline-none",title:"Clear Toast",onClick:function(){a(e)}},l.a.createElement(R.a,{fontSize:"small",htmlColor:"white"})))})))})),q="68653039486-63iqbma47tvrijkuiqbo23gpdc4mbejl.apps.googleusercontent.com",U=a(59),W=a.n(U);function H(e){var t=e.onSignIn,a=e.onSignInError,n=e.user,o=e.syncToServer,r=e.syncFromServer;return l.a.createElement("span",{className:"px-4 pt-6"},n?l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:"px-2 mx-2 py-1 cursor-pointer"},l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("img",{src:n.picture,className:"rounded-full w-32 h-32 shadow-lg",alt:n.name}),l.a.createElement("div",{className:"font-bold text-gray-800 text-xl mt-5 text-center"},n.name),l.a.createElement("div",{className:"text-gray-500 text-center"},n.email))),l.a.createElement("div",{className:"bg-white rounded text-gray-800 py-2 px-4"},l.a.createElement("div",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer rounded mb-2",title:"Sync playlist to server",onClick:function(){o()}},"Sync to server"),l.a.createElement("div",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer rounded mb-2",title:"Sync playlist to server",onClick:function(){r()}},"Sync from server"))):l.a.createElement("div",{className:"px-2 mx-2"},l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/20546147?s=460&v=4",className:"rounded-full w-32 h-32 shadow-lg",alt:"Saavn Pru"}),l.a.createElement("div",{className:"font-bold text-gray-800 text-xl mt-5 text-center"},"Saavn Pru"),l.a.createElement("div",{className:"text-gray-500 text-center mb-3"},"thefallenmerc@gmail.com"),l.a.createElement(W.a,{clientId:q,buttonText:"Login",onSuccess:t,render:function(e){return l.a.createElement("button",{className:"px-2 mx-2 rounded py-1 cursor-pointer shadow "+(e.disabled?"bg-gray-200 text-gray-500":"bg-blue-500 text-white"),onClick:e.onClick,disabled:e.disabled},"Login")},onFailure:a,isSignedIn:!0,cookiePolicy:"single_host_origin"}))))}var K=D((function(e){var t=e.onSignIn,a=e.onSignInError,o=e.user,r=e.syncToServer,s=e.syncFromServer,c=e.playlists,i=e.addPlaylist,u=e.removePlaylist,d=e.selectPlaylist,g=e.selectedPlaylist,f=(e.addToast,e.isSidebarOpen),p=Object(n.useState)(""),y=Object(m.a)(p,2),v=y[0],x=y[1];return l.a.createElement("div",{className:"Sidebar sidebar animated bg-white pt-2 pb-10 "+(f?"":"closed")},l.a.createElement(H,{onSignIn:t,onSignInError:a,syncToServer:r,syncFromServer:s,user:o}),l.a.createElement("div",{className:"px-4"},l.a.createElement("div",{className:"px-4 mb-5 uppercase font-bold text-gray-500"},"My Music"),Object.keys(c).map((function(e){return l.a.createElement("div",{className:"px-4 text-gray-800 flex justify-between items-center font-bold py-2 hover:bg-gray-300 my-1 rounded-lg cursor-pointer "+(e===g?"bg-gray-300":""),onClick:function(){d(e)},key:e},l.a.createElement("span",null,e),l.a.createElement(J,{onClick:function(e){return e.stopPropagation()},small:!0,buttons:[{action:function(){!function(e){d(e)}("Recent"),u(e)},label:"Remove"}]}))})),l.a.createElement("div",{className:"relative"},l.a.createElement("input",{className:"px-4 text-gray-800 font-bold py-2 my-2 bg-gray-100 rounded-lg focus:outline-none",placeholder:"Add playlist...",value:v,onKeyDown:function(e){"Enter"===e.key&&e.target.value.length>0&&(i(v),x(""))},onChange:function(e){x(e.target.value)}}),v&&l.a.createElement(b.a,{size:"small",className:"focus:outline-none",onClick:function(){i(v),x("")},style:{position:"absolute",right:"15px",top:"13px"}},l.a.createElement(_.a,null)))))}));var Q=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(["Recent",0]),u=Object(m.a)(r,2),d=u[0],g=u[1],f=Object(n.useState)("Recent"),y=Object(m.a)(f,2),N=y[0],S=y[1],k=Object(n.useState)([]),j=Object(m.a)(k,2),P=j[0],I=j[1],T=Object(n.useState)({Recent:[],Favorite:[]}),R=Object(m.a)(T,2),F=R[0],A=R[1],L=Object(n.useState)([]),_=Object(m.a)(L,2),J=_[0],D=_[1],q=[],U=Object(n.useState)(!1),W=Object(m.a)(U,2),H=W[0],Q=W[1],$=Object(n.useState)(!1),G=Object(m.a)($,2),X=G[0],Y=G[1],Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.log("updating",Object(i.a)(Object(i.a)({},F),{},Object(c.a)({},e,t))),ee(Object(i.a)(Object(i.a)({},F),{},Object(c.a)({},e,t))),le("Updated "+e)},ee=function(e){localStorage.setItem("playlists",JSON.stringify(e)),A(e)},te=function(e,t){if(e in F){var a=F[e],n=F[e].findIndex((function(e){return e.id===t.id}));return n<0?(Z(e,[].concat(Object(s.a)(a),[t])),"Recent"!==e&&le("Added "+t.song+" to "+e),a.length):n}},ae=function(e,t){if(e in F){var a=F[e].findIndex((function(e){return e.id===t.id}));if(a>-1){var n=F[e];n.splice(a,1),Z(e,n),le("Removed "+t.song+" from "+e)}}},ne=function(e,t){console.log("playing",e,t),g([e,t]);try{var a=F[e][t];a&&-1===F.Recent.findIndex((function(e){return e.id===a.id}))&&te("Recent",a)}catch(n){console.log("adding to recent failed at playSong")}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n={title:e,message:t,type:a,timestamp:(new Date).getTime()};D([].concat(Object(s.a)(J),[n])),q.push(setTimeout((function(){oe(n)}),3e3))},oe=function(e){var t=Object(s.a)(J);t.splice(t.find((function(t){return t.timestamp===e.timestamp})),1),D(t)};return Object(n.useEffect)((function(){var e=localStorage.getItem("playlists"),t=[],a=[],n={};try{var l=JSON.parse(e);if(l&&"object"===typeof l)for(var o in"Recent"in l&&(t=l.Recent,delete l.Recent),"Favorite"in l&&(a=l.Favorite,delete l.Favorite),l)n[o]=l[o]}catch(r){}n.Recent=t,n.Favorite=a,localStorage.setItem("playlists",JSON.stringify(n)),A(n)}),[]),Object(n.useEffect)((function(){return function(){q.forEach((function(e){clearTimeout(e)}))}}),[]),l.a.createElement(B.Provider,{value:{toasts:J,addToast:le,removeToast:oe}},l.a.createElement("div",{className:"App bg-gray-100"},l.a.createElement(K,{onSignIn:function(e){C.a.get(M.signIn,{headers:{Authorization:"Bearer "+e.tokenId}}).then((function(e){var t=e.data.user;o(t),localStorage.setItem("user",JSON.stringify(t)),le("Signed in as "+t.name,"","success")})).catch((function(e){le("Couldn't auto signin!","","danger"),console.log({error:e})}))},onSignInError:function(e){console.error(e),le("Could not sign you in!")},syncToServer:function(){le("Sync to server initiated"),C.a.post(M.syncUp,{playlists:F},{headers:{Authorization:"Bearer "+a.token}}).then((function(e){le("Synced to server","","success")})).catch((function(e){le("Couldn't sync to server!"),console.error(e)}))},syncFromServer:function(){le("Sync from server initiated"),C.a.get(M.syncDown,{headers:{Authorization:"Bearer "+a.token}}).then((function(e){var t=e.data;ee(t.playlists),le("Synced from server","","success")})).catch((function(e){le("Couldn't sync from server!"),console.error(e)}))},user:a,playlists:F,addPlaylist:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(i.a)(Object(i.a)({},F),{},Object(c.a)({},e,t));ee(a),le('Added playlist "'+e+'"')},selectedPlaylist:N,removePlaylist:function(e){if(e in F&&!["Recent","Favorite"].includes(e)){var t=Object(i.a)({},F);delete t[e],console.log("updating",t),ee(t),N===e&&S("Recent"),le('Removed playlist "'+e+'"!')}},selectPlaylist:function(e){S(e)},isSidebarOpen:H}),l.a.createElement("div",{className:"main animated "+(H?"":"sidebar-closed")},l.a.createElement("div",{className:"top-bar animated flex box-border justify-start items-center p-2 md:pt-6"},l.a.createElement("div",{className:"mr-2"},H?l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){Q(!H)}},l.a.createElement(v.a,null)):l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){Q(!H)}},l.a.createElement(x.a,null))),l.a.createElement(z,{suggestions:P,setSuggestions:I,addToPlaylist:te,playSong:ne,playingList:d,selectedPlaylist:N,playlists:Object.keys(F),removeFromPlaylist:ae,isSidebarOpen:H,setIsSidebarOpen:Q,isMusicPlayerVisible:X,setIsMusicPlayerVisible:Y}),l.a.createElement("div",{className:"ml-2 md:hidden"},l.a.createElement(b.a,{className:"focus:outline-none",onClick:function(){Y(!X)}},l.a.createElement(h.a,null)))),l.a.createElement("div",{className:"px-2 md:pl-10 md:pr-0 pt-3 md:flex pb-48"},l.a.createElement("div",{className:"md:w-3/5 w-full"},F.Recent.length>0&&l.a.createElement("div",null,l.a.createElement("div",{className:"flex items-center"},l.a.createElement("span",{className:"text-xl font-bold text-gray-800 mr-3"},"Recent Played"),l.a.createElement(b.a,{typeof:"danger",className:"focus:outline-none",onClick:function(){F.Recent.length>0&&(Z("Recent",[]),le('Cleared "Recent"'))}},l.a.createElement(v.a,{fontSize:"small"}))),l.a.createElement("div",{className:"mt-3"},l.a.createElement(O,null,F.Recent.map((function(e,t){return l.a.createElement(E,{recent:e,songIndex:t,playSong:ne,key:e.id})}))))),l.a.createElement("div",{className:"py-5"},l.a.createElement("h1",{className:"text-xl font-bold text-gray-800"},N||"No playlist selected"),l.a.createElement("span",{className:"font-bold text-gray-500 text-xs"},N&&F[N]?F[N].length:"0"," Song(s)"),l.a.createElement("div",{className:"py-2"},N&&F[N]&&F[N].map((function(e,t){return l.a.createElement(w,{song:e,songIndex:t,playSong:ne,key:e.id,playingList:d,selectedPlaylist:N,playlists:Object.keys(F),addToPlaylist:te,removeFromPlaylist:ae})}))))),l.a.createElement("div",{className:"md:w-2/5 w-full px-5"},l.a.createElement("h1",{className:"text-xl md:block hidden font-bold text-gray-800"},"Now Playing > ",d[0]),l.a.createElement("span",{className:"font-bold md:block hidden text-gray-500 text-xs"},F[d[0]].length," Song(s) on the list"),l.a.createElement("div",{className:"py-2"},l.a.createElement(p,{song:F[d[0]][d[1]],nextSong:function(){var e=Object(m.a)(d,2),t=e[0],a=e[1];a===F[t].length-1?g([t,0]):g([t,a+1]),le("Playing next song")},prevSong:function(){var e=Object(m.a)(d,2),t=e[0],a=e[1];g(0===a?[t,F[t].length-1]:[t,a-1]),le("Playing previous song")},isMusicPlayerVisible:X,setIsMusicPlayerVisible:Y})))))),l.a.createElement(V,null))};a(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(115)}},[[63,1,2]]]);
//# sourceMappingURL=main.6a8e47e4.chunk.js.map