(()=>{var Gf=Object.defineProperty;var Wf=(i,t)=>{for(var e in t)Gf(i,e,{get:t[e],enumerable:!0})};var ah={};Wf(ah,{HOOKS_EXPR:()=>rh,cartFunctionSource:()=>hv,catchGlobalErrors:()=>dv,install:()=>of,play:()=>cv,restart:()=>af,showError:()=>ma,start:()=>oh,stop:()=>uv});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Xf=0,Fh=1,qf=2;var zu=1,Yf=2,qn=3,Un=0,sn=1,En=2,di=0,ws=1,Oh=2,Bh=3,zh=4,Zf=5,Oi=100,$f=101,Jf=102,Kf=103,Qf=104,jf=200,tp=201,ep=202,np=203,pl=204,ml=205,ip=206,sp=207,rp=208,op=209,ap=210,lp=211,cp=212,hp=213,up=214,gl=0,xl=1,_l=2,Rs=3,vl=4,yl=5,Ml=6,Sl=7,ku=0,dp=1,fp=2,fi=0,pp=1,mp=2,gp=3,xp=4,_p=5,vp=6,yp=7;var Vu=300,Cs=301,Is=302,bl=303,wl=304,ta=306,El=1e3,ki=1001,Tl=1002,Re=1003,Mp=1004;var ro=1005;var Dn=1006,Oa=1007;var Vi=1008;var un=1009,Hu=1010,Gu=1011,yr=1012,Cc=1013,Hi=1014,Tn=1015,Mr=1016,Ic=1017,Pc=1018,Ps=1020,Wu=35902,Xu=1021,qu=1022,hn=1023,Yu=1024,Zu=1025,Es=1026,Ls=1027,Vs=1028,Lc=1029,$u=1030,Dc=1031;var Uc=1033,Io=33776,Po=33777,Lo=33778,Do=33779,Al=35840,Rl=35841,Cl=35842,Il=35843,Pl=36196,Ll=37492,Dl=37496,Ul=37808,Nl=37809,Fl=37810,Ol=37811,Bl=37812,zl=37813,kl=37814,Vl=37815,Hl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,Uo=36492,Zl=36494,$l=36495,Ju=36283,Jl=36284,Kl=36285,Ql=36286;var No=2300,jl=2301,Ba=2302,kh=2400,Vh=2401,Hh=2402;var Sp=3200,bp=3201;var wp=0,Ep=1,ui="",mn="srgb",xi="srgb-linear",ea="linear",xe="srgb";var ls=7680;var Gh=519,Tp=512,Ap=513,Rp=514,Ku=515,Cp=516,Ip=517,Pp=518,Lp=519,Wh=35044,Qu=35048;var Jn="300 es",Zn=2e3,Fo=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var za=Math.PI/180,tc=180/Math.PI;function Sr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function Dp(i,t){return(i%t+t)%t}function ka(i,t,e){return(1-e)*i+e*t}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ue=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],p=n[2],g=n[5],_=n[8],y=s[0],m=s[3],d=s[6],R=s[1],A=s[4],w=s[7],V=s[2],L=s[5],D=s[8];return r[0]=o*y+a*R+l*V,r[3]=o*m+a*A+l*L,r[6]=o*d+a*w+l*D,r[1]=c*y+u*R+f*V,r[4]=c*m+u*A+f*L,r[7]=c*d+u*w+f*D,r[2]=p*y+g*R+_*V,r[5]=p*m+g*A+_*L,r[8]=p*d+g*w+_*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,p=a*l-u*r,g=c*r-o*l,_=e*f+n*p+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=f*y,t[1]=(s*c-u*n)*y,t[2]=(a*n-s*o)*y,t[3]=p*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=g*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va=new $t;function ju(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Up(){let i=Oo("canvas");return i.style.display="block",i}var Xh={};function xr(i){i in Xh||(Xh[i]=!0,console.warn(i))}function Np(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Op(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(i.r=Ts(i.r),i.g=Ts(i.g),i.b=Ts(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qh=[.64,.33,.3,.6,.15,.06],Yh=[.2126,.7152,.0722],Zh=[.3127,.329],$h=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[xi]:{primaries:qh,whitePoint:Zh,transfer:ea,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:Yh,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:qh,whitePoint:Zh,transfer:xe,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:Yh,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});var cs,ec=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=Oo("canvas")),cs.width=t.width,cs.height=t.height;let n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Oo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,Bo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Sr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zp=0,dn=class i extends pi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ki,s=ki,r=Dn,o=Vi,a=hn,l=un,c=i.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Sr(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case El:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case El:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Vu;dn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],p=l[1],g=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,w=(g+1)/2,V=(d+1)/2,L=(u+p)/4,D=(f+y)/4,U=(_+m)/4;return A>w&&A>V?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=L/n,r=D/n):w>V?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=L/s,r=U/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=D/r,s=U/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(p-u)*(p-u));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(f-y)/R,this.z=(p-u)/R,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nc=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Bo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zo=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ic=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],p=r[o+0],g=r[o+1],_=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=_,t[e+3]=y;return}if(f!==y||l!==p||c!==g||u!==_){let m=1-a,d=l*p+c*g+u*_+f*y,R=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){let V=Math.sqrt(A),L=Math.atan2(V,d*R);m=Math.sin(m*L)/V,a=Math.sin(a*L)/V}let w=a*R;if(l=l*m+p*w,c=c*m+g*w,u=u*m+_*w,f=f*m+y*w,m===1-a){let V=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=V,c*=V,u*=V,f*=V}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],p=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+u*f+l*g-c*p,t[e+1]=l*_+u*p+c*f-a*g,t[e+2]=c*_+u*g+a*p-l*f,t[e+3]=u*_-a*f-l*p-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),p=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=p*u*f+c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f-p*g*_;break;case"YXZ":this._x=p*u*f+c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f+p*g*_;break;case"ZXY":this._x=p*u*f-c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f-p*g*_;break;case"ZYX":this._x=p*u*f-c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f+p*g*_;break;case"YZX":this._x=p*u*f+c*g*_,this._y=c*g*f+p*u*_,this._z=c*u*_-p*g*f,this._w=c*u*f-p*g*_;break;case"XZY":this._x=p*u*f-c*g*_,this._y=c*g*f-p*u*_,this._z=c*u*_+p*g*f,this._w=c*u*f+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],p=n+a+f;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>f){let g=2*Math.sqrt(1+n-a-f);this._w=(u-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-n-f);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+f-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new G,Kh=new mi,Kn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(t.matrixWorld),this.union(oo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),ao.subVectors(this.max,dr),hs.subVectors(t.a,dr),us.subVectors(t.b,dr),ds.subVectors(t.c,dr),ri.subVectors(us,hs),oi.subVectors(ds,us),Ii.subVectors(hs,ds);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ii.z,Ii.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ii.z,0,-Ii.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ii.y,Ii.x,0];return!Wa(e,hs,us,ds,ao)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,hs,us,ds,ao))?!1:(lo.crossVectors(ri,oi),e=[lo.x,lo.y,lo.z],Wa(e,hs,us,ds,ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new G,new G,new G,new G,new G,new G,new G,new G],Sn=new G,oo=new Kn,hs=new G,us=new G,ds=new G,ri=new G,oi=new G,Ii=new G,dr=new G,ao=new G,lo=new G,Pi=new G;function Wa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var kp=new Kn,fr=new G,Xa=new G,gi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);let e=fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Xa)),this.expandByPoint(fr.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new G,qa=new G,co=new G,ai=new G,Ya=new G,ho=new G,Za=new G,ko=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(qa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(co),a=ai.dot(this.direction),l=-ai.dot(co),c=ai.lengthSq(),u=Math.abs(1-o*o),f,p,g,_;if(u>0)if(f=o*l-a,p=o*a-l,_=r*u,f>=0)if(p>=-_)if(p<=_){let y=1/u;f*=y,p*=y,g=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(qa).addScaledVector(co,p),g}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,l=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,l=(t.min.z-p.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){Ya.subVectors(e,t),ho.subVectors(n,t),Za.crossVectors(Ya,ho);let o=this.direction.dot(Za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);let l=a*this.direction.dot(ho.crossVectors(ai,ho));if(l<0)return null;let c=a*this.direction.dot(Ya.cross(ai));if(c<0||l+c>o)return null;let u=-a*ai.dot(Za);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,l,c,u,f,p,g,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,p,g,_,y,m)}set(t,e,n,s,r,o,a,l,c,u,f,p,g,_,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=p,d[3]=g,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=o*u,g=o*f,_=a*u,y=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=g+_*c,e[5]=p-y*c,e[9]=-a*l,e[2]=y-p*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*u,g=l*f,_=c*u,y=c*f;e[0]=p+y*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=g*a-_,e[6]=y+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*u,g=l*f,_=c*u,y=c*f;e[0]=p-y*a,e[4]=-o*f,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*u,e[9]=y-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*u,g=o*f,_=a*u,y=a*f;e[0]=l*u,e[4]=_*c-g,e[8]=p*c+y,e[1]=l*f,e[5]=y*c+p,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*u,e[4]=y-p*f,e[8]=_*f+g,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=g*f+_,e[10]=p-y*f}else if(t.order==="XZY"){let p=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=p*f+y,e[5]=o*u,e[9]=g*f-_,e[2]=_*f-g,e[6]=a*u,e[10]=y*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vp,t,Hp)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),li.crossVectors(n,ln),li.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),li.crossVectors(n,ln)),li.normalize(),uo.crossVectors(ln,li),s[0]=li.x,s[4]=uo.x,s[8]=ln.x,s[1]=li.y,s[5]=uo.y,s[9]=ln.y,s[2]=li.z,s[6]=uo.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],p=n[9],g=n[13],_=n[2],y=n[6],m=n[10],d=n[14],R=n[3],A=n[7],w=n[11],V=n[15],L=s[0],D=s[4],U=s[8],E=s[12],b=s[1],P=s[5],K=s[9],Y=s[13],j=s[2],it=s[6],tt=s[10],ht=s[14],$=s[3],mt=s[7],lt=s[11],It=s[15];return r[0]=o*L+a*b+l*j+c*$,r[4]=o*D+a*P+l*it+c*mt,r[8]=o*U+a*K+l*tt+c*lt,r[12]=o*E+a*Y+l*ht+c*It,r[1]=u*L+f*b+p*j+g*$,r[5]=u*D+f*P+p*it+g*mt,r[9]=u*U+f*K+p*tt+g*lt,r[13]=u*E+f*Y+p*ht+g*It,r[2]=_*L+y*b+m*j+d*$,r[6]=_*D+y*P+m*it+d*mt,r[10]=_*U+y*K+m*tt+d*lt,r[14]=_*E+y*Y+m*ht+d*It,r[3]=R*L+A*b+w*j+V*$,r[7]=R*D+A*P+w*it+V*mt,r[11]=R*U+A*K+w*tt+V*lt,r[15]=R*E+A*Y+w*ht+V*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],p=t[10],g=t[14],_=t[3],y=t[7],m=t[11],d=t[15];return _*(+r*l*f-s*c*f-r*a*p+n*c*p+s*a*g-n*l*g)+y*(+e*l*g-e*c*p+r*o*p-s*o*g+s*c*u-r*l*u)+m*(+e*c*f-e*a*g-r*o*f+n*o*g+r*a*u-n*c*u)+d*(-s*a*u-e*l*f+e*a*p+s*o*f-n*o*p+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],p=t[10],g=t[11],_=t[12],y=t[13],m=t[14],d=t[15],R=f*m*c-y*p*c+y*l*g-a*m*g-f*l*d+a*p*d,A=_*p*c-u*m*c-_*l*g+o*m*g+u*l*d-o*p*d,w=u*y*c-_*f*c+_*a*g-o*y*g-u*a*d+o*f*d,V=_*f*l-u*y*l-_*a*p+o*y*p+u*a*m-o*f*m,L=e*R+n*A+s*w+r*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/L;return t[0]=R*D,t[1]=(y*p*r-f*m*r-y*s*g+n*m*g+f*s*d-n*p*d)*D,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*d+n*l*d)*D,t[3]=(f*l*r-a*p*r-f*s*c+n*p*c+a*s*g-n*l*g)*D,t[4]=A*D,t[5]=(u*m*r-_*p*r+_*s*g-e*m*g-u*s*d+e*p*d)*D,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*d-e*l*d)*D,t[7]=(o*p*r-u*l*r+u*s*c-e*p*c-o*s*g+e*l*g)*D,t[8]=w*D,t[9]=(_*f*r-u*y*r-_*n*g+e*y*g+u*n*d-e*f*d)*D,t[10]=(o*y*r-_*a*r+_*n*c-e*y*c-o*n*d+e*a*d)*D,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*g-e*a*g)*D,t[12]=V*D,t[13]=(u*y*s-_*f*s+_*n*p-e*y*p-u*n*m+e*f*m)*D,t[14]=(_*a*s-o*y*s-_*n*l+e*y*l+o*n*m-e*a*m)*D,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*p+e*a*p)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,p=r*c,g=r*u,_=r*f,y=o*u,m=o*f,d=a*f,R=l*c,A=l*u,w=l*f,V=n.x,L=n.y,D=n.z;return s[0]=(1-(y+d))*V,s[1]=(g+w)*V,s[2]=(_-A)*V,s[3]=0,s[4]=(g-w)*L,s[5]=(1-(p+d))*L,s[6]=(m+R)*L,s[7]=0,s[8]=(_+A)*D,s[9]=(m-R)*D,s[10]=(1-(p+y))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=fs.set(s[0],s[1],s[2]).length(),o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);let c=1/r,u=1/o,f=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Zn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,_;if(a===Zn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Fo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Zn){let l=this.elements,c=1/(e-t),u=1/(n-s),f=1/(o-r),p=(e+t)*c,g=(n+s)*u,_,y;if(a===Zn)_=(o+r)*f,y=-2*f;else if(a===Fo)_=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fs=new G,bn=new ne,Vp=new G(0,0,0),Hp=new G(1,1,1),li=new G,uo=new G,ln=new G,Qh=new ne,jh=new mi,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],p=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gp=0,tu=new G,ps=new mi,Gn=new ne,fo=new G,pr=new G,Wp=new G,Xp=new mi,eu=new G(1,0,0),nu=new G(0,1,0),iu=new G(0,0,1),su={type:"added"},qp={type:"removed"},ms={type:"childadded",child:null},$a={type:"childremoved",child:null},xn=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new An,n=new mi,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new $t}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fo.copy(t):fo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(pr,fo,this.up):Gn.lookAt(fo,pr,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Gn),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(su),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(su),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xn.DEFAULT_UP=new G(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new G,Wn=new G,Ja=new G,Xn=new G,gs=new G,xs=new G,ru=new G,Ka=new G,Qa=new G,ja=new G,tl=new _e,el=new _e,nl=new _e,Bi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Wn.subVectors(n,e),Ja.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Wn),l=wn.dot(Ja),c=Wn.dot(Wn),u=Wn.dot(Ja),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,g=(c*l-a*u)*p,_=(o*u-a*l)*p;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tl,r.x),o.addScaledVector(el,r.y),o.addScaledVector(nl,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Wn.subVectors(t,e),wn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),wn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;gs.subVectors(s,n),xs.subVectors(r,n),Ka.subVectors(t,n);let l=gs.dot(Ka),c=xs.dot(Ka);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,s);let u=gs.dot(Qa),f=xs.dot(Qa);if(u>=0&&f<=u)return e.copy(s);let p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(gs,o);ja.subVectors(t,r);let g=gs.dot(ja),_=xs.dot(ja);if(_>=0&&g<=_)return e.copy(r);let y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(xs,a);let m=u*_-g*f;if(m<=0&&f-u>=0&&g-_>=0)return ru.subVectors(r,s),a=(f-u)/(f-u+(g-_)),e.copy(s).addScaledVector(ru,a);let d=1/(m+y+p);return o=y*d,a=p*d,e.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},po={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Dp(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=il(o,r,t+1/3),this.g=il(o,r,t),this.b=il(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let n=td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return le.fromWorkingColorSpace(Ye.copy(this),t),Math.round(nn(Ye.r*255,0,255))*65536+Math.round(nn(Ye.g*255,0,255))*256+Math.round(nn(Ye.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=mn){le.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(po);let n=ka(ci.h,po.h,e),s=ka(ci.s,po.s,e),r=ka(ci.l,po.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new fe;fe.NAMES=td;var Yp=0,Gi=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Sr(),this.name="",this.blending=ws,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pl&&(n.blendSrc=this.blendSrc),this.blendDst!==ml&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ho=class extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new G,mo=new ue,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}};var Ds=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Go=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ue=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zp=0,pn=new ne,sl=new xn,_s=new G,cn=new Kn,mr=new Kn,ze=new G,tn=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Go:Ds)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(cn.min,mr.min),cn.expandByPoint(ze),ze.addVectors(cn.max,mr.max),cn.expandByPoint(ze)):(cn.expandByPoint(mr.min),cn.expandByPoint(mr.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(t,c),ze.add(_s)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new G,l[U]=new G;let c=new G,u=new G,f=new G,p=new ue,g=new ue,_=new ue,y=new G,m=new G;function d(U,E,b){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,b),p.fromBufferAttribute(r,U),g.fromBufferAttribute(r,E),_.fromBufferAttribute(r,b),u.sub(c),f.sub(c),g.sub(p),_.sub(p);let P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(P),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(P),a[U].add(y),a[E].add(y),a[b].add(y),l[U].add(m),l[E].add(m),l[b].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let U=0,E=R.length;U<E;++U){let b=R[U],P=b.start,K=b.count;for(let Y=P,j=P+K;Y<j;Y+=3)d(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let A=new G,w=new G,V=new G,L=new G;function D(U){V.fromBufferAttribute(s,U),L.copy(V);let E=a[U];A.copy(E),A.sub(V.multiplyScalar(V.dot(E))).normalize(),w.crossVectors(L,E);let P=w.dot(l[U])<0?-1:1;o.setXYZW(U,A.x,A.y,A.z,P)}for(let U=0,E=R.length;U<E;++U){let b=R[U],P=b.start,K=b.count;for(let Y=P,j=P+K;Y<j;Y+=3)D(t.getX(Y+0)),D(t.getX(Y+1)),D(t.getX(Y+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(t)for(let p=0,g=t.count;p<g;p+=3){let _=t.getX(p+0),y=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=e.count;p<g;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,p=new c.constructor(l.length*u),g=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*u;for(let d=0;d<u;d++)p[_++]=c[g++]}return new ke(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let p=c[u],g=t(p,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){let g=c[f];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new ne,Li=new ko,go=new gi,au=new G,xo=new G,_o=new G,vo=new G,rl=new G,yo=new G,lu=new G,Mo=new G,We=class extends xn{constructor(t=new tn,e=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(rl.fromBufferAttribute(f,t),o?yo.addScaledVector(rl,u):yo.addScaledVector(rl.sub(e),u))}e.add(yo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(go.containsPoint(Li.origin)===!1&&(Li.intersectSphere(go,au)===null||Li.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(ou.copy(r).invert(),Li.copy(t.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){let m=p[_],d=o[m.materialIndex],R=Math.max(m.start,g.start),A=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let w=R,V=A;w<V;w+=3){let L=a.getX(w),D=a.getX(w+1),U=a.getX(w+2);s=So(this,d,t,n,c,u,f,L,D,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){let R=a.getX(m),A=a.getX(m+1),w=a.getX(m+2);s=So(this,o,t,n,c,u,f,R,A,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=p.length;_<y;_++){let m=p[_],d=o[m.materialIndex],R=Math.max(m.start,g.start),A=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let w=R,V=A;w<V;w+=3){let L=w,D=w+1,U=w+2;s=So(this,d,t,n,c,u,f,L,D,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){let R=m,A=m+1,w=m+2;s=So(this,o,t,n,c,u,f,R,A,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function $p(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Un,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:i}}function So(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,xo),i.getVertexPosition(l,_o),i.getVertexPosition(c,vo);let u=$p(i,t,e,n,xo,_o,vo,lu);if(u){let f=new G;Bi.getBarycoord(lu,xo,_o,vo,f),s&&(u.uv=Bi.getInterpolatedAttribute(s,a,l,c,f,new ue)),r&&(u.uv1=Bi.getInterpolatedAttribute(r,a,l,c,f,new ue)),o&&(u.normal=Bi.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new G,materialIndex:0};Bi.getNormal(xo,_o,vo,p.normal),u.face=p,u.barycoord=f}return u}var Wi=class i extends tn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],p=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(f,2));function _(y,m,d,R,A,w,V,L,D,U,E){let b=w/D,P=V/U,K=w/2,Y=V/2,j=L/2,it=D+1,tt=U+1,ht=0,$=0,mt=new G;for(let lt=0;lt<tt;lt++){let It=lt*P-Y;for(let Xt=0;Xt<it;Xt++){let ce=Xt*b-K;mt[y]=ce*R,mt[m]=It*A,mt[d]=j,c.push(mt.x,mt.y,mt.z),mt[y]=0,mt[m]=0,mt[d]=L>0?1:-1,u.push(mt.x,mt.y,mt.z),f.push(Xt/D),f.push(1-lt/U),ht+=1}}for(let lt=0;lt<U;lt++)for(let It=0;It<D;It++){let Xt=p+It+it*lt,ce=p+It+it*(lt+1),Q=p+(It+1)+it*(lt+1),k=p+(It+1)+it*lt;l.push(Xt,ce,k),l.push(ce,Q,k),$+=6}a.addGroup(g,$,E),g+=$,p+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Us(i[e]);for(let s in n)t[s]=n[s]}return t}function Jp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ed(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Kp={clone:Us,merge:je},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xi=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new G,cu=new ue,hu=new ue,Ze=class extends Xi{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=tc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,cu,hu),e.subVectors(hu,cu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(za*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,ys=1,sc=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(vs,ys,t,e);s.layers=this.layers,this.add(s);let r=new Ze(vs,ys,t,e);r.layers=this.layers,this.add(r);let o=new Ze(vs,ys,t,e);o.layers=this.layers,this.add(o);let a=new Ze(vs,ys,t,e);a.layers=this.layers,this.add(a);let l=new Ze(vs,ys,t,e);l.layers=this.layers,this.add(l);let c=new Ze(vs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,p,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Wo=class extends dn{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rc=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wi(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:di});r.uniforms.tEquirect.value=e;let o=new We(s,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Dn),new sc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ol=new G,tm=new G,em=new $t,Yn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ol.subVectors(n,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||em.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new gi,bo=new G,Ns=class{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],p=s[7],g=s[8],_=s[9],y=s[10],m=s[11],d=s[12],R=s[13],A=s[14],w=s[15];if(n[0].setComponents(l-r,p-c,m-g,w-d).normalize(),n[1].setComponents(l+r,p+c,m+g,w+d).normalize(),n[2].setComponents(l+o,p+u,m+_,w+R).normalize(),n[3].setComponents(l-o,p-u,m-_,w-R).normalize(),n[4].setComponents(l-a,p-f,m-y,w-A).normalize(),e===Zn)n[5].setComponents(l+a,p+f,m+y,w+A).normalize();else if(e===Fo)n[5].setComponents(a,f,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((g,_)=>g.start-_.start);let p=0;for(let g=1;g<f.length;g++){let _=f[p],y=f[g];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++p,f[p]=y)}f.length=p+1;for(let g=0,_=f.length;g<_;g++){let y=f[g];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qi=class i extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,p=e/l,g=[],_=[],y=[],m=[];for(let d=0;d<u;d++){let R=d*p-o;for(let A=0;A<c;A++){let w=A*f-r;_.push(w,-R,0),y.push(0,0,1),m.push(A/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){let A=R+c*d,w=R+c*(d+1),V=R+1+c*(d+1),L=R+1+c*d;g.push(A,w,L),g.push(w,V,L)}this.setIndex(g),this.setAttribute("position",new Ue(_,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rm=`vec3 transformedNormal = objectNormal;
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
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,eg=`struct PhysicalMaterial {
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
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
}`,c0=`#if DEPTH_PACKING == 3200
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
}`,h0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,x0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
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
}`,y0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,b0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,T0=`#define STANDARD
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
}`,A0=`#define STANDARD
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
}`,R0=`#define TOON
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
}`,C0=`#define TOON
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
}`,I0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,U0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:xm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Em,common:Tm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Im,emissivemap_fragment:Pm,emissivemap_pars_fragment:Lm,colorspace_fragment:Dm,colorspace_pars_fragment:Um,envmap_fragment:Nm,envmap_common_pars_fragment:Fm,envmap_pars_fragment:Om,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:$m,envmap_vertex:zm,fog_vertex:km,fog_pars_vertex:Vm,fog_fragment:Hm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Zm,lights_toon_fragment:Jm,lights_toon_pars_fragment:Km,lights_phong_fragment:Qm,lights_phong_pars_fragment:jm,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:hg,map_particle_fragment:ug,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:_g,morphtarget_vertex:vg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:wg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Ig,packing:Pg,premultiplied_alpha_fragment:Lg,project_vertex:Dg,dithering_fragment:Ug,dithering_pars_fragment:Ng,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Vg,skinbase_vertex:Hg,skinning_pars_vertex:Gg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Zg,tonemapping_pars_fragment:$g,transmission_fragment:Jg,transmission_pars_fragment:Kg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:o0,cube_frag:a0,depth_vert:l0,depth_frag:c0,distanceRGBA_vert:h0,distanceRGBA_frag:u0,equirect_vert:d0,equirect_frag:f0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:x0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:y0,meshmatcap_frag:M0,meshnormal_vert:S0,meshnormal_frag:b0,meshphong_vert:w0,meshphong_frag:E0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:I0,points_frag:P0,shadow_vert:L0,shadow_frag:D0,sprite_vert:U0,sprite_frag:N0},_t={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ln={basic:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new fe(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:je([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:je([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new fe(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:je([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:je([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:je([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:je([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:je([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:je([_t.lights,_t.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ln.physical={uniforms:je([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var wo={r:0,b:0,g:0},Ui=new An,F0=new ne;function O0(i,t,e,n,s,r,o){let a=new fe(0),l=r===!0?0:1,c,u,f=null,p=0,g=null;function _(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?e:t).get(A)),A}function y(R){let A=!1,w=_(R);w===null?d(a,l):w&&w.isColor&&(d(w,1),A=!0);let V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(R,A){let w=_(A);w&&(w.isCubeTexture||w.mapping===ta)?(u===void 0&&(u=new We(new Wi(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Us(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ui.copy(A.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(Ui)),u.material.toneMapped=le.getTransfer(w.colorSpace)!==xe,(f!==w||p!==w.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=w,p=w.version,g=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new We(new qi(2,2),new Xe({name:"BackgroundMaterial",uniforms:Us(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=le.getTransfer(w.colorSpace)!==xe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||p!==w.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,p=w.version,g=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function d(R,A){R.getRGB(wo,ed(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(R,A=1){a.set(R),l=A,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,d(a,l)},render:y,addToRenderList:m}}function B0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(b,P,K,Y,j){let it=!1,tt=f(Y,K,P);r!==tt&&(r=tt,c(r.object)),it=g(b,Y,K,j),it&&_(b,Y,K,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,w(b,P,K,Y),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,P,K){let Y=K.wireframe===!0,j=n[b.id];j===void 0&&(j={},n[b.id]=j);let it=j[P.id];it===void 0&&(it={},j[P.id]=it);let tt=it[Y];return tt===void 0&&(tt=p(l()),it[Y]=tt),tt}function p(b){let P=[],K=[],Y=[];for(let j=0;j<e;j++)P[j]=0,K[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:K,attributeDivisors:Y,object:b,attributes:{},index:null}}function g(b,P,K,Y){let j=r.attributes,it=P.attributes,tt=0,ht=K.getAttributes();for(let $ in ht)if(ht[$].location>=0){let lt=j[$],It=it[$];if(It===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(It=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(It=b.instanceColor)),lt===void 0||lt.attribute!==It||It&&lt.data!==It.data)return!0;tt++}return r.attributesNum!==tt||r.index!==Y}function _(b,P,K,Y){let j={},it=P.attributes,tt=0,ht=K.getAttributes();for(let $ in ht)if(ht[$].location>=0){let lt=it[$];lt===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor));let It={};It.attribute=lt,lt&&lt.data&&(It.data=lt.data),j[$]=It,tt++}r.attributes=j,r.attributesNum=tt,r.index=Y}function y(){let b=r.newAttributes;for(let P=0,K=b.length;P<K;P++)b[P]=0}function m(b){d(b,0)}function d(b,P){let K=r.newAttributes,Y=r.enabledAttributes,j=r.attributeDivisors;K[b]=1,Y[b]===0&&(i.enableVertexAttribArray(b),Y[b]=1),j[b]!==P&&(i.vertexAttribDivisor(b,P),j[b]=P)}function R(){let b=r.newAttributes,P=r.enabledAttributes;for(let K=0,Y=P.length;K<Y;K++)P[K]!==b[K]&&(i.disableVertexAttribArray(K),P[K]=0)}function A(b,P,K,Y,j,it,tt){tt===!0?i.vertexAttribIPointer(b,P,K,j,it):i.vertexAttribPointer(b,P,K,Y,j,it)}function w(b,P,K,Y){y();let j=Y.attributes,it=K.getAttributes(),tt=P.defaultAttributeValues;for(let ht in it){let $=it[ht];if($.location>=0){let mt=j[ht];if(mt===void 0&&(ht==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),ht==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),mt!==void 0){let lt=mt.normalized,It=mt.itemSize,Xt=t.get(mt);if(Xt===void 0)continue;let ce=Xt.buffer,Q=Xt.type,k=Xt.bytesPerElement,at=Q===i.INT||Q===i.UNSIGNED_INT||mt.gpuType===Cc;if(mt.isInterleavedBufferAttribute){let rt=mt.data,St=rt.stride,wt=mt.offset;if(rt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<$.locationSize;Pt++)d($.location+Pt,rt.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Pt=0;Pt<$.locationSize;Pt++)m($.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let Pt=0;Pt<$.locationSize;Pt++)A($.location+Pt,It/$.locationSize,Q,lt,St*k,(wt+It/$.locationSize*Pt)*k,at)}else{if(mt.isInstancedBufferAttribute){for(let rt=0;rt<$.locationSize;rt++)d($.location+rt,mt.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let rt=0;rt<$.locationSize;rt++)m($.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let rt=0;rt<$.locationSize;rt++)A($.location+rt,It/$.locationSize,Q,lt,It*k,It/$.locationSize*rt*k,at)}}else if(tt!==void 0){let lt=tt[ht];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv($.location,lt);break;case 3:i.vertexAttrib3fv($.location,lt);break;case 4:i.vertexAttrib4fv($.location,lt);break;default:i.vertexAttrib1fv($.location,lt)}}}}R()}function V(){U();for(let b in n){let P=n[b];for(let K in P){let Y=P[K];for(let j in Y)u(Y[j].object),delete Y[j];delete P[K]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let K in P){let Y=P[K];for(let j in Y)u(Y[j].object),delete Y[j];delete P[K]}delete n[b.id]}function D(b){for(let P in n){let K=n[P];if(K[b.id]===void 0)continue;let Y=K[b.id];for(let j in Y)u(Y[j].object),delete Y[j];delete K[b.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:R}}function z0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,n,1)}function l(c,u,f,p){if(f===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],u[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,f);let _=0;for(let y=0;y<f;y++)_+=u[y]*p[y];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function k0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==hn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let U=D===Mr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==un&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Tn&&!U)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=_>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:w,vertexTextures:V,maxSamples:L}}function V0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Yn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let g=f.length!==0||p||n!==0||s;return s=p,n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,g){let _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let R=r?0:n,A=R*4,w=d.clippingState||null;l.value=w,w=u(_,p,A,g);for(let V=0;V!==A;++V)w[V]=e[V];d.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,p,g,_){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let d=g+y*4,R=p.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,w=g;A!==y;++A,w+=4)o.copy(f[A]).applyMatrix4(R,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function H0(i){let t=new WeakMap;function e(o,a){return a===bl?o.mapping=Cs:a===wl&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===bl||a===wl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fs=class extends Xi{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ss=4,uu=[.125,.215,.35,.446,.526,.582],zi=20,al=new Fs,du=new fe,ll=null,cl=0,hl=0,ul=!1,Fi=(1+Math.sqrt(5))/2,Ms=1/Fi,fu=[new G(-Fi,Ms,0),new G(Fi,Ms,0),new G(-Ms,0,Fi),new G(Ms,0,Fi),new G(0,Fi,-Ms),new G(0,Fi,Ms),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Xo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,hl),this._renderer.xr.enabled=ul,t.scissorTest=!1,Eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Mr,format:hn,colorSpace:xi,depthBuffer:!1},s=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(r)),this._blurMaterial=W0(r,t,e)}return s}_compileMaterial(t){let e=new We(this._lodPlanes[0],t);this._renderer.compile(e,al)}_sceneToCubeUV(t,e,n,s){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(du),u.toneMapping=fi,u.autoClear=!1;let g=new Ho({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new We(new Wi,g),y=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,y=!0):(g.color.copy(du),y=!0);for(let d=0;d<6;d++){let R=d%3;R===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):R===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let A=this._cubeSize;Eo(s,R*A,d>2?A:0,A,A),u.setRenderTarget(s),y&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cs||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Eo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,al)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fu[(s-r-1)%fu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new We(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*zi-1),y=r/_,m=isFinite(r)?1+Math.floor(u*y):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let d=[],R=0;for(let D=0;D<zi;++D){let U=D/y,E=Math.exp(-U*U/2);d.push(E),D===0?R+=E:D<m&&(R+=2*E)}for(let D=0;D<d.length;D++)d[D]=d[D]/R;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:A}=this;p.dTheta.value=_,p.mipInt.value=A-n;let w=this._sizeLods[s],V=3*w*(s>A-Ss?s-A+Ss:0),L=4*(this._cubeSize-w);Eo(e,V,L,3*w,2*w),l.setRenderTarget(e),l.render(f,al)}};function G0(i){let t=[],e=[],n=[],s=i,r=i-Ss+1+uu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ss?l=uu[o-i+Ss-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,_=6,y=3,m=2,d=1,R=new Float32Array(y*_*g),A=new Float32Array(m*_*g),w=new Float32Array(d*_*g);for(let L=0;L<g;L++){let D=L%3*2/3-1,U=L>2?0:-1,E=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];R.set(E,y*_*L),A.set(p,m*_*L);let b=[L,L,L,L,L,L];w.set(b,d*_*L)}let V=new tn;V.setAttribute("position",new ke(R,y)),V.setAttribute("uv",new ke(A,m)),V.setAttribute("faceIndex",new ke(w,d)),t.push(V),s>Ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pu(i,t,e){let n=new gn(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function W0(i,t,e){let n=new Float32Array(zi),s=new G(0,1,0);return new Xe({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function mu(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function gu(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function X0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===bl||l===wl,u=l===Cs||l===Is;if(c||u){let f=t.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Xo(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let g=a.image;return c&&g&&g.height>0||u&&g&&s(g)?(e===null&&(e=new Xo(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function q0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,t,e,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let _ in p.attributes)t.remove(p.attributes[_]);for(let _ in p.morphAttributes){let y=p.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)t.remove(y[m])}p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(t.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(f){let p=f.attributes;for(let _ in p)t.update(p[_],i.ARRAY_BUFFER);let g=f.morphAttributes;for(let _ in g){let y=g[_];for(let m=0,d=y.length;m<d;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(f){let p=[],g=f.index,_=f.attributes.position,y=0;if(g!==null){let R=g.array;y=g.version;for(let A=0,w=R.length;A<w;A+=3){let V=R[A+0],L=R[A+1],D=R[A+2];p.push(V,L,L,D,D,V)}}else if(_!==void 0){let R=_.array;y=_.version;for(let A=0,w=R.length/3-1;A<w;A+=3){let V=A+0,L=A+1,D=A+2;p.push(V,L,L,D,D,V)}}else return;let m=new(ju(p)?Go:Ds)(p,1);m.version=y;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function u(f){let p=r.get(f);if(p){let g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Z0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,g){i.drawElements(n,g,r,p*o),e.update(g,n,1)}function c(p,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,p*o,_),e.update(g,n,_))}function u(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,_);let m=0;for(let d=0;d<_;d++)m+=g[d];e.update(m,n,1)}function f(p,g,_,y){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/o,g[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,p,0,y,0,_);let d=0;for(let R=0;R<_;R++)d+=g[R]*y[R];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,t,e){let n=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==f){let E=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],A=0;g===!0&&(A=1),_===!0&&(A=2),y===!0&&(A=3);let w=a.attributes.position.count*A,V=1;w>t.maxTextureSize&&(V=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let L=new Float32Array(w*V*4*f),D=new zo(L,w,V,f);D.type=Tn,D.needsUpdate=!0;let U=A*4;for(let b=0;b<f;b++){let P=m[b],K=d[b],Y=R[b],j=w*V*4*b;for(let it=0;it<P.count;it++){let tt=it*U;g===!0&&(s.fromBufferAttribute(P,it),L[j+tt+0]=s.x,L[j+tt+1]=s.y,L[j+tt+2]=s.z,L[j+tt+3]=0),_===!0&&(s.fromBufferAttribute(K,it),L[j+tt+4]=s.x,L[j+tt+5]=s.y,L[j+tt+6]=s.z,L[j+tt+7]=0),y===!0&&(s.fromBufferAttribute(Y,it),L[j+tt+8]=s.x,L[j+tt+9]=s.y,L[j+tt+10]=s.z,L[j+tt+11]=Y.itemSize===4?s.w:1)}}p={count:f,texture:D,size:new ue(w,V)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function K0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Os=class extends dn{constructor(t,e,n,s,r,o,a,l,c,u=Es){if(u!==Es&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Es&&(n=Hi),n===void 0&&u===Ls&&(n=Ps),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},id=new dn,xu=new Os(1,1),sd=new zo,rd=new ic,od=new Wo,_u=[],vu=[],yu=new Float32Array(16),Mu=new Float32Array(9),Su=new Float32Array(4);function Hs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_u[s];if(r===void 0&&(r=new Float32Array(s),_u[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function nx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Su.set(n),i.uniformMatrix2fv(this.addr,!1,Su),Fe(e,n)}}function ix(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Mu.set(n),i.uniformMatrix3fv(this.addr,!1,Mu),Fe(e,n)}}function sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;yu.set(n),i.uniformMatrix4fv(this.addr,!1,yu),Fe(e,n)}}function rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xu.compareFunction=Ku,r=xu):r=id,e.setTexture2D(t||r,s)}function px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rd,s)}function mx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||od,s)}function gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sd,s)}function xx(i){switch(i){case 5126:return Q0;case 35664:return j0;case 35665:return tx;case 35666:return ex;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ox;case 35668:case 35672:return ax;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function _x(i,t){i.uniform1fv(this.addr,t)}function vx(i,t){let e=Hs(t,this.size,2);i.uniform2fv(this.addr,e)}function yx(i,t){let e=Hs(t,this.size,3);i.uniform3fv(this.addr,e)}function Mx(i,t){let e=Hs(t,this.size,4);i.uniform4fv(this.addr,e)}function Sx(i,t){let e=Hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bx(i,t){let e=Hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wx(i,t){let e=Hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ex(i,t){i.uniform1iv(this.addr,t)}function Tx(i,t){i.uniform2iv(this.addr,t)}function Ax(i,t){i.uniform3iv(this.addr,t)}function Rx(i,t){i.uniform4iv(this.addr,t)}function Cx(i,t){i.uniform1uiv(this.addr,t)}function Ix(i,t){i.uniform2uiv(this.addr,t)}function Px(i,t){i.uniform3uiv(this.addr,t)}function Lx(i,t){i.uniform4uiv(this.addr,t)}function Dx(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||id,r[o])}function Ux(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rd,r[o])}function Nx(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||od,r[o])}function Fx(i,t,e){let n=this.cache,s=t.length,r=na(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sd,r[o])}function Ox(i){switch(i){case 5126:return _x;case 35664:return vx;case 35665:return yx;case 35666:return Mx;case 35674:return Sx;case 35675:return bx;case 35676:return wx;case 5124:case 35670:return Ex;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Ix;case 36295:return Px;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Dx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Fx}}var oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xx(e.type)}},ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ox(e.type)}},lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},dl=/(\w+)(\])?(\[|\.)?/g;function bu(i,t){i.seq.push(t),i.map[t.id]=t}function Bx(i,t,e){let n=i.name,s=n.length;for(dl.lastIndex=0;;){let r=dl.exec(n),o=dl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bu(e,c===void 0?new oc(a,i,t):new ac(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new lc(a),bu(e,f)),e=f}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Bx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function wu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zx=37297,kx=0;function Vx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Eu=new $t;function Hx(i){le._getMatrix(Eu,le.workingColorSpace,i);let t=`mat3( ${Eu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case ea:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vx(i.getShaderSource(t),o)}else return s}function Gx(i,t){let e=Hx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wx(i,t){let e;switch(t){case pp:e="Linear";break;case mp:e="Reinhard";break;case gp:e="Cineon";break;case xp:e="ACESFilmic";break;case vp:e="AgX";break;case yp:e="Neutral";break;case _p:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var To=new G;function Xx(){le.getLuminanceCoefficients(To);let i=To.x.toFixed(4),t=To.y.toFixed(4),e=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function Yx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function _r(i){return i!==""}function Au(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $x=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace($x,Kx)}var Jx=new Map;function Kx(i,t){let e=Kt[t];if(e===void 0){let n=Jx.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cc(e)}var Qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(i){return i.replace(Qx,jx)}function jx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function t_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function e_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Is:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function i_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ku:t="ENVMAP_BLENDING_MULTIPLY";break;case dp:t="ENVMAP_BLENDING_MIX";break;case fp:t="ENVMAP_BLENDING_ADD";break}return t}function s_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=t_(e),c=e_(e),u=n_(e),f=i_(e),p=s_(e),g=qx(e),_=Yx(r),y=s.createProgram(),m,d,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(_r).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(_r).join(`
`),d.length>0&&(d+=`
`)):(m=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),d=[Iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==fi?Wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Gx("linearToOutputTexel",e.outputColorSpace),Xx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),o=cc(o),o=Au(o,e),o=Ru(o,e),a=cc(a),a=Au(a,e),a=Ru(a,e),o=Cu(o),a=Cu(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Jn?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let A=R+m+o,w=R+d+a,V=wu(s,s.VERTEX_SHADER,A),L=wu(s,s.FRAGMENT_SHADER,w);s.attachShader(y,V),s.attachShader(y,L),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(P){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(y).trim(),Y=s.getShaderInfoLog(V).trim(),j=s.getShaderInfoLog(L).trim(),it=!0,tt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,V,L);else{let ht=Tu(s,V,"vertex"),$=Tu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+K+`
`+ht+`
`+$)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Y===""||j==="")&&(tt=!1);tt&&(P.diagnostics={runnable:it,programLog:K,vertexShader:{log:Y,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(V),s.deleteShader(L),U=new As(s,y),E=Zx(s,y)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,zx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=V,this.fragmentShader=L,this}var o_=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new uc(t),e.set(t,n)),n}},uc=class{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}};function a_(i,t,e,n,s,r,o){let a=new Vo,l=new hc,c=new Set,u=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,P,K,Y){let j=K.fog,it=Y.geometry,tt=E.isMeshStandardMaterial?K.environment:null,ht=(E.isMeshStandardMaterial?e:t).get(E.envMap||tt),$=ht&&ht.mapping===ta?ht.image.height:null,mt=_[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));let lt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,It=lt!==void 0?lt.length:0,Xt=0;it.morphAttributes.position!==void 0&&(Xt=1),it.morphAttributes.normal!==void 0&&(Xt=2),it.morphAttributes.color!==void 0&&(Xt=3);let ce,Q,k,at;if(mt){let re=Ln[mt];ce=re.vertexShader,Q=re.fragmentShader}else ce=E.vertexShader,Q=E.fragmentShader,l.update(E),k=l.getVertexShaderID(E),at=l.getFragmentShaderID(E);let rt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),wt=Y.isInstancedMesh===!0,Pt=Y.isBatchedMesh===!0,Qt=!!E.map,Ft=!!E.matcap,se=!!ht,O=!!E.aoMap,Ve=!!E.lightMap,jt=!!E.bumpMap,Ht=!!E.normalMap,Ot=!!E.displacementMap,pe=!!E.emissiveMap,Ut=!!E.metalnessMap,T=!!E.roughnessMap,M=E.anisotropy>0,W=E.clearcoat>0,nt=E.dispersion>0,ot=E.iridescence>0,et=E.sheen>0,At=E.transmission>0,vt=M&&!!E.anisotropyMap,bt=W&&!!E.clearcoatMap,te=W&&!!E.clearcoatNormalMap,ct=W&&!!E.clearcoatRoughnessMap,ft=ot&&!!E.iridescenceMap,Nt=ot&&!!E.iridescenceThicknessMap,zt=et&&!!E.sheenColorMap,Mt=et&&!!E.sheenRoughnessMap,ie=!!E.specularMap,qt=!!E.specularColorMap,me=!!E.specularIntensityMap,F=At&&!!E.transmissionMap,pt=At&&!!E.thicknessMap,Z=!!E.gradientMap,st=!!E.alphaMap,yt=E.alphaTest>0,gt=!!E.alphaHash,kt=!!E.extensions,ge=fi;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ge=i.toneMapping);let Le={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:ce,fragmentShader:Q,defines:E.defines,customVertexShaderID:k,customFragmentShaderID:at,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Pt,batchingColor:Pt&&Y._colorsTexture!==null,instancing:wt,instancingColor:wt&&Y.instanceColor!==null,instancingMorph:wt&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:xi,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:Ft,envMap:se,envMapMode:se&&ht.mapping,envMapCubeUVHeight:$,aoMap:O,lightMap:Ve,bumpMap:jt,normalMap:Ht,displacementMap:p&&Ot,emissiveMap:pe,normalMapObjectSpace:Ht&&E.normalMapType===Ep,normalMapTangentSpace:Ht&&E.normalMapType===wp,metalnessMap:Ut,roughnessMap:T,anisotropy:M,anisotropyMap:vt,clearcoat:W,clearcoatMap:bt,clearcoatNormalMap:te,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:ot,iridescenceMap:ft,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:zt,sheenRoughnessMap:Mt,specularMap:ie,specularColorMap:qt,specularIntensityMap:me,transmission:At,transmissionMap:F,thicknessMap:pt,gradientMap:Z,opaque:E.transparent===!1&&E.blending===ws&&E.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:gt,combine:E.combine,mapUv:Qt&&y(E.map.channel),aoMapUv:O&&y(E.aoMap.channel),lightMapUv:Ve&&y(E.lightMap.channel),bumpMapUv:jt&&y(E.bumpMap.channel),normalMapUv:Ht&&y(E.normalMap.channel),displacementMapUv:Ot&&y(E.displacementMap.channel),emissiveMapUv:pe&&y(E.emissiveMap.channel),metalnessMapUv:Ut&&y(E.metalnessMap.channel),roughnessMapUv:T&&y(E.roughnessMap.channel),anisotropyMapUv:vt&&y(E.anisotropyMap.channel),clearcoatMapUv:bt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&y(E.sheenRoughnessMap.channel),specularMapUv:ie&&y(E.specularMap.channel),specularColorMapUv:qt&&y(E.specularColorMap.channel),specularIntensityMapUv:me&&y(E.specularIntensityMap.channel),transmissionMapUv:F&&y(E.transmissionMap.channel),thicknessMapUv:pt&&y(E.thicknessMap.channel),alphaMapUv:st&&y(E.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Ht||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!it.attributes.uv&&(Qt||st),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:St,skinning:Y.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===xe,decodeVideoTextureEmissive:pe&&E.emissiveMap.isVideoTexture===!0&&le.getTransfer(E.emissiveMap.colorSpace)===xe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function d(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let P in E.defines)b.push(P),b.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(R(b,E),A(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function R(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function A(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function w(E){let b=_[E.type],P;if(b){let K=Ln[b];P=Kp.clone(K.uniforms)}else P=E.uniforms;return P}function V(E,b){let P;for(let K=0,Y=u.length;K<Y;K++){let j=u[K];if(j.cacheKey===b){P=j,++P.usedTimes;break}}return P===void 0&&(P=new r_(i,b,E,r),u.push(P)),P}function L(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function D(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:V,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:U}}function l_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,g,_,y,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=y,d.group=m),t++,d}function a(f,p,g,_,y,m){let d=o(f,p,g,_,y,m);g.transmission>0?n.push(d):g.transparent===!0?s.push(d):e.push(d)}function l(f,p,g,_,y,m){let d=o(f,p,g,_,y,m);g.transmission>0?n.unshift(d):g.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,p){e.length>1&&e.sort(f||c_),n.length>1&&n.sort(p||Pu),s.length>1&&s.sort(p||Pu)}function u(){for(let f=t,p=i.length;f<p;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function h_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Lu,i.set(n,[o])):s>=r.length?(o=new Lu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function u_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new fe};break;case"SpotLight":e={position:new G,direction:new G,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f_=0;function p_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m_(i){let t=new u_,e=d_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new ne,o=new ne;function a(c){let u=0,f=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let g=0,_=0,y=0,m=0,d=0,R=0,A=0,w=0,V=0,L=0,D=0;c.sort(p_);for(let E=0,b=c.length;E<b;E++){let P=c[E],K=P.color,Y=P.intensity,j=P.distance,it=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=K.r*Y,f+=K.g*Y,p+=K.b*Y;else if(P.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(P.sh.coefficients[tt],Y);D++}else if(P.isDirectionalLight){let tt=t.get(P);if(tt.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ht=P.shadow,$=e.get(P);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=P.shadow.matrix,R++}n.directional[g]=tt,g++}else if(P.isSpotLight){let tt=t.get(P);tt.position.setFromMatrixPosition(P.matrixWorld),tt.color.copy(K).multiplyScalar(Y),tt.distance=j,tt.coneCos=Math.cos(P.angle),tt.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),tt.decay=P.decay,n.spot[y]=tt;let ht=P.shadow;if(P.map&&(n.spotLightMap[V]=P.map,V++,ht.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[y]=ht.matrix,P.castShadow){let $=e.get(P);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=it,w++}y++}else if(P.isRectAreaLight){let tt=t.get(P);tt.color.copy(K).multiplyScalar(Y),tt.halfWidth.set(P.width*.5,0,0),tt.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=tt,m++}else if(P.isPointLight){let tt=t.get(P);if(tt.color.copy(P.color).multiplyScalar(P.intensity),tt.distance=P.distance,tt.decay=P.decay,P.castShadow){let ht=P.shadow,$=e.get(P);$.shadowIntensity=ht.intensity,$.shadowBias=ht.bias,$.shadowNormalBias=ht.normalBias,$.shadowRadius=ht.radius,$.shadowMapSize=ht.mapSize,$.shadowCameraNear=ht.camera.near,$.shadowCameraFar=ht.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=it,n.pointShadowMatrix[_]=P.shadow.matrix,A++}n.point[_]=tt,_++}else if(P.isHemisphereLight){let tt=t.get(P);tt.skyColor.copy(P.color).multiplyScalar(Y),tt.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[d]=tt,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;let U=n.hash;(U.directionalLength!==g||U.pointLength!==_||U.spotLength!==y||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==R||U.numPointShadows!==A||U.numSpotShadows!==w||U.numSpotMaps!==V||U.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=w+V-L,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,U.directionalLength=g,U.pointLength=_,U.spotLength=y,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=R,U.numPointShadows=A,U.numSpotShadows=w,U.numSpotMaps=V,U.numLightProbes=D,n.version=f_++)}function l(c,u){let f=0,p=0,g=0,_=0,y=0,m=u.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){let A=c[d];if(A.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(A.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(A.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),p++}else if(A.isHemisphereLight){let w=n.hemi[y];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Du(i){let t=new m_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function g_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Du(i),t.set(s,[a])):r>=o.length?(a=new Du(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var dc=class extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fc=class extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function v_(i,t,e){let n=new Ns,s=new ue,r=new ue,o=new _e,a=new dc({depthPacking:bp}),l=new fc,c={},u=e.maxTextureSize,f={[Un]:sn,[sn]:Un,[En]:En},p=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:x_,fragmentShader:__}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let _=new tn;_.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new We(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let d=this.type;this.render=function(L,D,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),K=i.state;K.setBlending(di),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let Y=d!==qn&&this.type===qn,j=d===qn&&this.type!==qn;for(let it=0,tt=L.length;it<tt;it++){let ht=L[it],$=ht.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let mt=$.getFrameExtents();if(s.multiply(mt),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,$.mapSize.y=r.y)),$.map===null||Y===!0||j===!0){let It=this.type!==qn?{minFilter:Re,magFilter:Re}:{};$.map!==null&&$.map.dispose(),$.map=new gn(s.x,s.y,It),$.map.texture.name=ht.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let lt=$.getViewportCount();for(let It=0;It<lt;It++){let Xt=$.getViewport(It);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),K.viewport(o),$.updateMatrices(ht,It),n=$.getFrustum(),w(D,U,$.camera,ht,this.type)}$.isPointLightShadow!==!0&&this.type===qn&&R($,U),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,b,P)};function R(L,D){let U=t.update(y);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new gn(s.x,s.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,U,p,y,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,U,g,y,null)}function A(L,D,U,E){let b=null,P=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)b=P;else if(b=U.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let K=b.uuid,Y=D.uuid,j=c[K];j===void 0&&(j={},c[K]=j);let it=j[Y];it===void 0&&(it=b.clone(),j[Y]=it,D.addEventListener("dispose",V)),b=it}if(b.visible=D.visible,b.wireframe=D.wireframe,E===qn?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:f[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let K=i.properties.get(b);K.light=U}return b}function w(L,D,U,E,b){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===qn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);let Y=t.update(L),j=L.material;if(Array.isArray(j)){let it=Y.groups;for(let tt=0,ht=it.length;tt<ht;tt++){let $=it[tt],mt=j[$.materialIndex];if(mt&&mt.visible){let lt=A(L,mt,E,b);L.onBeforeShadow(i,L,D,U,Y,lt,$),i.renderBufferDirect(U,null,Y,lt,L,$),L.onAfterShadow(i,L,D,U,Y,lt,$)}}}else if(j.visible){let it=A(L,j,E,b);L.onBeforeShadow(i,L,D,U,Y,it,null),i.renderBufferDirect(U,null,Y,it,L,null),L.onAfterShadow(i,L,D,U,Y,it,null)}}let K=L.children;for(let Y=0,j=K.length;Y<j;Y++)w(K[Y],D,U,E,b)}function V(L){L.target.removeEventListener("dispose",V);for(let U in c){let E=c[U],b=L.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var y_={[gl]:xl,[_l]:Ml,[vl]:Sl,[Rs]:yl,[xl]:gl,[Ml]:_l,[Sl]:vl,[yl]:Rs};function M_(i,t){function e(){let F=!1,pt=new _e,Z=null,st=new _e(0,0,0,0);return{setMask:function(yt){Z!==yt&&!F&&(i.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){F=yt},setClear:function(yt,gt,kt,ge,Le){Le===!0&&(yt*=ge,gt*=ge,kt*=ge),pt.set(yt,gt,kt,ge),st.equals(pt)===!1&&(i.clearColor(yt,gt,kt,ge),st.copy(pt))},reset:function(){F=!1,Z=null,st.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,Z=null,st=null,yt=null;return{setReversed:function(gt){if(pt!==gt){let kt=t.get("EXT_clip_control");pt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let ge=yt;yt=null,this.setClear(ge)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?rt(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(gt){Z!==gt&&!F&&(i.depthMask(gt),Z=gt)},setFunc:function(gt){if(pt&&(gt=y_[gt]),st!==gt){switch(gt){case gl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case vl:i.depthFunc(i.EQUAL);break;case yl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=gt}},setLocked:function(gt){F=gt},setClear:function(gt){yt!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),yt=gt)},reset:function(){F=!1,Z=null,st=null,yt=null,pt=!1}}}function s(){let F=!1,pt=null,Z=null,st=null,yt=null,gt=null,kt=null,ge=null,Le=null;return{setTest:function(re){F||(re?rt(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(re){pt!==re&&!F&&(i.stencilMask(re),pt=re)},setFunc:function(re,He,$e){(Z!==re||st!==He||yt!==$e)&&(i.stencilFunc(re,He,$e),Z=re,st=He,yt=$e)},setOp:function(re,He,$e){(gt!==re||kt!==He||ge!==$e)&&(i.stencilOp(re,He,$e),gt=re,kt=He,ge=$e)},setLocked:function(re){F=re},setClear:function(re){Le!==re&&(i.clearStencil(re),Le=re)},reset:function(){F=!1,pt=null,Z=null,st=null,yt=null,gt=null,kt=null,ge=null,Le=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},p=new WeakMap,g=[],_=null,y=!1,m=null,d=null,R=null,A=null,w=null,V=null,L=null,D=new fe(0,0,0),U=0,E=!1,b=null,P=null,K=null,Y=null,j=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,ht=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec($)[1]),tt=ht>=1):$.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),tt=ht>=2);let mt=null,lt={},It=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),ce=new _e().fromArray(It),Q=new _e().fromArray(Xt);function k(F,pt,Z,st){let yt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(F,gt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Z;kt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(pt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return gt}let at={};at[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Rs),jt(!1),Ht(Fh),rt(i.CULL_FACE),O(di);function rt(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function St(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function wt(F,pt){return f[F]!==pt?(i.bindFramebuffer(F,pt),f[F]=pt,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pt),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Pt(F,pt){let Z=g,st=!1;if(F){Z=p.get(pt),Z===void 0&&(Z=[],p.set(pt,Z));let yt=F.textures;if(Z.length!==yt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,kt=yt.length;gt<kt;gt++)Z[gt]=i.COLOR_ATTACHMENT0+gt;Z.length=yt.length,st=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,st=!0);st&&i.drawBuffers(Z)}function Qt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let Ft={[Oi]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};Ft[Kf]=i.MIN,Ft[Qf]=i.MAX;let se={[jf]:i.ZERO,[tp]:i.ONE,[ep]:i.SRC_COLOR,[pl]:i.SRC_ALPHA,[ap]:i.SRC_ALPHA_SATURATE,[rp]:i.DST_COLOR,[ip]:i.DST_ALPHA,[np]:i.ONE_MINUS_SRC_COLOR,[ml]:i.ONE_MINUS_SRC_ALPHA,[op]:i.ONE_MINUS_DST_COLOR,[sp]:i.ONE_MINUS_DST_ALPHA,[lp]:i.CONSTANT_COLOR,[cp]:i.ONE_MINUS_CONSTANT_COLOR,[hp]:i.CONSTANT_ALPHA,[up]:i.ONE_MINUS_CONSTANT_ALPHA};function O(F,pt,Z,st,yt,gt,kt,ge,Le,re){if(F===di){y===!0&&(St(i.BLEND),y=!1);return}if(y===!1&&(rt(i.BLEND),y=!0),F!==Zf){if(F!==m||re!==E){if((d!==Oi||w!==Oi)&&(i.blendEquation(i.FUNC_ADD),d=Oi,w=Oi),re)switch(F){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,A=null,V=null,L=null,D.set(0,0,0),U=0,m=F,E=re}return}yt=yt||pt,gt=gt||Z,kt=kt||st,(pt!==d||yt!==w)&&(i.blendEquationSeparate(Ft[pt],Ft[yt]),d=pt,w=yt),(Z!==R||st!==A||gt!==V||kt!==L)&&(i.blendFuncSeparate(se[Z],se[st],se[gt],se[kt]),R=Z,A=st,V=gt,L=kt),(ge.equals(D)===!1||Le!==U)&&(i.blendColor(ge.r,ge.g,ge.b,Le),D.copy(ge),U=Le),m=F,E=!1}function Ve(F,pt){F.side===En?St(i.CULL_FACE):rt(i.CULL_FACE);let Z=F.side===sn;pt&&(Z=!Z),jt(Z),F.blending===ws&&F.transparent===!1?O(di):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let st=F.stencilWrite;a.setTest(st),st&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function Ht(F){F!==Xf?(rt(i.CULL_FACE),F!==P&&(F===Fh?i.cullFace(i.BACK):F===qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=F}function Ot(F){F!==K&&(tt&&i.lineWidth(F),K=F)}function pe(F,pt,Z){F?(rt(i.POLYGON_OFFSET_FILL),(Y!==pt||j!==Z)&&(i.polygonOffset(pt,Z),Y=pt,j=Z)):St(i.POLYGON_OFFSET_FILL)}function Ut(F){F?rt(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+it-1),mt!==F&&(i.activeTexture(F),mt=F)}function M(F,pt,Z){Z===void 0&&(mt===null?Z=i.TEXTURE0+it-1:Z=mt);let st=lt[Z];st===void 0&&(st={type:void 0,texture:void 0},lt[Z]=st),(st.type!==F||st.texture!==pt)&&(mt!==Z&&(i.activeTexture(Z),mt=Z),i.bindTexture(F,pt||at[F]),st.type=F,st.texture=pt)}function W(){let F=lt[mt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(F){ce.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ce.copy(F))}function Mt(F){Q.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function ie(F,pt){let Z=c.get(pt);Z===void 0&&(Z=new WeakMap,c.set(pt,Z));let st=Z.get(F);st===void 0&&(st=i.getUniformBlockIndex(pt,F.name),Z.set(F,st))}function qt(F,pt){let st=c.get(pt).get(F);l.get(pt)!==st&&(i.uniformBlockBinding(pt,st,F.__bindingPointIndex),l.set(pt,st))}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},mt=null,lt={},f={},p=new WeakMap,g=[],_=null,y=!1,m=null,d=null,R=null,A=null,w=null,V=null,L=null,D=new fe(0,0,0),U=0,E=!1,b=null,P=null,K=null,Y=null,j=null,ce.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:St,bindFramebuffer:wt,drawBuffers:Pt,useProgram:Qt,setBlending:O,setMaterial:Ve,setFlipSided:jt,setCullFace:Ht,setLineWidth:Ot,setPolygonOffset:pe,setScissorTest:Ut,activeTexture:T,bindTexture:M,unbindTexture:W,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:ft,texImage3D:Nt,updateUBOMapping:ie,uniformBlockBinding:qt,texStorage2D:te,texStorage3D:ct,texSubImage2D:et,texSubImage3D:At,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:zt,viewport:Mt,reset:me}}function Uu(i,t,e,n){let s=S_(n);switch(e){case Xu:return i*t;case Yu:return i*t;case Zu:return i*t*2;case Vs:return i*t/s.components*s.byteLength;case Lc:return i*t/s.components*s.byteLength;case $u:return i*t*2/s.components*s.byteLength;case Dc:return i*t*2/s.components*s.byteLength;case qu:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Uc:return i*t*4/s.components*s.byteLength;case Io:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:case Il:return Math.max(i,16)*Math.max(t,8)/4;case Al:case Cl:return Math.max(i,8)*Math.max(t,8)/2;case Pl:case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Uo:case Zl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ju:case Jl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kl:case Ql:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S_(i){switch(i){case un:case Hu:return{byteLength:1,components:1};case yr:case Gu:case Mr:return{byteLength:2,components:1};case Ic:case Pc:return{byteLength:2,components:4};case Hi:case Cc:case Tn:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function b_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,M){return g?new OffscreenCanvas(T,M):Oo("canvas")}function y(T,M,W){let nt=1,ot=Ut(T);if((ot.width>W||ot.height>W)&&(nt=W/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let et=Math.floor(nt*ot.width),At=Math.floor(nt*ot.height);f===void 0&&(f=_(et,At));let vt=M?_(et,At):f;return vt.width=et,vt.height=At,vt.getContext("2d").drawImage(T,0,0,et,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+At+")."),vt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,M,W,nt,ot=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=M;if(M===i.RED&&(W===i.FLOAT&&(et=i.R32F),W===i.HALF_FLOAT&&(et=i.R16F),W===i.UNSIGNED_BYTE&&(et=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.R8UI),W===i.UNSIGNED_SHORT&&(et=i.R16UI),W===i.UNSIGNED_INT&&(et=i.R32UI),W===i.BYTE&&(et=i.R8I),W===i.SHORT&&(et=i.R16I),W===i.INT&&(et=i.R32I)),M===i.RG&&(W===i.FLOAT&&(et=i.RG32F),W===i.HALF_FLOAT&&(et=i.RG16F),W===i.UNSIGNED_BYTE&&(et=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RG8UI),W===i.UNSIGNED_SHORT&&(et=i.RG16UI),W===i.UNSIGNED_INT&&(et=i.RG32UI),W===i.BYTE&&(et=i.RG8I),W===i.SHORT&&(et=i.RG16I),W===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGB8UI),W===i.UNSIGNED_SHORT&&(et=i.RGB16UI),W===i.UNSIGNED_INT&&(et=i.RGB32UI),W===i.BYTE&&(et=i.RGB8I),W===i.SHORT&&(et=i.RGB16I),W===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),W===i.UNSIGNED_INT&&(et=i.RGBA32UI),W===i.BYTE&&(et=i.RGBA8I),W===i.SHORT&&(et=i.RGBA16I),W===i.INT&&(et=i.RGBA32I)),M===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),M===i.RGBA){let At=ot?ea:le.getTransfer(nt);W===i.FLOAT&&(et=i.RGBA32F),W===i.HALF_FLOAT&&(et=i.RGBA16F),W===i.UNSIGNED_BYTE&&(et=At===xe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(T,M){let W;return T?M===null||M===Hi||M===Ps?W=i.DEPTH24_STENCIL8:M===Tn?W=i.DEPTH32F_STENCIL8:M===yr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===Ps?W=i.DEPTH_COMPONENT24:M===Tn?W=i.DEPTH_COMPONENT32F:M===yr&&(W=i.DEPTH_COMPONENT16),W}function V(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Re&&T.minFilter!==Dn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function L(T){let M=T.target;M.removeEventListener("dispose",L),U(M),M.isVideoTexture&&u.delete(M)}function D(T){let M=T.target;M.removeEventListener("dispose",D),b(M)}function U(T){let M=n.get(T);if(M.__webglInit===void 0)return;let W=T.source,nt=p.get(W);if(nt){let ot=nt[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&E(T),Object.keys(nt).length===0&&p.delete(W)}n.remove(T)}function E(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let W=T.source,nt=p.get(W);delete nt[M.__cacheKey],o.memory.textures--}function b(T){let M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let ot=0;ot<M.__webglFramebuffer[nt].length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[nt][ot]);else i.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[nt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=T.textures;for(let nt=0,ot=W.length;nt<ot;nt++){let et=n.get(W[nt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(W[nt])}n.remove(T)}let P=0;function K(){P=0}function Y(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function j(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function it(T,M){let W=n.get(T);if(T.isVideoTexture&&Ot(T),T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){let nt=T.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,T,M);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function tt(T,M){let W=n.get(T);if(T.version>0&&W.__version!==T.version){Q(W,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function ht(T,M){let W=n.get(T);if(T.version>0&&W.__version!==T.version){Q(W,T,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function $(T,M){let W=n.get(T);if(T.version>0&&W.__version!==T.version){k(W,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let mt={[El]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},lt={[Re]:i.NEAREST,[Mp]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},It={[Tp]:i.NEVER,[Lp]:i.ALWAYS,[Ap]:i.LESS,[Ku]:i.LEQUAL,[Rp]:i.EQUAL,[Pp]:i.GEQUAL,[Cp]:i.GREATER,[Ip]:i.NOTEQUAL};function Xt(T,M){if(M.type===Tn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Dn||M.magFilter===Oa||M.magFilter===ro||M.magFilter===Vi||M.minFilter===Dn||M.minFilter===Oa||M.minFilter===ro||M.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,mt[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,mt[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,mt[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,It[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Re||M.minFilter!==ro&&M.minFilter!==Vi||M.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ce(T,M){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",L));let nt=M.source,ot=p.get(nt);ot===void 0&&(ot={},p.set(nt,ot));let et=j(M);if(et!==T.__cacheKey){ot[et]===void 0&&(ot[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ot[et].usedTimes++;let At=ot[T.__cacheKey];At!==void 0&&(ot[T.__cacheKey].usedTimes--,At.usedTimes===0&&E(M)),T.__cacheKey=et,T.__webglTexture=ot[et].texture}return W}function Q(T,M,W){let nt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=i.TEXTURE_3D);let ot=ce(T,M),et=M.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+W);let At=n.get(et);if(et.version!==At.__version||ot===!0){e.activeTexture(i.TEXTURE0+W);let vt=le.getPrimaries(le.workingColorSpace),bt=M.colorSpace===ui?null:le.getPrimaries(M.colorSpace),te=M.colorSpace===ui||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ct=y(M.image,!1,s.maxTextureSize);ct=pe(M,ct);let ft=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),zt=A(M.internalFormat,ft,Nt,M.colorSpace,M.isVideoTexture);Xt(nt,M);let Mt,ie=M.mipmaps,qt=M.isVideoTexture!==!0,me=At.__version===void 0||ot===!0,F=et.dataReady,pt=V(M,ct);if(M.isDepthTexture)zt=w(M.format===Ls,M.type),me&&(qt?e.texStorage2D(i.TEXTURE_2D,1,zt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,zt,ct.width,ct.height,0,ft,Nt,null));else if(M.isDataTexture)if(ie.length>0){qt&&me&&e.texStorage2D(i.TEXTURE_2D,pt,zt,ie[0].width,ie[0].height);for(let Z=0,st=ie.length;Z<st;Z++)Mt=ie[Z],qt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,ft,Nt,Mt.data):e.texImage2D(i.TEXTURE_2D,Z,zt,Mt.width,Mt.height,0,ft,Nt,Mt.data);M.generateMipmaps=!1}else qt?(me&&e.texStorage2D(i.TEXTURE_2D,pt,zt,ct.width,ct.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,ft,Nt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,zt,ct.width,ct.height,0,ft,Nt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,zt,ie[0].width,ie[0].height,ct.depth);for(let Z=0,st=ie.length;Z<st;Z++)if(Mt=ie[Z],M.format!==hn)if(ft!==null)if(qt){if(F)if(M.layerUpdates.size>0){let yt=Uu(Mt.width,Mt.height,M.format,M.type);for(let gt of M.layerUpdates){let kt=Mt.data.subarray(gt*yt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*yt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,gt,Mt.width,Mt.height,1,ft,kt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,ct.depth,ft,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,zt,Mt.width,Mt.height,ct.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,ct.depth,ft,Nt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,zt,Mt.width,Mt.height,ct.depth,0,ft,Nt,Mt.data)}else{qt&&me&&e.texStorage2D(i.TEXTURE_2D,pt,zt,ie[0].width,ie[0].height);for(let Z=0,st=ie.length;Z<st;Z++)Mt=ie[Z],M.format!==hn?ft!==null?qt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,ft,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,zt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,ft,Nt,Mt.data):e.texImage2D(i.TEXTURE_2D,Z,zt,Mt.width,Mt.height,0,ft,Nt,Mt.data)}else if(M.isDataArrayTexture)if(qt){if(me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,zt,ct.width,ct.height,ct.depth),F)if(M.layerUpdates.size>0){let Z=Uu(ct.width,ct.height,M.format,M.type);for(let st of M.layerUpdates){let yt=ct.data.subarray(st*Z/ct.data.BYTES_PER_ELEMENT,(st+1)*Z/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,ft,Nt,yt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,ft,Nt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ct.width,ct.height,ct.depth,0,ft,Nt,ct.data);else if(M.isData3DTexture)qt?(me&&e.texStorage3D(i.TEXTURE_3D,pt,zt,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,ft,Nt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ct.width,ct.height,ct.depth,0,ft,Nt,ct.data);else if(M.isFramebufferTexture){if(me)if(qt)e.texStorage2D(i.TEXTURE_2D,pt,zt,ct.width,ct.height);else{let Z=ct.width,st=ct.height;for(let yt=0;yt<pt;yt++)e.texImage2D(i.TEXTURE_2D,yt,zt,Z,st,0,ft,Nt,null),Z>>=1,st>>=1}}else if(ie.length>0){if(qt&&me){let Z=Ut(ie[0]);e.texStorage2D(i.TEXTURE_2D,pt,zt,Z.width,Z.height)}for(let Z=0,st=ie.length;Z<st;Z++)Mt=ie[Z],qt?F&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ft,Nt,Mt):e.texImage2D(i.TEXTURE_2D,Z,zt,ft,Nt,Mt);M.generateMipmaps=!1}else if(qt){if(me){let Z=Ut(ct);e.texStorage2D(i.TEXTURE_2D,pt,zt,Z.width,Z.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Nt,ct)}else e.texImage2D(i.TEXTURE_2D,0,zt,ft,Nt,ct);m(M)&&d(nt),At.__version=et.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function k(T,M,W){if(M.image.length!==6)return;let nt=ce(T,M),ot=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);let et=n.get(ot);if(ot.version!==et.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);let At=le.getPrimaries(le.workingColorSpace),vt=M.colorSpace===ui?null:le.getPrimaries(M.colorSpace),bt=M.colorSpace===ui||At===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let te=M.isCompressedTexture||M.image[0].isCompressedTexture,ct=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let st=0;st<6;st++)!te&&!ct?ft[st]=y(M.image[st],!0,s.maxCubemapSize):ft[st]=ct?M.image[st].image:M.image[st],ft[st]=pe(M,ft[st]);let Nt=ft[0],zt=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),ie=A(M.internalFormat,zt,Mt,M.colorSpace),qt=M.isVideoTexture!==!0,me=et.__version===void 0||nt===!0,F=ot.dataReady,pt=V(M,Nt);Xt(i.TEXTURE_CUBE_MAP,M);let Z;if(te){qt&&me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ie,Nt.width,Nt.height);for(let st=0;st<6;st++){Z=ft[st].mipmaps;for(let yt=0;yt<Z.length;yt++){let gt=Z[yt];M.format!==hn?zt!==null?qt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,gt.width,gt.height,zt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,ie,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,gt.width,gt.height,zt,Mt,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,ie,gt.width,gt.height,0,zt,Mt,gt.data)}}}else{if(Z=M.mipmaps,qt&&me){Z.length>0&&pt++;let st=Ut(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,ie,st.width,st.height)}for(let st=0;st<6;st++)if(ct){qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ft[st].width,ft[st].height,zt,Mt,ft[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ie,ft[st].width,ft[st].height,0,zt,Mt,ft[st].data);for(let yt=0;yt<Z.length;yt++){let kt=Z[yt].image[st].image;qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,kt.width,kt.height,zt,Mt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,ie,kt.width,kt.height,0,zt,Mt,kt.data)}}else{qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,zt,Mt,ft[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ie,zt,Mt,ft[st]);for(let yt=0;yt<Z.length;yt++){let gt=Z[yt];qt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,zt,Mt,gt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,ie,zt,Mt,gt.image[st])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),et.__version=ot.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function at(T,M,W,nt,ot,et){let At=r.convert(W.format,W.colorSpace),vt=r.convert(W.type),bt=A(W.internalFormat,At,vt,W.colorSpace),te=n.get(M),ct=n.get(W);if(ct.__renderTarget=M,!te.__hasExternalTextures){let ft=Math.max(1,M.width>>et),Nt=Math.max(1,M.height>>et);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,bt,ft,Nt,M.depth,0,At,vt,null):e.texImage2D(ot,et,bt,ft,Nt,0,At,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ot,ct.__webglTexture,0,jt(M)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ot,ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){let nt=M.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,et=w(M.stencilBuffer,ot),At=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=jt(M);Ht(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,et,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{let nt=M.textures;for(let ot=0;ot<nt.length;ot++){let et=nt[ot],At=r.convert(et.format,et.colorSpace),vt=r.convert(et.type),bt=A(et.internalFormat,At,vt,et.colorSpace),te=jt(M);W&&Ht(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,bt,M.width,M.height):Ht(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,bt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,bt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(M.depthTexture);nt.__renderTarget=M,(!nt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),it(M.depthTexture,0);let ot=nt.__webglTexture,et=jt(M);if(M.depthTexture.format===Es)Ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(M.depthTexture.format===Ls)Ht(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function wt(T){let M=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let nt=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){let ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=nt}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(M.__webglFramebuffer,T)}else if(W){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=i.createRenderbuffer(),rt(M.__webglDepthbuffer[nt],T,!1);else{let ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=M.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),rt(M.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(T,M,W){let nt=n.get(T);M!==void 0&&at(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&wt(T)}function Qt(T){let M=T.texture,W=n.get(T),nt=n.get(M);T.addEventListener("dispose",D);let ot=T.textures,et=T.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=M.version,o.memory.textures++),et){W.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[vt]=[];for(let bt=0;bt<M.mipmaps.length;bt++)W.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else W.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)W.__webglFramebuffer[vt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(At)for(let vt=0,bt=ot.length;vt<bt;vt++){let te=n.get(ot[vt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ht(T)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let vt=0;vt<ot.length;vt++){let bt=ot[vt];W.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[vt]);let te=r.convert(bt.format,bt.colorSpace),ct=r.convert(bt.type),ft=A(bt.internalFormat,te,ct,bt.colorSpace,T.isXRRenderTarget===!0),Nt=jt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,W.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,M);for(let vt=0;vt<6;vt++)if(M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)at(W.__webglFramebuffer[vt][bt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else at(W.__webglFramebuffer[vt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let vt=0,bt=ot.length;vt<bt;vt++){let te=ot[vt],ct=n.get(te);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),Xt(i.TEXTURE_2D,te),at(W.__webglFramebuffer,T,te,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(te)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,nt.__webglTexture),Xt(vt,M),M.mipmaps&&M.mipmaps.length>0)for(let bt=0;bt<M.mipmaps.length;bt++)at(W.__webglFramebuffer[bt],T,M,i.COLOR_ATTACHMENT0,vt,bt);else at(W.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,vt,0);m(M)&&d(vt),e.unbindTexture()}T.depthBuffer&&wt(T)}function Ft(T){let M=T.textures;for(let W=0,nt=M.length;W<nt;W++){let ot=M[W];if(m(ot)){let et=R(T),At=n.get(ot).__webglTexture;e.bindTexture(et,At),d(et),e.unbindTexture()}}}let se=[],O=[];function Ve(T){if(T.samples>0){if(Ht(T)===!1){let M=T.textures,W=T.width,nt=T.height,ot=i.COLOR_BUFFER_BIT,et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),vt=M.length>1;if(vt)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let te=n.get(M[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,W,nt,0,0,W,nt,ot,i.NEAREST),l===!0&&(se.length=0,O.length=0,se.push(i.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(se.push(et),O.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let te=n.get(M[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function jt(T){return Math.min(s.maxSamples,T.samples)}function Ht(T){let M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ot(T){let M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function pe(T,M){let W=T.colorSpace,nt=T.format,ot=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==xi&&W!==ui&&(le.getTransfer(W)===xe?(nt!==hn||ot!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Ut(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=K,this.setTexture2D=it,this.setTexture2DArray=tt,this.setTexture3D=ht,this.setTextureCube=$,this.rebindTextures=Pt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Ht}function w_(i,t){function e(n,s=ui){let r,o=le.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===Cc)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===hn)return i.RGBA;if(n===Yu)return i.LUMINANCE;if(n===Zu)return i.LUMINANCE_ALPHA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===$u)return i.RG;if(n===Dc)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===Io||n===Po||n===Lo||n===Do)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pl||n===Ll)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Dl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===Zl||n===$l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ju||n===Jl||n===Kl||n===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var pc=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},bs=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},E_={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&p>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`,mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new dn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:T_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gc=class extends pi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,p=null,g=null,_=null,y=new mc,m=e.getContextAttributes(),d=null,R=null,A=[],w=[],V=new ue,L=null,D=new Ze;D.viewport=new _e;let U=new Ze;U.viewport=new _e;let E=[D,U],b=new pc,P=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let k=A[Q];return k===void 0&&(k=new vr,A[Q]=k),k.getTargetRaySpace()},this.getControllerGrip=function(Q){let k=A[Q];return k===void 0&&(k=new vr,A[Q]=k),k.getGripSpace()},this.getHand=function(Q){let k=A[Q];return k===void 0&&(k=new vr,A[Q]=k),k.getHandSpace()};function Y(Q){let k=w.indexOf(Q.inputSource);if(k===-1)return;let at=A[k];at!==void 0&&(at.update(Q.inputSource,Q.frame,c||o),at.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",it);for(let Q=0;Q<A.length;Q++){let k=w[Q];k!==null&&(w[Q]=null,A[Q].disconnect(k))}P=null,K=null,y.reset(),t.setRenderTarget(d),g=null,p=null,f=null,s=null,R=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",j),s.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(V),s.renderState.layers===void 0){let k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),R=new gn(g.framebufferWidth,g.framebufferHeight,{format:hn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,at=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?Ls:Es,at=m.stencil?Ps:Hi);let St={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(s,e),p=f.createProjectionLayer(St),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new gn(p.textureWidth,p.textureHeight,{format:hn,type:un,depthTexture:new Os(p.textureWidth,p.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function it(Q){for(let k=0;k<Q.removed.length;k++){let at=Q.removed[k],rt=w.indexOf(at);rt>=0&&(w[rt]=null,A[rt].disconnect(at))}for(let k=0;k<Q.added.length;k++){let at=Q.added[k],rt=w.indexOf(at);if(rt===-1){for(let wt=0;wt<A.length;wt++)if(wt>=w.length){w.push(at),rt=wt;break}else if(w[wt]===null){w[wt]=at,rt=wt;break}if(rt===-1)break}let St=A[rt];St&&St.connect(at)}}let tt=new G,ht=new G;function $(Q,k,at){tt.setFromMatrixPosition(k.matrixWorld),ht.setFromMatrixPosition(at.matrixWorld);let rt=tt.distanceTo(ht),St=k.projectionMatrix.elements,wt=at.projectionMatrix.elements,Pt=St[14]/(St[10]-1),Qt=St[14]/(St[10]+1),Ft=(St[9]+1)/St[5],se=(St[9]-1)/St[5],O=(St[8]-1)/St[0],Ve=(wt[8]+1)/wt[0],jt=Pt*O,Ht=Pt*Ve,Ot=rt/(-O+Ve),pe=Ot*-O;if(k.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(pe),Q.translateZ(Ot),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(k.projectionMatrix),Q.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let Ut=Pt+Ot,T=Qt+Ot,M=jt-pe,W=Ht+(rt-pe),nt=Ft*Qt/T*Ut,ot=se*Qt/T*Ut;Q.projectionMatrix.makePerspective(M,W,nt,ot,Ut,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function mt(Q,k){k===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(k.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let k=Q.near,at=Q.far;y.texture!==null&&(y.depthNear>0&&(k=y.depthNear),y.depthFar>0&&(at=y.depthFar)),b.near=U.near=D.near=k,b.far=U.far=D.far=at,(P!==b.near||K!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,K=b.far),D.layers.mask=Q.layers.mask|2,U.layers.mask=Q.layers.mask|4,b.layers.mask=D.layers.mask|U.layers.mask;let rt=Q.parent,St=b.cameras;mt(b,rt);for(let wt=0;wt<St.length;wt++)mt(St[wt],rt);St.length===2?$(b,D,U):b.projectionMatrix.copy(D.projectionMatrix),lt(Q,b,rt)};function lt(Q,k,at){at===null?Q.matrix.copy(k.matrixWorld):(Q.matrix.copy(at.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(k.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(k.projectionMatrix),Q.projectionMatrixInverse.copy(k.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=tc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(b)};let It=null;function Xt(Q,k){if(u=k.getViewerPose(c||o),_=k,u!==null){let at=u.views;g!==null&&(t.setRenderTargetFramebuffer(R,g.framebuffer),t.setRenderTarget(R));let rt=!1;at.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let wt=0;wt<at.length;wt++){let Pt=at[wt],Qt=null;if(g!==null)Qt=g.getViewport(Pt);else{let se=f.getViewSubImage(p,Pt);Qt=se.viewport,wt===0&&(t.setRenderTargetTextures(R,se.colorTexture,p.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(R))}let Ft=E[wt];Ft===void 0&&(Ft=new Ze,Ft.layers.enable(wt),Ft.viewport=new _e,E[wt]=Ft),Ft.matrix.fromArray(Pt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Pt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),wt===0&&(b.matrix.copy(Ft.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(Ft)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let wt=f.getDepthInformation(at[0]);wt&&wt.isValid&&wt.texture&&y.init(t,wt,s.renderState)}}for(let at=0;at<A.length;at++){let rt=w[at],St=A[at];rt!==null&&St!==void 0&&St.update(rt,k,c||o)}It&&It(Q,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}let ce=new nd;ce.setAnimationLoop(Xt),this.setAnimationLoop=function(Q){It=Q},this.dispose=function(){}}},Ni=new An,R_=new ne;function C_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ed(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,R,A,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,w)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,R,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let R=t.get(d),A=R.envMap,w=R.envMapRotation;A&&(m.envMap.value=A,Ni.copy(w),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(Ni)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=A*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let R=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){let w=A.program;n.uniformBlockBinding(R,w)}function c(R,A){let w=s[R.id];w===void 0&&(_(R),w=u(R),s[R.id]=w,R.addEventListener("dispose",m));let V=A.program;n.updateUBOMapping(R,V);let L=t.render.frame;r[R.id]!==L&&(p(R),r[R.id]=L)}function u(R){let A=f();R.__bindingPointIndex=A;let w=i.createBuffer(),V=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,V,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){let A=s[R.id],w=R.uniforms,V=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let L=0,D=w.length;L<D;L++){let U=Array.isArray(w[L])?w[L]:[w[L]];for(let E=0,b=U.length;E<b;E++){let P=U[E];if(g(P,L,E,V)===!0){let K=P.__offset,Y=Array.isArray(P.value)?P.value:[P.value],j=0;for(let it=0;it<Y.length;it++){let tt=Y[it],ht=y(tt);typeof tt=="number"||typeof tt=="boolean"?(P.__data[0]=tt,i.bufferSubData(i.UNIFORM_BUFFER,K+j,P.__data)):tt.isMatrix3?(P.__data[0]=tt.elements[0],P.__data[1]=tt.elements[1],P.__data[2]=tt.elements[2],P.__data[3]=0,P.__data[4]=tt.elements[3],P.__data[5]=tt.elements[4],P.__data[6]=tt.elements[5],P.__data[7]=0,P.__data[8]=tt.elements[6],P.__data[9]=tt.elements[7],P.__data[10]=tt.elements[8],P.__data[11]=0):(tt.toArray(P.__data,j),j+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(R,A,w,V){let L=R.value,D=A+"_"+w;if(V[D]===void 0)return typeof L=="number"||typeof L=="boolean"?V[D]=L:V[D]=L.clone(),!0;{let U=V[D];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return V[D]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function _(R){let A=R.uniforms,w=0,V=16;for(let D=0,U=A.length;D<U;D++){let E=Array.isArray(A[D])?A[D]:[A[D]];for(let b=0,P=E.length;b<P;b++){let K=E[b],Y=Array.isArray(K.value)?K.value:[K.value];for(let j=0,it=Y.length;j<it;j++){let tt=Y[j],ht=y(tt),$=w%V,mt=$%ht.boundary,lt=$+mt;w+=mt,lt!==0&&V-lt<ht.storage&&(w+=V-lt),K.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=ht.storage}}}let L=w%V;return L>0&&(w+=V-L),R.__size=w,R.__cache={},this}function y(R){let A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){let A=R.target;A.removeEventListener("dispose",m);let w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var qo=class{constructor(t={}){let{canvas:e=Up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=fi,this.toneMappingExposure=1;let w=this,V=!1,L=0,D=0,U=null,E=-1,b=null,P=new _e,K=new _e,Y=null,j=new fe(0),it=0,tt=e.width,ht=e.height,$=1,mt=null,lt=null,It=new _e(0,0,tt,ht),Xt=new _e(0,0,tt,ht),ce=!1,Q=new Ns,k=!1,at=!1,rt=new ne,St=new ne,wt=new G,Pt=new _e,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function se(){return U===null?$:1}let O=n;function Ve(S,B){return e.getContext(S,B)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),O===null){let B="webgl2";if(O=Ve(B,S),O===null)throw Ve(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let jt,Ht,Ot,pe,Ut,T,M,W,nt,ot,et,At,vt,bt,te,ct,ft,Nt,zt,Mt,ie,qt,me,F;function pt(){jt=new q0(O),jt.init(),qt=new w_(O,jt),Ht=new k0(O,jt,t,qt),Ot=new M_(O,jt),Ht.reverseDepthBuffer&&p&&Ot.buffers.depth.setReversed(!0),pe=new $0(O),Ut=new l_,T=new b_(O,jt,Ot,Ut,Ht,qt,pe),M=new H0(w),W=new X0(w),nt=new nm(O),me=new B0(O,nt),ot=new Y0(O,nt,pe,me),et=new K0(O,ot,nt,pe),zt=new J0(O,Ht,T),ct=new V0(Ut),At=new a_(w,M,W,jt,Ht,me,ct),vt=new C_(w,Ut),bt=new h_,te=new g_(jt),Nt=new O0(w,M,W,Ot,et,g,l),ft=new v_(w,et,Ht),F=new I_(O,pe,Ht,Ot),Mt=new z0(O,jt,pe),ie=new Z0(O,jt,pe),pe.programs=At.programs,w.capabilities=Ht,w.extensions=jt,w.properties=Ut,w.renderLists=bt,w.shadowMap=ft,w.state=Ot,w.info=pe}pt();let Z=new gc(w,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(tt,ht,!1))},this.getSize=function(S){return S.set(tt,ht)},this.setSize=function(S,B,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=S,ht=B,e.width=Math.floor(S*$),e.height=Math.floor(B*$),X===!0&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(tt*$,ht*$).floor()},this.setDrawingBufferSize=function(S,B,X){tt=S,ht=B,$=X,e.width=Math.floor(S*X),e.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(It)},this.setViewport=function(S,B,X,q){S.isVector4?It.set(S.x,S.y,S.z,S.w):It.set(S,B,X,q),Ot.viewport(P.copy(It).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(Xt)},this.setScissor=function(S,B,X,q){S.isVector4?Xt.set(S.x,S.y,S.z,S.w):Xt.set(S,B,X,q),Ot.scissor(K.copy(Xt).multiplyScalar($).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){Ot.setScissorTest(ce=S)},this.setOpaqueSort=function(S){mt=S},this.setTransparentSort=function(S){lt=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,B=!0,X=!0){let q=0;if(S){let N=!1;if(U!==null){let ut=U.texture.format;N=ut===Uc||ut===Dc||ut===Lc}if(N){let ut=U.texture.type,xt=ut===un||ut===Hi||ut===yr||ut===Ps||ut===Ic||ut===Pc,Tt=Nt.getClearColor(),Lt=Nt.getClearAlpha(),Bt=Tt.r,Gt=Tt.g,Et=Tt.b;xt?(_[0]=Bt,_[1]=Gt,_[2]=Et,_[3]=Lt,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=Bt,y[1]=Gt,y[2]=Et,y[3]=Lt,O.clearBufferiv(O.COLOR,0,y))}else q|=O.COLOR_BUFFER_BIT}B&&(q|=O.DEPTH_BUFFER_BIT),X&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),bt.dispose(),te.dispose(),Ut.dispose(),M.dispose(),W.dispose(),et.dispose(),me.dispose(),F.dispose(),At.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ki),Z.removeEventListener("sessionend",Js),On.stop()};function st(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let S=pe.autoReset,B=ft.enabled,X=ft.autoUpdate,q=ft.needsUpdate,N=ft.type;pt(),pe.autoReset=S,ft.enabled=B,ft.autoUpdate=X,ft.needsUpdate=q,ft.type=N}function gt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){let B=S.target;B.removeEventListener("dispose",kt),ge(B)}function ge(S){Le(S),Ut.remove(S)}function Le(S){let B=Ut.get(S).programs;B!==void 0&&(B.forEach(function(X){At.releaseProgram(X)}),S.isShaderMaterial&&At.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,q,N,ut){B===null&&(B=Qt);let xt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=Fr(S,B,X,q,N);Ot.setMaterial(q,xt);let Lt=X.index,Bt=1;if(q.wireframe===!0){if(Lt=ot.getWireframeAttribute(X),Lt===void 0)return;Bt=2}let Gt=X.drawRange,Et=X.attributes.position,Jt=Gt.start*Bt,oe=(Gt.start+Gt.count)*Bt;ut!==null&&(Jt=Math.max(Jt,ut.start*Bt),oe=Math.min(oe,(ut.start+ut.count)*Bt)),Lt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,Lt.count)):Et!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,Et.count));let de=oe-Jt;if(de<0||de===1/0)return;me.setup(N,q,Tt,X,Lt);let we,ae=Mt;if(Lt!==null&&(we=nt.get(Lt),ae=ie,ae.setIndex(we)),N.isMesh)q.wireframe===!0?(Ot.setLineWidth(q.wireframeLinewidth*se()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(N.isLine){let Ct=q.linewidth;Ct===void 0&&(Ct=1),Ot.setLineWidth(Ct*se()),N.isLineSegments?ae.setMode(O.LINES):N.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else N.isPoints?ae.setMode(O.POINTS):N.isSprite&&ae.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,yn=N._multiDrawCounts,he=N._multiDrawCount,Je=Lt?nt.get(Lt).bytesPerElement:1,ei=Ut.get(q).currentProgram.getUniforms();for(let Be=0;Be<he;Be++)ei.setValue(O,"_gl_DrawID",Be),ae.render(Ct[Be]/Je,yn[Be])}else if(N.isInstancedMesh)ae.renderInstances(Jt,de,N.count);else if(X.isInstancedBufferGeometry){let Ct=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,yn=Math.min(X.instanceCount,Ct);ae.renderInstances(Jt,de,yn)}else ae.render(Jt,de)};function re(S,B,X){S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,bi(S,B,X),S.side=Un,S.needsUpdate=!0,bi(S,B,X),S.side=En):bi(S,B,X)}this.compile=function(S,B,X=null){X===null&&(X=S),d=te.get(X),d.init(B),A.push(d),X.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==X&&S.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let q=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ut=N.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){let Tt=ut[xt];re(Tt,X,N),q.add(Tt)}else re(ut,X,N),q.add(ut)}),A.pop(),d=null,q},this.compileAsync=function(S,B,X=null){let q=this.compile(S,B,X);return new Promise(N=>{function ut(){if(q.forEach(function(xt){Ut.get(xt).currentProgram.isReady()&&q.delete(xt)}),q.size===0){N(S);return}setTimeout(ut,10)}jt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let He=null;function $e(S){He&&He(S)}function Ki(){On.stop()}function Js(){On.start()}let On=new nd;On.setAnimationLoop($e),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){He=S,Z.setAnimationLoop(S),S===null?On.stop():On.start()},Z.addEventListener("sessionstart",Ki),Z.addEventListener("sessionend",Js),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(w,S,B,U),d=te.get(S,A.length),d.init(B),A.push(d),St.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(St),at=this.localClippingEnabled,k=ct.init(this.clippingPlanes,at),m=bt.get(S,R.length),m.init(),R.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ut=w.xr.getDepthSensingMesh();ut!==null&&ti(ut,B,-1/0,w.sortObjects)}ti(S,B,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(mt,lt),Ft=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ft&&Nt.addToRenderList(m,S),this.info.render.frame++,k===!0&&ct.beginShadows();let X=d.state.shadowsArray;ft.render(X,S,B),k===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,N=m.transmissive;if(d.setupLights(),B.isArrayCamera){let ut=B.cameras;if(N.length>0)for(let xt=0,Tt=ut.length;xt<Tt;xt++){let Lt=ut[xt];Dr(q,N,S,Lt)}Ft&&Nt.render(S);for(let xt=0,Tt=ut.length;xt<Tt;xt++){let Lt=ut[xt];Lr(m,S,Lt,Lt.viewport)}}else N.length>0&&Dr(q,N,S,B),Ft&&Nt.render(S),Lr(m,S,B);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(w,S,B),me.resetDefaultState(),E=-1,b=null,A.pop(),A.length>0?(d=A[A.length-1],k===!0&&ct.setGlobalState(w.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function ti(S,B,X,q){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){q&&Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(St);let xt=et.update(S),Tt=S.material;Tt.visible&&m.push(S,xt,Tt,X,Pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Q.intersectsObject(S))){let xt=et.update(S),Tt=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pt.copy(S.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Pt.copy(xt.boundingSphere.center)),Pt.applyMatrix4(S.matrixWorld).applyMatrix4(St)),Array.isArray(Tt)){let Lt=xt.groups;for(let Bt=0,Gt=Lt.length;Bt<Gt;Bt++){let Et=Lt[Bt],Jt=Tt[Et.materialIndex];Jt&&Jt.visible&&m.push(S,xt,Jt,X,Pt.z,Et)}}else Tt.visible&&m.push(S,xt,Tt,X,Pt.z,null)}}let ut=S.children;for(let xt=0,Tt=ut.length;xt<Tt;xt++)ti(ut[xt],B,X,q)}function Lr(S,B,X,q){let N=S.opaque,ut=S.transmissive,xt=S.transparent;d.setupLightsView(X),k===!0&&ct.setGlobalState(w.clippingPlanes,X),q&&Ot.viewport(P.copy(q)),N.length>0&&Mi(N,B,X),ut.length>0&&Mi(ut,B,X),xt.length>0&&Mi(xt,B,X),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function Dr(S,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new gn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Mr:un,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let ut=d.state.transmissionRenderTarget[q.id],xt=q.viewport||P;ut.setSize(xt.z,xt.w);let Tt=w.getRenderTarget();w.setRenderTarget(ut),w.getClearColor(j),it=w.getClearAlpha(),it<1&&w.setClearColor(16777215,.5),w.clear(),Ft&&Nt.render(X);let Lt=w.toneMapping;w.toneMapping=fi;let Bt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),k===!0&&ct.setGlobalState(w.clippingPlanes,q),Mi(S,X,q),T.updateMultisampleRenderTarget(ut),T.updateRenderTargetMipmap(ut),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Et=0,Jt=B.length;Et<Jt;Et++){let oe=B[Et],de=oe.object,we=oe.geometry,ae=oe.material,Ct=oe.group;if(ae.side===En&&de.layers.test(q.layers)){let yn=ae.side;ae.side=sn,ae.needsUpdate=!0,Si(de,X,q,we,ae,Ct),ae.side=yn,ae.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(ut),T.updateRenderTargetMipmap(ut))}w.setRenderTarget(Tt),w.setClearColor(j,it),Bt!==void 0&&(q.viewport=Bt),w.toneMapping=Lt}function Mi(S,B,X){let q=B.isScene===!0?B.overrideMaterial:null;for(let N=0,ut=S.length;N<ut;N++){let xt=S[N],Tt=xt.object,Lt=xt.geometry,Bt=q===null?xt.material:q,Gt=xt.group;Tt.layers.test(X.layers)&&Si(Tt,B,X,Lt,Bt,Gt)}}function Si(S,B,X,q,N,ut){S.onBeforeRender(w,B,X,q,N,ut),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(w,B,X,q,S,ut),N.transparent===!0&&N.side===En&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,w.renderBufferDirect(X,B,q,N,S,ut),N.side=Un,N.needsUpdate=!0,w.renderBufferDirect(X,B,q,N,S,ut),N.side=En):w.renderBufferDirect(X,B,q,N,S,ut),S.onAfterRender(w,B,X,q,N,ut)}function bi(S,B,X){B.isScene!==!0&&(B=Qt);let q=Ut.get(S),N=d.state.lights,ut=d.state.shadowsArray,xt=N.state.version,Tt=At.getParameters(S,N.state,ut,B,X),Lt=At.getProgramCacheKey(Tt),Bt=q.programs;q.environment=S.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(S.isMeshStandardMaterial?W:M).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",kt),Bt=new Map,q.programs=Bt);let Gt=Bt.get(Lt);if(Gt!==void 0){if(q.currentProgram===Gt&&q.lightsStateVersion===xt)return Nr(S,Tt),Gt}else Tt.uniforms=At.getUniforms(S),S.onBeforeCompile(Tt,w),Gt=At.acquireProgram(Tt,Lt),Bt.set(Lt,Gt),q.uniforms=Tt.uniforms;let Et=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=ct.uniform),Nr(S,Tt),q.needsLights=Or(S),q.lightsStateVersion=xt,q.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=Gt,q.uniformsList=null,Gt}function Ur(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=As.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Nr(S,B){let X=Ut.get(S);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Fr(S,B,X,q,N){B.isScene!==!0&&(B=Qt),T.resetTextureUnits();let ut=B.fog,xt=q.isMeshStandardMaterial?B.environment:null,Tt=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xi,Lt=(q.isMeshStandardMaterial?W:M).get(q.envMap||xt),Bt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Et=!!X.morphAttributes.position,Jt=!!X.morphAttributes.normal,oe=!!X.morphAttributes.color,de=fi;q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(de=w.toneMapping);let we=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=we!==void 0?we.length:0,Ct=Ut.get(q),yn=d.state.lights;if(k===!0&&(at===!0||S!==b)){let De=S===b&&q.id===E;ct.setState(q,S,De)}let he=!1;q.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==yn.state.version||Ct.outputColorSpace!==Tt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Lt||q.fog===!0&&Ct.fog!==ut||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ct.numPlanes||Ct.numIntersection!==ct.numIntersection)||Ct.vertexAlphas!==Bt||Ct.vertexTangents!==Gt||Ct.morphTargets!==Et||Ct.morphNormals!==Jt||Ct.morphColors!==oe||Ct.toneMapping!==de||Ct.morphTargetsCount!==ae)&&(he=!0):(he=!0,Ct.__version=q.version);let Je=Ct.currentProgram;he===!0&&(Je=bi(q,B,N));let ei=!1,Be=!1,Ei=!1,Zt=Je.getUniforms(),Ce=Ct.uniforms;if(Ot.useProgram(Je.program)&&(ei=!0,Be=!0,Ei=!0),q.id!==E&&(E=q.id,Be=!0),ei||b!==S){Ot.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),Fp(rt),Op(rt),Zt.setValue(O,"projectionMatrix",rt)):Zt.setValue(O,"projectionMatrix",S.projectionMatrix),Zt.setValue(O,"viewMatrix",S.matrixWorldInverse);let Qe=Zt.map.cameraPosition;Qe!==void 0&&Qe.setValue(O,wt.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&Zt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Zt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Be=!0,Ei=!0)}if(N.isSkinnedMesh){Zt.setOptional(O,N,"bindMatrix"),Zt.setOptional(O,N,"bindMatrixInverse");let De=N.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Zt.setValue(O,"boneTexture",De.boneTexture,T))}N.isBatchedMesh&&(Zt.setOptional(O,N,"batchingTexture"),Zt.setValue(O,"batchingTexture",N._matricesTexture,T),Zt.setOptional(O,N,"batchingIdTexture"),Zt.setValue(O,"batchingIdTexture",N._indirectTexture,T),Zt.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&Zt.setValue(O,"batchingColorTexture",N._colorsTexture,T));let Ke=X.morphAttributes;if((Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)&&zt.update(N,X,Je),(Be||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,Zt.setValue(O,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ce.envMap.value=Lt,Ce.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Ce.envMapIntensity.value=B.environmentIntensity),Be&&(Zt.setValue(O,"toneMappingExposure",w.toneMappingExposure),Ct.needsLights&&wi(Ce,Ei),ut&&q.fog===!0&&vt.refreshFogUniforms(Ce,ut),vt.refreshMaterialUniforms(Ce,q,$,ht,d.state.transmissionRenderTarget[S.id]),As.upload(O,Ur(Ct),Ce,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(As.upload(O,Ur(Ct),Ce,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Zt.setValue(O,"center",N.center),Zt.setValue(O,"modelViewMatrix",N.modelViewMatrix),Zt.setValue(O,"normalMatrix",N.normalMatrix),Zt.setValue(O,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let De=q.uniformsGroups;for(let Qe=0,rn=De.length;Qe<rn;Qe++){let Qi=De[Qe];F.update(Qi,Je),F.bind(Qi,Je)}}return Je}function wi(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Or(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,B,X){Ut.get(S.texture).__webglTexture=B,Ut.get(S.depthTexture).__webglTexture=X;let q=Ut.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){let X=Ut.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,X=0){U=S,L=B,D=X;let q=!0,N=null,ut=!1,xt=!1;if(S){let Lt=Ut.get(S);if(Lt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Lt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Lt.__hasExternalTextures)T.rebindTextures(S,Ut.get(S.texture).__webglTexture,Ut.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Et=S.depthTexture;if(Lt.__boundDepthTexture!==Et){if(Et!==null&&Ut.has(Et)&&(S.width!==Et.image.width||S.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}let Bt=S.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);let Gt=Ut.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Gt[B])?N=Gt[B][X]:N=Gt[B],ut=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=Ut.get(S).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[X]:N=Gt,P.copy(S.viewport),K.copy(S.scissor),Y=S.scissorTest}else P.copy(It).multiplyScalar($).floor(),K.copy(Xt).multiplyScalar($).floor(),Y=ce;if(Ot.bindFramebuffer(O.FRAMEBUFFER,N)&&q&&Ot.drawBuffers(S,N),Ot.viewport(P),Ot.scissor(K),Ot.setScissorTest(Y),ut){let Lt=Ut.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Lt.__webglTexture,X)}else if(xt){let Lt=Ut.get(S.texture),Bt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,X||0,Bt)}E=-1},this.readRenderTargetPixels=function(S,B,X,q,N,ut,xt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){Ot.bindFramebuffer(O.FRAMEBUFFER,Tt);try{let Lt=S.texture,Bt=Lt.format,Gt=Lt.type;if(!Ht.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-q&&X>=0&&X<=S.height-N&&O.readPixels(B,X,q,N,qt.convert(Bt),qt.convert(Gt),ut)}finally{let Lt=U!==null?Ut.get(U).__webglFramebuffer:null;Ot.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(S,B,X,q,N,ut,xt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Ut.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){let Lt=S.texture,Bt=Lt.format,Gt=Lt.type;if(!Ht.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-q&&X>=0&&X<=S.height-N){Ot.bindFramebuffer(O.FRAMEBUFFER,Tt);let Et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.bufferData(O.PIXEL_PACK_BUFFER,ut.byteLength,O.STREAM_READ),O.readPixels(B,X,q,N,qt.convert(Bt),qt.convert(Gt),0);let Jt=U!==null?Ut.get(U).__webglFramebuffer:null;Ot.bindFramebuffer(O.FRAMEBUFFER,Jt);let oe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Np(O,oe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ut),O.deleteBuffer(Et),O.deleteSync(oe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,X=0){S.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);let q=Math.pow(2,-X),N=Math.floor(S.image.width*q),ut=Math.floor(S.image.height*q),xt=B!==null?B.x:0,Tt=B!==null?B.y:0;T.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,xt,Tt,N,ut),Ot.unbindTexture()},this.copyTextureToTexture=function(S,B,X=null,q=null,N=0){S.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],B=arguments[2],N=arguments[3]||0,X=null);let ut,xt,Tt,Lt,Bt,Gt,Et,Jt,oe,de=S.isCompressedTexture?S.mipmaps[N]:S.image;X!==null?(ut=X.max.x-X.min.x,xt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Bt=X.min.y,Gt=X.isBox3?X.min.z:0):(ut=de.width,xt=de.height,Tt=de.depth||1,Lt=0,Bt=0,Gt=0),q!==null?(Et=q.x,Jt=q.y,oe=q.z):(Et=0,Jt=0,oe=0);let we=qt.convert(B.format),ae=qt.convert(B.type),Ct;B.isData3DTexture?(T.setTexture3D(B,0),Ct=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(T.setTexture2DArray(B,0),Ct=O.TEXTURE_2D_ARRAY):(T.setTexture2D(B,0),Ct=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let yn=O.getParameter(O.UNPACK_ROW_LENGTH),he=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Je=O.getParameter(O.UNPACK_SKIP_PIXELS),ei=O.getParameter(O.UNPACK_SKIP_ROWS),Be=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,de.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gt);let Ei=S.isDataArrayTexture||S.isData3DTexture,Zt=B.isDataArrayTexture||B.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Ce=Ut.get(S),Ke=Ut.get(B),De=Ut.get(Ce.__renderTarget),Qe=Ut.get(Ke.__renderTarget);Ot.bindFramebuffer(O.READ_FRAMEBUFFER,De.__webglFramebuffer),Ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let rn=0;rn<Tt;rn++)Ei&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(S).__webglTexture,N,Gt+rn),S.isDepthTexture?(Zt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(B).__webglTexture,N,oe+rn),O.blitFramebuffer(Lt,Bt,ut,xt,Et,Jt,ut,xt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Zt?O.copyTexSubImage3D(Ct,N,Et,Jt,oe+rn,Lt,Bt,ut,xt):O.copyTexSubImage2D(Ct,N,Et,Jt,oe+rn,Lt,Bt,ut,xt);Ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Zt?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Ct,N,Et,Jt,oe,ut,xt,Tt,we,ae,de.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,N,Et,Jt,oe,ut,xt,Tt,we,de.data):O.texSubImage3D(Ct,N,Et,Jt,oe,ut,xt,Tt,we,ae,de):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Et,Jt,ut,xt,we,ae,de.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Et,Jt,de.width,de.height,we,de.data):O.texSubImage2D(O.TEXTURE_2D,N,Et,Jt,ut,xt,we,ae,de);O.pixelStorei(O.UNPACK_ROW_LENGTH,yn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Je),O.pixelStorei(O.UNPACK_SKIP_ROWS,ei),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be),N===0&&B.generateMipmaps&&O.generateMipmap(Ct),Ot.unbindTexture()},this.copyTextureToTexture3D=function(S,B,X=null,q=null,N=0){return S.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,S=arguments[2],B=arguments[3],N=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,X,q,N)},this.initRenderTarget=function(S){Ut.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ot.unbindTexture()},this.resetState=function(){L=0,D=0,U=null,Ot.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Bs=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var zs=class extends dn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Re,u=Re,f,p){super(null,o,a,l,c,u,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yo=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var xc=class extends Gi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zo=new G,$o=new G,Nu=new ne,gr=new ko,Ao=new gi,fl=new G,Fu=new G,_c=class extends xn{constructor(t=new tn,e=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zo.fromBufferAttribute(e,s-1),$o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zo.distanceTo($o);t.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;Nu.copy(s).invert(),gr.copy(t.ray).applyMatrix4(Nu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let g=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=g,m=_-1;y<m;y+=c){let d=u.getX(y),R=u.getX(y+1),A=Ro(this,t,gr,l,d,R);A&&e.push(A)}if(this.isLineLoop){let y=u.getX(_-1),m=u.getX(g),d=Ro(this,t,gr,l,y,m);d&&e.push(d)}}else{let g=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let y=g,m=_-1;y<m;y+=c){let d=Ro(this,t,gr,l,y,y+1);d&&e.push(d)}if(this.isLineLoop){let y=Ro(this,t,gr,l,_-1,g);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ro(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Zo.fromBufferAttribute(o,s),$o.fromBufferAttribute(o,r),e.distanceSqToSegment(Zo,$o,fl,Fu)>n)return;fl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fl);if(!(l<t.near||l>t.far))return{distance:l,point:Fu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Ou=new G,Bu=new G,Jo=class extends _c{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ou.fromBufferAttribute(e,s),Bu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ou.distanceTo(Bu);t.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ko=class i extends tn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new G,p=new G,g=[],_=[],y=[],m=[];for(let d=0;d<=n;d++){let R=[],A=d/n,w=0;d===0&&o===0?w=.5/e:d===n&&l===Math.PI&&(w=-.5/e);for(let V=0;V<=e;V++){let L=V/e;f.x=-t*Math.cos(s+L*r)*Math.sin(o+A*a),f.y=t*Math.cos(o+A*a),f.z=t*Math.sin(s+L*r)*Math.sin(o+A*a),_.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),m.push(L+w,1-A),R.push(c++)}u.push(R)}for(let d=0;d<n;d++)for(let R=0;R<e;R++){let A=u[d][R+1],w=u[d][R],V=u[d+1][R],L=u[d+1][R+1];(d!==0||o>0)&&g.push(A,w,L),(d!==n-1||l<Math.PI)&&g.push(w,V,L)}this.setIndex(g),this.setAttribute("position",new Ue(_,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Co(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function P_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ks=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends ks{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vh:r=t,a=2*e-n;break;case Hh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vh:o=t,l=2*n-e;break;case Hh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,d=-p*m+2*p*y-p*_,R=(1+p)*m+(-1.5-2*p)*y+(-.5+p)*_+1,A=(-1-g)*m+(1.5+g)*y+.5*_,w=g*m-g*y;for(let V=0;V!==a;++V)r[V]=d*o[u+V]+R*o[c+V]+A*o[l+V]+w*o[f+V];return r}},yc=class extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),f=1-u;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*u;return r}},Mc=class extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(e,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case No:e=this.InterpolantFactoryMethodDiscrete;break;case jl:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&P_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,p=f-n,g=f+n;for(let _=0;_!==n;++_){let y=e[f+_];if(y!==e[p+_]||y!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,p=o*n;for(let g=0;g!==n;++g)e[p+g]=e[f+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=jl;var Yi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=No;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sc=class extends Rn{};Sc.prototype.ValueTypeName="color";var bc=class extends Rn{};bc.prototype.ValueTypeName="number";var wc=class extends ks{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)mi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Qo=class extends Rn{InterpolantFactoryMethodLinear(t){return new wc(this.times,this.values,this.getValueSize(),t)}};Qo.prototype.ValueTypeName="quaternion";Qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Rn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=No;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends Rn{};Ec.prototype.ValueTypeName="vector";var Tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=c.length;f<p;f+=2){let g=c[f],_=c[f+1];if(g.global&&(g.lastIndex=0),g.test(u))return _}return null}}},L_=new Tc,Ac=class{constructor(t){this.manager=t!==void 0?t:L_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var jo=class extends tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fc="\\[\\]\\.:\\/",D_=new RegExp("["+Fc+"]","g"),Oc="[^"+Fc+"]",U_="[^"+Fc.replace("\\.","")+"]",N_=/((?:WC+[\/:])*)/.source.replace("WC",Oc),F_=/(WCOD+)?/.source.replace("WCOD",U_),O_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),B_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),z_=new RegExp("^"+N_+F_+O_+B_+"$"),k_=["material","materials","bones","map"],Rc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(D_,"")}static parseTrackName(t){let e=z_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);k_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Rc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Qn=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074,2693140,1121589,4333878,1200985,7614249,4797243,10651769,15986557,12456528,16739364,11069230,46403,416437,7685733,16739929,16752001],Cn=32,_n=256,ld=["top","side","bottom"],Oe=8,$i=256,Bc=[4,0,4],mv={colors:Cn,tiles:_n-1,tileSize:8,vox:$i,voxSize:Oe,sfx:64,notes:32,patterns:64,mapSide:128,mapBlocks:512*1024,saveBytes:64*1024,screen:256},_i=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6);var zc=(i,t,e)=>i+Oe*(t+Oe*e);function kc(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}var ia=24,Vc=8*_n,vn=Math.PI*2;function gd(){let i=new Uint8Array(ia*Vc),t=new zs(i,ia,Vc,Vs,un);return t.magFilter=Re,t.minFilter=Re,t.generateMipmaps=!1,t.flipY=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}function xd(i,t){i.image.data.fill(0);for(let e=1;e<_n;e++)t[e]&&Wc(i,e,t[e]);i.needsUpdate=!0}function Wc(i,t,e){let n=i.image.data;ld.forEach((s,r)=>{let o=e&&e[s];for(let a=0;a<8;a++)for(let l=0;l<8;l++)n[(t*8+(7-a))*ia+r*8+l]=o?o[a*8+l]&31:0})}function sa(i,t,e,n=[0,0,0],s=null){return{w:i,h:t,d:e,data:s||new Uint8Array(i*t*e),origin:[...n],pos:[0,0,0],angle:[0,0,0],dirty:!0,geometry:null,_m:new ne,_inv:new ne,_rot:new ne,_xfDirty:!0}}var _d=(i,t,e,n)=>t+i.w*(e+i.h*n);function br(i,t,e,n){return t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d?0:i.data[_d(i,t,e,n)]}function ra(i,t,e,n,s){t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d||(i.data[_d(i,t,e,n)]=s&255,Xc(i,t,e,n,t,e,n))}var cd=new An;function vd(i,t=new ne){return cd.set(-i[0]*vn,i[1]*vn,i[2]*vn,"YXZ"),t.makeRotationFromEuler(cd)}function Gs(i){if(!i._xfDirty)return;vd(i.angle,i._rot);let t=new ne().makeTranslation(-i.origin[0],-i.origin[1],-i.origin[2]),e=new ne().makeTranslation(i.pos[0],i.pos[1],i.pos[2]);i._m.copy(e).multiply(i._rot).multiply(t),i._inv.copy(i._m).invert(),i._xfDirty=!1}var Hc=[{n:[0,1,0],f:0,v:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,1],[0,0],[1,0],[1,1]]},{n:[0,-1,0],f:2,v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,1],[1,1],[1,0],[0,0]]},{n:[1,0,0],f:1,v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[-1,0,0],f:1,v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],f:1,v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],f:1,v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]}];function V_(i,t=0,e=0,n=0,s=i.w,r=i.h,o=i.d){let{w:a,h:l,d:c,data:u}=i,f=a*l,p=(U,E,b,P,K)=>{switch(K){case 0:return E===l-1||!u[P+a];case 1:return E===0||!u[P-a];case 2:return U===a-1||!u[P+1];case 3:return U===0||!u[P-1];case 4:return b===c-1||!u[P+f];default:return b===0||!u[P-f]}},g=0;for(let U=n;U<o;U++)for(let E=e;E<r;E++)for(let b=t,P=t+a*(E+l*U);b<s;b++,P++)if(u[P])for(let K=0;K<6;K++)p(b,E,U,P,K)&&g++;let _=new Float32Array(g*12),y=new Float32Array(g*8),m=new Float32Array(g*12),d=g*4>65535?new Uint32Array(g*6):new Uint16Array(g*6),R=0,A=0,w=0,V=0,L=0;for(let U=n;U<o;U++)for(let E=e;E<r;E++)for(let b=t,P=t+a*(E+l*U);b<s;b++,P++){let K=u[P];if(K)for(let Y=0;Y<6;Y++){if(!p(b,E,U,P,Y))continue;let j=Hc[Y];for(let it=0;it<4;it++){let tt=j.v[it];_[R++]=b+tt[0],_[R++]=E+tt[1],_[R++]=U+tt[2],y[A++]=j.uv[it][0],y[A++]=j.uv[it][1],m[w++]=K,m[w++]=j.f,m[w++]=Y+1}d[V++]=L,d[V++]=L+1,d[V++]=L+2,d[V++]=L,d[V++]=L+2,d[V++]=L+3,L+=4}}let D=new tn;return D.setAttribute("position",new ke(_,3)),D.setAttribute("aUV",new ke(y,2)),D.setAttribute("aTF",new ke(m,3)),D.setIndex(new ke(d,1)),D.computeBoundingSphere(),D}var Nn=32;function H_(i){if(!i.chunks){let t=Math.ceil(i.w/Nn),e=Math.ceil(i.h/Nn),n=Math.ceil(i.d/Nn),s=[];for(let r=0;r<n;r++)for(let o=0;o<e;o++)for(let a=0;a<t;a++)s.push({x:a*Nn,y:o*Nn,z:r*Nn,geometry:null,dirty:!0});i.chunks={nx:t,ny:e,nz:n,list:s}}return i.chunks}function Xc(i,t,e,n,s,r,o){if(!i.chunks){i.dirty=!0;return}let{nx:a,ny:l,nz:c,list:u}=i.chunks,f=(p,g)=>Math.max(0,Math.min(g-1,Math.floor(p/Nn)));for(let p=f(n-1,c);p<=f(o+1,c);p++)for(let g=f(e-1,l);g<=f(r+1,l);g++)for(let _=f(t-1,a);_<=f(s+1,a);_++)u[_+a*(g+l*p)].dirty=!0}function yd(i){let{list:t}=H_(i);if(i.dirty){for(let e of t)e.dirty=!0;i.dirty=!1}for(let e of t){if(!e.dirty)continue;e.geometry&&e.geometry.dispose();let n=V_(i,e.x,e.y,e.z,Math.min(i.w,e.x+Nn),Math.min(i.h,e.y+Nn),Math.min(i.d,e.z+Nn));n.index.count?e.geometry=n:(n.dispose(),e.geometry=null),e.dirty=!1}return t}function qc(i){if(i.geometry&&(i.geometry.dispose(),i.geometry=null),i.chunks)for(let t of i.chunks.list)t.geometry&&t.geometry.dispose();i.chunks=null}function G_(i=null,t=Bc,e=""){return{name:e,pivot:[...t],data:i||new Uint8Array(Oe*Oe*Oe),dirty:!0,geometry:null}}function W_(i,t,e,n){return t<0||e<0||n<0||t>=Oe||e>=Oe||n>=Oe?0:i.data[zc(t,e,n)]}function X_(i){let t=[],e=[],n=[],s=0;for(let o=0;o<Oe;o++)for(let a=0;a<Oe;a++)for(let l=0;l<Oe;l++){let c=i.data[zc(l,a,o)];if(c)for(let u=0;u<Hc.length;u++){let f=Hc[u];if(!W_(i,l+f.n[0],a+f.n[1],o+f.n[2])){for(let p=0;p<4;p++)t.push(l+f.v[p][0],a+f.v[p][1],o+f.v[p][2]),e.push(c-1,u+1);n.push(s,s+1,s+2,s,s+2,s+3),s+=4}}}let r=new tn;return r.setAttribute("position",new Ue(t,3)),r.setAttribute("aCD",new Ue(e,2)),r.setIndex(new Ds(n,1)),r.computeBoundingSphere(),r}function Md(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=X_(i),i.dirty=!1),i.geometry}var hd=new ne,ud=new ne,dd=new ne,fd=new ne;function Sd(i,t,e,n,s){return hd.makeTranslation(-i.pivot[0],-i.pivot[1],-i.pivot[2]),fd.makeScale(n[0]/Oe,n[1]/Oe,n[2]/Oe),vd(e,dd),ud.makeTranslation(t[0],t[1],t[2]),s.copy(ud).multiply(dd).multiply(fd).multiply(hd)}function bd(i){let t=new Array($i).fill(null);return(i.vox||[]).forEach((e,n)=>{if(!e||n>=$i)return;let s=e.data?kc(e.data):null;(!s||s.length!==Oe*Oe*Oe)&&(s=null),t[n]=G_(s,e.pivot||Bc,e.name||"")}),t}function wd(i){let t={value:Array.from({length:Cn},()=>new G)};return Yc(t,i),t}function Yc(i,t){for(let e=0;e<Cn;e++){let n=(t[e]??0)>>>0;i.value[e].set((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)}}var wr=()=>Array.from({length:Cn},(i,t)=>t),Ws=()=>new Array(Cn).fill(0),Ed=`
  float bayer4(vec2 p) {
    const float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
    ivec2 q = ivec2(mod(p, 4.0));
    return (m[q.x + 4 * q.y] + 0.5) / 16.0;
  }
`,Td=`
  uniform vec4 uCurve;
  uniform vec3 uCurveA;
  uniform vec3 uCurveB;
  uniform vec3 uCurveP;
  varying vec3 vFogPos;
  void place(vec3 p) {
    if (uCurve.x == 0.0) {
      vFogPos = (modelViewMatrix * vec4(p, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      return;
    }
    vec4 w = modelMatrix * vec4(p, 1.0);
    vec3 r = w.xyz - uCurve.yzw;
    float a = dot(r, uCurveA), b = dot(r, uCurveB);
    w.xyz += uCurveP * (uCurve.x * (a * a + b * b));
    vec4 mv = viewMatrix * w;
    vFogPos = mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`,oa=()=>({uTorch:{value:Array.from({length:8},()=>new _e)},uTorchFar:{value:new Array(8).fill(0)},uTorchN:{value:0}}),aa=()=>({uCurve:{value:new _e(0,0,0,0)},uCurveA:{value:new G(0,0,0)},uCurveB:{value:new G(0,0,0)},uCurveP:{value:new G(0,-1,0)}}),q_=`
  uniform float uRemap[32];
  uniform float uTrans[32];
  uniform float uOutline;   // outline palette index for this draw, or -1 for none
  uniform float uId;        // draw id, unique within a frame (1..65535)
  uniform float uInner;     // 1: outline inner edges too (creases, overlaps); 0: outer outline only
  uniform vec4 uFog;        // fog(): palette index, near, far, on (1) / off (0)
  uniform vec2 uFill;       // fillp(n, c): how much (0 none .. 1 all), palette index
  float remapOf(int i) { return uRemap[i]; }
  bool transOf(int i) { return uTrans[i] > 0.5; }
`,Y_=`
  uniform highp sampler2D uPalStates;
  flat in float vOutline; flat in float vId; flat in float vInner; flat in vec4 vFog; flat in vec2 vFill; flat in float vPal;
  #define uOutline vOutline
  #define uId vId
  #define uInner vInner
  #define uFog vFog
  #define uFill vFill
  float remapOf(int i) { return floor(texelFetch(uPalStates, ivec2(i, int(vPal + 0.5)), 0).r * 255.0 + 0.5); }
  bool transOf(int i) { return texelFetch(uPalStates, ivec2(32 + i, int(vPal + 0.5)), 0).r > 0.001; }
`,Ad=i=>`
  uniform vec3 uPalette[32];
  ${i?Y_:q_}
  uniform float uPix;       // render pixels per screen pixel (1, 2 or 3), so the dither stays 256-chunky
  uniform vec4 uTorch[8];   // torch(): position from the camera (view space) and near, this frame
  uniform float uTorchFar[8];
  uniform int uTorchN;      // how many torches (0-8)
  varying vec3 vFogPos;     // this pixel's position from the camera, for its distance
  layout(location = 0) out highp vec4 outColor;
  layout(location = 1) out highp vec4 outInfo;   // read by the outline pass
  vec3 palColor(int idx) {
    if (transOf(idx)) discard;                 // palt applies to the original index
    return uPalette[int(remapOf(idx) + 0.5)];  // then pal() remap, then the real color
  }
  // dir: which way a map face points (1-6), or 0 for primitives. A draw with outline(c, false)
  // writes 7 instead: the outline pass then draws no lines inside it, only around it.
  ${Ed}
  void writePixel(vec3 c, float dir) {
    float oc = uOutline;
    float d = uInner > 0.5 ? dir : 7.0;
    float th = bayer4(floor(gl_FragCoord.xy / uPix));
    // fillp: the fraction n of the pixels (in the dither pattern) take color c; outlines stay.
    // c = -1: those pixels are skipped (see-through), and the draw gets no outline, which would
    // otherwise fill every hole
    if (uFill.y < -0.5) { if (uFill.x > 0.0) { if (uFill.x > th) discard; oc = -1.0; } }
    else if (uFill.x > th) c = uPalette[int(uFill.y + 0.5)];
    // fog: from near to far, more and more of the pixels (in a fixed dither pattern) take the fog
    // color. A fogged pixel casts no outline and makes no crease, so far shapes fade out whole.
    if (uFog.w > 0.5) {
      float t = (length(vFogPos) - uFog.y) / max(uFog.z - uFog.y, 0.0001);
      // torches punch holes: a pixel near one is fogged by its distance from the torch instead,
      // if that's less fog (the same near-to-far ramp and dither as fog itself)
      for (int i = 0; i < 8; i++) {
        if (i >= uTorchN) break;
        t = min(t, (length(vFogPos - uTorch[i].xyz) - uTorch[i].w) / max(uTorchFar[i] - uTorch[i].w, 0.0001));
      }
      if (t > th) { c = uPalette[int(uFog.x + 0.5)]; oc = -1.0; d = 0.0; }
    }
    outColor = vec4(c, 1.0);
    outInfo = vec4((oc + 1.0) / 255.0, mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, d / 255.0);
  }
`,Z_=i=>({uPalette:i,uRemap:{value:wr()},uTrans:{value:Ws()},uOutline:{value:-1},uId:{value:1},uInner:{value:1},uFog:{value:new _e(0,0,0,0)},uFill:{value:new ue(0,0)},...aa(),...oa(),uPix:{value:1}});function Rd(i,t){return new Xe({glslVersion:Jn,uniforms:{uAtlas:{value:i},...Z_(t)},vertexShader:`
      attribute vec2 aUV;
      attribute vec3 aTF;
      varying vec2 vUV;
      varying vec3 vTF;
      ${Td}
      void main() {
        vUV = aUV; vTF = aTF;
        place(position);
      }`,fragmentShader:`
      uniform sampler2D uAtlas;
      ${Ad(!1)}
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${ia.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${Vc.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx), floor(vTF.z + 0.5));
      }`})}var Zc={iM0:4,iM1:4,iM2:4,iM3:4,iV0:4,iV1:4,iV2:4,iV3:4,iMisc:4,iFog:4,iX:3},$_=`
  attribute vec4 iM0; attribute vec4 iM1; attribute vec4 iM2; attribute vec4 iM3;
  attribute vec4 iV0; attribute vec4 iV1; attribute vec4 iV2; attribute vec4 iV3;
  attribute vec4 iMisc; attribute vec4 iFog; attribute vec3 iX;
  flat out float vOutline; flat out float vId; flat out float vInner; flat out vec4 vFog; flat out vec2 vFill; flat out float vPal;
  flat out float vColor;
  void passDraw() {
    vColor = iMisc.x; vId = iMisc.y; vOutline = iMisc.z; vInner = iMisc.w;
    vFog = iFog; vFill = iX.xy; vPal = iX.z;
  }
  // place() for a copy: the same operations, in the same order, as a draw of its own
  void placeCopy(vec3 p) {
    if (uCurve.x == 0.0) {
      mat4 mv = mat4(iV0, iV1, iV2, iV3);
      vFogPos = (mv * vec4(p, 1.0)).xyz;
      gl_Position = projectionMatrix * mv * vec4(p, 1.0);
      return;
    }
    place((mat4(iM0, iM1, iM2, iM3) * vec4(p, 1.0)).xyz);
  }
`;function Cd(i,t,e){let n={vox:[`attribute vec2 aCD;
      varying vec2 vCD;`,"vCD = aCD; passDraw(); placeCopy(position);","varying vec2 vCD;","writePixel(palColor(int(vCD.x + 0.5)), floor(vCD.y + 0.5));"],solid:["","passDraw(); placeCopy(position);","flat in float vColor;","writePixel(palColor(int(vColor + 0.5)), 0.0);"],line:["","passDraw(); place(mix(iM0.xyz, iM1.xyz, position.x));","flat in float vColor;","writePixel(palColor(int(vColor + 0.5)), 0.0);"]}[i];return new Xe({glslVersion:Jn,uniforms:{uPalette:t,...aa(),...oa(),uPalStates:e.uPalStates,uPix:e.uPix},vertexShader:`
      ${n[0]}
      ${Td}
      ${$_}
      void main() { ${n[1]} }`,fragmentShader:`
      ${Ad(!0)}
      ${n[2]}
      void main() { ${n[3]} }`})}var Er=[0,.7071],pd=[.5+.7071/4,.7071/2];function Id(i,t){let e=r=>typeof r=="number"&&Number.isFinite(r);if(!e(i)&&!e(t))return Er;let n=e(i)?Math.min(1,Math.max(0,i)):pd[0],s=e(t)?Math.min(1,Math.max(0,t)):pd[1];return[2*n-s-1,2*s]}function Pd(i){let t=new Xe({glslVersion:Jn,depthTest:!1,depthWrite:!1,uniforms:{uPalette:i,uSky:{value:new ue(0,0)},uFade:{value:new ue(0,Er[1])},uPix:{value:1}},vertexShader:`
      varying vec3 vRay;
      varying vec3 vUp;
      void main() {
        vRay = vec3(position.x / projectionMatrix[0][0], position.y / projectionMatrix[1][1], -1.0);   // view space
        if (projectionMatrix[3][3] > 0.5) vRay = vec3(0.0, 0.0, -1.0);   // orthographic: every pixel looks straight ahead
        vUp = (viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz;                                         // world up, in view space
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }`,fragmentShader:`
      uniform vec3 uPalette[32];
      uniform vec2 uSky;    // sky, horizon (palette indices)
      uniform vec2 uFade;   // where the fade starts and how wide it is, in sine of elevation (see skyFade)
      uniform float uPix;   // render pixels per screen pixel
      varying vec3 vRay;
      varying vec3 vUp;
      layout(location = 0) out highp vec4 outColor;
      layout(location = 1) out highp vec4 outInfo;
      ${Ed}
      void main() {
        float s = dot(normalize(vRay), normalize(vUp));   // -1 straight down, 0 the horizon, 1 straight up
        float t = uFade.y > 0.0 ? clamp((s - uFade.x) / uFade.y, 0.0, 1.0) : (s > uFade.x ? 1.0 : 0.0);
        int c = t > bayer4(floor(gl_FragCoord.xy / uPix)) ? int(uSky.x + 0.5) : int(uSky.y + 0.5);
        outColor = vec4(uPalette[c], 1.0);
        outInfo = vec4(0.0);   // no outline, no draw
      }`}),e=new We(new qi(2,2),t);return e.frustumCulled=!1,e.renderOrder=-1e9,e.visible=!1,e}function $c(i){return new gn(i,i,{count:2,minFilter:Re,magFilter:Re,generateMipmaps:!1,depthTexture:new Os(i,i)})}function Ld(i,t){let e=new Xe({glslVersion:Jn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:i.textures[0]},tInfo:{value:i.textures[1]},tDepth:{value:i.depthTexture},uPalette:t,uNear:{value:.05},uFar:{value:2e3},uOrtho:{value:0},uAny:{value:0},uMode:{value:0},uRect:{value:new _e(0,0,1e5,1e5)}},vertexShader:`
      void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      precision highp float;
      uniform sampler2D tColor;
      uniform sampler2D tInfo;
      uniform sampler2D tDepth;
      uniform vec3 uPalette[32];
      uniform float uNear;
      uniform float uFar;
      uniform float uOrtho;   // 1: cam_set_ortho (depth is linear), 0: perspective
      uniform int uAny;
      uniform int uMode;   // 0: paint outlines directly (1x); 1: write the edge mask for growing (2x, 3x)
      uniform vec4 uRect;  // x0, y0, x1, y1 of the view (clip), so lookups never cross into another view
      layout(location = 0) out highp vec4 outColor;

      // depth-buffer value to distance from the camera
      float linZ(float d) { return uOrtho > 0.5 ? uNear + d * (uFar - uNear) : uNear * uFar / (uFar - d * (uFar - uNear)); }
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
            if (uOrtho > 0.5) {
              // orthographic: z itself is linear across a flat face
              edge = zP - (2.0 * zN - linZ(d2)) > 0.25 + 0.03 * zP;
            } else {
              float pred = 2.0 / zN - 1.0 / linZ(d2);
              edge = pred > 0.0 && zP - 1.0 / pred > 0.25 + 0.03 * zP;
            }
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
      }`});return{scene:Gc(e),camera:new Xi,uniforms:e.uniforms}}function Jc(i){return new gn(i,i,{type:Tn,format:hn,minFilter:Re,magFilter:Re,generateMipmaps:!1,depthBuffer:!1})}function Gc(i){let t=new We(new qi(2,2),i);t.frustumCulled=!1;let e=new Bs;return e.add(t),e}var md="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function Dd(i){let t=new Xe({glslVersion:Jn,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:null},uDir:{value:new ue(1,0)},uR:{value:1},uRect:{value:new _e(0,0,1e5,1e5)}},vertexShader:md,fragmentShader:`
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
      }`}),e=new Xe({glslVersion:Jn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},tMask:{value:null},uPalette:i,uNear:{value:.05},uFar:{value:2e3},uOrtho:{value:0}},vertexShader:md,fragmentShader:`
      precision highp float;
      uniform sampler2D tColor;
      uniform sampler2D tInfo;
      uniform sampler2D tDepth;
      uniform sampler2D tMask;
      uniform vec3 uPalette[32];
      uniform float uNear;
      uniform float uFar;
      uniform float uOrtho;
      layout(location = 0) out highp vec4 outColor;
      float linZ(float d) { return uOrtho > 0.5 ? uNear + d * (uFar - uNear) : uNear * uFar / (uFar - d * (uFar - uNear)); }
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
      }`});return{growScene:Gc(t),grow:t.uniforms,paintScene:Gc(e),paint:e.uniforms,camera:new Xi}}function Ud(i,t,{preserve:e=!0}={}){le.enabled=!1;let n;try{n=new qo({canvas:i,antialias:!1,preserveDrawingBuffer:e})}catch(s){let r=typeof WebGL2RenderingContext>"u"?"This browser has no WebGL 2, which BLOCKO3D needs. Try updating it.":"This browser would not start 3D graphics (WebGL 2). Try closing other tabs and reloading, restarting the browser, or updating it. On iPhone and iPad, Lockdown Mode turns WebGL off.";throw new Error(r+" ("+(s&&s.message||s)+")")}return n.outputColorSpace=xi,n.setPixelRatio(1),t&&n.setSize(t,t,!1),n}function la(i){return(i.maps||[]).map(t=>{let e=t.data?kc(t.data):null,n=sa(t.w,t.h,t.d,t.origin||[0,0,0],e&&e.length===t.w*t.h*t.d?e:null);return n.name=t.name||"",n})}function Nd(i){let t=new Array(_n).fill(null);return(i.tiles||[]).forEach((e,n)=>{n>0&&n<_n&&e&&(t[n]=e)}),t}var J_=`
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
`,Xs=new Map;for(let i of J_.trim().split(/\n\s*\n/)){let[t,...e]=i.split(`
`),n=t==="space"?" ":t,s=[];e.forEach((r,o)=>[...r].forEach((a,l)=>{a==="#"&&s.push([l,o])})),Xs.set(n,s)}function qs(i,t=1){return Math.max(...String(i).split(`
`).map(e=>[...e].length))*7*t}function zd(i,t,e,n,s=128,r=200){let o=String(t||"game").split(/\s+/).filter(Boolean);for(let a=4;a>=1;a--){let l=[];for(let f of o){let p=l[l.length-1];p!==void 0&&[...p+" "+f].length*7*a<=240?l[l.length-1]=p+" "+f:l.push(f)}if(!(l.every(f=>[...f].length*7*a<=240)&&l.length*10*a<=r)&&a>1)continue;let u=s-(l.length*10*a>>1);l.forEach((f,p)=>vi(i,f,256-[...f].length*7*a>>1,u+p*10*a,e,n,a,a));return}}function Fd(i,t,e,n,s,r){let o=t,a=e;for(let l of String(i)){if(l===`
`){o=t,a+=10*s;continue}let c=Xs.get(l)||Xs.get("?");for(let[u,f]of c)r(o+(1+u)*n,a+(1+f)*s);o+=7*n}}var kd=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],ha=16,Kc=new Map([...Xs.keys()].map((i,t)=>[i,t])),ca=new Map;function Od(i,t,e,n){let s=i+(t?"|ring|":"|text|")+e+"|"+n,r=ca.get(s);if(!r){ca.size>=64&&ca.clear();let o=9*e,a=12*n,l=document.createElement("canvas");l.width=ha*o,l.height=Math.ceil(Kc.size/ha)*a,r={c:l,g:l.getContext("2d"),built:new Uint8Array(Kc.size),cw:o,ch:a,fill:i,ring:t,sx:e,sy:n},ca.set(s,r)}return r}function Bd(i,t,e,n,s){let{sx:r,sy:o,cw:a,ch:l}=s,c=e,u=n;for(let f of String(t)){if(f===`
`){c=e,u+=10*o;continue}let p=Xs.has(f)?f:"?",g=Xs.get(p);if(g.length){let _=Kc.get(p),y=_%ha*a,m=Math.floor(_/ha)*l;if(!s.built[_]){s.built[_]=1,s.g.fillStyle=s.fill;for(let[d,R]of g){let A=y+(2+d)*r,w=m+(2+R)*o;if(s.ring)for(let[V,L]of kd)s.g.fillRect(A+V*r,w+L*o,r,o);else s.g.fillRect(A,w,r,o)}}i.drawImage(s.c,y,m,a,l,c-r,u-o,a,l)}c+=7*r}}function vi(i,t,e,n,s,r=null,o=1,a=1){typeof document<"u"&&i.drawImage&&i.canvas?(r&&Bd(i,t,e,n,Od(r,!0,o,a)),Bd(i,t,e,n,Od(s,!1,o,a))):(r&&(i.fillStyle=r,Fd(t,e,n,o,a,(c,u)=>{for(let[f,p]of kd)i.fillRect(c+f*o,u+p*a,o,a)})),i.fillStyle=s,Fd(t,e,n,o,a,(c,u)=>i.fillRect(c,u,o,a)));let l=String(t).split(`
`);return e+[...l[l.length-1]].length*7*o}function K_(){return{speed:16,loopStart:0,loopEnd:0,notes:Array.from({length:32},()=>({pitch:24,wave:0,vol:0,fx:0}))}}var jn=(i,t)=>(i>>>0).toString(16).padStart(t,"0").slice(-t);function Hd(i){let t=jn(i.speed,2)+jn(i.loopStart,2)+jn(i.loopEnd,2);for(let e of i.notes)t+=jn(e.pitch&63,2)+jn(e.wave&7,1)+jn(e.vol&7,1)+jn(e.fx&7,1);return t}function Ar(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{166}$/.test(t))return null;let e=(s,r)=>parseInt(t.substr(s,r),16),n={speed:Math.max(1,e(0,2)),loopStart:Math.min(32,e(2,2)),loopEnd:Math.min(32,e(4,2)),notes:[]};for(let s=0;s<32;s++){let r=6+s*5;n.notes.push({pitch:e(r,2)&63,wave:e(r+2,1)&7,vol:e(r+3,1)&7,fx:e(r+4,1)&7})}return n}var Ev=Hd(K_());var Q_=i=>440*Math.pow(2,(i-33)/12),Zs=i=>i.speed/120,Tr=i=>i<.5?i*4-1:3-i*4;function j_(i,t,e){switch(i){case 0:return Tr(t);case 1:return t<.875?t/.875*2-1:1-(t-.875)/.125*2;case 2:return t*2-1;case 3:return t<.5?.7:-.7;case 4:return t<.3?.7:-.7;case 5:return(Tr(t)+Tr(t*2%1)*.5)*.67;case 7:return(Tr(t)+Tr(e))*.5;default:return 0}}function*Gd(i,t,e){let n=[];for(let s=t;s<e;s++)n.push(s);return yield*Wd(i,n)}function tv(i){for(;;){let t=i.next();if(t.done)return t.value}}function*Wd(i,t){let e=Math.max(1,Math.round(Zs(i)*22050)),n=new Float32Array(e*t.length),s=0,r=0,o=0,a=0,l=0,c={pitch:0,wave:0,vol:0,fx:0};for(let u=0;u<t.length;u++){let f=t[u],p=f>=0?i.notes[f]:c,g=u>0&&t[u-1]>=0?i.notes[t[u-1]]:p,_=f>=0?f-f%4:0,y=i.notes.slice(_,_+4);for(let m=0;m<e;m++){let d=m/e,R=(u*e+m)/22050,A=p.pitch,w=p.vol/7;switch(p.fx){case 1:A=g.pitch+(p.pitch-g.pitch)*d,w=(g.vol+(p.vol-g.vol)*d)/7;break;case 2:A+=Math.sin(R*Math.PI*2*7)*.5;break;case 3:A=p.pitch*(1-d);break;case 4:w*=d;break;case 5:w*=1-d;break;case 6:case 7:{let D=Math.floor(R*(p.fx===6?30:15))%4;A=y[D].pitch;break}}let V=Q_(A);s=(s+V/22050)%1,r=(r+V*1.006/22050)%1;let L;p.wave===6?(l+=V*8/22050,l>=1&&(l%=1,a=Math.random()*2-1),L=a*.7):L=j_(p.wave,s,r),o+=(w-o)*.02,n[u*e+m]=L*o*.35,(m&2047)===2047&&(yield)}yield}return n}function Xd(i){if(i.loopEnd>i.loopStart)return[0,i.loopEnd];let t=0;return i.notes.forEach((e,n)=>{e.vol>0&&(t=n+1)}),[0,t]}var Rr=64,qd=64;function ev(i){let t=(i.loopStart?1:0)|(i.loopBack?2:0)|(i.stop?4:0);return jn(t,1)+i.ch.map(e=>jn(e>=0&&e<64?e:qd,2)).join("")}function jc(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{9}$/.test(t))return null;let e=parseInt(t[0],16),n=[0,1,2,3].map(s=>{let r=parseInt(t.substr(1+s*2,2),16);return r<64?r:qd});return{loopStart:!!(e&1),loopBack:!!(e&2),stop:!!(e&4),ch:n}}var ua=i=>!i||i.ch.every(t=>t>=64),Yd=i=>i.loopEnd>i.loopStart;function th(i,t){let e=0,n=0;for(let s of i.ch){let r=s<64?t[s]:null;if(!r)continue;let o=32*Zs(r);n||(n=o),Yd(r)||(e=Math.max(e,o))}return e||n}function nv(i,t){let e=[];for(let n=0;e.length<t;n++)Yd(i)&&n>=i.loopEnd&&(n=i.loopStart),e.push(n<32?n:-1);return e}function*Zd(i,t){let e=th(i,t),n=Math.round(e*22050),s=new Float32Array(Math.max(1,n));for(let r of i.ch){let o=r<64?t[r]:null;if(!o)continue;let a=yield*Wd(o,nv(o,Math.ceil(e/Zs(o))));for(let l=0;l<n&&l<a.length;l++)s[l]+=a[l]*.8}return s}var Ji=new Map,Ys=new Map,$d=(i,t,e)=>i+"|"+t+"|"+e,Jd=(i,t)=>"p"+ev(i)+i.ch.map(e=>t[e]?Hd(t[e]):"").join("|");function Kd(i,t){return Ji.set(i,t),Ji.size>256&&Ji.delete(Ji.keys().next().value),t}function Vd(i,t){let e=Ji.get(i);if(e)return e;let n=Ys.get(i);return Ys.delete(i),e=tv(n||t()),Kd(i,e)}var yi=[],Qc=!1,Qd=i=>typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:500}):setTimeout(()=>i(null),20);function jd(i){let t=performance.now()+(i&&i.timeRemaining?Math.min(i.timeRemaining(),4):4);for(;yi.length&&performance.now()<t;){let[e,n]=yi[0];if(Ji.has(e)){yi.shift(),Ys.delete(e);continue}let s=Ys.get(e);s||(s=n(),Ys.set(e,s));let r=s.next();r.done&&(yi.shift(),Ys.delete(e),Kd(e,r.value))}yi.length?Qd(jd):Qc=!1}function fa(i=[],t=[]){let e=i.map(s=>s?Ar(s):null),n=(s,r)=>{!Ji.has(s)&&!yi.some(o=>o[0]===s)&&yi.push([s,r])};i.forEach((s,r)=>{let o=e[r];if(!o)return;let[a,l]=Xd(o);l>a&&n($d(s,a,l),()=>Gd(o,a,l))});for(let s of t){let r=s?jc(s):null;r&&!ua(r)&&th(r,e)&&n(Jd(r,e),()=>Zd(r,e))}yi.length&&!Qc&&(Qc=!0,Qd(jd))}function iv(i,t,e){let n=i[t];if(!n||n.stop)return-1;if(n.loopBack){for(let r=t;r>=0;r--)if(i[r]&&i[r].loopStart)return r;return e}let s=t+1;return s<Rr&&!ua(i[s])?s:-1}var da=class{constructor(){this.ctx=null,this.channels=Array.from({length:4},()=>null),this.cache=new Map,this.volume=1,this.muted=!1,this.held=!1}setMuted(t){this.muted=!!t,this.gain&&(this.gain.gain.value=this.muted?0:1)}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.gain.gain.value=this.muted?0:1}if(this.held){this.suspend();return}this.wake()}wake(){this.ctx.state!=="running"&&this.ctx.state!=="closed"?this.ctx.resume().then(()=>{this.held?this.ctx.suspend():this.startPendingMusic()}):this.pendingMusic&&this.startPendingMusic()}get ready(){return!!this.ctx&&this.ctx.state==="running"}buffer(t,e,n,s){let r=t+"|"+n+"|"+s,o=this.cache.get(r);if(!o){let a=Vd($d(t,n,s),()=>Gd(e,n,s));o=this.ctx.createBuffer(1,Math.max(1,a.length),22050),o.copyToChannel(a,0),this.cache.set(r,o),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}return o}play(t,e=-1,n=0,s=32){let r=Ar(t);if(!r||!this.ready)return-1;let[o,a]=Xd(r);if(o=Math.max(o,n|0),s<32&&(a=Math.min(a,o+Math.max(0,s|0))),a<=o)return-1;(e<0||e>=4)&&(e=this.freeChannel()),this.stop(e);let l=this.ctx.createBufferSource();l.buffer=this.buffer(t,r,o,a);let c=r.loopEnd>r.loopStart&&r.loopEnd>o&&s>=32;c&&(l.loop=!0,l.loopStart=Math.max(0,r.loopStart-o)*Zs(r),l.loopEnd=(r.loopEnd-o)*Zs(r)),l.connect(this.gain),l.start();let u={src:l,started:this.ctx.currentTime,sfx:r,from:o,loops:c,done:!1};return l.onended=()=>{u.done=!0,this.channels[e]===u&&(this.channels[e]=null)},this.channels[e]=u,e}freeChannel(){let t=0,e=1/0;for(let n=0;n<4;n++){let s=this.channels[n];if(!s)return n;s.started<e&&(e=s.started,t=n)}return t}stop(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];if(n)try{n.src.stop()}catch{}this.channels[e]=null}}release(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];n&&(n.src.loop=!1)}}noteAt(t){let e=this.channels[t];if(!e||!this.ctx)return-1;let n=Zs(e.sfx),s=(this.ctx.currentTime-e.started)/n;if(e.loops){let r=e.sfx.loopStart-e.from,o=e.sfx.loopEnd-e.sfx.loopStart;s>=e.sfx.loopEnd-e.from&&(s=r+(s-r)%o)}return e.from+Math.floor(s)}music(t,e,n,s=0){this.musicStop(),!(n<0)&&(this.pendingMusic={getPatterns:t,getSounds:e,n,fadeMs:s},this.ready&&this.startPendingMusic())}startPendingMusic(){let t=this.pendingMusic;if(this.pendingMusic=null,!t||!this.ready)return;let e=t.getPatterns();if(ua(e[t.n]))return;let n=this.ctx.createGain();n.connect(this.gain);let s=this.ctx.currentTime;t.fadeMs>0&&(n.gain.setValueAtTime(0,s),n.gain.linearRampToValueAtTime(1,s+t.fadeMs/1e3));let r={...t,gain:n,cur:t.n,start:t.n,time:s+.05,sources:[],timeline:[]};this.song=r;let o=()=>{if(this.song!==r)return;let a=r.getPatterns(),l=r.getSounds();for(;r.cur>=0&&r.time<this.ctx.currentTime+.4;){let c=a[r.cur],u=ua(c)?0:th(c,l);if(!u){r.cur=-1;break}let f=Jd(c,l),p=this.cache.get(f);if(!p){let _=Vd(f,()=>Zd(c,l));p=this.ctx.createBuffer(1,_.length,22050),p.copyToChannel(_,0),this.cache.set(f,p),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}let g=this.ctx.createBufferSource();g.buffer=p,g.connect(r.gain),g.start(r.time),r.sources.push(g),r.sources.length>8&&r.sources.shift(),r.timeline.push({time:r.time,pattern:r.cur,secs:u}),r.timeline.length>8&&r.timeline.shift(),r.time+=u,r.cur=iv(a,r.cur,r.start)}if(r.cur<0&&this.ctx.currentTime>r.time){this.musicStop();return}r.timer=setTimeout(o,100)};o()}musicStop(t=0){this.pendingMusic=null;let e=this.song;if(!e)return;this.song=null,clearTimeout(e.timer);let n=this.ctx.currentTime+t/1e3;t>0&&(e.gain.gain.setValueAtTime(e.gain.gain.value,this.ctx.currentTime),e.gain.gain.linearRampToValueAtTime(0,n));for(let s of e.sources)try{s.stop(n)}catch{}}musicPosition(){let t=this.song;if(!t||!this.ctx)return null;let e=this.ctx.currentTime;for(let n=t.timeline.length-1;n>=0;n--){let s=t.timeline[n];if(e>=s.time)return e<s.time+s.secs?{pattern:s.pattern,frac:(e-s.time)/s.secs}:null}return null}suspend(){this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.held=!1,this.ctx&&this.wake()}};var pa=class{constructor(t,e,n){this.w=t,this.h=e,this.out=new eh,this.prev=null,this.pending=null;let s=Math.max(2,n.length+1);this.bits=Math.max(1,Math.ceil(Math.log2(Math.min(256,s)))),this.trans=n.length<256?n.length:-1;let r=this.out;r.str("GIF89a"),r.u16(t),r.u16(e),r.byte(128|this.bits-1<<4|this.bits-1),r.byte(0),r.byte(0);for(let o=0;o<1<<this.bits;o++){let a=n[o]||0;r.byte(a>>16&255),r.byte(a>>8&255),r.byte(a&255)}r.byte(33),r.byte(255),r.byte(11),r.str("NETSCAPE2.0"),r.byte(3),r.byte(1),r.u16(0),r.byte(0),this.lzw=new nh}add(t,e){let{w:n,h:s,prev:r}=this;if(!r){this.pending={x:0,y:0,w:n,h:s,px:t.slice(),delay:e,trans:!1},this.prev=t.slice();return}let o=n,a=s,l=-1,c=-1;for(let _=0;_<s;_++){let y=_*n,m=-1,d=-1;for(let R=0;R<n;R++)t[y+R]!==r[y+R]&&(m<0&&(m=R),d=R);m>=0&&(m<o&&(o=m),d>l&&(l=d),_<a&&(a=_),c=_)}if(l<0){this.pending.delay+=e;return}this.flush();let u=l-o+1,f=c-a+1,p=new Uint8Array(u*f),g=this.trans;for(let _=0;_<f;_++){let y=(a+_)*n+o;for(let m=0;m<u;m++){let d=t[y+m];p[_*u+m]=g>=0&&d===r[y+m]?g:d,r[y+m]=d}}this.pending={x:o,y:a,w:u,h:f,px:p,delay:e,trans:g>=0}}flush(){let t=this.pending,e=this.out;t&&(this.pending=null,e.byte(33),e.byte(249),e.byte(4),e.byte(4|(t.trans?1:0)),e.u16(Math.max(2,Math.min(65535,Math.round(t.delay)))),e.byte(t.trans?this.trans:0),e.byte(0),e.byte(44),e.u16(t.x),e.u16(t.y),e.u16(t.w),e.u16(t.h),e.byte(0),this.lzw.encode(t.px,Math.max(2,this.bits),e))}finish(){return this.flush(),this.out.byte(59),this.out.bytes()}},eh=class{constructor(){this.buf=new Uint8Array(65536),this.n=0}byte(t){if(this.n===this.buf.length){let e=new Uint8Array(this.buf.length*2);e.set(this.buf),this.buf=e}this.buf[this.n++]=t}u16(t){this.byte(t&255),this.byte(t>>8&255)}str(t){for(let e=0;e<t.length;e++)this.byte(t.charCodeAt(e))}bytes(){return this.buf.slice(0,this.n)}},nh=class{constructor(){this.codes=new Int16Array(4096*256),this.stamp=new Int32Array(4096*256),this.gen=0}encode(t,e,n){let{codes:s,stamp:r}=this,o=1<<e,a=o+1,l=e+1,c=a+1,u=++this.gen,f=0,p=0,g=new Uint8Array(255),_=0;n.byte(e);let y=R=>{if(g[_++]=R,_===255){n.byte(255);for(let A=0;A<255;A++)n.byte(g[A]);_=0}},m=R=>{for(f|=R<<p,p+=l;p>=8;)y(f&255),f>>>=8,p-=8};m(o);let d=t[0];for(let R=1;R<t.length;R++){let A=t[R],w=d<<8|A;if(r[w]===u){d=s[w];continue}m(d),c===4096?(m(o),u=++this.gen,c=a+1,l=e+1):(c>=1<<l&&l++,r[w]=u,s[w]=c++),d=A}if(m(d),m(a),p>0&&y(f&255),_){n.byte(_);for(let R=0;R<_;R++)n.byte(g[R])}n.byte(0)}};var Vt=256,tf=1e3/60,av={ArrowLeft:0,KeyA:0,ArrowRight:1,KeyD:1,ArrowUp:2,KeyW:2,ArrowDown:3,KeyS:3,KeyZ:4,KeyC:4,KeyN:4,Space:4,KeyX:5,KeyV:5,KeyM:5,Enter:6,NumpadEnter:6,KeyP:6},ef=64*1024,nf=i=>String(i||"game").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"game",Fn=(i,t,e)=>Array.isArray(i)?[+i[0]||0,+i[1]||0,+i[2]||0]:[+i||0,+t||0,+e||0];function sf({canvas:i,overlay:t,cart:e,onError:n=console.error,onLog:s=console.log,onRestart:r=()=>location.reload(),onSave:o=()=>{},onCover:a=null,keepFrame:l=!1}){let c=Ud(i,Vt,{preserve:l}),u="blocko3d.perf",f={capture:!1,outlines:!0,fps:!1};try{Object.assign(f,JSON.parse(localStorage.getItem(u))||{})}catch{}let p=()=>{try{localStorage.setItem(u,JSON.stringify(f))}catch{}},g=c.extensions.has("EXT_color_buffer_float"),_="blocky3d.res",y=1;try{y=g?Math.min(3,Math.max(1,parseInt(localStorage.getItem(_),10)||1)):1}catch{}let m=new Bs,d=new Ze(90,1,.05,2e3),R=new Fs(-1,1,1,-1,.05,2e3),A=d,w=$c(Vt*y),V=null,L=[0,6,-10],D=[0,0,0],U=t.getContext("2d");t.width=t.height=Vt;let E=Array.isArray(e.palette)&&e.palette.length===Cn?[...e.palette]:[...Qn],b=wd(E),P=Ld(w,b);P.uniforms.uNear.value=A.near,P.uniforms.uFar.value=A.far;let K=Dd(b);K.paint.uNear.value=A.near,K.paint.uFar.value=A.far;function Y(h){y=g?Math.min(3,Math.max(1,h|0)):1;try{localStorage.setItem(_,String(y))}catch{}let x=Vt*y;c.setSize(x,x,!1),w.dispose(),w=$c(x),V&&(V[0].dispose(),V[1].dispose(),V=null),y>1&&(V=[Jc(x),Jc(x)]);let v=P.uniforms;v.tColor.value=w.textures[0],v.tInfo.value=w.textures[1],v.tDepth.value=w.depthTexture}Y(y);let j=Pd(b);m.add(j);let it=gd(),tt=Nd(e);xd(it,tt);let ht=Uint8Array.from({length:_n},(h,x)=>x);function $(h,x){ht[h]!==x&&(ht[h]=x,Wc(it,h,tt[x]),it.needsUpdate=!0)}let mt=(h,x)=>{if(!Number.isInteger(h)||h<1||h>=_n)throw new Error(`tile_sub: ${x} must be a tile number from 1 to ${_n-1} (got ${h})`);return h},lt=la(e),It=Array.from({length:64},(h,x)=>e.sfx&&e.sfx[x]||null),Xt=It.map(h=>h?Ar(h):null),ce=Array.from({length:Rr},(h,x)=>jc(e.music&&e.music[x])),Q=new da;l||fa(e.sfx||[],e.music||[]);let k="blocky3d.save."+nf(e.name),at=bd(e),rt=wr(),St=Ws(),wt=0,Pt=-1,Qt=Er,Ft=-1,se=!0,O=null,Ve=0,jt=0,Ht=null,Ot=0,pe=0,Ut=!1,T=null,M=90,W=0,nt=[0,"view","down"],ot=aa(),et=oa(),At=[],vt=64,bt=8,te=new G,ct=[],ft=null,Nt=[],zt=!1,Mt=[0,0,Vt-1,Vt-1],ie=new Wi(1,1,1),qt=12,me=new Map,F=h=>{let x=me.get(h);return x||(x=new Ko(1,h,Math.max(2,Math.round(h/2))),me.set(h,x)),x},pt={map:[]},Z={map:0};function st(h){let x=pt[h],v=x[Z[h]];v||(v=new We(void 0,Rd(it,b)),v.matrixAutoUpdate=!1,Object.assign(v.material.uniforms,ot,et),x.push(v),m.add(v)),Z[h]++,v.visible=!0;let I=v.material.uniforms;for(let C=0;C<Cn;C++)I.uRemap.value[C]=rt[C],I.uTrans.value[C]=St[C];return I.uOutline.value=Ft<0?-1:rt[Ft],I.uInner.value=se?1:0,Ht?I.uFog.value.set(Ht[0],Ht[1],Ht[2],1):I.uFog.value.w=0,I.uPix.value=y,I.uFill.value.set(Ve,jt),I.uId.value=++pe,Ft>=0&&f.outlines&&(Ut=!0),v.userData.view=ft?ft.i:0,ft&&ft.n++,v}let yt=[],gt=0,kt=64,ge=new Uint8Array(64*kt),Le=()=>{let h=new zs(ge,64,kt,Vs,un);return h.minFilter=h.magFilter=Re,h.unpackAlignment=1,h.needsUpdate=!0,h},re={uPalStates:{value:Le()},uPix:{value:1}},He=0,$e=0,Ki=-1,Js=0;function On(){if(Ki===$e)return Js;if(He>=kt){let x=ge;kt*=2,ge=new Uint8Array(64*kt),ge.set(x),re.uPalStates.value.dispose(),re.uPalStates.value=Le()}let h=He*64;for(let x=0;x<Cn;x++)ge[h+x]=rt[x],ge[h+32+x]=St[x]?1:0;return Ki=$e,Js=He++}function ti(h,x){let v=yt[gt];return v||(yt[gt]=v={m:new Float64Array(16),misc:new Float32Array(4),fog:new Float32Array(4),x:new Float32Array(3)}),gt++,v.kind=h,v.geo=x,v.misc[0]=0,v.misc[1]=++pe,v.misc[2]=Ft<0?-1:rt[Ft],v.misc[3]=se?1:0,Ht?(v.fog[0]=Ht[0],v.fog[1]=Ht[1],v.fog[2]=Ht[2],v.fog[3]=1):v.fog.fill(0),v.x[0]=Ve,v.x[1]=jt,v.x[2]=On(),Ft>=0&&f.outlines&&(Ut=!0),v.view=ft?ft.i:0,ft&&ft.n++,v}let Lr=new ne,Dr=new ne,Mi=new tn;Mi.setAttribute("position",new Ue([0,0,0,1,0,0],3));let Si=new Map;function bi(h,x){let v=h.arrays;h.cap&&h.ig.dispose(),h.cap=x,h.arrays={},h.attrs={};for(let[I,C]of Object.entries(Zc)){let z=new Float32Array(x*C);v&&z.set(v[I]);let H=new Yo(z,C);H.setUsage(Qu),h.ig.setAttribute(I,H),h.arrays[I]=z,h.attrs[I]=H}}function Ur(h,x){let v=Si.get(x);if(v)return v;let I=new jo;I.index=x.index;for(let[H,J]of Object.entries(x.attributes))I.setAttribute(H,J);let C=Cd(h,b,re);Object.assign(C.uniforms,ot,et);let z=h==="line"?new Jo(I,C):new We(I,C);return z.frustumCulled=!1,z.visible=!1,m.add(z),v={mesh:z,ig:I,cap:0,n:0},bi(v,64),Si.set(x,v),v}function Nr(h,x,v){for(let C of Si.values())C.n=0;re.uPix.value=y;let I=0;for(let C=0;C<gt;C++){let z=yt[C];if(x&&z.view!==h.i)continue;if(v&&z.kind!=="line"&&v(z)){I++;continue}let H=Ur(z.kind,z.geo);H.n>=H.cap&&bi(H,H.cap*2);let J=H.n++,dt=H.arrays;if(dt.iM0.set(z.m.subarray(0,4),J*4),dt.iM1.set(z.m.subarray(4,8),J*4),dt.iM2.set(z.m.subarray(8,12),J*4),dt.iM3.set(z.m.subarray(12,16),J*4),z.kind!=="line"){let Rt=Lr.multiplyMatrices(A.matrixWorldInverse,Dr.fromArray(z.m)).elements;dt.iV0.set(Rt.slice(0,4),J*4),dt.iV1.set(Rt.slice(4,8),J*4),dt.iV2.set(Rt.slice(8,12),J*4),dt.iV3.set(Rt.slice(12,16),J*4)}dt.iMisc.set(z.misc,J*4),dt.iFog.set(z.fog,J*4),dt.iX.set(z.x,J*3)}for(let C of Si.values())if(C.ig.instanceCount=C.n,C.mesh.visible=C.n>0,C.n)for(let[z,H]of Object.entries(C.attrs))H.clearUpdateRanges(),H.addUpdateRange(0,C.n*Zc[z]),H.needsUpdate=!0;return He&&(re.uPalStates.value.needsUpdate=!0),I}let Fr=[[0,0,0]];function wi(){if(!O)return Fr;let[h,x,v,I]=O,C=H=>H>0?Array.from({length:2*I+1},(J,dt)=>(dt-I)*H):[0],z=[[0,0,0]];for(let H of C(h))for(let J of C(x))for(let dt of C(v))(H||J||dt)&&z.push([H,J,dt]);return z}let Or=new ne;function S(h,x,v,I,C,z){let H=h.m;H.fill(0),H[0]=H[5]=H[10]=+C,H[12]=+x,H[13]=+v,H[14]=+I,H[15]=1,h.misc[0]=z&31}function B(h,[x,v,I]){let C=h.elements;C[12]+=x,C[13]+=v,C[14]+=I}let X=h=>_i(E[rt[(h|0)&31]]??0);function q(h,x,v,I){return h=Math.floor(h),x=Math.floor(x),v=Math.floor(v),I=Math.floor(I),[Math.min(h,v),Math.min(x,I),Math.max(h,v),Math.max(x,I)]}function N(h){let x=lt[h];if(!x)throw x===null?new Error(`map ${h} belonged to a scene that has since been replaced by scene_load`):new Error(`map ${h} does not exist (there are ${lt.length} maps)`);return x}function ut(h){let x=sa(h.w,h.h,h.d,h.origin,h.data.slice());return x.name=h.name||"",x.pos=[...h.pos],x.angle=[...h.angle],x}let xt=la(e),Tt=[];function Lt(){for(let h of Tt)lt[h]&&qc(lt[h]),lt[h]=null;for(Tt=[];lt.length&&lt[lt.length-1]===null;)lt.pop()}let Bt=new G;function Gt(h,x,v,I){return Gs(h),Bt.set(x,v,I).applyMatrix4(h._inv)}let Et=4,Jt=22,oe=new Array(Jt).fill(!1),de=Array.from({length:Et},()=>new Array(Jt).fill(!1)),we=Array.from({length:Et},()=>new Array(Jt).fill(!1)),ae=Array.from({length:Et},()=>[[0,0],[0,0]]),Ct=.5,yn=[[7,0],[8,1],[9,2],[10,3],[11,4],[12,5],[13,6],[14,7],[15,8],[16,10],[17,11],[18,16]];function he(h,x,v){let I=z=>!!(h.buttons[z]&&h.buttons[z].pressed),C=z=>Number.isFinite(h.axes[z])?h.axes[z]:0;x[0]=I(14)||C(0)<-Ct,x[1]=I(15)||C(0)>Ct,x[2]=I(12)||C(1)<-Ct,x[3]=I(13)||C(1)>Ct,x[4]=I(0)||I(2),x[5]=I(1)||I(3),x[6]=I(9);for(let[z,H]of yn)x[z]=I(H);v[0][0]=C(0),v[0][1]=C(1),v[1][0]=C(2),v[1][1]=C(3)}let Je=Array.from({length:Et},()=>new Array(Jt).fill(!1));function ei(){cf();for(let x of Je)x.fill(!1);for(let x of ae)x[0][0]=x[0][1]=x[1][0]=x[1][1]=0;let h=[];try{h=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{h=[]}h.filter(x=>x&&x.connected).sort((x,v)=>x.index-v.index).slice(0,Et).forEach((x,v)=>he(x,Je[v],ae[v]));for(let x=0;x<2;x++){let v=Ks[x],I=ae[0][x];Math.hypot(v[0],v[1])>0&&Math.hypot(I[0],I[1])<=Be&&(I[0]=v[0],I[1]=v[1])}for(let x=0;x<Et;x++)for(let v=0;v<Jt;v++)de[x][v]=we[x][v],we[x][v]=Je[x][v]||x===0&&(oe[v]||ya[v]||es[v]);es.fill(!1)}let Be=.15;function Ei(h,x){let v=we[x];if(!v)return[0,0];let[I,C]=ae[x][h?1:0],z=Math.hypot(I,C);if(z>Be){let Rt=Math.min(1,(z-Be)/(1-Be))/z;return[I*Rt,C*Rt]}if(h)return[0,0];let H=(v[1]?1:0)-(v[0]?1:0),J=(v[3]?1:0)-(v[2]?1:0),dt=H&&J?Math.SQRT1_2:1;return[H*dt,J*dt]}let Zt=0,Ce=0,Ke=0,De=0,Qe=0,rn=0,Qi=0,ga=0,xa=0,ji=null,_a=0,va=0,ts=-1,Ti=-1,lh=[],Br={0:19,2:20,1:21},es=new Array(Jt).fill(!1),ya=new Array(Jt).fill(!1),Ks=[[0,0],[0,0]],zr=0,Qs=0,Ma=null,kr=()=>{Ma&&Ma(Ge?0:zr,Ge?0:Qs)},ch=h=>{oe[h]=es[h]=!0},Bn=()=>document.pointerLockElement===t,hh="mouse";window.addEventListener("pointerdown",h=>{hh=h.pointerType||"mouse"},!0);function Vr(h){let x=t.getBoundingClientRect();return[(h.clientX-x.left)/x.width*Vt,(h.clientY-x.top)/x.height*Vt]}function uh(){try{let h=t.requestPointerLock();h&&h.catch&&h.catch(()=>{})}catch{}}function cf(){Qi=De,ga=Qe,xa=rn,De=Qe=rn=0}function dh(h){Zt=[0,1,2].includes(h|0)?h|0:0,t.style.touchAction=Zt?"none":"";for(let x of[19,20,21])oe[x]=!1;ji=null,Zt!==2&&Bn()&&document.exitPointerLock()}let Sa=(h,x)=>lh.findIndex(v=>h>=v[0]&&h<v[0]+v[2]&&x>=v[1]&&x<v[1]+v[3]);t.addEventListener("contextmenu",h=>{Zt&&h.preventDefault()}),t.addEventListener("mousedown",h=>{if(Zt){if(Bn()||([Ce,Ke]=Vr(h)),Ge){let x=Sa(Ce,Ke);x>=0&&h.button===0&&(Ti=x);return}if(Zt===2&&!Bn()){uh();return}Br[h.button]!==void 0&&ch(Br[h.button])}}),window.addEventListener("mouseup",h=>{Br[h.button]!==void 0&&(oe[Br[h.button]]=!1)}),window.addEventListener("mousemove",h=>{if(Zt){if(!Bn()&&([Ce,Ke]=Vr(h),Ge)){let x=Sa(Ce,Ke);x>=0&&(ts=x)}!Ge&&(Zt!==2||Bn())&&(De+=h.movementX||0,Qe+=h.movementY||0)}}),t.addEventListener("wheel",h=>{Zt&&(h.preventDefault(),rn+=h.deltaMode===1?h.deltaY/3:h.deltaMode===2?h.deltaY:h.deltaY/100)},{passive:!1}),t.addEventListener("pointerdown",h=>{if(!(!Zt||h.pointerType==="mouse"||ji!==null)){h.preventDefault(),ji=h.pointerId;try{t.setPointerCapture(h.pointerId)}catch{}if((Zt===1||Ge)&&([Ce,Ke]=Vr(h)),_a=h.clientX,va=h.clientY,Ge){let x=Sa(Ce,Ke);x>=0&&(Ti=x);return}Zt===1&&ch(19)}}),t.addEventListener("pointermove",h=>{h.pointerId===ji&&(Zt===1&&([Ce,Ke]=Vr(h)),Ge||(De+=h.clientX-_a,Qe+=h.clientY-va),_a=h.clientX,va=h.clientY)});let fh=h=>{h.pointerId===ji&&(ji=null,oe[19]=!1)};t.addEventListener("pointerup",fh),t.addEventListener("pointercancel",fh),document.addEventListener("pointerlockchange",()=>{!Bn()&&Zt===2&&ni&&!Ge&&ar(!0)});let hf=()=>we.some((h,x)=>h[6]&&!de[x][6]),Ai=0,ns=null;function uf(){if(ns===null)return Math.random();ns=ns+1831565813>>>0;let h=ns;return h=Math.imul(h^h>>>15,h|1),h^=h+Math.imul(h^h>>>7,h|61),((h^h>>>14)>>>0)/4294967296}let js={get palette(){return E},set palette(h){E=h},pal(h,x){if($e++,h===void 0){rt=wr(),St=Ws();return}rt[h&31]=(x??h)&31},tile_sub(h,x){if(h==null){for(let v=1;v<_n;v++)$(v,v);return}mt(h,"t"),$(h,x==null?h:mt(x,"src"))},palt(h,x=!0){if($e++,h===void 0){St=Ws();return}St[h&31]=x?1:0},bg(h,x,v,I){wt=rt[(h|0)&31],Pt=x==null||x===!1?-1:rt[(x|0)&31],Qt=Id(v,I)},outline(h,x=!0){Ft=h==null||h===!1?-1:(h|0)&31,se=Ft<0||x!==!1},repeat(h,x,v,I=1){let C=J=>+J>0?+J:0,z=[C(h),C(x),C(v)],H=Math.max(0,Math.min(3,Math.floor(+I)||0));O=z.some(J=>J>0)&&H>0?[...z,H]:null},fillp(h,x=0){Ve=h==null||h===!1?0:Math.max(0,Math.min(1,+h||0)),jt=x===-1?-1:rt[(x|0)&31]},torch(h,x,v,I=2,C=5){if(h===void 0){At=[];return}At.length>=vt||At.push([+h||0,+x||0,+v||0,Math.max(0,+I||0),Math.max(0,+C||0)])},fog(h,x=8,v=24){if(h==null||h===!1){Ht=null;return}Ht=[rt[(h|0)&31],Math.max(0,+x||0),Math.max(0,+v||0)]},cam_set_pos(h,x,v){L.splice(0,3,...Fn(h,x,v))},cam_set_lookat(h,x,v){D.splice(0,3,...Fn(h,x,v))},cam_set_fov(h){M=Math.max(.01,Math.min(.49,+h||.25))*360},cam_set_ortho(h){W=Math.max(0,+h||0)},cam_set_curve(h,x="view",v="down"){if(x===!0&&(x="xz"),(x===!1||x===void 0||x===null)&&(x="view"),x=String(x),v=String(v),!["view","side"].includes(x)&&!/^(?!(.)\1)[xyz]{1,2}$/.test(x))throw new Error(`cam_set_curve: along is 'view', 'side', 'x', 'y', 'z' or two of x, y, z like 'xz'; got '${x}'`);if(!["down","away"].includes(v)&&!/^[+-][xyz]$/.test(v))throw new Error(`cam_set_curve: push is 'down', 'away' or a direction like '+z' or '-x'; got '${v}'`);nt=[+h||0,x,v]},clip(h,x,v,I){if(h===void 0)T=null;else{let[C,z,H,J]=q(h,x,v,I);T=[Math.max(0,C),Math.max(0,z),Math.min(Vt-1,H),Math.min(Vt-1,J)]}zt&&(gh(),mh()),xh()},map_new(h,x,v,I=[0,0,0]){return lt.push(sa(h|0,x|0,v|0,Fn(I))),lt.length-1},map_copy(h){return lt.push(ut(N(h))),lt.length-1},map_reload(h){if(h==null){xt.forEach((v,I)=>{lt[I].data.set(v.data),lt[I].dirty=!0});return}let x=xt[h];if(!Number.isInteger(h)||!x){let v=xt.length?`0-${xt.length-1}`:"this cart has none";throw new Error(`map_reload(${h}): only the cart's maps can be reloaded (${v}); copies and map_new maps have no cart data`)}lt[h].data.set(x.data),lt[h].dirty=!0},map_stamp(h,x,v,I,C){let z=N(h),H=N(x),J=Math.floor(+v||0),dt=Math.floor(+I||0),Rt=Math.floor(+C||0);for(let Wt=0;Wt<z.d;Wt++)for(let Dt=0;Dt<z.h;Dt++)for(let ee=0;ee<z.w;ee++){let Se=z.data[ee+z.w*(Dt+z.h*Wt)];Se&&ra(H,J+ee,dt+Dt,Rt+Wt,Se)}},map_box(h,x,v,I,C,z,H,J){let dt=N(h),Rt=(Ie,ye)=>Math.max(0,Math.floor(Math.min(+Ie||0,+ye||0))),Wt=(Ie,ye,Pn)=>Math.min(Pn-1,Math.floor(Math.max(+Ie||0,+ye||0))),Dt=Rt(x,C),ee=Wt(x,C,dt.w),Se=Rt(v,z),Ee=Wt(v,z,dt.h),Te=Rt(I,H),ve=Wt(I,H,dt.d),Ae=(J|0)&255;for(let Ie=Te;Ie<=ve;Ie++)for(let ye=Se;ye<=Ee;ye++)for(let Pn=Dt;Pn<=ee;Pn++)dt.data[Pn+dt.w*(ye+dt.h*Ie)]=Ae;Dt<=ee&&Se<=Ee&&Te<=ve&&Xc(dt,Dt,Se,Te,ee,Ee,ve)},scene_load(h){let x=Array.isArray(e.scenes)?e.scenes:[],v=x[h];if(!v)throw new Error(`scene ${h} does not exist (there are ${x.length} scenes)`);Lt();let I={maps:[],named:{},things:[]};for(let C of v.maps||[]){let z=xt[C.m];if(!z)continue;let H=ut(z);H.pos=Fn(C.pos),H.angle=Fn(C.angle),lt.push(H);let J=lt.length-1;Tt.push(J),I.maps.push(J),C.name&&(I.named[C.name]=J)}for(let C of v.vox||[])I.things.push([C.v|0,...Fn(C.pos),+C.yaw||0]);return I},map_set_pos(h,x,v,I){let C=N(h);C.pos=Fn(x,v,I),C._xfDirty=!0},map_set_angle(h,x,v,I){let C=N(h);C.angle=Fn(x,v,I),C._xfDirty=!0},map_set_origin(h,x,v,I){let C=N(h),z=Fn(x,v,I);Gs(C);let H=new G(z[0]-C.origin[0],z[1]-C.origin[1],z[2]-C.origin[2]).applyMatrix4(C._rot);C.pos=[C.pos[0]+H.x,C.pos[1]+H.y,C.pos[2]+H.z],C.origin=z,C._xfDirty=!0},map(h,x=!1){let v=N(h),I=yd(v);Gs(v);let C=0;for(let z of wi())for(let H of I){if(!H.geometry)continue;let J=st("map");C?(J.material.uniforms.uId.value=C,pe--):C=J.material.uniforms.uId.value,J.geometry=H.geometry,J.matrix.copy(v._m),z!==Fr[0]&&B(J.matrix,z),J.material.side=x?En:Un}},mget(h,x,v,I){return br(N(h),Math.floor(x),Math.floor(v),Math.floor(I))},mset(h,x,v,I,C){ra(N(h),Math.floor(x),Math.floor(v),Math.floor(I),C|0)},msetw(h,x,v,I,C){let z=N(h),H=Gt(z,x,v,I);ra(z,Math.floor(H.x),Math.floor(H.y),Math.floor(H.z),C|0)},mray(h,x,v,I,C,z,H,J=100){return pf(N(h),+x||0,+v||0,+I||0,+C||0,+z||0,+H||0,+J||0)},mtow(h,x,v,I){let C=N(h);return Gs(C),Bt.set(+x||0,+v||0,+I||0).applyMatrix4(C._m),[Bt.x,Bt.y,Bt.z]},wtom(h,x,v,I){let C=Gt(N(h),+x||0,+v||0,+I||0);return[C.x,C.y,C.z]},mgetw(h,x,v,I,C){let z=N(h),H=Gt(z,x,v,I);if(C===void 0){let J=Math.floor(H.x),dt=Math.floor(H.y),Rt=Math.floor(H.z);return[br(z,J,dt,Rt),J,dt,Rt]}return gf(z,H.x,H.y,H.z,+C)},vox(h,x,v,I,C=0,z=0,H=0,J=1,dt=J,Rt=J){let Wt=h|0;if(Wt<0||Wt>=$i)throw new Error(`vox ${h} does not exist (models are 0-${$i-1})`);let Dt=at[Wt];if(!Dt)return;let ee=Md(Dt);Sd(Dt,[+x||0,+v||0,+I||0],[+C||0,+z||0,+H||0],[+J,+dt,+Rt],Or);for(let[Se,Ee,Te]of wi()){let ve=ti("vox",ee);ve.m.set(Or.elements),ve.m[12]+=Se,ve.m[13]+=Ee,ve.m[14]+=Te}},cube(h,x,v,I=1,C=7){for(let[z,H,J]of wi())S(ti("solid",ie),h+z,x+H,v+J,I,C)},sphere(h,x,v,I=.5,C=7,z=qt){let H=F(Math.max(3,Math.min(64,Math.round(+z)||qt)));for(let[J,dt,Rt]of wi())S(ti("solid",H),h+J,x+dt,v+Rt,I,C)},line3(h,x,v,I,C,z,H=7){for(let[J,dt,Rt]of wi()){let Wt=ti("line",Mi),Dt=Wt.m;Dt[0]=h+J,Dt[1]=x+dt,Dt[2]=v+Rt,Dt[4]=I+J,Dt[5]=C+dt,Dt[6]=z+Rt,Wt.misc[0]=H&31}},print(h,x,v,I=7,C=null,z=1,H=z){x===void 0&&(x=0,v=Ot),z=Math.max(1,Math.round(+z||1)),H=Math.max(1,Math.round(+H||z));let J=C!=null&&C!==!1&&C>=0,dt=vi(U,h,x|0,v|0,X(I),J?X(C):null,z,H);return Ot=(v|0)+10*H*String(h).split(`
`).length,dt},rect(h,x,v,I,C=7){let[z,H,J,dt]=q(h,x,v,I);U.fillStyle=X(C),U.fillRect(z,H,J-z+1,1),U.fillRect(z,dt,J-z+1,1),U.fillRect(z,H,1,dt-H+1),U.fillRect(J,H,1,dt-H+1)},rectfill(h,x,v,I,C=7){let[z,H,J,dt]=q(h,x,v,I);U.fillStyle=X(C),U.fillRect(z,H,J-z+1,dt-H+1)},printh(...h){s(h.map(String).join(" "))},sfx(h,x=-1,v=0,I=32){if(h===-1){Q.stop(x);return}if(h===-2){Q.release(x);return}let C=typeof h=="string"?h:It[h|0];if(typeof h=="string"&&!Ar(h))throw new Error("sfx: that string is not a sound from the Sfx tab");C&&Q.play(C,x<4?x:-1,v,I)},music(h,x=0){if(h<0){Q.musicStop(x);return}if((h|0)>=Rr)throw new Error(`music ${h} does not exist (patterns are 0-${Rr-1})`);Q.music(()=>ce,()=>Xt,h|0,x)},save(h){try{if(h==null)return localStorage.removeItem(k),o(null),!0;let x=JSON.stringify(h);if(x.length>ef)throw new Error(`save: data is too big (${x.length} characters, the limit is ${ef})`);return localStorage.setItem(k,x),o(x),!0}catch(x){if(x.message.startsWith("save:"))throw x;return!1}},load(){try{let h=localStorage.getItem(k);return h===null?null:JSON.parse(h)}catch{return null}},btn(h,x=0){let v=we[x|0];return!!(v&&v[h|0])},mouse_set_mode(h){dh(h)},mouse_pos(){return[Ce,Ke]},mouse_delta(){return[Qi,ga]},mouse_wheel(){return xa},mouse_locked(){return Bn()},mouse_ray(){if(Zt!==2)return ph(Ce,Ke);let h=Nt.length?Nt[0].rect:Mt;return ph((h[0]+h[2]+1)/2,(h[1]+h[3]+1)/2)},stick(h=0,x=0){return Ei(h|0,x|0)},btnp(h,x=0){let v=we[x|0];return!!(v&&v[h|0]&&!de[x|0][h|0])},time(){return Ai/60},menuitem(h,x,v){let I=Number(h);if(!Number.isInteger(I)||I<1||I>5)throw new Error(`menuitem(${h}, ...): the slot is 1 to 5`);if(x==null){Ri[I]=null;return}let C=Ri[I];Ri[I]={label:String(x).slice(0,16),fn:typeof v=="function"?v:C?C.fn:null}},touch_set_mode(h,x=0){zr=[0,1,2,3].includes(h|0)?h|0:0,Qs=[0,1,2].includes(x|0)?x|0:0,Qs!==1&&(Ks[1][0]=Ks[1][1]=0),kr()},freeze(h,x){er=Math.max(0,Math.floor(+h||0)),nr=typeof x=="function"?x:null},t(){return Ai/60},rnd(h=1){let x=uf();return Array.isArray(h)?h[Math.floor(x*h.length)]:x*h},srand(h){ns=h==null?null:Math.round(Number(h)*65536)>>>0},flr:Math.floor,ceil:Math.ceil,abs:Math.abs,sqrt:Math.sqrt,min:Math.min,max:Math.max,sgn(h){return h<0?-1:1},mid(h,x,v){return Math.max(Math.min(h,x),Math.min(Math.max(h,x),v))},sin(h){return Math.sin(h*vn)},cos(h){return Math.cos(h*vn)},atan2(h,x){return(Math.atan2(x,h)/vn+1)%1},dist(h,x){let v=H=>Array.isArray(H)?H:H&&typeof H=="object"?"z"in H?[H.x,H.y,H.z]:[H.x,H.y]:[+H],I=v(h),C=v(x),z=0;for(let H=0;H<Math.max(I.length,C.length);H++){let J=(+I[H]||0)-(+C[H]||0);z+=J*J}return Math.sqrt(z)},dir3(h=0,x=0){let v=Math.cos(x*vn);return[Math.sin(h*vn)*v,Math.sin(x*vn),Math.cos(h*vn)*v]},yaw_to(h,x){return(Math.atan2(+h||0,+x||0)/vn+1)%1},angdiff(h,x){return((x-h)%1+1.5)%1-.5},cam_orbit(h,x=0,v=0,I=8){let C=Fn(h&&!Array.isArray(h)&&typeof h=="object"?[h.x,h.y,h.z]:h),z=js.dir3(x,v);L.splice(0,3,C[0]-z[0]*I,C[1]-z[1]*I,C[2]-z[2]*I),D.splice(0,3,...C)},lerp(h,x,v){return Array.isArray(h)?h.map((I,C)=>I+((Array.isArray(x)?x[C]:x)-I)*v):h+(x-h)*v},mpush(h,x,v,I,C){let z=Array.isArray(h)?h:[h];x=+x||0,v=+v||0,I=+I||0;let H=0,J=0,dt=0,Rt=-1,Wt=.5;for(let ee=0;ee<3;ee++){let Se=!1;for(let Ee of z){let Te=js.mgetw(Ee,x,v,I,C);if(!Te[0])continue;let[,,,,ve,Ae,Ie,ye]=Te;x+=ve*ye,v+=Ae*ye,I+=Ie*ye,H+=ve*ye,J+=Ae*ye,dt+=Ie*ye,Ae>Wt&&(Wt=Ae,Rt=Ee|0),Se=!0}if(!Se)break}let Dt=Math.hypot(H,J,dt);return Dt>1e-9?[x,v,I,H/Dt,J/Dt,dt/Dt,Rt]:[x,v,I,0,0,0,Rt]},textw(h,x=1){return qs(String(h))*Math.max(1,Math.round(+x||1))},printc(h,x,v=7,I=null,C=1,z=C){let[H,,J]=T||Mt;return js.print(h,H+Math.floor((J-H+1-js.textw(h,C))/2),x,v,I,C,z)}},df=new G,ff=new G;function pf(h,x,v,I,C,z,H,J){let dt=[0,0,0,0,0,0,0,0];if(!(C||z||H))return dt;Gs(h);let Rt=df.set(x,v,I).applyMatrix4(h._inv),Wt=ff.set(C,z,H).transformDirection(h._inv),Dt=[Rt.x,Rt.y,Rt.z],ee=[Wt.x,Wt.y,Wt.z],Se=[h.w,h.h,h.d],Ee=0,Te=J,ve=-1;for(let Yt=0;Yt<3;Yt++){if(Math.abs(ee[Yt])<1e-12){if(Dt[Yt]<0||Dt[Yt]>=Se[Yt])return dt;continue}let Me=(0-Dt[Yt])/ee[Yt],Mn=(Se[Yt]-Dt[Yt])/ee[Yt];if(Me>Mn&&([Me,Mn]=[Mn,Me]),Me>Ee&&(Ee=Me,ve=Yt),Mn<Te&&(Te=Mn),Ee>Te)return dt}let Ae=[0,0,0],Ie=[0,0,0],ye=[0,0,0],Pn=[0,0,0],an=[0,0,0];for(let Yt=0;Yt<3;Yt++){let Me=Dt[Yt]+ee[Yt]*Ee;Ae[Yt]=Math.min(Se[Yt]-1,Math.max(0,Math.floor(Yt===ve?Me+Math.sign(ee[Yt])*1e-7:Me))),Ie[Yt]=Math.sign(ee[Yt]),Pn[Yt]=Ie[Yt]?Math.abs(1/ee[Yt]):1/0,ye[Yt]=Ie[Yt]>0?(Ae[Yt]+1-Dt[Yt])/ee[Yt]:Ie[Yt]<0?(Ae[Yt]-Dt[Yt])/ee[Yt]:1/0}ve>=0&&(an[ve]=-Ie[ve]);let si=Ee;for(;;){let Yt=br(h,Ae[0],Ae[1],Ae[2]);if(Yt)return[Yt,Ae[0],Ae[1],Ae[2],an[0],an[1],an[2],si];let Me=ye[0]<ye[1]?ye[0]<ye[2]?0:2:ye[1]<ye[2]?1:2;if(si=ye[Me],si>Te||(Ae[Me]+=Ie[Me],Ae[Me]<0||Ae[Me]>=Se[Me]))return dt;ye[Me]+=Pn[Me],an[0]=an[1]=an[2]=0,an[Me]=-Ie[Me]}}let Hr=new Ze(90,1,.05,2e3),zn=new G,mf=new G,tr=new Fs(-1,1,1,-1,.05,2e3);function ph(h,x){let v=null;for(let Rt=Nt.length-1;Rt>=0&&!v;Rt--){let Wt=Nt[Rt].rect;h>=Wt[0]&&h<Wt[2]+1&&x>=Wt[1]&&x<Wt[3]+1&&(v=Nt[Rt])}v||(v={rect:T||Mt,pos:L,look:D,fov:M,ortho:W});let[I,C,z,H]=v.rect,J=(h-I)/(z-I+1)*2-1,dt=1-(x-C)/(H-C+1)*2;if(v.ortho>0){ba(tr,v),tr.updateMatrixWorld();let Rt=mf.set(J,dt,-1).unproject(tr);return zn.set(J,dt,1).unproject(tr).sub(Rt).normalize(),Rt.addScaledVector(zn,-tr.near),[Rt.x,Rt.y,Rt.z,zn.x,zn.y,zn.z]}return ba(Hr,v),Hr.updateMatrixWorld(),zn.set(J,dt,.5).unproject(Hr).sub(Hr.position).normalize(),[v.pos[0],v.pos[1],v.pos[2],zn.x,zn.y,zn.z]}function ba(h,x){let v=x.rect[2]-x.rect[0]+1,I=x.rect[3]-x.rect[1]+1;if(h.position.set(...x.pos),h.lookAt(...x.look),h.isOrthographicCamera){let C=(v>=I?x.ortho:x.ortho*v/I)/2,z=(I>=v?x.ortho:x.ortho*I/v)/2;h.left=-C,h.right=C,h.top=z,h.bottom=-z}else h.aspect=v/I,h.fov=v>I?2*Math.atan(Math.tan(x.fov*Math.PI/360)*I/v)*180/Math.PI:x.fov;h.updateProjectionMatrix()}function gf(h,x,v,I,C){let z=null,H=-1,J=Math.floor(x-C),dt=Math.floor(x+C),Rt=Math.floor(v-C),Wt=Math.floor(v+C),Dt=Math.floor(I-C),ee=Math.floor(I+C);for(let Ee=Dt;Ee<=ee;Ee++)for(let Te=Rt;Te<=Wt;Te++)for(let ve=J;ve<=dt;ve++){let Ae=br(h,ve,Te,Ee);if(!Ae)continue;let Ie=Math.max(ve,Math.min(x,ve+1)),ye=Math.max(Te,Math.min(v,Te+1)),Pn=Math.max(Ee,Math.min(I,Ee+1)),an=x-Ie,si=v-ye,Yt=I-Pn,Me=Math.hypot(an,si,Yt);if(Me>=C)continue;let Mn;if(Me>1e-6)Mn=C-Me,an/=Me,si/=Me,Yt/=Me;else{let so=[[x-ve,-1,0,0],[ve+1-x,1,0,0],[v-Te,0,-1,0],[Te+1-v,0,1,0],[I-Ee,0,0,-1],[Ee+1-I,0,0,1]].reduce((Uh,Nh)=>Nh[0]<Uh[0]?Nh:Uh);Mn=C+so[0],an=so[1],si=so[2],Yt=so[3]}Mn>H&&(H=Mn,z=[Ae,ve,Te,Ee,an,si,Yt,Mn])}if(!z)return[0,0,0,0,0,0,0,0];let Se=new G(z[4],z[5],z[6]).applyMatrix4(h._rot);return z[4]=Se.x,z[5]=Se.y,z[6]=Se.z,z}let kn={},ni=!1,Gr=0,wa=0,Wr=0,Xr=!1,er=0,nr=null;function mh(){ft={i:ct.length,rect:T||Mt,n:0},ct.push(ft)}function gh(){ft&&(ft.pos=[...L],ft.look=[...D],ft.fov=M,ft.ortho=W,ft.bg=wt,ft.bg2=Pt,ft.fade=Qt,ft.curve=nt)}let ir=!1;function xh(){ir&&(U.restore(),ir=!1),T&&(U.save(),U.beginPath(),U.rect(T[0],T[1],T[2]-T[0]+1,T[3]-T[1]+1),U.clip(),ir=!0)}function Ea(){for(let h in Z)Z[h]=0;gt=0,He=0,Ki=-1,At=[],ir&&(U.restore(),ir=!1),U.clearRect(0,0,Vt,Vt),xh(),Ot=0,pe=0,Ut=!1,ct=[],mh(),zt=!0}function sr(h,x,v,I,C){h?(h.viewport.set(x,v,I,C),h.scissor.set(x,v,I,C),h.scissorTest=!0):(c.setViewport(x,v,I,C),c.setScissor(x,v,I,C),c.setScissorTest(!0))}function Ta(){zt=!1,gh();for(let v in pt)for(let I=Z[v];I<pt[v].length;I++)pt[v][I].visible=!1;Yc(b,E);let h=ct.filter(v=>v.n>0);h.length||(h=[{i:-1,rect:Mt,pos:[...L],look:[...D],fov:M,ortho:W,bg:wt,bg2:Pt,fade:Qt,curve:nt}]);let x=Vt*y;(h.length>1||h[0].rect!==Mt)&&(c.setRenderTarget(null),sr(null,0,0,x,x),c.setClearColor(E[wt]??0,1),c.clear());for(let v of h)wf(v,h.length>1);for(let v of[w,...V||[]])v.viewport.set(0,0,x,x),v.scissor.set(0,0,x,x),v.scissorTest=!1;c.setRenderTarget(null),c.setViewport(0,0,x,x),c.setScissorTest(!1),Nt=h.map(v=>({rect:v.rect,pos:v.pos,look:v.look,fov:v.fov,ortho:v.ortho}))}let _h=new Kn,Aa=new Ns,xf=new ne,vh=0,Ra=new ne,_f=new gi,qr=0,Yr=[0,0,0],yh=[0,0,0],Mh=[0,0,0],Ca=[0,0,0],rr=[0,0,0],or=[0,0,0];function vf(){A.updateMatrixWorld(),Aa.setFromProjectionMatrix(xf.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse));let h=ot;qr=h.uCurve.value.x,Yr[0]=h.uCurve.value.y,Yr[1]=h.uCurve.value.z,Yr[2]=h.uCurve.value.w,h.uCurveA.value.toArray(yh),h.uCurveB.value.toArray(Mh),h.uCurveP.value.toArray(Ca)}function Sh(h){let x=0,v=0;for(let z=0;z<3;z++)x+=((rr[z]+or[z])/2-Yr[z])*h[z],v+=(or[z]-rr[z])/2*Math.abs(h[z]);let I=x-v,C=x+v;return[I<=0&&C>=0?0:Math.min(I*I,C*C),Math.max(I*I,C*C)]}function bh(h){h.min.toArray(rr),h.max.toArray(or);let x=qr,[v,I]=Sh(yh),[C,z]=Sh(Mh),H=x>0?x*(v+C):x*(I+z),J=x>0?x*(I+z):x*(v+C);for(let dt=0;dt<3;dt++){let Rt=Ca[dt]*H,Wt=Ca[dt]*J;rr[dt]+=Math.min(Rt,Wt),or[dt]+=Math.max(Rt,Wt)}return h.min.fromArray(rr),h.max.fromArray(or),Aa.intersectsBox(h)}function yf(h){let x=h.geo;return Ra.fromArray(h.m),qr?(x.boundingBox||x.computeBoundingBox(),bh(_h.copy(x.boundingBox).applyMatrix4(Ra))):(x.boundingSphere||x.computeBoundingSphere(),Aa.intersectsSphere(_f.copy(x.boundingSphere).applyMatrix4(Ra)))}function Mf(){m.updateMatrixWorld();let h=0,x=pt.map;for(let v=0;v<Z.map;v++){let I=x[v];if(!I.visible)continue;let C=I.geometry;C.boundingBox||C.computeBoundingBox(),bh(_h.copy(C.boundingBox).applyMatrix4(I.matrixWorld))||(I.visible=!1,h++)}return h}function Sf(h){let[x,v,I]=h.curve||[0,"view","down"],C=h.look[0]-h.pos[0],z=h.look[2]-h.pos[2],H=Math.hypot(C,z);H<1e-6?(C=0,z=1):(C/=H,z/=H);let J={x:[1,0,0],y:[0,1,0],z:[0,0,1]},dt=v==="view"?[[C,0,z]]:v==="side"?[[z,0,-C]]:[...v].map(Dt=>J[Dt]),Rt=I==="down"?[0,-1,0]:I==="away"?[C,0,z]:J[I[1]].map(Dt=>I[0]==="-"?-Dt:Dt),Wt=ot;Wt.uCurve.value.set(x,h.look[0],h.look[1],h.look[2]),Wt.uCurveA.value.set(...dt[0]),Wt.uCurveB.value.set(...dt[1]||[0,0,0]),Wt.uCurveP.value.set(...Rt);for(let Dt of pt.map)Dt.frustumCulled=x===0}function bf(){let h=At;if(h.length>bt){let[x,v,I]=A.position.toArray();h=h.map(C=>[(C[0]-x)**2+(C[1]-v)**2+(C[2]-I)**2,C]).sort((C,z)=>C[0]-z[0]).slice(0,bt).map(C=>C[1])}et.uTorchN.value=h.length,h.length&&(A.updateMatrixWorld(),h.forEach(([x,v,I,C,z],H)=>{te.set(x,v,I).applyMatrix4(A.matrixWorldInverse),et.uTorch.value[H].set(te.x,te.y,te.z,C),et.uTorchFar.value[H]=z}))}function wf(h,x){let[v,I,C,z]=h.rect,H=v*y,J=(Vt-1-z)*y,dt=(C-v+1)*y,Rt=(z-I+1)*y;if(x)for(let ee in pt)for(let Se=0;Se<Z[ee];Se++)pt[ee][Se].visible=pt[ee][Se].userData.view===h.i;if(A=h.ortho>0?R:d,ba(A,h),P.uniforms.uOrtho.value=K.paint.uOrtho.value=h.ortho>0?1:0,Sf(h),vf(),vh=(qr?Mf():0)+Nr(h,x,ee=>!yf(ee)),bf(),j.visible=h.bg2>=0,j.visible){let ee=j.material.uniforms;ee.uSky.value.set(h.bg,h.bg2),ee.uFade.value.set(h.fade[0],h.fade[1]),ee.uPix.value=y}sr(w,H,J,dt,Rt),c.setRenderTarget(w),c.setClearColor(E[h.bg]??0,1),c.clear(),c.render(m,A);let Wt=P.uniforms;if(Wt.uAny.value=Ut?1:0,Wt.uRect.value.set(H,J,H+dt-1,J+Rt-1),y===1||!Ut){Wt.uMode.value=0,c.setRenderTarget(null),sr(null,H,J,dt,Rt),c.render(P.scene,P.camera);return}let Dt=K;Dt.grow.uRect.value.set(H,J,H+dt-1,J+Rt-1),Wt.uMode.value=1;for(let ee of V)sr(ee,H,J,dt,Rt);c.setRenderTarget(V[0]),c.render(P.scene,P.camera),Dt.grow.uR.value=y-1,Dt.grow.tMask.value=V[0].texture,Dt.grow.uDir.value.set(1,0),c.setRenderTarget(V[1]),c.render(Dt.growScene,Dt.camera),Dt.grow.tMask.value=V[1].texture,Dt.grow.uDir.value.set(0,1),c.setRenderTarget(V[0]),c.render(Dt.growScene,Dt.camera),Dt.paint.tColor.value=w.textures[0],Dt.paint.tInfo.value=w.textures[1],Dt.paint.tDepth.value=w.depthTexture,Dt.paint.tMask.value=V[0].texture,c.setRenderTarget(null),sr(null,H,J,dt,Rt),c.render(Dt.paintScene,Dt.camera)}function is(h){try{return h(),!0}catch(x){return io(),n(x),!1}}let Ef=()=>["Resume","Restart","Screenshot",...f.capture?["Capture GIF"]:[],...a?["Capture cover"]:[],...g?["Resolution"]:[],"Capture","Outlines","FPS"],Ri=[],Ia=()=>{let h=[];for(let v=1;v<=5;v++)Ri[v]&&h.push({slot:v,label:Ri[v].label});let x=Ef();return[x[0],...h,...x.slice(1)]},Ge=!1,on=0,In="",Ci=0,wh=0,ii=document.createElement("canvas");ii.width=ii.height=Vt,ii.style.cssText="position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;display:none",t.after(ii);let Pa=ii.getContext("2d");function ar(h){Ge=h,kr(),ts=Ti=-1;for(let x of[19,20,21])oe[x]=!1;ii.style.display=h?"block":"none",h?(on=0,In="",wh=0,Q.suspend(),Bn()&&document.exitPointerLock()):(Pa.clearRect(0,0,Vt,Vt),Q.resume(),Zt===2&&hh==="mouse"&&uh())}function Tf(){let h=Pa;h.clearRect(0,0,Vt,Vt),h.fillStyle="rgba(0, 0, 0, 0.45)",h.fillRect(0,0,Vt,Vt);let x=Ia();on=Math.min(on,x.length-1);let v=168,I=26+x.length*14,C=Vt-v>>1,z=Vt-I>>1;h.fillStyle=_i(Qn[0]),h.fillRect(C,z,v,I),h.fillStyle=_i(Qn[7]),h.fillRect(C,z,v,1),h.fillRect(C,z+I-1,v,1),h.fillRect(C,z,1,I),h.fillRect(C+v-1,z,1,I),vi(h,"Paused",C+(v-qs("Paused")>>1),z+4,_i(Qn[6])),lh=x.map((H,J)=>[C+4,z+19+J*14,v-8,14]),x.forEach((H,J)=>{let dt=J===on,Rt=Dt=>Dt?"on":"off",Wt=typeof H=="object"?H.label:H==="Resolution"?`Resolution < ${y}x >`:H==="FPS"?`FPS: ${Rt(f.fps)}`:H==="Capture"?`GIF recording: ${Rt(f.capture)}`:H==="Outlines"?`Outlines: ${Rt(f.outlines)}`:H;vi(h,(dt?"> ":"  ")+Wt,C+8,z+20+J*14,_i(Qn[dt?10:7]))}),In&&performance.now()<Ci&&vi(h,In,Vt-qs(In)>>1,z+I+6,_i(Qn[11]),_i(Qn[0]))}function Af(){l||Kr();let h=Vt*y,x=document.createElement("canvas");x.width=x.height=h;let v=x.getContext("2d");v.imageSmoothingEnabled=!1,v.drawImage(i,0,0,h,h),v.drawImage(t,0,0,h,h);let I=Eh("png");x.toBlob(C=>{C&&Th(C,I)},"image/png"),In="Screenshot saved",Ci=performance.now()+1500,s("screenshot saved: "+I)}function Eh(h){let x=new Date().toISOString().slice(0,19).replace(/[-:]/g,"").replace("T","_");return`${nf(e.name)}_${x}.${h}`}function Th(h,x){let v=document.createElement("a");v.href=URL.createObjectURL(h),v.download=x,document.body.append(v),v.click(),v.remove(),setTimeout(()=>URL.revokeObjectURL(v.href),2e3)}let Ah=10,lr=2,Zr=Ah*60/lr,La=[],ss=0,rs=0,Da=-1/0,$r=!1,os=[],Ua=new Map,Jr=null;function Rh(){ss=rs=0,Da=-1/0,os=[],Ua=new Map}function Rf(h){let x=Ua.get(h);if(x!==void 0)return x;if(os.length<255)x=os.push(h)-1;else{let v=1/0;for(let I=0;I<os.length;I++){let C=os[I],z=(h&255)-(C&255),H=(h>>8&255)-(C>>8&255),J=(h>>16&255)-(C>>16&255),dt=z*z+H*H+J*J;dt<v&&(v=dt,x=I)}}return Ua.set(h,x),x}function Cf(){if(!f.capture||Xr||$r||Ai-Da<lr)return;if(Da=Ai,!Jr){let H=document.createElement("canvas");H.width=H.height=Vt,Jr=H.getContext("2d",{willReadFrequently:!0}),Jr.imageSmoothingEnabled=!1}let h=Jr;h.fillStyle="#000",h.fillRect(0,0,Vt,Vt),h.drawImage(i,0,0,Vt,Vt),h.drawImage(t,0,0,Vt,Vt);let x=new Uint32Array(h.getImageData(0,0,Vt,Vt).data.buffer),v=La[ss];v||(v=La[ss]={px:new Uint8Array(Vt*Vt),f:0});let I=v.px,C=-1,z=0;for(let H=0;H<x.length;H++){let J=x[H]&16777215;J!==C&&(C=J,z=Rf(J)),I[H]=z}v.f=Ai,ss=(ss+1)%Zr,rs<Zr&&rs++}async function If(){if($r)return;if(rs<2){In="Nothing recorded yet",Ci=performance.now()+1500;return}$r=!0;let h=Eh("gif");try{let x=[];for(let J=0;J<rs;J++)x.push(La[(ss-rs+J+Zr)%Zr]);let v=x[x.length-1].f+lr-Ah*60;x=x.filter(J=>J.f>=v);let I=os.map(J=>(J&255)<<16|J&65280|J>>16&255),C=new pa(Vt,Vt,I),z=J=>Math.round((J-x[0].f)*100/60),H=performance.now();for(let J=0;J<x.length;J++){let dt=J+1<x.length?x[J+1].f:x[J].f+lr;C.add(x[J].px,z(dt)-z(x[J].f)),performance.now()-H>30&&(In=`Saving GIF ${Math.floor(J*100/x.length)}%`,Ci=1/0,await new Promise(Rt=>setTimeout(Rt,0)),H=performance.now())}Th(new Blob([C.finish()],{type:"image/gif"}),h),In="GIF saved",Ci=performance.now()+1500,s(`gif saved: ${h} (${((x[x.length-1].f+lr-x[0].f)/60).toFixed(1)} s)`)}catch(x){In="GIF failed",Ci=performance.now()+1500,s("gif failed: "+(x&&x.message))}finally{$r=!1}}function Pf(){l||Kr();let h=document.createElement("canvas");h.width=h.height=Vt;let x=h.getContext("2d");x.imageSmoothingEnabled=!1,x.drawImage(i,0,0,Vt,Vt),x.drawImage(t,0,0),a(h.toDataURL("image/png")),In="Cover captured",Ci=performance.now()+1500}function Lf(){let h=I=>we.some((C,z)=>C[I]&&!de[z][I]);if(++wh<15)return;ts>=0&&(on=ts,ts=-1);let x=Ia();if(Ti>=0)return on=Math.min(Ti,x.length-1),Ti=-1,cr(x[on],4);h(2)&&(on=(on+x.length-1)%x.length),h(3)&&(on=(on+1)%x.length);let v=x[on];(h(0)||h(1))&&(v==="Resolution"?Ch(h(1)?1:-1):v==="FPS"||v==="Capture"||v==="Outlines"?cr(v):typeof v=="object"&&cr(v,h(1)?1:0)),h(6)?cr("Resume"):(h(4)||h(5))&&cr(v,h(4)?4:5)}function Df(h,x){let v=Ri[h];if(!v||!v.fn)return ar(!1);let I=!1;is(()=>{I=v.fn(x)===!0})&&(I||ar(!1))}function cr(h,x=4){typeof h=="object"?Df(h.slot,x):h==="Resume"?ar(!1):h==="Restart"?(io(),r()):h==="Screenshot"?Af():h==="Capture GIF"?If():h==="Capture cover"?Pf():h==="Resolution"?Ch(1):h==="FPS"?(f.fps=!f.fps,Ih(),p()):h==="Outlines"?(f.outlines=!f.outlines,Kr(),p()):h==="Capture"&&(f.capture=!f.capture,Rh(),p(),on=Ia().indexOf("Capture"))}function Ch(h){Y((y-1+h+3)%3+1),Kr()}function Kr(){U.clearRect(0,0,Vt,Vt),Ea(),!(kn._draw&&!is(kn._draw))&&Ta()}let Qr=document.createElement("div");Qr.style.cssText="position:absolute;left:50%;top:2px;transform:translateX(-50%);white-space:pre;padding:1px 4px;font:600 11px/1.3 ui-monospace,monospace;color:#fff;background:rgba(0,0,0,0.6);pointer-events:none;display:none;z-index:5",ii.after(Qr);let hr=0,jr=0,to=0,eo=0,no=performance.now(),Na=0,Fa=0;function Ih(){Qr.style.display=f.fps?"block":"none",hr=jr=to=eo=0,no=performance.now()}Ih();function Uf(h){if(!f.fps)return;hr++,jr+=h,to+=Na,eo+=Fa;let x=performance.now();if(x-no>=500){let v=I=>(I/hr).toFixed(1);Qr.textContent=`${Math.round(hr*1e3/(x-no))} fps  update ${v(jr)}  draw ${v(to)}  render ${v(eo)} ms`,hr=jr=to=eo=0,no=x}}function Ph(){if(ei(),Ge)return Lf(),ni;if(hf())return ar(!0),!0;if(Ai++,er>0){let h=nr;if(er--,er===0&&nr===h&&(nr=null),h&&!is(h))return!1}else if(kn._update&&!is(kn._update))return!1;return!0}function Lh(){if(Ge)return Tf(),Na=Fa=0,!0;let h=performance.now();if(Ea(),kn._draw&&!is(kn._draw))return!1;let x=performance.now();return Ta(),Cf(),Na=x-h,Fa=performance.now()-x,!0}function Dh(h){if(!ni||Xr)return;let x=performance.now();Wr+=Math.min(h-wa,100),wa=h;let v=0;for(;Wr>=tf&&v<4;)if(Wr-=tf,v++,!Ph()||!ni)return;let I=performance.now()-x;v>0&&!Lh()||(v>0&&Uf(I),Gr=requestAnimationFrame(Dh))}function Nf(h=1,x=!0){if(Xr=!0,cancelAnimationFrame(Gr),!ni)return h===0;for(let v=0;v<h;v++)if(!Ph()||!ni||(x||v===h-1)&&!Lh())return!1;return!0}function Ff(h){return kn=h||{},Ea(),Ta(),kn._init&&!is(kn._init)?!1:(ni=!0,wa=performance.now(),Gr=requestAnimationFrame(Dh),!0)}function io(){ni=!1,cancelAnimationFrame(Gr),Q.stop(),Q.musicStop(),Bn()&&document.exitPointerLock()}function Of(){io();for(let h of lt)h&&qc(h);lt.splice(0,lt.length,...la(e)),Tt=[],E=Array.isArray(e.palette)&&e.palette.length===Cn?[...e.palette]:[...Qn],rt=wr(),St=Ws(),$e++;for(let h=1;h<_n;h++)$(h,h);wt=0,Pt=-1,Qt=Er,Ft=-1,se=!0,Ht=null,Ve=0,jt=0,O=null,Ot=0,L.splice(0,3,0,6,-10),D.splice(0,3,0,0,0),M=90,W=0,T=null,Nt=[],nt=[0,"view","down"],Rh(),Ai=0,Wr=0,er=0,nr=null,ns=null,Xr=!1,zr=Qs=0;for(let h of Ks)h[0]=h[1]=0;kr(),Ri=[],dh(0),De=Qe=rn=Qi=ga=xa=0;for(let h of[oe,ya,es])h.fill(!1);for(let h of we)h.fill(!1);for(let h of de)h.fill(!1);Ge=!1,ts=Ti=-1,ii.style.display="none",Pa.clearRect(0,0,Vt,Vt),Q.resume(),U.clearRect(0,0,Vt,Vt)}function Bf(h,x){Ge||(De+=+h||0,Qe+=+x||0)}function zf(h,x,v=0){let I=Ks[v?1:0];I[0]=+h||0,I[1]=+x||0}function kf(h,x){ya[h]=!!x,x&&(es[h]=!0)}let as=!1;try{as=localStorage.getItem("blocky3d.mute")==="1"}catch{}Q.setMuted(as);function Vf(h){as=!!h,Q.setMuted(as);try{localStorage.setItem("blocky3d.mute",as?"1":"0")}catch{}}function Hf(h,x){x&&Q.unlock();let v=av[h.code];v!==void 0&&(oe[v]=x,x&&(es[v]=!0),h.preventDefault())}return{api:js,start:Ff,stop:io,reset:Of,step:Nf,key:Hf,maps:lt,renderer:c,unlockAudio:()=>Q.unlock(),setButton:kf,setStick:zf,touchDelta:Bf,setMuted:Vf,set onTouchMode(h){Ma=h,kr()},get touchMode(){return Ge?0:zr},get culled(){return vh},get touchRight(){return Ge?0:Qs},get muted(){return as},get paused(){return Ge},get scale(){return y},setScale:Y}}var lv=`
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
/* touch_set_mode(l, 1): the right side is an analog circle (stick(1)) with a small O button above it */
.b3d-ab .stick { display: none; position: absolute; right: 0; bottom: 0; width: 80%; height: 80%; touch-action: none; }
.b3d-ab .stick div { position: absolute; }
.b3d-ab .stick .ring { inset: 2%; border-radius: 50%; background: #1b1b1b; border: 2px solid #383838; }
.b3d-ab .stick .knob { width: 36%; height: 36%; border-radius: 50%; background: #3a3a3a; border: 1px solid #555;
  left: calc(32% + var(--kx, 0) * 30%); top: calc(32% + var(--ky, 0) * 30%); }
.b3d-ab .stick.on .knob { background: #5a5a5a; }
.b3d-ab[data-mode="1"] .stick { display: block; }
/* touch_set_mode(l, 2): a touchpad for looking around (mouse_delta()), with the same small O */
.b3d-ab .pad { display: none; position: absolute; right: 0; bottom: 0; width: 80%; height: 80%; touch-action: none; border-radius: 14px;
  background: #1b1b1b radial-gradient(#333 1px, transparent 1.5px) 0 0 / 12px 12px; border: 2px solid #383838; }
.b3d-ab .pad.on { border-color: #5a5a5a; background-color: #222; }
.b3d-ab .pad.hold { border-color: #8a8a8a; background-color: #2c2c2c; }
.b3d-ab[data-mode="2"] .pad { display: block; }
.b3d-ab[data-mode="1"] .x, .b3d-ab[data-mode="2"] .x { display: none; }
.b3d-ab[data-mode="1"] .o, .b3d-ab[data-mode="2"] .o { left: 0; top: 0; bottom: auto; width: 28%; height: 28%; font-size: calc(var(--dp) * 0.1); }

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
`,Cr=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Ir={pause:Cr('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>'),sound:Cr('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),muted:Cr('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>'),full:Cr('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),exitFull:Cr('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>')};function ih(i=document){let t=i.createElement("style");t.id="b3d-style",t.textContent=lv,i.head.prepend(t);let e=i.createElement("div");return e.id="b3d-shell",e.innerHTML=`
  <div id="screen">
    <canvas id="gl" width="256" height="256"></canvas>
    <canvas id="ui" width="256" height="256"></canvas>
  </div>
  <div class="b3d-sys">
    <button class="b3d-pause" title="Pause (Enter)" aria-label="Pause">${Ir.pause}</button>
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
    <div class="stick" aria-label="Right stick"><div class="ring"></div><div class="knob"></div></div>
    <div class="pad" aria-label="Touchpad"></div>
  </div>`,i.body.prepend(e),{canvas:i.getElementById("gl"),overlay:i.getElementById("ui")}}function sh(i,t=document){let e=t.getElementById("b3d-shell");if(!e)return;let n=t.defaultView,s=t.documentElement,r=k=>e.querySelector(k),o=()=>s.classList.add("b3d-touch"),a=n.matchMedia("(pointer: coarse)");a.matches&&o(),a.addEventListener&&a.addEventListener("change",()=>{a.matches&&o()}),n.addEventListener("pointerdown",k=>{(k.pointerType==="touch"||k.pointerType==="pen")&&o()},!0),n.focus(),n.addEventListener("pointerdown",()=>n.focus());let l=new Map,c=k=>{let at=l.get(k);return at||(at=k.getBoundingClientRect(),l.set(k,at)),at},u=()=>l.clear();e.addEventListener("pointerdown",u,!0);for(let k of["resize","orientationchange"])n.addEventListener(k,u);t.addEventListener("fullscreenchange",u),t.addEventListener("webkitfullscreenchange",u);let f=r(".b3d-dpad"),p=[".l",".r",".u",".d"].map(k=>f.querySelector(k)),g=new Map,_=0,y=()=>{let k=[!1,!1,!1,!1],at=c(f),rt=0,St=0;for(let[wt,Pt]of g.values()){let Qt=(wt-at.left)/at.width*2-1,Ft=(Pt-at.top)/at.height*2-1;if(_===1){let se=Math.hypot(Qt,Ft)/.9,O=se>1?1/se:1;rt=Qt/.9*O,St=Ft/.9*O,rt<-.5&&(k[0]=!0),rt>.5&&(k[1]=!0),St<-.5&&(k[2]=!0),St>.5&&(k[3]=!0)}else if(_===2)Math.abs(Qt)>.06&&(k[Qt<0?0:1]=!0);else if(_===3)Math.abs(Ft)>.06&&(k[Ft<0?2:3]=!0);else{if(Math.hypot(Qt,Ft)<.2)continue;let se=Math.abs(Qt),O=Math.abs(Ft);se>O*.42&&(k[Qt<0?0:1]=!0),O>se*.42&&(k[Ft<0?2:3]=!0)}}k.forEach((wt,Pt)=>{i.setButton(Pt,wt),p[Pt].classList.toggle("on",wt)}),i.setStick&&i.setStick(rt,St),f.style.setProperty("--kx",rt),f.style.setProperty("--ky",St),f.classList.toggle("on",_===1&&g.size>0)},m=r(".b3d-ab"),d=r(".b3d-ab .stick"),R=new Map,A=0,w=()=>{let k=c(d),at=0,rt=0;for(let[St,wt]of R.values()){let Pt=(St-k.left)/k.width*2-1,Qt=(wt-k.top)/k.height*2-1,Ft=Math.hypot(Pt,Qt)/.9,se=Ft>1?1/Ft:1;at=Pt/.9*se,rt=Qt/.9*se}i.setStick&&i.setStick(at,rt,1),d.style.setProperty("--kx",at),d.style.setProperty("--ky",rt),d.classList.toggle("on",R.size>0)};d.addEventListener("pointerdown",k=>{k.preventDefault();try{d.setPointerCapture(k.pointerId)}catch{}R.set(k.pointerId,[k.clientX,k.clientY]),w()}),d.addEventListener("pointermove",k=>{R.has(k.pointerId)&&(R.set(k.pointerId,[k.clientX,k.clientY]),w())});for(let k of["pointerup","pointercancel","lostpointercapture"])d.addEventListener(k,at=>{R.delete(at.pointerId)&&w()});let V=250,L=12,D=300,U=r(".b3d-ab .pad"),E=null,b=0,P=0,K=0,Y=0,j=!1,it=-1e9,tt=()=>{j&&(j=!1,i.setButton(19,!1),U.classList.remove("hold")),E=null,U.classList.remove("on")};U.addEventListener("pointerdown",k=>{if(k.preventDefault(),E===null){E=k.pointerId,b=k.clientX,P=k.clientY,K=performance.now(),Y=0;try{U.setPointerCapture(k.pointerId)}catch{}U.classList.add("on"),K-it<D&&(j=!0,it=-1e9,i.setButton(19,!0),U.classList.add("hold"))}}),U.addEventListener("pointermove",k=>{if(k.pointerId!==E)return;let at=256/Math.max(1,c(U).width);i.touchDelta&&i.touchDelta((k.clientX-b)*at,(k.clientY-P)*at),Y+=Math.hypot(k.clientX-b,k.clientY-P),b=k.clientX,P=k.clientY}),U.addEventListener("pointerup",k=>{if(k.pointerId!==E)return;let at=performance.now();!j&&at-K<V&&Y<L&&(i.setButton(19,!0),i.setButton(19,!1),it=at),tt()});for(let k of["pointercancel","lostpointercapture"])U.addEventListener(k,at=>{at.pointerId===E&&tt()});let ht=(k,at=0)=>{u(),at!==A&&(A=at,m.dataset.mode=String(at),at!==1&&(R.clear(),w()),at!==2&&(tt(),it=-1e9)),k!==_&&(_=k,f.dataset.mode=String(k),y())};i.onTouchMode=ht,f.addEventListener("pointerdown",k=>{k.preventDefault();try{f.setPointerCapture(k.pointerId)}catch{}g.set(k.pointerId,[k.clientX,k.clientY]),y()}),f.addEventListener("pointermove",k=>{g.has(k.pointerId)&&(g.set(k.pointerId,[k.clientX,k.clientY]),y())});for(let k of["pointerup","pointercancel","lostpointercapture"])f.addEventListener(k,at=>{g.delete(at.pointerId)&&y()});[[".o",4],[".x",5]].forEach(([k,at])=>{let rt=r(".b3d-ab "+k),St=wt=>{i.setButton(at,wt),rt.classList.toggle("on",wt)};rt.addEventListener("pointerdown",wt=>{wt.preventDefault();try{rt.setPointerCapture(wt.pointerId)}catch{}St(!0)});for(let wt of["pointerup","pointercancel","lostpointercapture"])rt.addEventListener(wt,()=>St(!1))}),e.addEventListener("contextmenu",k=>{k.target.closest("#screen")||k.preventDefault()});let $=(k,at)=>{let rt=r(k),St=-1e9,wt=()=>{let Pt=performance.now();Pt-St<500||(St=Pt,at(),rt.blur())};return rt.addEventListener("mousedown",Pt=>Pt.preventDefault()),rt.addEventListener("pointerdown",Pt=>{Pt.pointerType!=="mouse"&&Pt.preventDefault()}),rt.addEventListener("pointerup",Pt=>{Pt.pointerType!=="mouse"&&wt()}),rt.addEventListener("click",wt),rt};$(".b3d-pause",()=>{i.setButton(6,!0),i.setButton(6,!1)});let mt=$(".b3d-mute",()=>{i.setMuted(!i.muted),lt()}),lt=()=>{mt.innerHTML=i.muted?Ir.muted:Ir.sound,mt.title=i.muted?"Unmute":"Mute",mt.classList.toggle("on",i.muted)};lt();let It=()=>t.fullscreenElement||t.webkitFullscreenElement,Xt=$(".b3d-full",()=>{try{let k=It()?(t.exitFullscreen||t.webkitExitFullscreen).call(t):(s.requestFullscreen||s.webkitRequestFullscreen).call(s);k&&k.catch&&k.catch(()=>{})}catch{}}),ce=()=>{Xt.innerHTML=It()?Ir.exitFull:Ir.full,Xt.title=It()?"Exit fullscreen":"Fullscreen"},Q=n.matchMedia("(display-mode: fullscreen)").matches||n.navigator.standalone===!0;Xt.hidden=Q||!(t.fullscreenEnabled||t.webkitFullscreenEnabled),t.addEventListener("fullscreenchange",ce),t.addEventListener("webkitfullscreenchange",ce),ce()}var fn=null,$s=null,Pr=null,rf=null;function of(i,{canvas:t,overlay:e,onError:n=ma,onLog:s=console.log,onRestart:r=af,onSave:o,onCover:a,keepFrame:l,wire:c=!0}={}){return t||({canvas:t,overlay:e}=ih()),$s=e,rf=n,fn=sf({canvas:t,overlay:e,cart:i,onError:n,onLog:s,onRestart:r,onSave:o,onCover:a,keepFrame:l}),Object.defineProperties(window,Object.getOwnPropertyDescriptors(fn.api)),window.addEventListener("keydown",u=>fn.key(u,!0)),window.addEventListener("keyup",u=>fn.key(u,!1)),window.addEventListener("pointerdown",()=>fn.unlockAudio()),c&&sh(fn),fn}function cv(i,t){let e=ih();fa(i.sfx||[],i.music||[]);let n=e.overlay.getContext("2d"),s=null,r=!1,o={setButton(p,g){s?s.setButton(p,g):g&&p!==6&&f()},setStick(p,g,_){s&&s.setStick(p,g,_)},touchDelta(p,g){s&&s.touchDelta(p,g)},onTouchMode:null,get muted(){if(s)return s.muted;try{return localStorage.getItem("blocky3d.mute")==="1"}catch{return!1}},setMuted(p){if(s)s.setMuted(p);else try{localStorage.setItem("blocky3d.mute",p?"1":"0")}catch{}}};sh(o);let a=p=>{n.imageSmoothingEnabled=!1,p?n.drawImage(p,0,0,256,256):(n.fillStyle="#1d2b53",n.fillRect(0,0,256,256),zd(n,i.name,"#fff1e8","#000000",56,88)),n.fillStyle="rgba(0, 0, 0, 0.6)",n.beginPath(),n.arc(128,128,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff1e8",n.beginPath(),n.moveTo(120,115),n.lineTo(120,141),n.lineTo(141,128),n.closePath(),n.fill()};if(typeof i.cover=="string"&&i.cover.startsWith("data:image/")){let p=new Image;p.onload=()=>{r||a(p)},p.onerror=()=>{r||a(null)},p.src=i.cover}else a(null);e.overlay.style.cursor="pointer";let l=p=>{p.ctrlKey||p.metaKey||p.altKey||/^(Tab|Escape|Shift|Control|Alt|Meta|F\d+)$/.test(p.key)||(p.preventDefault(),f())},c=()=>f();e.overlay.addEventListener("click",c),window.addEventListener("keydown",l);let u=()=>{if(r)return;let p=navigator.getGamepads?navigator.getGamepads():[];for(let g of p)if(g&&[0,1,2,3,9].some(_=>g.buttons[_]&&g.buttons[_].pressed))return f();requestAnimationFrame(u)};requestAnimationFrame(u);function f(){if(!r){r=!0,e.overlay.removeEventListener("click",c),window.removeEventListener("keydown",l),e.overlay.style.cursor="",n.clearRect(0,0,256,256);try{s=of(i,{...e,wire:!1})}catch(p){ma(p);return}s.onTouchMode=o.onTouchMode,s.unlockAudio(),oh(t)}}}var rh='({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null })';function hv(i){return"(function () {"+String(i||"")+`
;return `+rh+`;
})`}function oh(i){Pr=typeof i=="function"?i:null;let t;try{t=Pr?Pr():i||(0,eval)(rh)}catch(e){return rf(e),!1}return fn.start(t)}function af(){if(!Pr){location.reload();return}fn.reset(),oh(Pr)}function uv(){fn&&fn.stop()}function ma(i){if(console.error(i),fn&&fn.stop(),!$s)return;$s.width!==256&&($s.width=$s.height=256);let t=$s.getContext("2d"),e=("Error: "+String(i&&i.message||i)).split(/\s+/),n=[""];for(let s of e){let r=n[n.length-1];r&&qs(r+" "+s)>248?n.push(s):n[n.length-1]=r?r+" "+s:s}vi(t,n.join(`
`),4,4,"#ff004d","#000000")}function dv(){window.addEventListener("error",i=>ma(i.error||i.message))}var lf="0.1.0-alpha";window.Blocko3D={...ah,VERSION:lf};window.Blocky3D=window.Blocko3D;})();
