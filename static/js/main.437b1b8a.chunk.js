(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{22:function(e,t,n){e.exports=n(49)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),i=(n(27),n(1)),s=n(5),u=n(3),l=n(2),d=(n(28),n(29),n(21)),f=n(6),p=n.n(f),m=n(7),h=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],v=n(8),g=n.n(v),b=n(9),w=n.n(b),y=function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},E=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://kbpk7p6vn8.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.map((function(e){return e.location}));return Object(d.a)(new Set(t))},j=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return g.a.done(),e.abrupt("return",h);case 4:if(console.log(navigator.onLine),navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),g.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:O(JSON.parse(t).events)});case 9:return e.next=11,S();case 11:if(!(n=e.sent)){e.next=21;break}return k(),a="https://kbpk7p6vn8.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=17,w.a.get(a);case 17:return(r=e.sent).data&&(o=O(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),g.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a,r,o,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,y(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,w.a.get("https://kbpk7p6vn8.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&E(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={details:!1},e.toggleDetails=function(){e.setState({details:!e.state.details})},e.formatDate=function(e){var t=("0"+(e.getMonth()+1)).slice(-2),n=""+("0"+e.getDate()).slice(-2),a=e.getFullYear(),r=("0"+(e.getHours()-2)).slice(-2),o=("0"+e.getMinutes()).slice(-2);return"".concat([n,t,a].join("/")," ").concat([r,o].join(":")," GMT")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=new Date(this.props.events.start.dateTime),t=new Date(this.props.events.end.dateTime);return r.a.createElement("div",{className:"event"},r.a.createElement("p",{className:"dates"},"".concat(this.formatDate(e)," - ").concat(this.formatDate(t))),r.a.createElement("p",{className:"summary"},"".concat(this.props.events.summary)),r.a.createElement("button",{className:"details-btn",onClick:this.toggleDetails},"Details"),this.state.details&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("p",{className:"summary"},"".concat(this.props.events.description))))}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.events;return r.a.createElement("ul",{className:"EventList"},e.slice(0,this.props.numberOfEvents).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(T,{events:e}))})))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(C),N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(C),Z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],displayAll:!1},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({infoText:""}),e.setState({query:n,suggestions:a,displayAll:!0})},e.handleItemClicked=function(t){"all"!==t?e.setState({displayAll:!1,query:t}):e.setState({displayAll:!1,query:"",infoText:""}),e.props.updateEvents(t)},e.handlefocus=function(t){e.setState({displayAll:t})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.displayAll,a=t.query,o=t.suggestions;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(A,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:a,onChange:this.handleInputChanged,onFocus:function(){return e.handlefocus(!0)},onBlur:function(){return e.handlefocus(!1)},onClick:function(){return e.handlefocus(!0)}}),r.a.createElement("ul",{className:"suggestions",style:n?{}:{display:"none"}},o.map((function(t){return r.a.createElement("li",{key:t,onMouseDown:function(e){return e.preventDefault()},onClick:function(){return e.handleItemClicked(t)}},t)})),r.a.createElement("li",{onMouseDown:function(e){return e.preventDefault()},onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({errorText:"Please select a number between 0 and 32",numberOfEvents:n}):(e.setState({numberOfEvents:n,errorText:""}),e.props.onNumberOfEventsChange(n))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events:"),r.a.createElement("input",{type:"number",id:"numberOfEvents_input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(N,{text:this.state.errorText}))}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={locations:[],numberOfEvents:32,events:[]},e.onNumberOfEventsChange=function(t){e.setState({numberOfEvents:t})},e.updateEvents=function(t){j().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,j().then((function(t){e.mounted&&e.setState({events:t,locations:O(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.numberOfEvents,a=e.locations;return r.a.createElement("div",{className:"App"},r.a.createElement(Z,{locations:a,updateEvents:this.updateEvents}),r.a.createElement(D,{onNumberOfEventsChange:this.onNumberOfEventsChange}),r.a.createElement(x,{events:t.slice(0,n)}))}}]),n}(a.Component),W=n(20),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Meets-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Meets-App","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}(),W.config("241783d6fec64ff8a6bd6d6bd8c4611e").install()}},[[22,1,2]]]);
//# sourceMappingURL=main.437b1b8a.chunk.js.map