!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="javascripts/",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(3);o.a.init(),i.a.init()},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={el:document.getElementById("particles"),init:function(){this.el&&particlesJS("particles",{particles:{number:{value:90,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.8,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:2,sync:!1}},line_linked:{enable:!0,distance:140,color:"#ffffff",opacity:.6,width:2},move:{enable:!0,speed:2.5,direction:"none",random:!0,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n(4),i=n.n(o),s={init:function(){if(!document.getElementById("instafeed"))return!1;new i.a({userId:"6988872419",clientId:"42b3a18eba024f9e9aea91cfb14a70e6",accessToken:"6988872419.1677ed0.57933396d6784fd18c338641f0802b36",get:"user",limit:4,sortBy:"most-recent",resolution:"standard_resolution",template:'<a href="{{link}}" class="insta col col-s-4 col-m-3" target="_blank" style="background-image: url({{image}})"><span class="insta__overlay"><span class="insta__data"><p class="insta__total"><svg width="17" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M15.57 1.43c-1.9-1.9-5-1.9-6.9 0l-.17.17-.17-.17a4.88 4.88 0 0 0-6.9 6.9l.17.17L6 12.9 7 13.9l.02.02.43.44c.58.57 1.5.57 2.07 0l.4-.4L11 12.9l4.4-4.4.16-.17a4.87 4.87 0 0 0 0-6.9z" fill="#FFF" fill-rule="nonzero"/></svg><span class="insta__num">{{likes}}</span></p><p class="insta__total"><svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6.93v.9l-.03.12a6.48 6.48 0 0 1-1.46 3.5 8.73 8.73 0 0 1-4.1 2.77 10.2 10.2 0 0 1-3.28.54 20.3 20.3 0 0 1-2.8-.23.65.65 0 0 0-.45.07 8.35 8.35 0 0 1-4.4 1.2.54.54 0 0 1-.43-.84c.05-.08.1-.16.17-.23.5-.64.94-1.33 1.28-2.07a.15.15 0 0 0-.04-.22 7.44 7.44 0 0 1-1.58-1.88c-.35-.6-.6-1.25-.74-1.93-.06-.27-.1-.54-.14-.8v-.9l.03-.15C.14 5.72.51 4.7 1.11 3.82a8.05 8.05 0 0 1 2.52-2.36A10.8 10.8 0 0 1 11.98.41c.96.28 1.87.7 2.7 1.25.92.6 1.7 1.4 2.3 2.32.42.65.72 1.38.88 2.14l.14.81z" fill="#FFF" fill-rule="nonzero"/></svg><span class="insta__num">{{comments}}</span></p></span><p class="insta__comment">{{caption}}</p></span></a>'}).run()}}},function(t,e,n){var o,i,s;(function(){var n;n=function(){function t(t,e){var n,o;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(n in t)o=t[n],this.options[n]=o;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},t.prototype.run=function(e){var n,o,i;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=e||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),o="instafeedCache"+this.unique,window[o]=new t(this.options,this),window[o].unique=this.unique),!0},t.prototype.parse=function(t){var e,n,o,i,s,r,a,l,c,p,u,h,d,f,m,g,y,w,b,_,v,k,x,I,E,N,B,j,O,T,C;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(O="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),j="least"===O[0],O[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",j);break;case"liked":t.data=this._sortBy(t.data,"likes.count",j);break;case"commented":t.data=this._sortBy(t.data,"comments.count",j);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&!1===this.options.mock){if(m=t.data,B=parseInt(this.options.limit,10),null!=this.options.limit&&m.length>B&&(m=m.slice(0,B)),r=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(m=this._filter(m,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(l="",d="","",C=document.createElement("div"),p=0,x=m.length;p<x;p++){if(u=m[p],"object"!=typeof(h=u.images[this.options.resolution]))throw s="No image found for resolution: "+this.options.resolution+".",new Error(s);b=h.width,y=h.height,w="square",b>y&&(w="landscape"),b<y&&(w="portrait"),f=h.url,c=window.location.protocol.indexOf("http")>=0,c&&!this.options.useHttp&&(f=f.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:u,id:u.id,link:u.link,type:u.type,image:f,width:b,height:y,orientation:w,caption:this._getObjectProperty(u,"caption.text"),likes:u.likes.count,comments:u.comments.count,location:this._getObjectProperty(u,"location.name")}),l+=d}for(C.innerHTML=l,i=[],o=0,n=C.childNodes.length;o<n;)i.push(C.childNodes[o]),o+=1;for(v=0,I=i.length;v<I;v++)N=i[v],r.appendChild(N)}else for(k=0,E=m.length;k<E;k++){if(u=m[k],g=document.createElement("img"),"object"!=typeof(h=u.images[this.options.resolution]))throw s="No image found for resolution: "+this.options.resolution+".",new Error(s);f=h.url,c=window.location.protocol.indexOf("http")>=0,c&&!this.options.useHttp&&(f=f.replace(/https?:\/\//,"//")),g.src=f,!0===this.options.links?(e=document.createElement("a"),e.href=u.link,e.appendChild(g),r.appendChild(e)):r.appendChild(g)}if(T=this.options.target,"string"==typeof T&&(T=document.getElementById(T)),null==T)throw s='No element with id="'+this.options.target+'" on page.',new Error(s);T.appendChild(r),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),_="instafeedCache"+this.unique,window[_]=void 0;try{delete window[_]}catch(t){t}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,n;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=t+"/"+e,null!=this.options.accessToken?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,null!=this.options.limit&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return""+(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var n,o,i,s,r;for(o=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=t;o.test(n);)s=n.match(o)[1],r=null!=(i=this._getObjectProperty(e,s))?i:"",n=n.replace(o,function(){return""+r});return n},t.prototype._getObjectProperty=function(t,e){var n,o;for(e=e.replace(/\[(\w+)\]/g,".$1"),o=e.split(".");o.length;){if(n=o.shift(),!(null!=t&&n in t))return null;t=t[n]}return t},t.prototype._sortBy=function(t,e,n){var o;return o=function(t,o){var i,s;return i=this._getObjectProperty(t,e),s=this._getObjectProperty(o,e),n?i>s?1:-1:i<s?1:-1},t.sort(o.bind(this)),t},t.prototype._filter=function(t,e){var n,o,i,s,r;for(n=[],o=function(t){if(e(t))return n.push(t)},i=0,r=t.length;i<r;i++)s=t[i],o(s);return n},t}(),function(n,r){i=[],o=r,void 0!==(s="function"==typeof o?o.apply(e,i):o)&&(t.exports=s)}(0,function(){return n})}).call(this)}]);