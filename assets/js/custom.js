function gallery(){var e=$("#gallery-portfolio");e.length<1||(e.justifiedGallery({rowHeight:300,margins:15}),e.magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}}))}function aosInit(){$('.page-content >  *:not("footer , .next-up")').attr("data-aos","fade-up"),AOS.init({duration:1e3})}function dsnGridProgressCircle(){function e(){var e=n.scrollTop(),t=$(document).height()-n.height();70<e?(TweenMax.to(i,1,{ease:Back.easeOut.config(4),right:40}),i.find(".dsn-progress-path").css("stroke-dashoffset",300-Math.round(300*e/t)+"%")):TweenMax.to(i,1,{ease:Back.easeIn.config(4),right:-60})}var n=$(window),i=$('[data-dsn-grid="progress-circle"]'),t=dsnGrid.removeAttr(i,"data-dsn-grid-stroke"),s=void 0===t?"":'stroke="'+t+'"';i.css({position:"fixed",right:"-60px",bottom:"60px",width:"52px",height:"52px","z-index":"99999999"}),i.append('<svg class="dsn-progress-circle-up" width="100%" height="100%" '+s+' viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet" fill="none">\n        <path class="dsn-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition:  stroke-dashoffset 100ms linear 0s;stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 309;"></path>    </svg>'),n.on("scroll",function(){e()}),e(),i.on("click",function(){$("body,html").animate({scrollTop:0},1600)})}function navBar(s){var n=$("body"),i=$(".menu-icon");$(".site-header .custom-drop-down > a").on("click",function(){return!1}),s.on("load",function(){var e=$(".site-header nav > ul")[0].outerHTML;(e=$(e)).attr("class","nav__list"),e.find("li.custom-drop-down").attr("class","nav__list-dropdown"),e.find("li").addClass("nav__list-item");var t=$(".header-top .nav .nav__content");void 0!==t&&t.prepend(e),i.on("click",function(){n.toggleClass("nav-active")}),$(".nav__list-item:not(.nav__list-dropdown) ").on("click",function(){n.removeClass("nav-active")}),$(".nav__list-dropdown > a").on("click",function(e){e.preventDefault();var t=$(this).parent(),n=t.find("ul").css("display");$(".nav__list-dropdown").find("ul").slideUp("slow"),"block"!==n&&t.find("ul").slideDown("slow")})}),s.on("scroll",function(){var e=s.scrollTop(),t=$(".site-header , .header-top"),n=$(".page-content").offset(),i=70;void 0!==n&&(i=n.top),i<e?(t.addClass("header-stickytop"),$(".sections").addClass("body-pt")):(t.removeClass("header-stickytop"),$("body").css("paddingTop",0))})}function effectBackForward(){$(window).on("popstate",function(e){$("main.root").load(document.location+" main.root > *",function(){refreshScript()})})}function mouseCirMove(e){function t(){dsnGrid.elementHover(n,"a , .to-prev , .to-next , .fas.fa-angle-right , .fas.fa-angle-left , .hero__down , .link-click , .filter-btn , .icon__fixed , .t-link , .button-next , .toggle , input","custom-cursor-link"),dsnGrid.elementHover(n,".dsn-video , .projs-item-img-container , .close-filters","hidden")}var n=".global-cursor .custom-cursor";void 0===e||!0!==e?$("body").hasClass("dsn-large-mobile")||(dsnGrid.mouseMove(n,{onComplete:function(e,t){t.hasClass("effect-cursor")||t.addClass("effect-cursor")},onUpdate:function(e,t,n,i){i.hasClass("effect-cursor")&&i.removeClass("effect-cursor")}}),t()):t()}function toggleButtonMap(){var e=document.getElementById("toggle");if(null!=e){var t,n=document.getElementById("toggle-container");e.addEventListener("click",function(){(t=!t)?(n.style.clipPath="inset(0 0 0 50%)",n.style.backgroundColor="#D74046",$(".location__address-container").css({opacity:0,transform:"translate3d(0,30px , 0)"}),$(".box-info-wrap").addClass("show-map")):(n.style.clipPath="inset(0 50% 0 0)",n.style.backgroundColor="dodgerblue",$(".location__address-container").css({opacity:1,transform:"translate3d(0,0,0)"}),$(".box-info-wrap").removeClass("show-map"))})}}function ajaxLoad(e){function s(e){r=$("<div></div>").addClass("class-ajax-loader"),a.append(r),TweenMax.fromTo(o,1,{y:0},{y:-150,ease:Expo.easeIn}),TweenMax.to(r,1,{y:0,ease:Expo.easeIn,onComplete:function(){var i;o.removeClass("dsn-animate"),i=e,o.load(i+" main.root > *",function(e,t,n){"error"!==t?(history.pushState(null,null,i),dsnGrid.scrollTop("body","0"),setTimeout(function(){!function(e){var t=$(".global-cursor .custom-cursor");o.css({opacity:1,transform:""});var n=$("body").find(".ui-nav-light");void 0!==n&&0<n.length?(n.find(".dsn-nav-light").css({visibility:"hidden"}),t.removeClass("single-cursor")):t.addClass("single-cursor"),TweenMax.to(r,1,{y:"-100%",ease:Expo.easeIn,onComplete:function(){o.addClass("dsn-animate"),refreshScript(),TweenMax.fromTo($(".hero-img"),.5,{y:70},{y:0}),r.remove()}}),TweenMax.fromTo(n,3,{autoAlpha:0},{autoAlpha:1})}($(e))},500)):window.location=i})}})}var o=$("main.root"),a=$("body"),t=($(window),$(".projects__headline-enter a")),n=$(".site-header a , .next-proj-slider a , .next-up a , .portfolio .gallery > .projs-item a"),r="",i=$(".circlehold svg path"),l=new TimelineLite;!0===e&&(t.off("mousedown"),t.off("mouseup"),n.off("click")),t.bind("mousedown touchstart",function(e){if(e.preventDefault(),"mousedown"!==e.type.toLowerCase()||3!==e.which){var t=$(".sections-wrapper.dsn-parent-slide .dsn-active").data("url");a.hasClass("ajax-slider")?$(window).width()<992?void 0!==t&&s(t):(l=new TimelineLite).fromTo(i,1.5,{"stroke-dashoffset":"309%"},{"stroke-dashoffset":"0",onComplete:function(){void 0!==t&&s(t)}}):window.location=t}}).bind("mouseup touchend",function(e){e.preventDefault(),l.pause(),i.css({"stroke-dashoffset":"309%"})}),n.on("click",function(e){if(a.hasClass("ajax-menu")){e.preventDefault();var t=$(this),n=t.attr("href"),i=t.parent();i.hasClass("item")&&!i.hasClass("slick-active")||0<=n.indexOf("#")||void 0!==n&&s(n)}})}function dsn_slider(){var s=$(".sections-wrapper.dsn-parent-slide"),e=$(".sections-wrapper.dsn-next"),t=s.find(".section-slider"),n=$(window).width(),i=s.find(".section-footer"),o=i.find(".boxnav-item.to-next"),a=i.find(".boxnav-item.to-prev"),r=new TimelineLite,l={},d={};if(0<t.length){var c=1;t.each(function(){var e=$(this),t=$(this).find(".subtitle"),n=$(this).find(".name-title h1");e.attr("data-number",dsnGrid.numberText(c)),c++;var i=$(this).find(".name-title").clone();i.removeAttr("data-overlay").attr("data-id",$(this).data("id")),i.find("span").css({"background-image":'url("'+e.find(".cover-bg").data("image-src")+'")'}),e.hasClass("dsn-active")&&i.addClass("dsn-bg-text"),s.find(".dsn-nav-light").append(i),l[i.data("id")]={width:i.width(),left:i.offset().left,top:i.offset().top},d[i.offset().left]=i.data("id"),dsnGrid.convertTextLine(t,t),dsnGrid.convertTextLine(n.find("span"),n)});var f=s.find(".dsn-nav-light");f.css("width",f.width()+4*n),t.clone().removeClass("dsn-active").append('<div class="dsn-box-shadow"></div>').appendTo(e),t.removeClass("section-slider-next"),navLight(s,l,d),s.removeClass("ui-nav-light"),s.find(".dsn-nav-light").css({opacity:"",visibility:""}),dsnGrid.mouseWheel(s,function(e){r.isActive()||(r=new TimelineLite,nextSlid(s,r))},function(e){r.isActive()||(r=new TimelineLite,prevSlid(s,r))});var p=0;s.bind("mousedown touchstart",function(e){p="mousedown"===e.type.toLowerCase()?e.pageX:e.originalEvent.touches[0].pageX}).bind("mouseup touchend",function(e){if(!(991<$(window).width())){var t=p;t="mouseup"===e.type.toLowerCase()?e.pageX:e.originalEvent.changedTouches[0].pageX,p+30<t?r.isActive()||(r=new TimelineLite,nextSlid(s,r)):t<p-30&&(r.isActive()||(r=new TimelineLite,prevSlid(s,r)))}}),o.on("click",function(){r.isActive()||(r=new TimelineLite,nextSlid(s,r))}),a.on("click",function(){r.isActive()||(r=new TimelineLite,prevSlid(s,r))})}}function setMoveSlider(t,n,e,i){var s=$(".sections-wrapper.dsn-next"),o=s.find(".section-slider-next"),a=showNextSection(s,s.find('.section-slider[data-id="'+n.data("id")+'"]')),r=t.find(".dsn-active"),l="110%",d=-300;PlayVideo(n,!0),i&&(d*=-1,l="-110%"),e.staggerFromTo(r.find(".inner .subtitle .dsn-word-wrapper .dsn-chars-wrapper "),.05,{autoAlpha:1,scaleX:1,skewY:0,rotation:0,y:0},{autoAlpha:0,scaleX:1.8,y:-25},.05),e.staggerFromTo(r.find(".inner .name-title .dsn-word-wrapper .dsn-chars-wrapper "),.1,{autoAlpha:1,scaleX:1,skewY:0,rotation:0,x:0},{autoAlpha:0,scaleX:1.8,x:-25},.05,"-=1");var c=n.find(".inner .name-title .dsn-word-wrapper");e.fromTo(o,.7,{right:0},{right:"-30%",ease:Power2.easeIn},"-=.5").fromTo(n,1,{left:l},{left:"0%",onStart:function(){t.find(".section-slider").removeClass("section-slider-next").css({zIndex:1}).find(".cover-bg").css({zIndex:""}),n.css({zIndex:2}).find(".cover-bg").css({zIndex:0}),PlayVideo(o,!0)},onComplete:function(){t.find(".section-slider").removeClass("dsn-active"),n.addClass("dsn-active");var e=n.data("number");$(".section-footer .number span").text(e)}}).fromTo(r,1,{x:0},{x:d,ease:Power0.easeIn},"-=1").staggerFromTo(n.find(".inner .subtitle .dsn-word-wrapper .dsn-chars-wrapper"),.05,{autoAlpha:0,scaleX:1.8,y:-25},{autoAlpha:1,scaleX:1,y:0},.05).staggerFromTo(c.find(".dsn-chars-wrapper"),.1,{autoAlpha:0,scaleX:1.7,skewY:10,rotation:2,x:-50},{autoAlpha:1,scaleX:1,skewY:0,rotation:0,x:0},.09,"-=1").fromTo(c,1,{x:100},{x:0},"-=1").fromTo(a,.7,{right:"-30%",width:"100%"},{right:0,width:"25%",onStart:function(){s.find(".section-slider").removeClass("section-slider-next"),a.addClass("section-slider-next")}},"-=.7").call(function(){t.find(".section-slider").css({left:"",transform:""}),PlayVideo(n,!1),PlayVideo(o,!1)})}function PlayVideo(e,t){var n=e.find(".dsn-video");e.find("div.cover-bg");0<n.length&&(!0===t?n[0].pause():n[0].play())}function nextSlid(e,t){setMoveSlider(e,getSliderNext(e),t,!0)}function prevSlid(e,t){setMoveSlider(e,getSliderPrev(e),t)}function navLight(s,o,e){var a=0,r=($("body"),s.find(".dsn-nav-light")),l=(new TimelineMax,!1),d=null,c=!1,i=$(".global-cursor .custom-cursor");s.find(".popover-list-slid").on("mousedown",function(t){if(3!==t.which){c=!1,TweenMax.to(s.find(".section-slider"),2,{autoAlpha:0});var e=s.find(".dsn-active");r.find(".name-title").removeClass("dsn-bg-text");var n=r.find('.name-title[data-id="'+e.data("id")+'"]');d=o[e.data("id")],r.css({transform:"translateX("+-1*d.left+"px)"}),n.addClass("dsn-bg-text"),s.addClass("ui-nav-light"),0<i.length&&$(".global-cursor .custom-cursor").addClass("ui-light"),s.find(".dsn-nav-light").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){a=t.pageX,l=!0})}else s.removeClass("ui-nav-light")}).on("mouseup",function(e){TweenMax.to(s.find(".section-slider"),2,{autoAlpha:1}),s.removeClass("ui-nav-light");e.pageX;l=!1,(a=0)<i.length&&$(".global-cursor .custom-cursor").removeClass("ui-light"),c&&setAnimateTextSlider()}).on("mousemove",function(e){if(l&&null!=d){var t=a-e.pageX+-1*d.left,n=o[Object.keys(o)[Object.keys(o).length-1]];if(t<=0&&-1*n.left<=t){for(var i in o){-1*o[i].left+200>=t&&(r.find(".name-title").removeClass("dsn-bg-text"),r.find('.name-title[data-id="'+i+'"]').addClass("dsn-bg-text"),setPositionSlider(s,i),c=!0)}r.css({transform:"translateX("+t+"px)"})}}})}function setPositionSlider(e,t){var n=$(".sections-wrapper.dsn-next"),i=n.find(".section-slider-next"),s=showNextSection(n,n.find('.section-slider[data-id="'+t+'"]')),o=e.find('.section-slider[data-id="'+t+'"]'),a=e.find(".dsn-active");a.find(".inner .name-title .dsn-word-wrapper .dsn-chars-wrapper").css({visibility:"hidden",opacity:0,transform:""}),i.css({right:"30%"}),e.find(".section-slider").removeClass("section-slider-next").css({zIndex:1}).find(".cover-bg").css({zIndex:""}),o.css({zIndex:2}).find(".cover-bg").css({zIndex:0}),o.find(".inner .name-title .dsn-word-wrapper").find(".dsn-chars-wrapper").css({visibility:"inherit",opacity:1}),a.css({left:"",transform:""}),a.removeClass("dsn-active"),o.addClass("dsn-active"),s.css({right:0,width:"calc(25vw + 5%)"}),n.find(".section-slider").removeClass("section-slider-next"),s.addClass("section-slider-next")}function setAnimateTextSlider(){var e=$(".sections-wrapper.dsn-parent-slide"),t=e.find(".section-slider"),n=new TimelineLite;if(t.each(function(){PlayVideo($(this),!0)}),0<t.length){var i=e.find(".dsn-active");PlayVideo(i,!1),n.staggerFromTo(i.find(".inner .subtitle .dsn-word-wrapper .dsn-chars-wrapper "),.05,{autoAlpha:0,scaleX:1.8,y:-25},{autoAlpha:1,scaleX:1,y:0,ease:Expo.easeIn},.05).staggerFromTo(i.find(".inner .name-title .dsn-word-wrapper .dsn-chars-wrapper"),.1,{autoAlpha:0,scaleX:1.7,skewY:10,rotation:2,x:-50,ease:Expo.easeIn},{autoAlpha:1,scaleX:1,skewY:0,rotation:0,x:0,ease:Expo.easeIn},.09,"-=1");var s=i.data("number");$(".section-footer .number span").text(s)}}function getSliderNext(e){if(null==e)return!1;var t=e.find(".dsn-active");if(void 0!==t){var n=t.next();if(1===n.length&&n.hasClass("section-slider")&&"SECTION"===n[0].nodeName)return n;var i=e.find("section.section-slider");return 0<i.length&&i.first()}}function showNextSection(e,t){if(null==e)return!1;if(void 0!==t){var n=t.next();if(1===n.length&&n.hasClass("section-slider")&&"SECTION"===n[0].nodeName)return n;var i=e.find("section.section-slider");return 0<i.length&&i.first()}}function getSliderPrev(e){if(null==e)return!1;var t=e.find(".dsn-active");if(void 0!==t){var n=t.prev();if(1===n.length&&n.hasClass("section-slider")&&"SECTION"===n[0].nodeName)return n;var i=e.find("section.section-slider");return 0<i.length&&i.last()}}function LoadingPage(){var e=$(".loading-page"),t=e.find(".dsn-progress"),n=t.find(".progress-number"),i=t.find(".progress-fill-left"),s=t.find(".progress-fill-right"),o=t.find(".loading-text"),a=dsnGrid.pageLoad(0,100,300,function(e){n.text(e+"%"),i.css("width",e/2+"%"),s.css("width",e/2+"%")});$(window).on("load",function(){clearInterval(a),TweenMax.to(i,.5,{width:"50%",onUpdate:function(e){var t=i.width()/i.parent().width()*100;n.text(2*parseInt(t)+"%")},onComplete:function(){FilteringISO(),TweenMax.to([n,s,i,o],.5,{autoAlpha:0}),TweenMax.to(e,2,{left:"100%",onComplete:function(){scrollEvent(),setAnimateTextSlider(),$("main.root").addClass("dsn-animate"),dsnGridProgressCircle(),e.css({display:"none",width:"0"})}}).delay(.5)}}),TweenMax.to(s,.5,{width:"50%"})})}function parallax(s){function e(){if(i.each(function(){var t=$(this);if($(window).width()<=991)t.css("transform","");else{var e=o[t.data("dsn-order")].top+t.innerHeight()/2,n=dsnGrid.getUndefinedVal(t.data("duration"),350);if(s.scrollTop()<=e-n){var i=dsnGrid.getUndefinedVal(t.data("move"),7);dsnGrid.scrollerIt(s,t,{duration:-1*s.height(),action:function(e){TweenMax.to(t,.3,{y:e.scroll/i,ease:Power0.easeOut})}})}}}),$('[data-dsn-grid="move-up"] ').each(function(){var e=$(this),t=$(this).find(".cover-bg");if(void 0!==t){var n=e.offset().top+e.innerHeight();s.scrollTop()<=n&&dsnGrid.scrollerIt(s,e,{duration:-1*s.height(),action:function(e){t.css({transform:"translate3d(0px,"+e.scroll/5+"px,0px)"})}})}}),void 0!==r&&0<r.length){var e=a.offset().top,t=$("section.next-up");(void 0===t||t.length<1)&&(t=$("footer"));var n=t.offset().top;s.scrollTop()>=e-300&&s.scrollTop()<=n-t.outerHeight()?r.css({transform:"translate3d(0px , 0px , 0px)",opacity:1}):r.css({transform:"translate3d(0px , -50% , 0px)",opacity:0})}}var o={},i=$('[data-dsn-grid="move-section"]'),a=$(".page-content"),r=a.find(".filter-btn");i.each(function(e){var t=$(this);dsnGrid.setPositionMoveSection(t,7,200),t.attr("data-dsn-order",e),o[e]=t.offset()}),s.on("scroll",function(){e()}),e();var t=$('[data-dsn-grid="parallax"]');0===t.length||s.width()<992||(t.each(function(){var e=$(this),t=(dsnGrid.removeAttr(e,"data-dsn-grid"),dsnGrid.removeAttr(e,"data-dsn-grid-speed")),n=dsnGrid.removeAttr(e,"data-dsn-grid-move");dsnGrid.parallaxMoveElemnt(e,n,t)}),$(".gallery .projs-item a").each(function(){var e=$(this);dsnGrid.parallaxMoveElemnt(e.find(".projs-item-img-container"),20,.3,e.find(".projs-item-title"),!0),dsnGridRelationImage(e.find(".projs-item-img-container"),6,.5)}),dsnGridRelationImage($(".hero-img"),2,.5))}function dsnHeroSection(c){function e(){var e=dsnGrid.scaleIt(c,u,{position:!1,plus:5500});if(1<e+.91667)v.addClass("bg-white"),991<c&&h.css("width","100%");else{v.removeClass("bg-white");var t=c.scrollTop(),n=dsnGrid.scaleIt(c,f,{position:!0}),i=dsnGrid.scaleIt(c,p,{position:!0,plus:200}),s=dsnGrid.scaleIt(c,p,{position:!0,plus:1300}),o=dsnGrid.scaleIt(c,h,{position:!1,plus:2e3});TweenMax.to(f,.3,{scale:n+1,opacity:1-n}),991<$(window).width()&&(u.css({transform:"translate3d(0px,0px,0px) scale("+(e+.91667)+")"}),h.css({width:100*(o+.8)+"%"}));var a=1;991<$(window).width()&&!$("body").hasClass("dsn-large-mobile")?a=1-i:(p.css("transition","all 400ms ease-out 0s"),f.css("transition","all 400ms ease-out 0s")),TweenMax.to(p,.3,{scale:s+1,opacity:a,y:t/-2})}if(!(c.width()<992)){var r=$("section.next-up"),l=$(".site-header , .header-top");if(void 0!==r&&0<r.length){var d=r.offset().top-r.height();setTimeout(function(){c.scrollTop()>=d?r.hasClass("dsn-animate")||(r.addClass("dsn-animate"),l.css("background-color","transparent"),dsnGrid.scrollTop(".next-up",1500,0)):(l.css("background-color",""),r.removeClass("dsn-animate"))},500)}}}var t=$("header.dsn-header-hero"),f=t.find(".hero-img"),p=t.find(".header-content"),u=$(".content-background"),v=$(".page-content"),h=$(".content-block.block-first");c.on("scroll",function(){e(),e()}),e(),$('a[href*="#"]').on("click",function(e){e.preventDefault()}),$("a.hero__down").on("click",function(){dsnGrid.scrollTop(".page-content",1200,0)})}function filter(){var e=$(".filters-content"),t=e.find(".filtering"),n=e.find(".close-filters"),i=t.find("button"),s=new TimelineLite,o=$(".site-header , .header-top");$(".filter-btn").on("click",function(){s.fromTo(e,.5,{force3D:!0,autoAlpha:0,ease:Power0.easeIn},{autoAlpha:1}),s.staggerFromTo(i,.3,{force3D:!0,autoAlpha:0,y:-20},{autoAlpha:1,y:0},.2),o.slideUp()}),n.on("click",function(){s.isActive()&&s.progress(1),(s=new TimelineLite).to(e,.5,{autoAlpha:0}),s.staggerTo(i,.3,{autoAlpha:0,y:20},.2,"-=.3"),o.slideDown()}),i.on("click",function(){dsnGrid.scrollTop(".page-content",1e3,-200),n.click()})}function slider_project(){$(".proj-slider-image").each(function(){var e=$(this),t=dsnGrid.getUndefinedVal(e.data("next-text"),"");e.slick({speed:700,infinite:!0,slidesToScroll:1,slidesToShow:1,prevArrow:"",cssEase:"cubic-bezier(.9, .03, .41, .49)",speed:700,nextArrow:'<button class="button-next next-right">\n                <svg viewBox="0 0 52 52"  xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">\n                    <path d="M3 26.7h39.5v3.5c0 .3.1.5.4.6.2.1.5.1.7-.1l5.9-4.2c.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-5.9-4.2c-.1-.1-.3-.1-.4-.1-.1 0-.2 0-.3.1-.2.1-.4.3-.4.6v3.5H3c-.4 0-.7.3-.7.7 0 .3.3.6.7.6z"></path>\n                </svg>\n                <span>'+t+"</span>\n            </button>"})})}function FilteringISO(){var t=$(".gallery"),e=$(".filtering");void 0===t||t.length<1||void 0===e||e.length<1||(t=t.isotope({itemSelector:".projs-item",transitionDuration:"0.5s"}),e.on("click","button",function(){var e=$(this).attr("data-filter");t.isotope({filter:e}),$(this).addClass("active").siblings().removeClass("active")}))}function scrollEvent(e){var t=$("body"),n=t.data("dsn-scroller"),i=$(window);void 0!==n&&!0===n?(!function(s){function n(e,t,n){var i=s.scrollTop()-parseInt(e*n);TweenLite.to(s,t,{scrollTo:{y:i,autoKill:!0},autoKill:!0,overwrite:10})}navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/MSIE 9/i)||s.width()<=991?t.addClass("dsn-mobile").addClass("dsn-large-mobile"):(s.on("keydown",function(e){var t=e.keyCode?e.keyCode:e.which;$("body").hasClass("nav-active")||s.width()<=991||(38===t?n(1,.1,10):40===t?n(-1,.1,10):34===t?n(-1,.5,300):33===t?n(1,.5,300):36===t?n(1,2,s.scrollTop()):35===t&&n(-1,2,$(document).height()))}),s.on("mousewheel DOMMouseScroll",function(e){$("body").hasClass("nav-active")||s.width()<=991||(e.preventDefault(),n(e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,.85,250))}))}(i),t.hasClass("dsn-mobile")||i.on("resize",function(){991<i.width()?t.hasClass("dsn-mobile")&&t.removeClass("dsn-mobile"):t.addClass("dsn-mobile")})):t.addClass("dsn-mobile")}function data_overlay(){$("[data-overlay-color]").each(function(){var e=$(this),t=dsnGridRemoveAttr(e,"data-overlay-color");e.addClass("dsn-overlay"),$("body").append("<style>.dsn-overlay[data-overlay]:before{background: "+t+";}</style>")})}function background(){$(".cover-bg, section , [data-image-src]").each(function(){var e=$(this).attr("data-image-src");void 0!==e&&!1!==e&&$(this).css("background-image","url("+e+")")})}function slick_client(e){var t=$(".client-curs");0<t.length&&(t.slick({slidesToShow:1,slidesToScroll:1,arrows:!0,infinite:!0,nextArrow:'<i class="fas fa-angle-right"></i>',prevArrow:'<i class="fas fa-angle-left"></i>',cssEase:"cubic-bezier(.9, .03, .41, .49)",speed:700}),991<e.width()&&(dsnGrid.parallaxMoveElemnt(t.find(".fas.fa-angle-right"),25),dsnGrid.parallaxMoveElemnt(t.find(".fas.fa-angle-left"),25)))}function slick_next_proj(){var e=$(".next-proj-slider");e.slick({arrows:!1}),$(".next-proj button.button-next").on("click",function(){e.slick("slickNext")})}function services_tab(){$(".services").on("click",".link-click",function(){var e=$(this).attr("id");$(this).addClass("active").siblings().removeClass("active"),$("#"+e+"-content").fadeIn().siblings().hide()})}function initMap(){var e=document.getElementById("map");if(null!==e)try{var t=new google.maps.Map(e,{center:{lat:34.0937458,lng:-118.3614978},zoom:12,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]});new google.maps.Marker({position:new google.maps.LatLng(34.0937458,-118.3614978),animation:google.maps.Animation.BOUNCE,icon:"assets/img/map-marker.png",title:"ASL",map:t})}catch(e){}}function contactValidator(){var s=$("#contact-form");s<1||(s.validator(),s.on("submit",function(e){if(!e.isDefaultPrevented()){return $.ajax({type:"POST",url:"contact.php",data:$(this).serialize(),success:function(e){var t="alert-"+e.type,n=e.message,i='<div class="alert '+t+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+n+"</div>";t&&n&&(s.find(".messages").html(i),s[0].reset())}}),!1}}))}function refreshScript(){var e=$(window);dsn_slider(),setAnimateTextSlider(),background(),data_overlay(),parallax(e),dsnHeroSection(e),FilteringISO(),slider_project(),slick_client(e),slick_next_proj(),services_tab(),filter(),toggleButtonMap(),initMap(),dsnGrid.embedVideo(".play-button"),gallery(),ajaxLoad(!0),mouseCirMove(!0),contactValidator()}!function(e){"use strict";var t=jQuery(window);LoadingPage(),data_overlay(),background(),parallax(t),dsnHeroSection(t),slider_project(),slick_client(t),slick_next_proj(),services_tab(),filter(),dsn_slider(),toggleButtonMap(),mouseCirMove(),ajaxLoad(!1),effectBackForward(),navBar(t),initMap(),dsnGrid.embedVideo(".play-button"),gallery()}();