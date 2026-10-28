// split screen racing, made with blocky3D 0.1.0-alpha
// ---------------------------------------------------------------- runtime (blocky3D engine + three.js)
(()=>{var tu=Object.defineProperty;var eu=(i,t)=>{for(var e in t)tu(i,e,{get:t[e],enumerable:!0})};var Al={};eu(Al,{HOOKS_EXPR:()=>wl,cartFunctionSource:()=>M0,catchGlobalErrors:()=>b0,install:()=>Vh,play:()=>y0,restart:()=>Hh,showError:()=>ro,start:()=>Tl,stop:()=>S0});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var nu=0,Ul=1,iu=2;var Oc=1,su=2,Wn=3,hi=0,Ke=1,qn=2,li=0,rs=1,Nl=2,Fl=3,Ol=4,ru=5,wi=100,ou=101,au=102,lu=103,cu=104,hu=200,uu=201,du=202,fu=203,Vo=204,Ho=205,pu=206,mu=207,gu=208,_u=209,xu=210,vu=211,yu=212,Mu=213,Su=214,Go=0,Wo=1,Xo=2,cs=3,qo=4,Yo=5,Zo=6,$o=7,Bc=0,bu=1,Eu=2,ci=0,wu=1,Tu=2,Au=3,Ru=4,Cu=5,Iu=6,Pu=7;var zc=300,hs=301,us=302,Jo=303,Ko=304,Yr=306,Qo=1e3,Ri=1001,jo=1002,Te=1003,Lu=1004;var tr=1005;var Un=1006,co=1007;var Ci=1008;var An=1009,kc=1010,Vc=1011,zs=1012,il=1013,Ii=1014,Tn=1015,ks=1016,sl=1017,rl=1018,ds=1020,Hc=35902,Gc=1021,Wc=1022,rn=1023,Xc=1024,qc=1025,os=1026,fs=1027,Zr=1028,ol=1029,Yc=1030,al=1031;var ll=1033,Er=33776,wr=33777,Tr=33778,Ar=33779,ta=35840,ea=35841,na=35842,ia=35843,sa=36196,ra=37492,oa=37496,aa=37808,la=37809,ca=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,xa=37819,va=37820,ya=37821,Rr=36492,Ma=36494,Sa=36495,Zc=36283,ba=36284,Ea=36285,wa=36286;var Cr=2300,Ta=2301,ho=2302,Bl=2400,zl=2401,kl=2402;var Du=3200,Uu=3201;var Nu=0,Fu=1,ai="",pn="srgb",fi="srgb-linear",$r="linear",de="srgb";var Gi=7680;var Vl=519,Ou=512,Bu=513,zu=514,$c=515,ku=516,Vu=517,Hu=518,Gu=519,Hl=35044;var $n="300 es",Yn=2e3,Ir=2001,ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uo=Math.PI/180,Aa=180/Math.PI;function Vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function Wu(i,t){return(i%t+t)%t}function fo(i,t,e){return(1-e)*i+e*t}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ce=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],v=s[0],m=s[3],d=s[6],A=s[1],T=s[4],b=s[7],P=s[2],C=s[5],I=s[8];return r[0]=o*v+a*A+l*P,r[3]=o*m+a*T+l*C,r[6]=o*d+a*b+l*I,r[1]=c*v+h*A+f*P,r[4]=c*m+h*T+f*C,r[7]=c*d+h*b+f*I,r[2]=u*v+p*A+_*P,r[5]=u*m+p*T+_*C,r[8]=u*d+p*b+_*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,_=e*f+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},po=new Gt;function Jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xu(){let i=Pr("canvas");return i.style.display="block",i}var Gl={};function Fs(i){i in Gl||(Gl[i]=!0,console.warn(i))}function qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var te={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?$r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wl=[.64,.33,.3,.6,.15,.06],Xl=[.2126,.7152,.0722],ql=[.3127,.329],Yl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[fi]:{primaries:Wl,whitePoint:ql,transfer:$r,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:Xl,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Wl,whitePoint:ql,transfer:de,toXYZ:Yl,fromXYZ:Zl,luminanceCoefficients:Xl,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});var Wi,Ra=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=Pr("canvas")),Wi.width=t.width,Wi.height=t.height;let n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$u=0,Lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ju=0,on=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ri,s=Ri,r=Un,o=Ci,a=rn,l=An,c=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Vs(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=zc;on.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,b=(p+1)/2,P=(d+1)/2,C=(h+u)/4,I=(f+v)/4,O=(_+m)/4;return T>b&&T>P?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=C/n,r=I/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=O/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=I/r,s=O/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-v)/A,this.z=(u-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ca=class extends ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Dr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var di=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(f!==v||l!==u||c!==p||h!==_){let m=1-a,d=l*u+c*p+h*_+f*v,A=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){let P=Math.sqrt(T),C=Math.atan2(P,d*A);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}let b=a*A;if(l=l*m+u*b,c=c*m+p*b,h=h*m+_*b,f=f*m+v*b,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*f+l*p-c*u,t[e+1]=l*_+h*u+c*f-a*p,t[e+2]=c*_+h*p+a*u-l*f,t[e+3]=h*_-a*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"YZX":this._x=u*h*f+c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f-u*p*_;break;case"XZY":this._x=u*h*f-c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return go.copy(this).projectOnVector(t),this.sub(go)}reflect(t){return this.sub(go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new z,$l=new di,Pi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),nr.subVectors(this.max,Ps),Xi.subVectors(t.a,Ps),qi.subVectors(t.b,Ps),Yi.subVectors(t.c,Ps),ei.subVectors(qi,Xi),ni.subVectors(Yi,qi),xi.subVectors(Xi,Yi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!_o(e,Xi,qi,Yi,nr)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,Xi,qi,Yi,nr))?!1:(ir.crossVectors(ei,ni),e=[ir.x,ir.y,ir.z],_o(e,Xi,qi,Yi,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},zn=[new z,new z,new z,new z,new z,new z,new z,new z],bn=new z,er=new Pi,Xi=new z,qi=new z,Yi=new z,ei=new z,ni=new z,xi=new z,Ps=new z,nr=new z,ir=new z,vi=new z;function _o(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);let a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ku=new Pi,Ls=new z,xo=new z,ps=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ku.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(xo)),this.expandByPoint(Ls.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new z,vo=new z,sr=new z,ii=new z,yo=new z,rr=new z,Mo=new z,Ur=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vo.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(sr),a=ii.dot(this.direction),l=-ii.dot(sr),c=ii.lengthSq(),h=Math.abs(1-o*o),f,u,p,_;if(h>0)if(f=o*l-a,u=o*a-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(vo).addScaledVector(sr,u),p}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){yo.subVectors(e,t),rr.subVectors(n,t),Mo.crossVectors(yo,rr);let o=this.direction.dot(Mo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);let l=a*this.direction.dot(rr.crossVectors(ii,rr));if(l<0)return null;let c=a*this.direction.dot(yo.cross(ii));if(c<0||l+c>o)return null;let h=-a*ii.dot(Mo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,u,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,p,_,v,m)}set(t,e,n,s,r,o,a,l,c,h,f,u,p,_,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,_=c*h,v=c*f;e[0]=u+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,_=c*h,v=c*f;e[0]=u-v*a,e[4]=-o*f,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=_*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+_,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=o*h,e[9]=p*f-_,e[2]=_*f-p,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qu,t,ju)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),si.crossVectors(n,nn),si.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),si.crossVectors(n,nn)),si.normalize(),or.crossVectors(nn,si),s[0]=si.x,s[4]=or.x,s[8]=nn.x,s[1]=si.y,s[5]=or.y,s[9]=nn.y,s[2]=si.z,s[6]=or.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],v=n[6],m=n[10],d=n[14],A=n[3],T=n[7],b=n[11],P=n[15],C=s[0],I=s[4],O=s[8],S=s[12],M=s[1],L=s[5],J=s[9],k=s[13],$=s[2],it=s[6],Z=s[10],ot=s[14],q=s[3],ht=s[7],_t=s[11],Rt=s[15];return r[0]=o*C+a*M+l*$+c*q,r[4]=o*I+a*L+l*it+c*ht,r[8]=o*O+a*J+l*Z+c*_t,r[12]=o*S+a*k+l*ot+c*Rt,r[1]=h*C+f*M+u*$+p*q,r[5]=h*I+f*L+u*it+p*ht,r[9]=h*O+f*J+u*Z+p*_t,r[13]=h*S+f*k+u*ot+p*Rt,r[2]=_*C+v*M+m*$+d*q,r[6]=_*I+v*L+m*it+d*ht,r[10]=_*O+v*J+m*Z+d*_t,r[14]=_*S+v*k+m*ot+d*Rt,r[3]=A*C+T*M+b*$+P*q,r[7]=A*I+T*L+b*it+P*ht,r[11]=A*O+T*J+b*Z+P*_t,r[15]=A*S+T*k+b*ot+P*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],_=t[3],v=t[7],m=t[11],d=t[15];return _*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*p-n*l*p)+v*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*f+e*a*u+s*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],_=t[12],v=t[13],m=t[14],d=t[15],A=f*m*c-v*u*c+v*l*p-a*m*p-f*l*d+a*u*d,T=_*u*c-h*m*c-_*l*p+o*m*p+h*l*d-o*u*d,b=h*v*c-_*f*c+_*a*p-o*v*p-h*a*d+o*f*d,P=_*f*l-h*v*l-_*a*u+o*v*u+h*a*m-o*f*m,C=e*A+n*T+s*b+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=A*I,t[1]=(v*u*r-f*m*r-v*s*p+n*m*p+f*s*d-n*u*d)*I,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*I,t[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*p-n*l*p)*I,t[4]=T*I,t[5]=(h*m*r-_*u*r+_*s*p-e*m*p-h*s*d+e*u*d)*I,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*d-e*l*d)*I,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*I,t[8]=b*I,t[9]=(_*f*r-h*v*r-_*n*p+e*v*p+h*n*d-e*f*d)*I,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*d+e*a*d)*I,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*I,t[12]=P*I,t[13]=(h*v*s-_*f*s+_*n*u-e*v*u-h*n*m+e*f*m)*I,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*m-e*a*m)*I,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*u+e*a*u)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,_=r*f,v=o*h,m=o*f,d=a*f,A=l*c,T=l*h,b=l*f,P=n.x,C=n.y,I=n.z;return s[0]=(1-(v+d))*P,s[1]=(p+b)*P,s[2]=(_-T)*P,s[3]=0,s[4]=(p-b)*C,s[5]=(1-(u+d))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(_+T)*I,s[9]=(m-A)*I,s[10]=(1-(u+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let c=1/r,h=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Yn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),p,_;if(a===Yn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ir)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Yn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*c,p=(n+s)*h,_,v;if(a===Yn)_=(o+r)*f,v=-2*f;else if(a===Ir)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zi=new z,En=new oe,Qu=new z(0,0,0),ju=new z(1,1,1),si=new z,or=new z,nn=new z,Jl=new oe,Kl=new di,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},td=0,Ql=new z,$i=new di,Vn=new oe,ar=new z,Ds=new z,ed=new z,nd=new di,jl=new z(1,0,0),tc=new z(0,1,0),ec=new z(0,0,1),nc={type:"added"},id={type:"removed"},Ji={type:"childadded",child:null},So={type:"childremoved",child:null},_n=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Rn,n=new di,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Gt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ds,ar,this.up):Vn.lookAt(ar,Ds,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Vn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};_n.DEFAULT_UP=new z(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new z,Hn=new z,bo=new z,Gn=new z,Ki=new z,Qi=new z,ic=new z,Eo=new z,wo=new z,To=new z,Ao=new ye,Ro=new ye,Co=new ye,Ti=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Hn.subVectors(n,e),bo.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Hn),l=wn.dot(bo),c=Hn.dot(Hn),h=Hn.dot(bo),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ao.setScalar(0),Ro.setScalar(0),Co.setScalar(0),Ao.fromBufferAttribute(t,e),Ro.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ao,r.x),o.addScaledVector(Ro,r.y),o.addScaledVector(Co,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Hn.subVectors(t,e),wn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),wn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),Qi.subVectors(r,n),Eo.subVectors(t,n);let l=Ki.dot(Eo),c=Qi.dot(Eo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,s);let h=Ki.dot(wo),f=Qi.dot(wo);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ki,o);To.subVectors(t,r);let p=Ki.dot(To),_=Qi.dot(To);if(_>=0&&p<=_)return e.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Qi,a);let m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return ic.subVectors(r,s),a=(f-h)/(f-h+(p-_)),e.copy(s).addScaledVector(ic,a);let d=1/(m+v+u);return o=v*d,a=u*d,e.copy(n).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Io(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var re=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Wu(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Io(o,r,t+1/3),this.g=Io(o,r,t),this.b=Io(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=Kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return te.fromWorkingColorSpace(We.copy(this),t),Math.round(Je(We.r*255,0,255))*65536+Math.round(Je(We.g*255,0,255))*256+Math.round(Je(We.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=pn){te.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(lr);let n=fo(ri.h,lr.h,e),s=fo(ri.s,lr.s,e),r=fo(ri.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new re;re.NAMES=Kc;var sd=0,Li=class extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Vs(),this.name="",this.blending=rs,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=Ho,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fr=class extends Li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new z,cr=new ce,mn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}};var Di=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ms=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},rd=0,fn=new oe,Po=new _n,ji=new z,sn=new Pi,Us=new Pi,De=new z,Qe=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jc(t)?ms:Di)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(sn.min,Us.min),sn.expandByPoint(De),De.addVectors(sn.max,Us.max),sn.expandByPoint(De)):(sn.expandByPoint(Us.min),sn.expandByPoint(Us.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),De.add(ji)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new z,l[O]=new z;let c=new z,h=new z,f=new z,u=new ce,p=new ce,_=new ce,v=new z,m=new z;function d(O,S,M){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,O),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),h.sub(c),f.sub(c),p.sub(u),_.sub(u);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[O].add(v),a[S].add(v),a[M].add(v),l[O].add(m),l[S].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let O=0,S=A.length;O<S;++O){let M=A[O],L=M.start,J=M.count;for(let k=L,$=L+J;k<$;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let T=new z,b=new z,P=new z,C=new z;function I(O){P.fromBufferAttribute(s,O),C.copy(P);let S=a[O];T.copy(S),T.sub(P.multiplyScalar(P.dot(S))).normalize(),b.crossVectors(C,S);let L=b.dot(l[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,L)}for(let O=0,S=A.length;O<S;++O){let M=A[O],L=M.start,J=M.count;for(let k=L,$=L+J;k<$;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,f=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new mn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sc=new oe,yi=new Ur,hr=new ps,rc=new z,ur=new z,dr=new z,fr=new z,Lo=new z,pr=new z,oc=new z,mr=new z,Oe=class extends _n{constructor(t=new Qe,e=new Fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Lo.fromBufferAttribute(f,t),o?pr.addScaledVector(Lo,h):pr.addScaledVector(Lo.sub(e),h))}e.add(pr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(hr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(hr,rc)===null||yi.origin.distanceToSquared(rc)>(t.far-t.near)**2))&&(sc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(sc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let m=u[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,P=T;b<P;b+=3){let C=a.getX(b),I=a.getX(b+1),O=a.getX(b+2);s=gr(this,d,t,n,c,h,f,C,I,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let A=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);s=gr(this,o,t,n,c,h,f,A,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let m=u[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,P=T;b<P;b+=3){let C=b,I=b+1,O=b+2;s=gr(this,d,t,n,c,h,f,C,I,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let A=m,T=m+1,b=m+2;s=gr(this,o,t,n,c,h,f,A,T,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function od(i,t,e,n,s,r,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===hi,a),l===null)return null;mr.copy(a),mr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(mr);return c<e.near||c>e.far?null:{distance:c,point:mr.clone(),object:i}}function gr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ur),i.getVertexPosition(l,dr),i.getVertexPosition(c,fr);let h=od(i,t,e,n,ur,dr,fr,oc);if(h){let f=new z;Ti.getBarycoord(oc,ur,dr,fr,f),s&&(h.uv=Ti.getInterpolatedAttribute(s,a,l,c,f,new ce)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,a,l,c,f,new ce)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};Ti.getNormal(ur,dr,fr,u.normal),h.face=u,h.barycoord=f}return h}var Ui=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(f,2));function _(v,m,d,A,T,b,P,C,I,O,S){let M=b/I,L=P/O,J=b/2,k=P/2,$=C/2,it=I+1,Z=O+1,ot=0,q=0,ht=new z;for(let _t=0;_t<Z;_t++){let Rt=_t*L-k;for(let Wt=0;Wt<it;Wt++){let ie=Wt*M-J;ht[v]=ie*A,ht[m]=Rt*T,ht[d]=$,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[d]=C>0?1:-1,h.push(ht.x,ht.y,ht.z),f.push(Wt/I),f.push(1-_t/O),ot+=1}}for(let _t=0;_t<O;_t++)for(let Rt=0;Rt<I;Rt++){let Wt=u+Rt+it*_t,ie=u+Rt+it*(_t+1),Y=u+(Rt+1)+it*(_t+1),at=u+(Rt+1)+it*_t;l.push(Wt,ie,at),l.push(ie,Y,at),q+=6}a.addGroup(p,q,S),p+=q,u+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function ad(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var ld={clone:gs,merge:Ye},cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends Li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ni=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new z,ac=new ce,lc=new ce,Xe=class extends Ni{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,ac,lc),e.subVectors(lc,ac)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ts=-90,es=1,Pa=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new Xe(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new Xe(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new Xe(ts,es,t,e);a.layers=this.layers,this.add(a);let l=new Xe(ts,es,t,e);l.layers=this.layers,this.add(l);let c=new Xe(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Or=class extends on{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},La=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:li});r.uniforms.tEquirect.value=e;let o=new Oe(s,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Un),new Pa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Do=new z,ud=new z,dd=new Gt,Xn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Do.subVectors(n,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Do),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||dd.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new ps,_r=new z,Br=class{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],_=s[9],v=s[10],m=s[11],d=s[12],A=s[13],T=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-p,b-d).normalize(),n[1].setComponents(l+r,u+c,m+p,b+d).normalize(),n[2].setComponents(l+o,u+h,m+_,b+A).normalize(),n[3].setComponents(l-o,u-h,m-_,b-A).normalize(),n[4].setComponents(l-a,u-f,m-v,b-T).normalize(),e===Yn)n[5].setComponents(l+a,u+f,m+v,b+T).normalize();else if(e===Ir)n[5].setComponents(a,f,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_r.x=s.normal.x>0?t.max.x:t.min.x,_r.y=s.normal.y>0?t.max.y:t.min.y,_r.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _s=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,p=[],_=[],v=[],m=[];for(let d=0;d<h;d++){let A=d*u-o;for(let T=0;T<c;T++){let b=T*f-r;_.push(b,-A,0),v.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let T=A+c*d,b=A+c*(d+1),P=A+1+c*(d+1),C=A+1+c*d;p.push(T,b,C),p.push(b,P,C)}this.setIndex(p),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
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
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
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
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
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
#endif`,ff=`struct PhysicalMaterial {
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
}`,pf=`
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ef=`#if defined( USE_POINTS_UV )
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
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$f=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jf=`float getShadowMask() {
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
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,Sp=`#define DISTANCE
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
}`,bp=`#define DISTANCE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define STANDARD
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
}`,kp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:xd,alphatest_pars_fragment:vd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:bd,begin_vertex:Ed,beginnormal_vertex:wd,bsdfs:Td,iridescence_fragment:Ad,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:zd,displacementmap_pars_vertex:kd,displacementmap_vertex:Vd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:Zd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:af,envmap_vertex:Jd,fog_vertex:Kd,fog_pars_vertex:Qd,fog_fragment:jd,fog_pars_fragment:tf,gradientmap_pars_fragment:ef,lightmap_pars_fragment:nf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:rf,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:hf,lights_phong_pars_fragment:uf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:_f,logdepthbuf_pars_fragment:xf,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:yf,map_fragment:Mf,map_pars_fragment:Sf,map_particle_fragment:bf,map_particle_pars_fragment:Ef,metalnessmap_fragment:wf,metalnessmap_pars_fragment:Tf,morphinstance_vertex:Af,morphcolor_vertex:Rf,morphnormal_vertex:Cf,morphtarget_pars_vertex:If,morphtarget_vertex:Pf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:Uf,normal_pars_vertex:Nf,normal_vertex:Ff,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Vf,opaque_fragment:Hf,packing:Gf,premultiplied_alpha_fragment:Wf,project_vertex:Xf,dithering_fragment:qf,dithering_pars_fragment:Yf,roughnessmap_fragment:Zf,roughnessmap_pars_fragment:$f,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:Kf,shadowmap_vertex:Qf,shadowmask_pars_fragment:jf,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:op,tonemapping_pars_fragment:ap,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:xp,cube_frag:vp,depth_vert:yp,depth_frag:Mp,distanceRGBA_vert:Sp,distanceRGBA_frag:bp,equirect_vert:Ep,equirect_frag:wp,linedashed_vert:Tp,linedashed_frag:Ap,meshbasic_vert:Rp,meshbasic_frag:Cp,meshlambert_vert:Ip,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:zp,meshtoon_vert:kp,meshtoon_frag:Vp,points_vert:Hp,points_frag:Gp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Yp},ft={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new re(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ye([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ye([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new re(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ye([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ye([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ye([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ye([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ye([ft.common,ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ye([ft.lights,ft.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Dn.physical={uniforms:Ye([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var xr={r:0,b:0,g:0},Si=new Rn,Zp=new oe;function $p(i,t,e,n,s,r,o){let a=new re(0),l=r===!0?0:1,c,h,f=null,u=0,p=null;function _(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function v(A){let T=!1,b=_(A);b===null?d(a,l):b&&b.isColor&&(d(b,1),T=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,T){let b=_(T);b&&(b.isCubeTexture||b.mapping===Yr)?(h===void 0&&(h=new Oe(new Ui(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:gs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(T.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zp.makeRotationFromEuler(Si)),h.material.toneMapped=te.getTransfer(b.colorSpace)!==de,(f!==b||u!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Oe(new _s(2,2),new Be({name:"BackgroundMaterial",uniforms:gs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=te.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,T){A.getRGB(xr,Qc(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(A,T=1){a.set(A),l=T,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:m}}function Jp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,L,J,k,$){let it=!1,Z=f(k,J,L);r!==Z&&(r=Z,c(r.object)),it=p(M,k,J,$),it&&_(M,k,J,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,b(M,L,J,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,L,J){let k=J.wireframe===!0,$=n[M.id];$===void 0&&($={},n[M.id]=$);let it=$[L.id];it===void 0&&(it={},$[L.id]=it);let Z=it[k];return Z===void 0&&(Z=u(l()),it[k]=Z),Z}function u(M){let L=[],J=[],k=[];for(let $=0;$<e;$++)L[$]=0,J[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:J,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,L,J,k){let $=r.attributes,it=L.attributes,Z=0,ot=J.getAttributes();for(let q in ot)if(ot[q].location>=0){let _t=$[q],Rt=it[q];if(Rt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Rt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Rt=M.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==k}function _(M,L,J,k){let $={},it=L.attributes,Z=0,ot=J.getAttributes();for(let q in ot)if(ot[q].location>=0){let _t=it[q];_t===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),$[q]=Rt,Z++}r.attributes=$,r.attributesNum=Z,r.index=k}function v(){let M=r.newAttributes;for(let L=0,J=M.length;L<J;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){let J=r.newAttributes,k=r.enabledAttributes,$=r.attributeDivisors;J[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),$[M]!==L&&(i.vertexAttribDivisor(M,L),$[M]=L)}function A(){let M=r.newAttributes,L=r.enabledAttributes;for(let J=0,k=L.length;J<k;J++)L[J]!==M[J]&&(i.disableVertexAttribArray(J),L[J]=0)}function T(M,L,J,k,$,it,Z){Z===!0?i.vertexAttribIPointer(M,L,J,$,it):i.vertexAttribPointer(M,L,J,k,$,it)}function b(M,L,J,k){v();let $=k.attributes,it=J.getAttributes(),Z=L.defaultAttributeValues;for(let ot in it){let q=it[ot];if(q.location>=0){let ht=$[ot];if(ht===void 0&&(ot==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),ot==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){let _t=ht.normalized,Rt=ht.itemSize,Wt=t.get(ht);if(Wt===void 0)continue;let ie=Wt.buffer,Y=Wt.type,at=Wt.bytesPerElement,bt=Y===i.INT||Y===i.UNSIGNED_INT||ht.gpuType===il;if(ht.isInterleavedBufferAttribute){let lt=ht.data,It=lt.stride,Dt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<q.locationSize;Bt++)d(q.location+Bt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<q.locationSize;Bt++)m(q.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Bt=0;Bt<q.locationSize;Bt++)T(q.location+Bt,Rt/q.locationSize,Y,_t,It*at,(Dt+Rt/q.locationSize*Bt)*at,bt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<q.locationSize;lt++)d(q.location+lt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let lt=0;lt<q.locationSize;lt++)m(q.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let lt=0;lt<q.locationSize;lt++)T(q.location+lt,Rt/q.locationSize,Y,_t,Rt*at,Rt/q.locationSize*lt*at,bt)}}else if(Z!==void 0){let _t=Z[ot];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(q.location,_t);break;case 3:i.vertexAttrib3fv(q.location,_t);break;case 4:i.vertexAttrib4fv(q.location,_t);break;default:i.vertexAttrib1fv(q.location,_t)}}}}A()}function P(){O();for(let M in n){let L=n[M];for(let J in L){let k=L[J];for(let $ in k)h(k[$].object),delete k[$];delete L[J]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let J in L){let k=L[J];for(let $ in k)h(k[$].object),delete k[$];delete L[J]}delete n[M.id]}function I(M){for(let L in n){let J=n[L];if(J[M.id]===void 0)continue;let k=J[M.id];for(let $ in k)h(k[$].object),delete k[$];delete J[M.id]}}function O(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Kp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];e.update(p,n,1)}function l(c,h,f,u){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v]*u[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==rn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let O=I===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==An&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Tn&&!O)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:P,maxSamples:C}}function jp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Xn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let A=r?0:n,T=A*4,b=d.clippingState||null;l.value=b,b=h(_,u,T,p);for(let P=0;P!==T;++P)b[P]=e[P];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,_){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let d=p+v*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,b=p;T!==v;++T,b+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function tm(i){let t=new WeakMap;function e(o,a){return a===Jo?o.mapping=hs:a===Ko&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jo||a===Ko)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new La(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Da=class extends Ni{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,cc=[.125,.215,.35,.446,.526,.582],Ai=20,Uo=new Da,hc=new re,No=null,Fo=0,Oo=0,Bo=!1,Ei=(1+Math.sqrt(5))/2,ns=1/Ei,uc=[new z(-Ei,ns,0),new z(Ei,ns,0),new z(-ns,0,Ei),new z(ns,0,Ei),new z(0,Ei,-ns),new z(0,Ei,ns),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Fo,Oo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ks,format:rn,colorSpace:fi,depthBuffer:!1},s=dc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=nm(r,t,e)}return s}_compileMaterial(t){let e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,s){let a=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(hc),h.toneMapping=ci,h.autoClear=!1;let p=new Fr({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),_=new Oe(new Ui,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(hc),v=!0);for(let d=0;d<6;d++){let A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let T=this._cubeSize;vr(s,A*T,d>2?T:0,T,T),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Uo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uc[(s-r-1)%uc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Oe(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let d=[],A=0;for(let I=0;I<Ai;++I){let O=I/v,S=Math.exp(-O*O/2);d.push(S),I===0?A+=S:I<m&&(A+=2*S)}for(let I=0;I<d.length;I++)d[I]=d[I]/A;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:T}=this;u.dTheta.value=_,u.mipInt.value=T-n;let b=this._sizeLods[s],P=3*b*(s>T-is?s-T+is:0),C=4*(this._cubeSize-b);vr(e,P,C,3*b,2*b),l.setRenderTarget(e),l.render(f,Uo)}};function em(i){let t=[],e=[],n=[],s=i,r=i-is+1+cc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-is?l=cc[o-i+is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,v=3,m=2,d=1,A=new Float32Array(v*_*p),T=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let C=0;C<p;C++){let I=C%3*2/3-1,O=C>2?0:-1,S=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];A.set(S,v*_*C),T.set(u,m*_*C);let M=[C,C,C,C,C,C];b.set(M,d*_*C)}let P=new Qe;P.setAttribute("position",new mn(A,v)),P.setAttribute("uv",new mn(T,m)),P.setAttribute("faceIndex",new mn(b,d)),t.push(P),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dc(i,t,e){let n=new gn(i,t,e);return n.texture.mapping=Yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nm(i,t,e){let n=new Float32Array(Ai),s=new z(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function fc(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function pc(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function cl(){return`

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
	`}function im(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jo||l===Ko,h=l===hs||l===us;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new zr(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new zr(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rm(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let v=u.morphAttributes[_];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)t.update(u[_],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let _ in p){let v=p[_];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(f){let u=[],p=f.index,_=f.attributes.position,v=0;if(p!==null){let A=p.array;v=p.version;for(let T=0,b=A.length;T<b;T+=3){let P=A[T+0],C=A[T+1],I=A[T+2];u.push(P,C,C,I,I,P)}}else if(_!==void 0){let A=_.array;v=_.version;for(let T=0,b=A.length/3-1;T<b;T+=3){let P=T+0,C=T+1,I=T+2;u.push(P,C,C,I,I,P)}}else return;let m=new(Jc(u)?ms:Di)(u,1);m.version=v;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function om(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,u*o,_),e.update(p,n,_))}function h(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function f(u,p,_,v){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*v[A];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function am(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],T=0;p===!0&&(T=1),_===!0&&(T=2),v===!0&&(T=3);let b=a.attributes.position.count*T,P=1;b>t.maxTextureSize&&(P=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*P*4*f),I=new Dr(C,b,P,f);I.type=Tn,I.needsUpdate=!0;let O=T*4;for(let M=0;M<f;M++){let L=m[M],J=d[M],k=A[M],$=b*P*4*M;for(let it=0;it<L.count;it++){let Z=it*O;p===!0&&(s.fromBufferAttribute(L,it),C[$+Z+0]=s.x,C[$+Z+1]=s.y,C[$+Z+2]=s.z,C[$+Z+3]=0),_===!0&&(s.fromBufferAttribute(J,it),C[$+Z+4]=s.x,C[$+Z+5]=s.y,C[$+Z+6]=s.z,C[$+Z+7]=0),v===!0&&(s.fromBufferAttribute(k,it),C[$+Z+8]=s.x,C[$+Z+9]=s.y,C[$+Z+10]=s.z,C[$+Z+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:I,size:new ce(b,P)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var xs=class extends on{constructor(t,e,n,s,r,o,a,l,c,h=os){if(h!==os&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Ii),n===void 0&&h===fs&&(n=ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=l!==void 0?l:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},th=new on,mc=new xs(1,1),eh=new Dr,nh=new Ia,ih=new Or,gc=[],_c=[],xc=new Float32Array(16),vc=new Float32Array(9),yc=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gc[s];if(r===void 0&&(r=new Float32Array(s),gc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jr(i,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),Ce(e,n)}}function mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;vc.set(n),i.uniformMatrix3fv(this.addr,!1,vc),Ce(e,n)}}function gm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),Ce(e,n)}}function _m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Mm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function wm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=$c,r=mc):r=th,e.setTexture2D(t||r,s)}function Tm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nh,s)}function Am(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ih,s)}function Rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eh,s)}function Cm(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return xm;case 35668:case 35672:return vm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return Sm;case 36295:return bm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Im(i,t){i.uniform1fv(this.addr,t)}function Pm(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Lm(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Dm(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Um(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nm(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fm(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Om(i,t){i.uniform1iv(this.addr,t)}function Bm(i,t){i.uniform2iv(this.addr,t)}function zm(i,t){i.uniform3iv(this.addr,t)}function km(i,t){i.uniform4iv(this.addr,t)}function Vm(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Gm(i,t){i.uniform3uiv(this.addr,t)}function Wm(i,t){i.uniform4uiv(this.addr,t)}function Xm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||th,r[o])}function qm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nh,r[o])}function Ym(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ih,r[o])}function Zm(i,t,e){let n=this.cache,s=t.length,r=Jr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||eh,r[o])}function $m(i){switch(i){case 5126:return Im;case 35664:return Pm;case 35665:return Lm;case 35666:return Dm;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Vm;case 36294:return Hm;case 36295:return Gm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return Zm}}var Ua=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}},Na=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}},Fa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},zo=/(\w+)(\])?(\[|\.)?/g;function Mc(i,t){i.seq.push(t),i.map[t.id]=t}function Jm(i,t,e){let n=i.name,s=n.length;for(zo.lastIndex=0;;){let r=zo.exec(n),o=zo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mc(e,c===void 0?new Ua(a,i,t):new Na(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Fa(a),Mc(e,f)),e=f}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Sc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Km=37297,Qm=0;function jm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var bc=new Gt;function tg(i){te._getMatrix(bc,te.workingColorSpace,i);let t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ec(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jm(i.getShaderSource(t),o)}else return s}function eg(i,t){let e=tg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ng(i,t){let e;switch(t){case wu:e="Linear";break;case Tu:e="Reinhard";break;case Au:e="Cineon";break;case Ru:e="ACESFilmic";break;case Iu:e="AgX";break;case Pu:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yr=new z;function ig(){te.getLuminanceCoefficients(yr);let i=yr.x.toFixed(4),t=yr.y.toFixed(4),e=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function rg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function og(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function wc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(ag,cg)}var lg=new Map;function cg(i,t){let e=qt[t];if(e===void 0){let n=lg.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}var hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(hg,ug)}function ug(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function dg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function fg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function mg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bc:t="ENVMAP_BLENDING_MULTIPLY";break;case bu:t="ENVMAP_BLENDING_MIX";break;case Eu:t="ENVMAP_BLENDING_ADD";break}return t}function gg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _g(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dg(e),c=fg(e),h=pg(e),f=mg(e),u=gg(e),p=sg(e),_=rg(r),v=s.createProgram(),m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Os).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Os).join(`
`),d.length>0&&(d+=`
`)):(m=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),d=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?qt.tonemapping_pars_fragment:"",e.toneMapping!==ci?ng("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,eg("linearToOutputTexel",e.outputColorSpace),ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=Oa(o),o=wc(o,e),o=Tc(o,e),a=Oa(a),a=wc(a,e),a=Tc(a,e),o=Ac(o),a=Ac(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===$n?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$n?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=A+m+o,b=A+d+a,P=Sc(s,s.VERTEX_SHADER,T),C=Sc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,P),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(L){if(i.debug.checkShaderErrors){let J=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(P).trim(),$=s.getShaderInfoLog(C).trim(),it=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,C);else{let ot=Ec(s,P,"vertex"),q=Ec(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+ot+`
`+q)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(k===""||$==="")&&(Z=!1);Z&&(L.diagnostics={runnable:it,programLog:J,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(P),s.deleteShader(C),O=new ls(s,v),S=og(s,v)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Km)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}var xg=0,Ba=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new za(t),e.set(t,n)),n}},za=class{constructor(t){this.id=xg++,this.code=t,this.usedTimes=0}};function vg(i,t,e,n,s,r,o){let a=new Nr,l=new Ba,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,J,k){let $=J.fog,it=k.geometry,Z=S.isMeshStandardMaterial?J.environment:null,ot=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),q=ot&&ot.mapping===Yr?ot.image.height:null,ht=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let _t=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Rt=_t!==void 0?_t.length:0,Wt=0;it.morphAttributes.position!==void 0&&(Wt=1),it.morphAttributes.normal!==void 0&&(Wt=2),it.morphAttributes.color!==void 0&&(Wt=3);let ie,Y,at,bt;if(ht){let ne=Dn[ht];ie=ne.vertexShader,Y=ne.fragmentShader}else ie=S.vertexShader,Y=S.fragmentShader,l.update(S),at=l.getVertexShaderID(S),bt=l.getFragmentShaderID(S);let lt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,Bt=k.isBatchedMesh===!0,_e=!!S.map,Kt=!!S.matcap,ae=!!ot,U=!!S.aoMap,Ie=!!S.lightMap,Yt=!!S.bumpMap,$t=!!S.normalMap,Mt=!!S.displacementMap,he=!!S.emissiveMap,Ct=!!S.metalnessMap,w=!!S.roughnessMap,x=S.anisotropy>0,B=S.clearcoat>0,j=S.dispersion>0,tt=S.iridescence>0,K=S.sheen>0,xt=S.transmission>0,ut=x&&!!S.anisotropyMap,gt=B&&!!S.clearcoatMap,Ht=B&&!!S.clearcoatNormalMap,st=B&&!!S.clearcoatRoughnessMap,vt=tt&&!!S.iridescenceMap,Pt=tt&&!!S.iridescenceThicknessMap,Lt=K&&!!S.sheenColorMap,yt=K&&!!S.sheenRoughnessMap,Zt=!!S.specularMap,Vt=!!S.specularColorMap,zt=!!S.specularIntensityMap,D=xt&&!!S.transmissionMap,ct=xt&&!!S.thicknessMap,X=!!S.gradientMap,Q=!!S.alphaMap,pt=S.alphaTest>0,mt=!!S.alphaHash,Ot=!!S.extensions,pe=ci;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(pe=i.toneMapping);let Me={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:Y,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:fi,alphaToCoverage:!!S.alphaToCoverage,map:_e,matcap:Kt,envMap:ae,envMapMode:ae&&ot.mapping,envMapCubeUVHeight:q,aoMap:U,lightMap:Ie,bumpMap:Yt,normalMap:$t,displacementMap:u&&Mt,emissiveMap:he,normalMapObjectSpace:$t&&S.normalMapType===Fu,normalMapTangentSpace:$t&&S.normalMapType===Nu,metalnessMap:Ct,roughnessMap:w,anisotropy:x,anisotropyMap:ut,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:st,dispersion:j,iridescence:tt,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:yt,specularMap:Zt,specularColorMap:Vt,specularIntensityMap:zt,transmission:xt,transmissionMap:D,thicknessMap:ct,gradientMap:X,opaque:S.transparent===!1&&S.blending===rs&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:pt,alphaHash:mt,combine:S.combine,mapUv:_e&&v(S.map.channel),aoMapUv:U&&v(S.aoMap.channel),lightMapUv:Ie&&v(S.lightMap.channel),bumpMapUv:Yt&&v(S.bumpMap.channel),normalMapUv:$t&&v(S.normalMap.channel),displacementMapUv:Mt&&v(S.displacementMap.channel),emissiveMapUv:he&&v(S.emissiveMap.channel),metalnessMapUv:Ct&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:ut&&v(S.anisotropyMap.channel),clearcoatMapUv:gt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(S.sheenRoughnessMap.channel),specularMapUv:Zt&&v(S.specularMap.channel),specularColorMapUv:Vt&&v(S.specularColorMap.channel),specularIntensityMapUv:zt&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ct&&v(S.thicknessMap.channel),alphaMapUv:Q&&v(S.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&($t||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!it.attributes.uv&&(_e||Q),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:It,skinning:k.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:_e&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qn,flipSided:S.side===Ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ot&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&S.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(A(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){let M=_[S.type],L;if(M){let J=Dn[M];L=ld.clone(J.uniforms)}else L=S.uniforms;return L}function P(S,M){let L;for(let J=0,k=h.length;J<k;J++){let $=h[J];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new _g(i,M,S,r),h.push(L)),L}function C(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:P,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:O}}function yg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ic(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,p,_,v,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),t++,d}function a(f,u,p,_,v,m){let d=o(f,u,p,_,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,u,p,_,v,m){let d=o(f,u,p,_,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||Mg),n.length>1&&n.sort(u||Cc),s.length>1&&s.sort(u||Cc)}function h(){for(let f=t,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Sg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ic,i.set(n,[o])):s>=r.length?(o=new Ic,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function bg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new re};break;case"SpotLight":e={position:new z,direction:new z,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function Eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var wg=0;function Tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i){let t=new bg,e=Eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new oe,o=new oe;function a(c){let h=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,A=0,T=0,b=0,P=0,C=0,I=0;c.sort(Tg);for(let S=0,M=c.length;S<M;S++){let L=c[S],J=L.color,k=L.intensity,$=L.distance,it=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=J.r*k,f+=J.g*k,u+=J.b*k;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],k);I++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,q=e.get(L);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=it,n.directionalShadowMatrix[p]=L.shadow.matrix,A++}n.directional[p]=Z,p++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(J).multiplyScalar(k),Z.distance=$,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[v]=Z;let ot=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,ot.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=ot.matrix,L.castShadow){let q=e.get(L);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=it,b++}v++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(J).multiplyScalar(k),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Z,m++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let ot=L.shadow,q=e.get(L);q.shadowIntensity=ot.intensity,q.shadowBias=ot.bias,q.shadowNormalBias=ot.normalBias,q.shadowRadius=ot.radius,q.shadowMapSize=ot.mapSize,q.shadowCameraNear=ot.camera.near,q.shadowCameraFar=ot.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=it,n.pointShadowMatrix[_]=L.shadow.matrix,T++}n.point[_]=Z,_++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(k),Z.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[d]=Z,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let O=n.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==A||O.numPointShadows!==T||O.numSpotShadows!==b||O.numSpotMaps!==P||O.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=A,O.numPointShadows=T,O.numSpotShadows=b,O.numSpotMaps=P,O.numLightProbes=I,n.version=wg++)}function l(c,h){let f=0,u=0,p=0,_=0,v=0,m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let T=c[d];if(T.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(T.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Pc(i){let t=new Ag(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Rg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Pc(i),t.set(s,[a])):r>=o.length?(a=new Pc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ka=class extends Li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends Li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Pg(i,t,e){let n=new Br,s=new ce,r=new ce,o=new ye,a=new ka({depthPacking:Uu}),l=new Va,c={},h=e.maxTextureSize,f={[hi]:Ke,[Ke]:hi,[qn]:qn},u=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Cg,fragmentShader:Ig}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Qe;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Oe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let d=this.type;this.render=function(C,I,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),J=i.state;J.setBlending(li),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let k=d!==Wn&&this.type===Wn,$=d===Wn&&this.type!==Wn;for(let it=0,Z=C.length;it<Z;it++){let ot=C[it],q=ot.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ht=q.getFrameExtents();if(s.multiply(ht),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,q.mapSize.y=r.y)),q.map===null||k===!0||$===!0){let Rt=this.type!==Wn?{minFilter:Te,magFilter:Te}:{};q.map!==null&&q.map.dispose(),q.map=new gn(s.x,s.y,Rt),q.map.texture.name=ot.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let _t=q.getViewportCount();for(let Rt=0;Rt<_t;Rt++){let Wt=q.getViewport(Rt);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),J.viewport(o),q.updateMatrices(ot,Rt),n=q.getFrustum(),b(I,O,q.camera,ot,this.type)}q.isPointLightShadow!==!0&&this.type===Wn&&A(q,O),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function A(C,I){let O=t.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,O,u,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,O,p,v,null)}function T(C,I,O,S){let M=null,L=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=O.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let J=M.uuid,k=I.uuid,$=c[J];$===void 0&&($={},c[J]=$);let it=$[k];it===void 0&&(it=M.clone(),$[k]=it,I.addEventListener("dispose",P)),M=it}if(M.visible=I.visible,M.wireframe=I.wireframe,S===Wn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:f[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let J=i.properties.get(M);J.light=O}return M}function b(C,I,O,S,M){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Wn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let k=t.update(C),$=C.material;if(Array.isArray($)){let it=k.groups;for(let Z=0,ot=it.length;Z<ot;Z++){let q=it[Z],ht=$[q.materialIndex];if(ht&&ht.visible){let _t=T(C,ht,S,M);C.onBeforeShadow(i,C,I,O,k,_t,q),i.renderBufferDirect(O,null,k,_t,C,q),C.onAfterShadow(i,C,I,O,k,_t,q)}}}else if($.visible){let it=T(C,$,S,M);C.onBeforeShadow(i,C,I,O,k,it,null),i.renderBufferDirect(O,null,k,it,C,null),C.onAfterShadow(i,C,I,O,k,it,null)}}let J=C.children;for(let k=0,$=J.length;k<$;k++)b(J[k],I,O,S,M)}function P(C){C.target.removeEventListener("dispose",P);for(let O in c){let S=c[O],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Lg={[Go]:Wo,[Xo]:Zo,[qo]:$o,[cs]:Yo,[Wo]:Go,[Zo]:Xo,[$o]:qo,[Yo]:cs};function Dg(i,t){function e(){let D=!1,ct=new ye,X=null,Q=new ye(0,0,0,0);return{setMask:function(pt){X!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){D=pt},setClear:function(pt,mt,Ot,pe,Me){Me===!0&&(pt*=pe,mt*=pe,Ot*=pe),ct.set(pt,mt,Ot,pe),Q.equals(ct)===!1&&(i.clearColor(pt,mt,Ot,pe),Q.copy(ct))},reset:function(){D=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,ct=!1,X=null,Q=null,pt=null;return{setReversed:function(mt){if(ct!==mt){let Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let pe=pt;pt=null,this.setClear(pe)}ct=mt},getReversed:function(){return ct},setTest:function(mt){mt?lt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(mt){X!==mt&&!D&&(i.depthMask(mt),X=mt)},setFunc:function(mt){if(ct&&(mt=Lg[mt]),Q!==mt){switch(mt){case Go:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=mt}},setLocked:function(mt){D=mt},setClear:function(mt){pt!==mt&&(ct&&(mt=1-mt),i.clearDepth(mt),pt=mt)},reset:function(){D=!1,X=null,Q=null,pt=null,ct=!1}}}function s(){let D=!1,ct=null,X=null,Q=null,pt=null,mt=null,Ot=null,pe=null,Me=null;return{setTest:function(ne){D||(ne?lt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ne){ct!==ne&&!D&&(i.stencilMask(ne),ct=ne)},setFunc:function(ne,qe,ke){(X!==ne||Q!==qe||pt!==ke)&&(i.stencilFunc(ne,qe,ke),X=ne,Q=qe,pt=ke)},setOp:function(ne,qe,ke){(mt!==ne||Ot!==qe||pe!==ke)&&(i.stencilOp(ne,qe,ke),mt=ne,Ot=qe,pe=ke)},setLocked:function(ne){D=ne},setClear:function(ne){Me!==ne&&(i.clearStencil(ne),Me=ne)},reset:function(){D=!1,ct=null,X=null,Q=null,pt=null,mt=null,Ot=null,pe=null,Me=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,p=[],_=null,v=!1,m=null,d=null,A=null,T=null,b=null,P=null,C=null,I=new re(0,0,0),O=0,S=!1,M=null,L=null,J=null,k=null,$=null,it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ot=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=ot>=1):q.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=ot>=2);let ht=null,_t={},Rt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ie=new ye().fromArray(Rt),Y=new ye().fromArray(Wt);function at(D,ct,X,Q){let pt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(D,mt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<X;Ot++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return mt}let bt={};bt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(cs),Yt(!1),$t(Ul),lt(i.CULL_FACE),U(li);function lt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function It(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,ct){return f[D]!==ct?(i.bindFramebuffer(D,ct),f[D]=ct,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Bt(D,ct){let X=p,Q=!1;if(D){X=u.get(ct),X===void 0&&(X=[],u.set(ct,X));let pt=D.textures;if(X.length!==pt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Ot=pt.length;mt<Ot;mt++)X[mt]=i.COLOR_ATTACHMENT0+mt;X.length=pt.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function _e(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Kt={[wi]:i.FUNC_ADD,[ou]:i.FUNC_SUBTRACT,[au]:i.FUNC_REVERSE_SUBTRACT};Kt[lu]=i.MIN,Kt[cu]=i.MAX;let ae={[hu]:i.ZERO,[uu]:i.ONE,[du]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[gu]:i.DST_COLOR,[pu]:i.DST_ALPHA,[fu]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[_u]:i.ONE_MINUS_DST_COLOR,[mu]:i.ONE_MINUS_DST_ALPHA,[vu]:i.CONSTANT_COLOR,[yu]:i.ONE_MINUS_CONSTANT_COLOR,[Mu]:i.CONSTANT_ALPHA,[Su]:i.ONE_MINUS_CONSTANT_ALPHA};function U(D,ct,X,Q,pt,mt,Ot,pe,Me,ne){if(D===li){v===!0&&(It(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),D!==ru){if(D!==m||ne!==S){if((d!==wi||b!==wi)&&(i.blendEquation(i.FUNC_ADD),d=wi,b=wi),ne)switch(D){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,T=null,P=null,C=null,I.set(0,0,0),O=0,m=D,S=ne}return}pt=pt||ct,mt=mt||X,Ot=Ot||Q,(ct!==d||pt!==b)&&(i.blendEquationSeparate(Kt[ct],Kt[pt]),d=ct,b=pt),(X!==A||Q!==T||mt!==P||Ot!==C)&&(i.blendFuncSeparate(ae[X],ae[Q],ae[mt],ae[Ot]),A=X,T=Q,P=mt,C=Ot),(pe.equals(I)===!1||Me!==O)&&(i.blendColor(pe.r,pe.g,pe.b,Me),I.copy(pe),O=Me),m=D,S=!1}function Ie(D,ct){D.side===qn?It(i.CULL_FACE):lt(i.CULL_FACE);let X=D.side===Ke;ct&&(X=!X),Yt(X),D.blending===rs&&D.transparent===!1?U(li):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),he(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function $t(D){D!==nu?(lt(i.CULL_FACE),D!==L&&(D===Ul?i.cullFace(i.BACK):D===iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),L=D}function Mt(D){D!==J&&(Z&&i.lineWidth(D),J=D)}function he(D,ct,X){D?(lt(i.POLYGON_OFFSET_FILL),(k!==ct||$!==X)&&(i.polygonOffset(ct,X),k=ct,$=X)):It(i.POLYGON_OFFSET_FILL)}function Ct(D){D?lt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+it-1),ht!==D&&(i.activeTexture(D),ht=D)}function x(D,ct,X){X===void 0&&(ht===null?X=i.TEXTURE0+it-1:X=ht);let Q=_t[X];Q===void 0&&(Q={type:void 0,texture:void 0},_t[X]=Q),(Q.type!==D||Q.texture!==ct)&&(ht!==X&&(i.activeTexture(X),ht=X),i.bindTexture(D,ct||bt[D]),Q.type=D,Q.texture=ct)}function B(){let D=_t[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){ie.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function yt(D){Y.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Zt(D,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let Q=X.get(D);Q===void 0&&(Q=i.getUniformBlockIndex(ct,D.name),X.set(D,Q))}function Vt(D,ct){let Q=c.get(ct).get(D);l.get(ct)!==Q&&(i.uniformBlockBinding(ct,Q,D.__bindingPointIndex),l.set(ct,Q))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,_t={},f={},u=new WeakMap,p=[],_=null,v=!1,m=null,d=null,A=null,T=null,b=null,P=null,C=null,I=new re(0,0,0),O=0,S=!1,M=null,L=null,J=null,k=null,$=null,ie.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:It,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:_e,setBlending:U,setMaterial:Ie,setFlipSided:Yt,setCullFace:$t,setLineWidth:Mt,setPolygonOffset:he,setScissorTest:Ct,activeTexture:w,bindTexture:x,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Pt,updateUBOMapping:Zt,uniformBlockBinding:Vt,texStorage2D:Ht,texStorage3D:st,texSubImage2D:K,texSubImage3D:xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:Lt,viewport:yt,reset:zt}}function Lc(i,t,e,n){let s=Ug(n);switch(e){case Gc:return i*t;case Xc:return i*t;case qc:return i*t*2;case Zr:return i*t/s.components*s.byteLength;case ol:return i*t/s.components*s.byteLength;case Yc:return i*t*2/s.components*s.byteLength;case al:return i*t*2/s.components*s.byteLength;case Wc:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ll:return i*t*4/s.components*s.byteLength;case Er:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:case ia:return Math.max(i,16)*Math.max(t,8)/4;case ta:case na:return Math.max(i,8)*Math.max(t,8)/2;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rr:case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zc:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ea:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ug(i){switch(i){case An:case kc:return{byteLength:1,components:1};case zs:case Vc:case ks:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case Ii:case il:case Tn:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ng(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return p?new OffscreenCanvas(w,x):Pr("canvas")}function v(w,x,B){let j=1,tt=Ct(w);if((tt.width>B||tt.height>B)&&(j=B/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let K=Math.floor(j*tt.width),xt=Math.floor(j*tt.height);f===void 0&&(f=_(K,xt));let ut=x?_(K,xt):f;return ut.width=K,ut.height=xt,ut.getContext("2d").drawImage(w,0,0,K,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+xt+")."),ut}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,B,j,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=x;if(x===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),x===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),x===i.RGBA){let xt=tt?$r:te.getTransfer(j);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=xt===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(w,x){let B;return w?x===null||x===Ii||x===ds?B=i.DEPTH24_STENCIL8:x===Tn?B=i.DEPTH32F_STENCIL8:x===zs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ii||x===ds?B=i.DEPTH_COMPONENT24:x===Tn?B=i.DEPTH_COMPONENT32F:x===zs&&(B=i.DEPTH_COMPONENT16),B}function P(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Te&&w.minFilter!==Un?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){let x=w.target;x.removeEventListener("dispose",C),O(x),x.isVideoTexture&&h.delete(x)}function I(w){let x=w.target;x.removeEventListener("dispose",I),M(x)}function O(w){let x=n.get(w);if(x.__webglInit===void 0)return;let B=w.source,j=u.get(B);if(j){let tt=j[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(w),Object.keys(j).length===0&&u.delete(B)}n.remove(w)}function S(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let B=w.source,j=u.get(B);delete j[x.__cacheKey],o.memory.textures--}function M(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let tt=0;tt<x.__webglFramebuffer[j].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[j][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=w.textures;for(let j=0,tt=B.length;j<tt;j++){let K=n.get(B[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(w)}let L=0;function J(){L=0}function k(){let w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function $(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function it(w,x){let B=n.get(w);if(w.isVideoTexture&&Mt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,w,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Z(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Y(B,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function ot(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Y(B,w,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function q(w,x){let B=n.get(w);if(w.version>0&&B.__version!==w.version){at(B,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let ht={[Qo]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},_t={[Te]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},Rt={[Ou]:i.NEVER,[Gu]:i.ALWAYS,[Bu]:i.LESS,[$c]:i.LEQUAL,[zu]:i.EQUAL,[Hu]:i.GEQUAL,[ku]:i.GREATER,[Vu]:i.NOTEQUAL};function Wt(w,x){if(x.type===Tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Un||x.magFilter===co||x.magFilter===tr||x.magFilter===Ci||x.minFilter===Un||x.minFilter===co||x.minFilter===tr||x.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ht[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ht[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ht[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Te||x.minFilter!==tr&&x.minFilter!==Ci||x.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));let j=x.source,tt=u.get(j);tt===void 0&&(tt={},u.set(j,tt));let K=$(x);if(K!==w.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[K].usedTimes++;let xt=tt[w.__cacheKey];xt!==void 0&&(tt[w.__cacheKey].usedTimes--,xt.usedTimes===0&&S(x)),w.__cacheKey=K,w.__webglTexture=tt[K].texture}return B}function Y(w,x,B){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let tt=ie(w,x),K=x.source;e.bindTexture(j,w.__webglTexture,i.TEXTURE0+B);let xt=n.get(K);if(K.version!==xt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let ut=te.getPrimaries(te.workingColorSpace),gt=x.colorSpace===ai?null:te.getPrimaries(x.colorSpace),Ht=x.colorSpace===ai||ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let st=v(x.image,!1,s.maxTextureSize);st=he(x,st);let vt=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type),Lt=T(x.internalFormat,vt,Pt,x.colorSpace,x.isVideoTexture);Wt(j,x);let yt,Zt=x.mipmaps,Vt=x.isVideoTexture!==!0,zt=xt.__version===void 0||tt===!0,D=K.dataReady,ct=P(x,st);if(x.isDepthTexture)Lt=b(x.format===fs,x.type),zt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,vt,Pt,null));else if(x.isDataTexture)if(Zt.length>0){Vt&&zt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Zt[0].width,Zt[0].height);for(let X=0,Q=Zt.length;X<Q;X++)yt=Zt[X],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,vt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,yt.width,yt.height,0,vt,Pt,yt.data);x.generateMipmaps=!1}else Vt?(zt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,st.width,st.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,vt,Pt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,st.width,st.height,0,vt,Pt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,Zt[0].width,Zt[0].height,st.depth);for(let X=0,Q=Zt.length;X<Q;X++)if(yt=Zt[X],x.format!==rn)if(vt!==null)if(Vt){if(D)if(x.layerUpdates.size>0){let pt=Lc(yt.width,yt.height,x.format,x.type);for(let mt of x.layerUpdates){let Ot=yt.data.subarray(mt*pt/yt.data.BYTES_PER_ELEMENT,(mt+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,mt,yt.width,yt.height,1,vt,Ot)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,st.depth,vt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Lt,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,yt.width,yt.height,st.depth,vt,Pt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Lt,yt.width,yt.height,st.depth,0,vt,Pt,yt.data)}else{Vt&&zt&&e.texStorage2D(i.TEXTURE_2D,ct,Lt,Zt[0].width,Zt[0].height);for(let X=0,Q=Zt.length;X<Q;X++)yt=Zt[X],x.format!==rn?vt!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt.width,yt.height,vt,Pt,yt.data):e.texImage2D(i.TEXTURE_2D,X,Lt,yt.width,yt.height,0,vt,Pt,yt.data)}else if(x.isDataArrayTexture)if(Vt){if(zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Lt,st.width,st.height,st.depth),D)if(x.layerUpdates.size>0){let X=Lc(st.width,st.height,x.format,x.type);for(let Q of x.layerUpdates){let pt=st.data.subarray(Q*X/st.data.BYTES_PER_ELEMENT,(Q+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,vt,Pt,pt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(x.isData3DTexture)Vt?(zt&&e.texStorage3D(i.TEXTURE_3D,ct,Lt,st.width,st.height,st.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Pt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,vt,Pt,st.data);else if(x.isFramebufferTexture){if(zt)if(Vt)e.texStorage2D(i.TEXTURE_2D,ct,Lt,st.width,st.height);else{let X=st.width,Q=st.height;for(let pt=0;pt<ct;pt++)e.texImage2D(i.TEXTURE_2D,pt,Lt,X,Q,0,vt,Pt,null),X>>=1,Q>>=1}}else if(Zt.length>0){if(Vt&&zt){let X=Ct(Zt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Lt,X.width,X.height)}for(let X=0,Q=Zt.length;X<Q;X++)yt=Zt[X],Vt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,vt,Pt,yt):e.texImage2D(i.TEXTURE_2D,X,Lt,vt,Pt,yt);x.generateMipmaps=!1}else if(Vt){if(zt){let X=Ct(st);e.texStorage2D(i.TEXTURE_2D,ct,Lt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Pt,st)}else e.texImage2D(i.TEXTURE_2D,0,Lt,vt,Pt,st);m(x)&&d(j),xt.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function at(w,x,B){if(x.image.length!==6)return;let j=ie(w,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let K=n.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+B);let xt=te.getPrimaries(te.workingColorSpace),ut=x.colorSpace===ai?null:te.getPrimaries(x.colorSpace),gt=x.colorSpace===ai||xt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Ht=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!Ht&&!st?vt[Q]=v(x.image[Q],!0,s.maxCubemapSize):vt[Q]=st?x.image[Q].image:x.image[Q],vt[Q]=he(x,vt[Q]);let Pt=vt[0],Lt=r.convert(x.format,x.colorSpace),yt=r.convert(x.type),Zt=T(x.internalFormat,Lt,yt,x.colorSpace),Vt=x.isVideoTexture!==!0,zt=K.__version===void 0||j===!0,D=tt.dataReady,ct=P(x,Pt);Wt(i.TEXTURE_CUBE_MAP,x);let X;if(Ht){Vt&&zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Zt,Pt.width,Pt.height);for(let Q=0;Q<6;Q++){X=vt[Q].mipmaps;for(let pt=0;pt<X.length;pt++){let mt=X[pt];x.format!==rn?Lt!==null?Vt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,mt.width,mt.height,Lt,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,mt.width,mt.height,Lt,yt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Zt,mt.width,mt.height,0,Lt,yt,mt.data)}}}else{if(X=x.mipmaps,Vt&&zt){X.length>0&&ct++;let Q=Ct(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Lt,yt,vt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,vt[Q].width,vt[Q].height,0,Lt,yt,vt[Q].data);for(let pt=0;pt<X.length;pt++){let Ot=X[pt].image[Q].image;Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Ot.width,Ot.height,Lt,yt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Zt,Ot.width,Ot.height,0,Lt,yt,Ot.data)}}else{Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Lt,yt,vt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,Lt,yt,vt[Q]);for(let pt=0;pt<X.length;pt++){let mt=X[pt];Vt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Lt,yt,mt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Zt,Lt,yt,mt.image[Q])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),K.__version=tt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function bt(w,x,B,j,tt,K){let xt=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),gt=T(B.internalFormat,xt,ut,B.colorSpace),Ht=n.get(x),st=n.get(B);if(st.__renderTarget=x,!Ht.__hasExternalTextures){let vt=Math.max(1,x.width>>K),Pt=Math.max(1,x.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,gt,vt,Pt,x.depth,0,xt,ut,null):e.texImage2D(tt,K,gt,vt,Pt,0,xt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,tt,st.__webglTexture,0,Yt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,tt,st.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let j=x.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=b(x.stencilBuffer,tt),xt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Yt(x);$t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,K,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,w)}else{let j=x.textures;for(let tt=0;tt<j.length;tt++){let K=j[tt],xt=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),gt=T(K.internalFormat,xt,ut,K.colorSpace),Ht=Yt(x);B&&$t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,gt,x.width,x.height):$t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),it(x.depthTexture,0);let tt=j.__webglTexture,K=Yt(x);if(x.depthTexture.format===os)$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===fs)$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(w){let x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=j}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");It(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),lt(x.__webglDepthbuffer[j],w,!1);else{let tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),lt(x.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(w,x,B){let j=n.get(w);x!==void 0&&bt(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(w)}function _e(w){let x=w.texture,B=n.get(w),j=n.get(x);w.addEventListener("dispose",I);let tt=w.textures,K=w.isWebGLCubeRenderTarget===!0,xt=tt.length>1;if(xt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let gt=0;gt<x.mipmaps.length;gt++)B.__webglFramebuffer[ut][gt]=i.createFramebuffer()}else B.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<x.mipmaps.length;ut++)B.__webglFramebuffer[ut]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ut=0,gt=tt.length;ut<gt;ut++){let Ht=n.get(tt[ut]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&$t(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){let gt=tt[ut];B.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ut]);let Ht=r.convert(gt.format,gt.colorSpace),st=r.convert(gt.type),vt=T(gt.internalFormat,Ht,st,gt.colorSpace,w.isXRRenderTarget===!0),Pt=Yt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,B.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,x);for(let ut=0;ut<6;ut++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)bt(B.__webglFramebuffer[ut][gt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else bt(B.__webglFramebuffer[ut],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ut=0,gt=tt.length;ut<gt;ut++){let Ht=tt[ut],st=n.get(Ht);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Wt(i.TEXTURE_2D,Ht),bt(B.__webglFramebuffer,w,Ht,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Ht)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),Wt(ut,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)bt(B.__webglFramebuffer[gt],w,x,i.COLOR_ATTACHMENT0,ut,gt);else bt(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ut,0);m(x)&&d(ut),e.unbindTexture()}w.depthBuffer&&Dt(w)}function Kt(w){let x=w.textures;for(let B=0,j=x.length;B<j;B++){let tt=x[B];if(m(tt)){let K=A(w),xt=n.get(tt).__webglTexture;e.bindTexture(K,xt),d(K),e.unbindTexture()}}}let ae=[],U=[];function Ie(w){if(w.samples>0){if($t(w)===!1){let x=w.textures,B=w.width,j=w.height,tt=i.COLOR_BUFFER_BIT,K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(w),ut=x.length>1;if(ut)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[gt]);let Ht=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,tt,i.NEAREST),l===!0&&(ae.length=0,U.length=0,ae.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ae.push(K),U.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[gt]);let Ht=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Yt(w){return Math.min(s.maxSamples,w.samples)}function $t(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Mt(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function he(w,x){let B=w.colorSpace,j=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==fi&&B!==ai&&(te.getTransfer(B)===de?(j!==rn||tt!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=J,this.setTexture2D=it,this.setTexture2DArray=Z,this.setTexture3D=ot,this.setTextureCube=q,this.rebindTextures=Bt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=$t}function Fg(i,t){function e(n,s=ai){let r,o=te.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===rn)return i.RGBA;if(n===Xc)return i.LUMINANCE;if(n===qc)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Zr)return i.RED;if(n===ol)return i.RED_INTEGER;if(n===Yc)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===Er||n===wr||n===Tr||n===Ar)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sa||n===ra)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===la)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ca)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_a)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ya)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===Ma||n===Sa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===ba||n===Ea||n===wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ha=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ss=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`,Ga=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:Bg,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new _s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wa=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,_=null,v=new Ga,m=e.getContextAttributes(),d=null,A=null,T=[],b=[],P=new ce,C=null,I=new Xe;I.viewport=new ye;let O=new Xe;O.viewport=new ye;let S=[I,O],M=new Ha,L=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=T[Y];return at===void 0&&(at=new Bs,T[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=T[Y];return at===void 0&&(at=new Bs,T[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=T[Y];return at===void 0&&(at=new Bs,T[Y]=at),at.getHandSpace()};function k(Y){let at=b.indexOf(Y.inputSource);if(at===-1)return;let bt=T[at];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,c||o),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",it);for(let Y=0;Y<T.length;Y++){let at=b[Y];at!==null&&(b[Y]=null,T[Y].disconnect(at))}L=null,J=null,v.reset(),t.setRenderTarget(d),p=null,u=null,f=null,s=null,A=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",$),s.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new gn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,bt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?fs:os,bt=m.stencil?ds:Ii);let It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(It),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new gn(u.textureWidth,u.textureHeight,{format:rn,type:An,depthTexture:new xs(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function it(Y){for(let at=0;at<Y.removed.length;at++){let bt=Y.removed[at],lt=b.indexOf(bt);lt>=0&&(b[lt]=null,T[lt].disconnect(bt))}for(let at=0;at<Y.added.length;at++){let bt=Y.added[at],lt=b.indexOf(bt);if(lt===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=b.length){b.push(bt),lt=Dt;break}else if(b[Dt]===null){b[Dt]=bt,lt=Dt;break}if(lt===-1)break}let It=T[lt];It&&It.connect(bt)}}let Z=new z,ot=new z;function q(Y,at,bt){Z.setFromMatrixPosition(at.matrixWorld),ot.setFromMatrixPosition(bt.matrixWorld);let lt=Z.distanceTo(ot),It=at.projectionMatrix.elements,Dt=bt.projectionMatrix.elements,Bt=It[14]/(It[10]-1),_e=It[14]/(It[10]+1),Kt=(It[9]+1)/It[5],ae=(It[9]-1)/It[5],U=(It[8]-1)/It[0],Ie=(Dt[8]+1)/Dt[0],Yt=Bt*U,$t=Bt*Ie,Mt=lt/(-U+Ie),he=Mt*-U;if(at.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(Mt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Ct=Bt+Mt,w=_e+Mt,x=Yt-he,B=$t+(lt-he),j=Kt*_e/w*Ct,tt=ae*_e/w*Ct;Y.projectionMatrix.makePerspective(x,B,j,tt,Ct,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ht(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,bt=Y.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(bt=v.depthFar)),M.near=O.near=I.near=at,M.far=O.far=I.far=bt,(L!==M.near||J!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,J=M.far),I.layers.mask=Y.layers.mask|2,O.layers.mask=Y.layers.mask|4,M.layers.mask=I.layers.mask|O.layers.mask;let lt=Y.parent,It=M.cameras;ht(M,lt);for(let Dt=0;Dt<It.length;Dt++)ht(It[Dt],lt);It.length===2?q(M,I,O):M.projectionMatrix.copy(I.projectionMatrix),_t(Y,M,lt)};function _t(Y,at,bt){bt===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Aa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Rt=null;function Wt(Y,at){if(h=at.getViewerPose(c||o),_=at,h!==null){let bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let lt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Dt=0;Dt<bt.length;Dt++){let Bt=bt[Dt],_e=null;if(p!==null)_e=p.getViewport(Bt);else{let ae=f.getViewSubImage(u,Bt);_e=ae.viewport,Dt===0&&(t.setRenderTargetTextures(A,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(A))}let Kt=S[Dt];Kt===void 0&&(Kt=new Xe,Kt.layers.enable(Dt),Kt.viewport=new ye,S[Dt]=Kt),Kt.matrix.fromArray(Bt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Bt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(_e.x,_e.y,_e.width,_e.height),Dt===0&&(M.matrix.copy(Kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Kt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let Dt=f.getDepthInformation(bt[0]);Dt&&Dt.isValid&&Dt.texture&&v.init(t,Dt,s.renderState)}}for(let bt=0;bt<T.length;bt++){let lt=b[bt],It=T[bt];lt!==null&&It!==void 0&&It.update(lt,at,c||o)}Rt&&Rt(Y,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),_=null}let ie=new jc;ie.setAnimationLoop(Wt),this.setAnimationLoop=function(Y){Rt=Y},this.dispose=function(){}}},bi=new Rn,kg=new oe;function Vg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Qc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,T,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ke&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ke&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=t.get(d),T=A.envMap,b=A.envMapRotation;T&&(m.envMap.value=T,bi.copy(b),bi.x*=-1,bi.y*=-1,bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(bi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){let b=T.program;n.uniformBlockBinding(A,b)}function c(A,T){let b=s[A.id];b===void 0&&(_(A),b=h(A),s[A.id]=b,A.addEventListener("dispose",m));let P=T.program;n.updateUBOMapping(A,P);let C=t.render.frame;r[A.id]!==C&&(u(A),r[A.id]=C)}function h(A){let T=f();A.__bindingPointIndex=T;let b=i.createBuffer(),P=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let T=s[A.id],b=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,I=b.length;C<I;C++){let O=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,M=O.length;S<M;S++){let L=O[S];if(p(L,C,S,P)===!0){let J=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],$=0;for(let it=0;it<k.length;it++){let Z=k[it],ot=v(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,J+$,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,$),$+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,T,b,P){let C=A.value,I=T+"_"+b;if(P[I]===void 0)return typeof C=="number"||typeof C=="boolean"?P[I]=C:P[I]=C.clone(),!0;{let O=P[I];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return P[I]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function _(A){let T=A.uniforms,b=0,P=16;for(let I=0,O=T.length;I<O;I++){let S=Array.isArray(T[I])?T[I]:[T[I]];for(let M=0,L=S.length;M<L;M++){let J=S[M],k=Array.isArray(J.value)?J.value:[J.value];for(let $=0,it=k.length;$<it;$++){let Z=k[$],ot=v(Z),q=b%P,ht=q%ot.boundary,_t=q+ht;b+=ht,_t!==0&&P-_t<ot.storage&&(b+=P-_t),J.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=ot.storage}}}let C=b%P;return C>0&&(b+=P-C),A.__size=b,A.__cache={},this}function v(A){let T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){let T=A.target;T.removeEventListener("dispose",m);let b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var kr=class{constructor(t={}){let{canvas:e=Xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=ci,this.toneMappingExposure=1;let b=this,P=!1,C=0,I=0,O=null,S=-1,M=null,L=new ye,J=new ye,k=null,$=new re(0),it=0,Z=e.width,ot=e.height,q=1,ht=null,_t=null,Rt=new ye(0,0,Z,ot),Wt=new ye(0,0,Z,ot),ie=!1,Y=new Br,at=!1,bt=!1,lt=new oe,It=new oe,Dt=new z,Bt=new ye,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function ae(){return O===null?q:1}let U=n;function Ie(y,N){return e.getContext(y,N)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),U===null){let N="webgl2";if(U=Ie(N,y),U===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Yt,$t,Mt,he,Ct,w,x,B,j,tt,K,xt,ut,gt,Ht,st,vt,Pt,Lt,yt,Zt,Vt,zt,D;function ct(){Yt=new sm(U),Yt.init(),Vt=new Fg(U,Yt),$t=new Qp(U,Yt,t,Vt),Mt=new Dg(U,Yt),$t.reverseDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),he=new am(U),Ct=new yg,w=new Ng(U,Yt,Mt,Ct,$t,Vt,he),x=new tm(b),B=new im(b),j=new fd(U),zt=new Jp(U,j),tt=new rm(U,j,he,zt),K=new cm(U,tt,j,he),Lt=new lm(U,$t,w),st=new jp(Ct),xt=new vg(b,x,B,Yt,$t,zt,st),ut=new Vg(b,Ct),gt=new Sg,Ht=new Rg(Yt),Pt=new $p(b,x,B,Mt,K,p,l),vt=new Pg(b,K,$t),D=new Hg(U,he,$t,Mt),yt=new Kp(U,Yt,he),Zt=new om(U,Yt,he),he.programs=xt.programs,b.capabilities=$t,b.extensions=Yt,b.properties=Ct,b.renderLists=gt,b.shadowMap=vt,b.state=Mt,b.info=he}ct();let X=new Wa(b,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=Yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(Z,ot,!1))},this.getSize=function(y){return y.set(Z,ot)},this.setSize=function(y,N,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=y,ot=N,e.width=Math.floor(y*q),e.height=Math.floor(N*q),V===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(Z*q,ot*q).floor()},this.setDrawingBufferSize=function(y,N,V){Z=y,ot=N,q=V,e.width=Math.floor(y*V),e.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,N,V,H){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,N,V,H),Mt.viewport(L.copy(Rt).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(Wt)},this.setScissor=function(y,N,V,H){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,N,V,H),Mt.scissor(J.copy(Wt).multiplyScalar(q).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){Mt.setScissorTest(ie=y)},this.setOpaqueSort=function(y){ht=y},this.setTransparentSort=function(y){_t=y},this.getClearColor=function(y){return y.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(y=!0,N=!0,V=!0){let H=0;if(y){let F=!1;if(O!==null){let rt=O.texture.format;F=rt===ll||rt===al||rt===ol}if(F){let rt=O.texture.type,dt=rt===An||rt===Ii||rt===zs||rt===ds||rt===sl||rt===rl,Et=Pt.getClearColor(),wt=Pt.getClearAlpha(),Ut=Et.r,Nt=Et.g,St=Et.b;dt?(_[0]=Ut,_[1]=Nt,_[2]=St,_[3]=wt,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=Ut,v[1]=Nt,v[2]=St,v[3]=wt,U.clearBufferiv(U.COLOR,0,v))}else H|=U.COLOR_BUFFER_BIT}N&&(H|=U.DEPTH_BUFFER_BIT),V&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),gt.dispose(),Ht.dispose(),Ct.dispose(),x.dispose(),B.dispose(),K.dispose(),zt.dispose(),D.dispose(),xt.dispose(),X.dispose(),X.removeEventListener("sessionstart",In),X.removeEventListener("sessionend",Rs),ln.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let y=he.autoReset,N=vt.enabled,V=vt.autoUpdate,H=vt.needsUpdate,F=vt.type;ct(),he.autoReset=y,vt.enabled=N,vt.autoUpdate=V,vt.needsUpdate=H,vt.type=F}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ot(y){let N=y.target;N.removeEventListener("dispose",Ot),pe(N)}function pe(y){Me(y),Ct.remove(y)}function Me(y){let N=Ct.get(y).programs;N!==void 0&&(N.forEach(function(V){xt.releaseProgram(V)}),y.isShaderMaterial&&xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,H,F,rt){N===null&&(N=_e);let dt=F.isMesh&&F.matrixWorld.determinant()<0,Et=$s(y,N,V,H,F);Mt.setMaterial(H,dt);let wt=V.index,Ut=1;if(H.wireframe===!0){if(wt=tt.getWireframeAttribute(V),wt===void 0)return;Ut=2}let Nt=V.drawRange,St=V.attributes.position,Qt=Nt.start*Ut,le=(Nt.start+Nt.count)*Ut;rt!==null&&(Qt=Math.max(Qt,rt.start*Ut),le=Math.min(le,(rt.start+rt.count)*Ut)),wt!==null?(Qt=Math.max(Qt,0),le=Math.min(le,wt.count)):St!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,St.count));let fe=le-Qt;if(fe<0||fe===1/0)return;zt.setup(F,H,Et,V,wt);let xe,Jt=yt;if(wt!==null&&(xe=j.get(wt),Jt=Zt,Jt.setIndex(xe)),F.isMesh)H.wireframe===!0?(Mt.setLineWidth(H.wireframeLinewidth*ae()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(F.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),Mt.setLineWidth(Tt*ae()),F.isLineSegments?Jt.setMode(U.LINES):F.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else F.isPoints?Jt.setMode(U.POINTS):F.isSprite&&Jt.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Tt=F._multiDrawStarts,je=F._multiDrawCounts,jt=F._multiDrawCount,Ue=wt?j.get(wt).bytesPerElement:1,hn=Ct.get(H).currentProgram.getUniforms();for(let Ve=0;Ve<jt;Ve++)hn.setValue(U,"_gl_DrawID",Ve),Jt.render(Tt[Ve]/Ue,je[Ve])}else if(F.isInstancedMesh)Jt.renderInstances(Qt,fe,F.count);else if(V.isInstancedBufferGeometry){let Tt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,je=Math.min(V.instanceCount,Tt);Jt.renderInstances(Qt,fe,je)}else Jt.render(Qt,fe)};function ne(y,N,V){y.transparent===!0&&y.side===qn&&y.forceSinglePass===!1?(y.side=Ke,y.needsUpdate=!0,On(y,N,V),y.side=hi,y.needsUpdate=!0,On(y,N,V),y.side=qn):On(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),d=Ht.get(V),d.init(N),T.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),y!==V&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let H=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let rt=F.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){let Et=rt[dt];ne(Et,V,F),H.add(Et)}else ne(rt,V,F),H.add(rt)}),T.pop(),d=null,H},this.compileAsync=function(y,N,V=null){let H=this.compile(y,N,V);return new Promise(F=>{function rt(){if(H.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){F(y);return}setTimeout(rt,10)}Yt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let qe=null;function ke(y){qe&&qe(y)}function In(){ln.stop()}function Rs(){ln.start()}let ln=new jc;ln.setAnimationLoop(ke),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(y){qe=y,X.setAnimationLoop(y),y===null?ln.stop():ln.start()},X.addEventListener("sessionstart",In),X.addEventListener("sessionend",Rs),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,N,O),d=Ht.get(y,T.length),d.init(N),T.push(d),It.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(It),bt=this.localClippingEnabled,at=st.init(this.clippingPlanes,bt),m=gt.get(y,A.length),m.init(),A.push(m),X.enabled===!0&&X.isPresenting===!0){let rt=b.xr.getDepthSensingMesh();rt!==null&&Pn(rt,N,-1/0,b.sortObjects)}Pn(y,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ht,_t),Kt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Kt&&Pt.addToRenderList(m,y),this.info.render.frame++,at===!0&&st.beginShadows();let V=d.state.shadowsArray;vt.render(V,y,N),at===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){let rt=N.cameras;if(F.length>0)for(let dt=0,Et=rt.length;dt<Et;dt++){let wt=rt[dt];vn(H,F,y,wt)}Kt&&Pt.render(y);for(let dt=0,Et=rt.length;dt<Et;dt++){let wt=rt[dt];Bi(m,y,wt,wt.viewport)}}else F.length>0&&vn(H,F,y,N),Kt&&Pt.render(y),Bi(m,y,N);O!==null&&(w.updateMultisampleRenderTarget(O),w.updateRenderTargetMipmap(O)),y.isScene===!0&&y.onAfterRender(b,y,N),zt.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],at===!0&&st.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Pn(y,N,V,H){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){H&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(It);let dt=K.update(y),Et=y.material;Et.visible&&m.push(y,dt,Et,V,Bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){let dt=K.update(y),Et=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Bt.copy(dt.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(It)),Array.isArray(Et)){let wt=dt.groups;for(let Ut=0,Nt=wt.length;Ut<Nt;Ut++){let St=wt[Ut],Qt=Et[St.materialIndex];Qt&&Qt.visible&&m.push(y,dt,Qt,V,Bt.z,St)}}else Et.visible&&m.push(y,dt,Et,V,Bt.z,null)}}let rt=y.children;for(let dt=0,Et=rt.length;dt<Et;dt++)Pn(rt[dt],N,V,H)}function Bi(y,N,V,H){let F=y.opaque,rt=y.transmissive,dt=y.transparent;d.setupLightsView(V),at===!0&&st.setGlobalState(b.clippingPlanes,V),H&&Mt.viewport(L.copy(H)),F.length>0&&Fn(F,N,V),rt.length>0&&Fn(rt,N,V),dt.length>0&&Fn(dt,N,V),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function vn(y,N,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new gn(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?ks:An,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let rt=d.state.transmissionRenderTarget[H.id],dt=H.viewport||L;rt.setSize(dt.z,dt.w);let Et=b.getRenderTarget();b.setRenderTarget(rt),b.getClearColor($),it=b.getClearAlpha(),it<1&&b.setClearColor(16777215,.5),b.clear(),Kt&&Pt.render(V);let wt=b.toneMapping;b.toneMapping=ci;let Ut=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),at===!0&&st.setGlobalState(b.clippingPlanes,H),Fn(y,V,H),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let St=0,Qt=N.length;St<Qt;St++){let le=N[St],fe=le.object,xe=le.geometry,Jt=le.material,Tt=le.group;if(Jt.side===qn&&fe.layers.test(H.layers)){let je=Jt.side;Jt.side=Ke,Jt.needsUpdate=!0,zi(fe,V,H,xe,Jt,Tt),Jt.side=je,Jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}b.setRenderTarget(Et),b.setClearColor($,it),Ut!==void 0&&(H.viewport=Ut),b.toneMapping=wt}function Fn(y,N,V){let H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,rt=y.length;F<rt;F++){let dt=y[F],Et=dt.object,wt=dt.geometry,Ut=H===null?dt.material:H,Nt=dt.group;Et.layers.test(V.layers)&&zi(Et,N,V,wt,Ut,Nt)}}function zi(y,N,V,H,F,rt){y.onBeforeRender(b,N,V,H,F,rt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(b,N,V,H,y,rt),F.transparent===!0&&F.side===qn&&F.forceSinglePass===!1?(F.side=Ke,F.needsUpdate=!0,b.renderBufferDirect(V,N,H,F,y,rt),F.side=hi,F.needsUpdate=!0,b.renderBufferDirect(V,N,H,F,y,rt),F.side=qn):b.renderBufferDirect(V,N,H,F,y,rt),y.onAfterRender(b,N,V,H,F,rt)}function On(y,N,V){N.isScene!==!0&&(N=_e);let H=Ct.get(y),F=d.state.lights,rt=d.state.shadowsArray,dt=F.state.version,Et=xt.getParameters(y,F.state,rt,N,V),wt=xt.getProgramCacheKey(Et),Ut=H.programs;H.environment=y.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(y.isMeshStandardMaterial?B:x).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ut===void 0&&(y.addEventListener("dispose",Ot),Ut=new Map,H.programs=Ut);let Nt=Ut.get(wt);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===dt)return cn(y,Et),Nt}else Et.uniforms=xt.getUniforms(y),y.onBeforeCompile(Et,b),Nt=xt.acquireProgram(Et,wt),Ut.set(wt,Nt),H.uniforms=Et.uniforms;let St=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(St.clippingPlanes=st.uniform),cn(y,Et),H.needsLights=Js(y),H.lightsStateVersion=dt,H.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function Cs(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=ls.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function cn(y,N){let V=Ct.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function $s(y,N,V,H,F){N.isScene!==!0&&(N=_e),w.resetTextureUnits();let rt=N.fog,dt=H.isMeshStandardMaterial?N.environment:null,Et=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fi,wt=(H.isMeshStandardMaterial?B:x).get(H.envMap||dt),Ut=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Nt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,le=!!V.morphAttributes.color,fe=ci;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(fe=b.toneMapping);let xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=xe!==void 0?xe.length:0,Tt=Ct.get(H),je=d.state.lights;if(at===!0&&(bt===!0||y!==M)){let Pe=y===M&&H.id===S;st.setState(H,y,Pe)}let jt=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==je.state.version||Tt.outputColorSpace!==Et||F.isBatchedMesh&&Tt.batching===!1||!F.isBatchedMesh&&Tt.batching===!0||F.isBatchedMesh&&Tt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Tt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Tt.instancing===!1||!F.isInstancedMesh&&Tt.instancing===!0||F.isSkinnedMesh&&Tt.skinning===!1||!F.isSkinnedMesh&&Tt.skinning===!0||F.isInstancedMesh&&Tt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Tt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Tt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Tt.instancingMorph===!1&&F.morphTexture!==null||Tt.envMap!==wt||H.fog===!0&&Tt.fog!==rt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==st.numPlanes||Tt.numIntersection!==st.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Nt||Tt.morphTargets!==St||Tt.morphNormals!==Qt||Tt.morphColors!==le||Tt.toneMapping!==fe||Tt.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,Tt.__version=H.version);let Ue=Tt.currentProgram;jt===!0&&(Ue=On(H,N,F));let hn=!1,Ve=!1,Qn=!1,se=Ue.getUniforms(),tn=Tt.uniforms;if(Mt.useProgram(Ue.program)&&(hn=!0,Ve=!0,Qn=!0),H.id!==S&&(S=H.id,Ve=!0),hn||M!==y){Mt.buffers.depth.getReversed()?(lt.copy(y.projectionMatrix),Yu(lt),Zu(lt),se.setValue(U,"projectionMatrix",lt)):se.setValue(U,"projectionMatrix",y.projectionMatrix),se.setValue(U,"viewMatrix",y.matrixWorldInverse);let un=se.map.cameraPosition;un!==void 0&&un.setValue(U,Dt.setFromMatrixPosition(y.matrixWorld)),$t.logarithmicDepthBuffer&&se.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&se.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Ve=!0,Qn=!0)}if(F.isSkinnedMesh){se.setOptional(U,F,"bindMatrix"),se.setOptional(U,F,"bindMatrixInverse");let Pe=F.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),se.setValue(U,"boneTexture",Pe.boneTexture,w))}F.isBatchedMesh&&(se.setOptional(U,F,"batchingTexture"),se.setValue(U,"batchingTexture",F._matricesTexture,w),se.setOptional(U,F,"batchingIdTexture"),se.setValue(U,"batchingIdTexture",F._indirectTexture,w),se.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&se.setValue(U,"batchingColorTexture",F._colorsTexture,w));let Bn=V.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Lt.update(F,V,Ue),(Ve||Tt.receiveShadow!==F.receiveShadow)&&(Tt.receiveShadow=F.receiveShadow,se.setValue(U,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(tn.envMap.value=wt,tn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),Ve&&(se.setValue(U,"toneMappingExposure",b.toneMappingExposure),Tt.needsLights&&ki(tn,Qn),rt&&H.fog===!0&&ut.refreshFogUniforms(tn,rt),ut.refreshMaterialUniforms(tn,H,q,ot,d.state.transmissionRenderTarget[y.id]),ls.upload(U,Cs(Tt),tn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ls.upload(U,Cs(Tt),tn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&se.setValue(U,"center",F.center),se.setValue(U,"modelViewMatrix",F.modelViewMatrix),se.setValue(U,"normalMatrix",F.normalMatrix),se.setValue(U,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Pe=H.uniformsGroups;for(let un=0,Ln=Pe.length;un<Ln;un++){let jn=Pe[un];D.update(jn,Ue),D.bind(jn,Ue)}}return Ue}function ki(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Js(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,N,V){Ct.get(y.texture).__webglTexture=N,Ct.get(y.depthTexture).__webglTexture=V;let H=Ct.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){let V=Ct.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,V=0){O=y,C=N,I=V;let H=!0,F=null,rt=!1,dt=!1;if(y){let wt=Ct.get(y);if(wt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(wt.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(wt.__hasExternalTextures)w.rebindTextures(y,Ct.get(y.texture).__webglTexture,Ct.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let St=y.depthTexture;if(wt.__boundDepthTexture!==St){if(St!==null&&Ct.has(St)&&(y.width!==St.image.width||y.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}let Ut=y.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(dt=!0);let Nt=Ct.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?F=Nt[N][V]:F=Nt[N],rt=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?F=Ct.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[V]:F=Nt,L.copy(y.viewport),J.copy(y.scissor),k=y.scissorTest}else L.copy(Rt).multiplyScalar(q).floor(),J.copy(Wt).multiplyScalar(q).floor(),k=ie;if(Mt.bindFramebuffer(U.FRAMEBUFFER,F)&&H&&Mt.drawBuffers(y,F),Mt.viewport(L),Mt.scissor(J),Mt.setScissorTest(k),rt){let wt=Ct.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,V)}else if(dt){let wt=Ct.get(y.texture),Ut=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,V||0,Ut)}S=-1},this.readRenderTargetPixels=function(y,N,V,H,F,rt,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Et=Et[dt]),Et){Mt.bindFramebuffer(U.FRAMEBUFFER,Et);try{let wt=y.texture,Ut=wt.format,Nt=wt.type;if(!$t.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-H&&V>=0&&V<=y.height-F&&U.readPixels(N,V,H,F,Vt.convert(Ut),Vt.convert(Nt),rt)}finally{let wt=O!==null?Ct.get(O).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,H,F,rt,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Et=Et[dt]),Et){let wt=y.texture,Ut=wt.format,Nt=wt.type;if(!$t.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-H&&V>=0&&V<=y.height-F){Mt.bindFramebuffer(U.FRAMEBUFFER,Et);let St=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.bufferData(U.PIXEL_PACK_BUFFER,rt.byteLength,U.STREAM_READ),U.readPixels(N,V,H,F,Vt.convert(Ut),Vt.convert(Nt),0);let Qt=O!==null?Ct.get(O).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,Qt);let le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await qu(U,le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,St),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,rt),U.deleteBuffer(St),U.deleteSync(le),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,N=null,V=0){y.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);let H=Math.pow(2,-V),F=Math.floor(y.image.width*H),rt=Math.floor(y.image.height*H),dt=N!==null?N.x:0,Et=N!==null?N.y:0;w.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,dt,Et,F,rt),Mt.unbindTexture()},this.copyTextureToTexture=function(y,N,V=null,H=null,F=0){y.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let rt,dt,Et,wt,Ut,Nt,St,Qt,le,fe=y.isCompressedTexture?y.mipmaps[F]:y.image;V!==null?(rt=V.max.x-V.min.x,dt=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,wt=V.min.x,Ut=V.min.y,Nt=V.isBox3?V.min.z:0):(rt=fe.width,dt=fe.height,Et=fe.depth||1,wt=0,Ut=0,Nt=0),H!==null?(St=H.x,Qt=H.y,le=H.z):(St=0,Qt=0,le=0);let xe=Vt.convert(N.format),Jt=Vt.convert(N.type),Tt;N.isData3DTexture?(w.setTexture3D(N,0),Tt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Tt=U.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Tt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let je=U.getParameter(U.UNPACK_ROW_LENGTH),jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ue=U.getParameter(U.UNPACK_SKIP_PIXELS),hn=U.getParameter(U.UNPACK_SKIP_ROWS),Ve=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nt);let Qn=y.isDataArrayTexture||y.isData3DTexture,se=N.isDataArrayTexture||N.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let tn=Ct.get(y),Bn=Ct.get(N),Pe=Ct.get(tn.__renderTarget),un=Ct.get(Bn.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,Pe.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let Ln=0;Ln<Et;Ln++)Qn&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(y).__webglTexture,F,Nt+Ln),y.isDepthTexture?(se&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(N).__webglTexture,F,le+Ln),U.blitFramebuffer(wt,Ut,rt,dt,St,Qt,rt,dt,U.DEPTH_BUFFER_BIT,U.NEAREST)):se?U.copyTexSubImage3D(Tt,F,St,Qt,le+Ln,wt,Ut,rt,dt):U.copyTexSubImage2D(Tt,F,St,Qt,le+Ln,wt,Ut,rt,dt);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else se?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Tt,F,St,Qt,le,rt,dt,Et,xe,Jt,fe.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,F,St,Qt,le,rt,dt,Et,xe,fe.data):U.texSubImage3D(Tt,F,St,Qt,le,rt,dt,Et,xe,Jt,fe):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,St,Qt,rt,dt,xe,Jt,fe.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,St,Qt,fe.width,fe.height,xe,fe.data):U.texSubImage2D(U.TEXTURE_2D,F,St,Qt,rt,dt,xe,Jt,fe);U.pixelStorei(U.UNPACK_ROW_LENGTH,je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,hn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve),F===0&&N.generateMipmaps&&U.generateMipmap(Tt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(y,N,V=null,H=null,F=0){return y.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,y=arguments[2],N=arguments[3],F=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,V,H,F)},this.initRenderTarget=function(y){Ct.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){C=0,I=0,O=null,Mt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var vs=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Vr=class extends on{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Te,h=Te,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xa=class extends Li{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Hr=new z,Gr=new z,Dc=new oe,Ns=new Ur,Mr=new ps,ko=new z,Uc=new z,qa=class extends _n{constructor(t=new Qe,e=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Gr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hr.distanceTo(Gr);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;Dc.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(Dc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let d=h.getX(v),A=h.getX(v+1),T=Sr(this,t,Ns,l,d,A);T&&e.push(T)}if(this.isLineLoop){let v=h.getX(_-1),m=h.getX(p),d=Sr(this,t,Ns,l,v,m);d&&e.push(d)}}else{let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let d=Sr(this,t,Ns,l,v,v+1);d&&e.push(d)}if(this.isLineLoop){let v=Sr(this,t,Ns,l,_-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Gr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Gr,ko,Uc)>n)return;ko.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ko);if(!(l<t.near||l>t.far))return{distance:l,point:Uc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Nc=new z,Fc=new z,Wr=class extends qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Nc.fromBufferAttribute(e,s),Fc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nc.distanceTo(Fc);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xr=class i extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new z,u=new z,p=[],_=[],v=[],m=[];for(let d=0;d<=n;d++){let A=[],T=d/n,b=0;d===0&&o===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){let C=P/e;f.x=-t*Math.cos(s+C*r)*Math.sin(o+T*a),f.y=t*Math.cos(o+T*a),f.z=t*Math.sin(s+C*r)*Math.sin(o+T*a),_.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(C+b,1-T),A.push(c++)}h.push(A)}for(let d=0;d<n;d++)for(let A=0;A<e;A++){let T=h[d][A+1],b=h[d][A],P=h[d+1][A],C=h[d+1][A+1];(d!==0||o>0)&&p.push(T,b,C),(d!==n-1||l<Math.PI)&&p.push(b,P,C)}this.setIndex(p),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function br(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ya=class extends ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zl:r=t,a=2*e-n;break;case kl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:o=t,l=2*n-e;break;case kl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),v=_*_,m=v*_,d=-u*m+2*u*v-u*_,A=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*_+1,T=(-1-p)*m+(1.5+p)*v+.5*_,b=p*m-p*v;for(let P=0;P!==a;++P)r[P]=d*o[h+P]+A*o[c+P]+T*o[l+P]+b*o[f+P];return r}},Za=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},$a=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=br(e,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:br(t.times,Array),values:br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case Ta:e=this.InterpolantFactoryMethodLinear;break;case ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Gg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ho,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,p=f+n;for(let _=0;_!==n;++_){let v=e[f+_];if(v!==e[u+_]||v!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Ta;var Fi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Cr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Cn{};Ja.prototype.ValueTypeName="color";var Ka=class extends Cn{};Ka.prototype.ValueTypeName="number";var Qa=class extends ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)di.slerpFlat(r,0,o,c-a,o,c,l);return r}},qr=class extends Cn{InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Cr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Cn{};ja.prototype.ValueTypeName="vector";var tl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},Wg=new tl,el=class{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var hl="\\[\\]\\.:\\/",Xg=new RegExp("["+hl+"]","g"),ul="[^"+hl+"]",qg="[^"+hl.replace("\\.","")+"]",Yg=/((?:WC+[\/:])*)/.source.replace("WC",ul),Zg=/(WCOD+)?/.source.replace("WCOD",qg),$g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ul),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ul),Kg=new RegExp("^"+Yg+Zg+$g+Jg+"$"),Qg=["material","materials","bones","map"],nl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(t){let e=Kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=nl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Jn=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074,2693140,1121589,4333878,1200985,7614249,4797243,10651769,15986557,12456528,16739364,11069230,46403,416437,7685733,16739929,16752001],pi=32,Kr=64,jg=["top","side","bottom"],Qr=24,dl=8*Kr,mi=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6),xn=Math.PI*2;function uh(){let i=new Uint8Array(Qr*dl),t=new Vr(i,Qr,dl,Zr,An);return t.magFilter=Te,t.minFilter=Te,t.generateMipmaps=!1,t.flipY=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}function dh(i,t){let e=i.image.data;e.fill(0);for(let n=1;n<Kr;n++){let s=t[n];s&&jg.forEach((r,o)=>{let a=s[r];for(let l=0;l<8;l++)for(let c=0;c<8;c++)e[(n*8+(7-l))*Qr+o*8+c]=a[l*8+c]&31})}i.needsUpdate=!0}function to(i,t,e,n=[0,0,0],s=null){return{w:i,h:t,d:e,data:s||new Uint8Array(i*t*e),origin:[...n],pos:[0,0,0],angle:[0,0,0],dirty:!0,geometry:null,_m:new oe,_inv:new oe,_rot:new oe,_xfDirty:!0}}var pl=(i,t,e,n)=>t+i.w*(e+i.h*n);function Ss(i,t,e,n){return t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d?0:i.data[pl(i,t,e,n)]}function eo(i,t,e,n,s){t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d||(i.data[pl(i,t,e,n)]=s&63,i.dirty=!0)}var rh=new Rn;function fh(i,t=new oe){return rh.set(-i[0]*xn,i[1]*xn,i[2]*xn,"YXZ"),t.makeRotationFromEuler(rh)}function bs(i){if(!i._xfDirty)return;fh(i.angle,i._rot);let t=new oe().makeTranslation(-i.origin[0],-i.origin[1],-i.origin[2]),e=new oe().makeTranslation(i.pos[0],i.pos[1],i.pos[2]);i._m.copy(e).multiply(i._rot).multiply(t),i._inv.copy(i._m).invert(),i._xfDirty=!1}var jr=[{n:[0,1,0],f:0,v:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],f:2,v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[1,0,0],f:1,v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[-1,0,0],f:1,v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],f:1,v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],f:1,v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]}];function t0(i){let t=[],e=[],n=[],s=[],r=0;for(let a=0;a<i.d;a++)for(let l=0;l<i.h;l++)for(let c=0;c<i.w;c++){let h=i.data[pl(i,c,l,a)];if(h)for(let f=0;f<jr.length;f++){let u=jr[f];if(!Ss(i,c+u.n[0],l+u.n[1],a+u.n[2])){for(let p=0;p<4;p++)t.push(c+u.v[p][0],l+u.v[p][1],a+u.v[p][2]),e.push(u.uv[p][0],u.uv[p][1]),n.push(h,u.f,f+1);s.push(r,r+1,r+2,r,r+2,r+3),r+=4}}}let o=new Qe;return o.setAttribute("position",new be(t,3)),o.setAttribute("aUV",new be(e,2)),o.setAttribute("aTF",new be(n,3)),o.setIndex(r>65535?new ms(s,1):new Di(s,1)),o.computeBoundingSphere(),o}function ph(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=t0(i),i.dirty=!1),i.geometry}var ze=8,Hs=64,mh=[4,0,4],gh=(i,t,e)=>i+ze*(t+ze*e);function e0(i=null,t=mh,e=""){return{name:e,pivot:[...t],data:i||new Uint8Array(ze*ze*ze),dirty:!0,geometry:null}}function n0(i,t,e,n){return t<0||e<0||n<0||t>=ze||e>=ze||n>=ze?0:i.data[gh(t,e,n)]}function i0(i){let t=[],e=[],n=[],s=0;for(let o=0;o<ze;o++)for(let a=0;a<ze;a++)for(let l=0;l<ze;l++){let c=i.data[gh(l,a,o)];if(c)for(let h=0;h<jr.length;h++){let f=jr[h];if(!n0(i,l+f.n[0],a+f.n[1],o+f.n[2])){for(let u=0;u<4;u++)t.push(l+f.v[u][0],a+f.v[u][1],o+f.v[u][2]),e.push(c-1,h+1);n.push(s,s+1,s+2,s,s+2,s+3),s+=4}}}let r=new Qe;return r.setAttribute("position",new be(t,3)),r.setAttribute("aCD",new be(e,2)),r.setIndex(new Di(n,1)),r.computeBoundingSphere(),r}function _h(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=i0(i),i.dirty=!1),i.geometry}var oh=new oe,ah=new oe,lh=new oe,ch=new oe;function xh(i,t,e,n,s){return oh.makeTranslation(-i.pivot[0],-i.pivot[1],-i.pivot[2]),ch.makeScale(n[0]/ze,n[1]/ze,n[2]/ze),fh(e,lh),ah.makeTranslation(t[0],t[1],t[2]),s.copy(ah).multiply(lh).multiply(ch).multiply(oh)}function vh(i){let t=new Array(Hs).fill(null);return(i.vox||[]).forEach((e,n)=>{if(!e||n>=Hs)return;let s=e.data?Th(e.data):null;(!s||s.length!==ze*ze*ze)&&(s=null),t[n]=e0(s,e.pivot||mh,e.name||"")}),t}function yh(i){let t={value:Array.from({length:pi},()=>new z)};return ml(t,i),t}function ml(i,t){for(let e=0;e<pi;e++){let n=(t[e]??0)>>>0;i.value[e].set((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)}}var Gs=()=>Array.from({length:pi},(i,t)=>t),Es=()=>new Array(pi).fill(0),gl=`
  uniform vec3 uPalette[32];
  uniform float uRemap[32];
  uniform float uTrans[32];
  uniform float uOutline;   // outline palette index for this draw, or -1 for none
  uniform float uId;        // draw id, unique within a frame (1..65535)
  uniform float uInner;     // 1: outline inner edges too (creases, overlaps); 0: outer outline only
  layout(location = 0) out highp vec4 outColor;
  layout(location = 1) out highp vec4 outInfo;   // read by the outline pass
  vec3 palColor(int idx) {
    if (uTrans[idx] > 0.5) discard;          // palt applies to the original index
    return uPalette[int(uRemap[idx] + 0.5)];  // then pal() remap, then the real color
  }
  // dir: which way a map face points (1-6), or 0 for primitives. A draw with outline(c, false)
  // writes 7 instead: the outline pass then draws no lines inside it, only around it.
  void writePixel(vec3 c, float dir) {
    outColor = vec4(c, 1.0);
    float d = uInner > 0.5 ? dir : 7.0;
    outInfo = vec4((uOutline + 1.0) / 255.0, mod(uId, 256.0) / 255.0, floor(uId / 256.0) / 255.0, d / 255.0);
  }
`,_l=i=>({uPalette:i,uRemap:{value:Gs()},uTrans:{value:Es()},uOutline:{value:-1},uId:{value:1},uInner:{value:1}});function Mh(i,t){return new Be({glslVersion:$n,uniforms:{uAtlas:{value:i},..._l(t)},vertexShader:`
      attribute vec2 aUV;
      attribute vec3 aTF;
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        vUV = aUV; vTF = aTF;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uAtlas;
      ${gl}
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${Qr.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${dl.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx), floor(vTF.z + 0.5));
      }`})}function xl(i){return new Be({glslVersion:$n,uniforms:{uColor:{value:7},..._l(i)},vertexShader:`
      void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uColor;
      ${gl}
      void main() { writePixel(palColor(int(uColor + 0.5)), 0.0); }`})}function Sh(i){return new Be({glslVersion:$n,uniforms:_l(i),vertexShader:`
      attribute vec2 aCD;
      varying vec2 vCD;
      void main() {
        vCD = aCD;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${gl}
      varying vec2 vCD;
      void main() { writePixel(palColor(int(vCD.x + 0.5)), floor(vCD.y + 0.5)); }`})}function vl(i){return new gn(i,i,{count:2,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthTexture:new xs(i,i)})}function bh(i,t){let e=new Be({glslVersion:$n,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:i.textures[0]},tInfo:{value:i.textures[1]},tDepth:{value:i.depthTexture},uPalette:t,uNear:{value:.05},uFar:{value:2e3},uAny:{value:0},uMode:{value:0},uRect:{value:new ye(0,0,1e5,1e5)}},vertexShader:`
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
      }`});return{scene:fl(e),camera:new Ni,uniforms:e.uniforms}}function yl(i){return new gn(i,i,{type:Tn,format:rn,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthBuffer:!1})}function fl(i){let t=new Oe(new _s(2,2),i);t.frustumCulled=!1;let e=new vs;return e.add(t),e}var hh="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function Eh(i){let t=new Be({glslVersion:$n,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:null},uDir:{value:new ce(1,0)},uR:{value:1},uRect:{value:new ye(0,0,1e5,1e5)}},vertexShader:hh,fragmentShader:`
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
      }`}),e=new Be({glslVersion:$n,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},tMask:{value:null},uPalette:i,uNear:{value:.05},uFar:{value:2e3}},vertexShader:hh,fragmentShader:`
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
      }`});return{growScene:fl(t),grow:t.uniforms,paintScene:fl(e),paint:e.uniforms,camera:new Ni}}function wh(i,t){te.enabled=!1;let e;try{e=new kr({canvas:i,antialias:!1,preserveDrawingBuffer:!0})}catch(n){let s=typeof WebGL2RenderingContext>"u"?"This browser has no WebGL 2, which blocky3D needs. Try updating it.":"This browser would not start 3D graphics (WebGL 2). Try closing other tabs and reloading, restarting the browser, or updating it. On iPhone and iPad, Lockdown Mode turns WebGL off.";throw new Error(s+" ("+(n&&n.message||n)+")")}return e.outputColorSpace=fi,e.setPixelRatio(1),t&&e.setSize(t,t,!1),e}function Th(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function no(i){return(i.maps||[]).map(t=>{let e=t.data?Th(t.data):null,n=to(t.w,t.h,t.d,t.origin||[0,0,0],e&&e.length===t.w*t.h*t.d?e:null);return n.name=t.name||"",n})}function Ah(i){let t=new Array(Kr).fill(null);return(i.tiles||[]).forEach((e,n)=>{n>0&&n<Kr&&e&&(t[n]=e)}),t}var s0=`
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
`,Ml=new Map;for(let i of s0.trim().split(/\n\s*\n/)){let[t,...e]=i.split(`
`),n=t==="space"?" ":t,s=[];e.forEach((r,o)=>[...r].forEach((a,l)=>{a==="#"&&s.push([l,o])})),Ml.set(n,s)}function ws(i,t=1){return Math.max(...String(i).split(`
`).map(e=>[...e].length))*7*t}function Ch(i,t,e,n,s=128,r=200){let o=String(t||"game").split(/\s+/).filter(Boolean);for(let a=4;a>=1;a--){let l=[];for(let f of o){let u=l[l.length-1];u!==void 0&&[...u+" "+f].length*7*a<=240?l[l.length-1]=u+" "+f:l.push(f)}if(!(l.every(f=>[...f].length*7*a<=240)&&l.length*10*a<=r)&&a>1)continue;let h=s-(l.length*10*a>>1);l.forEach((f,u)=>gi(i,f,256-[...f].length*7*a>>1,h+u*10*a,e,n,a,a));return}}function Rh(i,t,e,n,s,r){let o=t,a=e;for(let l of String(i)){if(l===`
`){o=t,a+=10*s;continue}let c=Ml.get(l)||Ml.get("?");for(let[h,f]of c)r(o+(1+h)*n,a+(1+f)*s);o+=7*n}}var r0=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function gi(i,t,e,n,s,r=null,o=1,a=1){r&&(i.fillStyle=r,Rh(t,e,n,o,a,(c,h)=>{for(let[f,u]of r0)i.fillRect(c+f*o,h+u*a,o,a)})),i.fillStyle=s,Rh(t,e,n,o,a,(c,h)=>i.fillRect(c,h,o,a));let l=String(t).split(`
`);return e+[...l[l.length-1]].length*7*o}function o0(){return{speed:16,loopStart:0,loopEnd:0,notes:Array.from({length:32},()=>({pitch:24,wave:0,vol:0,fx:0}))}}var Kn=(i,t)=>(i>>>0).toString(16).padStart(t,"0").slice(-t);function Ih(i){let t=Kn(i.speed,2)+Kn(i.loopStart,2)+Kn(i.loopEnd,2);for(let e of i.notes)t+=Kn(e.pitch&63,2)+Kn(e.wave&7,1)+Kn(e.vol&7,1)+Kn(e.fx&7,1);return t}function so(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{166}$/.test(t))return null;let e=(s,r)=>parseInt(t.substr(s,r),16),n={speed:Math.max(1,e(0,2)),loopStart:Math.min(32,e(2,2)),loopEnd:Math.min(32,e(4,2)),notes:[]};for(let s=0;s<32;s++){let r=6+s*5;n.notes.push({pitch:e(r,2)&63,wave:e(r+2,1)&7,vol:e(r+3,1)&7,fx:e(r+4,1)&7})}return n}var R0=Ih(o0());var a0=i=>440*Math.pow(2,(i-33)/12),Ts=i=>i.speed/120,Ws=i=>i<.5?i*4-1:3-i*4;function l0(i,t,e){switch(i){case 0:return Ws(t);case 1:return t<.875?t/.875*2-1:1-(t-.875)/.125*2;case 2:return t*2-1;case 3:return t<.5?.7:-.7;case 4:return t<.3?.7:-.7;case 5:return(Ws(t)+Ws(t*2%1)*.5)*.67;case 7:return(Ws(t)+Ws(e))*.5;default:return 0}}function c0(i,t=0,e=32){let n=[];for(let s=t;s<e;s++)n.push(s);return Ph(i,n)}function Ph(i,t){let e=Math.max(1,Math.round(Ts(i)*22050)),n=new Float32Array(e*t.length),s=0,r=0,o=0,a=0,l=0,c={pitch:0,wave:0,vol:0,fx:0};for(let h=0;h<t.length;h++){let f=t[h],u=f>=0?i.notes[f]:c,p=h>0&&t[h-1]>=0?i.notes[t[h-1]]:u,_=f>=0?f-f%4:0,v=i.notes.slice(_,_+4);for(let m=0;m<e;m++){let d=m/e,A=(h*e+m)/22050,T=u.pitch,b=u.vol/7;switch(u.fx){case 1:T=p.pitch+(u.pitch-p.pitch)*d,b=(p.vol+(u.vol-p.vol)*d)/7;break;case 2:T+=Math.sin(A*Math.PI*2*7)*.5;break;case 3:T=u.pitch*(1-d);break;case 4:b*=d;break;case 5:b*=1-d;break;case 6:case 7:{let I=Math.floor(A*(u.fx===6?30:15))%4;T=v[I].pitch;break}}let P=a0(T);s=(s+P/22050)%1,r=(r+P*1.006/22050)%1;let C;u.wave===6?(l+=P*8/22050,l>=1&&(l%=1,a=Math.random()*2-1),C=a*.7):C=l0(u.wave,s,r),o+=(b-o)*.02,n[h*e+m]=C*o*.35}}return n}function h0(i){if(i.loopEnd>i.loopStart)return[0,i.loopEnd];let t=0;return i.notes.forEach((e,n)=>{e.vol>0&&(t=n+1)}),[0,t]}var Xs=64,Lh=64;function u0(i){let t=(i.loopStart?1:0)|(i.loopBack?2:0)|(i.stop?4:0);return Kn(t,1)+i.ch.map(e=>Kn(e>=0&&e<64?e:Lh,2)).join("")}function Dh(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{9}$/.test(t))return null;let e=parseInt(t[0],16),n=[0,1,2,3].map(s=>{let r=parseInt(t.substr(1+s*2,2),16);return r<64?r:Lh});return{loopStart:!!(e&1),loopBack:!!(e&2),stop:!!(e&4),ch:n}}var Sl=i=>!i||i.ch.every(t=>t>=64),Uh=i=>i.loopEnd>i.loopStart;function Nh(i,t){let e=0,n=0;for(let s of i.ch){let r=s<64?t[s]:null;if(!r)continue;let o=32*Ts(r);n||(n=o),Uh(r)||(e=Math.max(e,o))}return e||n}function d0(i,t){let e=[];for(let n=0;e.length<t;n++)Uh(i)&&n>=i.loopEnd&&(n=i.loopStart),e.push(n<32?n:-1);return e}function f0(i,t){let e=Nh(i,t),n=Math.round(e*22050),s=new Float32Array(Math.max(1,n));for(let r of i.ch){let o=r<64?t[r]:null;if(!o)continue;let a=Ph(o,d0(o,Math.ceil(e/Ts(o))));for(let l=0;l<n&&l<a.length;l++)s[l]+=a[l]*.8}return s}function p0(i,t,e){let n=i[t];if(!n||n.stop)return-1;if(n.loopBack){for(let r=t;r>=0;r--)if(i[r]&&i[r].loopStart)return r;return e}let s=t+1;return s<Xs&&!Sl(i[s])?s:-1}var io=class{constructor(){this.ctx=null,this.channels=Array.from({length:4},()=>null),this.cache=new Map,this.volume=1,this.muted=!1,this.held=!1}setMuted(t){this.muted=!!t,this.gain&&(this.gain.gain.value=this.muted?0:1)}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.gain.gain.value=this.muted?0:1}if(this.held){this.suspend();return}this.wake()}wake(){this.ctx.state!=="running"&&this.ctx.state!=="closed"?this.ctx.resume().then(()=>{this.held?this.ctx.suspend():this.startPendingMusic()}):this.pendingMusic&&this.startPendingMusic()}get ready(){return!!this.ctx&&this.ctx.state==="running"}buffer(t,e,n,s){let r=t+"|"+n+"|"+s,o=this.cache.get(r);if(!o){let a=c0(e,n,s);o=this.ctx.createBuffer(1,Math.max(1,a.length),22050),o.copyToChannel(a,0),this.cache.set(r,o),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}return o}play(t,e=-1,n=0,s=32){let r=so(t);if(!r||!this.ready)return-1;let[o,a]=h0(r);if(o=Math.max(o,n|0),s<32&&(a=Math.min(a,o+Math.max(0,s|0))),a<=o)return-1;(e<0||e>=4)&&(e=this.freeChannel()),this.stop(e);let l=this.ctx.createBufferSource();l.buffer=this.buffer(t,r,o,a);let c=r.loopEnd>r.loopStart&&r.loopEnd>o&&s>=32;c&&(l.loop=!0,l.loopStart=Math.max(0,r.loopStart-o)*Ts(r),l.loopEnd=(r.loopEnd-o)*Ts(r)),l.connect(this.gain),l.start();let h={src:l,started:this.ctx.currentTime,sfx:r,from:o,loops:c,done:!1};return l.onended=()=>{h.done=!0,this.channels[e]===h&&(this.channels[e]=null)},this.channels[e]=h,e}freeChannel(){let t=0,e=1/0;for(let n=0;n<4;n++){let s=this.channels[n];if(!s)return n;s.started<e&&(e=s.started,t=n)}return t}stop(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];if(n)try{n.src.stop()}catch{}this.channels[e]=null}}release(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];n&&(n.src.loop=!1)}}noteAt(t){let e=this.channels[t];if(!e||!this.ctx)return-1;let n=Ts(e.sfx),s=(this.ctx.currentTime-e.started)/n;if(e.loops){let r=e.sfx.loopStart-e.from,o=e.sfx.loopEnd-e.sfx.loopStart;s>=e.sfx.loopEnd-e.from&&(s=r+(s-r)%o)}return e.from+Math.floor(s)}music(t,e,n,s=0){this.musicStop(),!(n<0)&&(this.pendingMusic={getPatterns:t,getSounds:e,n,fadeMs:s},this.ready&&this.startPendingMusic())}startPendingMusic(){let t=this.pendingMusic;if(this.pendingMusic=null,!t||!this.ready)return;let e=t.getPatterns();if(Sl(e[t.n]))return;let n=this.ctx.createGain();n.connect(this.gain);let s=this.ctx.currentTime;t.fadeMs>0&&(n.gain.setValueAtTime(0,s),n.gain.linearRampToValueAtTime(1,s+t.fadeMs/1e3));let r={...t,gain:n,cur:t.n,start:t.n,time:s+.05,sources:[],timeline:[]};this.song=r;let o=()=>{if(this.song!==r)return;let a=r.getPatterns(),l=r.getSounds();for(;r.cur>=0&&r.time<this.ctx.currentTime+.4;){let c=a[r.cur],h=Sl(c)?0:Nh(c,l);if(!h){r.cur=-1;break}let f="p"+u0(c)+c.ch.map(_=>l[_]?Ih(l[_]):"").join("|"),u=this.cache.get(f);if(!u){let _=f0(c,l);u=this.ctx.createBuffer(1,_.length,22050),u.copyToChannel(_,0),this.cache.set(f,u),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}let p=this.ctx.createBufferSource();p.buffer=u,p.connect(r.gain),p.start(r.time),r.sources.push(p),r.sources.length>8&&r.sources.shift(),r.timeline.push({time:r.time,pattern:r.cur,secs:h}),r.timeline.length>8&&r.timeline.shift(),r.time+=h,r.cur=p0(a,r.cur,r.start)}if(r.cur<0&&this.ctx.currentTime>r.time){this.musicStop();return}r.timer=setTimeout(o,100)};o()}musicStop(t=0){this.pendingMusic=null;let e=this.song;if(!e)return;this.song=null,clearTimeout(e.timer);let n=this.ctx.currentTime+t/1e3;t>0&&(e.gain.gain.setValueAtTime(e.gain.gain.value,this.ctx.currentTime),e.gain.gain.linearRampToValueAtTime(0,n));for(let s of e.sources)try{s.stop(n)}catch{}}musicPosition(){let t=this.song;if(!t||!this.ctx)return null;let e=this.ctx.currentTime;for(let n=t.timeline.length-1;n>=0;n--){let s=t.timeline[n];if(e>=s.time)return e<s.time+s.secs?{pattern:s.pattern,frac:(e-s.time)/s.secs}:null}return null}suspend(){this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.held=!1,this.ctx&&this.wake()}};var ee=256,Fh=1e3/60,x0={ArrowLeft:0,KeyA:0,ArrowRight:1,KeyD:1,ArrowUp:2,KeyW:2,ArrowDown:3,KeyS:3,KeyZ:4,KeyC:4,KeyN:4,Space:4,KeyX:5,KeyV:5,KeyM:5,Enter:6,NumpadEnter:6,KeyP:6},Oh=64*1024,Bh=i=>String(i||"game").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"game",Nn=(i,t,e)=>Array.isArray(i)?[+i[0]||0,+i[1]||0,+i[2]||0]:[+i||0,+t||0,+e||0];function zh({canvas:i,overlay:t,cart:e,onError:n=console.error,onLog:s=console.log,onRestart:r=()=>location.reload(),onSave:o=()=>{},onCover:a=null}){let l=wh(i,ee),c=l.extensions.has("EXT_color_buffer_float"),h="blocky3d.res",f=1;try{f=c?Math.min(3,Math.max(1,parseInt(localStorage.getItem(h),10)||1)):1}catch{}let u=new vs,p=new Xe(90,1,.05,2e3),_=vl(ee*f),v=null,m=[0,6,-10],d=[0,0,0],A=t.getContext("2d");t.width=t.height=ee;let T=Array.isArray(e.palette)&&e.palette.length===pi?[...e.palette]:[...Jn],b=yh(T),P=bh(_,b);P.uniforms.uNear.value=p.near,P.uniforms.uFar.value=p.far;let C=Eh(b);C.paint.uNear.value=p.near,C.paint.uFar.value=p.far;function I(g){f=c?Math.min(3,Math.max(1,g|0)):1;try{localStorage.setItem(h,String(f))}catch{}let E=ee*f;l.setSize(E,E,!1),_.dispose(),_=vl(E),v&&(v[0].dispose(),v[1].dispose(),v=null),f>1&&(v=[yl(E),yl(E)]);let R=P.uniforms;R.tColor.value=_.textures[0],R.tInfo.value=_.textures[1],R.tDepth.value=_.depthTexture}I(f);let O=uh();dh(O,Ah(e));let S=no(e),M=Array.from({length:64},(g,E)=>e.sfx&&e.sfx[E]||null),L=M.map(g=>g?so(g):null),J=Array.from({length:Xs},(g,E)=>Dh(e.music&&e.music[E])),k=new io,$="blocky3d.save."+Bh(e.name),it=vh(e),Z=Gs(),ot=Es(),q=0,ht=-1,_t=!0,Rt=0,Wt=0,ie=!1,Y=null,at=90,bt=[],lt=null,It=[],Dt=!1,Bt=[0,0,ee-1,ee-1],_e=new Ui(1,1,1),Kt=new Xr(1,24,16),ae={map:[],vox:[],cube:[],sphere:[],line:[]},U={map:0,vox:0,cube:0,sphere:0,line:0};function Ie(g){let E=ae[g],R=E[U[g]];if(!R){if(g==="map")R=new Oe(void 0,Mh(O,b)),R.matrixAutoUpdate=!1;else if(g==="vox")R=new Oe(void 0,Sh(b)),R.matrixAutoUpdate=!1;else if(g==="line"){let G=new Qe;G.setAttribute("position",new be(new Float32Array(6),3)),R=new Wr(G,xl(b)),R.frustumCulled=!1}else R=new Oe(g==="cube"?_e:Kt,xl(b));E.push(R),u.add(R)}U[g]++,R.visible=!0;let W=R.material.uniforms;for(let G=0;G<pi;G++)W.uRemap.value[G]=Z[G],W.uTrans.value[G]=ot[G];return W.uOutline.value=ht<0?-1:Z[ht],W.uInner.value=_t?1:0,W.uId.value=++Wt,ht>=0&&(ie=!0),R.userData.view=lt?lt.i:0,lt&&lt.n++,R}let Yt=g=>mi(T[Z[(g|0)&31]]??0);function $t(g,E,R,W){return g=Math.floor(g),E=Math.floor(E),R=Math.floor(R),W=Math.floor(W),[Math.min(g,R),Math.min(E,W),Math.max(g,R),Math.max(E,W)]}function Mt(g){let E=S[g];if(!E)throw E===null?new Error(`map ${g} belonged to a scene that has since been replaced by scene_load`):new Error(`map ${g} does not exist (there are ${S.length} maps)`);return E}function he(g){let E=to(g.w,g.h,g.d,g.origin,g.data.slice());return E.name=g.name||"",E.pos=[...g.pos],E.angle=[...g.angle],E}let Ct=no(e),w=[];function x(){for(let g of w)S[g]&&S[g].geometry&&S[g].geometry.dispose(),S[g]=null;for(w=[];S.length&&S[S.length-1]===null;)S.pop()}let B=new z;function j(g,E,R,W){return bs(g),B.set(E,R,W).applyMatrix4(g._inv)}let tt=4,K=22,xt=new Array(K).fill(!1),ut=Array.from({length:tt},()=>new Array(K).fill(!1)),gt=Array.from({length:tt},()=>new Array(K).fill(!1)),Ht=Array.from({length:tt},()=>[[0,0],[0,0]]),st=.5,vt=[[7,0],[8,1],[9,2],[10,3],[11,4],[12,5],[13,6],[14,7],[15,8],[16,10],[17,11],[18,16]];function Pt(g,E,R){let W=et=>!!(g.buttons[et]&&g.buttons[et].pressed),G=et=>Number.isFinite(g.axes[et])?g.axes[et]:0;E[0]=W(14)||G(0)<-st,E[1]=W(15)||G(0)>st,E[2]=W(12)||G(1)<-st,E[3]=W(13)||G(1)>st,E[4]=W(0)||W(2),E[5]=W(1)||W(3),E[6]=W(9);for(let[et,nt]of vt)E[et]=W(nt);R[0][0]=G(0),R[0][1]=G(1),R[1][0]=G(2),R[1][1]=G(3)}let Lt=Array.from({length:tt},()=>new Array(K).fill(!1));function yt(){y();for(let E of Lt)E.fill(!1);for(let E of Ht)E[0][0]=E[0][1]=E[1][0]=E[1][1]=0;let g=[];try{g=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{g=[]}g.filter(E=>E&&E.connected).sort((E,R)=>E.index-R.index).slice(0,tt).forEach((E,R)=>Pt(E,Lt[R],Ht[R])),Math.hypot(vn[0],vn[1])>0&&Math.hypot(Ht[0][0][0],Ht[0][0][1])<=Zt&&(Ht[0][0][0]=vn[0],Ht[0][0][1]=vn[1]);for(let E=0;E<tt;E++)for(let R=0;R<K;R++)ut[E][R]=gt[E][R],gt[E][R]=Lt[E][R]||E===0&&(xt[R]||Bi[R]||Pn[R]);Pn.fill(!1)}let Zt=.15;function Vt(g,E){let R=gt[E];if(!R)return[0,0];let[W,G]=Ht[E][g?1:0],et=Math.hypot(W,G);if(et>Zt){let me=Math.min(1,(et-Zt)/(1-Zt))/et;return[W*me,G*me]}if(g)return[0,0];let nt=(R[1]?1:0)-(R[0]?1:0),At=(R[3]?1:0)-(R[2]?1:0),Ft=nt&&At?Math.SQRT1_2:1;return[nt*Ft,At*Ft]}let zt=0,D=0,ct=0,X=0,Q=0,pt=0,mt=0,Ot=0,pe=0,Me=null,ne=0,qe=0,ke=-1,In=-1,Rs=[],ln={0:19,2:20,1:21},Pn=new Array(K).fill(!1),Bi=new Array(K).fill(!1),vn=[0,0],Fn=0,zi=null,On=()=>{zi&&zi(Ze?0:Fn)},Cs=g=>{xt[g]=Pn[g]=!0},cn=()=>document.pointerLockElement===t,$s="mouse";window.addEventListener("pointerdown",g=>{$s=g.pointerType||"mouse"},!0);function ki(g){let E=t.getBoundingClientRect();return[(g.clientX-E.left)/E.width*ee,(g.clientY-E.top)/E.height*ee]}function Js(){try{let g=t.requestPointerLock();g&&g.catch&&g.catch(()=>{})}catch{}}function y(){mt=X,Ot=Q,pe=pt,X=Q=pt=0}function N(g){zt=[0,1,2].includes(g|0)?g|0:0,t.style.touchAction=zt?"none":"";for(let E of[19,20,21])xt[E]=!1;Me=null,zt!==2&&cn()&&document.exitPointerLock()}let V=(g,E)=>Rs.findIndex(R=>g>=R[0]&&g<R[0]+R[2]&&E>=R[1]&&E<R[1]+R[3]);t.addEventListener("contextmenu",g=>{zt&&g.preventDefault()}),t.addEventListener("mousedown",g=>{if(zt){if(cn()||([D,ct]=ki(g)),Ze){let E=V(D,ct);E>=0&&g.button===0&&(In=E);return}if(zt===2&&!cn()){Js();return}ln[g.button]!==void 0&&Cs(ln[g.button])}}),window.addEventListener("mouseup",g=>{ln[g.button]!==void 0&&(xt[ln[g.button]]=!1)}),window.addEventListener("mousemove",g=>{if(zt){if(!cn()&&([D,ct]=ki(g),Ze)){let E=V(D,ct);E>=0&&(ke=E)}!Ze&&(zt!==2||cn())&&(X+=g.movementX||0,Q+=g.movementY||0)}}),t.addEventListener("wheel",g=>{zt&&(g.preventDefault(),pt+=g.deltaMode===1?g.deltaY/3:g.deltaMode===2?g.deltaY:g.deltaY/100)},{passive:!1}),t.addEventListener("pointerdown",g=>{if(!(!zt||g.pointerType==="mouse"||Me!==null)){g.preventDefault(),Me=g.pointerId;try{t.setPointerCapture(g.pointerId)}catch{}if((zt===1||Ze)&&([D,ct]=ki(g)),ne=g.clientX,qe=g.clientY,Ze){let E=V(D,ct);E>=0&&(In=E);return}zt===1&&Cs(19)}}),t.addEventListener("pointermove",g=>{g.pointerId===Me&&(zt===1&&([D,ct]=ki(g)),Ze||(X+=g.clientX-ne,Q+=g.clientY-qe),ne=g.clientX,qe=g.clientY)});let H=g=>{g.pointerId===Me&&(Me=null,xt[19]=!1)};t.addEventListener("pointerup",H),t.addEventListener("pointercancel",H),document.addEventListener("pointerlockchange",()=>{!cn()&&zt===2&&Jt&&!Ze&&lo(!0)});let F=()=>gt.some((g,E)=>g[6]&&!ut[E][6]),rt=0,dt={get palette(){return T},set palette(g){T=g},pal(g,E){if(g===void 0){Z=Gs(),ot=Es();return}Z[g&31]=(E??g)&31},palt(g,E=!0){if(g===void 0){ot=Es();return}ot[g&31]=E?1:0},bg(g){q=Z[(g|0)&31]},outline(g,E=!0){ht=g==null||g===!1?-1:(g|0)&31,_t=ht<0||E!==!1},cam_set_pos(g,E,R){m.splice(0,3,...Nn(g,E,R))},cam_set_lookat(g,E,R){d.splice(0,3,...Nn(g,E,R))},cam_set_fov(g){at=Math.max(.01,Math.min(.49,+g||.25))*360},clip(g,E,R,W){if(g===void 0)Y=null;else{let[G,et,nt,At]=$t(g,E,R,W);Y=[Math.max(0,G),Math.max(0,et),Math.min(ee-1,nt),Math.min(ee-1,At)]}Dt&&(Qn(),Ve()),tn()},map_new(g,E,R,W=[0,0,0]){return S.push(to(g|0,E|0,R|0,Nn(W))),S.length-1},map_copy(g){return S.push(he(Mt(g))),S.length-1},map_reload(g){if(g==null){Ct.forEach((R,W)=>{S[W].data.set(R.data),S[W].dirty=!0});return}let E=Ct[g];if(!Number.isInteger(g)||!E){let R=Ct.length?`0-${Ct.length-1}`:"this cart has none";throw new Error(`map_reload(${g}): only the cart's maps can be reloaded (${R}); copies and map_new maps have no cart data`)}S[g].data.set(E.data),S[g].dirty=!0},map_stamp(g,E,R,W,G){let et=Mt(g),nt=Mt(E),At=Math.floor(+R||0),Ft=Math.floor(+W||0),me=Math.floor(+G||0);for(let Se=0;Se<et.d;Se++)for(let Xt=0;Xt<et.h;Xt++)for(let ue=0;ue<et.w;ue++){let Ae=et.data[ue+et.w*(Xt+et.h*Se)];Ae&&eo(nt,At+ue,Ft+Xt,me+Se,Ae)}},scene_load(g){let E=Array.isArray(e.scenes)?e.scenes:[],R=E[g];if(!R)throw new Error(`scene ${g} does not exist (there are ${E.length} scenes)`);x();let W={maps:[],named:{},things:[]};for(let G of R.maps||[]){let et=Ct[G.m];if(!et)continue;let nt=he(et);nt.pos=Nn(G.pos),nt.angle=Nn(G.angle),S.push(nt);let At=S.length-1;w.push(At),W.maps.push(At),G.name&&(W.named[G.name]=At)}for(let G of R.vox||[])W.things.push([G.v|0,...Nn(G.pos),+G.yaw||0]);return W},map_set_pos(g,E,R,W){let G=Mt(g);G.pos=Nn(E,R,W),G._xfDirty=!0},map_set_angle(g,E,R,W){let G=Mt(g);G.angle=Nn(E,R,W),G._xfDirty=!0},map_set_origin(g,E,R,W){let G=Mt(g),et=Nn(E,R,W);bs(G);let nt=new z(et[0]-G.origin[0],et[1]-G.origin[1],et[2]-G.origin[2]).applyMatrix4(G._rot);G.pos=[G.pos[0]+nt.x,G.pos[1]+nt.y,G.pos[2]+nt.z],G.origin=et,G._xfDirty=!0},map(g){let E=Mt(g);ph(E),bs(E);let R=Ie("map");R.geometry=E.geometry,R.matrix.copy(E._m)},mget(g,E,R,W){return Ss(Mt(g),Math.floor(E),Math.floor(R),Math.floor(W))},mset(g,E,R,W,G){eo(Mt(g),Math.floor(E),Math.floor(R),Math.floor(W),G|0)},msetw(g,E,R,W,G){let et=Mt(g),nt=j(et,E,R,W);eo(et,Math.floor(nt.x),Math.floor(nt.y),Math.floor(nt.z),G|0)},mray(g,E,R,W,G,et,nt,At=100){return Ut(Mt(g),+E||0,+R||0,+W||0,+G||0,+et||0,+nt||0,+At||0)},mtow(g,E,R,W){let G=Mt(g);return bs(G),B.set(+E||0,+R||0,+W||0).applyMatrix4(G._m),[B.x,B.y,B.z]},wtom(g,E,R,W){let G=j(Mt(g),+E||0,+R||0,+W||0);return[G.x,G.y,G.z]},mgetw(g,E,R,W,G){let et=Mt(g),nt=j(et,E,R,W);if(G===void 0){let At=Math.floor(nt.x),Ft=Math.floor(nt.y),me=Math.floor(nt.z);return[Ss(et,At,Ft,me),At,Ft,me]}return fe(et,nt.x,nt.y,nt.z,+G)},vox(g,E,R,W,G=0,et=0,nt=0,At=1,Ft=At,me=At){let Se=g|0;if(Se<0||Se>=Hs)throw new Error(`vox ${g} does not exist (models are 0-${Hs-1})`);let Xt=it[Se];if(!Xt)return;let ue=Ie("vox");ue.geometry=_h(Xt),xh(Xt,[+E||0,+R||0,+W||0],[+G||0,+et||0,+nt||0],[+At,+Ft,+me],ue.matrix)},cube(g,E,R,W=1,G=7){let et=Ie("cube");et.position.set(g,E,R),et.scale.setScalar(W),et.material.uniforms.uColor.value=G&31},sphere(g,E,R,W=.5,G=7){let et=Ie("sphere");et.position.set(g,E,R),et.scale.setScalar(W),et.material.uniforms.uColor.value=G&31},line3(g,E,R,W,G,et,nt=7){let At=Ie("line"),Ft=At.geometry.attributes.position;Ft.array.set([g,E,R,W,G,et]),Ft.needsUpdate=!0,At.material.uniforms.uColor.value=nt&31},print(g,E,R,W=7,G=null,et=1,nt=et){E===void 0&&(E=0,R=Rt),et=Math.max(1,Math.round(+et||1)),nt=Math.max(1,Math.round(+nt||et));let At=G!=null&&G!==!1&&G>=0,Ft=gi(A,g,E|0,R|0,Yt(W),At?Yt(G):null,et,nt);return Rt=(R|0)+10*nt*String(g).split(`
`).length,Ft},rect(g,E,R,W,G=7){let[et,nt,At,Ft]=$t(g,E,R,W);A.fillStyle=Yt(G),A.fillRect(et,nt,At-et+1,1),A.fillRect(et,Ft,At-et+1,1),A.fillRect(et,nt,1,Ft-nt+1),A.fillRect(At,nt,1,Ft-nt+1)},rectfill(g,E,R,W,G=7){let[et,nt,At,Ft]=$t(g,E,R,W);A.fillStyle=Yt(G),A.fillRect(et,nt,At-et+1,Ft-nt+1)},printh(...g){s(g.map(String).join(" "))},sfx(g,E=-1,R=0,W=32){if(g===-1){k.stop(E);return}if(g===-2){k.release(E);return}let G=typeof g=="string"?g:M[g|0];if(typeof g=="string"&&!so(g))throw new Error("sfx: that string is not a sound from the Sfx tab");G&&k.play(G,E<4?E:-1,R,W)},music(g,E=0){if(g<0){k.musicStop(E);return}if((g|0)>=Xs)throw new Error(`music ${g} does not exist (patterns are 0-${Xs-1})`);k.music(()=>J,()=>L,g|0,E)},save(g){try{if(g==null)return localStorage.removeItem($),o(null),!0;let E=JSON.stringify(g);if(E.length>Oh)throw new Error(`save: data is too big (${E.length} characters, the limit is ${Oh})`);return localStorage.setItem($,E),o(E),!0}catch(E){if(E.message.startsWith("save:"))throw E;return!1}},load(){try{let g=localStorage.getItem($);return g===null?null:JSON.parse(g)}catch{return null}},btn(g,E=0){let R=gt[E|0];return!!(R&&R[g|0])},mouse_set_mode(g){N(g)},mouse_pos(){return[D,ct]},mouse_delta(){return[mt,Ot]},mouse_wheel(){return pe},mouse_locked(){return cn()},mouse_ray(){if(zt!==2)return Qt(D,ct);let g=It.length?It[0].rect:Bt;return Qt((g[0]+g[2]+1)/2,(g[1]+g[3]+1)/2)},stick(g=0,E=0){return Vt(g|0,E|0)},btnp(g,E=0){let R=gt[E|0];return!!(R&&R[g|0]&&!ut[E|0][g|0])},time(){return rt/60},touch_set_mode(g){Fn=[0,1,2,3].includes(g|0)?g|0:0,On()},freeze(g,E){Ue=Math.max(0,Math.floor(+g||0)),hn=typeof E=="function"?E:null},t(){return rt/60},rnd(g=1){return Array.isArray(g)?g[Math.floor(Math.random()*g.length)]:Math.random()*g},flr:Math.floor,ceil:Math.ceil,abs:Math.abs,sqrt:Math.sqrt,min:Math.min,max:Math.max,sgn(g){return g<0?-1:1},mid(g,E,R){return Math.max(Math.min(g,E),Math.min(Math.max(g,E),R))},sin(g){return Math.sin(g*xn)},cos(g){return Math.cos(g*xn)},atan2(g,E){return(Math.atan2(E,g)/xn+1)%1},dist(g,E){let R=nt=>Array.isArray(nt)?nt:nt&&typeof nt=="object"?"z"in nt?[nt.x,nt.y,nt.z]:[nt.x,nt.y]:[+nt],W=R(g),G=R(E),et=0;for(let nt=0;nt<Math.max(W.length,G.length);nt++){let At=(+W[nt]||0)-(+G[nt]||0);et+=At*At}return Math.sqrt(et)},dir3(g=0,E=0){let R=Math.cos(E*xn);return[Math.sin(g*xn)*R,Math.sin(E*xn),Math.cos(g*xn)*R]},yaw_to(g,E){return(Math.atan2(+g||0,+E||0)/xn+1)%1},angdiff(g,E){return((E-g)%1+1.5)%1-.5},cam_orbit(g,E=0,R=0,W=8){let G=Nn(g&&!Array.isArray(g)&&typeof g=="object"?[g.x,g.y,g.z]:g),et=dt.dir3(E,R);m.splice(0,3,G[0]-et[0]*W,G[1]-et[1]*W,G[2]-et[2]*W),d.splice(0,3,...G)},lerp(g,E,R){return Array.isArray(g)?g.map((W,G)=>W+((Array.isArray(E)?E[G]:E)-W)*R):g+(E-g)*R},mpush(g,E,R,W,G){let et=Array.isArray(g)?g:[g];E=+E||0,R=+R||0,W=+W||0;let nt=0,At=0,Ft=0,me=-1,Se=.5;for(let ue=0;ue<3;ue++){let Ae=!1;for(let Ne of et){let He=dt.mgetw(Ne,E,R,W,G);if(!He[0])continue;let[,,,,Fe,Ee,dn,Le]=He;E+=Fe*Le,R+=Ee*Le,W+=dn*Le,nt+=Fe*Le,At+=Ee*Le,Ft+=dn*Le,Ee>Se&&(Se=Ee,me=Ne|0),Ae=!0}if(!Ae)break}let Xt=Math.hypot(nt,At,Ft);return Xt>1e-9?[E,R,W,nt/Xt,At/Xt,Ft/Xt,me]:[E,R,W,0,0,0,me]},textw(g,E=1){return ws(String(g))*Math.max(1,Math.round(+E||1))},printc(g,E,R=7,W=null,G=1,et=G){let[nt,,At]=Y||Bt;return dt.print(g,nt+Math.floor((At-nt+1-dt.textw(g,G))/2),E,R,W,G,et)}},Et=new z,wt=new z;function Ut(g,E,R,W,G,et,nt,At){let Ft=[0,0,0,0,0,0,0,0];if(!(G||et||nt))return Ft;bs(g);let me=Et.set(E,R,W).applyMatrix4(g._inv),Se=wt.set(G,et,nt).transformDirection(g._inv),Xt=[me.x,me.y,me.z],ue=[Se.x,Se.y,Se.z],Ae=[g.w,g.h,g.d],Ne=0,He=At,Fe=-1;for(let kt=0;kt<3;kt++){if(Math.abs(ue[kt])<1e-12){if(Xt[kt]<0||Xt[kt]>=Ae[kt])return Ft;continue}let ge=(0-Xt[kt])/ue[kt],Sn=(Ae[kt]-Xt[kt])/ue[kt];if(ge>Sn&&([ge,Sn]=[Sn,ge]),ge>Ne&&(Ne=ge,Fe=kt),Sn<He&&(He=Sn),Ne>He)return Ft}let Ee=[0,0,0],dn=[0,0,0],Le=[0,0,0],Qs=[0,0,0],en=[0,0,0];for(let kt=0;kt<3;kt++){let ge=Xt[kt]+ue[kt]*Ne;Ee[kt]=Math.min(Ae[kt]-1,Math.max(0,Math.floor(kt===Fe?ge+Math.sign(ue[kt])*1e-7:ge))),dn[kt]=Math.sign(ue[kt]),Qs[kt]=dn[kt]?Math.abs(1/ue[kt]):1/0,Le[kt]=dn[kt]>0?(Ee[kt]+1-Xt[kt])/ue[kt]:dn[kt]<0?(Ee[kt]-Xt[kt])/ue[kt]:1/0}Fe>=0&&(en[Fe]=-dn[Fe]);let ti=Ne;for(;;){let kt=Ss(g,Ee[0],Ee[1],Ee[2]);if(kt)return[kt,Ee[0],Ee[1],Ee[2],en[0],en[1],en[2],ti];let ge=Le[0]<Le[1]?Le[0]<Le[2]?0:2:Le[1]<Le[2]?1:2;if(ti=Le[ge],ti>He||(Ee[ge]+=dn[ge],Ee[ge]<0||Ee[ge]>=Ae[ge]))return Ft;Le[ge]+=Qs[ge],en[0]=en[1]=en[2]=0,en[ge]=-dn[ge]}}let Nt=new Xe(90,1,.05,2e3),St=new z;function Qt(g,E){let R=null;for(let At=It.length-1;At>=0&&!R;At--){let Ft=It[At].rect;g>=Ft[0]&&g<Ft[2]+1&&E>=Ft[1]&&E<Ft[3]+1&&(R=It[At])}R||(R={rect:Y||Bt,pos:m,look:d,fov:at});let[W,G,et,nt]=R.rect;return le(Nt,R),Nt.updateMatrixWorld(),St.set((g-W)/(et-W+1)*2-1,1-(E-G)/(nt-G+1)*2,.5).unproject(Nt).sub(Nt.position).normalize(),[R.pos[0],R.pos[1],R.pos[2],St.x,St.y,St.z]}function le(g,E){let R=E.rect[2]-E.rect[0]+1,W=E.rect[3]-E.rect[1]+1;g.position.set(...E.pos),g.lookAt(...E.look),g.aspect=R/W,g.fov=R>W?2*Math.atan(Math.tan(E.fov*Math.PI/360)*W/R)*180/Math.PI:E.fov,g.updateProjectionMatrix()}function fe(g,E,R,W,G){let et=null,nt=-1,At=Math.floor(E-G),Ft=Math.floor(E+G),me=Math.floor(R-G),Se=Math.floor(R+G),Xt=Math.floor(W-G),ue=Math.floor(W+G);for(let Ne=Xt;Ne<=ue;Ne++)for(let He=me;He<=Se;He++)for(let Fe=At;Fe<=Ft;Fe++){let Ee=Ss(g,Fe,He,Ne);if(!Ee)continue;let dn=Math.max(Fe,Math.min(E,Fe+1)),Le=Math.max(He,Math.min(R,He+1)),Qs=Math.max(Ne,Math.min(W,Ne+1)),en=E-dn,ti=R-Le,kt=W-Qs,ge=Math.hypot(en,ti,kt);if(ge>=G)continue;let Sn;if(ge>1e-6)Sn=G-ge,en/=ge,ti/=ge,kt/=ge;else{let js=[[E-Fe,-1,0,0],[Fe+1-E,1,0,0],[R-He,0,-1,0],[He+1-R,0,1,0],[W-Ne,0,0,-1],[Ne+1-W,0,0,1]].reduce((Ll,Dl)=>Dl[0]<Ll[0]?Dl:Ll);Sn=G+js[0],en=js[1],ti=js[2],kt=js[3]}Sn>nt&&(nt=Sn,et=[Ee,Fe,He,Ne,en,ti,kt,Sn])}if(!et)return[0,0,0,0,0,0,0,0];let Ae=new z(et[4],et[5],et[6]).applyMatrix4(g._rot);return et[4]=Ae.x,et[5]=Ae.y,et[6]=Ae.z,et}let xe={},Jt=!1,Tt=0,je=0,jt=0,Ue=0,hn=null;function Ve(){lt={i:bt.length,rect:Y||Bt,n:0},bt.push(lt)}function Qn(){lt&&(lt.pos=[...m],lt.look=[...d],lt.fov=at,lt.bg=q)}let se=!1;function tn(){se&&(A.restore(),se=!1),Y&&(A.save(),A.beginPath(),A.rect(Y[0],Y[1],Y[2]-Y[0]+1,Y[3]-Y[1]+1),A.clip(),se=!0)}function Bn(){for(let g in U)U[g]=0;se&&(A.restore(),se=!1),A.clearRect(0,0,ee,ee),tn(),Rt=0,Wt=0,ie=!1,bt=[],Ve(),Dt=!0}function Pe(g,E,R,W,G){g?(g.viewport.set(E,R,W,G),g.scissor.set(E,R,W,G),g.scissorTest=!0):(l.setViewport(E,R,W,G),l.setScissor(E,R,W,G),l.setScissorTest(!0))}function un(){Dt=!1,Qn();for(let R in ae)for(let W=U[R];W<ae[R].length;W++)ae[R][W].visible=!1;ml(b,T);let g=bt.filter(R=>R.n>0);g.length||(g=[{i:-1,rect:Bt,pos:[...m],look:[...d],fov:at,bg:q}]);let E=ee*f;(g.length>1||g[0].rect!==Bt)&&(l.setRenderTarget(null),Pe(null,0,0,E,E),l.setClearColor(T[q]??0,1),l.clear());for(let R of g)Ln(R,g.length>1);for(let R of[_,...v||[]])R.viewport.set(0,0,E,E),R.scissor.set(0,0,E,E),R.scissorTest=!1;l.setRenderTarget(null),l.setViewport(0,0,E,E),l.setScissorTest(!1),It=g.map(R=>({rect:R.rect,pos:R.pos,look:R.look,fov:R.fov}))}function Ln(g,E){let[R,W,G,et]=g.rect,nt=R*f,At=(ee-1-et)*f,Ft=(G-R+1)*f,me=(et-W+1)*f;if(E)for(let ue in ae)for(let Ae=0;Ae<U[ue];Ae++)ae[ue][Ae].visible=ae[ue][Ae].userData.view===g.i;le(p,g),Pe(_,nt,At,Ft,me),l.setRenderTarget(_),l.setClearColor(T[g.bg]??0,1),l.clear(),l.render(u,p);let Se=P.uniforms;if(Se.uAny.value=ie?1:0,Se.uRect.value.set(nt,At,nt+Ft-1,At+me-1),f===1||!ie){Se.uMode.value=0,l.setRenderTarget(null),Pe(null,nt,At,Ft,me),l.render(P.scene,P.camera);return}let Xt=C;Xt.grow.uRect.value.set(nt,At,nt+Ft-1,At+me-1),Se.uMode.value=1;for(let ue of v)Pe(ue,nt,At,Ft,me);l.setRenderTarget(v[0]),l.render(P.scene,P.camera),Xt.grow.uR.value=f-1,Xt.grow.tMask.value=v[0].texture,Xt.grow.uDir.value.set(1,0),l.setRenderTarget(v[1]),l.render(Xt.growScene,Xt.camera),Xt.grow.tMask.value=v[1].texture,Xt.grow.uDir.value.set(0,1),l.setRenderTarget(v[0]),l.render(Xt.growScene,Xt.camera),Xt.paint.tColor.value=_.textures[0],Xt.paint.tInfo.value=_.textures[1],Xt.paint.tDepth.value=_.depthTexture,Xt.paint.tMask.value=v[0].texture,l.setRenderTarget(null),Pe(null,nt,At,Ft,me),l.render(Xt.paintScene,Xt.camera)}function jn(g){try{return g(),!0}catch(E){return Ks(),n(E),!1}}let yn=["Resume","Restart","Screenshot"];a&&yn.push("Capture cover"),c&&yn.push("Resolution");let Ze=!1,Mn=0,Vi="",oo=0,Rl=0,_i=document.createElement("canvas");_i.width=_i.height=ee,_i.style.cssText="position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;display:none",t.after(_i);let ao=_i.getContext("2d");function lo(g){Ze=g,On(),ke=In=-1;for(let E of[19,20,21])xt[E]=!1;_i.style.display=g?"block":"none",g?(Mn=0,Vi="",Rl=0,k.suspend(),cn()&&document.exitPointerLock()):(ao.clearRect(0,0,ee,ee),k.resume(),zt===2&&$s==="mouse"&&Js())}function Wh(){let g=ao;g.clearRect(0,0,ee,ee),g.fillStyle="rgba(0, 0, 0, 0.45)",g.fillRect(0,0,ee,ee);let E=156,R=26+yn.length*14,W=ee-E>>1,G=ee-R>>1;g.fillStyle=mi(Jn[0]),g.fillRect(W,G,E,R),g.fillStyle=mi(Jn[7]),g.fillRect(W,G,E,1),g.fillRect(W,G+R-1,E,1),g.fillRect(W,G,1,R),g.fillRect(W+E-1,G,1,R),gi(g,"Paused",W+(E-ws("Paused")>>1),G+4,mi(Jn[6])),Rs=yn.map((et,nt)=>[W+4,G+19+nt*14,E-8,14]),yn.forEach((et,nt)=>{let At=nt===Mn,Ft=et==="Resolution"?`Resolution < ${f}x >`:et;gi(g,(At?"> ":"  ")+Ft,W+8,G+20+nt*14,mi(Jn[At?10:7]))}),Vi&&performance.now()<oo&&gi(g,Vi,ee-ws(Vi)>>1,G+R+6,mi(Jn[11]),mi(Jn[0]))}function Xh(){let g=ee*f,E=document.createElement("canvas");E.width=E.height=g;let R=E.getContext("2d");R.imageSmoothingEnabled=!1,R.drawImage(i,0,0,g,g),R.drawImage(t,0,0,g,g);let W=new Date().toISOString().slice(0,19).replace(/[-:]/g,"").replace("T","_"),G=`${Bh(e.name)}_${W}.png`;E.toBlob(et=>{if(!et)return;let nt=document.createElement("a");nt.href=URL.createObjectURL(et),nt.download=G,document.body.append(nt),nt.click(),nt.remove(),setTimeout(()=>URL.revokeObjectURL(nt.href),2e3)},"image/png"),Vi="Screenshot saved",oo=performance.now()+1500,s("screenshot saved: "+G)}function qh(){let g=document.createElement("canvas");g.width=g.height=ee;let E=g.getContext("2d");E.imageSmoothingEnabled=!1,E.drawImage(i,0,0,ee,ee),E.drawImage(t,0,0),a(g.toDataURL("image/png")),Vi="Cover captured",oo=performance.now()+1500}function Yh(){let g=E=>gt.some((R,W)=>R[E]&&!ut[W][E]);if(!(++Rl<15)){if(ke>=0&&(Mn=ke,ke=-1),In>=0)return Mn=In,In=-1,Cl(yn[Mn]);g(2)&&(Mn=(Mn+yn.length-1)%yn.length),g(3)&&(Mn=(Mn+1)%yn.length),yn[Mn]==="Resolution"&&(g(0)||g(1))&&Il(g(1)?1:-1),(g(4)||g(5)||g(6))&&Cl(g(6)?"Resume":yn[Mn])}}function Cl(g){g==="Resume"?lo(!1):g==="Restart"?(Ks(),r()):g==="Screenshot"?Xh():g==="Capture cover"?qh():g==="Resolution"&&Il(1)}function Il(g){I((f-1+g+3)%3+1),A.clearRect(0,0,ee,ee),Bn(),!(xe._draw&&!jn(xe._draw))&&un()}function Pl(g){if(!Jt)return;jt+=Math.min(g-je,100),je=g;let E=0;for(;jt>=Fh&&E<4;){if(jt-=Fh,E++,yt(),Ze){if(Yh(),!Jt)return;continue}if(F()){lo(!0);continue}if(rt++,Ue>0){let R=hn;if(Ue--,Ue===0&&hn===R&&(hn=null),R&&!jn(R))return}else if(xe._update&&!jn(xe._update))return}if(E>0)if(Ze)Wh();else{if(Bn(),xe._draw&&!jn(xe._draw))return;un()}Tt=requestAnimationFrame(Pl)}function Zh(g){return xe=g||{},Bn(),un(),xe._init&&!jn(xe._init)?!1:(Jt=!0,je=performance.now(),Tt=requestAnimationFrame(Pl),!0)}function Ks(){Jt=!1,cancelAnimationFrame(Tt),k.stop(),k.musicStop(),cn()&&document.exitPointerLock()}function $h(){Ks();for(let g of S)g&&g.geometry&&g.geometry.dispose();S.splice(0,S.length,...no(e)),w=[],T=Array.isArray(e.palette)&&e.palette.length===pi?[...e.palette]:[...Jn],Z=Gs(),ot=Es(),q=0,ht=-1,_t=!0,Rt=0,m.splice(0,3,0,6,-10),d.splice(0,3,0,0,0),at=90,Y=null,It=[],rt=0,jt=0,Ue=0,hn=null,Fn=0,vn[0]=vn[1]=0,On(),N(0),X=Q=pt=mt=Ot=pe=0;for(let g of[xt,Bi,Pn])g.fill(!1);for(let g of gt)g.fill(!1);for(let g of ut)g.fill(!1);Ze=!1,ke=In=-1,_i.style.display="none",ao.clearRect(0,0,ee,ee),k.resume(),A.clearRect(0,0,ee,ee)}function Jh(g,E){vn[0]=+g||0,vn[1]=+E||0}function Kh(g,E){Bi[g]=!!E,E&&(Pn[g]=!0)}let Hi=!1;try{Hi=localStorage.getItem("blocky3d.mute")==="1"}catch{}k.setMuted(Hi);function Qh(g){Hi=!!g,k.setMuted(Hi);try{localStorage.setItem("blocky3d.mute",Hi?"1":"0")}catch{}}function jh(g,E){E&&k.unlock();let R=x0[g.code];R!==void 0&&(xt[R]=E,E&&(Pn[R]=!0),g.preventDefault())}return{api:dt,start:Zh,stop:Ks,reset:$h,key:jh,maps:S,renderer:l,unlockAudio:()=>k.unlock(),setButton:Kh,setStick:Jh,setMuted:Qh,set onTouchMode(g){zi=g,On()},get touchMode(){return Ze?0:Fn},get muted(){return Hi},get paused(){return Ze},get scale(){return f},setScale:I}}var v0=`
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
`,qs=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Ys={pause:qs('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>'),sound:qs('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),muted:qs('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>'),full:qs('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),exitFull:qs('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>')};function bl(i=document){let t=i.createElement("style");t.id="b3d-style",t.textContent=v0,i.head.prepend(t);let e=i.createElement("div");return e.id="b3d-shell",e.innerHTML=`
  <div id="screen">
    <canvas id="gl" width="256" height="256"></canvas>
    <canvas id="ui" width="256" height="256"></canvas>
  </div>
  <div class="b3d-sys">
    <button class="b3d-pause" title="Pause (Enter)" aria-label="Pause">${Ys.pause}</button>
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
  </div>`,i.body.prepend(e),{canvas:i.getElementById("gl"),overlay:i.getElementById("ui")}}function El(i,t=document){let e=t.getElementById("b3d-shell");if(!e)return;let n=t.defaultView,s=t.documentElement,r=P=>e.querySelector(P),o=()=>s.classList.add("b3d-touch"),a=n.matchMedia("(pointer: coarse)");a.matches&&o(),a.addEventListener&&a.addEventListener("change",()=>{a.matches&&o()}),n.addEventListener("pointerdown",P=>{(P.pointerType==="touch"||P.pointerType==="pen")&&o()},!0),n.focus(),n.addEventListener("pointerdown",()=>n.focus());let l=r(".b3d-dpad"),c=[".l",".r",".u",".d"].map(P=>l.querySelector(P)),h=new Map,f=0,u=()=>{let P=[!1,!1,!1,!1],C=l.getBoundingClientRect(),I=0,O=0;for(let[S,M]of h.values()){let L=(S-C.left)/C.width*2-1,J=(M-C.top)/C.height*2-1;if(f===1){let k=Math.hypot(L,J)/.9,$=k>1?1/k:1;I=L/.9*$,O=J/.9*$,I<-.5&&(P[0]=!0),I>.5&&(P[1]=!0),O<-.5&&(P[2]=!0),O>.5&&(P[3]=!0)}else if(f===2)Math.abs(L)>.06&&(P[L<0?0:1]=!0);else if(f===3)Math.abs(J)>.06&&(P[J<0?2:3]=!0);else{if(Math.hypot(L,J)<.2)continue;let k=Math.abs(L),$=Math.abs(J);k>$*.42&&(P[L<0?0:1]=!0),$>k*.42&&(P[J<0?2:3]=!0)}}P.forEach((S,M)=>{i.setButton(M,S),c[M].classList.toggle("on",S)}),i.setStick&&i.setStick(I,O),l.style.setProperty("--kx",I),l.style.setProperty("--ky",O),l.classList.toggle("on",f===1&&h.size>0)},p=P=>{P!==f&&(f=P,l.dataset.mode=String(P),u())};i.onTouchMode=p,l.addEventListener("pointerdown",P=>{P.preventDefault();try{l.setPointerCapture(P.pointerId)}catch{}h.set(P.pointerId,[P.clientX,P.clientY]),u()}),l.addEventListener("pointermove",P=>{h.has(P.pointerId)&&(h.set(P.pointerId,[P.clientX,P.clientY]),u())});for(let P of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(P,C=>{h.delete(C.pointerId)&&u()});[[".o",4],[".x",5]].forEach(([P,C])=>{let I=r(".b3d-ab "+P),O=S=>{i.setButton(C,S),I.classList.toggle("on",S)};I.addEventListener("pointerdown",S=>{S.preventDefault();try{I.setPointerCapture(S.pointerId)}catch{}O(!0)});for(let S of["pointerup","pointercancel","lostpointercapture"])I.addEventListener(S,()=>O(!1))}),e.addEventListener("contextmenu",P=>{P.target.closest("#screen")||P.preventDefault()});let _=(P,C)=>{let I=r(P),O=-1e9,S=()=>{let M=performance.now();M-O<500||(O=M,C(),I.blur())};return I.addEventListener("mousedown",M=>M.preventDefault()),I.addEventListener("pointerdown",M=>{M.pointerType!=="mouse"&&M.preventDefault()}),I.addEventListener("pointerup",M=>{M.pointerType!=="mouse"&&S()}),I.addEventListener("click",S),I};_(".b3d-pause",()=>{i.setButton(6,!0),i.setButton(6,!1)});let v=_(".b3d-mute",()=>{i.setMuted(!i.muted),m()}),m=()=>{v.innerHTML=i.muted?Ys.muted:Ys.sound,v.title=i.muted?"Unmute":"Mute",v.classList.toggle("on",i.muted)};m();let d=()=>t.fullscreenElement||t.webkitFullscreenElement,A=_(".b3d-full",()=>{try{let P=d()?(t.exitFullscreen||t.webkitExitFullscreen).call(t):(s.requestFullscreen||s.webkitRequestFullscreen).call(s);P&&P.catch&&P.catch(()=>{})}catch{}}),T=()=>{A.innerHTML=d()?Ys.exitFull:Ys.full,A.title=d()?"Exit fullscreen":"Fullscreen"},b=n.matchMedia("(display-mode: fullscreen)").matches||n.navigator.standalone===!0;A.hidden=b||!(t.fullscreenEnabled||t.webkitFullscreenEnabled),t.addEventListener("fullscreenchange",T),t.addEventListener("webkitfullscreenchange",T),T()}var an=null,As=null,Zs=null,kh=null;function Vh(i,{canvas:t,overlay:e,onError:n=ro,onLog:s=console.log,onRestart:r=Hh,onSave:o,onCover:a,wire:l=!0}={}){return t||({canvas:t,overlay:e}=bl()),As=e,kh=n,an=zh({canvas:t,overlay:e,cart:i,onError:n,onLog:s,onRestart:r,onSave:o,onCover:a}),Object.defineProperties(window,Object.getOwnPropertyDescriptors(an.api)),window.addEventListener("keydown",c=>an.key(c,!0)),window.addEventListener("keyup",c=>an.key(c,!1)),window.addEventListener("pointerdown",()=>an.unlockAudio()),l&&El(an),an}function y0(i,t){let e=bl(),n=e.overlay.getContext("2d"),s=null,r=!1,o={setButton(u,p){s?s.setButton(u,p):p&&u!==6&&f()},setStick(u,p){s&&s.setStick(u,p)},onTouchMode:null,get muted(){if(s)return s.muted;try{return localStorage.getItem("blocky3d.mute")==="1"}catch{return!1}},setMuted(u){if(s)s.setMuted(u);else try{localStorage.setItem("blocky3d.mute",u?"1":"0")}catch{}}};El(o);let a=u=>{n.imageSmoothingEnabled=!1,u?n.drawImage(u,0,0,256,256):(n.fillStyle="#1d2b53",n.fillRect(0,0,256,256),Ch(n,i.name,"#fff1e8","#000000",56,88)),n.fillStyle="rgba(0, 0, 0, 0.6)",n.beginPath(),n.arc(128,128,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff1e8",n.beginPath(),n.moveTo(120,115),n.lineTo(120,141),n.lineTo(141,128),n.closePath(),n.fill()};if(typeof i.cover=="string"&&i.cover.startsWith("data:image/")){let u=new Image;u.onload=()=>{r||a(u)},u.onerror=()=>{r||a(null)},u.src=i.cover}else a(null);e.overlay.style.cursor="pointer";let l=u=>{u.ctrlKey||u.metaKey||u.altKey||/^(Tab|Escape|Shift|Control|Alt|Meta|F\d+)$/.test(u.key)||(u.preventDefault(),f())},c=()=>f();e.overlay.addEventListener("click",c),window.addEventListener("keydown",l);let h=()=>{if(r)return;let u=navigator.getGamepads?navigator.getGamepads():[];for(let p of u)if(p&&[0,1,2,3,9].some(_=>p.buttons[_]&&p.buttons[_].pressed))return f();requestAnimationFrame(h)};requestAnimationFrame(h);function f(){if(!r){r=!0,e.overlay.removeEventListener("click",c),window.removeEventListener("keydown",l),e.overlay.style.cursor="",n.clearRect(0,0,256,256);try{s=Vh(i,{...e,wire:!1})}catch(u){ro(u);return}s.onTouchMode=o.onTouchMode,s.unlockAudio(),Tl(t)}}}var wl='({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null })';function M0(i){return"(function () {"+String(i||"")+`
;return `+wl+`;
})`}function Tl(i){Zs=typeof i=="function"?i:null;let t;try{t=Zs?Zs():i||(0,eval)(wl)}catch(e){return kh(e),!1}return an.start(t)}function Hh(){if(!Zs){location.reload();return}an.reset(),Tl(Zs)}function S0(){an&&an.stop()}function ro(i){if(console.error(i),an&&an.stop(),!As)return;As.width!==256&&(As.width=As.height=256);let t=As.getContext("2d"),e=("Error: "+String(i&&i.message||i)).split(/\s+/),n=[""];for(let s of e){let r=n[n.length-1];r&&ws(r+" "+s)>248?n.push(s):n[n.length-1]=r?r+" "+s:s}gi(t,n.join(`
`),4,4,"#ff004d","#000000")}function b0(){window.addEventListener("error",i=>ro(i.error||i.message))}var Gh="0.1.0-alpha";window.Blocky3D={...Al,VERSION:Gh};})();
// ---------------------------------------------------------------- cart data
Blocky3D.catchGlobalErrors();
// the page shows the cover and a play button; the game starts on a click, tap or key press
Blocky3D.play({"version":1,"vox":[{"name":"race car","pivot":[4,0,4],"data":"AAAAAAAAAAAAAAkJCQkAAAAABgAABgAAAAkJCQkJCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAEJCQkJAQAAAAkJCQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAABAAABCQkJCQEAAAAJCQkJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkJCQkAAAAACQICCQAAAAAACAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkJAAAAAAkJCQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAABAAABCQkJCQEAAAAJCQkJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAQAAAQkJCQkBAAAAAAkJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJCQkJCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="}],"sfx":["0800002134021340213251800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","0800002d3502d3502d3502d33518000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","040000284402d440344451800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","06000024450284502b4503046230445180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","0200001265316235180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","0300001f04024045180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","0900000913015130091301513009130151300913015130051301113005130111300513011130051301113007130131300713013130071301313007130131300413010130041301013004130101300413010130","0900002d420000002b4202842026420284202b4200000029420000002842026420244202642028420000002b420000002d4202b4202842026420284202b4202842000000264202442023420244202642000000","0900000a6533461500000346151e6453461500000346150a6533461500000346151e6453461500000346150a6533461500000346151e6453461500000346150a6533461500000346151e645346150000034615"],"music":["306070840"],"name":"split screen racing","tiles":[null,{"top":[3,3,3,3,3,3,11,3,3,3,3,3,3,3,3,3,3,3,11,3,3,3,3,3,11,3,11,3,11,3,11,3,3,3,3,3,3,11,3,3,3,11,3,3,3,3,3,3,11,3,3,3,3,11,11,3,3,3,11,3,3,3,3,3],"side":[4,4,2,2,2,4,4,2,2,4,4,4,2,4,4,4,4,2,2,4,4,4,2,4,2,4,4,4,4,2,4,2,4,2,2,4,4,4,2,4,4,4,4,4,4,4,2,4,2,2,4,2,4,4,4,2,4,4,2,4,2,2,4,4],"bottom":[2,4,4,4,2,4,4,4,4,4,2,4,2,4,4,4,4,4,4,4,4,2,4,4,4,4,2,4,2,4,4,4,2,2,2,4,4,4,2,4,4,4,4,2,4,4,4,4,4,4,4,4,2,4,4,4,2,4,4,4,4,2,4,4]},{"top":[5,5,5,0,5,5,5,0,5,5,5,5,5,5,5,0,5,5,5,0,5,5,5,5,0,5,5,0,5,5,5,5,5,5,5,5,0,5,5,5,5,5,5,5,5,5,5,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"side":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"bottom":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]},{"top":[7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8,7,7,8,8],"side":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"bottom":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]},{"top":[7,7,7,7,0,0,0,0,7,7,7,7,0,0,0,0,7,7,7,7,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,7,7,7,7,0,0,0,0,7,7,7,7,0,0,0,0,7,7,7,7],"side":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"bottom":[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]},{"top":[5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,5,5,5,0,0,0,0,0,5,5,5,0,0,0,0,0,5,5,0,0,0,0,0,0,5,5,0,0,0,0,0,0,5,5,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5],"side":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],"bottom":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]},{"top":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"side":[2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4],"bottom":[2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4,2,4,4,2,4,4,2,4]},{"top":[3,11,3,27,3,3,27,27,27,3,3,3,27,3,27,11,27,27,3,27,3,3,3,3,3,11,11,3,27,3,11,11,3,27,3,27,3,3,3,3,3,11,3,3,3,3,3,3,11,3,3,11,3,3,27,3,3,3,11,11,3,27,3,3],"side":[3,11,3,3,3,3,11,3,3,11,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,11,3,3,3,11,3,11,3,3,11,3,11,3,3,3,3,3,3,3,3,11,3,3,3,3,11,3,3,3,3,3,3,3,3,11,3,3],"bottom":[3,3,3,3,3,11,11,3,11,11,3,3,3,3,3,3,11,3,3,11,3,11,3,11,11,3,11,11,3,11,3,3,3,3,3,11,11,3,3,3,3,3,3,11,3,3,3,11,11,11,3,11,11,3,11,11,3,3,11,3,11,3,3,3]}],"maps":[{"name":"circuit","w":64,"h":4,"d":56,"origin":[0,0,0],"data":"AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAABgAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAABwcHAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAHAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAUAAAAHAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAwMDAwMDAwMCBAICAgICAgICAgICAgICAgICAgMDAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQMCAgICAgICAgICAgQCAgICAgICAgICAgICAgICAgICAgMDAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQMCAgICAgICAgICAgIEAgICAgICAgICAgICAgICAgICAgICAgMDAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQECAgICAgICAgICAgICBAICAgICAgICAgICAgICAgICAgICAgICAgMDAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEDAgICAgICAgICAgICAgQCAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAgICAgICAgICAgICAgIEAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAwICAgICAgMDAwMDAwMBAQEBAQEBAQEBAQEBAQEBAQEDAwICAgICAgICAgICAgMBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAwMCAgICAgICAgICAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQMCAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAwMCAgICAgICAgMBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEDAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAwMCAgICAgIDAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQEBAQEDAgICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAwICAgICAwEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAwICAgICAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQMCAgICAgIBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQICAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAwEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQECAgICAgIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQMCAgICAgMBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAAAHAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAgICAgICAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDAgICAgIDAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAHBwcAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAwICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAwICAgICAgEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgIDAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEDAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAwICAgICAwEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAwICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQMCAgICAgMBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDAgICAgICAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEDAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDAgICAgICAgEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAwICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEDAgIDAwMBAQEBAQEBAQEDAgICAgICAgMBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQMDAgICAgICAgMDAwEBAQEDAgICAgICAgMBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEDAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQMCAgICAgICAgICAgICAwMDAgICAgICAgMBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAwICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQMCAgICAgICAgICAgICAgICAgICAgICAgMBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAQEBAwMCAgICAgICAgICAgICAgICAgICAgICAgMBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEDAgICAgIDAQEBAQEBAQEBAQEBAQEBAwICAgICAgICAgICAgICAgICAgICAgICAgMBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAwICAgICAwEBAQEBAQEBAQEBAQEBAwICAgICAgICAgMDAwICAgICAgICAgICAgMBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAwICAgICAgICAwMBAQEBAwMDAgICAgICAgMBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEDAgICAgIDAQEBAQEBAQEBAQEBAQICAgICAgICAwEBAQEBAQEBAQEDAwMCAgMBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAABAQEBAwICAgICAwEBAQEBAQEBAQEBAQMCAgICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEDAgICAgIDAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQECAgICAgIBAQEBAQEBAQEBAQEBAwICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAgICAgICAwEBAQEBAQEBAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQICAgICAgMBAQEBAQEBAQEBAQEDAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAEBAQEDAgICAgICAwEBAQEBAQEBAQEBAgICAgICAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQMCAgICAgIDAQEBAQEBAQEBAwICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcAAAAABwAAAAcHBwAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEDAgICAgICAwEBAQEBAQEBAQMCAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAABwcHAAAABwAAAAAAAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAEBAQEBAQMCAgICAgIDAQEBAQEDAwMDAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAcAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAwICAgICAgMDAwMCAgICAgICAgICAwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAcHBwAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQMCAgICAgICAgICAgICAgICAgICAgMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAUAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAcAAAAHBwcAAAAABwAAAAAAAAAAAAcHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAEBAQEBAQEBAwICAgICAgICAgICAgICAgICAgIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcAAAcHBwAAAAcAAAAAAAcAAAAAAAAAAAAABwAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEDAgICAgICAgICAgICAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAABQAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAABwAAAAAAAAAAAAcHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAwICAgICAgICAgICAgICAgIDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEDAgICAgICAgICAwMDAwMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQMCAgMDAwMDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAABwAAAAAABwAAAAAAAAAAAAAABwAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBQAAAAAABgAAAAAABgAAAAAAAAAAAAAABgAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAABQAAAAAABwcHAAAABwcHAAAAAAAAAAAABwcHAAcHBwAAAAAAAAAAAAAAAAAAAAAAAAAHBwcAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAHAAAAAAAAAAAAAAAHAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAHAAAAAAAHAAAAAAAAAAAAAAAHAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="}],"cover":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAQAElEQVR4AeydO6wsy3We+xwwNE1noiA6tAEFshVRseHQkKgHrBvJJAyYBBUZUMSEAZMbEXBEgjQgkGZECpRkCQ4N53RCWQEBOxQJUplpOiTuUX21++/zz5qq7urp7nnsqYv593qvqlrVq7pn9uxz3/7699+96+g16NfAc14Db4f+X69Ar8DTVqAfAE+79X3hvQLD0A+AfhX0CjxpBVh2PwCoQkevwJNWoB8AT7rxfdm9AlSgHwBUoaNX4Ekr0A+AJ934vuznroBWXzwAfvQHb4Y9oEGOomvnuHYeLflbcu6Vp2WsLT4t82zx2TKHHnvdChQPgOtOoY/WK9ArcKsK9APgVpXv4/YK3EEFpgPAH+18Xu9+/rNhDTz2mnxtjnvNwfNvyblXni1z8NhH33dfS+fbKuBe0wHgys73CvQKPEcF+gHwHPvcV9krUKxA8QDwx9Q3n/jksAY+ij9ebuE9Z433OdZ8WvQ+T/dfm7+Wx3M67/7Ou8/R/F777vP0tazl98rj43pO591nLe95nF+bx/33ylPLqfzFA0DGTnsFegVeVwXiavoBECvS5V6BJ6rA7gfAr3//3SB4Hf3xsoX32NpjjMaBuv9efG2ea/N7Ho91vfPu8yg8eyDU9svXWONb1uux7u96593H5+a8+3hsjXd/z+O8+9TyuN79t+RZk3P3A8AX0flegV6B+65APwDue3/67HoFdqtAKVHxAPBPvP1xosZ74tqji/t4/hrvY3nsNXmf25Zxa3lc7/yWsbbE+hy8/jXex6rtu8d6/hrvOVv4lvzuU8vpPrW5ud79r5nTx/L51PileRYPAB+k870CvQKvtwL9AHi9e9tX1iuwWIHpANAnuFCPqj1auH7pMcPzRZ7xhGi7hay5QLeMT7ywJU/t0XpLTo/VHKGu9/2t8XvtO2OX4POp8T63LT4e6+uq8e7fwtfyuL4lT83H61fyqemmA6Dm0PW9Ar0Cr7cC/QB4vXvbV9YrsFiB6QA4+lGzNpMt466NbfFv8fG1rPX32Bq/12NhLb/rj5i/56/xPm6Nr8XW9P4Y3MLX8vjbiha+lsf1LXncx2OP5KcD4MhBeu5egV6B21VgbuR+AMxVp9t6BV55BYoHgD+CtvBrH12Ozul75mO5voWvxdb0LTm9Vp7HefdpybmXj8+hhW+Zp/u05NxrLWvzbJmnv93wcY/I6fn34IsHwB6Je45egV6B+69APwDuf4/6DHsFLq7AUmDxAPBHlxbeB6k9DrnPPeT0+dT4tfOs5anVpJbf89Ri3Wcvvjafmt7H9Xk67z61PK53/xq/1r+W54h5HpHT57927Uv+xQPAB+x8r0CvwOutQD8AXu/e9pX1CixWYDoA/NFlC784YnBoGSuETGJLbM1nShKYmn+LPqQqii153KeYZEelj7WFr01pr5wteWpzaNG35K/51PLX/Fv0nvNS/7k45Z8OACk67RXoFXieCvQD4Hn2uq+0V+CsAlc7AJY+jTybWVf0CvQKHF6Bqx0Ah6+kD9Ar0CswVaCV6QdAqlTtr9HW6lOqV/NqWfurWewTL+TQA2DuU0jZnrj2fem9AjevwKEHwM1X1yfQK9ArMFuBfgCE8rT8xZr7eLg/Nrv+0fnaeh99Xa91/mvW1Q+ANdXqvr0Cr6wC/QB4ZRval9MrsKYC/QCYqZZ/d6HGtzwe+1uDtXxtemvzuH9LTvfxtbu+xvtYW/hb5a+N+xr1/QB4jbva1/S0FVi78H4ArK1Y9+8VeEUV6AfAlTfT3zLUeJ9S7RHafWp5XO/+LbzHOt8S6z4e28J77F5r93E9f+eHoR8A/SroFXjiCvQD4Ik3vy/9dVXgktX0A2Cmav7oWOPXfkLu/jXex6pNz31qeVxfy1PTb4ltyen5nfd11fK4j8fW+Fqeru9vAfo10Cvw1BXoTwBPvf198c9egX4AzFwB/kjpbjW9/sIR6p9ge6w/vtZ491/LM/YSajk9ruazl/6IsY7Iudd6j85zaf5+AFxauR7XK/AKKtAPgFewiX0JvQKXVqAfAI2V88d+f3T38JbHfs9T4z3nWt7nUONrOd2/5uP6tf4eewR/b/M5Yo175+wHwN4V7fl6Ba5cgS3D9QNgS/V6bK/Ag1egHwAXbKA/utfeDnjamr/HOu+xNf6InD5WbT41vccezR+99qPnf0/5+wFwT7vR59IrcOUK9APgygXvw/UK7FmBrbn6ARAq6I+Xbqp9yWSLv8fW+LVzaMnjOWt8LY/ra7Gu38u/pf4+lvM+n86fVqAfAKf16FKvwFNVoB8AT7XdfbG9AqcV6AdAqoc/Xtb45Da9aj6un5wT4/otfEo1vfbKMyVMzF45W/Kk4abXWv8pMDH+W4ka/1rfDqTlb371A2BzCXuCXoHHrUA/AB537/rMewU2V6AfAJtL2BPcsgL+eF/jfX7+dsP1z8r3A+BZd76v+6ErsNfk+wGwVyV7nl6BB6xAPwAecNOefcr+GL+Wf/baxfX3AyBWpMu9Ak9UgX4APNFm96W+jgrsuYp+AOxZzZ6rV+DBKtAPgAfbsD7dXoE9K9APgD2r2XP1CjxYBfoB8GAb1qf73BXYe/X9ANi7oj1fr8ADVaAfAA+0WX2qvQJ7V6AfAHtXtOfrFXigCvQD4IE2q0/1uStwxOr7AXBEVXvOXoEHqUA/AB5ko/o0ewWOqEA/AI6oas/ZK/AgFegHwINsVJ/mc1fgqNX3A+Coyva8vQIPUIF+ADzAJvUp9gocVYF+ABxV2Z63V+ABKtAPgAfYpD7F567AkavvB8CR1e25ewXuvAL9ALjzDerT6xU4sgL9ADiyuj13r8CdV6AfAHe+QX167RX40R+8GWpoz3JfnkfPph8AR1e4579KBWj84cPfGyYwqsnZju5GYPwSbjSdadh+AEyl6EyvwPoKtDQ1PsOPP/3+cOJgYqhEsw0+AL0jmHcTX90BcI2i7Vb9nuihK8C1Nj1xpGbOi0k067NgP77zaybMszk+HBhZNx92ZiXGceaQFK/qAGCxviFZTou89otxHdce/+nH+6Of3F8JNCcoYIai8BHf+bUhqlrkk+suHUZL/fCqDoBSgShISX+UbhrPij/pjhq0573/CugJAAqYsSh8hB8OX/qLaC3K+TrTdVf0OFe++gPgfMlX1qTN4/9fd+VRn2I4LnghLzjVegCf+kEWpx9jM8lXdLKvZE7iGU+wPPKBZrV8RGnUbBjOfnOR1RwOzBv/0ZdcQvYp/SCmUU+uV3EAsBBwsm4rBDZwYt9ZID/IaccNG8Y5oAfZdgc/mItwB9O5aArMPwf6e2UU1F6geQAHAjrs5j/lQN+IHBNzEau8jCcePb4O6fADJRs+gEMAu/uhT7o8D/gEeJDYYWCt+Gdh/MF1iD6J+Am8PXj4A4DFsJAJaZH5peKlYmVbUmbfRPd+5bwaB6oNCHPIfnsPvjJfngNzJE4U/lFBjX3uqr10rBFIjv7SX0I9V41XXuYFJEN9XrJBP/y9AfME95uUL8zZfuIrvLgMA3OTDooemsZ6+AOAtZyA0w6FKPwtoPFFbzGHpTHveW5Lc5ddaxDlwpYNPl3kEjPFD2Rh3Y+TZlOo59JYrpOfPxVIF/2YL7aoRweCvjgf5iDgLxAvMA4+id7dAcCi1kBrypTFctohiMKjhyasyd3qm9K+f2ksjS86erTmPMovT4PNhwlzQ/Vw0BpEfQHaC9fhB0bbmjrnNNQOIIjCO8jvMnyrTr7j/BDPkMb97AefGUD+zMMdUlNP3zlgTEE+Ie/hB8CaAuOreULzAmFmkH1SQXIh0vucL//p2+HP/udPJkiP35HI4zAP5vDP/mBgHmDSJ9uR41+SO89tprZbTOzlkZjmluqa1wGdlCPDxQ+LDcALskmeoXO1ze+5iU35v5z2/c9+/9NDng+6iNB8kznouW6+/K/+ac7DtZzzpfzTWCnw29/9rwNIbPabqPwSVaxozpOuz0wJSD4XHQBrNrZWPMZfAgtcisdnKQ92/I4EYyzhyPEvyc181+zlGl/2jfwAHsAfjnRR5wt8pDSkkMce9fgwpxqy7/hjrra40PjQ3/iNvxv+7Z+Pv4FgHJRQgeYbdV9OhwVzyDA9ZvJA14KcgDhR+DmcHACtG0zRSknRA7fViuc+8MQJLi/G88hj+Mr/+f7AJgj5A0CzHy6nyTMH4eLxUh79+vDdz3+WpPG151pSSq95End7sW9KBg8kL1HNaS0lr5odijwH5lRDNS7WPzmqYbnmpv3We378kw/zEZI4cH1MvvgYch6cEjJvtloMenKCFJbz59gkZOrzMf6tN31LwVO+948eCAYV01Qn7Fx+HD3eeWwTYjEmw8gs2Ue3w8iG8d996ZeDwPw+/b3fhQxvPvHJTPOBkO4mn/3hR0NEvpOMNni3uwwPsJO0WmeMK+H7q1DXtfKKdap5zlH5/+3fpsdnCa007ltNJl94ZM8Nht6x4i3GFGZ51ciTLTLyFcVemrOa3edj/FttCvFzxZUNvzkoX4l6nPI5dfsJ7ws7MVxHePfHXx8cNM8R+NwHbweB+lEbXyGHtcvO4w/QicIDl+GB65H3ADkF5ZMsypougeKhtdzYashN6teReDVIKdCbS3Z01kDTB27Kh919xbdQ5VUuUY9VfvmK4oMNiIe6HdmRfN9qM1zfwmsTIi3Fagyn8lO85Ey1cFGUabIQfbnmjM+K8Yd8EcWLoqvBfLzhcf/c578wCMgO1uVyiS/5lHSK/dY3vzHw6F8CNvDt33w7ZHz1py8UWbyo6+AdyYf6a8w1lLlfgtoYzEOo+UivcXnsjQ1Io3P3hOIPBfDTtWP7nH9Hno3ph+vhY/O4Dj6FnMRLLtiYg4DbGcaYrK/xGEtzQg+wAfFQ4PlcTr4nnwFgc2hDStT9nNfmOHW7ckknv7yZNDwnsoxO02SzKIrgPDJgsa6Hjzr5QROmZv/4X013ejU7j9/wyW16MedJSAxrSqT4kq/7uI5GLuHN1744ZPzid16oZOiomwZkjRLEi6J3Hpl6QJOeuVwCwufAeiPm/H0OJ9eCrgloBAnTGiAT8OEaggLn5QtVDabAkZEen1E1EenwEY8RWUDGhgwP4jyQATbBY+DRk0M8soAeXhS+BnxiDpPzARA3SnItp/S+aeJlE1UuKLrJjwKwOQAeI9DkmDhyRNRLFi3Fj7qp0XmkLzQ7jS5oWM1bMrSkQ19CyRedmj7GqOmnu9U498mPdUYdRvRQQbKo60vxslcoc55DDNM+O82Nrf1mzyNkUzLNExrXIZ9I8cPf9eiQReEjsBEH4KNdMjZ8JEORBeQaiDWbf96T1eQYfbJN16g+G+K6BZ/6lZcbFXZ47Ekf35Z6Dn3uE33yZwB58IUfvpHiSyF+kWCXL/TkAsDIggE8GBcPe/JoVdPjqPiRTk1OcVJRJjnxau5ISXNt+Bx87Dxf5g7SnLNtbv2yjevP/v4j6oPs+1XilYr9m8PJ3sbG70ssygAAEABJREFUlkwyja95oxNqNnxlk69T7JLn/NyW+Nwgqca55qmRpkM35cq2sbGyHR6kffFmOrGNuXKT/cmvnn5QiwzsA9zp855Rl/OOPtmmt536bMhknkxB9sOebOxPmvr0yrak51pjbydDYuSbnwCSfPLCGHHiYAKJHR53dlGwUanwU6GRlQu+ZnMfeHyhQHyiFJ7F1oD7veBb3/1oEIZP/IfB8WZ8xOdpINeKujDxtEbIBOSabXJKDH6JTC+Tfb9KfN5DNXCkumOjJ3nLXPAD8oUHNqeTwx+bfN0HPUAnO3JEsn12bCquj9xkY8OpQdRIk1/yz7axsWTPutRQPkS+1pLfm+Gvq58Ruf8cTx+V7OxLSe/++ETZY7C7LN/pQ0AcBHeMPIEOxYjmC0YXhgdro0TdVuLTxuWLH5v4SM3G5iE+CvLFlC6c0nzfpbuR7kC5GahZdESnemBzHlmQHzI8FF8oMs0LtGei6AB+NXge95HedYzlMrzrWmLkQxwgh0E1o9Ed5vLy9VlXJJ7rOZHqa8lOYMmHnsAG4AG8o6RzO3zMTUzUzcklf/KiLz4BYAQkjUBPoJAbngtFwEEb5bx0om5zvtVufmp+5kQqARnUZPTYATxwXrLrnN/Dzp1jwocfG94EMEY+BGBszbM69y3FYAclG7rYXFEm1kEMMn4AvgUehz+xAD4CPUCf4qZDMj2S58fw9PiNCejzFSiyI+6f2+Z4j6Mn5Ov6qMMPO4AHJR/pIiWupPM82Et+6AX8Sz7oTw4AFA4lINiRm153Cpy0MfAO1zu/xifGBZmTXumYOzxzhSIDeAAPZHcdPMAOlQ8yQAecxwcZYAPOIwPXOe829KwFoJ+efhBYM4B3uM75LT7EpgaDTJBcG0OO+AHJkSpe1O3oiAXw2OATzXd2nooKzZ7M00tPVfmxPD2qQyfjyFDnkZ0l7K071OKkj/7EosMOkAE6qOuQS4g+xEYdcSUdeoE4eL3l5GAU8oeAJAA4CQQJueF1h4fiNG4O7HQ3yoL92MPHc5Da5KlZ0I9gziNb/cYidvyAeKiDemAH6EXhheiDPvq5j2yi+AN8oOhBXhffD//S+E9BsWaAk8N1zm/xIZYGFCRDa2NgcxBbkhUvKh/khNzofNBGs6c7eryzyx1aanZqhy0i6pGFmq/2JNprsvuLF/WYkg470JymRuVzom9+Y8jNmvh3w2/jdoKa76RP8fouSX66/PHfD3zGpCTTE4AGF81N73d5ImobW9MTA2QXRQdqck1PDEj23CTwARQYoBaFd6AX0MNDI9AD9KLwDvRAOuddhx6gE4V3oAfooBnjB1bo8lNBWnvm+eG8y+gBOuC8y1GPTUgNOR3s8NE3yopDj79kKDLAhlxCsuULVG+B+L6DwAds6fMS7uhCKQX14vqNNvSuQxZcD4++lAMbwAbgW1DzLekZ+6TJf/6fX4bgQ+IXbsiHQWpqKF8CK9ZMNYSmGo6hJ4QPmMH0IWBueO7ugMbHnU2DCiU5bdx0oSz5yS5ayieb0+Cn9/zu8tp5DjzWDU7WSv2lUJ2gwPU1P/k49Vjp0SkHFFk2UfTiS7QUIz/Z0lNPXut48GX+g89kr1LTYHA9TYRuC+ZyYAPk93GRS5BvtEW97tjZj8YHWVj4sVTzZKfRQc6kOmdhGN7mr1Kq4ZNz1genrOMHduB8zVc+Tlt88Z8BF8SM+SlM1ADkg5eaak9YvfPIAn7wbnceG0AH4COUQ9TtxKAH0qMTD41y0k2P/Tz689jvf/mY7P6KTSOb9DQkkN5pTe8+zi/5Y9e4Hlfi8S3ppaP5xQ+x8e3u77aThlZdoYBkUOD7gT7gbb6IUOIMdaAD0pEMuE42aNTji16IdpdLvm5POfJFn2h/vVSAemSk31vntweoa3VULWVHdh5Z8dIjA9lE0UWUYqQjLmH65F7Nnho+X9S66LnYE3i8dSw1kKZCQwLJTl3fks/9PY942ckFpK/Rmg/NP8WoDlKkWojNdZqEkUk1zfuuOkMBZiiQDzpB+iS/fAaAQkjK6VXSYZQeiixE2fXYgHTQKKMD6AXkBC70RPKrVkz0QnYcf5R0mKSHIjtKOuzoBWShpMMmPRTZUdJhRy8gCyUdNvT5X4tJj8/IJ1AdoW5wGR5wscgHHiBjE5UOWSjoTpqdD/XSJ/j5ItZFzsUtkAf9CL3PF1Wz4ZbXClPAnM3dY76lOOzAc4gnF5AMxReIxw6QHfhMH2baZxzZh9pkJv2gLonodXL3196wB0BO4rED6UVH3csBIGWJKlHJVtNdGlOIo/FBHIriRR1FFtyGDjnGoBewO9Ajt8bgD2IMOgGbA71kHwe9IDs06hQjfab23pmYIqgziEYuCvQAHpR80OEDTThp9vHuPjW7Ll4uaAHdCL4DoUYXTSmrL9aIkbUDeEE2ydDog85BDHBdjMEOok/0kx1fgCwKLyiuZMOHbx7munAogPFXmtRnan4cBfaCvQLSOS8dfvCiiX9/AJgy6d+/SolkJQZIFp2LwYcYAC8QAyQnWmr8pM7f5qoVD3sJ+IOSbU73yDHUD8ytLz9CugN7AFxn/PSenbt6S7MTOzY7h0K+49kFHetLcwDC5kAckA8xAFkU3n2QsQH4GmJMyQ8fEG3kBlEvGVspTnYodgDvINbliZ/Zr8nHGfN/fwCY0n1neWLArFPBSAwomKSKFy6LB7I7Re8o2Vwn3mPgpYciA/gSsAnRjj7qJGMTpBOt6bHLJopOKOncxvffJ2Cg9kA8FPihPPJTw9PsCTTxCXRXF7Vmxy/fzT7xybPvyTNnhgTwAJ4LH8AL2IDkEiUGYBOFj8AGon4vmdzA8zF3gC7a0An4AMlnlN/QReW4T1GdD/Zo057jjC3h/QGAsobkmBPKHmXpSzT6RrkQE5sfFwoH4CPQO9wuvevEyyYqPbSkQy/IDpVOtKRzG3YgnSg6INkpekfJ5jrxHpP5+BaB/RidTx7lucP7h3RqbDW6qPQjjQ2fxxx/jTcOkwn6zKQf8CCxxRc2UDReqJxttJBzjW8IPRHn8sg2t04/jKfE3tSTMjHoge1v0p692g4AEgGFwwPJcxQ/IB94IDnQUvO7C4VyyCad5BKVj6h8oix9pPITlT3K0juVj6hsUZY+UvmJyh5l6Z3KR3SypQ8Nvem5Y59ATe50bHT58b7UwQUMpjESczZu0pVe+M3psYOSj3TYgeQajXOs+aGv+baMo3hyAOQSsIFoYwxw8tuC5JQPg3RA69uSmaYntKxPNN+waX71GjxIsfmFPmH+ACAA5IgLfhALGkOXmp80FMmBDkgHX4N8ROUXZekjlZ+o7FGW3ql8RGWLsvSRyk9U9ihL71Q+orIhq5Ez9UaHD82Ojzc7vHI55YIV0DMOgHfg43LJB7v0UIBOKOWIPvKFRn90a7AmHl+wJn/0ZS0g6tmLM50p8sE+PsXlwyH9FuZdgrlkdv4ASCfE9D2B7L7yx4r42PwUDtRGxBYRfWWPesmyi0rvdM6Gn+yi6Bw1fcmn5lvTK4fsotI7rdn4VHnChx8b8oWlxk8JaHJHUp28yHuiSAIXrJDEs5di8DkzrlAoz1wIPgJ+tTHlA8WvBo93vuSPHZRs6FoR7/6tcS1+b6dHBffmrg1ct8TjD+QHDyTP0Nj8uFI4AF8CtojoJ3vUS5ZdVHqnczb8ZBdF56jpSz4135peOWQXld7pnM394nt4t5V48pb0c7pLYkr5yANKNumwC9LR5IJ08oFK5zT6u815+UFdL156qCBbiRabnwM6OvPEFnUlP/dJ/fnyTUDu1G64hCcHUKz4NIhUJVpqfvxUHCjypSBeUA7Jkcpeou5bsrfqlKfVv+a3Vx7qf4L0gV2pCRivNhfX4ye4Xjw255GBdCWKXSjZW3XKob+Og0onWstFTUDNLj0+gnROsSFDBWSH5gJ1/R48bwemPKlHy28BkmHTo79GWMjDhSfXSL04FMIhX+kkR4rddciAjS8BWwnk0HygNR/8ZIMvgXiATb5O0YOSDr1ADiDZ/cVHm+RLqI81F4+fUPLDJj28IF2cO3r5QJEjFAONNmT0IP+PVZKCp5xE8suvAxT4lYBtDoqZ82m1sU5w8peBrcEr/coHQGsS7u5Ca8zoN9f8o0smFCIiG9IP6RN79mJDtLkYKabABVCC7NAc8/Of5X+bn1zIgsZ1Gm2S56jHi5e/ZKh0cxS/CPlLL7lGWSeo2V2PH3DdHnzrXH0sxUCZk4APPFTND891Udp/fBz41kBeIDtjA8klir9Qsjfplh7rm5K8d3r5DOC9PM+p2aF46g4PRUYP4Cug8UHFPKlVKOikbGQUo00mjK9WCsglyA7F7vHKiR4gA/g9QC6wZ661+biAgeYwF48fkG+kc7ElX/xBtJVk/AS3o/MGRpad/6sSQGZfoRHYHW73XOhZO4BvBf7CUkzxvf9S0AX2l88AWgNpdKEUM2dL/qXGp7BCcpleKhRUSvk5lU0UG3fwI0BujcO8gGQo9gj0Ee4jG7mAZFH3FS+bU7eRR3AfePmJoisBOzlKtiXd2ljGEUq5yed6+UKlx4fmlwxF3gvkczCe4PoaL19ozUf6avPX7v6lDwCVbIGevgXg7g08CFlwvfg5Gz6jvdT8mNlEAXkO8nNa8ucOfgRKY7nO5yXe7eJlg0pXo/hElHzlU7K5Tn6ibnMeu8s1ngtakM9cbPRVzBydy+dxfvfeg1ducokXZU6CdJH6WuULjX63lE8PAL+Dj42bJ1fTY3QbckSyn/0rNtFnZ/mIuz85d57mXaXjYp2bEPYSuKCFWrzHLfnWcrTo97rbKw+NDzQ26xDfQmtrjbHkFap3/xi0k3x6AHjS1Lj5NwHQqEf2AwK5gtqdX+5aOFS6e6fMFew9T3IKe+ZWTmgtLxdrzYYeewnYBPIDyaIeJ12JEgtKtpoOf+B2mhZEncutPIeB+8ax3HYp31Sf2uP/pYOOcfUDYHQoEg4Foejwolxqfry0eHiKG4FecJt0NepvAWo+S/pajqU5M0/lhhekq1HlheKjOKfohZpedlHyCeha4/BdC8ZZGyN/YoHkFoq/QNMDxcF/+nu/O0Dxgcq2ROUrKn/yiN+bXnT3v+D9v38X4OW3ANzNl1aDTwmVuJbm91AKW0LNx/XOk4PGdR1y/jv0D5bPO/kRE3OQ23Xw6ErABtyGvAYeK97jpYO6fonHX1jyXWMn5xp/HURrY2r+LePHhlYuDgqh5tOSn3xaFxR5Mw66+zOvl98CcDdH8gZHduBTgvuM/NrmH8N2IUtFp7HnMDeJpdxzsfdsu3RdxAmt65M/lJi1TUWMYuEdUe+5sfE4D2jwCM+zlWdcIeaqyRfd/WvJVuhfngAU4A2Ozg8EeHQLWNv8bIywkPpiM5tBMOPwYd4c8MFXMfBLIEZY8r3UrvzQS3OU4si3Zq2egzjB9eLJLUgnOhcnH2iMb40jtgYOgQjGqfm36snhWBPnN6XWuF3uAEkAABAASURBVD38Xp4ASpm84XUwlPxMd0nzK5yNFb835XQFNL4XusTjgy9onYfPnQugNW6N31FjeN4182nxJbcg/yhLD6V2AjKQvyi6VvzgD/9yADQ7MfGu7zI++DI+PP4OxncZHl8gHiqU/GVbonobKlr1v+D9f8xVf1OspofGqIJca34KJMQwiiS4Tf6Ruk/k5Rv1UabB5xD9o6xxoG7TOqCuh8e3BGwlRF/5kFuQTjTGuCyfSPGJOsnYBOmOpIxF/tr6sG0BTT2HLbmJ1bxF0bWCGPk6L53/ObZ42bbS0wOAu76jlt18aHxQc2VBQs0n6uUfafRzWb6uO4LXONDW/PiWUIuPvjU/18cYl93PeXxchqcRATwo+aDfG4wDLs3rc740x9o45gta4/Bjng50gDwAvgUcBPEJtiUu+rw/AGhqWbnrA8lOze/aX/DxaXR+vwrEC5ILUdhvlHImjV22Lmvn4v0Rv8SXsvOUgG/JtofO6wq/JSfxAnn0lmGin/8C6iL0q8D3HwLS8EIxZFSOPo/U/PGkbJXHFb96ootItGXBajxoi3/0IQ5EfU3GF8gODyRr7qI1vdtp9BIUeyRlHnvmr+XjSSHCx315AuCuDtwyw8898scwNkmItmvIFGZPxDlrbaLRvrescUT3zr+UL45LbZdiSnbiHCUf6Rgz8sRK57zrSnrsng8Zvwj0RyLOYe1YxDvWxOtAIOblABjv6iiWsLb5l/IdaWdTj8xP7muMwThCHI+LQLZrUMZ33HJMzWNuDqX6KE60FC+bqPuUcrq9xLtO8VDB7SUev5J+q67+a8BC5jXNT7iKB0VmESVgc7iP61t4xhI8T4n3fNHutiVe40Hxjblcxu6Ys7mf84zjwOZ5Io/d4XbXR77VL8bdg6y5MxfnkbeAXMRDAfxaxL1DbsnBeEJrzFLelyeAJa9kX9v8KWR6MelJCExcyJxvCN0kxnE3JVsRPLe+OdvSEHPrIS9QjjlffPAF8GDJH58SyOEo+RylY86A/FAAvxXkAeQRhb8UrTnwAz4OsuD6Nfz7DwFnorY0P2k1yRLF7og+blvLx1wux1xug4/2NTLxc/Bc0c9ta/mYK8qeTzbXqVmlK/nINkf3yjM3RquNNbT6rvE7Ku/SHBgXLPmV7NoXUXwW3wJsbX4G6bjvCvgFwUy5wAD8GuyVZ82Y1/DVukTXjin/rfHKcykt7ensW4De/JeW+rHiuDAcW2evXFvzbIlXs4lemov4S2NrceQENfuReu1Npj/8aKgeAL35j9yGx8vNBSvUZp8vqg8+UzNX9corWnVsNJDHXZmXyyWeGEF2ZPGiLbnk67SUy+234s8OABofbJkQi3VsyXVprI8Pf2meLXGM69iS69JYHx9+bR5iwNq4Vv8jctOkjqW5xDlIJofHRtltc7zyuc+luTzHHvzJAbC18ZlQXOy9LJS5XRtx7bE215jP1jl4PDzYc97kA+SEAvhrgjGBxow8MpB9DcWXWAB/b5gOgCOa/94W+6zziRcfBxForQfxoNX/Er+j87fMiTmAFt+SDzUVSnZyCyV7i075RVti5nzyAdDS/BpQtJRUi3Pqfoqdo+5f42N8yc/nAB99Yo6SHGNKcoyLPoztiHbkmKMk47eEGOf+Pgfxbr8G7/O7xni3HENrPXoOjLNljLetze+DcAG5fE1+64KvOdfWsVrqecm6L4lhzpfGEVsC+UDJdqmOfMKlOfaOi/sY5T3GIyfYIxc58hMAzBwY0DHnO2fzHDV+Lh5bKQ79WpTyRF1LzktiSnljnpJcinPdJTEe7w3lvPus5ckTY5hn1K2RY84or8m1ty9rE/bO7fk0BtT1a/mmA2Bt0u7/WBWggYDPmgsLuK7Gx1j80AF4gXxA8lpKPhDjtuSMue5ZLq1963z7AbC1gq8g3hsIHrQsiwsS4At1oHO05vQY58ntMjw5AfyzgDo4tq67HwBbK/hK4mkk0LIcXYDRl3hBtihLv4YyXvQnb9Tdi8x8wb3MZ24e/QCYq063FStA8wEZ4YFkKDKA3wryAOVxXrp7oWp85gMvIN8j+gFwj7vyIHOiEcGW6apBROdyMRaY82mxaSzRlpgtPmvnXJoXui1zqMXOHgAMGlFLdAt9nBvyLeZRG5P5RNR8b6FnbrcYV2OWxi/p5L8HLeUv6S4di2YXLsnhc4EXLsnVEjN7ALQk6D69ApdUgAu7FEfzlPRH6o4ak7xgj7mTR9gjn3JUD4DSBjEBBXa6XIFSvUp1Xc50jEdpfseMdJ6VsYEs8EDyUZQxgPI7L91WuiWe+YC5HNiFOb8WW/EAKF2kDNiS8Fo+pTlea+w+zn4V4LoC+2Vsy8SYoM37+l7MzbHHDOgZQfmKB4APDI+zApcovhGlmOizVmZeEeQojVXS4RvR6hfj5uQ4R+TSODVdKfca31J81z1nBbj2tHJdQ8UDQE5QHKEt8AHkvyZeMfdEj5h/qU61NZfGXxNfy/sMemrneIY1r13j4gHQmnDNRbnGt3X8Z/Mr1ZCL/dnqUFtvqRboQC1mrZ5cgmLvncbrZvYAYHFbFrQ1fsvY9x4bN2JuvmvquMZ3bsyjbMxPOHKMWu41da/lKOm1JmjJfk86aiDMHgByaqGlBdbiSr576GrjlfSl8Up+6Eq+e+jI3YrSeLXYku896GJzIINrzY167TXWNee915xLeWYPgFJA172uClzjQmYMUKrcnk1J/muNw1gl7L2e0hh76voBsGc1HzRXrWmOXs4lzcJchTg/9FGHfMk4xNVQG6fmf8/6fgDceHe4mG4JLf/IOWiMSBkz6ubk6I8MiBGFd+zd/J478tccK459qdwPgEsr1+OuWoFag2sS12q+pXloPo9C+wHwKDv1xPOcazpvfHigUjkv3VZay1nTbx3v6Ph+ABxd4Z5/cwVoLhATlXT4oAfwR4DcwHM/Kt8PgEfduSecN00HWLoo/F7gSQO05mMOQmvMGj/mAtbErPXtB8Dait3a/8PfG4Yff3rQhed089TI7UminGw+XuSZ1/Df/nXyCi/ygKC+VGTcS2Nb4mg60OJ7lI+PDw+OGOstiSOOGOjInHH+ko8c84jcXNhLGP7F/xuG7/za8O1/9//PprAUO2fPjftHPxmg+EHzAKmhkYWsK/zI80nzwiRf6JQnzRsZ4HNv4JqJc0IHov5WMnMBe47fnwD2rObGXN/+6k+Hb//m21kM/+sfv4zyL39x6kcsWIiv5c95/+bjAxQfaD5s0njISxjSfLJ/ou5byvOygPv5ubWp7mcl62dydgDc6wm9fmmvOCLdTXkKyA231zK5+6dmP0kX5RNjELj7p+bP8xpNX/7T8fJak2eMvRfy2vth3KGXcj/iYl/V6U0TvWzF+U8aFGChoTgEoMiAWADvwA8ZqnjkiFKs+xALXBf5kOMr//6j9x7Egveau+G47kGcUEkXfY6SGVs4agzyTgcAg6HouNMK0FxA0/Pml65E8aP5oR5f8p3TEZvw7o+/PpzgS78c+P9LgneJr6ZIsf50UPW7oYEeADecQnFo5gSKxo3K6QDYmKeH36oC3FVp8Lnxaf45e8VGQzto8s99/gvDCT54fwl9LvEcDpV0D6Om2UDLhK/pw5zAnmO+JSGoJeURey1quZb0tXHm4ph7DbW42jhL+lq+Of1cTsUx/8zTzJlZ8WP84C5/HnBJvIYiFiSZJs7NnhqaphaS6eyl9cnA4UC85BNqB9W05hOHLly7Au+P78LIbG5BfYjqmmMdsoC9k9IsY0POpubuji80OsZ4/PARdZ6DJMk0L02c2P1ezIMxS3Pcb5Se6YIKVA+ASxuyn+ynuzBXj2qNaRiaZWzKnBEdyEL6AQ/UWPBJPb3Q874bihI7OZGhyABeuuSn5q/OLfksvcjBQTL5MQ9+Q8A4k7IzpQpQd6Fk31tXPQD2HujSfHMNdGnOu4+jYWgWmpMmnZswPtj9sEBGrxzIgFzo4R3oku3dp37FtZv4N5/45Gk8a+IQONU+tHT05K9xEBQPAAa+ZHGXNuul410yx7uOoUk0wbEpp0/OaXDsqVEHAA/wV6NLRgfIAcWODRAL4AF24HyS5/byW9/8xiC8G347fy05hZy8ivGMwdgnnl1YqgD9ISz5rrUXD4C1Sbr/QRWgYZSaZlYjSyeKTTw+4qHI3HmhyI6Szu2J/9Z3PxocfFvxzS9+Z3jztS++4MOPDdiT69mL3yCcKe9YQZPd8fQOmdrZAXBpEYon/iFTfrykq2rDHRLEZdKsanQ/GNxPPlDpieHpAYqOWIBP7WDAL0HXwpvU5EJ+IiE+2fXCVjoE3gx/PZwdAiFWOW5NtVYouMV8bjHu2QHAxXoJthRsbrwteWuxc+PN2Wr5WvS1vMVYGjYa1MBR7zI+qbG//B//iWuH/H38U82LjnGIibYryLe42Ncsi/mBWsxr0Z8dAK9lYQ+7DjVlauSTNfBU4DgxmpAa+iv/6f8O+XMCU2fZ48kfngD4fb+HcGhxd886j4XPyvc/8ItPAcSTMz8FECO8D7sLbq7R52x3MfmNk+gHwMYC7h6eGjh/qSfR6Y9p1gxCY6fYgYNkLk4+0OSXmzRRf8WGdtvEM94o5EMgfUA4ihPhEJiEzlxcAQ7Ui4Mrgf0AqBTmJmrukAw8NuXJH9Pw3tmBn4NYQGxqyrO3AR4LTyy+0BYQ4yAmjZPfXjCugL6EGDv63PoOe63xGQeMy74b0g+AO9iK3S+M1Ngnh8dRa0zj5KcVmnscg98OjGwz2X39zSMvO5buustRdQ/WCqJHSRd9jpD7AXBEVffOyZ1275yWr/T4b+Z5lkPAPE6+ATjqW95K0ABgDLkaocHBkQOW1oUOHDluS+5+ALRU6Vo+dic9GZImqxwCuXm/9BfDZ//kVwe+yUcDgpN4hMIjevZLsfy6rvQ+nff0hGYU4rNeP5g7kJwoFzhI7MuHkuTIQvnH0Y1YHvVFWxq7pHvx3u/nVJ/9Uq7K1A+AVeW6kTPNzyEQhqeBaVxdqPB8Dx/w13wcDiCH0ZwgCcSB7PfBZ4rf5Etupy9igbTMSXwLJRa0+N7IhzqCaw/PIXCLcVlnPwCowr2j1vyf/8LszLmzgyHd5TkIMv7469Pf888F81Xfqp3mZ07QqtM6w60aoDRL5gJKtrU6mnspRmNBwZL/nvZ+AOxZza25Fh6RlV53b2QuMAAfwcUk5KcD/r4/HBrEAo+l+Wc/zFPzQxXI3IHkRDV2Ymdf+M06PJmRegBfdpTdtoXvB8CW6u0dy+/uQxPFIbz5o22rzId1i82vQbz5pbuAHnVhXzCVQ0K2rI9YcMjExqT9ABgLcXPC/ziDb+bpEIgHQZJ5hOd9e8tc4119KYbmf/Pjv89/4JN903iZ6gcyqMnSj/RsfGLBaH8mQhODS9e8JXZpzH4ALFXoWvb0Pj1/e49DoPBhGZ/w8xhfmw4NnFH4Jl4tRnr+pJfml3xCd3yff5L3AYWtU6ZfeKmpAAAHiUlEQVSRwdY8e8b3A2DPam7NxWO1ml805cx3/vT+PbHTizss4ILKDay/2PvaF/P/MOTdz39W/TNdkhDL475iz/7Kj/FpfuYERQbcxQE8IBmAB/AJzCuR9y9sgNj32qfkqA1g8aLw1wJ7DxivHwBU4Y5Ran6fLnf9k9/Xj0Y+xEPP/6UHH2E0DxwQ8pHujKr5oWfGrthagVs0v8+ZQ6AfAF6Re+C5Q4JxLvwaj40axYlw8eQmTnf+SQlDLIAfwUEgcCAAmn80nxJigbSx+bmLA9lnKPMGJy6NsScxXTisAv0AOKy0xybm8b3axHsNzaP/XrkePM9rnf5dHQDcLZbwWjdiWhd3SDDehXmPzt1+si8xxIIxfnJHdkyGwBALaH7u/lBcPBYe3QKYN8huxAhZ0X/cQwXu6gBYKsh0MS05dvv2CvDbCJqfQ2B7tp7hTivwUAfAndZwv2lxh1Q27sLiC/Ts+wDEAvnGeGSH/ESJBZLx9eZHdshPlFggOdK52Ojb5atV4G4OAB79r7bqBxqID+9q0+VbgTXbop67e8mppi/53rGO6wnsMcXXnONuDoDXXOSta+NXeFtznMTT5NzdoW7gW4hRH33cv8CfPZkkn7lDLJkPffVD4Ly8/la6HwDn9bmdhsfkyug/+MO/HCJOmo1YUImf/lFQ7GpyKDIgFpmGh6KDF+XxHiCXkOL5tmI0TQ1ILIgOB8jTmGPuKI/qpyYcAuBhDgAm+6w7NncH5YtCTXVJDZq/7SdnNblkUdeLh8Z4+RstfVWZ32Jkl4b47LfxR63Z0YON6V9d+F0cAH1j5q+rX//nfz7vsJdVd3zPR/O7XOGbD6JK/LXUa6+1a83rVuPcxQFwq8Xfy7jT083YgC3/HPinv/e7efp8U5DmA/kxP2sv+MHYNDv0gvBaSO3pZVpzLfACfWtzt/pdMIWHC+kHwL1sGX8OPDbgV/7H353M6kf/+/dPZDW/lBwCPH7zHvzi3wxs+L0/hw/jaz73To84fO59zbX5veU0jKg5H6VnQ5YQ53ip3LqGlvytuZr8+HNg7r4cArxfDh+Y/ei3fmug8UEtH03IB4McAuDEj3xASnggGcohAAXRhgywAXgAXwD14+vKkwlfMCn2ZRhv34zPke3sCYBGfI6l3+EqvQEL02v9dSCHwJtPfDL/jzm5OxdSrVblp4tP/crAwZLx8b8a3oEv/XLgCWR1whsFrLm+bzTFqw57dgBcdfTGwZ7mdOfOr5o4jy7JvJ/WXZWaAC5ogIsDXX4i+ODtwL8QzD8bnvHDj7I8fOoHA8g2dH/yq/mfFj+Rk55mR6dcHC6AAwagZywfGx7dyR8rpfnn30Ic8BRAHRizY30FTg4ANm19ih5xzQq8+cXvDBwC/CnwNcddOxZzXBtzif+a5u/X93mFTw6Ac3PXXL0C3CFBbeB0J+XOCob0wSFvC0DJneYQop1mAFHvMrHIovACsUBypHl+UYmc5g/puI8KTAfA3Gbex1T7LEoV4G0B4BAAJZ85HTFgzmetreXuXzpU1o6zJsfa63vtXB7VfzoAHnUBt5z3mguweZ7cIUF8CkB2hIQcAoDmA5i56AXkCG985+VHLLwo/BIYO9/9NVcFSIZK1+nNK5APgDUbfO0ZH9Jk117EFcej+QCNuOewHBAZ3/xG/gyC/Bnf/Sj/46P8M2OAsfcct5ZrzXVxz9d3bX3X0ucD4FqD9XEWKuB3R54C3B3Z4TZ4YgF8Ao1IQ84huZ28vv3Vn+Z/UdhjlIeni4yvfTH/vwPQZ3z4sQF9/haijZ8/8We+GgFekO5Cuqb5LxziacLe9tPx9nt9ckHzZaDbT2n9DFqa2w+I9SNcFHHJ9X3RQA8a1J8A7mnjaCK+DHSlQyDfucf1V//HIKO9iczNm+ZnfXM+DYOcHJYN/t1lvgL9AJivz/Wtf/Px4bP/5R/lL+vwBZxmxC/y/PDlCz9L8XyRB+QvCZGjMS7mHWjs8fCKNuT8lgAfvuqcfn15jcL2u/9ylfsBsFyj63nw9wD/5r8P3OWENYMrZk/aOj6HVm7y1OCl8QfWlmz5oGhNGvzIG1Rd3FiBuz8AOMX3RGu9WsdszXepHxd9Ky4dYy6udWz8cpPT6LWE2NIBl/1qPjvp2b9LUj1bzN0fAM+2IX29vQLXrEA/AK5Z7T7Wpgr0u/qm8hWD+wFQLEtX3msFWg6BFp97Xd+159UPgGtXvI+3uQJHNfjmiT1ggn4A3HjTuJifGZeWn5qVYmv6km/XDUM/APpV8LAVeJRmz78hudMq9wPgTjfmtU2LJgB7r8sPAef3HmdrPtYOtubZO74fAHtXtOc7q4Bf+M6fOV6o2KPxLxx6MSyuN8qLCQ526AfAwQXu6c8rcEQT3PMhECtwxPrjGK1yPwBaK9X9LqpA7WKv6S8a5AGDWD+49dT7AXDrHXjF4y9d4Ev2V1yaaWm3rkE/AKat6MwtKnDrBmDNt8Yta9APgFvv/isdf81Fvcb3kcq1Zl34gmuvrx8A1674E4x3iwv5Ccp6yBL7AXBIWXvSXoHHqEA/AB5jnx5mlpfc/W/5K7yHKexBE/0HAAAA//8/P7ScAAAABklEQVQDAPrNR0+flR19AAAAAElFTkSuQmCC"},
// ---------------------------------------------------------------- game code
// (inside a function, so Restart can run it again from the top)
function () {
// Split Screen Racing: two cars, three laps of a little circuit. Player 1 is the keyboard, touch
// controls or the first gamepad. The blue car is driven by the computer until a second gamepad
// presses A to take over.
// Steer with the stick, d-pad or arrows; O (Z) or up is gas, X or down brakes and reverses.
// Shows: clip() splitting the screen into two views, each with its own chase camera, and a third
// small view for the minimap, drawn last so it sits on top; print() clipped to each half;
// cam_set_fov(); stick() and btn() for two players.
// map 0 = the circuit. Tiles: 1 grass, 2 road, 3 kerb, 4 start line, 5 tyre wall, 6 trunk, 7 leaves.
// vox 0 = the car (body color 8, recolored per player).
// sounds: 0 countdown, 1 go, 2 lap, 3 finish, 4 bump, 5 join; 6-8 the music.

// the middle of the road, start line first; laps are counted through a "gate" at each point
const PATH = [[22, 8], [40, 8], [51, 13], [54, 25], [47, 32], [35, 29], [27, 35], [25, 46], [13, 48], [7, 39], [8, 18], [12, 9]]
const N = PATH.length, LAPS = 3, R = 0.45
const COL = [8, 12], NAME = ['P1', 'P2']
let cars, human = [true, false], state, timer, ticks, best = null, winner, order = [0, 1]

function _init() {
  touch_set_mode(1)                      // an analog circle on touch screens: steer and gas together
  let d = load()
  if (d) best = d.best
  cars = [0, 1].map((p) => ({ p, x: 18, z: 6.8 + p * 2.4, yaw: 0.25, cy: 0.25, v: 0,
    next: 0, lap: 0, started: false, lapStart: 0, done: 0 }))
  state = 'count'; timer = 180; ticks = 0; winner = -1
  music(0, 1000)
}

const fmt = (f) => flr(f / 6) / 10 + 's'           // updates (60 a second) as seconds, one decimal
const onRoad = (c) => { let t = mget(0, flr(c.x), 0, flr(c.z)); return t >= 2 && t <= 4 }

function _update() {
  // a second gamepad takes over the blue car by pressing A
  if (!human[1] && btnp(4, 1)) { human[1] = true; sfx(5) }

  if (state == 'count') {
    if (timer % 60 == 0) sfx(timer ? 0 : 1)
    if (timer == 0) state = 'race'; else timer--
  } else if (state != 'idle') ticks++

  for (let c of cars) { drive(c); gates(c) }
  bump(cars[0], cars[1])
  order = [0, 1].sort((a, b) => score(cars[b]) - score(cars[a]))

  if (state == 'race' && cars.every((c) => c.done)) { state = 'over'; timer = 60 }
  if (state == 'over' && timer > 0) timer--
  if ((state == 'over' && timer == 0) || (winner >= 0 && ticks - cars[winner].done > 180)) {
    if (btnp(4) || btnp(5)) _init()
  }
}

function drive(c) {
  let gas = 0, steer = 0
  if (state != 'count' && !c.done) {
    if (human[c.p]) {
      let [sx, sy] = stick(0, c.p)
      steer = sx
      if (btn(4, c.p) || sy < -0.3) gas = 1
      else if (btn(5, c.p) || sy > 0.3) gas = -1
    } else [steer, gas] = bot(c)
  }
  if (gas > 0) c.v += human[c.p] ? 0.004 : 0.0037
  else if (gas < 0) c.v -= c.v > 0 ? 0.008 : 0.002
  c.v *= onRoad(c) ? 0.985 : 0.95                  // the grass slows you right down
  c.v = mid(-0.06, c.v, 1)
  // steering bites with speed; screen right is the car's -x side, so right turns the yaw down
  c.yaw -= steer * 0.0075 * min(1, abs(c.v) / 0.08) * (c.v < 0 ? -1 : 1)
  let [fx, , fz] = dir3(c.yaw)
  c.x += fx * c.v; c.z += fz * c.v
  // the tyre wall and the trees
  let [x, , z, nx, , nz] = mpush(0, c.x, 1.5, c.z, R)
  if (nx || nz) {                                    // pushed sideways: hit something
    c.x = x; c.z = z
    if (abs(c.v) > 0.1) sfx(4)
    c.v *= 0.6
  }
  c.cy += angdiff(c.cy, c.yaw) * 0.12                // the chase camera swings round a bit late
}

// the computer: aim at the next gate, leaning toward the one after as it gets close
function bot(c) {
  let [tx, tz] = PATH[c.next], [ux, uz] = PATH[(c.next + 1) % N]
  let d = dist([c.x, c.z], [tx, tz]), k = mid(0, (10 - d) / 10, 1) * 0.5
  let gx = tx + (ux - tx) * k, gz = tz + (uz - tz) * k
  let turn = angdiff(c.yaw, yaw_to(gx - c.x, gz - c.z))
  return [-mid(-1, turn * 14, 1), abs(turn) > 0.08 && c.v > 0.15 ? 0 : 1]
}

// a gate is a line across the road at each point of PATH; crossing them in order counts laps
function gates(c) {
  let i = c.next, [px, pz] = PATH[i], [qx, qz] = PATH[(i + 1) % N]
  let dx = qx - px, dz = qz - pz, L = dist([px, pz], [qx, qz])
  let along = ((c.x - px) * dx + (c.z - pz) * dz) / L
  let off = abs(((c.x - px) * dz - (c.z - pz) * dx) / L)
  if (along < 0 || off > 7) return
  c.next = (i + 1) % N
  if (i != 0 || c.done) return
  if (c.started) {                                  // back over the start line: a lap
    let t = ticks - c.lapStart
    if (human[c.p] && (best == null || t < best)) { best = t; save({ best: best }) }
    c.lap++
    if (c.lap == LAPS) { c.done = ticks; sfx(3); if (winner < 0) winner = c.p } else sfx(2)
  }
  c.started = true; c.lapStart = ticks
}

function score(c) { let [x, z] = PATH[c.next]; return (c.lap * N + (c.next || N)) * 1000 - dist([c.x, c.z], [x, z]) - (c.done ? -1e6 + c.done : 0) }

function bump(a, b) {
  let dx = b.x - a.x, dz = b.z - a.z, d = dist([a.x, a.z], [b.x, b.z])
  if (d >= 0.9 || d == 0) return
  let push = (0.9 - d) / 2
  a.x -= dx / d * push; a.z -= dz / d * push; b.x += dx / d * push; b.z += dz / d * push
  a.v *= 0.92; b.v *= 0.92
  if (abs(a.v - b.v) > 0.05) sfx(4)
}

function world() {
  outline(0)
  map(0)
  for (let c of cars) { pal(8, COL[c.p]); vox(0, c.x, 1, c.z, 0, c.yaw); pal() }
  outline()
}

function _draw() {
  // two views side by side: clip() starts a view, and the camera set inside it is the one it uses
  cam_set_fov(0.3)
  for (let p = 0; p < 2; p++) {
    let c = cars[p], x0 = p * 128, [fx, , fz] = dir3(c.cy)
    clip(x0, 0, x0 + 127, 255)
    bg(12)
    cam_set_pos([c.x - fx * 3.4, 2.6, c.z - fz * 3.4])
    cam_set_lookat([c.x + fx * 2, 1.2, c.z + fz * 2])
    world()
    hud(c, x0)                                      // text is clipped to this half too
  }
  // the minimap: a third, small view looking straight down, drawn last so it's on top
  clip(96, 180, 159, 243)
  bg(0)
  cam_set_fov(0.25)
  cam_set_pos([32, 35, 27.99]); cam_set_lookat([32, 0, 28])
  map(0)
  for (let c of cars) sphere(c.x, 4, c.z, 2.4, COL[c.p])
  clip()
  rect(95, 179, 160, 244, 0)
  rectfill(127, 0, 128, 178, 0)
  if (state == 'over' || (winner >= 0 && ticks - cars[winner].done > 180)) {
    let m = NAME[winner] + ' wins!'
    rectfill(52, 88, 203, 140, 1); rect(52, 88, 203, 140, 7)
    printc(m, 94, COL[winner], 0, 2)
    printc('O to race again', 122, 7, 0)
  }
}

const PLACE = ['1st', '2nd']
function hud(c, x0) {
  print(NAME[c.p] + (human[c.p] ? '' : ' cpu'), x0 + 4, 4, COL[c.p], 0)
  print(PLACE[order.indexOf(c.p)], x0 + 96, 4, 10, 0)
  print('Lap ' + min(c.lap + 1, LAPS) + '/' + LAPS, x0 + 4, 16, 7, 0)
  print(c.done ? fmt(c.done) : fmt(ticks), x0 + 4, 28, 7, 0)
  if (best != null) print('Best lap ' + fmt(best), x0 + 4, 40, 6, 0)
  // printc centers in the clip area, which is this half of the screen
  if (state == 'count') { let n = '' + ceil(timer / 60); printc(n, 100, 10, 0, 4) }
  else if (ticks < 50) printc('GO!', 100, 11, 0, 3)
  if (c.done) printc(c.p == winner ? 'WINNER' : 'FINISHED', 60, 10, 0, 2)
  if (c.p == 1 && !human[1] && state == 'count') print('Pad 2: A to drive', x0 + 4, 160, 6, 0)
}

;return ({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null });
});
