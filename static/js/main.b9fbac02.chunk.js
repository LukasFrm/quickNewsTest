(window.webpackJsonpnews_app=window.webpackJsonpnews_app||[]).push([[0],{41:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=(a(24),a(46),a(19)),s=a.n(c),l=a(35),u=a(11),d=a(12),m=a(14),p=a(13),b=a(15),h=function(e){return r.a.createElement("form",{onSubmit:e.getNews},r.a.createElement("input",{type:"text",name:"country",placeholder:"Your query..."}),e.querySubmitted?r.a.createElement("button",{className:"btnDelete"},"Clear"):r.a.createElement("button",{className:"btnGetNews"},"Get News"))},v=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 title-container"},r.a.createElement("div",{className:"queryWindow load"},r.a.createElement("h1",null,"This is the detailed query")))}}]),t}(n.Component),f=a(20),w=a.n(f),y=a(40),g=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(){this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement(y.a,{striped:!0,bordered:!0,small:!0,autoWidth:!0,hover:!0,responsive:!0,data:this.props.tableData,entriesOptions:[10,100,500,1e3,2e3,5e3],entries:100})}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={querySubmitted:!1,author:void 0,content:void 0,description:void 0,publishedAt:void 0,sourceName:void 0,title:void 0,url:void 0,urlToImage:void 0,error:void 0},a.getNews=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n={Authorization:"d137b326c612435e93c08624f36e5bd4"},r=t.target[0].value,100,50,a.data={columns:[{label:"Published at",field:"date",sort:"asc",width:270},{label:"Author",field:"author",sort:"asc",width:270},{label:"Title",field:"title",sort:"asc",width:150}],rows:[]},t.preventDefault(),o=3;o<5;o++)w.a.all([w.a.get("https://newsapi.org/v2/everything?pageSize=".concat(100,"&q=").concat(r,"&page=").concat(o),{headers:n})]).then((function(e){console.log(e)}));a.setState((function(e){return{querySubmitted:!e.querySubmitted}}),(function(){console.log(" the state is ".concat(a.state.querySubmitted))})),a.state.dataReceived&&(console.log("Data has been received"),a.state.dataReceived.map((function(e,t){var n={date:new Date(e[3]).toLocaleDateString("lt-LT"),author:e[0],title:e[5]};console.log(a.data),a.data.rows.push(n),console.warn(a.data.rows[t])})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"container w-100 m-0"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7 form-container"},r.a.createElement(h,{getNews:this.getNews,querySubmitted:this.state.querySubmitted}),r.a.createElement("div",{style:{backgroundColor:"white",borderRadius:"6px",padding:"15px"}},r.a.createElement(g,{tableData:this.data,dataReceived:this.state.dataReceived}))),this.state.querySubmitted?r.a.createElement(v,null):null)))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b9fbac02.chunk.js.map