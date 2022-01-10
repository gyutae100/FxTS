"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1196],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4610:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"dropWhile"},p=void 0,c={unversionedId:"dropWhile",id:"dropWhile",isDocsHomePage:!1,title:"dropWhile",description:"dropWhile() function",source:"@site/docs/dropWhile.md",sourceDirName:".",slug:"/dropWhile",permalink:"/docs/dropWhile",tags:[],version:"current",frontMatter:{id:"dropWhile"},sidebar:"api",previous:{title:"dropUntil",permalink:"/docs/dropUntil"},next:{title:"entries",permalink:"/docs/entries"}},s=[{value:"dropWhile() function",id:"dropwhile-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:s};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dropwhile-function"},"dropWhile() function"),(0,a.kt)("p",null,"Returns Iterable/AsyncIterable excluding elements dropped from the beginning. Elements are dropped until the value applied to ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," returns falsey."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function dropWhile<A, B = unknown>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<A>;\n\ndeclare function dropWhile<A, B = unknown>(f: (a: A) => B, iterable: AsyncIterable<A>): AsyncIterableIterator<A>;\n\ndeclare function dropWhile<A extends Iterable<unknown> | AsyncIterable<unknown>, B>(f: (a: IterableInfer<A>) => B): (iterable: A) => ReturnIterableIteratorType<A>;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = dropWhile((a) => a < 3, [1, 2, 3, 4, 5]);\niter.next(); // {done:false, value: 3}\niter.next(); // {done:false, value: 4}\niter.next(); // {done:false, value: 5}\n\n// with pipe\npipe(\n [1, 2, 3, 4, 5],\n dropWhile((a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\nawait pipe(\n Promise.resolve([1, 2, 3, 4, 5]),\n dropWhile((a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\n// if you want to use asynchronous callback\nawait pipe(\n Promise.resolve([1, 2, 3, 4, 5]),\n toAsync,\n dropWhile(async (a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\n// with toAsync\nawait pipe(\n [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4), Promise.resolve(5)],\n toAsync,\n dropWhile((a) => a < 3),\n toArray,\n); // [3, 4, 5]\n\n")),(0,a.kt)("p",null,"see ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toArray"},"toArray")))}d.isMDXComponent=!0}}]);