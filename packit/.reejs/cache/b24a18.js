/* esm.sh - esbuild bundle(tweetnacl@1.0.3) deno production */
import __1$ from "./b8ffcb.js";var D0=Object.create;var t0=Object.defineProperty;var X0=Object.getOwnPropertyDescriptor;var G0=Object.getOwnPropertyNames;var V0=Object.getPrototypeOf,H0=Object.prototype.hasOwnProperty;var e0=(w=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(w,{get:(v,m)=>(typeof require<"u"?require:v)[m]}):w)(function(w){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+w+'" is not supported')});var J0=(w,v)=>()=>(v||w((v={exports:{}}).exports,v),v.exports),W0=(w,v)=>{for(var m in v)t0(w,m,{get:v[m],enumerable:!0})},x0=(w,v,m,pf)=>{if(v&&typeof v=="object"||typeof v=="function")for(let hf of G0(v))!H0.call(w,hf)&&hf!==m&&t0(w,hf,{get:()=>v[hf],enumerable:!(pf=X0(v,hf))||pf.enumerable});return w},lf=(w,v,m)=>(x0(w,v,"default"),m&&x0(m,v,"default")),M0=(w,v,m)=>(m=w!=null?D0(V0(w)):{},x0(v||!w||!w.__esModule?t0(m,"default",{value:w,enumerable:!0}):m,w));var a0=J0((k0,Nf)=>{(function(w){"use strict";var v=function(r){var t,x=new Float64Array(16);if(r)for(t=0;t<r.length;t++)x[t]=r[t];return x},m=function(){throw new Error("no PRNG")},pf=new Uint8Array(16),hf=new Uint8Array(32);hf[0]=9;var Pf=v(),Uf=v([1]),j0=v([56129,1]),n0=v([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),L0=v([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),i0=v([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),o0=v([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),R0=v([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function h0(r,t,x,f){r[t]=x>>24&255,r[t+1]=x>>16&255,r[t+2]=x>>8&255,r[t+3]=x&255,r[t+4]=f>>24&255,r[t+5]=f>>16&255,r[t+6]=f>>8&255,r[t+7]=f&255}function Kf(r,t,x,f,e){var n,i=0;for(n=0;n<e;n++)i|=r[t+n]^x[f+n];return(1&i-1>>>8)-1}function c0(r,t,x,f){return Kf(r,t,x,f,16)}function Zf(r,t,x,f){return Kf(r,t,x,f,32)}function z0(r,t,x,f){for(var e=f[0]&255|(f[1]&255)<<8|(f[2]&255)<<16|(f[3]&255)<<24,n=x[0]&255|(x[1]&255)<<8|(x[2]&255)<<16|(x[3]&255)<<24,i=x[4]&255|(x[5]&255)<<8|(x[6]&255)<<16|(x[7]&255)<<24,s=x[8]&255|(x[9]&255)<<8|(x[10]&255)<<16|(x[11]&255)<<24,_=x[12]&255|(x[13]&255)<<8|(x[14]&255)<<16|(x[15]&255)<<24,B=f[4]&255|(f[5]&255)<<8|(f[6]&255)<<16|(f[7]&255)<<24,l=t[0]&255|(t[1]&255)<<8|(t[2]&255)<<16|(t[3]&255)<<24,X=t[4]&255|(t[5]&255)<<8|(t[6]&255)<<16|(t[7]&255)<<24,g=t[8]&255|(t[9]&255)<<8|(t[10]&255)<<16|(t[11]&255)<<24,M=t[12]&255|(t[13]&255)<<8|(t[14]&255)<<16|(t[15]&255)<<24,T=f[8]&255|(f[9]&255)<<8|(f[10]&255)<<16|(f[11]&255)<<24,O=x[16]&255|(x[17]&255)<<8|(x[18]&255)<<16|(x[19]&255)<<24,z=x[20]&255|(x[21]&255)<<8|(x[22]&255)<<16|(x[23]&255)<<24,j=x[24]&255|(x[25]&255)<<8|(x[26]&255)<<16|(x[27]&255)<<24,R=x[28]&255|(x[29]&255)<<8|(x[30]&255)<<16|(x[31]&255)<<24,L=f[12]&255|(f[13]&255)<<8|(f[14]&255)<<16|(f[15]&255)<<24,A=e,S=n,E=i,p=s,U=_,y=B,o=l,h=X,u=g,c=M,b=T,d=O,Y=z,C=j,P=R,N=L,a,Z=0;Z<20;Z+=2)a=A+Y|0,U^=a<<7|a>>>32-7,a=U+A|0,u^=a<<9|a>>>32-9,a=u+U|0,Y^=a<<13|a>>>32-13,a=Y+u|0,A^=a<<18|a>>>32-18,a=y+S|0,c^=a<<7|a>>>32-7,a=c+y|0,C^=a<<9|a>>>32-9,a=C+c|0,S^=a<<13|a>>>32-13,a=S+C|0,y^=a<<18|a>>>32-18,a=b+o|0,P^=a<<7|a>>>32-7,a=P+b|0,E^=a<<9|a>>>32-9,a=E+P|0,o^=a<<13|a>>>32-13,a=o+E|0,b^=a<<18|a>>>32-18,a=N+d|0,p^=a<<7|a>>>32-7,a=p+N|0,h^=a<<9|a>>>32-9,a=h+p|0,d^=a<<13|a>>>32-13,a=d+h|0,N^=a<<18|a>>>32-18,a=A+p|0,S^=a<<7|a>>>32-7,a=S+A|0,E^=a<<9|a>>>32-9,a=E+S|0,p^=a<<13|a>>>32-13,a=p+E|0,A^=a<<18|a>>>32-18,a=y+U|0,o^=a<<7|a>>>32-7,a=o+y|0,h^=a<<9|a>>>32-9,a=h+o|0,U^=a<<13|a>>>32-13,a=U+h|0,y^=a<<18|a>>>32-18,a=b+c|0,d^=a<<7|a>>>32-7,a=d+b|0,u^=a<<9|a>>>32-9,a=u+d|0,c^=a<<13|a>>>32-13,a=c+u|0,b^=a<<18|a>>>32-18,a=N+P|0,Y^=a<<7|a>>>32-7,a=Y+N|0,C^=a<<9|a>>>32-9,a=C+Y|0,P^=a<<13|a>>>32-13,a=P+C|0,N^=a<<18|a>>>32-18;A=A+e|0,S=S+n|0,E=E+i|0,p=p+s|0,U=U+_|0,y=y+B|0,o=o+l|0,h=h+X|0,u=u+g|0,c=c+M|0,b=b+T|0,d=d+O|0,Y=Y+z|0,C=C+j|0,P=P+R|0,N=N+L|0,r[0]=A>>>0&255,r[1]=A>>>8&255,r[2]=A>>>16&255,r[3]=A>>>24&255,r[4]=S>>>0&255,r[5]=S>>>8&255,r[6]=S>>>16&255,r[7]=S>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=p>>>0&255,r[13]=p>>>8&255,r[14]=p>>>16&255,r[15]=p>>>24&255,r[16]=U>>>0&255,r[17]=U>>>8&255,r[18]=U>>>16&255,r[19]=U>>>24&255,r[20]=y>>>0&255,r[21]=y>>>8&255,r[22]=y>>>16&255,r[23]=y>>>24&255,r[24]=o>>>0&255,r[25]=o>>>8&255,r[26]=o>>>16&255,r[27]=o>>>24&255,r[28]=h>>>0&255,r[29]=h>>>8&255,r[30]=h>>>16&255,r[31]=h>>>24&255,r[32]=u>>>0&255,r[33]=u>>>8&255,r[34]=u>>>16&255,r[35]=u>>>24&255,r[36]=c>>>0&255,r[37]=c>>>8&255,r[38]=c>>>16&255,r[39]=c>>>24&255,r[40]=b>>>0&255,r[41]=b>>>8&255,r[42]=b>>>16&255,r[43]=b>>>24&255,r[44]=d>>>0&255,r[45]=d>>>8&255,r[46]=d>>>16&255,r[47]=d>>>24&255,r[48]=Y>>>0&255,r[49]=Y>>>8&255,r[50]=Y>>>16&255,r[51]=Y>>>24&255,r[52]=C>>>0&255,r[53]=C>>>8&255,r[54]=C>>>16&255,r[55]=C>>>24&255,r[56]=P>>>0&255,r[57]=P>>>8&255,r[58]=P>>>16&255,r[59]=P>>>24&255,r[60]=N>>>0&255,r[61]=N>>>8&255,r[62]=N>>>16&255,r[63]=N>>>24&255}function O0(r,t,x,f){for(var e=f[0]&255|(f[1]&255)<<8|(f[2]&255)<<16|(f[3]&255)<<24,n=x[0]&255|(x[1]&255)<<8|(x[2]&255)<<16|(x[3]&255)<<24,i=x[4]&255|(x[5]&255)<<8|(x[6]&255)<<16|(x[7]&255)<<24,s=x[8]&255|(x[9]&255)<<8|(x[10]&255)<<16|(x[11]&255)<<24,_=x[12]&255|(x[13]&255)<<8|(x[14]&255)<<16|(x[15]&255)<<24,B=f[4]&255|(f[5]&255)<<8|(f[6]&255)<<16|(f[7]&255)<<24,l=t[0]&255|(t[1]&255)<<8|(t[2]&255)<<16|(t[3]&255)<<24,X=t[4]&255|(t[5]&255)<<8|(t[6]&255)<<16|(t[7]&255)<<24,g=t[8]&255|(t[9]&255)<<8|(t[10]&255)<<16|(t[11]&255)<<24,M=t[12]&255|(t[13]&255)<<8|(t[14]&255)<<16|(t[15]&255)<<24,T=f[8]&255|(f[9]&255)<<8|(f[10]&255)<<16|(f[11]&255)<<24,O=x[16]&255|(x[17]&255)<<8|(x[18]&255)<<16|(x[19]&255)<<24,z=x[20]&255|(x[21]&255)<<8|(x[22]&255)<<16|(x[23]&255)<<24,j=x[24]&255|(x[25]&255)<<8|(x[26]&255)<<16|(x[27]&255)<<24,R=x[28]&255|(x[29]&255)<<8|(x[30]&255)<<16|(x[31]&255)<<24,L=f[12]&255|(f[13]&255)<<8|(f[14]&255)<<16|(f[15]&255)<<24,A=e,S=n,E=i,p=s,U=_,y=B,o=l,h=X,u=g,c=M,b=T,d=O,Y=z,C=j,P=R,N=L,a,Z=0;Z<20;Z+=2)a=A+Y|0,U^=a<<7|a>>>32-7,a=U+A|0,u^=a<<9|a>>>32-9,a=u+U|0,Y^=a<<13|a>>>32-13,a=Y+u|0,A^=a<<18|a>>>32-18,a=y+S|0,c^=a<<7|a>>>32-7,a=c+y|0,C^=a<<9|a>>>32-9,a=C+c|0,S^=a<<13|a>>>32-13,a=S+C|0,y^=a<<18|a>>>32-18,a=b+o|0,P^=a<<7|a>>>32-7,a=P+b|0,E^=a<<9|a>>>32-9,a=E+P|0,o^=a<<13|a>>>32-13,a=o+E|0,b^=a<<18|a>>>32-18,a=N+d|0,p^=a<<7|a>>>32-7,a=p+N|0,h^=a<<9|a>>>32-9,a=h+p|0,d^=a<<13|a>>>32-13,a=d+h|0,N^=a<<18|a>>>32-18,a=A+p|0,S^=a<<7|a>>>32-7,a=S+A|0,E^=a<<9|a>>>32-9,a=E+S|0,p^=a<<13|a>>>32-13,a=p+E|0,A^=a<<18|a>>>32-18,a=y+U|0,o^=a<<7|a>>>32-7,a=o+y|0,h^=a<<9|a>>>32-9,a=h+o|0,U^=a<<13|a>>>32-13,a=U+h|0,y^=a<<18|a>>>32-18,a=b+c|0,d^=a<<7|a>>>32-7,a=d+b|0,u^=a<<9|a>>>32-9,a=u+d|0,c^=a<<13|a>>>32-13,a=c+u|0,b^=a<<18|a>>>32-18,a=N+P|0,Y^=a<<7|a>>>32-7,a=Y+N|0,C^=a<<9|a>>>32-9,a=C+Y|0,P^=a<<13|a>>>32-13,a=P+C|0,N^=a<<18|a>>>32-18;r[0]=A>>>0&255,r[1]=A>>>8&255,r[2]=A>>>16&255,r[3]=A>>>24&255,r[4]=y>>>0&255,r[5]=y>>>8&255,r[6]=y>>>16&255,r[7]=y>>>24&255,r[8]=b>>>0&255,r[9]=b>>>8&255,r[10]=b>>>16&255,r[11]=b>>>24&255,r[12]=N>>>0&255,r[13]=N>>>8&255,r[14]=N>>>16&255,r[15]=N>>>24&255,r[16]=o>>>0&255,r[17]=o>>>8&255,r[18]=o>>>16&255,r[19]=o>>>24&255,r[20]=h>>>0&255,r[21]=h>>>8&255,r[22]=h>>>16&255,r[23]=h>>>24&255,r[24]=u>>>0&255,r[25]=u>>>8&255,r[26]=u>>>16&255,r[27]=u>>>24&255,r[28]=c>>>0&255,r[29]=c>>>8&255,r[30]=c>>>16&255,r[31]=c>>>24&255}function Bf(r,t,x,f){z0(r,t,x,f)}function Sf(r,t,x,f){O0(r,t,x,f)}var cf=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function s0(r,t,x,f,e,n,i){var s=new Uint8Array(16),_=new Uint8Array(64),B,l;for(l=0;l<16;l++)s[l]=0;for(l=0;l<8;l++)s[l]=n[l];for(;e>=64;){for(Bf(_,s,i,cf),l=0;l<64;l++)r[t+l]=x[f+l]^_[l];for(B=1,l=8;l<16;l++)B=B+(s[l]&255)|0,s[l]=B&255,B>>>=8;e-=64,t+=64,f+=64}if(e>0)for(Bf(_,s,i,cf),l=0;l<e;l++)r[t+l]=x[f+l]^_[l];return 0}function b0(r,t,x,f,e){var n=new Uint8Array(16),i=new Uint8Array(64),s,_;for(_=0;_<16;_++)n[_]=0;for(_=0;_<8;_++)n[_]=f[_];for(;x>=64;){for(Bf(i,n,e,cf),_=0;_<64;_++)r[t+_]=i[_];for(s=1,_=8;_<16;_++)s=s+(n[_]&255)|0,n[_]=s&255,s>>>=8;x-=64,t+=64}if(x>0)for(Bf(i,n,e,cf),_=0;_<x;_++)r[t+_]=i[_];return 0}function u0(r,t,x,f,e){var n=new Uint8Array(32);Sf(n,f,e,cf);for(var i=new Uint8Array(8),s=0;s<8;s++)i[s]=f[s+16];return b0(r,t,x,i,n)}function If(r,t,x,f,e,n,i){var s=new Uint8Array(32);Sf(s,n,i,cf);for(var _=new Uint8Array(8),B=0;B<8;B++)_[B]=n[B+16];return s0(r,t,x,f,e,_,s)}var Yf=function(r){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var t,x,f,e,n,i,s,_;t=r[0]&255|(r[1]&255)<<8,this.r[0]=t&8191,x=r[2]&255|(r[3]&255)<<8,this.r[1]=(t>>>13|x<<3)&8191,f=r[4]&255|(r[5]&255)<<8,this.r[2]=(x>>>10|f<<6)&7939,e=r[6]&255|(r[7]&255)<<8,this.r[3]=(f>>>7|e<<9)&8191,n=r[8]&255|(r[9]&255)<<8,this.r[4]=(e>>>4|n<<12)&255,this.r[5]=n>>>1&8190,i=r[10]&255|(r[11]&255)<<8,this.r[6]=(n>>>14|i<<2)&8191,s=r[12]&255|(r[13]&255)<<8,this.r[7]=(i>>>11|s<<5)&8065,_=r[14]&255|(r[15]&255)<<8,this.r[8]=(s>>>8|_<<8)&8191,this.r[9]=_>>>5&127,this.pad[0]=r[16]&255|(r[17]&255)<<8,this.pad[1]=r[18]&255|(r[19]&255)<<8,this.pad[2]=r[20]&255|(r[21]&255)<<8,this.pad[3]=r[22]&255|(r[23]&255)<<8,this.pad[4]=r[24]&255|(r[25]&255)<<8,this.pad[5]=r[26]&255|(r[27]&255)<<8,this.pad[6]=r[28]&255|(r[29]&255)<<8,this.pad[7]=r[30]&255|(r[31]&255)<<8};Yf.prototype.blocks=function(r,t,x){for(var f=this.fin?0:2048,e,n,i,s,_,B,l,X,g,M,T,O,z,j,R,L,A,S,E,p=this.h[0],U=this.h[1],y=this.h[2],o=this.h[3],h=this.h[4],u=this.h[5],c=this.h[6],b=this.h[7],d=this.h[8],Y=this.h[9],C=this.r[0],P=this.r[1],N=this.r[2],a=this.r[3],Z=this.r[4],G=this.r[5],V=this.r[6],K=this.r[7],F=this.r[8],D=this.r[9];x>=16;)e=r[t+0]&255|(r[t+1]&255)<<8,p+=e&8191,n=r[t+2]&255|(r[t+3]&255)<<8,U+=(e>>>13|n<<3)&8191,i=r[t+4]&255|(r[t+5]&255)<<8,y+=(n>>>10|i<<6)&8191,s=r[t+6]&255|(r[t+7]&255)<<8,o+=(i>>>7|s<<9)&8191,_=r[t+8]&255|(r[t+9]&255)<<8,h+=(s>>>4|_<<12)&8191,u+=_>>>1&8191,B=r[t+10]&255|(r[t+11]&255)<<8,c+=(_>>>14|B<<2)&8191,l=r[t+12]&255|(r[t+13]&255)<<8,b+=(B>>>11|l<<5)&8191,X=r[t+14]&255|(r[t+15]&255)<<8,d+=(l>>>8|X<<8)&8191,Y+=X>>>5|f,g=0,M=g,M+=p*C,M+=U*(5*D),M+=y*(5*F),M+=o*(5*K),M+=h*(5*V),g=M>>>13,M&=8191,M+=u*(5*G),M+=c*(5*Z),M+=b*(5*a),M+=d*(5*N),M+=Y*(5*P),g+=M>>>13,M&=8191,T=g,T+=p*P,T+=U*C,T+=y*(5*D),T+=o*(5*F),T+=h*(5*K),g=T>>>13,T&=8191,T+=u*(5*V),T+=c*(5*G),T+=b*(5*Z),T+=d*(5*a),T+=Y*(5*N),g+=T>>>13,T&=8191,O=g,O+=p*N,O+=U*P,O+=y*C,O+=o*(5*D),O+=h*(5*F),g=O>>>13,O&=8191,O+=u*(5*K),O+=c*(5*V),O+=b*(5*G),O+=d*(5*Z),O+=Y*(5*a),g+=O>>>13,O&=8191,z=g,z+=p*a,z+=U*N,z+=y*P,z+=o*C,z+=h*(5*D),g=z>>>13,z&=8191,z+=u*(5*F),z+=c*(5*K),z+=b*(5*V),z+=d*(5*G),z+=Y*(5*Z),g+=z>>>13,z&=8191,j=g,j+=p*Z,j+=U*a,j+=y*N,j+=o*P,j+=h*C,g=j>>>13,j&=8191,j+=u*(5*D),j+=c*(5*F),j+=b*(5*K),j+=d*(5*V),j+=Y*(5*G),g+=j>>>13,j&=8191,R=g,R+=p*G,R+=U*Z,R+=y*a,R+=o*N,R+=h*P,g=R>>>13,R&=8191,R+=u*C,R+=c*(5*D),R+=b*(5*F),R+=d*(5*K),R+=Y*(5*V),g+=R>>>13,R&=8191,L=g,L+=p*V,L+=U*G,L+=y*Z,L+=o*a,L+=h*N,g=L>>>13,L&=8191,L+=u*P,L+=c*C,L+=b*(5*D),L+=d*(5*F),L+=Y*(5*K),g+=L>>>13,L&=8191,A=g,A+=p*K,A+=U*V,A+=y*G,A+=o*Z,A+=h*a,g=A>>>13,A&=8191,A+=u*N,A+=c*P,A+=b*C,A+=d*(5*D),A+=Y*(5*F),g+=A>>>13,A&=8191,S=g,S+=p*F,S+=U*K,S+=y*V,S+=o*G,S+=h*Z,g=S>>>13,S&=8191,S+=u*a,S+=c*N,S+=b*P,S+=d*C,S+=Y*(5*D),g+=S>>>13,S&=8191,E=g,E+=p*D,E+=U*F,E+=y*K,E+=o*V,E+=h*G,g=E>>>13,E&=8191,E+=u*Z,E+=c*a,E+=b*N,E+=d*P,E+=Y*C,g+=E>>>13,E&=8191,g=(g<<2)+g|0,g=g+M|0,M=g&8191,g=g>>>13,T+=g,p=M,U=T,y=O,o=z,h=j,u=R,c=L,b=A,d=S,Y=E,t+=16,x-=16;this.h[0]=p,this.h[1]=U,this.h[2]=y,this.h[3]=o,this.h[4]=h,this.h[5]=u,this.h[6]=c,this.h[7]=b,this.h[8]=d,this.h[9]=Y},Yf.prototype.finish=function(r,t){var x=new Uint16Array(10),f,e,n,i;if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(f=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=f,f=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=f*5,f=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=f,f=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=f,x[0]=this.h[0]+5,f=x[0]>>>13,x[0]&=8191,i=1;i<10;i++)x[i]=this.h[i]+f,f=x[i]>>>13,x[i]&=8191;for(x[9]-=1<<13,e=(f^1)-1,i=0;i<10;i++)x[i]&=e;for(e=~e,i=0;i<10;i++)this.h[i]=this.h[i]&e|x[i];for(this.h[0]=(this.h[0]|this.h[1]<<13)&65535,this.h[1]=(this.h[1]>>>3|this.h[2]<<10)&65535,this.h[2]=(this.h[2]>>>6|this.h[3]<<7)&65535,this.h[3]=(this.h[3]>>>9|this.h[4]<<4)&65535,this.h[4]=(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14)&65535,this.h[5]=(this.h[6]>>>2|this.h[7]<<11)&65535,this.h[6]=(this.h[7]>>>5|this.h[8]<<8)&65535,this.h[7]=(this.h[8]>>>8|this.h[9]<<5)&65535,n=this.h[0]+this.pad[0],this.h[0]=n&65535,i=1;i<8;i++)n=(this.h[i]+this.pad[i]|0)+(n>>>16)|0,this.h[i]=n&65535;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},Yf.prototype.update=function(r,t,x){var f,e;if(this.leftover){for(e=16-this.leftover,e>x&&(e=x),f=0;f<e;f++)this.buffer[this.leftover+f]=r[t+f];if(x-=e,t+=e,this.leftover+=e,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(x>=16&&(e=x-x%16,this.blocks(r,t,e),t+=e,x-=e),x){for(f=0;f<x;f++)this.buffer[this.leftover+f]=r[t+f];this.leftover+=x}};function Ff(r,t,x,f,e,n){var i=new Yf(n);return i.update(x,f,e),i.finish(r,t),0}function d0(r,t,x,f,e,n){var i=new Uint8Array(16);return Ff(i,0,x,f,e,n),c0(r,t,i,0)}function Df(r,t,x,f,e){var n;if(x<32)return-1;for(If(r,0,t,0,x,f,e),Ff(r,16,r,32,x-32,r),n=0;n<16;n++)r[n]=0;return 0}function Xf(r,t,x,f,e){var n,i=new Uint8Array(32);if(x<32||(u0(i,0,32,f,e),d0(t,16,t,32,x-32,i)!==0))return-1;for(If(r,0,t,0,x,f,e),n=0;n<32;n++)r[n]=0;return 0}function nf(r,t){var x;for(x=0;x<16;x++)r[x]=t[x]|0}function Gf(r){var t,x,f=1;for(t=0;t<16;t++)x=r[t]+f+65535,f=Math.floor(x/65536),r[t]=x-f*65536;r[0]+=f-1+37*(f-1)}function df(r,t,x){for(var f,e=~(x-1),n=0;n<16;n++)f=e&(r[n]^t[n]),r[n]^=f,t[n]^=f}function _f(r,t){var x,f,e,n=v(),i=v();for(x=0;x<16;x++)i[x]=t[x];for(Gf(i),Gf(i),Gf(i),f=0;f<2;f++){for(n[0]=i[0]-65517,x=1;x<15;x++)n[x]=i[x]-65535-(n[x-1]>>16&1),n[x-1]&=65535;n[15]=i[15]-32767-(n[14]>>16&1),e=n[15]>>16&1,n[14]&=65535,df(i,n,1-e)}for(x=0;x<16;x++)r[2*x]=i[x]&255,r[2*x+1]=i[x]>>8}function _0(r,t){var x=new Uint8Array(32),f=new Uint8Array(32);return _f(x,r),_f(f,t),Zf(x,0,f,0)}function v0(r){var t=new Uint8Array(32);return _f(t,r),t[0]&1}function Vf(r,t){var x;for(x=0;x<16;x++)r[x]=t[2*x]+(t[2*x+1]<<8);r[15]&=32767}function ef(r,t,x){for(var f=0;f<16;f++)r[f]=t[f]+x[f]}function af(r,t,x){for(var f=0;f<16;f++)r[f]=t[f]-x[f]}function I(r,t,x){var f,e,n=0,i=0,s=0,_=0,B=0,l=0,X=0,g=0,M=0,T=0,O=0,z=0,j=0,R=0,L=0,A=0,S=0,E=0,p=0,U=0,y=0,o=0,h=0,u=0,c=0,b=0,d=0,Y=0,C=0,P=0,N=0,a=x[0],Z=x[1],G=x[2],V=x[3],K=x[4],F=x[5],D=x[6],q=x[7],H=x[8],J=x[9],W=x[10],$=x[11],Q=x[12],k=x[13],ff=x[14],rf=x[15];f=t[0],n+=f*a,i+=f*Z,s+=f*G,_+=f*V,B+=f*K,l+=f*F,X+=f*D,g+=f*q,M+=f*H,T+=f*J,O+=f*W,z+=f*$,j+=f*Q,R+=f*k,L+=f*ff,A+=f*rf,f=t[1],i+=f*a,s+=f*Z,_+=f*G,B+=f*V,l+=f*K,X+=f*F,g+=f*D,M+=f*q,T+=f*H,O+=f*J,z+=f*W,j+=f*$,R+=f*Q,L+=f*k,A+=f*ff,S+=f*rf,f=t[2],s+=f*a,_+=f*Z,B+=f*G,l+=f*V,X+=f*K,g+=f*F,M+=f*D,T+=f*q,O+=f*H,z+=f*J,j+=f*W,R+=f*$,L+=f*Q,A+=f*k,S+=f*ff,E+=f*rf,f=t[3],_+=f*a,B+=f*Z,l+=f*G,X+=f*V,g+=f*K,M+=f*F,T+=f*D,O+=f*q,z+=f*H,j+=f*J,R+=f*W,L+=f*$,A+=f*Q,S+=f*k,E+=f*ff,p+=f*rf,f=t[4],B+=f*a,l+=f*Z,X+=f*G,g+=f*V,M+=f*K,T+=f*F,O+=f*D,z+=f*q,j+=f*H,R+=f*J,L+=f*W,A+=f*$,S+=f*Q,E+=f*k,p+=f*ff,U+=f*rf,f=t[5],l+=f*a,X+=f*Z,g+=f*G,M+=f*V,T+=f*K,O+=f*F,z+=f*D,j+=f*q,R+=f*H,L+=f*J,A+=f*W,S+=f*$,E+=f*Q,p+=f*k,U+=f*ff,y+=f*rf,f=t[6],X+=f*a,g+=f*Z,M+=f*G,T+=f*V,O+=f*K,z+=f*F,j+=f*D,R+=f*q,L+=f*H,A+=f*J,S+=f*W,E+=f*$,p+=f*Q,U+=f*k,y+=f*ff,o+=f*rf,f=t[7],g+=f*a,M+=f*Z,T+=f*G,O+=f*V,z+=f*K,j+=f*F,R+=f*D,L+=f*q,A+=f*H,S+=f*J,E+=f*W,p+=f*$,U+=f*Q,y+=f*k,o+=f*ff,h+=f*rf,f=t[8],M+=f*a,T+=f*Z,O+=f*G,z+=f*V,j+=f*K,R+=f*F,L+=f*D,A+=f*q,S+=f*H,E+=f*J,p+=f*W,U+=f*$,y+=f*Q,o+=f*k,h+=f*ff,u+=f*rf,f=t[9],T+=f*a,O+=f*Z,z+=f*G,j+=f*V,R+=f*K,L+=f*F,A+=f*D,S+=f*q,E+=f*H,p+=f*J,U+=f*W,y+=f*$,o+=f*Q,h+=f*k,u+=f*ff,c+=f*rf,f=t[10],O+=f*a,z+=f*Z,j+=f*G,R+=f*V,L+=f*K,A+=f*F,S+=f*D,E+=f*q,p+=f*H,U+=f*J,y+=f*W,o+=f*$,h+=f*Q,u+=f*k,c+=f*ff,b+=f*rf,f=t[11],z+=f*a,j+=f*Z,R+=f*G,L+=f*V,A+=f*K,S+=f*F,E+=f*D,p+=f*q,U+=f*H,y+=f*J,o+=f*W,h+=f*$,u+=f*Q,c+=f*k,b+=f*ff,d+=f*rf,f=t[12],j+=f*a,R+=f*Z,L+=f*G,A+=f*V,S+=f*K,E+=f*F,p+=f*D,U+=f*q,y+=f*H,o+=f*J,h+=f*W,u+=f*$,c+=f*Q,b+=f*k,d+=f*ff,Y+=f*rf,f=t[13],R+=f*a,L+=f*Z,A+=f*G,S+=f*V,E+=f*K,p+=f*F,U+=f*D,y+=f*q,o+=f*H,h+=f*J,u+=f*W,c+=f*$,b+=f*Q,d+=f*k,Y+=f*ff,C+=f*rf,f=t[14],L+=f*a,A+=f*Z,S+=f*G,E+=f*V,p+=f*K,U+=f*F,y+=f*D,o+=f*q,h+=f*H,u+=f*J,c+=f*W,b+=f*$,d+=f*Q,Y+=f*k,C+=f*ff,P+=f*rf,f=t[15],A+=f*a,S+=f*Z,E+=f*G,p+=f*V,U+=f*K,y+=f*F,o+=f*D,h+=f*q,u+=f*H,c+=f*J,b+=f*W,d+=f*$,Y+=f*Q,C+=f*k,P+=f*ff,N+=f*rf,n+=38*S,i+=38*E,s+=38*p,_+=38*U,B+=38*y,l+=38*o,X+=38*h,g+=38*u,M+=38*c,T+=38*b,O+=38*d,z+=38*Y,j+=38*C,R+=38*P,L+=38*N,e=1,f=n+e+65535,e=Math.floor(f/65536),n=f-e*65536,f=i+e+65535,e=Math.floor(f/65536),i=f-e*65536,f=s+e+65535,e=Math.floor(f/65536),s=f-e*65536,f=_+e+65535,e=Math.floor(f/65536),_=f-e*65536,f=B+e+65535,e=Math.floor(f/65536),B=f-e*65536,f=l+e+65535,e=Math.floor(f/65536),l=f-e*65536,f=X+e+65535,e=Math.floor(f/65536),X=f-e*65536,f=g+e+65535,e=Math.floor(f/65536),g=f-e*65536,f=M+e+65535,e=Math.floor(f/65536),M=f-e*65536,f=T+e+65535,e=Math.floor(f/65536),T=f-e*65536,f=O+e+65535,e=Math.floor(f/65536),O=f-e*65536,f=z+e+65535,e=Math.floor(f/65536),z=f-e*65536,f=j+e+65535,e=Math.floor(f/65536),j=f-e*65536,f=R+e+65535,e=Math.floor(f/65536),R=f-e*65536,f=L+e+65535,e=Math.floor(f/65536),L=f-e*65536,f=A+e+65535,e=Math.floor(f/65536),A=f-e*65536,n+=e-1+37*(e-1),e=1,f=n+e+65535,e=Math.floor(f/65536),n=f-e*65536,f=i+e+65535,e=Math.floor(f/65536),i=f-e*65536,f=s+e+65535,e=Math.floor(f/65536),s=f-e*65536,f=_+e+65535,e=Math.floor(f/65536),_=f-e*65536,f=B+e+65535,e=Math.floor(f/65536),B=f-e*65536,f=l+e+65535,e=Math.floor(f/65536),l=f-e*65536,f=X+e+65535,e=Math.floor(f/65536),X=f-e*65536,f=g+e+65535,e=Math.floor(f/65536),g=f-e*65536,f=M+e+65535,e=Math.floor(f/65536),M=f-e*65536,f=T+e+65535,e=Math.floor(f/65536),T=f-e*65536,f=O+e+65535,e=Math.floor(f/65536),O=f-e*65536,f=z+e+65535,e=Math.floor(f/65536),z=f-e*65536,f=j+e+65535,e=Math.floor(f/65536),j=f-e*65536,f=R+e+65535,e=Math.floor(f/65536),R=f-e*65536,f=L+e+65535,e=Math.floor(f/65536),L=f-e*65536,f=A+e+65535,e=Math.floor(f/65536),A=f-e*65536,n+=e-1+37*(e-1),r[0]=n,r[1]=i,r[2]=s,r[3]=_,r[4]=B,r[5]=l,r[6]=X,r[7]=g,r[8]=M,r[9]=T,r[10]=O,r[11]=z,r[12]=j,r[13]=R,r[14]=L,r[15]=A}function tf(r,t){I(r,t,t)}function y0(r,t){var x=v(),f;for(f=0;f<16;f++)x[f]=t[f];for(f=253;f>=0;f--)tf(x,x),f!==2&&f!==4&&I(x,x,t);for(f=0;f<16;f++)r[f]=x[f]}function l0(r,t){var x=v(),f;for(f=0;f<16;f++)x[f]=t[f];for(f=250;f>=0;f--)tf(x,x),f!==1&&I(x,x,t);for(f=0;f<16;f++)r[f]=x[f]}function Mf(r,t,x){var f=new Uint8Array(32),e=new Float64Array(80),n,i,s=v(),_=v(),B=v(),l=v(),X=v(),g=v();for(i=0;i<31;i++)f[i]=t[i];for(f[31]=t[31]&127|64,f[0]&=248,Vf(e,x),i=0;i<16;i++)_[i]=e[i],l[i]=s[i]=B[i]=0;for(s[0]=l[0]=1,i=254;i>=0;--i)n=f[i>>>3]>>>(i&7)&1,df(s,_,n),df(B,l,n),ef(X,s,B),af(s,s,B),ef(B,_,l),af(_,_,l),tf(l,X),tf(g,s),I(s,B,s),I(B,_,X),ef(X,s,B),af(s,s,B),tf(_,s),af(B,l,g),I(s,B,j0),ef(s,s,l),I(B,B,s),I(s,l,g),I(l,_,e),tf(_,X),df(s,_,n),df(B,l,n);for(i=0;i<16;i++)e[i+16]=s[i],e[i+32]=B[i],e[i+48]=_[i],e[i+64]=l[i];var M=e.subarray(32),T=e.subarray(16);return y0(M,M),I(T,T,M),_f(r,T),0}function Tf(r,t){return Mf(r,t,hf)}function w0(r,t){return m(t,32),Tf(r,t)}function jf(r,t,x){var f=new Uint8Array(32);return Mf(f,x,t),Sf(r,pf,f,cf)}var E0=Df,C0=Xf;function N0(r,t,x,f,e,n){var i=new Uint8Array(32);return jf(i,e,n),E0(r,t,x,f,i)}function P0(r,t,x,f,e,n){var i=new Uint8Array(32);return jf(i,e,n),C0(r,t,x,f,i)}var g0=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function A0(r,t,x,f){for(var e=new Int32Array(16),n=new Int32Array(16),i,s,_,B,l,X,g,M,T,O,z,j,R,L,A,S,E,p,U,y,o,h,u,c,b,d,Y=r[0],C=r[1],P=r[2],N=r[3],a=r[4],Z=r[5],G=r[6],V=r[7],K=t[0],F=t[1],D=t[2],q=t[3],H=t[4],J=t[5],W=t[6],$=t[7],Q=0;f>=128;){for(U=0;U<16;U++)y=8*U+Q,e[U]=x[y+0]<<24|x[y+1]<<16|x[y+2]<<8|x[y+3],n[U]=x[y+4]<<24|x[y+5]<<16|x[y+6]<<8|x[y+7];for(U=0;U<80;U++)if(i=Y,s=C,_=P,B=N,l=a,X=Z,g=G,M=V,T=K,O=F,z=D,j=q,R=H,L=J,A=W,S=$,o=V,h=$,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=(a>>>14|H<<32-14)^(a>>>18|H<<32-18)^(H>>>41-32|a<<32-(41-32)),h=(H>>>14|a<<32-14)^(H>>>18|a<<32-18)^(a>>>41-32|H<<32-(41-32)),u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,o=a&Z^~a&G,h=H&J^~H&W,u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,o=g0[U*2],h=g0[U*2+1],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,o=e[U%16],h=n[U%16],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,E=b&65535|d<<16,p=u&65535|c<<16,o=E,h=p,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=(Y>>>28|K<<32-28)^(K>>>34-32|Y<<32-(34-32))^(K>>>39-32|Y<<32-(39-32)),h=(K>>>28|Y<<32-28)^(Y>>>34-32|K<<32-(34-32))^(Y>>>39-32|K<<32-(39-32)),u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,o=Y&C^Y&P^C&P,h=K&F^K&D^F&D,u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,M=b&65535|d<<16,S=u&65535|c<<16,o=B,h=j,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=E,h=p,u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,B=b&65535|d<<16,j=u&65535|c<<16,C=i,P=s,N=_,a=B,Z=l,G=X,V=g,Y=M,F=T,D=O,q=z,H=j,J=R,W=L,$=A,K=S,U%16===15)for(y=0;y<16;y++)o=e[y],h=n[y],u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=e[(y+9)%16],h=n[(y+9)%16],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,E=e[(y+1)%16],p=n[(y+1)%16],o=(E>>>1|p<<32-1)^(E>>>8|p<<32-8)^E>>>7,h=(p>>>1|E<<32-1)^(p>>>8|E<<32-8)^(p>>>7|E<<32-7),u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,E=e[(y+14)%16],p=n[(y+14)%16],o=(E>>>19|p<<32-19)^(p>>>61-32|E<<32-(61-32))^E>>>6,h=(p>>>19|E<<32-19)^(E>>>61-32|p<<32-(61-32))^(p>>>6|E<<32-6),u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,e[y]=b&65535|d<<16,n[y]=u&65535|c<<16;o=Y,h=K,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[0],h=t[0],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[0]=Y=b&65535|d<<16,t[0]=K=u&65535|c<<16,o=C,h=F,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[1],h=t[1],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[1]=C=b&65535|d<<16,t[1]=F=u&65535|c<<16,o=P,h=D,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[2],h=t[2],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[2]=P=b&65535|d<<16,t[2]=D=u&65535|c<<16,o=N,h=q,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[3],h=t[3],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[3]=N=b&65535|d<<16,t[3]=q=u&65535|c<<16,o=a,h=H,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[4],h=t[4],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[4]=a=b&65535|d<<16,t[4]=H=u&65535|c<<16,o=Z,h=J,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[5],h=t[5],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[5]=Z=b&65535|d<<16,t[5]=J=u&65535|c<<16,o=G,h=W,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[6],h=t[6],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[6]=G=b&65535|d<<16,t[6]=W=u&65535|c<<16,o=V,h=$,u=h&65535,c=h>>>16,b=o&65535,d=o>>>16,o=r[7],h=t[7],u+=h&65535,c+=h>>>16,b+=o&65535,d+=o>>>16,c+=u>>>16,b+=c>>>16,d+=b>>>16,r[7]=V=b&65535|d<<16,t[7]=$=u&65535|c<<16,Q+=128,f-=128}return f}function sf(r,t,x){var f=new Int32Array(8),e=new Int32Array(8),n=new Uint8Array(256),i,s=x;for(f[0]=1779033703,f[1]=3144134277,f[2]=1013904242,f[3]=2773480762,f[4]=1359893119,f[5]=2600822924,f[6]=528734635,f[7]=1541459225,e[0]=4089235720,e[1]=2227873595,e[2]=4271175723,e[3]=1595750129,e[4]=2917565137,e[5]=725511199,e[6]=4215389547,e[7]=327033209,A0(f,e,t,x),x%=128,i=0;i<x;i++)n[i]=t[s-x+i];for(n[x]=128,x=256-128*(x<112?1:0),n[x-9]=0,h0(n,x-8,s/536870912|0,s<<3),A0(f,e,n,x),i=0;i<8;i++)h0(r,8*i,f[i],e[i]);return 0}function Lf(r,t){var x=v(),f=v(),e=v(),n=v(),i=v(),s=v(),_=v(),B=v(),l=v();af(x,r[1],r[0]),af(l,t[1],t[0]),I(x,x,l),ef(f,r[0],r[1]),ef(l,t[0],t[1]),I(f,f,l),I(e,r[3],t[3]),I(e,e,L0),I(n,r[2],t[2]),ef(n,n,n),af(i,f,x),af(s,n,e),ef(_,n,e),ef(B,f,x),I(r[0],i,s),I(r[1],B,_),I(r[2],_,s),I(r[3],i,B)}function p0(r,t,x){var f;for(f=0;f<4;f++)df(r[f],t[f],x)}function Hf(r,t){var x=v(),f=v(),e=v();y0(e,t[2]),I(x,t[0],e),I(f,t[1],e),_f(r,f),r[31]^=v0(x)<<7}function Jf(r,t,x){var f,e;for(nf(r[0],Pf),nf(r[1],Uf),nf(r[2],Uf),nf(r[3],Pf),e=255;e>=0;--e)f=x[e/8|0]>>(e&7)&1,p0(r,t,f),Lf(t,r),Lf(r,r),p0(r,t,f)}function Rf(r,t){var x=[v(),v(),v(),v()];nf(x[0],i0),nf(x[1],o0),nf(x[2],Uf),I(x[3],i0,o0),Jf(r,x,t)}function Wf(r,t,x){var f=new Uint8Array(64),e=[v(),v(),v(),v()],n;for(x||m(t,32),sf(f,t,32),f[0]&=248,f[31]&=127,f[31]|=64,Rf(e,f),Hf(r,e),n=0;n<32;n++)t[n+32]=r[n];return 0}var zf=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function $f(r,t){var x,f,e,n;for(f=63;f>=32;--f){for(x=0,e=f-32,n=f-12;e<n;++e)t[e]+=x-16*t[f]*zf[e-(f-32)],x=Math.floor((t[e]+128)/256),t[e]-=x*256;t[e]+=x,t[f]=0}for(x=0,e=0;e<32;e++)t[e]+=x-(t[31]>>4)*zf[e],x=t[e]>>8,t[e]&=255;for(e=0;e<32;e++)t[e]-=x*zf[e];for(f=0;f<32;f++)t[f+1]+=t[f]>>8,r[f]=t[f]&255}function qf(r){var t=new Float64Array(64),x;for(x=0;x<64;x++)t[x]=r[x];for(x=0;x<64;x++)r[x]=0;$f(r,t)}function U0(r,t,x,f){var e=new Uint8Array(64),n=new Uint8Array(64),i=new Uint8Array(64),s,_,B=new Float64Array(64),l=[v(),v(),v(),v()];sf(e,f,32),e[0]&=248,e[31]&=127,e[31]|=64;var X=x+64;for(s=0;s<x;s++)r[64+s]=t[s];for(s=0;s<32;s++)r[32+s]=e[32+s];for(sf(i,r.subarray(32),x+32),qf(i),Rf(l,i),Hf(r,l),s=32;s<64;s++)r[s]=f[s];for(sf(n,r,x+64),qf(n),s=0;s<64;s++)B[s]=0;for(s=0;s<32;s++)B[s]=i[s];for(s=0;s<32;s++)for(_=0;_<32;_++)B[s+_]+=n[s]*e[_];return $f(r.subarray(32),B),X}function K0(r,t){var x=v(),f=v(),e=v(),n=v(),i=v(),s=v(),_=v();return nf(r[2],Uf),Vf(r[1],t),tf(e,r[1]),I(n,e,n0),af(e,e,r[2]),ef(n,r[2],n),tf(i,n),tf(s,i),I(_,s,i),I(x,_,e),I(x,x,n),l0(x,x),I(x,x,e),I(x,x,n),I(x,x,n),I(r[0],x,n),tf(f,r[0]),I(f,f,n),_0(f,e)&&I(r[0],r[0],R0),tf(f,r[0]),I(f,f,n),_0(f,e)?-1:(v0(r[0])===t[31]>>7&&af(r[0],Pf,r[0]),I(r[3],r[0],r[1]),0)}function Qf(r,t,x,f){var e,n=new Uint8Array(32),i=new Uint8Array(64),s=[v(),v(),v(),v()],_=[v(),v(),v(),v()];if(x<64||K0(_,f))return-1;for(e=0;e<x;e++)r[e]=t[e];for(e=0;e<32;e++)r[e+32]=f[e];if(sf(i,r,x),qf(i),Jf(s,_,i),Rf(_,t.subarray(32)),Lf(s,_),Hf(n,s),x-=64,Zf(t,0,n,0)){for(e=0;e<x;e++)r[e]=0;return-1}for(e=0;e<x;e++)r[e]=t[e+64];return x}var mf=32,Of=24,wf=32,vf=16,Ef=32,Cf=32,gf=32,Af=32,kf=32,B0=Of,Z0=wf,I0=vf,of=64,bf=32,yf=64,f0=32,r0=64;w.lowlevel={crypto_core_hsalsa20:Sf,crypto_stream_xor:If,crypto_stream:u0,crypto_stream_salsa20_xor:s0,crypto_stream_salsa20:b0,crypto_onetimeauth:Ff,crypto_onetimeauth_verify:d0,crypto_verify_16:c0,crypto_verify_32:Zf,crypto_secretbox:Df,crypto_secretbox_open:Xf,crypto_scalarmult:Mf,crypto_scalarmult_base:Tf,crypto_box_beforenm:jf,crypto_box_afternm:E0,crypto_box:N0,crypto_box_open:P0,crypto_box_keypair:w0,crypto_hash:sf,crypto_sign:U0,crypto_sign_keypair:Wf,crypto_sign_open:Qf,crypto_secretbox_KEYBYTES:mf,crypto_secretbox_NONCEBYTES:Of,crypto_secretbox_ZEROBYTES:wf,crypto_secretbox_BOXZEROBYTES:vf,crypto_scalarmult_BYTES:Ef,crypto_scalarmult_SCALARBYTES:Cf,crypto_box_PUBLICKEYBYTES:gf,crypto_box_SECRETKEYBYTES:Af,crypto_box_BEFORENMBYTES:kf,crypto_box_NONCEBYTES:B0,crypto_box_ZEROBYTES:Z0,crypto_box_BOXZEROBYTES:I0,crypto_sign_BYTES:of,crypto_sign_PUBLICKEYBYTES:bf,crypto_sign_SECRETKEYBYTES:yf,crypto_sign_SEEDBYTES:f0,crypto_hash_BYTES:r0,gf:v,D:n0,L:zf,pack25519:_f,unpack25519:Vf,M:I,A:ef,S:tf,Z:af,pow2523:l0,add:Lf,set25519:nf,modL:$f,scalarmult:Jf,scalarbase:Rf};function S0(r,t){if(r.length!==mf)throw new Error("bad key size");if(t.length!==Of)throw new Error("bad nonce size")}function F0(r,t){if(r.length!==gf)throw new Error("bad public key size");if(t.length!==Af)throw new Error("bad secret key size")}function xf(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function Y0(r){for(var t=0;t<r.length;t++)r[t]=0}w.randomBytes=function(r){var t=new Uint8Array(r);return m(t,r),t},w.secretbox=function(r,t,x){xf(r,t,x),S0(x,t);for(var f=new Uint8Array(wf+r.length),e=new Uint8Array(f.length),n=0;n<r.length;n++)f[n+wf]=r[n];return Df(e,f,f.length,t,x),e.subarray(vf)},w.secretbox.open=function(r,t,x){xf(r,t,x),S0(x,t);for(var f=new Uint8Array(vf+r.length),e=new Uint8Array(f.length),n=0;n<r.length;n++)f[n+vf]=r[n];return f.length<32||Xf(e,f,f.length,t,x)!==0?null:e.subarray(wf)},w.secretbox.keyLength=mf,w.secretbox.nonceLength=Of,w.secretbox.overheadLength=vf,w.scalarMult=function(r,t){if(xf(r,t),r.length!==Cf)throw new Error("bad n size");if(t.length!==Ef)throw new Error("bad p size");var x=new Uint8Array(Ef);return Mf(x,r,t),x},w.scalarMult.base=function(r){if(xf(r),r.length!==Cf)throw new Error("bad n size");var t=new Uint8Array(Ef);return Tf(t,r),t},w.scalarMult.scalarLength=Cf,w.scalarMult.groupElementLength=Ef,w.box=function(r,t,x,f){var e=w.box.before(x,f);return w.secretbox(r,t,e)},w.box.before=function(r,t){xf(r,t),F0(r,t);var x=new Uint8Array(kf);return jf(x,r,t),x},w.box.after=w.secretbox,w.box.open=function(r,t,x,f){var e=w.box.before(x,f);return w.secretbox.open(r,t,e)},w.box.open.after=w.secretbox.open,w.box.keyPair=function(){var r=new Uint8Array(gf),t=new Uint8Array(Af);return w0(r,t),{publicKey:r,secretKey:t}},w.box.keyPair.fromSecretKey=function(r){if(xf(r),r.length!==Af)throw new Error("bad secret key size");var t=new Uint8Array(gf);return Tf(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},w.box.publicKeyLength=gf,w.box.secretKeyLength=Af,w.box.sharedKeyLength=kf,w.box.nonceLength=B0,w.box.overheadLength=w.secretbox.overheadLength,w.sign=function(r,t){if(xf(r,t),t.length!==yf)throw new Error("bad secret key size");var x=new Uint8Array(of+r.length);return U0(x,r,r.length,t),x},w.sign.open=function(r,t){if(xf(r,t),t.length!==bf)throw new Error("bad public key size");var x=new Uint8Array(r.length),f=Qf(x,r,r.length,t);if(f<0)return null;for(var e=new Uint8Array(f),n=0;n<e.length;n++)e[n]=x[n];return e},w.sign.detached=function(r,t){for(var x=w.sign(r,t),f=new Uint8Array(of),e=0;e<f.length;e++)f[e]=x[e];return f},w.sign.detached.verify=function(r,t,x){if(xf(r,t,x),t.length!==of)throw new Error("bad signature size");if(x.length!==bf)throw new Error("bad public key size");var f=new Uint8Array(of+r.length),e=new Uint8Array(of+r.length),n;for(n=0;n<of;n++)f[n]=t[n];for(n=0;n<r.length;n++)f[n+of]=r[n];return Qf(e,f,f.length,x)>=0},w.sign.keyPair=function(){var r=new Uint8Array(bf),t=new Uint8Array(yf);return Wf(r,t),{publicKey:r,secretKey:t}},w.sign.keyPair.fromSecretKey=function(r){if(xf(r),r.length!==yf)throw new Error("bad secret key size");for(var t=new Uint8Array(bf),x=0;x<t.length;x++)t[x]=r[32+x];return{publicKey:t,secretKey:new Uint8Array(r)}},w.sign.keyPair.fromSeed=function(r){if(xf(r),r.length!==f0)throw new Error("bad seed size");for(var t=new Uint8Array(bf),x=new Uint8Array(yf),f=0;f<32;f++)x[f]=r[f];return Wf(t,x,!0),{publicKey:t,secretKey:x}},w.sign.publicKeyLength=bf,w.sign.secretKeyLength=yf,w.sign.seedLength=f0,w.sign.signatureLength=of,w.hash=function(r){xf(r);var t=new Uint8Array(r0);return sf(t,r,r.length),t},w.hash.hashLength=r0,w.verify=function(r,t){return xf(r,t),r.length===0||t.length===0||r.length!==t.length?!1:Kf(r,0,t,0,r.length)===0},w.setPRNG=function(r){m=r},function(){var r=typeof self<"u"?self.crypto||self.msCrypto:null;if(r&&r.getRandomValues){var t=65536;w.setPRNG(function(x,f){var e,n=new Uint8Array(f);for(e=0;e<f;e+=t)r.getRandomValues(n.subarray(e,e+Math.min(f-e,t)));for(e=0;e<f;e++)x[e]=n[e];Y0(n)})}else typeof e0<"u"&&(r=__1$,r&&r.randomBytes&&w.setPRNG(function(x,f){var e,n=r.randomBytes(f);for(e=0;e<f;e++)x[e]=n[e];Y0(n)}))}()})(typeof Nf<"u"&&Nf.exports?Nf.exports:self.nacl=self.nacl||{})});var uf={};W0(uf,{default:()=>Q0});var $0=M0(a0());lf(uf,M0(a0()));var{default:T0,...q0}=$0,Q0=T0!==void 0?T0:q0;export{Q0 as default};
//# sourceMappingURL=tweetnacl.mjs.map