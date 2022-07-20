"use strict";(self.webpackChunkbitcoin_lexikon=self.webpackChunkbitcoin_lexikon||[]).push([[8104],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2964:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),c=["components"],a={id:"coinjoin",title:"CoinJoin"},l=void 0,u={unversionedId:"c/coinjoin",id:"c/coinjoin",title:"CoinJoin",description:"Ein CoinJoin ist ein Service, bei dem mehrere Teilnehmer den gleichen Bitcoin Betrag einzahlen.",source:"@site/docs/c/CoinJoin.md",sourceDirName:"c",slug:"/c/coinjoin",permalink:"/c/coinjoin",tags:[],version:"current",frontMatter:{id:"coinjoin",title:"CoinJoin"},sidebar:"tutorialSidebar",previous:{title:"Club 137",permalink:"/c/club-137"},next:{title:"Coinmixer",permalink:"/c/coinmixer"}},p={},s=[],f={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ein CoinJoin ist ein Service, bei dem mehrere Teilnehmer den gleichen ",(0,o.kt)("a",{parentName:"p",href:"../b/bitcoin"},"Bitcoin")," Betrag einzahlen.",(0,o.kt)("br",{parentName:"p"}),"\n","Sobald genug Teilnehmer eingezahlt haben, wird eine ",(0,o.kt)("a",{parentName:"p",href:"../t/transaktion"},"Transaktion")," erzeugt, die jedem Teilnehmer den gleichen Betrag (abz\xfcglich einer Servicegeb\xfchr) wieder auszahlt."),(0,o.kt)("p",null,"Ziel des Ganzen ist, zu verschleiern woher einzelne ",(0,o.kt)("a",{parentName:"p",href:"../b/bitcoin"},"Bitcoins")," kommen und wohin sie gehen."),(0,o.kt)("p",null,"CoinJoin zu nutzen ist nicht illegal, es wird jedoch davon abgeraten. Der Grund daf\xfcr ist, dass es f\xfcr staatliche Entit\xe4ten wie ein Versuch der Geldw\xe4sche interpretiert werden kann."),(0,o.kt)("p",null,"Hier gilt das Motto: Wenn du nichts zu verstecken hast, hast du nichts zu bef\xfcrchten."))}d.isMDXComponent=!0}}]);