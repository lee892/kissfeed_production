(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/e1a.cbc78fe9.png"},34:function(e,t,a){e.exports=a(73)},41:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(30),l=a.n(c),s=(a(41),a(15),a(32)),u=a(0),i=a(2),o=a.n(i),m=a(4),d=a(3),p=a(33),f=a(31),v=a.n(f),b=a(6),E=a.n(b),w="/api/articles",g=null,h=function(){var e=Object(m.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:g}},e.next=3,E.a.get("".concat(w,"/favorites"),t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k={favorite:function(){var e=Object(m.a)(o.a.mark(function e(t,a){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,E.a.put("".concat(w,"/").concat(t),a,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),saveArticles:function(){var e=Object(m.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(w,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteAll:function(){var e=Object(m.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.delete(w);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),setToken:function(e){g=e?"bearer ".concat(e.token):null},getFavorites:h},O=a(25);O.Configuration,O.OpenAIApi;var j=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(d.a)(s,2),i=(u[0],u[1],!!e.user&&e.article.users.includes(e.user.id)),p=function(){l(!0)},f=function(){var t=Object(m.a)(o.a.mark(function t(a){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.stopPropagation(),i?e.article.users=e.article.users.concat(e.user.id):e.article.users.filter(function(t){return t!==e.user.id}),t.next=4,k.favorite(e.article.id,e.article);case 4:n=t.sent,e.updateArticle(n,i);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"article ".concat(e.class),onClick:function(){c&&l(!1)}},r.a.createElement("div",{id:"imageblock"},r.a.createElement("img",{src:e.article.image?e.article.image:v.a,alt:"no image"})),r.a.createElement("div",{id:"totalNews"},r.a.createElement("div",{className:"newsrow"},e.article.title),r.a.createElement("div",{id:"newsinfo"},r.a.createElement("div",{className:"author"},e.article.author),r.a.createElement("div",null,e.article.source),r.a.createElement("div",null,r.a.createElement("button",{onClick:f},i?"Remove favorite":"Add favorite"))),c||"articles"!==e.class?c||"custom-article"!==e.class?null:r.a.createElement(F,{type:"Article",articleClick:p,text:e.text}):r.a.createElement(F,{type:"Article",articleClick:p,link:e.article.link,text:e.article.text.replace(/\\n/," "),image:e.article.image,title:e.article.title})))},C={reqArticles:function(){var e=Object(m.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/articles",t);case 2:return a=e.sent,e.next=5,k.saveArticles(a.data);case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},x={createUser:function(){var e=Object(m.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),addFollowed:function(){var e=Object(m.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getFollowed:function(){var e=Object(m.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("/api/users","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N={login:function(){var e=Object(m.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},S=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),u=Object(d.a)(s,2),i=u[0],p=u[1],f=function(){var t=Object(m.a)(o.a.mark(function t(a){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,N.login({username:c,password:i});case 4:n=t.sent,e.setUser(n),k.setToken(n),window.localStorage.setItem("loggedUser",JSON.stringify(n)),l(""),p(""),e.getUserInfo(n),e.setSubmit(!1),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}},t,null,[[1,14]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:f},r.a.createElement("p",null,"Username: ",r.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("p",null,"Password: ",r.a.createElement("input",{type:"password",value:i,onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{type:"submit"},"Login")))},y=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),u=s[0],i=s[1],p=Object(n.useState)(!1),f=Object(d.a)(p,2),v=f[0],b=f[1],E=function(){var e=Object(m.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,x.createUser({username:a,password:u});case 4:c(""),i(""),b(!0),setTimeout(function(){b(!1)},5e3),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:E},r.a.createElement("p",null,"Username: ",r.a.createElement("input",{value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("p",null,"Password: ",r.a.createElement("input",{type:"password",value:u,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",null,v?"Successfully signed up. Login to start":null),r.a.createElement("button",{type:"submit"},"Sign Up")))},A=a(25);A.Configuration,A.OpenAIApi;var F=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(e.followed),u=Object(d.a)(s,2),i=u[0],f=u[1],v=Object(n.useState)(!1),b=Object(d.a)(v,2),E=b[0],w=b[1],g=Object(n.useState)(""),h=Object(d.a)(g,2),k=h[0],O=(h[1],Object(n.useState)(!0)),N=Object(d.a)(O,2),A=N[0],F=N[1],U=function(){var e=Object(m.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(e){var t=e.target.checked?[].concat(Object(p.a)(i),[e.target.value]):i.splice(i.indexOf(e.target.value),1);f(t)},I=function(){var t=Object(m.a)(o.a.mark(function t(){var a,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a={limit:e.articleCount,urls:i},console.log(a),0===a.urls.length){t.next=13;break}return t.next=5,C.reqArticles(a);case 5:return n=t.sent,e.setdata(n),e.setalldata(n),w(!0),e.setSelected(0),e.setFollowed(i),t.next=13,x.addFollowed({username:e.user.username,followed:i,articleCount:e.articleCount});case 13:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),P=function(e){return i.includes(e)?"checked-item":"not-checked-item"},T=function(){F(!A)};return r.a.createElement("div",null,"checklist"===e.type?r.a.createElement("div",{className:"app modal",id:"checklist",onClick:function(){return e.setShowChecklist(!1)}},r.a.createElement("div",{className:"checkList modal-content",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"title"},"Source You Want to Follow:"),r.a.createElement("div",{className:"list-container"},[{name:"NBC",url:"https://www.nbcnews.com"},{name:"USA",url:"https://www.usatoday.com"},{name:"CBS",url:"https://www.cbsnews.com"},{name:"NPR",url:"https://www.npr.org"}].map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("input",{value:t.url,type:"checkbox",defaultChecked:e.followed.includes(t.url),onChange:L}),r.a.createElement("span",{className:P(t.name)},t.name))})),r.a.createElement("br",null),r.a.createElement("div",null,"Article count:",r.a.createElement("input",{type:"text",value:e.articleCount,onChange:function(t){return e.setArticleCount(t.target.value)}})),r.a.createElement("div",{className:"submit-container"},r.a.createElement("button",{className:"submit close",disabled:E,onClick:I},"Submit "),r.a.createElement("br",null)))):"custom"===e.type?r.a.createElement("div",{className:"app modal",id:"custom",onClick:e.clearCustom},r.a.createElement("div",{className:"checkList modal-content",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"title"},"Custom:"),r.a.createElement("textarea",{className:"text-area",onChange:function(e){l(e.target.value)},value:c}),r.a.createElement("div",{className:"submit-container"},r.a.createElement("button",{className:"submit close",onClick:U},"Submit "))),r.a.createElement("br",null),r.a.createElement("div",{onClick:function(e){return e.stopPropagation()}},e.submitted?r.a.createElement(j,{title:e.title,image:e.image,className:"custom-article",author:"custom",text:k}):null)):"Article"===e.type?r.a.createElement("div",{className:"app modal",id:"article",onClick:e.articleClick},r.a.createElement("div",{className:"article-content modal-content",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"title"},e.title),r.a.createElement("div",{className:"list-container article-container"},r.a.createElement("div",{class:"image-container"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link},r.a.createElement("img",{className:"article-image",src:e.image,alt:"N/A"}))),r.a.createElement("div",{className:"article-text"},e.text))),r.a.createElement("br",null)):"Login"===e.type?r.a.createElement("div",{className:"app modal"},A?r.a.createElement("div",{className:"checkList modal-content"},r.a.createElement("div",{className:"title"},"Login"),r.a.createElement(S,{setUser:e.setUser,setSubmit:e.setSubmit,getUserInfo:e.getUserInfo}),r.a.createElement("button",{onClick:T},"Sign Up")):r.a.createElement("div",{className:"checkList modal-content"},r.a.createElement("div",{className:"title"},"Sign Up"),r.a.createElement(y,null),r.a.createElement("button",{onClick:T},"Log In"))):null)};var U=function(e){if(e.data.length>0){console.log(e.data[0].source);var t=e.data.map(function(t){return r.a.createElement(j,{article:t,user:e.user,updateArticle:e.updateArticle,class:"articles"})});return r.a.createElement("div",null,t)}return null},L=function(e){return r.a.createElement("div",null,e.favorites.map(function(t){return r.a.createElement(j,{article:t,user:e.user,updateArticle:e.updateArticle,class:"articles"})}))};var I=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),u=Object(d.a)(s,2),i=u[0],o=u[1],m=Object(n.useState)(!0),p=Object(d.a)(m,2),f=p[0],v=p[1],b=function(t,a){var n=e.data.map(function(e){return e.id!==t.id?e:t});e.setdata(n),e.setalldata(n);var r=a?e.favorites.filter(function(e){return e.id!==t.id}):e.favorites.concat(t);e.setFavorites(r)};return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{id:"theHeader"},r.a.createElement("h1",{className:"hTitle"},"KISSFEED"),r.a.createElement("div",{className:"search"},r.a.createElement("text",{className:"searchtext"},"Search...")))),r.a.createElement("div",null,r.a.createElement("div",{className:"mainpage"},r.a.createElement("div",{id:"column1",className:0===c?"feed":1===c?"follow":2===c?"favorites":3===c?"custom":""},r.a.createElement("div",{className:"row1"},r.a.createElement("button",{className:"sidebarbutton all",onClick:function(){return l(0)}},"Feed")),r.a.createElement("div",{className:"row1"},r.a.createElement("button",{className:"sidebarbutton follow",onClick:function(){v(!0),l(1)}},"Follow")),r.a.createElement("div",{className:"row1"},r.a.createElement("button",{className:"sidebarbutton",onClick:function(){return l(2)}},"Favorites")),r.a.createElement("div",{className:"row1 custom"},r.a.createElement("button",{className:"sidebarbutton",onClick:function(){l(3)}},"Custom")),r.a.createElement("div",{className:"row1"},r.a.createElement("button",{className:"sidebarbutton",onClick:e.logout},"Logout"))),r.a.createElement("div",{id:"column2"},0===c?r.a.createElement(U,{data:e.data,user:e.user,updateArticle:b}):1===c?f?r.a.createElement(F,{type:"checklist",setSelected:l,setShowChecklist:v,data:e.data,setdata:e.setdata,setalldata:e.setalldata,followed:e.followed,setFollowed:e.setFollowed,articleCount:e.articleCount,setArticleCount:e.setArticleCount,user:e.user,setUser:e.setUser}):null:2===c?r.a.createElement(L,{data:e.data,user:e.user,updateArticle:b,favorites:e.favorites}):3===c?r.a.createElement(F,{type:"custom",submitCustom:function(){o(!i),l(3)},clearCustom:function(){l(5),o(!i)},submitted:i}):null))))};function P(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),u=s[0],i=s[1],p=Object(n.useState)(!0),f=Object(d.a)(p,2),v=f[0],b=f[1],E=Object(n.useState)(null),w=Object(d.a)(E,2),g=w[0],h=w[1],O=Object(n.useState)([]),j=Object(d.a)(O,2),N=j[0],S=j[1],y=Object(n.useState)(0),A=Object(d.a)(y,2),U=A[0],L=A[1],P=Object(n.useState)([]),T=Object(d.a)(P,2),B=T[0],D=T[1],J=function(){var e=Object(m.a)(o.a.mark(function e(t){var a,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getFollowed(t.id);case 2:return a=e.sent,S(a.followed),L(a.articleCount),console.log(a.followed),e.next=8,C.reqArticles({urls:a.followed,limit:a.articleCount});case 8:return n=e.sent,console.log(n),c(n),i(n),e.next=14,k.getFavorites();case 14:r=e.sent,D(r);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){(function(){var e=Object(m.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.localStorage.getItem("loggedUser"))){e.next=8;break}return a=JSON.parse(t),console.log(a),h(a),k.setToken(a),e.next=8,J(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);return r.a.createElement("div",null,v&&!g?r.a.createElement(F,{type:"Login",setUser:h,setSubmit:b,getUserInfo:J}):null,r.a.createElement(I,{followed:N,setFollowed:S,articleCount:U,setArticleCount:L,data:a,alldata:u,setdata:c,setalldata:i,logout:function(){window.localStorage.clear(),k.setToken(null),h(null),window.location.reload(!1)},user:g,setUser:h,favorites:B,setFavorites:D}))}var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(P,null)}))))},B=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,74)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),B()}},[[34,3,2]]]);
//# sourceMappingURL=main.ae523345.chunk.js.map