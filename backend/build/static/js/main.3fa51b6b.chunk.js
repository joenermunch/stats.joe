(this.webpackJsonpnewstats=this.webpackJsonpnewstats||[]).push([[0],{21:function(e,a,t){e.exports=t(48)},44:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),s=t(2),o=t.n(s),m=t(3),u=t(14),i=t(15),d=t(19),p=t(16),g=t(20),f=t(17),b=t.n(f),E=(t(44),t(18)),h=t.n(E),v=(t(45),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(l)))).state={username:null,images:null,stats:null,loading:!1,download:!1},t.callAPI=function(){var e=Object(m.a)(o.a.mark((function e(a){var n,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.setState({loading:!0}),e.next=4,b.a.post("/api/data",{username:t.state.username});case 4:n=e.sent,r=n.data.topalbums.album.map((function(e){return e.image[2]["#text"]})),l=n.data.topalbums.album.map((function(e){return{artist:e.artist.name,album:e.name,playcount:e.playcount,image:e.image[2]["#text"]}})),t.setState({images:r,stats:l,loading:!1,download:!0});case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t.makeImage=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()(document.querySelector("#capture"),{allowTaint:!0,useCORS:!0,scrollX:0,scrollY:0}).then((function(e){var a=document.createElement("a");a.href=e.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),a.download="mytopalbums.jpg",a.click()}));case 2:case"end":return e.stop()}}),e)}))),t.renderDownload=function(){return!0===t.state.download?r.a.createElement("button",{className:"download-button",onClick:t.makeImage},"Download"):r.a.createElement(r.a.Fragment,null)},t.renderImages=function(){return t.state.stats?t.state.stats.map((function(e){return r.a.createElement("div",{style:{background:"url(".concat(e.image,")")},key:e.image,className:"image-item"},r.a.createElement("div",{className:"stats"},r.a.createElement("p",null,e.artist),r.a.createElement("p",{className:"album"},e.album),r.a.createElement("p",{className:"plays"},e.playcount," plays")))})):r.a.createElement(r.a.Fragment,null)},t.renderLoading=function(){return!0===t.state.loading?r.a.createElement("p",{className:"loading"},"Loading..."):t.renderDownload()},t}return Object(g.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main-container"},r.a.createElement("header",null,r.a.createElement("form",{onSubmit:function(a){return e.callAPI(a)}},r.a.createElement("h1",{className:"title"},"stats.joe"),r.a.createElement("input",{placeholder:"Last.FM username",type:"text",onChange:function(a){return e.setState({username:a.target.value})}}),r.a.createElement("button",{className:"submit-button",onClick:this.callAPI},"Generate collage"),r.a.createElement("div",{className:"result"},this.renderLoading()))),r.a.createElement("div",{className:"image-main"},r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image-box",id:"capture"},this.renderImages()))))}}]),a}(n.Component));c.a.render(r.a.createElement(v,null),document.querySelector("#root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3fa51b6b.chunk.js.map