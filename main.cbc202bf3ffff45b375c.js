(()=>{"use strict";var t,e={10:(t,e,n)=>{n.r(e)},74:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.cat=void 0;var r=n(99);e.cat=function(t){return r.files[t]?Promise.resolve(r.files[t]):"cat: ".concat(t,": No such file or directory")}},180:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.githubrepos=void 0;e.githubrepos=function(){return fetch("https://api.github.com/users/".concat("komachi","/repos?sort=pushed&direction=desc&type=owner&per_page=50"),{headers:{Accept:"application/vnd.github+json"}}).then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return!1===t.fork&&!1===t.archived&&t.stargazers_count>2})).map((function(t){return'<a href="'.concat(t.html_url,'">').concat(t.name,"<a>").concat(t.description?"\n".concat(t.description):"").concat(0!==t.topics.length?"\nTags: ".concat(t.topics.join(", ")):"","\n")})).join("\n")})).catch((function(){return"Error: can't get GitHub repos"}))}},821:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.help=void 0;var o=r(n(885));e.help=function(){return Object.keys(o.default).join(" ")}},885:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=n(365),o=n(74),i=n(821),a=n(99),s=n(180),c={cat:o.cat,whoami:r.whoami,help:i.help,ls:a.ls,githubrepos:s.githubrepos};e.default=c},99:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ls=e.files=void 0,e.files={"contacts.txt":'Email: <a href="mailto:anton@nesterov.cc">anton@nesterov.cc</a>\nGithub: <a href="https://github.com/komachi">@komachi</a>\nTwitter: <a href="https://twitter.com/AntNesterov">@AntNesterov</a>'},e.ls=function(){return Object.keys(e.files).join(" ")}},365:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.whoami=void 0,e.whoami=function(){return"Anton Nesterov"}},355:function(t,e,n){var r,o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(856),a=o(n(885));n(10);var s={ALLOWED_TAGS:["a"],ALLOWED_ATTR:["href"],RETURN_TRUSTED_TYPE:!0},c=function(){function t(t,e){var n=this;this.history=[],this.currentHistoryIndex=0,this.terminalPromt="anton@nesterov.cc:~$&nbsp;",this.autorun=["whoami","cat contacts.txt","help"],this.container=t,this.textarea=e,this.textarea.addEventListener("keydown",(function(t){return n.handleKeydown(t)})),this.textarea.addEventListener("blur",(function(){return n.handleBlur()})),this.container.addEventListener("click",(function(t){t.preventDefault(),n.textarea.focus()})),this.autorun.forEach((function(t){return n.handleCommand(t)}))}return t.prototype.handleKeydown=function(t){if(13!==t.keyCode)switch(t.code){case"ArrowUp":var e=this.currentHistoryIndex-1;this.history[e]&&(this.currentHistoryIndex=e,this.textarea.value=this.history[e]);break;case"ArrowDown":var n=this.currentHistoryIndex+1;n<this.history.length&&(this.currentHistoryIndex=n),this.textarea.value=this.history[n]||"";break;case"Tab":t.preventDefault()}else this.handleCommand(this.textarea.value)},t.prototype.handleBlur=function(){var t=this;setTimeout((function(){t.textarea.focus()}))},t.prototype.handleCommand=function(t){var e=this;this.textarea.value="";var n=t.trim();if(""!==n){this.history.push(n),this.currentHistoryIndex=this.history.length;var r=n.split(" "),o=r[0].trim(),i=r[1]&&r[1].trim();a.default[o]?Promise.resolve(a.default[o](i)).then((function(t){t&&e.addLine(n+"\n"+t)})):this.addLine(n+"\n"+o+": command not found")}else this.addLine("")},t.prototype.addLine=function(t){var e=document.createElement("div");e.innerHTML=(0,i.sanitize)("".concat(this.terminalPromt).concat(t),s),this.container.insertBefore(e,this.textarea.parentNode),this.scrollToBottom()},t.prototype.scrollToBottom=function(){this.container.scrollTop=this.container.scrollHeight},t}();"undefined"!=typeof window&&((null===(r=window.trustedTypes)||void 0===r?void 0:r.createPolicy)&&window.trustedTypes.createPolicy("default",{createHTML:function(t){return(0,i.sanitize)(t,s)}}),window.addEventListener("load",(function(){var t=document.getElementById("terminal-container"),e=document.getElementById("terminal-textarea");t&&e&&new c(t,e)})))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<t.length;l++){for(var[n,o,i]=t[l],s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,s,c]=n,u=0;if(a.some((e=>0!==t[e]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(e&&e(n);u<a.length;u++)i=a[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},n=self.webpackChunknesterov_cc=self.webpackChunknesterov_cc||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[856],(()=>r(355)));o=r.O(o)})();