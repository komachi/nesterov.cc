/*! For license information please see 856.cbc202bf3ffff45b375c.js.LICENSE.txt */
(self.webpackChunknesterov_cc=self.webpackChunknesterov_cc||[]).push([[856],{856:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return a(e)||i(e)||l(e)||u()}function a(e){if(Array.isArray(e))return c(e)}function i(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s=Object.hasOwnProperty,m=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,b="undefined"!=typeof Reflect&&Reflect,v=b.apply,T=b.construct;v||(v=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),T||(T=function(e,t){return r(e,o(t))});var N=R(Array.prototype.forEach),A=R(Array.prototype.pop),E=R(Array.prototype.push),w=R(String.prototype.toLowerCase),k=R(String.prototype.match),S=R(String.prototype.replace),x=R(String.prototype.indexOf),_=R(String.prototype.trim),O=R(RegExp.prototype.test),D=C(TypeError);function R(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return v(e,t,r)}}function C(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return T(e,n)}}function L(e,t,n){n=n||w,m&&m(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(f(t)||(t[r]=a),o=a)}e[o]=!0}return e}function M(e){var t,n=y(null);for(t in e)v(s,e,[t])&&(n[t]=e[t]);return n}function I(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return R(n.get);if("function"==typeof n.value)return R(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var F=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),U=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),z=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),B=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),j=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),P=h(["#text"]),G=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),W=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),q=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Y=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),K=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=g(/<%[\w\W]*|[\w\W]*%>/gm),$=g(/^data-[\-\w.\u00B7-\uFFFF]/),X=g(/^aria-[\-\w]+$/),Z=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),J=g(/^(?:\w+script|data):/i),Q=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ee=g(/^html$/i),te=function(){return"undefined"==typeof window?null:window},ne=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function re(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te(),n=function(e){return re(e)};if(n.version="2.4.0",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,u=t.Element,s=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.HTMLFormElement,d=t.DOMParser,g=t.trustedTypes,y=u.prototype,b=I(y,"cloneNode"),v=I(y,"nextSibling"),T=I(y,"childNodes"),R=I(y,"parentNode");if("function"==typeof l){var C=a.createElement("template");C.content&&C.content.ownerDocument&&(a=C.content.ownerDocument)}var oe=ne(g,r),ae=oe?oe.createHTML(""):"",ie=a,le=ie.implementation,ce=ie.createNodeIterator,ue=ie.createDocumentFragment,se=ie.getElementsByTagName,me=r.importNode,fe={};try{fe=M(a).documentMode?a.documentMode:{}}catch(e){}var pe={};n.isSupported="function"==typeof R&&le&&void 0!==le.createHTMLDocument&&9!==fe;var de,he,ge=K,ye=V,be=$,ve=X,Te=J,Ne=Q,Ae=Z,Ee=null,we=L({},[].concat(o(F),o(H),o(U),o(B),o(P))),ke=null,Se=L({},[].concat(o(G),o(W),o(q),o(Y))),xe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),_e=null,Oe=null,De=!0,Re=!0,Ce=!1,Le=!1,Me=!1,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,Be=!0,je=!1,Pe="user-content-",Ge=!0,We=!1,qe={},Ye=null,Ke=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ve=null,$e=L({},["audio","video","img","source","image","track"]),Xe=null,Ze=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Je="http://www.w3.org/1998/Math/MathML",Qe="http://www.w3.org/2000/svg",et="http://www.w3.org/1999/xhtml",tt=et,nt=!1,rt=["application/xhtml+xml","text/html"],ot="text/html",at=null,it=a.createElement("form"),lt=function(e){return e instanceof RegExp||e instanceof Function},ct=function(t){at&&at===t||(t&&"object"===e(t)||(t={}),t=M(t),de=de=-1===rt.indexOf(t.PARSER_MEDIA_TYPE)?ot:t.PARSER_MEDIA_TYPE,he="application/xhtml+xml"===de?function(e){return e}:w,Ee="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS,he):we,ke="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR,he):Se,Xe="ADD_URI_SAFE_ATTR"in t?L(M(Ze),t.ADD_URI_SAFE_ATTR,he):Ze,Ve="ADD_DATA_URI_TAGS"in t?L(M($e),t.ADD_DATA_URI_TAGS,he):$e,Ye="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS,he):Ke,_e="FORBID_TAGS"in t?L({},t.FORBID_TAGS,he):{},Oe="FORBID_ATTR"in t?L({},t.FORBID_ATTR,he):{},qe="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,Ce=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=t.SAFE_FOR_TEMPLATES||!1,Me=t.WHOLE_DOCUMENT||!1,He=t.RETURN_DOM||!1,Ue=t.RETURN_DOM_FRAGMENT||!1,ze=t.RETURN_TRUSTED_TYPE||!1,Fe=t.FORCE_BODY||!1,Be=!1!==t.SANITIZE_DOM,je=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,We=t.IN_PLACE||!1,Ae=t.ALLOWED_URI_REGEXP||Ae,tt=t.NAMESPACE||et,t.CUSTOM_ELEMENT_HANDLING&&lt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(xe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&lt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(xe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(xe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(Re=!1),Ue&&(He=!0),qe&&(Ee=L({},o(P)),ke=[],!0===qe.html&&(L(Ee,F),L(ke,G)),!0===qe.svg&&(L(Ee,H),L(ke,W),L(ke,Y)),!0===qe.svgFilters&&(L(Ee,U),L(ke,W),L(ke,Y)),!0===qe.mathMl&&(L(Ee,B),L(ke,q),L(ke,Y))),t.ADD_TAGS&&(Ee===we&&(Ee=M(Ee)),L(Ee,t.ADD_TAGS,he)),t.ADD_ATTR&&(ke===Se&&(ke=M(ke)),L(ke,t.ADD_ATTR,he)),t.ADD_URI_SAFE_ATTR&&L(Xe,t.ADD_URI_SAFE_ATTR,he),t.FORBID_CONTENTS&&(Ye===Ke&&(Ye=M(Ye)),L(Ye,t.FORBID_CONTENTS,he)),Ge&&(Ee["#text"]=!0),Me&&L(Ee,["html","head","body"]),Ee.table&&(L(Ee,["tbody"]),delete _e.tbody),h&&h(t),at=t)},ut=L({},["mi","mo","mn","ms","mtext"]),st=L({},["foreignobject","desc","title","annotation-xml"]),mt=L({},["title","style","font","a","script"]),ft=L({},H);L(ft,U),L(ft,z);var pt=L({},B);L(pt,j);var dt=function(e){var t=R(e);t&&t.tagName||(t={namespaceURI:et,tagName:"template"});var n=w(e.tagName),r=w(t.tagName);return e.namespaceURI===Qe?t.namespaceURI===et?"svg"===n:t.namespaceURI===Je?"svg"===n&&("annotation-xml"===r||ut[r]):Boolean(ft[n]):e.namespaceURI===Je?t.namespaceURI===et?"math"===n:t.namespaceURI===Qe?"math"===n&&st[r]:Boolean(pt[n]):e.namespaceURI===et&&!(t.namespaceURI===Qe&&!st[r])&&!(t.namespaceURI===Je&&!ut[r])&&!pt[n]&&(mt[n]||!ft[n])},ht=function(e){E(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ae}catch(t){e.remove()}}},gt=function(e,t){try{E(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){E(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(He||Ue)try{ht(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},yt=function(e){var t,n;if(Fe)e="<remove></remove>"+e;else{var r=k(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===de&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=oe?oe.createHTML(e):e;if(tt===et)try{t=(new d).parseFromString(o,de)}catch(e){}if(!t||!t.documentElement){t=le.createDocument(tt,"template",null);try{t.documentElement.innerHTML=nt?"":o}catch(e){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),tt===et?se.call(t,Me?"html":"body")[0]:Me?t.documentElement:i},bt=function(e){return ce.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},vt=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore)},Tt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Nt=function(e,t,r){pe[e]&&N(pe[e],(function(e){e.call(n,t,r,at)}))},At=function(e){var t;if(Nt("beforeSanitizeElements",e,null),vt(e))return ht(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return ht(e),!0;var r=he(e.nodeName);if(Nt("uponSanitizeElement",e,{tagName:r,allowedTags:Ee}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&(!Tt(e.content)||!Tt(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return ht(e),!0;if("select"===r&&O(/<template/i,e.innerHTML))return ht(e),!0;if(!Ee[r]||_e[r]){if(!_e[r]&&wt(r)){if(xe.tagNameCheck instanceof RegExp&&O(xe.tagNameCheck,r))return!1;if(xe.tagNameCheck instanceof Function&&xe.tagNameCheck(r))return!1}if(Ge&&!Ye[r]){var o=R(e)||e.parentNode,a=T(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(b(a[i],!0),v(e))}return ht(e),!0}return e instanceof u&&!dt(e)?(ht(e),!0):"noscript"!==r&&"noembed"!==r||!O(/<\/no(script|embed)/i,e.innerHTML)?(Le&&3===e.nodeType&&(t=e.textContent,t=S(t,ge," "),t=S(t,ye," "),e.textContent!==t&&(E(n.removed,{element:e.cloneNode()}),e.textContent=t)),Nt("afterSanitizeElements",e,null),!1):(ht(e),!0)},Et=function(e,t,n){if(Be&&("id"===t||"name"===t)&&(n in a||n in it))return!1;if(Re&&!Oe[t]&&O(be,t));else if(De&&O(ve,t));else if(!ke[t]||Oe[t]){if(!(wt(e)&&(xe.tagNameCheck instanceof RegExp&&O(xe.tagNameCheck,e)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(e))&&(xe.attributeNameCheck instanceof RegExp&&O(xe.attributeNameCheck,t)||xe.attributeNameCheck instanceof Function&&xe.attributeNameCheck(t))||"is"===t&&xe.allowCustomizedBuiltInElements&&(xe.tagNameCheck instanceof RegExp&&O(xe.tagNameCheck,n)||xe.tagNameCheck instanceof Function&&xe.tagNameCheck(n))))return!1}else if(Xe[t]);else if(O(Ae,S(n,Ne,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==x(n,"data:")||!Ve[e])if(Ce&&!O(Te,S(n,Ne,"")));else if(n)return!1;return!0},wt=function(e){return e.indexOf("-")>0},kt=function(t){var r,o,a,i;Nt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var u=r=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?r.value:_(r.value),a=he(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Nt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(gt(s,t),c.keepAttr))if(O(/\/>/i,o))gt(s,t);else{Le&&(o=S(o,ge," "),o=S(o,ye," "));var f=he(t.nodeName);if(Et(f,a,o)){if(!je||"id"!==a&&"name"!==a||(gt(s,t),o=Pe+o),oe&&"object"===e(g)&&"function"==typeof g.getAttributeType)if(m);else switch(g.getAttributeType(f,a)){case"TrustedHTML":o=oe.createHTML(o);break;case"TrustedScriptURL":o=oe.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),A(n.removed)}catch(e){}}}}Nt("afterSanitizeAttributes",t,null)}},St=function e(t){var n,r=bt(t);for(Nt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Nt("uponSanitizeShadowNode",n,null),At(n)||(n.content instanceof i&&e(n.content),kt(n));Nt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var a,l,u,s,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((nt=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!Tt(o)){if("function"!=typeof o.toString)throw D("toString is not a function");if("string"!=typeof(o=o.toString()))throw D("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof o)return t.toStaticHTML(o);if(Tt(o))return t.toStaticHTML(o.outerHTML)}return o}if(Ie||ct(f),n.removed=[],"string"==typeof o&&(We=!1),We){if(o.nodeName){var p=he(o.nodeName);if(!Ee[p]||_e[p])throw D("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=yt("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!He&&!Le&&!Me&&-1===o.indexOf("<"))return oe&&ze?oe.createHTML(o):o;if(!(a=yt(o)))return He?null:ze?ae:""}a&&Fe&&ht(a.firstChild);for(var d=bt(We?o:a);u=d.nextNode();)3===u.nodeType&&u===s||At(u)||(u.content instanceof i&&St(u.content),kt(u),s=u);if(s=null,We)return o;if(He){if(Ue)for(m=ue.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return ke.shadowroot&&(m=me.call(r,m,!0)),m}var h=Me?a.outerHTML:a.innerHTML;return Me&&Ee["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&O(ee,a.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+h),Le&&(h=S(h,ge," "),h=S(h,ye," ")),oe&&ze?oe.createHTML(h):h},n.setConfig=function(e){ct(e),Ie=!0},n.clearConfig=function(){at=null,Ie=!1},n.isValidAttribute=function(e,t,n){at||ct({});var r=he(e),o=he(t);return Et(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],E(pe[e],t))},n.removeHook=function(e){if(pe[e])return A(pe[e])},n.removeHooks=function(e){pe[e]&&(pe[e]=[])},n.removeAllHooks=function(){pe={}},n}return re()}()}}]);