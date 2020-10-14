!function(o){"use strict";var a={icon_data:{expand:'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#fff" x1="9.5" y1="5" x2="9.5" y2="14"></line> <line fill="none" stroke="#fff" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',shrink:'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#fff" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',grow:'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="social"><line fill="none" stroke="#fff" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"></line><line fill="none" stroke="#fff" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"></line><circle fill="none" stroke="#fff" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"></circle><circle fill="none" stroke="#fff" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"></circle><circle fill="none" stroke="#fff" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"></circle></svg>',ban:'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle><line fill="none" stroke="#fff" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"></line></svg>'},requestEvent:function(e,t,n,i){n=void 0!==n?n:"POST",i="function"==typeof i?i:function(e){};var r=null;o.ActiveXObject?r=new ActiveXObject("Microsoft.XMLHTTP"):o.XMLHttpRequest&&(r=new XMLHttpRequest),null!=r&&(r.open(n,e,!0),"POST"==n&&r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.onreadystatechange=function(){4==r.readyState&&200==r.status&&(o.location.reload(),i(r.responseText))},r.send(JSON.stringify(t)))},bindClassEnvent:function(e,t,n){for(var i=document.getElementsByClassName(e),r=0;r<i.length;r++)i[r].addEventListener(t,n,!1)},removeChildDom:function(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)},appendChildDom:function(e,t){e.innerHTML=t},relpaceChild:function(e,t){a.removeChildDom(e),a.appendChildDom(e,t)},getInput:function(e){return document.getElementsByName(e)[0]},tree:{id:0,conserve_action:"add",form_action:"%s",tabAnimeFlag:!1,tabAnimeErroNum:0,init:function(){a.bindClassEnvent("dendrogram-tab","click",a.tree.tab),a.bindClassEnvent("dendrogram-button","click",a.tree.upForm),a.bindClassEnvent("dendrogram-grow","click",a.tree.addForm),document.getElementById("mongolia").onclick=function(){a.tree.mongolia(!1)},document.getElementById("dendrogram-form-close").onclick=function(){a.tree.mongolia(!1)},a.bindClassEnvent("dendrogram-form-delete","click",a.tree.delete),a.bindClassEnvent("dendrogram-form-conserve","click",a.tree.conserve)},mongolia:function(e){if(e)return document.getElementById("mongolia").setAttribute("style","display:block;opacity:1"),void setTimeout(function(){document.getElementById("dendrogram-form").setAttribute("style","visibility: visible;opacity:1")},0);document.getElementById("mongolia").setAttribute("style","display:none;opacity:0"),document.getElementById("dendrogram-form").setAttribute("style","visibility: hidden;opacity:0")},addForm:function(){a.tree.mongolia(!0),document.getElementById("dendrogram-form-theme").innerText="增加节点";var e=document.getElementsByClassName("dendrogram-form-delete");e[0]instanceof HTMLElement&&e[0].setAttribute("style","display:none;");var t=this.parentNode.getAttribute("data-v");t=JSON.parse(t);for(var n in t){var i=a.getInput(n);i instanceof HTMLElement!=0&&("number"==typeof t[n]?i.value=0:i.value="",i.placeholder=n)}a.tree.id=t.id,a.tree.conserve_action="add"},upForm:function(){a.tree.mongolia(!0),document.getElementById("dendrogram-form-theme").innerText="修改节点";var e=document.getElementsByClassName("dendrogram-form-delete");e[0]instanceof HTMLElement&&e[0].setAttribute("style","display:inline-block;");var t=this.parentNode.getAttribute("data-v");t=JSON.parse(t);for(var n in t){var i=a.getInput(n);i instanceof HTMLElement!=0&&(t.hasOwnProperty(n)?i.value=t[n]:i.placeholder=n)}a.tree.id=t.id,a.tree.conserve_action="update"},conserve:function(){var e=document.getElementsByTagName("input");if("add"===a.tree.conserve_action)var t={p_id:a.tree.id};else t={id:a.tree.id};for(var n in e)if(e[n]instanceof HTMLElement&&"dendrogram-input"==e[n].className){var i=e[n].name,r=e[n].value;t[i]=r}a.requestEvent(a.tree.form_action,{data:t,action:a.tree.conserve_action})},delete:function(){a.requestEvent(a.tree.form_action,{data:{id:a.tree.id},action:"delete"})},tab:function(){var e=this.parentNode,t=e.getAttribute("data-sign"),n=e.parentNode.childNodes[3];if(a.tree.shrinkAnimeFlag)return 3<a.tree.tabAnimeErroNum&&o.location.reload(),void a.tree.tabAnimeErroNum++;if(a.tree.shrinkAnimeFlag=!0,0==t)a.relpaceChild(this,a.icon_data.shrink),e.setAttribute("data-sign",1),n.setAttribute("style","display:block"),n.classList.remove("dendrogram-animation-reverse"),n.classList.add("dendrogram-animation-slide-top-small");else{a.relpaceChild(this,a.icon_data.expand),e.setAttribute("data-sign",0),n.classList.remove("dendrogram-animation-slide-top-small");var i=setTimeout(function(){n.classList.add("dendrogram-animation-reverse")},0)}n.addEventListener("animationend",function e(){1==t&&(n.setAttribute("style","display:none"),clearTimeout(i)),n.removeEventListener("animationend",e),a.tree.shrinkAnimeFlag=!1,a.tree.tabAnimeErroNum=0},!1)}}};"function"==typeof define&&define.amd?define(a):o.dendrogram=a}(window);