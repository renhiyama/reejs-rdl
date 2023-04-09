/* esm.sh - esbuild bundle(preact-render-to-string@6.0.2) node production */
import{options as c,h as E,Fragment as C}from"./ae2ada.js";var L=/[\s\n\\/='"\0<>]/,I=/^xlink:?./,N=/["&<]/;function S(e){if(e.length===0||N.test(e)===!1)return e;for(var a=0,r=0,t="",s="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:s="&quot;";break;case 38:s="&amp;";break;case 60:s="&lt;";break;default:continue}r!==a&&(t+=e.slice(a,r)),t+=s,a=r+1}return r!==a&&(t+=e.slice(a,r)),t}var T={},U=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),V=/[A-Z]/g;function Z(e){var a="";for(var r in e){var t=e[r];if(t!=null&&t!==""){var s=r[0]=="-"?r:T[r]||(T[r]=r.replace(V,"-$&").toLowerCase()),v=";";typeof t!="number"||s.startsWith("--")||U.has(s)||(v="px;"),a=a+s+":"+t+v}}return a||void 0}var j,h,m,g,F=[],$=Array.isArray,D=Object.assign;function M(e,a){var r=c.__s;c.__s=!0,j=c.__b,h=c.diffed,m=c.__r,g=c.unmount;var t=E(C,null);t.__k=[e];try{return k(e,a||H,!1,void 0,t)}finally{c.__c&&c.__c(e,F),c.__s=r,F.length=0}}function W(){this.__d=!0}var H={};function B(e,a){var r=e.type,t=new r(e.props,a);return e.__c=t,t.__v=e,t.props=e.props,t.context=a,t.__d=!0,t.state==null&&(t.state=H),t.__s==null&&(t.__s=t.state),r.getDerivedStateFromProps?t.state=D({},t.state,r.getDerivedStateFromProps(t.props,t.state)):t.componentWillMount&&(t.componentWillMount(),t.state=t.__s!==t.state?t.__s:t.state),m&&m(e),t.render(t.props,t.state,a)}function k(e,a,r,t,s){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":S(e+"");if($(e)){var v="";s.__k=e;for(var y=0;y<e.length;y++){var x=e[y];x!=null&&typeof x!="boolean"&&(v+=k(x,a,r,t,s))}return v}if(e.constructor!==void 0)return"";e.__=s,j&&j(e);var w,l,u,i=e.type,f=e.props,b=a;if(typeof i=="function"){if(i===C)l=f.children;else{if((w=i.contextType)!=null){var A=a[w.__c];b=A?A.props.value:w.__}if(i.prototype&&typeof i.prototype.render=="function")l=B(e,b),u=e.__c;else{e.__c=u={__v:e,props:f,context:b,setState:W,forceUpdate:W,__d:!0,__h:[]};for(var z=0;u.__d&&z++<25;)u.__d=!1,m&&m(e),l=i.call(u,f,b);u.__d=!0}u.getChildContext!=null&&(a=D({},a,u.getChildContext()))}var q=k(l=l!=null&&l.type===C&&l.key==null?l.props.children:l,a,r,t,e);return h&&h(e),e.__=void 0,g&&g(e),q}var _,p="<"+i,d="";for(var n in f){var o=f[n];switch(n){case"children":_=o;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in f)continue;n="for";break;case"className":if("class"in f)continue;n="class";break;case"defaultChecked":n="checked";break;case"defaultSelected":n="selected";break;case"defaultValue":case"value":switch(n="value",i){case"textarea":_=o;continue;case"select":t=o;continue;case"option":t!=o||"selected"in f||(p+=" selected")}break;case"dangerouslySetInnerHTML":d=o&&o.__html;continue;case"style":typeof o=="object"&&(o=Z(o));break;default:if(r&&I.test(n))n=n.toLowerCase().replace(G,"xlink:");else{if(L.test(n))continue;n[4]!=="-"&&n!=="draggable"||o==null||(o+="")}}o!=null&&o!==!1&&typeof o!="function"&&(p=o===!0||o===""?p+" "+n:p+" "+n+'="'+S(o+"")+'"')}if(L.test(i))throw new Error(i+" is not a valid HTML tag name in "+p+">");return d||(typeof _=="string"?d=S(_):_!=null&&_!==!1&&_!==!0&&(d=k(_,a,i==="svg"||i!=="foreignObject"&&r,t,e))),h&&h(e),e.__=void 0,g&&g(e),!d&&J.has(i)?p+"/>":p+">"+d+"</"+i+">"}var G=/^xlink:?/,J=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),Q=M,R=M,X=M;export{X as default,Q as render,R as renderToStaticMarkup,M as renderToString};
//# sourceMappingURL=preact-render-to-string.mjs.map