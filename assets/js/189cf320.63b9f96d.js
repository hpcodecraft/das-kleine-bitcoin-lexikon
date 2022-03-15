"use strict";(self.webpackChunkbitcoin_lexikon=self.webpackChunkbitcoin_lexikon||[]).push([[6422],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8663:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={id:"mempool",title:"Mempool"},s=void 0,u={unversionedId:"m/mempool",id:"m/mempool",title:"Mempool",description:"Der Mempool ist der Ort, an dem neue Bitcoin Transaktionen darauf warten, in einen Block aufgenommen zu werden. Dabei werden Transaktionen mit h\xf6heren Transaktionsgeb\xfchren favorisiert und somit schneller verarbeitet.",source:"@site/docs/m/Mempool.md",sourceDirName:"m",slug:"/m/mempool",permalink:"/das-kleine-bitcoin-lexikon/m/mempool",tags:[],version:"current",frontMatter:{id:"mempool",title:"Mempool"},sidebar:"tutorialSidebar",previous:{title:"Market Cap",permalink:"/das-kleine-bitcoin-lexikon/m/market-cap"},next:{title:"Mining",permalink:"/das-kleine-bitcoin-lexikon/m/mining"}},p={},m=[],c={toc:m};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Der Mempool ist der Ort, an dem neue ",(0,a.kt)("a",{parentName:"p",href:"../b/bitcoin"},"Bitcoin")," ",(0,a.kt)("a",{parentName:"p",href:"../t/transaktion"},"Transaktionen")," darauf warten, in einen ",(0,a.kt)("a",{parentName:"p",href:"../b/block"},"Block")," aufgenommen zu werden. Dabei werden ",(0,a.kt)("a",{parentName:"p",href:"../t/transaktion"},"Transaktionen")," mit h\xf6heren ",(0,a.kt)("a",{parentName:"p",href:"../t/transaktionsgebuehr"},"Transaktionsgeb\xfchren")," favorisiert und somit schneller verarbeitet."),(0,a.kt)("p",null,"Du kannst dir den Mempool wie eine Bushaltestelle vorstellen, an der viele Fahrg\xe4ste warten. Die Fahrg\xe4ste stehen f\xfcr die ",(0,a.kt)("a",{parentName:"p",href:"../t/transaktion"},"Transaktionen"),". Die Fahrg\xe4ste haben jeweils den Betrag Kleingeld dabei, den sie f\xfcr das Busticket ausgeben m\xf6chten. Dieses Kleingeld sind die ",(0,a.kt)("a",{parentName:"p",href:"../t/transaktionsgebuehr"},"Transaktionsgeb\xfchren"),"."),(0,a.kt)("p",null,"Alle 10 Minuten kommt nun ein Bus vorbei - der Busfahrer \xf6ffnet die T\xfcr und die wartenden Fahrg\xe4ste sagen dem Busfahrer, wie viel Kleingeld sie dabei haben. Der Busfahrer nimmt die Fahrg\xe4ste mit, die ihm am meisten zahlen, bis der Bus voll ist. Wer \xfcbrig bleibt muss weitere 10 Minuten warten und hoffen, dann unter den Meistbietenden zu sein."),(0,a.kt)("p",null,"Der Bus steht hier f\xfcr einen ",(0,a.kt)("a",{parentName:"p",href:"../b/block"},"Block"),", der eine begrenzte Gr\xf6\xdfe hat. Der Busfahrer ist der ",(0,a.kt)("a",{parentName:"p",href:"../m/mining"},"Miner"),", der den n\xe4chsten Block mit Transaktionen bef\xfcllt."),(0,a.kt)("p",null,"\xdcbrigens:",(0,a.kt)("br",{parentName:"p"}),"\n","Echtzeit-Informationen zu den Geb\xfchren im Mempool findet du bei ",(0,a.kt)("a",{parentName:"p",href:"https://mempool.space"},"mempool.space"),"."))}f.isMDXComponent=!0}}]);