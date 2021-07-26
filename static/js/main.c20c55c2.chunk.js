(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=a(5),i=a.n(s),l=a(15),u=a(8),h=a(9),d=a(10),g=a(13),m=a(11),b=a(37),p=a.n(b),j={fetchImages:function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(a,"&key=").concat("21915448-ca2a23b845d7ec90c85800139","&image_type=photo&orientation=horizontal&per_page=12"),e.next=4,p.a.get(n);case 4:return r=e.sent,o=r.data,e.abrupt("return",o.hits);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}()},f=a(38),y=a.n(f),O=a(1),v=function(e){var t=e.children;return Object(O.jsx)("div",{className:y.a.container,children:t})},_=function(e){var t=e.children;return Object(O.jsx)(v,{children:t})},x=a(25),I=a(46),S=a(39),w=a.n(S),C=["type","onClick","children"],L=function(e){var t=e.type,a=e.onClick,n=e.children,r=Object(I.a)(e,C);return Object(O.jsx)("button",Object(x.a)(Object(x.a)({type:t,onClick:a,className:w.a.ButtonIcon},r),{},{children:n}))};L.defaultProps={onClick:function(){return null},children:null,type:"button"};var k=L,M=a(12),B=a(14),E=a.n(B),F=function(e){var t=e.handleSubmit,a=e.handleChange,n=e.searchQuery;return Object(O.jsx)("header",{className:E.a.Searchbar,children:Object(O.jsxs)("form",{className:E.a.SearchForm,onSubmit:t,children:[Object(O.jsx)(k,{type:"submit","aria-label":"Search images",children:Object(O.jsx)(M.a,{})}),Object(O.jsx)("input",{className:E.a.SearchFormInput,type:"text",value:n,onChange:a,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},N=a(22),G=a.n(N),P=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onClickImg;return Object(O.jsx)("li",{className:G.a.ImageGalleryItem,children:Object(O.jsx)("img",{src:t,alt:n,onClick:r,className:G.a.ImageGalleryItemImage,"data-source":a})})},U=a(40),Q=a.n(U),D=function(e){var t=e.images,a=e.onClickImg;return Object(O.jsx)("ul",{className:Q.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(O.jsx)(P,{webformatURL:n,tags:r,onClickImg:a,largeImageURL:o},t)}))})},R=a(41),q=a.n(R),T=function(e){var t=e.onLoadMore,a=e.contentBtn,n=e.disabled;return Object(O.jsx)("button",{disabled:n,onClick:t,className:q.a.Button,children:a})};T.defaultProps={onLoadMore:function(){return null},disabled:!1};var A=T,W=a(42),K=a.n(W),J=(a(91),a(43)),H=a.n(J),X=function(){return Object(O.jsx)("div",{className:H.a.LoaderSpinner,children:Object(O.jsx)(K.a,{type:"Watch",color:"#00BFFF",height:100,width:100,timeout:0})})},z=a(23),V=a.n(z),Y=document.querySelector("#modal-root"),Z=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleEventOverlay=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(O.jsx)("div",{className:V.a.Overlay,onClick:this.handleEventOverlay,children:Object(O.jsx)("div",{className:V.a.Modal,children:e})}),Y)}}]),a}(n.Component),$=a(24),ee=a.n($),te=function(e){var t=e.errorContent;return Object(O.jsx)("div",{role:"alert",className:ee.a.Error,children:Object(O.jsx)("p",{text:t,className:ee.a.ErrorContent,children:t})})},ae=a(44),ne=a(16),re=(a(100),a(45)),oe=a.n(re),ce=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],imagesPageList:[],searchQuery:"",loading:!1,page:1,largeImageURL:"",tags:"",showModal:!1,error:null},e.handleChange=function(t){var a=t.target.value;e.setState({searchQuery:a.toLowerCase()})},e.handleSearchSubmit=function(t){if(t.preventDefault(),""===e.state.searchQuery.trim())return ne.c.warn("Enter your request",{position:"top-center",transition:ne.b,style:{top:80,textAlign:"center",width:290,margin:"0 auto"}});e.renderImagesList()},e.renderImagesList=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.searchQuery,r=a.page,t.prev=1,e.setState({loading:!0}),t.next=5,j.fetchImages(n,r);case 5:o=t.sent,e.setState({imagesPageList:o}),e.setState((function(e){var t=e.images,a=e.page,n=e.imagesPageList;return{images:[].concat(Object(l.a)(t),Object(l.a)(n)),page:a+1,loading:!1,imagesPageList:Object(l.a)(n)}})),0===o.length&&e.setState((function(e){return{page:e.page-1,error:'There are no images on your request "'.concat(n,'"')}})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.setState({error:"Whoops, something went wrong. Enter your request again"});case 14:return t.prev=14,e.setState({loading:!1}),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])}))),e.loadMore=function(){e.renderImagesList(),e.scroll()},e.scroll=function(){ae.animateScroll.scrollToBottom()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source,tags:t.target.alt}),e.toggleModal()},e.disabledBtn=function(){e.setState((function(e){return{disabled:!e.disabled}}))},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.setState({images:[],page:1,error:null,imagesPageList:[]})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.searchQuery,n=e.tags,r=e.largeImageURL,o=e.showModal,c=e.loading,s=e.error,i=e.imagesPageList;return Object(O.jsxs)(_,{children:[Object(O.jsx)(F,{searchQuery:a,handleChange:this.handleChange,handleSubmit:this.handleSearchSubmit}),s&&Object(O.jsx)(te,{errorContent:s}),c&&Object(O.jsx)(X,{}),t.length>0&&!s&&Object(O.jsx)(D,{images:t,onClickImg:this.onOpenModal}),i.length>11&&!c&&!s&&Object(O.jsx)(A,{contentBtn:"Load More",onLoadMore:this.loadMore}),i.length<11&&i.length>0&&!c&&!s&&Object(O.jsx)(A,{disabled:!0,contentBtn:"End"}),o&&Object(O.jsxs)(Z,{onClose:this.toggleModal,children:[Object(O.jsx)("img",{src:r,alt:n}),Object(O.jsx)(k,{className:oe.a.ButtonIcon,onClick:this.toggleModal,"aria-label":"Close image",children:Object(O.jsx)(M.b,{})})]}),Object(O.jsx)(ne.a,{autoClose:3e3})]})}}]),a}(n.Component);a(101),a(102);c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(ce,{})}),document.getElementById("root"))},14:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1No8A",SearchForm:"Searchbar_SearchForm__1v9iv",SearchFormButton:"Searchbar_SearchFormButton__2DPnH",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3bWry",SearchFormInput:"Searchbar_SearchFormInput__2HKLP"}},22:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2TFUt",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__21bbW"}},23:function(e,t,a){e.exports={Overlay:"Modal_Overlay__33cOo",Modal:"Modal_Modal__4M1Jm"}},24:function(e,t,a){e.exports={Error:"Error_Error__1Tuy1",ErrorContent:"Error_ErrorContent__X_9bV"}},38:function(e,t,a){e.exports={container:"Container_container__3Dqu3"}},39:function(e,t,a){e.exports={ButtonIcon:"ButtonIcon_ButtonIcon__3Synd"}},40:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__S1Q3F"}},41:function(e,t,a){e.exports={Button:"Button_Button__282DS"}},43:function(e,t,a){e.exports={LoaderSpinner:"LoaderSpinner_LoaderSpinner__2hTP-"}},45:function(e,t,a){e.exports={ButtonIcon:"App_ButtonIcon__2xXS_"}}},[[103,1,2]]]);
//# sourceMappingURL=main.c20c55c2.chunk.js.map