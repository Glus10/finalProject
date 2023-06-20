/*! For license information please see 121.25613839.chunk.js.LICENSE.txt */
(this.___PageFlyApp___=this.___PageFlyApp___||[]).push([[121],{1154:function(e,t,i){var o,r;void 0===(r="function"===typeof(o=function(){var e="undefined"!==typeof window?window:this,t=e.Glider=function(t,i){var o=this;if(t._glider)return t._glider;if(o.ele=t,o.ele.classList.add("glider"),o.ele._glider=o,o.opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(e,t,i,o,r){return o*(t/=r)*t+i}},i),o.animate_id=o.page=o.slide=0,o.arrows={},o._opt=o.opt,o.opt.skipTrack)o.track=o.ele.children[0];else for(o.track=document.createElement("div"),o.ele.appendChild(o.track);1!==o.ele.children.length;)o.track.appendChild(o.ele.children[0]);o.track.classList.add("glider-track"),o.init(),o.resize=o.init.bind(o,!0),o.event(o.ele,"add",{scroll:o.updateControls.bind(o)}),o.event(e,"add",{resize:o.resize})},i=t.prototype;return i.init=function(e,t){var i=this,o=0,r=0;i.slides=i.track.children,[].forEach.call(i.slides,(function(e,t){e.classList.add("glider-slide"),e.setAttribute("data-gslide",t)})),i.containerWidth=i.ele.clientWidth;var s=i.settingsBreakpoint();if(t||(t=s),"auto"===i.opt.slidesToShow||"undefined"!==typeof i.opt._autoSlide){var l=i.containerWidth/i.opt.itemWidth;i.opt._autoSlide=i.opt.slidesToShow=i.opt.exactWidth?l:Math.max(1,Math.floor(l))}"auto"===i.opt.slidesToScroll&&(i.opt.slidesToScroll=Math.floor(i.opt.slidesToShow)),i.itemWidth=i.opt.exactWidth?i.opt.itemWidth:i.containerWidth/i.opt.slidesToShow,[].forEach.call(i.slides,(function(e){e.style.height="auto",e.style.width=i.itemWidth+"px",o+=i.itemWidth,r=Math.max(e.offsetHeight,r)})),i.track.style.width=o+"px",i.trackWidth=o,i.isDrag=!1,i.preventClick=!1,i.opt.resizeLock&&i.scrollTo(i.slide*i.itemWidth,0),(s||t)&&(i.bindArrows(),i.buildDots(),i.bindDrag()),i.updateControls(),i.emit(e?"refresh":"loaded")},i.bindDrag=function(){var e=this;e.mouse=e.mouse||e.handleMouse.bind(e);var t=function(){e.mouseDown=void 0,e.ele.classList.remove("drag"),e.isDrag&&(e.preventClick=!0),e.isDrag=!1},i={mouseup:t,mouseleave:t,mousedown:function(t){var i=t.target;["SELECT","INPUT","TEXTAREA"].includes(i.tagName)?e.preventClick=!1:(t.preventDefault(),t.stopPropagation(),e.mouseDown=t.clientX,e.ele.classList.add("drag"))},mousemove:e.mouse,click:function(t){e.preventClick&&(t.preventDefault(),t.stopPropagation()),e.preventClick=!1}};e.ele.classList.toggle("draggable",!0===e.opt.draggable),e.event(e.ele,"remove",i),e.opt.draggable&&e.event(e.ele,"add",i)},i.buildDots=function(){var e=this;if(e.opt.dots){if("string"===typeof e.opt.dots?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,e.dots){e.dots.innerHTML="",e.dots.classList.add("glider-dots");for(var t=0;t<Math.ceil(e.slides.length/e.opt.slidesToShow);++t){var i=document.createElement("button");i.dataset.index=t,i.setAttribute("aria-label","Page "+(t+1)),i.setAttribute("role","tab"),i.className="glider-dot "+(t?"":"active"),e.event(i,"add",{click:e.scrollItem.bind(e,t,!0)}),e.dots.appendChild(i)}}}else e.dots&&(e.dots.innerHTML="")},i.bindArrows=function(){var e=this;e.opt.arrows?["prev","next"].forEach((function(t){var i=e.opt.arrows[t];i&&("string"===typeof i&&(i=document.querySelector(i)),i&&(i._func=i._func||e.scrollItem.bind(e,t),e.event(i,"remove",{click:i._func}),e.event(i,"add",{click:i._func}),e.arrows[t]=i))})):Object.keys(e.arrows).forEach((function(t){var i=e.arrows[t];e.event(i,"remove",{click:i._func})}))},i.updateControls=function(e){var t=this;e&&!t.opt.scrollPropagate&&e.stopPropagation();var i=t.containerWidth>=t.trackWidth;t.opt.rewind||(t.arrows.prev&&(t.arrows.prev.classList.toggle("disabled",t.ele.scrollLeft<=0||i),t.arrows.prev.classList.contains("disabled")?t.arrows.prev.setAttribute("aria-disabled",!0):t.arrows.prev.setAttribute("aria-disabled",!1)),t.arrows.next&&(t.arrows.next.classList.toggle("disabled",Math.ceil(t.ele.scrollLeft+t.containerWidth)>=Math.floor(t.trackWidth)||i),t.arrows.next.classList.contains("disabled")?t.arrows.next.setAttribute("aria-disabled",!0):t.arrows.next.setAttribute("aria-disabled",!1))),t.slide=Math.round(t.ele.scrollLeft/t.itemWidth),t.page=Math.round(t.ele.scrollLeft/t.containerWidth);var o=t.slide+Math.floor(Math.floor(t.opt.slidesToShow)/2),r=Math.floor(t.opt.slidesToShow)%2?0:o+1;1===Math.floor(t.opt.slidesToShow)&&(r=0),t.ele.scrollLeft+t.containerWidth>=Math.floor(t.trackWidth)&&(t.page=t.dots?t.dots.children.length-1:0),[].forEach.call(t.slides,(function(e,i){var s=e.classList,l=s.contains("visible"),a=t.ele.scrollLeft,n=t.ele.scrollLeft+t.containerWidth,d=t.itemWidth*i,c=d+t.itemWidth;[].forEach.call(s,(function(e){/^left|right/.test(e)&&s.remove(e)})),s.toggle("active",t.slide===i),o===i||r&&r===i?s.add("center"):(s.remove("center"),s.add([i<o?"left":"right",Math.abs(i-(i<o?o:r||o))].join("-")));var h=Math.ceil(d)>=Math.floor(a)&&Math.floor(c)<=Math.ceil(n);s.toggle("visible",h),h!==l&&t.emit("slide-"+(h?"visible":"hidden"),{slide:i})})),t.dots&&[].forEach.call(t.dots.children,(function(e,i){e.classList.toggle("active",t.page===i)})),e&&t.opt.scrollLock&&(clearTimeout(t.scrollLock),t.scrollLock=setTimeout((function(){clearTimeout(t.scrollLock),Math.abs(t.ele.scrollLeft/t.itemWidth-t.slide)>.02&&(t.mouseDown||t.trackWidth>t.containerWidth+t.ele.scrollLeft&&t.scrollItem(t.getCurrentSlide()))}),t.opt.scrollLockDelay||250))},i.getCurrentSlide=function(){var e=this;return e.round(e.ele.scrollLeft/e.itemWidth)},i.scrollItem=function(e,t,i){i&&(i.preventDefault(),i.stopPropagation()),(null===t||void 0===t?void 0:t.preventDefault)&&t.preventDefault();var o=this,r=e;if(++o.animate_id,!0===t)e*=o.containerWidth,e=Math.round(e/o.itemWidth)*o.itemWidth;else{if("string"===typeof e){var s="prev"===e;if(e=o.opt.slidesToScroll%1||o.opt.slidesToShow%1?o.getCurrentSlide():o.slide,s?e-=o.opt.slidesToScroll:e+=o.opt.slidesToScroll,o.opt.rewind){var l=o.ele.scrollLeft;e=s&&!l?o.slides.length:!s&&l+o.containerWidth>=Math.floor(o.trackWidth)?0:e}}e=Math.max(Math.min(e,o.slides.length),0),o.slide=e,e=o.itemWidth*e}return o.scrollTo(e,o.opt.duration*Math.abs(o.ele.scrollLeft-e),(function(){o.updateControls(),o.emit("animated",{value:r,type:"string"===typeof r?"arrow":t?"dot":"slide"})})),!1},i.settingsBreakpoint=function(){var t=this,i=t._opt.responsive;if(i){i.sort((function(e,t){return t.breakpoint-e.breakpoint}));for(var o=0;o<i.length;++o){var r=i[o];if(e.innerWidth>=r.breakpoint)return t.breakpoint!==r.breakpoint&&(t.opt=Object.assign({},t._opt,r.settings),t.breakpoint=r.breakpoint,!0)}}var s=0!==t.breakpoint;return t.opt=Object.assign({},t._opt),t.breakpoint=0,s},i.scrollTo=function(t,i,o){var r=this,s=(new Date).getTime(),l=r.animate_id,a=function a(){var n=(new Date).getTime()-s;r.ele.scrollLeft=r.ele.scrollLeft+(t-r.ele.scrollLeft)*r.opt.easing(0,n,0,1,i),n<i&&l===r.animate_id?e.requestAnimationFrame(a):(r.ele.scrollLeft=t,o&&o.call(r))};e.requestAnimationFrame(a)},i.removeItem=function(e){var t=this;t.slides.length&&(t.track.removeChild(t.slides[e]),t.refresh(!0),t.emit("remove"))},i.addItem=function(e){var t=this;t.track.appendChild(e),t.refresh(!0),t.emit("add")},i.handleMouse=function(e){var t=this;t.mouseDown&&(t.isDrag=!0,t.ele.scrollLeft+=(t.mouseDown-e.clientX)*(t.opt.dragVelocity||3.3),t.mouseDown=e.clientX)},i.round=function(e){var t=1/(this.opt.slidesToScroll%1||1);return Math.round(e*t)/t},i.refresh=function(e){this.init(!0,e)},i.setOption=function(e,t){var i=this;i.breakpoint&&!t?i._opt.responsive.forEach((function(t){t.breakpoint===i.breakpoint&&(t.settings=Object.assign({},t.settings,e))})):i._opt=Object.assign({},i._opt,e),i.breakpoint=0,i.settingsBreakpoint()},i.destroy=function(){var t=this,i=t.ele.cloneNode(!0),o=function(e){e.removeAttribute("style"),[].forEach.call(e.classList,(function(t){/^glider/.test(t)&&e.classList.remove(t)}))};i.children[0].outerHTML=i.children[0].innerHTML,o(i),[].forEach.call(i.getElementsByTagName("*"),o),t.ele.parentNode.replaceChild(i,t.ele),t.event(e,"remove",{resize:t.resize}),t.emit("destroy")},i.emit=function(t,i){var o=this,r=new e.CustomEvent("glider-"+t,{bubbles:!o.opt.eventPropagate,detail:i});o.ele.dispatchEvent(r)},i.event=function(e,t,i){var o=e[t+"EventListener"].bind(e);Object.keys(i).forEach((function(e){o(e,i[e])}))},t})?o.call(t,i,t,e):o)||(e.exports=r)}}]);