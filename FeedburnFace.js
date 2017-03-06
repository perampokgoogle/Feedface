//<![CDATA[
  var appended = false,
  bookmark = document.createElement("div");
  bookmark.id = "fbOnscroll";
  bookmark.innerHTML = '<div id="fbbox-wrapper"><div class="fbbox-wrapper zoomInUp">\
  <iframe name="f13bea94f064144" width="1000px" height="1000px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" src="https://www.facebook.com/v2.7/plugins/page.php?adapt_container_width=true&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FuN4_cXtJDGb.js%3Fversion%3D42%23cb%3Df19b772d4d20444%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff1ba7fe51c4d354%26relation%3Dparent.parent&amp;container_width=613&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FPerampokGoogle&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false" style="border: none; visibility: visible; width: 340px; height: 214px;" class=""></iframe>\
<div class="close-fbcookie" onclick="hidefbbox()"><span>&#215;</span> Don\'t Show Again</div>\
<div class="close-fbbox" onclick="hidefb()">&#215;</div>\
              </div>\
              <div class="layer fadeIn"></div></div>\
              <div class="subscribe_box2 slideInUp" id="site-subs">\
<div id="subscribe-box2">\
  <p class="subs-title">SUBSCRIBE <span class="subs-title2">to Our Newsletter</span></p>\
                 <p>Sign up here with your email address to receive updates from this blog in your inbox.</p>\
             <div class="emailfield">\
              <form action="//feedburner.google.com/fb/a/mailverify" method="post" onsubmit="window.open(&apos;//feedburner.google.com/fb/a/mailverify?uri=PerampokGoogle&apos;, &apos;popupwindow&apos;, &apos;scrollbars=yes,width=550,height=520&apos;);return true" target="popupwindow">\
               <span class="form-name">\
               <input name="name" onblur="if (this.value == &quot;&quot;) {this.value = &quot;Your Name&quot;;}" onfocus="if (this.value == &quot;Your Name&quot;) {this.value = &quot;&quot;;}" type="text" value="Your Name"/></span>\
               <span class="clear"></span>\
               <span class="form-email">\
               <input name="email" onblur="if (this.value == &quot;&quot;) {this.value = &quot;Your Email&quot;;}" onfocus="if (this.value == &quot;Your Email&quot;) {this.value = &quot;&quot;;}" type="text" value="Your Email"/></span>\
<input name="uri" type="hidden" value="PerampokGoogle"/>\
<input name="loc" type="hidden" value="en_US"/>\
                <span class="form-button">\
                <input class="submitbutton" type="submit" onclick="hidesubscribebox()" value="Subscribe Now!"/></span>\
              </form>\
             </div>\
</div>\
  <div class="close-subOnscroll" onclick="hidesubscribe()">&#215;</div>\
</div>\
';
function hidefb(){document.getElementById("fbbox-wrapper").style.display="none"}function hidefbbox(){document.getElementById("fbbox-wrapper").style.display="none",createCookie("hideDialog","hide",7e3)}function hidesubscribe(){document.getElementById("site-subs").style.display="none"}function hidesubscribebox(){document.getElementById("site-subs").style.display="none",createCookie("hideDialog2","hide",7e3)}function createCookie(e,o,n){if(n){var t=new Date;t.setTime(t.getTime()+24*n*60*60*1e3);var i="; expires="+t.toGMTString()}else var i="";document.cookie=e+"="+o+i+"; path=/"}function readCookie(e){for(var o=e+"=",n=document.cookie.split(";"),t=0;t<n.length;t++){for(var i=n[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(o))return i.substring(o.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>800&&(appended||(document.body.appendChild(bookmark),appended=!0),readCookie("hideDialog")&&(document.getElementById("fbbox-wrapper").style.display="none"),readCookie("hideDialog2")&&(document.getElementById("site-subs").style.display="none"))};
function loadCSS(e,t,n){"use strict";var o=window.document.createElement("link"),s=t||window.document.getElementsByTagName("script")[0];o.rel="stylesheet",o.href=e,o.media="only x",s.parentNode.insertBefore(o,s),setTimeout(function(){o.media=n||"all"})}loadCSS("https://cdn.rawgit.com/PerampokGoogle/font-awesome-4.6.3/master/css/font-awesome.min.css");
//]]>
