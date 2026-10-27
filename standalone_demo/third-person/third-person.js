// third person, made with blocky3D 0.1.0-alpha
// ---------------------------------------------------------------- runtime (blocky3D engine + three.js)
(()=>{var Jh=Object.defineProperty;var Kh=(i,t)=>{for(var e in t)Jh(i,e,{get:t[e],enumerable:!0})};var bl={};Kh(bl,{HOOKS_EXPR:()=>Ml,cartFunctionSource:()=>_0,catchGlobalErrors:()=>v0,install:()=>Oh,play:()=>g0,restart:()=>Bh,showError:()=>Qr,start:()=>Sl,stop:()=>x0});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Qh=0,Il=1,jh=2;var Dc=1,tu=2,zn=3,ii=0,Je=1,Vn=2,ei=0,Qi=1,Pl=2,Ll=3,Dl=4,eu=5,yi=100,nu=101,iu=102,su=103,ru=104,ou=200,au=201,lu=202,cu=203,Uo=204,No=205,hu=206,uu=207,du=208,fu=209,pu=210,mu=211,gu=212,_u=213,xu=214,Fo=0,Oo=1,Bo=2,ns=3,zo=4,ko=5,Vo=6,Ho=7,Uc=0,vu=1,yu=2,ni=0,Mu=1,Su=2,bu=3,Eu=4,wu=5,Tu=6,Au=7;var Nc=300,is=301,ss=302,Go=303,Wo=304,Gr=306,Xo=1e3,bi=1001,qo=1002,Te=1003,Ru=1004;var Js=1005;var Cn=1006,no=1007;var Ei=1008;var wn=1009,Fc=1010,Oc=1011,Us=1012,Ja=1013,wi=1014,En=1015,Ns=1016,Ka=1017,Qa=1018,rs=1020,Bc=35902,zc=1021,kc=1022,sn=1023,Vc=1024,Hc=1025,ji=1026,os=1027,Wr=1028,ja=1029,Gc=1030,tl=1031;var el=1033,yr=33776,Mr=33777,Sr=33778,br=33779,Yo=35840,Zo=35841,$o=35842,Jo=35843,Ko=36196,Qo=37492,jo=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,la=37816,ca=37817,ha=37818,ua=37819,da=37820,fa=37821,Er=36492,pa=36494,ma=36495,Wc=36283,ga=36284,_a=36285,xa=36286;var wr=2300,va=2301,io=2302,Ul=2400,Nl=2401,Fl=2402;var Cu=3200,Iu=3201;var Pu=0,Lu=1,ti="",un="srgb",oi="srgb-linear",Xr="linear",fe="srgb";var Fi=7680;var Ol=519,Du=512,Uu=513,Nu=514,Xc=515,Fu=516,Ou=517,Bu=518,zu=519,Bl=35044;var Wn="300 es",Hn=2e3,Tr=2001,si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var so=Math.PI/180,ya=180/Math.PI;function Fs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function ku(i,t){return(i%t+t)%t}function ro(i,t,e){return(1-e)*i+e*t}function ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var de=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],v=s[0],m=s[3],d=s[6],A=s[1],w=s[4],b=s[7],I=s[2],R=s[5],C=s[8];return r[0]=o*v+a*A+l*I,r[3]=o*m+a*w+l*R,r[6]=o*d+a*b+l*C,r[1]=c*v+h*A+f*I,r[4]=c*m+h*w+f*R,r[7]=c*d+h*b+f*C,r[2]=u*v+p*A+_*I,r[5]=u*m+p*w+_*R,r[8]=u*d+p*b+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,_=e*f+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oo.makeScale(t,e)),this}rotate(t){return this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oo=new Vt;function qc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){let i=Ar("canvas");return i.style.display="block",i}var zl={};function Ps(i){i in zl||(zl[i]=!0,console.warn(i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kl=[.64,.33,.3,.6,.15,.06],Vl=[.2126,.7152,.0722],Hl=[.3127,.329],Gl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[oi]:{primaries:kl,whitePoint:Hl,transfer:Xr,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:Vl,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:kl,whitePoint:Hl,transfer:fe,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:Vl,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});var Oi,Ma=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Ar("canvas")),Oi.width=t.width,Oi.height=t.height;let n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xu=0,Rr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ao(s[o].image)):r.push(ao(s[o]))}else r=ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qu=0,rn=class i extends si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=Cn,o=Ei,a=sn,l=wn,c=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=Fs(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Nc;rn.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,b=(p+1)/2,I=(d+1)/2,R=(h+u)/4,C=(f+v)/4,O=(_+m)/4;return w>b&&w>I?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=C/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=O/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=O/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-v)/A,this.z=(u-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Rr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Cr=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(f!==v||l!==u||c!==p||h!==_){let m=1-a,d=l*u+c*p+h*_+f*v,A=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){let I=Math.sqrt(w),R=Math.atan2(I,d*A);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}let b=a*A;if(l=l*m+u*b,c=c*m+p*b,h=h*m+_*b,f=f*m+v*b,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=I,c*=I,h*=I,f*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*f+l*p-c*u,t[e+1]=l*_+h*u+c*f-a*p,t[e+2]=c*_+h*p+a*u-l*f,t[e+3]=h*_-a*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"YZX":this._x=u*h*f+c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f-u*p*_;break;case"XZY":this._x=u*h*f-c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lo.copy(this).projectOnVector(t),this.sub(lo)}reflect(t){return this.sub(lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lo=new z,Xl=new ri,Ti=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),Qs.subVectors(this.max,Ts),Bi.subVectors(t.a,Ts),zi.subVectors(t.b,Ts),ki.subVectors(t.c,Ts),Zn.subVectors(zi,Bi),$n.subVectors(ki,zi),fi.subVectors(Bi,ki);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!co(e,Bi,zi,ki,Qs)||(e=[1,0,0,0,1,0,0,0,1],!co(e,Bi,zi,ki,Qs))?!1:(js.crossVectors(Zn,$n),e=[js.x,js.y,js.z],co(e,Bi,zi,ki,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Un=[new z,new z,new z,new z,new z,new z,new z,new z],Mn=new z,Ks=new Ti,Bi=new z,zi=new z,ki=new z,Zn=new z,$n=new z,fi=new z,Ts=new z,Qs=new z,js=new z,pi=new z;function co(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yu=new Ti,As=new z,ho=new z,as=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(ho)),this.expandByPoint(As.copy(t.center).sub(ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new z,uo=new z,tr=new z,Jn=new z,fo=new z,er=new z,po=new z,Ir=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){uo.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(uo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=Jn.dot(this.direction),l=-Jn.dot(tr),c=Jn.lengthSq(),h=Math.abs(1-o*o),f,u,p,_;if(h>0)if(f=o*l-a,u=o*a-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(uo).addScaledVector(tr,u),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){fo.subVectors(e,t),er.subVectors(n,t),po.crossVectors(fo,er);let o=this.direction.dot(po),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);let l=a*this.direction.dot(er.crossVectors(Jn,er));if(l<0)return null;let c=a*this.direction.dot(fo.cross(Jn));if(c<0||l+c>o)return null;let h=-a*Jn.dot(po);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class i{constructor(t,e,n,s,r,o,a,l,c,h,f,u,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,p,_,v,m)}set(t,e,n,s,r,o,a,l,c,h,f,u,p,_,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,_=c*h,v=c*f;e[0]=u+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,_=c*h,v=c*f;e[0]=u-v*a,e[4]=-o*f,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=_*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+_,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=o*h,e[9]=p*f-_,e[2]=_*f-p,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zu,t,$u)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Kn.crossVectors(n,en),Kn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Kn.crossVectors(n,en)),Kn.normalize(),nr.crossVectors(en,Kn),s[0]=Kn.x,s[4]=nr.x,s[8]=en.x,s[1]=Kn.y,s[5]=nr.y,s[9]=en.y,s[2]=Kn.z,s[6]=nr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],v=n[6],m=n[10],d=n[14],A=n[3],w=n[7],b=n[11],I=n[15],R=s[0],C=s[4],O=s[8],S=s[12],M=s[1],L=s[5],$=s[9],k=s[13],Z=s[2],et=s[6],Y=s[10],it=s[14],G=s[3],ct=s[7],_t=s[11],Rt=s[15];return r[0]=o*R+a*M+l*Z+c*G,r[4]=o*C+a*L+l*et+c*ct,r[8]=o*O+a*$+l*Y+c*_t,r[12]=o*S+a*k+l*it+c*Rt,r[1]=h*R+f*M+u*Z+p*G,r[5]=h*C+f*L+u*et+p*ct,r[9]=h*O+f*$+u*Y+p*_t,r[13]=h*S+f*k+u*it+p*Rt,r[2]=_*R+v*M+m*Z+d*G,r[6]=_*C+v*L+m*et+d*ct,r[10]=_*O+v*$+m*Y+d*_t,r[14]=_*S+v*k+m*it+d*Rt,r[3]=A*R+w*M+b*Z+I*G,r[7]=A*C+w*L+b*et+I*ct,r[11]=A*O+w*$+b*Y+I*_t,r[15]=A*S+w*k+b*it+I*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],_=t[3],v=t[7],m=t[11],d=t[15];return _*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*p-n*l*p)+v*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*f+e*a*u+s*o*f-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],_=t[12],v=t[13],m=t[14],d=t[15],A=f*m*c-v*u*c+v*l*p-a*m*p-f*l*d+a*u*d,w=_*u*c-h*m*c-_*l*p+o*m*p+h*l*d-o*u*d,b=h*v*c-_*f*c+_*a*p-o*v*p-h*a*d+o*f*d,I=_*f*l-h*v*l-_*a*u+o*v*u+h*a*m-o*f*m,R=e*A+n*w+s*b+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=A*C,t[1]=(v*u*r-f*m*r-v*s*p+n*m*p+f*s*d-n*u*d)*C,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*C,t[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*p-n*l*p)*C,t[4]=w*C,t[5]=(h*m*r-_*u*r+_*s*p-e*m*p-h*s*d+e*u*d)*C,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*d-e*l*d)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*C,t[8]=b*C,t[9]=(_*f*r-h*v*r-_*n*p+e*v*p+h*n*d-e*f*d)*C,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*d+e*a*d)*C,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*C,t[12]=I*C,t[13]=(h*v*s-_*f*s+_*n*u-e*v*u-h*n*m+e*f*m)*C,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*m-e*a*m)*C,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,_=r*f,v=o*h,m=o*f,d=a*f,A=l*c,w=l*h,b=l*f,I=n.x,R=n.y,C=n.z;return s[0]=(1-(v+d))*I,s[1]=(p+b)*I,s[2]=(_-w)*I,s[3]=0,s[4]=(p-b)*R,s[5]=(1-(u+d))*R,s[6]=(m+A)*R,s[7]=0,s[8]=(_+w)*C,s[9]=(m-A)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);let c=1/r,h=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Hn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),p,_;if(a===Hn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Tr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*c,p=(n+s)*h,_,v;if(a===Hn)_=(o+r)*f,v=-2*f;else if(a===Tr)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Vi=new z,Sn=new re,Zu=new z(0,0,0),$u=new z(1,1,1),Kn=new z,nr=new z,en=new z,ql=new re,Yl=new ri,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ju=0,Zl=new z,Hi=new ri,Fn=new re,ir=new z,Rs=new z,Ku=new z,Qu=new ri,$l=new z(1,0,0),Jl=new z(0,1,0),Kl=new z(0,0,1),Ql={type:"added"},ju={type:"removed"},Gi={type:"childadded",child:null},mo={type:"childremoved",child:null},pn=class i extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Tn,n=new ri,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return Zl.copy(t).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Rs,ir,this.up):Fn.lookAt(ir,Rs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ju),mo.child=t,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Qu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};pn.DEFAULT_UP=new z(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new z,On=new z,go=new z,Bn=new z,Wi=new z,Xi=new z,jl=new z,_o=new z,xo=new z,vo=new z,yo=new ve,Mo=new ve,So=new ve,Mi=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),On.subVectors(n,e),go.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(On),l=bn.dot(go),c=On.dot(On),h=On.dot(go),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return yo.setScalar(0),Mo.setScalar(0),So.setScalar(0),yo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,n),So.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yo,r.x),o.addScaledVector(Mo,r.y),o.addScaledVector(So,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),On.subVectors(t,e),bn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),bn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),_o.subVectors(t,n);let l=Wi.dot(_o),c=Xi.dot(_o);if(l<=0&&c<=0)return e.copy(n);xo.subVectors(t,s);let h=Wi.dot(xo),f=Xi.dot(xo);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Wi,o);vo.subVectors(t,r);let p=Wi.dot(vo),_=Xi.dot(vo);if(_>=0&&p<=_)return e.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Xi,a);let m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return jl.subVectors(r,s),a=(f-h)/(f-h+(p-_)),e.copy(s).addScaledVector(jl,a);let d=1/(m+v+u);return o=v*d,a=u*d,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=ku(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bo(o,r,t+1/3),this.g=bo(o,r,t),this.b=bo(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){let n=Yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Kt.fromWorkingColorSpace(ke.copy(this),t),Math.round($e(ke.r*255,0,255))*65536+Math.round($e(ke.g*255,0,255))*256+Math.round($e(ke.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=un){Kt.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(sr);let n=ro(Qn.h,sr.h,e),s=ro(Qn.s,sr.s,e),r=ro(Qn.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new se;se.NAMES=Yc;var td=0,Ai=class extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Fs(),this.name="",this.blending=Qi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=No,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Lr=class extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new z,rr=new de,dn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bl&&(t.usage=this.usage),t}};var Ri=class extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ls=class extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ed=0,hn=new re,Eo=new pn,qi=new z,nn=new Ti,Cs=new Ti,Pe=new z,Ke=class i extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qc(t)?ls:Ri)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(nn.min,Cs.min),nn.expandByPoint(Pe),Pe.addVectors(nn.max,Cs.max),nn.expandByPoint(Pe)):(nn.expandByPoint(Cs.min),nn.expandByPoint(Cs.max))}nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),Pe.add(qi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new z,l[O]=new z;let c=new z,h=new z,f=new z,u=new de,p=new de,_=new de,v=new z,m=new z;function d(O,S,M){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,O),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),h.sub(c),f.sub(c),p.sub(u),_.sub(u);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[O].add(v),a[S].add(v),a[M].add(v),l[O].add(m),l[S].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let O=0,S=A.length;O<S;++O){let M=A[O],L=M.start,$=M.count;for(let k=L,Z=L+$;k<Z;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new z,b=new z,I=new z,R=new z;function C(O){I.fromBufferAttribute(s,O),R.copy(I);let S=a[O];w.copy(S),w.sub(I.multiplyScalar(I.dot(S))).normalize(),b.crossVectors(R,S);let L=b.dot(l[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,L)}for(let O=0,S=A.length;O<S;++O){let M=A[O],L=M.start,$=M.count;for(let k=L,Z=L+$;k<Z;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,f=new z;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new dn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tc=new re,mi=new Ir,or=new as,ec=new z,ar=new z,lr=new z,cr=new z,wo=new z,hr=new z,nc=new z,ur=new z,Ue=class extends pn{constructor(t=new Ke,e=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(wo.fromBufferAttribute(f,t),o?hr.addScaledVector(wo,h):hr.addScaledVector(wo.sub(e),h))}e.add(hr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(or.containsPoint(mi.origin)===!1&&(mi.intersectSphere(or,ec)===null||mi.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(tc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let m=u[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,I=w;b<I;b+=3){let R=a.getX(b),C=a.getX(b+1),O=a.getX(b+2);s=dr(this,d,t,n,c,h,f,R,C,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let A=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=dr(this,o,t,n,c,h,f,A,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let m=u[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,I=w;b<I;b+=3){let R=b,C=b+1,O=b+2;s=dr(this,d,t,n,c,h,f,R,C,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){let A=m,w=m+1,b=m+2;s=dr(this,o,t,n,c,h,f,A,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function nd(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ii,a),l===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:i}}function dr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ar),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);let h=nd(i,t,e,n,ar,lr,cr,nc);if(h){let f=new z;Mi.getBarycoord(nc,ar,lr,cr,f),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,l,c,f,new de)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,f,new de)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};Mi.getNormal(ar,lr,cr,u.normal),h.face=u,h.barycoord=f}return h}var Ci=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(f,2));function _(v,m,d,A,w,b,I,R,C,O,S){let M=b/C,L=I/O,$=b/2,k=I/2,Z=R/2,et=C+1,Y=O+1,it=0,G=0,ct=new z;for(let _t=0;_t<Y;_t++){let Rt=_t*L-k;for(let Ht=0;Ht<et;Ht++){let te=Ht*M-$;ct[v]=te*A,ct[m]=Rt*w,ct[d]=Z,c.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[d]=R>0?1:-1,h.push(ct.x,ct.y,ct.z),f.push(Ht/C),f.push(1-_t/O),it+=1}}for(let _t=0;_t<O;_t++)for(let Rt=0;Rt<C;Rt++){let Ht=u+Rt+et*_t,te=u+Rt+et*(_t+1),q=u+(Rt+1)+et*(_t+1),st=u+(Rt+1)+et*_t;l.push(Ht,te,st),l.push(te,q,st),G+=6}a.addGroup(p,G,S),p+=G,u+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function id(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var sd={clone:cs,merge:Ge},rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ii=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},jn=new z,ic=new de,sc=new de,Ve=class extends Ii{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,ic,sc),e.subVectors(sc,ic)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(so*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,Zi=1,Ea=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Yi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Yi,Zi,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Yi,Zi,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Yi,Zi,t,e);a.layers=this.layers,this.add(a);let l=new Ve(Yi,Zi,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Yi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Dr=class extends rn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wa=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ei});r.uniforms.tEquirect.value=e;let o=new Ue(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Cn),new Ea(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},To=new z,ad=new z,ld=new Vt,kn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=To.subVectors(n,e).cross(ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(To),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ld.getNormalMatrix(t),s=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new as,fr=new z,Ur=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],_=s[9],v=s[10],m=s[11],d=s[12],A=s[13],w=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,m-p,b-d).normalize(),n[1].setComponents(l+r,u+c,m+p,b+d).normalize(),n[2].setComponents(l+o,u+h,m+_,b+A).normalize(),n[3].setComponents(l-o,u-h,m-_,b-A).normalize(),n[4].setComponents(l-a,u-f,m-v,b-w).normalize(),e===Hn)n[5].setComponents(l+a,u+f,m+v,b+w).normalize();else if(e===Tr)n[5].setComponents(a,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $c(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let v=f[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hs=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,p=[],_=[],v=[],m=[];for(let d=0;d<h;d++){let A=d*u-o;for(let w=0;w<c;w++){let b=w*f-r;_.push(b,-A,0),v.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){let w=A+c*d,b=A+c*(d+1),I=A+1+c*(d+1),R=A+1+c*d;p.push(w,b,R),p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
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
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
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
#endif`,vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ed=`#ifdef USE_BUMPMAP
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
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dd=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
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
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
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
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
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
#endif`,cf=`struct PhysicalMaterial {
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
}`,hf=`
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
#endif`,uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yf=`#if defined( USE_POINTS_UV )
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
#endif`,Mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Df=`#ifdef USE_NORMALMAP
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
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$f=`float getShadowMask() {
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
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
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
}`,_p=`#if DEPTH_PACKING == 3200
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
}`,xp=`#define DISTANCE
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
}`,vp=`#define DISTANCE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,wp=`uniform vec3 diffuse;
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
}`,Tp=`#define LAMBERT
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
}`,Ap=`#define LAMBERT
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
}`,Rp=`#define MATCAP
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
}`,Cp=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Pp=`#define NORMAL
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
}`,Lp=`#define PHONG
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
}`,Dp=`#define PHONG
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
}`,Up=`#define STANDARD
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define TOON
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
}`,Op=`#define TOON
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
}`,Bp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Vp=`uniform vec3 color;
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
}`,Hp=`uniform float rotation;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:xd,batching_vertex:vd,begin_vertex:yd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:bd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:wd,clipping_planes_pars_fragment:Td,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Id,color_pars_vertex:Pd,color_vertex:Ld,common:Dd,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Vd,envmap_fragment:Hd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:nf,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Zd,fog_fragment:$d,fog_pars_fragment:Jd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:Qd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:tf,lights_pars_begin:ef,lights_toon_fragment:sf,lights_toon_pars_fragment:rf,lights_phong_fragment:of,lights_phong_pars_fragment:af,lights_physical_fragment:lf,lights_physical_pars_fragment:cf,lights_fragment_begin:hf,lights_fragment_maps:uf,lights_fragment_end:df,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:mf,logdepthbuf_vertex:gf,map_fragment:_f,map_pars_fragment:xf,map_particle_fragment:vf,map_particle_pars_fragment:yf,metalnessmap_fragment:Mf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:bf,morphcolor_vertex:Ef,morphnormal_vertex:wf,morphtarget_pars_vertex:Tf,morphtarget_vertex:Af,normal_fragment_begin:Rf,normal_fragment_maps:Cf,normal_pars_fragment:If,normal_pars_vertex:Pf,normal_vertex:Lf,normalmap_pars_fragment:Df,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:Of,opaque_fragment:Bf,packing:zf,premultiplied_alpha_fragment:kf,project_vertex:Vf,dithering_fragment:Hf,dithering_pars_fragment:Gf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Yf,shadowmap_vertex:Zf,shadowmask_pars_fragment:$f,skinbase_vertex:Jf,skinning_pars_vertex:Kf,skinning_vertex:Qf,skinnormal_vertex:jf,specularmap_fragment:tp,specularmap_pars_fragment:ep,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:op,uv_pars_vertex:ap,uv_vertex:lp,worldpos_vertex:cp,background_vert:hp,background_frag:up,backgroundCube_vert:dp,backgroundCube_frag:fp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:xp,distanceRGBA_frag:vp,equirect_vert:yp,equirect_frag:Mp,linedashed_vert:Sp,linedashed_frag:bp,meshbasic_vert:Ep,meshbasic_frag:wp,meshlambert_vert:Tp,meshlambert_frag:Ap,meshmatcap_vert:Rp,meshmatcap_frag:Cp,meshnormal_vert:Ip,meshnormal_frag:Pp,meshphong_vert:Lp,meshphong_frag:Dp,meshphysical_vert:Up,meshphysical_frag:Np,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Bp,points_frag:zp,shadow_vert:kp,shadow_frag:Vp,sprite_vert:Hp,sprite_frag:Gp},ft={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new se(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ge([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ge([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new se(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ge([ft.points,ft.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ge([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ge([ft.common,ft.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ge([ft.sprite,ft.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ge([ft.common,ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ge([ft.lights,ft.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Rn.physical={uniforms:Ge([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var pr={r:0,b:0,g:0},_i=new Tn,Wp=new re;function Xp(i,t,e,n,s,r,o){let a=new se(0),l=r===!0?0:1,c,h,f=null,u=0,p=null;function _(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?e:t).get(w)),w}function v(A){let w=!1,b=_(A);b===null?d(a,l):b&&b.isColor&&(d(b,1),w=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,w){let b=_(w);b&&(b.isCubeTexture||b.mapping===Gr)?(h===void 0&&(h=new Ue(new Ci(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:cs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(w.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(_i)),h.material.toneMapped=Kt.getTransfer(b.colorSpace)!==fe,(f!==b||u!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ue(new hs(2,2),new Ne({name:"BackgroundMaterial",uniforms:cs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(b.colorSpace)!==fe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,w){A.getRGB(pr,Zc(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),l=w,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:m}}function qp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,L,$,k,Z){let et=!1,Y=f(k,$,L);r!==Y&&(r=Y,c(r.object)),et=p(M,k,$,Z),et&&_(M,k,$,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,b(M,L,$,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,L,$){let k=$.wireframe===!0,Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let et=Z[L.id];et===void 0&&(et={},Z[L.id]=et);let Y=et[k];return Y===void 0&&(Y=u(l()),et[k]=Y),Y}function u(M){let L=[],$=[],k=[];for(let Z=0;Z<e;Z++)L[Z]=0,$[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:$,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,L,$,k){let Z=r.attributes,et=L.attributes,Y=0,it=$.getAttributes();for(let G in it)if(it[G].location>=0){let _t=Z[G],Rt=et[G];if(Rt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Rt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Rt=M.instanceColor)),_t===void 0||_t.attribute!==Rt||Rt&&_t.data!==Rt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function _(M,L,$,k){let Z={},et=L.attributes,Y=0,it=$.getAttributes();for(let G in it)if(it[G].location>=0){let _t=et[G];_t===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let Rt={};Rt.attribute=_t,_t&&_t.data&&(Rt.data=_t.data),Z[G]=Rt,Y++}r.attributes=Z,r.attributesNum=Y,r.index=k}function v(){let M=r.newAttributes;for(let L=0,$=M.length;L<$;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){let $=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;$[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),Z[M]!==L&&(i.vertexAttribDivisor(M,L),Z[M]=L)}function A(){let M=r.newAttributes,L=r.enabledAttributes;for(let $=0,k=L.length;$<k;$++)L[$]!==M[$]&&(i.disableVertexAttribArray($),L[$]=0)}function w(M,L,$,k,Z,et,Y){Y===!0?i.vertexAttribIPointer(M,L,$,Z,et):i.vertexAttribPointer(M,L,$,k,Z,et)}function b(M,L,$,k){v();let Z=k.attributes,et=$.getAttributes(),Y=L.defaultAttributeValues;for(let it in et){let G=et[it];if(G.location>=0){let ct=Z[it];if(ct===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){let _t=ct.normalized,Rt=ct.itemSize,Ht=t.get(ct);if(Ht===void 0)continue;let te=Ht.buffer,q=Ht.type,st=Ht.bytesPerElement,St=q===i.INT||q===i.UNSIGNED_INT||ct.gpuType===Ja;if(ct.isInterleavedBufferAttribute){let lt=ct.data,Ct=lt.stride,Ut=ct.offset;if(lt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)d(G.location+Ot,lt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)m(G.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ot=0;Ot<G.locationSize;Ot++)w(G.location+Ot,Rt/G.locationSize,q,_t,Ct*st,(Ut+Rt/G.locationSize*Ot)*st,St)}else{if(ct.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)d(G.location+lt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let lt=0;lt<G.locationSize;lt++)w(G.location+lt,Rt/G.locationSize,q,_t,Rt*st,Rt/G.locationSize*lt*st,St)}}else if(Y!==void 0){let _t=Y[it];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(G.location,_t);break;case 3:i.vertexAttrib3fv(G.location,_t);break;case 4:i.vertexAttrib4fv(G.location,_t);break;default:i.vertexAttrib1fv(G.location,_t)}}}}A()}function I(){O();for(let M in n){let L=n[M];for(let $ in L){let k=L[$];for(let Z in k)h(k[Z].object),delete k[Z];delete L[$]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let $ in L){let k=L[$];for(let Z in k)h(k[Z].object),delete k[Z];delete L[$]}delete n[M.id]}function C(M){for(let L in n){let $=n[L];if($[M.id]===void 0)continue;let k=$[M.id];for(let Z in k)h(k[Z].object),delete k[Z];delete $[M.id]}}function O(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Yp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];e.update(p,n,1)}function l(c,h,f,u){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v]*u[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let O=C===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==En&&!O)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:I,maxSamples:R}}function $p(i){let t=this,e=null,n=0,s=!1,r=!1,o=new kn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let A=r?0:n,w=A*4,b=d.clippingState||null;l.value=b,b=h(_,u,w,p);for(let I=0;I!==w;++I)b[I]=e[I];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,_){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let d=p+v*4,A=u.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,b=p;w!==v;++w,b+=4)o.copy(f[w]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Jp(i){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=is:a===Wo&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Go||a===Wo)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new wa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ta=class extends Ii{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ji=4,rc=[.125,.215,.35,.446,.526,.582],Si=20,Ao=new Ta,oc=new se,Ro=null,Co=0,Io=0,Po=!1,vi=(1+Math.sqrt(5))/2,$i=1/vi,ac=[new z(-vi,$i,0),new z(vi,$i,0),new z(-$i,0,vi),new z($i,0,vi),new z(0,vi,-$i),new z(0,vi,$i),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Nr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Co,Io),this._renderer.xr.enabled=Po,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ns,format:sn,colorSpace:oi,depthBuffer:!1},s=lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kp(r)),this._blurMaterial=Qp(r,t,e)}return s}_compileMaterial(t){let e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,Ao)}_sceneToCubeUV(t,e,n,s){let a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(oc),h.toneMapping=ni,h.autoClear=!1;let p=new Lr({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new Ue(new Ci,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(oc),v=!0);for(let d=0;d<6;d++){let A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let w=this._cubeSize;mr(s,A*w,d>2?w:0,w,w),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ao)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ac[(s-r-1)%ac.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ue(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let d=[],A=0;for(let C=0;C<Si;++C){let O=C/v,S=Math.exp(-O*O/2);d.push(S),C===0?A+=S:C<m&&(A+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=_,u.mipInt.value=w-n;let b=this._sizeLods[s],I=3*b*(s>w-Ji?s-w+Ji:0),R=4*(this._cubeSize-b);mr(e,I,R,3*b,2*b),l.setRenderTarget(e),l.render(f,Ao)}};function Kp(i){let t=[],e=[],n=[],s=i,r=i-Ji+1+rc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ji?l=rc[o-i+Ji-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,v=3,m=2,d=1,A=new Float32Array(v*_*p),w=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let R=0;R<p;R++){let C=R%3*2/3-1,O=R>2?0:-1,S=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];A.set(S,v*_*R),w.set(u,m*_*R);let M=[R,R,R,R,R,R];b.set(M,d*_*R)}let I=new Ke;I.setAttribute("position",new dn(A,v)),I.setAttribute("uv",new dn(w,m)),I.setAttribute("faceIndex",new dn(b,d)),t.push(I),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lc(i,t,e){let n=new fn(i,t,e);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qp(i,t,e){let n=new Float32Array(Si),s=new z(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function cc(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function hc(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function jp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Go||l===Wo,h=l===is||l===ss;if(c||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Nr(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Nr(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function em(i,t,e,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let v=u.morphAttributes[_];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let _ in u)t.update(u[_],i.ARRAY_BUFFER);let p=f.morphAttributes;for(let _ in p){let v=p[_];for(let m=0,d=v.length;m<d;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(f){let u=[],p=f.index,_=f.attributes.position,v=0;if(p!==null){let A=p.array;v=p.version;for(let w=0,b=A.length;w<b;w+=3){let I=A[w+0],R=A[w+1],C=A[w+2];u.push(I,R,R,C,C,I)}}else if(_!==void 0){let A=_.array;v=_.version;for(let w=0,b=A.length/3-1;w<b;w+=3){let I=w+0,R=w+1,C=w+2;u.push(I,R,R,C,C,I)}}else return;let m=new(qc(u)?ls:Ri)(u,1);m.version=v;let d=r.get(f);d&&t.remove(d),r.set(f,m)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function nm(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,u*o,_),e.update(p,n,_))}function h(u,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function f(u,p,_,v){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,v,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*v[A];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function im(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sm(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],w=0;p===!0&&(w=1),_===!0&&(w=2),v===!0&&(w=3);let b=a.attributes.position.count*w,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let R=new Float32Array(b*I*4*f),C=new Cr(R,b,I,f);C.type=En,C.needsUpdate=!0;let O=w*4;for(let M=0;M<f;M++){let L=m[M],$=d[M],k=A[M],Z=b*I*4*M;for(let et=0;et<L.count;et++){let Y=et*O;p===!0&&(s.fromBufferAttribute(L,et),R[Z+Y+0]=s.x,R[Z+Y+1]=s.y,R[Z+Y+2]=s.z,R[Z+Y+3]=0),_===!0&&(s.fromBufferAttribute($,et),R[Z+Y+4]=s.x,R[Z+Y+5]=s.y,R[Z+Y+6]=s.z,R[Z+Y+7]=0),v===!0&&(s.fromBufferAttribute(k,et),R[Z+Y+8]=s.x,R[Z+Y+9]=s.y,R[Z+Y+10]=s.z,R[Z+Y+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new de(b,I)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function rm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var us=class extends rn{constructor(t,e,n,s,r,o,a,l,c,h=ji){if(h!==ji&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=wi),n===void 0&&h===os&&(n=rs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Te,this.minFilter=l!==void 0?l:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Jc=new rn,uc=new us(1,1),Kc=new Cr,Qc=new ba,jc=new Dr,dc=[],fc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dc[s];if(r===void 0&&(r=new Float32Array(s),dc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=fc[t];e===void 0&&(e=new Int32Array(t),fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;gc.set(n),i.uniformMatrix2fv(this.addr,!1,gc),Ce(e,n)}}function um(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;mc.set(n),i.uniformMatrix3fv(this.addr,!1,mc),Ce(e,n)}}function dm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;pc.set(n),i.uniformMatrix4fv(this.addr,!1,pc),Ce(e,n)}}function fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function _m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uc.compareFunction=Xc,r=uc):r=Jc,e.setTexture2D(t||r,s)}function Sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qc,s)}function bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jc,s)}function Em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kc,s)}function wm(i){switch(i){case 5126:return om;case 35664:return am;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Em}}function Tm(i,t){i.uniform1fv(this.addr,t)}function Am(i,t){let e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Rm(i,t){let e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function Cm(i,t){let e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function Im(i,t){let e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pm(i,t){let e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lm(i,t){let e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dm(i,t){i.uniform1iv(this.addr,t)}function Um(i,t){i.uniform2iv(this.addr,t)}function Nm(i,t){i.uniform3iv(this.addr,t)}function Fm(i,t){i.uniform4iv(this.addr,t)}function Om(i,t){i.uniform1uiv(this.addr,t)}function Bm(i,t){i.uniform2uiv(this.addr,t)}function zm(i,t){i.uniform3uiv(this.addr,t)}function km(i,t){i.uniform4uiv(this.addr,t)}function Vm(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jc,r[o])}function Hm(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qc,r[o])}function Gm(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jc,r[o])}function Wm(i,t,e){let n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kc,r[o])}function Xm(i){switch(i){case 5126:return Tm;case 35664:return Am;case 35665:return Rm;case 35666:return Cm;case 35674:return Im;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Fm;case 5125:return Om;case 36294:return Bm;case 36295:return zm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Wm}}var Aa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wm(e.type)}},Ra=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xm(e.type)}},Ca=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function _c(i,t){i.seq.push(t),i.map[t.id]=t}function qm(i,t,e){let n=i.name,s=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),o=Lo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_c(e,c===void 0?new Aa(a,i,t):new Ra(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Ca(a),_c(e,f)),e=f}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function xc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ym=37297,Zm=0;function $m(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vc=new Vt;function Jm(i){Kt._getMatrix(vc,Kt.workingColorSpace,i);let t=`mat3( ${vc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$m(i.getShaderSource(t),o)}else return s}function Km(i,t){let e=Jm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qm(i,t){let e;switch(t){case Mu:e="Linear";break;case Su:e="Reinhard";break;case bu:e="Cineon";break;case Eu:e="ACESFilmic";break;case Tu:e="AgX";break;case Au:e="Neutral";break;case wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gr=new z;function jm(){Kt.getLuminanceCoefficients(gr);let i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function eg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ng(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ls(i){return i!==""}function Mc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(ig,rg)}var sg=new Map;function rg(i,t){let e=Wt[t];if(e===void 0){let n=sg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}var og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(og,ag)}function ag(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ec(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function cg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function ug(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uc:t="ENVMAP_BLENDING_MULTIPLY";break;case vu:t="ENVMAP_BLENDING_MIX";break;case yu:t="ENVMAP_BLENDING_ADD";break}return t}function dg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=lg(e),c=cg(e),h=hg(e),f=ug(e),u=dg(e),p=tg(e),_=eg(r),v=s.createProgram(),m,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ls).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ls).join(`
`),d.length>0&&(d+=`
`)):(m=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),d=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ni?Qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Km("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ls).join(`
`)),o=Ia(o),o=Mc(o,e),o=Sc(o,e),a=Ia(a),a=Mc(a,e),a=Sc(a,e),o=bc(o),a=bc(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Wn?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let w=A+m+o,b=A+d+a,I=xc(s,s.VERTEX_SHADER,w),R=xc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,I),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(I).trim(),Z=s.getShaderInfoLog(R).trim(),et=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,R);else{let it=yc(s,I,"vertex"),G=yc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+it+`
`+G)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(k===""||Z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:et,programLog:$,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:d}})}s.deleteShader(I),s.deleteShader(R),O=new es(s,v),S=ng(s,v)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Ym)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}var pg=0,Pa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new La(t),e.set(t,n)),n}},La=class{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}};function mg(i,t,e,n,s,r,o){let a=new Pr,l=new Pa,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,$,k){let Z=$.fog,et=k.geometry,Y=S.isMeshStandardMaterial?$.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),G=it&&it.mapping===Gr?it.image.height:null,ct=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let _t=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Rt=_t!==void 0?_t.length:0,Ht=0;et.morphAttributes.position!==void 0&&(Ht=1),et.morphAttributes.normal!==void 0&&(Ht=2),et.morphAttributes.color!==void 0&&(Ht=3);let te,q,st,St;if(ct){let ne=Rn[ct];te=ne.vertexShader,q=ne.fragmentShader}else te=S.vertexShader,q=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),St=l.getFragmentShaderID(S);let lt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,me=!!S.map,Jt=!!S.matcap,le=!!it,N=!!S.aoMap,Ie=!!S.lightMap,Xt=!!S.bumpMap,qt=!!S.normalMap,wt=!!S.displacementMap,ie=!!S.emissiveMap,It=!!S.metalnessMap,E=!!S.roughnessMap,x=S.anisotropy>0,B=S.clearcoat>0,Q=S.dispersion>0,tt=S.iridescence>0,J=S.sheen>0,Tt=S.transmission>0,mt=x&&!!S.anisotropyMap,yt=B&&!!S.clearcoatMap,Zt=B&&!!S.clearcoatNormalMap,rt=B&&!!S.clearcoatRoughnessMap,xt=tt&&!!S.iridescenceMap,Pt=tt&&!!S.iridescenceThicknessMap,bt=J&&!!S.sheenColorMap,gt=J&&!!S.sheenRoughnessMap,Bt=!!S.specularMap,Nt=!!S.specularColorMap,ee=!!S.specularIntensityMap,D=Tt&&!!S.transmissionMap,ht=Tt&&!!S.thicknessMap,W=!!S.gradientMap,j=!!S.alphaMap,ut=S.alphaTest>0,pt=!!S.alphaHash,Ft=!!S.extensions,ce=ni;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ce=i.toneMapping);let ge={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:q,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:oi,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Jt,envMap:le,envMapMode:le&&it.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:Ie,bumpMap:Xt,normalMap:qt,displacementMap:u&&wt,emissiveMap:ie,normalMapObjectSpace:qt&&S.normalMapType===Lu,normalMapTangentSpace:qt&&S.normalMapType===Pu,metalnessMap:It,roughnessMap:E,anisotropy:x,anisotropyMap:mt,clearcoat:B,clearcoatMap:yt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:tt,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:J,sheenColorMap:bt,sheenRoughnessMap:gt,specularMap:Bt,specularColorMap:Nt,specularIntensityMap:ee,transmission:Tt,transmissionMap:D,thicknessMap:ht,gradientMap:W,opaque:S.transparent===!1&&S.blending===Qi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:pt,combine:S.combine,mapUv:me&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:Ie&&v(S.lightMap.channel),bumpMapUv:Xt&&v(S.bumpMap.channel),normalMapUv:qt&&v(S.normalMap.channel),displacementMapUv:wt&&v(S.displacementMap.channel),emissiveMapUv:ie&&v(S.emissiveMap.channel),metalnessMapUv:It&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:mt&&v(S.anisotropyMap.channel),clearcoatMapUv:yt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&v(S.sheenRoughnessMap.channel),specularMapUv:Bt&&v(S.specularMap.channel),specularColorMapUv:Nt&&v(S.specularColorMap.channel),specularIntensityMapUv:ee&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ht&&v(S.thicknessMap.channel),alphaMapUv:j&&v(S.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(qt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!et.attributes.uv&&(me||j),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ct,skinning:k.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:ie&&S.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vn,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function d(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(A(M,S),w(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){let M=_[S.type],L;if(M){let $=Rn[M];L=sd.clone($.uniforms)}else L=S.uniforms;return L}function I(S,M){let L;for(let $=0,k=h.length;$<k;$++){let Z=h[$];if(Z.cacheKey===M){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new fg(i,M,S,r),h.push(L)),L}function R(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:I,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:O}}function gg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,p,_,v,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),t++,d}function a(f,u,p,_,v,m){let d=o(f,u,p,_,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,u,p,_,v,m){let d=o(f,u,p,_,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||_g),n.length>1&&n.sort(u||wc),s.length>1&&s.sort(u||wc)}function h(){for(let f=t,u=i.length;f<u;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Tc,i.set(n,[o])):s>=r.length?(o=new Tc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new se};break;case"SpotLight":e={position:new z,direction:new z,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bg(i){let t=new vg,e=yg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new re,o=new re;function a(c){let h=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,A=0,w=0,b=0,I=0,R=0,C=0;c.sort(Sg);for(let S=0,M=c.length;S<M;S++){let L=c[S],$=L.color,k=L.intensity,Z=L.distance,et=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=$.r*k,f+=$.g*k,u+=$.b*k;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],k);C++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let it=L.shadow,G=e.get(L);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=L.shadow.matrix,A++}n.directional[p]=Y,p++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy($).multiplyScalar(k),Y.distance=Z,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[v]=Y;let it=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,it.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[v]=it.matrix,L.castShadow){let G=e.get(L);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=et,b++}v++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy($).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let it=L.shadow,G=e.get(L);G.shadowIntensity=it.intensity,G.shadowBias=it.bias,G.shadowNormalBias=it.normalBias,G.shadowRadius=it.radius,G.shadowMapSize=it.mapSize,G.shadowCameraNear=it.camera.near,G.shadowCameraFar=it.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=et,n.pointShadowMatrix[_]=L.shadow.matrix,w++}n.point[_]=Y,_++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(k),Y.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[d]=Y,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let O=n.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==A||O.numPointShadows!==w||O.numSpotShadows!==b||O.numSpotMaps!==I||O.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=b+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=A,O.numPointShadows=w,O.numSpotShadows=b,O.numSpotMaps=I,O.numLightProbes=C,n.version=Mg++)}function l(c,h){let f=0,u=0,p=0,_=0,v=0,m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let w=c[d];if(w.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Ac(i){let t=new bg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Eg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ac(i),t.set(s,[a])):r>=o.length?(a=new Ac(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Da=class extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
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
}`;function Ag(i,t,e){let n=new Ur,s=new de,r=new de,o=new ve,a=new Da({depthPacking:Iu}),l=new Ua,c={},h=e.maxTextureSize,f={[ii]:Je,[Je]:ii,[Vn]:Vn},u=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:wg,fragmentShader:Tg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ke;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ue(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let d=this.type;this.render=function(R,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),$=i.state;$.setBlending(ei),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let k=d!==zn&&this.type===zn,Z=d===zn&&this.type!==zn;for(let et=0,Y=R.length;et<Y;et++){let it=R[et],G=it.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ct=G.getFrameExtents();if(s.multiply(ct),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,G.mapSize.y=r.y)),G.map===null||k===!0||Z===!0){let Rt=this.type!==zn?{minFilter:Te,magFilter:Te}:{};G.map!==null&&G.map.dispose(),G.map=new fn(s.x,s.y,Rt),G.map.texture.name=it.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let _t=G.getViewportCount();for(let Rt=0;Rt<_t;Rt++){let Ht=G.getViewport(Rt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),$.viewport(o),G.updateMatrices(it,Rt),n=G.getFrustum(),b(C,O,G.camera,it,this.type)}G.isPointLightShadow!==!0&&this.type===zn&&A(G,O),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function A(R,C){let O=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fn(s.x,s.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,O,u,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,O,p,v,null)}function w(R,C,O,S){let M=null,L=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=O.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let $=M.uuid,k=C.uuid,Z=c[$];Z===void 0&&(Z={},c[$]=Z);let et=Z[k];et===void 0&&(et=M.clone(),Z[k]=et,C.addEventListener("dispose",I)),M=et}if(M.visible=C.visible,M.wireframe=C.wireframe,S===zn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let $=i.properties.get(M);$.light=O}return M}function b(R,C,O,S,M){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===zn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let k=t.update(R),Z=R.material;if(Array.isArray(Z)){let et=k.groups;for(let Y=0,it=et.length;Y<it;Y++){let G=et[Y],ct=Z[G.materialIndex];if(ct&&ct.visible){let _t=w(R,ct,S,M);R.onBeforeShadow(i,R,C,O,k,_t,G),i.renderBufferDirect(O,null,k,_t,R,G),R.onAfterShadow(i,R,C,O,k,_t,G)}}}else if(Z.visible){let et=w(R,Z,S,M);R.onBeforeShadow(i,R,C,O,k,et,null),i.renderBufferDirect(O,null,k,et,R,null),R.onAfterShadow(i,R,C,O,k,et,null)}}let $=R.children;for(let k=0,Z=$.length;k<Z;k++)b($[k],C,O,S,M)}function I(R){R.target.removeEventListener("dispose",I);for(let O in c){let S=c[O],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Rg={[Fo]:Oo,[Bo]:Vo,[zo]:Ho,[ns]:ko,[Oo]:Fo,[Vo]:Bo,[Ho]:zo,[ko]:ns};function Cg(i,t){function e(){let D=!1,ht=new ve,W=null,j=new ve(0,0,0,0);return{setMask:function(ut){W!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){D=ut},setClear:function(ut,pt,Ft,ce,ge){ge===!0&&(ut*=ce,pt*=ce,Ft*=ce),ht.set(ut,pt,Ft,ce),j.equals(ht)===!1&&(i.clearColor(ut,pt,Ft,ce),j.copy(ht))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,W=null,j=null,ut=null;return{setReversed:function(pt){if(ht!==pt){let Ft=t.get("EXT_clip_control");ht?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let ce=ut;ut=null,this.setClear(ce)}ht=pt},getReversed:function(){return ht},setTest:function(pt){pt?lt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(pt){W!==pt&&!D&&(i.depthMask(pt),W=pt)},setFunc:function(pt){if(ht&&(pt=Rg[pt]),j!==pt){switch(pt){case Fo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=pt}},setLocked:function(pt){D=pt},setClear:function(pt){ut!==pt&&(ht&&(pt=1-pt),i.clearDepth(pt),ut=pt)},reset:function(){D=!1,W=null,j=null,ut=null,ht=!1}}}function s(){let D=!1,ht=null,W=null,j=null,ut=null,pt=null,Ft=null,ce=null,ge=null;return{setTest:function(ne){D||(ne?lt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ne){ht!==ne&&!D&&(i.stencilMask(ne),ht=ne)},setFunc:function(ne,Oe,Be){(W!==ne||j!==Oe||ut!==Be)&&(i.stencilFunc(ne,Oe,Be),W=ne,j=Oe,ut=Be)},setOp:function(ne,Oe,Be){(pt!==ne||Ft!==Oe||ce!==Be)&&(i.stencilOp(ne,Oe,Be),pt=ne,Ft=Oe,ce=Be)},setLocked:function(ne){D=ne},setClear:function(ne){ge!==ne&&(i.clearStencil(ne),ge=ne)},reset:function(){D=!1,ht=null,W=null,j=null,ut=null,pt=null,Ft=null,ce=null,ge=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,p=[],_=null,v=!1,m=null,d=null,A=null,w=null,b=null,I=null,R=null,C=new se(0,0,0),O=0,S=!1,M=null,L=null,$=null,k=null,Z=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=it>=1):G.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=it>=2);let ct=null,_t={},Rt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),te=new ve().fromArray(Rt),q=new ve().fromArray(Ht);function st(D,ht,W,j){let ut=new Uint8Array(4),pt=i.createTexture();i.bindTexture(D,pt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<W;Ft++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(ht+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return pt}let St={};St[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(ns),Xt(!1),qt(Il),lt(i.CULL_FACE),N(ei);function lt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ut(D,ht){return f[D]!==ht?(i.bindFramebuffer(D,ht),f[D]=ht,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ot(D,ht){let W=p,j=!1;if(D){W=u.get(ht),W===void 0&&(W=[],u.set(ht,W));let ut=D.textures;if(W.length!==ut.length||W[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Ft=ut.length;pt<Ft;pt++)W[pt]=i.COLOR_ATTACHMENT0+pt;W.length=ut.length,j=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,j=!0);j&&i.drawBuffers(W)}function me(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Jt={[yi]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};Jt[su]=i.MIN,Jt[ru]=i.MAX;let le={[ou]:i.ZERO,[au]:i.ONE,[lu]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[hu]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[_u]:i.CONSTANT_ALPHA,[xu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,ht,W,j,ut,pt,Ft,ce,ge,ne){if(D===ei){v===!0&&(Ct(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),D!==eu){if(D!==m||ne!==S){if((d!==yi||b!==yi)&&(i.blendEquation(i.FUNC_ADD),d=yi,b=yi),ne)switch(D){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,w=null,I=null,R=null,C.set(0,0,0),O=0,m=D,S=ne}return}ut=ut||ht,pt=pt||W,Ft=Ft||j,(ht!==d||ut!==b)&&(i.blendEquationSeparate(Jt[ht],Jt[ut]),d=ht,b=ut),(W!==A||j!==w||pt!==I||Ft!==R)&&(i.blendFuncSeparate(le[W],le[j],le[pt],le[Ft]),A=W,w=j,I=pt,R=Ft),(ce.equals(C)===!1||ge!==O)&&(i.blendColor(ce.r,ce.g,ce.b,ge),C.copy(ce),O=ge),m=D,S=!1}function Ie(D,ht){D.side===Vn?Ct(i.CULL_FACE):lt(i.CULL_FACE);let W=D.side===Je;ht&&(W=!W),Xt(W),D.blending===Qi&&D.transparent===!1?N(ei):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function qt(D){D!==Qh?(lt(i.CULL_FACE),D!==L&&(D===Il?i.cullFace(i.BACK):D===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),L=D}function wt(D){D!==$&&(Y&&i.lineWidth(D),$=D)}function ie(D,ht,W){D?(lt(i.POLYGON_OFFSET_FILL),(k!==ht||Z!==W)&&(i.polygonOffset(ht,W),k=ht,Z=W)):Ct(i.POLYGON_OFFSET_FILL)}function It(D){D?lt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+et-1),ct!==D&&(i.activeTexture(D),ct=D)}function x(D,ht,W){W===void 0&&(ct===null?W=i.TEXTURE0+et-1:W=ct);let j=_t[W];j===void 0&&(j={type:void 0,texture:void 0},_t[W]=j),(j.type!==D||j.texture!==ht)&&(ct!==W&&(i.activeTexture(W),ct=W),i.bindTexture(D,ht||St[D]),j.type=D,j.texture=ht)}function B(){let D=_t[ct];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function gt(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Bt(D,ht){let W=c.get(ht);W===void 0&&(W=new WeakMap,c.set(ht,W));let j=W.get(D);j===void 0&&(j=i.getUniformBlockIndex(ht,D.name),W.set(D,j))}function Nt(D,ht){let j=c.get(ht).get(D);l.get(ht)!==j&&(i.uniformBlockBinding(ht,j,D.__bindingPointIndex),l.set(ht,j))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,_t={},f={},u=new WeakMap,p=[],_=null,v=!1,m=null,d=null,A=null,w=null,b=null,I=null,R=null,C=new se(0,0,0),O=0,S=!1,M=null,L=null,$=null,k=null,Z=null,te.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ct,bindFramebuffer:Ut,drawBuffers:Ot,useProgram:me,setBlending:N,setMaterial:Ie,setFlipSided:Xt,setCullFace:qt,setLineWidth:wt,setPolygonOffset:ie,setScissorTest:It,activeTexture:E,bindTexture:x,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:Zt,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:bt,viewport:gt,reset:ee}}function Rc(i,t,e,n){let s=Ig(n);switch(e){case zc:return i*t;case Vc:return i*t;case Hc:return i*t*2;case Wr:return i*t/s.components*s.byteLength;case ja:return i*t/s.components*s.byteLength;case Gc:return i*t*2/s.components*s.byteLength;case tl:return i*t*2/s.components*s.byteLength;case kc:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case el:return i*t*4/s.components*s.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:case Jo:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case Ko:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Er:case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wc:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _a:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(i){switch(i){case wn:case Fc:return{byteLength:1,components:1};case Us:case Oc:case Ns:return{byteLength:2,components:1};case Ka:case Qa:return{byteLength:2,components:4};case wi:case Ja:case En:return{byteLength:4,components:1};case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Pg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return p?new OffscreenCanvas(E,x):Ar("canvas")}function v(E,x,B){let Q=1,tt=It(E);if((tt.width>B||tt.height>B)&&(Q=B/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let J=Math.floor(Q*tt.width),Tt=Math.floor(Q*tt.height);f===void 0&&(f=_(J,Tt));let mt=x?_(J,Tt):f;return mt.width=J,mt.height=Tt,mt.getContext("2d").drawImage(E,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+J+"x"+Tt+")."),mt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,x,B,Q,tt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=x;if(x===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),x===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){let Tt=tt?Xr:Kt.getTransfer(Q);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Tt===fe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function b(E,x){let B;return E?x===null||x===wi||x===rs?B=i.DEPTH24_STENCIL8:x===En?B=i.DEPTH32F_STENCIL8:x===Us&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===rs?B=i.DEPTH_COMPONENT24:x===En?B=i.DEPTH_COMPONENT32F:x===Us&&(B=i.DEPTH_COMPONENT16),B}function I(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Te&&E.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){let x=E.target;x.removeEventListener("dispose",R),O(x),x.isVideoTexture&&h.delete(x)}function C(E){let x=E.target;x.removeEventListener("dispose",C),M(x)}function O(E){let x=n.get(E);if(x.__webglInit===void 0)return;let B=E.source,Q=u.get(B);if(Q){let tt=Q[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(E),Object.keys(Q).length===0&&u.delete(B)}n.remove(E)}function S(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let B=E.source,Q=u.get(B);delete Q[x.__cacheKey],o.memory.textures--}function M(E){let x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let tt=0;tt<x.__webglFramebuffer[Q].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Q][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=E.textures;for(let Q=0,tt=B.length;Q<tt;Q++){let J=n.get(B[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(B[Q])}n.remove(E)}let L=0;function $(){L=0}function k(){let E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function Z(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function et(E,x){let B=n.get(E);if(E.isVideoTexture&&wt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,E,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Y(E,x){let B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function it(E,x){let B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function G(E,x){let B=n.get(E);if(E.version>0&&B.__version!==E.version){st(B,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let ct={[Xo]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},_t={[Te]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},Rt={[Du]:i.NEVER,[zu]:i.ALWAYS,[Uu]:i.LESS,[Xc]:i.LEQUAL,[Nu]:i.EQUAL,[Bu]:i.GEQUAL,[Fu]:i.GREATER,[Ou]:i.NOTEQUAL};function Ht(E,x){if(x.type===En&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===no||x.magFilter===Js||x.magFilter===Ei||x.minFilter===Cn||x.minFilter===no||x.minFilter===Js||x.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ct[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ct[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ct[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Te||x.minFilter!==Js&&x.minFilter!==Ei||x.type===En&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function te(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));let Q=x.source,tt=u.get(Q);tt===void 0&&(tt={},u.set(Q,tt));let J=Z(x);if(J!==E.__cacheKey){tt[J]===void 0&&(tt[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[J].usedTimes++;let Tt=tt[E.__cacheKey];Tt!==void 0&&(tt[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(x)),E.__cacheKey=J,E.__webglTexture=tt[J].texture}return B}function q(E,x,B){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);let tt=te(E,x),J=x.source;e.bindTexture(Q,E.__webglTexture,i.TEXTURE0+B);let Tt=n.get(J);if(J.version!==Tt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);let mt=Kt.getPrimaries(Kt.workingColorSpace),yt=x.colorSpace===ti?null:Kt.getPrimaries(x.colorSpace),Zt=x.colorSpace===ti||mt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let rt=v(x.image,!1,s.maxTextureSize);rt=ie(x,rt);let xt=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type),bt=w(x.internalFormat,xt,Pt,x.colorSpace,x.isVideoTexture);Ht(Q,x);let gt,Bt=x.mipmaps,Nt=x.isVideoTexture!==!0,ee=Tt.__version===void 0||tt===!0,D=J.dataReady,ht=I(x,rt);if(x.isDepthTexture)bt=b(x.format===os,x.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,bt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,bt,rt.width,rt.height,0,xt,Pt,null));else if(x.isDataTexture)if(Bt.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,bt,Bt[0].width,Bt[0].height);for(let W=0,j=Bt.length;W<j;W++)gt=Bt[W],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,xt,Pt,gt.data):e.texImage2D(i.TEXTURE_2D,W,bt,gt.width,gt.height,0,xt,Pt,gt.data);x.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,ht,bt,rt.width,rt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,xt,Pt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,bt,rt.width,rt.height,0,xt,Pt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,bt,Bt[0].width,Bt[0].height,rt.depth);for(let W=0,j=Bt.length;W<j;W++)if(gt=Bt[W],x.format!==sn)if(xt!==null)if(Nt){if(D)if(x.layerUpdates.size>0){let ut=Rc(gt.width,gt.height,x.format,x.type);for(let pt of x.layerUpdates){let Ft=gt.data.subarray(pt*ut/gt.data.BYTES_PER_ELEMENT,(pt+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,pt,gt.width,gt.height,1,xt,Ft)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,rt.depth,xt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,bt,gt.width,gt.height,rt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,rt.depth,xt,Pt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,bt,gt.width,gt.height,rt.depth,0,xt,Pt,gt.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,bt,Bt[0].width,Bt[0].height);for(let W=0,j=Bt.length;W<j;W++)gt=Bt[W],x.format!==sn?xt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,bt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,xt,Pt,gt.data):e.texImage2D(i.TEXTURE_2D,W,bt,gt.width,gt.height,0,xt,Pt,gt.data)}else if(x.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,bt,rt.width,rt.height,rt.depth),D)if(x.layerUpdates.size>0){let W=Rc(rt.width,rt.height,x.format,x.type);for(let j of x.layerUpdates){let ut=rt.data.subarray(j*W/rt.data.BYTES_PER_ELEMENT,(j+1)*W/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,xt,Pt,ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,xt,Pt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,rt.width,rt.height,rt.depth,0,xt,Pt,rt.data);else if(x.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,ht,bt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,xt,Pt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,bt,rt.width,rt.height,rt.depth,0,xt,Pt,rt.data);else if(x.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,ht,bt,rt.width,rt.height);else{let W=rt.width,j=rt.height;for(let ut=0;ut<ht;ut++)e.texImage2D(i.TEXTURE_2D,ut,bt,W,j,0,xt,Pt,null),W>>=1,j>>=1}}else if(Bt.length>0){if(Nt&&ee){let W=It(Bt[0]);e.texStorage2D(i.TEXTURE_2D,ht,bt,W.width,W.height)}for(let W=0,j=Bt.length;W<j;W++)gt=Bt[W],Nt?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt,Pt,gt):e.texImage2D(i.TEXTURE_2D,W,bt,xt,Pt,gt);x.generateMipmaps=!1}else if(Nt){if(ee){let W=It(rt);e.texStorage2D(i.TEXTURE_2D,ht,bt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Pt,rt)}else e.texImage2D(i.TEXTURE_2D,0,bt,xt,Pt,rt);m(x)&&d(Q),Tt.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function st(E,x,B){if(x.image.length!==6)return;let Q=te(E,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let J=n.get(tt);if(tt.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);let Tt=Kt.getPrimaries(Kt.workingColorSpace),mt=x.colorSpace===ti?null:Kt.getPrimaries(x.colorSpace),yt=x.colorSpace===ti||Tt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Zt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!Zt&&!rt?xt[j]=v(x.image[j],!0,s.maxCubemapSize):xt[j]=rt?x.image[j].image:x.image[j],xt[j]=ie(x,xt[j]);let Pt=xt[0],bt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),Bt=w(x.internalFormat,bt,gt,x.colorSpace),Nt=x.isVideoTexture!==!0,ee=J.__version===void 0||Q===!0,D=tt.dataReady,ht=I(x,Pt);Ht(i.TEXTURE_CUBE_MAP,x);let W;if(Zt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Bt,Pt.width,Pt.height);for(let j=0;j<6;j++){W=xt[j].mipmaps;for(let ut=0;ut<W.length;ut++){let pt=W[ut];x.format!==sn?bt!==null?Nt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,pt.width,pt.height,bt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,Bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,pt.width,pt.height,bt,gt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,Bt,pt.width,pt.height,0,bt,gt,pt.data)}}}else{if(W=x.mipmaps,Nt&&ee){W.length>0&&ht++;let j=It(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Bt,j.width,j.height)}for(let j=0;j<6;j++)if(rt){Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,bt,gt,xt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,xt[j].width,xt[j].height,0,bt,gt,xt[j].data);for(let ut=0;ut<W.length;ut++){let Ft=W[ut].image[j].image;Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Ft.width,Ft.height,bt,gt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,Bt,Ft.width,Ft.height,0,bt,gt,Ft.data)}}else{Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,bt,gt,xt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Bt,bt,gt,xt[j]);for(let ut=0;ut<W.length;ut++){let pt=W[ut];Nt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,bt,gt,pt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,Bt,bt,gt,pt.image[j])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),J.__version=tt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function St(E,x,B,Q,tt,J){let Tt=r.convert(B.format,B.colorSpace),mt=r.convert(B.type),yt=w(B.internalFormat,Tt,mt,B.colorSpace),Zt=n.get(x),rt=n.get(B);if(rt.__renderTarget=x,!Zt.__hasExternalTextures){let xt=Math.max(1,x.width>>J),Pt=Math.max(1,x.height>>J);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,J,yt,xt,Pt,x.depth,0,Tt,mt,null):e.texImage2D(tt,J,yt,xt,Pt,0,Tt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),qt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,tt,rt.__webglTexture,0,Xt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,tt,rt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(E,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let Q=x.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,J=b(x.stencilBuffer,tt),Tt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Xt(x);qt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,J,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,E)}else{let Q=x.textures;for(let tt=0;tt<Q.length;tt++){let J=Q[tt],Tt=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),yt=w(J.internalFormat,Tt,mt,J.colorSpace),Zt=Xt(x);B&&qt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,yt,x.width,x.height):qt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,yt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,yt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),et(x.depthTexture,0);let tt=Q.__webglTexture,J=Xt(x);if(x.depthTexture.format===ji)qt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===os)qt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Ut(E){let x=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let Q=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",tt)};Q.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Q}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ct(x.__webglFramebuffer,E)}else if(B){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=i.createRenderbuffer(),lt(x.__webglDepthbuffer[Q],E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),lt(x.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(E,x,B){let Q=n.get(E);x!==void 0&&St(Q.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ut(E)}function me(E){let x=E.texture,B=n.get(E),Q=n.get(x);E.addEventListener("dispose",C);let tt=E.textures,J=E.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[mt]=[];for(let yt=0;yt<x.mipmaps.length;yt++)B.__webglFramebuffer[mt][yt]=i.createFramebuffer()}else B.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let mt=0;mt<x.mipmaps.length;mt++)B.__webglFramebuffer[mt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let mt=0,yt=tt.length;mt<yt;mt++){let Zt=n.get(tt[mt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&qt(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let mt=0;mt<tt.length;mt++){let yt=tt[mt];B.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[mt]);let Zt=r.convert(yt.format,yt.colorSpace),rt=r.convert(yt.type),xt=w(yt.internalFormat,Zt,rt,yt.colorSpace,E.isXRRenderTarget===!0),Pt=Xt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,B.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,x);for(let mt=0;mt<6;mt++)if(x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)St(B.__webglFramebuffer[mt][yt],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else St(B.__webglFramebuffer[mt],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let mt=0,yt=tt.length;mt<yt;mt++){let Zt=tt[mt],rt=n.get(Zt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Ht(i.TEXTURE_2D,Zt),St(B.__webglFramebuffer,E,Zt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(mt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Q.__webglTexture),Ht(mt,x),x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)St(B.__webglFramebuffer[yt],E,x,i.COLOR_ATTACHMENT0,mt,yt);else St(B.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,mt,0);m(x)&&d(mt),e.unbindTexture()}E.depthBuffer&&Ut(E)}function Jt(E){let x=E.textures;for(let B=0,Q=x.length;B<Q;B++){let tt=x[B];if(m(tt)){let J=A(E),Tt=n.get(tt).__webglTexture;e.bindTexture(J,Tt),d(J),e.unbindTexture()}}}let le=[],N=[];function Ie(E){if(E.samples>0){if(qt(E)===!1){let x=E.textures,B=E.width,Q=E.height,tt=i.COLOR_BUFFER_BIT,J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(E),mt=x.length>1;if(mt)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let Zt=n.get(x[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,tt,i.NEAREST),l===!0&&(le.length=0,N.length=0,le.push(i.COLOR_ATTACHMENT0+yt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(le.push(J),N.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[yt]);let Zt=n.get(x[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Xt(E){return Math.min(s.maxSamples,E.samples)}function qt(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function ie(E,x){let B=E.colorSpace,Q=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==oi&&B!==ti&&(Kt.getTransfer(B)===fe?(Q!==sn||tt!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function It(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=et,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=St,this.useMultisampledRTT=qt}function Lg(i,t){function e(n,s=ti){let r,o=Kt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.BYTE;if(n===Oc)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===zc)return i.ALPHA;if(n===kc)return i.RGB;if(n===sn)return i.RGBA;if(n===Vc)return i.LUMINANCE;if(n===Hc)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Wr)return i.RED;if(n===ja)return i.RED_INTEGER;if(n===Gc)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===Sr||n===br)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Zo||n===$o||n===Jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Qo||n===jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===Qo)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===ga||n===_a||n===xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Na=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ki=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dg={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`,Fa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new rn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ne({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oa=class extends si{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,_=null,v=new Fa,m=e.getContextAttributes(),d=null,A=null,w=[],b=[],I=new de,R=null,C=new Ve;C.viewport=new ve;let O=new Ve;O.viewport=new ve;let S=[C,O],M=new Na,L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=w[q];return st===void 0&&(st=new Ds,w[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=w[q];return st===void 0&&(st=new Ds,w[q]=st),st.getGripSpace()},this.getHand=function(q){let st=w[q];return st===void 0&&(st=new Ds,w[q]=st),st.getHandSpace()};function k(q){let st=b.indexOf(q.inputSource);if(st===-1)return;let St=w[st];St!==void 0&&(St.update(q.inputSource,q.frame,c||o),St.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",et);for(let q=0;q<w.length;q++){let st=b[q];st!==null&&(b[q]=null,w[q].disconnect(st))}L=null,$=null,v.reset(),t.setRenderTarget(d),p=null,u=null,f=null,s=null,A=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new fn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,St=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?os:ji,St=m.stencil?rs:wi);let Ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new fn(u.textureWidth,u.textureHeight,{format:sn,type:wn,depthTexture:new us(u.textureWidth,u.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function et(q){for(let st=0;st<q.removed.length;st++){let St=q.removed[st],lt=b.indexOf(St);lt>=0&&(b[lt]=null,w[lt].disconnect(St))}for(let st=0;st<q.added.length;st++){let St=q.added[st],lt=b.indexOf(St);if(lt===-1){for(let Ut=0;Ut<w.length;Ut++)if(Ut>=b.length){b.push(St),lt=Ut;break}else if(b[Ut]===null){b[Ut]=St,lt=Ut;break}if(lt===-1)break}let Ct=w[lt];Ct&&Ct.connect(St)}}let Y=new z,it=new z;function G(q,st,St){Y.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(St.matrixWorld);let lt=Y.distanceTo(it),Ct=st.projectionMatrix.elements,Ut=St.projectionMatrix.elements,Ot=Ct[14]/(Ct[10]-1),me=Ct[14]/(Ct[10]+1),Jt=(Ct[9]+1)/Ct[5],le=(Ct[9]-1)/Ct[5],N=(Ct[8]-1)/Ct[0],Ie=(Ut[8]+1)/Ut[0],Xt=Ot*N,qt=Ot*Ie,wt=lt/(-N+Ie),ie=wt*-N;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ie),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let It=Ot+wt,E=me+wt,x=Xt-ie,B=qt+(lt-ie),Q=Jt*me/E*It,tt=le*me/E*It;q.projectionMatrix.makePerspective(x,B,Q,tt,It,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ct(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let st=q.near,St=q.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(St=v.depthFar)),M.near=O.near=C.near=st,M.far=O.far=C.far=St,(L!==M.near||$!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,$=M.far),C.layers.mask=q.layers.mask|2,O.layers.mask=q.layers.mask|4,M.layers.mask=C.layers.mask|O.layers.mask;let lt=q.parent,Ct=M.cameras;ct(M,lt);for(let Ut=0;Ut<Ct.length;Ut++)ct(Ct[Ut],lt);Ct.length===2?G(M,C,O):M.projectionMatrix.copy(C.projectionMatrix),_t(q,M,lt)};function _t(q,st,St){St===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ya*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Rt=null;function Ht(q,st){if(h=st.getViewerPose(c||o),_=st,h!==null){let St=h.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let lt=!1;St.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Ut=0;Ut<St.length;Ut++){let Ot=St[Ut],me=null;if(p!==null)me=p.getViewport(Ot);else{let le=f.getViewSubImage(u,Ot);me=le.viewport,Ut===0&&(t.setRenderTargetTextures(A,le.colorTexture,u.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(A))}let Jt=S[Ut];Jt===void 0&&(Jt=new Ve,Jt.layers.enable(Ut),Jt.viewport=new ve,S[Ut]=Jt),Jt.matrix.fromArray(Ot.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Ot.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(me.x,me.y,me.width,me.height),Ut===0&&(M.matrix.copy(Jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(Jt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Ut=f.getDepthInformation(St[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let St=0;St<w.length;St++){let lt=b[St],Ct=w[St];lt!==null&&Ct!==void 0&&Ct.update(lt,st,c||o)}Rt&&Rt(q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}let te=new $c;te.setAnimationLoop(Ht),this.setAnimationLoop=function(q){Rt=q},this.dispose=function(){}}},xi=new Tn,Fg=new re;function Og(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,w,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Je&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Je&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=t.get(d),w=A.envMap,b=A.envMapRotation;w&&(m.envMap.value=w,xi.copy(b),xi.x*=-1,xi.y*=-1,xi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(xi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Je&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,w){let b=w.program;n.uniformBlockBinding(A,b)}function c(A,w){let b=s[A.id];b===void 0&&(_(A),b=h(A),s[A.id]=b,A.addEventListener("dispose",m));let I=w.program;n.updateUBOMapping(A,I);let R=t.render.frame;r[A.id]!==R&&(u(A),r[A.id]=R)}function h(A){let w=f();A.__bindingPointIndex=w;let b=i.createBuffer(),I=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(A){let w=s[A.id],b=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,C=b.length;R<C;R++){let O=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,M=O.length;S<M;S++){let L=O[S];if(p(L,R,S,I)===!0){let $=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],Z=0;for(let et=0;et<k.length;et++){let Y=k[et],it=v(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,$+Z,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,Z),Z+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,w,b,I){let R=A.value,C=w+"_"+b;if(I[C]===void 0)return typeof R=="number"||typeof R=="boolean"?I[C]=R:I[C]=R.clone(),!0;{let O=I[C];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return I[C]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function _(A){let w=A.uniforms,b=0,I=16;for(let C=0,O=w.length;C<O;C++){let S=Array.isArray(w[C])?w[C]:[w[C]];for(let M=0,L=S.length;M<L;M++){let $=S[M],k=Array.isArray($.value)?$.value:[$.value];for(let Z=0,et=k.length;Z<et;Z++){let Y=k[Z],it=v(Y),G=b%I,ct=G%it.boundary,_t=G+ct;b+=ct,_t!==0&&I-_t<it.storage&&(b+=I-_t),$.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=it.storage}}}let R=b%I;return R>0&&(b+=I-R),A.__size=b,A.__cache={},this}function v(A){let w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function m(A){let w=A.target;w.removeEventListener("dispose",m);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Fr=class{constructor(t={}){let{canvas:e=Vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,A=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=ni,this.toneMappingExposure=1;let b=this,I=!1,R=0,C=0,O=null,S=-1,M=null,L=new ve,$=new ve,k=null,Z=new se(0),et=0,Y=e.width,it=e.height,G=1,ct=null,_t=null,Rt=new ve(0,0,Y,it),Ht=new ve(0,0,Y,it),te=!1,q=new Ur,st=!1,St=!1,lt=new re,Ct=new re,Ut=new z,Ot=new ve,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function le(){return O===null?G:1}let N=n;function Ie(y,U){return e.getContext(y,U)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",pt,!1),N===null){let U="webgl2";if(N=Ie(U,y),N===null)throw Ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Xt,qt,wt,ie,It,E,x,B,Q,tt,J,Tt,mt,yt,Zt,rt,xt,Pt,bt,gt,Bt,Nt,ee,D;function ht(){Xt=new tm(N),Xt.init(),Nt=new Lg(N,Xt),qt=new Zp(N,Xt,t,Nt),wt=new Cg(N,Xt),qt.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),ie=new im(N),It=new gg,E=new Pg(N,Xt,wt,It,qt,Nt,ie),x=new Jp(b),B=new jp(b),Q=new cd(N),ee=new qp(N,Q),tt=new em(N,Q,ie,ee),J=new rm(N,tt,Q,ie),bt=new sm(N,qt,E),rt=new $p(It),Tt=new mg(b,x,B,Xt,qt,ee,rt),mt=new Og(b,It),yt=new xg,Zt=new Eg(Xt),Pt=new Xp(b,x,B,wt,J,p,l),xt=new Ag(b,J,qt),D=new Bg(N,ie,qt,wt),gt=new Yp(N,Xt,ie),Bt=new nm(N,Xt,ie),ie.programs=Tt.programs,b.capabilities=qt,b.extensions=Xt,b.properties=It,b.renderLists=yt,b.shadowMap=xt,b.state=wt,b.info=ie}ht();let W=new Oa(b,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=Xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(Y,it,!1))},this.getSize=function(y){return y.set(Y,it)},this.setSize=function(y,U,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,it=U,e.width=Math.floor(y*G),e.height=Math.floor(U*G),V===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*G,it*G).floor()},this.setDrawingBufferSize=function(y,U,V){Y=y,it=U,G=V,e.width=Math.floor(y*V),e.height=Math.floor(U*V),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,U,V,H){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,U,V,H),wt.viewport(L.copy(Rt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Ht)},this.setScissor=function(y,U,V,H){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,U,V,H),wt.scissor($.copy(Ht).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(y){wt.setScissorTest(te=y)},this.setOpaqueSort=function(y){ct=y},this.setTransparentSort=function(y){_t=y},this.getClearColor=function(y){return y.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(y=!0,U=!0,V=!0){let H=0;if(y){let F=!1;if(O!==null){let at=O.texture.format;F=at===el||at===tl||at===ja}if(F){let at=O.texture.type,dt=at===wn||at===wi||at===Us||at===rs||at===Ka||at===Qa,Mt=Pt.getClearColor(),At=Pt.getClearAlpha(),Dt=Mt.r,zt=Mt.g,vt=Mt.b;dt?(_[0]=Dt,_[1]=zt,_[2]=vt,_[3]=At,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=Dt,v[1]=zt,v[2]=vt,v[3]=At,N.clearBufferiv(N.COLOR,0,v))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT),V&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),yt.dispose(),Zt.dispose(),It.dispose(),x.dispose(),B.dispose(),J.dispose(),ee.dispose(),D.dispose(),Tt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ui),W.removeEventListener("sessionend",gn),an.stop()};function j(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let y=ie.autoReset,U=xt.enabled,V=xt.autoUpdate,H=xt.needsUpdate,F=xt.type;ht(),ie.autoReset=y,xt.enabled=U,xt.autoUpdate=V,xt.needsUpdate=H,xt.type=F}function pt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ft(y){let U=y.target;U.removeEventListener("dispose",Ft),ce(U)}function ce(y){ge(y),It.remove(y)}function ge(y){let U=It.get(y).programs;U!==void 0&&(U.forEach(function(V){Tt.releaseProgram(V)}),y.isShaderMaterial&&Tt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,V,H,F,at){U===null&&(U=me);let dt=F.isMesh&&F.matrixWorld.determinant()<0,Mt=Xs(y,U,V,H,F);wt.setMaterial(H,dt);let At=V.index,Dt=1;if(H.wireframe===!0){if(At=tt.getWireframeAttribute(V),At===void 0)return;Dt=2}let zt=V.drawRange,vt=V.attributes.position,Yt=zt.start*Dt,oe=(zt.start+zt.count)*Dt;at!==null&&(Yt=Math.max(Yt,at.start*Dt),oe=Math.min(oe,(at.start+at.count)*Dt)),At!==null?(Yt=Math.max(Yt,0),oe=Math.min(oe,At.count)):vt!=null&&(Yt=Math.max(Yt,0),oe=Math.min(oe,vt.count));let he=oe-Yt;if(he<0||he===1/0)return;ee.setup(F,H,Mt,V,At);let Ae,$t=gt;if(At!==null&&(Ae=Q.get(At),$t=Bt,$t.setIndex(Ae)),F.isMesh)H.wireframe===!0?(wt.setLineWidth(H.wireframeLinewidth*le()),$t.setMode(N.LINES)):$t.setMode(N.TRIANGLES);else if(F.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),wt.setLineWidth(Et*le()),F.isLineSegments?$t.setMode(N.LINES):F.isLineLoop?$t.setMode(N.LINE_LOOP):$t.setMode(N.LINE_STRIP)}else F.isPoints?$t.setMode(N.POINTS):F.isSprite&&$t.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$t.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))$t.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Et=F._multiDrawStarts,ln=F._multiDrawCounts,jt=F._multiDrawCount,Le=At?Q.get(At).bytesPerElement:1,Pn=It.get(H).currentProgram.getUniforms();for(let De=0;De<jt;De++)Pn.setValue(N,"_gl_DrawID",De),$t.render(Et[De]/Le,ln[De])}else if(F.isInstancedMesh)$t.renderInstances(Yt,he,F.count);else if(V.isInstancedBufferGeometry){let Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ln=Math.min(V.instanceCount,Et);$t.renderInstances(Yt,he,ln)}else $t.render(Yt,he)};function ne(y,U,V){y.transparent===!0&&y.side===Vn&&y.forceSinglePass===!1?(y.side=Je,y.needsUpdate=!0,In(y,U,V),y.side=ii,y.needsUpdate=!0,In(y,U,V),y.side=Vn):In(y,U,V)}this.compile=function(y,U,V=null){V===null&&(V=y),d=Zt.get(V),d.init(U),w.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),y!==V&&y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let H=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let at=F.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){let Mt=at[dt];ne(Mt,V,F),H.add(Mt)}else ne(at,V,F),H.add(at)}),w.pop(),d=null,H},this.compileAsync=function(y,U,V=null){let H=this.compile(y,U,V);return new Promise(F=>{function at(){if(H.forEach(function(dt){It.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){F(y);return}setTimeout(at,10)}Xt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Oe=null;function Be(y){Oe&&Oe(y)}function Ui(){an.stop()}function gn(){an.start()}let an=new $c;an.setAnimationLoop(Be),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(y){Oe=y,W.setAnimationLoop(y),y===null?an.stop():an.start()},W.addEventListener("sessionstart",Ui),W.addEventListener("sessionend",gn),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,U,O),d=Zt.get(y,w.length),d.init(U),w.push(d),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ct),St=this.localClippingEnabled,st=rt.init(this.clippingPlanes,St),m=yt.get(y,A.length),m.init(),A.push(m),W.enabled===!0&&W.isPresenting===!0){let at=b.xr.getDepthSensingMesh();at!==null&&hi(at,U,-1/0,b.sortObjects)}hi(y,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ct,_t),Jt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Jt&&Pt.addToRenderList(m,y),this.info.render.frame++,st===!0&&rt.beginShadows();let V=d.state.shadowsArray;xt.render(V,y,U),st===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){let at=U.cameras;if(F.length>0)for(let dt=0,Mt=at.length;dt<Mt;dt++){let At=at[dt];Ms(H,F,y,At)}Jt&&Pt.render(y);for(let dt=0,Mt=at.length;dt<Mt;dt++){let At=at[dt];ui(m,y,At,At.viewport)}}else F.length>0&&Ms(H,F,y,U),Jt&&Pt.render(y),ui(m,y,U);O!==null&&(E.updateMultisampleRenderTarget(O),E.updateRenderTargetMipmap(O)),y.isScene===!0&&y.onAfterRender(b,y,U),ee.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(d=w[w.length-1],st===!0&&rt.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function hi(y,U,V,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){H&&Ot.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);let dt=J.update(y),Mt=y.material;Mt.visible&&m.push(y,dt,Mt,V,Ot.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){let dt=J.update(y),Mt=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ot.copy(y.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ot.copy(dt.boundingSphere.center)),Ot.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(Mt)){let At=dt.groups;for(let Dt=0,zt=At.length;Dt<zt;Dt++){let vt=At[Dt],Yt=Mt[vt.materialIndex];Yt&&Yt.visible&&m.push(y,dt,Yt,V,Ot.z,vt)}}else Mt.visible&&m.push(y,dt,Mt,V,Ot.z,null)}}let at=y.children;for(let dt=0,Mt=at.length;dt<Mt;dt++)hi(at[dt],U,V,H)}function ui(y,U,V,H){let F=y.opaque,at=y.transmissive,dt=y.transparent;d.setupLightsView(V),st===!0&&rt.setGlobalState(b.clippingPlanes,V),H&&wt.viewport(L.copy(H)),F.length>0&&We(F,U,V),at.length>0&&We(at,U,V),dt.length>0&&We(dt,U,V),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ms(y,U,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?Ns:wn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let at=d.state.transmissionRenderTarget[H.id],dt=H.viewport||L;at.setSize(dt.z,dt.w);let Mt=b.getRenderTarget();b.setRenderTarget(at),b.getClearColor(Z),et=b.getClearAlpha(),et<1&&b.setClearColor(16777215,.5),b.clear(),Jt&&Pt.render(V);let At=b.toneMapping;b.toneMapping=ni;let Dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),st===!0&&rt.setGlobalState(b.clippingPlanes,H),We(y,V,H),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let vt=0,Yt=U.length;vt<Yt;vt++){let oe=U[vt],he=oe.object,Ae=oe.geometry,$t=oe.material,Et=oe.group;if($t.side===Vn&&he.layers.test(H.layers)){let ln=$t.side;$t.side=Je,$t.needsUpdate=!0,Ss(he,V,H,Ae,$t,Et),$t.side=ln,$t.needsUpdate=!0,zt=!0}}zt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}b.setRenderTarget(Mt),b.setClearColor(Z,et),Dt!==void 0&&(H.viewport=Dt),b.toneMapping=At}function We(y,U,V){let H=U.isScene===!0?U.overrideMaterial:null;for(let F=0,at=y.length;F<at;F++){let dt=y[F],Mt=dt.object,At=dt.geometry,Dt=H===null?dt.material:H,zt=dt.group;Mt.layers.test(V.layers)&&Ss(Mt,U,V,At,Dt,zt)}}function Ss(y,U,V,H,F,at){y.onBeforeRender(b,U,V,H,F,at),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(b,U,V,H,y,at),F.transparent===!0&&F.side===Vn&&F.forceSinglePass===!1?(F.side=Je,F.needsUpdate=!0,b.renderBufferDirect(V,U,H,F,y,at),F.side=ii,F.needsUpdate=!0,b.renderBufferDirect(V,U,H,F,y,at),F.side=Vn):b.renderBufferDirect(V,U,H,F,y,at),y.onAfterRender(b,U,V,H,F,at)}function In(y,U,V){U.isScene!==!0&&(U=me);let H=It.get(y),F=d.state.lights,at=d.state.shadowsArray,dt=F.state.version,Mt=Tt.getParameters(y,F.state,at,U,V),At=Tt.getProgramCacheKey(Mt),Dt=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?B:x).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",Ft),Dt=new Map,H.programs=Dt);let zt=Dt.get(At);if(zt!==void 0){if(H.currentProgram===zt&&H.lightsStateVersion===dt)return Ws(y,Mt),zt}else Mt.uniforms=Tt.getUniforms(y),y.onBeforeCompile(Mt,b),zt=Tt.acquireProgram(Mt,At),Dt.set(At,zt),H.uniforms=Mt.uniforms;let vt=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(vt.clippingPlanes=rt.uniform),Ws(y,Mt),H.needsLights=qs(y),H.lightsStateVersion=dt,H.needsLights&&(vt.ambientLightColor.value=F.state.ambient,vt.lightProbe.value=F.state.probe,vt.directionalLights.value=F.state.directional,vt.directionalLightShadows.value=F.state.directionalShadow,vt.spotLights.value=F.state.spot,vt.spotLightShadows.value=F.state.spotShadow,vt.rectAreaLights.value=F.state.rectArea,vt.ltc_1.value=F.state.rectAreaLTC1,vt.ltc_2.value=F.state.rectAreaLTC2,vt.pointLights.value=F.state.point,vt.pointLightShadows.value=F.state.pointShadow,vt.hemisphereLights.value=F.state.hemi,vt.directionalShadowMap.value=F.state.directionalShadowMap,vt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,vt.spotShadowMap.value=F.state.spotShadowMap,vt.spotLightMatrix.value=F.state.spotLightMatrix,vt.spotLightMap.value=F.state.spotLightMap,vt.pointShadowMap.value=F.state.pointShadowMap,vt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=zt,H.uniformsList=null,zt}function bs(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=es.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Ws(y,U){let V=It.get(y);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Xs(y,U,V,H,F){U.isScene!==!0&&(U=me),E.resetTextureUnits();let at=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,Mt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:oi,At=(H.isMeshStandardMaterial?B:x).get(H.envMap||dt),Dt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),vt=!!V.morphAttributes.position,Yt=!!V.morphAttributes.normal,oe=!!V.morphAttributes.color,he=ni;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(he=b.toneMapping);let Ae=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=Ae!==void 0?Ae.length:0,Et=It.get(H),ln=d.state.lights;if(st===!0&&(St===!0||y!==M)){let _e=y===M&&H.id===S;rt.setState(H,y,_e)}let jt=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ln.state.version||Et.outputColorSpace!==Mt||F.isBatchedMesh&&Et.batching===!1||!F.isBatchedMesh&&Et.batching===!0||F.isBatchedMesh&&Et.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Et.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Et.instancing===!1||!F.isInstancedMesh&&Et.instancing===!0||F.isSkinnedMesh&&Et.skinning===!1||!F.isSkinnedMesh&&Et.skinning===!0||F.isInstancedMesh&&Et.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Et.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Et.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Et.instancingMorph===!1&&F.morphTexture!==null||Et.envMap!==At||H.fog===!0&&Et.fog!==at||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==rt.numPlanes||Et.numIntersection!==rt.numIntersection)||Et.vertexAlphas!==Dt||Et.vertexTangents!==zt||Et.morphTargets!==vt||Et.morphNormals!==Yt||Et.morphColors!==oe||Et.toneMapping!==he||Et.morphTargetsCount!==$t)&&(jt=!0):(jt=!0,Et.__version=H.version);let Le=Et.currentProgram;jt===!0&&(Le=In(H,U,F));let Pn=!1,De=!1,_n=!1,ue=Le.getUniforms(),cn=Et.uniforms;if(wt.useProgram(Le.program)&&(Pn=!0,De=!0,_n=!0),H.id!==S&&(S=H.id,De=!0),Pn||M!==y){wt.buffers.depth.getReversed()?(lt.copy(y.projectionMatrix),Gu(lt),Wu(lt),ue.setValue(N,"projectionMatrix",lt)):ue.setValue(N,"projectionMatrix",y.projectionMatrix),ue.setValue(N,"viewMatrix",y.matrixWorldInverse);let ye=ue.map.cameraPosition;ye!==void 0&&ye.setValue(N,Ut.setFromMatrixPosition(y.matrixWorld)),qt.logarithmicDepthBuffer&&ue.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,De=!0,_n=!0)}if(F.isSkinnedMesh){ue.setOptional(N,F,"bindMatrix"),ue.setOptional(N,F,"bindMatrixInverse");let _e=F.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ue.setValue(N,"boneTexture",_e.boneTexture,E))}F.isBatchedMesh&&(ue.setOptional(N,F,"batchingTexture"),ue.setValue(N,"batchingTexture",F._matricesTexture,E),ue.setOptional(N,F,"batchingIdTexture"),ue.setValue(N,"batchingIdTexture",F._indirectTexture,E),ue.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(N,"batchingColorTexture",F._colorsTexture,E));let xn=V.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&bt.update(F,V,Le),(De||Et.receiveShadow!==F.receiveShadow)&&(Et.receiveShadow=F.receiveShadow,ue.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(cn.envMap.value=At,cn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(cn.envMapIntensity.value=U.environmentIntensity),De&&(ue.setValue(N,"toneMappingExposure",b.toneMappingExposure),Et.needsLights&&Es(cn,_n),at&&H.fog===!0&&mt.refreshFogUniforms(cn,at),mt.refreshMaterialUniforms(cn,H,G,it,d.state.transmissionRenderTarget[y.id]),es.upload(N,bs(Et),cn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(es.upload(N,bs(Et),cn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(N,"center",F.center),ue.setValue(N,"modelViewMatrix",F.modelViewMatrix),ue.setValue(N,"normalMatrix",F.normalMatrix),ue.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let _e=H.uniformsGroups;for(let ye=0,Se=_e.length;ye<Se;ye++){let Ln=_e[ye];D.update(Ln,Le),D.bind(Ln,Le)}}return Le}function Es(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function qs(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,U,V){It.get(y.texture).__webglTexture=U,It.get(y.depthTexture).__webglTexture=V;let H=It.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){let V=It.get(y);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,V=0){O=y,R=U,C=V;let H=!0,F=null,at=!1,dt=!1;if(y){let At=It.get(y);if(At.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(At.__webglFramebuffer===void 0)E.setupRenderTarget(y);else if(At.__hasExternalTextures)E.rebindTextures(y,It.get(y.texture).__webglTexture,It.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let vt=y.depthTexture;if(At.__boundDepthTexture!==vt){if(vt!==null&&It.has(vt)&&(y.width!==vt.image.width||y.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(y)}}let Dt=y.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);let zt=It.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?F=zt[U][V]:F=zt[U],at=!0):y.samples>0&&E.useMultisampledRTT(y)===!1?F=It.get(y).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[V]:F=zt,L.copy(y.viewport),$.copy(y.scissor),k=y.scissorTest}else L.copy(Rt).multiplyScalar(G).floor(),$.copy(Ht).multiplyScalar(G).floor(),k=te;if(wt.bindFramebuffer(N.FRAMEBUFFER,F)&&H&&wt.drawBuffers(y,F),wt.viewport(L),wt.scissor($),wt.setScissorTest(k),at){let At=It.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,V)}else if(dt){let At=It.get(y.texture),Dt=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Dt)}S=-1},this.readRenderTargetPixels=function(y,U,V,H,F,at,dt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){wt.bindFramebuffer(N.FRAMEBUFFER,Mt);try{let At=y.texture,Dt=At.format,zt=At.type;if(!qt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&V>=0&&V<=y.height-F&&N.readPixels(U,V,H,F,Nt.convert(Dt),Nt.convert(zt),at)}finally{let At=O!==null?It.get(O).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,U,V,H,F,at,dt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=It.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){let At=y.texture,Dt=At.format,zt=At.type;if(!qt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-H&&V>=0&&V<=y.height-F){wt.bindFramebuffer(N.FRAMEBUFFER,Mt);let vt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.bufferData(N.PIXEL_PACK_BUFFER,at.byteLength,N.STREAM_READ),N.readPixels(U,V,H,F,Nt.convert(Dt),Nt.convert(zt),0);let Yt=O!==null?It.get(O).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Yt);let oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Hu(N,oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,vt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,at),N.deleteBuffer(vt),N.deleteSync(oe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,V=0){y.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);let H=Math.pow(2,-V),F=Math.floor(y.image.width*H),at=Math.floor(y.image.height*H),dt=U!==null?U.x:0,Mt=U!==null?U.y:0;E.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,dt,Mt,F,at),wt.unbindTexture()},this.copyTextureToTexture=function(y,U,V=null,H=null,F=0){y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let at,dt,Mt,At,Dt,zt,vt,Yt,oe,he=y.isCompressedTexture?y.mipmaps[F]:y.image;V!==null?(at=V.max.x-V.min.x,dt=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,Dt=V.min.y,zt=V.isBox3?V.min.z:0):(at=he.width,dt=he.height,Mt=he.depth||1,At=0,Dt=0,zt=0),H!==null?(vt=H.x,Yt=H.y,oe=H.z):(vt=0,Yt=0,oe=0);let Ae=Nt.convert(U.format),$t=Nt.convert(U.type),Et;U.isData3DTexture?(E.setTexture3D(U,0),Et=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Et=N.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Et=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let ln=N.getParameter(N.UNPACK_ROW_LENGTH),jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Le=N.getParameter(N.UNPACK_SKIP_PIXELS),Pn=N.getParameter(N.UNPACK_SKIP_ROWS),De=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,he.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,At),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt);let _n=y.isDataArrayTexture||y.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let cn=It.get(y),xn=It.get(U),_e=It.get(cn.__renderTarget),ye=It.get(xn.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,_e.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Se=0;Se<Mt;Se++)_n&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(y).__webglTexture,F,zt+Se),y.isDepthTexture?(ue&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(U).__webglTexture,F,oe+Se),N.blitFramebuffer(At,Dt,at,dt,vt,Yt,at,dt,N.DEPTH_BUFFER_BIT,N.NEAREST)):ue?N.copyTexSubImage3D(Et,F,vt,Yt,oe+Se,At,Dt,at,dt):N.copyTexSubImage2D(Et,F,vt,Yt,oe+Se,At,Dt,at,dt);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ue?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Et,F,vt,Yt,oe,at,dt,Mt,Ae,$t,he.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,F,vt,Yt,oe,at,dt,Mt,Ae,he.data):N.texSubImage3D(Et,F,vt,Yt,oe,at,dt,Mt,Ae,$t,he):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,vt,Yt,at,dt,Ae,$t,he.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,vt,Yt,he.width,he.height,Ae,he.data):N.texSubImage2D(N.TEXTURE_2D,F,vt,Yt,at,dt,Ae,$t,he);N.pixelStorei(N.UNPACK_ROW_LENGTH,ln),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De),F===0&&U.generateMipmaps&&N.generateMipmap(Et),wt.unbindTexture()},this.copyTextureToTexture3D=function(y,U,V=null,H=null,F=0){return y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,y=arguments[2],U=arguments[3],F=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,V,H,F)},this.initRenderTarget=function(y){It.get(y).__webglFramebuffer===void 0&&E.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?E.setTextureCube(y,0):y.isData3DTexture?E.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?E.setTexture2DArray(y,0):E.setTexture2D(y,0),wt.unbindTexture()},this.resetState=function(){R=0,C=0,O=null,wt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var ds=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Or=class extends rn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Te,h=Te,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ba=class extends Ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Br=new z,zr=new z,Cc=new re,Is=new Ir,_r=new as,Do=new z,Ic=new z,za=class extends pn{constructor(t=new Ke,e=new Ba){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Br.fromBufferAttribute(e,s-1),zr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Br.distanceTo(zr);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;Cc.copy(s).invert(),Is.copy(t.ray).applyMatrix4(Cc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let d=h.getX(v),A=h.getX(v+1),w=xr(this,t,Is,l,d,A);w&&e.push(w)}if(this.isLineLoop){let v=h.getX(_-1),m=h.getX(p),d=xr(this,t,Is,l,v,m);d&&e.push(d)}}else{let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let d=xr(this,t,Is,l,v,v+1);d&&e.push(d)}if(this.isLineLoop){let v=xr(this,t,Is,l,_-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Br.fromBufferAttribute(o,s),zr.fromBufferAttribute(o,r),e.distanceSqToSegment(Br,zr,Do,Ic)>n)return;Do.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Do);if(!(l<t.near||l>t.far))return{distance:l,point:Ic.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Pc=new z,Lc=new z,kr=class extends za{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Pc.fromBufferAttribute(e,s),Lc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pc.distanceTo(Lc);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vr=class i extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new z,u=new z,p=[],_=[],v=[],m=[];for(let d=0;d<=n;d++){let A=[],w=d/n,b=0;d===0&&o===0?b=.5/e:d===n&&l===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){let R=I/e;f.x=-t*Math.cos(s+R*r)*Math.sin(o+w*a),f.y=t*Math.cos(o+w*a),f.z=t*Math.sin(s+R*r)*Math.sin(o+w*a),_.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(R+b,1-w),A.push(c++)}h.push(A)}for(let d=0;d<n;d++)for(let A=0;A<e;A++){let w=h[d][A+1],b=h[d][A],I=h[d+1][A],R=h[d+1][A+1];(d!==0||o>0)&&p.push(w,b,R),(d!==n-1||l<Math.PI)&&p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new Me(_,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function vr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function zg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ka=class extends fs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,a=2*e-n;break;case Fl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:o=t,l=2*n-e;break;case Fl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),v=_*_,m=v*_,d=-u*m+2*u*v-u*_,A=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*_+1,w=(-1-p)*m+(1.5+p)*v+.5*_,b=p*m-p*v;for(let I=0;I!==a;++I)r[I]=d*o[h+I]+A*o[c+I]+w*o[l+I]+b*o[f+I];return r}},Va=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Ha=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vr(e,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vr(t.times,Array),values:vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ka(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wr:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case io:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&zg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,u=f-n,p=f+n;for(let _=0;_!==n;++_){let v=e[f+_];if(v!==e[u+_]||v!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=va;var Pi=class extends An{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=wr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends An{};Ga.prototype.ValueTypeName="color";var Wa=class extends An{};Wa.prototype.ValueTypeName="number";var Xa=class extends fs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ri.slerpFlat(r,0,o,c-a,o,c,l);return r}},Hr=class extends An{InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}};Hr.prototype.ValueTypeName="quaternion";Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends An{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=wr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends An{};qa.prototype.ValueTypeName="vector";var Ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},kg=new Ya,Za=class{constructor(t){this.manager=t!==void 0?t:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Za.DEFAULT_MATERIAL_NAME="__DEFAULT";var il="\\[\\]\\.:\\/",Vg=new RegExp("["+il+"]","g"),sl="[^"+il+"]",Hg="[^"+il.replace("\\.","")+"]",Gg=/((?:WC+[\/:])*)/.source.replace("WC",sl),Wg=/(WCOD+)?/.source.replace("WCOD",Hg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sl),qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sl),Yg=new RegExp("^"+Gg+Wg+Xg+qg+"$"),Zg=["material","materials","bones","map"],$a=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){let e=Yg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Zg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=$a;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Xn=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074,2693140,1121589,4333878,1200985,7614249,4797243,10651769,15986557,12456528,16739364,11069230,46403,416437,7685733,16739929,16752001],ai=32,Yr=64,$g=["top","side","bottom"],Zr=24,rl=8*Yr,li=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6),mn=Math.PI*2;function ah(){let i=new Uint8Array(Zr*rl),t=new Or(i,Zr,rl,Wr,wn);return t.magFilter=Te,t.minFilter=Te,t.generateMipmaps=!1,t.flipY=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}function lh(i,t){let e=i.image.data;e.fill(0);for(let n=1;n<Yr;n++){let s=t[n];s&&$g.forEach((r,o)=>{let a=s[r];for(let l=0;l<8;l++)for(let c=0;c<8;c++)e[(n*8+(7-l))*Zr+o*8+c]=a[l*8+c]&31})}i.needsUpdate=!0}function al(i,t,e,n=[0,0,0],s=null){return{w:i,h:t,d:e,data:s||new Uint8Array(i*t*e),origin:[...n],pos:[0,0,0],angle:[0,0,0],dirty:!0,geometry:null,_m:new re,_inv:new re,_rot:new re,_xfDirty:!0}}var ll=(i,t,e,n)=>t+i.w*(e+i.h*n);function ms(i,t,e,n){return t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d?0:i.data[ll(i,t,e,n)]}function cl(i,t,e,n,s){t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d||(i.data[ll(i,t,e,n)]=s&63,i.dirty=!0)}var eh=new Tn;function ch(i,t=new re){return eh.set(-i[0]*mn,i[1]*mn,i[2]*mn,"YXZ"),t.makeRotationFromEuler(eh)}function gs(i){if(!i._xfDirty)return;ch(i.angle,i._rot);let t=new re().makeTranslation(-i.origin[0],-i.origin[1],-i.origin[2]),e=new re().makeTranslation(i.pos[0],i.pos[1],i.pos[2]);i._m.copy(e).multiply(i._rot).multiply(t),i._inv.copy(i._m).invert(),i._xfDirty=!1}var $r=[{n:[0,1,0],f:0,v:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,0],[0,1],[1,1],[1,0]]},{n:[0,-1,0],f:2,v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[1,0,0],f:1,v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[-1,0,0],f:1,v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],f:1,v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],f:1,v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]}];function Jg(i){let t=[],e=[],n=[],s=[],r=0;for(let a=0;a<i.d;a++)for(let l=0;l<i.h;l++)for(let c=0;c<i.w;c++){let h=i.data[ll(i,c,l,a)];if(h)for(let f=0;f<$r.length;f++){let u=$r[f];if(!ms(i,c+u.n[0],l+u.n[1],a+u.n[2])){for(let p=0;p<4;p++)t.push(c+u.v[p][0],l+u.v[p][1],a+u.v[p][2]),e.push(u.uv[p][0],u.uv[p][1]),n.push(h,u.f,f+1);s.push(r,r+1,r+2,r,r+2,r+3),r+=4}}}let o=new Ke;return o.setAttribute("position",new Me(t,3)),o.setAttribute("aUV",new Me(e,2)),o.setAttribute("aTF",new Me(n,3)),o.setIndex(r>65535?new ls(s,1):new Ri(s,1)),o.computeBoundingSphere(),o}function hh(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=Jg(i),i.dirty=!1),i.geometry}var Fe=8,Os=64,uh=[4,0,4],dh=(i,t,e)=>i+Fe*(t+Fe*e);function Kg(i=null,t=uh,e=""){return{name:e,pivot:[...t],data:i||new Uint8Array(Fe*Fe*Fe),dirty:!0,geometry:null}}function Qg(i,t,e,n){return t<0||e<0||n<0||t>=Fe||e>=Fe||n>=Fe?0:i.data[dh(t,e,n)]}function jg(i){let t=[],e=[],n=[],s=0;for(let o=0;o<Fe;o++)for(let a=0;a<Fe;a++)for(let l=0;l<Fe;l++){let c=i.data[dh(l,a,o)];if(c)for(let h=0;h<$r.length;h++){let f=$r[h];if(!Qg(i,l+f.n[0],a+f.n[1],o+f.n[2])){for(let u=0;u<4;u++)t.push(l+f.v[u][0],a+f.v[u][1],o+f.v[u][2]),e.push(c-1,h+1);n.push(s,s+1,s+2,s,s+2,s+3),s+=4}}}let r=new Ke;return r.setAttribute("position",new Me(t,3)),r.setAttribute("aCD",new Me(e,2)),r.setIndex(new Ri(n,1)),r.computeBoundingSphere(),r}function fh(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=jg(i),i.dirty=!1),i.geometry}var nh=new re,ih=new re,sh=new re,rh=new re;function ph(i,t,e,n,s){return nh.makeTranslation(-i.pivot[0],-i.pivot[1],-i.pivot[2]),rh.makeScale(n[0]/Fe,n[1]/Fe,n[2]/Fe),ch(e,sh),ih.makeTranslation(t[0],t[1],t[2]),s.copy(ih).multiply(sh).multiply(rh).multiply(nh)}function mh(i){let t=new Array(Os).fill(null);return(i.vox||[]).forEach((e,n)=>{if(!e||n>=Os)return;let s=e.data?Sh(e.data):null;(!s||s.length!==Fe*Fe*Fe)&&(s=null),t[n]=Kg(s,e.pivot||uh,e.name||"")}),t}function gh(i){let t={value:Array.from({length:ai},()=>new z)};return hl(t,i),t}function hl(i,t){for(let e=0;e<ai;e++){let n=(t[e]??0)>>>0;i.value[e].set((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)}}var Bs=()=>Array.from({length:ai},(i,t)=>t),_s=()=>new Array(ai).fill(0),ul=`
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
`,dl=i=>({uPalette:i,uRemap:{value:Bs()},uTrans:{value:_s()},uOutline:{value:-1},uId:{value:1},uInner:{value:1}});function _h(i,t){return new Ne({glslVersion:Wn,uniforms:{uAtlas:{value:i},...dl(t)},vertexShader:`
      attribute vec2 aUV;
      attribute vec3 aTF;
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        vUV = aUV; vTF = aTF;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uAtlas;
      ${ul}
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${Zr.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${rl.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx), floor(vTF.z + 0.5));
      }`})}function fl(i){return new Ne({glslVersion:Wn,uniforms:{uColor:{value:7},...dl(i)},vertexShader:`
      void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform float uColor;
      ${ul}
      void main() { writePixel(palColor(int(uColor + 0.5)), 0.0); }`})}function xh(i){return new Ne({glslVersion:Wn,uniforms:dl(i),vertexShader:`
      attribute vec2 aCD;
      varying vec2 vCD;
      void main() {
        vCD = aCD;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${ul}
      varying vec2 vCD;
      void main() { writePixel(palColor(int(vCD.x + 0.5)), floor(vCD.y + 0.5)); }`})}function pl(i){return new fn(i,i,{count:2,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthTexture:new us(i,i)})}function vh(i,t){let e=new Ne({glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:i.textures[0]},tInfo:{value:i.textures[1]},tDepth:{value:i.depthTexture},uPalette:t,uNear:{value:.05},uFar:{value:2e3},uAny:{value:0},uMode:{value:0},uRect:{value:new ve(0,0,1e5,1e5)}},vertexShader:`
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
      }`});return{scene:ol(e),camera:new Ii,uniforms:e.uniforms}}function ml(i){return new fn(i,i,{type:En,format:sn,minFilter:Te,magFilter:Te,generateMipmaps:!1,depthBuffer:!1})}function ol(i){let t=new Ue(new hs(2,2),i);t.frustumCulled=!1;let e=new ds;return e.add(t),e}var oh="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function yh(i){let t=new Ne({glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:null},uDir:{value:new de(1,0)},uR:{value:1},uRect:{value:new ve(0,0,1e5,1e5)}},vertexShader:oh,fragmentShader:`
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
      }`}),e=new Ne({glslVersion:Wn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},tMask:{value:null},uPalette:i,uNear:{value:.05},uFar:{value:2e3}},vertexShader:oh,fragmentShader:`
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
      }`});return{growScene:ol(t),grow:t.uniforms,paintScene:ol(e),paint:e.uniforms,camera:new Ii}}function Mh(i,t){Kt.enabled=!1;let e;try{e=new Fr({canvas:i,antialias:!1,preserveDrawingBuffer:!0})}catch(n){let s=typeof WebGL2RenderingContext>"u"?"This browser has no WebGL 2, which blocky3D needs. Try updating it.":"This browser would not start 3D graphics (WebGL 2). Try closing other tabs and reloading, restarting the browser, or updating it. On iPhone and iPad, Lockdown Mode turns WebGL off.";throw new Error(s+" ("+(n&&n.message||n)+")")}return e.outputColorSpace=oi,e.setPixelRatio(1),t&&e.setSize(t,t,!1),e}function Sh(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function gl(i){return(i.maps||[]).map(t=>{let e=t.data?Sh(t.data):null,n=al(t.w,t.h,t.d,t.origin||[0,0,0],e&&e.length===t.w*t.h*t.d?e:null);return n.name=t.name||"",n})}function bh(i){let t=new Array(Yr).fill(null);return(i.tiles||[]).forEach((e,n)=>{n>0&&n<Yr&&e&&(t[n]=e)}),t}var t0=`
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
`,_l=new Map;for(let i of t0.trim().split(/\n\s*\n/)){let[t,...e]=i.split(`
`),n=t==="space"?" ":t,s=[];e.forEach((r,o)=>[...r].forEach((a,l)=>{a==="#"&&s.push([l,o])})),_l.set(n,s)}function xs(i,t=1){return Math.max(...String(i).split(`
`).map(e=>[...e].length))*7*t}function wh(i,t,e,n,s=128,r=200){let o=String(t||"game").split(/\s+/).filter(Boolean);for(let a=4;a>=1;a--){let l=[];for(let f of o){let u=l[l.length-1];u!==void 0&&[...u+" "+f].length*7*a<=240?l[l.length-1]=u+" "+f:l.push(f)}if(!(l.every(f=>[...f].length*7*a<=240)&&l.length*10*a<=r)&&a>1)continue;let h=s-(l.length*10*a>>1);l.forEach((f,u)=>ci(i,f,256-[...f].length*7*a>>1,h+u*10*a,e,n,a,a));return}}function Eh(i,t,e,n,s,r){let o=t,a=e;for(let l of String(i)){if(l===`
`){o=t,a+=10*s;continue}let c=_l.get(l)||_l.get("?");for(let[h,f]of c)r(o+(1+h)*n,a+(1+f)*s);o+=7*n}}var e0=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function ci(i,t,e,n,s,r=null,o=1,a=1){r&&(i.fillStyle=r,Eh(t,e,n,o,a,(c,h)=>{for(let[f,u]of e0)i.fillRect(c+f*o,h+u*a,o,a)})),i.fillStyle=s,Eh(t,e,n,o,a,(c,h)=>i.fillRect(c,h,o,a));let l=String(t).split(`
`);return e+[...l[l.length-1]].length*7*o}function n0(){return{speed:16,loopStart:0,loopEnd:0,notes:Array.from({length:32},()=>({pitch:24,wave:0,vol:0,fx:0}))}}var qn=(i,t)=>(i>>>0).toString(16).padStart(t,"0").slice(-t);function Th(i){let t=qn(i.speed,2)+qn(i.loopStart,2)+qn(i.loopEnd,2);for(let e of i.notes)t+=qn(e.pitch&63,2)+qn(e.wave&7,1)+qn(e.vol&7,1)+qn(e.fx&7,1);return t}function Kr(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{166}$/.test(t))return null;let e=(s,r)=>parseInt(t.substr(s,r),16),n={speed:Math.max(1,e(0,2)),loopStart:Math.min(32,e(2,2)),loopEnd:Math.min(32,e(4,2)),notes:[]};for(let s=0;s<32;s++){let r=6+s*5;n.notes.push({pitch:e(r,2)&63,wave:e(r+2,1)&7,vol:e(r+3,1)&7,fx:e(r+4,1)&7})}return n}var E0=Th(n0());var i0=i=>440*Math.pow(2,(i-33)/12),vs=i=>i.speed/120,zs=i=>i<.5?i*4-1:3-i*4;function s0(i,t,e){switch(i){case 0:return zs(t);case 1:return t<.875?t/.875*2-1:1-(t-.875)/.125*2;case 2:return t*2-1;case 3:return t<.5?.7:-.7;case 4:return t<.3?.7:-.7;case 5:return(zs(t)+zs(t*2%1)*.5)*.67;case 7:return(zs(t)+zs(e))*.5;default:return 0}}function r0(i,t=0,e=32){let n=[];for(let s=t;s<e;s++)n.push(s);return Ah(i,n)}function Ah(i,t){let e=Math.max(1,Math.round(vs(i)*22050)),n=new Float32Array(e*t.length),s=0,r=0,o=0,a=0,l=0,c={pitch:0,wave:0,vol:0,fx:0};for(let h=0;h<t.length;h++){let f=t[h],u=f>=0?i.notes[f]:c,p=h>0&&t[h-1]>=0?i.notes[t[h-1]]:u,_=f>=0?f-f%4:0,v=i.notes.slice(_,_+4);for(let m=0;m<e;m++){let d=m/e,A=(h*e+m)/22050,w=u.pitch,b=u.vol/7;switch(u.fx){case 1:w=p.pitch+(u.pitch-p.pitch)*d,b=(p.vol+(u.vol-p.vol)*d)/7;break;case 2:w+=Math.sin(A*Math.PI*2*7)*.5;break;case 3:w=u.pitch*(1-d);break;case 4:b*=d;break;case 5:b*=1-d;break;case 6:case 7:{let C=Math.floor(A*(u.fx===6?30:15))%4;w=v[C].pitch;break}}let I=i0(w);s=(s+I/22050)%1,r=(r+I*1.006/22050)%1;let R;u.wave===6?(l+=I*8/22050,l>=1&&(l%=1,a=Math.random()*2-1),R=a*.7):R=s0(u.wave,s,r),o+=(b-o)*.02,n[h*e+m]=R*o*.35}}return n}function o0(i){if(i.loopEnd>i.loopStart)return[0,i.loopEnd];let t=0;return i.notes.forEach((e,n)=>{e.vol>0&&(t=n+1)}),[0,t]}var ks=64,Rh=64;function a0(i){let t=(i.loopStart?1:0)|(i.loopBack?2:0)|(i.stop?4:0);return qn(t,1)+i.ch.map(e=>qn(e>=0&&e<64?e:Rh,2)).join("")}function Ch(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{9}$/.test(t))return null;let e=parseInt(t[0],16),n=[0,1,2,3].map(s=>{let r=parseInt(t.substr(1+s*2,2),16);return r<64?r:Rh});return{loopStart:!!(e&1),loopBack:!!(e&2),stop:!!(e&4),ch:n}}var xl=i=>!i||i.ch.every(t=>t>=64),Ih=i=>i.loopEnd>i.loopStart;function Ph(i,t){let e=0,n=0;for(let s of i.ch){let r=s<64?t[s]:null;if(!r)continue;let o=32*vs(r);n||(n=o),Ih(r)||(e=Math.max(e,o))}return e||n}function l0(i,t){let e=[];for(let n=0;e.length<t;n++)Ih(i)&&n>=i.loopEnd&&(n=i.loopStart),e.push(n<32?n:-1);return e}function c0(i,t){let e=Ph(i,t),n=Math.round(e*22050),s=new Float32Array(Math.max(1,n));for(let r of i.ch){let o=r<64?t[r]:null;if(!o)continue;let a=Ah(o,l0(o,Math.ceil(e/vs(o))));for(let l=0;l<n&&l<a.length;l++)s[l]+=a[l]*.8}return s}function h0(i,t,e){let n=i[t];if(!n||n.stop)return-1;if(n.loopBack){for(let r=t;r>=0;r--)if(i[r]&&i[r].loopStart)return r;return e}let s=t+1;return s<ks&&!xl(i[s])?s:-1}var Jr=class{constructor(){this.ctx=null,this.channels=Array.from({length:4},()=>null),this.cache=new Map,this.volume=1,this.muted=!1,this.held=!1}setMuted(t){this.muted=!!t,this.gain&&(this.gain.gain.value=this.muted?0:1)}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.gain.gain.value=this.muted?0:1}if(this.held){this.suspend();return}this.wake()}wake(){this.ctx.state!=="running"&&this.ctx.state!=="closed"?this.ctx.resume().then(()=>{this.held?this.ctx.suspend():this.startPendingMusic()}):this.pendingMusic&&this.startPendingMusic()}get ready(){return!!this.ctx&&this.ctx.state==="running"}buffer(t,e,n,s){let r=t+"|"+n+"|"+s,o=this.cache.get(r);if(!o){let a=r0(e,n,s);o=this.ctx.createBuffer(1,Math.max(1,a.length),22050),o.copyToChannel(a,0),this.cache.set(r,o),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}return o}play(t,e=-1,n=0,s=32){let r=Kr(t);if(!r||!this.ready)return-1;let[o,a]=o0(r);if(o=Math.max(o,n|0),s<32&&(a=Math.min(a,o+Math.max(0,s|0))),a<=o)return-1;(e<0||e>=4)&&(e=this.freeChannel()),this.stop(e);let l=this.ctx.createBufferSource();l.buffer=this.buffer(t,r,o,a);let c=r.loopEnd>r.loopStart&&r.loopEnd>o&&s>=32;c&&(l.loop=!0,l.loopStart=Math.max(0,r.loopStart-o)*vs(r),l.loopEnd=(r.loopEnd-o)*vs(r)),l.connect(this.gain),l.start();let h={src:l,started:this.ctx.currentTime,sfx:r,from:o,loops:c,done:!1};return l.onended=()=>{h.done=!0,this.channels[e]===h&&(this.channels[e]=null)},this.channels[e]=h,e}freeChannel(){let t=0,e=1/0;for(let n=0;n<4;n++){let s=this.channels[n];if(!s)return n;s.started<e&&(e=s.started,t=n)}return t}stop(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];if(n)try{n.src.stop()}catch{}this.channels[e]=null}}release(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];n&&(n.src.loop=!1)}}noteAt(t){let e=this.channels[t];if(!e||!this.ctx)return-1;let n=vs(e.sfx),s=(this.ctx.currentTime-e.started)/n;if(e.loops){let r=e.sfx.loopStart-e.from,o=e.sfx.loopEnd-e.sfx.loopStart;s>=e.sfx.loopEnd-e.from&&(s=r+(s-r)%o)}return e.from+Math.floor(s)}music(t,e,n,s=0){this.musicStop(),!(n<0)&&(this.pendingMusic={getPatterns:t,getSounds:e,n,fadeMs:s},this.ready&&this.startPendingMusic())}startPendingMusic(){let t=this.pendingMusic;if(this.pendingMusic=null,!t||!this.ready)return;let e=t.getPatterns();if(xl(e[t.n]))return;let n=this.ctx.createGain();n.connect(this.gain);let s=this.ctx.currentTime;t.fadeMs>0&&(n.gain.setValueAtTime(0,s),n.gain.linearRampToValueAtTime(1,s+t.fadeMs/1e3));let r={...t,gain:n,cur:t.n,start:t.n,time:s+.05,sources:[],timeline:[]};this.song=r;let o=()=>{if(this.song!==r)return;let a=r.getPatterns(),l=r.getSounds();for(;r.cur>=0&&r.time<this.ctx.currentTime+.4;){let c=a[r.cur],h=xl(c)?0:Ph(c,l);if(!h){r.cur=-1;break}let f="p"+a0(c)+c.ch.map(_=>l[_]?Th(l[_]):"").join("|"),u=this.cache.get(f);if(!u){let _=c0(c,l);u=this.ctx.createBuffer(1,_.length,22050),u.copyToChannel(_,0),this.cache.set(f,u),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}let p=this.ctx.createBufferSource();p.buffer=u,p.connect(r.gain),p.start(r.time),r.sources.push(p),r.sources.length>8&&r.sources.shift(),r.timeline.push({time:r.time,pattern:r.cur,secs:h}),r.timeline.length>8&&r.timeline.shift(),r.time+=h,r.cur=h0(a,r.cur,r.start)}if(r.cur<0&&this.ctx.currentTime>r.time){this.musicStop();return}r.timer=setTimeout(o,100)};o()}musicStop(t=0){this.pendingMusic=null;let e=this.song;if(!e)return;this.song=null,clearTimeout(e.timer);let n=this.ctx.currentTime+t/1e3;t>0&&(e.gain.gain.setValueAtTime(e.gain.gain.value,this.ctx.currentTime),e.gain.gain.linearRampToValueAtTime(0,n));for(let s of e.sources)try{s.stop(n)}catch{}}musicPosition(){let t=this.song;if(!t||!this.ctx)return null;let e=this.ctx.currentTime;for(let n=t.timeline.length-1;n>=0;n--){let s=t.timeline[n];if(e>=s.time)return e<s.time+s.secs?{pattern:s.pattern,frac:(e-s.time)/s.secs}:null}return null}suspend(){this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.held=!1,this.ctx&&this.wake()}};var Qt=256,Lh=1e3/60,p0={ArrowLeft:0,KeyA:0,ArrowRight:1,KeyD:1,ArrowUp:2,KeyW:2,ArrowDown:3,KeyS:3,KeyZ:4,KeyC:4,KeyN:4,Space:4,KeyX:5,KeyV:5,KeyM:5,Enter:6,NumpadEnter:6,KeyP:6},Dh=64*1024,Uh=i=>String(i||"game").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"game",Di=(i,t,e)=>Array.isArray(i)?[+i[0]||0,+i[1]||0,+i[2]||0]:[+i||0,+t||0,+e||0];function Nh({canvas:i,overlay:t,cart:e,onError:n=console.error,onLog:s=console.log,onRestart:r=()=>location.reload(),onSave:o=()=>{},onCover:a=null}){let l=Mh(i,Qt),c=l.extensions.has("EXT_color_buffer_float"),h="blocky3d.res",f=1;try{f=c?Math.min(3,Math.max(1,parseInt(localStorage.getItem(h),10)||1)):1}catch{}let u=new ds,p=new Ve(90,1,.05,2e3),_=pl(Qt*f),v=null,m=[0,6,-10],d=[0,0,0],A=t.getContext("2d");t.width=t.height=Qt;let w=Array.isArray(e.palette)&&e.palette.length===ai?[...e.palette]:[...Xn],b=gh(w),I=vh(_,b);I.uniforms.uNear.value=p.near,I.uniforms.uFar.value=p.far;let R=yh(b);R.paint.uNear.value=p.near,R.paint.uFar.value=p.far;function C(g){f=c?Math.min(3,Math.max(1,g|0)):1;try{localStorage.setItem(h,String(f))}catch{}let T=Qt*f;l.setSize(T,T,!1),_.dispose(),_=pl(T),v&&(v[0].dispose(),v[1].dispose(),v=null),f>1&&(v=[ml(T),ml(T)]);let P=I.uniforms;P.tColor.value=_.textures[0],P.tInfo.value=_.textures[1],P.tDepth.value=_.depthTexture}C(f);let O=ah();lh(O,bh(e));let S=gl(e),M=Array.from({length:64},(g,T)=>e.sfx&&e.sfx[T]||null),L=M.map(g=>g?Kr(g):null),$=Array.from({length:ks},(g,T)=>Ch(e.music&&e.music[T])),k=new Jr,Z="blocky3d.save."+Uh(e.name),et=mh(e),Y=Bs(),it=_s(),G=0,ct=-1,_t=!0,Rt=0,Ht=0,te=!1,q=null,st=90,St=[],lt=null,Ct=[],Ut=!1,Ot=[0,0,Qt-1,Qt-1],me=new Ci(1,1,1),Jt=new Vr(1,24,16),le={map:[],vox:[],cube:[],sphere:[],line:[]},N={map:0,vox:0,cube:0,sphere:0,line:0};function Ie(g){let T=le[g],P=T[N[g]];if(!P){if(g==="map")P=new Ue(void 0,_h(O,b)),P.matrixAutoUpdate=!1;else if(g==="vox")P=new Ue(void 0,xh(b)),P.matrixAutoUpdate=!1;else if(g==="line"){let X=new Ke;X.setAttribute("position",new Me(new Float32Array(6),3)),P=new kr(X,fl(b)),P.frustumCulled=!1}else P=new Ue(g==="cube"?me:Jt,fl(b));T.push(P),u.add(P)}N[g]++,P.visible=!0;let K=P.material.uniforms;for(let X=0;X<ai;X++)K.uRemap.value[X]=Y[X],K.uTrans.value[X]=it[X];return K.uOutline.value=ct<0?-1:Y[ct],K.uInner.value=_t?1:0,K.uId.value=++Ht,ct>=0&&(te=!0),P.userData.view=lt?lt.i:0,lt&&lt.n++,P}let Xt=g=>li(w[Y[(g|0)&31]]??0);function qt(g,T,P,K){return g=Math.floor(g),T=Math.floor(T),P=Math.floor(P),K=Math.floor(K),[Math.min(g,P),Math.min(T,K),Math.max(g,P),Math.max(T,K)]}function wt(g){let T=S[g];if(!T)throw new Error(`map ${g} does not exist (there are ${S.length} maps)`);return T}let ie=new z;function It(g,T,P,K){return gs(g),ie.set(T,P,K).applyMatrix4(g._inv)}let E=4,x=22,B=new Array(x).fill(!1),Q=Array.from({length:E},()=>new Array(x).fill(!1)),tt=Array.from({length:E},()=>new Array(x).fill(!1)),J=Array.from({length:E},()=>[[0,0],[0,0]]),Tt=.5,mt=[[7,0],[8,1],[9,2],[10,3],[11,4],[12,5],[13,6],[14,7],[15,8],[16,10],[17,11],[18,16]];function yt(g,T,P){let K=ot=>!!(g.buttons[ot]&&g.buttons[ot].pressed),X=ot=>Number.isFinite(g.axes[ot])?g.axes[ot]:0;T[0]=K(14)||X(0)<-Tt,T[1]=K(15)||X(0)>Tt,T[2]=K(12)||X(1)<-Tt,T[3]=K(13)||X(1)>Tt,T[4]=K(0)||K(2),T[5]=K(1)||K(3),T[6]=K(9);for(let[ot,nt]of mt)T[ot]=K(nt);P[0][0]=X(0),P[0][1]=X(1),P[1][0]=X(2),P[1][1]=X(3)}let Zt=Array.from({length:E},()=>new Array(x).fill(!1));function rt(){Ws();for(let T of Zt)T.fill(!1);for(let T of J)T[0][0]=T[0][1]=T[1][0]=T[1][1]=0;let g=[];try{g=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{g=[]}g.filter(T=>T&&T.connected).sort((T,P)=>T.index-P.index).slice(0,E).forEach((T,P)=>yt(T,Zt[P],J[P])),Math.hypot(gn[0],gn[1])>0&&Math.hypot(J[0][0][0],J[0][0][1])<=xt&&(J[0][0][0]=gn[0],J[0][0][1]=gn[1]);for(let T=0;T<E;T++)for(let P=0;P<x;P++)Q[T][P]=tt[T][P],tt[T][P]=Zt[T][P]||T===0&&(B[P]||Ui[P]||Be[P]);Be.fill(!1)}let xt=.15;function Pt(g,T){let P=tt[T];if(!P)return[0,0];let[K,X]=J[T][g?1:0],ot=Math.hypot(K,X);if(ot>xt){let be=Math.min(1,(ot-xt)/(1-xt))/ot;return[K*be,X*be]}if(g)return[0,0];let nt=(P[1]?1:0)-(P[0]?1:0),Lt=(P[3]?1:0)-(P[2]?1:0),Gt=nt&&Lt?Math.SQRT1_2:1;return[nt*Gt,Lt*Gt]}let bt=0,gt=0,Bt=0,Nt=0,ee=0,D=0,ht=0,W=0,j=0,ut=null,pt=0,Ft=0,ce=-1,ge=-1,ne=[],Oe={0:19,2:20,1:21},Be=new Array(x).fill(!1),Ui=new Array(x).fill(!1),gn=[0,0],an=0,hi=null,ui=()=>{hi&&hi(ye?0:an)},Ms=g=>{B[g]=Be[g]=!0},We=()=>document.pointerLockElement===t,Ss="mouse";window.addEventListener("pointerdown",g=>{Ss=g.pointerType||"mouse"},!0);function In(g){let T=t.getBoundingClientRect();return[(g.clientX-T.left)/T.width*Qt,(g.clientY-T.top)/T.height*Qt]}function bs(){try{let g=t.requestPointerLock();g&&g.catch&&g.catch(()=>{})}catch{}}function Ws(){ht=Nt,W=ee,j=D,Nt=ee=D=0}function Xs(g){bt=[0,1,2].includes(g|0)?g|0:0,t.style.touchAction=bt?"none":"";for(let T of[19,20,21])B[T]=!1;ut=null,bt!==2&&We()&&document.exitPointerLock()}let Es=(g,T)=>ne.findIndex(P=>g>=P[0]&&g<P[0]+P[2]&&T>=P[1]&&T<P[1]+P[3]);t.addEventListener("contextmenu",g=>{bt&&g.preventDefault()}),t.addEventListener("mousedown",g=>{if(bt){if(We()||([gt,Bt]=In(g)),ye){let T=Es(gt,Bt);T>=0&&g.button===0&&(ge=T);return}if(bt===2&&!We()){bs();return}Oe[g.button]!==void 0&&Ms(Oe[g.button])}}),window.addEventListener("mouseup",g=>{Oe[g.button]!==void 0&&(B[Oe[g.button]]=!1)}),window.addEventListener("mousemove",g=>{if(bt){if(!We()&&([gt,Bt]=In(g),ye)){let T=Es(gt,Bt);T>=0&&(ce=T)}!ye&&(bt!==2||We())&&(Nt+=g.movementX||0,ee+=g.movementY||0)}}),t.addEventListener("wheel",g=>{bt&&(g.preventDefault(),D+=g.deltaMode===1?g.deltaY/3:g.deltaMode===2?g.deltaY:g.deltaY/100)},{passive:!1}),t.addEventListener("pointerdown",g=>{if(!(!bt||g.pointerType==="mouse"||ut!==null)){g.preventDefault(),ut=g.pointerId;try{t.setPointerCapture(g.pointerId)}catch{}if((bt===1||ye)&&([gt,Bt]=In(g)),pt=g.clientX,Ft=g.clientY,ye){let T=Es(gt,Bt);T>=0&&(ge=T);return}bt===1&&Ms(19)}}),t.addEventListener("pointermove",g=>{g.pointerId===ut&&(bt===1&&([gt,Bt]=In(g)),ye||(Nt+=g.clientX-pt,ee+=g.clientY-Ft),pt=g.clientX,Ft=g.clientY)});let qs=g=>{g.pointerId===ut&&(ut=null,B[19]=!1)};t.addEventListener("pointerup",qs),t.addEventListener("pointercancel",qs),document.addEventListener("pointerlockchange",()=>{!We()&&bt===2&&Yt&&!ye&&eo(!0)});let y=()=>tt.some((g,T)=>g[6]&&!Q[T][6]),U=0,V={get palette(){return w},set palette(g){w=g},pal(g,T){if(g===void 0){Y=Bs(),it=_s();return}Y[g&31]=(T??g)&31},palt(g,T=!0){if(g===void 0){it=_s();return}it[g&31]=T?1:0},bg(g){G=Y[(g|0)&31]},outline(g,T=!0){ct=g==null||g===!1?-1:(g|0)&31,_t=ct<0||T!==!1},cam_set_pos(g,T,P){m.splice(0,3,...Di(g,T,P))},cam_set_lookat(g,T,P){d.splice(0,3,...Di(g,T,P))},cam_set_fov(g){st=Math.max(.01,Math.min(.49,+g||.25))*360},clip(g,T,P,K){if(g===void 0)q=null;else{let[X,ot,nt,Lt]=qt(g,T,P,K);q=[Math.max(0,X),Math.max(0,ot),Math.min(Qt-1,nt),Math.min(Qt-1,Lt)]}Ut&&(jt(),ln()),Pn()},map_new(g,T,P,K=[0,0,0]){return S.push(al(g|0,T|0,P|0,Di(K))),S.length-1},map_set_pos(g,T,P,K){let X=wt(g);X.pos=Di(T,P,K),X._xfDirty=!0},map_set_angle(g,T,P,K){let X=wt(g);X.angle=Di(T,P,K),X._xfDirty=!0},map_set_origin(g,T,P,K){let X=wt(g),ot=Di(T,P,K);gs(X);let nt=new z(ot[0]-X.origin[0],ot[1]-X.origin[1],ot[2]-X.origin[2]).applyMatrix4(X._rot);X.pos=[X.pos[0]+nt.x,X.pos[1]+nt.y,X.pos[2]+nt.z],X.origin=ot,X._xfDirty=!0},map(g){let T=wt(g);hh(T),gs(T);let P=Ie("map");P.geometry=T.geometry,P.matrix.copy(T._m)},mget(g,T,P,K){return ms(wt(g),Math.floor(T),Math.floor(P),Math.floor(K))},mset(g,T,P,K,X){cl(wt(g),Math.floor(T),Math.floor(P),Math.floor(K),X|0)},msetw(g,T,P,K,X){let ot=wt(g),nt=It(ot,T,P,K);cl(ot,Math.floor(nt.x),Math.floor(nt.y),Math.floor(nt.z),X|0)},mray(g,T,P,K,X,ot,nt,Lt=100){return at(wt(g),+T||0,+P||0,+K||0,+X||0,+ot||0,+nt||0,+Lt||0)},mtow(g,T,P,K){let X=wt(g);return gs(X),ie.set(+T||0,+P||0,+K||0).applyMatrix4(X._m),[ie.x,ie.y,ie.z]},wtom(g,T,P,K){let X=It(wt(g),+T||0,+P||0,+K||0);return[X.x,X.y,X.z]},mgetw(g,T,P,K,X){let ot=wt(g),nt=It(ot,T,P,K);if(X===void 0){let Lt=Math.floor(nt.x),Gt=Math.floor(nt.y),be=Math.floor(nt.z);return[ms(ot,Lt,Gt,be),Lt,Gt,be]}return zt(ot,nt.x,nt.y,nt.z,+X)},vox(g,T,P,K,X=0,ot=0,nt=0,Lt=1,Gt=Lt,be=Lt){let Xe=g|0;if(Xe<0||Xe>=Os)throw new Error(`vox ${g} does not exist (models are 0-${Os-1})`);let ae=et[Xe];if(!ae)return;let Ee=Ie("vox");Ee.geometry=fh(ae),ph(ae,[+T||0,+P||0,+K||0],[+X||0,+ot||0,+nt||0],[+Lt,+Gt,+be],Ee.matrix)},cube(g,T,P,K=1,X=7){let ot=Ie("cube");ot.position.set(g,T,P),ot.scale.setScalar(K),ot.material.uniforms.uColor.value=X&31},sphere(g,T,P,K=.5,X=7){let ot=Ie("sphere");ot.position.set(g,T,P),ot.scale.setScalar(K),ot.material.uniforms.uColor.value=X&31},line3(g,T,P,K,X,ot,nt=7){let Lt=Ie("line"),Gt=Lt.geometry.attributes.position;Gt.array.set([g,T,P,K,X,ot]),Gt.needsUpdate=!0,Lt.material.uniforms.uColor.value=nt&31},print(g,T,P,K=7,X=null,ot=1,nt=ot){T===void 0&&(T=0,P=Rt),ot=Math.max(1,Math.round(+ot||1)),nt=Math.max(1,Math.round(+nt||ot));let Lt=X!=null&&X!==!1&&X>=0,Gt=ci(A,g,T|0,P|0,Xt(K),Lt?Xt(X):null,ot,nt);return Rt=(P|0)+10*nt*String(g).split(`
`).length,Gt},rect(g,T,P,K,X=7){let[ot,nt,Lt,Gt]=qt(g,T,P,K);A.fillStyle=Xt(X),A.fillRect(ot,nt,Lt-ot+1,1),A.fillRect(ot,Gt,Lt-ot+1,1),A.fillRect(ot,nt,1,Gt-nt+1),A.fillRect(Lt,nt,1,Gt-nt+1)},rectfill(g,T,P,K,X=7){let[ot,nt,Lt,Gt]=qt(g,T,P,K);A.fillStyle=Xt(X),A.fillRect(ot,nt,Lt-ot+1,Gt-nt+1)},printh(...g){s(g.map(String).join(" "))},sfx(g,T=-1,P=0,K=32){if(g===-1){k.stop(T);return}if(g===-2){k.release(T);return}let X=typeof g=="string"?g:M[g|0];if(typeof g=="string"&&!Kr(g))throw new Error("sfx: that string is not a sound from the Sfx tab");X&&k.play(X,T<4?T:-1,P,K)},music(g,T=0){if(g<0){k.musicStop(T);return}if((g|0)>=ks)throw new Error(`music ${g} does not exist (patterns are 0-${ks-1})`);k.music(()=>$,()=>L,g|0,T)},save(g){try{if(g==null)return localStorage.removeItem(Z),o(null),!0;let T=JSON.stringify(g);if(T.length>Dh)throw new Error(`save: data is too big (${T.length} characters, the limit is ${Dh})`);return localStorage.setItem(Z,T),o(T),!0}catch(T){if(T.message.startsWith("save:"))throw T;return!1}},load(){try{let g=localStorage.getItem(Z);return g===null?null:JSON.parse(g)}catch{return null}},btn(g,T=0){let P=tt[T|0];return!!(P&&P[g|0])},mouse_set_mode(g){Xs(g)},mouse_pos(){return[gt,Bt]},mouse_delta(){return[ht,W]},mouse_wheel(){return j},mouse_locked(){return We()},mouse_ray(){if(bt!==2)return At(gt,Bt);let g=Ct.length?Ct[0].rect:Ot;return At((g[0]+g[2]+1)/2,(g[1]+g[3]+1)/2)},stick(g=0,T=0){return Pt(g|0,T|0)},btnp(g,T=0){let P=tt[T|0];return!!(P&&P[g|0]&&!Q[T|0][g|0])},time(){return U/60},touch_set_mode(g){an=[0,1,2,3].includes(g|0)?g|0:0,ui()},freeze(g,T){$t=Math.max(0,Math.floor(+g||0)),Et=typeof T=="function"?T:null},t(){return U/60},rnd(g=1){return Array.isArray(g)?g[Math.floor(Math.random()*g.length)]:Math.random()*g},flr:Math.floor,ceil:Math.ceil,abs:Math.abs,sqrt:Math.sqrt,min:Math.min,max:Math.max,sgn(g){return g<0?-1:1},mid(g,T,P){return Math.max(Math.min(g,T),Math.min(Math.max(g,T),P))},sin(g){return Math.sin(g*mn)},cos(g){return Math.cos(g*mn)},atan2(g,T){return(Math.atan2(T,g)/mn+1)%1},dist(g,T){let P=nt=>Array.isArray(nt)?nt:nt&&typeof nt=="object"?"z"in nt?[nt.x,nt.y,nt.z]:[nt.x,nt.y]:[+nt],K=P(g),X=P(T),ot=0;for(let nt=0;nt<Math.max(K.length,X.length);nt++){let Lt=(+K[nt]||0)-(+X[nt]||0);ot+=Lt*Lt}return Math.sqrt(ot)},dir3(g=0,T=0){let P=Math.cos(T*mn);return[Math.sin(g*mn)*P,Math.sin(T*mn),Math.cos(g*mn)*P]},yaw_to(g,T){return(Math.atan2(+g||0,+T||0)/mn+1)%1},angdiff(g,T){return((T-g)%1+1.5)%1-.5},cam_orbit(g,T=0,P=0,K=8){let X=Di(g&&!Array.isArray(g)&&typeof g=="object"?[g.x,g.y,g.z]:g),ot=V.dir3(T,P);m.splice(0,3,X[0]-ot[0]*K,X[1]-ot[1]*K,X[2]-ot[2]*K),d.splice(0,3,...X)},textw(g,T=1){return xs(String(g))*Math.max(1,Math.round(+T||1))},printc(g,T,P=7,K=null,X=1,ot=X){let[nt,,Lt]=q||Ot;return V.print(g,nt+Math.floor((Lt-nt+1-V.textw(g,X))/2),T,P,K,X,ot)}},H=new z,F=new z;function at(g,T,P,K,X,ot,nt,Lt){let Gt=[0,0,0,0,0,0,0,0];if(!(X||ot||nt))return Gt;gs(g);let be=H.set(T,P,K).applyMatrix4(g._inv),Xe=F.set(X,ot,nt).transformDirection(g._inv),ae=[be.x,be.y,be.z],Ee=[Xe.x,Xe.y,Xe.z],Qe=[g.w,g.h,g.d],qe=0,je=Lt,Ye=-1;for(let kt=0;kt<3;kt++){if(Math.abs(Ee[kt])<1e-12){if(ae[kt]<0||ae[kt]>=Qe[kt])return Gt;continue}let pe=(0-ae[kt])/Ee[kt],yn=(Qe[kt]-ae[kt])/Ee[kt];if(pe>yn&&([pe,yn]=[yn,pe]),pe>qe&&(qe=pe,Ye=kt),yn<je&&(je=yn),qe>je)return Gt}let He=[0,0,0],Dn=[0,0,0],vn=[0,0,0],Zs=[0,0,0],tn=[0,0,0];for(let kt=0;kt<3;kt++){let pe=ae[kt]+Ee[kt]*qe;He[kt]=Math.min(Qe[kt]-1,Math.max(0,Math.floor(kt===Ye?pe+Math.sign(Ee[kt])*1e-7:pe))),Dn[kt]=Math.sign(Ee[kt]),Zs[kt]=Dn[kt]?Math.abs(1/Ee[kt]):1/0,vn[kt]=Dn[kt]>0?(He[kt]+1-ae[kt])/Ee[kt]:Dn[kt]<0?(He[kt]-ae[kt])/Ee[kt]:1/0}Ye>=0&&(tn[Ye]=-Dn[Ye]);let Yn=qe;for(;;){let kt=ms(g,He[0],He[1],He[2]);if(kt)return[kt,He[0],He[1],He[2],tn[0],tn[1],tn[2],Yn];let pe=vn[0]<vn[1]?vn[0]<vn[2]?0:2:vn[1]<vn[2]?1:2;if(Yn=vn[pe],Yn>je||(He[pe]+=Dn[pe],He[pe]<0||He[pe]>=Qe[pe]))return Gt;vn[pe]+=Zs[pe],tn[0]=tn[1]=tn[2]=0,tn[pe]=-Dn[pe]}}let dt=new Ve(90,1,.05,2e3),Mt=new z;function At(g,T){let P=null;for(let Lt=Ct.length-1;Lt>=0&&!P;Lt--){let Gt=Ct[Lt].rect;g>=Gt[0]&&g<Gt[2]+1&&T>=Gt[1]&&T<Gt[3]+1&&(P=Ct[Lt])}P||(P={rect:q||Ot,pos:m,look:d,fov:st});let[K,X,ot,nt]=P.rect;return Dt(dt,P),dt.updateMatrixWorld(),Mt.set((g-K)/(ot-K+1)*2-1,1-(T-X)/(nt-X+1)*2,.5).unproject(dt).sub(dt.position).normalize(),[P.pos[0],P.pos[1],P.pos[2],Mt.x,Mt.y,Mt.z]}function Dt(g,T){let P=T.rect[2]-T.rect[0]+1,K=T.rect[3]-T.rect[1]+1;g.position.set(...T.pos),g.lookAt(...T.look),g.aspect=P/K,g.fov=P>K?2*Math.atan(Math.tan(T.fov*Math.PI/360)*K/P)*180/Math.PI:T.fov,g.updateProjectionMatrix()}function zt(g,T,P,K,X){let ot=null,nt=-1,Lt=Math.floor(T-X),Gt=Math.floor(T+X),be=Math.floor(P-X),Xe=Math.floor(P+X),ae=Math.floor(K-X),Ee=Math.floor(K+X);for(let qe=ae;qe<=Ee;qe++)for(let je=be;je<=Xe;je++)for(let Ye=Lt;Ye<=Gt;Ye++){let He=ms(g,Ye,je,qe);if(!He)continue;let Dn=Math.max(Ye,Math.min(T,Ye+1)),vn=Math.max(je,Math.min(P,je+1)),Zs=Math.max(qe,Math.min(K,qe+1)),tn=T-Dn,Yn=P-vn,kt=K-Zs,pe=Math.hypot(tn,Yn,kt);if(pe>=X)continue;let yn;if(pe>1e-6)yn=X-pe,tn/=pe,Yn/=pe,kt/=pe;else{let $s=[[T-Ye,-1,0,0],[Ye+1-T,1,0,0],[P-je,0,-1,0],[je+1-P,0,1,0],[K-qe,0,0,-1],[qe+1-K,0,0,1]].reduce((Rl,Cl)=>Cl[0]<Rl[0]?Cl:Rl);yn=X+$s[0],tn=$s[1],Yn=$s[2],kt=$s[3]}yn>nt&&(nt=yn,ot=[He,Ye,je,qe,tn,Yn,kt,yn])}if(!ot)return[0,0,0,0,0,0,0,0];let Qe=new z(ot[4],ot[5],ot[6]).applyMatrix4(g._rot);return ot[4]=Qe.x,ot[5]=Qe.y,ot[6]=Qe.z,ot}let vt={},Yt=!1,oe=0,he=0,Ae=0,$t=0,Et=null;function ln(){lt={i:St.length,rect:q||Ot,n:0},St.push(lt)}function jt(){lt&&(lt.pos=[...m],lt.look=[...d],lt.fov=st,lt.bg=G)}let Le=!1;function Pn(){Le&&(A.restore(),Le=!1),q&&(A.save(),A.beginPath(),A.rect(q[0],q[1],q[2]-q[0]+1,q[3]-q[1]+1),A.clip(),Le=!0)}function De(){for(let g in N)N[g]=0;Le&&(A.restore(),Le=!1),A.clearRect(0,0,Qt,Qt),Pn(),Rt=0,Ht=0,te=!1,St=[],ln(),Ut=!0}function _n(g,T,P,K,X){g?(g.viewport.set(T,P,K,X),g.scissor.set(T,P,K,X),g.scissorTest=!0):(l.setViewport(T,P,K,X),l.setScissor(T,P,K,X),l.setScissorTest(!0))}function ue(){Ut=!1,jt();for(let P in le)for(let K=N[P];K<le[P].length;K++)le[P][K].visible=!1;hl(b,w);let g=St.filter(P=>P.n>0);g.length||(g=[{i:-1,rect:Ot,pos:[...m],look:[...d],fov:st,bg:G}]);let T=Qt*f;(g.length>1||g[0].rect!==Ot)&&(l.setRenderTarget(null),_n(null,0,0,T,T),l.setClearColor(w[G]??0,1),l.clear());for(let P of g)cn(P,g.length>1);for(let P of[_,...v||[]])P.viewport.set(0,0,T,T),P.scissor.set(0,0,T,T),P.scissorTest=!1;l.setRenderTarget(null),l.setViewport(0,0,T,T),l.setScissorTest(!1),Ct=g.map(P=>({rect:P.rect,pos:P.pos,look:P.look,fov:P.fov}))}function cn(g,T){let[P,K,X,ot]=g.rect,nt=P*f,Lt=(Qt-1-ot)*f,Gt=(X-P+1)*f,be=(ot-K+1)*f;if(T)for(let Ee in le)for(let Qe=0;Qe<N[Ee];Qe++)le[Ee][Qe].visible=le[Ee][Qe].userData.view===g.i;Dt(p,g),_n(_,nt,Lt,Gt,be),l.setRenderTarget(_),l.setClearColor(w[g.bg]??0,1),l.clear(),l.render(u,p);let Xe=I.uniforms;if(Xe.uAny.value=te?1:0,Xe.uRect.value.set(nt,Lt,nt+Gt-1,Lt+be-1),f===1||!te){Xe.uMode.value=0,l.setRenderTarget(null),_n(null,nt,Lt,Gt,be),l.render(I.scene,I.camera);return}let ae=R;ae.grow.uRect.value.set(nt,Lt,nt+Gt-1,Lt+be-1),Xe.uMode.value=1;for(let Ee of v)_n(Ee,nt,Lt,Gt,be);l.setRenderTarget(v[0]),l.render(I.scene,I.camera),ae.grow.uR.value=f-1,ae.grow.tMask.value=v[0].texture,ae.grow.uDir.value.set(1,0),l.setRenderTarget(v[1]),l.render(ae.growScene,ae.camera),ae.grow.tMask.value=v[1].texture,ae.grow.uDir.value.set(0,1),l.setRenderTarget(v[0]),l.render(ae.growScene,ae.camera),ae.paint.tColor.value=_.textures[0],ae.paint.tInfo.value=_.textures[1],ae.paint.tDepth.value=_.depthTexture,ae.paint.tMask.value=v[0].texture,l.setRenderTarget(null),_n(null,nt,Lt,Gt,be),l.render(ae.paintScene,ae.camera)}function xn(g){try{return g(),!0}catch(T){return Ys(),n(T),!1}}let _e=["Resume","Restart","Screenshot"];a&&_e.push("Capture cover"),c&&_e.push("Resolution");let ye=!1,Se=0,Ln="",jr=0,El=0,di=document.createElement("canvas");di.width=di.height=Qt,di.style.cssText="position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;display:none",t.after(di);let to=di.getContext("2d");function eo(g){ye=g,ui(),ce=ge=-1;for(let T of[19,20,21])B[T]=!1;di.style.display=g?"block":"none",g?(Se=0,Ln="",El=0,k.suspend(),We()&&document.exitPointerLock()):(to.clearRect(0,0,Qt,Qt),k.resume(),bt===2&&Ss==="mouse"&&bs())}function kh(){let g=to;g.clearRect(0,0,Qt,Qt),g.fillStyle="rgba(0, 0, 0, 0.45)",g.fillRect(0,0,Qt,Qt);let T=156,P=26+_e.length*14,K=Qt-T>>1,X=Qt-P>>1;g.fillStyle=li(Xn[0]),g.fillRect(K,X,T,P),g.fillStyle=li(Xn[7]),g.fillRect(K,X,T,1),g.fillRect(K,X+P-1,T,1),g.fillRect(K,X,1,P),g.fillRect(K+T-1,X,1,P),ci(g,"Paused",K+(T-xs("Paused")>>1),X+4,li(Xn[6])),ne=_e.map((ot,nt)=>[K+4,X+19+nt*14,T-8,14]),_e.forEach((ot,nt)=>{let Lt=nt===Se,Gt=ot==="Resolution"?`Resolution < ${f}x >`:ot;ci(g,(Lt?"> ":"  ")+Gt,K+8,X+20+nt*14,li(Xn[Lt?10:7]))}),Ln&&performance.now()<jr&&ci(g,Ln,Qt-xs(Ln)>>1,X+P+6,li(Xn[11]),li(Xn[0]))}function Vh(){let g=Qt*f,T=document.createElement("canvas");T.width=T.height=g;let P=T.getContext("2d");P.imageSmoothingEnabled=!1,P.drawImage(i,0,0,g,g),P.drawImage(t,0,0,g,g);let K=new Date().toISOString().slice(0,19).replace(/[-:]/g,"").replace("T","_"),X=`${Uh(e.name)}_${K}.png`;T.toBlob(ot=>{if(!ot)return;let nt=document.createElement("a");nt.href=URL.createObjectURL(ot),nt.download=X,document.body.append(nt),nt.click(),nt.remove(),setTimeout(()=>URL.revokeObjectURL(nt.href),2e3)},"image/png"),Ln="Screenshot saved",jr=performance.now()+1500,s("screenshot saved: "+X)}function Hh(){let g=document.createElement("canvas");g.width=g.height=Qt;let T=g.getContext("2d");T.imageSmoothingEnabled=!1,T.drawImage(i,0,0,Qt,Qt),T.drawImage(t,0,0),a(g.toDataURL("image/png")),Ln="Cover captured",jr=performance.now()+1500}function Gh(){let g=T=>tt.some((P,K)=>P[T]&&!Q[K][T]);if(!(++El<15)){if(ce>=0&&(Se=ce,ce=-1),ge>=0)return Se=ge,ge=-1,wl(_e[Se]);g(2)&&(Se=(Se+_e.length-1)%_e.length),g(3)&&(Se=(Se+1)%_e.length),_e[Se]==="Resolution"&&(g(0)||g(1))&&Tl(g(1)?1:-1),(g(4)||g(5)||g(6))&&wl(g(6)?"Resume":_e[Se])}}function wl(g){g==="Resume"?eo(!1):g==="Restart"?(Ys(),r()):g==="Screenshot"?Vh():g==="Capture cover"?Hh():g==="Resolution"&&Tl(1)}function Tl(g){C((f-1+g+3)%3+1),A.clearRect(0,0,Qt,Qt),De(),!(vt._draw&&!xn(vt._draw))&&ue()}function Al(g){if(!Yt)return;Ae+=Math.min(g-he,100),he=g;let T=0;for(;Ae>=Lh&&T<4;){if(Ae-=Lh,T++,rt(),ye){if(Gh(),!Yt)return;continue}if(y()){eo(!0);continue}if(U++,$t>0){let P=Et;if($t--,$t===0&&Et===P&&(Et=null),P&&!xn(P))return}else if(vt._update&&!xn(vt._update))return}if(T>0)if(ye)kh();else{if(De(),vt._draw&&!xn(vt._draw))return;ue()}oe=requestAnimationFrame(Al)}function Wh(g){return vt=g||{},De(),ue(),vt._init&&!xn(vt._init)?!1:(Yt=!0,he=performance.now(),oe=requestAnimationFrame(Al),!0)}function Ys(){Yt=!1,cancelAnimationFrame(oe),k.stop(),k.musicStop(),We()&&document.exitPointerLock()}function Xh(){Ys();for(let g of S)g.geometry&&g.geometry.dispose();S.splice(0,S.length,...gl(e)),w=Array.isArray(e.palette)&&e.palette.length===ai?[...e.palette]:[...Xn],Y=Bs(),it=_s(),G=0,ct=-1,_t=!0,Rt=0,m.splice(0,3,0,6,-10),d.splice(0,3,0,0,0),st=90,q=null,Ct=[],U=0,Ae=0,$t=0,Et=null,an=0,gn[0]=gn[1]=0,ui(),Xs(0),Nt=ee=D=ht=W=j=0;for(let g of[B,Ui,Be])g.fill(!1);for(let g of tt)g.fill(!1);for(let g of Q)g.fill(!1);ye=!1,ce=ge=-1,di.style.display="none",to.clearRect(0,0,Qt,Qt),k.resume(),A.clearRect(0,0,Qt,Qt)}function qh(g,T){gn[0]=+g||0,gn[1]=+T||0}function Yh(g,T){Ui[g]=!!T,T&&(Be[g]=!0)}let Ni=!1;try{Ni=localStorage.getItem("blocky3d.mute")==="1"}catch{}k.setMuted(Ni);function Zh(g){Ni=!!g,k.setMuted(Ni);try{localStorage.setItem("blocky3d.mute",Ni?"1":"0")}catch{}}function $h(g,T){T&&k.unlock();let P=p0[g.code];P!==void 0&&(B[P]=T,T&&(Be[P]=!0),g.preventDefault())}return{api:V,start:Wh,stop:Ys,reset:Xh,key:$h,maps:S,renderer:l,unlockAudio:()=>k.unlock(),setButton:Yh,setStick:qh,setMuted:Zh,set onTouchMode(g){hi=g,ui()},get touchMode(){return ye?0:an},get muted(){return Ni},get paused(){return ye},get scale(){return f},setScale:C}}var m0=`
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
`,Vs=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Hs={pause:Vs('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>'),sound:Vs('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),muted:Vs('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>'),full:Vs('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),exitFull:Vs('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>')};function vl(i=document){let t=i.createElement("style");t.id="b3d-style",t.textContent=m0,i.head.prepend(t);let e=i.createElement("div");return e.id="b3d-shell",e.innerHTML=`
  <div id="screen">
    <canvas id="gl" width="256" height="256"></canvas>
    <canvas id="ui" width="256" height="256"></canvas>
  </div>
  <div class="b3d-sys">
    <button class="b3d-pause" title="Pause (Enter)" aria-label="Pause">${Hs.pause}</button>
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
  </div>`,i.body.prepend(e),{canvas:i.getElementById("gl"),overlay:i.getElementById("ui")}}function yl(i,t=document){let e=t.getElementById("b3d-shell");if(!e)return;let n=t.defaultView,s=t.documentElement,r=I=>e.querySelector(I),o=()=>s.classList.add("b3d-touch"),a=n.matchMedia("(pointer: coarse)");a.matches&&o(),a.addEventListener&&a.addEventListener("change",()=>{a.matches&&o()}),n.addEventListener("pointerdown",I=>{(I.pointerType==="touch"||I.pointerType==="pen")&&o()},!0),n.focus(),n.addEventListener("pointerdown",()=>n.focus());let l=r(".b3d-dpad"),c=[".l",".r",".u",".d"].map(I=>l.querySelector(I)),h=new Map,f=0,u=()=>{let I=[!1,!1,!1,!1],R=l.getBoundingClientRect(),C=0,O=0;for(let[S,M]of h.values()){let L=(S-R.left)/R.width*2-1,$=(M-R.top)/R.height*2-1;if(f===1){let k=Math.hypot(L,$)/.9,Z=k>1?1/k:1;C=L/.9*Z,O=$/.9*Z,C<-.5&&(I[0]=!0),C>.5&&(I[1]=!0),O<-.5&&(I[2]=!0),O>.5&&(I[3]=!0)}else if(f===2)Math.abs(L)>.06&&(I[L<0?0:1]=!0);else if(f===3)Math.abs($)>.06&&(I[$<0?2:3]=!0);else{if(Math.hypot(L,$)<.2)continue;let k=Math.abs(L),Z=Math.abs($);k>Z*.42&&(I[L<0?0:1]=!0),Z>k*.42&&(I[$<0?2:3]=!0)}}I.forEach((S,M)=>{i.setButton(M,S),c[M].classList.toggle("on",S)}),i.setStick&&i.setStick(C,O),l.style.setProperty("--kx",C),l.style.setProperty("--ky",O),l.classList.toggle("on",f===1&&h.size>0)},p=I=>{I!==f&&(f=I,l.dataset.mode=String(I),u())};i.onTouchMode=p,l.addEventListener("pointerdown",I=>{I.preventDefault();try{l.setPointerCapture(I.pointerId)}catch{}h.set(I.pointerId,[I.clientX,I.clientY]),u()}),l.addEventListener("pointermove",I=>{h.has(I.pointerId)&&(h.set(I.pointerId,[I.clientX,I.clientY]),u())});for(let I of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(I,R=>{h.delete(R.pointerId)&&u()});[[".o",4],[".x",5]].forEach(([I,R])=>{let C=r(".b3d-ab "+I),O=S=>{i.setButton(R,S),C.classList.toggle("on",S)};C.addEventListener("pointerdown",S=>{S.preventDefault();try{C.setPointerCapture(S.pointerId)}catch{}O(!0)});for(let S of["pointerup","pointercancel","lostpointercapture"])C.addEventListener(S,()=>O(!1))}),e.addEventListener("contextmenu",I=>{I.target.closest("#screen")||I.preventDefault()});let _=(I,R)=>{let C=r(I),O=-1e9,S=()=>{let M=performance.now();M-O<500||(O=M,R(),C.blur())};return C.addEventListener("mousedown",M=>M.preventDefault()),C.addEventListener("pointerdown",M=>{M.pointerType!=="mouse"&&M.preventDefault()}),C.addEventListener("pointerup",M=>{M.pointerType!=="mouse"&&S()}),C.addEventListener("click",S),C};_(".b3d-pause",()=>{i.setButton(6,!0),i.setButton(6,!1)});let v=_(".b3d-mute",()=>{i.setMuted(!i.muted),m()}),m=()=>{v.innerHTML=i.muted?Hs.muted:Hs.sound,v.title=i.muted?"Unmute":"Mute",v.classList.toggle("on",i.muted)};m();let d=()=>t.fullscreenElement||t.webkitFullscreenElement,A=_(".b3d-full",()=>{try{let I=d()?(t.exitFullscreen||t.webkitExitFullscreen).call(t):(s.requestFullscreen||s.webkitRequestFullscreen).call(s);I&&I.catch&&I.catch(()=>{})}catch{}}),w=()=>{A.innerHTML=d()?Hs.exitFull:Hs.full,A.title=d()?"Exit fullscreen":"Fullscreen"},b=n.matchMedia("(display-mode: fullscreen)").matches||n.navigator.standalone===!0;A.hidden=b||!(t.fullscreenEnabled||t.webkitFullscreenEnabled),t.addEventListener("fullscreenchange",w),t.addEventListener("webkitfullscreenchange",w),w()}var on=null,ys=null,Gs=null,Fh=null;function Oh(i,{canvas:t,overlay:e,onError:n=Qr,onLog:s=console.log,onRestart:r=Bh,onSave:o,onCover:a,wire:l=!0}={}){return t||({canvas:t,overlay:e}=vl()),ys=e,Fh=n,on=Nh({canvas:t,overlay:e,cart:i,onError:n,onLog:s,onRestart:r,onSave:o,onCover:a}),Object.defineProperties(window,Object.getOwnPropertyDescriptors(on.api)),window.addEventListener("keydown",c=>on.key(c,!0)),window.addEventListener("keyup",c=>on.key(c,!1)),window.addEventListener("pointerdown",()=>on.unlockAudio()),l&&yl(on),on}function g0(i,t){let e=vl(),n=e.overlay.getContext("2d"),s=null,r=!1,o={setButton(u,p){s?s.setButton(u,p):p&&u!==6&&f()},setStick(u,p){s&&s.setStick(u,p)},onTouchMode:null,get muted(){if(s)return s.muted;try{return localStorage.getItem("blocky3d.mute")==="1"}catch{return!1}},setMuted(u){if(s)s.setMuted(u);else try{localStorage.setItem("blocky3d.mute",u?"1":"0")}catch{}}};yl(o);let a=u=>{n.imageSmoothingEnabled=!1,u?n.drawImage(u,0,0,256,256):(n.fillStyle="#1d2b53",n.fillRect(0,0,256,256),wh(n,i.name,"#fff1e8","#000000",56,88)),n.fillStyle="rgba(0, 0, 0, 0.6)",n.beginPath(),n.arc(128,128,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff1e8",n.beginPath(),n.moveTo(120,115),n.lineTo(120,141),n.lineTo(141,128),n.closePath(),n.fill()};if(typeof i.cover=="string"&&i.cover.startsWith("data:image/")){let u=new Image;u.onload=()=>{r||a(u)},u.onerror=()=>{r||a(null)},u.src=i.cover}else a(null);e.overlay.style.cursor="pointer";let l=u=>{u.ctrlKey||u.metaKey||u.altKey||/^(Tab|Escape|Shift|Control|Alt|Meta|F\d+)$/.test(u.key)||(u.preventDefault(),f())},c=()=>f();e.overlay.addEventListener("click",c),window.addEventListener("keydown",l);let h=()=>{if(r)return;let u=navigator.getGamepads?navigator.getGamepads():[];for(let p of u)if(p&&[0,1,2,3,9].some(_=>p.buttons[_]&&p.buttons[_].pressed))return f();requestAnimationFrame(h)};requestAnimationFrame(h);function f(){if(!r){r=!0,e.overlay.removeEventListener("click",c),window.removeEventListener("keydown",l),e.overlay.style.cursor="",n.clearRect(0,0,256,256);try{s=Oh(i,{...e,wire:!1})}catch(u){Qr(u);return}s.onTouchMode=o.onTouchMode,s.unlockAudio(),Sl(t)}}}var Ml='({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null })';function _0(i){return"(function () {"+String(i||"")+`
;return `+Ml+`;
})`}function Sl(i){Gs=typeof i=="function"?i:null;let t;try{t=Gs?Gs():i||(0,eval)(Ml)}catch(e){return Fh(e),!1}return on.start(t)}function Bh(){if(!Gs){location.reload();return}on.reset(),Sl(Gs)}function x0(){on&&on.stop()}function Qr(i){if(console.error(i),on&&on.stop(),!ys)return;ys.width!==256&&(ys.width=ys.height=256);let t=ys.getContext("2d"),e=("Error: "+String(i&&i.message||i)).split(/\s+/),n=[""];for(let s of e){let r=n[n.length-1];r&&xs(r+" "+s)>248?n.push(s):n[n.length-1]=r?r+" "+s:s}ci(t,n.join(`
`),4,4,"#ff004d","#000000")}function v0(){window.addEventListener("error",i=>Qr(i.error||i.message))}var zh="0.1.0-alpha";window.Blocky3D={...bl,VERSION:zh};})();
// ---------------------------------------------------------------- cart data
Blocky3D.catchGlobalErrors();
// the page shows the cover and a play button; the game starts on a click, tap or key press
Blocky3D.play({"version":1,"vox":[{"name":"hero","pivot":[4,0,4],"data":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFBQUFBQAABQUFBQUFAAAFBQUFBQUAAAAVFRUVAAAAAAICAgIAAAAAAgICAgAAABAFBQUFEAAACwsLCwsLAAAQEBAQEBAAAAUQEBAQBQAABQUFBQUFAAAAFRUVFQAAAAACAgICAAAAAAICAgIAAAAQBQUFBRAAAAsLCwsLCwAAEBAQEBAQAAAQEBAQEBAAAAUFBQUFBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAEAEQEAEQAAAFBQUFBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},{"name":"hero step a","pivot":[4,0,4],"data":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFRUAAAAAAAACAgAAAAAAAAICAAAAEAAAAAAAAAALAAAAAAAAAAUFBQUFBQAABQUFBQUFAAAFBQUFBQUAAAAAABUVAAAAAAAAAgIAAAAAAAACAgAAABAFBQUFAAAACwsLCwsAAAAQEBAQEBAAAAUQEBAQBQAABQUFBQUFAAAAFRUAAAAAAAACAgAAAAAAAAICAAAAAAAABQUFBRAAAAALCwsLCwAAEBAQEBAQAAAQEBAQEBAAAAUFBQUFBQAAABUVAAAAAAAAAgIAAAAAAAACAgAAAAAAAAAAAAAQAAAAAAAAAAsAABAQEBAQEAAAEAEQEAEQAAAFBQUFBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},{"name":"hero step b","pivot":[4,0,4],"data":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUVAAAAAAAAAgIAAAAAAAACAgAAAAAAAAAAAAAQAAAAAAAAAAsAAAUFBQUFBQAABQUFBQUFAAAFBQUFBQUAAAAVFQAAAAAAAAICAAAAAAAAAgIAAAAAAAAFBQUFEAAAAAsLCwsLAAAQEBAQEBAAAAUQEBAQBQAABQUFBQUFAAAAAAAVFQAAAAAAAAICAAAAAAAAAgIAAAAQBQUFBQAAAAsLCwsLAAAAEBAQEBAQAAAQEBAQEBAAAAUFBQUFBQAAAAAAFRUAAAAAAAACAgAAAAAAAAICAAAAEAAAAAAAAAALAAAAAAAAABAQEBAQEAAAEAEQEAEQAAAFBQUFBQUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},{"name":"star","pivot":[3.5,0,3.5],"data":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgsAAAsKAAAACwsLCwAAAAAKCwsKAAAKCwsLCwsLCgoKCgsLCgoKAAAACwsAAAAAAAAKCgAAAAAAAAAAAAAAAAoLAAALCgAAAAsLCwsAAAAACgsLCgAACgsLCwsLCwoKCgoLCwoKCgAAAAsLAAAAAAAACgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="}],"sfx":["030000163501d351223412632518000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","040000240602b060300503004518000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","0500001e35318343123330c32518000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","07000024560285602b560305602b550305623055230535180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000180001800018000","1000000c0500c0350c0500c03518050180350c0500c0350f0500f0350f0500f0351b0501b0350f0500f0350a0500a0350a0500a03516050160350a0500a0350705007035070500703513050130350a0500a035","1000001f4301f4301f4321f4151b4301b4301b4321b4151d4301d4301d4321d4151f4301f4301f4321f415224302243022432224151f4301f4301f4321f4151d4301d4301d4321d4151b4301b4301b4321b415","10000024430244302443224415224302243022432224151f4301f4301f4321f415224302243022432224151f4301f4301f4321f4151d4301d4301d4321d4151b4301b4301b4321b41518430184301843218415","1000000e663000003c6250000028645000003c625000000e663000003c6250000028645000003c625000000e663000003c6250000028645000003c625000000e663000003c6250000028645000003c62500000","100000185271b5271f52722527185271b5271f52722527185271b5271f52722527185271b5271f52722527165271b5271d52722527165271b5271d52722527165271b5271d52722527165271b5271d52722527"],"music":["104050740","204060708"],"name":"third person","tiles":[null,{"top":[3,3,3,11,11,11,11,27,3,27,11,3,3,27,27,11,27,11,11,11,3,11,11,27,11,11,11,11,11,3,11,11,11,3,11,3,11,11,27,11,11,27,11,11,27,3,11,3,11,27,3,3,27,27,11,3,11,11,11,3,11,11,3,11],"side":[11,11,11,11,11,11,11,11,4,11,11,4,11,11,4,11,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"bottom":[4,4,20,20,20,20,4,20,4,20,4,4,4,20,4,4,4,20,4,4,4,4,20,20,20,4,20,4,4,4,20,20,20,4,4,20,4,4,20,20,4,20,4,20,20,4,4,4,4,20,20,20,4,4,4,4,20,4,4,4,4,20,4,4]},{"top":[4,4,4,20,4,20,20,20,20,22,20,4,4,20,4,20,4,20,20,22,4,4,4,22,22,22,4,4,22,22,4,20,4,22,20,22,4,22,20,4,22,4,4,4,20,4,20,4,4,4,22,22,4,4,4,4,20,4,4,22,20,4,4,4],"side":[4,4,20,4,22,4,22,4,22,4,22,20,4,22,4,22,4,4,4,20,4,4,4,4,20,22,4,22,4,20,4,22,20,4,22,22,20,4,4,20,20,4,20,22,4,4,22,20,20,20,22,4,4,22,4,4,4,20,20,4,4,4,22,4],"bottom":[22,4,4,22,4,4,20,22,4,4,20,22,4,20,22,22,20,4,4,4,4,4,22,20,4,4,4,22,20,4,22,4,22,4,4,22,22,22,4,4,4,4,4,20,22,22,4,4,4,4,20,4,4,22,22,4,4,22,4,4,22,4,4,4]},{"top":[5,13,5,13,5,6,5,13,5,5,5,5,5,13,13,5,13,13,5,5,5,13,5,5,5,6,5,5,13,13,5,5,6,13,5,13,5,13,6,5,13,6,13,13,5,5,5,5,13,6,5,13,5,5,5,5,13,13,13,13,6,5,5,6],"side":[13,13,6,13,13,5,13,5,5,5,5,5,13,13,5,13,5,6,13,5,5,5,5,5,6,6,13,5,5,13,13,13,5,5,5,5,5,13,5,5,6,5,5,5,13,5,6,6,13,6,5,5,5,5,5,6,6,5,6,6,5,13,5,5],"bottom":[5,13,6,5,13,5,13,13,13,13,6,5,6,13,13,5,5,5,5,5,13,5,13,5,5,5,5,13,6,6,5,5,6,13,5,5,6,5,5,5,5,6,5,13,5,13,5,5,5,5,13,5,5,5,5,13,5,13,13,6,6,13,5,13]},{"top":[4,4,4,4,4,4,4,4,4,10,10,10,9,9,9,4,4,10,9,9,9,9,9,4,4,10,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,4,4,4,4,4,4,4],"side":[4,4,4,4,4,4,4,4,4,10,10,10,9,9,9,4,4,10,9,9,9,9,9,4,4,10,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,4,4,4,4,4,4,4],"bottom":[4,4,4,4,4,4,4,4,4,10,10,10,9,9,9,4,4,10,9,9,9,9,9,4,4,10,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,9,9,9,9,9,9,4,4,4,4,4,4,4,4,4]},{"top":[2,2,2,2,2,2,2,2,2,7,7,7,14,14,14,2,2,7,14,14,14,14,14,2,2,7,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,2,2,2,2,2,2,2],"side":[2,2,2,2,2,2,2,2,2,7,7,7,14,14,14,2,2,7,14,14,14,14,14,2,2,7,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,2,2,2,2,2,2,2],"bottom":[2,2,2,2,2,2,2,2,2,7,7,7,14,14,14,2,2,7,14,14,14,14,14,2,2,7,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,14,14,14,14,14,14,2,2,2,2,2,2,2,2,2]},{"top":[1,1,1,1,1,1,1,1,1,6,6,6,12,12,12,1,1,6,12,12,12,12,12,1,1,6,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,1,1,1,1,1,1,1],"side":[1,1,1,1,1,1,1,1,1,6,6,6,12,12,12,1,1,6,12,12,12,12,12,1,1,6,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,1,1,1,1,1,1,1],"bottom":[1,1,1,1,1,1,1,1,1,6,6,6,12,12,12,1,1,6,12,12,12,12,12,1,1,6,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,12,12,12,12,12,12,1,1,1,1,1,1,1,1,1]}],"maps":[{"name":"islands","w":40,"h":12,"d":28,"origin":[20,0,6],"data":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgAAAAAAAAAAAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwAAAAAAAAAAAAADAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgIAAAAAAAAAAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwAAAAAAAAAAAAADAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAgIAAAAAAAAAAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgAAAAAAAAAAAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAAAAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDAAAAAAAAAAAAAAADAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAAAAAAAAAAAAACAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAACAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDAAAAAAAAAAAAAAADAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAAAAAAAAAAAAACAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAACAgICAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAAAAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAQEBAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAgICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},{"name":"sliding platform","w":3,"h":1,"d":3,"origin":[1.5,1,1.5],"data":"BAQEBAQEBAQE"},{"name":"turning bridge","w":9,"h":1,"d":2,"origin":[4.5,1,1],"data":"BQUFBQUFBQUFBQUFBQUFBQUF"},{"name":"elevator","w":3,"h":1,"d":3,"origin":[1.5,1,1.5],"data":"BgYGBgYGBgYG"}],"cover":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAQAElEQVR4AezdTah13ZYX9n0PSSOQsjppJKmSNDRUCqHsyJukkQ+4jVAEk9THjaZh0kgwjYRqJEXiFaJowDKhWoWBEJJAcglRblVdpSxsFfjREC+CWFBqoTbEEkREKEuw+bp+6zn//Y4zn7XWXmvvtb/OmQ/P/4wxx9ccc6w55lp7n33OefnBn/vyy45eg74HPuYeeDn0f70CvQIftgL9APiwl74vvFfgcOgHQN8FvQIftAKW3Q8AVejoFfigFegHwAe98H3ZvQIq0A8AVejoFfigFegHwAe98H3ZH7sCWX0/AFKJTnsFPmAF+gHwAS96X3KvQCrQD4BUotNegQ9YgX4AfMCL3pf8sStQV388AP76j33tcA/UZC7h1+R+Sfxr+94r/zXzrrG5dn16/OtU4HgAXCd8j9or0CvwyBXoB8AjX52eW6/AlSsweQB8+et//3Au5vKt8eZs9pLfcq69cq5x7pV/nXcNX3OuLxOqvPOPVYE2m8kDoDXq416BXoH3WYF+ALzP69pX1SuwqgKTB8DXvvdfPkyhRpzSk1WbNXx9dJzj5+JU+2ojj6DK5/ga5xL+kvhzvveSp35LtL5MmMtzr3peEqf6XiPPufhVvpWveW71nbOvMcNPHgBRdtor0CvwfiowtZJ+AExVpct6BT5IBY4HwA/+3JeHKaypw5Qf2ZxvfXSc46tvfaSp8sqviVPt5/gap9pUeeWrTc2z8tWm+s7x1f4Z+b3WviZOrc+aetaYlV8TZ2v8rTGr/a1yOx4AdfLO9wr0CnyMCvQD4GNc577KD16BueXf5QBYemc5uvq4NZd8lccPrfJL+JqDuFOoNnNzVZupGK1sLs4t5TXnOb7mPZdb9a32c3y1n4tZ5dX+kphr4szFr/lUfmvMal/jzPFz+VT5qZh3OQDmFtTlvQK9AretQD8AblvvPluvwENV4O4HgO8WBFsrEz90q+8a+/ooNWe/xmbOV97BnM295HVdc3zNLetAq7zy9XF0jq/2a/ia25z9Vpu53Kp8bq41cjUK1tivsUk8tLVfGt/9AFhKrut6BXoFrluBfgBct749eq/AQ1fgqQ+AuQ9LzFV8q32N49FqC6rvHH9JPnMxryFfs+4189ZH8TX8mpjVZk2e1ab6Vn5Nbpe8HHik6/7UB0C9aJ3vFegV+LwCpyT9ADhVoa7vFXjHFXg3B8DcI9mc/JbXtD5S1nzm+Fvmdu25Lln7msf1vfKfuxZz8rquuRyqzVycKq/2czH3lr+bA2DvwvR4vQIfoQL9APgIV7mv8UNWYM2iNx0AlzyibPW9xL76Vn5NQbbaz8Wce3yt8dfwc/GvIa/5XBL/krWvmXevPOtcNeYavvrW9Va+2lwScy5Olc/xdd4pm00HwFSALusV6BV43gr0A+B5r13P/EEqUL+vX/lL0tsrzqkcTh4A9ZFmjp+bZM6+yqtvlc/xW+33ilPn3crP5bBVvnXeNfZrclgTZ85mTfw5mxpzzqbKq/0avvq2/NH/1774xKKPgiGj2Xxfda2+HQ9m4/+TB8Bo1b/0CryDCtS76in+kGZ/0HXLf4/U+gGwRxV7jIeugGaBsallmuZuadUN/Ld/Yvjy/d89HP2G4SgbqP/hUSCDKZ4M6GGKJwN6mOPp5DSuaRyc/6UfAOfXrns+cAU0R6BZRjT5TjVYlcWcLCBreTJo5caRo0AGUzwZ0MMUfxgOpG//6OvLEgYXoh8AFxawuz9WBT5r+uEun2bSPFMHQbsC9tDKH2X8jZ8ZMhkOAq/rB+6z/1sE/QDYUq1u+7AVaBtfA0MSDo8GdJU3fgbIea88+wGwVyV7nLtUYKrxayJ7NkuNew/+Gz//3cOej//W0A8AVeh4ygpo/vGR/vUxP80eumVRU801JdsS81q28trj8V9+/QBQhY5egXdSga3L6AfA1op1+4eqgLs9PFRSV0jGXX/vx39p9gNAFTrefQXWNhC7QFHC35qa+xboB8AtqtznuFsF0rgSCD9Fo//J3/6DB3C3rYgMDbbo2fILxYNxkDHa5sgmOe71+l+8fgCoQsfTVcAbgGmKmnzbOJoJ2AYZo3z/3z/6TWTET//Vv36ANk5kaFBtyIzRwLiC3BgNjAOyMYnhi1yT3zA8xGap+dltRT8Atlas2z9cBdIcqOQ0D2ggTfVv/pbvOfylv/0bVGMjkbFFNf+/8N1fGnV8jPmFDyWHjOdsLtFLInmFavgKNnuiHwB7VrPHunkFNIqmgzQlWU3EWLOjmrgizR/7Og6PBux++f//kweHCp48tPJkUGWVp4NWVpsdz+aa6AfANavbY1+tAppDQ5sABU3uTu8gyFizGzsg8JpX0wX894YcckDsHXvveP0A2LuiPd7NKuAQqDCxQwA0O2h0cqi8Jv2nX3x9fGmA0of+0H/2nxiOOgx57I0v1YvngBBTPGMHlrUYn4NzffoBcG7lut/DVSAN5G6fO73m0mwo4CVe6X/++37q+BFbNvSaMzZikTlArqk3x63RD4BbV7zPd/UKaN7cpTWtcZoYD5KgS0Mbx4Zc89PF1jh89HzYoEFisCfbqudzS/QD4JbV/sBz+bbdtZHyaj6NqGHBmI4sfBpTM9Oxc2hkTI+P/ZSeHxsU+LAnw5PhUZiKQc+H/h7oB8A9qv6B5kzT/+bf9mMHsHT0GjCX+KCpQFN7fe19AQjvsR8P7OmqrPJ0UGWVp4MqqzxdUOXmBTnk5YvxVlxi3w+AS6rXfRcroCHT6P/f//6TR1s8/It/+GcPQZTkQXToWj07d1/QWBqObAreKwBvFgbGYIwCPjAGYxTwgTEYo4APjMFYbnK8V/OrST8AVKHjahXQvPBf/4N/6/B3f+XnDn/+L/zFAx7mJqWDc/Ue9TWXJgMNB/l2IF5szQdsA2MwRgEfGIMxCvjAGIxRwAfGYKzxQS73Qj8A7lX5Pu9VKqChPG4LrslAwwE5Cg6BCoeDwwL4omRs8KGVn9LzlcMasL03+gFw7yvwTufP4/8/+QM//maFS3d2hpfqxTjVfGym4A05B4Zmx8cmPArkoZXna26yW+HSeR7iALBZgksXdA//5I7eY/4+53kV8K689wrAG4aJYoz3BiLKDiXHo8Z8jPGR4Z8Jdz8ANM2X3/pUMtT40+g5vspX3iBjY7TjML7Bd4s6eMrw/sKau6/r49Fdw2pg7xfIUSMD3t2dHk/GDmWLJ6cny5iO/NlwtwPAhYCxYD/8AyM5vFJy+CR83K/HHOUNr6ke5a/jj0406B418GbiHnESQxPjNW8a2ThwEJDHLnL2eDq01ZM9C+5yAGiQ3DHRr/1Lv3r48h9+OgSMA3aPWki5JU/5gzVERv+oud8qr9r44dEpJKcpHRk9OgW6rdDcwE8ja2JvEubpIDpyPBu27vpeGpAZR893zRMIn72wR5y7HAAK9bXfczhoFvTNQtxJ4Y3w8QZZQzLT/CMvdxgHH/eL+ngsr1CNOt6TN5/4W6B5p+xzh6fT6LHLIVD1bJ4ZdzkAFMwFS/OPB8HwFEA+4s/86oGOzTh+0C/yk+eb/OU+rIXuQdO+WVpqcCtsWdR/9Mf+78Pf+K2/9/BLf+WvHb73P/jvR/7v/KPfMoYwjp7Nn/7n/5UDHWpMxwZPFt3o/IRf7nYAqJXNgea1P96jdB2TPTxe7/hydyA8fL4fNEEvy/6L3/UfH/6vP/ZHxwr81n/tdx7+1t/5hZHPF2N6NLJQsqqLPxqbZ6N3PQBckNw9PUJroCMdvjNA/xQFHe768pQ74J8md8l+QGhm0LwoKMN/+d/+PmREZKF07CnJAP8//a//1eF4MyO4Afaa4q4HgKLljqn5x/Hw+Gxx5Mb4R4Yc5SpHawA8OdrxWBXQxDLSyHhNjP9//sSfGj+m/Od+4VeoR5AHbEfh65fI0VfRU5IXd6rgHivQKIH5w6PGzwC5tniGvD9ijh7hrVvjV57MmBwfGAMd4Ftdxs9IXzyCBw6CZ1zEe8vZdTiF97bmW67HXTt39MrXHMg1OztYq6t2z8C/eHwN9kj41MZ9RP0l677Gev7Av/5jhy//xz8+ieR6jXn3iJn8Hplq7ORX+droVe5lwZTOE8G/++/82zd//Z/c96Av3rSquHQTHH7ti8MRP/Ujn/jQX/z6pzGbyPDQ6qI/Z5VT8RbiXLLmuWYlr5hr6GojReM//Dd/7vC1/+V3T4LNG1hratXWkC6oOrL44KOLLJQuiCw0Pm+SORxqLRvV3Ydepnmt7+4uGU2N18jGQIaSo3T/3u/8beN3DuiA/L3g5fD6DnYWlJcDlY66XHAbInw2AxoZ47/6Pb5+hR/6x5/43/4bh0Or+9b3fZLRsaL/PX8P9wmJOzfvJ6u3X7//u4fDf/hLhwMK3/zOUT/ViJquxZQdWbUTdK5ZySvmGrrafPnrf//wh370G8K+hfpaP9rWo1r+8m/6VEsyNVRL9TWuOuNcE3q1RyOLLzuY0sVnLq9B7jDg/khwCHjX3p0b8A4FORqDceT4yFAgC8Tj+6z4/LsAvqcd1FXVhgqvsdJgkRmHjz7jKR2bJf2SbvBNQ0o1vEZtEd1UI9YmDD9lRxY9qmHNuxZy4HPE62N+5Ic/8mfHUMmdfBQM6xwPM/REPd4cfGz5qDtqjIfw5MZoZMaVn9ORs0Wrffgx+cf7omn3wuOtbltGL4sfuhkOAu8PbAu5v7Wfzz6+rBB+uLsYk2vEP/SX/7fx9TIeNGoLcuC+BpoPjs063J1rY9KJE1koOYx+rw0eHfs/+Dv+m8PY6K/NTgajHDMB67ReqPyE6X1Ew/WoeR35+2Tzrmfde3Ev4/etm5cB48uCQUbnYt4DFpp5R/4nDodvD2h547GhBiZNpwGH4WEca1xompENjDaNTsPyP0KzwlEwz0w+ws+br9ZYO3BAYeR/9Ivxd9qnVremYw4T1yX50Xc8bgXGlwDtXX4cD3d/afv1SeitYSNPzT0p//3//phe7qJvmlDjwmixz5c38edC7jzn3DRd3itwSQXGzwEkgDs++K7ASL/16Sf2phoxPo9A0/iTubweDpO6NcKFRl6cd03sBZs/+PPfXtB2Va/APhUYPwfgHf+E8+aI5jf2JADuusaPCLnltX17Zx4bdKGBx/Wc0o9G278sNTBdRaKT5b0La4LoOu0VuEYFji8BNL3mNwkK+GeF1/drGkjTTa0xh8mcPj70LaZ0Gls+p6DuFYnVaa/ANSrw8sibzd3dyw+oi6/y6DQhm9A0MNkU5vT8g/hlXCndqWau+lrnJV7cCrZZY5U/Oi9nuT96nh89v/EJYK4It7qANssUklfb8GzJ8jva8ZpNg/JBofLGLeihysVZC/VZC/OcC3NYc4tz4+3t1+ZlLOe95+nx9q/A4gGQT3K5oHvBEvIrllBxNTD4fWwoaG469mhkKBlfv64JH7SN62UAXStfGtu4ayH2rTCXk9rcE3N53aouH2Wea63zzY8Da/gKHzw51I+e+ijqcBKYGgAAEABJREFUr31xOITiYcmmydxm9QcUItbQZMb5nWv4NDc9+GWMkUXvEAA6BwY5Cg6TNDq5GOQoHeDp6iY2fjZYR5B1ZVzpko7dkn5K92x16vl+XoGXscGnGlhjs/eZb58pB58RJwOfD0dhyUacwDzsh7Gmrw1NDGloPBijfhMrqtlt1urv4MgvahQTT8ZO0/OroEs8Ng69qn82Xk2m6mQd5PT4rDnj6NBWT8YObXXGkeM7nrcCLwc/JKKBs4Y0eW1wNlBt2FUbMaZsfFY88BlxMYxfDwFDqJvNGNx1PC3QGYPmzeYj1+yRo2TZ6MYOBJQcDfg5RMATQOTPSq2zrjF1sk5rWtJN+cZvSqf+0Yvd8bwVeDloZPlrZnd5PJBn7Ic9QONWtLJ2zHZo9PGlxEDdbfFo/aiosd+rbrPZWDavFKZg87GLLs1OTiaOQ0NjB+Riih0ZO40P9M8ODa4WqY164K3b2pZ0U77xm9LVuGJ3XLcC14z+Mv6UmUbVvO7Q+CDjoXk1bqBhR15mrzoyGOWDbOQHfRq9pYPq+N9mNchmw5NlE2rWNDVKD/SaGh+5eT05ePQHY9D44mj4gN97gDpYR2qB16RqiKdf0rGpemPgh1ZdjUvX8dwVeNEcaVp0HA9rQoFsGL75QZx2nOaOPGP+Gi9j+orobarIs9nIbGA2QRpaTPaopkbZkAX8QQxo9bF7duows351AHzgUAx/Slf1rV/ViRe9uZ+9fh89/5dv/MxXP2WXYmgWF9pY80J4NKh2kZ1LNbeNBuaGbDQxNbGGxoO5wd0eJQty5zKuPsbvERpxDtarPkHqlfES5TsXl5y+47kr8FKbO/ytl5RmN2+7QckgjexlgsOCD7nXtih5qMPCONRTBd5mf/Z3/K1xK1ILfupljFcTPGoMxmiVGXfcpwLXnnX2g0CaJU12SRJr4mhojY+6e7ebr25Keg3d5kTO3xOEw8JGrzZk1vNR71zWnzqqlRqnjku6WsPOv78KzB4Aa5e6psGXYvH3qM/GRrQx8dms9JqaLEhzx4acH388OR5sdv4fuflTE3VTk9RKbaoO3+rIOt5vBS4+AC4pjaYEd25xNG7uStmcNiTdFDS2w0OMUHZ8xSIHd32g+4hQD+tObXMIkC3p6DvedwUWDwB3Xw20pgTs5lDjVBtyzW9DZiPWuTQ/HZmGzgbW7GT/8//wfx78scfQP/8X/uI4NofDQdMD248Mf8nWX7T1l23x9a/aGs/pPnLNHmHtt8hh8QCoCWgqqDJ8ZJoZNLTX8/ggNigZPfDX4Bodn0MgjU5HDnSaWgxNT+aPN/j97aFk4EBwGHzEN/ysv4X6gN9xj9aaGQMdv6oz7njfFXjRUEuwfHqNC/gKMjZpYnwLhwKZuzFfjQx4cEdHgRzwAV+8xgdjqH+koW5iumxofMfhoFaaWy3UqtLoyKHq8B3vtwIv4wd9fu2Lr/5iD95P+1UM69eAoOHdvVEYVOP/3K1DCT22o7mj4x0CLcg1doW7eB3j2YGNbOyPNGTDktvIaJUZdxzGv2yTuqhfrYnDck5X7Tr//irwcvAzAGBtoX4OwEeDA4fCoM+d3LvJw/CgwcFB4HDAexLwuI6yWYs0b7UnCyK3eW1W8shCbWT8e/mrLdayB9papX7kkDlqbas8+k5vV4FbzfTph4E0vM//a3gUagavY4/qxO7yGlyjG1dERxa9A8MhMfea3BOBu7kNyA9sUg0Nf+4XfmV8hI0cJUf5ZLPWxheTvuNwqPVLPVK/qlNz+ujwHe+7Ai/j3+rzU39+Vj+P/e74EJkaGA9wp9f8RO74aXIvC7x2J3MI0APbOiabgz/CSJeG1tzGNqZNSQ5k0fFxeGh+TQ/0HV9VQI3a+tGSVR1Z6kpn3PG+K/ByyM/xo54Esl53fT8N+M3XP6xpDIM+r+nT/IPo4C6PgkMAhbXNr3HTyKH1DzRqcHLA04lvzBeMO95WQF3USM1QwAcZh6prdHzfRuuj91aBT98GTONrcA2PDnf7+gahR3hj1J2+FmLqLp9DwhNDcGpD0Z+DmkvnP6/AOTXl83mkLrlFBW45x1e/D6Bt+iGL/HBQpZp5UB3S4Hh3eYeANwkdDp4MULY2UsC2o1egV+BxKjD+PgB3dSml0StfZaP8R4dvGQ5MGlyTgzcIYVAdjHvTq0RHr8BjV2D8fQA1RQ0PVdbyOTDS5FO09enjXoFegcerwFe/D2C4s7tzP16KPaNegY9TgVuv9NObgGfM6ilg7vv6Z4TrLr0CvQJ3qMCbA0BT96eAO1yFPmWvwJ0q8OYAuFMOfdpegV6BO1XgswNg7VOAJwVv/t0p7z5tr8C7q8A9FvTZAXAqCY0PvflPVarrewUevwKrDgANH2h8ePyl9Qx7BXoFTlVg8heCcErDoxo+oOvoFegVeB8VePHxXT/J57U/hCe3RI2PdvQK9ApcrwL3ivzic/wm91l+NCB3GPTv9acinfYKvL8KjO8B+OEdS/NjvOHbA4G+o1egV+B9VeBFo8PUshwGXhb0p4Cp6pwnU8uOrx3manBeVbvXuRU4vgTw4735pR5zB8K5k3S/TxWw6f1OhYPftBTktzCh+R0MdMZAZhyQBXRAV2XGQeQoW6AzBmMgC8iDqiMzhtii5EHVkRkDu4A8qLpBNtboU7k+zNd7LnR8CeD1viQqxfeDQFX2wbixNYBfv+a3LwXC+4UsgAe6H/rHhwNM2bPZ035qDvHBXPKB5LOHvbhT8YcajbWi77h6BV687ofc/euMfr4/3was8s5vq8C4od3pNBFXDYSCJshvYzYOzxbIWnuy2KHANmAP7MQHNsaAj21o7Oljz84Yhdii7IGePcoGBfwv/6bDgS2QVXs+bIAOjf1Qq7Fm5B1XrcD4BGAGLwEcBHhND74FCGQdF1bABhdCM9joxrUh6IzdZfH0wB7w9KB5gB17wLMB9nWO+LCB2OPZAx8UYp850NaHPbCH+IgJ7AEPbNiHZ08vNhlqTG7ccZMKvHijD/yGH+iNP193d6VzML7ut8E1gfB40BCRkRsDnh6ix9NBZOyMAc8G6FGgAzI2YIwCG6BHgd4Y2AAZCmxQejzQGwOdMeCBDUqPpwNjoDMG/OtTwFn15v8kuHeax08CutMH907qEee3EY9v3g2bc2zqKTq8kXWoGF7Tjr963aJsfLSCTAO0yJ2QvtrjyVp743N9+IkpdmAM4rZgD/SxR42htTdmD/RsA2MwZlehjuo3VefI2DQYr5V4HScr8NKb/mSNxm9Zjc3PNHcofDYrPrCZweMskFcfY35owD7gA9GF8oGMY4+yh+gqPdcnfuJXLM2zxsch0OZ3ym+rz3Bo9EOgFnmeP74HMG/SNWMFNDEY2LCQxiBrwTaIjg+eHzqF+KD0fIAPkLVgG0THB7/Ghy9bPsAHyFqwDaLjg1/jw5ct8OMDxi3YBtHxwZ/yYdNxsgL9ADhRovFO4nHTXQjY23yAz4YMX8dkfABffaodHtgEfIAPkLMBPFTeGPhAfMjYAR4qbwzxmfPjA2wr5vxiwwcyRvlAnYu82uGBPODjCaT6sYHY4GG4ZuO1i/wB6SOk1A+AhaswbiCvL20odyK2NmFAToaS1c1JBlN+fID+Uj9xQCyYmu+b3zkcwN9+gMobg78ChVaIC+Ki1ocCGUzNV/X41s93KPbyS2y5QJ2vHwKqsYh+AMyUZ2z+YQMd6t3Gpg1sYr70EDkZkKE2ZXTouX58xRMXjIEMyKCdb2hsH+c+B+OhUWPPzdfOyQfkA2v92J7yo2/nix8dvs43XMPxWtJ1fFaBfgB8VpLDV2/6uTvT21RoRWQ2Y4vqF7v4GkPrY8wP6CE+oWTspsCPHRt0L4g3N5856aHOZwxkc77u3LFhF0Q255c5Yx/KD4xb3+Eprh8CCvM5+gHQ1GTcKMNd45C7iA0X1I3Fz4azkcEYyPjGB61++NjxA2Pgh/IJ2FeID9XPmG98QvmJdwnEEB/MCeJ5kjEnPvOh7Cv4AT9gzw/YV1Q/dq3f3JxiVF9+YD4Q68EOASk9AvoBUK7C2PzDt5CO37e3SQObj62NBXigR200sBmNyQNj4Ad4oEf5AV+yCnrgB3hgwwf4AVkFu0vRzim+OcGcQBbEHoXMH331o4scNQZ+gCcH47W+/IAfxHe4tuM1pusYK/CiINfCOMOTfFGD8cM9NoycbWw0sInw7jQo4IFPQH6urxiX+lb/15x9uvMcWMrB+kZm+IIHeVaYEwaT8f/rvKMv+1E4fMFXPzw/GNTj+y1Lvg5hPgE/2OI7PN2N15pPx+Hly3/4A4eK9s2iL791OEyi8RMjvuqKf7pC26CSt8FsNmMbDMhtTsCTuSNlzBb4Ah7YATtY8qU75cvGvIAH8wDfibxdi3Mg9NiUIzN8kf/cvOaWA1gvsIfBdfzPl3wcDF/YypfvMBwPDHrgB+TAF/Aw5UvGl131xZPR8e04VuD4EuBnf+/3HiCaH/+R7x4g48/on/nVwwFeFfF1p7HZiNFnOATGHIfXiHI+woYBApvU5gqykerGZWejofR8wbj1J1sCP4hN5g0ln5ubH7DZA5kzVEzrQ7NeOmPzAh7IK8iWUH3NUX3VkC852s5tvOTPJ7jzU0DSeAT6onEhyWh6yHiW/vAPHA4D+ILGB02/yn828G0VY/MPG+J4p7PppKDBAmOwyWBOzheiD62+c/5s+KLxQ7Px+QXk7CAyvkBXwWYPZJ7ETszIzS3X6FG6akcGVRabKf/Wji+0cr5AV1HtIo9suObjtc/4g9LjE4D1b2rc4e6v8fml8Wvzb4olyB0wboDhjaHjm342I7S5RGaTtXBHAj7sAF9B1vplzBfYQPXDk0HsW8oX2ACfPSEmtPNmbG5gA+3cZBD7lvIFNlD9jYGs9cuYrzt/7NgGZGAc+0qHp75xD9B/UIwHgGaFtTX42e98cQCND2n8qRh0j1jkMafhLnDy2302jMLYSDYaGAOZOwveRgz4VNCz5RuQAX+Ib2j1x/OHrf7muATmBnPD1vn5Al9Y668O/AJr4A81Rp466PlUxBel5wvV/4MfAi9TTatWc9D4dGl8Df7j/8evEz0Njs0vYxsGDWyo8KgNg+6JzJHYa3OIXfz3zOnSWA6xGkOT1XGaMHbRt/LqszffzpUcbngI7L2kS+ONTwBrgmh80Pig8fktNX8OF7Zj03G4M8Y86mO/DVmR/DQnZIyyQ20cSEOSB2lOvgEfiA1f4A+Rh7KFU/6JwTa+oWSv+PHf/5MHeB2eJGxhNJzLgTzzWwNk7tAxwPCFLQzs+D96/sAXIg+tPpWv+uoveHRo9cEDG6AHMjGGPTHuDboPhBdNvQZqksbX0BofyOt3A8bxo39x4SF5ujOAsQ0B+Cnwq4gNf+ALkU/R6o9nwzfgD+RT4FMRm/gb8wf8tVBzwGee5GF+iLylfCqqfq8YYi7lQJ8c8B8Mq54AND5ofPU5Nr7B8GYgMoc8BUCJsWgAABAASURBVMzpbykfT3iv+03qjgN4GwTw2Xh4yBg1ruAPZPwBzxbwgTFkHMof+AZ0bAEfGEPGofyh+tOxHR5vv/Y7/tMD/He/+psPa8AWxg9GJY5YeMADvkIO0ObBhj3gAQ/4Cv6wRwx3dnFqfHNCZHgwHvbGuEfwHwQvmrlFXXsaP81fdVvu/PzvWdxx7qEZxg+bWIRT3+O6i2/DAbkNA3iwiSAy9kBXY5CJAWyBDZBNxeAjBuCBLfAH/kAmBhgDe+APeGAL/GHY2Mw3YXgkHr87UuMkgBwgY3OCHIDcGPiDPIAO+AM+YO+arI0hnhjiT8UQR0xgA+z5xR5PRkc21GrcK/id8YjhXsYmLnfx+q29NH+beGx8DqDVPeJ4vKCaX3IuOOqCu/BgDDZKBRtyGwmlQyv4B+Q2MLsK8ilsySX+a3KJ7ZocYrtEaxx8a5t1VF2tCXu6CnUiT43xLdoYbGsMfOvT5mIsTrXjV9Hm8oEOgZexicsHetQpje+uvccjfGKINzajSW6Ecb6p5m/nzyaIvN00kaM2FWpDoktInDTukm10bS6RT9HkMqW7tmzN+pND6pDxEtWc9Gtqllot5dLGmcqljfNBDoHxPYDc0TU+aFT1T+OGkp0DbzLyE9svIcXfAmPzDxfyzaf8bC4boiIXXzMFVZ9k6fBiQLXBL8XhF5yKU+3YgvjQ6uQR0FdU24H/Xf/cXzuswWD61R/0EG8UDF/kAWTBIB7/k8NcLuxHw+ELOyCDQTT+Jwvm4tCPxsMXPIgBg2j8TwYGl8QZ9s64h8R5pxg/CmxtmlPjg4YH8jmMh0Z56TBr950vRpX4N2/+qdex2RhjVq9fyCCbpaXuLgG74NX9SCJv/ev4XnGOSZ7BnLOuqWkSh67WpPKpj7s0e7YtyIG8+ra8WJfGGZ4e9zgEpPqIOP5dAI0vwbnGn5PzmYK7PtDdpfmH03v8lF/uDDZD0G4UY4naVDZMQAZiAD4xQvlWsBEH2jhk4kD8Q2uM8OyhjWMOMSD+ofGtVIyhHj/9R/7VwxG/+984/DT84vccfhqKbvwV6OLVGHjzigVtTnIBNnwr+LYQA9o4nqLEgRoj/FycqVhiQHwrbePIWwxoc3rHh8CLxod8J0Ad1iIN3tpX+a2bv81lfCf7M2EjcNEb0cFGJIvO5jGuiE2VhY/9lE10sZ2imXerbsr+FjINNTePhprTaVC6KZvo6OcwNW9iRTcVJzZTcWO/ZDPl94Sy8T0Azb8m9zVPAWl+jQ+3fOy3hvFxLY/+BC5mRRpSgwXsArZ4Fx80K5C3YAeJgxpDbMUIxIHoQpMTPzEAH8SujTMVKz6oOICHxEHbWGQt+IAYgTHENnFQ+UB0lfKBNg5Z7MQAMYLoQvnzATzgITaoOJA4rZ5N9a18tSUXZ9hT496ie0cYPwdwXM+K1/RH21cmDW8YPo1/l+YfHnXfPPpLzJ0A8C4o4Odgc7SIrThgLA7g59DGMY6tOCBGEN0U5dsiduJA4qDRTdG5OGzFATGAbA5tHONqKw6IA1XX8nxbVBtxQByoupZv4xhXG3FAHKi6lucLw9465xBowz3SeHwCGBNa2fxTTwEaH8RJ8+NvifHCDBfoszldZMJTF5nNKVwj1qk534s+tdtjPXvEyn7YGmvYY+Ne22MdDxDj0wGwsvlP5fswzV8f+1xoSPIuOGSMGgO+xZpY1RcfzMUSU05B7Kb8pmSxFweM52Lxpwd8YFwhTtDGYjflNyVjC20sMckhfqgx4APjisTyKC4OVP2U35QsPoknDkSOxg81Bjzg4R0dAp8OAIvagKmngLs2//Au7fgR31wkj2teVxtDLrg1uuCAB7psLGPgA3ixwBjYB+IEbEEsIDcGfiBOYAyJxY4P4IFOLDAGPkEbi5wPiBPwA3ECY+ADiYUagzhBG4tvG4uMH4gDVZZY/Np4ZAEfEAdcS7HAOEi8NhbfxGJjDPFLvCpjB/zaeMbk9HzgnRwCnw6AH/4BSzoLGh9u/XpfsuOjmOY3ABcKdaFRcOFQmwetqBc08uq7JNs7Xub6qHSqnrmetSZTsqnruDWeQyHzLMWruhWHQEI+Kv10AGzIzmt94JLGf6jml5imD4xBY7cgh1ObJbFQ9tDGMiaHZ4xX87dOsJaAvkV0tSkiYxteLMgYpW9BDs8U78kPgU0HQBrfNUrz4+8GdwOQQDYTXgNW5HRnWxEbPkH0a+LxiT16j3jyzLyVyg3kFURPHkSHigWxqzT2KFuY0pMHYkG1C89GLMBDdCg5kAdigevJpoINe8BD1ZMDeWC8Jh47PlPx6J4Yn/004NxaHqn5x0f/4eQdc3UBR2b44iIN5M3/qn+jWBjEZypedTulj23iZfzR6F7rv2a9p3Ks803pcx2HvTjuyYyfiI6/EehUvml+d324xyN/chwL/YtfPxw/4eciBTGqtOpcxDl47AS+1ce4RfRzscjFCmKPtrGMyQHPdw6Jh7IP+LWIbi5W5GIF8WljGUeHxneOtvH4iNGCHMjnYkXexuTTQqyALr5TNPG8NKk+/CqiQ6fiRDa8FzXuzeL7DOziSwCNDxaSxn+I5pfQFrhIS/Y2wZJ+Sncq5pTPR5Npsr3XvFdMLyOS29qYDoH4TNEnPATGAyBNXtdUZWn+qr81P56uw6PWm0/5uXAVmrKFRF040OgBOZDntZ1xjYdv42XMDxIP5R8sxZyLKx6IFSQeeknMGlesIDFRebXIeisVK0ie6KPFlM9Sng4B64Z23RnXdeNrTLGtG8jhyQ6B8QCQd8XDNn+SdHHCh7qY4ado9Zmyrfop/ypz4esYX2NO6dkE1Tayj07TXOqgIdGKU/rahNUvfI05ZVv18ZmjNZfY1JhPdAgcD4A0fah1PcydP6/506QuVgsJg+arIIPY412sQEyIvtLaqFMxxYp94qHiQdXHDiUPpuKyCcQLxIToKr0017m4yRNNrvig5tDmORdTnPjjg8jQxKVbG5dfwA8yRhMTnYrZ2rBrYxgDW2ATkL/G9SPV41MrmwfG8QCQY5pf48M9X+/L5zMo9GfCQZAT2QUYhpv/z8VNoHPjxr/S5Ep2Kq4GYvfMOLWGWo9L11nreSruqWtec7lW3DrHnfg3B4Ac0viP0PzjCdq+7pekixsYu0CAPwUXvkV8EhMlExPwp9DGNI6PeIF4QfRzVIwpxD4x0cREo5+jUzHJqr2YIF5Q9VO8GFOotmJCYqJVP8WfislHTBAvIF/ClrjibI077N1xD/N9ULw5ANL8j5DrWLihgJ/l4iJH6IKE35NeK+6eOT57rHod91zLteKem+Owh8e9fK7/lf2OB8BDN7/HyEBzBimOix5EhkaGGrdITJSujUvGNzCGjFHjKYgZJC4aW75BZGhkqHGLxETFC6od3yDyjNHIWipmsDauGGIGxi0SE01ctNrFH40cH0TWUjHBa28xodrEH10jj42YMBeXnZiBMXzr+w5vfjCN7IEPgePvBHyER361Gk/LoWD4ES7CyAxfPLIN5M1/FyCCevHn5LGtdCou/ZYY7INTOcduida1LNkt6faIsRR/rW6uvqf8a/71Wpzyq/q5GFVe7cPXnOv1jB6dilFlNedhT497m98D4UXjwyPkNBZo+BbKmxPUhQDvcisouCCBggdZBJ2TG+gi5xuQiQuRoXwDvgF7oBMX6MiAbyBmEBnKN+Ab8Ac6ccE44BskLhoZyjdo44ojZmAc8A3EDCJD27jixx9NXNQ44BskLl1k6KWx7YtLY8tBXoG8YC42+0AtIL6osVoAOzJ4wEPg+BJAfvfEsfmThCKGdzHCK2p4Fz78FnrN2DWPvfOusef4c2syF6/K62au8j34udh7rGdN7DmbqbU5GCKf86t5V5sHOwQe4gBYbH7F0/RBCu8iaLAW7GNTLwK7yCtNXLTK2bdYE7seLmIGp2Kbq9qc4uWS2GjsxZlC9GupmEH1mYrtWlSbU3ziotV2KjZZbKw5fK1ztSEXF2KLspkCXQsxIuMTnlxciAyVF7tvfd/h+PRqXOvChi080CHwEAeAmkyiFq0a1MJWeb0wc83vIsZna/z4XZuuyf3aOZwbv9a01lpDnBtzD7+6N2q8upfW5F6vTY2zJn61fxD+7gfAePcfTsTxz3dlw9gsoNhTqMXjE1TbORtxg2ofvm6IxA2NDToVnyyx8exarInPN8jcaGKjbdyM44fyCaJH6YLoUXEDdlOIH8onqLZ0QfRoYqtBtQ/PJn6oMUSPkgd0Adk14yc2Ko8pyCFIXmhso0OHPT/uffwdcdcDYCzAUIjj+hU3A4ULX+kam2pf+Ut8a5zOf7wK1P1Y91GtxBqbaj/s/bEHquzG/N0OgHHh7Wf8FTCYK0TVuxBL8EgXiBdf1HgKdEC3FJsusUP5BfynED0qxikkNsonmIpNFj16Kja9uAGfQKwpRI/yP4XERvkEU7HJokdPxY5ebPAYzg/EmgJdQJ8YS1RsOBFfuOOTrDkIluLSDd/1GnuB7R1wlwNgXLDmz4I9IoVfQxVujd0tbd7DGq5dL020ZY400RafR7Nds4Y7HgI3PwAubv61F9hpHdtnbc5L1pC135t6vX/vHJbmX9OgdQ1bDzFzr5njTofATQ+AsfmH1z2Lv9RDgcFdfgopqKJqkIA8oNP0QCbeFKbik/EPEh8VK6AXH8im4pOJNwX+gdiBWIHYgVhTmIodWeKjiY8mPpr46FR8ssRrKX+xA7EDukDsQLwptLEzTuzQxEcTX4MmPtlUfLLEbGlio+JWiAe3mOMOh8DNDoBj8yvmKSj2lI0LFLkLGn7OPvopOuczN8dUjFOyNXOcivFR9Jpuaq2adUp+jmzNHA6SNbEbu6PLpXPc+BC42QEwFkjTBgSK2KI2jWas4BNUP0Wv2DKHeGvmYLdlDvnxCebmoGcbTM1hPdG3lH9Q58BHjla/S+YQS+zAOLhkDr6JgyY+ahywC+iyFjUK2MampXQB/yAytPrQT81hrmpXeT7iBMaQMdraZw6U/ka4yQEw3v3XvOl3zmnvQlxSrPbCXBKr+t5jLXX+Pfk9a3Tp9bp0XXUt51yjOv+ea3EgJPbQK2PPZHxFevUDYFzIsKDjGupCj8IJpl6oCfUoWroAc/Occ9GX5hkTOfFlzVqWQsytZcnn3rpLcz7nOtU1X3rNaqyltczNU6/52rXUeYaeGXun5nEF/qoHwLiA+qZfXaDFKExgrGiB8SmIN4fqmznQxA+tdnP83Bzk1Uf8IPHRarPEizeF1idzoOIHrd3ceGoOsmovdkXmQKvdEi/mFKpPnYNc/MD4FKbiR1Z95+apNkt8Yk7QN257zjP0zthDbybYd3C1A2BMfFjAbLoKFaULHn5v+p7n2btWNd41r0mfp1ZgmR96aOylZauztVc5AMaEh8Rns7pHU84m88SKWzXpE5doNvW6B2eNzlTU67LHPEMvjT11ZjpLbrsfAGOiQ8JvJvU6KaBQoMA4UKzvS12AAAAQAElEQVQgMjSyULIpZI7QzBEan8QJjRyNDDWeQ+ZA2WQO1DgQJ4gsNHI0silqjkD8oLUVJ6i6yEKrrvKZIzTzoNUucULndFXe8pkDFT9o7TIHukVXbc0B3mHPPGi1wZsjMA4iC428peYI6lytXeKEVn1kaJUPPTX2VpXtwO9+AHyWk4JE6PVT+JbWBU9dnNgv6WKDLs1FH6yNF/u9aF3vXjGfNU7dI0truGXN6lwLe+RNunvsuTpXzeHNRPsNdj0AxhNqOKmO6dULu1ScpYVWXS3OcZJXps71KpokNV5rUHXXnqude268x7rmYp8rX6pNjVnrWeVb+D3mqntvqZ73mqutU82j6obeGntsS/1O2O52AIyJ/dSPHI6/EcXECh9YSOAiBOwsuIIM2HiUCsiCxArNPKgPE0UuRkWdB594aOZBjYPECjVHUOeiP2euNg9xgswTGjl6zlxLa8scoeYI6lx4OQepEyp+BVmQWKi6ZR6UrMIcQeZBEws1npuLvsYzR1Dl+MyDihmIEZCdMxd/cwTmCMQTF9hV0AXso9v5ENjlADg2f5JsF2Tx0VlU+C3UxYt9jUdW52t19EGNEVloLXJkU7TO1erPXVsbZ268tLY5n1vLl2p87Vz2uIZLMeraWru6L5auk4NvTR3qXOzrfDseAhcfAJ81v2QrajHaBmkXWf3qgpfsauGrP76dj2wNluar/nVtVY5filHXxrZiKWa1e0Z+6Vot6ZbqtVTnWqOluq5tyhrvcDgclvKq87Vrq/MtxVha206HwEUHwGTz18VanCYMagEVQZGmwK/aVp59HVeeX+ZCq+4a85mjos4nzzlUuy18nQtffefmIq92W3hzBK2fuHNobdeOMxfa+szNRd7aZlz3YmShdOYJIkftI3GnYB+xmYKYU3IyusyFkgVr52MXH3SHQ+DsA2BV80tyCktFbIuzdAoq6lT8S2QfeT4b/pLaTfm2m7bafLT5lvZWu+9rnWq/tPW88BA46wA42fw1+Uv4tmB1w7TN3xamzlsLWOX4pcLX+dhWnDtfjdH59RVYuk5L17fdJ3XGdn9V3Zb56l5o51vaQ3W+LXydj98Fh8BZB4A5F3/3GQPFnUK9WIrVovqIU1FtFTZgU/0qX+djV2Pgqy2eTUAfkGU+lO0c2FYkRmj1q3b42KDmqah+Lc834FtRbWMTWu3w58wnFt+gzoenD2ITWudzrdjPITHQ+IdWH/qK2KDkdc7q1/Kx5wPGrzj+Upv40AexCa3zLa2RfWKEkkHmCY3+Qrr5ABjv/sOJc5zX4o6DgZHsQCb/t7aTRiuEe8VZMdXFJkv12BJ8rzhb5nxk2732wJY4W2xr7dprtxSnta1xlvihJ8feXLKZ0G06AMYJhomOcdqFLCW/xfY4wQrm0edcsYSLTdraXhxwRYCluq9wP5psibPF9jjBBLMlzhbbiamOoi1xqu2Wazv05tijx0lPM6sPgDHwMMHh+797OOKb3zkcKqqu5asdvtXPjb3eqbAmBQqM5xCbUMVcgzofXvzEQI3nQF+xZr7YmCsQv8YxnkO1wyfeGpr5QvkHc/NFHjt0zVyxyVyh/IPEnqOxQ9kk5hqa+VD+gThLiB3Kbs1csan72r4PqnyKjx06pZ+TDT069qo8V2D1ATD+BWGTDhMcboV2AV7/tLK1Yxdkre1edveYc6/c33sch8CZa9zsdqt+Mc/Qo2Ovrkxy9QGwMt5+ZsNCDr/49X3iXdKIlxw6W7Jfetd5S5x72ebuuGZ+b4StsXtUmy1r9fF4e/lB17LpABhPlmEx3/6Jw6FiaW1r7cSI7fgSo23+3ohK9D5xyd14SzO2B88l8265EicOgez70KXQsUE/sxt6c+zRzxTzgk0HgDAm+MbPD+8DGGzEZNJzMTR8wMbFmoM7/Bz42iSBO20FfUXmDJ2bk3xuzsgzJ1rnxNc58ZkvVPw5JP4cNV9grgpzVWS+0Lk5yefmizxzhj77vEtrVsOsM7SuF89mI77xM/MOi/1zRvObafMBwKmFxOaw1XY8XLyWaR3nxu2pPme3Ru5CVjsboI638G2sLb6XzLtlnlvantkQY4p7+jqsxqDnfXnjtSXW61PAVJ/UmFP6yKodPnLU+BycdQBc8hSwlORk81/SDG0TtrEuOTwu8W2L0ObZ6t/jeEvznFr/JbE8+SzF33L4tLFa3+EQGPf40nxn6MTUk2e4Hs46AM6Z6Co+12zC9rDYcwF75t3mdc3DpN3Q7dyXjNvm2TNWm/clB0abVxtrz3W0c11hfPYB4MRx8uyV0xjLG38aLxBcQedAX2HzV1QdvsYxtjGCzBlabad4/hV1XnzV4WuMzBmaOUOr7RQvXoX5girHt/6ZMzRzhrb27VjMIHOGRh7a+mbO0MwZ2trXsTkSFzWuIKuovvjMGZo5UX5s5mAeNoFxReShNQ67zIkOe3zc67G9kIqlF88Nc/YBYEITSwB/CcYYQ2HexFDEN4Jm0J68Ct2YnD2859xbk95z3Vvnbq/BVv9L7LfOfeqarsjlaHLp3MNeH/f8MeB5jBh68DzvT14XHQCfQjzA161NkFP/AVLfnMLWzbd5gg/qcGpPtHvsnVyHiw8AJ5CT6NxtM/oOJ+Ib/1On9TMX/9RGO7X2N4V6ssGptZ2qzZMt90267dqHPT/u/TdG6wd89d56j2nLiw+A6bDrpBYxfqxYcSqqu2avoHMaV5BtQZ1riq+x6tx4ujo3nmwtpuarsjaOOSvMV9HanxrXuab41r/Oja9z41v7U+OpOaus9TdnQGfOwHgL6jxT/FSszI3SZ27UeAvaOYdvd489sCXGzra7HABOonsvZOe69HC9Am8q8EgDvabn9shplwNAIhKSGH4NRtvhBFy0zakbo3NO3fieQ9v5z4nRfZ67Au2e23tPDD0w9sLKKrHVayvNT5rtdgCcnKkYWMT46F9kT8G2m+Epkn7yJNua792Aj1CejYfAninvegA4mcbmPidDbwBViOHiV5AFNkJF5KFVh498idb58XVufOsrbsVWfWtvzgp681aQVdT58VWHJ6sgW0KdH1/nxre+NTa+1RuTV5AtwbwV5q1ofWts/FZ9a29c5/f9+6X52Zu3gqyi6vBVt5LXW3pspfkqs10PgDUzWsRnd3/Frs7eLKnjW/CPkMMt1nntOc7c3Lum1eageesErb7qJvhdRKdyuNNTwO4HgBNKk89hl2K2F/BUcXeZtAlyKofG/CrDNoerTHIiaFv7E+ZXUd8ih/YG0S6kzeHMazPXN+R6q5320vHuB4CEJDoFurvc/duLMyZSvpy6uMV0NdtugFM5rA68YHiLORam303VPgHe4vq0ybc5tPo141N7oNUPTwHCTvUOGd3euMoBMJXk+HvKfupHDsc/HprFK3QFeYWLXyG4jV5BFrD1mq0iutAaH1/nx/thHfJAzBZ1fnxih9b58ZGHJnal5q6oOvzWHMxl7gqyCnEr6vz4qgu/NY86P77OHz6xQ81dEXno1hxcI3NXZO7QxA6t8+PZRRda8xDbPBV8KthU8K/64RAYe6XKrsjf7ABYtQZFrYYKVce5CFV2im992jlO+U/p25hTNltlNs1Wn2e1bzf9HuvYI2Z7Db71fYfNqZ3K4xp7Z3OSXznc5AAYTzR3/6/mPYx/WKSO92jMU8Wv84Xf46InVug5ecQ39F71yPyhbX0i30L32PRtHp7StuTAts3jnOt0izxu+BRw9QNgsvldjFO4xt3/1JxT+jaPKZtTsnbjnbLv+k8vFR+hDuccxOccLO1ab3QIXP0AaNc1jttT9Jwij4HKlzVFb+dp8yjhZtl7NfMeB9Hsot6JYs0eaJfa+qzZE63NvZ5G2rWcMb7qATB592+LJ2mbuwV5oMCadwmxDT2nUW2GpTzEXsohOnZLYLekpzuVBxtxlsBmD5zKZSmH6E7lMbUvWp9TebDPfHPUXmK3AkcTsY6DV+ZULvYSvyW8hjoSPsfBwNzgKeBqB8Bk8w9r+ux/u+jPDFYIXIxTZi7EKZs99GtyaedZs/lbn2cfn3PdzznUz6nTmuuxRy5rDqMrHwJXOwAm694Wds0mWFOkdrI1F6fNpY0xNb5WLlNznZKdk8upmOfqzzn0zp3rlN85uazZh+fcQNbk0l7HNbmcqsEG/VUOgMm7/zkNt2Ehi6ZrLt6NC7+Yb1d+qsCa6/bJctvXtummvNfs1zU3mqnYp2TtXrziU8DuB8Bk808tuF3klM2aC9WesmsuypqLO5XPHrI1m3pNbfbI5ZYx1lzLe16XpuaTpVlz7VrHdn+2euM1tbnSIbD7AWA94/f4XcyAUPEqNOop8KtIvErbGNU+fLXH1zzw7No47XjqIonVovUTu6K1N5ZDRRtjalxjhherYo1ftcfXPMJPxWllySFUrBanfPi2Pskh1HVo47RjMcSqIKtofYyrPb7ah08eofxOQawWiRfaxmjtrzTe9QAY7/7DSXUyV4s+ZaTAp2y6vlfg3hVYs0/X7Pc16xh6a+yxNbYrbXY7AMbEhgQ/m7ct0JpitD6CrvFjdwpTsU/5TOnfaz7vdV33vu5tXc/NZ+ixsdem9uQZst0OgMm5z13kZLArCdsLMzXNM6xjKu/3KltzPdZc15n6bBavyWcq6Ll+U7HOlO1yAIwn0nAyncxhzUWZKsoav5OTDwZTsQdx//9BKrDX9T93P57r116eodfGnmvlZ4x3OQDGeb//u4dDi29+53CoaPVT42offsruHFniVbomTrUPv8ZvjU3iVXqO3xqftTY1F/waP3Yt1vitsWnjGl/T75zYa3zYyL2C7ByMTXf5l/0OgOFUGn/ZR6eHXocveg2u3QeX9/4YYZcDYPxtJU6xMWT/0ivwvBV4isyHXht7bodkdzkA5DEmNCT27Z84HCroTqHahz/lQx/bULIW0YW2+qlxbCudsmtl1R7f6o3JK8hOodqHP+VDH9tQshbRVdraTI2rPX7KppWxa3GOTetjfCoumxatj/E5Nq2PsVgVZKdQ7cN/5jP02NhrnynOE+x2AMxNbyFzusi/8TPhLqNr5lpj85HzWbP2NTVccyXXzLXG5iPns6bOSza7HgBOJr+9tJ3QBTqFPXzEaOcha9HaTI338BGjjU3WorWZGu/hI0Ybm6yi1U+Nq334KbtWFtvQVm8cXSjZKcS20lM+9NUeT9aCvKLVT42rffgpu1YW29DP9Dvf/c2z6wEg4NwhQNfRK/DIFXjk3NxY9dbeOe5+AOydYI/XK9ArcL0KXOUAcFI5sa6Xdo/cK/BxKqCX9NQ1VnyVA0CiEpY4vqNXoFfgvAroIb10nvdpr6sdAKen7ha9Ao9TgY+ayVUPACeXE+yjFrevu1fgkgroHT10SYxTvlc9AExuARaC7+gV6BVYVwE9o3fWWZ9vdfUDQGoWYkH4jl6BXoHlCugVPbNstY/2JgfAPqn2KL0C16nAR456swPAieZk+8jF7mvvTELHOAAAAGtJREFUFThVAT2iV07Z7aW/2QEgYQuzQHxHr0CvwNsK6A098lZ63dFND4DrLqVH7xXoFdhagZsfAE44J13Hd09eq7/0t3/j0KJ1+qdffP1QsVXf2rfjS+cXr+aHJ6u45154pLn1Rq3LLfh/BgAA//9x6IblAAAABklEQVQDANnFsU4W4Dq4AAAAAElFTkSuQmCC"},
// ---------------------------------------------------------------- game code
// (inside a function, so Restart can run it again from the top)
function () {
// Third Person: hop across floating islands and collect the 5 stars. Ride a sliding platform,
// a turning bridge and an elevator on the way.
// Move with the arrows, WASD, d-pad or stick (relative to the camera); X jumps.
// Turn the camera with the mouse (click the game first; Esc frees it), the right stick, or by
// dragging on a touch screen. If you leave it alone it swings round behind you.
// Shows: an orbit camera kept out of walls with mray(), movement relative to the camera, and
// riding moving maps: wtom() remembers where you stand on a platform before it moves and mtow()
// puts you back there after, turning included.
// maps: 0 islands, 1 sliding platform, 2 turning bridge, 3 elevator.
// vox: 0-2 the hero (stand, step, step), 3 star. sounds: 0 jump, 1 star, 2 fall, 3 win; 4-8 song

const R = 0.4                                    // the hero's collision sphere
const STARS = [[13, 4.6, 0], [13, 6.6, 8.4], [13, 7.6, 14], [6.25, 7.6, 14], [-10, 11.6, 14]]
let px, py, pz, vx = 0, vy = 0, vz = 0, grounded = false, riding = 0
let facing = 0, walk = 0, camYaw = 0, camPitch = 0.07, idle = 0
let got, checkpoint, state = 'play', ticks = 0, best = null, flash = 0
let bridgeYaw = 0, wonT = 0

function _init() {
  touch_set_mode(1)                      // on touch screens: an analog circle instead of the d-pad
  bg(12)
  mouse_set_mode(2)
  let d = load()
  if (d) best = d.best
  got = STARS.map(() => false)
  checkpoint = [0, 5, 0]
  ;[px, py, pz] = checkpoint
  music(0, 1500)
}

// the three moving maps, placed for time t (in updates)
function placePlatforms(t) {
  map_set_pos(1, [7.25 + sin(t / 480) * 1.6, 4, 0])           // slides between the first two islands
  bridgeYaw = t / 1400                                         // turns slowly about its middle
  map_set_pos(2, [6.25, 7, 14]); map_set_angle(2, [0, bridgeYaw, 0])
  map_set_pos(3, [-5, 9 + sin(t / 360) * 2, 14])               // goes up and down between islands
}

function _update() {
  // after a win, wait a second before O or X starts again (X is also jump)
  if (state == 'won' && ++wonT > 60 && (btnp(4) || btnp(5))) { _init(); state = 'play'; ticks = 0 }
  if (state == 'play') ticks++
  if (flash > 0) flash--

  // 1. riding: remember where we stand in the platform's own grid, move the platforms, then put
  //    us back on the same spot. On the turning bridge we turn with it.
  let onIt = riding ? wtom(riding, px, py, pz) : null
  let yaw0 = bridgeYaw
  placePlatforms(t() * 60)
  if (onIt) {
    ;[px, py, pz] = mtow(riding, ...onIt)
    if (riding == 2) { facing += bridgeYaw - yaw0; camYaw += bridgeYaw - yaw0 }
  }

  // 2. the camera: mouse (once captured) or a finger, the right stick; else swing in behind
  let [mx, my] = mouse_delta(), [rx, ry] = stick(1)
  let look = mx * 0.0012 + rx * 0.012, tilt = my * 0.0012 + ry * 0.008
  camYaw -= look
  camPitch = mid(0.01, camPitch + tilt, 0.2)
  idle = look || tilt ? 0 : idle + 1

  // 3. walking, relative to where the camera looks (screen right is the camera's -x side)
  let [sx, sy] = state == 'play' ? stick(0) : [0, 0]
  let [fx, , fz] = dir3(camYaw)
  let ax = (fx * -sy - fz * sx) * 0.09, az = (fz * -sy + fx * sx) * 0.09
  vx += (ax - vx) * 0.3; vz += (az - vz) * 0.3
  if (abs(ax) + abs(az) > 0.01) {
    facing = yaw_to(ax, az); walk++
    if (idle > 60) camYaw += angdiff(camYaw, facing) * 0.02   // swing in behind
  } else walk = 0
  if (btnp(5) && grounded) { vy = 0.21; sfx(0) }
  vy -= 0.01
  px += vx; py += vy; pz += vz

  // 4. collision with the islands and all three platforms; note which one we're standing on
  grounded = false; riding = 0
  for (let pass = 0; pass < 3; pass++) for (let m = 0; m < 4; m++) {
    let [t, xi, yi, zi, nx, ny, nz, d] = mgetw(m, px, py, pz, R)
    if (!t) continue
    px += nx * d; py += ny * d; pz += nz * d
    if (ny > 0.5) { grounded = true; if (vy < 0) vy = 0; riding = m; if (m == 0) checkpoint = [px, py + 0.5, pz] }
    if (ny < -0.5 && vy > 0) vy = 0
  }
  if (py < -8) { ;[px, py, pz] = checkpoint; vx = vy = vz = 0; flash = 15; sfx(2) }

  for (let i = 0; i < STARS.length; i++) {
    let [x, y, z] = STARS[i]
    if (!got[i] && abs(px - x) < 0.8 && abs(py - y) < 1.1 && abs(pz - z) < 0.8) {
      got[i] = true
      if (got.every((g) => g) && state == 'play') {
        state = 'won'; wonT = 0; sfx(3)
        let s = ticks / 60
        if (best == null || s < best) { best = s; save({ best: best }) }
      } else sfx(1)
    }
  }
}

function fmt(s) { return flr(s * 10) / 10 + 's' }

function _draw() {
  // the camera sits behind and above the hero; if something's in the way, it moves in front of it
  // camPitch is how far above the hero the camera sits, so the camera looks down at -camPitch
  let t = [px, py + 1, pz], [fx, fy, fz] = dir3(camYaw, -camPitch)
  let d = 6.5
  for (let m = 0; m < 4; m++) {
    let h = mray(m, ...t, -fx, -fy, -fz, d)        // from the hero back toward the camera
    if (h[0]) d = max(1, h[7] - 0.3)
  }
  cam_orbit(t, camYaw, -camPitch, d)

  outline(0)
  if (flash > 0) for (let i = 0; i < 32; i++) pal(i, 7)
  for (let m = 0; m < 4; m++) map(m)
  pal()
  let frame = walk == 0 || !grounded ? 0 : [1, 0, 2, 0][flr(walk / 6) % 4]
  vox(frame, px, py - R, pz, 0, facing)
  for (let i = 0; i < STARS.length; i++) if (!got[i]) {
    let [x, y, z] = STARS[i]
    vox(3, x, y + sin(time() + i) * 0.12, z, 0, time() * 0.4)
  }
  outline()

  let n = got.filter((g) => g).length
  print('Stars ' + n + '/' + STARS.length, 4, 4, 10, 0)
  print(fmt(ticks / 60), 252 - textw(fmt(ticks / 60)), 4, 7, 0)
  if (!mouse_locked() && ticks < 600) printc('Click or drag to turn the camera', 244, 7, 0)
  if (state == 'won') {
    rectfill(36, 96, 219, 156, 1); rect(36, 96, 219, 156, 7)
    let m = 'All stars! ' + fmt(ticks / 60)
    printc(m, 104, 10, 0)
    let b = best == ticks / 60 ? 'New best time!' : 'Best ' + fmt(best)
    printc(b, 120, 7, 0)
    if (wonT > 60) printc('O to play again', 140, 6)
  }
}

;return ({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null });
});
