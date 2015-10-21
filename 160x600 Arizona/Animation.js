var home_animation = {
  boundEvents: {},  
  container: document.getElementById("container"),
  logo2: document.getElementById("logo2"),
  logo_back_1: document.getElementById("logo_back_1"),
  logo_back_2: document.getElementById("logo_back_2"),
  logo: document.getElementById("logo"),
  text01A: document.getElementById("text01A"),
  text01B: document.getElementById("text01B"),
  text01C: document.getElementById("text01C"),

  text02A: document.getElementById("text02A"),
  text02B: document.getElementById("text02B"),
  text02C: document.getElementById("text02C"), 
  text02D: document.getElementById("text02D"),
  text02E: document.getElementById("text02E"),
  
  text03A: document.getElementById("text03A"),
  text03B: document.getElementById("text03B"),
  text03C: document.getElementById("text03C"), 
  text03D: document.getElementById("text03D"),
  text03E: document.getElementById("text03E"),
  text03F: document.getElementById("text03F"), 
  
  bind: function (elem, eventName, callback) {if (elem.addEventListener) {elem.addEventListener(eventName, callback, false);}else if (elem.attachEvent) {var eID = elem.attachEvent('on'+ eventName, callback);boundEvents[eID] = { name: eventName, callback: callback };}},
  init: function () {
    // CTA BTN CLICKTAG //
   // home_animation.bind(container,'click',function(e){e.preventDefault();Enabler.exit("clickTag1");});
   //
   //TweenLite.to(logo2, 0, {top :0});
    
    TweenLite.to(logo_back_1, .75, {left:0, opacity:1});
    TweenLite.to(logo_back_2, .75, {left:0, opacity:1});
    TweenLite.to(logo, .5, {top:0, opacity:1});

    TweenLite.delayedCall(1, home_animation.frame1);
  },
  reset: function () {    
  },
  frame1: function () {
    TweenLite.to(text01A, .35, {opacity:1, top:0});
    TweenLite.to(text01B, .35, {opacity:1, delay: .15, top:0});
    TweenLite.to(text01C, .35, {opacity:1, delay: .25, top:0});

    TweenLite.to(logo2, 1.2, {delay:.75, top :0});
    TweenLite.to(bk_pic, 1.2,{delay:.75, opacity:1})
   // TweenLite.to(background, 1,{delay:.75, opacity:0})
    

    // Exit
    // TweenLite.to(Frame1, 0.2, {opacity:0, delay: 2.8});
    TweenLite.delayedCall(4, home_animation.frame1Outro);
  },
  frame1Outro: function () {

    TweenLite.to(text01A, .35, {opacity:0, top:-10});
    TweenLite.to(text01B, .35, {opacity:0, top:-10});
    TweenLite.to(text01C, .35, {opacity:0, top:-10});

    TweenLite.to(bk_pic, 1.2,{delay:.75, opacity:0})
    TweenLite.to(bk_pic2, 1.2,{delay:.75, opacity:1})

    TweenLite.to(text02A, .45, {opacity:1, delay:1, top:0});
    TweenLite.to(text02B, .45, {opacity:1, delay: 1.18, top:0});
    TweenLite.to(text02C, .45, {opacity:1, delay: 1.28, top:0});
    TweenLite.to(text02D, .45, {opacity:1, delay: 1.38,top:0});
   // TweenLite.to(text02E, .45, {opacity:1, delay: 1.48, top:0});
  
    TweenLite.delayedCall(4.2, home_animation.frame2);
  },
  frame2: function () {

    TweenLite.to(text02A, .35, {opacity:0, top:-10});
    TweenLite.to(text02B, .35, {opacity:0, top:-10});
    TweenLite.to(text02C, .35, {opacity:0, top:-10});
    TweenLite.to(text02D, .35, {opacity:0, top:-10});
   // TweenLite.to(text02E, .35, {opacity:0, top:-10});
    

    TweenLite.to(bk_pic2, 1.2,{delay:.75, opacity:0})
    TweenLite.to(bk_pic3, 1.2,{delay:.75, opacity:1})

    TweenLite.to(text03A, .45, {opacity:1, delay:1, top:0});
    TweenLite.to(text03B, .45, {opacity:1, delay: 1.18, top:0});
    TweenLite.to(text03C, .45, {opacity:1, delay: 1.28, top:0});
    TweenLite.to(text03D, .45, {opacity:1, delay: 1.38,top:0});
    TweenLite.to(text03E, .45, {opacity:1, delay: 1.48, top:0});
    TweenLite.to(text03F, .45, {opacity:1, delay: 1.58,top:0});
    TweenLite.to(text03G, .45, {opacity:1, delay: 1.58, top:0});


  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {home_animation.init();}

