(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/platziconf-logo.f246f5f1.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/badge-header.973f5842.svg"},,,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.0026b862.svg"},function(e,t,a){e.exports=a.p+"static/media/astronauts.71addf45.svg"},function(e,t,a){e.exports=a(57)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),s=(a(39),a(40),a(10)),o=a(13),i=a(7),m=a.n(i),u=a(12),d=a(14),p=a(18),f=a(1),h=a(2),g=a(4),b=a(3),v=a(5),E=a(15),N=a.n(E),j=(a(42),a(19)),O=a.n(j),w=(a(43),a(29)),y=a.n(w);var _=function(e){var t=e.email,a=y()(t);return r.a.createElement("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"Gravatar"})},C=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:O.a,alt:"Logo de la conferencia"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement(_,{className:"Badge__avatar",email:this.props.email}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null),this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h2",null,this.props.jobTitle),r.a.createElement("div",null,this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},"#Conferencia"))}}]),t}(r.a.Component),S=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{value:this.props.formValues.firstName,onChange:this.props.onChange,className:"form-control",name:"firstName"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{value:this.props.formValues.lastName,onChange:this.props.onChange,className:"form-control",name:"lastName"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{value:this.props.formValues.email,type:"email",onChange:this.props.onChange,className:"form-control",name:"email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{value:this.props.formValues.jobTitle,onChange:this.props.onChange,className:"form-control",name:"jobTitle"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{value:this.props.formValues.twitter,onChange:this.props.onChange,className:"form-control",name:"twitter"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"),this.props.error&&r.a.createElement("p",{className:"text-danger"},this.props.error.message)))}}]),t}(r.a.Component),k="http://localhost:3001",x=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e}(t,a),new Promise(function(t){return setTimeout(t,e)})};function B(e){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(m.a.mark(function e(t){var a,n,r,l,c=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,x();case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},n=k+t,e.next=7,fetch(n,a);case 7:return r=e.sent,e.next=10,r.json();case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}var L={badges:{list:function(){return B("/badges")},create:function(e){return B("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return B("/badges/".concat(e))},update:function(e,t){return B("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return B("/badges/".concat(e),{method:"DELETE"})}}},I=(a(46),a(26),function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),t}(n.Component));var A=function(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement(I,null))},D=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:"",avatarUrl:""}},a.handleChange=function(e){a.setState({form:Object(p.a)({},a.state.form,Object(d.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0,error:null}),e.prev=2,e.next=5,L.badges.create(a.state.form);case 5:a.setState({loading:!1}),a.props.history.push("/badges"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({loading:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return this.state.loading?r.a.createElement(A,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"BadgeNew__hero-image img-fluid",src:N.a,alt:"Logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(C,{firstName:this.state.form.firstName||"FIRST NAME",lastName:this.state.form.lastName||"LAST NAME",email:this.state.form.email||"EMAIL",jobTitle:this.state.form.jobTitle||"JOB TITLE",twitter:this.state.form.twitter||"@twitter"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"New Attendant"),r.a.createElement(S,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error})))))}}]),t}(r.a.Component),M=(a(47),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:"",avatarUrl:""}},a.fetchData=function(){var e=Object(u.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,L.badges.read(a.props.match.params.badgeId);case 4:n=e.sent,a.setState({loading:!1,form:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState({form:Object(p.a)({},a.state.form,Object(d.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.setState({loading:!0,error:null}),e.prev=2,e.next=5,L.badges.update(a.props.match.params.badgeId,a.state.form);case 5:a.setState({loading:!1}),a.props.history.push("/badges"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),a.setState({loading:!1,error:e.t0});case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(A,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeEdit__hero"},r.a.createElement("img",{className:"BadgeEdit__hero-image img-fluid",src:N.a,alt:"Logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(C,{firstName:this.state.form.firstName||"FIRST NAME",lastName:this.state.form.lastName||"LAST NAME",email:this.state.form.email||"EMAIL",jobTitle:this.state.form.jobTitle||"JOB TITLE",twitter:this.state.form.twitter||"@twitter"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Edit Attendant"),r.a.createElement(S,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error})))))}}]),t}(r.a.Component)),F=(a(48),a(49),function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return 0===this.props.badges.length?r.a.createElement("div",null,r.a.createElement("h3",null,"No badges were found"),r.a.createElement(s.b,{className:"btn btn-primary",to:"/badges/new"},"Create new")):r.a.createElement("div",{className:"BadgesList "},r.a.createElement("ul",null,this.props.badges.map(function(e){return r.a.createElement("li",{className:"BadgesListItem",key:e.id},r.a.createElement(s.b,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id,"/edit")},r.a.createElement(_,{className:"Badge__avatar",email:e.email}),e.firstName," ",e.lastName,r.a.createElement("br",null),e.twitter,r.a.createElement("br",null),e.jobTitle))})))}}]),t}(n.Component));a(54);var U=function(e){return r.a.createElement("div",{className:"PageError"},":O ",e.error.message," :v")},J=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(f.a)(this,t),console.log("1. Contructor"),(a=Object(g.a)(this,Object(b.a)(t).call(this,e))).fetchData=Object(u.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:null}),e.prev=1,e.next=4,L.badges.list();case 4:t=e.sent,a.setState({loading:!1,data:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])})),a.state={loading:!0,error:null,data:[]},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(),console.log("3. componentDidMount"),this.intervalId=setInterval(this.fetchData,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"componentDidUpdate",value:function(e,t){console.log("5. componentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("6. componentWillUnmount"),clearTimeout(this.timeoutId)}},{key:"render",value:function(){return!0!==this.state.loading||this.state.data?this.state.error?r.a.createElement(U,{error:this.state.error}):(console.log("2. Render"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:O.a,alt:"Conf Logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(s.b,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(F,{badges:this.state.data}),this.state.loading&&r.a.createElement(J,null)))))):r.a.createElement(A,null)}}]),t}(r.a.Component),V=a(32),z=a.n(V),H=(a(55),function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(s.b,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:z.a,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf"))))}}]),t}(r.a.Component));var R=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),e.children)};var W=function(){return r.a.createElement("h1",null,"404: Not Found")},G=(a(56),a(33)),q=a.n(G),K=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("img",{src:N.a,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),r.a.createElement("h1",null,"Badge Management System"),r.a.createElement(s.b,{className:"btn btn-primary",to:"/badges"},"Start")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},r.a.createElement("img",{src:q.a,alt:"Astronauts",className:"img-fluid p-4"})))))}}]),t}(n.Component);var Q=function(){return r.a.createElement(s.a,null,r.a.createElement(R,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:K}),r.a.createElement(o.a,{exact:!0,path:"/badges",component:P}),r.a.createElement(o.a,{exact:!0,path:"/badges/new",component:D}),r.a.createElement(o.a,{exact:!0,path:"/badges/:badgeId/edit",component:M}),r.a.createElement(o.a,{component:W}))))},X=document.getElementById("app");c.a.render(r.a.createElement(Q,null),X)}],[[34,1,2]]]);
//# sourceMappingURL=main.fd6159a3.chunk.js.map