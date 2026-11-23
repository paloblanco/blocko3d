(()=>{var gd=Object.defineProperty;var _d=(i,t)=>{for(var e in t)gd(i,e,{get:t[e],enumerable:!0})};var gc={};_d(gc,{HOOKS_EXPR:()=>pc,cartFunctionSource:()=>F_,catchGlobalErrors:()=>B_,install:()=>Vu,play:()=>N_,restart:()=>Hu,showError:()=>Fo,start:()=>mc,stop:()=>O_});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var xd=0,Dc=1,vd=2;var Fh=1,yd=2,Zn=3,On=0,sn=1,Cn=2,pi=0,gs=1,Uc=2,Nc=3,Fc=4,Md=5,Li=100,Sd=101,bd=102,wd=103,Ed=104,Td=200,Ad=201,Rd=202,Cd=203,ba=204,wa=205,Id=206,Pd=207,Ld=208,Dd=209,Ud=210,Nd=211,Fd=212,Od=213,Bd=214,Ea=0,Ta=1,Aa=2,ys=3,Ra=4,Ca=5,Ia=6,Pa=7,Oh=0,zd=1,kd=2,mi=0,Vd=1,Hd=2,Gd=3,Wd=4,Xd=5,qd=6,Yd=7;var Bh=300,Ms=301,Ss=302,La=303,Da=304,Eo=306,Ua=1e3,Ni=1001,Na=1002,Le=1003,Zd=1004;var Ir=1005;var Fn=1006,qo=1007;var Fi=1008;var Pn=1009,zh=1010,kh=1011,or=1012,Bl=1013,Oi=1014,In=1015,ar=1016,zl=1017,kl=1018,bs=1020,Vh=35902,Hh=1021,Gh=1022,cn=1023,Wh=1024,Xh=1025,_s=1026,ws=1027,To=1028,Vl=1029,qh=1030,Hl=1031;var Gl=1033,to=33776,eo=33777,no=33778,io=33779,Fa=35840,Oa=35841,Ba=35842,za=35843,ka=36196,Va=37492,Ha=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,$a=37814,Ja=37815,Ka=37816,Qa=37817,ja=37818,tl=37819,el=37820,nl=37821,so=36492,il=36494,sl=36495,Yh=36283,rl=36284,ol=36285,al=36286;var ro=2300,ll=2301,Yo=2302,Oc=2400,Bc=2401,zc=2402;var $d=3200,Jd=3201;var Kd=0,Qd=1,fi="",_n="srgb",xi="srgb-linear",Ao="linear",me="srgb";var ts=7680;var kc=519,jd=512,tf=513,ef=514,Zh=515,nf=516,sf=517,rf=518,of=519,Vc=35044;var Bn="300 es",Jn=2e3,oo=2001,gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zo=Math.PI/180,cl=180/Math.PI;function lr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function nn(i,t,e){return Math.max(t,Math.min(e,i))}function af(i,t){return(i%t+t)%t}function $o(i,t,e){return(1-e)*i+e*t}function Ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var he=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],g=n[5],_=n[8],y=s[0],m=s[3],d=s[6],A=s[1],T=s[4],b=s[7],F=s[2],C=s[5],I=s[8];return r[0]=o*y+a*A+l*F,r[3]=o*m+a*T+l*C,r[6]=o*d+a*b+l*I,r[1]=c*y+h*A+u*F,r[4]=c*m+h*T+u*C,r[7]=c*d+h*b+u*I,r[2]=f*y+g*A+_*F,r[5]=f*m+g*T+_*C,r[8]=f*d+g*b+_*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,g=c*r-o*l,_=e*u+n*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=g*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new Yt;function $h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=ao("canvas");return i.style.display="block",i}var Hc={};function ir(i){i in Hc||(Hc[i]=!0,console.warn(i))}function cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=xs(i.r),i.g=xs(i.g),i.b=xs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?Ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gc=[.64,.33,.3,.6,.15,.06],Wc=[.2126,.7152,.0722],Xc=[.3127,.329],qc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[xi]:{primaries:Gc,whitePoint:Xc,transfer:Ao,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:Gc,whitePoint:Xc,transfer:me,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}});var es,hl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=ao("canvas")),es.width=t.width,es.height=t.height;let n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},df=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ko(s[o].image)):r.push(Ko(s[o]))}else r=Ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ff=0,hn=class i extends gi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ni,s=Ni,r=Fn,o=Fi,a=cn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=lr(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Bh;hn.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],_=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,b=(g+1)/2,F=(d+1)/2,C=(h+f)/4,I=(u+y)/4,z=(_+m)/4;return T>b&&T>F?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=I/n):b>F?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=z/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=I/r,s=z/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(u-y)/A,this.z=(f-h)/A,this.w=Math.acos((c+g+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends gi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new hn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},co=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dl=class extends hn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _i=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],g=r[o+1],_=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=g,t[e+2]=_,t[e+3]=y;return}if(u!==y||l!==f||c!==g||h!==_){let m=1-a,d=l*f+c*g+h*_+u*y,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){let F=Math.sqrt(T),C=Math.atan2(F,d*A);m=Math.sin(m*C)/F,a=Math.sin(a*C)/F}let b=a*A;if(l=l*m+f*b,c=c*m+g*b,h=h*m+_*b,u=u*m+y*b,m===1-a){let F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*g-c*f,t[e+1]=l*_+h*f+c*u-a*g,t[e+2]=c*_+h*g+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u-f*g*_;break;case"YXZ":this._x=f*h*u+c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u+f*g*_;break;case"ZXY":this._x=f*h*u-c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u-f*g*_;break;case"ZYX":this._x=f*h*u-c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u+f*g*_;break;case"YZX":this._x=f*h*u+c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u-f*g*_;break;case"XZY":this._x=f*h*u-c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>u){let g=2*Math.sqrt(1+n-a-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>u){let g=2*Math.sqrt(1+a-n-u);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+u-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qo=new k,Zc=new _i,Bi=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Lr.subVectors(this.max,Qs),ns.subVectors(t.a,Qs),is.subVectors(t.b,Qs),ss.subVectors(t.c,Qs),ai.subVectors(is,ns),li.subVectors(ss,is),Ei.subVectors(ns,ss);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ei.z,Ei.y,ai.z,0,-ai.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!jo(e,ns,is,ss,Lr)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,ns,is,ss,Lr))?!1:(Dr.crossVectors(ai,li),e=[Dr.x,Dr.y,Dr.z],jo(e,ns,is,ss,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new k,new k,new k,new k,new k,new k,new k,new k],Tn=new k,Pr=new Bi,ns=new k,is=new k,ss=new k,ai=new k,li=new k,Ei=new k,Qs=new k,Lr=new k,Dr=new k,Ti=new k;function jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=t.dot(Ti),c=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var pf=new Bi,js=new k,ta=new k,Es=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(ta)),this.expandByPoint(js.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new k,ea=new k,Ur=new k,ci=new k,na=new k,Nr=new k,ia=new k,ho=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(ea);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=ci.dot(this.direction),l=-ci.dot(Ur),c=ci.lengthSq(),h=Math.abs(1-o*o),u,f,g,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){let y=1/h;u*=y,f*=y,g=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ea).addScaledVector(Ur,f),g}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),Nr.subVectors(n,t),ia.crossVectors(na,Nr);let o=this.direction.dot(ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let l=a*this.direction.dot(Nr.crossVectors(ci,Nr));if(l<0)return null;let c=a*this.direction.dot(na.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(ia);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,g,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,g,_,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,g,_,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,g=o*u,_=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+_*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,g=l*u,_=c*h,y=c*u;e[0]=f+y*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,g=l*u,_=c*h,y=c*u;e[0]=f-y*a,e[4]=-o*u,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,g=o*u,_=a*h,y=a*u;e[0]=l*h,e[4]=_*c-g,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=y-f*u,e[8]=_*u+g,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*u+_,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=o*h,e[9]=g*u-_,e[2]=_*u-g,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(n,an),hi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(n,an)),hi.normalize(),Fr.crossVectors(an,hi),s[0]=hi.x,s[4]=Fr.x,s[8]=an.x,s[1]=hi.y,s[5]=Fr.y,s[9]=an.y,s[2]=hi.z,s[6]=Fr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],g=n[13],_=n[2],y=n[6],m=n[10],d=n[14],A=n[3],T=n[7],b=n[11],F=n[15],C=s[0],I=s[4],z=s[8],E=s[12],S=s[1],D=s[5],tt=s[9],W=s[13],et=s[2],Q=s[6],j=s[10],ht=s[14],Z=s[3],lt=s[7],vt=s[11],Pt=s[15];return r[0]=o*C+a*S+l*et+c*Z,r[4]=o*I+a*D+l*Q+c*lt,r[8]=o*z+a*tt+l*j+c*vt,r[12]=o*E+a*W+l*ht+c*Pt,r[1]=h*C+u*S+f*et+g*Z,r[5]=h*I+u*D+f*Q+g*lt,r[9]=h*z+u*tt+f*j+g*vt,r[13]=h*E+u*W+f*ht+g*Pt,r[2]=_*C+y*S+m*et+d*Z,r[6]=_*I+y*D+m*Q+d*lt,r[10]=_*z+y*tt+m*j+d*vt,r[14]=_*E+y*W+m*ht+d*Pt,r[3]=A*C+T*S+b*et+F*Z,r[7]=A*I+T*D+b*Q+F*lt,r[11]=A*z+T*tt+b*j+F*vt,r[15]=A*E+T*W+b*ht+F*Pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],g=t[14],_=t[3],y=t[7],m=t[11],d=t[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*g-n*l*g)+y*(+e*l*g-e*c*f+r*o*f-s*o*g+s*c*h-r*l*h)+m*(+e*c*u-e*a*g-r*o*u+n*o*g+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],g=t[11],_=t[12],y=t[13],m=t[14],d=t[15],A=u*m*c-y*f*c+y*l*g-a*m*g-u*l*d+a*f*d,T=_*f*c-h*m*c-_*l*g+o*m*g+h*l*d-o*f*d,b=h*y*c-_*u*c+_*a*g-o*y*g-h*a*d+o*u*d,F=_*u*l-h*y*l-_*a*f+o*y*f+h*a*m-o*u*m,C=e*A+n*T+s*b+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=A*I,t[1]=(y*f*r-u*m*r-y*s*g+n*m*g+u*s*d-n*f*d)*I,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*d+n*l*d)*I,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*g-n*l*g)*I,t[4]=T*I,t[5]=(h*m*r-_*f*r+_*s*g-e*m*g-h*s*d+e*f*d)*I,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*d-e*l*d)*I,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*g+e*l*g)*I,t[8]=b*I,t[9]=(_*u*r-h*y*r-_*n*g+e*y*g+h*n*d-e*u*d)*I,t[10]=(o*y*r-_*a*r+_*n*c-e*y*c-o*n*d+e*a*d)*I,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*g-e*a*g)*I,t[12]=F*I,t[13]=(h*y*s-_*u*s+_*n*f-e*y*f-h*n*m+e*u*m)*I,t[14]=(_*a*s-o*y*s-_*n*l+e*y*l+o*n*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,g=r*h,_=r*u,y=o*h,m=o*u,d=a*u,A=l*c,T=l*h,b=l*u,F=n.x,C=n.y,I=n.z;return s[0]=(1-(y+d))*F,s[1]=(g+b)*F,s[2]=(_-T)*F,s[3]=0,s[4]=(g-b)*C,s[5]=(1-(f+d))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(_+T)*I,s[9]=(m-A)*I,s[10]=(1-(f+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let c=1/r,h=1/o,u=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(a===Jn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===oo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,g=(n+s)*h,_,y;if(a===Jn)_=(o+r)*u,y=-2*u;else if(a===oo)_=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},rs=new k,An=new ue,mf=new k(0,0,0),gf=new k(1,1,1),hi=new k,Fr=new k,an=new k,$c=new ue,Jc=new _i,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $c.makeRotationFromQuaternion(t),this.setFromRotationMatrix($c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var uo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_f=0,Kc=new k,os=new _i,Xn=new ue,Or=new k,tr=new k,xf=new k,vf=new _i,Qc=new k(1,0,0),jc=new k(0,1,0),th=new k(0,0,1),eh={type:"added"},yf={type:"removed"},as={type:"childadded",child:null},sa={type:"childremoved",child:null},vn=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Ln,n=new _i,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Yt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Or.copy(t):Or.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(tr,Or,this.up):Xn.lookAt(Or,tr,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Xn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};vn.DEFAULT_UP=new k(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new k,qn=new k,ra=new k,Yn=new k,ls=new k,cs=new k,nh=new k,oa=new k,aa=new k,la=new k,ca=new ge,ha=new ge,ua=new ge,Di=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),qn.subVectors(n,e),ra.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(qn),l=Rn.dot(ra),c=qn.dot(qn),h=qn.dot(ra),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,g=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ca,r.x),o.addScaledVector(ha,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),qn.subVectors(t,e),Rn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Rn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ls.subVectors(s,n),cs.subVectors(r,n),oa.subVectors(t,n);let l=ls.dot(oa),c=cs.dot(oa);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,s);let h=ls.dot(aa),u=cs.dot(aa);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ls,o);la.subVectors(t,r);let g=ls.dot(la),_=cs.dot(la);if(_>=0&&g<=_)return e.copy(r);let y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(cs,a);let m=h*_-g*u;if(m<=0&&u-h>=0&&g-_>=0)return nh.subVectors(r,s),a=(u-h)/(u-h+(g-_)),e.copy(s).addScaledVector(nh,a);let d=1/(m+y+f);return o=y*d,a=f*d,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Br={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=af(t,1),e=nn(e,0,1),n=nn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=da(o,r,t+1/3),this.g=da(o,r,t),this.b=da(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){let n=Jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return se.fromWorkingColorSpace(Ye.copy(this),t),Math.round(nn(Ye.r*255,0,255))*65536+Math.round(nn(Ye.g*255,0,255))*256+Math.round(nn(Ye.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=_n){se.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Br);let n=$o(ui.h,Br.h,e),s=$o(ui.s,Br.s,e),r=$o(ui.l,Br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new ce;ce.NAMES=Jh;var Mf=0,zi=class extends gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=lr(),this.name="",this.blending=gs,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=wa,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fo=class extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new k,zr=new he,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vc&&(t.usage=this.usage),t}};var Ts=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var po=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ne=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sf=0,gn=new ue,fa=new vn,hs=new k,ln=new Bi,er=new Bi,ze=new k,rn=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($h(t)?po:Ts)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,er.min),ln.expandByPoint(ze),ze.addVectors(ln.max,er.max),ln.expandByPoint(ze)):(ln.expandByPoint(er.min),ln.expandByPoint(er.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),ze.add(hs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new k,l[z]=new k;let c=new k,h=new k,u=new k,f=new he,g=new he,_=new he,y=new k,m=new k;function d(z,E,S){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,z),g.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),g.sub(f),_.sub(f);let D=1/(g.x*_.y-_.x*g.y);isFinite(D)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(D),m.copy(u).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(D),a[z].add(y),a[E].add(y),a[S].add(y),l[z].add(m),l[E].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let z=0,E=A.length;z<E;++z){let S=A[z],D=S.start,tt=S.count;for(let W=D,et=D+tt;W<et;W+=3)d(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let T=new k,b=new k,F=new k,C=new k;function I(z){F.fromBufferAttribute(s,z),C.copy(F);let E=a[z];T.copy(E),T.sub(F.multiplyScalar(F.dot(E))).normalize(),b.crossVectors(C,E);let D=b.dot(l[z])<0?-1:1;o.setXYZW(z,T.x,T.y,T.z,D)}for(let z=0,E=A.length;z<E;++z){let S=A[z],D=S.start,tt=S.count;for(let W=D,et=D+tt;W<et;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let f=0,g=t.count;f<g;f+=3){let _=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),g=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*h;for(let d=0;d<h;d++)f[_++]=c[g++]}return new Ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],g=t(f,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new ue,Ai=new ho,kr=new Es,sh=new k,Vr=new k,Hr=new k,Gr=new k,pa=new k,Wr=new k,rh=new k,Xr=new k,ke=class extends vn{constructor(t=new rn,e=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(pa.fromBufferAttribute(u,t),o?Wr.addScaledVector(pa,h):Wr.addScaledVector(pa.sub(e),h))}e.add(Wr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(kr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(kr,sh)===null||Ai.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let m=f[_],d=o[m.materialIndex],A=Math.max(m.start,g.start),T=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let b=A,F=T;b<F;b+=3){let C=a.getX(b),I=a.getX(b+1),z=a.getX(b+2);s=qr(this,d,t,n,c,h,u,C,I,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){let A=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);s=qr(this,o,t,n,c,h,u,A,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let m=f[_],d=o[m.materialIndex],A=Math.max(m.start,g.start),T=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let b=A,F=T;b<F;b+=3){let C=b,I=b+1,z=b+2;s=qr(this,d,t,n,c,h,u,C,I,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,d=y;m<d;m+=3){let A=m,T=m+1,b=m+2;s=qr(this,o,t,n,c,h,u,A,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function bf(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===On,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:i}}function qr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vr),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Gr);let h=bf(i,t,e,n,Vr,Hr,Gr,rh);if(h){let u=new k;Di.getBarycoord(rh,Vr,Hr,Gr,u),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};Di.getNormal(Vr,Hr,Gr,f.normal),h.face=f,h.barycoord=u}return h}var ki=class i extends rn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function _(y,m,d,A,T,b,F,C,I,z,E){let S=b/I,D=F/z,tt=b/2,W=F/2,et=C/2,Q=I+1,j=z+1,ht=0,Z=0,lt=new k;for(let vt=0;vt<j;vt++){let Pt=vt*D-W;for(let $=0;$<Q;$++){let At=$*S-tt;lt[y]=At*A,lt[m]=Pt*T,lt[d]=et,c.push(lt.x,lt.y,lt.z),lt[y]=0,lt[m]=0,lt[d]=C>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push($/I),u.push(1-vt/z),ht+=1}}for(let vt=0;vt<z;vt++)for(let Pt=0;Pt<I;Pt++){let $=f+Pt+Q*vt,At=f+Pt+Q*(vt+1),q=f+(Pt+1)+Q*(vt+1),ot=f+(Pt+1)+Q*vt;l.push($,At,ot),l.push(At,q,ot),Z+=6}a.addGroup(g,Z,E),g+=Z,f+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function wf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Ef={clone:As,merge:Ke},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Vi=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new k,oh=new he,ah=new he,Ze=class extends Vi{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,oh,ah),e.subVectors(ah,oh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,fl=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new Ze(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new Ze(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new Ze(us,ds,t,e);a.layers=this.layers,this.add(a);let l=new Ze(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new Ze(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},mo=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ms,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pl=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:pi});r.uniforms.tEquirect.value=e;let o=new ke(s,r),a=e.minFilter;return e.minFilter===Fi&&(e.minFilter=Fn),new fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ma=new k,Rf=new k,Cf=new Yt,$n=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ma.subVectors(n,e).cross(Rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cf.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Es,Yr=new k,go=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],g=s[8],_=s[9],y=s[10],m=s[11],d=s[12],A=s[13],T=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,m-g,b-d).normalize(),n[1].setComponents(l+r,f+c,m+g,b+d).normalize(),n[2].setComponents(l+o,f+h,m+_,b+A).normalize(),n[3].setComponents(l-o,f-h,m-_,b-A).normalize(),n[4].setComponents(l-a,f-u,m-y,b-T).normalize(),e===Jn)n[5].setComponents(l+a,f+u,m+y,b+T).normalize();else if(e===oo)n[5].setComponents(a,u,y,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Yr.x=s.normal.x>0?t.max.x:t.min.x,Yr.y=s.normal.y>0?t.max.y:t.min.y,Yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function If(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<u.length;g++){let _=u[f],y=u[g];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,u[f]=y)}u.length=f+1;for(let g=0,_=u.length;g<_;g++){let y=u[g];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hi=class i extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,g=[],_=[],y=[],m=[];for(let d=0;d<h;d++){let A=d*f-o;for(let T=0;T<c;T++){let b=T*u-r;_.push(b,-A,0),y.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let T=A+c*d,b=A+c*(d+1),F=A+1+c*(d+1),C=A+1+c*d;g.push(T,b,C),g.push(b,F,C)}this.setIndex(g),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(y,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
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
#endif`,Bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tp=`#define PI 3.141592653589793
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
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Cp=`struct PhysicalMaterial {
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
}`,Ip=`
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
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
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,$m=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,Qm=`#define PHONG
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
}`,jm=`#define PHONG
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
}`,tg=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,sg=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#include <common>
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
}`,ag=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:Df,alphamap_pars_fragment:Uf,alphatest_fragment:Nf,alphatest_pars_fragment:Ff,aomap_fragment:Of,aomap_pars_fragment:Bf,batching_pars_vertex:zf,batching_vertex:kf,begin_vertex:Vf,beginnormal_vertex:Hf,bsdfs:Gf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:$f,color_fragment:Jf,color_pars_fragment:Kf,color_pars_vertex:Qf,color_vertex:jf,common:tp,cube_uv_reflection_fragment:ep,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:op,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:bp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:xp,lightmap_pars_fragment:vp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Mp,lights_pars_begin:Sp,lights_toon_fragment:wp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Ip,lights_fragment_maps:Pp,lights_fragment_end:Lp,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:Bp,map_particle_fragment:zp,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Hp,morphinstance_vertex:Gp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:qp,morphtarget_vertex:Yp,normal_fragment_begin:Zp,normal_fragment_maps:$p,normal_pars_fragment:Jp,normal_pars_vertex:Kp,normal_vertex:Qp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:_m,skinning_vertex:xm,skinnormal_vertex:vm,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:wm,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Rm,worldpos_vertex:Cm,background_vert:Im,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Dm,cube_vert:Um,cube_frag:Nm,depth_vert:Fm,depth_frag:Om,distanceRGBA_vert:Bm,distanceRGBA_frag:zm,equirect_vert:km,equirect_frag:Vm,linedashed_vert:Hm,linedashed_frag:Gm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:qm,meshlambert_frag:Ym,meshmatcap_vert:Zm,meshmatcap_frag:$m,meshnormal_vert:Jm,meshnormal_frag:Km,meshphong_vert:Qm,meshphong_frag:jm,meshphysical_vert:tg,meshphysical_frag:eg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:rg,shadow_vert:og,shadow_frag:ag,sprite_vert:lg,sprite_frag:cg},gt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ce(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ke([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ke([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new ce(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ke([gt.points,gt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ke([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ke([gt.common,gt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ke([gt.sprite,gt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ke([gt.common,gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ke([gt.lights,gt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Nn.physical={uniforms:Ke([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Zr={r:0,b:0,g:0},Ci=new Ln,hg=new ue;function ug(i,t,e,n,s,r,o){let a=new ce(0),l=r===!0?0:1,c,h,u=null,f=0,g=null;function _(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function y(A){let T=!1,b=_(A);b===null?d(a,l):b&&b.isColor&&(d(b,1),T=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,T){let b=_(T);b&&(b.isCubeTexture||b.mapping===Eo)?(h===void 0&&(h=new ke(new ki(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:As(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(T.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(Ci)),h.material.toneMapped=se.getTransfer(b.colorSpace)!==me,(u!==b||f!==b.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,g=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ke(new Hi(2,2),new Ve({name:"BackgroundMaterial",uniforms:As(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=se.getTransfer(b.colorSpace)!==me,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,g=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,T){A.getRGB(Zr,Kh(i)),n.buffers.color.setClear(Zr.r,Zr.g,Zr.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(A,T=1){a.set(A),l=T,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:y,addToRenderList:m}}function dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,D,tt,W,et){let Q=!1,j=u(W,tt,D);r!==j&&(r=j,c(r.object)),Q=g(S,W,tt,et),Q&&_(S,W,tt,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,b(S,D,tt,W),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,D,tt){let W=tt.wireframe===!0,et=n[S.id];et===void 0&&(et={},n[S.id]=et);let Q=et[D.id];Q===void 0&&(Q={},et[D.id]=Q);let j=Q[W];return j===void 0&&(j=f(l()),Q[W]=j),j}function f(S){let D=[],tt=[],W=[];for(let et=0;et<e;et++)D[et]=0,tt[et]=0,W[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:tt,attributeDivisors:W,object:S,attributes:{},index:null}}function g(S,D,tt,W){let et=r.attributes,Q=D.attributes,j=0,ht=tt.getAttributes();for(let Z in ht)if(ht[Z].location>=0){let vt=et[Z],Pt=Q[Z];if(Pt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(Pt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(Pt=S.instanceColor)),vt===void 0||vt.attribute!==Pt||Pt&&vt.data!==Pt.data)return!0;j++}return r.attributesNum!==j||r.index!==W}function _(S,D,tt,W){let et={},Q=D.attributes,j=0,ht=tt.getAttributes();for(let Z in ht)if(ht[Z].location>=0){let vt=Q[Z];vt===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor));let Pt={};Pt.attribute=vt,vt&&vt.data&&(Pt.data=vt.data),et[Z]=Pt,j++}r.attributes=et,r.attributesNum=j,r.index=W}function y(){let S=r.newAttributes;for(let D=0,tt=S.length;D<tt;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){let tt=r.newAttributes,W=r.enabledAttributes,et=r.attributeDivisors;tt[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),et[S]!==D&&(i.vertexAttribDivisor(S,D),et[S]=D)}function A(){let S=r.newAttributes,D=r.enabledAttributes;for(let tt=0,W=D.length;tt<W;tt++)D[tt]!==S[tt]&&(i.disableVertexAttribArray(tt),D[tt]=0)}function T(S,D,tt,W,et,Q,j){j===!0?i.vertexAttribIPointer(S,D,tt,et,Q):i.vertexAttribPointer(S,D,tt,W,et,Q)}function b(S,D,tt,W){y();let et=W.attributes,Q=tt.getAttributes(),j=D.defaultAttributeValues;for(let ht in Q){let Z=Q[ht];if(Z.location>=0){let lt=et[ht];if(lt===void 0&&(ht==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),ht==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),lt!==void 0){let vt=lt.normalized,Pt=lt.itemSize,$=t.get(lt);if($===void 0)continue;let At=$.buffer,q=$.type,ot=$.bytesPerElement,ft=q===i.INT||q===i.UNSIGNED_INT||lt.gpuType===Bl;if(lt.isInterleavedBufferAttribute){let at=lt.data,Ct=at.stride,Lt=lt.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<Z.locationSize;zt++)d(Z.location+zt,at.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<Z.locationSize;zt++)m(Z.location+zt);i.bindBuffer(i.ARRAY_BUFFER,At);for(let zt=0;zt<Z.locationSize;zt++)T(Z.location+zt,Pt/Z.locationSize,q,vt,Ct*ot,(Lt+Pt/Z.locationSize*zt)*ot,ft)}else{if(lt.isInstancedBufferAttribute){for(let at=0;at<Z.locationSize;at++)d(Z.location+at,lt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let at=0;at<Z.locationSize;at++)m(Z.location+at);i.bindBuffer(i.ARRAY_BUFFER,At);for(let at=0;at<Z.locationSize;at++)T(Z.location+at,Pt/Z.locationSize,q,vt,Pt*ot,Pt/Z.locationSize*at*ot,ft)}}else if(j!==void 0){let vt=j[ht];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(Z.location,vt);break;case 3:i.vertexAttrib3fv(Z.location,vt);break;case 4:i.vertexAttrib4fv(Z.location,vt);break;default:i.vertexAttrib1fv(Z.location,vt)}}}}A()}function F(){z();for(let S in n){let D=n[S];for(let tt in D){let W=D[tt];for(let et in W)h(W[et].object),delete W[et];delete D[tt]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let tt in D){let W=D[tt];for(let et in W)h(W[et].object),delete W[et];delete D[tt]}delete n[S.id]}function I(S){for(let D in n){let tt=n[D];if(tt[S.id]===void 0)continue;let W=tt[S.id];for(let et in W)h(W[et].object),delete W[et];delete tt[S.id]}}function z(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function fg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];e.update(g,n,1)}function l(c,h,u,f){if(u===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y]*f[y];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==cn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let z=I===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!z)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:F,maxSamples:C}}function mg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $n,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let g=u.length!==0||f||n!==0||s;return s=f,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,g){let _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let A=r?0:n,T=A*4,b=d.clippingState||null;l.value=b,b=h(_,f,T,g);for(let F=0;F!==T;++F)b[F]=e[F];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,g,_){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let d=g+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,b=g;T!==y;++T,b+=4)o.copy(u[T]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function gg(i){let t=new WeakMap;function e(o,a){return a===La?o.mapping=Ms:a===Da&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===La||a===Da)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rs=class extends Vi{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ps=4,lh=[.125,.215,.35,.446,.526,.582],Ui=20,ga=new Rs,ch=new ce,_a=null,xa=0,va=0,ya=!1,Pi=(1+Math.sqrt(5))/2,fs=1/Pi,hh=[new k(-Pi,fs,0),new k(Pi,fs,0),new k(-fs,0,Pi),new k(fs,0,Pi),new k(0,Pi,-fs),new k(0,Pi,fs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,xa,va),this._renderer.xr.enabled=ya,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ar,format:cn,colorSpace:xi,depthBuffer:!1},s=uh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=xg(r,t,e)}return s}_compileMaterial(t){let e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,s){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ch),h.toneMapping=mi,h.autoClear=!1;let g=new fo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new ke(new ki,g),y=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,y=!0):(g.color.copy(ch),y=!0);for(let d=0;d<6;d++){let A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let T=this._cubeSize;$r(s,A*T,d>2?T:0,T,T),h.setRenderTarget(s),y&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ms||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;$r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ga)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hh[(s-r-1)%hh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ui-1),y=r/_,m=isFinite(r)?1+Math.floor(h*y):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);let d=[],A=0;for(let I=0;I<Ui;++I){let z=I/y,E=Math.exp(-z*z/2);d.push(E),I===0?A+=E:I<m&&(A+=2*E)}for(let I=0;I<d.length;I++)d[I]=d[I]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;let b=this._sizeLods[s],F=3*b*(s>T-ps?s-T+ps:0),C=4*(this._cubeSize-b);$r(e,F,C,3*b,2*b),l.setRenderTarget(e),l.render(u,ga)}};function _g(i){let t=[],e=[],n=[],s=i,r=i-ps+1+lh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ps?l=lh[o-i+ps-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,_=6,y=3,m=2,d=1,A=new Float32Array(y*_*g),T=new Float32Array(m*_*g),b=new Float32Array(d*_*g);for(let C=0;C<g;C++){let I=C%3*2/3-1,z=C>2?0:-1,E=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];A.set(E,y*_*C),T.set(f,m*_*C);let S=[C,C,C,C,C,C];b.set(S,d*_*C)}let F=new rn;F.setAttribute("position",new Ge(A,y)),F.setAttribute("uv",new Ge(T,m)),F.setAttribute("faceIndex",new Ge(b,d)),t.push(F),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uh(i,t,e){let n=new xn(i,t,e);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xg(i,t,e){let n=new Float32Array(Ui),s=new k(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function dh(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function fh(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}function vg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===La||l===Da,h=l===Ms||l===Ss;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new _o(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let g=a.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new _o(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let y=f.morphAttributes[_];for(let m=0,d=y.length;m<d;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let g=u.morphAttributes;for(let _ in g){let y=g[_];for(let m=0,d=y.length;m<d;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let f=[],g=u.index,_=u.attributes.position,y=0;if(g!==null){let A=g.array;y=g.version;for(let T=0,b=A.length;T<b;T+=3){let F=A[T+0],C=A[T+1],I=A[T+2];f.push(F,C,C,I,I,F)}}else if(_!==void 0){let A=_.array;y=_.version;for(let T=0,b=A.length/3-1;T<b;T+=3){let F=T+0,C=T+1,I=T+2;f.push(F,C,C,I,I,F)}}else return;let m=new($h(f)?po:Ts)(f,1);m.version=y;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Sg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*o),e.update(g,n,1)}function c(f,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,f*o,_),e.update(g,n,_))}function h(f,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=g[d];e.update(m,n,1)}function u(f,g,_,y){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,g[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,y,0,_);let d=0;for(let A=0;A<_;A++)d+=g[A]*y[A];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wg(i,t,e){let n=new WeakMap,s=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],T=0;g===!0&&(T=1),_===!0&&(T=2),y===!0&&(T=3);let b=a.attributes.position.count*T,F=1;b>t.maxTextureSize&&(F=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*F*4*u),I=new co(C,b,F,u);I.type=In,I.needsUpdate=!0;let z=T*4;for(let S=0;S<u;S++){let D=m[S],tt=d[S],W=A[S],et=b*F*4*S;for(let Q=0;Q<D.count;Q++){let j=Q*z;g===!0&&(s.fromBufferAttribute(D,Q),C[et+j+0]=s.x,C[et+j+1]=s.y,C[et+j+2]=s.z,C[et+j+3]=0),_===!0&&(s.fromBufferAttribute(tt,Q),C[et+j+4]=s.x,C[et+j+5]=s.y,C[et+j+6]=s.z,C[et+j+7]=0),y===!0&&(s.fromBufferAttribute(W,Q),C[et+j+8]=s.x,C[et+j+9]=s.y,C[et+j+10]=s.z,C[et+j+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new he(b,F)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Eg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Cs=class extends hn{constructor(t,e,n,s,r,o,a,l,c,h=_s){if(h!==_s&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Oi),n===void 0&&h===ws&&(n=bs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jh=new hn,ph=new Cs(1,1),tu=new co,eu=new dl,nu=new mo,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),vh=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ro(i,t){let e=gh[t];e===void 0&&(e=new Int32Array(t),gh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;vh.set(n),i.uniformMatrix2fv(this.addr,!1,vh),Oe(e,n)}}function Pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;xh.set(n),i.uniformMatrix3fv(this.addr,!1,xh),Oe(e,n)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),Oe(e,n)}}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=Zh,r=ph):r=jh,e.setTexture2D(t||r,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eu,s)}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nu,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tu,s)}function Xg(i){switch(i){case 5126:return Tg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Ig;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Bg;case 36295:return zg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}function qg(i,t){i.uniform1fv(this.addr,t)}function Yg(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function Zg(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function $g(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function Jg(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kg(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qg(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jg(i,t){i.uniform1iv(this.addr,t)}function t0(i,t){i.uniform2iv(this.addr,t)}function e0(i,t){i.uniform3iv(this.addr,t)}function n0(i,t){i.uniform4iv(this.addr,t)}function i0(i,t){i.uniform1uiv(this.addr,t)}function s0(i,t){i.uniform2uiv(this.addr,t)}function r0(i,t){i.uniform3uiv(this.addr,t)}function o0(i,t){i.uniform4uiv(this.addr,t)}function a0(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||jh,r[o])}function l0(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||eu,r[o])}function c0(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||nu,r[o])}function h0(i,t,e){let n=this.cache,s=t.length,r=Ro(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tu,r[o])}function u0(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return $g;case 35674:return Jg;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return t0;case 35668:case 35672:return e0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}var ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xg(e.type)}},gl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=u0(e.type)}},_l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ma=/(\w+)(\])?(\[|\.)?/g;function yh(i,t){i.seq.push(t),i.map[t.id]=t}function d0(i,t,e){let n=i.name,s=n.length;for(Ma.lastIndex=0;;){let r=Ma.exec(n),o=Ma.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yh(e,c===void 0?new ml(a,i,t):new gl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new _l(a),yh(e,u)),e=u}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);d0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Mh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var f0=37297,p0=0;function m0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Sh=new Yt;function g0(i){se._getMatrix(Sh,se.workingColorSpace,i);let t=`mat3( ${Sh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+m0(i.getShaderSource(t),o)}else return s}function _0(i,t){let e=g0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function x0(i,t){let e;switch(t){case Vd:e="Linear";break;case Hd:e="Reinhard";break;case Gd:e="Cineon";break;case Wd:e="ACESFilmic";break;case qd:e="AgX";break;case Yd:e="Neutral";break;case Xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jr=new k;function v0(){se.getLuminanceCoefficients(Jr);let i=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function M0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function sr(i){return i!==""}function wh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(i){return i.replace(b0,E0)}var w0=new Map;function E0(i,t){let e=Qt[t];if(e===void 0){let n=w0.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xl(e)}var T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(i){return i.replace(T0,A0)}function A0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function R0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function C0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case Ss:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function P0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oh:t="ENVMAP_BLENDING_MULTIPLY";break;case zd:t="ENVMAP_BLENDING_MIX";break;case kd:t="ENVMAP_BLENDING_ADD";break}return t}function L0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function D0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=R0(e),c=C0(e),h=I0(e),u=P0(e),f=L0(e),g=y0(e),_=M0(r),y=s.createProgram(),m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sr).join(`
`),d.length>0&&(d+=`
`)):(m=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),d=[Ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==mi?x0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,_0("linearToOutputTexel",e.outputColorSpace),v0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=xl(o),o=wh(o,e),o=Eh(o,e),a=xl(a),a=wh(a,e),a=Eh(a,e),o=Th(o),a=Th(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Bn?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=A+m+o,b=A+d+a,F=Mh(s,s.VERTEX_SHADER,T),C=Mh(s,s.FRAGMENT_SHADER,b);s.attachShader(y,F),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(D){if(i.debug.checkShaderErrors){let tt=s.getProgramInfoLog(y).trim(),W=s.getShaderInfoLog(F).trim(),et=s.getShaderInfoLog(C).trim(),Q=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,F,C);else{let ht=bh(s,F,"vertex"),Z=bh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+tt+`
`+ht+`
`+Z)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(W===""||et==="")&&(j=!1);j&&(D.diagnostics={runnable:Q,programLog:tt,vertexShader:{log:W,prefix:m},fragmentShader:{log:et,prefix:d}})}s.deleteShader(F),s.deleteShader(C),z=new vs(s,y),E=S0(s,y)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,f0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=p0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=F,this.fragmentShader=C,this}var U0=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yl(t),e.set(t,n)),n}},yl=class{constructor(t){this.id=U0++,this.code=t,this.usedTimes=0}};function N0(i,t,e,n,s,r,o){let a=new uo,l=new vl,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,tt,W){let et=tt.fog,Q=W.geometry,j=E.isMeshStandardMaterial?tt.environment:null,ht=(E.isMeshStandardMaterial?e:t).get(E.envMap||j),Z=ht&&ht.mapping===Eo?ht.image.height:null,lt=_[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));let vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pt=vt!==void 0?vt.length:0,$=0;Q.morphAttributes.position!==void 0&&($=1),Q.morphAttributes.normal!==void 0&&($=2),Q.morphAttributes.color!==void 0&&($=3);let At,q,ot,ft;if(lt){let ee=Nn[lt];At=ee.vertexShader,q=ee.fragmentShader}else At=E.vertexShader,q=E.fragmentShader,l.update(E),ot=l.getVertexShaderID(E),ft=l.getFragmentShaderID(E);let at=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Lt=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,te=!!E.map,jt=!!E.matcap,Se=!!ht,B=!!E.aoMap,_e=!!E.lightMap,Zt=!!E.bumpMap,$t=!!E.normalMap,Nt=!!E.displacementMap,fe=!!E.emissiveMap,Dt=!!E.metalnessMap,R=!!E.roughnessMap,v=E.anisotropy>0,V=E.clearcoat>0,it=E.dispersion>0,rt=E.iridescence>0,K=E.sheen>0,Rt=E.transmission>0,pt=v&&!!E.anisotropyMap,St=V&&!!E.clearcoatMap,ie=V&&!!E.clearcoatNormalMap,ut=V&&!!E.clearcoatRoughnessMap,yt=rt&&!!E.iridescenceMap,Ut=rt&&!!E.iridescenceThicknessMap,Bt=K&&!!E.sheenColorMap,bt=K&&!!E.sheenRoughnessMap,Jt=!!E.specularMap,Wt=!!E.specularColorMap,ae=!!E.specularIntensityMap,U=Rt&&!!E.transmissionMap,dt=Rt&&!!E.thicknessMap,J=!!E.gradientMap,nt=!!E.alphaMap,_t=E.alphaTest>0,Mt=!!E.alphaHash,kt=!!E.extensions,xe=mi;E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(xe=i.toneMapping);let Ee={shaderID:lt,shaderType:E.type,shaderName:E.name,vertexShader:At,fragmentShader:q,defines:E.defines,customVertexShaderID:ot,customFragmentShaderID:ft,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:zt,batchingColor:zt&&W._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&W.instanceColor!==null,instancingMorph:Lt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:xi,alphaToCoverage:!!E.alphaToCoverage,map:te,matcap:jt,envMap:Se,envMapMode:Se&&ht.mapping,envMapCubeUVHeight:Z,aoMap:B,lightMap:_e,bumpMap:Zt,normalMap:$t,displacementMap:f&&Nt,emissiveMap:fe,normalMapObjectSpace:$t&&E.normalMapType===Qd,normalMapTangentSpace:$t&&E.normalMapType===Kd,metalnessMap:Dt,roughnessMap:R,anisotropy:v,anisotropyMap:pt,clearcoat:V,clearcoatMap:St,clearcoatNormalMap:ie,clearcoatRoughnessMap:ut,dispersion:it,iridescence:rt,iridescenceMap:yt,iridescenceThicknessMap:Ut,sheen:K,sheenColorMap:Bt,sheenRoughnessMap:bt,specularMap:Jt,specularColorMap:Wt,specularIntensityMap:ae,transmission:Rt,transmissionMap:U,thicknessMap:dt,gradientMap:J,opaque:E.transparent===!1&&E.blending===gs&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:Mt,combine:E.combine,mapUv:te&&y(E.map.channel),aoMapUv:B&&y(E.aoMap.channel),lightMapUv:_e&&y(E.lightMap.channel),bumpMapUv:Zt&&y(E.bumpMap.channel),normalMapUv:$t&&y(E.normalMap.channel),displacementMapUv:Nt&&y(E.displacementMap.channel),emissiveMapUv:fe&&y(E.emissiveMap.channel),metalnessMapUv:Dt&&y(E.metalnessMap.channel),roughnessMapUv:R&&y(E.roughnessMap.channel),anisotropyMapUv:pt&&y(E.anisotropyMap.channel),clearcoatMapUv:St&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:bt&&y(E.sheenRoughnessMap.channel),specularMapUv:Jt&&y(E.specularMap.channel),specularColorMapUv:Wt&&y(E.specularColorMap.channel),specularIntensityMapUv:ae&&y(E.specularIntensityMap.channel),transmissionMapUv:U&&y(E.transmissionMap.channel),thicknessMapUv:dt&&y(E.thicknessMap.channel),alphaMapUv:nt&&y(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($t||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Q.attributes.uv&&(te||nt),fog:!!et,useFog:E.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:W.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:$,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:te&&E.map.isVideoTexture===!0&&se.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:fe&&E.emissiveMap.isVideoTexture===!0&&se.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Cn,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function d(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(A(S,E),T(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function b(E){let S=_[E.type],D;if(S){let tt=Nn[S];D=Ef.clone(tt.uniforms)}else D=E.uniforms;return D}function F(E,S){let D;for(let tt=0,W=h.length;tt<W;tt++){let et=h[tt];if(et.cacheKey===S){D=et,++D.usedTimes;break}}return D===void 0&&(D=new D0(i,S,E,r),h.push(D)),D}function C(E){if(--E.usedTimes===0){let S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:F,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:z}}function F0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ch(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,g,_,y,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:_,renderOrder:u.renderOrder,z:y,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=y,d.group=m),t++,d}function a(u,f,g,_,y,m){let d=o(u,f,g,_,y,m);g.transmission>0?n.push(d):g.transparent===!0?s.push(d):e.push(d)}function l(u,f,g,_,y,m){let d=o(u,f,g,_,y,m);g.transmission>0?n.unshift(d):g.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||O0),n.length>1&&n.sort(f||Rh),s.length>1&&s.sort(f||Rh)}function h(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function B0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ch,i.set(n,[o])):s>=r.length?(o=new Ch,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new ce};break;case"SpotLight":e={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function k0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var V0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G0(i){let t=new z0,e=k0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new ue,o=new ue;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let g=0,_=0,y=0,m=0,d=0,A=0,T=0,b=0,F=0,C=0,I=0;c.sort(H0);for(let E=0,S=c.length;E<S;E++){let D=c[E],tt=D.color,W=D.intensity,et=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=tt.r*W,u+=tt.g*W,f+=tt.b*W;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],W);I++}else if(D.isDirectionalLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ht=D.shadow,Z=e.get(D);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.directionalShadow[g]=Z,n.directionalShadowMap[g]=Q,n.directionalShadowMatrix[g]=D.shadow.matrix,A++}n.directional[g]=j,g++}else if(D.isSpotLight){let j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(tt).multiplyScalar(W),j.distance=et,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[y]=j;let ht=D.shadow;if(D.map&&(n.spotLightMap[F]=D.map,F++,ht.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[y]=ht.matrix,D.castShadow){let Z=e.get(D);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=Q,b++}y++}else if(D.isRectAreaLight){let j=t.get(D);j.color.copy(tt).multiplyScalar(W),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=j,m++}else if(D.isPointLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let ht=D.shadow,Z=e.get(D);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,Z.shadowCameraNear=ht.camera.near,Z.shadowCameraFar=ht.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=D.shadow.matrix,T++}n.point[_]=j,_++}else if(D.isHemisphereLight){let j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(W),j.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[d]=j,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==g||z.pointLength!==_||z.spotLength!==y||z.rectAreaLength!==m||z.hemiLength!==d||z.numDirectionalShadows!==A||z.numPointShadows!==T||z.numSpotShadows!==b||z.numSpotMaps!==F||z.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,z.directionalLength=g,z.pointLength=_,z.spotLength=y,z.rectAreaLength=m,z.hemiLength=d,z.numDirectionalShadows=A,z.numPointShadows=T,z.numSpotShadows=b,z.numSpotMaps=F,z.numLightProbes=I,n.version=V0++)}function l(c,h){let u=0,f=0,g=0,_=0,y=0,m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let T=c[d];if(T.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(T.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(T.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Ih(i){let t=new G0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function W0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ih(i),t.set(s,[a])):r>=o.length?(a=new Ih(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ml=class extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sl=class extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`;function Y0(i,t,e){let n=new go,s=new he,r=new he,o=new ge,a=new Ml({depthPacking:Jd}),l=new Sl,c={},h=e.maxTextureSize,u={[On]:sn,[sn]:On,[Cn]:Cn},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let _=new rn;_.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let d=this.type;this.render=function(C,I,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),tt=i.state;tt.setBlending(pi),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let W=d!==Zn&&this.type===Zn,et=d===Zn&&this.type!==Zn;for(let Q=0,j=C.length;Q<j;Q++){let ht=C[Q],Z=ht.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let lt=Z.getFrameExtents();if(s.multiply(lt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,Z.mapSize.y=r.y)),Z.map===null||W===!0||et===!0){let Pt=this.type!==Zn?{minFilter:Le,magFilter:Le}:{};Z.map!==null&&Z.map.dispose(),Z.map=new xn(s.x,s.y,Pt),Z.map.texture.name=ht.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let vt=Z.getViewportCount();for(let Pt=0;Pt<vt;Pt++){let $=Z.getViewport(Pt);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),tt.viewport(o),Z.updateMatrices(ht,Pt),n=Z.getFrustum(),b(I,z,Z.camera,ht,this.type)}Z.isPointLightShadow!==!0&&this.type===Zn&&A(Z,z),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,D)};function A(C,I){let z=t.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,z,f,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,z,g,y,null)}function T(C,I,z,E){let S=null,D=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=z.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let tt=S.uuid,W=I.uuid,et=c[tt];et===void 0&&(et={},c[tt]=et);let Q=et[W];Q===void 0&&(Q=S.clone(),et[W]=Q,I.addEventListener("dispose",F)),S=Q}if(S.visible=I.visible,S.wireframe=I.wireframe,E===Zn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:u[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let tt=i.properties.get(S);tt.light=z}return S}function b(C,I,z,E,S){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let W=t.update(C),et=C.material;if(Array.isArray(et)){let Q=W.groups;for(let j=0,ht=Q.length;j<ht;j++){let Z=Q[j],lt=et[Z.materialIndex];if(lt&&lt.visible){let vt=T(C,lt,E,S);C.onBeforeShadow(i,C,I,z,W,vt,Z),i.renderBufferDirect(z,null,W,vt,C,Z),C.onAfterShadow(i,C,I,z,W,vt,Z)}}}else if(et.visible){let Q=T(C,et,E,S);C.onBeforeShadow(i,C,I,z,W,Q,null),i.renderBufferDirect(z,null,W,Q,C,null),C.onAfterShadow(i,C,I,z,W,Q,null)}}let tt=C.children;for(let W=0,et=tt.length;W<et;W++)b(tt[W],I,z,E,S)}function F(C){C.target.removeEventListener("dispose",F);for(let z in c){let E=c[z],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var Z0={[Ea]:Ta,[Aa]:Ia,[Ra]:Pa,[ys]:Ca,[Ta]:Ea,[Ia]:Aa,[Pa]:Ra,[Ca]:ys};function $0(i,t){function e(){let U=!1,dt=new ge,J=null,nt=new ge(0,0,0,0);return{setMask:function(_t){J!==_t&&!U&&(i.colorMask(_t,_t,_t,_t),J=_t)},setLocked:function(_t){U=_t},setClear:function(_t,Mt,kt,xe,Ee){Ee===!0&&(_t*=xe,Mt*=xe,kt*=xe),dt.set(_t,Mt,kt,xe),nt.equals(dt)===!1&&(i.clearColor(_t,Mt,kt,xe),nt.copy(dt))},reset:function(){U=!1,J=null,nt.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,J=null,nt=null,_t=null;return{setReversed:function(Mt){if(dt!==Mt){let kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let xe=_t;_t=null,this.setClear(xe)}dt=Mt},getReversed:function(){return dt},setTest:function(Mt){Mt?at(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(Mt){J!==Mt&&!U&&(i.depthMask(Mt),J=Mt)},setFunc:function(Mt){if(dt&&(Mt=Z0[Mt]),nt!==Mt){switch(Mt){case Ea:i.depthFunc(i.NEVER);break;case Ta:i.depthFunc(i.ALWAYS);break;case Aa:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){_t!==Mt&&(dt&&(Mt=1-Mt),i.clearDepth(Mt),_t=Mt)},reset:function(){U=!1,J=null,nt=null,_t=null,dt=!1}}}function s(){let U=!1,dt=null,J=null,nt=null,_t=null,Mt=null,kt=null,xe=null,Ee=null;return{setTest:function(ee){U||(ee?at(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ee){dt!==ee&&!U&&(i.stencilMask(ee),dt=ee)},setFunc:function(ee,Re,$e){(J!==ee||nt!==Re||_t!==$e)&&(i.stencilFunc(ee,Re,$e),J=ee,nt=Re,_t=$e)},setOp:function(ee,Re,$e){(Mt!==ee||kt!==Re||xe!==$e)&&(i.stencilOp(ee,Re,$e),Mt=ee,kt=Re,xe=$e)},setLocked:function(ee){U=ee},setClear:function(ee){Ee!==ee&&(i.clearStencil(ee),Ee=ee)},reset:function(){U=!1,dt=null,J=null,nt=null,_t=null,Mt=null,kt=null,xe=null,Ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,g=[],_=null,y=!1,m=null,d=null,A=null,T=null,b=null,F=null,C=null,I=new ce(0,0,0),z=0,E=!1,S=null,D=null,tt=null,W=null,et=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ht=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=ht>=1):Z.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=ht>=2);let lt=null,vt={},Pt=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),At=new ge().fromArray(Pt),q=new ge().fromArray($);function ot(U,dt,J,nt){let _t=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(U,Mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<J;kt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(dt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return Mt}let ft={};ft[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ys),Zt(!1),$t(Dc),at(i.CULL_FACE),B(pi);function at(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ct(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Lt(U,dt){return u[U]!==dt?(i.bindFramebuffer(U,dt),u[U]=dt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function zt(U,dt){let J=g,nt=!1;if(U){J=f.get(dt),J===void 0&&(J=[],f.set(dt,J));let _t=U.textures;if(J.length!==_t.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,kt=_t.length;Mt<kt;Mt++)J[Mt]=i.COLOR_ATTACHMENT0+Mt;J.length=_t.length,nt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,nt=!0);nt&&i.drawBuffers(J)}function te(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let jt={[Li]:i.FUNC_ADD,[Sd]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};jt[wd]=i.MIN,jt[Ed]=i.MAX;let Se={[Td]:i.ZERO,[Ad]:i.ONE,[Rd]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Id]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Pd]:i.ONE_MINUS_DST_ALPHA,[Nd]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Od]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function B(U,dt,J,nt,_t,Mt,kt,xe,Ee,ee){if(U===pi){y===!0&&(Ct(i.BLEND),y=!1);return}if(y===!1&&(at(i.BLEND),y=!0),U!==Md){if(U!==m||ee!==E){if((d!==Li||b!==Li)&&(i.blendEquation(i.FUNC_ADD),d=Li,b=Li),ee)switch(U){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,T=null,F=null,C=null,I.set(0,0,0),z=0,m=U,E=ee}return}_t=_t||dt,Mt=Mt||J,kt=kt||nt,(dt!==d||_t!==b)&&(i.blendEquationSeparate(jt[dt],jt[_t]),d=dt,b=_t),(J!==A||nt!==T||Mt!==F||kt!==C)&&(i.blendFuncSeparate(Se[J],Se[nt],Se[Mt],Se[kt]),A=J,T=nt,F=Mt,C=kt),(xe.equals(I)===!1||Ee!==z)&&(i.blendColor(xe.r,xe.g,xe.b,Ee),I.copy(xe),z=Ee),m=U,E=!1}function _e(U,dt){U.side===Cn?Ct(i.CULL_FACE):at(i.CULL_FACE);let J=U.side===sn;dt&&(J=!J),Zt(J),U.blending===gs&&U.transparent===!1?B(pi):B(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let nt=U.stencilWrite;a.setTest(nt),nt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function $t(U){U!==xd?(at(i.CULL_FACE),U!==D&&(U===Dc?i.cullFace(i.BACK):U===vd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),D=U}function Nt(U){U!==tt&&(j&&i.lineWidth(U),tt=U)}function fe(U,dt,J){U?(at(i.POLYGON_OFFSET_FILL),(W!==dt||et!==J)&&(i.polygonOffset(dt,J),W=dt,et=J)):Ct(i.POLYGON_OFFSET_FILL)}function Dt(U){U?at(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+Q-1),lt!==U&&(i.activeTexture(U),lt=U)}function v(U,dt,J){J===void 0&&(lt===null?J=i.TEXTURE0+Q-1:J=lt);let nt=vt[J];nt===void 0&&(nt={type:void 0,texture:void 0},vt[J]=nt),(nt.type!==U||nt.texture!==dt)&&(lt!==J&&(i.activeTexture(J),lt=J),i.bindTexture(U,dt||ft[U]),nt.type=U,nt.texture=dt)}function V(){let U=vt[lt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(U){At.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),At.copy(U))}function bt(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Jt(U,dt){let J=c.get(dt);J===void 0&&(J=new WeakMap,c.set(dt,J));let nt=J.get(U);nt===void 0&&(nt=i.getUniformBlockIndex(dt,U.name),J.set(U,nt))}function Wt(U,dt){let nt=c.get(dt).get(U);l.get(dt)!==nt&&(i.uniformBlockBinding(dt,nt,U.__bindingPointIndex),l.set(dt,nt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,vt={},u={},f=new WeakMap,g=[],_=null,y=!1,m=null,d=null,A=null,T=null,b=null,F=null,C=null,I=new ce(0,0,0),z=0,E=!1,S=null,D=null,tt=null,W=null,et=null,At.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ct,bindFramebuffer:Lt,drawBuffers:zt,useProgram:te,setBlending:B,setMaterial:_e,setFlipSided:Zt,setCullFace:$t,setLineWidth:Nt,setPolygonOffset:fe,setScissorTest:Dt,activeTexture:R,bindTexture:v,unbindTexture:V,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:yt,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:ie,texStorage3D:ut,texSubImage2D:K,texSubImage3D:Rt,compressedTexSubImage2D:pt,compressedTexSubImage3D:St,scissor:Bt,viewport:bt,reset:ae}}function Ph(i,t,e,n){let s=J0(n);switch(e){case Hh:return i*t;case Wh:return i*t;case Xh:return i*t*2;case To:return i*t/s.components*s.byteLength;case Vl:return i*t/s.components*s.byteLength;case qh:return i*t*2/s.components*s.byteLength;case Hl:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Gl:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case za:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Ba:return Math.max(i,8)*Math.max(t,8)/2;case ka:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yh:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ol:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J0(i){switch(i){case Pn:case zh:return{byteLength:1,components:1};case or:case kh:case ar:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case Oi:case Bl:case In:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function K0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):ao("canvas")}function y(R,v,V){let it=1,rt=Dt(R);if((rt.width>V||rt.height>V)&&(it=V/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let K=Math.floor(it*rt.width),Rt=Math.floor(it*rt.height);u===void 0&&(u=_(K,Rt));let pt=v?_(K,Rt):u;return pt.width=K,pt.height=Rt,pt.getContext("2d").drawImage(R,0,0,K,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+K+"x"+Rt+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,v,V,it,rt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=v;if(v===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),v===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),v===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),v===i.RGBA){let Rt=rt?Ao:se.getTransfer(it);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Rt===me?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(R,v){let V;return R?v===null||v===Oi||v===bs?V=i.DEPTH24_STENCIL8:v===In?V=i.DEPTH32F_STENCIL8:v===or&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Oi||v===bs?V=i.DEPTH_COMPONENT24:v===In?V=i.DEPTH_COMPONENT32F:v===or&&(V=i.DEPTH_COMPONENT16),V}function F(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Le&&R.minFilter!==Fn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){let v=R.target;v.removeEventListener("dispose",C),z(v),v.isVideoTexture&&h.delete(v)}function I(R){let v=R.target;v.removeEventListener("dispose",I),S(v)}function z(R){let v=n.get(R);if(v.__webglInit===void 0)return;let V=R.source,it=f.get(V);if(it){let rt=it[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&E(R),Object.keys(it).length===0&&f.delete(V)}n.remove(R)}function E(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let V=R.source,it=f.get(V);delete it[v.__cacheKey],o.memory.textures--}function S(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let rt=0;rt<v.__webglFramebuffer[it].length;rt++)i.deleteFramebuffer(v.__webglFramebuffer[it][rt]);else i.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)i.deleteFramebuffer(v.__webglFramebuffer[it]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=R.textures;for(let it=0,rt=V.length;it<rt;it++){let K=n.get(V[it]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(V[it])}n.remove(R)}let D=0;function tt(){D=0}function W(){let R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function et(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Q(R,v){let V=n.get(R);if(R.isVideoTexture&&Nt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let it=R.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(V,R,v);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function j(R,v){let V=n.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function ht(R,v){let V=n.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function Z(R,v){let V=n.get(R);if(R.version>0&&V.__version!==R.version){ot(V,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let lt={[Ua]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},vt={[Le]:i.NEAREST,[Zd]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},Pt={[jd]:i.NEVER,[of]:i.ALWAYS,[tf]:i.LESS,[Zh]:i.LEQUAL,[ef]:i.EQUAL,[rf]:i.GEQUAL,[nf]:i.GREATER,[sf]:i.NOTEQUAL};function $(R,v){if(v.type===In&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Fn||v.magFilter===qo||v.magFilter===Ir||v.magFilter===Fi||v.minFilter===Fn||v.minFilter===qo||v.minFilter===Ir||v.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,lt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,lt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,lt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,vt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Le||v.minFilter!==Ir&&v.minFilter!==Fi||v.type===In&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function At(R,v){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));let it=v.source,rt=f.get(it);rt===void 0&&(rt={},f.set(it,rt));let K=et(v);if(K!==R.__cacheKey){rt[K]===void 0&&(rt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),rt[K].usedTimes++;let Rt=rt[R.__cacheKey];Rt!==void 0&&(rt[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&E(v)),R.__cacheKey=K,R.__webglTexture=rt[K].texture}return V}function q(R,v,V){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let rt=At(R,v),K=v.source;e.bindTexture(it,R.__webglTexture,i.TEXTURE0+V);let Rt=n.get(K);if(K.version!==Rt.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);let pt=se.getPrimaries(se.workingColorSpace),St=v.colorSpace===fi?null:se.getPrimaries(v.colorSpace),ie=v.colorSpace===fi||pt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ut=y(v.image,!1,s.maxTextureSize);ut=fe(v,ut);let yt=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type),Bt=T(v.internalFormat,yt,Ut,v.colorSpace,v.isVideoTexture);$(it,v);let bt,Jt=v.mipmaps,Wt=v.isVideoTexture!==!0,ae=Rt.__version===void 0||rt===!0,U=K.dataReady,dt=F(v,ut);if(v.isDepthTexture)Bt=b(v.format===ws,v.type),ae&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Bt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,yt,Ut,null));else if(v.isDataTexture)if(Jt.length>0){Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,dt,Bt,Jt[0].width,Jt[0].height);for(let J=0,nt=Jt.length;J<nt;J++)bt=Jt[J],Wt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,bt.width,bt.height,yt,Ut,bt.data):e.texImage2D(i.TEXTURE_2D,J,Bt,bt.width,bt.height,0,yt,Ut,bt.data);v.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(i.TEXTURE_2D,dt,Bt,ut.width,ut.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,yt,Ut,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,yt,Ut,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Bt,Jt[0].width,Jt[0].height,ut.depth);for(let J=0,nt=Jt.length;J<nt;J++)if(bt=Jt[J],v.format!==cn)if(yt!==null)if(Wt){if(U)if(v.layerUpdates.size>0){let _t=Ph(bt.width,bt.height,v.format,v.type);for(let Mt of v.layerUpdates){let kt=bt.data.subarray(Mt*_t/bt.data.BYTES_PER_ELEMENT,(Mt+1)*_t/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Mt,bt.width,bt.height,1,yt,kt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,bt.width,bt.height,ut.depth,yt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Bt,bt.width,bt.height,ut.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,bt.width,bt.height,ut.depth,yt,Ut,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Bt,bt.width,bt.height,ut.depth,0,yt,Ut,bt.data)}else{Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,dt,Bt,Jt[0].width,Jt[0].height);for(let J=0,nt=Jt.length;J<nt;J++)bt=Jt[J],v.format!==cn?yt!==null?Wt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Bt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,bt.width,bt.height,yt,Ut,bt.data):e.texImage2D(i.TEXTURE_2D,J,Bt,bt.width,bt.height,0,yt,Ut,bt.data)}else if(v.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Bt,ut.width,ut.height,ut.depth),U)if(v.layerUpdates.size>0){let J=Ph(ut.width,ut.height,v.format,v.type);for(let nt of v.layerUpdates){let _t=ut.data.subarray(nt*J/ut.data.BYTES_PER_ELEMENT,(nt+1)*J/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ut.width,ut.height,1,yt,Ut,_t)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,yt,Ut,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ut.width,ut.height,ut.depth,0,yt,Ut,ut.data);else if(v.isData3DTexture)Wt?(ae&&e.texStorage3D(i.TEXTURE_3D,dt,Bt,ut.width,ut.height,ut.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,yt,Ut,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ut.width,ut.height,ut.depth,0,yt,Ut,ut.data);else if(v.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(i.TEXTURE_2D,dt,Bt,ut.width,ut.height);else{let J=ut.width,nt=ut.height;for(let _t=0;_t<dt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Bt,J,nt,0,yt,Ut,null),J>>=1,nt>>=1}}else if(Jt.length>0){if(Wt&&ae){let J=Dt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Bt,J.width,J.height)}for(let J=0,nt=Jt.length;J<nt;J++)bt=Jt[J],Wt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,yt,Ut,bt):e.texImage2D(i.TEXTURE_2D,J,Bt,yt,Ut,bt);v.generateMipmaps=!1}else if(Wt){if(ae){let J=Dt(ut);e.texStorage2D(i.TEXTURE_2D,dt,Bt,J.width,J.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Ut,ut)}else e.texImage2D(i.TEXTURE_2D,0,Bt,yt,Ut,ut);m(v)&&d(it),Rt.__version=K.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ot(R,v,V){if(v.image.length!==6)return;let it=At(R,v),rt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let K=n.get(rt);if(rt.version!==K.__version||it===!0){e.activeTexture(i.TEXTURE0+V);let Rt=se.getPrimaries(se.workingColorSpace),pt=v.colorSpace===fi?null:se.getPrimaries(v.colorSpace),St=v.colorSpace===fi||Rt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let ie=v.isCompressedTexture||v.image[0].isCompressedTexture,ut=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let nt=0;nt<6;nt++)!ie&&!ut?yt[nt]=y(v.image[nt],!0,s.maxCubemapSize):yt[nt]=ut?v.image[nt].image:v.image[nt],yt[nt]=fe(v,yt[nt]);let Ut=yt[0],Bt=r.convert(v.format,v.colorSpace),bt=r.convert(v.type),Jt=T(v.internalFormat,Bt,bt,v.colorSpace),Wt=v.isVideoTexture!==!0,ae=K.__version===void 0||it===!0,U=rt.dataReady,dt=F(v,Ut);$(i.TEXTURE_CUBE_MAP,v);let J;if(ie){Wt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Jt,Ut.width,Ut.height);for(let nt=0;nt<6;nt++){J=yt[nt].mipmaps;for(let _t=0;_t<J.length;_t++){let Mt=J[_t];v.format!==cn?Bt!==null?Wt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,Mt.width,Mt.height,Bt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,Jt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,0,0,Mt.width,Mt.height,Bt,bt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t,Jt,Mt.width,Mt.height,0,Bt,bt,Mt.data)}}}else{if(J=v.mipmaps,Wt&&ae){J.length>0&&dt++;let nt=Dt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Jt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ut){Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,yt[nt].width,yt[nt].height,Bt,bt,yt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,yt[nt].width,yt[nt].height,0,Bt,bt,yt[nt].data);for(let _t=0;_t<J.length;_t++){let kt=J[_t].image[nt].image;Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,kt.width,kt.height,Bt,bt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,Jt,kt.width,kt.height,0,Bt,bt,kt.data)}}else{Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,bt,yt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Jt,Bt,bt,yt[nt]);for(let _t=0;_t<J.length;_t++){let Mt=J[_t];Wt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,0,0,Bt,bt,Mt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t+1,Jt,Bt,bt,Mt.image[nt])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),K.__version=rt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ft(R,v,V,it,rt,K){let Rt=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),St=T(V.internalFormat,Rt,pt,V.colorSpace),ie=n.get(v),ut=n.get(V);if(ut.__renderTarget=v,!ie.__hasExternalTextures){let yt=Math.max(1,v.width>>K),Ut=Math.max(1,v.height>>K);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,K,St,yt,Ut,v.depth,0,Rt,pt,null):e.texImage2D(rt,K,St,yt,Ut,0,Rt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),$t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,rt,ut.__webglTexture,0,Zt(v)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,rt,ut.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(R,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let it=v.depthTexture,rt=it&&it.isDepthTexture?it.type:null,K=b(v.stencilBuffer,rt),Rt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Zt(v);$t(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,K,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{let it=v.textures;for(let rt=0;rt<it.length;rt++){let K=it[rt],Rt=r.convert(K.format,K.colorSpace),pt=r.convert(K.type),St=T(K.internalFormat,Rt,pt,K.colorSpace),ie=Zt(v);V&&$t(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,St,v.width,v.height):$t(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,St,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,St,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(v.depthTexture);it.__renderTarget=v,(!it.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);let rt=it.__webglTexture,K=Zt(v);if(v.depthTexture.format===_s)$t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(v.depthTexture.format===ws)$t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Lt(R){let v=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let it=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let rt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),v.__depthDisposeCallback=rt}v.__boundDepthTexture=it}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ct(v.__webglFramebuffer,R)}else if(V){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),at(v.__webglDepthbuffer[it],R,!1);else{let rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),at(v.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(R,v,V){let it=n.get(R);v!==void 0&&ft(it.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Lt(R)}function te(R){let v=R.texture,V=n.get(R),it=n.get(v);R.addEventListener("dispose",I);let rt=R.textures,K=R.isWebGLCubeRenderTarget===!0,Rt=rt.length>1;if(Rt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let St=0;St<v.mipmaps.length;St++)V.__webglFramebuffer[pt][St]=i.createFramebuffer()}else V.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)V.__webglFramebuffer[pt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let pt=0,St=rt.length;pt<St;pt++){let ie=n.get(rt[pt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&$t(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){let St=rt[pt];V.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);let ie=r.convert(St.format,St.colorSpace),ut=r.convert(St.type),yt=T(St.internalFormat,ie,ut,St.colorSpace,R.isXRRenderTarget===!0),Ut=Zt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),at(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),$(i.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)ft(V.__webglFramebuffer[pt][St],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,St);else ft(V.__webglFramebuffer[pt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let pt=0,St=rt.length;pt<St;pt++){let ie=rt[pt],ut=n.get(ie);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),$(i.TEXTURE_2D,ie),ft(V.__webglFramebuffer,R,ie,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(ie)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),$(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)ft(V.__webglFramebuffer[St],R,v,i.COLOR_ATTACHMENT0,pt,St);else ft(V.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,pt,0);m(v)&&d(pt),e.unbindTexture()}R.depthBuffer&&Lt(R)}function jt(R){let v=R.textures;for(let V=0,it=v.length;V<it;V++){let rt=v[V];if(m(rt)){let K=A(R),Rt=n.get(rt).__webglTexture;e.bindTexture(K,Rt),d(K),e.unbindTexture()}}}let Se=[],B=[];function _e(R){if(R.samples>0){if($t(R)===!1){let v=R.textures,V=R.width,it=R.height,rt=i.COLOR_BUFFER_BIT,K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),pt=v.length>1;if(pt)for(let St=0;St<v.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let St=0;St<v.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);let ie=n.get(v[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,V,it,0,0,V,it,rt,i.NEAREST),l===!0&&(Se.length=0,B.length=0,Se.push(i.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Se.push(K),B.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let St=0;St<v.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);let ie=n.get(v[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Zt(R){return Math.min(s.maxSamples,R.samples)}function $t(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Nt(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function fe(R,v){let V=R.colorSpace,it=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==xi&&V!==fi&&(se.getTransfer(V)===me?(it!==cn||rt!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=tt,this.setTexture2D=Q,this.setTexture2DArray=j,this.setTexture3D=ht,this.setTextureCube=Z,this.rebindTextures=zt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=$t}function Q0(i,t){function e(n,s=fi){let r,o=se.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.BYTE;if(n===kh)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===cn)return i.RGBA;if(n===Wh)return i.LUMINANCE;if(n===Xh)return i.LUMINANCE_ALPHA;if(n===_s)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===To)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===qh)return i.RG;if(n===Hl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Va||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Va)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===Qa||n===ja||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yh||n===rl||n===ol||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var bl=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ms=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},j0={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`,wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new hn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:t_,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},El=class extends gi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,_=null,y=new wl,m=e.getContextAttributes(),d=null,A=null,T=[],b=[],F=new he,C=null,I=new Ze;I.viewport=new ge;let z=new Ze;z.viewport=new ge;let E=[I,z],S=new bl,D=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=T[q];return ot===void 0&&(ot=new rr,T[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=T[q];return ot===void 0&&(ot=new rr,T[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=T[q];return ot===void 0&&(ot=new rr,T[q]=ot),ot.getHandSpace()};function W(q){let ot=b.indexOf(q.inputSource);if(ot===-1)return;let ft=T[ot];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||o),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function et(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",Q);for(let q=0;q<T.length;q++){let ot=b[q];ot!==null&&(b[q]=null,T[q].disconnect(ot))}D=null,tt=null,y.reset(),t.setRenderTarget(d),g=null,f=null,u=null,s=null,A=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",et),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new xn(g.framebufferWidth,g.framebufferHeight,{format:cn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,ft=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?ws:_s,ft=m.stencil?bs:Oi);let Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new xn(f.textureWidth,f.textureHeight,{format:cn,type:Pn,depthTexture:new Cs(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(q){for(let ot=0;ot<q.removed.length;ot++){let ft=q.removed[ot],at=b.indexOf(ft);at>=0&&(b[at]=null,T[at].disconnect(ft))}for(let ot=0;ot<q.added.length;ot++){let ft=q.added[ot],at=b.indexOf(ft);if(at===-1){for(let Lt=0;Lt<T.length;Lt++)if(Lt>=b.length){b.push(ft),at=Lt;break}else if(b[Lt]===null){b[Lt]=ft,at=Lt;break}if(at===-1)break}let Ct=T[at];Ct&&Ct.connect(ft)}}let j=new k,ht=new k;function Z(q,ot,ft){j.setFromMatrixPosition(ot.matrixWorld),ht.setFromMatrixPosition(ft.matrixWorld);let at=j.distanceTo(ht),Ct=ot.projectionMatrix.elements,Lt=ft.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),te=Ct[14]/(Ct[10]+1),jt=(Ct[9]+1)/Ct[5],Se=(Ct[9]-1)/Ct[5],B=(Ct[8]-1)/Ct[0],_e=(Lt[8]+1)/Lt[0],Zt=zt*B,$t=zt*_e,Nt=at/(-B+_e),fe=Nt*-B;if(ot.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(fe),q.translateZ(Nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Dt=zt+Nt,R=te+Nt,v=Zt-fe,V=$t+(at-fe),it=jt*te/R*Dt,rt=Se*te/R*Dt;q.projectionMatrix.makePerspective(v,V,it,rt,Dt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ot=q.near,ft=q.far;y.texture!==null&&(y.depthNear>0&&(ot=y.depthNear),y.depthFar>0&&(ft=y.depthFar)),S.near=z.near=I.near=ot,S.far=z.far=I.far=ft,(D!==S.near||tt!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,tt=S.far),I.layers.mask=q.layers.mask|2,z.layers.mask=q.layers.mask|4,S.layers.mask=I.layers.mask|z.layers.mask;let at=q.parent,Ct=S.cameras;lt(S,at);for(let Lt=0;Lt<Ct.length;Lt++)lt(Ct[Lt],at);Ct.length===2?Z(S,I,z):S.projectionMatrix.copy(I.projectionMatrix),vt(q,S,at)};function vt(q,ot,ft){ft===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let Pt=null;function $(q,ot){if(h=ot.getViewerPose(c||o),_=ot,h!==null){let ft=h.views;g!==null&&(t.setRenderTargetFramebuffer(A,g.framebuffer),t.setRenderTarget(A));let at=!1;ft.length!==S.cameras.length&&(S.cameras.length=0,at=!0);for(let Lt=0;Lt<ft.length;Lt++){let zt=ft[Lt],te=null;if(g!==null)te=g.getViewport(zt);else{let Se=u.getViewSubImage(f,zt);te=Se.viewport,Lt===0&&(t.setRenderTargetTextures(A,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(A))}let jt=E[Lt];jt===void 0&&(jt=new Ze,jt.layers.enable(Lt),jt.viewport=new ge,E[Lt]=jt),jt.matrix.fromArray(zt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(zt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(te.x,te.y,te.width,te.height),Lt===0&&(S.matrix.copy(jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),at===!0&&S.cameras.push(jt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Lt=u.getDepthInformation(ft[0]);Lt&&Lt.isValid&&Lt.texture&&y.init(t,Lt,s.renderState)}}for(let ft=0;ft<T.length;ft++){let at=b[ft],Ct=T[ft];at!==null&&Ct!==void 0&&Ct.update(at,ot,c||o)}Pt&&Pt(q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),_=null}let At=new Qh;At.setAnimationLoop($),this.setAnimationLoop=function(q){Pt=q},this.dispose=function(){}}},Ii=new Ln,n_=new ue;function i_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Kh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&g(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=t.get(d),T=A.envMap,b=A.envMapRotation;T&&(m.envMap.value=T,Ii.copy(b),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(Ii)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){let b=T.program;n.uniformBlockBinding(A,b)}function c(A,T){let b=s[A.id];b===void 0&&(_(A),b=h(A),s[A.id]=b,A.addEventListener("dispose",m));let F=T.program;n.updateUBOMapping(A,F);let C=t.render.frame;r[A.id]!==C&&(f(A),r[A.id]=C)}function h(A){let T=u();A.__bindingPointIndex=T;let b=i.createBuffer(),F=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let T=s[A.id],b=A.uniforms,F=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,I=b.length;C<I;C++){let z=Array.isArray(b[C])?b[C]:[b[C]];for(let E=0,S=z.length;E<S;E++){let D=z[E];if(g(D,C,E,F)===!0){let tt=D.__offset,W=Array.isArray(D.value)?D.value:[D.value],et=0;for(let Q=0;Q<W.length;Q++){let j=W[Q],ht=y(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,tt+et,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,et),et+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,tt,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(A,T,b,F){let C=A.value,I=T+"_"+b;if(F[I]===void 0)return typeof C=="number"||typeof C=="boolean"?F[I]=C:F[I]=C.clone(),!0;{let z=F[I];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return F[I]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function _(A){let T=A.uniforms,b=0,F=16;for(let I=0,z=T.length;I<z;I++){let E=Array.isArray(T[I])?T[I]:[T[I]];for(let S=0,D=E.length;S<D;S++){let tt=E[S],W=Array.isArray(tt.value)?tt.value:[tt.value];for(let et=0,Q=W.length;et<Q;et++){let j=W[et],ht=y(j),Z=b%F,lt=Z%ht.boundary,vt=Z+lt;b+=lt,vt!==0&&F-vt<ht.storage&&(b+=F-vt),tt.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=b,b+=ht.storage}}}let C=b%F;return C>0&&(b+=F-C),A.__size=b,A.__cache={},this}function y(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){let T=A.target;T.removeEventListener("dispose",m);let b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var xo=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=new Uint32Array(4),y=new Int32Array(4),m=null,d=null,A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=mi,this.toneMappingExposure=1;let b=this,F=!1,C=0,I=0,z=null,E=-1,S=null,D=new ge,tt=new ge,W=null,et=new ce(0),Q=0,j=e.width,ht=e.height,Z=1,lt=null,vt=null,Pt=new ge(0,0,j,ht),$=new ge(0,0,j,ht),At=!1,q=new go,ot=!1,ft=!1,at=new ue,Ct=new ue,Lt=new k,zt=new ge,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function Se(){return z===null?Z:1}let B=n;function _e(M,O){return e.getContext(M,O)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),B===null){let O="webgl2";if(B=_e(O,M),B===null)throw _e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Zt,$t,Nt,fe,Dt,R,v,V,it,rt,K,Rt,pt,St,ie,ut,yt,Ut,Bt,bt,Jt,Wt,ae,U;function dt(){Zt=new yg(B),Zt.init(),Wt=new Q0(B,Zt),$t=new pg(B,Zt,t,Wt),Nt=new $0(B,Zt),$t.reverseDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),fe=new bg(B),Dt=new F0,R=new K0(B,Zt,Nt,Dt,$t,Wt,fe),v=new gg(b),V=new vg(b),it=new If(B),ae=new dg(B,it),rt=new Mg(B,it,fe,ae),K=new Eg(B,rt,it,fe),Bt=new wg(B,$t,R),ut=new mg(Dt),Rt=new N0(b,v,V,Zt,$t,ae,ut),pt=new i_(b,Dt),St=new B0,ie=new W0(Zt),Ut=new ug(b,v,V,Nt,K,g,l),yt=new Y0(b,K,$t),U=new s_(B,fe,$t,Nt),bt=new fg(B,Zt,fe),Jt=new Sg(B,Zt,fe),fe.programs=Rt.programs,b.capabilities=$t,b.extensions=Zt,b.properties=Dt,b.renderLists=St,b.shadowMap=yt,b.state=Nt,b.info=fe}dt();let J=new El(b,B);this.xr=J,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=Zt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Zt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(M){M!==void 0&&(Z=M,this.setSize(j,ht,!1))},this.getSize=function(M){return M.set(j,ht)},this.setSize=function(M,O,H=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=M,ht=O,e.width=Math.floor(M*Z),e.height=Math.floor(O*Z),H===!0&&(e.style.width=M+"px",e.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(j*Z,ht*Z).floor()},this.setDrawingBufferSize=function(M,O,H){j=M,ht=O,Z=H,e.width=Math.floor(M*H),e.height=Math.floor(O*H),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(Pt)},this.setViewport=function(M,O,H,G){M.isVector4?Pt.set(M.x,M.y,M.z,M.w):Pt.set(M,O,H,G),Nt.viewport(D.copy(Pt).multiplyScalar(Z).round())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,O,H,G){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,O,H,G),Nt.scissor(tt.copy($).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(M){Nt.setScissorTest(At=M)},this.setOpaqueSort=function(M){lt=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(M=!0,O=!0,H=!0){let G=0;if(M){let N=!1;if(z!==null){let ct=z.texture.format;N=ct===Gl||ct===Hl||ct===Vl}if(N){let ct=z.texture.type,xt=ct===Pn||ct===Oi||ct===or||ct===bs||ct===zl||ct===kl,Et=Ut.getClearColor(),wt=Ut.getClearAlpha(),Vt=Et.r,Gt=Et.g,Tt=Et.b;xt?(_[0]=Vt,_[1]=Gt,_[2]=Tt,_[3]=wt,B.clearBufferuiv(B.COLOR,0,_)):(y[0]=Vt,y[1]=Gt,y[2]=Tt,y[3]=wt,B.clearBufferiv(B.COLOR,0,y))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT),H&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),St.dispose(),ie.dispose(),Dt.dispose(),v.dispose(),V.dispose(),K.dispose(),ae.dispose(),U.dispose(),Rt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Mn),J.removeEventListener("sessionend",Mi),dn.stop()};function nt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let M=fe.autoReset,O=yt.enabled,H=yt.autoUpdate,G=yt.needsUpdate,N=yt.type;dt(),fe.autoReset=M,yt.enabled=O,yt.autoUpdate=H,yt.needsUpdate=G,yt.type=N}function Mt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function kt(M){let O=M.target;O.removeEventListener("dispose",kt),xe(O)}function xe(M){Ee(M),Dt.remove(M)}function Ee(M){let O=Dt.get(M).programs;O!==void 0&&(O.forEach(function(H){Rt.releaseProgram(H)}),M.isShaderMaterial&&Rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,H,G,N,ct){O===null&&(O=te);let xt=N.isMesh&&N.matrixWorld.determinant()<0,Et=Sn(M,O,H,G,N);Nt.setMaterial(G,xt);let wt=H.index,Vt=1;if(G.wireframe===!0){if(wt=rt.getWireframeAttribute(H),wt===void 0)return;Vt=2}let Gt=H.drawRange,Tt=H.attributes.position,ne=Gt.start*Vt,oe=(Gt.start+Gt.count)*Vt;ct!==null&&(ne=Math.max(ne,ct.start*Vt),oe=Math.min(oe,(ct.start+ct.count)*Vt)),wt!==null?(ne=Math.max(ne,0),oe=Math.min(oe,wt.count)):Tt!=null&&(ne=Math.max(ne,0),oe=Math.min(oe,Tt.count));let de=oe-ne;if(de<0||de===1/0)return;ae.setup(N,G,Et,H,wt);let Ce,re=bt;if(wt!==null&&(Ce=it.get(wt),re=Jt,re.setIndex(Ce)),N.isMesh)G.wireframe===!0?(Nt.setLineWidth(G.wireframeLinewidth*Se()),re.setMode(B.LINES)):re.setMode(B.TRIANGLES);else if(N.isLine){let It=G.linewidth;It===void 0&&(It=1),Nt.setLineWidth(It*Se()),N.isLineSegments?re.setMode(B.LINES):N.isLineLoop?re.setMode(B.LINE_LOOP):re.setMode(B.LINE_STRIP)}else N.isPoints?re.setMode(B.POINTS):N.isSprite&&re.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)re.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))re.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let It=N._multiDrawStarts,pn=N._multiDrawCounts,Kt=N._multiDrawCount,Qe=wt?it.get(wt).bytesPerElement:1,bn=Dt.get(G).currentProgram.getUniforms();for(let We=0;We<Kt;We++)bn.setValue(B,"_gl_DrawID",We),re.render(It[We]/Qe,pn[We])}else if(N.isInstancedMesh)re.renderInstances(ne,de,N.count);else if(H.isInstancedBufferGeometry){let It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pn=Math.min(H.instanceCount,It);re.renderInstances(ne,de,pn)}else re.render(ne,de)};function ee(M,O,H){M.transparent===!0&&M.side===Cn&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,Zi(M,O,H),M.side=On,M.needsUpdate=!0,Zi(M,O,H),M.side=Cn):Zi(M,O,H)}this.compile=function(M,O,H=null){H===null&&(H=M),d=ie.get(H),d.init(O),T.push(d),H.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),M!==H&&M.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let G=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ct=N.material;if(ct)if(Array.isArray(ct))for(let xt=0;xt<ct.length;xt++){let Et=ct[xt];ee(Et,H,N),G.add(Et)}else ee(ct,H,N),G.add(ct)}),T.pop(),d=null,G},this.compileAsync=function(M,O,H=null){let G=this.compile(M,O,H);return new Promise(N=>{function ct(){if(G.forEach(function(xt){Dt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){N(M);return}setTimeout(ct,10)}Zt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Re=null;function $e(M){Re&&Re(M)}function Mn(){dn.stop()}function Mi(){dn.start()}let dn=new Qh;dn.setAnimationLoop($e),typeof self<"u"&&dn.setContext(self),this.setAnimationLoop=function(M){Re=M,J.setAnimationLoop(M),M===null?dn.stop():dn.start()},J.addEventListener("sessionstart",Mn),J.addEventListener("sessionend",Mi),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,O,z),d=ie.get(M,T.length),d.init(O),T.push(d),Ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Ct),ft=this.localClippingEnabled,ot=ut.init(this.clippingPlanes,ft),m=St.get(M,A.length),m.init(),A.push(m),J.enabled===!0&&J.isPresenting===!0){let ct=b.xr.getDepthSensingMesh();ct!==null&&zs(ct,O,-1/0,b.sortObjects)}zs(M,O,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(lt,vt),jt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,jt&&Ut.addToRenderList(m,M),this.info.render.frame++,ot===!0&&ut.beginShadows();let H=d.state.shadowsArray;yt.render(H,M,O),ot===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,N=m.transmissive;if(d.setupLights(),O.isArrayCamera){let ct=O.cameras;if(N.length>0)for(let xt=0,Et=ct.length;xt<Et;xt++){let wt=ct[xt];qi(G,N,M,wt)}jt&&Ut.render(M);for(let xt=0,Et=ct.length;xt<Et;xt++){let wt=ct[xt];gr(m,M,wt,wt.viewport)}}else N.length>0&&qi(G,N,M,O),jt&&Ut.render(M),gr(m,M,O);z!==null&&(R.updateMultisampleRenderTarget(z),R.updateRenderTargetMipmap(z)),M.isScene===!0&&M.onAfterRender(b,M,O),ae.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(d=T[T.length-1],ot===!0&&ut.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function zs(M,O,H,G){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){G&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);let xt=K.update(M),Et=M.material;Et.visible&&m.push(M,xt,Et,H,zt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){let xt=K.update(M),Et=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),zt.copy(xt.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(Et)){let wt=xt.groups;for(let Vt=0,Gt=wt.length;Vt<Gt;Vt++){let Tt=wt[Vt],ne=Et[Tt.materialIndex];ne&&ne.visible&&m.push(M,xt,ne,H,zt.z,Tt)}}else Et.visible&&m.push(M,xt,Et,H,zt.z,null)}}let ct=M.children;for(let xt=0,Et=ct.length;xt<Et;xt++)zs(ct[xt],O,H,G)}function gr(M,O,H,G){let N=M.opaque,ct=M.transmissive,xt=M.transparent;d.setupLightsView(H),ot===!0&&ut.setGlobalState(b.clippingPlanes,H),G&&Nt.viewport(D.copy(G)),N.length>0&&Yi(N,O,H),ct.length>0&&Yi(ct,O,H),xt.length>0&&Yi(xt,O,H),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function qi(M,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new xn(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?ar:Pn,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let ct=d.state.transmissionRenderTarget[G.id],xt=G.viewport||D;ct.setSize(xt.z,xt.w);let Et=b.getRenderTarget();b.setRenderTarget(ct),b.getClearColor(et),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),jt&&Ut.render(H);let wt=b.toneMapping;b.toneMapping=mi;let Vt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),ot===!0&&ut.setGlobalState(b.clippingPlanes,G),Yi(M,H,G),R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Tt=0,ne=O.length;Tt<ne;Tt++){let oe=O[Tt],de=oe.object,Ce=oe.geometry,re=oe.material,It=oe.group;if(re.side===Cn&&de.layers.test(G.layers)){let pn=re.side;re.side=sn,re.needsUpdate=!0,Si(de,H,G,Ce,re,It),re.side=pn,re.needsUpdate=!0,Gt=!0}}Gt===!0&&(R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct))}b.setRenderTarget(Et),b.setClearColor(et,Q),Vt!==void 0&&(G.viewport=Vt),b.toneMapping=wt}function Yi(M,O,H){let G=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ct=M.length;N<ct;N++){let xt=M[N],Et=xt.object,wt=xt.geometry,Vt=G===null?xt.material:G,Gt=xt.group;Et.layers.test(H.layers)&&Si(Et,O,H,wt,Vt,Gt)}}function Si(M,O,H,G,N,ct){M.onBeforeRender(b,O,H,G,N,ct),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(b,O,H,G,M,ct),N.transparent===!0&&N.side===Cn&&N.forceSinglePass===!1?(N.side=sn,N.needsUpdate=!0,b.renderBufferDirect(H,O,G,N,M,ct),N.side=On,N.needsUpdate=!0,b.renderBufferDirect(H,O,G,N,M,ct),N.side=Cn):b.renderBufferDirect(H,O,G,N,M,ct),M.onAfterRender(b,O,H,G,N,ct)}function Zi(M,O,H){O.isScene!==!0&&(O=te);let G=Dt.get(M),N=d.state.lights,ct=d.state.shadowsArray,xt=N.state.version,Et=Rt.getParameters(M,N.state,ct,O,H),wt=Rt.getProgramCacheKey(Et),Vt=G.programs;G.environment=M.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(M.isMeshStandardMaterial?V:v).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Vt===void 0&&(M.addEventListener("dispose",kt),Vt=new Map,G.programs=Vt);let Gt=Vt.get(wt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===xt)return fn(M,Et),Gt}else Et.uniforms=Rt.getUniforms(M),M.onBeforeCompile(Et,b),Gt=Rt.acquireProgram(Et,wt),Vt.set(wt,Gt),G.uniforms=Et.uniforms;let Tt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=ut.uniform),fn(M,Et),G.needsLights=ei(M),G.lightsStateVersion=xt,G.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function De(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=vs.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function fn(M,O){let H=Dt.get(M);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function Sn(M,O,H,G,N){O.isScene!==!0&&(O=te),R.resetTextureUnits();let ct=O.fog,xt=G.isMeshStandardMaterial?O.environment:null,Et=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:xi,wt=(G.isMeshStandardMaterial?V:v).get(G.envMap||xt),Vt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,oe=!!H.morphAttributes.color,de=mi;G.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(de=b.toneMapping);let Ce=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=Ce!==void 0?Ce.length:0,It=Dt.get(G),pn=d.state.lights;if(ot===!0&&(ft===!0||M!==S)){let tn=M===S&&G.id===E;ut.setState(G,M,tn)}let Kt=!1;G.version===It.__version?(It.needsLights&&It.lightsStateVersion!==pn.state.version||It.outputColorSpace!==Et||N.isBatchedMesh&&It.batching===!1||!N.isBatchedMesh&&It.batching===!0||N.isBatchedMesh&&It.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&It.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&It.instancing===!1||!N.isInstancedMesh&&It.instancing===!0||N.isSkinnedMesh&&It.skinning===!1||!N.isSkinnedMesh&&It.skinning===!0||N.isInstancedMesh&&It.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&It.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&It.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&It.instancingMorph===!1&&N.morphTexture!==null||It.envMap!==wt||G.fog===!0&&It.fog!==ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ut.numPlanes||It.numIntersection!==ut.numIntersection)||It.vertexAlphas!==Vt||It.vertexTangents!==Gt||It.morphTargets!==Tt||It.morphNormals!==ne||It.morphColors!==oe||It.toneMapping!==de||It.morphTargetsCount!==re)&&(Kt=!0):(Kt=!0,It.__version=G.version);let Qe=It.currentProgram;Kt===!0&&(Qe=Zi(G,O,N));let bn=!1,We=!1,bi=!1,pe=Qe.getUniforms(),je=It.uniforms;if(Nt.useProgram(Qe.program)&&(bn=!0,We=!0,bi=!0),G.id!==E&&(E=G.id,We=!0),bn||S!==M){Nt.buffers.depth.getReversed()?(at.copy(M.projectionMatrix),hf(at),uf(at),pe.setValue(B,"projectionMatrix",at)):pe.setValue(B,"projectionMatrix",M.projectionMatrix),pe.setValue(B,"viewMatrix",M.matrixWorldInverse);let Xe=pe.map.cameraPosition;Xe!==void 0&&Xe.setValue(B,Lt.setFromMatrixPosition(M.matrixWorld)),$t.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,We=!0,bi=!0)}if(N.isSkinnedMesh){pe.setOptional(B,N,"bindMatrix"),pe.setOptional(B,N,"bindMatrixInverse");let tn=N.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),pe.setValue(B,"boneTexture",tn.boneTexture,R))}N.isBatchedMesh&&(pe.setOptional(B,N,"batchingTexture"),pe.setValue(B,"batchingTexture",N._matricesTexture,R),pe.setOptional(B,N,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",N._indirectTexture,R),pe.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",N._colorsTexture,R));let ni=H.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Bt.update(N,H,Qe),(We||It.receiveShadow!==N.receiveShadow)&&(It.receiveShadow=N.receiveShadow,pe.setValue(B,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(je.envMap.value=wt,je.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(je.envMapIntensity.value=O.environmentIntensity),We&&(pe.setValue(B,"toneMappingExposure",b.toneMappingExposure),It.needsLights&&ti(je,bi),ct&&G.fog===!0&&pt.refreshFogUniforms(je,ct),pt.refreshMaterialUniforms(je,G,Z,ht,d.state.transmissionRenderTarget[M.id]),vs.upload(B,De(It),je,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(vs.upload(B,De(It),je,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(B,"center",N.center),pe.setValue(B,"modelViewMatrix",N.modelViewMatrix),pe.setValue(B,"normalMatrix",N.normalMatrix),pe.setValue(B,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let tn=G.uniformsGroups;for(let Xe=0,Je=tn.length;Xe<Je;Xe++){let _r=tn[Xe];U.update(_r,Qe),U.bind(_r,Qe)}}return Qe}function ti(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ei(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,O,H){Dt.get(M.texture).__webglTexture=O,Dt.get(M.depthTexture).__webglTexture=H;let G=Dt.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){let H=Dt.get(M);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,H=0){z=M,C=O,I=H;let G=!0,N=null,ct=!1,xt=!1;if(M){let wt=Dt.get(M);if(wt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(B.FRAMEBUFFER,null),G=!1;else if(wt.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(wt.__hasExternalTextures)R.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Tt=M.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&Dt.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}let Vt=M.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(xt=!0);let Gt=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?N=Gt[O][H]:N=Gt[O],ct=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?N=Dt.get(M).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[H]:N=Gt,D.copy(M.viewport),tt.copy(M.scissor),W=M.scissorTest}else D.copy(Pt).multiplyScalar(Z).floor(),tt.copy($).multiplyScalar(Z).floor(),W=At;if(Nt.bindFramebuffer(B.FRAMEBUFFER,N)&&G&&Nt.drawBuffers(M,N),Nt.viewport(D),Nt.scissor(tt),Nt.setScissorTest(W),ct){let wt=Dt.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,H)}else if(xt){let wt=Dt.get(M.texture),Vt=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,wt.__webglTexture,H||0,Vt)}E=-1},this.readRenderTargetPixels=function(M,O,H,G,N,ct,xt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){Nt.bindFramebuffer(B.FRAMEBUFFER,Et);try{let wt=M.texture,Vt=wt.format,Gt=wt.type;if(!$t.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-G&&H>=0&&H<=M.height-N&&B.readPixels(O,H,G,N,Wt.convert(Vt),Wt.convert(Gt),ct)}finally{let wt=z!==null?Dt.get(z).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,O,H,G,N,ct,xt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){let wt=M.texture,Vt=wt.format,Gt=wt.type;if(!$t.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-G&&H>=0&&H<=M.height-N){Nt.bindFramebuffer(B.FRAMEBUFFER,Et);let Tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Tt),B.bufferData(B.PIXEL_PACK_BUFFER,ct.byteLength,B.STREAM_READ),B.readPixels(O,H,G,N,Wt.convert(Vt),Wt.convert(Gt),0);let ne=z!==null?Dt.get(z).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,ne);let oe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await cf(B,oe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ct),B.deleteBuffer(Tt),B.deleteSync(oe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,O=null,H=0){M.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);let G=Math.pow(2,-H),N=Math.floor(M.image.width*G),ct=Math.floor(M.image.height*G),xt=O!==null?O.x:0,Et=O!==null?O.y:0;R.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,xt,Et,N,ct),Nt.unbindTexture()},this.copyTextureToTexture=function(M,O,H=null,G=null,N=0){M.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],O=arguments[2],N=arguments[3]||0,H=null);let ct,xt,Et,wt,Vt,Gt,Tt,ne,oe,de=M.isCompressedTexture?M.mipmaps[N]:M.image;H!==null?(ct=H.max.x-H.min.x,xt=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,wt=H.min.x,Vt=H.min.y,Gt=H.isBox3?H.min.z:0):(ct=de.width,xt=de.height,Et=de.depth||1,wt=0,Vt=0,Gt=0),G!==null?(Tt=G.x,ne=G.y,oe=G.z):(Tt=0,ne=0,oe=0);let Ce=Wt.convert(O.format),re=Wt.convert(O.type),It;O.isData3DTexture?(R.setTexture3D(O,0),It=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),It=B.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),It=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let pn=B.getParameter(B.UNPACK_ROW_LENGTH),Kt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qe=B.getParameter(B.UNPACK_SKIP_PIXELS),bn=B.getParameter(B.UNPACK_SKIP_ROWS),We=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,de.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,de.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,wt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Gt);let bi=M.isDataArrayTexture||M.isData3DTexture,pe=O.isDataArrayTexture||O.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let je=Dt.get(M),ni=Dt.get(O),tn=Dt.get(je.__renderTarget),Xe=Dt.get(ni.__renderTarget);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,tn.__webglFramebuffer),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Je=0;Je<Et;Je++)bi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(M).__webglTexture,N,Gt+Je),M.isDepthTexture?(pe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(O).__webglTexture,N,oe+Je),B.blitFramebuffer(wt,Vt,ct,xt,Tt,ne,ct,xt,B.DEPTH_BUFFER_BIT,B.NEAREST)):pe?B.copyTexSubImage3D(It,N,Tt,ne,oe+Je,wt,Vt,ct,xt):B.copyTexSubImage2D(It,N,Tt,ne,oe+Je,wt,Vt,ct,xt);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(It,N,Tt,ne,oe,ct,xt,Et,Ce,re,de.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(It,N,Tt,ne,oe,ct,xt,Et,Ce,de.data):B.texSubImage3D(It,N,Tt,ne,oe,ct,xt,Et,Ce,re,de):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,N,Tt,ne,ct,xt,Ce,re,de.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,N,Tt,ne,de.width,de.height,Ce,de.data):B.texSubImage2D(B.TEXTURE_2D,N,Tt,ne,ct,xt,Ce,re,de);B.pixelStorei(B.UNPACK_ROW_LENGTH,pn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Kt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qe),B.pixelStorei(B.UNPACK_SKIP_ROWS,bn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,We),N===0&&O.generateMipmaps&&B.generateMipmap(It),Nt.unbindTexture()},this.copyTextureToTexture3D=function(M,O,H=null,G=null,N=0){return M.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,M=arguments[2],O=arguments[3],N=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,H,G,N)},this.initRenderTarget=function(M){Dt.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),Nt.unbindTexture()},this.resetState=function(){C=0,I=0,z=null,Nt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Is=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var vo=class extends hn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Le,h=Le,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tl=class extends zi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yo=new k,Mo=new k,Lh=new ue,nr=new ho,Kr=new Es,Sa=new k,Dh=new k,Al=class extends vn{constructor(t=new rn,e=new Tl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)yo.fromBufferAttribute(e,s-1),Mo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=yo.distanceTo(Mo);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Lh.copy(s).invert(),nr.copy(t.ray).applyMatrix4(Lh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=g,m=_-1;y<m;y+=c){let d=h.getX(y),A=h.getX(y+1),T=Qr(this,t,nr,l,d,A);T&&e.push(T)}if(this.isLineLoop){let y=h.getX(_-1),m=h.getX(g),d=Qr(this,t,nr,l,y,m);d&&e.push(d)}}else{let g=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=g,m=_-1;y<m;y+=c){let d=Qr(this,t,nr,l,y,y+1);d&&e.push(d)}if(this.isLineLoop){let y=Qr(this,t,nr,l,_-1,g);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(yo.fromBufferAttribute(o,s),Mo.fromBufferAttribute(o,r),e.distanceSqToSegment(yo,Mo,Sa,Dh)>n)return;Sa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Sa);if(!(l<t.near||l>t.far))return{distance:l,point:Dh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Uh=new k,Nh=new k,So=class extends Al{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Uh.fromBufferAttribute(e,s),Nh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Uh.distanceTo(Nh);t.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bo=class i extends rn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,f=new k,g=[],_=[],y=[],m=[];for(let d=0;d<=n;d++){let A=[],T=d/n,b=0;d===0&&o===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let F=0;F<=e;F++){let C=F/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+T*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(C+b,1-T),A.push(c++)}h.push(A)}for(let d=0;d<n;d++)for(let A=0;A<e;A++){let T=h[d][A+1],b=h[d][A],F=h[d+1][A],C=h[d+1][A+1];(d!==0||o>0)&&g.push(T,b,C),(d!==n-1||l<Math.PI)&&g.push(b,F,C)}this.setIndex(g),this.setAttribute("position",new Ne(_,3)),this.setAttribute("normal",new Ne(y,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function r_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=t,a=2*e-n;break;case zc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=t,l=2*n-e;break;case zc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,d=-f*m+2*f*y-f*_,A=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,T=(-1-g)*m+(1.5+g)*y+.5*_,b=g*m-g*y;for(let F=0;F!==a;++F)r[F]=d*o[h+F]+A*o[c+F]+T*o[l+F]+b*o[u+F];return r}},Cl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Il=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jr(e,this.TimeBufferType),this.values=jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jr(t.times,Array),values:jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case ll:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return ll;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&r_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,g=u+n;for(let _=0;_!==n;++_){let y=e[u+_];if(y!==e[f+_]||y!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let g=0;g!==n;++g)e[f+g]=e[u+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ll;var Gi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ro;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends Dn{};Pl.prototype.ValueTypeName="color";var Ll=class extends Dn{};Ll.prototype.ValueTypeName="number";var Dl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_i.slerpFlat(r,0,o,c-a,o,c,l);return r}},wo=class extends Dn{InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}};wo.prototype.ValueTypeName="quaternion";wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=ro;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Dn{};Ul.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let g=c[u],_=c[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}},o_=new Nl,Fl=class{constructor(t){this.manager=t!==void 0?t:o_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xl="\\[\\]\\.:\\/",a_=new RegExp("["+Xl+"]","g"),ql="[^"+Xl+"]",l_="[^"+Xl.replace("\\.","")+"]",c_=/((?:WC+[\/:])*)/.source.replace("WC",ql),h_=/(WCOD+)?/.source.replace("WCOD",l_),u_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ql),d_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ql),f_=new RegExp("^"+c_+h_+u_+d_+"$"),p_=["material","materials","bones","map"],Ol=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(a_,"")}static parseTrackName(t){let e=f_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);p_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Ol;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Qn=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074,2693140,1121589,4333878,1200985,7614249,4797243,10651769,15986557,12456528,16739364,11069230,46403,416437,7685733,16739929,16752001],zn=32,Ds=256,su=["top","side","bottom"],Be=8,Xi=256,Yl=[4,0,4],V_={colors:zn,tiles:Ds-1,tileSize:8,vox:Xi,voxSize:Be,sfx:64,notes:32,patterns:64,mapSide:128,mapBlocks:512*1024,saveBytes:64*1024,screen:256},vi=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6);var Zl=(i,t,e)=>i+Be*(t+Be*e);function $l(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}var Co=24,Jl=8*Ds,yn=Math.PI*2;function uu(){let i=new Uint8Array(Co*Jl),t=new vo(i,Co,Jl,To,Pn);return t.magFilter=Le,t.minFilter=Le,t.generateMipmaps=!1,t.flipY=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}function du(i,t){let e=i.image.data;e.fill(0);for(let n=1;n<Ds;n++){let s=t[n];s&&su.forEach((r,o)=>{let a=s[r];for(let l=0;l<8;l++)for(let c=0;c<8;c++)e[(n*8+(7-l))*Co+o*8+c]=a[l*8+c]&31})}i.needsUpdate=!0}function Io(i,t,e,n=[0,0,0],s=null){return{w:i,h:t,d:e,data:s||new Uint8Array(i*t*e),origin:[...n],pos:[0,0,0],angle:[0,0,0],dirty:!0,geometry:null,_m:new ue,_inv:new ue,_rot:new ue,_xfDirty:!0}}var fu=(i,t,e,n)=>t+i.w*(e+i.h*n);function cr(i,t,e,n){return t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d?0:i.data[fu(i,t,e,n)]}function Po(i,t,e,n,s){t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d||(i.data[fu(i,t,e,n)]=s&255,i.dirty=!0)}var ru=new Ln;function pu(i,t=new ue){return ru.set(-i[0]*yn,i[1]*yn,i[2]*yn,"YXZ"),t.makeRotationFromEuler(ru)}function Us(i){if(!i._xfDirty)return;pu(i.angle,i._rot);let t=new ue().makeTranslation(-i.origin[0],-i.origin[1],-i.origin[2]),e=new ue().makeTranslation(i.pos[0],i.pos[1],i.pos[2]);i._m.copy(e).multiply(i._rot).multiply(t),i._inv.copy(i._m).invert(),i._xfDirty=!1}var Kl=[{n:[0,1,0],f:0,v:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,1],[0,0],[1,0],[1,1]]},{n:[0,-1,0],f:2,v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,1],[1,1],[1,0],[0,0]]},{n:[1,0,0],f:1,v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[-1,0,0],f:1,v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],f:1,v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],f:1,v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]}];function m_(i){let{w:t,h:e,d:n,data:s}=i,r=t*e,o=(A,T,b,F,C)=>{switch(C){case 0:return T===e-1||!s[F+t];case 1:return T===0||!s[F-t];case 2:return A===t-1||!s[F+1];case 3:return A===0||!s[F-1];case 4:return b===n-1||!s[F+r];default:return b===0||!s[F-r]}},a=0;for(let A=0,T=0;A<n;A++)for(let b=0;b<e;b++)for(let F=0;F<t;F++,T++)if(s[T])for(let C=0;C<6;C++)o(F,b,A,T,C)&&a++;let l=new Float32Array(a*12),c=new Float32Array(a*8),h=new Float32Array(a*12),u=a*4>65535?new Uint32Array(a*6):new Uint16Array(a*6),f=0,g=0,_=0,y=0,m=0;for(let A=0,T=0;A<n;A++)for(let b=0;b<e;b++)for(let F=0;F<t;F++,T++){let C=s[T];if(C)for(let I=0;I<6;I++){if(!o(F,b,A,T,I))continue;let z=Kl[I];for(let E=0;E<4;E++){let S=z.v[E];l[f++]=F+S[0],l[f++]=b+S[1],l[f++]=A+S[2],c[g++]=z.uv[E][0],c[g++]=z.uv[E][1],h[_++]=C,h[_++]=z.f,h[_++]=I+1}u[y++]=m,u[y++]=m+1,u[y++]=m+2,u[y++]=m,u[y++]=m+2,u[y++]=m+3,m+=4}}let d=new rn;return d.setAttribute("position",new Ge(l,3)),d.setAttribute("aUV",new Ge(c,2)),d.setAttribute("aTF",new Ge(h,3)),d.setIndex(new Ge(u,1)),d.computeBoundingSphere(),d}function mu(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=m_(i),i.dirty=!1),i.geometry}function g_(i=null,t=Yl,e=""){return{name:e,pivot:[...t],data:i||new Uint8Array(Be*Be*Be),dirty:!0,geometry:null}}function __(i,t,e,n){return t<0||e<0||n<0||t>=Be||e>=Be||n>=Be?0:i.data[Zl(t,e,n)]}function x_(i){let t=[],e=[],n=[],s=0;for(let o=0;o<Be;o++)for(let a=0;a<Be;a++)for(let l=0;l<Be;l++){let c=i.data[Zl(l,a,o)];if(c)for(let h=0;h<Kl.length;h++){let u=Kl[h];if(!__(i,l+u.n[0],a+u.n[1],o+u.n[2])){for(let f=0;f<4;f++)t.push(l+u.v[f][0],a+u.v[f][1],o+u.v[f][2]),e.push(c-1,h+1);n.push(s,s+1,s+2,s,s+2,s+3),s+=4}}}let r=new rn;return r.setAttribute("position",new Ne(t,3)),r.setAttribute("aCD",new Ne(e,2)),r.setIndex(new Ts(n,1)),r.computeBoundingSphere(),r}function gu(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=x_(i),i.dirty=!1),i.geometry}var ou=new ue,au=new ue,lu=new ue,cu=new ue;function _u(i,t,e,n,s){return ou.makeTranslation(-i.pivot[0],-i.pivot[1],-i.pivot[2]),cu.makeScale(n[0]/Be,n[1]/Be,n[2]/Be),pu(e,lu),au.makeTranslation(t[0],t[1],t[2]),s.copy(au).multiply(lu).multiply(cu).multiply(ou)}function xu(i){let t=new Array(Xi).fill(null);return(i.vox||[]).forEach((e,n)=>{if(!e||n>=Xi)return;let s=e.data?$l(e.data):null;(!s||s.length!==Be*Be*Be)&&(s=null),t[n]=g_(s,e.pivot||Yl,e.name||"")}),t}function vu(i){let t={value:Array.from({length:zn},()=>new k)};return jl(t,i),t}function jl(i,t){for(let e=0;e<zn;e++){let n=(t[e]??0)>>>0;i.value[e].set((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)}}var hr=()=>Array.from({length:zn},(i,t)=>t),Ns=()=>new Array(zn).fill(0),yu=`
  float bayer4(vec2 p) {
    const float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
    ivec2 q = ivec2(mod(p, 4.0));
    return (m[q.x + 4 * q.y] + 0.5) / 16.0;
  }
`,tc=`
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
`,ec=()=>({uTorch:{value:Array.from({length:8},()=>new ge)},uTorchFar:{value:new Array(8).fill(0)},uTorchN:{value:0}}),nc=()=>({uCurve:{value:new ge(0,0,0,0)},uCurveA:{value:new k(0,0,0)},uCurveB:{value:new k(0,0,0)},uCurveP:{value:new k(0,-1,0)}}),ic=`
  uniform vec3 uPalette[32];
  uniform float uRemap[32];
  uniform float uTrans[32];
  uniform float uOutline;   // outline palette index for this draw, or -1 for none
  uniform float uId;        // draw id, unique within a frame (1..65535)
  uniform float uInner;     // 1: outline inner edges too (creases, overlaps); 0: outer outline only
  uniform vec4 uFog;        // fog(): palette index, near, far, on (1) / off (0)
  uniform vec2 uFill;       // fillp(n, c): how much (0 none .. 1 all), palette index
  uniform float uPix;       // render pixels per screen pixel (1, 2 or 3), so the dither stays 256-chunky
  uniform vec4 uTorch[8];   // torch(): position from the camera (view space) and near, this frame
  uniform float uTorchFar[8];
  uniform int uTorchN;      // how many torches (0-8)
  varying vec3 vFogPos;     // this pixel's position from the camera, for its distance
  layout(location = 0) out highp vec4 outColor;
  layout(location = 1) out highp vec4 outInfo;   // read by the outline pass
  vec3 palColor(int idx) {
    if (uTrans[idx] > 0.5) discard;          // palt applies to the original index
    return uPalette[int(uRemap[idx] + 0.5)];  // then pal() remap, then the real color
  }
  // dir: which way a map face points (1-6), or 0 for primitives. A draw with outline(c, false)
  // writes 7 instead: the outline pass then draws no lines inside it, only around it.
  ${yu}
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
`,sc=i=>({uPalette:i,uRemap:{value:hr()},uTrans:{value:Ns()},uOutline:{value:-1},uId:{value:1},uInner:{value:1},uFog:{value:new ge(0,0,0,0)},uFill:{value:new he(0,0)},...nc(),...ec(),uPix:{value:1}});function Mu(i,t){return new Ve({glslVersion:Bn,uniforms:{uAtlas:{value:i},...sc(t)},vertexShader:`
      attribute vec2 aUV;
      attribute vec3 aTF;
      varying vec2 vUV;
      varying vec3 vTF;
      ${tc}
      void main() {
        vUV = aUV; vTF = aTF;
        place(position);
      }`,fragmentShader:`
      uniform sampler2D uAtlas;
      ${ic}
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${Co.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${Jl.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx), floor(vTF.z + 0.5));
      }`})}function rc(i){return new Ve({glslVersion:Bn,uniforms:{uColor:{value:7},...sc(i)},vertexShader:`
      ${tc}
      void main() { place(position); }`,fragmentShader:`
      uniform float uColor;
      ${ic}
      void main() { writePixel(palColor(int(uColor + 0.5)), 0.0); }`})}function Su(i){return new Ve({glslVersion:Bn,uniforms:sc(i),vertexShader:`
      attribute vec2 aCD;
      varying vec2 vCD;
      ${tc}
      void main() {
        vCD = aCD;
        place(position);
      }`,fragmentShader:`
      ${ic}
      varying vec2 vCD;
      void main() { writePixel(palColor(int(vCD.x + 0.5)), floor(vCD.y + 0.5)); }`})}function bu(i){let t=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{uPalette:i,uSky:{value:new he(0,0)},uPix:{value:1}},vertexShader:`
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
      uniform float uPix;   // render pixels per screen pixel
      varying vec3 vRay;
      varying vec3 vUp;
      layout(location = 0) out highp vec4 outColor;
      layout(location = 1) out highp vec4 outInfo;
      ${yu}
      void main() {
        float t = clamp(dot(normalize(vRay), normalize(vUp)) / 0.7071, 0.0, 1.0);
        int c = t > bayer4(floor(gl_FragCoord.xy / uPix)) ? int(uSky.x + 0.5) : int(uSky.y + 0.5);
        outColor = vec4(uPalette[c], 1.0);
        outInfo = vec4(0.0);   // no outline, no draw
      }`}),e=new ke(new Hi(2,2),t);return e.frustumCulled=!1,e.renderOrder=-1e9,e.visible=!1,e}function oc(i){return new xn(i,i,{count:2,minFilter:Le,magFilter:Le,generateMipmaps:!1,depthTexture:new Cs(i,i)})}function wu(i,t){let e=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:i.textures[0]},tInfo:{value:i.textures[1]},tDepth:{value:i.depthTexture},uPalette:t,uNear:{value:.05},uFar:{value:2e3},uOrtho:{value:0},uAny:{value:0},uMode:{value:0},uRect:{value:new ge(0,0,1e5,1e5)}},vertexShader:`
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
      }`});return{scene:Ql(e),camera:new Vi,uniforms:e.uniforms}}function ac(i){return new xn(i,i,{type:In,format:cn,minFilter:Le,magFilter:Le,generateMipmaps:!1,depthBuffer:!1})}function Ql(i){let t=new ke(new Hi(2,2),i);t.frustumCulled=!1;let e=new Is;return e.add(t),e}var hu="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function Eu(i){let t=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:null},uDir:{value:new he(1,0)},uR:{value:1},uRect:{value:new ge(0,0,1e5,1e5)}},vertexShader:hu,fragmentShader:`
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
      }`}),e=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},tMask:{value:null},uPalette:i,uNear:{value:.05},uFar:{value:2e3},uOrtho:{value:0}},vertexShader:hu,fragmentShader:`
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
      }`});return{growScene:Ql(t),grow:t.uniforms,paintScene:Ql(e),paint:e.uniforms,camera:new Vi}}function Tu(i,t,{preserve:e=!0}={}){se.enabled=!1;let n;try{n=new xo({canvas:i,antialias:!1,preserveDrawingBuffer:e})}catch(s){let r=typeof WebGL2RenderingContext>"u"?"This browser has no WebGL 2, which BLOCKO3D needs. Try updating it.":"This browser would not start 3D graphics (WebGL 2). Try closing other tabs and reloading, restarting the browser, or updating it. On iPhone and iPad, Lockdown Mode turns WebGL off.";throw new Error(r+" ("+(s&&s.message||s)+")")}return n.outputColorSpace=xi,n.setPixelRatio(1),t&&n.setSize(t,t,!1),n}function Lo(i){return(i.maps||[]).map(t=>{let e=t.data?$l(t.data):null,n=Io(t.w,t.h,t.d,t.origin||[0,0,0],e&&e.length===t.w*t.h*t.d?e:null);return n.name=t.name||"",n})}function Au(i){let t=new Array(Ds).fill(null);return(i.tiles||[]).forEach((e,n)=>{n>0&&n<Ds&&e&&(t[n]=e)}),t}var v_=`
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
`,lc=new Map;for(let i of v_.trim().split(/\n\s*\n/)){let[t,...e]=i.split(`
`),n=t==="space"?" ":t,s=[];e.forEach((r,o)=>[...r].forEach((a,l)=>{a==="#"&&s.push([l,o])})),lc.set(n,s)}function Fs(i,t=1){return Math.max(...String(i).split(`
`).map(e=>[...e].length))*7*t}function Cu(i,t,e,n,s=128,r=200){let o=String(t||"game").split(/\s+/).filter(Boolean);for(let a=4;a>=1;a--){let l=[];for(let u of o){let f=l[l.length-1];f!==void 0&&[...f+" "+u].length*7*a<=240?l[l.length-1]=f+" "+u:l.push(u)}if(!(l.every(u=>[...u].length*7*a<=240)&&l.length*10*a<=r)&&a>1)continue;let h=s-(l.length*10*a>>1);l.forEach((u,f)=>yi(i,u,256-[...u].length*7*a>>1,h+f*10*a,e,n,a,a));return}}function Ru(i,t,e,n,s,r){let o=t,a=e;for(let l of String(i)){if(l===`
`){o=t,a+=10*s;continue}let c=lc.get(l)||lc.get("?");for(let[h,u]of c)r(o+(1+h)*n,a+(1+u)*s);o+=7*n}}var y_=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function yi(i,t,e,n,s,r=null,o=1,a=1){r&&(i.fillStyle=r,Ru(t,e,n,o,a,(c,h)=>{for(let[u,f]of y_)i.fillRect(c+u*o,h+f*a,o,a)})),i.fillStyle=s,Ru(t,e,n,o,a,(c,h)=>i.fillRect(c,h,o,a));let l=String(t).split(`
`);return e+[...l[l.length-1]].length*7*o}function M_(){return{speed:16,loopStart:0,loopEnd:0,notes:Array.from({length:32},()=>({pitch:24,wave:0,vol:0,fx:0}))}}var jn=(i,t)=>(i>>>0).toString(16).padStart(t,"0").slice(-t);function Iu(i){let t=jn(i.speed,2)+jn(i.loopStart,2)+jn(i.loopEnd,2);for(let e of i.notes)t+=jn(e.pitch&63,2)+jn(e.wave&7,1)+jn(e.vol&7,1)+jn(e.fx&7,1);return t}function Uo(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{166}$/.test(t))return null;let e=(s,r)=>parseInt(t.substr(s,r),16),n={speed:Math.max(1,e(0,2)),loopStart:Math.min(32,e(2,2)),loopEnd:Math.min(32,e(4,2)),notes:[]};for(let s=0;s<32;s++){let r=6+s*5;n.notes.push({pitch:e(r,2)&63,wave:e(r+2,1)&7,vol:e(r+3,1)&7,fx:e(r+4,1)&7})}return n}var K_=Iu(M_());var S_=i=>440*Math.pow(2,(i-33)/12),Os=i=>i.speed/120,ur=i=>i<.5?i*4-1:3-i*4;function b_(i,t,e){switch(i){case 0:return ur(t);case 1:return t<.875?t/.875*2-1:1-(t-.875)/.125*2;case 2:return t*2-1;case 3:return t<.5?.7:-.7;case 4:return t<.3?.7:-.7;case 5:return(ur(t)+ur(t*2%1)*.5)*.67;case 7:return(ur(t)+ur(e))*.5;default:return 0}}function w_(i,t=0,e=32){let n=[];for(let s=t;s<e;s++)n.push(s);return Pu(i,n)}function Pu(i,t){let e=Math.max(1,Math.round(Os(i)*22050)),n=new Float32Array(e*t.length),s=0,r=0,o=0,a=0,l=0,c={pitch:0,wave:0,vol:0,fx:0};for(let h=0;h<t.length;h++){let u=t[h],f=u>=0?i.notes[u]:c,g=h>0&&t[h-1]>=0?i.notes[t[h-1]]:f,_=u>=0?u-u%4:0,y=i.notes.slice(_,_+4);for(let m=0;m<e;m++){let d=m/e,A=(h*e+m)/22050,T=f.pitch,b=f.vol/7;switch(f.fx){case 1:T=g.pitch+(f.pitch-g.pitch)*d,b=(g.vol+(f.vol-g.vol)*d)/7;break;case 2:T+=Math.sin(A*Math.PI*2*7)*.5;break;case 3:T=f.pitch*(1-d);break;case 4:b*=d;break;case 5:b*=1-d;break;case 6:case 7:{let I=Math.floor(A*(f.fx===6?30:15))%4;T=y[I].pitch;break}}let F=S_(T);s=(s+F/22050)%1,r=(r+F*1.006/22050)%1;let C;f.wave===6?(l+=F*8/22050,l>=1&&(l%=1,a=Math.random()*2-1),C=a*.7):C=b_(f.wave,s,r),o+=(b-o)*.02,n[h*e+m]=C*o*.35}}return n}function E_(i){if(i.loopEnd>i.loopStart)return[0,i.loopEnd];let t=0;return i.notes.forEach((e,n)=>{e.vol>0&&(t=n+1)}),[0,t]}var dr=64,Lu=64;function T_(i){let t=(i.loopStart?1:0)|(i.loopBack?2:0)|(i.stop?4:0);return jn(t,1)+i.ch.map(e=>jn(e>=0&&e<64?e:Lu,2)).join("")}function Du(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{9}$/.test(t))return null;let e=parseInt(t[0],16),n=[0,1,2,3].map(s=>{let r=parseInt(t.substr(1+s*2,2),16);return r<64?r:Lu});return{loopStart:!!(e&1),loopBack:!!(e&2),stop:!!(e&4),ch:n}}var cc=i=>!i||i.ch.every(t=>t>=64),Uu=i=>i.loopEnd>i.loopStart;function Nu(i,t){let e=0,n=0;for(let s of i.ch){let r=s<64?t[s]:null;if(!r)continue;let o=32*Os(r);n||(n=o),Uu(r)||(e=Math.max(e,o))}return e||n}function A_(i,t){let e=[];for(let n=0;e.length<t;n++)Uu(i)&&n>=i.loopEnd&&(n=i.loopStart),e.push(n<32?n:-1);return e}function R_(i,t){let e=Nu(i,t),n=Math.round(e*22050),s=new Float32Array(Math.max(1,n));for(let r of i.ch){let o=r<64?t[r]:null;if(!o)continue;let a=Pu(o,A_(o,Math.ceil(e/Os(o))));for(let l=0;l<n&&l<a.length;l++)s[l]+=a[l]*.8}return s}function C_(i,t,e){let n=i[t];if(!n||n.stop)return-1;if(n.loopBack){for(let r=t;r>=0;r--)if(i[r]&&i[r].loopStart)return r;return e}let s=t+1;return s<dr&&!cc(i[s])?s:-1}var Do=class{constructor(){this.ctx=null,this.channels=Array.from({length:4},()=>null),this.cache=new Map,this.volume=1,this.muted=!1,this.held=!1}setMuted(t){this.muted=!!t,this.gain&&(this.gain.gain.value=this.muted?0:1)}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.gain.gain.value=this.muted?0:1}if(this.held){this.suspend();return}this.wake()}wake(){this.ctx.state!=="running"&&this.ctx.state!=="closed"?this.ctx.resume().then(()=>{this.held?this.ctx.suspend():this.startPendingMusic()}):this.pendingMusic&&this.startPendingMusic()}get ready(){return!!this.ctx&&this.ctx.state==="running"}buffer(t,e,n,s){let r=t+"|"+n+"|"+s,o=this.cache.get(r);if(!o){let a=w_(e,n,s);o=this.ctx.createBuffer(1,Math.max(1,a.length),22050),o.copyToChannel(a,0),this.cache.set(r,o),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}return o}play(t,e=-1,n=0,s=32){let r=Uo(t);if(!r||!this.ready)return-1;let[o,a]=E_(r);if(o=Math.max(o,n|0),s<32&&(a=Math.min(a,o+Math.max(0,s|0))),a<=o)return-1;(e<0||e>=4)&&(e=this.freeChannel()),this.stop(e);let l=this.ctx.createBufferSource();l.buffer=this.buffer(t,r,o,a);let c=r.loopEnd>r.loopStart&&r.loopEnd>o&&s>=32;c&&(l.loop=!0,l.loopStart=Math.max(0,r.loopStart-o)*Os(r),l.loopEnd=(r.loopEnd-o)*Os(r)),l.connect(this.gain),l.start();let h={src:l,started:this.ctx.currentTime,sfx:r,from:o,loops:c,done:!1};return l.onended=()=>{h.done=!0,this.channels[e]===h&&(this.channels[e]=null)},this.channels[e]=h,e}freeChannel(){let t=0,e=1/0;for(let n=0;n<4;n++){let s=this.channels[n];if(!s)return n;s.started<e&&(e=s.started,t=n)}return t}stop(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];if(n)try{n.src.stop()}catch{}this.channels[e]=null}}release(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];n&&(n.src.loop=!1)}}noteAt(t){let e=this.channels[t];if(!e||!this.ctx)return-1;let n=Os(e.sfx),s=(this.ctx.currentTime-e.started)/n;if(e.loops){let r=e.sfx.loopStart-e.from,o=e.sfx.loopEnd-e.sfx.loopStart;s>=e.sfx.loopEnd-e.from&&(s=r+(s-r)%o)}return e.from+Math.floor(s)}music(t,e,n,s=0){this.musicStop(),!(n<0)&&(this.pendingMusic={getPatterns:t,getSounds:e,n,fadeMs:s},this.ready&&this.startPendingMusic())}startPendingMusic(){let t=this.pendingMusic;if(this.pendingMusic=null,!t||!this.ready)return;let e=t.getPatterns();if(cc(e[t.n]))return;let n=this.ctx.createGain();n.connect(this.gain);let s=this.ctx.currentTime;t.fadeMs>0&&(n.gain.setValueAtTime(0,s),n.gain.linearRampToValueAtTime(1,s+t.fadeMs/1e3));let r={...t,gain:n,cur:t.n,start:t.n,time:s+.05,sources:[],timeline:[]};this.song=r;let o=()=>{if(this.song!==r)return;let a=r.getPatterns(),l=r.getSounds();for(;r.cur>=0&&r.time<this.ctx.currentTime+.4;){let c=a[r.cur],h=cc(c)?0:Nu(c,l);if(!h){r.cur=-1;break}let u="p"+T_(c)+c.ch.map(_=>l[_]?Iu(l[_]):"").join("|"),f=this.cache.get(u);if(!f){let _=R_(c,l);f=this.ctx.createBuffer(1,_.length,22050),f.copyToChannel(_,0),this.cache.set(u,f),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}let g=this.ctx.createBufferSource();g.buffer=f,g.connect(r.gain),g.start(r.time),r.sources.push(g),r.sources.length>8&&r.sources.shift(),r.timeline.push({time:r.time,pattern:r.cur,secs:h}),r.timeline.length>8&&r.timeline.shift(),r.time+=h,r.cur=C_(a,r.cur,r.start)}if(r.cur<0&&this.ctx.currentTime>r.time){this.musicStop();return}r.timer=setTimeout(o,100)};o()}musicStop(t=0){this.pendingMusic=null;let e=this.song;if(!e)return;this.song=null,clearTimeout(e.timer);let n=this.ctx.currentTime+t/1e3;t>0&&(e.gain.gain.setValueAtTime(e.gain.gain.value,this.ctx.currentTime),e.gain.gain.linearRampToValueAtTime(0,n));for(let s of e.sources)try{s.stop(n)}catch{}}musicPosition(){let t=this.song;if(!t||!this.ctx)return null;let e=this.ctx.currentTime;for(let n=t.timeline.length-1;n>=0;n--){let s=t.timeline[n];if(e>=s.time)return e<s.time+s.secs?{pattern:s.pattern,frac:(e-s.time)/s.secs}:null}return null}suspend(){this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.held=!1,this.ctx&&this.wake()}};var No=class{constructor(t,e,n){this.w=t,this.h=e,this.out=new hc,this.prev=null,this.pending=null;let s=Math.max(2,n.length+1);this.bits=Math.max(1,Math.ceil(Math.log2(Math.min(256,s)))),this.trans=n.length<256?n.length:-1;let r=this.out;r.str("GIF89a"),r.u16(t),r.u16(e),r.byte(128|this.bits-1<<4|this.bits-1),r.byte(0),r.byte(0);for(let o=0;o<1<<this.bits;o++){let a=n[o]||0;r.byte(a>>16&255),r.byte(a>>8&255),r.byte(a&255)}r.byte(33),r.byte(255),r.byte(11),r.str("NETSCAPE2.0"),r.byte(3),r.byte(1),r.u16(0),r.byte(0),this.lzw=new uc}add(t,e){let{w:n,h:s,prev:r}=this;if(!r){this.pending={x:0,y:0,w:n,h:s,px:t.slice(),delay:e,trans:!1},this.prev=t.slice();return}let o=n,a=s,l=-1,c=-1;for(let _=0;_<s;_++){let y=_*n,m=-1,d=-1;for(let A=0;A<n;A++)t[y+A]!==r[y+A]&&(m<0&&(m=A),d=A);m>=0&&(m<o&&(o=m),d>l&&(l=d),_<a&&(a=_),c=_)}if(l<0){this.pending.delay+=e;return}this.flush();let h=l-o+1,u=c-a+1,f=new Uint8Array(h*u),g=this.trans;for(let _=0;_<u;_++){let y=(a+_)*n+o;for(let m=0;m<h;m++){let d=t[y+m];f[_*h+m]=g>=0&&d===r[y+m]?g:d,r[y+m]=d}}this.pending={x:o,y:a,w:h,h:u,px:f,delay:e,trans:g>=0}}flush(){let t=this.pending,e=this.out;t&&(this.pending=null,e.byte(33),e.byte(249),e.byte(4),e.byte(4|(t.trans?1:0)),e.u16(Math.max(2,Math.min(65535,Math.round(t.delay)))),e.byte(t.trans?this.trans:0),e.byte(0),e.byte(44),e.u16(t.x),e.u16(t.y),e.u16(t.w),e.u16(t.h),e.byte(0),this.lzw.encode(t.px,Math.max(2,this.bits),e))}finish(){return this.flush(),this.out.byte(59),this.out.bytes()}},hc=class{constructor(){this.buf=new Uint8Array(65536),this.n=0}byte(t){if(this.n===this.buf.length){let e=new Uint8Array(this.buf.length*2);e.set(this.buf),this.buf=e}this.buf[this.n++]=t}u16(t){this.byte(t&255),this.byte(t>>8&255)}str(t){for(let e=0;e<t.length;e++)this.byte(t.charCodeAt(e))}bytes(){return this.buf.slice(0,this.n)}},uc=class{constructor(){this.codes=new Int16Array(4096*256),this.stamp=new Int32Array(4096*256),this.gen=0}encode(t,e,n){let{codes:s,stamp:r}=this,o=1<<e,a=o+1,l=e+1,c=a+1,h=++this.gen,u=0,f=0,g=new Uint8Array(255),_=0;n.byte(e);let y=A=>{if(g[_++]=A,_===255){n.byte(255);for(let T=0;T<255;T++)n.byte(g[T]);_=0}},m=A=>{for(u|=A<<f,f+=l;f>=8;)y(u&255),u>>>=8,f-=8};m(o);let d=t[0];for(let A=1;A<t.length;A++){let T=t[A],b=d<<8|T;if(r[b]===h){d=s[b];continue}m(d),c===4096?(m(o),h=++this.gen,c=a+1,l=e+1):(c>=1<<l&&l++,r[b]=h,s[b]=c++),d=T}if(m(d),m(a),f>0&&y(u&255),_){n.byte(_);for(let A=0;A<_;A++)n.byte(g[A])}n.byte(0)}};var Ht=256,Fu=1e3/60,D_={ArrowLeft:0,KeyA:0,ArrowRight:1,KeyD:1,ArrowUp:2,KeyW:2,ArrowDown:3,KeyS:3,KeyZ:4,KeyC:4,KeyN:4,Space:4,KeyX:5,KeyV:5,KeyM:5,Enter:6,NumpadEnter:6,KeyP:6},Ou=64*1024,Bu=i=>String(i||"game").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"game",kn=(i,t,e)=>Array.isArray(i)?[+i[0]||0,+i[1]||0,+i[2]||0]:[+i||0,+t||0,+e||0];function zu({canvas:i,overlay:t,cart:e,onError:n=console.error,onLog:s=console.log,onRestart:r=()=>location.reload(),onSave:o=()=>{},onCover:a=null,dev:l=null,onDev:c=()=>{}}){let h=!!(l&&l.nocapture),u=Tu(i,Ht,{preserve:!h}),f=u.extensions.has("EXT_color_buffer_float"),g="blocky3d.res",_=1;try{_=f?Math.min(3,Math.max(1,parseInt(localStorage.getItem(g),10)||1)):1}catch{}let y=new Is,m=new Ze(90,1,.05,2e3),d=new Rs(-1,1,1,-1,.05,2e3),A=m,T=oc(Ht*_),b=null,F=[0,6,-10],C=[0,0,0],I=t.getContext("2d");t.width=t.height=Ht;let z=Array.isArray(e.palette)&&e.palette.length===zn?[...e.palette]:[...Qn],E=vu(z),S=wu(T,E);S.uniforms.uNear.value=A.near,S.uniforms.uFar.value=A.far;let D=Eu(E);D.paint.uNear.value=A.near,D.paint.uFar.value=A.far;function tt(p){_=f?Math.min(3,Math.max(1,p|0)):1;try{localStorage.setItem(g,String(_))}catch{}let x=Ht*_;u.setSize(x,x,!1),T.dispose(),T=oc(x),b&&(b[0].dispose(),b[1].dispose(),b=null),_>1&&(b=[ac(x),ac(x)]);let w=S.uniforms;w.tColor.value=T.textures[0],w.tInfo.value=T.textures[1],w.tDepth.value=T.depthTexture}tt(_);let W=bu(E);y.add(W);let et=uu();du(et,Au(e));let Q=Lo(e),j=Array.from({length:64},(p,x)=>e.sfx&&e.sfx[x]||null),ht=j.map(p=>p?Uo(p):null),Z=Array.from({length:dr},(p,x)=>Du(e.music&&e.music[x])),lt=new Do,vt="blocky3d.save."+Bu(e.name),Pt=xu(e),$=hr(),At=Ns(),q=0,ot=-1,ft=-1,at=!0,Ct=null,Lt=0,zt=0,te=null,jt=0,Se=0,B=!1,_e=null,Zt=90,$t=0,Nt=[0,"view","down"],fe=nc(),Dt=ec(),R=[],v=64,V=8,it=new k,rt=[],K=null,Rt=[],pt=!1,St=[0,0,Ht-1,Ht-1],ie=new ki(1,1,1),ut=new bo(1,24,16),yt={map:[],vox:[],cube:[],sphere:[],line:[]},Ut={map:0,vox:0,cube:0,sphere:0,line:0};function Bt(p){let x=yt[p],w=x[Ut[p]];if(!w){if(p==="map")w=new ke(void 0,Mu(et,E)),w.matrixAutoUpdate=!1;else if(p==="vox")w=new ke(void 0,Su(E)),w.matrixAutoUpdate=!1;else if(p==="line"){let P=new rn;P.setAttribute("position",new Ne(new Float32Array(6),3)),w=new So(P,rc(E)),w.frustumCulled=!1}else w=new ke(p==="cube"?ie:ut,rc(E));Object.assign(w.material.uniforms,fe,Dt),x.push(w),y.add(w)}Ut[p]++,w.visible=!0;let L=w.material.uniforms;for(let P=0;P<zn;P++)L.uRemap.value[P]=$[P],L.uTrans.value[P]=At[P];return L.uOutline.value=ft<0?-1:$[ft],L.uInner.value=at?1:0,te?L.uFog.value.set(te[0],te[1],te[2],1):L.uFog.value.w=0,L.uPix.value=_,L.uFill.value.set(Lt,zt),L.uId.value=++Se,ft>=0&&!(l&&l.nooutline)&&(B=!0),w.userData.view=K?K.i:0,K&&K.n++,w}let bt=[[0,0,0]];function Jt(){if(!Ct)return bt;let[p,x,w,L]=Ct,P=Y=>Y>0?Array.from({length:2*L+1},(st,mt)=>(mt-L)*Y):[0],X=[[0,0,0]];for(let Y of P(p))for(let st of P(x))for(let mt of P(w))(Y||st||mt)&&X.push([Y,st,mt]);return X}function Wt(p,[x,w,L]){let P=p.elements;P[12]+=x,P[13]+=w,P[14]+=L}let ae=p=>vi(z[$[(p|0)&31]]??0);function U(p,x,w,L){return p=Math.floor(p),x=Math.floor(x),w=Math.floor(w),L=Math.floor(L),[Math.min(p,w),Math.min(x,L),Math.max(p,w),Math.max(x,L)]}function dt(p){let x=Q[p];if(!x)throw x===null?new Error(`map ${p} belonged to a scene that has since been replaced by scene_load`):new Error(`map ${p} does not exist (there are ${Q.length} maps)`);return x}function J(p){let x=Io(p.w,p.h,p.d,p.origin,p.data.slice());return x.name=p.name||"",x.pos=[...p.pos],x.angle=[...p.angle],x}let nt=Lo(e),_t=[];function Mt(){for(let p of _t)Q[p]&&Q[p].geometry&&Q[p].geometry.dispose(),Q[p]=null;for(_t=[];Q.length&&Q[Q.length-1]===null;)Q.pop()}let kt=new k;function xe(p,x,w,L){return Us(p),kt.set(x,w,L).applyMatrix4(p._inv)}let Ee=4,ee=22,Re=new Array(ee).fill(!1),$e=Array.from({length:Ee},()=>new Array(ee).fill(!1)),Mn=Array.from({length:Ee},()=>new Array(ee).fill(!1)),Mi=Array.from({length:Ee},()=>[[0,0],[0,0]]),dn=.5,zs=[[7,0],[8,1],[9,2],[10,3],[11,4],[12,5],[13,6],[14,7],[15,8],[16,10],[17,11],[18,16]];function gr(p,x,w){let L=X=>!!(p.buttons[X]&&p.buttons[X].pressed),P=X=>Number.isFinite(p.axes[X])?p.axes[X]:0;x[0]=L(14)||P(0)<-dn,x[1]=L(15)||P(0)>dn,x[2]=L(12)||P(1)<-dn,x[3]=L(13)||P(1)>dn,x[4]=L(0)||L(2),x[5]=L(1)||L(3),x[6]=L(9);for(let[X,Y]of zs)x[X]=L(Y);w[0][0]=P(0),w[0][1]=P(1),w[1][0]=P(2),w[1][1]=P(3)}let qi=Array.from({length:Ee},()=>new Array(ee).fill(!1));function Yi(){bi();for(let x of qi)x.fill(!1);for(let x of Mi)x[0][0]=x[0][1]=x[1][0]=x[1][1]=0;let p=[];try{p=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{p=[]}p.filter(x=>x&&x.connected).sort((x,w)=>x.index-w.index).slice(0,Ee).forEach((x,w)=>gr(x,qi[w],Mi[w]));for(let x=0;x<2;x++){let w=oe[x],L=Mi[0][x];Math.hypot(w[0],w[1])>0&&Math.hypot(L[0],L[1])<=Si&&(L[0]=w[0],L[1]=w[1])}for(let x=0;x<Ee;x++)for(let w=0;w<ee;w++)$e[x][w]=Mn[x][w],Mn[x][w]=qi[x][w]||x===0&&(Re[w]||ne[w]||Tt[w]);Tt.fill(!1)}let Si=.15;function Zi(p,x){let w=Mn[x];if(!w)return[0,0];let[L,P]=Mi[x][p?1:0],X=Math.hypot(L,P);if(X>Si){let Ot=Math.min(1,(X-Si)/(1-Si))/X;return[L*Ot,P*Ot]}if(p)return[0,0];let Y=(w[1]?1:0)-(w[0]?1:0),st=(w[3]?1:0)-(w[2]?1:0),mt=Y&&st?Math.SQRT1_2:1;return[Y*mt,st*mt]}let De=0,fn=0,Sn=0,ti=0,ei=0,M=0,O=0,H=0,G=0,N=null,ct=0,xt=0,Et=-1,wt=-1,Vt=[],Gt={0:19,2:20,1:21},Tt=new Array(ee).fill(!1),ne=new Array(ee).fill(!1),oe=[[0,0],[0,0]],de=0,Ce=0,re=null,It=()=>{re&&re(He?0:de,He?0:Ce)},pn=p=>{Re[p]=Tt[p]=!0},Kt=()=>document.pointerLockElement===t,Qe="mouse";window.addEventListener("pointerdown",p=>{Qe=p.pointerType||"mouse"},!0);function bn(p){let x=t.getBoundingClientRect();return[(p.clientX-x.left)/x.width*Ht,(p.clientY-x.top)/x.height*Ht]}function We(){try{let p=t.requestPointerLock();p&&p.catch&&p.catch(()=>{})}catch{}}function bi(){O=ti,H=ei,G=M,ti=ei=M=0}function pe(p){De=[0,1,2].includes(p|0)?p|0:0,t.style.touchAction=De?"none":"";for(let x of[19,20,21])Re[x]=!1;N=null,De!==2&&Kt()&&document.exitPointerLock()}let je=(p,x)=>Vt.findIndex(w=>p>=w[0]&&p<w[0]+w[2]&&x>=w[1]&&x<w[1]+w[3]);t.addEventListener("contextmenu",p=>{De&&p.preventDefault()}),t.addEventListener("mousedown",p=>{if(De){if(Kt()||([fn,Sn]=bn(p)),He){let x=je(fn,Sn);x>=0&&p.button===0&&(wt=x);return}if(De===2&&!Kt()){We();return}Gt[p.button]!==void 0&&pn(Gt[p.button])}}),window.addEventListener("mouseup",p=>{Gt[p.button]!==void 0&&(Re[Gt[p.button]]=!1)}),window.addEventListener("mousemove",p=>{if(De){if(!Kt()&&([fn,Sn]=bn(p),He)){let x=je(fn,Sn);x>=0&&(Et=x)}!He&&(De!==2||Kt())&&(ti+=p.movementX||0,ei+=p.movementY||0)}}),t.addEventListener("wheel",p=>{De&&(p.preventDefault(),M+=p.deltaMode===1?p.deltaY/3:p.deltaMode===2?p.deltaY:p.deltaY/100)},{passive:!1}),t.addEventListener("pointerdown",p=>{if(!(!De||p.pointerType==="mouse"||N!==null)){p.preventDefault(),N=p.pointerId;try{t.setPointerCapture(p.pointerId)}catch{}if((De===1||He)&&([fn,Sn]=bn(p)),ct=p.clientX,xt=p.clientY,He){let x=je(fn,Sn);x>=0&&(wt=x);return}De===1&&pn(19)}}),t.addEventListener("pointermove",p=>{p.pointerId===N&&(De===1&&([fn,Sn]=bn(p)),He||(ti+=p.clientX-ct,ei+=p.clientY-xt),ct=p.clientX,xt=p.clientY)});let ni=p=>{p.pointerId===N&&(N=null,Re[19]=!1)};t.addEventListener("pointerup",ni),t.addEventListener("pointercancel",ni),document.addEventListener("pointerlockchange",()=>{!Kt()&&De===2&&ii&&!He&&Ys(!0)});let tn=()=>Mn.some((p,x)=>p[6]&&!$e[x][6]),Xe=0,Je=null;function _r(){if(Je===null)return Math.random();Je=Je+1831565813>>>0;let p=Je;return p=Math.imul(p^p>>>15,p|1),p^=p+Math.imul(p^p>>>7,p|61),((p^p>>>14)>>>0)/4294967296}let ks={get palette(){return z},set palette(p){z=p},pal(p,x){if(p===void 0){$=hr(),At=Ns();return}$[p&31]=(x??p)&31},palt(p,x=!0){if(p===void 0){At=Ns();return}At[p&31]=x?1:0},bg(p,x){q=$[(p|0)&31],ot=x==null||x===!1?-1:$[(x|0)&31]},outline(p,x=!0){ft=p==null||p===!1?-1:(p|0)&31,at=ft<0||x!==!1},repeat(p,x,w,L=1){let P=st=>+st>0?+st:0,X=[P(p),P(x),P(w)],Y=Math.max(0,Math.min(3,Math.floor(+L)||0));Ct=X.some(st=>st>0)&&Y>0?[...X,Y]:null},fillp(p,x=0){Lt=p==null||p===!1?0:Math.max(0,Math.min(1,+p||0)),zt=x===-1?-1:$[(x|0)&31]},torch(p,x,w,L=2,P=5){if(p===void 0){R=[];return}R.length>=v||R.push([+p||0,+x||0,+w||0,Math.max(0,+L||0),Math.max(0,+P||0)])},fog(p,x=8,w=24){if(p==null||p===!1){te=null;return}te=[$[(p|0)&31],Math.max(0,+x||0),Math.max(0,+w||0)]},cam_set_pos(p,x,w){F.splice(0,3,...kn(p,x,w))},cam_set_lookat(p,x,w){C.splice(0,3,...kn(p,x,w))},cam_set_fov(p){Zt=Math.max(.01,Math.min(.49,+p||.25))*360},cam_set_ortho(p){$t=Math.max(0,+p||0)},cam_set_curve(p,x="view",w="down"){if(x===!0&&(x="xz"),(x===!1||x===void 0||x===null)&&(x="view"),x=String(x),w=String(w),!["view","side"].includes(x)&&!/^(?!(.)\1)[xyz]{1,2}$/.test(x))throw new Error(`cam_set_curve: along is 'view', 'side', 'x', 'y', 'z' or two of x, y, z like 'xz'; got '${x}'`);if(!["down","away"].includes(w)&&!/^[+-][xyz]$/.test(w))throw new Error(`cam_set_curve: push is 'down', 'away' or a direction like '+z' or '-x'; got '${w}'`);Nt=[+p||0,x,w]},clip(p,x,w,L){if(p===void 0)_e=null;else{let[P,X,Y,st]=U(p,x,w,L);_e=[Math.max(0,P),Math.max(0,X),Math.min(Ht-1,Y),Math.min(Ht-1,st)]}pt&&(vc(),xc()),yc()},map_new(p,x,w,L=[0,0,0]){return Q.push(Io(p|0,x|0,w|0,kn(L))),Q.length-1},map_copy(p){return Q.push(J(dt(p))),Q.length-1},map_reload(p){if(p==null){nt.forEach((w,L)=>{Q[L].data.set(w.data),Q[L].dirty=!0});return}let x=nt[p];if(!Number.isInteger(p)||!x){let w=nt.length?`0-${nt.length-1}`:"this cart has none";throw new Error(`map_reload(${p}): only the cart's maps can be reloaded (${w}); copies and map_new maps have no cart data`)}Q[p].data.set(x.data),Q[p].dirty=!0},map_stamp(p,x,w,L,P){let X=dt(p),Y=dt(x),st=Math.floor(+w||0),mt=Math.floor(+L||0),Ot=Math.floor(+P||0);for(let qt=0;qt<X.d;qt++)for(let Ft=0;Ft<X.h;Ft++)for(let le=0;le<X.w;le++){let Me=X.data[le+X.w*(Ft+X.h*qt)];Me&&Po(Y,st+le,mt+Ft,Ot+qt,Me)}},map_box(p,x,w,L,P,X,Y,st){let mt=dt(p),Ot=(Ie,ve)=>Math.max(0,Math.floor(Math.min(+Ie||0,+ve||0))),qt=(Ie,ve,Un)=>Math.min(Un-1,Math.floor(Math.max(+Ie||0,+ve||0))),Ft=Ot(x,P),le=qt(x,P,mt.w),Me=Ot(w,X),Ae=qt(w,X,mt.h),be=Ot(L,Y),Ue=qt(L,Y,mt.d),Te=(st|0)&255;for(let Ie=be;Ie<=Ue;Ie++)for(let ve=Me;ve<=Ae;ve++)for(let Un=Ft;Un<=le;Un++)mt.data[Un+mt.w*(ve+mt.h*Ie)]=Te;mt.dirty=!0},scene_load(p){let x=Array.isArray(e.scenes)?e.scenes:[],w=x[p];if(!w)throw new Error(`scene ${p} does not exist (there are ${x.length} scenes)`);Mt();let L={maps:[],named:{},things:[]};for(let P of w.maps||[]){let X=nt[P.m];if(!X)continue;let Y=J(X);Y.pos=kn(P.pos),Y.angle=kn(P.angle),Q.push(Y);let st=Q.length-1;_t.push(st),L.maps.push(st),P.name&&(L.named[P.name]=st)}for(let P of w.vox||[])L.things.push([P.v|0,...kn(P.pos),+P.yaw||0]);return L},map_set_pos(p,x,w,L){let P=dt(p);P.pos=kn(x,w,L),P._xfDirty=!0},map_set_angle(p,x,w,L){let P=dt(p);P.angle=kn(x,w,L),P._xfDirty=!0},map_set_origin(p,x,w,L){let P=dt(p),X=kn(x,w,L);Us(P);let Y=new k(X[0]-P.origin[0],X[1]-P.origin[1],X[2]-P.origin[2]).applyMatrix4(P._rot);P.pos=[P.pos[0]+Y.x,P.pos[1]+Y.y,P.pos[2]+Y.z],P.origin=X,P._xfDirty=!0},map(p,x=!1){let w=dt(p);mu(w),Us(w);let L=0;for(let P of Jt()){let X=Bt("map");L?X.material.uniforms.uId.value=L:L=X.material.uniforms.uId.value,X.geometry=w.geometry,X.matrix.copy(w._m),P!==bt[0]&&Wt(X.matrix,P),X.material.side=x?Cn:On}},mget(p,x,w,L){return cr(dt(p),Math.floor(x),Math.floor(w),Math.floor(L))},mset(p,x,w,L,P){Po(dt(p),Math.floor(x),Math.floor(w),Math.floor(L),P|0)},msetw(p,x,w,L,P){let X=dt(p),Y=xe(X,x,w,L);Po(X,Math.floor(Y.x),Math.floor(Y.y),Math.floor(Y.z),P|0)},mray(p,x,w,L,P,X,Y,st=100){return qu(dt(p),+x||0,+w||0,+L||0,+P||0,+X||0,+Y||0,+st||0)},mtow(p,x,w,L){let P=dt(p);return Us(P),kt.set(+x||0,+w||0,+L||0).applyMatrix4(P._m),[kt.x,kt.y,kt.z]},wtom(p,x,w,L){let P=xe(dt(p),+x||0,+w||0,+L||0);return[P.x,P.y,P.z]},mgetw(p,x,w,L,P){let X=dt(p),Y=xe(X,x,w,L);if(P===void 0){let st=Math.floor(Y.x),mt=Math.floor(Y.y),Ot=Math.floor(Y.z);return[cr(X,st,mt,Ot),st,mt,Ot]}return Zu(X,Y.x,Y.y,Y.z,+P)},vox(p,x,w,L,P=0,X=0,Y=0,st=1,mt=st,Ot=st){let qt=p|0;if(qt<0||qt>=Xi)throw new Error(`vox ${p} does not exist (models are 0-${Xi-1})`);let Ft=Pt[qt];if(!Ft)return;let le=gu(Ft),Me=null;for(let Ae of Jt()){let be=Bt("vox");be.geometry=le,Me?(be.matrix.copy(Me),Wt(be.matrix,Ae)):(_u(Ft,[+x||0,+w||0,+L||0],[+P||0,+X||0,+Y||0],[+st,+mt,+Ot],be.matrix),Me=be.matrix)}},cube(p,x,w,L=1,P=7){for(let[X,Y,st]of Jt()){let mt=Bt("cube");mt.position.set(p+X,x+Y,w+st),mt.scale.setScalar(L),mt.material.uniforms.uColor.value=P&31}},sphere(p,x,w,L=.5,P=7){for(let[X,Y,st]of Jt()){let mt=Bt("sphere");mt.position.set(p+X,x+Y,w+st),mt.scale.setScalar(L),mt.material.uniforms.uColor.value=P&31}},line3(p,x,w,L,P,X,Y=7){for(let[st,mt,Ot]of Jt()){let qt=Bt("line"),Ft=qt.geometry.attributes.position;Ft.array.set([p+st,x+mt,w+Ot,L+st,P+mt,X+Ot]),Ft.needsUpdate=!0,qt.material.uniforms.uColor.value=Y&31}},print(p,x,w,L=7,P=null,X=1,Y=X){x===void 0&&(x=0,w=jt),X=Math.max(1,Math.round(+X||1)),Y=Math.max(1,Math.round(+Y||X));let st=P!=null&&P!==!1&&P>=0,mt=yi(I,p,x|0,w|0,ae(L),st?ae(P):null,X,Y);return jt=(w|0)+10*Y*String(p).split(`
`).length,mt},rect(p,x,w,L,P=7){let[X,Y,st,mt]=U(p,x,w,L);I.fillStyle=ae(P),I.fillRect(X,Y,st-X+1,1),I.fillRect(X,mt,st-X+1,1),I.fillRect(X,Y,1,mt-Y+1),I.fillRect(st,Y,1,mt-Y+1)},rectfill(p,x,w,L,P=7){let[X,Y,st,mt]=U(p,x,w,L);I.fillStyle=ae(P),I.fillRect(X,Y,st-X+1,mt-Y+1)},printh(...p){s(p.map(String).join(" "))},sfx(p,x=-1,w=0,L=32){if(p===-1){lt.stop(x);return}if(p===-2){lt.release(x);return}let P=typeof p=="string"?p:j[p|0];if(typeof p=="string"&&!Uo(p))throw new Error("sfx: that string is not a sound from the Sfx tab");P&&lt.play(P,x<4?x:-1,w,L)},music(p,x=0){if(p<0){lt.musicStop(x);return}if((p|0)>=dr)throw new Error(`music ${p} does not exist (patterns are 0-${dr-1})`);lt.music(()=>Z,()=>ht,p|0,x)},save(p){try{if(p==null)return localStorage.removeItem(vt),o(null),!0;let x=JSON.stringify(p);if(x.length>Ou)throw new Error(`save: data is too big (${x.length} characters, the limit is ${Ou})`);return localStorage.setItem(vt,x),o(x),!0}catch(x){if(x.message.startsWith("save:"))throw x;return!1}},load(){try{let p=localStorage.getItem(vt);return p===null?null:JSON.parse(p)}catch{return null}},btn(p,x=0){let w=Mn[x|0];return!!(w&&w[p|0])},mouse_set_mode(p){pe(p)},mouse_pos(){return[fn,Sn]},mouse_delta(){return[O,H]},mouse_wheel(){return G},mouse_locked(){return Kt()},mouse_ray(){if(De!==2)return _c(fn,Sn);let p=Rt.length?Rt[0].rect:St;return _c((p[0]+p[2]+1)/2,(p[1]+p[3]+1)/2)},stick(p=0,x=0){return Zi(p|0,x|0)},btnp(p,x=0){let w=Mn[x|0];return!!(w&&w[p|0]&&!$e[x|0][p|0])},time(){return Xe/60},menuitem(p,x,w){let L=Number(p);if(!Number.isInteger(L)||L<1||L>5)throw new Error(`menuitem(${p}, ...): the slot is 1 to 5`);if(x==null){wi[L]=null;return}let P=wi[L];wi[L]={label:String(x).slice(0,16),fn:typeof w=="function"?w:P?P.fn:null}},touch_set_mode(p,x=0){de=[0,1,2,3].includes(p|0)?p|0:0,Ce=[0,1,2].includes(x|0)?x|0:0,Ce!==1&&(oe[1][0]=oe[1][1]=0),It()},freeze(p,x){Hs=Math.max(0,Math.floor(+p||0)),Gs=typeof x=="function"?x:null},t(){return Xe/60},rnd(p=1){let x=_r();return Array.isArray(p)?p[Math.floor(x*p.length)]:x*p},srand(p){Je=p==null?null:Math.round(Number(p)*65536)>>>0},flr:Math.floor,ceil:Math.ceil,abs:Math.abs,sqrt:Math.sqrt,min:Math.min,max:Math.max,sgn(p){return p<0?-1:1},mid(p,x,w){return Math.max(Math.min(p,x),Math.min(Math.max(p,x),w))},sin(p){return Math.sin(p*yn)},cos(p){return Math.cos(p*yn)},atan2(p,x){return(Math.atan2(x,p)/yn+1)%1},dist(p,x){let w=Y=>Array.isArray(Y)?Y:Y&&typeof Y=="object"?"z"in Y?[Y.x,Y.y,Y.z]:[Y.x,Y.y]:[+Y],L=w(p),P=w(x),X=0;for(let Y=0;Y<Math.max(L.length,P.length);Y++){let st=(+L[Y]||0)-(+P[Y]||0);X+=st*st}return Math.sqrt(X)},dir3(p=0,x=0){let w=Math.cos(x*yn);return[Math.sin(p*yn)*w,Math.sin(x*yn),Math.cos(p*yn)*w]},yaw_to(p,x){return(Math.atan2(+p||0,+x||0)/yn+1)%1},angdiff(p,x){return((x-p)%1+1.5)%1-.5},cam_orbit(p,x=0,w=0,L=8){let P=kn(p&&!Array.isArray(p)&&typeof p=="object"?[p.x,p.y,p.z]:p),X=ks.dir3(x,w);F.splice(0,3,P[0]-X[0]*L,P[1]-X[1]*L,P[2]-X[2]*L),C.splice(0,3,...P)},lerp(p,x,w){return Array.isArray(p)?p.map((L,P)=>L+((Array.isArray(x)?x[P]:x)-L)*w):p+(x-p)*w},mpush(p,x,w,L,P){let X=Array.isArray(p)?p:[p];x=+x||0,w=+w||0,L=+L||0;let Y=0,st=0,mt=0,Ot=-1,qt=.5;for(let le=0;le<3;le++){let Me=!1;for(let Ae of X){let be=ks.mgetw(Ae,x,w,L,P);if(!be[0])continue;let[,,,,Ue,Te,Ie,ve]=be;x+=Ue*ve,w+=Te*ve,L+=Ie*ve,Y+=Ue*ve,st+=Te*ve,mt+=Ie*ve,Te>qt&&(qt=Te,Ot=Ae|0),Me=!0}if(!Me)break}let Ft=Math.hypot(Y,st,mt);return Ft>1e-9?[x,w,L,Y/Ft,st/Ft,mt/Ft,Ot]:[x,w,L,0,0,0,Ot]},textw(p,x=1){return Fs(String(p))*Math.max(1,Math.round(+x||1))},printc(p,x,w=7,L=null,P=1,X=P){let[Y,,st]=_e||St;return ks.print(p,Y+Math.floor((st-Y+1-ks.textw(p,P))/2),x,w,L,P,X)}},Wu=new k,Xu=new k;function qu(p,x,w,L,P,X,Y,st){let mt=[0,0,0,0,0,0,0,0];if(!(P||X||Y))return mt;Us(p);let Ot=Wu.set(x,w,L).applyMatrix4(p._inv),qt=Xu.set(P,X,Y).transformDirection(p._inv),Ft=[Ot.x,Ot.y,Ot.z],le=[qt.x,qt.y,qt.z],Me=[p.w,p.h,p.d],Ae=0,be=st,Ue=-1;for(let Xt=0;Xt<3;Xt++){if(Math.abs(le[Xt])<1e-12){if(Ft[Xt]<0||Ft[Xt]>=Me[Xt])return mt;continue}let ye=(0-Ft[Xt])/le[Xt],En=(Me[Xt]-Ft[Xt])/le[Xt];if(ye>En&&([ye,En]=[En,ye]),ye>Ae&&(Ae=ye,Ue=Xt),En<be&&(be=En),Ae>be)return mt}let Te=[0,0,0],Ie=[0,0,0],ve=[0,0,0],Un=[0,0,0],on=[0,0,0];for(let Xt=0;Xt<3;Xt++){let ye=Ft[Xt]+le[Xt]*Ae;Te[Xt]=Math.min(Me[Xt]-1,Math.max(0,Math.floor(Xt===Ue?ye+Math.sign(le[Xt])*1e-7:ye))),Ie[Xt]=Math.sign(le[Xt]),Un[Xt]=Ie[Xt]?Math.abs(1/le[Xt]):1/0,ve[Xt]=Ie[Xt]>0?(Te[Xt]+1-Ft[Xt])/le[Xt]:Ie[Xt]<0?(Te[Xt]-Ft[Xt])/le[Xt]:1/0}Ue>=0&&(on[Ue]=-Ie[Ue]);let oi=Ae;for(;;){let Xt=cr(p,Te[0],Te[1],Te[2]);if(Xt)return[Xt,Te[0],Te[1],Te[2],on[0],on[1],on[2],oi];let ye=ve[0]<ve[1]?ve[0]<ve[2]?0:2:ve[1]<ve[2]?1:2;if(oi=ve[ye],oi>be||(Te[ye]+=Ie[ye],Te[ye]<0||Te[ye]>=Me[ye]))return mt;ve[ye]+=Un[ye],on[0]=on[1]=on[2]=0,on[ye]=-Ie[ye]}}let xr=new Ze(90,1,.05,2e3),Vn=new k,Yu=new k,Vs=new Rs(-1,1,1,-1,.05,2e3);function _c(p,x){let w=null;for(let Ot=Rt.length-1;Ot>=0&&!w;Ot--){let qt=Rt[Ot].rect;p>=qt[0]&&p<qt[2]+1&&x>=qt[1]&&x<qt[3]+1&&(w=Rt[Ot])}w||(w={rect:_e||St,pos:F,look:C,fov:Zt,ortho:$t});let[L,P,X,Y]=w.rect,st=(p-L)/(X-L+1)*2-1,mt=1-(x-P)/(Y-P+1)*2;if(w.ortho>0){Oo(Vs,w),Vs.updateMatrixWorld();let Ot=Yu.set(st,mt,-1).unproject(Vs);return Vn.set(st,mt,1).unproject(Vs).sub(Ot).normalize(),Ot.addScaledVector(Vn,-Vs.near),[Ot.x,Ot.y,Ot.z,Vn.x,Vn.y,Vn.z]}return Oo(xr,w),xr.updateMatrixWorld(),Vn.set(st,mt,.5).unproject(xr).sub(xr.position).normalize(),[w.pos[0],w.pos[1],w.pos[2],Vn.x,Vn.y,Vn.z]}function Oo(p,x){let w=x.rect[2]-x.rect[0]+1,L=x.rect[3]-x.rect[1]+1;if(p.position.set(...x.pos),p.lookAt(...x.look),p.isOrthographicCamera){let P=(w>=L?x.ortho:x.ortho*w/L)/2,X=(L>=w?x.ortho:x.ortho*L/w)/2;p.left=-P,p.right=P,p.top=X,p.bottom=-X}else p.aspect=w/L,p.fov=w>L?2*Math.atan(Math.tan(x.fov*Math.PI/360)*L/w)*180/Math.PI:x.fov;p.updateProjectionMatrix()}function Zu(p,x,w,L,P){let X=null,Y=-1,st=Math.floor(x-P),mt=Math.floor(x+P),Ot=Math.floor(w-P),qt=Math.floor(w+P),Ft=Math.floor(L-P),le=Math.floor(L+P);for(let Ae=Ft;Ae<=le;Ae++)for(let be=Ot;be<=qt;be++)for(let Ue=st;Ue<=mt;Ue++){let Te=cr(p,Ue,be,Ae);if(!Te)continue;let Ie=Math.max(Ue,Math.min(x,Ue+1)),ve=Math.max(be,Math.min(w,be+1)),Un=Math.max(Ae,Math.min(L,Ae+1)),on=x-Ie,oi=w-ve,Xt=L-Un,ye=Math.hypot(on,oi,Xt);if(ye>=P)continue;let En;if(ye>1e-6)En=P-ye,on/=ye,oi/=ye,Xt/=ye;else{let Cr=[[x-Ue,-1,0,0],[Ue+1-x,1,0,0],[w-be,0,-1,0],[be+1-w,0,1,0],[L-Ae,0,0,-1],[Ae+1-L,0,0,1]].reduce((Pc,Lc)=>Lc[0]<Pc[0]?Lc:Pc);En=P+Cr[0],on=Cr[1],oi=Cr[2],Xt=Cr[3]}En>Y&&(Y=En,X=[Te,Ue,be,Ae,on,oi,Xt,En])}if(!X)return[0,0,0,0,0,0,0,0];let Me=new k(X[4],X[5],X[6]).applyMatrix4(p._rot);return X[4]=Me.x,X[5]=Me.y,X[6]=Me.z,X}let Hn={},ii=!1,vr=0,Bo=0,yr=0,Mr=!1,Hs=0,Gs=null;function xc(){K={i:rt.length,rect:_e||St,n:0},rt.push(K)}function vc(){K&&(K.pos=[...F],K.look=[...C],K.fov=Zt,K.ortho=$t,K.bg=q,K.bg2=ot,K.curve=Nt)}let Ws=!1;function yc(){Ws&&(I.restore(),Ws=!1),_e&&(I.save(),I.beginPath(),I.rect(_e[0],_e[1],_e[2]-_e[0]+1,_e[3]-_e[1]+1),I.clip(),Ws=!0)}function zo(){for(let p in Ut)Ut[p]=0;R=[],Ws&&(I.restore(),Ws=!1),I.clearRect(0,0,Ht,Ht),yc(),jt=0,Se=0,B=!1,rt=[],xc(),pt=!0}function Xs(p,x,w,L,P){p?(p.viewport.set(x,w,L,P),p.scissor.set(x,w,L,P),p.scissorTest=!0):(u.setViewport(x,w,L,P),u.setScissor(x,w,L,P),u.setScissorTest(!0))}function ko(){pt=!1,vc();for(let w in yt)for(let L=Ut[w];L<yt[w].length;L++)yt[w][L].visible=!1;jl(E,z);let p=rt.filter(w=>w.n>0);p.length||(p=[{i:-1,rect:St,pos:[...F],look:[...C],fov:Zt,ortho:$t,bg:q,bg2:ot,curve:Nt}]);let x=Ht*_;(p.length>1||p[0].rect!==St)&&(u.setRenderTarget(null),Xs(null,0,0,x,x),u.setClearColor(z[q]??0,1),u.clear());for(let w of p)Ku(w,p.length>1);for(let w of[T,...b||[]])w.viewport.set(0,0,x,x),w.scissor.set(0,0,x,x),w.scissorTest=!1;u.setRenderTarget(null),u.setViewport(0,0,x,x),u.setScissorTest(!1),Rt=p.map(w=>({rect:w.rect,pos:w.pos,look:w.look,fov:w.fov,ortho:w.ortho}))}function $u(p){let[x,w,L]=p.curve||[0,"view","down"],P=p.look[0]-p.pos[0],X=p.look[2]-p.pos[2],Y=Math.hypot(P,X);Y<1e-6?(P=0,X=1):(P/=Y,X/=Y);let st={x:[1,0,0],y:[0,1,0],z:[0,0,1]},mt=w==="view"?[[P,0,X]]:w==="side"?[[X,0,-P]]:[...w].map(Ft=>st[Ft]),Ot=L==="down"?[0,-1,0]:L==="away"?[P,0,X]:st[L[1]].map(Ft=>L[0]==="-"?-Ft:Ft),qt=fe;qt.uCurve.value.set(x,p.look[0],p.look[1],p.look[2]),qt.uCurveA.value.set(...mt[0]),qt.uCurveB.value.set(...mt[1]||[0,0,0]),qt.uCurveP.value.set(...Ot);for(let Ft of["map","vox","cube","sphere"])for(let le of yt[Ft])le.frustumCulled=x===0}function Ju(){let p=R;if(p.length>V){let[x,w,L]=A.position.toArray();p=p.map(P=>[(P[0]-x)**2+(P[1]-w)**2+(P[2]-L)**2,P]).sort((P,X)=>P[0]-X[0]).slice(0,V).map(P=>P[1])}Dt.uTorchN.value=p.length,p.length&&(A.updateMatrixWorld(),p.forEach(([x,w,L,P,X],Y)=>{it.set(x,w,L).applyMatrix4(A.matrixWorldInverse),Dt.uTorch.value[Y].set(it.x,it.y,it.z,P),Dt.uTorchFar.value[Y]=X}))}function Ku(p,x){let[w,L,P,X]=p.rect,Y=w*_,st=(Ht-1-X)*_,mt=(P-w+1)*_,Ot=(X-L+1)*_;if(x)for(let le in yt)for(let Me=0;Me<Ut[le];Me++)yt[le][Me].visible=yt[le][Me].userData.view===p.i;A=p.ortho>0?d:m,Oo(A,p),S.uniforms.uOrtho.value=D.paint.uOrtho.value=p.ortho>0?1:0,$u(p),Ju(),W.visible=p.bg2>=0,W.visible&&(W.material.uniforms.uSky.value.set(p.bg,p.bg2),W.material.uniforms.uPix.value=_),Xs(T,Y,st,mt,Ot),u.setRenderTarget(T),u.setClearColor(z[p.bg]??0,1),u.clear(),u.render(y,A);let qt=S.uniforms;if(qt.uAny.value=B?1:0,qt.uRect.value.set(Y,st,Y+mt-1,st+Ot-1),_===1||!B){qt.uMode.value=0,u.setRenderTarget(null),Xs(null,Y,st,mt,Ot),u.render(S.scene,S.camera);return}let Ft=D;Ft.grow.uRect.value.set(Y,st,Y+mt-1,st+Ot-1),qt.uMode.value=1;for(let le of b)Xs(le,Y,st,mt,Ot);u.setRenderTarget(b[0]),u.render(S.scene,S.camera),Ft.grow.uR.value=_-1,Ft.grow.tMask.value=b[0].texture,Ft.grow.uDir.value.set(1,0),u.setRenderTarget(b[1]),u.render(Ft.growScene,Ft.camera),Ft.grow.tMask.value=b[1].texture,Ft.grow.uDir.value.set(0,1),u.setRenderTarget(b[0]),u.render(Ft.growScene,Ft.camera),Ft.paint.tColor.value=T.textures[0],Ft.paint.tInfo.value=T.textures[1],Ft.paint.tDepth.value=T.depthTexture,Ft.paint.tMask.value=b[0].texture,u.setRenderTarget(null),Xs(null,Y,st,mt,Ot),u.render(Ft.paintScene,Ft.camera)}function $i(p){try{return p(),!0}catch(x){return Rr(),n(x),!1}}let qs=h?["Resume","Restart"]:["Resume","Restart","Screenshot","Capture GIF"];a&&qs.push("Capture cover"),f&&qs.push("Resolution"),l&&qs.push("FPS","Capture","Outlines");let wi=[],Mc=()=>{let p=[];for(let x=1;x<=5;x++)wi[x]&&p.push({slot:x,label:wi[x].label});return[qs[0],...p,...qs.slice(1)]},He=!1,mn=0,wn="",si=0,Sc=0,ri=document.createElement("canvas");ri.width=ri.height=Ht,ri.style.cssText="position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;display:none",t.after(ri);let Vo=ri.getContext("2d");function Ys(p){He=p,It(),Et=wt=-1;for(let x of[19,20,21])Re[x]=!1;ri.style.display=p?"block":"none",p?(mn=0,wn="",Sc=0,lt.suspend(),Kt()&&document.exitPointerLock()):(Vo.clearRect(0,0,Ht,Ht),lt.resume(),De===2&&Qe==="mouse"&&We())}function Qu(){let p=Vo;p.clearRect(0,0,Ht,Ht),p.fillStyle="rgba(0, 0, 0, 0.45)",p.fillRect(0,0,Ht,Ht);let x=Mc();mn=Math.min(mn,x.length-1);let w=l?168:156,L=26+x.length*14,P=Ht-w>>1,X=Ht-L>>1;p.fillStyle=vi(Qn[0]),p.fillRect(P,X,w,L),p.fillStyle=vi(Qn[7]),p.fillRect(P,X,w,1),p.fillRect(P,X+L-1,w,1),p.fillRect(P,X,1,L),p.fillRect(P+w-1,X,1,L),yi(p,"Paused",P+(w-Fs("Paused")>>1),X+4,vi(Qn[6])),Vt=x.map((Y,st)=>[P+4,X+19+st*14,w-8,14]),x.forEach((Y,st)=>{let mt=st===mn,Ot=Ft=>Ft?"on":"off",qt=typeof Y=="object"?Y.label:Y==="Resolution"?`Resolution < ${_}x >`:Y==="FPS"?`FPS: ${Ot(l.fps)}`:Y==="Capture"?`GIF+Screenshot: ${Ot(!l.nocapture)}`:Y==="Outlines"?`Outlines: ${Ot(!l.nooutline)}`:Y;yi(p,(mt?"> ":"  ")+qt,P+8,X+20+st*14,vi(Qn[mt?10:7]))}),wn&&performance.now()<si&&yi(p,wn,Ht-Fs(wn)>>1,X+L+6,vi(Qn[11]),vi(Qn[0]))}function ju(){let p=Ht*_,x=document.createElement("canvas");x.width=x.height=p;let w=x.getContext("2d");w.imageSmoothingEnabled=!1,w.drawImage(i,0,0,p,p),w.drawImage(t,0,0,p,p);let L=bc("png");x.toBlob(P=>{P&&wc(P,L)},"image/png"),wn="Screenshot saved",si=performance.now()+1500,s("screenshot saved: "+L)}function bc(p){let x=new Date().toISOString().slice(0,19).replace(/[-:]/g,"").replace("T","_");return`${Bu(e.name)}_${x}.${p}`}function wc(p,x){let w=document.createElement("a");w.href=URL.createObjectURL(p),w.download=x,document.body.append(w),w.click(),w.remove(),setTimeout(()=>URL.revokeObjectURL(w.href),2e3)}let Ec=10,Zs=2,Sr=Ec*60/Zs,Ho=[],Ji=0,Ki=0,Go=-1/0,br=!1,Qi=[],Wo=new Map,wr=null;function td(){Ji=Ki=0,Go=-1/0,Qi=[],Wo=new Map}function ed(p){let x=Wo.get(p);if(x!==void 0)return x;if(Qi.length<255)x=Qi.push(p)-1;else{let w=1/0;for(let L=0;L<Qi.length;L++){let P=Qi[L],X=(p&255)-(P&255),Y=(p>>8&255)-(P>>8&255),st=(p>>16&255)-(P>>16&255),mt=X*X+Y*Y+st*st;mt<w&&(w=mt,x=L)}}return Wo.set(p,x),x}function nd(){if(h||Mr||br||Xe-Go<Zs)return;if(Go=Xe,!wr){let Y=document.createElement("canvas");Y.width=Y.height=Ht,wr=Y.getContext("2d",{willReadFrequently:!0}),wr.imageSmoothingEnabled=!1}let p=wr;p.fillStyle="#000",p.fillRect(0,0,Ht,Ht),p.drawImage(i,0,0,Ht,Ht),p.drawImage(t,0,0,Ht,Ht);let x=new Uint32Array(p.getImageData(0,0,Ht,Ht).data.buffer),w=Ho[Ji];w||(w=Ho[Ji]={px:new Uint8Array(Ht*Ht),f:0});let L=w.px,P=-1,X=0;for(let Y=0;Y<x.length;Y++){let st=x[Y]&16777215;st!==P&&(P=st,X=ed(st)),L[Y]=X}w.f=Xe,Ji=(Ji+1)%Sr,Ki<Sr&&Ki++}async function id(){if(br)return;if(Ki<2){wn="Nothing recorded yet",si=performance.now()+1500;return}br=!0;let p=bc("gif");try{let x=[];for(let st=0;st<Ki;st++)x.push(Ho[(Ji-Ki+st+Sr)%Sr]);let w=x[x.length-1].f+Zs-Ec*60;x=x.filter(st=>st.f>=w);let L=Qi.map(st=>(st&255)<<16|st&65280|st>>16&255),P=new No(Ht,Ht,L),X=st=>Math.round((st-x[0].f)*100/60),Y=performance.now();for(let st=0;st<x.length;st++){let mt=st+1<x.length?x[st+1].f:x[st].f+Zs;P.add(x[st].px,X(mt)-X(x[st].f)),performance.now()-Y>30&&(wn=`Saving GIF ${Math.floor(st*100/x.length)}%`,si=1/0,await new Promise(Ot=>setTimeout(Ot,0)),Y=performance.now())}wc(new Blob([P.finish()],{type:"image/gif"}),p),wn="GIF saved",si=performance.now()+1500,s(`gif saved: ${p} (${((x[x.length-1].f+Zs-x[0].f)/60).toFixed(1)} s)`)}catch(x){wn="GIF failed",si=performance.now()+1500,s("gif failed: "+(x&&x.message))}finally{br=!1}}function sd(){h&&Xo();let p=document.createElement("canvas");p.width=p.height=Ht;let x=p.getContext("2d");x.imageSmoothingEnabled=!1,x.drawImage(i,0,0,Ht,Ht),x.drawImage(t,0,0),a(p.toDataURL("image/png")),wn="Cover captured",si=performance.now()+1500}function rd(){let p=L=>Mn.some((P,X)=>P[L]&&!$e[X][L]);if(++Sc<15)return;Et>=0&&(mn=Et,Et=-1);let x=Mc();if(wt>=0)return mn=Math.min(wt,x.length-1),wt=-1,$s(x[mn],4);p(2)&&(mn=(mn+x.length-1)%x.length),p(3)&&(mn=(mn+1)%x.length);let w=x[mn];(p(0)||p(1))&&(w==="Resolution"?Tc(p(1)?1:-1):w==="FPS"||w==="Capture"||w==="Outlines"?$s(w):typeof w=="object"&&$s(w,p(1)?1:0)),p(6)?$s("Resume"):(p(4)||p(5))&&$s(w,p(4)?4:5)}function od(p,x){let w=wi[p];if(!w||!w.fn)return Ys(!1);let L=!1;$i(()=>{L=w.fn(x)===!0})&&(L||Ys(!1))}function $s(p,x=4){typeof p=="object"?od(p.slot,x):p==="Resume"?Ys(!1):p==="Restart"?(Rr(),r()):p==="Screenshot"?ju():p==="Capture GIF"?id():p==="Capture cover"?sd():p==="Resolution"?Tc(1):p==="FPS"?(l.fps=!l.fps,Ac(),c(l,!1)):p==="Outlines"?(l.nooutline=!l.nooutline,Xo(),c(l,!1)):p==="Capture"&&(l.nocapture=!l.nocapture,wn="Running again...",si=performance.now()+3e3,c(l,!0))}function Tc(p){tt((_-1+p+3)%3+1),Xo()}function Xo(){I.clearRect(0,0,Ht,Ht),zo(),!(Hn._draw&&!$i(Hn._draw))&&ko()}let Er=document.createElement("div");Er.style.cssText="position:absolute;left:50%;top:2px;transform:translateX(-50%);white-space:pre;padding:1px 4px;font:600 11px/1.3 ui-monospace,monospace;color:#fff;background:rgba(0,0,0,0.6);pointer-events:none;display:none;z-index:5",ri.after(Er);let Js=0,Tr=0,Ar=performance.now();function Ac(){Er.style.display=l&&l.fps?"block":"none",Js=Tr=0,Ar=performance.now()}Ac();function ad(p){if(!l||!l.fps)return;Js++,Tr+=p;let x=performance.now();x-Ar>=500&&(Er.textContent=`${Math.round(Js*1e3/(x-Ar))} fps  ${(Tr/Js).toFixed(1)} ms`,Js=Tr=0,Ar=x)}function Rc(){if(Yi(),He)return rd(),ii;if(tn())return Ys(!0),!0;if(Xe++,Hs>0){let p=Gs;if(Hs--,Hs===0&&Gs===p&&(Gs=null),p&&!$i(p))return!1}else if(Hn._update&&!$i(Hn._update))return!1;return!0}function Cc(){return He?(Qu(),!0):(zo(),Hn._draw&&!$i(Hn._draw)?!1:(ko(),nd(),!0))}function Ic(p){if(!ii||Mr)return;let x=performance.now();yr+=Math.min(p-Bo,100),Bo=p;let w=0;for(;yr>=Fu&&w<4;)if(yr-=Fu,w++,!Rc()||!ii)return;w>0&&!Cc()||(w>0&&ad(performance.now()-x),vr=requestAnimationFrame(Ic))}function ld(p=1,x=!0){if(Mr=!0,cancelAnimationFrame(vr),!ii)return p===0;for(let w=0;w<p;w++)if(!Rc()||!ii||(x||w===p-1)&&!Cc())return!1;return!0}function cd(p){return Hn=p||{},zo(),ko(),Hn._init&&!$i(Hn._init)?!1:(ii=!0,Bo=performance.now(),vr=requestAnimationFrame(Ic),!0)}function Rr(){ii=!1,cancelAnimationFrame(vr),lt.stop(),lt.musicStop(),Kt()&&document.exitPointerLock()}function hd(){Rr();for(let p of Q)p&&p.geometry&&p.geometry.dispose();Q.splice(0,Q.length,...Lo(e)),_t=[],z=Array.isArray(e.palette)&&e.palette.length===zn?[...e.palette]:[...Qn],$=hr(),At=Ns(),q=0,ot=-1,ft=-1,at=!0,te=null,Lt=0,zt=0,Ct=null,jt=0,F.splice(0,3,0,6,-10),C.splice(0,3,0,0,0),Zt=90,$t=0,_e=null,Rt=[],Nt=[0,"view","down"],td(),Xe=0,yr=0,Hs=0,Gs=null,Je=null,Mr=!1,de=Ce=0;for(let p of oe)p[0]=p[1]=0;It(),wi=[],pe(0),ti=ei=M=O=H=G=0;for(let p of[Re,ne,Tt])p.fill(!1);for(let p of Mn)p.fill(!1);for(let p of $e)p.fill(!1);He=!1,Et=wt=-1,ri.style.display="none",Vo.clearRect(0,0,Ht,Ht),lt.resume(),I.clearRect(0,0,Ht,Ht)}function ud(p,x){He||(ti+=+p||0,ei+=+x||0)}function dd(p,x,w=0){let L=oe[w?1:0];L[0]=+p||0,L[1]=+x||0}function fd(p,x){ne[p]=!!x,x&&(Tt[p]=!0)}let ji=!1;try{ji=localStorage.getItem("blocky3d.mute")==="1"}catch{}lt.setMuted(ji);function pd(p){ji=!!p,lt.setMuted(ji);try{localStorage.setItem("blocky3d.mute",ji?"1":"0")}catch{}}function md(p,x){x&&lt.unlock();let w=D_[p.code];w!==void 0&&(Re[w]=x,x&&(Tt[w]=!0),p.preventDefault())}return{api:ks,start:cd,stop:Rr,reset:hd,step:ld,key:md,maps:Q,renderer:u,unlockAudio:()=>lt.unlock(),setButton:fd,setStick:dd,touchDelta:ud,setMuted:pd,set onTouchMode(p){re=p,It()},get touchMode(){return He?0:de},get touchRight(){return He?0:Ce},get muted(){return ji},get paused(){return He},get scale(){return _},setScale:tt}}var U_=`
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
`,fr=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,pr={pause:fr('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>'),sound:fr('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),muted:fr('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>'),full:fr('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),exitFull:fr('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>')};function dc(i=document){let t=i.createElement("style");t.id="b3d-style",t.textContent=U_,i.head.prepend(t);let e=i.createElement("div");return e.id="b3d-shell",e.innerHTML=`
  <div id="screen">
    <canvas id="gl" width="256" height="256"></canvas>
    <canvas id="ui" width="256" height="256"></canvas>
  </div>
  <div class="b3d-sys">
    <button class="b3d-pause" title="Pause (Enter)" aria-label="Pause">${pr.pause}</button>
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
  </div>`,i.body.prepend(e),{canvas:i.getElementById("gl"),overlay:i.getElementById("ui")}}function fc(i,t=document){let e=t.getElementById("b3d-shell");if(!e)return;let n=t.defaultView,s=t.documentElement,r=$=>e.querySelector($),o=()=>s.classList.add("b3d-touch"),a=n.matchMedia("(pointer: coarse)");a.matches&&o(),a.addEventListener&&a.addEventListener("change",()=>{a.matches&&o()}),n.addEventListener("pointerdown",$=>{($.pointerType==="touch"||$.pointerType==="pen")&&o()},!0),n.focus(),n.addEventListener("pointerdown",()=>n.focus());let l=r(".b3d-dpad"),c=[".l",".r",".u",".d"].map($=>l.querySelector($)),h=new Map,u=0,f=()=>{let $=[!1,!1,!1,!1],At=l.getBoundingClientRect(),q=0,ot=0;for(let[ft,at]of h.values()){let Ct=(ft-At.left)/At.width*2-1,Lt=(at-At.top)/At.height*2-1;if(u===1){let zt=Math.hypot(Ct,Lt)/.9,te=zt>1?1/zt:1;q=Ct/.9*te,ot=Lt/.9*te,q<-.5&&($[0]=!0),q>.5&&($[1]=!0),ot<-.5&&($[2]=!0),ot>.5&&($[3]=!0)}else if(u===2)Math.abs(Ct)>.06&&($[Ct<0?0:1]=!0);else if(u===3)Math.abs(Lt)>.06&&($[Lt<0?2:3]=!0);else{if(Math.hypot(Ct,Lt)<.2)continue;let zt=Math.abs(Ct),te=Math.abs(Lt);zt>te*.42&&($[Ct<0?0:1]=!0),te>zt*.42&&($[Lt<0?2:3]=!0)}}$.forEach((ft,at)=>{i.setButton(at,ft),c[at].classList.toggle("on",ft)}),i.setStick&&i.setStick(q,ot),l.style.setProperty("--kx",q),l.style.setProperty("--ky",ot),l.classList.toggle("on",u===1&&h.size>0)},g=r(".b3d-ab"),_=r(".b3d-ab .stick"),y=new Map,m=0,d=()=>{let $=_.getBoundingClientRect(),At=0,q=0;for(let[ot,ft]of y.values()){let at=(ot-$.left)/$.width*2-1,Ct=(ft-$.top)/$.height*2-1,Lt=Math.hypot(at,Ct)/.9,zt=Lt>1?1/Lt:1;At=at/.9*zt,q=Ct/.9*zt}i.setStick&&i.setStick(At,q,1),_.style.setProperty("--kx",At),_.style.setProperty("--ky",q),_.classList.toggle("on",y.size>0)};_.addEventListener("pointerdown",$=>{$.preventDefault();try{_.setPointerCapture($.pointerId)}catch{}y.set($.pointerId,[$.clientX,$.clientY]),d()}),_.addEventListener("pointermove",$=>{y.has($.pointerId)&&(y.set($.pointerId,[$.clientX,$.clientY]),d())});for(let $ of["pointerup","pointercancel","lostpointercapture"])_.addEventListener($,At=>{y.delete(At.pointerId)&&d()});let A=250,T=12,b=300,F=r(".b3d-ab .pad"),C=null,I=0,z=0,E=0,S=0,D=!1,tt=-1e9,W=()=>{D&&(D=!1,i.setButton(19,!1),F.classList.remove("hold")),C=null,F.classList.remove("on")};F.addEventListener("pointerdown",$=>{if($.preventDefault(),C===null){C=$.pointerId,I=$.clientX,z=$.clientY,E=performance.now(),S=0;try{F.setPointerCapture($.pointerId)}catch{}F.classList.add("on"),E-tt<b&&(D=!0,tt=-1e9,i.setButton(19,!0),F.classList.add("hold"))}}),F.addEventListener("pointermove",$=>{if($.pointerId!==C)return;let At=256/Math.max(1,F.getBoundingClientRect().width);i.touchDelta&&i.touchDelta(($.clientX-I)*At,($.clientY-z)*At),S+=Math.hypot($.clientX-I,$.clientY-z),I=$.clientX,z=$.clientY}),F.addEventListener("pointerup",$=>{if($.pointerId!==C)return;let At=performance.now();!D&&At-E<A&&S<T&&(i.setButton(19,!0),i.setButton(19,!1),tt=At),W()});for(let $ of["pointercancel","lostpointercapture"])F.addEventListener($,At=>{At.pointerId===C&&W()});let et=($,At=0)=>{At!==m&&(m=At,g.dataset.mode=String(At),At!==1&&(y.clear(),d()),At!==2&&(W(),tt=-1e9)),$!==u&&(u=$,l.dataset.mode=String($),f())};i.onTouchMode=et,l.addEventListener("pointerdown",$=>{$.preventDefault();try{l.setPointerCapture($.pointerId)}catch{}h.set($.pointerId,[$.clientX,$.clientY]),f()}),l.addEventListener("pointermove",$=>{h.has($.pointerId)&&(h.set($.pointerId,[$.clientX,$.clientY]),f())});for(let $ of["pointerup","pointercancel","lostpointercapture"])l.addEventListener($,At=>{h.delete(At.pointerId)&&f()});[[".o",4],[".x",5]].forEach(([$,At])=>{let q=r(".b3d-ab "+$),ot=ft=>{i.setButton(At,ft),q.classList.toggle("on",ft)};q.addEventListener("pointerdown",ft=>{ft.preventDefault();try{q.setPointerCapture(ft.pointerId)}catch{}ot(!0)});for(let ft of["pointerup","pointercancel","lostpointercapture"])q.addEventListener(ft,()=>ot(!1))}),e.addEventListener("contextmenu",$=>{$.target.closest("#screen")||$.preventDefault()});let Q=($,At)=>{let q=r($),ot=-1e9,ft=()=>{let at=performance.now();at-ot<500||(ot=at,At(),q.blur())};return q.addEventListener("mousedown",at=>at.preventDefault()),q.addEventListener("pointerdown",at=>{at.pointerType!=="mouse"&&at.preventDefault()}),q.addEventListener("pointerup",at=>{at.pointerType!=="mouse"&&ft()}),q.addEventListener("click",ft),q};Q(".b3d-pause",()=>{i.setButton(6,!0),i.setButton(6,!1)});let j=Q(".b3d-mute",()=>{i.setMuted(!i.muted),ht()}),ht=()=>{j.innerHTML=i.muted?pr.muted:pr.sound,j.title=i.muted?"Unmute":"Mute",j.classList.toggle("on",i.muted)};ht();let Z=()=>t.fullscreenElement||t.webkitFullscreenElement,lt=Q(".b3d-full",()=>{try{let $=Z()?(t.exitFullscreen||t.webkitExitFullscreen).call(t):(s.requestFullscreen||s.webkitRequestFullscreen).call(s);$&&$.catch&&$.catch(()=>{})}catch{}}),vt=()=>{lt.innerHTML=Z()?pr.exitFull:pr.full,lt.title=Z()?"Exit fullscreen":"Fullscreen"},Pt=n.matchMedia("(display-mode: fullscreen)").matches||n.navigator.standalone===!0;lt.hidden=Pt||!(t.fullscreenEnabled||t.webkitFullscreenEnabled),t.addEventListener("fullscreenchange",vt),t.addEventListener("webkitfullscreenchange",vt),vt()}var un=null,Bs=null,mr=null,ku=null;function Vu(i,{canvas:t,overlay:e,onError:n=Fo,onLog:s=console.log,onRestart:r=Hu,onSave:o,onCover:a,dev:l,onDev:c,wire:h=!0}={}){return t||({canvas:t,overlay:e}=dc()),Bs=e,ku=n,un=zu({canvas:t,overlay:e,cart:i,onError:n,onLog:s,onRestart:r,onSave:o,onCover:a,dev:l,onDev:c}),Object.defineProperties(window,Object.getOwnPropertyDescriptors(un.api)),window.addEventListener("keydown",u=>un.key(u,!0)),window.addEventListener("keyup",u=>un.key(u,!1)),window.addEventListener("pointerdown",()=>un.unlockAudio()),h&&fc(un),un}function N_(i,t){let e=dc(),n=e.overlay.getContext("2d"),s=null,r=!1,o={setButton(f,g){s?s.setButton(f,g):g&&f!==6&&u()},setStick(f,g,_){s&&s.setStick(f,g,_)},touchDelta(f,g){s&&s.touchDelta(f,g)},onTouchMode:null,get muted(){if(s)return s.muted;try{return localStorage.getItem("blocky3d.mute")==="1"}catch{return!1}},setMuted(f){if(s)s.setMuted(f);else try{localStorage.setItem("blocky3d.mute",f?"1":"0")}catch{}}};fc(o);let a=f=>{n.imageSmoothingEnabled=!1,f?n.drawImage(f,0,0,256,256):(n.fillStyle="#1d2b53",n.fillRect(0,0,256,256),Cu(n,i.name,"#fff1e8","#000000",56,88)),n.fillStyle="rgba(0, 0, 0, 0.6)",n.beginPath(),n.arc(128,128,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff1e8",n.beginPath(),n.moveTo(120,115),n.lineTo(120,141),n.lineTo(141,128),n.closePath(),n.fill()};if(typeof i.cover=="string"&&i.cover.startsWith("data:image/")){let f=new Image;f.onload=()=>{r||a(f)},f.onerror=()=>{r||a(null)},f.src=i.cover}else a(null);e.overlay.style.cursor="pointer";let l=f=>{f.ctrlKey||f.metaKey||f.altKey||/^(Tab|Escape|Shift|Control|Alt|Meta|F\d+)$/.test(f.key)||(f.preventDefault(),u())},c=()=>u();e.overlay.addEventListener("click",c),window.addEventListener("keydown",l);let h=()=>{if(r)return;let f=navigator.getGamepads?navigator.getGamepads():[];for(let g of f)if(g&&[0,1,2,3,9].some(_=>g.buttons[_]&&g.buttons[_].pressed))return u();requestAnimationFrame(h)};requestAnimationFrame(h);function u(){if(!r){r=!0,e.overlay.removeEventListener("click",c),window.removeEventListener("keydown",l),e.overlay.style.cursor="",n.clearRect(0,0,256,256);try{s=Vu(i,{...e,wire:!1})}catch(f){Fo(f);return}s.onTouchMode=o.onTouchMode,s.unlockAudio(),mc(t)}}}var pc='({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null })';function F_(i){return"(function () {"+String(i||"")+`
;return `+pc+`;
})`}function mc(i){mr=typeof i=="function"?i:null;let t;try{t=mr?mr():i||(0,eval)(pc)}catch(e){return ku(e),!1}return un.start(t)}function Hu(){if(!mr){location.reload();return}un.reset(),mc(mr)}function O_(){un&&un.stop()}function Fo(i){if(console.error(i),un&&un.stop(),!Bs)return;Bs.width!==256&&(Bs.width=Bs.height=256);let t=Bs.getContext("2d"),e=("Error: "+String(i&&i.message||i)).split(/\s+/),n=[""];for(let s of e){let r=n[n.length-1];r&&Fs(r+" "+s)>248?n.push(s):n[n.length-1]=r?r+" "+s:s}yi(t,n.join(`
`),4,4,"#ff004d","#000000")}function B_(){window.addEventListener("error",i=>Fo(i.error||i.message))}var Gu="0.1.0-alpha";window.Blocko3D={...gc,VERSION:Gu};window.Blocky3D=window.Blocko3D;})();
