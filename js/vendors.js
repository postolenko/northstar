//-----  other  -----//
$.fn.hasAttr=function(a){return void 0!==this.attr(a)};
$.fn.exists=function(){return $(this).length};
$.fn.hasParent=function(a){a=$(a);var b=!1;$(this[0]).parents().andSelf().each(function(){if(-1!=$.inArray(this,a))return b=!0,!1});return b};
$(document.body).on('click', 'a[href="#"]', function(a){a.preventDefault()});
$(document.body).on('click', '[data-link]', function(a){a=$(this).attr("data-link");"_blank"==$(this).attr("target")?window.open(a,"_blank"):window.location.href=a});
$.cachedScript=function(url,options){options=$.extend(options||{},{dataType:'script',cache:!0,url:url});return $.ajax(options)}
function number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="";a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)};a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};
function number_decline(a,b,c){var d=[2,0,1,1,1,2];b=b[4<a%100&&20>a%100?2:d[5>a%10?a%10:5]];return"undefined"===typeof c||!0===c?a+" "+b:b};

//-----  isMobile  -----//
var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};

//-----  jquery.mousewheel-3.0.4.pack  -----//
(function(d){function g(a){var b=a||window.event,i=[].slice.call(arguments,1),c=0,h=0,e=0;a=d.event.fix(b);a.type="mousewheel";if(a.wheelDelta)c=a.wheelDelta/120;if(a.detail)c=-a.detail/3;e=c;if(b.axis!==undefined&&b.axis===b.HORIZONTAL_AXIS){e=0;h=-1*c}if(b.wheelDeltaY!==undefined)e=b.wheelDeltaY/120;if(b.wheelDeltaX!==undefined)h=-1*b.wheelDeltaX/120;i.unshift(a,c,h,e);return d.event.handle.apply(this,i)}var f=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
f.length;a;)this.addEventListener(f[--a],g,false);else this.onmousewheel=g},teardown:function(){if(this.removeEventListener)for(var a=f.length;a;)this.removeEventListener(f[--a],g,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

//-----  jquery-easing  -----//
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});