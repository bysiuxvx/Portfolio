(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),s=n(18),o=n.n(s),r=(n(24),n(25),n(8)),c=n(10),l=(n(26),n(0)),h=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],s=function(){return a(!n)},o=[{name:"Home",path:"/",exact:!0},{name:"About",path:"/about"},{name:"Projects",path:"/projects"},{name:"Contact",path:"/contact"}].map((function(e){return Object(l.jsx)("li",{onClick:s,children:Object(l.jsx)(r.b,{className:"li-item",to:e.path,exact:!!e.exact&&e.exact,children:e.name})},e.name)}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsxs)("div",{className:"menu-icon",onClick:s,children:[Object(l.jsx)("div",{className:n?"line line-1":"line"}),Object(l.jsx)("div",{className:n?"line line-2":"line"}),Object(l.jsx)("div",{className:n?"line line-3":"line"})]}),Object(l.jsx)("div",{className:"navbar-container",children:Object(l.jsx)("ul",{className:n?"nav-menu active":"nav-menu",children:o})})]})})},d=n(2),p=n(15),u=n.n(p);n(33);var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("div",{className:"text-container",children:Object(l.jsx)("h2",{children:Object(l.jsx)(u.a,{options:{cursor:""},onInit:function(e){e.pauseFor(500).typeString("Hello World!").pauseFor(500).deleteChars("6").typeString("future employer!").pauseFor(500).deleteChars("16").pauseFor(500).typeString("fan!").pauseFor(500).deleteChars("4").pauseFor(500).typeString("mom!").pauseFor(500).deleteChars("4").typeString("World!").start()}})})}),Object(l.jsx)("div",{className:"text-container",children:Object(l.jsx)("p",{children:Object(l.jsx)(u.a,{options:{cursor:""},onInit:function(e){e.pauseFor(3500).typeString("I hope you will enjoy what you see!<br/>").pauseFor(1e3).typeString("All of my projects are stolen").pauseFor(1e3).deleteChars(10).pauseFor(1e3).typeString("<strong>were created</strong> by me!").start()}})})})]})})},j=(n(34),n(35),function(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),n=t[0],a=t[1],s=((new Date).getTime(),Object(i.useRef)());return Object(i.useEffect)((function(){return function(){var e=new Date("2021-07-16 00:00:00").getTime();s=setInterval((function(){var t=(new Date).getTime(),n=e-t,i=Math.floor(n/864e5);a(i),n>0&&clearInterval(s.current)}),10)}(),function(){clearInterval(s.current)}})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("div",{className:"picture",children:"PICTURE?"}),Object(l.jsxs)("div",{className:"text-container",children:[Object(l.jsx)("h2",{children:"Hi again, my name is Patryk"}),Object(l.jsx)("p",{children:"I've been working in IT for the last 8 years on several positions, from local support to IT/system admin."}),Object(l.jsxs)("p",{children:["My reasons for wanting to become a developer are simple - I would love to work creatively, to take part in building things, something I never had the chance to do in my career. My previous work concentrated around maintaining systems that already exist."," "]}),Object(l.jsxs)("p",{children:["I started programming late into 2020 during the pandemic because I wanted to change something in my life and career, I wanted to try out new things. Though the learning process was not always consistent due to the limited time I had. My dream is to become a developer, with a small goal of achieving this before my 30th birthday. Which means you have"," ",Object(l.jsxs)("strong",{className:"birthday",children:[n," days left"]})," to"," ",Object(l.jsx)("span",{style:{textDecoration:"underline"},children:"offer me a job"})," ","in order to help me with this goal!"]}),Object(l.jsxs)("p",{children:["Programming is giving me huge amounts of fun and satisfaction. Seeing how something that I wrote myself works is giving me the type of pleasure I haven't felt for a long time. The only time I get a little bit frustrated is when I can't align some things in the layout. Conceptualizing and styling this page probably took me longer than I can admit."," ",Object(l.jsx)("span",{style:{whiteSpace:"nowrap"},children:"\xaf\\_( \xb0 -\xb0)_/\xaf"})]}),Object(l.jsx)("p",{children:"My free time I either spend relaxing with my dog, learning something new about front-end, or playing guitar. I used to play in a band and even released two records on vinyl. A year ago I'd probably call myself a bit of a gamer, but because my free time is very limited I prefer spending it on learning stuff. I'm also interested in electronics and taught myself through tutorials to build small devices like guitar effects - most of them worked..."}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("strong",{children:"Interests:"}),Object(l.jsx)("li",{children:"Music and making music"}),Object(l.jsx)("li",{children:"Collecting vinyl records"}),Object(l.jsx)("li",{children:"Literature and films with dystopian themes"}),Object(l.jsx)("li",{children:"Programming of course!"})]})]})]})})});var b=function(){return Object(l.jsx)(l.Fragment,{})},g=(n(36),n(16)),f=function(e){var t=e.list,n=t.name,i=t.description,a=t.image,s=t.imageAlt,o=t.liveDemo,r=t.githubURL;return Object(l.jsxs)("div",{className:"projects-block",children:[Object(l.jsxs)("div",{className:"projects-container",children:[Object(l.jsx)("img",{src:a,alt:s,onClick:function(e){window.open(o,"_blank")},onAuxClick:function(e){window.open(o,"_blank")}}),Object(l.jsx)("div",{className:"project-name",children:Object(l.jsx)("h3",{children:n})}),Object(l.jsx)("p",{children:i}),Object(l.jsxs)("div",{className:"project-link-container",children:[Object(l.jsx)("h4",{className:"live-demo",onClick:function(e){window.open(o,"_blank")},onAuxClick:function(e){window.open(o,"_blank")},children:"Demo"}),Object(l.jsx)(g.a,{className:"github",onClick:function(e){window.open(r,"_blank")},onAuxClick:function(e){window.open(r,"_blank")}})]})]}),Object(l.jsxs)("div",{className:"project-link-container-large",children:[Object(l.jsx)("h4",{className:"live-demo",onClick:function(e){window.open(o,"_blank")},onAuxClick:function(e){window.open(o,"_blank")},children:"Demo"}),Object(l.jsx)(g.a,{className:"github",onClick:function(e){window.open(r,"_blank")},onAuxClick:function(e){window.open(r,"_blank")}})]})]})},x=n.p+"static/media/todoapp_fullsize.bab17aaf.jpg",v=n.p+"static/media/weatherapp_fullsize.14ec4b39.jpg",y=n.p+"static/media/passwordgenerator_fullsize.0042cfa0.jpg",O=function(){var e=[{name:"To Do List",description:"My first React project. Building this application from scratch to final state took me probably around 30 hours over the course of around a week. I have spent a big portion of the time on styling the app, because I didn't like the initial version, and I changed it 2-3 times. I also experimented with different libraries to make the application as fun as possible.",image:x,imageAlt:"To Do list app picture",githubURL:"https://github.com/bysiuxvx/ToDoApp",liveDemo:"https://bysiuxvx.github.io/ToDoApp/"},{name:"Weather app",description:"This was the first project I was really satisfied with. Looking back it is very simple, but I like the results, although everyone has different preferences when it comes to UI. It runs the API from OpenWeatherMap.",image:v,imageAlt:"Weather app picture",githubURL:"https://github.com/bysiuxvx/weather-app",liveDemo:"https://bysiuxvx.github.io/weather-app/"},{name:"Password generator",description:"Just a simple password generator, not much to say about it. Perfect for simple and quick usage! No one is ever going to hack your account or decrypt your important files again with a password from this baby.",image:y,imageAlt:"Password generator app picture",githubURL:"https://github.com/bysiuxvx/password-generator",liveDemo:"https://bysiuxvx.github.io/password-generator/"},{name:"This website!",description:"Even though using React for such a small website seems to be overkill, I decided to do it anyway - I wanted to prove my React skills. This is the first time I designed a website mobile first. The projects section in landscape orientation could be better, but that's because I'm not that good at designing yet! I like the mobile / tablet version of the projects section though.",image:y,imageAlt:"This website picture"}].map((function(e){return Object(l.jsx)(f,{list:e},e.name)}));return Object(l.jsxs)("div",{className:"projects-page",children:[Object(l.jsx)("h2",{children:"My favorite projects"}),e]})};var w=function(){return Object(l.jsxs)("div",{className:"error",style:{backgroundColor:"#1f1f1f",color:"white",textAlign:"center",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(l.jsx)("h1",{style:{fontSize:50},children:"Err0r!"}),Object(l.jsx)("p",{style:{fontSize:35,marginBottom:200},children:"This page doesn't exist!"})]})};n(37);var k=function(){return Object(l.jsx)("main",{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/",exact:!0,component:m}),Object(l.jsx)(d.a,{path:"/about",component:j}),Object(l.jsx)(d.a,{path:"/contact",component:b}),Object(l.jsx)(d.a,{path:"/projects",component:O}),Object(l.jsx)(d.a,{component:w})]})})};var I=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(k,{})]})})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.95661bb3.chunk.js.map