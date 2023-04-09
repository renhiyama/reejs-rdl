/**
 * Bundled by jsDelivr using Rollup v2.74.1 and Terser v5.15.1.
 * Original file: /npm/@twind/preset-tailwind@1.1.4/preset-tailwind.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{match as e,arbitrary as t,matchTheme as o,mql as r,toCSS as i,asArray as n,matchColor as a,toColorValue as l,normalize as c}from"./c5d58b.js";let s={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",...f(4,"rem",4,.5,.5),...f(12,"rem",4,5),14:"3.5rem",...f(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:m("blur"),backdropBrightness:m("brightness"),backdropContrast:m("contrast"),backdropGrayscale:m("grayscale"),backdropHueRotate:m("hueRotate"),backdropInvert:m("invert"),backdropOpacity:m("opacity"),backdropSaturate:m("saturate"),backdropSepia:m("sepia"),backgroundColor:m("colors"),backgroundImage:{none:"none"},backgroundOpacity:m("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...f(200,"",100,0,50),...f(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:m("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:m("spacing"),borderWidth:{DEFAULT:"1px",...p(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:m("colors"),caretColor:m("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{...f(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:m("borderColor"),divideOpacity:m("borderOpacity"),divideWidth:m("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:({theme:e})=>({...e("colors"),none:"none"}),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...d(2,6),...d(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:m("spacing"),gradientColorStops:m("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...d(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...d(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{...f(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{...f(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:m("spacing"),placeholderColor:m("colors"),placeholderOpacity:m("opacity"),outlineColor:m("colors"),outlineOffset:p(8,"px"),outlineWidth:p(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:"#3b82f6"}),ringOffsetColor:m("colors"),ringOffsetWidth:p(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...p(8,"px")},rotate:{...p(2,"deg"),...p(12,"deg",3),...p(180,"deg",45)},saturate:f(200,"",100,0,50),scale:{...f(150,"",100,0,50),...f(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:m("spacing"),scrollPadding:m("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...p(2,"deg"),...p(12,"deg",3)},space:m("spacing"),stroke:({theme:e})=>({...e("colors"),none:"none"}),strokeWidth:f(2),textColor:m("colors"),textDecorationColor:m("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...p(8,"px")},textUnderlineOffset:{auto:"auto",...p(8,"px")},textIndent:m("spacing"),textOpacity:m("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:m("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...d(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{...f(50,"",1,0,10),auto:"auto"}};function d(e,t){let o={};do{for(var r=1;r<e;r++)o[`${r}/${e}`]=Number((r/e*100).toFixed(6))+"%"}while(++e<=t);return o}function p(e,t,o=0){let r={};for(;o<=e;o=2*o||1)r[o]=o+t;return r}function f(e,t="",o=1,r=0,i=1,n={}){for(;r<=e;r+=i)n[r]=r/o+t;return n}function m(e){return({theme:t})=>t(e)}let g={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${s.fontFamily.sans})`,fontFeatureSettings:"theme(fontFamily.sans[1].fontFeatureSettings, normal)"},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${s.fontFamily.mono})`,fontFeatureSettings:"theme(fontFamily.mono[1].fontFeatureSettings, normal)",fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},b=[e("\\[([-\\w]+):(.+)]",(({1:e,2:o},r)=>({"@layer overrides":{"&":{[e]:t(`[${o}]`,"",r)}}}))),e("(group|peer)([~/][^-[]+)?",(({input:e},{h:t})=>[{c:t(e)}])),o("aspect-","aspectRatio"),e("container",((e,{theme:t})=>{let{screens:o=t("screens"),center:i,padding:n}=t("container"),a={width:"100%",marginRight:i&&"auto",marginLeft:i&&"auto",...l("xs")};for(let e in o){let t=o[e];"string"==typeof t&&(a[r(t)]={"&":{maxWidth:t,...l(e)}})}return a;function l(e){let t=n&&("string"==typeof n?n:n[e]||n.DEFAULT);if(t)return{paddingRight:t,paddingLeft:t}}})),o("content-","content",(({_:e})=>({"--tw-content":e,content:"var(--tw-content)"}))),e("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),e("box-(border|content)","boxSizing",(({1:e})=>e+"-box")),e("hidden",{display:"none"}),e("table-(auto|fixed)","tableLayout"),e(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",e("isolate","isolation"),e("object-(contain|cover|fill|none|scale-down)","objectFit"),o("object-","objectPosition"),e("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",u),e("overscroll(-[xy])?-(auto|contain|none)",(({1:e="",2:t})=>({["overscroll-behavior"+e]:t}))),e("(static|fixed|absolute|relative|sticky)","position"),o("-?inset(-[xy])?(?:$|-)","inset",(({1:e,_:t})=>({top:"-x"!=e&&t,right:"-y"!=e&&t,bottom:"-x"!=e&&t,left:"-y"!=e&&t}))),o("-?(top|bottom|left|right)(?:$|-)","inset"),e("(visible|collapse)","visibility"),e("invisible",{visibility:"hidden"}),o("-?z-","zIndex"),e("flex-((row|col)(-reverse)?)","flexDirection",h),e("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),o("(flex-(?:grow|shrink))(?:$|-)"),o("(flex)-"),o("grow(?:$|-)","flexGrow"),o("shrink(?:$|-)","flexShrink"),o("basis-","flexBasis"),o("-?(order)-"),"-?(order)-(\\d+)",o("grid-cols-","gridTemplateColumns"),e("grid-cols-(\\d+)","gridTemplateColumns",z),o("col-","gridColumn"),e("col-(span)-(\\d+)","gridColumn",F),o("col-start-","gridColumnStart"),e("col-start-(auto|\\d+)","gridColumnStart"),o("col-end-","gridColumnEnd"),e("col-end-(auto|\\d+)","gridColumnEnd"),o("grid-rows-","gridTemplateRows"),e("grid-rows-(\\d+)","gridTemplateRows",z),o("row-","gridRow"),e("row-(span)-(\\d+)","gridRow",F),o("row-start-","gridRowStart"),e("row-start-(auto|\\d+)","gridRowStart"),o("row-end-","gridRowEnd"),e("row-end-(auto|\\d+)","gridRowEnd"),e("grid-flow-((row|col)(-dense)?)","gridAutoFlow",(e=>u(h(e)))),e("grid-flow-(dense)","gridAutoFlow"),o("auto-cols-","gridAutoColumns"),o("auto-rows-","gridAutoRows"),o("gap-x(?:$|-)","gap","columnGap"),o("gap-y(?:$|-)","gap","rowGap"),o("gap(?:$|-)","gap"),"(justify-(?:items|self))-",e("justify-","justifyContent",y),e("(content|items|self)-",(e=>({["align-"+e[1]]:y(e)}))),e("(place-(content|items|self))-",(({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t}))),o("p([xytrbl])?(?:$|-)","padding",v("padding")),o("-?m([xytrbl])?(?:$|-)","margin",v("margin")),o("-?space-(x|y)(?:$|-)","space",(({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}}))),e("space-(x|y)-reverse",(({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}}))),o("w-","width"),o("min-w-","minWidth"),o("max-w-","maxWidth"),o("h-","height"),o("min-h-","minHeight"),o("max-h-","maxHeight"),o("font-","fontWeight"),o("font-","fontFamily",(({_:e})=>"string"==typeof(e=n(e))[1]?{fontFamily:w(e)}:{fontFamily:w(e[0]),...e[1]})),e("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),e("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),e("italic","fontStyle"),e("not-italic",{fontStyle:"normal"}),e("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",(({1:e,2:t="",3:o})=>"normal"==t?{fontVariantNumeric:"normal"}:{["--tw-"+(o?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",...T({"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"})})),o("tracking-","letterSpacing"),o("leading-","lineHeight"),e("list-(inside|outside)","listStylePosition"),o("list-","listStyleType"),e("list-","listStyleType"),o("placeholder-opacity-","placeholderOpacity",(({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}}))),a("placeholder-",{property:"color",selector:"&::placeholder"}),e("text-(left|center|right|justify|start|end)","textAlign"),e("text-(ellipsis|clip)","textOverflow"),o("text-opacity-","textOpacity","--tw-text-opacity"),a("text-",{property:"color"}),o("text-","fontSize",(({_:e})=>"string"==typeof e?{fontSize:e}:{fontSize:e[0],..."string"==typeof e[1]?{lineHeight:e[1]}:e[1]})),o("indent-","textIndent"),e("(overline|underline|line-through)","textDecorationLine"),e("no-underline",{textDecorationLine:"none"}),o("underline-offset-","textUnderlineOffset"),a("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),o("decoration-","textDecorationThickness"),e("decoration-","textDecorationStyle"),e("(uppercase|lowercase|capitalize)","textTransform"),e("normal-case",{textTransform:"none"}),e("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),e("align-","verticalAlign"),e("whitespace-","whiteSpace"),e("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),e("break-words",{overflowWrap:"break-word"}),e("break-all",{wordBreak:"break-all"}),e("break-keep",{wordBreak:"keep-all"}),a("caret-",{opacityVariable:!1,opacitySection:"opacity"}),a("accent-",{opacityVariable:!1,opacitySection:"opacity"}),e("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",(({1:e})=>`linear-gradient(to ${x(e," ")},var(--tw-gradient-stops))`)),a("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},(({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"}))),a("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},(({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`}))),a("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),e("bg-(fixed|local|scroll)","backgroundAttachment"),e("bg-origin-(border|padding|content)","backgroundOrigin",(({1:e})=>e+"-box")),e(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),e("bg-blend-","backgroundBlendMode"),e("bg-clip-(border|padding|content|text)","backgroundClip",(({1:e})=>e+("text"==e?"":"-box"))),o("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),a("bg-",{section:"backgroundColor"}),o("bg-","backgroundImage"),o("bg-","backgroundPosition"),e("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",u),o("bg-","backgroundSize"),o("rounded(?:$|-)","borderRadius"),o("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",(({1:e,_:t})=>{let o={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${x(o[0])}-radius`]:t,[`border-${x(o[1])}-radius`]:t}})),e("border-(collapse|separate)","borderCollapse"),o("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),e("border-(solid|dashed|dotted|double|none)","borderStyle"),o("border-spacing(-[xy])?(?:$|-)","borderSpacing",(({1:e,_:t})=>({...T({"--tw-border-spacing-x":"0","--tw-border-spacing-y":"0"}),["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"}))),a("border-([xytrbl])-",{section:"borderColor"},v("border","Color")),a("border-"),o("border-([xytrbl])(?:$|-)","borderWidth",v("border","Width")),o("border(?:$|-)","borderWidth"),o("divide-opacity(?:$|-)","divideOpacity",(({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}}))),e("divide-(solid|dashed|dotted|double|none)",(({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}}))),e("divide-([xy]-reverse)",(({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}}))),o("divide-([xy])(?:$|-)","divideWidth",(({1:e,_:t})=>{let o={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${x(o[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${x(o[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}})),a("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),o("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),a("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),o("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),e("ring-inset",{"--tw-ring-inset":"inset"}),a("ring-",{property:"--tw-ring-color"}),o("ring(?:$|-)","ringWidth",(({_:e},{theme:t})=>({...T({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":l(t("ringOffsetColor","","#fff")),"--tw-ring-color":l(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}),"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"}))),a("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},(({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"}))),o("shadow(?:$|-)","boxShadow",(({_:e})=>({...T({"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}),"--tw-shadow":w(e),"--tw-shadow-colored":w(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"}))),o("(opacity)-"),e("mix-blend-","mixBlendMode"),...$(),...$("backdrop-"),o("transition(?:$|-)","transitionProperty",((e,{theme:t})=>({transitionProperty:w(e),transitionTimingFunction:"none"==e._?void 0:w(t("transitionTimingFunction","")),transitionDuration:"none"==e._?void 0:w(t("transitionDuration",""))}))),o("duration(?:$|-)","transitionDuration","transitionDuration",w),o("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",w),o("delay(?:$|-)","transitionDelay","transitionDelay",w),o("animate(?:$|-)","animation",((e,{theme:t,h:o,e:r})=>{let i=w(e),n=i.split(" "),a=t("keyframes",n[0]);return a?{["@keyframes "+(n[0]=r(o(n[0])))]:a,animation:n.join(" ")}:{animation:i}})),"(transform)-(none)",e("transform",S),e("transform-(cpu|gpu)",(({1:e})=>({"--tw-transform":C("gpu"==e)}))),o("scale(-[xy])?-","scale",(({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...S()}))),o("-?(rotate)-","rotate",k),o("-?(translate-[xy])-","translate",k),o("-?(skew-[xy])-","skew",k),e("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",u),"(appearance)-",o("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",o("(cursor)-"),"(cursor)-",e("snap-(none)","scroll-snap-type"),e("snap-(x|y|both)",(({1:e})=>({...T({"--tw-scroll-snap-strictness":"proximity"}),"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)"}))),e("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),e("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),e("snap-(normal|always)","scroll-snap-stop"),e("scroll-(auto|smooth)","scroll-behavior"),o("scroll-p([xytrbl])?(?:$|-)","padding",v("scroll-padding")),o("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",v("scroll-margin")),e("touch-(auto|none|manipulation)","touch-action"),e("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",(({1:e,2:t,3:o})=>({...T({"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}),[`--tw-${t?"pan-x":o?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)"}))),e("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),e("outline",{outlineStyle:"solid"}),e("outline-(dashed|dotted|double)","outlineStyle"),o("-?(outline-offset)-"),a("outline-",{opacityVariable:!1,opacitySection:"opacity"}),o("outline-","outlineWidth"),"(pointer-events)-",o("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"}[e]||e||"both")],e("select-(none|text|all|auto)","userSelect"),a("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),a("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),o("stroke-","strokeWidth"),e("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),e("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function u(e){return("string"==typeof e?e:e[1]).replace(/-/g," ").trim()}function h(e){return("string"==typeof e?e:e[1]).replace("col","column")}function x(e,t="-"){let o=[];for(let t of e)o.push({t:"top",r:"right",b:"bottom",l:"left"}[t]);return o.join(t)}function w(e){return e&&""+(e._||e)}function y({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function v(e,t=""){return({1:o,_:r})=>{let n={x:"lr",y:"tb"}[o]||o+o;return n?{...i(e+"-"+x(n[0])+t,r),...i(e+"-"+x(n[1])+t,r)}:i(e+t,r)}}function $(t=""){let r=["blur","brightness","contrast","grayscale","hue-rotate","invert",t&&"opacity","saturate","sepia",!t&&"drop-shadow"].filter(Boolean),i={};for(let e of r)i[`--tw-${t}${e}`]="var(--tw-empty,/*!*/ /*!*/)";return i={...T(i),[`${t}filter`]:r.map((e=>`var(--tw-${t}${e})`)).join(" ")},[`(${t}filter)-(none)`,e(`${t}filter`,i),...r.map((e=>o(`${"h"==e[0]?"-?":""}(${t}${e})(?:$|-)`,e,(({1:t,_:o})=>({[`--tw-${t}`]:n(o).map((t=>`${e}(${t})`)).join(" "),...i})))))]}function k({1:e,_:t}){return{["--tw-"+e]:t,...S()}}function S(){return{...T({"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":C()}),transform:"var(--tw-transform)"}}function C(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function F({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function z({1:e}){return`repeat(${e},minmax(0,1fr))`}function T(e){return{"@layer defaults":{"*,::before,::after":e,"::backdrop":e}}}let W=[["sticky","@supports ((position: -webkit-sticky) or (position:sticky))"],["motion-reduce","@media (prefers-reduced-motion:reduce)"],["motion-safe","@media (prefers-reduced-motion:no-preference)"],["print","@media print"],["(portrait|landscape)",({1:e})=>`@media (orientation:${e})`],["contrast-(more|less)",({1:e})=>`@media (prefers-contrast:${e})`],["(first-(letter|line)|placeholder|backdrop|before|after)",({1:e})=>`&::${e}`],["(marker|selection)",({1:e})=>`& *::${e},&::${e}`],["file","&::file-selector-button"],["(first|last|only)",({1:e})=>`&:${e}-child`],["even","&:nth-child(2n)"],["odd","&:nth-child(odd)"],["open","&[open]"],["(aria|data)-",({1:e,$$:o},r)=>o&&`&[${e}-${r.theme(e,o)||t(o,"",r)||`${o}="true"`}]`],["((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?",({2:e,3:t="",4:o,5:r="",6:i=t},{e:n,h:a,v:l})=>{let s=c(r)||("["==o[0]?o:l(o.slice(1)));return`${(s.includes("&")?s:"&"+s).replace(/&/g,`:merge(.${n(a(e+i))})`)}${"p"==e[0]?"~":" "}&`}],["(ltr|rtl)",({1:e})=>`[dir="${e}"] &`],["supports-",({$$:e},o)=>{if(e&&(e=o.theme("supports",e)||t(e,"",o)),e)return e.includes(":")||(e+=":var(--tw)"),/^\w*\s*\(/.test(e)||(e=`(${e})`),`@supports ${e.replace(/\b(and|or|not)\b/g," $1 ").trim()}`}],["max-",({$$:e},o)=>{if(e&&(e=o.theme("screens",e)||t(e,"",o)),"string"==typeof e)return`@media not all and (min-width:${e})`}],["min-",({$$:e},o)=>(e&&(e=t(e,"",o)),e&&`@media (min-width:${e})`)],[/^\[(.+)]$/,({1:e})=>/[&@]/.test(e)&&c(e).replace(/[}]+$/,"").split("{")]];let A={__proto__:null,slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"}};function D({disablePreflight:e}={}){return function({colors:e,disablePreflight:t}={}){return{preflight:t?void 0:g,theme:{...s,colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",...e}},variants:W,rules:b,finalize:e=>e.n&&e.d&&e.r.some((e=>/^&::(before|after)$/.test(e)))&&!/(^|;)content:/.test(e.d)?{...e,d:"content:var(--tw-content);"+e.d}:e}}({colors:A,disablePreflight:e})}export{D as default};
//# sourceMappingURL=/sm/b471d295f35250de42c1fc8281e65b886024258984133ec0b17fe0b416ad663e.map