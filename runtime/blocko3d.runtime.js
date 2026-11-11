(()=>{var Lu=Object.defineProperty;var Du=(i,t)=>{for(var e in t)Lu(i,e,{get:t[e],enumerable:!0})};var ql={};Du(ql,{HOOKS_EXPR:()=>Wl,cartFunctionSource:()=>Q0,catchGlobalErrors:()=>t_,install:()=>fu,play:()=>K0,restart:()=>pu,showError:()=>go,start:()=>Xl,stop:()=>j0});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Uu=0,rc=1,Nu=2;var lh=1,Fu=2,$n=3,zn=0,nn=1,In=2,hi=0,fs=1,oc=2,ac=3,lc=4,Ou=5,Ri=100,Bu=101,zu=102,ku=103,Vu=104,Hu=200,Gu=201,Wu=202,Xu=203,ea=204,na=205,qu=206,Yu=207,Zu=208,$u=209,Ju=210,Ku=211,Qu=212,ju=213,td=214,ia=0,sa=1,ra=2,_s=3,oa=4,aa=5,la=6,ca=7,ch=0,ed=1,nd=2,ui=0,id=1,sd=2,rd=3,od=4,ad=5,ld=6,cd=7;var hh=300,xs=301,vs=302,ha=303,ua=304,so=306,da=1e3,Pi=1001,fa=1002,Re=1003,hd=1004;var hr=1005;var Bn=1006,wo=1007;var Li=1008;var Ln=1009,uh=1010,dh=1011,Zs=1012,_l=1013,Di=1014,Pn=1015,$s=1016,xl=1017,vl=1018,ys=1020,fh=35902,ph=1021,mh=1022,cn=1023,gh=1024,_h=1025,ps=1026,Ms=1027,ro=1028,yl=1029,xh=1030,Ml=1031;var Sl=1033,Ur=33776,Nr=33777,Fr=33778,Or=33779,pa=35840,ma=35841,ga=35842,_a=35843,xa=36196,va=37492,ya=37496,Ma=37808,Sa=37809,ba=37810,wa=37811,Ea=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,Ia=37817,Pa=37818,La=37819,Da=37820,Ua=37821,Br=36492,Na=36494,Fa=36495,vh=36283,Oa=36284,Ba=36285,za=36286;var zr=2300,ka=2301,Eo=2302,cc=2400,hc=2401,uc=2402;var ud=3200,dd=3201;var fd=0,pd=1,ci="",pn="srgb",pi="srgb-linear",oo="linear",pe="srgb";var Ki=7680;var dc=519,md=512,gd=513,_d=514,yh=515,xd=516,vd=517,yd=518,Md=519,fc=35044;var kn="300 es",Kn=2e3,kr=2001,di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var To=Math.PI/180,Va=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function Sd(i,t){return(i%t+t)%t}function Ao(i,t,e){return(1-e)*i+e*t}function zs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var he=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],g=n[5],_=n[8],v=s[0],p=s[3],u=s[6],E=s[1],A=s[4],b=s[7],C=s[2],I=s[5],P=s[8];return r[0]=o*v+a*E+l*C,r[3]=o*p+a*A+l*I,r[6]=o*u+a*b+l*P,r[1]=c*v+h*E+d*C,r[4]=c*p+h*A+d*I,r[7]=c*u+h*b+d*P,r[2]=f*v+g*E+_*C,r[5]=f*p+g*A+_*I,r[8]=f*u+g*b+_*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,g=c*r-o*l,_=e*d+n*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=g*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ro=new Yt;function Mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bd(){let i=Vr("canvas");return i.style.display="block",i}var pc={};function Xs(i){i in pc||(pc[i]=!0,console.warn(i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ed(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?oo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mc=[.64,.33,.3,.6,.15,.06],gc=[.2126,.7152,.0722],_c=[.3127,.329],xc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[pi]:{primaries:mc,whitePoint:_c,transfer:oo,toXYZ:xc,fromXYZ:vc,luminanceCoefficients:gc,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:mc,whitePoint:_c,transfer:pe,toXYZ:xc,fromXYZ:vc,luminanceCoefficients:gc,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});var Qi,Ha=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qi===void 0&&(Qi=Vr("canvas")),Qi.width=t.width,Qi.height=t.height;let n=Qi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ad=0,Hr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Co(s[o].image)):r.push(Co(s[o]))}else r=Co(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rd=0,hn=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=Bn,o=Li,a=cn,l=Ln,c=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Js(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=hh;hn.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],_=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,b=(g+1)/2,C=(u+1)/2,I=(h+f)/4,P=(d+v)/4,O=(_+p)/4;return A>b&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=I/n,r=P/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=I/s,r=O/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=O/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(d-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Hr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],g=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=g,t[e+2]=_,t[e+3]=v;return}if(d!==v||l!==f||c!==g||h!==_){let p=1-a,u=l*f+c*g+h*_+d*v,E=u>=0?1:-1,A=1-u*u;if(A>Number.EPSILON){let C=Math.sqrt(A),I=Math.atan2(C,u*E);p=Math.sin(p*I)/C,a=Math.sin(a*I)/C}let b=a*E;if(l=l*p+f*b,c=c*p+g*b,h=h*p+_*b,d=d*p+v*b,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*g-c*f,t[e+1]=l*_+h*f+c*d-a*g,t[e+2]=c*_+h*g+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"YXZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"ZXY":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"ZYX":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"YZX":this._x=f*h*d+c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d-f*g*_;break;case"XZY":this._x=f*h*d-c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new V,yc=new fi,Ui=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),dr.subVectors(this.max,ks),ji.subVectors(t.a,ks),ts.subVectors(t.b,ks),es.subVectors(t.c,ks),ii.subVectors(ts,ji),si.subVectors(es,ts),Mi.subVectors(ji,es);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ii.z,0,-ii.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ii.y,ii.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!Po(e,ji,ts,es,dr)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,ji,ts,es,dr))?!1:(fr.crossVectors(ii,si),e=[fr.x,fr.y,fr.z],Po(e,ji,ts,es,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Wn=[new V,new V,new V,new V,new V,new V,new V,new V],An=new V,ur=new Ui,ji=new V,ts=new V,es=new V,ii=new V,si=new V,Mi=new V,ks=new V,dr=new V,fr=new V,Si=new V;function Po(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Cd=new Ui,Vs=new V,Lo=new V,Ss=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Lo)),this.expandByPoint(Vs.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new V,Do=new V,pr=new V,ri=new V,Uo=new V,mr=new V,No=new V,Wr=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Do.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),ri.copy(this.origin).sub(Do);let r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=ri.dot(this.direction),l=-ri.dot(pr),c=ri.lengthSq(),h=Math.abs(1-o*o),d,f,g,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let v=1/h;d*=v,f*=v,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(pr,f),g}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,s,r){Uo.subVectors(e,t),mr.subVectors(n,t),No.crossVectors(Uo,mr);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,t);let l=a*this.direction.dot(mr.crossVectors(ri,mr));if(l<0)return null;let c=a*this.direction.dot(Uo.cross(ri));if(c<0||l+c>o)return null;let h=-a*ri.dot(No);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,g,_,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,g,_,v,p)}set(t,e,n,s,r,o,a,l,c,h,d,f,g,_,v,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=g,u[7]=_,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,g=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=g+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,g=l*d,_=c*h,v=c*d;e[0]=f+v*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,g=l*d,_=c*h,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,g=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=_*c-g,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,g=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-f*d,e[8]=_*d+g,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*d+_,e[10]=f-v*d}else if(t.order==="XZY"){let f=o*l,g=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=o*h,e[9]=g*d-_,e[2]=_*d-g,e[6]=a*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Pd)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),oi.crossVectors(n,an),oi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),oi.crossVectors(n,an)),oi.normalize(),gr.crossVectors(an,oi),s[0]=oi.x,s[4]=gr.x,s[8]=an.x,s[1]=oi.y,s[5]=gr.y,s[9]=an.y,s[2]=oi.z,s[6]=gr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],g=n[13],_=n[2],v=n[6],p=n[10],u=n[14],E=n[3],A=n[7],b=n[11],C=n[15],I=s[0],P=s[4],O=s[8],w=s[12],y=s[1],L=s[5],Z=s[9],X=s[13],q=s[2],it=s[6],J=s[10],st=s[14],Y=s[3],dt=s[7],vt=s[11],wt=s[15];return r[0]=o*I+a*y+l*q+c*Y,r[4]=o*P+a*L+l*it+c*dt,r[8]=o*O+a*Z+l*J+c*vt,r[12]=o*w+a*X+l*st+c*wt,r[1]=h*I+d*y+f*q+g*Y,r[5]=h*P+d*L+f*it+g*dt,r[9]=h*O+d*Z+f*J+g*vt,r[13]=h*w+d*X+f*st+g*wt,r[2]=_*I+v*y+p*q+u*Y,r[6]=_*P+v*L+p*it+u*dt,r[10]=_*O+v*Z+p*J+u*vt,r[14]=_*w+v*X+p*st+u*wt,r[3]=E*I+A*y+b*q+C*Y,r[7]=E*P+A*L+b*it+C*dt,r[11]=E*O+A*Z+b*J+C*vt,r[15]=E*w+A*X+b*st+C*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],g=t[14],_=t[3],v=t[7],p=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*g-n*l*g)+v*(+e*l*g-e*c*f+r*o*f-s*o*g+s*c*h-r*l*h)+p*(+e*c*d-e*a*g-r*o*d+n*o*g+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],g=t[11],_=t[12],v=t[13],p=t[14],u=t[15],E=d*p*c-v*f*c+v*l*g-a*p*g-d*l*u+a*f*u,A=_*f*c-h*p*c-_*l*g+o*p*g+h*l*u-o*f*u,b=h*v*c-_*d*c+_*a*g-o*v*g-h*a*u+o*d*u,C=_*d*l-h*v*l-_*a*f+o*v*f+h*a*p-o*d*p,I=e*E+n*A+s*b+r*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/I;return t[0]=E*P,t[1]=(v*f*r-d*p*r-v*s*g+n*p*g+d*s*u-n*f*u)*P,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*u+n*l*u)*P,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*g-n*l*g)*P,t[4]=A*P,t[5]=(h*p*r-_*f*r+_*s*g-e*p*g-h*s*u+e*f*u)*P,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*u-e*l*u)*P,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*g+e*l*g)*P,t[8]=b*P,t[9]=(_*d*r-h*v*r-_*n*g+e*v*g+h*n*u-e*d*u)*P,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*u+e*a*u)*P,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*g-e*a*g)*P,t[12]=C*P,t[13]=(h*v*s-_*d*s+_*n*f-e*v*f-h*n*p+e*d*p)*P,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*p-e*a*p)*P,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,g=r*h,_=r*d,v=o*h,p=o*d,u=a*d,E=l*c,A=l*h,b=l*d,C=n.x,I=n.y,P=n.z;return s[0]=(1-(v+u))*C,s[1]=(g+b)*C,s[2]=(_-A)*C,s[3]=0,s[4]=(g-b)*I,s[5]=(1-(f+u))*I,s[6]=(p+E)*I,s[7]=0,s[8]=(_+A)*P,s[9]=(p-E)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);let c=1/r,h=1/o,d=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(a===Kn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===kr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Kn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,g=(n+s)*h,_,v;if(a===Kn)_=(o+r)*d,v=-2*d;else if(a===kr)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new V,Rn=new oe,Id=new V(0,0,0),Pd=new V(1,1,1),oi=new V,gr=new V,an=new V,Mc=new oe,Sc=new fi,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ld=0,bc=new V,is=new fi,qn=new oe,_r=new V,Hs=new V,Dd=new V,Ud=new fi,wc=new V(1,0,0),Ec=new V(0,1,0),Tc=new V(0,0,1),Ac={type:"added"},Nd={type:"removed"},ss={type:"childadded",child:null},Fo={type:"childremoved",child:null},gn=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Dn,n=new fi,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Yt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(wc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(Tc,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(Tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Hs,_r,this.up):qn.lookAt(_r,Hs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(qn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ac),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ac),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};gn.DEFAULT_UP=new V(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new V,Yn=new V,Oo=new V,Zn=new V,rs=new V,os=new V,Rc=new V,Bo=new V,zo=new V,ko=new V,Vo=new ye,Ho=new ye,Go=new ye,Ci=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Yn.subVectors(n,e),Oo.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Yn),l=Cn.dot(Oo),c=Yn.dot(Yn),h=Yn.dot(Oo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,g=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vo.setScalar(0),Ho.setScalar(0),Go.setScalar(0),Vo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Ho,r.y),o.addScaledVector(Go,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Yn.subVectors(t,e),Cn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Cn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,n),os.subVectors(r,n),Bo.subVectors(t,n);let l=rs.dot(Bo),c=os.dot(Bo);if(l<=0&&c<=0)return e.copy(n);zo.subVectors(t,s);let h=rs.dot(zo),d=os.dot(zo);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(rs,o);ko.subVectors(t,r);let g=rs.dot(ko),_=os.dot(ko);if(_>=0&&g<=_)return e.copy(r);let v=g*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(os,a);let p=h*_-g*d;if(p<=0&&d-h>=0&&g-_>=0)return Rc.subVectors(r,s),a=(d-h)/(d-h+(g-_)),e.copy(s).addScaledVector(Rc,a);let u=1/(p+v+f);return o=v*u,a=f*u,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Sd(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wo(o,r,t+1/3),this.g=Wo(o,r,t),this.b=Wo(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return jt.fromWorkingColorSpace(Xe.copy(this),t),Math.round(en(Xe.r*255,0,255))*65536+Math.round(en(Xe.g*255,0,255))*256+Math.round(en(Xe.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=pn){jt.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(xr);let n=Ao(ai.h,xr.h,e),s=Ao(ai.s,xr.s,e),r=Ao(ai.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new re;re.NAMES=Sh;var Fd=0,Ni=class extends di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Js(),this.name="",this.blending=fs,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qr=class extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new V,vr=new he,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}};var bs=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Le=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},Od=0,fn=new oe,Xo=new gn,as=new V,ln=new Ui,Gs=new Ui,ze=new V,sn=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?Yr:bs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,Gs.min),ln.expandByPoint(ze),ze.addVectors(ln.max,Gs.max),ln.expandByPoint(ze)):(ln.expandByPoint(Gs.min),ln.expandByPoint(Gs.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),ze.add(as)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new V,l[O]=new V;let c=new V,h=new V,d=new V,f=new he,g=new he,_=new he,v=new V,p=new V;function u(O,w,y){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,y),h.sub(c),d.sub(c),g.sub(f),_.sub(f);let L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(L),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(L),a[O].add(v),a[w].add(v),a[y].add(v),l[O].add(p),l[w].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let O=0,w=E.length;O<w;++O){let y=E[O],L=y.start,Z=y.count;for(let X=L,q=L+Z;X<q;X+=3)u(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let A=new V,b=new V,C=new V,I=new V;function P(O){C.fromBufferAttribute(s,O),I.copy(C);let w=a[O];A.copy(w),A.sub(C.multiplyScalar(C.dot(w))).normalize(),b.crossVectors(I,w);let L=b.dot(l[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,L)}for(let O=0,w=E.length;O<w;++O){let y=E[O],L=y.start,Z=y.count;for(let X=L,q=L+Z;X<q;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,g=t.count;f<g;f+=3){let _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),g=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[g++]}return new He(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],g=t(f,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let g=c[d];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cc=new oe,bi=new Wr,yr=new Ss,Ic=new V,Mr=new V,Sr=new V,br=new V,qo=new V,wr=new V,Pc=new V,Er=new V,ke=class extends gn{constructor(t=new sn,e=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(qo.fromBufferAttribute(d,t),o?wr.addScaledVector(qo,h):wr.addScaledVector(qo.sub(e),h))}e.add(wr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),bi.copy(t.ray).recast(t.near),!(yr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(yr,Ic)===null||bi.origin.distanceToSquared(Ic)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),bi.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let p=f[_],u=o[p.materialIndex],E=Math.max(p.start,g.start),A=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let b=E,C=A;b<C;b+=3){let I=a.getX(b),P=a.getX(b+1),O=a.getX(b+2);s=Tr(this,u,t,n,c,h,d,I,P,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=_,u=v;p<u;p+=3){let E=a.getX(p),A=a.getX(p+1),b=a.getX(p+2);s=Tr(this,o,t,n,c,h,d,E,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let p=f[_],u=o[p.materialIndex],E=Math.max(p.start,g.start),A=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let b=E,C=A;b<C;b+=3){let I=b,P=b+1,O=b+2;s=Tr(this,u,t,n,c,h,d,I,P,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=_,u=v;p<u;p+=3){let E=p,A=p+1,b=p+2;s=Tr(this,o,t,n,c,h,d,E,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Bd(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;Er.copy(a),Er.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:i}}function Tr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Mr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,br);let h=Bd(i,t,e,n,Mr,Sr,br,Pc);if(h){let d=new V;Ci.getBarycoord(Pc,Mr,Sr,br,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,a,l,c,d,new he)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,a,l,c,d,new he)),o&&(h.normal=Ci.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};Ci.getNormal(Mr,Sr,br,f.normal),h.face=f,h.barycoord=d}return h}var Fi=class i extends sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function _(v,p,u,E,A,b,C,I,P,O,w){let y=b/P,L=C/O,Z=b/2,X=C/2,q=I/2,it=P+1,J=O+1,st=0,Y=0,dt=new V;for(let vt=0;vt<J;vt++){let wt=vt*L-X;for(let Xt=0;Xt<it;Xt++){let Kt=Xt*y-Z;dt[v]=Kt*E,dt[p]=wt*A,dt[u]=q,c.push(dt.x,dt.y,dt.z),dt[v]=0,dt[p]=0,dt[u]=I>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(Xt/P),d.push(1-vt/O),st+=1}}for(let vt=0;vt<O;vt++)for(let wt=0;wt<P;wt++){let Xt=f+wt+it*vt,Kt=f+wt+it*(vt+1),K=f+(wt+1)+it*(vt+1),lt=f+(wt+1)+it*vt;l.push(Xt,Kt,lt),l.push(Kt,K,lt),Y+=6}a.addGroup(g,Y,w),g+=Y,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=ws(i[e]);for(let s in n)t[s]=n[s]}return t}function zd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var kd={clone:ws,merge:Je},Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Oi=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new V,Lc=new he,Dc=new he,qe=class extends Oi{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Va*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Dc),e.subVectors(Dc,Lc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(To*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,Xa=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new qe(ls,cs,t,e);r.layers=this.layers,this.add(r);let o=new qe(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new qe(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new qe(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new qe(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Zr=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qa=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fi(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:hi});r.uniforms.tEquirect.value=e;let o=new ke(s,r),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Bn),new Xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Yo=new V,Gd=new V,Wd=new Yt,Jn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yo.subVectors(n,e).cross(Gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},wi=new Ss,Ar=new V,$r=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],v=s[10],p=s[11],u=s[12],E=s[13],A=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,p-g,b-u).normalize(),n[1].setComponents(l+r,f+c,p+g,b+u).normalize(),n[2].setComponents(l+o,f+h,p+_,b+E).normalize(),n[3].setComponents(l-o,f-h,p-_,b-E).normalize(),n[4].setComponents(l-a,f-d,p-v,b-A).normalize(),e===Kn)n[5].setComponents(l+a,f+d,p+v,b+A).normalize();else if(e===kr)n[5].setComponents(a,d,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function wh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<d.length;g++){let _=d[f],v=d[g];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let g=0,_=d.length;g<_;g++){let v=d[g];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bi=class i extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,g=[],_=[],v=[],p=[];for(let u=0;u<h;u++){let E=u*f-o;for(let A=0;A<c;A++){let b=A*d-r;_.push(b,-E,0),v.push(0,0,1),p.push(A/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let A=E+c*u,b=E+c*(u+1),C=E+1+c*(u+1),I=E+1+c*u;g.push(A,b,I),g.push(b,C,I)}this.setIndex(g),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,af=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,em=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Zd,alphamap_pars_fragment:$d,alphatest_fragment:Jd,alphatest_pars_fragment:Kd,aomap_fragment:Qd,aomap_pars_fragment:jd,batching_pars_vertex:tf,batching_vertex:ef,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:of,bumpmap_pars_fragment:af,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:vf,displacementmap_vertex:yf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:bf,colorspace_pars_fragment:wf,envmap_fragment:Ef,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:zf,envmap_vertex:Cf,fog_vertex:If,fog_pars_vertex:Pf,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:Nf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:kf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:Zf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:Qf,map_fragment:jf,map_pars_fragment:tp,map_particle_fragment:ep,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:sp,morphinstance_vertex:rp,morphcolor_vertex:op,morphnormal_vertex:ap,morphtarget_pars_vertex:lp,morphtarget_vertex:cp,normal_fragment_begin:hp,normal_fragment_maps:up,normal_pars_fragment:dp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:xp,iridescence_pars_fragment:vp,opaque_fragment:yp,packing:Mp,premultiplied_alpha_fragment:Sp,project_vertex:bp,dithering_fragment:wp,dithering_pars_fragment:Ep,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Cp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Dp,skinning_vertex:Up,skinnormal_vertex:Np,specularmap_fragment:Fp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:zp,transmission_fragment:kp,transmission_pars_fragment:Vp,uv_pars_fragment:Hp,uv_pars_vertex:Gp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:$p,cube_vert:Jp,cube_frag:Kp,depth_vert:Qp,depth_frag:jp,distanceRGBA_vert:tm,distanceRGBA_frag:em,equirect_vert:nm,equirect_frag:im,linedashed_vert:sm,linedashed_frag:rm,meshbasic_vert:om,meshbasic_frag:am,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:hm,meshmatcap_frag:um,meshnormal_vert:dm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:_m,meshtoon_vert:xm,meshtoon_frag:vm,points_vert:ym,points_frag:Mm,shadow_vert:Sm,shadow_frag:bm,sprite_vert:wm,sprite_frag:Em},pt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},On={basic:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new re(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Je([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Je([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Je([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new re(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Je([pt.points,pt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Je([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Je([pt.common,pt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Je([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Je([pt.sprite,pt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Je([pt.common,pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Je([pt.lights,pt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};On.physical={uniforms:Je([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Rr={r:0,b:0,g:0},Ei=new Dn,Tm=new oe;function Am(i,t,e,n,s,r,o){let a=new re(0),l=r===!0?0:1,c,h,d=null,f=0,g=null;function _(E){let A=E.isScene===!0?E.background:null;return A&&A.isTexture&&(A=(E.backgroundBlurriness>0?e:t).get(A)),A}function v(E){let A=!1,b=_(E);b===null?u(a,l):b&&b.isColor&&(u(b,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,A){let b=_(A);b&&(b.isCubeTexture||b.mapping===so)?(h===void 0&&(h=new ke(new Fi(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:ws(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(A.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(Ei)),h.material.toneMapped=jt.getTransfer(b.colorSpace)!==pe,(d!==b||f!==b.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,g=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ke(new Bi(2,2),new Ve({name:"BackgroundMaterial",uniforms:ws(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=jt.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,g=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,A){E.getRGB(Rr,bh(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),l=A,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:v,addToRenderList:p}}function Rm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,L,Z,X,q){let it=!1,J=d(X,Z,L);r!==J&&(r=J,c(r.object)),it=g(y,X,Z,q),it&&_(y,X,Z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,b(y,L,Z,X),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,L,Z){let X=Z.wireframe===!0,q=n[y.id];q===void 0&&(q={},n[y.id]=q);let it=q[L.id];it===void 0&&(it={},q[L.id]=it);let J=it[X];return J===void 0&&(J=f(l()),it[X]=J),J}function f(y){let L=[],Z=[],X=[];for(let q=0;q<e;q++)L[q]=0,Z[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Z,attributeDivisors:X,object:y,attributes:{},index:null}}function g(y,L,Z,X){let q=r.attributes,it=L.attributes,J=0,st=Z.getAttributes();for(let Y in st)if(st[Y].location>=0){let vt=q[Y],wt=it[Y];if(wt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),vt===void 0||vt.attribute!==wt||wt&&vt.data!==wt.data)return!0;J++}return r.attributesNum!==J||r.index!==X}function _(y,L,Z,X){let q={},it=L.attributes,J=0,st=Z.getAttributes();for(let Y in st)if(st[Y].location>=0){let vt=it[Y];vt===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor));let wt={};wt.attribute=vt,vt&&vt.data&&(wt.data=vt.data),q[Y]=wt,J++}r.attributes=q,r.attributesNum=J,r.index=X}function v(){let y=r.newAttributes;for(let L=0,Z=y.length;L<Z;L++)y[L]=0}function p(y){u(y,0)}function u(y,L){let Z=r.newAttributes,X=r.enabledAttributes,q=r.attributeDivisors;Z[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),q[y]!==L&&(i.vertexAttribDivisor(y,L),q[y]=L)}function E(){let y=r.newAttributes,L=r.enabledAttributes;for(let Z=0,X=L.length;Z<X;Z++)L[Z]!==y[Z]&&(i.disableVertexAttribArray(Z),L[Z]=0)}function A(y,L,Z,X,q,it,J){J===!0?i.vertexAttribIPointer(y,L,Z,q,it):i.vertexAttribPointer(y,L,Z,X,q,it)}function b(y,L,Z,X){v();let q=X.attributes,it=Z.getAttributes(),J=L.defaultAttributeValues;for(let st in it){let Y=it[st];if(Y.location>=0){let dt=q[st];if(dt===void 0&&(st==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),st==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),dt!==void 0){let vt=dt.normalized,wt=dt.itemSize,Xt=t.get(dt);if(Xt===void 0)continue;let Kt=Xt.buffer,K=Xt.type,lt=Xt.bytesPerElement,bt=K===i.INT||K===i.UNSIGNED_INT||dt.gpuType===_l;if(dt.isInterleavedBufferAttribute){let ct=dt.data,Lt=ct.stride,Ft=dt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Y.locationSize;Ut++)u(Y.location+Ut,ct.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ut=0;Ut<Y.locationSize;Ut++)p(Y.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Ut=0;Ut<Y.locationSize;Ut++)A(Y.location+Ut,wt/Y.locationSize,K,vt,Lt*lt,(Ft+wt/Y.locationSize*Ut)*lt,bt)}else{if(dt.isInstancedBufferAttribute){for(let ct=0;ct<Y.locationSize;ct++)u(Y.location+ct,dt.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ct=0;ct<Y.locationSize;ct++)p(Y.location+ct);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ct=0;ct<Y.locationSize;ct++)A(Y.location+ct,wt/Y.locationSize,K,vt,wt*lt,wt/Y.locationSize*ct*lt,bt)}}else if(J!==void 0){let vt=J[st];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(Y.location,vt);break;case 3:i.vertexAttrib3fv(Y.location,vt);break;case 4:i.vertexAttrib4fv(Y.location,vt);break;default:i.vertexAttrib1fv(Y.location,vt)}}}}E()}function C(){O();for(let y in n){let L=n[y];for(let Z in L){let X=L[Z];for(let q in X)h(X[q].object),delete X[q];delete L[Z]}delete n[y]}}function I(y){if(n[y.id]===void 0)return;let L=n[y.id];for(let Z in L){let X=L[Z];for(let q in X)h(X[q].object),delete X[q];delete L[Z]}delete n[y.id]}function P(y){for(let L in n){let Z=n[L];if(Z[y.id]===void 0)continue;let X=Z[y.id];for(let q in X)h(X[q].object),delete X[q];delete Z[y.id]}}function O(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function Cm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,n,1)}function l(c,h,d,f){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let O=P===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pn&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:C,maxSamples:I}}function Pm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Jn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let g=d.length!==0||f||n!==0||s;return s=f,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,g){let _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,A=E*4,b=u.clippingState||null;l.value=b,b=h(_,f,A,g);for(let C=0;C!==A;++C)b[C]=e[C];u.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,g,_){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,_!==!0||p===null){let u=g+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let A=0,b=g;A!==v;++A,b+=4)o.copy(d[A]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Lm(i){let t=new WeakMap;function e(o,a){return a===ha?o.mapping=xs:a===ua&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ha||a===ua)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new qa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ya=class extends Oi{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,Uc=[.125,.215,.35,.446,.526,.582],Ii=20,Zo=new Ya,Nc=new re,$o=null,Jo=0,Ko=0,Qo=!1,Ai=(1+Math.sqrt(5))/2,hs=1/Ai,Fc=[new V(-Ai,hs,0),new V(Ai,hs,0),new V(-hs,0,Ai),new V(hs,0,Ai),new V(0,Ai,-hs),new V(0,Ai,hs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Jr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($o,Jo,Ko),this._renderer.xr.enabled=Qo,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$o=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:$s,format:cn,colorSpace:pi,depthBuffer:!1},s=Oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dm(r)),this._blurMaterial=Um(r,t,e)}return s}_compileMaterial(t){let e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,s){let a=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Nc),h.toneMapping=ui,h.autoClear=!1;let g=new qr({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new ke(new Fi,g),v=!1,p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,v=!0):(g.color.copy(Nc),v=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let A=this._cubeSize;Cr(s,E*A,u>2?A:0,A,A),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(s-r-1)%Fc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ke(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ii-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Ii;p>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ii}`);let u=[],E=0;for(let P=0;P<Ii;++P){let O=P/v,w=Math.exp(-O*O/2);u.push(w),P===0?E+=w:P<p&&(E+=2*w)}for(let P=0;P<u.length;P++)u[P]=u[P]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;let b=this._sizeLods[s],C=3*b*(s>A-us?s-A+us:0),I=4*(this._cubeSize-b);Cr(e,C,I,3*b,2*b),l.setRenderTarget(e),l.render(d,Zo)}};function Dm(i){let t=[],e=[],n=[],s=i,r=i-us+1+Uc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-us?l=Uc[o-i+us-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,v=3,p=2,u=1,E=new Float32Array(v*_*g),A=new Float32Array(p*_*g),b=new Float32Array(u*_*g);for(let I=0;I<g;I++){let P=I%3*2/3-1,O=I>2?0:-1,w=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];E.set(w,v*_*I),A.set(f,p*_*I);let y=[I,I,I,I,I,I];b.set(y,u*_*I)}let C=new sn;C.setAttribute("position",new He(E,v)),C.setAttribute("uv",new He(A,p)),C.setAttribute("faceIndex",new He(b,u)),t.push(C),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oc(i,t,e){let n=new mn(i,t,e);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Um(i,t,e){let n=new Float32Array(Ii),s=new V(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bc(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function zc(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Nm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ha||l===ua,h=l===xs||l===vs;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Jr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let g=a.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new Jr(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let p=0,u=v.length;p<u;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let _ in g){let v=g[_];for(let p=0,u=v.length;p<u;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(d){let f=[],g=d.index,_=d.attributes.position,v=0;if(g!==null){let E=g.array;v=g.version;for(let A=0,b=E.length;A<b;A+=3){let C=E[A+0],I=E[A+1],P=E[A+2];f.push(C,I,I,P,P,C)}}else if(_!==void 0){let E=_.array;v=_.version;for(let A=0,b=E.length/3-1;A<b;A+=3){let C=A+0,I=A+1,P=A+2;f.push(C,I,I,P,P,C)}}else return;let p=new(Mh(f)?Yr:bs)(f,1);p.version=v;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Bm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*o),e.update(g,n,1)}function c(f,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,f*o,_),e.update(g,n,_))}function h(f,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,_);let p=0;for(let u=0;u<_;u++)p+=g[u];e.update(p,n,1)}function d(f,g,_,v){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,g[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,v,0,_);let u=0;for(let E=0;E<_;E++)u+=g[E]*v[E];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function km(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let w=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],A=0;g===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let b=a.attributes.position.count*A,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let I=new Float32Array(b*C*4*d),P=new Gr(I,b,C,d);P.type=Pn,P.needsUpdate=!0;let O=A*4;for(let y=0;y<d;y++){let L=p[y],Z=u[y],X=E[y],q=b*C*4*y;for(let it=0;it<L.count;it++){let J=it*O;g===!0&&(s.fromBufferAttribute(L,it),I[q+J+0]=s.x,I[q+J+1]=s.y,I[q+J+2]=s.z,I[q+J+3]=0),_===!0&&(s.fromBufferAttribute(Z,it),I[q+J+4]=s.x,I[q+J+5]=s.y,I[q+J+6]=s.z,I[q+J+7]=0),v===!0&&(s.fromBufferAttribute(X,it),I[q+J+8]=s.x,I[q+J+9]=s.y,I[q+J+10]=s.z,I[q+J+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new he(b,C)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Vm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Es=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h=ps){if(h!==ps&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Di),n===void 0&&h===Ms&&(n=ys),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Eh=new hn,kc=new Es(1,1),Th=new Gr,Ah=new Wa,Rh=new Zr,Vc=[],Hc=[],Gc=new Float32Array(16),Wc=new Float32Array(9),Xc=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ao(i,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),Ue(e,n)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Wc.set(n),i.uniformMatrix3fv(this.addr,!1,Wc),Ue(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),Ue(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=yh,r=kc):r=Eh,e.setTexture2D(t||r,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ah,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rh,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Th,s)}function ag(i){switch(i){case 5126:return Hm;case 35664:return Gm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}function lg(i,t){i.uniform1fv(this.addr,t)}function cg(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function hg(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function ug(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function dg(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pg(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mg(i,t){i.uniform1iv(this.addr,t)}function gg(i,t){i.uniform2iv(this.addr,t)}function _g(i,t){i.uniform3iv(this.addr,t)}function xg(i,t){i.uniform4iv(this.addr,t)}function vg(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function Mg(i,t){i.uniform3uiv(this.addr,t)}function Sg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Eh,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ah,r[o])}function Eg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rh,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=ao(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Th,r[o])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return yg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}var Za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ag(e.type)}},$a=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}},Ja=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},jo=/(\w+)(\])?(\[|\.)?/g;function qc(i,t){i.seq.push(t),i.map[t.id]=t}function Rg(i,t,e){let n=i.name,s=n.length;for(jo.lastIndex=0;;){let r=jo.exec(n),o=jo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qc(e,c===void 0?new Za(a,i,t):new $a(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ja(a),qc(e,d)),e=d}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Rg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cg=37297,Ig=0;function Pg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zc=new Yt;function Lg(i){jt._getMatrix(Zc,jt.workingColorSpace,i);let t=`mat3( ${Zc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case oo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $c(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Pg(i.getShaderSource(t),o)}else return s}function Dg(i,t){let e=Lg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ug(i,t){let e;switch(t){case id:e="Linear";break;case sd:e="Reinhard";break;case rd:e="Cineon";break;case od:e="ACESFilmic";break;case ld:e="AgX";break;case cd:e="Neutral";break;case ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ir=new V;function Ng(){jt.getLuminanceCoefficients(Ir);let i=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Og(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qs(i){return i!==""}function Jc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(zg,Vg)}var kg=new Map;function Vg(i,t){let e=Zt[t];if(e===void 0){let n=kg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(i){return i.replace(Hg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function Xg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case vs:t="ENVMAP_TYPE_CUBE";break;case so:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Yg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ch:t="ENVMAP_BLENDING_MULTIPLY";break;case ed:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function Zg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $g(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Wg(e),c=Xg(e),h=qg(e),d=Yg(e),f=Zg(e),g=Fg(e),_=Og(r),v=s.createProgram(),p,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qs).join(`
`),u.length>0&&(u+=`
`)):(p=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),u=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ui?Ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Ng(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=Ka(o),o=Jc(o,e),o=Kc(o,e),a=Ka(a),a=Jc(a,e),a=Kc(a,e),o=Qc(o),a=Qc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===kn?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let A=E+p+o,b=E+u+a,C=Yc(s,s.VERTEX_SHADER,A),I=Yc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,C),s.attachShader(v,I),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(L){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(v).trim(),X=s.getShaderInfoLog(C).trim(),q=s.getShaderInfoLog(I).trim(),it=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,I);else{let st=$c(s,C,"vertex"),Y=$c(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Z+`
`+st+`
`+Y)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(X===""||q==="")&&(J=!1);J&&(L.diagnostics={runnable:it,programLog:Z,vertexShader:{log:X,prefix:p},fragmentShader:{log:q,prefix:u}})}s.deleteShader(C),s.deleteShader(I),O=new gs(s,v),w=Bg(s,v)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Cg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ig++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=I,this}var Jg=0,Qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ja(t),e.set(t,n)),n}},ja=class{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}};function Kg(i,t,e,n,s,r,o){let a=new Xr,l=new Qa,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,y,L,Z,X){let q=Z.fog,it=X.geometry,J=w.isMeshStandardMaterial?Z.environment:null,st=(w.isMeshStandardMaterial?e:t).get(w.envMap||J),Y=st&&st.mapping===so?st.image.height:null,dt=_[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));let vt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,wt=vt!==void 0?vt.length:0,Xt=0;it.morphAttributes.position!==void 0&&(Xt=1),it.morphAttributes.normal!==void 0&&(Xt=2),it.morphAttributes.color!==void 0&&(Xt=3);let Kt,K,lt,bt;if(dt){let ee=On[dt];Kt=ee.vertexShader,K=ee.fragmentShader}else Kt=w.vertexShader,K=w.fragmentShader,l.update(w),lt=l.getVertexShaderID(w),bt=l.getFragmentShaderID(w);let ct=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ft=X.isInstancedMesh===!0,Ut=X.isBatchedMesh===!0,se=!!w.map,$t=!!w.matcap,ue=!!st,F=!!w.aoMap,Ke=!!w.lightMap,Ht=!!w.bumpMap,qt=!!w.normalMap,It=!!w.displacementMap,ae=!!w.emissiveMap,Pt=!!w.metalnessMap,T=!!w.roughnessMap,x=w.anisotropy>0,B=w.clearcoat>0,j=w.dispersion>0,nt=w.iridescence>0,$=w.sheen>0,Et=w.transmission>0,ut=x&&!!w.anisotropyMap,_t=B&&!!w.clearcoatMap,Gt=B&&!!w.clearcoatNormalMap,rt=B&&!!w.clearcoatRoughnessMap,xt=nt&&!!w.iridescenceMap,Ct=nt&&!!w.iridescenceThicknessMap,Nt=$&&!!w.sheenColorMap,Mt=$&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,zt=!!w.specularColorMap,de=!!w.specularIntensityMap,D=Et&&!!w.transmissionMap,mt=Et&&!!w.thicknessMap,G=!!w.gradientMap,Q=!!w.alphaMap,ht=w.alphaTest>0,ft=!!w.alphaHash,Ot=!!w.extensions,me=ui;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(me=i.toneMapping);let Ee={shaderID:dt,shaderType:w.type,shaderName:w.name,vertexShader:Kt,fragmentShader:K,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:bt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ut,batchingColor:Ut&&X._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&X.instanceColor!==null,instancingMorph:Ft&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:pi,alphaToCoverage:!!w.alphaToCoverage,map:se,matcap:$t,envMap:ue,envMapMode:ue&&st.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Ke,bumpMap:Ht,normalMap:qt,displacementMap:f&&It,emissiveMap:ae,normalMapObjectSpace:qt&&w.normalMapType===pd,normalMapTangentSpace:qt&&w.normalMapType===fd,metalnessMap:Pt,roughnessMap:T,anisotropy:x,anisotropyMap:ut,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:Gt,clearcoatRoughnessMap:rt,dispersion:j,iridescence:nt,iridescenceMap:xt,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:Jt,specularColorMap:zt,specularIntensityMap:de,transmission:Et,transmissionMap:D,thicknessMap:mt,gradientMap:G,opaque:w.transparent===!1&&w.blending===fs&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:ht,alphaHash:ft,combine:w.combine,mapUv:se&&v(w.map.channel),aoMapUv:F&&v(w.aoMap.channel),lightMapUv:Ke&&v(w.lightMap.channel),bumpMapUv:Ht&&v(w.bumpMap.channel),normalMapUv:qt&&v(w.normalMap.channel),displacementMapUv:It&&v(w.displacementMap.channel),emissiveMapUv:ae&&v(w.emissiveMap.channel),metalnessMapUv:Pt&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:ut&&v(w.anisotropyMap.channel),clearcoatMapUv:_t&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(w.sheenRoughnessMap.channel),specularMapUv:Jt&&v(w.specularMap.channel),specularColorMapUv:zt&&v(w.specularColorMap.channel),specularIntensityMapUv:de&&v(w.specularIntensityMap.channel),transmissionMapUv:D&&v(w.transmissionMap.channel),thicknessMapUv:mt&&v(w.thicknessMap.channel),alphaMapUv:Q&&v(w.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(qt||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!it.attributes.uv&&(se||Q),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Lt,skinning:X.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Xt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:se&&w.map.isVideoTexture===!0&&jt.getTransfer(w.map.colorSpace)===pe,decodeVideoTextureEmissive:ae&&w.emissiveMap.isVideoTexture===!0&&jt.getTransfer(w.emissiveMap.colorSpace)===pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===In,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ot&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&w.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function u(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)y.push(L),y.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(E(y,w),A(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function E(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function A(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function b(w){let y=_[w.type],L;if(y){let Z=On[y];L=kd.clone(Z.uniforms)}else L=w.uniforms;return L}function C(w,y){let L;for(let Z=0,X=h.length;Z<X;Z++){let q=h[Z];if(q.cacheKey===y){L=q,++L.usedTimes;break}}return L===void 0&&(L=new $g(i,y,w,r),h.push(L)),L}function I(w){if(--w.usedTimes===0){let y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function P(w){l.remove(w)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:C,releaseProgram:I,releaseShaderCache:P,programs:h,dispose:O}}function Qg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function th(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,g,_,v,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=g,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=p),t++,u}function a(d,f,g,_,v,p){let u=o(d,f,g,_,v,p);g.transmission>0?n.push(u):g.transparent===!0?s.push(u):e.push(u)}function l(d,f,g,_,v,p){let u=o(d,f,g,_,v,p);g.transmission>0?n.unshift(u):g.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||jg),n.length>1&&n.sort(f||th),s.length>1&&s.sort(f||th)}function h(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function t0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new eh,i.set(n,[o])):s>=r.length?(o=new eh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new re};break;case"SpotLight":e={position:new V,direction:new V,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function n0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i0=0;function s0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r0(i){let t=new e0,e=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new oe,o=new oe;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,_=0,v=0,p=0,u=0,E=0,A=0,b=0,C=0,I=0,P=0;c.sort(s0);for(let w=0,y=c.length;w<y;w++){let L=c[w],Z=L.color,X=L.intensity,q=L.distance,it=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Z.r*X,d+=Z.g*X,f+=Z.b*X;else if(L.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(L.sh.coefficients[J],X);P++}else if(L.isDirectionalLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let st=L.shadow,Y=e.get(L);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=L.shadow.matrix,E++}n.directional[g]=J,g++}else if(L.isSpotLight){let J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(Z).multiplyScalar(X),J.distance=q,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,n.spot[v]=J;let st=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,st.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[v]=st.matrix,L.castShadow){let Y=e.get(L);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=it,b++}v++}else if(L.isRectAreaLight){let J=t.get(L);J.color.copy(Z).multiplyScalar(X),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=J,p++}else if(L.isPointLight){let J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){let st=L.shadow,Y=e.get(L);Y.shadowIntensity=st.intensity,Y.shadowBias=st.bias,Y.shadowNormalBias=st.normalBias,Y.shadowRadius=st.radius,Y.shadowMapSize=st.mapSize,Y.shadowCameraNear=st.camera.near,Y.shadowCameraFar=st.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=it,n.pointShadowMatrix[_]=L.shadow.matrix,A++}n.point[_]=J,_++}else if(L.isHemisphereLight){let J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(X),J.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[u]=J,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let O=n.hash;(O.directionalLength!==g||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==p||O.hemiLength!==u||O.numDirectionalShadows!==E||O.numPointShadows!==A||O.numSpotShadows!==b||O.numSpotMaps!==C||O.numLightProbes!==P)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,O.directionalLength=g,O.pointLength=_,O.spotLength=v,O.rectAreaLength=p,O.hemiLength=u,O.numDirectionalShadows=E,O.numPointShadows=A,O.numSpotShadows=b,O.numSpotMaps=C,O.numLightProbes=P,n.version=i0++)}function l(c,h){let d=0,f=0,g=0,_=0,v=0,p=h.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){let A=c[u];if(A.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(A.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(A.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(A.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function nh(i){let t=new r0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function o0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nh(i),t.set(s,[a])):r>=o.length?(a=new nh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var tl=class extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},el=class extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c0(i,t,e){let n=new $r,s=new he,r=new he,o=new ye,a=new tl({depthPacking:dd}),l=new el,c={},h=e.maxTextureSize,d={[zn]:nn,[nn]:zn,[In]:In},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:a0,fragmentShader:l0}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let _=new sn;_.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ke(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let u=this.type;this.render=function(I,P,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let w=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(hi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let X=u!==$n&&this.type===$n,q=u===$n&&this.type!==$n;for(let it=0,J=I.length;it<J;it++){let st=I[it],Y=st.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let dt=Y.getFrameExtents();if(s.multiply(dt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,Y.mapSize.y=r.y)),Y.map===null||X===!0||q===!0){let wt=this.type!==$n?{minFilter:Re,magFilter:Re}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mn(s.x,s.y,wt),Y.map.texture.name=st.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let vt=Y.getViewportCount();for(let wt=0;wt<vt;wt++){let Xt=Y.getViewport(wt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),Z.viewport(o),Y.updateMatrices(st,wt),n=Y.getFrustum(),b(P,O,Y.camera,st,this.type)}Y.isPointLightShadow!==!0&&this.type===$n&&E(Y,O),Y.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(w,y,L)};function E(I,P){let O=t.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(P,null,O,f,v,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(P,null,O,g,v,null)}function A(I,P,O,w){let y=null,L=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)y=L;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let Z=y.uuid,X=P.uuid,q=c[Z];q===void 0&&(q={},c[Z]=q);let it=q[X];it===void 0&&(it=y.clone(),q[X]=it,P.addEventListener("dispose",C)),y=it}if(y.visible=P.visible,y.wireframe=P.wireframe,w===$n?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:d[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let Z=i.properties.get(y);Z.light=O}return y}function b(I,P,O,w,y){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&y===$n)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);let X=t.update(I),q=I.material;if(Array.isArray(q)){let it=X.groups;for(let J=0,st=it.length;J<st;J++){let Y=it[J],dt=q[Y.materialIndex];if(dt&&dt.visible){let vt=A(I,dt,w,y);I.onBeforeShadow(i,I,P,O,X,vt,Y),i.renderBufferDirect(O,null,X,vt,I,Y),I.onAfterShadow(i,I,P,O,X,vt,Y)}}}else if(q.visible){let it=A(I,q,w,y);I.onBeforeShadow(i,I,P,O,X,it,null),i.renderBufferDirect(O,null,X,it,I,null),I.onAfterShadow(i,I,P,O,X,it,null)}}let Z=I.children;for(let X=0,q=Z.length;X<q;X++)b(Z[X],P,O,w,y)}function C(I){I.target.removeEventListener("dispose",C);for(let O in c){let w=c[O],y=I.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}var h0={[ia]:sa,[ra]:la,[oa]:ca,[_s]:aa,[sa]:ia,[la]:ra,[ca]:oa,[aa]:_s};function u0(i,t){function e(){let D=!1,mt=new ye,G=null,Q=new ye(0,0,0,0);return{setMask:function(ht){G!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),G=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ft,Ot,me,Ee){Ee===!0&&(ht*=me,ft*=me,Ot*=me),mt.set(ht,ft,Ot,me),Q.equals(mt)===!1&&(i.clearColor(ht,ft,Ot,me),Q.copy(mt))},reset:function(){D=!1,G=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,mt=!1,G=null,Q=null,ht=null;return{setReversed:function(ft){if(mt!==ft){let Ot=t.get("EXT_clip_control");mt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let me=ht;ht=null,this.setClear(me)}mt=ft},getReversed:function(){return mt},setTest:function(ft){ft?ct(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(ft){G!==ft&&!D&&(i.depthMask(ft),G=ft)},setFunc:function(ft){if(mt&&(ft=h0[ft]),Q!==ft){switch(ft){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case oa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ft}},setLocked:function(ft){D=ft},setClear:function(ft){ht!==ft&&(mt&&(ft=1-ft),i.clearDepth(ft),ht=ft)},reset:function(){D=!1,G=null,Q=null,ht=null,mt=!1}}}function s(){let D=!1,mt=null,G=null,Q=null,ht=null,ft=null,Ot=null,me=null,Ee=null;return{setTest:function(ee){D||(ee?ct(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ee){mt!==ee&&!D&&(i.stencilMask(ee),mt=ee)},setFunc:function(ee,Ye,Ge){(G!==ee||Q!==Ye||ht!==Ge)&&(i.stencilFunc(ee,Ye,Ge),G=ee,Q=Ye,ht=Ge)},setOp:function(ee,Ye,Ge){(ft!==ee||Ot!==Ye||me!==Ge)&&(i.stencilOp(ee,Ye,Ge),ft=ee,Ot=Ye,me=Ge)},setLocked:function(ee){D=ee},setClear:function(ee){Ee!==ee&&(i.clearStencil(ee),Ee=ee)},reset:function(){D=!1,mt=null,G=null,Q=null,ht=null,ft=null,Ot=null,me=null,Ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,g=[],_=null,v=!1,p=null,u=null,E=null,A=null,b=null,C=null,I=null,P=new re(0,0,0),O=0,w=!1,y=null,L=null,Z=null,X=null,q=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,st=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=st>=2);let dt=null,vt={},wt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),Kt=new ye().fromArray(wt),K=new ye().fromArray(Xt);function lt(D,mt,G,Q){let ht=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<G;Ot++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(mt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ft}let bt={};bt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(_s),Ht(!1),qt(rc),ct(i.CULL_FACE),F(hi);function ct(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Lt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ft(D,mt){return d[D]!==mt?(i.bindFramebuffer(D,mt),d[D]=mt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ut(D,mt){let G=g,Q=!1;if(D){G=f.get(mt),G===void 0&&(G=[],f.set(mt,G));let ht=D.textures;if(G.length!==ht.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ot=ht.length;ft<Ot;ft++)G[ft]=i.COLOR_ATTACHMENT0+ft;G.length=ht.length,Q=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Q=!0);Q&&i.drawBuffers(G)}function se(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let $t={[Ri]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};$t[ku]=i.MIN,$t[Vu]=i.MAX;let ue={[Hu]:i.ZERO,[Gu]:i.ONE,[Wu]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[Ku]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,mt,G,Q,ht,ft,Ot,me,Ee,ee){if(D===hi){v===!0&&(Lt(i.BLEND),v=!1);return}if(v===!1&&(ct(i.BLEND),v=!0),D!==Ou){if(D!==p||ee!==w){if((u!==Ri||b!==Ri)&&(i.blendEquation(i.FUNC_ADD),u=Ri,b=Ri),ee)switch(D){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,A=null,C=null,I=null,P.set(0,0,0),O=0,p=D,w=ee}return}ht=ht||mt,ft=ft||G,Ot=Ot||Q,(mt!==u||ht!==b)&&(i.blendEquationSeparate($t[mt],$t[ht]),u=mt,b=ht),(G!==E||Q!==A||ft!==C||Ot!==I)&&(i.blendFuncSeparate(ue[G],ue[Q],ue[ft],ue[Ot]),E=G,A=Q,C=ft,I=Ot),(me.equals(P)===!1||Ee!==O)&&(i.blendColor(me.r,me.g,me.b,Ee),P.copy(me),O=Ee),p=D,w=!1}function Ke(D,mt){D.side===In?Lt(i.CULL_FACE):ct(i.CULL_FACE);let G=D.side===nn;mt&&(G=!G),Ht(G),D.blending===fs&&D.transparent===!1?F(hi):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function qt(D){D!==Uu?(ct(i.CULL_FACE),D!==L&&(D===rc?i.cullFace(i.BACK):D===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),L=D}function It(D){D!==Z&&(J&&i.lineWidth(D),Z=D)}function ae(D,mt,G){D?(ct(i.POLYGON_OFFSET_FILL),(X!==mt||q!==G)&&(i.polygonOffset(mt,G),X=mt,q=G)):Lt(i.POLYGON_OFFSET_FILL)}function Pt(D){D?ct(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+it-1),dt!==D&&(i.activeTexture(D),dt=D)}function x(D,mt,G){G===void 0&&(dt===null?G=i.TEXTURE0+it-1:G=dt);let Q=vt[G];Q===void 0&&(Q={type:void 0,texture:void 0},vt[G]=Q),(Q.type!==D||Q.texture!==mt)&&(dt!==G&&(i.activeTexture(G),dt=G),i.bindTexture(D,mt||bt[D]),Q.type=D,Q.texture=mt)}function B(){let D=vt[dt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){Kt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Kt.copy(D))}function Mt(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Jt(D,mt){let G=c.get(mt);G===void 0&&(G=new WeakMap,c.set(mt,G));let Q=G.get(D);Q===void 0&&(Q=i.getUniformBlockIndex(mt,D.name),G.set(D,Q))}function zt(D,mt){let Q=c.get(mt).get(D);l.get(mt)!==Q&&(i.uniformBlockBinding(mt,Q,D.__bindingPointIndex),l.set(mt,Q))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,vt={},d={},f=new WeakMap,g=[],_=null,v=!1,p=null,u=null,E=null,A=null,b=null,C=null,I=null,P=new re(0,0,0),O=0,w=!1,y=null,L=null,Z=null,X=null,q=null,Kt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Lt,bindFramebuffer:Ft,drawBuffers:Ut,useProgram:se,setBlending:F,setMaterial:Ke,setFlipSided:Ht,setCullFace:qt,setLineWidth:It,setPolygonOffset:ae,setScissorTest:Pt,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:nt,texImage2D:xt,texImage3D:Ct,updateUBOMapping:Jt,uniformBlockBinding:zt,texStorage2D:Gt,texStorage3D:rt,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Nt,viewport:Mt,reset:de}}function ih(i,t,e,n){let s=d0(n);switch(e){case ph:return i*t;case gh:return i*t;case _h:return i*t*2;case ro:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case xh:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case mh:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Sl:return i*t*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case _a:return Math.max(i,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(t,8)/2;case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Br:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vh:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ba:case za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function d0(i){switch(i){case Ln:case uh:return{byteLength:1,components:1};case Zs:case dh:case $s:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case Di:case _l:case Pn:return{byteLength:4,components:1};case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function f0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return g?new OffscreenCanvas(T,x):Vr("canvas")}function v(T,x,B){let j=1,nt=Pt(T);if((nt.width>B||nt.height>B)&&(j=B/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(j*nt.width),Et=Math.floor(j*nt.height);d===void 0&&(d=_($,Et));let ut=x?_($,Et):d;return ut.width=$,ut.height=Et,ut.getContext("2d").drawImage(T,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+Et+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,x,B,j,nt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),x===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){let Et=nt?oo:jt.getTransfer(j);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Et===pe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(T,x){let B;return T?x===null||x===Di||x===ys?B=i.DEPTH24_STENCIL8:x===Pn?B=i.DEPTH32F_STENCIL8:x===Zs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Di||x===ys?B=i.DEPTH_COMPONENT24:x===Pn?B=i.DEPTH_COMPONENT32F:x===Zs&&(B=i.DEPTH_COMPONENT16),B}function C(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Re&&T.minFilter!==Bn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function I(T){let x=T.target;x.removeEventListener("dispose",I),O(x),x.isVideoTexture&&h.delete(x)}function P(T){let x=T.target;x.removeEventListener("dispose",P),y(x)}function O(T){let x=n.get(T);if(x.__webglInit===void 0)return;let B=T.source,j=f.get(B);if(j){let nt=j[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(T),Object.keys(j).length===0&&f.delete(B)}n.remove(T)}function w(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let B=T.source,j=f.get(B);delete j[x.__cacheKey],o.memory.textures--}function y(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let nt=0;nt<x.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(x.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=T.textures;for(let j=0,nt=B.length;j<nt;j++){let $=n.get(B[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(T)}let L=0;function Z(){L=0}function X(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function q(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function it(T,x){let B=n.get(T);if(T.isVideoTexture&&It(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,T,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function J(T,x){let B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function st(T,x){let B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Y(T,x){let B=n.get(T);if(T.version>0&&B.__version!==T.version){lt(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let dt={[da]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},vt={[Re]:i.NEAREST,[hd]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},wt={[md]:i.NEVER,[Md]:i.ALWAYS,[gd]:i.LESS,[yh]:i.LEQUAL,[_d]:i.EQUAL,[yd]:i.GEQUAL,[xd]:i.GREATER,[vd]:i.NOTEQUAL};function Xt(T,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Bn||x.magFilter===wo||x.magFilter===hr||x.magFilter===Li||x.minFilter===Bn||x.minFilter===wo||x.minFilter===hr||x.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,dt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,dt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,dt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,vt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Re||x.minFilter!==hr&&x.minFilter!==Li||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));let j=x.source,nt=f.get(j);nt===void 0&&(nt={},f.set(j,nt));let $=q(x);if($!==T.__cacheKey){nt[$]===void 0&&(nt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),nt[$].usedTimes++;let Et=nt[T.__cacheKey];Et!==void 0&&(nt[T.__cacheKey].usedTimes--,Et.usedTimes===0&&w(x)),T.__cacheKey=$,T.__webglTexture=nt[$].texture}return B}function K(T,x,B){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let nt=Kt(T,x),$=x.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+B);let Et=n.get($);if($.version!==Et.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);let ut=jt.getPrimaries(jt.workingColorSpace),_t=x.colorSpace===ci?null:jt.getPrimaries(x.colorSpace),Gt=x.colorSpace===ci||ut===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let rt=v(x.image,!1,s.maxTextureSize);rt=ae(x,rt);let xt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Nt=A(x.internalFormat,xt,Ct,x.colorSpace,x.isVideoTexture);Xt(j,x);let Mt,Jt=x.mipmaps,zt=x.isVideoTexture!==!0,de=Et.__version===void 0||nt===!0,D=$.dataReady,mt=C(x,rt);if(x.isDepthTexture)Nt=b(x.format===Ms,x.type),de&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,xt,Ct,null));else if(x.isDataTexture)if(Jt.length>0){zt&&de&&e.texStorage2D(i.TEXTURE_2D,mt,Nt,Jt[0].width,Jt[0].height);for(let G=0,Q=Jt.length;G<Q;G++)Mt=Jt[G],zt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,xt,Ct,Mt.data):e.texImage2D(i.TEXTURE_2D,G,Nt,Mt.width,Mt.height,0,xt,Ct,Mt.data);x.generateMipmaps=!1}else zt?(de&&e.texStorage2D(i.TEXTURE_2D,mt,Nt,rt.width,rt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,Ct,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,xt,Ct,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Nt,Jt[0].width,Jt[0].height,rt.depth);for(let G=0,Q=Jt.length;G<Q;G++)if(Mt=Jt[G],x.format!==cn)if(xt!==null)if(zt){if(D)if(x.layerUpdates.size>0){let ht=ih(Mt.width,Mt.height,x.format,x.type);for(let ft of x.layerUpdates){let Ot=Mt.data.subarray(ft*ht/Mt.data.BYTES_PER_ELEMENT,(ft+1)*ht/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ft,Mt.width,Mt.height,1,xt,Ot)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,rt.depth,xt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Nt,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,rt.depth,xt,Ct,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Nt,Mt.width,Mt.height,rt.depth,0,xt,Ct,Mt.data)}else{zt&&de&&e.texStorage2D(i.TEXTURE_2D,mt,Nt,Jt[0].width,Jt[0].height);for(let G=0,Q=Jt.length;G<Q;G++)Mt=Jt[G],x.format!==cn?xt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,Mt.width,Mt.height,xt,Ct,Mt.data):e.texImage2D(i.TEXTURE_2D,G,Nt,Mt.width,Mt.height,0,xt,Ct,Mt.data)}else if(x.isDataArrayTexture)if(zt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Nt,rt.width,rt.height,rt.depth),D)if(x.layerUpdates.size>0){let G=ih(rt.width,rt.height,x.format,x.type);for(let Q of x.layerUpdates){let ht=rt.data.subarray(Q*G/rt.data.BYTES_PER_ELEMENT,(Q+1)*G/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,xt,Ct,ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Ct,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,xt,Ct,rt.data);else if(x.isData3DTexture)zt?(de&&e.texStorage3D(i.TEXTURE_3D,mt,Nt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Ct,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,xt,Ct,rt.data);else if(x.isFramebufferTexture){if(de)if(zt)e.texStorage2D(i.TEXTURE_2D,mt,Nt,rt.width,rt.height);else{let G=rt.width,Q=rt.height;for(let ht=0;ht<mt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Nt,G,Q,0,xt,Ct,null),G>>=1,Q>>=1}}else if(Jt.length>0){if(zt&&de){let G=Pt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,mt,Nt,G.width,G.height)}for(let G=0,Q=Jt.length;G<Q;G++)Mt=Jt[G],zt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,xt,Ct,Mt):e.texImage2D(i.TEXTURE_2D,G,Nt,xt,Ct,Mt);x.generateMipmaps=!1}else if(zt){if(de){let G=Pt(rt);e.texStorage2D(i.TEXTURE_2D,mt,Nt,G.width,G.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ct,rt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,xt,Ct,rt);p(x)&&u(j),Et.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function lt(T,x,B){if(x.image.length!==6)return;let j=Kt(T,x),nt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let $=n.get(nt);if(nt.version!==$.__version||j===!0){e.activeTexture(i.TEXTURE0+B);let Et=jt.getPrimaries(jt.workingColorSpace),ut=x.colorSpace===ci?null:jt.getPrimaries(x.colorSpace),_t=x.colorSpace===ci||Et===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!Gt&&!rt?xt[Q]=v(x.image[Q],!0,s.maxCubemapSize):xt[Q]=rt?x.image[Q].image:x.image[Q],xt[Q]=ae(x,xt[Q]);let Ct=xt[0],Nt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),Jt=A(x.internalFormat,Nt,Mt,x.colorSpace),zt=x.isVideoTexture!==!0,de=$.__version===void 0||j===!0,D=nt.dataReady,mt=C(x,Ct);Xt(i.TEXTURE_CUBE_MAP,x);let G;if(Gt){zt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Jt,Ct.width,Ct.height);for(let Q=0;Q<6;Q++){G=xt[Q].mipmaps;for(let ht=0;ht<G.length;ht++){let ft=G[ht];x.format!==cn?Nt!==null?zt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,0,0,ft.width,ft.height,Nt,Mt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht,Jt,ft.width,ft.height,0,Nt,Mt,ft.data)}}}else{if(G=x.mipmaps,zt&&de){G.length>0&&mt++;let Q=Pt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,Nt,Mt,xt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,xt[Q].width,xt[Q].height,0,Nt,Mt,xt[Q].data);for(let ht=0;ht<G.length;ht++){let Ot=G[ht].image[Q].image;zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,Ot.width,Ot.height,Nt,Mt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Jt,Ot.width,Ot.height,0,Nt,Mt,Ot.data)}}else{zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Nt,Mt,xt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,Nt,Mt,xt[Q]);for(let ht=0;ht<G.length;ht++){let ft=G[ht];zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,0,0,Nt,Mt,ft.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ht+1,Jt,Nt,Mt,ft.image[Q])}}}p(x)&&u(i.TEXTURE_CUBE_MAP),$.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function bt(T,x,B,j,nt,$){let Et=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),_t=A(B.internalFormat,Et,ut,B.colorSpace),Gt=n.get(x),rt=n.get(B);if(rt.__renderTarget=x,!Gt.__hasExternalTextures){let xt=Math.max(1,x.width>>$),Ct=Math.max(1,x.height>>$);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,_t,xt,Ct,x.depth,0,Et,ut,null):e.texImage2D(nt,$,_t,xt,Ct,0,Et,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),qt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,rt.__webglTexture,0,Ht(x)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,rt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let j=x.depthTexture,nt=j&&j.isDepthTexture?j.type:null,$=b(x.stencilBuffer,nt),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Ht(x);qt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,$,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,T)}else{let j=x.textures;for(let nt=0;nt<j.length;nt++){let $=j[nt],Et=r.convert($.format,$.colorSpace),ut=r.convert($.type),_t=A($.internalFormat,Et,ut,$.colorSpace),Gt=Ht(x);B&&qt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,_t,x.width,x.height):qt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),it(x.depthTexture,0);let nt=j.__webglTexture,$=Ht(x);if(x.depthTexture.format===ps)qt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(x.depthTexture.format===Ms)qt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ft(T){let x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Lt(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),ct(x.__webglDepthbuffer[j],T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ct(x.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(T,x,B){let j=n.get(T);x!==void 0&&bt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ft(T)}function se(T){let x=T.texture,B=n.get(T),j=n.get(x);T.addEventListener("dispose",P);let nt=T.textures,$=T.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let _t=0;_t<x.mipmaps.length;_t++)B.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else B.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)B.__webglFramebuffer[ut]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ut=0,_t=nt.length;ut<_t;ut++){let Gt=n.get(nt[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&qt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){let _t=nt[ut];B.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);let Gt=r.convert(_t.format,_t.colorSpace),rt=r.convert(_t.type),xt=A(_t.internalFormat,Gt,rt,_t.colorSpace,T.isXRRenderTarget===!0),Ct=Ht(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,x);for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)bt(B.__webglFramebuffer[ut][_t],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else bt(B.__webglFramebuffer[ut],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,_t=nt.length;ut<_t;ut++){let Gt=nt[ut],rt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Xt(i.TEXTURE_2D,Gt),bt(B.__webglFramebuffer,T,Gt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),p(Gt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),Xt(ut,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)bt(B.__webglFramebuffer[_t],T,x,i.COLOR_ATTACHMENT0,ut,_t);else bt(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ut,0);p(x)&&u(ut),e.unbindTexture()}T.depthBuffer&&Ft(T)}function $t(T){let x=T.textures;for(let B=0,j=x.length;B<j;B++){let nt=x[B];if(p(nt)){let $=E(T),Et=n.get(nt).__webglTexture;e.bindTexture($,Et),u($),e.unbindTexture()}}}let ue=[],F=[];function Ke(T){if(T.samples>0){if(qt(T)===!1){let x=T.textures,B=T.width,j=T.height,nt=i.COLOR_BUFFER_BIT,$=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(T),ut=x.length>1;if(ut)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);let Gt=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,nt,i.NEAREST),l===!0&&(ue.length=0,F.length=0,ue.push(i.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push($),F.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);let Gt=n.get(x[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ht(T){return Math.min(s.maxSamples,T.samples)}function qt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function It(T){let x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ae(T,x){let B=T.colorSpace,j=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==pi&&B!==ci&&(jt.getTransfer(B)===pe?(j!==cn||nt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Pt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.setTexture2D=it,this.setTexture2DArray=J,this.setTexture3D=st,this.setTextureCube=Y,this.rebindTextures=Ut,this.setupRenderTarget=se,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qt}function p0(i,t){function e(n,s=ci){let r,o=jt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uh)return i.BYTE;if(n===dh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===cn)return i.RGBA;if(n===gh)return i.LUMINANCE;if(n===_h)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===ro)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===xh)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===Fr||n===Or)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===va||n===ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===va)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ma||n===Sa||n===ba||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===Na||n===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===Oa||n===Ba||n===za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nl=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ds=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},m0={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},g0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,il=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:g0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sl=class extends di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,_=null,v=new il,p=e.getContextAttributes(),u=null,E=null,A=[],b=[],C=new he,I=null,P=new qe;P.viewport=new ye;let O=new qe;O.viewport=new ye;let w=[P,O],y=new nl,L=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let lt=A[K];return lt===void 0&&(lt=new Ys,A[K]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(K){let lt=A[K];return lt===void 0&&(lt=new Ys,A[K]=lt),lt.getGripSpace()},this.getHand=function(K){let lt=A[K];return lt===void 0&&(lt=new Ys,A[K]=lt),lt.getHandSpace()};function X(K){let lt=b.indexOf(K.inputSource);if(lt===-1)return;let bt=A[lt];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||o),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",it);for(let K=0;K<A.length;K++){let lt=b[K];lt!==null&&(b[K]=null,A[K].disconnect(lt))}L=null,Z=null,v.reset(),t.setRenderTarget(u),g=null,f=null,d=null,s=null,E=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",it),p.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new mn(g.framebufferWidth,g.framebufferHeight,{format:cn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let lt=null,bt=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?Ms:ps,bt=p.stencil?ys:Di);let Lt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new mn(f.textureWidth,f.textureHeight,{format:cn,type:Ln,depthTexture:new Es(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function it(K){for(let lt=0;lt<K.removed.length;lt++){let bt=K.removed[lt],ct=b.indexOf(bt);ct>=0&&(b[ct]=null,A[ct].disconnect(bt))}for(let lt=0;lt<K.added.length;lt++){let bt=K.added[lt],ct=b.indexOf(bt);if(ct===-1){for(let Ft=0;Ft<A.length;Ft++)if(Ft>=b.length){b.push(bt),ct=Ft;break}else if(b[Ft]===null){b[Ft]=bt,ct=Ft;break}if(ct===-1)break}let Lt=A[ct];Lt&&Lt.connect(bt)}}let J=new V,st=new V;function Y(K,lt,bt){J.setFromMatrixPosition(lt.matrixWorld),st.setFromMatrixPosition(bt.matrixWorld);let ct=J.distanceTo(st),Lt=lt.projectionMatrix.elements,Ft=bt.projectionMatrix.elements,Ut=Lt[14]/(Lt[10]-1),se=Lt[14]/(Lt[10]+1),$t=(Lt[9]+1)/Lt[5],ue=(Lt[9]-1)/Lt[5],F=(Lt[8]-1)/Lt[0],Ke=(Ft[8]+1)/Ft[0],Ht=Ut*F,qt=Ut*Ke,It=ct/(-F+Ke),ae=It*-F;if(lt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ae),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let Pt=Ut+It,T=se+It,x=Ht-ae,B=qt+(ct-ae),j=$t*se/T*Pt,nt=ue*se/T*Pt;K.projectionMatrix.makePerspective(x,B,j,nt,Pt,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function dt(K,lt){lt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(lt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let lt=K.near,bt=K.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),y.near=O.near=P.near=lt,y.far=O.far=P.far=bt,(L!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,Z=y.far),P.layers.mask=K.layers.mask|2,O.layers.mask=K.layers.mask|4,y.layers.mask=P.layers.mask|O.layers.mask;let ct=K.parent,Lt=y.cameras;dt(y,ct);for(let Ft=0;Ft<Lt.length;Ft++)dt(Lt[Ft],ct);Lt.length===2?Y(y,P,O):y.projectionMatrix.copy(P.projectionMatrix),vt(K,y,ct)};function vt(K,lt,bt){bt===null?K.matrix.copy(lt.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(lt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(lt.projectionMatrix),K.projectionMatrixInverse.copy(lt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Va*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let wt=null;function Xt(K,lt){if(h=lt.getViewerPose(c||o),_=lt,h!==null){let bt=h.views;g!==null&&(t.setRenderTargetFramebuffer(E,g.framebuffer),t.setRenderTarget(E));let ct=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let Ft=0;Ft<bt.length;Ft++){let Ut=bt[Ft],se=null;if(g!==null)se=g.getViewport(Ut);else{let ue=d.getViewSubImage(f,Ut);se=ue.viewport,Ft===0&&(t.setRenderTargetTextures(E,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(E))}let $t=w[Ft];$t===void 0&&($t=new qe,$t.layers.enable(Ft),$t.viewport=new ye,w[Ft]=$t),$t.matrix.fromArray(Ut.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ut.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(se.x,se.y,se.width,se.height),Ft===0&&(y.matrix.copy($t.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push($t)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let Ft=d.getDepthInformation(bt[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(t,Ft,s.renderState)}}for(let bt=0;bt<A.length;bt++){let ct=b[bt],Lt=A[bt];ct!==null&&Lt!==void 0&&Lt.update(ct,lt,c||o)}wt&&wt(K,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}let Kt=new wh;Kt.setAnimationLoop(Xt),this.setAnimationLoop=function(K){wt=K},this.dispose=function(){}}},Ti=new Dn,x0=new oe;function v0(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,bh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,A,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&g(p,u,b)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,E,A):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===nn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===nn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let E=t.get(u),A=E.envMap,b=E.envMapRotation;A&&(p.envMap.value=A,Ti.copy(b),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(Ti)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,A){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=A*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){let E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function y0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){let b=A.program;n.uniformBlockBinding(E,b)}function c(E,A){let b=s[E.id];b===void 0&&(_(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",p));let C=A.program;n.updateUBOMapping(E,C);let I=t.render.frame;r[E.id]!==I&&(f(E),r[E.id]=I)}function h(E){let A=d();E.__bindingPointIndex=A;let b=i.createBuffer(),C=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let A=s[E.id],b=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let I=0,P=b.length;I<P;I++){let O=Array.isArray(b[I])?b[I]:[b[I]];for(let w=0,y=O.length;w<y;w++){let L=O[w];if(g(L,I,w,C)===!0){let Z=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],q=0;for(let it=0;it<X.length;it++){let J=X[it],st=v(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,Z+q,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,q),q+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(E,A,b,C){let I=E.value,P=A+"_"+b;if(C[P]===void 0)return typeof I=="number"||typeof I=="boolean"?C[P]=I:C[P]=I.clone(),!0;{let O=C[P];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return C[P]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function _(E){let A=E.uniforms,b=0,C=16;for(let P=0,O=A.length;P<O;P++){let w=Array.isArray(A[P])?A[P]:[A[P]];for(let y=0,L=w.length;y<L;y++){let Z=w[y],X=Array.isArray(Z.value)?Z.value:[Z.value];for(let q=0,it=X.length;q<it;q++){let J=X[q],st=v(J),Y=b%C,dt=Y%st.boundary,vt=Y+dt;b+=dt,vt!==0&&C-vt<st.storage&&(b+=C-vt),Z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=b,b+=st.storage}}}let I=b%C;return I>0&&(b+=C-I),E.__size=b,E.__cache={},this}function v(E){let A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),A}function p(E){let A=E.target;A.removeEventListener("dispose",p);let b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Kr=class{constructor(t={}){let{canvas:e=bd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=new Uint32Array(4),v=new Int32Array(4),p=null,u=null,E=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=ui,this.toneMappingExposure=1;let b=this,C=!1,I=0,P=0,O=null,w=-1,y=null,L=new ye,Z=new ye,X=null,q=new re(0),it=0,J=e.width,st=e.height,Y=1,dt=null,vt=null,wt=new ye(0,0,J,st),Xt=new ye(0,0,J,st),Kt=!1,K=new $r,lt=!1,bt=!1,ct=new oe,Lt=new oe,Ft=new V,Ut=new ye,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function ue(){return O===null?Y:1}let F=n;function Ke(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){let U="webgl2";if(F=Ke(U,S),F===null)throw Ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ht,qt,It,ae,Pt,T,x,B,j,nt,$,Et,ut,_t,Gt,rt,xt,Ct,Nt,Mt,Jt,zt,de,D;function mt(){Ht=new Fm(F),Ht.init(),zt=new p0(F,Ht),qt=new Im(F,Ht,t,zt),It=new u0(F,Ht),qt.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ae=new zm(F),Pt=new Qg,T=new f0(F,Ht,It,Pt,qt,zt,ae),x=new Lm(b),B=new Nm(b),j=new Xd(F),de=new Rm(F,j),nt=new Om(F,j,ae,de),$=new Vm(F,nt,j,ae),Nt=new km(F,qt,T),rt=new Pm(Pt),Et=new Kg(b,x,B,Ht,qt,de,rt),ut=new v0(b,Pt),_t=new t0,Gt=new o0(Ht),Ct=new Am(b,x,B,It,$,g,l),xt=new c0(b,$,qt),D=new y0(F,ae,qt,It),Mt=new Cm(F,Ht,ae),Jt=new Bm(F,Ht,ae),ae.programs=Et.programs,b.capabilities=qt,b.extensions=Ht,b.properties=Pt,b.renderLists=_t,b.shadowMap=xt,b.state=It,b.info=ae}mt();let G=new sl(b,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=Ht.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ht.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(J,st,!1))},this.getSize=function(S){return S.set(J,st)},this.setSize=function(S,U,H=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,st=U,e.width=Math.floor(S*Y),e.height=Math.floor(U*Y),H===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(J*Y,st*Y).floor()},this.setDrawingBufferSize=function(S,U,H){J=S,st=U,Y=H,e.width=Math.floor(S*H),e.height=Math.floor(U*H),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,U,H,W){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,U,H,W),It.viewport(L.copy(wt).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(Xt)},this.setScissor=function(S,U,H,W){S.isVector4?Xt.set(S.x,S.y,S.z,S.w):Xt.set(S,U,H,W),It.scissor(Z.copy(Xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(S){It.setScissorTest(Kt=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){vt=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,U=!0,H=!0){let W=0;if(S){let N=!1;if(O!==null){let at=O.texture.format;N=at===Sl||at===Ml||at===yl}if(N){let at=O.texture.type,gt=at===Ln||at===Di||at===Zs||at===ys||at===xl||at===vl,Tt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Dt=Tt.r,kt=Tt.g,St=Tt.b;gt?(_[0]=Dt,_[1]=kt,_[2]=St,_[3]=yt,F.clearBufferuiv(F.COLOR,0,_)):(v[0]=Dt,v[1]=kt,v[2]=St,v[3]=yt,F.clearBufferiv(F.COLOR,0,v))}else W|=F.COLOR_BUFFER_BIT}U&&(W|=F.DEPTH_BUFFER_BIT),H&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Gt.dispose(),Pt.dispose(),x.dispose(),B.dispose(),$.dispose(),de.dispose(),D.dispose(),Et.dispose(),G.dispose(),G.removeEventListener("sessionstart",Hi),G.removeEventListener("sessionend",Gi),Qe.stop()};function Q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=ae.autoReset,U=xt.enabled,H=xt.autoUpdate,W=xt.needsUpdate,N=xt.type;mt(),ae.autoReset=S,xt.enabled=U,xt.autoUpdate=H,xt.needsUpdate=W,xt.type=N}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ot(S){let U=S.target;U.removeEventListener("dispose",Ot),me(U)}function me(S){Ee(S),Pt.remove(S)}function Ee(S){let U=Pt.get(S).programs;U!==void 0&&(U.forEach(function(H){Et.releaseProgram(H)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,H,W,N,at){U===null&&(U=se);let gt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=qi(S,U,H,W,N);It.setMaterial(W,gt);let yt=H.index,Dt=1;if(W.wireframe===!0){if(yt=nt.getWireframeAttribute(H),yt===void 0)return;Dt=2}let kt=H.drawRange,St=H.attributes.position,te=kt.start*Dt,fe=(kt.start+kt.count)*Dt;at!==null&&(te=Math.max(te,at.start*Dt),fe=Math.min(fe,(at.start+at.count)*Dt)),yt!==null?(te=Math.max(te,0),fe=Math.min(fe,yt.count)):St!=null&&(te=Math.max(te,0),fe=Math.min(fe,St.count));let ge=fe-te;if(ge<0||ge===1/0)return;de.setup(N,W,Tt,H,yt);let Ce,Qt=Mt;if(yt!==null&&(Ce=j.get(yt),Qt=Jt,Qt.setIndex(Ce)),N.isMesh)W.wireframe===!0?(It.setLineWidth(W.wireframeLinewidth*ue()),Qt.setMode(F.LINES)):Qt.setMode(F.TRIANGLES);else if(N.isLine){let At=W.linewidth;At===void 0&&(At=1),It.setLineWidth(At*ue()),N.isLineSegments?Qt.setMode(F.LINES):N.isLineLoop?Qt.setMode(F.LINE_LOOP):Qt.setMode(F.LINE_STRIP)}else N.isPoints?Qt.setMode(F.POINTS):N.isSprite&&Qt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let At=N._multiDrawStarts,dn=N._multiDrawCounts,ne=N._multiDrawCount,be=yt?j.get(yt).bytesPerElement:1,Ze=Pt.get(W).currentProgram.getUniforms();for(let Fe=0;Fe<ne;Fe++)Ze.setValue(F,"_gl_DrawID",Fe),Qt.render(At[Fe]/be,dn[Fe])}else if(N.isInstancedMesh)Qt.renderInstances(te,ge,N.count);else if(H.isInstancedBufferGeometry){let At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,dn=Math.min(H.instanceCount,At);Qt.renderInstances(te,ge,dn)}else Qt.render(te,ge)};function ee(S,U,H){S.transparent===!0&&S.side===In&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,rn(S,U,H),S.side=zn,S.needsUpdate=!0,rn(S,U,H),S.side=In):rn(S,U,H)}this.compile=function(S,U,H=null){H===null&&(H=S),u=Gt.get(H),u.init(U),A.push(u),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let W=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){let Tt=at[gt];ee(Tt,H,N),W.add(Tt)}else ee(at,H,N),W.add(at)}),A.pop(),u=null,W},this.compileAsync=function(S,U,H=null){let W=this.compile(S,U,H);return new Promise(N=>{function at(){if(W.forEach(function(gt){Pt.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){N(S);return}setTimeout(at,10)}Ht.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ye=null;function Ge(S){Ye&&Ye(S)}function Hi(){Qe.stop()}function Gi(){Qe.start()}let Qe=new wh;Qe.setAnimationLoop(Ge),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(S){Ye=S,G.setAnimationLoop(S),S===null?Qe.stop():Qe.start()},G.addEventListener("sessionstart",Hi),G.addEventListener("sessionend",Gi),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,U,O),u=Gt.get(S,A.length),u.init(U),A.push(u),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Lt),bt=this.localClippingEnabled,lt=rt.init(this.clippingPlanes,bt),p=_t.get(S,E.length),p.init(),E.push(p),G.enabled===!0&&G.isPresenting===!0){let at=b.xr.getDepthSensingMesh();at!==null&&xn(at,U,-1/0,b.sortObjects)}xn(S,U,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(dt,vt),$t=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,$t&&Ct.addToRenderList(p,S),this.info.render.frame++,lt===!0&&rt.beginShadows();let H=u.state.shadowsArray;xt.render(H,S,U),lt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let gt=0,Tt=at.length;gt<Tt;gt++){let yt=at[gt];_i(W,N,S,yt)}$t&&Ct.render(S);for(let gt=0,Tt=at.length;gt<Tt;gt++){let yt=at[gt];Ns(p,S,yt,yt.viewport)}}else N.length>0&&_i(W,N,S,U),$t&&Ct.render(S),Ns(p,S,U);O!==null&&(T.updateMultisampleRenderTarget(O),T.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(b,S,U),de.resetDefaultState(),w=-1,y=null,A.pop(),A.length>0?(u=A[A.length-1],lt===!0&&rt.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function xn(S,U,H,W){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)u.pushLight(S),S.castShadow&&u.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){W&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Lt);let gt=$.update(S),Tt=S.material;Tt.visible&&p.push(S,gt,Tt,H,Ut.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){let gt=$.update(S),Tt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ut.copy(gt.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(Lt)),Array.isArray(Tt)){let yt=gt.groups;for(let Dt=0,kt=yt.length;Dt<kt;Dt++){let St=yt[Dt],te=Tt[St.materialIndex];te&&te.visible&&p.push(S,gt,te,H,Ut.z,St)}}else Tt.visible&&p.push(S,gt,Tt,H,Ut.z,null)}}let at=S.children;for(let gt=0,Tt=at.length;gt<Tt;gt++)xn(at[gt],U,H,W)}function Ns(S,U,H,W){let N=S.opaque,at=S.transmissive,gt=S.transparent;u.setupLightsView(H),lt===!0&&rt.setGlobalState(b.clippingPlanes,H),W&&It.viewport(L.copy(W)),N.length>0&&vn(N,U,H),at.length>0&&vn(at,U,H),gt.length>0&&vn(gt,U,H),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function _i(S,U,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[W.id]===void 0&&(u.state.transmissionRenderTarget[W.id]=new mn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?$s:Ln,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let at=u.state.transmissionRenderTarget[W.id],gt=W.viewport||L;at.setSize(gt.z,gt.w);let Tt=b.getRenderTarget();b.setRenderTarget(at),b.getClearColor(q),it=b.getClearAlpha(),it<1&&b.setClearColor(16777215,.5),b.clear(),$t&&Ct.render(H);let yt=b.toneMapping;b.toneMapping=ui;let Dt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),u.setupLightsView(W),lt===!0&&rt.setGlobalState(b.clippingPlanes,W),vn(S,H,W),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let St=0,te=U.length;St<te;St++){let fe=U[St],ge=fe.object,Ce=fe.geometry,Qt=fe.material,At=fe.group;if(Qt.side===In&&ge.layers.test(W.layers)){let dn=Qt.side;Qt.side=nn,Qt.needsUpdate=!0,Wi(ge,H,W,Ce,Qt,At),Qt.side=dn,Qt.needsUpdate=!0,kt=!0}}kt===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}b.setRenderTarget(Tt),b.setClearColor(q,it),Dt!==void 0&&(W.viewport=Dt),b.toneMapping=yt}function vn(S,U,H){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=S.length;N<at;N++){let gt=S[N],Tt=gt.object,yt=gt.geometry,Dt=W===null?gt.material:W,kt=gt.group;Tt.layers.test(H.layers)&&Wi(Tt,U,H,yt,Dt,kt)}}function Wi(S,U,H,W,N,at){S.onBeforeRender(b,U,H,W,N,at),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(b,U,H,W,S,at),N.transparent===!0&&N.side===In&&N.forceSinglePass===!1?(N.side=nn,N.needsUpdate=!0,b.renderBufferDirect(H,U,W,N,S,at),N.side=zn,N.needsUpdate=!0,b.renderBufferDirect(H,U,W,N,S,at),N.side=In):b.renderBufferDirect(H,U,W,N,S,at),S.onAfterRender(b,U,H,W,N,at)}function rn(S,U,H){U.isScene!==!0&&(U=se);let W=Pt.get(S),N=u.state.lights,at=u.state.shadowsArray,gt=N.state.version,Tt=Et.getParameters(S,N.state,at,U,H),yt=Et.getProgramCacheKey(Tt),Dt=W.programs;W.environment=S.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Ot),Dt=new Map,W.programs=Dt);let kt=Dt.get(yt);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===gt)return Xi(S,Tt),kt}else Tt.uniforms=Et.getUniforms(S),S.onBeforeCompile(Tt,b),kt=Et.acquireProgram(Tt,yt),Dt.set(yt,kt),W.uniforms=Tt.uniforms;let St=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=rt.uniform),Xi(S,Tt),W.needsLights=yn(S),W.lightsStateVersion=gt,W.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function xi(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=gs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Xi(S,U){let H=Pt.get(S);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function qi(S,U,H,W,N){U.isScene!==!0&&(U=se),T.resetTextureUnits();let at=U.fog,gt=W.isMeshStandardMaterial?U.environment:null,Tt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:pi,yt=(W.isMeshStandardMaterial?B:x).get(W.envMap||gt),Dt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,fe=!!H.morphAttributes.color,ge=ui;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ge=b.toneMapping);let Ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qt=Ce!==void 0?Ce.length:0,At=Pt.get(W),dn=u.state.lights;if(lt===!0&&(bt===!0||S!==y)){let Oe=S===y&&W.id===w;rt.setState(W,S,Oe)}let ne=!1;W.version===At.__version?(At.needsLights&&At.lightsStateVersion!==dn.state.version||At.outputColorSpace!==Tt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==yt||W.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==rt.numPlanes||At.numIntersection!==rt.numIntersection)||At.vertexAlphas!==Dt||At.vertexTangents!==kt||At.morphTargets!==St||At.morphNormals!==te||At.morphColors!==fe||At.toneMapping!==ge||At.morphTargetsCount!==Qt)&&(ne=!0):(ne=!0,At.__version=W.version);let be=At.currentProgram;ne===!0&&(be=rn(W,U,N));let Ze=!1,Fe=!1,Gn=!1,le=be.getUniforms(),$e=At.uniforms;if(It.useProgram(be.program)&&(Ze=!0,Fe=!0,Gn=!0),W.id!==w&&(w=W.id,Fe=!0),Ze||y!==S){It.buffers.depth.getReversed()?(ct.copy(S.projectionMatrix),Ed(ct),Td(ct),le.setValue(F,"projectionMatrix",ct)):le.setValue(F,"projectionMatrix",S.projectionMatrix),le.setValue(F,"viewMatrix",S.matrixWorldInverse);let Sn=le.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,Ft.setFromMatrixPosition(S.matrixWorld)),qt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&le.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Fe=!0,Gn=!0)}if(N.isSkinnedMesh){le.setOptional(F,N,"bindMatrix"),le.setOptional(F,N,"bindMatrixInverse");let Oe=N.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),le.setValue(F,"boneTexture",Oe.boneTexture,T))}N.isBatchedMesh&&(le.setOptional(F,N,"batchingTexture"),le.setValue(F,"batchingTexture",N._matricesTexture,T),le.setOptional(F,N,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",N._indirectTexture,T),le.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",N._colorsTexture,T));let Mn=H.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Nt.update(N,H,be),(Fe||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,le.setValue(F,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&($e.envMap.value=yt,$e.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&($e.envMapIntensity.value=U.environmentIntensity),Fe&&(le.setValue(F,"toneMappingExposure",b.toneMappingExposure),At.needsLights&&sr($e,Gn),at&&W.fog===!0&&ut.refreshFogUniforms($e,at),ut.refreshMaterialUniforms($e,W,Y,st,u.state.transmissionRenderTarget[S.id]),gs.upload(F,xi(At),$e,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(gs.upload(F,xi(At),$e,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&le.setValue(F,"center",N.center),le.setValue(F,"modelViewMatrix",N.modelViewMatrix),le.setValue(F,"normalMatrix",N.normalMatrix),le.setValue(F,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Oe=W.uniformsGroups;for(let Sn=0,bn=Oe.length;Sn<bn;Sn++){let ei=Oe[Sn];D.update(ei,be),D.bind(ei,be)}}return be}function sr(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function yn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,U,H){Pt.get(S.texture).__webglTexture=U,Pt.get(S.depthTexture).__webglTexture=H;let W=Pt.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let H=Pt.get(S);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,H=0){O=S,I=U,P=H;let W=!0,N=null,at=!1,gt=!1;if(S){let yt=Pt.get(S);if(yt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),W=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(yt.__hasExternalTextures)T.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let St=S.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Pt.has(St)&&(S.width!==St.image.width||S.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(gt=!0);let kt=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?N=kt[U][H]:N=kt[U],at=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[H]:N=kt,L.copy(S.viewport),Z.copy(S.scissor),X=S.scissorTest}else L.copy(wt).multiplyScalar(Y).floor(),Z.copy(Xt).multiplyScalar(Y).floor(),X=Kt;if(It.bindFramebuffer(F.FRAMEBUFFER,N)&&W&&It.drawBuffers(S,N),It.viewport(L),It.scissor(Z),It.setScissorTest(X),at){let yt=Pt.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,H)}else if(gt){let yt=Pt.get(S.texture),Dt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,Dt)}w=-1},this.readRenderTargetPixels=function(S,U,H,W,N,at,gt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){It.bindFramebuffer(F.FRAMEBUFFER,Tt);try{let yt=S.texture,Dt=yt.format,kt=yt.type;if(!qt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-W&&H>=0&&H<=S.height-N&&F.readPixels(U,H,W,N,zt.convert(Dt),zt.convert(kt),at)}finally{let yt=O!==null?Pt.get(O).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(S,U,H,W,N,at,gt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){let yt=S.texture,Dt=yt.format,kt=yt.type;if(!qt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-W&&H>=0&&H<=S.height-N){It.bindFramebuffer(F.FRAMEBUFFER,Tt);let St=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.bufferData(F.PIXEL_PACK_BUFFER,at.byteLength,F.STREAM_READ),F.readPixels(U,H,W,N,zt.convert(Dt),zt.convert(kt),0);let te=O!==null?Pt.get(O).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,te);let fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await wd(F,fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,at),F.deleteBuffer(St),F.deleteSync(fe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,H=0){S.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let W=Math.pow(2,-H),N=Math.floor(S.image.width*W),at=Math.floor(S.image.height*W),gt=U!==null?U.x:0,Tt=U!==null?U.y:0;T.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,gt,Tt,N,at),It.unbindTexture()},this.copyTextureToTexture=function(S,U,H=null,W=null,N=0){S.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let at,gt,Tt,yt,Dt,kt,St,te,fe,ge=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(at=H.max.x-H.min.x,gt=H.max.y-H.min.y,Tt=H.isBox3?H.max.z-H.min.z:1,yt=H.min.x,Dt=H.min.y,kt=H.isBox3?H.min.z:0):(at=ge.width,gt=ge.height,Tt=ge.depth||1,yt=0,Dt=0,kt=0),W!==null?(St=W.x,te=W.y,fe=W.z):(St=0,te=0,fe=0);let Ce=zt.convert(U.format),Qt=zt.convert(U.type),At;U.isData3DTexture?(T.setTexture3D(U,0),At=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),At=F.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),At=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let dn=F.getParameter(F.UNPACK_ROW_LENGTH),ne=F.getParameter(F.UNPACK_IMAGE_HEIGHT),be=F.getParameter(F.UNPACK_SKIP_PIXELS),Ze=F.getParameter(F.UNPACK_SKIP_ROWS),Fe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);let Gn=S.isDataArrayTexture||S.isData3DTexture,le=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let $e=Pt.get(S),Mn=Pt.get(U),Oe=Pt.get($e.__renderTarget),Sn=Pt.get(Mn.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,Oe.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let bn=0;bn<Tt;bn++)Gn&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(S).__webglTexture,N,kt+bn),S.isDepthTexture?(le&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.get(U).__webglTexture,N,fe+bn),F.blitFramebuffer(yt,Dt,at,gt,St,te,at,gt,F.DEPTH_BUFFER_BIT,F.NEAREST)):le?F.copyTexSubImage3D(At,N,St,te,fe+bn,yt,Dt,at,gt):F.copyTexSubImage2D(At,N,St,te,fe+bn,yt,Dt,at,gt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(At,N,St,te,fe,at,gt,Tt,Ce,Qt,ge.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(At,N,St,te,fe,at,gt,Tt,Ce,ge.data):F.texSubImage3D(At,N,St,te,fe,at,gt,Tt,Ce,Qt,ge):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,St,te,at,gt,Ce,Qt,ge.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,St,te,ge.width,ge.height,Ce,ge.data):F.texSubImage2D(F.TEXTURE_2D,N,St,te,at,gt,Ce,Qt,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,dn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne),F.pixelStorei(F.UNPACK_SKIP_PIXELS,be),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),N===0&&U.generateMipmaps&&F.generateMipmap(At),It.unbindTexture()},this.copyTextureToTexture3D=function(S,U,H=null,W=null,N=0){return S.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,H,W,N)},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),It.unbindTexture()},this.resetState=function(){I=0,P=0,O=null,It.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Ts=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Qr=class extends hn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Re,h=Re,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rl=class extends Ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jr=new V,to=new V,sh=new oe,Ws=new Wr,Pr=new Ss,ta=new V,rh=new V,ol=class extends gn{constructor(t=new sn,e=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)jr.fromBufferAttribute(e,s-1),to.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jr.distanceTo(to);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,t.ray.intersectsSphere(Pr)===!1)return;sh.copy(s).invert(),Ws.copy(t.ray).applyMatrix4(sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=g,p=_-1;v<p;v+=c){let u=h.getX(v),E=h.getX(v+1),A=Lr(this,t,Ws,l,u,E);A&&e.push(A)}if(this.isLineLoop){let v=h.getX(_-1),p=h.getX(g),u=Lr(this,t,Ws,l,v,p);u&&e.push(u)}}else{let g=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=g,p=_-1;v<p;v+=c){let u=Lr(this,t,Ws,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){let v=Lr(this,t,Ws,l,_-1,g);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(jr.fromBufferAttribute(o,s),to.fromBufferAttribute(o,r),e.distanceSqToSegment(jr,to,ta,rh)>n)return;ta.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ta);if(!(l<t.near||l>t.far))return{distance:l,point:rh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var oh=new V,ah=new V,eo=class extends ol{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)oh.fromBufferAttribute(e,s),ah.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oh.distanceTo(ah);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var no=class i extends sn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,f=new V,g=[],_=[],v=[],p=[];for(let u=0;u<=n;u++){let E=[],A=u/n,b=0;u===0&&o===0?b=.5/e:u===n&&l===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){let I=C/e;d.x=-t*Math.cos(s+I*r)*Math.sin(o+A*a),d.y=t*Math.cos(o+A*a),d.z=t*Math.sin(s+I*r)*Math.sin(o+A*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(I+b,1-A),E.push(c++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){let A=h[u][E+1],b=h[u][E],C=h[u+1][E],I=h[u+1][E+1];(u!==0||o>0)&&g.push(A,b,I),(u!==n-1||l<Math.PI)&&g.push(b,C,I)}this.setIndex(g),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Dr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function M0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var As=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends As{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-n;break;case uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*n-e;break;case uc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),v=_*_,p=v*_,u=-f*p+2*f*v-f*_,E=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*_+1,A=(-1-g)*p+(1.5+g)*v+.5*_,b=g*p-g*v;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+E*o[c+C]+A*o[l+C]+b*o[d+C];return r}},ll=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},cl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&M0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Eo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,g=d+n;for(let _=0;_!==n;++_){let v=e[d+_];if(v!==e[f+_]||v!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let g=0;g!==n;++g)e[f+g]=e[d+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ka;var zi=class extends Un{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=zr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends Un{};hl.prototype.ValueTypeName="color";var ul=class extends Un{};ul.prototype.ValueTypeName="number";var dl=class extends As{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)fi.slerpFlat(r,0,o,c-a,o,c,l);return r}},io=class extends Un{InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Un{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=zr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Un{};fl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let g=c[d],_=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}},S0=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var wl="\\[\\]\\.:\\/",b0=new RegExp("["+wl+"]","g"),El="[^"+wl+"]",w0="[^"+wl.replace("\\.","")+"]",E0=/((?:WC+[\/:])*)/.source.replace("WC",El),T0=/(WCOD+)?/.source.replace("WCOD",w0),A0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),R0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),C0=new RegExp("^"+E0+T0+A0+R0+"$"),I0=["material","materials","bones","map"],gl=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(t){let e=C0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);I0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=gl;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var n_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var jn=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074,2693140,1121589,4333878,1200985,7614249,4797243,10651769,15986557,12456528,16739364,11069230,46403,416437,7685733,16739929,16752001],Vn=32,Cs=256,Ih=["top","side","bottom"],Ne=8,Vi=256,Tl=[4,0,4],i_={colors:Vn,tiles:Cs-1,tileSize:8,vox:Vi,voxSize:Ne,sfx:64,notes:32,patterns:64,mapSide:128,mapBlocks:512*1024,saveBytes:64*1024,screen:256},mi=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6);var Al=(i,t,e)=>i+Ne*(t+Ne*e);function Rl(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}var lo=24,Cl=8*Cs,_n=Math.PI*2;function Oh(){let i=new Uint8Array(lo*Cl),t=new Qr(i,lo,Cl,ro,Ln);return t.magFilter=Re,t.minFilter=Re,t.generateMipmaps=!1,t.flipY=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}function Bh(i,t){let e=i.image.data;e.fill(0);for(let n=1;n<Cs;n++){let s=t[n];s&&Ih.forEach((r,o)=>{let a=s[r];for(let l=0;l<8;l++)for(let c=0;c<8;c++)e[(n*8+(7-l))*lo+o*8+c]=a[l*8+c]&31})}i.needsUpdate=!0}function co(i,t,e,n=[0,0,0],s=null){return{w:i,h:t,d:e,data:s||new Uint8Array(i*t*e),origin:[...n],pos:[0,0,0],angle:[0,0,0],dirty:!0,geometry:null,_m:new oe,_inv:new oe,_rot:new oe,_xfDirty:!0}}var zh=(i,t,e,n)=>t+i.w*(e+i.h*n);function Ks(i,t,e,n){return t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d?0:i.data[zh(i,t,e,n)]}function ho(i,t,e,n,s){t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d||(i.data[zh(i,t,e,n)]=s&255,i.dirty=!0)}var Ph=new Dn;function kh(i,t=new oe){return Ph.set(-i[0]*_n,i[1]*_n,i[2]*_n,"YXZ"),t.makeRotationFromEuler(Ph)}function Is(i){if(!i._xfDirty)return;kh(i.angle,i._rot);let t=new oe().makeTranslation(-i.origin[0],-i.origin[1],-i.origin[2]),e=new oe().makeTranslation(i.pos[0],i.pos[1],i.pos[2]);i._m.copy(e).multiply(i._rot).multiply(t),i._inv.copy(i._m).invert(),i._xfDirty=!1}var Il=[{n:[0,1,0],f:0,v:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,1],[0,0],[1,0],[1,1]]},{n:[0,-1,0],f:2,v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,1],[1,1],[1,0],[0,0]]},{n:[1,0,0],f:1,v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[-1,0,0],f:1,v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],f:1,v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],f:1,v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]}];function P0(i){let{w:t,h:e,d:n,data:s}=i,r=t*e,o=(E,A,b,C,I)=>{switch(I){case 0:return A===e-1||!s[C+t];case 1:return A===0||!s[C-t];case 2:return E===t-1||!s[C+1];case 3:return E===0||!s[C-1];case 4:return b===n-1||!s[C+r];default:return b===0||!s[C-r]}},a=0;for(let E=0,A=0;E<n;E++)for(let b=0;b<e;b++)for(let C=0;C<t;C++,A++)if(s[A])for(let I=0;I<6;I++)o(C,b,E,A,I)&&a++;let l=new Float32Array(a*12),c=new Float32Array(a*8),h=new Float32Array(a*12),d=a*4>65535?new Uint32Array(a*6):new Uint16Array(a*6),f=0,g=0,_=0,v=0,p=0;for(let E=0,A=0;E<n;E++)for(let b=0;b<e;b++)for(let C=0;C<t;C++,A++){let I=s[A];if(I)for(let P=0;P<6;P++){if(!o(C,b,E,A,P))continue;let O=Il[P];for(let w=0;w<4;w++){let y=O.v[w];l[f++]=C+y[0],l[f++]=b+y[1],l[f++]=E+y[2],c[g++]=O.uv[w][0],c[g++]=O.uv[w][1],h[_++]=I,h[_++]=O.f,h[_++]=P+1}d[v++]=p,d[v++]=p+1,d[v++]=p+2,d[v++]=p,d[v++]=p+2,d[v++]=p+3,p+=4}}let u=new sn;return u.setAttribute("position",new He(l,3)),u.setAttribute("aUV",new He(c,2)),u.setAttribute("aTF",new He(h,3)),u.setIndex(new He(d,1)),u.computeBoundingSphere(),u}function Vh(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=P0(i),i.dirty=!1),i.geometry}function L0(i=null,t=Tl,e=""){return{name:e,pivot:[...t],data:i||new Uint8Array(Ne*Ne*Ne),dirty:!0,geometry:null}}function D0(i,t,e,n){return t<0||e<0||n<0||t>=Ne||e>=Ne||n>=Ne?0:i.data[Al(t,e,n)]}function U0(i){let t=[],e=[],n=[],s=0;for(let o=0;o<Ne;o++)for(let a=0;a<Ne;a++)for(let l=0;l<Ne;l++){let c=i.data[Al(l,a,o)];if(c)for(let h=0;h<Il.length;h++){let d=Il[h];if(!D0(i,l+d.n[0],a+d.n[1],o+d.n[2])){for(let f=0;f<4;f++)t.push(l+d.v[f][0],a+d.v[f][1],o+d.v[f][2]),e.push(c-1,h+1);n.push(s,s+1,s+2,s,s+2,s+3),s+=4}}}let r=new sn;return r.setAttribute("position",new Le(t,3)),r.setAttribute("aCD",new Le(e,2)),r.setIndex(new bs(n,1)),r.computeBoundingSphere(),r}function Hh(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=U0(i),i.dirty=!1),i.geometry}var Lh=new oe,Dh=new oe,Uh=new oe,Nh=new oe;function Gh(i,t,e,n,s){return Lh.makeTranslation(-i.pivot[0],-i.pivot[1],-i.pivot[2]),Nh.makeScale(n[0]/Ne,n[1]/Ne,n[2]/Ne),kh(e,Uh),Dh.makeTranslation(t[0],t[1],t[2]),s.copy(Dh).multiply(Uh).multiply(Nh).multiply(Lh)}function Wh(i){let t=new Array(Vi).fill(null);return(i.vox||[]).forEach((e,n)=>{if(!e||n>=Vi)return;let s=e.data?Rl(e.data):null;(!s||s.length!==Ne*Ne*Ne)&&(s=null),t[n]=L0(s,e.pivot||Tl,e.name||"")}),t}function Xh(i){let t={value:Array.from({length:Vn},()=>new V)};return Ll(t,i),t}function Ll(i,t){for(let e=0;e<Vn;e++){let n=(t[e]??0)>>>0;i.value[e].set((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)}}var Qs=()=>Array.from({length:Vn},(i,t)=>t),Ps=()=>new Array(Vn).fill(0),qh=`
  float bayer4(vec2 p) {
    const float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
    ivec2 q = ivec2(mod(p, 4.0));
    return (m[q.x + 4 * q.y] + 0.5) / 16.0;
  }
`,Dl=`
  uniform vec3 uPalette[32];
  uniform float uRemap[32];
  uniform float uTrans[32];
  uniform float uOutline;   // outline palette index for this draw, or -1 for none
  uniform float uId;        // draw id, unique within a frame (1..65535)
  uniform float uInner;     // 1: outline inner edges too (creases, overlaps); 0: outer outline only
  uniform vec4 uFog;        // fog(): palette index, near, far, on (1) / off (0)
  uniform float uPix;       // render pixels per screen pixel (1, 2 or 3), so the dither stays 256-chunky
  varying vec3 vFogPos;     // this pixel's position from the camera, for its distance
  layout(location = 0) out highp vec4 outColor;
  layout(location = 1) out highp vec4 outInfo;   // read by the outline pass
  vec3 palColor(int idx) {
    if (uTrans[idx] > 0.5) discard;          // palt applies to the original index
    return uPalette[int(uRemap[idx] + 0.5)];  // then pal() remap, then the real color
  }
  // dir: which way a map face points (1-6), or 0 for primitives. A draw with outline(c, false)
  // writes 7 instead: the outline pass then draws no lines inside it, only around it.
  ${qh}
  void writePixel(vec3 c, float dir) {
    float oc = uOutline;
    float d = uInner > 0.5 ? dir : 7.0;
    // fog: from near to far, more and more of the pixels (in a fixed dither pattern) take the fog
    // color. A fogged pixel casts no outline and makes no crease, so far shapes fade out whole.
    if (uFog.w > 0.5) {
      float t = (length(vFogPos) - uFog.y) / max(uFog.z - uFog.y, 0.0001);
      if (t > bayer4(floor(gl_FragCoord.xy / uPix))) { c = uPalette[int(uFog.x + 0.5)]; oc = -1.0; d = 0.0; }
    }
    outColor = vec4(c, 1.0);
    outInfo = vec4((oc + 1.0) / 255.0, mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, d / 255.0);
  }
`,Ul=i=>({uPalette:i,uRemap:{value:Qs()},uTrans:{value:Ps()},uOutline:{value:-1},uId:{value:1},uInner:{value:1},uFog:{value:new ye(0,0,0,0)},uPix:{value:1}});function Yh(i,t){return new Ve({glslVersion:kn,uniforms:{uAtlas:{value:i},...Ul(t)},vertexShader:`
      attribute vec2 aUV;
      attribute vec3 aTF;
      varying vec2 vUV;
      varying vec3 vTF;
      varying vec3 vFogPos;
      void main() {
        vUV = aUV; vTF = aTF;
        vFogPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uAtlas;
      ${Dl}
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${lo.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${Cl.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx), floor(vTF.z + 0.5));
      }`})}function Nl(i){return new Ve({glslVersion:kn,uniforms:{uColor:{value:7},...Ul(i)},vertexShader:`
      varying vec3 vFogPos;
      void main() {
        vFogPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);   // as before fog, so games without it render the same
      }`,fragmentShader:`
      uniform float uColor;
      ${Dl}
      void main() { writePixel(palColor(int(uColor + 0.5)), 0.0); }`})}function Zh(i){return new Ve({glslVersion:kn,uniforms:Ul(i),vertexShader:`
      attribute vec2 aCD;
      varying vec2 vCD;
      varying vec3 vFogPos;
      void main() {
        vCD = aCD;
        vFogPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${Dl}
      varying vec2 vCD;
      void main() { writePixel(palColor(int(vCD.x + 0.5)), floor(vCD.y + 0.5)); }`})}function $h(i){let t=new Ve({glslVersion:kn,depthTest:!1,depthWrite:!1,uniforms:{uPalette:i,uSky:{value:new he(0,0)},uPix:{value:1}},vertexShader:`
      varying vec3 vRay;
      varying vec3 vUp;
      void main() {
        vRay = vec3(position.x / projectionMatrix[0][0], position.y / projectionMatrix[1][1], -1.0);   // view space
        vUp = (viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz;                                         // world up, in view space
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }`,fragmentShader:`
      uniform vec3 uPalette[32];
      uniform vec2 uSky;    // sky, horizon (palette indices)
      uniform float uPix;   // render pixels per screen pixel
      varying vec3 vRay;
      varying vec3 vUp;
      layout(location = 0) out highp vec4 outColor;
      layout(location = 1) out highp vec4 outInfo;
      ${qh}
      void main() {
        float t = clamp(dot(normalize(vRay), normalize(vUp)) / 0.7071, 0.0, 1.0);
        int c = t > bayer4(floor(gl_FragCoord.xy / uPix)) ? int(uSky.x + 0.5) : int(uSky.y + 0.5);
        outColor = vec4(uPalette[c], 1.0);
        outInfo = vec4(0.0);   // no outline, no draw
      }`}),e=new ke(new Bi(2,2),t);return e.frustumCulled=!1,e.renderOrder=-1e9,e.visible=!1,e}function Fl(i){return new mn(i,i,{count:2,minFilter:Re,magFilter:Re,generateMipmaps:!1,depthTexture:new Es(i,i)})}function Jh(i,t){let e=new Ve({glslVersion:kn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:i.textures[0]},tInfo:{value:i.textures[1]},tDepth:{value:i.depthTexture},uPalette:t,uNear:{value:.05},uFar:{value:2e3},uAny:{value:0},uMode:{value:0},uRect:{value:new ye(0,0,1e5,1e5)}},vertexShader:`
      void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      precision highp float;
      uniform sampler2D tColor;
      uniform sampler2D tInfo;
      uniform sampler2D tDepth;
      uniform vec3 uPalette[32];
      uniform float uNear;
      uniform float uFar;
      uniform int uAny;
      uniform int uMode;   // 0: paint outlines directly (1x); 1: write the edge mask for growing (2x, 3x)
      uniform vec4 uRect;  // x0, y0, x1, y1 of the view (clip), so lookups never cross into another view
      layout(location = 0) out highp vec4 outColor;

      // depth-buffer value to distance from the camera
      float linZ(float d) { return uNear * uFar / (uFar - d * (uFar - uNear)); }
      float faceDir(vec4 i) { return floor(i.a * 255.0 + 0.5); }
      float drawId(vec4 i) { return floor(i.g * 255.0 + 0.5) + 256.0 * floor(i.b * 255.0 + 0.5); }

      ivec2 size;
      vec4 iP; float zP, idP, fP; bool drawnP;
      int best; float bestZ, bestId, bestKind;

      // Lookups outside the screen or the view clamp to its edge pixel, which compares as "same
      // surface": no outline along the edge of a view.
      ivec2 clampQ(ivec2 q) { return clamp(q, max(ivec2(0), ivec2(uRect.xy)), min(size - 1, ivec2(uRect.zw))); }

      void check(ivec2 dir) {
        ivec2 q = clampQ(ivec2(gl_FragCoord.xy) + dir);
        float dN = texelFetch(tDepth, q, 0).r;
        if (dN >= 1.0) return;                          // neighbor is background
        vec4 iN = texelFetch(tInfo, q, 0);
        float oc = floor(iN.r * 255.0 + 0.5) - 1.0;
        if (oc < 0.0) return;                           // neighbor has no outline
        float zN = linZ(dN);
        bool edge;
        float kind = 1.0;                               // 1: over something else, 2: depth jump in one draw, 3: crease
        if (!drawnP) {
          edge = true;                                  // background next to an outlined draw
        } else if (drawId(iN) != idP) {
          edge = zN < zP - 0.002 * zP;                  // a different draw, in front of this pixel
        } else if (faceDir(iN) > 6.5) {
          edge = false;                                 // outline(c, false): no lines inside one draw
        } else if (fP > 0.0 && faceDir(iN) > 0.0 && fP != faceDir(iN)) {
          kind = 3.0;
          // Same map, faces pointing different ways: a crease (a box's corner edges, the foot of
          // a pillar). Only the pixel with the larger direction index takes the line, so it stays
          // 1 pixel wide.
          edge = fP > faceDir(iN);
        } else if (zN < zP) {
          kind = 2.0;
          // Same draw: extend the neighbor's surface one more pixel (1/z is linear across a flat
          // face) and check whether this pixel lies well behind it (the rim of a divot).
          ivec2 q2 = clampQ(q + dir);
          float d2 = texelFetch(tDepth, q2, 0).r;
          if (q2 != q && d2 < 1.0 && drawId(texelFetch(tInfo, q2, 0)) == idP) {
            float pred = 2.0 / zN - 1.0 / linZ(d2);
            edge = pred > 0.0 && zP - 1.0 / pred > 0.25 + 0.03 * zP;
          } else {
            edge = zP - zN > 0.5 + 0.05 * zP;
          }
        } else {
          edge = false;
        }
        if (edge && zN < bestZ) { bestZ = zN; best = int(oc); bestId = drawId(iN); bestKind = kind; }
      }

      void main() {
        ivec2 p = ivec2(gl_FragCoord.xy);
        outColor = uMode == 1 ? vec4(0.0) : vec4(texelFetch(tColor, p, 0).rgb, 1.0);
        if (uAny == 0) return;   // no outlined draws this frame: plain copy (or an empty mask)

        size = textureSize(tInfo, 0);
        float dP = texelFetch(tDepth, p, 0).r;
        drawnP = dP < 1.0;      // the depth buffer still holds its cleared value where nothing was drawn
        iP = texelFetch(tInfo, p, 0);
        zP = drawnP ? linZ(dP) : 1e9;
        idP = drawnP ? drawId(iP) : -1.0;
        fP = faceDir(iP);
        best = -1;
        bestZ = 1e9; bestId = 0.0; bestKind = 0.0;
        check(ivec2(1, 0));
        check(ivec2(-1, 0));
        check(ivec2(0, 1));
        check(ivec2(0, -1));
        if (best < 0) return;
        // mask: outline color + 1, the outlined (front) surface's distance, its draw id, the edge kind
        if (uMode == 1) outColor = vec4(float(best) + 1.0, bestZ, bestId, bestKind);
        else outColor = vec4(uPalette[best], 1.0);
      }`});return{scene:Pl(e),camera:new Oi,uniforms:e.uniforms}}function Ol(i){return new mn(i,i,{type:Pn,format:cn,minFilter:Re,magFilter:Re,generateMipmaps:!1,depthBuffer:!1})}function Pl(i){let t=new ke(new Bi(2,2),i);t.frustumCulled=!1;let e=new Ts;return e.add(t),e}var Fh="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function Kh(i){let t=new Ve({glslVersion:kn,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:null},uDir:{value:new he(1,0)},uR:{value:1},uRect:{value:new ye(0,0,1e5,1e5)}},vertexShader:Fh,fragmentShader:`
      precision highp float;
      uniform sampler2D tMask;
      uniform vec2 uDir;
      uniform int uR;
      uniform vec4 uRect;   // the view (clip): growing stops at its edge
      layout(location = 0) out highp vec4 outColor;
      void main() {
        ivec2 p = ivec2(gl_FragCoord.xy), size = textureSize(tMask, 0);
        vec4 best = vec4(0.0);
        for (int d = -2; d <= 2; d++) {
          if (d < -uR || d > uR) continue;
          vec4 m = texelFetch(tMask, clamp(p + ivec2(uDir) * d, max(ivec2(0), ivec2(uRect.xy)), min(size - 1, ivec2(uRect.zw))), 0);
          if (m.r < 0.5) continue;
          if (m.a > 2.5 && d > 0) continue;               // creases only grow toward +x / +y
          if (best.r < 0.5 || m.g < best.g) best = m;     // nearest outlined surface wins
        }
        outColor = best;
      }`}),e=new Ve({glslVersion:kn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},tMask:{value:null},uPalette:i,uNear:{value:.05},uFar:{value:2e3}},vertexShader:Fh,fragmentShader:`
      precision highp float;
      uniform sampler2D tColor;
      uniform sampler2D tInfo;
      uniform sampler2D tDepth;
      uniform sampler2D tMask;
      uniform vec3 uPalette[32];
      uniform float uNear;
      uniform float uFar;
      layout(location = 0) out highp vec4 outColor;
      float linZ(float d) { return uNear * uFar / (uFar - d * (uFar - uNear)); }
      float drawId(vec4 i) { return floor(i.g * 255.0 + 0.5) + 256.0 * floor(i.b * 255.0 + 0.5); }
      void main() {
        ivec2 p = ivec2(gl_FragCoord.xy);
        outColor = vec4(texelFetch(tColor, p, 0).rgb, 1.0);
        vec4 m = texelFetch(tMask, p, 0);
        if (m.r < 0.5) return;
        float d = texelFetch(tDepth, p, 0).r;
        bool ok;
        if (d >= 1.0) ok = m.a < 2.5;                     // background: silhouettes only
        else {
          float z = linZ(d), id = drawId(texelFetch(tInfo, p, 0));
          bool same = abs(id - m.b) < 0.5;
          if (m.a > 2.5) ok = same;
          else if (m.a > 1.5) ok = same ? z > m.g + 0.05 + 0.005 * z : z > m.g * 1.002;   // behind the rim
          else ok = !same && z > m.g * 1.002;
        }
        if (ok) outColor = vec4(uPalette[int(m.r - 0.5)], 1.0);
      }`});return{growScene:Pl(t),grow:t.uniforms,paintScene:Pl(e),paint:e.uniforms,camera:new Oi}}function Qh(i,t){jt.enabled=!1;let e;try{e=new Kr({canvas:i,antialias:!1,preserveDrawingBuffer:!0})}catch(n){let s=typeof WebGL2RenderingContext>"u"?"This browser has no WebGL 2, which BLOCKO3D needs. Try updating it.":"This browser would not start 3D graphics (WebGL 2). Try closing other tabs and reloading, restarting the browser, or updating it. On iPhone and iPad, Lockdown Mode turns WebGL off.";throw new Error(s+" ("+(n&&n.message||n)+")")}return e.outputColorSpace=pi,e.setPixelRatio(1),t&&e.setSize(t,t,!1),e}function uo(i){return(i.maps||[]).map(t=>{let e=t.data?Rl(t.data):null,n=co(t.w,t.h,t.d,t.origin||[0,0,0],e&&e.length===t.w*t.h*t.d?e:null);return n.name=t.name||"",n})}function jh(i){let t=new Array(Cs).fill(null);return(i.tiles||[]).forEach((e,n)=>{n>0&&n<Cs&&e&&(t[n]=e)}),t}var N0=`
A
.###.
#...#
#...#
#####
#...#
#...#
#...#

B
####.
#...#
#...#
####.
#...#
#...#
####.

C
.###.
#...#
#....
#....
#....
#...#
.###.

D
####.
#...#
#...#
#...#
#...#
#...#
####.

E
#####
#....
#....
####.
#....
#....
#####

F
#####
#....
#....
####.
#....
#....
#....

G
.###.
#...#
#....
#.###
#...#
#...#
.####

H
#...#
#...#
#...#
#####
#...#
#...#
#...#

I
.###.
..#..
..#..
..#..
..#..
..#..
.###.

J
..###
...#.
...#.
...#.
...#.
#..#.
.##..

K
#...#
#..#.
#.#..
##...
#.#..
#..#.
#...#

L
#....
#....
#....
#....
#....
#....
#####

M
#...#
##.##
#.#.#
#.#.#
#...#
#...#
#...#

N
#...#
#...#
##..#
#.#.#
#..##
#...#
#...#

O
.###.
#...#
#...#
#...#
#...#
#...#
.###.

P
####.
#...#
#...#
####.
#....
#....
#....

Q
.###.
#...#
#...#
#...#
#.#.#
#..#.
.##.#

R
####.
#...#
#...#
####.
#.#..
#..#.
#...#

S
.####
#....
#....
.###.
....#
....#
####.

T
#####
..#..
..#..
..#..
..#..
..#..
..#..

U
#...#
#...#
#...#
#...#
#...#
#...#
.###.

V
#...#
#...#
#...#
#...#
#...#
.#.#.
..#..

W
#...#
#...#
#...#
#.#.#
#.#.#
#.#.#
.#.#.

X
#...#
#...#
.#.#.
..#..
.#.#.
#...#
#...#

Y
#...#
#...#
.#.#.
..#..
..#..
..#..
..#..

Z
#####
....#
...#.
..#..
.#...
#....
#####

a
.....
.....
.###.
....#
.####
#...#
.####

b
#....
#....
####.
#...#
#...#
#...#
####.

c
.....
.....
.###.
#....
#....
#....
.###.

d
....#
....#
.####
#...#
#...#
#...#
.####

e
.....
.....
.###.
#...#
#####
#....
.###.

f
..##.
.#...
####.
.#...
.#...
.#...
.#...

g
.....
.....
.####
#...#
#...#
#...#
.####
....#
.###.

h
#....
#....
####.
#...#
#...#
#...#
#...#

i
..#..
.....
.##..
..#..
..#..
..#..
.###.

j
...#.
.....
..##.
...#.
...#.
...#.
...#.
#..#.
.##..

k
#....
#....
#..#.
#.#..
##...
#.#..
#..#.

l
.##..
..#..
..#..
..#..
..#..
..#..
.###.

m
.....
.....
##.#.
#.#.#
#.#.#
#.#.#
#...#

n
.....
.....
####.
#...#
#...#
#...#
#...#

o
.....
.....
.###.
#...#
#...#
#...#
.###.

p
.....
.....
####.
#...#
#...#
#...#
####.
#....
#....

q
.....
.....
.####
#...#
#...#
#...#
.####
....#
....#

r
.....
.....
#.##.
##..#
#....
#....
#....

s
.....
.....
.####
#....
.###.
....#
####.

t
.#...
.#...
####.
.#...
.#...
.#..#
..##.

u
.....
.....
#...#
#...#
#...#
#...#
.####

v
.....
.....
#...#
#...#
#...#
.#.#.
..#..

w
.....
.....
#...#
#...#
#.#.#
#.#.#
.#.#.

x
.....
.....
#...#
.#.#.
..#..
.#.#.
#...#

y
.....
.....
#...#
#...#
#...#
#...#
.####
....#
.###.

z
.....
.....
#####
...#.
..#..
.#...
#####

0
.###.
#...#
#..##
#.#.#
##..#
#...#
.###.

1
..#..
.##..
..#..
..#..
..#..
..#..
.###.

2
.###.
#...#
....#
...#.
..#..
.#...
#####

3
#####
...#.
..#..
...#.
....#
#...#
.###.

4
...#.
..##.
.#.#.
#..#.
#####
...#.
...#.

5
#####
#....
####.
....#
....#
#...#
.###.

6
..##.
.#...
#....
####.
#...#
#...#
.###.

7
#####
....#
...#.
..#..
.#...
.#...
.#...

8
.###.
#...#
#...#
.###.
#...#
#...#
.###.

9
.###.
#...#
#...#
.####
....#
...#.
.##..

space
.....

!
..#..
..#..
..#..
..#..
..#..
.....
..#..

"
.#.#.
.#.#.
.#.#.

#
.#.#.
.#.#.
#####
.#.#.
#####
.#.#.
.#.#.

$
..#..
.####
#.#..
.###.
..#.#
####.
..#..

%
##...
##..#
...#.
..#..
.#...
#..##
...##

&
.##..
#..#.
#.#..
.#...
#.#.#
#..#.
.##.#

'
..#..
..#..
.#...

(
...#.
..#..
.#...
.#...
.#...
..#..
...#.

)
.#...
..#..
...#.
...#.
...#.
..#..
.#...

*
.....
..#..
#.#.#
.###.
#.#.#
..#..

+
.....
..#..
..#..
#####
..#..
..#..

,
.....
.....
.....
.....
.....
.##..
..#..
.#...

-
.....
.....
.....
#####

.
.....
.....
.....
.....
.....
.##..
.##..

/
....#
....#
...#.
..#..
.#...
#....
#....

:
.....
.##..
.##..
.....
.##..
.##..

;
.....
.##..
.##..
.....
.##..
..#..
.#...

<
...#.
..#..
.#...
#....
.#...
..#..
...#.

=
.....
.....
#####
.....
#####

>
.#...
..#..
...#.
....#
...#.
..#..
.#...

?
.###.
#...#
....#
...#.
..#..
.....
..#..

@
.###.
#...#
#.###
#.#.#
#.###
#....
.###.

[
.###.
.#...
.#...
.#...
.#...
.#...
.###.

\\
#....
#....
.#...
..#..
...#.
....#
....#

]
.###.
...#.
...#.
...#.
...#.
...#.
.###.

^
..#..
.#.#.
#...#

_
.....
.....
.....
.....
.....
.....
.....
#####

\`
.#...
..#..

{
...##
..#..
..#..
.#...
..#..
..#..
...##

|
..#..
..#..
..#..
..#..
..#..
..#..
..#..

}
##...
..#..
..#..
...#.
..#..
..#..
##...

~
.....
.....
.#...
#.#.#
...#.
`,Bl=new Map;for(let i of N0.trim().split(/\n\s*\n/)){let[t,...e]=i.split(`
`),n=t==="space"?" ":t,s=[];e.forEach((r,o)=>[...r].forEach((a,l)=>{a==="#"&&s.push([l,o])})),Bl.set(n,s)}function Ls(i,t=1){return Math.max(...String(i).split(`
`).map(e=>[...e].length))*7*t}function eu(i,t,e,n,s=128,r=200){let o=String(t||"game").split(/\s+/).filter(Boolean);for(let a=4;a>=1;a--){let l=[];for(let d of o){let f=l[l.length-1];f!==void 0&&[...f+" "+d].length*7*a<=240?l[l.length-1]=f+" "+d:l.push(d)}if(!(l.every(d=>[...d].length*7*a<=240)&&l.length*10*a<=r)&&a>1)continue;let h=s-(l.length*10*a>>1);l.forEach((d,f)=>gi(i,d,256-[...d].length*7*a>>1,h+f*10*a,e,n,a,a));return}}function tu(i,t,e,n,s,r){let o=t,a=e;for(let l of String(i)){if(l===`
`){o=t,a+=10*s;continue}let c=Bl.get(l)||Bl.get("?");for(let[h,d]of c)r(o+(1+h)*n,a+(1+d)*s);o+=7*n}}var F0=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function gi(i,t,e,n,s,r=null,o=1,a=1){r&&(i.fillStyle=r,tu(t,e,n,o,a,(c,h)=>{for(let[d,f]of F0)i.fillRect(c+d*o,h+f*a,o,a)})),i.fillStyle=s,tu(t,e,n,o,a,(c,h)=>i.fillRect(c,h,o,a));let l=String(t).split(`
`);return e+[...l[l.length-1]].length*7*o}function O0(){return{speed:16,loopStart:0,loopEnd:0,notes:Array.from({length:32},()=>({pitch:24,wave:0,vol:0,fx:0}))}}var ti=(i,t)=>(i>>>0).toString(16).padStart(t,"0").slice(-t);function nu(i){let t=ti(i.speed,2)+ti(i.loopStart,2)+ti(i.loopEnd,2);for(let e of i.notes)t+=ti(e.pitch&63,2)+ti(e.wave&7,1)+ti(e.vol&7,1)+ti(e.fx&7,1);return t}function po(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{166}$/.test(t))return null;let e=(s,r)=>parseInt(t.substr(s,r),16),n={speed:Math.max(1,e(0,2)),loopStart:Math.min(32,e(2,2)),loopEnd:Math.min(32,e(4,2)),notes:[]};for(let s=0;s<32;s++){let r=6+s*5;n.notes.push({pitch:e(r,2)&63,wave:e(r+2,1)&7,vol:e(r+3,1)&7,fx:e(r+4,1)&7})}return n}var f_=nu(O0());var B0=i=>440*Math.pow(2,(i-33)/12),Ds=i=>i.speed/120,js=i=>i<.5?i*4-1:3-i*4;function z0(i,t,e){switch(i){case 0:return js(t);case 1:return t<.875?t/.875*2-1:1-(t-.875)/.125*2;case 2:return t*2-1;case 3:return t<.5?.7:-.7;case 4:return t<.3?.7:-.7;case 5:return(js(t)+js(t*2%1)*.5)*.67;case 7:return(js(t)+js(e))*.5;default:return 0}}function k0(i,t=0,e=32){let n=[];for(let s=t;s<e;s++)n.push(s);return iu(i,n)}function iu(i,t){let e=Math.max(1,Math.round(Ds(i)*22050)),n=new Float32Array(e*t.length),s=0,r=0,o=0,a=0,l=0,c={pitch:0,wave:0,vol:0,fx:0};for(let h=0;h<t.length;h++){let d=t[h],f=d>=0?i.notes[d]:c,g=h>0&&t[h-1]>=0?i.notes[t[h-1]]:f,_=d>=0?d-d%4:0,v=i.notes.slice(_,_+4);for(let p=0;p<e;p++){let u=p/e,E=(h*e+p)/22050,A=f.pitch,b=f.vol/7;switch(f.fx){case 1:A=g.pitch+(f.pitch-g.pitch)*u,b=(g.vol+(f.vol-g.vol)*u)/7;break;case 2:A+=Math.sin(E*Math.PI*2*7)*.5;break;case 3:A=f.pitch*(1-u);break;case 4:b*=u;break;case 5:b*=1-u;break;case 6:case 7:{let P=Math.floor(E*(f.fx===6?30:15))%4;A=v[P].pitch;break}}let C=B0(A);s=(s+C/22050)%1,r=(r+C*1.006/22050)%1;let I;f.wave===6?(l+=C*8/22050,l>=1&&(l%=1,a=Math.random()*2-1),I=a*.7):I=z0(f.wave,s,r),o+=(b-o)*.02,n[h*e+p]=I*o*.35}}return n}function V0(i){if(i.loopEnd>i.loopStart)return[0,i.loopEnd];let t=0;return i.notes.forEach((e,n)=>{e.vol>0&&(t=n+1)}),[0,t]}var tr=64,su=64;function H0(i){let t=(i.loopStart?1:0)|(i.loopBack?2:0)|(i.stop?4:0);return ti(t,1)+i.ch.map(e=>ti(e>=0&&e<64?e:su,2)).join("")}function ru(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{9}$/.test(t))return null;let e=parseInt(t[0],16),n=[0,1,2,3].map(s=>{let r=parseInt(t.substr(1+s*2,2),16);return r<64?r:su});return{loopStart:!!(e&1),loopBack:!!(e&2),stop:!!(e&4),ch:n}}var zl=i=>!i||i.ch.every(t=>t>=64),ou=i=>i.loopEnd>i.loopStart;function au(i,t){let e=0,n=0;for(let s of i.ch){let r=s<64?t[s]:null;if(!r)continue;let o=32*Ds(r);n||(n=o),ou(r)||(e=Math.max(e,o))}return e||n}function G0(i,t){let e=[];for(let n=0;e.length<t;n++)ou(i)&&n>=i.loopEnd&&(n=i.loopStart),e.push(n<32?n:-1);return e}function W0(i,t){let e=au(i,t),n=Math.round(e*22050),s=new Float32Array(Math.max(1,n));for(let r of i.ch){let o=r<64?t[r]:null;if(!o)continue;let a=iu(o,G0(o,Math.ceil(e/Ds(o))));for(let l=0;l<n&&l<a.length;l++)s[l]+=a[l]*.8}return s}function X0(i,t,e){let n=i[t];if(!n||n.stop)return-1;if(n.loopBack){for(let r=t;r>=0;r--)if(i[r]&&i[r].loopStart)return r;return e}let s=t+1;return s<tr&&!zl(i[s])?s:-1}var fo=class{constructor(){this.ctx=null,this.channels=Array.from({length:4},()=>null),this.cache=new Map,this.volume=1,this.muted=!1,this.held=!1}setMuted(t){this.muted=!!t,this.gain&&(this.gain.gain.value=this.muted?0:1)}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.gain.gain.value=this.muted?0:1}if(this.held){this.suspend();return}this.wake()}wake(){this.ctx.state!=="running"&&this.ctx.state!=="closed"?this.ctx.resume().then(()=>{this.held?this.ctx.suspend():this.startPendingMusic()}):this.pendingMusic&&this.startPendingMusic()}get ready(){return!!this.ctx&&this.ctx.state==="running"}buffer(t,e,n,s){let r=t+"|"+n+"|"+s,o=this.cache.get(r);if(!o){let a=k0(e,n,s);o=this.ctx.createBuffer(1,Math.max(1,a.length),22050),o.copyToChannel(a,0),this.cache.set(r,o),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}return o}play(t,e=-1,n=0,s=32){let r=po(t);if(!r||!this.ready)return-1;let[o,a]=V0(r);if(o=Math.max(o,n|0),s<32&&(a=Math.min(a,o+Math.max(0,s|0))),a<=o)return-1;(e<0||e>=4)&&(e=this.freeChannel()),this.stop(e);let l=this.ctx.createBufferSource();l.buffer=this.buffer(t,r,o,a);let c=r.loopEnd>r.loopStart&&r.loopEnd>o&&s>=32;c&&(l.loop=!0,l.loopStart=Math.max(0,r.loopStart-o)*Ds(r),l.loopEnd=(r.loopEnd-o)*Ds(r)),l.connect(this.gain),l.start();let h={src:l,started:this.ctx.currentTime,sfx:r,from:o,loops:c,done:!1};return l.onended=()=>{h.done=!0,this.channels[e]===h&&(this.channels[e]=null)},this.channels[e]=h,e}freeChannel(){let t=0,e=1/0;for(let n=0;n<4;n++){let s=this.channels[n];if(!s)return n;s.started<e&&(e=s.started,t=n)}return t}stop(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];if(n)try{n.src.stop()}catch{}this.channels[e]=null}}release(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];n&&(n.src.loop=!1)}}noteAt(t){let e=this.channels[t];if(!e||!this.ctx)return-1;let n=Ds(e.sfx),s=(this.ctx.currentTime-e.started)/n;if(e.loops){let r=e.sfx.loopStart-e.from,o=e.sfx.loopEnd-e.sfx.loopStart;s>=e.sfx.loopEnd-e.from&&(s=r+(s-r)%o)}return e.from+Math.floor(s)}music(t,e,n,s=0){this.musicStop(),!(n<0)&&(this.pendingMusic={getPatterns:t,getSounds:e,n,fadeMs:s},this.ready&&this.startPendingMusic())}startPendingMusic(){let t=this.pendingMusic;if(this.pendingMusic=null,!t||!this.ready)return;let e=t.getPatterns();if(zl(e[t.n]))return;let n=this.ctx.createGain();n.connect(this.gain);let s=this.ctx.currentTime;t.fadeMs>0&&(n.gain.setValueAtTime(0,s),n.gain.linearRampToValueAtTime(1,s+t.fadeMs/1e3));let r={...t,gain:n,cur:t.n,start:t.n,time:s+.05,sources:[],timeline:[]};this.song=r;let o=()=>{if(this.song!==r)return;let a=r.getPatterns(),l=r.getSounds();for(;r.cur>=0&&r.time<this.ctx.currentTime+.4;){let c=a[r.cur],h=zl(c)?0:au(c,l);if(!h){r.cur=-1;break}let d="p"+H0(c)+c.ch.map(_=>l[_]?nu(l[_]):"").join("|"),f=this.cache.get(d);if(!f){let _=W0(c,l);f=this.ctx.createBuffer(1,_.length,22050),f.copyToChannel(_,0),this.cache.set(d,f),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}let g=this.ctx.createBufferSource();g.buffer=f,g.connect(r.gain),g.start(r.time),r.sources.push(g),r.sources.length>8&&r.sources.shift(),r.timeline.push({time:r.time,pattern:r.cur,secs:h}),r.timeline.length>8&&r.timeline.shift(),r.time+=h,r.cur=X0(a,r.cur,r.start)}if(r.cur<0&&this.ctx.currentTime>r.time){this.musicStop();return}r.timer=setTimeout(o,100)};o()}musicStop(t=0){this.pendingMusic=null;let e=this.song;if(!e)return;this.song=null,clearTimeout(e.timer);let n=this.ctx.currentTime+t/1e3;t>0&&(e.gain.gain.setValueAtTime(e.gain.gain.value,this.ctx.currentTime),e.gain.gain.linearRampToValueAtTime(0,n));for(let s of e.sources)try{s.stop(n)}catch{}}musicPosition(){let t=this.song;if(!t||!this.ctx)return null;let e=this.ctx.currentTime;for(let n=t.timeline.length-1;n>=0;n--){let s=t.timeline[n];if(e>=s.time)return e<s.time+s.secs?{pattern:s.pattern,frac:(e-s.time)/s.secs}:null}return null}suspend(){this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.held=!1,this.ctx&&this.wake()}};var mo=class{constructor(t,e,n){this.w=t,this.h=e,this.out=new kl,this.prev=null,this.pending=null;let s=Math.max(2,n.length+1);this.bits=Math.max(1,Math.ceil(Math.log2(Math.min(256,s)))),this.trans=n.length<256?n.length:-1;let r=this.out;r.str("GIF89a"),r.u16(t),r.u16(e),r.byte(128|this.bits-1<<4|this.bits-1),r.byte(0),r.byte(0);for(let o=0;o<1<<this.bits;o++){let a=n[o]||0;r.byte(a>>16&255),r.byte(a>>8&255),r.byte(a&255)}r.byte(33),r.byte(255),r.byte(11),r.str("NETSCAPE2.0"),r.byte(3),r.byte(1),r.u16(0),r.byte(0),this.lzw=new Vl}add(t,e){let{w:n,h:s,prev:r}=this;if(!r){this.pending={x:0,y:0,w:n,h:s,px:t.slice(),delay:e,trans:!1},this.prev=t.slice();return}let o=n,a=s,l=-1,c=-1;for(let _=0;_<s;_++){let v=_*n,p=-1,u=-1;for(let E=0;E<n;E++)t[v+E]!==r[v+E]&&(p<0&&(p=E),u=E);p>=0&&(p<o&&(o=p),u>l&&(l=u),_<a&&(a=_),c=_)}if(l<0){this.pending.delay+=e;return}this.flush();let h=l-o+1,d=c-a+1,f=new Uint8Array(h*d),g=this.trans;for(let _=0;_<d;_++){let v=(a+_)*n+o;for(let p=0;p<h;p++){let u=t[v+p];f[_*h+p]=g>=0&&u===r[v+p]?g:u,r[v+p]=u}}this.pending={x:o,y:a,w:h,h:d,px:f,delay:e,trans:g>=0}}flush(){let t=this.pending,e=this.out;t&&(this.pending=null,e.byte(33),e.byte(249),e.byte(4),e.byte(4|(t.trans?1:0)),e.u16(Math.max(2,Math.min(65535,Math.round(t.delay)))),e.byte(t.trans?this.trans:0),e.byte(0),e.byte(44),e.u16(t.x),e.u16(t.y),e.u16(t.w),e.u16(t.h),e.byte(0),this.lzw.encode(t.px,Math.max(2,this.bits),e))}finish(){return this.flush(),this.out.byte(59),this.out.bytes()}},kl=class{constructor(){this.buf=new Uint8Array(65536),this.n=0}byte(t){if(this.n===this.buf.length){let e=new Uint8Array(this.buf.length*2);e.set(this.buf),this.buf=e}this.buf[this.n++]=t}u16(t){this.byte(t&255),this.byte(t>>8&255)}str(t){for(let e=0;e<t.length;e++)this.byte(t.charCodeAt(e))}bytes(){return this.buf.slice(0,this.n)}},Vl=class{constructor(){this.codes=new Int16Array(4096*256),this.stamp=new Int32Array(4096*256),this.gen=0}encode(t,e,n){let{codes:s,stamp:r}=this,o=1<<e,a=o+1,l=e+1,c=a+1,h=++this.gen,d=0,f=0,g=new Uint8Array(255),_=0;n.byte(e);let v=E=>{if(g[_++]=E,_===255){n.byte(255);for(let A=0;A<255;A++)n.byte(g[A]);_=0}},p=E=>{for(d|=E<<f,f+=l;f>=8;)v(d&255),d>>>=8,f-=8};p(o);let u=t[0];for(let E=1;E<t.length;E++){let A=t[E],b=u<<8|A;if(r[b]===h){u=s[b];continue}p(u),c===4096?(p(o),h=++this.gen,c=a+1,l=e+1):(c>=1<<l&&l++,r[b]=h,s[b]=c++),u=A}if(p(u),p(a),f>0&&v(d&255),_){n.byte(_);for(let E=0;E<_;E++)n.byte(g[E])}n.byte(0)}};var Bt=256,lu=1e3/60,$0={ArrowLeft:0,KeyA:0,ArrowRight:1,KeyD:1,ArrowUp:2,KeyW:2,ArrowDown:3,KeyS:3,KeyZ:4,KeyC:4,KeyN:4,Space:4,KeyX:5,KeyV:5,KeyM:5,Enter:6,NumpadEnter:6,KeyP:6},cu=64*1024,hu=i=>String(i||"game").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"game",Hn=(i,t,e)=>Array.isArray(i)?[+i[0]||0,+i[1]||0,+i[2]||0]:[+i||0,+t||0,+e||0];function uu({canvas:i,overlay:t,cart:e,onError:n=console.error,onLog:s=console.log,onRestart:r=()=>location.reload(),onSave:o=()=>{},onCover:a=null}){let l=Qh(i,Bt),c=l.extensions.has("EXT_color_buffer_float"),h="blocky3d.res",d=1;try{d=c?Math.min(3,Math.max(1,parseInt(localStorage.getItem(h),10)||1)):1}catch{}let f=new Ts,g=new qe(90,1,.05,2e3),_=Fl(Bt*d),v=null,p=[0,6,-10],u=[0,0,0],E=t.getContext("2d");t.width=t.height=Bt;let A=Array.isArray(e.palette)&&e.palette.length===Vn?[...e.palette]:[...jn],b=Xh(A),C=Jh(_,b);C.uniforms.uNear.value=g.near,C.uniforms.uFar.value=g.far;let I=Kh(b);I.paint.uNear.value=g.near,I.paint.uFar.value=g.far;function P(m){d=c?Math.min(3,Math.max(1,m|0)):1;try{localStorage.setItem(h,String(d))}catch{}let M=Bt*d;l.setSize(M,M,!1),_.dispose(),_=Fl(M),v&&(v[0].dispose(),v[1].dispose(),v=null),d>1&&(v=[Ol(M),Ol(M)]);let R=C.uniforms;R.tColor.value=_.textures[0],R.tInfo.value=_.textures[1],R.tDepth.value=_.depthTexture}P(d);let O=$h(b);f.add(O);let w=Oh();Bh(w,jh(e));let y=uo(e),L=Array.from({length:64},(m,M)=>e.sfx&&e.sfx[M]||null),Z=L.map(m=>m?po(m):null),X=Array.from({length:tr},(m,M)=>ru(e.music&&e.music[M])),q=new fo,it="blocky3d.save."+hu(e.name),J=Wh(e),st=Qs(),Y=Ps(),dt=0,vt=-1,wt=-1,Xt=!0,Kt=null,K=0,lt=0,bt=!1,ct=null,Lt=90,Ft=[],Ut=null,se=[],$t=!1,ue=[0,0,Bt-1,Bt-1],F=new Fi(1,1,1),Ke=new no(1,24,16),Ht={map:[],vox:[],cube:[],sphere:[],line:[]},qt={map:0,vox:0,cube:0,sphere:0,line:0};function It(m){let M=Ht[m],R=M[qt[m]];if(!R){if(m==="map")R=new ke(void 0,Yh(w,b)),R.matrixAutoUpdate=!1;else if(m==="vox")R=new ke(void 0,Zh(b)),R.matrixAutoUpdate=!1;else if(m==="line"){let k=new sn;k.setAttribute("position",new Le(new Float32Array(6),3)),R=new eo(k,Nl(b)),R.frustumCulled=!1}else R=new ke(m==="cube"?F:Ke,Nl(b));M.push(R),f.add(R)}qt[m]++,R.visible=!0;let z=R.material.uniforms;for(let k=0;k<Vn;k++)z.uRemap.value[k]=st[k],z.uTrans.value[k]=Y[k];return z.uOutline.value=wt<0?-1:st[wt],z.uInner.value=Xt?1:0,Kt?z.uFog.value.set(Kt[0],Kt[1],Kt[2],1):z.uFog.value.w=0,z.uPix.value=d,z.uId.value=++lt,wt>=0&&(bt=!0),R.userData.view=Ut?Ut.i:0,Ut&&Ut.n++,R}let ae=m=>mi(A[st[(m|0)&31]]??0);function Pt(m,M,R,z){return m=Math.floor(m),M=Math.floor(M),R=Math.floor(R),z=Math.floor(z),[Math.min(m,R),Math.min(M,z),Math.max(m,R),Math.max(M,z)]}function T(m){let M=y[m];if(!M)throw M===null?new Error(`map ${m} belonged to a scene that has since been replaced by scene_load`):new Error(`map ${m} does not exist (there are ${y.length} maps)`);return M}function x(m){let M=co(m.w,m.h,m.d,m.origin,m.data.slice());return M.name=m.name||"",M.pos=[...m.pos],M.angle=[...m.angle],M}let B=uo(e),j=[];function nt(){for(let m of j)y[m]&&y[m].geometry&&y[m].geometry.dispose(),y[m]=null;for(j=[];y.length&&y[y.length-1]===null;)y.pop()}let $=new V;function Et(m,M,R,z){return Is(m),$.set(M,R,z).applyMatrix4(m._inv)}let ut=4,_t=22,Gt=new Array(_t).fill(!1),rt=Array.from({length:ut},()=>new Array(_t).fill(!1)),xt=Array.from({length:ut},()=>new Array(_t).fill(!1)),Ct=Array.from({length:ut},()=>[[0,0],[0,0]]),Nt=.5,Mt=[[7,0],[8,1],[9,2],[10,3],[11,4],[12,5],[13,6],[14,7],[15,8],[16,10],[17,11],[18,16]];function Jt(m,M,R){let z=et=>!!(m.buttons[et]&&m.buttons[et].pressed),k=et=>Number.isFinite(m.axes[et])?m.axes[et]:0;M[0]=z(14)||k(0)<-Nt,M[1]=z(15)||k(0)>Nt,M[2]=z(12)||k(1)<-Nt,M[3]=z(13)||k(1)>Nt,M[4]=z(0)||z(2),M[5]=z(1)||z(3),M[6]=z(9);for(let[et,tt]of Mt)M[et]=z(tt);R[0][0]=k(0),R[0][1]=k(1),R[1][0]=k(2),R[1][1]=k(3)}let zt=Array.from({length:ut},()=>new Array(_t).fill(!1));function de(){W();for(let M of zt)M.fill(!1);for(let M of Ct)M[0][0]=M[0][1]=M[1][0]=M[1][1]=0;let m=[];try{m=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{m=[]}m.filter(M=>M&&M.connected).sort((M,R)=>M.index-R.index).slice(0,ut).forEach((M,R)=>Jt(M,zt[R],Ct[R])),Math.hypot(rn[0],rn[1])>0&&Math.hypot(Ct[0][0][0],Ct[0][0][1])<=D&&(Ct[0][0][0]=rn[0],Ct[0][0][1]=rn[1]);for(let M=0;M<ut;M++)for(let R=0;R<_t;R++)rt[M][R]=xt[M][R],xt[M][R]=zt[M][R]||M===0&&(Gt[R]||Wi[R]||vn[R]);vn.fill(!1)}let D=.15;function mt(m,M){let R=xt[M];if(!R)return[0,0];let[z,k]=Ct[M][m?1:0],et=Math.hypot(z,k);if(et>D){let ie=Math.min(1,(et-D)/(1-D))/et;return[z*ie,k*ie]}if(m)return[0,0];let tt=(R[1]?1:0)-(R[0]?1:0),ot=(R[3]?1:0)-(R[2]?1:0),Rt=tt&&ot?Math.SQRT1_2:1;return[tt*Rt,ot*Rt]}let G=0,Q=0,ht=0,ft=0,Ot=0,me=0,Ee=0,ee=0,Ye=0,Ge=null,Hi=0,Gi=0,Qe=-1,xn=-1,Ns=[],_i={0:19,2:20,1:21},vn=new Array(_t).fill(!1),Wi=new Array(_t).fill(!1),rn=[0,0],xi=0,Xi=null,qi=()=>{Xi&&Xi(je?0:xi)},sr=m=>{Gt[m]=vn[m]=!0},yn=()=>document.pointerLockElement===t,S="mouse";window.addEventListener("pointerdown",m=>{S=m.pointerType||"mouse"},!0);function U(m){let M=t.getBoundingClientRect();return[(m.clientX-M.left)/M.width*Bt,(m.clientY-M.top)/M.height*Bt]}function H(){try{let m=t.requestPointerLock();m&&m.catch&&m.catch(()=>{})}catch{}}function W(){Ee=ft,ee=Ot,Ye=me,ft=Ot=me=0}function N(m){G=[0,1,2].includes(m|0)?m|0:0,t.style.touchAction=G?"none":"";for(let M of[19,20,21])Gt[M]=!1;Ge=null,G!==2&&yn()&&document.exitPointerLock()}let at=(m,M)=>Ns.findIndex(R=>m>=R[0]&&m<R[0]+R[2]&&M>=R[1]&&M<R[1]+R[3]);t.addEventListener("contextmenu",m=>{G&&m.preventDefault()}),t.addEventListener("mousedown",m=>{if(G){if(yn()||([Q,ht]=U(m)),je){let M=at(Q,ht);M>=0&&m.button===0&&(xn=M);return}if(G===2&&!yn()){H();return}_i[m.button]!==void 0&&sr(_i[m.button])}}),window.addEventListener("mouseup",m=>{_i[m.button]!==void 0&&(Gt[_i[m.button]]=!1)}),window.addEventListener("mousemove",m=>{if(G){if(!yn()&&([Q,ht]=U(m),je)){let M=at(Q,ht);M>=0&&(Qe=M)}!je&&(G!==2||yn())&&(ft+=m.movementX||0,Ot+=m.movementY||0)}}),t.addEventListener("wheel",m=>{G&&(m.preventDefault(),me+=m.deltaMode===1?m.deltaY/3:m.deltaMode===2?m.deltaY:m.deltaY/100)},{passive:!1}),t.addEventListener("pointerdown",m=>{if(!(!G||m.pointerType==="mouse"||Ge!==null)){m.preventDefault(),Ge=m.pointerId;try{t.setPointerCapture(m.pointerId)}catch{}if((G===1||je)&&([Q,ht]=U(m)),Hi=m.clientX,Gi=m.clientY,je){let M=at(Q,ht);M>=0&&(xn=M);return}G===1&&sr(19)}}),t.addEventListener("pointermove",m=>{m.pointerId===Ge&&(G===1&&([Q,ht]=U(m)),je||(ft+=m.clientX-Hi,Ot+=m.clientY-Gi),Hi=m.clientX,Gi=m.clientY)});let gt=m=>{m.pointerId===Ge&&(Ge=null,Gt[19]=!1)};t.addEventListener("pointerup",gt),t.addEventListener("pointercancel",gt),document.addEventListener("pointerlockchange",()=>{!yn()&&G===2&&Ze&&!je&&yo(!0)});let Tt=()=>xt.some((m,M)=>m[6]&&!rt[M][6]),yt=0,Dt=null;function kt(){if(Dt===null)return Math.random();Dt=Dt+1831565813>>>0;let m=Dt;return m=Math.imul(m^m>>>15,m|1),m^=m+Math.imul(m^m>>>7,m|61),((m^m>>>14)>>>0)/4294967296}let St={get palette(){return A},set palette(m){A=m},pal(m,M){if(m===void 0){st=Qs(),Y=Ps();return}st[m&31]=(M??m)&31},palt(m,M=!0){if(m===void 0){Y=Ps();return}Y[m&31]=M?1:0},bg(m,M){dt=st[(m|0)&31],vt=M==null||M===!1?-1:st[(M|0)&31]},outline(m,M=!0){wt=m==null||m===!1?-1:(m|0)&31,Xt=wt<0||M!==!1},fog(m,M=8,R=24){if(m==null||m===!1){Kt=null;return}Kt=[st[(m|0)&31],Math.max(0,+M||0),Math.max(0,+R||0)]},cam_set_pos(m,M,R){p.splice(0,3,...Hn(m,M,R))},cam_set_lookat(m,M,R){u.splice(0,3,...Hn(m,M,R))},cam_set_fov(m){Lt=Math.max(.01,Math.min(.49,+m||.25))*360},clip(m,M,R,z){if(m===void 0)ct=null;else{let[k,et,tt,ot]=Pt(m,M,R,z);ct=[Math.max(0,k),Math.max(0,et),Math.min(Bt-1,tt),Math.min(Bt-1,ot)]}$t&&(bn(),Sn()),Yl()},map_new(m,M,R,z=[0,0,0]){return y.push(co(m|0,M|0,R|0,Hn(z))),y.length-1},map_copy(m){return y.push(x(T(m))),y.length-1},map_reload(m){if(m==null){B.forEach((R,z)=>{y[z].data.set(R.data),y[z].dirty=!0});return}let M=B[m];if(!Number.isInteger(m)||!M){let R=B.length?`0-${B.length-1}`:"this cart has none";throw new Error(`map_reload(${m}): only the cart's maps can be reloaded (${R}); copies and map_new maps have no cart data`)}y[m].data.set(M.data),y[m].dirty=!0},map_stamp(m,M,R,z,k){let et=T(m),tt=T(M),ot=Math.floor(+R||0),Rt=Math.floor(+z||0),ie=Math.floor(+k||0);for(let _e=0;_e<et.d;_e++)for(let Wt=0;Wt<et.h;Wt++)for(let ce=0;ce<et.w;ce++){let we=et.data[ce+et.w*(Wt+et.h*_e)];we&&ho(tt,ot+ce,Rt+Wt,ie+_e,we)}},map_box(m,M,R,z,k,et,tt,ot){let Rt=T(m),ie=(Te,xe)=>Math.max(0,Math.floor(Math.min(+Te||0,+xe||0))),_e=(Te,xe,Fn)=>Math.min(Fn-1,Math.floor(Math.max(+Te||0,+xe||0))),Wt=ie(M,k),ce=_e(M,k,Rt.w),we=ie(R,et),Ie=_e(R,et,Rt.h),Be=ie(z,tt),Pe=_e(z,tt,Rt.d),Se=(ot|0)&255;for(let Te=Be;Te<=Pe;Te++)for(let xe=we;xe<=Ie;xe++)for(let Fn=Wt;Fn<=ce;Fn++)Rt.data[Fn+Rt.w*(xe+Rt.h*Te)]=Se;Rt.dirty=!0},scene_load(m){let M=Array.isArray(e.scenes)?e.scenes:[],R=M[m];if(!R)throw new Error(`scene ${m} does not exist (there are ${M.length} scenes)`);nt();let z={maps:[],named:{},things:[]};for(let k of R.maps||[]){let et=B[k.m];if(!et)continue;let tt=x(et);tt.pos=Hn(k.pos),tt.angle=Hn(k.angle),y.push(tt);let ot=y.length-1;j.push(ot),z.maps.push(ot),k.name&&(z.named[k.name]=ot)}for(let k of R.vox||[])z.things.push([k.v|0,...Hn(k.pos),+k.yaw||0]);return z},map_set_pos(m,M,R,z){let k=T(m);k.pos=Hn(M,R,z),k._xfDirty=!0},map_set_angle(m,M,R,z){let k=T(m);k.angle=Hn(M,R,z),k._xfDirty=!0},map_set_origin(m,M,R,z){let k=T(m),et=Hn(M,R,z);Is(k);let tt=new V(et[0]-k.origin[0],et[1]-k.origin[1],et[2]-k.origin[2]).applyMatrix4(k._rot);k.pos=[k.pos[0]+tt.x,k.pos[1]+tt.y,k.pos[2]+tt.z],k.origin=et,k._xfDirty=!0},map(m,M=!1){let R=T(m);Vh(R),Is(R);let z=It("map");z.geometry=R.geometry,z.matrix.copy(R._m),z.material.side=M?In:zn},mget(m,M,R,z){return Ks(T(m),Math.floor(M),Math.floor(R),Math.floor(z))},mset(m,M,R,z,k){ho(T(m),Math.floor(M),Math.floor(R),Math.floor(z),k|0)},msetw(m,M,R,z,k){let et=T(m),tt=Et(et,M,R,z);ho(et,Math.floor(tt.x),Math.floor(tt.y),Math.floor(tt.z),k|0)},mray(m,M,R,z,k,et,tt,ot=100){return ge(T(m),+M||0,+R||0,+z||0,+k||0,+et||0,+tt||0,+ot||0)},mtow(m,M,R,z){let k=T(m);return Is(k),$.set(+M||0,+R||0,+z||0).applyMatrix4(k._m),[$.x,$.y,$.z]},wtom(m,M,R,z){let k=Et(T(m),+M||0,+R||0,+z||0);return[k.x,k.y,k.z]},mgetw(m,M,R,z,k){let et=T(m),tt=Et(et,M,R,z);if(k===void 0){let ot=Math.floor(tt.x),Rt=Math.floor(tt.y),ie=Math.floor(tt.z);return[Ks(et,ot,Rt,ie),ot,Rt,ie]}return ne(et,tt.x,tt.y,tt.z,+k)},vox(m,M,R,z,k=0,et=0,tt=0,ot=1,Rt=ot,ie=ot){let _e=m|0;if(_e<0||_e>=Vi)throw new Error(`vox ${m} does not exist (models are 0-${Vi-1})`);let Wt=J[_e];if(!Wt)return;let ce=It("vox");ce.geometry=Hh(Wt),Gh(Wt,[+M||0,+R||0,+z||0],[+k||0,+et||0,+tt||0],[+ot,+Rt,+ie],ce.matrix)},cube(m,M,R,z=1,k=7){let et=It("cube");et.position.set(m,M,R),et.scale.setScalar(z),et.material.uniforms.uColor.value=k&31},sphere(m,M,R,z=.5,k=7){let et=It("sphere");et.position.set(m,M,R),et.scale.setScalar(z),et.material.uniforms.uColor.value=k&31},line3(m,M,R,z,k,et,tt=7){let ot=It("line"),Rt=ot.geometry.attributes.position;Rt.array.set([m,M,R,z,k,et]),Rt.needsUpdate=!0,ot.material.uniforms.uColor.value=tt&31},print(m,M,R,z=7,k=null,et=1,tt=et){M===void 0&&(M=0,R=K),et=Math.max(1,Math.round(+et||1)),tt=Math.max(1,Math.round(+tt||et));let ot=k!=null&&k!==!1&&k>=0,Rt=gi(E,m,M|0,R|0,ae(z),ot?ae(k):null,et,tt);return K=(R|0)+10*tt*String(m).split(`
`).length,Rt},rect(m,M,R,z,k=7){let[et,tt,ot,Rt]=Pt(m,M,R,z);E.fillStyle=ae(k),E.fillRect(et,tt,ot-et+1,1),E.fillRect(et,Rt,ot-et+1,1),E.fillRect(et,tt,1,Rt-tt+1),E.fillRect(ot,tt,1,Rt-tt+1)},rectfill(m,M,R,z,k=7){let[et,tt,ot,Rt]=Pt(m,M,R,z);E.fillStyle=ae(k),E.fillRect(et,tt,ot-et+1,Rt-tt+1)},printh(...m){s(m.map(String).join(" "))},sfx(m,M=-1,R=0,z=32){if(m===-1){q.stop(M);return}if(m===-2){q.release(M);return}let k=typeof m=="string"?m:L[m|0];if(typeof m=="string"&&!po(m))throw new Error("sfx: that string is not a sound from the Sfx tab");k&&q.play(k,M<4?M:-1,R,z)},music(m,M=0){if(m<0){q.musicStop(M);return}if((m|0)>=tr)throw new Error(`music ${m} does not exist (patterns are 0-${tr-1})`);q.music(()=>X,()=>Z,m|0,M)},save(m){try{if(m==null)return localStorage.removeItem(it),o(null),!0;let M=JSON.stringify(m);if(M.length>cu)throw new Error(`save: data is too big (${M.length} characters, the limit is ${cu})`);return localStorage.setItem(it,M),o(M),!0}catch(M){if(M.message.startsWith("save:"))throw M;return!1}},load(){try{let m=localStorage.getItem(it);return m===null?null:JSON.parse(m)}catch{return null}},btn(m,M=0){let R=xt[M|0];return!!(R&&R[m|0])},mouse_set_mode(m){N(m)},mouse_pos(){return[Q,ht]},mouse_delta(){return[Ee,ee]},mouse_wheel(){return Ye},mouse_locked(){return yn()},mouse_ray(){if(G!==2)return At(Q,ht);let m=se.length?se[0].rect:ue;return At((m[0]+m[2]+1)/2,(m[1]+m[3]+1)/2)},stick(m=0,M=0){return mt(m|0,M|0)},btnp(m,M=0){let R=xt[M|0];return!!(R&&R[m|0]&&!rt[M|0][m|0])},time(){return yt/60},touch_set_mode(m){xi=[0,1,2,3].includes(m|0)?m|0:0,qi()},freeze(m,M){Mn=Math.max(0,Math.floor(+m||0)),Oe=typeof M=="function"?M:null},t(){return yt/60},rnd(m=1){let M=kt();return Array.isArray(m)?m[Math.floor(M*m.length)]:M*m},srand(m){Dt=m==null?null:Math.round(Number(m)*65536)>>>0},flr:Math.floor,ceil:Math.ceil,abs:Math.abs,sqrt:Math.sqrt,min:Math.min,max:Math.max,sgn(m){return m<0?-1:1},mid(m,M,R){return Math.max(Math.min(m,M),Math.min(Math.max(m,M),R))},sin(m){return Math.sin(m*_n)},cos(m){return Math.cos(m*_n)},atan2(m,M){return(Math.atan2(M,m)/_n+1)%1},dist(m,M){let R=tt=>Array.isArray(tt)?tt:tt&&typeof tt=="object"?"z"in tt?[tt.x,tt.y,tt.z]:[tt.x,tt.y]:[+tt],z=R(m),k=R(M),et=0;for(let tt=0;tt<Math.max(z.length,k.length);tt++){let ot=(+z[tt]||0)-(+k[tt]||0);et+=ot*ot}return Math.sqrt(et)},dir3(m=0,M=0){let R=Math.cos(M*_n);return[Math.sin(m*_n)*R,Math.sin(M*_n),Math.cos(m*_n)*R]},yaw_to(m,M){return(Math.atan2(+m||0,+M||0)/_n+1)%1},angdiff(m,M){return((M-m)%1+1.5)%1-.5},cam_orbit(m,M=0,R=0,z=8){let k=Hn(m&&!Array.isArray(m)&&typeof m=="object"?[m.x,m.y,m.z]:m),et=St.dir3(M,R);p.splice(0,3,k[0]-et[0]*z,k[1]-et[1]*z,k[2]-et[2]*z),u.splice(0,3,...k)},lerp(m,M,R){return Array.isArray(m)?m.map((z,k)=>z+((Array.isArray(M)?M[k]:M)-z)*R):m+(M-m)*R},mpush(m,M,R,z,k){let et=Array.isArray(m)?m:[m];M=+M||0,R=+R||0,z=+z||0;let tt=0,ot=0,Rt=0,ie=-1,_e=.5;for(let ce=0;ce<3;ce++){let we=!1;for(let Ie of et){let Be=St.mgetw(Ie,M,R,z,k);if(!Be[0])continue;let[,,,,Pe,Se,Te,xe]=Be;M+=Pe*xe,R+=Se*xe,z+=Te*xe,tt+=Pe*xe,ot+=Se*xe,Rt+=Te*xe,Se>_e&&(_e=Se,ie=Ie|0),we=!0}if(!we)break}let Wt=Math.hypot(tt,ot,Rt);return Wt>1e-9?[M,R,z,tt/Wt,ot/Wt,Rt/Wt,ie]:[M,R,z,0,0,0,ie]},textw(m,M=1){return Ls(String(m))*Math.max(1,Math.round(+M||1))},printc(m,M,R=7,z=null,k=1,et=k){let[tt,,ot]=ct||ue;return St.print(m,tt+Math.floor((ot-tt+1-St.textw(m,k))/2),M,R,z,k,et)}},te=new V,fe=new V;function ge(m,M,R,z,k,et,tt,ot){let Rt=[0,0,0,0,0,0,0,0];if(!(k||et||tt))return Rt;Is(m);let ie=te.set(M,R,z).applyMatrix4(m._inv),_e=fe.set(k,et,tt).transformDirection(m._inv),Wt=[ie.x,ie.y,ie.z],ce=[_e.x,_e.y,_e.z],we=[m.w,m.h,m.d],Ie=0,Be=ot,Pe=-1;for(let Vt=0;Vt<3;Vt++){if(Math.abs(ce[Vt])<1e-12){if(Wt[Vt]<0||Wt[Vt]>=we[Vt])return Rt;continue}let ve=(0-Wt[Vt])/ce[Vt],Tn=(we[Vt]-Wt[Vt])/ce[Vt];if(ve>Tn&&([ve,Tn]=[Tn,ve]),ve>Ie&&(Ie=ve,Pe=Vt),Tn<Be&&(Be=Tn),Ie>Be)return Rt}let Se=[0,0,0],Te=[0,0,0],xe=[0,0,0],Fn=[0,0,0],on=[0,0,0];for(let Vt=0;Vt<3;Vt++){let ve=Wt[Vt]+ce[Vt]*Ie;Se[Vt]=Math.min(we[Vt]-1,Math.max(0,Math.floor(Vt===Pe?ve+Math.sign(ce[Vt])*1e-7:ve))),Te[Vt]=Math.sign(ce[Vt]),Fn[Vt]=Te[Vt]?Math.abs(1/ce[Vt]):1/0,xe[Vt]=Te[Vt]>0?(Se[Vt]+1-Wt[Vt])/ce[Vt]:Te[Vt]<0?(Se[Vt]-Wt[Vt])/ce[Vt]:1/0}Pe>=0&&(on[Pe]=-Te[Pe]);let ni=Ie;for(;;){let Vt=Ks(m,Se[0],Se[1],Se[2]);if(Vt)return[Vt,Se[0],Se[1],Se[2],on[0],on[1],on[2],ni];let ve=xe[0]<xe[1]?xe[0]<xe[2]?0:2:xe[1]<xe[2]?1:2;if(ni=xe[ve],ni>Be||(Se[ve]+=Te[ve],Se[ve]<0||Se[ve]>=we[ve]))return Rt;xe[ve]+=Fn[ve],on[0]=on[1]=on[2]=0,on[ve]=-Te[ve]}}let Ce=new qe(90,1,.05,2e3),Qt=new V;function At(m,M){let R=null;for(let ot=se.length-1;ot>=0&&!R;ot--){let Rt=se[ot].rect;m>=Rt[0]&&m<Rt[2]+1&&M>=Rt[1]&&M<Rt[3]+1&&(R=se[ot])}R||(R={rect:ct||ue,pos:p,look:u,fov:Lt});let[z,k,et,tt]=R.rect;return dn(Ce,R),Ce.updateMatrixWorld(),Qt.set((m-z)/(et-z+1)*2-1,1-(M-k)/(tt-k+1)*2,.5).unproject(Ce).sub(Ce.position).normalize(),[R.pos[0],R.pos[1],R.pos[2],Qt.x,Qt.y,Qt.z]}function dn(m,M){let R=M.rect[2]-M.rect[0]+1,z=M.rect[3]-M.rect[1]+1;m.position.set(...M.pos),m.lookAt(...M.look),m.aspect=R/z,m.fov=R>z?2*Math.atan(Math.tan(M.fov*Math.PI/360)*z/R)*180/Math.PI:M.fov,m.updateProjectionMatrix()}function ne(m,M,R,z,k){let et=null,tt=-1,ot=Math.floor(M-k),Rt=Math.floor(M+k),ie=Math.floor(R-k),_e=Math.floor(R+k),Wt=Math.floor(z-k),ce=Math.floor(z+k);for(let Ie=Wt;Ie<=ce;Ie++)for(let Be=ie;Be<=_e;Be++)for(let Pe=ot;Pe<=Rt;Pe++){let Se=Ks(m,Pe,Be,Ie);if(!Se)continue;let Te=Math.max(Pe,Math.min(M,Pe+1)),xe=Math.max(Be,Math.min(R,Be+1)),Fn=Math.max(Ie,Math.min(z,Ie+1)),on=M-Te,ni=R-xe,Vt=z-Fn,ve=Math.hypot(on,ni,Vt);if(ve>=k)continue;let Tn;if(ve>1e-6)Tn=k-ve,on/=ve,ni/=ve,Vt/=ve;else{let cr=[[M-Pe,-1,0,0],[Pe+1-M,1,0,0],[R-Be,0,-1,0],[Be+1-R,0,1,0],[z-Ie,0,0,-1],[Ie+1-z,0,0,1]].reduce((ic,sc)=>sc[0]<ic[0]?sc:ic);Tn=k+cr[0],on=cr[1],ni=cr[2],Vt=cr[3]}Tn>tt&&(tt=Tn,et=[Se,Pe,Be,Ie,on,ni,Vt,Tn])}if(!et)return[0,0,0,0,0,0,0,0];let we=new V(et[4],et[5],et[6]).applyMatrix4(m._rot);return et[4]=we.x,et[5]=we.y,et[6]=we.z,et}let be={},Ze=!1,Fe=0,Gn=0,le=0,$e=!1,Mn=0,Oe=null;function Sn(){Ut={i:Ft.length,rect:ct||ue,n:0},Ft.push(Ut)}function bn(){Ut&&(Ut.pos=[...p],Ut.look=[...u],Ut.fov=Lt,Ut.bg=dt,Ut.bg2=vt)}let ei=!1;function Yl(){ei&&(E.restore(),ei=!1),ct&&(E.save(),E.beginPath(),E.rect(ct[0],ct[1],ct[2]-ct[0]+1,ct[3]-ct[1]+1),E.clip(),ei=!0)}function _o(){for(let m in qt)qt[m]=0;ei&&(E.restore(),ei=!1),E.clearRect(0,0,Bt,Bt),Yl(),K=0,lt=0,bt=!1,Ft=[],Sn(),$t=!0}function Fs(m,M,R,z,k){m?(m.viewport.set(M,R,z,k),m.scissor.set(M,R,z,k),m.scissorTest=!0):(l.setViewport(M,R,z,k),l.setScissor(M,R,z,k),l.setScissorTest(!0))}function xo(){$t=!1,bn();for(let R in Ht)for(let z=qt[R];z<Ht[R].length;z++)Ht[R][z].visible=!1;Ll(b,A);let m=Ft.filter(R=>R.n>0);m.length||(m=[{i:-1,rect:ue,pos:[...p],look:[...u],fov:Lt,bg:dt,bg2:vt}]);let M=Bt*d;(m.length>1||m[0].rect!==ue)&&(l.setRenderTarget(null),Fs(null,0,0,M,M),l.setClearColor(A[dt]??0,1),l.clear());for(let R of m)gu(R,m.length>1);for(let R of[_,...v||[]])R.viewport.set(0,0,M,M),R.scissor.set(0,0,M,M),R.scissorTest=!1;l.setRenderTarget(null),l.setViewport(0,0,M,M),l.setScissorTest(!1),se=m.map(R=>({rect:R.rect,pos:R.pos,look:R.look,fov:R.fov}))}function gu(m,M){let[R,z,k,et]=m.rect,tt=R*d,ot=(Bt-1-et)*d,Rt=(k-R+1)*d,ie=(et-z+1)*d;if(M)for(let ce in Ht)for(let we=0;we<qt[ce];we++)Ht[ce][we].visible=Ht[ce][we].userData.view===m.i;dn(g,m),O.visible=m.bg2>=0,O.visible&&(O.material.uniforms.uSky.value.set(m.bg,m.bg2),O.material.uniforms.uPix.value=d),Fs(_,tt,ot,Rt,ie),l.setRenderTarget(_),l.setClearColor(A[m.bg]??0,1),l.clear(),l.render(f,g);let _e=C.uniforms;if(_e.uAny.value=bt?1:0,_e.uRect.value.set(tt,ot,tt+Rt-1,ot+ie-1),d===1||!bt){_e.uMode.value=0,l.setRenderTarget(null),Fs(null,tt,ot,Rt,ie),l.render(C.scene,C.camera);return}let Wt=I;Wt.grow.uRect.value.set(tt,ot,tt+Rt-1,ot+ie-1),_e.uMode.value=1;for(let ce of v)Fs(ce,tt,ot,Rt,ie);l.setRenderTarget(v[0]),l.render(C.scene,C.camera),Wt.grow.uR.value=d-1,Wt.grow.tMask.value=v[0].texture,Wt.grow.uDir.value.set(1,0),l.setRenderTarget(v[1]),l.render(Wt.growScene,Wt.camera),Wt.grow.tMask.value=v[1].texture,Wt.grow.uDir.value.set(0,1),l.setRenderTarget(v[0]),l.render(Wt.growScene,Wt.camera),Wt.paint.tColor.value=_.textures[0],Wt.paint.tInfo.value=_.textures[1],Wt.paint.tDepth.value=_.depthTexture,Wt.paint.tMask.value=v[0].texture,l.setRenderTarget(null),Fs(null,tt,ot,Rt,ie),l.render(Wt.paintScene,Wt.camera)}function Os(m){try{return m(),!0}catch(M){return lr(),n(M),!1}}let wn=["Resume","Restart","Screenshot","Capture GIF"];a&&wn.push("Capture cover"),c&&wn.push("Resolution");let je=!1,En=0,Nn="",vi=0,Zl=0,yi=document.createElement("canvas");yi.width=yi.height=Bt,yi.style.cssText="position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;display:none",t.after(yi);let vo=yi.getContext("2d");function yo(m){je=m,qi(),Qe=xn=-1;for(let M of[19,20,21])Gt[M]=!1;yi.style.display=m?"block":"none",m?(En=0,Nn="",Zl=0,q.suspend(),yn()&&document.exitPointerLock()):(vo.clearRect(0,0,Bt,Bt),q.resume(),G===2&&S==="mouse"&&H())}function _u(){let m=vo;m.clearRect(0,0,Bt,Bt),m.fillStyle="rgba(0, 0, 0, 0.45)",m.fillRect(0,0,Bt,Bt);let M=156,R=26+wn.length*14,z=Bt-M>>1,k=Bt-R>>1;m.fillStyle=mi(jn[0]),m.fillRect(z,k,M,R),m.fillStyle=mi(jn[7]),m.fillRect(z,k,M,1),m.fillRect(z,k+R-1,M,1),m.fillRect(z,k,1,R),m.fillRect(z+M-1,k,1,R),gi(m,"Paused",z+(M-Ls("Paused")>>1),k+4,mi(jn[6])),Ns=wn.map((et,tt)=>[z+4,k+19+tt*14,M-8,14]),wn.forEach((et,tt)=>{let ot=tt===En,Rt=et==="Resolution"?`Resolution < ${d}x >`:et;gi(m,(ot?"> ":"  ")+Rt,z+8,k+20+tt*14,mi(jn[ot?10:7]))}),Nn&&performance.now()<vi&&gi(m,Nn,Bt-Ls(Nn)>>1,k+R+6,mi(jn[11]),mi(jn[0]))}function xu(){let m=Bt*d,M=document.createElement("canvas");M.width=M.height=m;let R=M.getContext("2d");R.imageSmoothingEnabled=!1,R.drawImage(i,0,0,m,m),R.drawImage(t,0,0,m,m);let z=$l("png");M.toBlob(k=>{k&&Jl(k,z)},"image/png"),Nn="Screenshot saved",vi=performance.now()+1500,s("screenshot saved: "+z)}function $l(m){let M=new Date().toISOString().slice(0,19).replace(/[-:]/g,"").replace("T","_");return`${hu(e.name)}_${M}.${m}`}function Jl(m,M){let R=document.createElement("a");R.href=URL.createObjectURL(m),R.download=M,document.body.append(R),R.click(),R.remove(),setTimeout(()=>URL.revokeObjectURL(R.href),2e3)}let Kl=10,Bs=2,rr=Kl*60/Bs,Mo=[],Yi=0,Zi=0,So=-1/0,or=!1,$i=[],bo=new Map,ar=null;function vu(){Yi=Zi=0,So=-1/0,$i=[],bo=new Map}function yu(m){let M=bo.get(m);if(M!==void 0)return M;if($i.length<255)M=$i.push(m)-1;else{let R=1/0;for(let z=0;z<$i.length;z++){let k=$i[z],et=(m&255)-(k&255),tt=(m>>8&255)-(k>>8&255),ot=(m>>16&255)-(k>>16&255),Rt=et*et+tt*tt+ot*ot;Rt<R&&(R=Rt,M=z)}}return bo.set(m,M),M}function Mu(){if($e||or||yt-So<Bs)return;if(So=yt,!ar){let tt=document.createElement("canvas");tt.width=tt.height=Bt,ar=tt.getContext("2d",{willReadFrequently:!0}),ar.imageSmoothingEnabled=!1}let m=ar;m.fillStyle="#000",m.fillRect(0,0,Bt,Bt),m.drawImage(i,0,0,Bt,Bt),m.drawImage(t,0,0,Bt,Bt);let M=new Uint32Array(m.getImageData(0,0,Bt,Bt).data.buffer),R=Mo[Yi];R||(R=Mo[Yi]={px:new Uint8Array(Bt*Bt),f:0});let z=R.px,k=-1,et=0;for(let tt=0;tt<M.length;tt++){let ot=M[tt]&16777215;ot!==k&&(k=ot,et=yu(ot)),z[tt]=et}R.f=yt,Yi=(Yi+1)%rr,Zi<rr&&Zi++}async function Su(){if(or)return;if(Zi<2){Nn="Nothing recorded yet",vi=performance.now()+1500;return}or=!0;let m=$l("gif");try{let M=[];for(let ot=0;ot<Zi;ot++)M.push(Mo[(Yi-Zi+ot+rr)%rr]);let R=M[M.length-1].f+Bs-Kl*60;M=M.filter(ot=>ot.f>=R);let z=$i.map(ot=>(ot&255)<<16|ot&65280|ot>>16&255),k=new mo(Bt,Bt,z),et=ot=>Math.round((ot-M[0].f)*100/60),tt=performance.now();for(let ot=0;ot<M.length;ot++){let Rt=ot+1<M.length?M[ot+1].f:M[ot].f+Bs;k.add(M[ot].px,et(Rt)-et(M[ot].f)),performance.now()-tt>30&&(Nn=`Saving GIF ${Math.floor(ot*100/M.length)}%`,vi=1/0,await new Promise(ie=>setTimeout(ie,0)),tt=performance.now())}Jl(new Blob([k.finish()],{type:"image/gif"}),m),Nn="GIF saved",vi=performance.now()+1500,s(`gif saved: ${m} (${((M[M.length-1].f+Bs-M[0].f)/60).toFixed(1)} s)`)}catch(M){Nn="GIF failed",vi=performance.now()+1500,s("gif failed: "+(M&&M.message))}finally{or=!1}}function bu(){let m=document.createElement("canvas");m.width=m.height=Bt;let M=m.getContext("2d");M.imageSmoothingEnabled=!1,M.drawImage(i,0,0,Bt,Bt),M.drawImage(t,0,0),a(m.toDataURL("image/png")),Nn="Cover captured",vi=performance.now()+1500}function wu(){let m=M=>xt.some((R,z)=>R[M]&&!rt[z][M]);if(!(++Zl<15)){if(Qe>=0&&(En=Qe,Qe=-1),xn>=0)return En=xn,xn=-1,Ql(wn[En]);m(2)&&(En=(En+wn.length-1)%wn.length),m(3)&&(En=(En+1)%wn.length),wn[En]==="Resolution"&&(m(0)||m(1))&&jl(m(1)?1:-1),(m(4)||m(5)||m(6))&&Ql(m(6)?"Resume":wn[En])}}function Ql(m){m==="Resume"?yo(!1):m==="Restart"?(lr(),r()):m==="Screenshot"?xu():m==="Capture GIF"?Su():m==="Capture cover"?bu():m==="Resolution"&&jl(1)}function jl(m){P((d-1+m+3)%3+1),E.clearRect(0,0,Bt,Bt),_o(),!(be._draw&&!Os(be._draw))&&xo()}function tc(){if(de(),je)return wu(),Ze;if(Tt())return yo(!0),!0;if(yt++,Mn>0){let m=Oe;if(Mn--,Mn===0&&Oe===m&&(Oe=null),m&&!Os(m))return!1}else if(be._update&&!Os(be._update))return!1;return!0}function ec(){return je?(_u(),!0):(_o(),be._draw&&!Os(be._draw)?!1:(xo(),Mu(),!0))}function nc(m){if(!Ze||$e)return;le+=Math.min(m-Gn,100),Gn=m;let M=0;for(;le>=lu&&M<4;)if(le-=lu,M++,!tc()||!Ze)return;M>0&&!ec()||(Fe=requestAnimationFrame(nc))}function Eu(m=1,M=!0){if($e=!0,cancelAnimationFrame(Fe),!Ze)return m===0;for(let R=0;R<m;R++)if(!tc()||!Ze||(M||R===m-1)&&!ec())return!1;return!0}function Tu(m){return be=m||{},_o(),xo(),be._init&&!Os(be._init)?!1:(Ze=!0,Gn=performance.now(),Fe=requestAnimationFrame(nc),!0)}function lr(){Ze=!1,cancelAnimationFrame(Fe),q.stop(),q.musicStop(),yn()&&document.exitPointerLock()}function Au(){lr();for(let m of y)m&&m.geometry&&m.geometry.dispose();y.splice(0,y.length,...uo(e)),j=[],A=Array.isArray(e.palette)&&e.palette.length===Vn?[...e.palette]:[...jn],st=Qs(),Y=Ps(),dt=0,vt=-1,wt=-1,Xt=!0,Kt=null,K=0,p.splice(0,3,0,6,-10),u.splice(0,3,0,0,0),Lt=90,ct=null,se=[],vu(),yt=0,le=0,Mn=0,Oe=null,Dt=null,$e=!1,xi=0,rn[0]=rn[1]=0,qi(),N(0),ft=Ot=me=Ee=ee=Ye=0;for(let m of[Gt,Wi,vn])m.fill(!1);for(let m of xt)m.fill(!1);for(let m of rt)m.fill(!1);je=!1,Qe=xn=-1,yi.style.display="none",vo.clearRect(0,0,Bt,Bt),q.resume(),E.clearRect(0,0,Bt,Bt)}function Ru(m,M){rn[0]=+m||0,rn[1]=+M||0}function Cu(m,M){Wi[m]=!!M,M&&(vn[m]=!0)}let Ji=!1;try{Ji=localStorage.getItem("blocky3d.mute")==="1"}catch{}q.setMuted(Ji);function Iu(m){Ji=!!m,q.setMuted(Ji);try{localStorage.setItem("blocky3d.mute",Ji?"1":"0")}catch{}}function Pu(m,M){M&&q.unlock();let R=$0[m.code];R!==void 0&&(Gt[R]=M,M&&(vn[R]=!0),m.preventDefault())}return{api:St,start:Tu,stop:lr,reset:Au,step:Eu,key:Pu,maps:y,renderer:l,unlockAudio:()=>q.unlock(),setButton:Cu,setStick:Ru,setMuted:Iu,set onTouchMode(m){Xi=m,qi()},get touchMode(){return je?0:xi},get muted(){return Ji},get paused(){return je},get scale(){return d},setScale:P}}var J0=`
html, body { margin: 0; height: 100%; background: #000; overflow: hidden; }
[hidden] { display: none !important; }
#b3d-shell {
  --vh: 100vh; --sys: 46px; --side: 46px; --pad: 0px;
  --insx: calc(env(safe-area-inset-left, 0px) + env(safe-area-inset-right, 0px));
  --insy: calc(env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px));
  position: fixed; inset: 0; display: grid; justify-content: center; align-content: center;
  padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
  touch-action: none; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent; font-family: system-ui, sans-serif;
}
@supports (height: 100dvh) { #b3d-shell { --vh: 100dvh; } }
html.b3d-touch #b3d-shell { --side: clamp(120px, 21vw, 200px); --pad: clamp(150px, 30vh, 260px); }
#screen { grid-area: game; position: relative; width: var(--g); height: var(--g); }
#screen canvas { position: absolute; inset: 0; width: 100%; height: 100%; image-rendering: pixelated; display: block; }

.b3d-sys { grid-area: sys; display: flex; gap: 8px; align-items: center; justify-content: center; }
.b3d-sys button {
  width: 36px; height: 36px; padding: 0; display: grid; place-items: center; cursor: pointer;
  background: #161616; border: 1px solid #333; border-radius: 9px; color: #8a8a8a;
}
.b3d-sys button:hover { color: #ddd; border-color: #555; }
.b3d-sys button:active, .b3d-sys button.on { background: #2a2a2a; color: #fff; }
.b3d-sys svg { width: 20px; height: 20px; display: block; }

.b3d-dpad, .b3d-ab { display: none; align-self: center; justify-self: center; touch-action: none; }
html.b3d-touch .b3d-dpad, html.b3d-touch .b3d-ab { display: block; }
.b3d-dpad { grid-area: dpad; position: relative; width: var(--dp); height: var(--dp); }
.b3d-dpad div { position: absolute; background: #222; border: 1px solid #383838; color: #666; display: grid; place-items: center; font-size: calc(var(--dp) * 0.11); }
.b3d-dpad .c { left: 33%; top: 33%; width: 34%; height: 34%; border: none; background: #222; }
.b3d-dpad .u { left: 33%; top: 0; width: 34%; height: 36%; border-bottom: none; border-radius: 8px 8px 0 0; }
.b3d-dpad .d { left: 33%; bottom: 0; width: 34%; height: 36%; border-top: none; border-radius: 0 0 8px 8px; }
.b3d-dpad .l { top: 33%; left: 0; width: 36%; height: 34%; border-right: none; border-radius: 8px 0 0 8px; }
.b3d-dpad .r { top: 33%; right: 0; width: 36%; height: 34%; border-left: none; border-radius: 0 8px 8px 0; }
.b3d-dpad div.on { background: #4a4a4a; color: #fff; }
/* touch_set_mode: 1 analog circle, 2 left/right, 3 up/down (0, the d-pad, is the default above) */
.b3d-dpad .ring, .b3d-dpad .knob { display: none; }
.b3d-dpad[data-mode="1"] > div:not(.ring):not(.knob) { display: none; }
.b3d-dpad[data-mode="1"] .ring { display: block; inset: 2%; border-radius: 50%; background: #1b1b1b; border: 2px solid #383838; }
.b3d-dpad[data-mode="1"] .knob { display: block; width: 36%; height: 36%; border-radius: 50%; background: #3a3a3a; border: 1px solid #555;
  left: calc(32% + var(--kx, 0) * 30%); top: calc(32% + var(--ky, 0) * 30%); }
.b3d-dpad[data-mode="1"].on .knob { background: #5a5a5a; }
.b3d-dpad[data-mode="2"] .c, .b3d-dpad[data-mode="2"] .u, .b3d-dpad[data-mode="2"] .d,
.b3d-dpad[data-mode="3"] .c, .b3d-dpad[data-mode="3"] .l, .b3d-dpad[data-mode="3"] .r { display: none; }
.b3d-dpad[data-mode="2"] .l, .b3d-dpad[data-mode="2"] .r { top: 22%; height: 56%; width: 47%; border: 1px solid #383838; border-radius: 12px; }
.b3d-dpad[data-mode="3"] .u, .b3d-dpad[data-mode="3"] .d { left: 22%; width: 56%; height: 47%; border: 1px solid #383838; border-radius: 12px; }
.b3d-ab { grid-area: ab; position: relative; width: var(--dp); height: var(--dp); }
.b3d-ab button {
  position: absolute; width: 46%; height: 46%; padding: 0; border-radius: 50%; touch-action: none;
  background: #222; border: 1px solid #383838; color: #777; font: 600 calc(var(--dp) * 0.15) system-ui, sans-serif;
}
.b3d-ab button.on { background: #4a4a4a; color: #fff; }
.b3d-ab .o { left: 2%; bottom: 14%; }
.b3d-ab .x { right: 2%; top: 14%; }

@media (orientation: landscape) {
  #b3d-shell {
    --g: min(var(--vh) - var(--insy), 100vw - 2 * var(--side) - var(--insx));
    --dp: min(var(--side) - 14px, 170px);
    grid-template-columns: var(--side) var(--g) var(--side);
    grid-template-rows: auto 1fr;
    grid-template-areas: ". game sys" "dpad game ab";
  }
  .b3d-sys { flex-direction: column; padding-top: 6px; }
}
@media (orientation: portrait) {
  #b3d-shell {
    --g: min(100vw - var(--insx), var(--vh) - var(--sys) - var(--pad) - var(--insy));
    --dp: min(var(--pad) - 20px, 46vw - 10px, 180px);
    grid-template-columns: calc(var(--g) / 2) calc(var(--g) / 2);
    grid-template-rows: var(--g) var(--sys);
    grid-template-areas: "game game" "sys sys";
  }
  html.b3d-touch #b3d-shell {
    align-content: stretch; grid-template-rows: var(--g) var(--sys) minmax(var(--pad), 1fr);
    grid-template-areas: "game game" "sys sys" "dpad ab";
  }
}
`,er=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,nr={pause:er('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>'),sound:er('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),muted:er('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>'),full:er('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),exitFull:er('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>')};function Hl(i=document){let t=i.createElement("style");t.id="b3d-style",t.textContent=J0,i.head.prepend(t);let e=i.createElement("div");return e.id="b3d-shell",e.innerHTML=`
  <div id="screen">
    <canvas id="gl" width="256" height="256"></canvas>
    <canvas id="ui" width="256" height="256"></canvas>
  </div>
  <div class="b3d-sys">
    <button class="b3d-pause" title="Pause (Enter)" aria-label="Pause">${nr.pause}</button>
    <button class="b3d-mute" title="Mute" aria-label="Mute"></button>
    <button class="b3d-full" title="Fullscreen" aria-label="Fullscreen"></button>
  </div>
  <div class="b3d-dpad" aria-label="D-pad">
    <div class="c"></div><div class="u">\u25B2</div><div class="d">\u25BC</div><div class="l">\u25C0</div><div class="r">\u25B6</div>
    <div class="ring"></div><div class="knob"></div>
  </div>
  <div class="b3d-ab">
    <button class="o" aria-label="O button">O</button>
    <button class="x" aria-label="X button">X</button>
  </div>`,i.body.prepend(e),{canvas:i.getElementById("gl"),overlay:i.getElementById("ui")}}function Gl(i,t=document){let e=t.getElementById("b3d-shell");if(!e)return;let n=t.defaultView,s=t.documentElement,r=C=>e.querySelector(C),o=()=>s.classList.add("b3d-touch"),a=n.matchMedia("(pointer: coarse)");a.matches&&o(),a.addEventListener&&a.addEventListener("change",()=>{a.matches&&o()}),n.addEventListener("pointerdown",C=>{(C.pointerType==="touch"||C.pointerType==="pen")&&o()},!0),n.focus(),n.addEventListener("pointerdown",()=>n.focus());let l=r(".b3d-dpad"),c=[".l",".r",".u",".d"].map(C=>l.querySelector(C)),h=new Map,d=0,f=()=>{let C=[!1,!1,!1,!1],I=l.getBoundingClientRect(),P=0,O=0;for(let[w,y]of h.values()){let L=(w-I.left)/I.width*2-1,Z=(y-I.top)/I.height*2-1;if(d===1){let X=Math.hypot(L,Z)/.9,q=X>1?1/X:1;P=L/.9*q,O=Z/.9*q,P<-.5&&(C[0]=!0),P>.5&&(C[1]=!0),O<-.5&&(C[2]=!0),O>.5&&(C[3]=!0)}else if(d===2)Math.abs(L)>.06&&(C[L<0?0:1]=!0);else if(d===3)Math.abs(Z)>.06&&(C[Z<0?2:3]=!0);else{if(Math.hypot(L,Z)<.2)continue;let X=Math.abs(L),q=Math.abs(Z);X>q*.42&&(C[L<0?0:1]=!0),q>X*.42&&(C[Z<0?2:3]=!0)}}C.forEach((w,y)=>{i.setButton(y,w),c[y].classList.toggle("on",w)}),i.setStick&&i.setStick(P,O),l.style.setProperty("--kx",P),l.style.setProperty("--ky",O),l.classList.toggle("on",d===1&&h.size>0)},g=C=>{C!==d&&(d=C,l.dataset.mode=String(C),f())};i.onTouchMode=g,l.addEventListener("pointerdown",C=>{C.preventDefault();try{l.setPointerCapture(C.pointerId)}catch{}h.set(C.pointerId,[C.clientX,C.clientY]),f()}),l.addEventListener("pointermove",C=>{h.has(C.pointerId)&&(h.set(C.pointerId,[C.clientX,C.clientY]),f())});for(let C of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(C,I=>{h.delete(I.pointerId)&&f()});[[".o",4],[".x",5]].forEach(([C,I])=>{let P=r(".b3d-ab "+C),O=w=>{i.setButton(I,w),P.classList.toggle("on",w)};P.addEventListener("pointerdown",w=>{w.preventDefault();try{P.setPointerCapture(w.pointerId)}catch{}O(!0)});for(let w of["pointerup","pointercancel","lostpointercapture"])P.addEventListener(w,()=>O(!1))}),e.addEventListener("contextmenu",C=>{C.target.closest("#screen")||C.preventDefault()});let _=(C,I)=>{let P=r(C),O=-1e9,w=()=>{let y=performance.now();y-O<500||(O=y,I(),P.blur())};return P.addEventListener("mousedown",y=>y.preventDefault()),P.addEventListener("pointerdown",y=>{y.pointerType!=="mouse"&&y.preventDefault()}),P.addEventListener("pointerup",y=>{y.pointerType!=="mouse"&&w()}),P.addEventListener("click",w),P};_(".b3d-pause",()=>{i.setButton(6,!0),i.setButton(6,!1)});let v=_(".b3d-mute",()=>{i.setMuted(!i.muted),p()}),p=()=>{v.innerHTML=i.muted?nr.muted:nr.sound,v.title=i.muted?"Unmute":"Mute",v.classList.toggle("on",i.muted)};p();let u=()=>t.fullscreenElement||t.webkitFullscreenElement,E=_(".b3d-full",()=>{try{let C=u()?(t.exitFullscreen||t.webkitExitFullscreen).call(t):(s.requestFullscreen||s.webkitRequestFullscreen).call(s);C&&C.catch&&C.catch(()=>{})}catch{}}),A=()=>{E.innerHTML=u()?nr.exitFull:nr.full,E.title=u()?"Exit fullscreen":"Fullscreen"},b=n.matchMedia("(display-mode: fullscreen)").matches||n.navigator.standalone===!0;E.hidden=b||!(t.fullscreenEnabled||t.webkitFullscreenEnabled),t.addEventListener("fullscreenchange",A),t.addEventListener("webkitfullscreenchange",A),A()}var un=null,Us=null,ir=null,du=null;function fu(i,{canvas:t,overlay:e,onError:n=go,onLog:s=console.log,onRestart:r=pu,onSave:o,onCover:a,wire:l=!0}={}){return t||({canvas:t,overlay:e}=Hl()),Us=e,du=n,un=uu({canvas:t,overlay:e,cart:i,onError:n,onLog:s,onRestart:r,onSave:o,onCover:a}),Object.defineProperties(window,Object.getOwnPropertyDescriptors(un.api)),window.addEventListener("keydown",c=>un.key(c,!0)),window.addEventListener("keyup",c=>un.key(c,!1)),window.addEventListener("pointerdown",()=>un.unlockAudio()),l&&Gl(un),un}function K0(i,t){let e=Hl(),n=e.overlay.getContext("2d"),s=null,r=!1,o={setButton(f,g){s?s.setButton(f,g):g&&f!==6&&d()},setStick(f,g){s&&s.setStick(f,g)},onTouchMode:null,get muted(){if(s)return s.muted;try{return localStorage.getItem("blocky3d.mute")==="1"}catch{return!1}},setMuted(f){if(s)s.setMuted(f);else try{localStorage.setItem("blocky3d.mute",f?"1":"0")}catch{}}};Gl(o);let a=f=>{n.imageSmoothingEnabled=!1,f?n.drawImage(f,0,0,256,256):(n.fillStyle="#1d2b53",n.fillRect(0,0,256,256),eu(n,i.name,"#fff1e8","#000000",56,88)),n.fillStyle="rgba(0, 0, 0, 0.6)",n.beginPath(),n.arc(128,128,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff1e8",n.beginPath(),n.moveTo(120,115),n.lineTo(120,141),n.lineTo(141,128),n.closePath(),n.fill()};if(typeof i.cover=="string"&&i.cover.startsWith("data:image/")){let f=new Image;f.onload=()=>{r||a(f)},f.onerror=()=>{r||a(null)},f.src=i.cover}else a(null);e.overlay.style.cursor="pointer";let l=f=>{f.ctrlKey||f.metaKey||f.altKey||/^(Tab|Escape|Shift|Control|Alt|Meta|F\d+)$/.test(f.key)||(f.preventDefault(),d())},c=()=>d();e.overlay.addEventListener("click",c),window.addEventListener("keydown",l);let h=()=>{if(r)return;let f=navigator.getGamepads?navigator.getGamepads():[];for(let g of f)if(g&&[0,1,2,3,9].some(_=>g.buttons[_]&&g.buttons[_].pressed))return d();requestAnimationFrame(h)};requestAnimationFrame(h);function d(){if(!r){r=!0,e.overlay.removeEventListener("click",c),window.removeEventListener("keydown",l),e.overlay.style.cursor="",n.clearRect(0,0,256,256);try{s=fu(i,{...e,wire:!1})}catch(f){go(f);return}s.onTouchMode=o.onTouchMode,s.unlockAudio(),Xl(t)}}}var Wl='({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null })';function Q0(i){return"(function () {"+String(i||"")+`
;return `+Wl+`;
})`}function Xl(i){ir=typeof i=="function"?i:null;let t;try{t=ir?ir():i||(0,eval)(Wl)}catch(e){return du(e),!1}return un.start(t)}function pu(){if(!ir){location.reload();return}un.reset(),Xl(ir)}function j0(){un&&un.stop()}function go(i){if(console.error(i),un&&un.stop(),!Us)return;Us.width!==256&&(Us.width=Us.height=256);let t=Us.getContext("2d"),e=("Error: "+String(i&&i.message||i)).split(/\s+/),n=[""];for(let s of e){let r=n[n.length-1];r&&Ls(r+" "+s)>248?n.push(s):n[n.length-1]=r?r+" "+s:s}gi(t,n.join(`
`),4,4,"#ff004d","#000000")}function t_(){window.addEventListener("error",i=>go(i.error||i.message))}var mu="0.1.0-alpha";window.Blocko3D={...ql,VERSION:mu};window.Blocky3D=window.Blocko3D;})();
