(this.webpackJsonpsaleshut=this.webpackJsonpsaleshut||[]).push([[0],{11:function(e,a,t){e.exports=t(29)},16:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(6),r=t.n(s),c=(t(16),t(1)),m=t(2),o=t(4),i=t(3),d=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"w3l-market-footer"},n.a.createElement("footer",{className:"footer-28"},n.a.createElement("div",{className:"footer-bg-layer"},n.a.createElement("div",{className:"container py-lg-3"},n.a.createElement("div",{className:"row footer-top-28"},n.a.createElement("div",{className:"col-md-6 footer-list-28 mt-5"},n.a.createElement("h6",{className:"footer-title-28"},"Contact information"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Address")," :Abuja Nigeria")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"Phone")," : ",n.a.createElement("a",{href:"tel:+404-11-22-89"},"+234 80 3056 "))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 footer-list-28 mt-5"},n.a.createElement("h6",{className:"footer-title-28"},"Company"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#URL"},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"#pricing.html"},"Pricing")))),n.a.createElement("div",{className:"col-md-4 footer-list-28 mt-5"},n.a.createElement("h6",{className:"footer-title-28"},"Support"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#signup.html"},"Create account")))),n.a.createElement("div",{className:"col-md-4 footer-list-28 mt-5"},n.a.createElement("h6",{className:"footer-title-28"},"Product"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#URL"},"Shop")),n.a.createElement("li",null,n.a.createElement("a",{href:"#URL"},"Admin UI")))))))),n.a.createElement("div",{className:"midd-footer-28 align-center py-lg-4 py-3 mt-5"},n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"copy-footer-28 text-center"}," \xa9 2020 myShop. All Rights Reserved.  "))))))}}]),t}(n.a.Component),u=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"w3l-bootstrap-header fixed-top"},n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light p-2"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"index.html"},n.a.createElement("span",{className:"fa fa-home",style:{color:"red"}}),"myShop"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"#URL"},"Home"))))))),n.a.createElement("div",{className:"w3l-index-block1"},n.a.createElement("div",{className:"content py-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center py-md-5 py-3"},n.a.createElement("div",{className:"col-md-5 content-left pt-md-0 pt-5"},n.a.createElement("h1",null," Making an online business has never been easier "),n.a.createElement("p",{className:"mt-3 mb-md-5 mb-4"}," Make use of cutting edge tools to make build your online presence."),n.a.createElement("a",{href:"#login.html",className:"btn btn-primary btn-theme"},"Get Started")),n.a.createElement("div",{className:"col-md-7 content-photo mt-md-0 mt-5"},n.a.createElement("img",{src:"images/main.jpg",className:"img-fluid",alt:""}))),n.a.createElement("div",{className:"clear"})))))}}]),t}(n.a.Component),E=t(5),p=t.n(E),f=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault();var a={name:e.target.Message.value,message:e.target.Message.value,senderEmail:e.target.Sender.value};""!==a.name&&""!==a.message&&""!==a.senderEmail?window.emailjs.send("gmail","template_9Uw2pe6R",a).then((function(e){e&&(p()({title:"Thank You!",text:"Your feedback has been sent",icon:"success",button:"close"}),console.log("SUCCESS!",e.status,e.text))})).catch((function(e){p()({title:"ooops",text:"something went wrong",icon:"error",button:"Close"}),console.log("FAILED...",e)})):p()({title:"ooops",text:"All feilds are required",icon:"error",button:"Close"})}},{key:"render",value:function(){return n.a.createElement("section",{class:"w3l-index-block6 py-5"},n.a.createElement("div",{class:"container py-lg-3"},n.a.createElement("div",{class:"subscribe mx-auto"},n.a.createElement("div",{class:"heading text-center mx-auto"},n.a.createElement("h3",{class:"head"},"Ready To get started?  "),n.a.createElement("p",{class:"my-3 head"}," Give us a feedback to be the first to know once we launch.")),n.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},n.a.createElement("div",{class:"form-group row"},n.a.createElement("div",{class:"col-md-12"},n.a.createElement("label",{class:"contact-textfield-label",for:"w3lName"},"Name"),n.a.createElement("input",{type:"text",class:"form-control",name:"Name",id:"Name",placeholder:"",required:""}))),n.a.createElement("div",{class:"form-group row"},n.a.createElement("div",{class:"col-md-12"},n.a.createElement("label",{class:"contact-textfield-label",for:"w3lSender"},"Your Email ID"),n.a.createElement("input",{type:"email",class:"form-control",name:"Sender",id:"Sender",placeholder:"",required:""}))),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{class:"contact-textfield-label",for:"w3lMessage"},"Message"),n.a.createElement("textarea",{name:"Message",class:"form-control",id:"Message",placeholder:"",required:""})),n.a.createElement("button",{type:"submit",class:"btn btn-primary btn-contact"},"Send Message")))))}}]),t}(n.a.Component),h=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{class:"w3l-index-block2 py-5"},n.a.createElement("div",{class:"container py-md-3"},n.a.createElement("div",{class:"heading text-center mx-auto"},n.a.createElement("h3",{class:"head"},"We provide solutions to grow your business "),n.a.createElement("p",{class:"my-3 head"}," Here at salesHut we understand and see the potential in businesses like yours, which is why we are working tirelessly to see your businesses grow and and succeed.")),n.a.createElement("div",{class:"row bottom_grids pt-md-3"},n.a.createElement("div",{class:"col-lg-4 col-md-6 mt-5"},n.a.createElement("div",{class:"s-block"},n.a.createElement("a",{href:"#blog-single.html",class:"d-block p-lg-4 p-3"},n.a.createElement("img",{src:"images/s1.png",alt:"",class:"img-fluid"}),n.a.createElement("h3",{class:"my-3"},"Global Network"),n.a.createElement("p",{class:""},"Our goal is to help  businesses attract and maintain and cutomers by building an online presence. Reach your cutomers and serve them where ever they are.")))),n.a.createElement("div",{class:"col-lg-4 col-md-6 mt-5"},n.a.createElement("div",{class:"s-block"},n.a.createElement("a",{href:"#blog-single.html",class:"d-block p-lg-4 p-3"},n.a.createElement("img",{src:"images/s2.png",alt:"",class:"img-fluid"}),n.a.createElement("h3",{class:"my-3"},"Ideas"),n.a.createElement("p",{class:""},"Make your big ideas come to reality,whether your are just starting out or an existing business, have an online outlet. ")))),n.a.createElement("div",{class:"col-lg-4 mt-5"},n.a.createElement("div",{class:"s-block"},n.a.createElement("a",{href:"#blog-single.html",class:"d-block p-lg-4 p-3"},n.a.createElement("img",{src:"images/s3.png",alt:"",class:"img-fluid"}),n.a.createElement("h3",{class:"my-3"},"High Benefits"),n.a.createElement("p",{class:""},"Build trust, create ripples, open up  new waves of oppurtunities. Your potential to attract an untapped market has never been easier"))))))),n.a.createElement("section",{class:"w3l-index-block3"},n.a.createElement("div",{class:"section-info py-5"},n.a.createElement("div",{class:"container py-md-3"},n.a.createElement("div",{class:"row cwp17-two align-items-center"},n.a.createElement("div",{class:"col-md-6 cwp17-image"},n.a.createElement("img",{src:"images/business.png",class:"img-fluid",alt:""})),n.a.createElement("div",{class:"col-md-6 cwp17-text"},n.a.createElement("h2",null,"Start your business easily with Us"),n.a.createElement("p",null,"Selling through social media can be cumbersome, from multiple posts, to long twitter threads, to making sure all your products advetisements reach the right audience, to handling multiple direct messages from potential customers, to not having a comprehensive business records e.t.c The need for a one stop solutions to all these problems and more has never been more important."),n.a.createElement("a",{href:"#signup.html"},"Learn more \xbb")))))),n.a.createElement("div",{class:"w3l-index-block4"},n.a.createElement("div",{class:"features-bg py-5"},n.a.createElement("div",{class:"container py-md-3"},n.a.createElement("div",{class:"heading text-center mx-auto"},n.a.createElement("h3",{class:"head"},"All in one solution for your business "),n.a.createElement("p",{class:"my-3 head"}," One stop solution for you to start,market, grow, track your business.")),n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-md-6 features15-col-text"},n.a.createElement("a",{href:"#url",class:"d-flex flex-wrap feature-unit align-items-center"},n.a.createElement("div",{class:"col-sm-3"},n.a.createElement("div",{class:"features15-info"},n.a.createElement("span",{class:"fa fa-pencil-square-o","aria-hidden":"true"}))),n.a.createElement("div",{class:"col-sm-9 mt-sm-0 mt-4"},n.a.createElement("div",{class:"features15-para"},n.a.createElement("h4",null,"Track Records"),n.a.createElement("p",null,"Keep a detailed log of your business transactions. Visualize transactions with graphs"))))),n.a.createElement("div",{class:"col-md-6 features15-col-text"},n.a.createElement("a",{href:"#url",class:"d-flex flex-wrap feature-unit align-items-center"},n.a.createElement("div",{class:"col-sm-3"},n.a.createElement("div",{class:"features15-info"},n.a.createElement("span",{class:"fa fa-usd","aria-hidden":"true"}))),n.a.createElement("div",{class:"col-sm-9 mt-sm-0 mt-4"},n.a.createElement("div",{class:"features15-para"},n.a.createElement("h4",null,"Marketing"),n.a.createElement("p",null,"Use bots to create and manage marketting campaigns through social media paltforms."))))),n.a.createElement("div",{class:"col-md-6 features15-col-text"},n.a.createElement("a",{href:"#url",class:"d-flex flex-wrap feature-unit align-items-center"},n.a.createElement("div",{class:"col-sm-3"},n.a.createElement("div",{class:"features15-info"},n.a.createElement("span",{class:"fa fa-graduation-cap","aria-hidden":"true"}))),n.a.createElement("div",{class:"col-sm-9 mt-sm-0 mt-4"},n.a.createElement("div",{class:"features15-para"},n.a.createElement("h4",null,"POS"),n.a.createElement("p",null,"Use our POS solution to handle face to face transactions,keep track of all business records."))))),n.a.createElement("div",{class:"col-md-6 features15-col-text"},n.a.createElement("a",{href:"#url",class:"d-flex flex-wrap feature-unit align-items-center"},n.a.createElement("div",{class:"col-sm-3"},n.a.createElement("div",{class:"features15-info"},n.a.createElement("span",{class:"fa fa-sort-alpha-asc","aria-hidden":"true"}))),n.a.createElement("div",{class:"col-sm-9 mt-sm-0 mt-4"},n.a.createElement("div",{class:"features15-para"},n.a.createElement("h4",null,"Optimization"),n.a.createElement("p",null,"Capitalize on our cutting edge tools to optimize efficency in your business evironment."))))),n.a.createElement("div",{class:"col-md-6 features15-col-text"},n.a.createElement("a",{href:"#url",class:"d-flex flex-wrap feature-unit align-items-center"},n.a.createElement("div",{class:"col-sm-3"},n.a.createElement("div",{class:"features15-info"},n.a.createElement("span",{class:"fa fa-laptop","aria-hidden":"true"}))),n.a.createElement("div",{class:"col-sm-9 mt-sm-0 mt-4"},n.a.createElement("div",{class:"features15-para"},n.a.createElement("h4",null,"Sell Everywhere"),n.a.createElement("p",null,"With salesHut, you can sell anything to anyone anywhere."))))),n.a.createElement("div",{class:"col-md-6 features15-col-text"},n.a.createElement("a",{href:"#url",class:"d-flex flex-wrap feature-unit align-items-center"},n.a.createElement("div",{class:"col-sm-3"},n.a.createElement("div",{class:"features15-info"},n.a.createElement("span",{class:"fa fa-line-chart","aria-hidden":"true"}))),n.a.createElement("div",{class:"col-sm-9 mt-sm-0 mt-4"},n.a.createElement("div",{class:"features15-para"},n.a.createElement("h4",null,"Business Growth"),n.a.createElement("p",null,"Leverage our built-in tools which help you create, and execute fundamnetal aspects of business growth.")))))),n.a.createElement("div",null)))),n.a.createElement("section",{class:"w3l-index-block7 py-5"},n.a.createElement("div",{class:"container py-md-3"},n.a.createElement("div",{class:"row cwp17-two align-items-center"},n.a.createElement("div",{class:"col-md-6 cwp17-text"},n.a.createElement("h2",null,"Sell Anything"),n.a.createElement("p",null,"   Bring your business to salesHut no matter where you are and what business your are in. Build and manage your online store yourself, share store link on social media. Its never been easier and more convinent to start an online business than now.  "),n.a.createElement("a",{href:"#signup.html"},"Learn more \xbb")),n.a.createElement("div",{class:"col-md-6 cwp17-image"},n.a.createElement("img",{src:"images/main.jpg",class:"img-fluid",alt:""}))))),n.a.createElement("section",{class:"w3l-index-block3"},n.a.createElement("div",{class:"section-info py-5"},n.a.createElement("div",{class:"container py-md-3"},n.a.createElement("div",{class:"row cwp17-two align-items-center"},n.a.createElement("div",{class:"col-md-6 cwp17-image"},n.a.createElement("img",{src:"images/mobile-app.png",class:"img-fluid",alt:""})),n.a.createElement("div",{class:"col-md-6 cwp17-text"},n.a.createElement("h2",null,"Manage Orders"),n.a.createElement("p",null,"Manage your orders from your dashboard, send automated emails to customers open order placement.Give feedback to customers as orders are being processed in real time. "),n.a.createElement("a",{href:"#signup.html"},"Learn more \xbb")))))),n.a.createElement("section",{class:"w3l-index-block7 py-5"},n.a.createElement("div",{class:"container py-md-3"},n.a.createElement("div",{class:"row cwp17-two align-items-center"},n.a.createElement("div",{class:"col-md-6 cwp17-text"},n.a.createElement("h2",null,"Track Business Growth"),n.a.createElement("p",null,"Get business reports on the go, visualize your business data using charts and graphs. Track every step you make to greatness. "),n.a.createElement("a",{href:"#signup.html"},"Learn more \xbb")),n.a.createElement("div",{class:"col-md-6 cwp17-image"},n.a.createElement("img",{src:"images/business.png",class:"img-fluid",alt:""}))))),n.a.createElement("section",{class:"w3l-index-block9",id:"partners"},n.a.createElement("div",{class:"partners py-5"},n.a.createElement("div",{class:"container py-lg-3"},n.a.createElement("div",{class:"heading text-center mx-auto"},n.a.createElement("h3",{class:"head"},"Over 200 Companies that trust our amazing product ")),n.a.createElement("div",{class:"row col-md-10 justify-content-between grid-part text-center mx-auto"},n.a.createElement("div",{class:"parts-w3ls col-sm-2 col-6 mt-5"},n.a.createElement("span",{class:"fa fa-cc-visa"})),n.a.createElement("div",{class:"parts-w3ls col-sm-2 col-6 mt-5"},n.a.createElement("span",{class:"fa fa-digg"})),n.a.createElement("div",{class:"parts-w3ls col-sm-2 col-6 mt-5"},n.a.createElement("span",{class:"fa fa-lastfm"})),n.a.createElement("div",{class:"parts-w3ls col-sm-2 col-6 mt-5"},n.a.createElement("span",{class:"fa fa-cc-discover"})),n.a.createElement("div",{class:"parts-w3ls col-sm-2 col-6 mt-5"},n.a.createElement("span",{class:"fa fa-ravelry"})),n.a.createElement("div",{class:"parts-w3ls col-sm-2 col-6 mt-5"},n.a.createElement("span",{class:"fa fa-cc-stripe"})))))),n.a.createElement(f,null))}}]),t}(n.a.Component),v=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement(h,null),n.a.createElement(d,null))}}]),t}(n.a.Component);var g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.70e17adf.chunk.js.map