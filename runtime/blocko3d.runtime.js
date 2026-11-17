(()=>{var ed=Object.defineProperty;var nd=(i,t)=>{for(var e in t)ed(i,e,{get:t[e],enumerable:!0})};var lc={};nd(lc,{HOOKS_EXPR:()=>oc,cartFunctionSource:()=>M_,catchGlobalErrors:()=>b_,install:()=>Lu,play:()=>y_,restart:()=>Du,showError:()=>Ro,start:()=>ac,stop:()=>S_});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var id=0,wc=1,sd=2;var Ah=1,rd=2,Zn=3,On=0,nn=1,En=2,ui=0,us=1,Ec=2,Tc=3,Ac=4,od=5,Ii=100,ad=101,ld=102,cd=103,hd=104,ud=200,dd=201,fd=202,pd=203,ma=204,ga=205,md=206,gd=207,_d=208,xd=209,vd=210,yd=211,Md=212,Sd=213,bd=214,_a=0,xa=1,va=2,ms=3,ya=4,Ma=5,Sa=6,ba=7,Rh=0,wd=1,Ed=2,di=0,Td=1,Ad=2,Rd=3,Cd=4,Id=5,Pd=6,Ld=7;var Ch=300,gs=301,_s=302,wa=303,Ea=304,_o=306,Ta=1e3,Di=1001,Aa=1002,Pe=1003,Dd=1004;var Sr=1005;var Fn=1006,Bo=1007;var Ui=1008;var An=1009,Ih=1010,Ph=1011,js=1012,Il=1013,Ni=1014,Tn=1015,tr=1016,Pl=1017,Ll=1018,xs=1020,Lh=35902,Dh=1021,Uh=1022,ln=1023,Nh=1024,Fh=1025,ds=1026,vs=1027,xo=1028,Dl=1029,Oh=1030,Ul=1031;var Nl=1033,qr=33776,Yr=33777,Zr=33778,$r=33779,Ra=35840,Ca=35841,Ia=35842,Pa=35843,La=36196,Da=37492,Ua=37496,Na=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,ka=37813,Va=37814,Ha=37815,Ga=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,Za=37821,Jr=36492,$a=36494,Ja=36495,Bh=36283,Ka=36284,Qa=36285,ja=36286;var Kr=2300,tl=2301,zo=2302,Rc=2400,Cc=2401,Ic=2402;var Ud=3200,Nd=3201;var Fd=0,Od=1,hi="",pn="srgb",mi="srgb-linear",vo="linear",me="srgb";var $i=7680;var Pc=519,Bd=512,zd=513,kd=514,zh=515,Vd=516,Hd=517,Gd=518,Wd=519,Lc=35044;var Bn="300 es",Jn=2e3,Qr=2001,fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ko=Math.PI/180,el=180/Math.PI;function er(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function Xd(i,t){return(i%t+t)%t}function Vo(i,t,e){return(1-e)*i+e*t}function Ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var he=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],g=n[5],_=n[8],y=s[0],m=s[3],u=s[6],A=s[1],E=s[4],b=s[7],P=s[2],C=s[5],I=s[8];return r[0]=o*y+a*A+l*P,r[3]=o*m+a*E+l*C,r[6]=o*u+a*b+l*I,r[1]=c*y+h*A+d*P,r[4]=c*m+h*E+d*C,r[7]=c*u+h*b+d*I,r[2]=f*y+g*A+_*P,r[5]=f*m+g*E+_*C,r[8]=f*u+g*b+_*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,g=c*r-o*l,_=e*d+n*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=g*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ho.makeScale(t,e)),this}rotate(t){return this.premultiply(Ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new Xt;function kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qd(){let i=jr("canvas");return i.style.display="block",i}var Dc={};function Js(i){i in Dc||(Dc[i]=!0,console.warn(i))}function Yd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $d(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?vo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Uc=[.64,.33,.3,.6,.15,.06],Nc=[.2126,.7152,.0722],Fc=[.3127,.329],Oc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[mi]:{primaries:Uc,whitePoint:Fc,transfer:vo,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Nc,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Uc,whitePoint:Fc,transfer:me,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:Nc,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});var Ji,nl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=jr("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jd=0,to=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,cn=class i extends fi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=Fn,o=Ui,a=ln,l=An,c=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=er(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Ch;cn.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,b=(g+1)/2,P=(u+1)/2,C=(h+f)/4,I=(d+y)/4,z=(_+m)/4;return E>b&&E>P?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=I/n):b>P?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=z/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=I/r,s=z/r),this.set(n,s,r,e),this}let A=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(d-y)/A,this.z=(f-h)/A,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},il=class extends fi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new to(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends il{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},eo=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sl=class extends cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],g=r[o+1],_=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=g,t[e+2]=_,t[e+3]=y;return}if(d!==y||l!==f||c!==g||h!==_){let m=1-a,u=l*f+c*g+h*_+d*y,A=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){let P=Math.sqrt(E),C=Math.atan2(P,u*A);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}let b=a*A;if(l=l*m+f*b,c=c*m+g*b,h=h*m+_*b,d=d*m+y*b,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*g-c*f,t[e+1]=l*_+h*f+c*d-a*g,t[e+2]=c*_+h*g+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"YXZ":this._x=f*h*d+c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"ZXY":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d-f*g*_;break;case"ZYX":this._x=f*h*d-c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d+f*g*_;break;case"YZX":this._x=f*h*d+c*g*_,this._y=c*g*d+f*h*_,this._z=c*h*_-f*g*d,this._w=c*h*d-f*g*_;break;case"XZY":this._x=f*h*d-c*g*_,this._y=c*g*d-f*h*_,this._z=c*h*_+f*g*d,this._w=c*h*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wo=new V,zc=new pi,Fi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),wr.subVectors(this.max,Xs),Ki.subVectors(t.a,Xs),Qi.subVectors(t.b,Xs),ji.subVectors(t.c,Xs),si.subVectors(Qi,Ki),ri.subVectors(ji,Qi),bi.subVectors(Ki,ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-bi.z,bi.y,si.z,0,-si.x,ri.z,0,-ri.x,bi.z,0,-bi.x,-si.y,si.x,0,-ri.y,ri.x,0,-bi.y,bi.x,0];return!Xo(e,Ki,Qi,ji,wr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Ki,Qi,ji,wr))?!1:(Er.crossVectors(si,ri),e=[Er.x,Er.y,Er.z],Xo(e,Ki,Qi,ji,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new V,new V,new V,new V,new V,new V,new V,new V],Sn=new V,br=new Fi,Ki=new V,Qi=new V,ji=new V,si=new V,ri=new V,bi=new V,Xs=new V,wr=new V,Er=new V,wi=new V;function Xo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qd=new Fi,qs=new V,qo=new V,ys=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(qo)),this.expandByPoint(qs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new V,Yo=new V,Tr=new V,oi=new V,Zo=new V,Ar=new V,$o=new V,no=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yo.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Yo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Tr),a=oi.dot(this.direction),l=-oi.dot(Tr),c=oi.lengthSq(),h=Math.abs(1-o*o),d,f,g,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let y=1/h;d*=y,f*=y,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yo).addScaledVector(Tr,f),g}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){Zo.subVectors(e,t),Ar.subVectors(n,t),$o.crossVectors(Zo,Ar);let o=this.direction.dot($o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);let l=a*this.direction.dot(Ar.crossVectors(oi,Ar));if(l<0)return null;let c=a*this.direction.dot(Zo.cross(oi));if(c<0||l+c>o)return null;let h=-a*oi.dot($o);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,g,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,g,_,y,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,g,_,y,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=g,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,g=o*d,_=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=g+_*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,g=l*d,_=c*h,y=c*d;e[0]=f+y*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,g=l*d,_=c*h,y=c*d;e[0]=f-y*a,e[4]=-o*d,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,g=o*d,_=a*h,y=a*d;e[0]=l*h,e[4]=_*c-g,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=y-f*d,e[8]=_*d+g,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*d+_,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*l,g=o*c,_=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+y,e[5]=o*h,e[9]=g*d-_,e[2]=_*d-g,e[6]=a*h,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,tf)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(n,on),ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(n,on)),ai.normalize(),Rr.crossVectors(on,ai),s[0]=ai.x,s[4]=Rr.x,s[8]=on.x,s[1]=ai.y,s[5]=Rr.y,s[9]=on.y,s[2]=ai.z,s[6]=Rr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],g=n[13],_=n[2],y=n[6],m=n[10],u=n[14],A=n[3],E=n[7],b=n[11],P=n[15],C=s[0],I=s[4],z=s[8],w=s[12],S=s[1],L=s[5],W=s[9],X=s[13],K=s[2],st=s[6],Z=s[10],lt=s[14],J=s[3],ct=s[7],vt=s[11],At=s[15];return r[0]=o*C+a*S+l*K+c*J,r[4]=o*I+a*L+l*st+c*ct,r[8]=o*z+a*W+l*Z+c*vt,r[12]=o*w+a*X+l*lt+c*At,r[1]=h*C+d*S+f*K+g*J,r[5]=h*I+d*L+f*st+g*ct,r[9]=h*z+d*W+f*Z+g*vt,r[13]=h*w+d*X+f*lt+g*At,r[2]=_*C+y*S+m*K+u*J,r[6]=_*I+y*L+m*st+u*ct,r[10]=_*z+y*W+m*Z+u*vt,r[14]=_*w+y*X+m*lt+u*At,r[3]=A*C+E*S+b*K+P*J,r[7]=A*I+E*L+b*st+P*ct,r[11]=A*z+E*W+b*Z+P*vt,r[15]=A*w+E*X+b*lt+P*At,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],g=t[14],_=t[3],y=t[7],m=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*g-n*l*g)+y*(+e*l*g-e*c*f+r*o*f-s*o*g+s*c*h-r*l*h)+m*(+e*c*d-e*a*g-r*o*d+n*o*g+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],g=t[11],_=t[12],y=t[13],m=t[14],u=t[15],A=d*m*c-y*f*c+y*l*g-a*m*g-d*l*u+a*f*u,E=_*f*c-h*m*c-_*l*g+o*m*g+h*l*u-o*f*u,b=h*y*c-_*d*c+_*a*g-o*y*g-h*a*u+o*d*u,P=_*d*l-h*y*l-_*a*f+o*y*f+h*a*m-o*d*m,C=e*A+n*E+s*b+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return t[0]=A*I,t[1]=(y*f*r-d*m*r-y*s*g+n*m*g+d*s*u-n*f*u)*I,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*u+n*l*u)*I,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*g-n*l*g)*I,t[4]=E*I,t[5]=(h*m*r-_*f*r+_*s*g-e*m*g-h*s*u+e*f*u)*I,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*u-e*l*u)*I,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*g+e*l*g)*I,t[8]=b*I,t[9]=(_*d*r-h*y*r-_*n*g+e*y*g+h*n*u-e*d*u)*I,t[10]=(o*y*r-_*a*r+_*n*c-e*y*c-o*n*u+e*a*u)*I,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*g-e*a*g)*I,t[12]=P*I,t[13]=(h*y*s-_*d*s+_*n*f-e*y*f-h*n*m+e*d*m)*I,t[14]=(_*a*s-o*y*s-_*n*l+e*y*l+o*n*m-e*a*m)*I,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,g=r*h,_=r*d,y=o*h,m=o*d,u=a*d,A=l*c,E=l*h,b=l*d,P=n.x,C=n.y,I=n.z;return s[0]=(1-(y+u))*P,s[1]=(g+b)*P,s[2]=(_-E)*P,s[3]=0,s[4]=(g-b)*C,s[5]=(1-(f+u))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(_+E)*I,s[9]=(m-A)*I,s[10]=(1-(f+y))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ts.set(s[0],s[1],s[2]).length(),o=ts.set(s[4],s[5],s[6]).length(),a=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);let c=1/r,h=1/o,d=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(a===Jn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,g=(n+s)*h,_,y;if(a===Jn)_=(o+r)*d,y=-2*d;else if(a===Qr)_=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new V,bn=new ue,jd=new V(0,0,0),tf=new V(1,1,1),ai=new V,Rr=new V,on=new V,kc=new ue,Vc=new pi,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ef=0,Hc=new V,es=new pi,Xn=new ue,Cr=new V,Ys=new V,nf=new V,sf=new pi,Gc=new V(1,0,0),Wc=new V(0,1,0),Xc=new V(0,0,1),qc={type:"added"},rf={type:"removed"},ns={type:"childadded",child:null},Jo={type:"childremoved",child:null},gn=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new Rn,n=new pi,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ys,Cr,this.up):Xn.lookAt(Cr,Ys,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Xn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qc),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rf),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qc),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};gn.DEFAULT_UP=new V(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new V,qn=new V,Ko=new V,Yn=new V,is=new V,ss=new V,Yc=new V,Qo=new V,jo=new V,ta=new V,ea=new xe,na=new xe,ia=new xe,Pi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),qn.subVectors(n,e),Ko.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(qn),l=wn.dot(Ko),c=qn.dot(qn),h=qn.dot(Ko),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,g=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ea.setScalar(0),na.setScalar(0),ia.setScalar(0),ea.fromBufferAttribute(t,e),na.fromBufferAttribute(t,n),ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(na,r.y),o.addScaledVector(ia,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),qn.subVectors(t,e),wn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;is.subVectors(s,n),ss.subVectors(r,n),Qo.subVectors(t,n);let l=is.dot(Qo),c=ss.dot(Qo);if(l<=0&&c<=0)return e.copy(n);jo.subVectors(t,s);let h=is.dot(jo),d=ss.dot(jo);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(is,o);ta.subVectors(t,r);let g=is.dot(ta),_=ss.dot(ta);if(_>=0&&g<=_)return e.copy(r);let y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ss,a);let m=h*_-g*d;if(m<=0&&d-h>=0&&g-_>=0)return Yc.subVectors(r,s),a=(d-h)/(d-h+(g-_)),e.copy(s).addScaledVector(Yc,a);let u=1/(m+y+f);return o=y*u,a=f*u,e.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Xd(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sa(o,r,t+1/3),this.g=sa(o,r,t),this.b=sa(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return ee.fromWorkingColorSpace(Ye.copy(this),t),Math.round(en(Ye.r*255,0,255))*65536+Math.round(en(Ye.g*255,0,255))*256+Math.round(en(Ye.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=pn){ee.fromWorkingColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Ir);let n=Vo(li.h,Ir.h,e),s=Vo(li.s,Ir.s,e),r=Vo(li.l,Ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new ce;ce.NAMES=Vh;var of=0,Oi=class extends fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=er(),this.name="",this.blending=us,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},so=class extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new V,Pr=new he,We=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}};var Ms=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ro=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ue=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},af=0,fn=new ue,ra=new gn,rs=new V,an=new Fi,Zs=new Fi,ze=new V,sn=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kh(t)?ro:Ms)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ra.lookAt(t),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(an.min,Zs.min),an.expandByPoint(ze),ze.addVectors(an.max,Zs.max),an.expandByPoint(ze)):(an.expandByPoint(Zs.min),an.expandByPoint(Zs.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),ze.add(rs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new V,l[z]=new V;let c=new V,h=new V,d=new V,f=new he,g=new he,_=new he,y=new V,m=new V;function u(z,w,S){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,z),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,S),h.sub(c),d.sub(c),g.sub(f),_.sub(f);let L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(L),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(L),a[z].add(y),a[w].add(y),a[S].add(y),l[z].add(m),l[w].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let z=0,w=A.length;z<w;++z){let S=A[z],L=S.start,W=S.count;for(let X=L,K=L+W;X<K;X+=3)u(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let E=new V,b=new V,P=new V,C=new V;function I(z){P.fromBufferAttribute(s,z),C.copy(P);let w=a[z];E.copy(w),E.sub(P.multiplyScalar(P.dot(w))).normalize(),b.crossVectors(C,w);let L=b.dot(l[z])<0?-1:1;o.setXYZW(z,E.x,E.y,E.z,L)}for(let z=0,w=A.length;z<w;++z){let S=A[z],L=S.start,W=S.count;for(let X=L,K=L+W;X<K;X+=3)I(t.getX(X+0)),I(t.getX(X+1)),I(t.getX(X+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,g=t.count;f<g;f+=3){let _=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),g=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*h;for(let u=0;u<h;u++)f[_++]=c[g++]}return new We(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],g=t(f,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let g=c[d];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=new ue,Ei=new no,Lr=new ys,$c=new V,Dr=new V,Ur=new V,Nr=new V,oa=new V,Fr=new V,Jc=new V,Or=new V,ke=class extends gn{constructor(t=new sn,e=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(oa.fromBufferAttribute(d,t),o?Fr.addScaledVector(oa,h):Fr.addScaledVector(oa.sub(e),h))}e.add(Fr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Lr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Lr,$c)===null||Ei.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Zc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let m=f[_],u=o[m.materialIndex],A=Math.max(m.start,g.start),E=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let b=A,P=E;b<P;b+=3){let C=a.getX(b),I=a.getX(b+1),z=a.getX(b+2);s=Br(this,u,t,n,c,h,d,C,I,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){let A=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);s=Br(this,o,t,n,c,h,d,A,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){let m=f[_],u=o[m.materialIndex],A=Math.max(m.start,g.start),E=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let b=A,P=E;b<P;b+=3){let C=b,I=b+1,z=b+2;s=Br(this,u,t,n,c,h,d,C,I,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=_,u=y;m<u;m+=3){let A=m,E=m+1,b=m+2;s=Br(this,o,t,n,c,h,d,A,E,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function lf(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===On,a),l===null)return null;Or.copy(a),Or.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:i}}function Br(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Dr),i.getVertexPosition(l,Ur),i.getVertexPosition(c,Nr);let h=lf(i,t,e,n,Dr,Ur,Nr,Jc);if(h){let d=new V;Pi.getBarycoord(Jc,Dr,Ur,Nr,d),s&&(h.uv=Pi.getInterpolatedAttribute(s,a,l,c,d,new he)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,a,l,c,d,new he)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new V,materialIndex:0};Pi.getNormal(Dr,Ur,Nr,f.normal),h.face=f,h.barycoord=d}return h}var Bi=class i extends sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2));function _(y,m,u,A,E,b,P,C,I,z,w){let S=b/I,L=P/z,W=b/2,X=P/2,K=C/2,st=I+1,Z=z+1,lt=0,J=0,ct=new V;for(let vt=0;vt<Z;vt++){let At=vt*L-X;for(let Wt=0;Wt<st;Wt++){let ne=Wt*S-W;ct[y]=ne*A,ct[m]=At*E,ct[u]=K,c.push(ct.x,ct.y,ct.z),ct[y]=0,ct[m]=0,ct[u]=C>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(Wt/I),d.push(1-vt/z),lt+=1}}for(let vt=0;vt<z;vt++)for(let At=0;At<I;At++){let Wt=f+At+st*vt,ne=f+At+st*(vt+1),j=f+(At+1)+st*(vt+1),at=f+(At+1)+st*vt;l.push(Wt,ne,at),l.push(ne,j,at),J+=6}a.addGroup(g,J,w),g+=J,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var hf={clone:Ss,merge:$e},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},zi=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ci=new V,Kc=new he,Qc=new he,Ze=class extends zi{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Kc,Qc),e.subVectors(Qc,Kc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ko*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},os=-90,as=1,rl=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(os,as,t,e);s.layers=this.layers,this.add(s);let r=new Ze(os,as,t,e);r.layers=this.layers,this.add(r);let o=new Ze(os,as,t,e);o.layers=this.layers,this.add(o);let a=new Ze(os,as,t,e);a.layers=this.layers,this.add(a);let l=new Ze(os,as,t,e);l.layers=this.layers,this.add(l);let c=new Ze(os,as,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},oo=class extends cn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ol=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new oo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ui});r.uniforms.tEquirect.value=e;let o=new ke(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Fn),new rl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},aa=new V,ff=new V,pf=new Xt,$n=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=aa.subVectors(n,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(aa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pf.getNormalMatrix(t),s=this.coplanarPoint(aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new ys,zr=new V,ao=class{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],y=s[10],m=s[11],u=s[12],A=s[13],E=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,m-g,b-u).normalize(),n[1].setComponents(l+r,f+c,m+g,b+u).normalize(),n[2].setComponents(l+o,f+h,m+_,b+A).normalize(),n[3].setComponents(l-o,f-h,m-_,b-A).normalize(),n[4].setComponents(l-a,f-d,m-y,b-E).normalize(),e===Jn)n[5].setComponents(l+a,f+d,m+y,b+E).normalize();else if(e===Qr)n[5].setComponents(a,d,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(zr.x=s.normal.x>0?t.max.x:t.min.x,zr.y=s.normal.y>0?t.max.y:t.min.y,zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<d.length;g++){let _=d[f],y=d[g];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let g=0,_=d.length;g<_;g++){let y=d[g];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ki=class i extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,g=[],_=[],y=[],m=[];for(let u=0;u<h;u++){let A=u*f-o;for(let E=0;E<c;E++){let b=E*d-r;_.push(b,-A,0),y.push(0,0,1),m.push(E/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<a;A++){let E=A+c*u,b=A+c*(u+1),P=A+1+c*(u+1),C=A+1+c*u;g.push(E,b,C),g.push(b,P,C)}this.setIndex(g),this.setAttribute("position",new Ue(_,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tm=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,zm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:xf,alphamap_pars_fragment:vf,alphatest_fragment:yf,alphatest_pars_fragment:Mf,aomap_fragment:Sf,aomap_pars_fragment:bf,batching_pars_vertex:wf,batching_vertex:Ef,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:If,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Uf,color_fragment:Nf,color_pars_fragment:Ff,color_pars_vertex:Of,color_vertex:Bf,common:zf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:lp,envmap_vertex:Qf,fog_vertex:jf,fog_pars_vertex:tp,fog_fragment:ep,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:op,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Mp,map_fragment:Sp,map_pars_fragment:bp,map_particle_fragment:wp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ap,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Pp,morphtarget_vertex:Lp,normal_fragment_begin:Dp,normal_fragment_maps:Up,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Hp,opaque_fragment:Gp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Zp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Qp,shadowmap_vertex:jp,shadowmask_pars_fragment:tm,skinbase_vertex:em,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:dm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:xm,cube_vert:vm,cube_frag:ym,depth_vert:Mm,depth_frag:Sm,distanceRGBA_vert:bm,distanceRGBA_frag:wm,equirect_vert:Em,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Im,meshlambert_vert:Pm,meshlambert_frag:Lm,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:Nm,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:km,meshtoon_vert:Vm,meshtoon_frag:Hm,points_vert:Gm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:Zm},ft={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Nn={basic:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ce(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:$e([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:$e([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:$e([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new ce(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:$e([ft.points,ft.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:$e([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:$e([ft.common,ft.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:$e([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:$e([ft.sprite,ft.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:$e([ft.common,ft.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:$e([ft.lights,ft.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Nn.physical={uniforms:$e([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var kr={r:0,b:0,g:0},Ai=new Rn,$m=new ue;function Jm(i,t,e,n,s,r,o){let a=new ce(0),l=r===!0?0:1,c,h,d=null,f=0,g=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?e:t).get(E)),E}function y(A){let E=!1,b=_(A);b===null?u(a,l):b&&b.isColor&&(u(b,1),E=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,E){let b=_(E);b&&(b.isCubeTexture||b.mapping===_o)?(h===void 0&&(h=new ke(new Bi(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Ss(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(E.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(Ai)),h.material.toneMapped=ee.getTransfer(b.colorSpace)!==me,(d!==b||f!==b.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,g=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ke(new ki(2,2),new Ve({name:"BackgroundMaterial",uniforms:Ss(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ee.getTransfer(b.colorSpace)!==me,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,g=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function u(A,E){A.getRGB(kr,Hh(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,u(a,l)},render:y,addToRenderList:m}}function Km(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(S,L,W,X,K){let st=!1,Z=d(X,W,L);r!==Z&&(r=Z,c(r.object)),st=g(S,X,W,K),st&&_(S,X,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,b(S,L,W,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function d(S,L,W){let X=W.wireframe===!0,K=n[S.id];K===void 0&&(K={},n[S.id]=K);let st=K[L.id];st===void 0&&(st={},K[L.id]=st);let Z=st[X];return Z===void 0&&(Z=f(l()),st[X]=Z),Z}function f(S){let L=[],W=[],X=[];for(let K=0;K<e;K++)L[K]=0,W[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:X,object:S,attributes:{},index:null}}function g(S,L,W,X){let K=r.attributes,st=L.attributes,Z=0,lt=W.getAttributes();for(let J in lt)if(lt[J].location>=0){let vt=K[J],At=st[J];if(At===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),vt===void 0||vt.attribute!==At||At&&vt.data!==At.data)return!0;Z++}return r.attributesNum!==Z||r.index!==X}function _(S,L,W,X){let K={},st=L.attributes,Z=0,lt=W.getAttributes();for(let J in lt)if(lt[J].location>=0){let vt=st[J];vt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor));let At={};At.attribute=vt,vt&&vt.data&&(At.data=vt.data),K[J]=At,Z++}r.attributes=K,r.attributesNum=Z,r.index=X}function y(){let S=r.newAttributes;for(let L=0,W=S.length;L<W;L++)S[L]=0}function m(S){u(S,0)}function u(S,L){let W=r.newAttributes,X=r.enabledAttributes,K=r.attributeDivisors;W[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),K[S]!==L&&(i.vertexAttribDivisor(S,L),K[S]=L)}function A(){let S=r.newAttributes,L=r.enabledAttributes;for(let W=0,X=L.length;W<X;W++)L[W]!==S[W]&&(i.disableVertexAttribArray(W),L[W]=0)}function E(S,L,W,X,K,st,Z){Z===!0?i.vertexAttribIPointer(S,L,W,K,st):i.vertexAttribPointer(S,L,W,X,K,st)}function b(S,L,W,X){y();let K=X.attributes,st=W.getAttributes(),Z=L.defaultAttributeValues;for(let lt in st){let J=st[lt];if(J.location>=0){let ct=K[lt];if(ct===void 0&&(lt==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),lt==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),ct!==void 0){let vt=ct.normalized,At=ct.itemSize,Wt=t.get(ct);if(Wt===void 0)continue;let ne=Wt.buffer,j=Wt.type,at=Wt.bytesPerElement,Et=j===i.INT||j===i.UNSIGNED_INT||ct.gpuType===Il;if(ct.isInterleavedBufferAttribute){let dt=ct.data,It=dt.stride,kt=ct.offset;if(dt.isInstancedInterleavedBuffer){for(let qt=0;qt<J.locationSize;qt++)u(J.location+qt,dt.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let qt=0;qt<J.locationSize;qt++)m(J.location+qt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let qt=0;qt<J.locationSize;qt++)E(J.location+qt,At/J.locationSize,j,vt,It*at,(kt+At/J.locationSize*qt)*at,Et)}else{if(ct.isInstancedBufferAttribute){for(let dt=0;dt<J.locationSize;dt++)u(J.location+dt,ct.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let dt=0;dt<J.locationSize;dt++)m(J.location+dt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let dt=0;dt<J.locationSize;dt++)E(J.location+dt,At/J.locationSize,j,vt,At*at,At/J.locationSize*dt*at,Et)}}else if(Z!==void 0){let vt=Z[lt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(J.location,vt);break;case 3:i.vertexAttrib3fv(J.location,vt);break;case 4:i.vertexAttrib4fv(J.location,vt);break;default:i.vertexAttrib1fv(J.location,vt)}}}}A()}function P(){z();for(let S in n){let L=n[S];for(let W in L){let X=L[W];for(let K in X)h(X[K].object),delete X[K];delete L[W]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let W in L){let X=L[W];for(let K in X)h(X[K].object),delete X[K];delete L[W]}delete n[S.id]}function I(S){for(let L in n){let W=n[L];if(W[S.id]===void 0)continue;let X=W[S.id];for(let K in X)h(X[K].object),delete X[K];delete W[S.id]}}function z(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Qm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];e.update(g,n,1)}function l(c,h,d,f){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let y=0;y<d;y++)_+=h[y]*f[y];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==ln&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let z=I===tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==An&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Tn&&!z)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:P,maxSamples:C}}function tg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new $n,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let g=d.length!==0||f||n!==0||s;return s=f,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,g){let _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let A=r?0:n,E=A*4,b=u.clippingState||null;l.value=b,b=h(_,f,E,g);for(let P=0;P!==E;++P)b[P]=e[P];u.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,g,_){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let u=g+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,b=g;E!==y;++E,b+=4)o.copy(d[E]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function eg(i){let t=new WeakMap;function e(o,a){return a===wa?o.mapping=gs:a===Ea&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wa||a===Ea)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ol(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var bs=class extends zi{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,jc=[.125,.215,.35,.446,.526,.582],Li=20,la=new bs,th=new ce,ca=null,ha=0,ua=0,da=!1,Ci=(1+Math.sqrt(5))/2,ls=1/Ci,eh=[new V(-Ci,ls,0),new V(Ci,ls,0),new V(-ls,0,Ci),new V(ls,0,Ci),new V(0,Ci,-ls),new V(0,Ci,ls),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=da,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:tr,format:ln,colorSpace:mi,depthBuffer:!1},s=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ng(r)),this._blurMaterial=ig(r,t,e)}return s}_compileMaterial(t){let e=new ke(this._lodPlanes[0],t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(th),h.toneMapping=di,h.autoClear=!1;let g=new so({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new ke(new Bi,g),y=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,y=!0):(g.color.copy(th),y=!0);for(let u=0;u<6;u++){let A=u%3;A===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):A===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let E=this._cubeSize;Vr(s,A*E,u>2?E:0,E,E),h.setRenderTarget(s),y&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Vr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eh[(s-r-1)%eh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ke(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Li-1),y=r/_,m=isFinite(r)?1+Math.floor(h*y):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let u=[],A=0;for(let I=0;I<Li;++I){let z=I/y,w=Math.exp(-z*z/2);u.push(w),I===0?A+=w:I<m&&(A+=2*w)}for(let I=0;I<u.length;I++)u[I]=u[I]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;let b=this._sizeLods[s],P=3*b*(s>E-cs?s-E+cs:0),C=4*(this._cubeSize-b);Vr(e,P,C,3*b,2*b),l.setRenderTarget(e),l.render(d,la)}};function ng(i){let t=[],e=[],n=[],s=i,r=i-cs+1+jc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-cs?l=jc[o-i+cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,y=3,m=2,u=1,A=new Float32Array(y*_*g),E=new Float32Array(m*_*g),b=new Float32Array(u*_*g);for(let C=0;C<g;C++){let I=C%3*2/3-1,z=C>2?0:-1,w=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];A.set(w,y*_*C),E.set(f,m*_*C);let S=[C,C,C,C,C,C];b.set(S,u*_*C)}let P=new sn;P.setAttribute("position",new We(A,y)),P.setAttribute("uv",new We(E,m)),P.setAttribute("faceIndex",new We(b,u)),t.push(P),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(i,t,e){let n=new mn(i,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ig(i,t,e){let n=new Float32Array(Li),s=new V(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ih(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function sh(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function sg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wa||l===Ea,h=l===gs||l===_s;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new lo(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let g=a.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new lo(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function og(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let y=f.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let _ in g){let y=g[_];for(let m=0,u=y.length;m<u;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(d){let f=[],g=d.index,_=d.attributes.position,y=0;if(g!==null){let A=g.array;y=g.version;for(let E=0,b=A.length;E<b;E+=3){let P=A[E+0],C=A[E+1],I=A[E+2];f.push(P,C,C,I,I,P)}}else if(_!==void 0){let A=_.array;y=_.version;for(let E=0,b=A.length/3-1;E<b;E+=3){let P=E+0,C=E+1,I=E+2;f.push(P,C,C,I,I,P)}}else return;let m=new(kh(f)?ro:Ms)(f,1);m.version=y;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ag(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*o),e.update(g,n,1)}function c(f,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,f*o,_),e.update(g,n,_))}function h(f,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,_);let m=0;for(let u=0;u<_;u++)m+=g[u];e.update(m,n,1)}function d(f,g,_,y){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,g[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,y,0,_);let u=0;for(let A=0;A<_;A++)u+=g[A]*y[A];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function lg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cg(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let w=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],E=0;g===!0&&(E=1),_===!0&&(E=2),y===!0&&(E=3);let b=a.attributes.position.count*E,P=1;b>t.maxTextureSize&&(P=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*P*4*d),I=new eo(C,b,P,d);I.type=Tn,I.needsUpdate=!0;let z=E*4;for(let S=0;S<d;S++){let L=m[S],W=u[S],X=A[S],K=b*P*4*S;for(let st=0;st<L.count;st++){let Z=st*z;g===!0&&(s.fromBufferAttribute(L,st),C[K+Z+0]=s.x,C[K+Z+1]=s.y,C[K+Z+2]=s.z,C[K+Z+3]=0),_===!0&&(s.fromBufferAttribute(W,st),C[K+Z+4]=s.x,C[K+Z+5]=s.y,C[K+Z+6]=s.z,C[K+Z+7]=0),y===!0&&(s.fromBufferAttribute(X,st),C[K+Z+8]=s.x,C[K+Z+9]=s.y,C[K+Z+10]=s.z,C[K+Z+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new he(b,P)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let y=0;y<c.length;y++)g+=c[y];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function hg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ws=class extends cn{constructor(t,e,n,s,r,o,a,l,c,h=ds){if(h!==ds&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ds&&(n=Ni),n===void 0&&h===vs&&(n=xs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wh=new cn,rh=new ws(1,1),Xh=new eo,qh=new sl,Yh=new oo,oh=[],ah=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function As(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yo(i,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),Fe(e,n)}}function gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;ch.set(n),i.uniformMatrix3fv(this.addr,!1,ch),Fe(e,n)}}function _g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),Fe(e,n)}}function xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rh.compareFunction=zh,r=rh):r=Wh,e.setTexture2D(t||r,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qh,s)}function Rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yh,s)}function Cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xh,s)}function Ig(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return xg;case 35667:case 35671:return vg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return wg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Lg(i,t){let e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function Dg(i,t){let e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function Ug(i,t){let e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function Ng(i,t){let e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fg(i,t){let e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Og(i,t){let e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bg(i,t){i.uniform1iv(this.addr,t)}function zg(i,t){i.uniform2iv(this.addr,t)}function kg(i,t){i.uniform3iv(this.addr,t)}function Vg(i,t){i.uniform4iv(this.addr,t)}function Hg(i,t){i.uniform1uiv(this.addr,t)}function Gg(i,t){i.uniform2uiv(this.addr,t)}function Wg(i,t){i.uniform3uiv(this.addr,t)}function Xg(i,t){i.uniform4uiv(this.addr,t)}function qg(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wh,r[o])}function Yg(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qh,r[o])}function Zg(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yh,r[o])}function $g(i,t,e){let n=this.cache,s=t.length,r=yo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xh,r[o])}function Jg(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return Ng;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Hg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return $g}}var al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}},ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}},cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},fa=/(\w+)(\])?(\[|\.)?/g;function uh(i,t){i.seq.push(t),i.map[t.id]=t}function Kg(i,t,e){let n=i.name,s=n.length;for(fa.lastIndex=0;;){let r=fa.exec(n),o=fa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uh(e,c===void 0?new al(a,i,t):new ll(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new cl(a),uh(e,d)),e=d}}}var ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Kg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function dh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qg=37297,jg=0;function t0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var fh=new Xt;function e0(i){ee._getMatrix(fh,ee.workingColorSpace,i);let t=`mat3( ${fh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case vo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ph(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+t0(i.getShaderSource(t),o)}else return s}function n0(i,t){let e=e0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function i0(i,t){let e;switch(t){case Td:e="Linear";break;case Ad:e="Reinhard";break;case Rd:e="Cineon";break;case Cd:e="ACESFilmic";break;case Pd:e="AgX";break;case Ld:e="Neutral";break;case Id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hr=new V;function s0(){ee.getLuminanceCoefficients(Hr);let i=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function o0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ks(i){return i!==""}function mh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(l0,h0)}var c0=new Map;function h0(i,t){let e=Zt[t];if(e===void 0){let n=c0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}var u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(i){return i.replace(u0,d0)}function d0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function f0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function p0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case _o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function g0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Ed:t="ENVMAP_BLENDING_ADD";break}return t}function _0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function x0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=f0(e),c=p0(e),h=m0(e),d=g0(e),f=_0(e),g=r0(e),_=o0(r),y=s.createProgram(),m,u,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),u.length>0&&(u+=`
`)):(m=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),u=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Zt.tonemapping_pars_fragment:"",e.toneMapping!==di?i0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),s0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=hl(o),o=mh(o,e),o=gh(o,e),a=hl(a),a=mh(a,e),a=gh(a,e),o=_h(o),a=_h(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Bn?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=A+m+o,b=A+u+a,P=dh(s,s.VERTEX_SHADER,E),C=dh(s,s.FRAGMENT_SHADER,b);s.attachShader(y,P),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function I(L){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(y).trim(),X=s.getShaderInfoLog(P).trim(),K=s.getShaderInfoLog(C).trim(),st=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,C);else{let lt=ph(s,P,"vertex"),J=ph(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+lt+`
`+J)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||K==="")&&(Z=!1);Z&&(L.diagnostics={runnable:st,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:u}})}s.deleteShader(P),s.deleteShader(C),z=new ps(s,y),w=a0(s,y)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,Qg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}var v0=0,ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dl(t),e.set(t,n)),n}},dl=class{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}};function y0(i,t,e,n,s,r,o){let a=new io,l=new ul,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,W,X){let K=W.fog,st=X.geometry,Z=w.isMeshStandardMaterial?W.environment:null,lt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),J=lt&&lt.mapping===_o?lt.image.height:null,ct=_[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));let vt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,At=vt!==void 0?vt.length:0,Wt=0;st.morphAttributes.position!==void 0&&(Wt=1),st.morphAttributes.normal!==void 0&&(Wt=2),st.morphAttributes.color!==void 0&&(Wt=3);let ne,j,at,Et;if(ct){let Qt=Nn[ct];ne=Qt.vertexShader,j=Qt.fragmentShader}else ne=w.vertexShader,j=w.fragmentShader,l.update(w),at=l.getVertexShaderID(w),Et=l.getFragmentShaderID(w);let dt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),kt=X.isInstancedMesh===!0,qt=X.isBatchedMesh===!0,fe=!!w.map,Vt=!!w.matcap,ge=!!lt,O=!!w.aoMap,He=!!w.lightMap,jt=!!w.bumpMap,$t=!!w.normalMap,Pt=!!w.displacementMap,_e=!!w.emissiveMap,Dt=!!w.metalnessMap,R=!!w.roughnessMap,v=w.anisotropy>0,k=w.clearcoat>0,tt=w.dispersion>0,it=w.iridescence>0,Q=w.sheen>0,Rt=w.transmission>0,mt=v&&!!w.anisotropyMap,gt=k&&!!w.clearcoatMap,Yt=k&&!!w.clearcoatNormalMap,ot=k&&!!w.clearcoatRoughnessMap,Mt=it&&!!w.iridescenceMap,Lt=it&&!!w.iridescenceThicknessMap,Ot=Q&&!!w.sheenColorMap,yt=Q&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Ct=!!w.specularColorMap,de=!!w.specularIntensityMap,U=Rt&&!!w.transmissionMap,ht=Rt&&!!w.thicknessMap,$=!!w.gradientMap,et=!!w.alphaMap,_t=w.alphaTest>0,ut=!!w.alphaHash,Ft=!!w.extensions,oe=di;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(oe=i.toneMapping);let Ee={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:ne,fragmentShader:j,defines:w.defines,customVertexShaderID:at,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:qt,batchingColor:qt&&X._colorsTexture!==null,instancing:kt,instancingColor:kt&&X.instanceColor!==null,instancingMorph:kt&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:mi,alphaToCoverage:!!w.alphaToCoverage,map:fe,matcap:Vt,envMap:ge,envMapMode:ge&&lt.mapping,envMapCubeUVHeight:J,aoMap:O,lightMap:He,bumpMap:jt,normalMap:$t,displacementMap:f&&Pt,emissiveMap:_e,normalMapObjectSpace:$t&&w.normalMapType===Od,normalMapTangentSpace:$t&&w.normalMapType===Fd,metalnessMap:Dt,roughnessMap:R,anisotropy:v,anisotropyMap:mt,clearcoat:k,clearcoatMap:gt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:it,iridescenceMap:Mt,iridescenceThicknessMap:Lt,sheen:Q,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:Kt,specularColorMap:Ct,specularIntensityMap:de,transmission:Rt,transmissionMap:U,thicknessMap:ht,gradientMap:$,opaque:w.transparent===!1&&w.blending===us&&w.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:ut,combine:w.combine,mapUv:fe&&y(w.map.channel),aoMapUv:O&&y(w.aoMap.channel),lightMapUv:He&&y(w.lightMap.channel),bumpMapUv:jt&&y(w.bumpMap.channel),normalMapUv:$t&&y(w.normalMap.channel),displacementMapUv:Pt&&y(w.displacementMap.channel),emissiveMapUv:_e&&y(w.emissiveMap.channel),metalnessMapUv:Dt&&y(w.metalnessMap.channel),roughnessMapUv:R&&y(w.roughnessMap.channel),anisotropyMapUv:mt&&y(w.anisotropyMap.channel),clearcoatMapUv:gt&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:yt&&y(w.sheenRoughnessMap.channel),specularMapUv:Kt&&y(w.specularMap.channel),specularColorMapUv:Ct&&y(w.specularColorMap.channel),specularIntensityMapUv:de&&y(w.specularIntensityMap.channel),transmissionMapUv:U&&y(w.transmissionMap.channel),thicknessMapUv:ht&&y(w.thicknessMap.channel),alphaMapUv:et&&y(w.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&($t||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!st.attributes.uv&&(fe||et),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:It,skinning:X.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:fe&&w.map.isVideoTexture===!0&&ee.getTransfer(w.map.colorSpace)===me,decodeVideoTextureEmissive:_e&&w.emissiveMap.isVideoTexture===!0&&ee.getTransfer(w.emissiveMap.colorSpace)===me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===En,flipSided:w.side===nn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function u(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(A(S,w),E(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function A(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function E(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function b(w){let S=_[w.type],L;if(S){let W=Nn[S];L=hf.clone(W.uniforms)}else L=w.uniforms;return L}function P(w,S){let L;for(let W=0,X=h.length;W<X;W++){let K=h[W];if(K.cacheKey===S){L=K,++L.usedTimes;break}}return L===void 0&&(L=new x0(i,S,w,r),h.push(L)),L}function C(w){if(--w.usedTimes===0){let S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function I(w){l.remove(w)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:b,acquireProgram:P,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:z}}function M0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function S0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,g,_,y,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:y,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=g,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=m),t++,u}function a(d,f,g,_,y,m){let u=o(d,f,g,_,y,m);g.transmission>0?n.push(u):g.transparent===!0?s.push(u):e.push(u)}function l(d,f,g,_,y,m){let u=o(d,f,g,_,y,m);g.transmission>0?n.unshift(u):g.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||S0),n.length>1&&n.sort(f||vh),s.length>1&&s.sort(f||vh)}function h(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function b0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new yh,i.set(n,[o])):s>=r.length?(o=new yh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function w0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new ce};break;case"SpotLight":e={position:new V,direction:new V,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function E0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var T0=0;function A0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R0(i){let t=new w0,e=E0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new ue,o=new ue;function a(c){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,_=0,y=0,m=0,u=0,A=0,E=0,b=0,P=0,C=0,I=0;c.sort(A0);for(let w=0,S=c.length;w<S;w++){let L=c[w],W=L.color,X=L.intensity,K=L.distance,st=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=W.r*X,d+=W.g*X,f+=W.b*X;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],X);I++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let lt=L.shadow,J=e.get(L);J.shadowIntensity=lt.intensity,J.shadowBias=lt.bias,J.shadowNormalBias=lt.normalBias,J.shadowRadius=lt.radius,J.shadowMapSize=lt.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=st,n.directionalShadowMatrix[g]=L.shadow.matrix,A++}n.directional[g]=Z,g++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(W).multiplyScalar(X),Z.distance=K,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[y]=Z;let lt=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,lt.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[y]=lt.matrix,L.castShadow){let J=e.get(L);J.shadowIntensity=lt.intensity,J.shadowBias=lt.bias,J.shadowNormalBias=lt.normalBias,J.shadowRadius=lt.radius,J.shadowMapSize=lt.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=st,b++}y++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(W).multiplyScalar(X),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Z,m++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let lt=L.shadow,J=e.get(L);J.shadowIntensity=lt.intensity,J.shadowBias=lt.bias,J.shadowNormalBias=lt.normalBias,J.shadowRadius=lt.radius,J.shadowMapSize=lt.mapSize,J.shadowCameraNear=lt.camera.near,J.shadowCameraFar=lt.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=st,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=Z,_++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(X),Z.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[u]=Z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let z=n.hash;(z.directionalLength!==g||z.pointLength!==_||z.spotLength!==y||z.rectAreaLength!==m||z.hemiLength!==u||z.numDirectionalShadows!==A||z.numPointShadows!==E||z.numSpotShadows!==b||z.numSpotMaps!==P||z.numLightProbes!==I)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,z.directionalLength=g,z.pointLength=_,z.spotLength=y,z.rectAreaLength=m,z.hemiLength=u,z.numDirectionalShadows=A,z.numPointShadows=E,z.numSpotShadows=b,z.numSpotMaps=P,z.numLightProbes=I,n.version=T0++)}function l(c,h){let d=0,f=0,g=0,_=0,y=0,m=h.matrixWorldInverse;for(let u=0,A=c.length;u<A;u++){let E=c[u];if(E.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(E.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),g++}else if(E.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Mh(i){let t=new R0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function C0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Mh(i),t.set(s,[a])):r>=o.length?(a=new Mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var fl=class extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pl=class extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P0=`uniform sampler2D shadow_pass;
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
}`;function L0(i,t,e){let n=new ao,s=new he,r=new he,o=new xe,a=new fl({depthPacking:Nd}),l=new pl,c={},h=e.maxTextureSize,d={[On]:nn,[nn]:On,[En]:En},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:I0,fragmentShader:P0}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let _=new sn;_.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let u=this.type;this.render=function(C,I,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ui),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let X=u!==Zn&&this.type===Zn,K=u===Zn&&this.type!==Zn;for(let st=0,Z=C.length;st<Z;st++){let lt=C[st],J=lt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ct=J.getFrameExtents();if(s.multiply(ct),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,J.mapSize.y=r.y)),J.map===null||X===!0||K===!0){let At=this.type!==Zn?{minFilter:Pe,magFilter:Pe}:{};J.map!==null&&J.map.dispose(),J.map=new mn(s.x,s.y,At),J.map.texture.name=lt.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let vt=J.getViewportCount();for(let At=0;At<vt;At++){let Wt=J.getViewport(At);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),W.viewport(o),J.updateMatrices(lt,At),n=J.getFrustum(),b(I,z,J.camera,lt,this.type)}J.isPointLightShadow!==!0&&this.type===Zn&&A(J,z),J.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,S,L)};function A(C,I){let z=t.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,z,f,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,z,g,y,null)}function E(C,I,z,w){let S=null,L=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)S=L;else if(S=z.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let W=S.uuid,X=I.uuid,K=c[W];K===void 0&&(K={},c[W]=K);let st=K[X];st===void 0&&(st=S.clone(),K[X]=st,I.addEventListener("dispose",P)),S=st}if(S.visible=I.visible,S.wireframe=I.wireframe,w===Zn?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:d[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let W=i.properties.get(S);W.light=z}return S}function b(C,I,z,w,S){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let X=t.update(C),K=C.material;if(Array.isArray(K)){let st=X.groups;for(let Z=0,lt=st.length;Z<lt;Z++){let J=st[Z],ct=K[J.materialIndex];if(ct&&ct.visible){let vt=E(C,ct,w,S);C.onBeforeShadow(i,C,I,z,X,vt,J),i.renderBufferDirect(z,null,X,vt,C,J),C.onAfterShadow(i,C,I,z,X,vt,J)}}}else if(K.visible){let st=E(C,K,w,S);C.onBeforeShadow(i,C,I,z,X,st,null),i.renderBufferDirect(z,null,X,st,C,null),C.onAfterShadow(i,C,I,z,X,st,null)}}let W=C.children;for(let X=0,K=W.length;X<K;X++)b(W[X],I,z,w,S)}function P(C){C.target.removeEventListener("dispose",P);for(let z in c){let w=c[z],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var D0={[_a]:xa,[va]:Sa,[ya]:ba,[ms]:Ma,[xa]:_a,[Sa]:va,[ba]:ya,[Ma]:ms};function U0(i,t){function e(){let U=!1,ht=new xe,$=null,et=new xe(0,0,0,0);return{setMask:function(_t){$!==_t&&!U&&(i.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){U=_t},setClear:function(_t,ut,Ft,oe,Ee){Ee===!0&&(_t*=oe,ut*=oe,Ft*=oe),ht.set(_t,ut,Ft,oe),et.equals(ht)===!1&&(i.clearColor(_t,ut,Ft,oe),et.copy(ht))},reset:function(){U=!1,$=null,et.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,$=null,et=null,_t=null;return{setReversed:function(ut){if(ht!==ut){let Ft=t.get("EXT_clip_control");ht?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let oe=_t;_t=null,this.setClear(oe)}ht=ut},getReversed:function(){return ht},setTest:function(ut){ut?dt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(ut){$!==ut&&!U&&(i.depthMask(ut),$=ut)},setFunc:function(ut){if(ht&&(ut=D0[ut]),et!==ut){switch(ut){case _a:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=ut}},setLocked:function(ut){U=ut},setClear:function(ut){_t!==ut&&(ht&&(ut=1-ut),i.clearDepth(ut),_t=ut)},reset:function(){U=!1,$=null,et=null,_t=null,ht=!1}}}function s(){let U=!1,ht=null,$=null,et=null,_t=null,ut=null,Ft=null,oe=null,Ee=null;return{setTest:function(Qt){U||(Qt?dt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(Qt){ht!==Qt&&!U&&(i.stencilMask(Qt),ht=Qt)},setFunc:function(Qt,Le,Je){($!==Qt||et!==Le||_t!==Je)&&(i.stencilFunc(Qt,Le,Je),$=Qt,et=Le,_t=Je)},setOp:function(Qt,Le,Je){(ut!==Qt||Ft!==Le||oe!==Je)&&(i.stencilOp(Qt,Le,Je),ut=Qt,Ft=Le,oe=Je)},setLocked:function(Qt){U=Qt},setClear:function(Qt){Ee!==Qt&&(i.clearStencil(Qt),Ee=Qt)},reset:function(){U=!1,ht=null,$=null,et=null,_t=null,ut=null,Ft=null,oe=null,Ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,g=[],_=null,y=!1,m=null,u=null,A=null,E=null,b=null,P=null,C=null,I=new ce(0,0,0),z=0,w=!1,S=null,L=null,W=null,X=null,K=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,lt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=lt>=1):J.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=lt>=2);let ct=null,vt={},At=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),ne=new xe().fromArray(At),j=new xe().fromArray(Wt);function at(U,ht,$,et){let _t=new Uint8Array(4),ut=i.createTexture();i.bindTexture(U,ut),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<$;Ft++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ht+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return ut}let Et={};Et[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(ms),jt(!1),$t(wc),dt(i.CULL_FACE),O(ui);function dt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function It(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function kt(U,ht){return d[U]!==ht?(i.bindFramebuffer(U,ht),d[U]=ht,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function qt(U,ht){let $=g,et=!1;if(U){$=f.get(ht),$===void 0&&($=[],f.set(ht,$));let _t=U.textures;if($.length!==_t.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ft=_t.length;ut<Ft;ut++)$[ut]=i.COLOR_ATTACHMENT0+ut;$.length=_t.length,et=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,et=!0);et&&i.drawBuffers($)}function fe(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let Vt={[Ii]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[ld]:i.FUNC_REVERSE_SUBTRACT};Vt[cd]=i.MIN,Vt[hd]=i.MAX;let ge={[ud]:i.ZERO,[dd]:i.ONE,[fd]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[vd]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[md]:i.DST_ALPHA,[pd]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[gd]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(U,ht,$,et,_t,ut,Ft,oe,Ee,Qt){if(U===ui){y===!0&&(It(i.BLEND),y=!1);return}if(y===!1&&(dt(i.BLEND),y=!0),U!==od){if(U!==m||Qt!==w){if((u!==Ii||b!==Ii)&&(i.blendEquation(i.FUNC_ADD),u=Ii,b=Ii),Qt)switch(U){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,E=null,P=null,C=null,I.set(0,0,0),z=0,m=U,w=Qt}return}_t=_t||ht,ut=ut||$,Ft=Ft||et,(ht!==u||_t!==b)&&(i.blendEquationSeparate(Vt[ht],Vt[_t]),u=ht,b=_t),($!==A||et!==E||ut!==P||Ft!==C)&&(i.blendFuncSeparate(ge[$],ge[et],ge[ut],ge[Ft]),A=$,E=et,P=ut,C=Ft),(oe.equals(I)===!1||Ee!==z)&&(i.blendColor(oe.r,oe.g,oe.b,Ee),I.copy(oe),z=Ee),m=U,w=!1}function He(U,ht){U.side===En?It(i.CULL_FACE):dt(i.CULL_FACE);let $=U.side===nn;ht&&($=!$),jt($),U.blending===us&&U.transparent===!1?O(ui):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let et=U.stencilWrite;a.setTest(et),et&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function $t(U){U!==id?(dt(i.CULL_FACE),U!==L&&(U===wc?i.cullFace(i.BACK):U===sd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),L=U}function Pt(U){U!==W&&(Z&&i.lineWidth(U),W=U)}function _e(U,ht,$){U?(dt(i.POLYGON_OFFSET_FILL),(X!==ht||K!==$)&&(i.polygonOffset(ht,$),X=ht,K=$)):It(i.POLYGON_OFFSET_FILL)}function Dt(U){U?dt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+st-1),ct!==U&&(i.activeTexture(U),ct=U)}function v(U,ht,$){$===void 0&&(ct===null?$=i.TEXTURE0+st-1:$=ct);let et=vt[$];et===void 0&&(et={type:void 0,texture:void 0},vt[$]=et),(et.type!==U||et.texture!==ht)&&(ct!==$&&(i.activeTexture($),ct=$),i.bindTexture(U,ht||Et[U]),et.type=U,et.texture=ht)}function k(){let U=vt[ct];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function yt(U){j.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Kt(U,ht){let $=c.get(ht);$===void 0&&($=new WeakMap,c.set(ht,$));let et=$.get(U);et===void 0&&(et=i.getUniformBlockIndex(ht,U.name),$.set(U,et))}function Ct(U,ht){let et=c.get(ht).get(U);l.get(ht)!==et&&(i.uniformBlockBinding(ht,et,U.__bindingPointIndex),l.set(ht,et))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,vt={},d={},f=new WeakMap,g=[],_=null,y=!1,m=null,u=null,A=null,E=null,b=null,P=null,C=null,I=new ce(0,0,0),z=0,w=!1,S=null,L=null,W=null,X=null,K=null,ne.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:It,bindFramebuffer:kt,drawBuffers:qt,useProgram:fe,setBlending:O,setMaterial:He,setFlipSided:jt,setCullFace:$t,setLineWidth:Pt,setPolygonOffset:_e,setScissorTest:Dt,activeTexture:R,bindTexture:v,unbindTexture:k,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:Mt,texImage3D:Lt,updateUBOMapping:Kt,uniformBlockBinding:Ct,texStorage2D:Yt,texStorage3D:ot,texSubImage2D:Q,texSubImage3D:Rt,compressedTexSubImage2D:mt,compressedTexSubImage3D:gt,scissor:Ot,viewport:yt,reset:de}}function Sh(i,t,e,n){let s=N0(n);switch(e){case Dh:return i*t;case Nh:return i*t;case Fh:return i*t*2;case xo:return i*t/s.components*s.byteLength;case Dl:return i*t/s.components*s.byteLength;case Oh:return i*t*2/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case Uh:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case Nl:return i*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Ia:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case $a:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bh:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function N0(i){switch(i){case An:case Ih:return{byteLength:1,components:1};case js:case Ph:case tr:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case Ni:case Il:case Tn:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function F0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):jr("canvas")}function y(R,v,k){let tt=1,it=Dt(R);if((it.width>k||it.height>k)&&(tt=k/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Q=Math.floor(tt*it.width),Rt=Math.floor(tt*it.height);d===void 0&&(d=_(Q,Rt));let mt=v?_(Q,Rt):d;return mt.width=Q,mt.height=Rt,mt.getContext("2d").drawImage(R,0,0,Q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Q+"x"+Rt+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,v,k,tt,it=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=v;if(v===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),v===i.RGBA){let Rt=it?vo:ee.getTransfer(tt);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=Rt===me?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function b(R,v){let k;return R?v===null||v===Ni||v===xs?k=i.DEPTH24_STENCIL8:v===Tn?k=i.DEPTH32F_STENCIL8:v===js&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ni||v===xs?k=i.DEPTH_COMPONENT24:v===Tn?k=i.DEPTH_COMPONENT32F:v===js&&(k=i.DEPTH_COMPONENT16),k}function P(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pe&&R.minFilter!==Fn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function C(R){let v=R.target;v.removeEventListener("dispose",C),z(v),v.isVideoTexture&&h.delete(v)}function I(R){let v=R.target;v.removeEventListener("dispose",I),S(v)}function z(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,tt=f.get(k);if(tt){let it=tt[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(R),Object.keys(tt).length===0&&f.delete(k)}n.remove(R)}function w(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let k=R.source,tt=f.get(k);delete tt[v.__cacheKey],o.memory.textures--}function S(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let it=0;it<v.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=R.textures;for(let tt=0,it=k.length;tt<it;tt++){let Q=n.get(k[tt]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[tt])}n.remove(R)}let L=0;function W(){L=0}function X(){let R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function K(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function st(R,v){let k=n.get(R);if(R.isVideoTexture&&Pt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let tt=R.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,R,v);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Z(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function lt(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){j(k,R,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function J(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){at(k,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let ct={[Ta]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},vt={[Pe]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[Sr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},At={[Bd]:i.NEVER,[Wd]:i.ALWAYS,[zd]:i.LESS,[zh]:i.LEQUAL,[kd]:i.EQUAL,[Gd]:i.GEQUAL,[Vd]:i.GREATER,[Hd]:i.NOTEQUAL};function Wt(R,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Fn||v.magFilter===Bo||v.magFilter===Sr||v.magFilter===Ui||v.minFilter===Fn||v.minFilter===Bo||v.minFilter===Sr||v.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ct[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ct[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ct[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,vt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pe||v.minFilter!==Sr&&v.minFilter!==Ui||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",C));let tt=v.source,it=f.get(tt);it===void 0&&(it={},f.set(tt,it));let Q=K(v);if(Q!==R.__cacheKey){it[Q]===void 0&&(it[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[Q].usedTimes++;let Rt=it[R.__cacheKey];Rt!==void 0&&(it[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(v)),R.__cacheKey=Q,R.__webglTexture=it[Q].texture}return k}function j(R,v,k){let tt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=i.TEXTURE_3D);let it=ne(R,v),Q=v.source;e.bindTexture(tt,R.__webglTexture,i.TEXTURE0+k);let Rt=n.get(Q);if(Q.version!==Rt.__version||it===!0){e.activeTexture(i.TEXTURE0+k);let mt=ee.getPrimaries(ee.workingColorSpace),gt=v.colorSpace===hi?null:ee.getPrimaries(v.colorSpace),Yt=v.colorSpace===hi||mt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let ot=y(v.image,!1,s.maxTextureSize);ot=_e(v,ot);let Mt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),Ot=E(v.internalFormat,Mt,Lt,v.colorSpace,v.isVideoTexture);Wt(tt,v);let yt,Kt=v.mipmaps,Ct=v.isVideoTexture!==!0,de=Rt.__version===void 0||it===!0,U=Q.dataReady,ht=P(v,ot);if(v.isDepthTexture)Ot=b(v.format===vs,v.type),de&&(Ct?e.texStorage2D(i.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,Mt,Lt,null));else if(v.isDataTexture)if(Kt.length>0){Ct&&de&&e.texStorage2D(i.TEXTURE_2D,ht,Ot,Kt[0].width,Kt[0].height);for(let $=0,et=Kt.length;$<et;$++)yt=Kt[$],Ct?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,yt.width,yt.height,Mt,Lt,yt.data):e.texImage2D(i.TEXTURE_2D,$,Ot,yt.width,yt.height,0,Mt,Lt,yt.data);v.generateMipmaps=!1}else Ct?(de&&e.texStorage2D(i.TEXTURE_2D,ht,Ot,ot.width,ot.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Mt,Lt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,Mt,Lt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ct&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ot,Kt[0].width,Kt[0].height,ot.depth);for(let $=0,et=Kt.length;$<et;$++)if(yt=Kt[$],v.format!==ln)if(Mt!==null)if(Ct){if(U)if(v.layerUpdates.size>0){let _t=Sh(yt.width,yt.height,v.format,v.type);for(let ut of v.layerUpdates){let Ft=yt.data.subarray(ut*_t/yt.data.BYTES_PER_ELEMENT,(ut+1)*_t/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ut,yt.width,yt.height,1,Mt,Ft)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,ot.depth,Mt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ot,yt.width,yt.height,ot.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,yt.width,yt.height,ot.depth,Mt,Lt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Ot,yt.width,yt.height,ot.depth,0,Mt,Lt,yt.data)}else{Ct&&de&&e.texStorage2D(i.TEXTURE_2D,ht,Ot,Kt[0].width,Kt[0].height);for(let $=0,et=Kt.length;$<et;$++)yt=Kt[$],v.format!==ln?Mt!==null?Ct?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,yt.width,yt.height,Mt,Lt,yt.data):e.texImage2D(i.TEXTURE_2D,$,Ot,yt.width,yt.height,0,Mt,Lt,yt.data)}else if(v.isDataArrayTexture)if(Ct){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Ot,ot.width,ot.height,ot.depth),U)if(v.layerUpdates.size>0){let $=Sh(ot.width,ot.height,v.format,v.type);for(let et of v.layerUpdates){let _t=ot.data.subarray(et*$/ot.data.BYTES_PER_ELEMENT,(et+1)*$/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,Mt,Lt,_t)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Mt,Lt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,Mt,Lt,ot.data);else if(v.isData3DTexture)Ct?(de&&e.texStorage3D(i.TEXTURE_3D,ht,Ot,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Mt,Lt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,Mt,Lt,ot.data);else if(v.isFramebufferTexture){if(de)if(Ct)e.texStorage2D(i.TEXTURE_2D,ht,Ot,ot.width,ot.height);else{let $=ot.width,et=ot.height;for(let _t=0;_t<ht;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ot,$,et,0,Mt,Lt,null),$>>=1,et>>=1}}else if(Kt.length>0){if(Ct&&de){let $=Dt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Ot,$.width,$.height)}for(let $=0,et=Kt.length;$<et;$++)yt=Kt[$],Ct?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Mt,Lt,yt):e.texImage2D(i.TEXTURE_2D,$,Ot,Mt,Lt,yt);v.generateMipmaps=!1}else if(Ct){if(de){let $=Dt(ot);e.texStorage2D(i.TEXTURE_2D,ht,Ot,$.width,$.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Lt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Mt,Lt,ot);m(v)&&u(tt),Rt.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function at(R,v,k){if(v.image.length!==6)return;let tt=ne(R,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let Q=n.get(it);if(it.version!==Q.__version||tt===!0){e.activeTexture(i.TEXTURE0+k);let Rt=ee.getPrimaries(ee.workingColorSpace),mt=v.colorSpace===hi?null:ee.getPrimaries(v.colorSpace),gt=v.colorSpace===hi||Rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Yt=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let et=0;et<6;et++)!Yt&&!ot?Mt[et]=y(v.image[et],!0,s.maxCubemapSize):Mt[et]=ot?v.image[et].image:v.image[et],Mt[et]=_e(v,Mt[et]);let Lt=Mt[0],Ot=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),Kt=E(v.internalFormat,Ot,yt,v.colorSpace),Ct=v.isVideoTexture!==!0,de=Q.__version===void 0||tt===!0,U=it.dataReady,ht=P(v,Lt);Wt(i.TEXTURE_CUBE_MAP,v);let $;if(Yt){Ct&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Kt,Lt.width,Lt.height);for(let et=0;et<6;et++){$=Mt[et].mipmaps;for(let _t=0;_t<$.length;_t++){let ut=$[_t];v.format!==ln?Ot!==null?Ct?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,ut.width,ut.height,Ot,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,Kt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,ut.width,ut.height,Ot,yt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,Kt,ut.width,ut.height,0,Ot,yt,ut.data)}}}else{if($=v.mipmaps,Ct&&de){$.length>0&&ht++;let et=Dt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Kt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Ct?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Mt[et].width,Mt[et].height,Ot,yt,Mt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Mt[et].width,Mt[et].height,0,Ot,yt,Mt[et].data);for(let _t=0;_t<$.length;_t++){let Ft=$[_t].image[et].image;Ct?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Ft.width,Ft.height,Ot,yt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,Kt,Ft.width,Ft.height,0,Ot,yt,Ft.data)}}else{Ct?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot,yt,Mt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Kt,Ot,yt,Mt[et]);for(let _t=0;_t<$.length;_t++){let ut=$[_t];Ct?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Ot,yt,ut.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,Kt,Ot,yt,ut.image[et])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),Q.__version=it.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Et(R,v,k,tt,it,Q){let Rt=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),gt=E(k.internalFormat,Rt,mt,k.colorSpace),Yt=n.get(v),ot=n.get(k);if(ot.__renderTarget=v,!Yt.__hasExternalTextures){let Mt=Math.max(1,v.width>>Q),Lt=Math.max(1,v.height>>Q);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Q,gt,Mt,Lt,v.depth,0,Rt,mt,null):e.texImage2D(it,Q,gt,Mt,Lt,0,Rt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),$t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,ot.__webglTexture,0,jt(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,ot.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let tt=v.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,Q=b(v.stencilBuffer,it),Rt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=jt(v);$t(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Q,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{let tt=v.textures;for(let it=0;it<tt.length;it++){let Q=tt[it],Rt=r.convert(Q.format,Q.colorSpace),mt=r.convert(Q.type),gt=E(Q.internalFormat,Rt,mt,Q.colorSpace),Yt=jt(v);k&&$t(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,gt,v.width,v.height):$t(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(v.depthTexture);tt.__renderTarget=v,(!tt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st(v.depthTexture,0);let it=tt.__webglTexture,Q=jt(v);if(v.depthTexture.format===ds)$t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===vs)$t(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function kt(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let tt=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),tt){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=tt}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,R)}else if(k){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]===void 0)v.__webglDepthbuffer[tt]=i.createRenderbuffer(),dt(v.__webglDepthbuffer[tt],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),dt(v.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,v,k){let tt=n.get(R);v!==void 0&&Et(tt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&kt(R)}function fe(R){let v=R.texture,k=n.get(R),tt=n.get(v);R.addEventListener("dispose",I);let it=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=v.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let gt=0;gt<v.mipmaps.length;gt++)k.__webglFramebuffer[mt][gt]=i.createFramebuffer()}else k.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<v.mipmaps.length;mt++)k.__webglFramebuffer[mt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let mt=0,gt=it.length;mt<gt;mt++){let Yt=n.get(it[mt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&$t(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let mt=0;mt<it.length;mt++){let gt=it[mt];k.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[mt]);let Yt=r.convert(gt.format,gt.colorSpace),ot=r.convert(gt.type),Mt=E(gt.internalFormat,Yt,ot,gt.colorSpace,R.isXRRenderTarget===!0),Lt=jt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,k.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,v);for(let mt=0;mt<6;mt++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)Et(k.__webglFramebuffer[mt][gt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,gt);else Et(k.__webglFramebuffer[mt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let mt=0,gt=it.length;mt<gt;mt++){let Yt=it[mt],ot=n.get(Yt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Wt(i.TEXTURE_2D,Yt),Et(k.__webglFramebuffer,R,Yt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),m(Yt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,tt.__webglTexture),Wt(mt,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)Et(k.__webglFramebuffer[gt],R,v,i.COLOR_ATTACHMENT0,mt,gt);else Et(k.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,mt,0);m(v)&&u(mt),e.unbindTexture()}R.depthBuffer&&kt(R)}function Vt(R){let v=R.textures;for(let k=0,tt=v.length;k<tt;k++){let it=v[k];if(m(it)){let Q=A(R),Rt=n.get(it).__webglTexture;e.bindTexture(Q,Rt),u(Q),e.unbindTexture()}}}let ge=[],O=[];function He(R){if(R.samples>0){if($t(R)===!1){let v=R.textures,k=R.width,tt=R.height,it=i.COLOR_BUFFER_BIT,Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),mt=v.length>1;if(mt)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);let Yt=n.get(v[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,k,tt,0,0,k,tt,it,i.NEAREST),l===!0&&(ge.length=0,O.length=0,ge.push(i.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(Q),O.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);let Yt=n.get(v[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function jt(R){return Math.min(s.maxSamples,R.samples)}function $t(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function _e(R,v){let k=R.colorSpace,tt=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==mi&&k!==hi&&(ee.getTransfer(k)===me?(tt!==ln||it!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=lt,this.setTextureCube=J,this.rebindTextures=qt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=$t}function O0(i,t){function e(n,s=hi){let r,o=ee.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.BYTE;if(n===Ph)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===tr)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===ln)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Fh)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Oh)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===$r)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Ia||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===$a||n===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===Ka||n===Qa||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ml=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},hs=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},B0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
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

}`,gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:z0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_l=class extends fi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,_=null,y=new gl,m=e.getContextAttributes(),u=null,A=null,E=[],b=[],P=new he,C=null,I=new Ze;I.viewport=new xe;let z=new Ze;z.viewport=new xe;let w=[I,z],S=new ml,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=E[j];return at===void 0&&(at=new Qs,E[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=E[j];return at===void 0&&(at=new Qs,E[j]=at),at.getGripSpace()},this.getHand=function(j){let at=E[j];return at===void 0&&(at=new Qs,E[j]=at),at.getHandSpace()};function X(j){let at=b.indexOf(j.inputSource);if(at===-1)return;let Et=E[at];Et!==void 0&&(Et.update(j.inputSource,j.frame,c||o),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",st);for(let j=0;j<E.length;j++){let at=b[j];at!==null&&(b[j]=null,E[j].disconnect(at))}L=null,W=null,y.reset(),t.setRenderTarget(u),g=null,f=null,d=null,s=null,A=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new mn(g.framebufferWidth,g.framebufferHeight,{format:ln,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Et=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?vs:ds,Et=m.stencil?xs:Ni);let It={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new mn(f.textureWidth,f.textureHeight,{format:ln,type:An,depthTexture:new ws(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function st(j){for(let at=0;at<j.removed.length;at++){let Et=j.removed[at],dt=b.indexOf(Et);dt>=0&&(b[dt]=null,E[dt].disconnect(Et))}for(let at=0;at<j.added.length;at++){let Et=j.added[at],dt=b.indexOf(Et);if(dt===-1){for(let kt=0;kt<E.length;kt++)if(kt>=b.length){b.push(Et),dt=kt;break}else if(b[kt]===null){b[kt]=Et,dt=kt;break}if(dt===-1)break}let It=E[dt];It&&It.connect(Et)}}let Z=new V,lt=new V;function J(j,at,Et){Z.setFromMatrixPosition(at.matrixWorld),lt.setFromMatrixPosition(Et.matrixWorld);let dt=Z.distanceTo(lt),It=at.projectionMatrix.elements,kt=Et.projectionMatrix.elements,qt=It[14]/(It[10]-1),fe=It[14]/(It[10]+1),Vt=(It[9]+1)/It[5],ge=(It[9]-1)/It[5],O=(It[8]-1)/It[0],He=(kt[8]+1)/kt[0],jt=qt*O,$t=qt*He,Pt=dt/(-O+He),_e=Pt*-O;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_e),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),It[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Dt=qt+Pt,R=fe+Pt,v=jt-_e,k=$t+(dt-_e),tt=Vt*fe/R*Dt,it=ge*fe/R*Dt;j.projectionMatrix.makePerspective(v,k,tt,it,Dt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ct(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let at=j.near,Et=j.far;y.texture!==null&&(y.depthNear>0&&(at=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),S.near=z.near=I.near=at,S.far=z.far=I.far=Et,(L!==S.near||W!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,W=S.far),I.layers.mask=j.layers.mask|2,z.layers.mask=j.layers.mask|4,S.layers.mask=I.layers.mask|z.layers.mask;let dt=j.parent,It=S.cameras;ct(S,dt);for(let kt=0;kt<It.length;kt++)ct(It[kt],dt);It.length===2?J(S,I,z):S.projectionMatrix.copy(I.projectionMatrix),vt(j,S,dt)};function vt(j,at,Et){Et===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=el*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let At=null;function Wt(j,at){if(h=at.getViewerPose(c||o),_=at,h!==null){let Et=h.views;g!==null&&(t.setRenderTargetFramebuffer(A,g.framebuffer),t.setRenderTarget(A));let dt=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let kt=0;kt<Et.length;kt++){let qt=Et[kt],fe=null;if(g!==null)fe=g.getViewport(qt);else{let ge=d.getViewSubImage(f,qt);fe=ge.viewport,kt===0&&(t.setRenderTargetTextures(A,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(A))}let Vt=w[kt];Vt===void 0&&(Vt=new Ze,Vt.layers.enable(kt),Vt.viewport=new xe,w[kt]=Vt),Vt.matrix.fromArray(qt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(qt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(fe.x,fe.y,fe.width,fe.height),kt===0&&(S.matrix.copy(Vt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(Vt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let kt=d.getDepthInformation(Et[0]);kt&&kt.isValid&&kt.texture&&y.init(t,kt,s.renderState)}}for(let Et=0;Et<E.length;Et++){let dt=b[Et],It=E[Et];dt!==null&&It!==void 0&&It.update(dt,at,c||o)}At&&At(j,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),_=null}let ne=new Gh;ne.setAnimationLoop(Wt),this.setAnimationLoop=function(j){At=j},this.dispose=function(){}}},Ri=new Rn,V0=new ue;function H0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Hh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,A,E,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,b)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,A,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===nn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===nn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let A=t.get(u),E=A.envMap,b=A.envMapRotation;E&&(m.envMap.value=E,Ri.copy(b),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Ri)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,A,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*A,m.scale.value=E*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,A){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===nn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let A=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){let b=E.program;n.uniformBlockBinding(A,b)}function c(A,E){let b=s[A.id];b===void 0&&(_(A),b=h(A),s[A.id]=b,A.addEventListener("dispose",m));let P=E.program;n.updateUBOMapping(A,P);let C=t.render.frame;r[A.id]!==C&&(f(A),r[A.id]=C)}function h(A){let E=d();A.__bindingPointIndex=E;let b=i.createBuffer(),P=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let E=s[A.id],b=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,I=b.length;C<I;C++){let z=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,S=z.length;w<S;w++){let L=z[w];if(g(L,C,w,P)===!0){let W=L.__offset,X=Array.isArray(L.value)?L.value:[L.value],K=0;for(let st=0;st<X.length;st++){let Z=X[st],lt=y(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+K,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,K),K+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(A,E,b,P){let C=A.value,I=E+"_"+b;if(P[I]===void 0)return typeof C=="number"||typeof C=="boolean"?P[I]=C:P[I]=C.clone(),!0;{let z=P[I];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return P[I]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function _(A){let E=A.uniforms,b=0,P=16;for(let I=0,z=E.length;I<z;I++){let w=Array.isArray(E[I])?E[I]:[E[I]];for(let S=0,L=w.length;S<L;S++){let W=w[S],X=Array.isArray(W.value)?W.value:[W.value];for(let K=0,st=X.length;K<st;K++){let Z=X[K],lt=y(Z),J=b%P,ct=J%lt.boundary,vt=J+ct;b+=ct,vt!==0&&P-vt<lt.storage&&(b+=P-vt),W.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=lt.storage}}}let C=b%P;return C>0&&(b+=P-C),A.__size=b,A.__cache={},this}function y(A){let E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){let E=A.target;E.removeEventListener("dispose",m);let b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var co=class{constructor(t={}){let{canvas:e=qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=new Uint32Array(4),y=new Int32Array(4),m=null,u=null,A=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=di,this.toneMappingExposure=1;let b=this,P=!1,C=0,I=0,z=null,w=-1,S=null,L=new xe,W=new xe,X=null,K=new ce(0),st=0,Z=e.width,lt=e.height,J=1,ct=null,vt=null,At=new xe(0,0,Z,lt),Wt=new xe(0,0,Z,lt),ne=!1,j=new ao,at=!1,Et=!1,dt=new ue,It=new ue,kt=new V,qt=new xe,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function ge(){return z===null?J:1}let O=n;function He(M,N){return e.getContext(M,N)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",ut,!1),O===null){let N="webgl2";if(O=He(N,M),O===null)throw He(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let jt,$t,Pt,_e,Dt,R,v,k,tt,it,Q,Rt,mt,gt,Yt,ot,Mt,Lt,Ot,yt,Kt,Ct,de,U;function ht(){jt=new rg(O),jt.init(),Ct=new O0(O,jt),$t=new jm(O,jt,t,Ct),Pt=new U0(O,jt),$t.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),_e=new lg(O),Dt=new M0,R=new F0(O,jt,Pt,Dt,$t,Ct,_e),v=new eg(b),k=new sg(b),tt=new mf(O),de=new Km(O,tt),it=new og(O,tt,_e,de),Q=new hg(O,it,tt,_e),Ot=new cg(O,$t,R),ot=new tg(Dt),Rt=new y0(b,v,k,jt,$t,de,ot),mt=new H0(b,Dt),gt=new b0,Yt=new C0(jt),Lt=new Jm(b,v,k,Pt,Q,g,l),Mt=new L0(b,Q,$t),U=new G0(O,_e,$t,Pt),yt=new Qm(O,jt,_e),Kt=new ag(O,jt,_e),_e.programs=Rt.programs,b.capabilities=$t,b.extensions=jt,b.properties=Dt,b.renderLists=gt,b.shadowMap=Mt,b.state=Pt,b.info=_e}ht();let $=new _l(b,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=jt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=jt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(Z,lt,!1))},this.getSize=function(M){return M.set(Z,lt)},this.setSize=function(M,N,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,lt=N,e.width=Math.floor(M*J),e.height=Math.floor(N*J),H===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Z*J,lt*J).floor()},this.setDrawingBufferSize=function(M,N,H){Z=M,lt=N,J=H,e.width=Math.floor(M*H),e.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(At)},this.setViewport=function(M,N,H,G){M.isVector4?At.set(M.x,M.y,M.z,M.w):At.set(M,N,H,G),Pt.viewport(L.copy(At).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(Wt)},this.setScissor=function(M,N,H,G){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,N,H,G),Pt.scissor(W.copy(Wt).multiplyScalar(J).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){Pt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){ct=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(M=!0,N=!0,H=!0){let G=0;if(M){let F=!1;if(z!==null){let rt=z.texture.format;F=rt===Nl||rt===Ul||rt===Dl}if(F){let rt=z.texture.type,xt=rt===An||rt===Ni||rt===js||rt===xs||rt===Pl||rt===Ll,bt=Lt.getClearColor(),St=Lt.getClearAlpha(),Bt=bt.r,Nt=bt.g,wt=bt.b;xt?(_[0]=Bt,_[1]=Nt,_[2]=wt,_[3]=St,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=Bt,y[1]=Nt,y[2]=wt,y[3]=St,O.clearBufferiv(O.COLOR,0,y))}else G|=O.COLOR_BUFFER_BIT}N&&(G|=O.DEPTH_BUFFER_BIT),H&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Yt.dispose(),Dt.dispose(),v.dispose(),k.dispose(),Q.dispose(),de.dispose(),U.dispose(),Rt.dispose(),$.dispose(),$.removeEventListener("sessionstart",cr),$.removeEventListener("sessionend",hr),xn.stop()};function et(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let M=_e.autoReset,N=Mt.enabled,H=Mt.autoUpdate,G=Mt.needsUpdate,F=Mt.type;ht(),_e.autoReset=M,Mt.enabled=N,Mt.autoUpdate=H,Mt.needsUpdate=G,Mt.type=F}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ft(M){let N=M.target;N.removeEventListener("dispose",Ft),oe(N)}function oe(M){Ee(M),Dt.remove(M)}function Ee(M){let N=Dt.get(M).programs;N!==void 0&&(N.forEach(function(H){Rt.releaseProgram(H)}),M.isShaderMaterial&&Rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,G,F,rt){N===null&&(N=fe);let xt=F.isMesh&&F.matrixWorld.determinant()<0,bt=Wi(M,N,H,G,F);Pt.setMaterial(G,xt);let St=H.index,Bt=1;if(G.wireframe===!0){if(St=it.getWireframeAttribute(H),St===void 0)return;Bt=2}let Nt=H.drawRange,wt=H.attributes.position,te=Nt.start*Bt,ae=(Nt.start+Nt.count)*Bt;rt!==null&&(te=Math.max(te,rt.start*Bt),ae=Math.min(ae,(rt.start+rt.count)*Bt)),St!==null?(te=Math.max(te,0),ae=Math.min(ae,St.count)):wt!=null&&(te=Math.max(te,0),ae=Math.min(ae,wt.count));let pe=ae-te;if(pe<0||pe===1/0)return;de.setup(F,G,bt,H,St);let Se,ie=yt;if(St!==null&&(Se=tt.get(St),ie=Kt,ie.setIndex(Se)),F.isMesh)G.wireframe===!0?(Pt.setLineWidth(G.wireframeLinewidth*ge()),ie.setMode(O.LINES)):ie.setMode(O.TRIANGLES);else if(F.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),Pt.setLineWidth(Tt*ge()),F.isLineSegments?ie.setMode(O.LINES):F.isLineLoop?ie.setMode(O.LINE_LOOP):ie.setMode(O.LINE_STRIP)}else F.isPoints?ie.setMode(O.POINTS):F.isSprite&&ie.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ie.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))ie.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Tt=F._multiDrawStarts,dn=F._multiDrawCounts,re=F._multiDrawCount,Qe=St?tt.get(St).bytesPerElement:1,In=Dt.get(G).currentProgram.getUniforms();for(let Xe=0;Xe<re;Xe++)In.setValue(O,"_gl_DrawID",Xe),ie.render(Tt[Xe]/Qe,dn[Xe])}else if(F.isInstancedMesh)ie.renderInstances(te,pe,F.count);else if(H.isInstancedBufferGeometry){let Tt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,dn=Math.min(H.instanceCount,Tt);ie.renderInstances(te,pe,dn)}else ie.render(te,pe)};function Qt(M,N,H){M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,Ke(M,N,H),M.side=On,M.needsUpdate=!0,Ke(M,N,H),M.side=En):Ke(M,N,H)}this.compile=function(M,N,H=null){H===null&&(H=M),u=Yt.get(H),u.init(N),E.push(u),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();let G=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let rt=F.material;if(rt)if(Array.isArray(rt))for(let xt=0;xt<rt.length;xt++){let bt=rt[xt];Qt(bt,H,F),G.add(bt)}else Qt(rt,H,F),G.add(rt)}),E.pop(),u=null,G},this.compileAsync=function(M,N,H=null){let G=this.compile(M,N,H);return new Promise(F=>{function rt(){if(G.forEach(function(xt){Dt.get(xt).currentProgram.isReady()&&G.delete(xt)}),G.size===0){F(M);return}setTimeout(rt,10)}jt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Le=null;function Je(M){Le&&Le(M)}function cr(){xn.stop()}function hr(){xn.start()}let xn=new Gh;xn.setAnimationLoop(Je),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(M){Le=M,$.setAnimationLoop(M),M===null?xn.stop():xn.start()},$.addEventListener("sessionstart",cr),$.addEventListener("sessionend",hr),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,N,z),u=Yt.get(M,E.length),u.init(N),E.push(u),It.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(It),Et=this.localClippingEnabled,at=ot.init(this.clippingPlanes,Et),m=gt.get(M,A.length),m.init(),A.push(m),$.enabled===!0&&$.isPresenting===!0){let rt=b.xr.getDepthSensingMesh();rt!==null&&Us(rt,N,-1/0,b.sortObjects)}Us(M,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ct,vt),Vt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Vt&&Lt.addToRenderList(m,M),this.info.render.frame++,at===!0&&ot.beginShadows();let H=u.state.shadowsArray;Mt.render(H,M,N),at===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,F=m.transmissive;if(u.setupLights(),N.isArrayCamera){let rt=N.cameras;if(F.length>0)for(let xt=0,bt=rt.length;xt<bt;xt++){let St=rt[xt];ur(G,F,M,St)}Vt&&Lt.render(M);for(let xt=0,bt=rt.length;xt<bt;xt++){let St=rt[xt];xi(m,M,St,St.viewport)}}else F.length>0&&ur(G,F,M,N),Vt&&Lt.render(M),xi(m,M,N);z!==null&&(R.updateMultisampleRenderTarget(z),R.updateRenderTargetMipmap(z)),M.isScene===!0&&M.onAfterRender(b,M,N),de.resetDefaultState(),w=-1,S=null,E.pop(),E.length>0?(u=E[E.length-1],at===!0&&ot.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Us(M,N,H,G){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){G&&qt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(It);let xt=Q.update(M),bt=M.material;bt.visible&&m.push(M,xt,bt,H,qt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){let xt=Q.update(M),bt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qt.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),qt.copy(xt.boundingSphere.center)),qt.applyMatrix4(M.matrixWorld).applyMatrix4(It)),Array.isArray(bt)){let St=xt.groups;for(let Bt=0,Nt=St.length;Bt<Nt;Bt++){let wt=St[Bt],te=bt[wt.materialIndex];te&&te.visible&&m.push(M,xt,te,H,qt.z,wt)}}else bt.visible&&m.push(M,xt,bt,H,qt.z,null)}}let rt=M.children;for(let xt=0,bt=rt.length;xt<bt;xt++)Us(rt[xt],N,H,G)}function xi(M,N,H,G){let F=M.opaque,rt=M.transmissive,xt=M.transparent;u.setupLightsView(H),at===!0&&ot.setGlobalState(b.clippingPlanes,H),G&&Pt.viewport(L.copy(G)),F.length>0&&Ae(F,N,H),rt.length>0&&Ae(rt,N,H),xt.length>0&&Ae(xt,N,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ur(M,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new mn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?tr:An,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let rt=u.state.transmissionRenderTarget[G.id],xt=G.viewport||L;rt.setSize(xt.z,xt.w);let bt=b.getRenderTarget();b.setRenderTarget(rt),b.getClearColor(K),st=b.getClearAlpha(),st<1&&b.setClearColor(16777215,.5),b.clear(),Vt&&Lt.render(H);let St=b.toneMapping;b.toneMapping=di;let Bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),at===!0&&ot.setGlobalState(b.clippingPlanes,G),Ae(M,H,G),R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let wt=0,te=N.length;wt<te;wt++){let ae=N[wt],pe=ae.object,Se=ae.geometry,ie=ae.material,Tt=ae.group;if(ie.side===En&&pe.layers.test(G.layers)){let dn=ie.side;ie.side=nn,ie.needsUpdate=!0,un(pe,H,G,Se,ie,Tt),ie.side=dn,ie.needsUpdate=!0,Nt=!0}}Nt===!0&&(R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt))}b.setRenderTarget(bt),b.setClearColor(K,st),Bt!==void 0&&(G.viewport=Bt),b.toneMapping=St}function Ae(M,N,H){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,rt=M.length;F<rt;F++){let xt=M[F],bt=xt.object,St=xt.geometry,Bt=G===null?xt.material:G,Nt=xt.group;bt.layers.test(H.layers)&&un(bt,N,H,St,Bt,Nt)}}function un(M,N,H,G,F,rt){M.onBeforeRender(b,N,H,G,F,rt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(b,N,H,G,M,rt),F.transparent===!0&&F.side===En&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,b.renderBufferDirect(H,N,G,F,M,rt),F.side=On,F.needsUpdate=!0,b.renderBufferDirect(H,N,G,F,M,rt),F.side=En):b.renderBufferDirect(H,N,G,F,M,rt),M.onAfterRender(b,N,H,G,F,rt)}function Ke(M,N,H){N.isScene!==!0&&(N=fe);let G=Dt.get(M),F=u.state.lights,rt=u.state.shadowsArray,xt=F.state.version,bt=Rt.getParameters(M,F.state,rt,N,H),St=Rt.getProgramCacheKey(bt),Bt=G.programs;G.environment=M.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(M.isMeshStandardMaterial?k:v).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Bt===void 0&&(M.addEventListener("dispose",Ft),Bt=new Map,G.programs=Bt);let Nt=Bt.get(St);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===xt)return ei(M,bt),Nt}else bt.uniforms=Rt.getUniforms(M),M.onBeforeCompile(bt,b),Nt=Rt.acquireProgram(bt,St),Bt.set(St,Nt),G.uniforms=bt.uniforms;let wt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=ot.uniform),ei(M,bt),G.needsLights=Fs(M),G.lightsStateVersion=xt,G.needsLights&&(wt.ambientLightColor.value=F.state.ambient,wt.lightProbe.value=F.state.probe,wt.directionalLights.value=F.state.directional,wt.directionalLightShadows.value=F.state.directionalShadow,wt.spotLights.value=F.state.spot,wt.spotLightShadows.value=F.state.spotShadow,wt.rectAreaLights.value=F.state.rectArea,wt.ltc_1.value=F.state.rectAreaLTC1,wt.ltc_2.value=F.state.rectAreaLTC2,wt.pointLights.value=F.state.point,wt.pointLightShadows.value=F.state.pointShadow,wt.hemisphereLights.value=F.state.hemi,wt.directionalShadowMap.value=F.state.directionalShadowMap,wt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,wt.spotShadowMap.value=F.state.spotShadowMap,wt.spotLightMatrix.value=F.state.spotLightMatrix,wt.spotLightMap.value=F.state.spotLightMap,wt.pointShadowMap.value=F.state.pointShadowMap,wt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function ti(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=ps.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ei(M,N){let H=Dt.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Wi(M,N,H,G,F){N.isScene!==!0&&(N=fe),R.resetTextureUnits();let rt=N.fog,xt=G.isMeshStandardMaterial?N.environment:null,bt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:mi,St=(G.isMeshStandardMaterial?k:v).get(G.envMap||xt),Bt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color,pe=di;G.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(pe=b.toneMapping);let Se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=Se!==void 0?Se.length:0,Tt=Dt.get(G),dn=u.state.lights;if(at===!0&&(Et===!0||M!==S)){let Be=M===S&&G.id===w;ot.setState(G,M,Be)}let re=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==dn.state.version||Tt.outputColorSpace!==bt||F.isBatchedMesh&&Tt.batching===!1||!F.isBatchedMesh&&Tt.batching===!0||F.isBatchedMesh&&Tt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Tt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Tt.instancing===!1||!F.isInstancedMesh&&Tt.instancing===!0||F.isSkinnedMesh&&Tt.skinning===!1||!F.isSkinnedMesh&&Tt.skinning===!0||F.isInstancedMesh&&Tt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Tt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Tt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Tt.instancingMorph===!1&&F.morphTexture!==null||Tt.envMap!==St||G.fog===!0&&Tt.fog!==rt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==ot.numPlanes||Tt.numIntersection!==ot.numIntersection)||Tt.vertexAlphas!==Bt||Tt.vertexTangents!==Nt||Tt.morphTargets!==wt||Tt.morphNormals!==te||Tt.morphColors!==ae||Tt.toneMapping!==pe||Tt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Tt.__version=G.version);let Qe=Tt.currentProgram;re===!0&&(Qe=Ke(G,N,F));let In=!1,Xe=!1,vi=!1,se=Qe.getUniforms(),Ge=Tt.uniforms;if(Pt.useProgram(Qe.program)&&(In=!0,Xe=!0,vi=!0),G.id!==w&&(w=G.id,Xe=!0),In||S!==M){Pt.buffers.depth.getReversed()?(dt.copy(M.projectionMatrix),Zd(dt),$d(dt),se.setValue(O,"projectionMatrix",dt)):se.setValue(O,"projectionMatrix",M.projectionMatrix),se.setValue(O,"viewMatrix",M.matrixWorldInverse);let Pn=se.map.cameraPosition;Pn!==void 0&&Pn.setValue(O,kt.setFromMatrixPosition(M.matrixWorld)),$t.logarithmicDepthBuffer&&se.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&se.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Xe=!0,vi=!0)}if(F.isSkinnedMesh){se.setOptional(O,F,"bindMatrix"),se.setOptional(O,F,"bindMatrixInverse");let Be=F.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),se.setValue(O,"boneTexture",Be.boneTexture,R))}F.isBatchedMesh&&(se.setOptional(O,F,"batchingTexture"),se.setValue(O,"batchingTexture",F._matricesTexture,R),se.setOptional(O,F,"batchingIdTexture"),se.setValue(O,"batchingIdTexture",F._indirectTexture,R),se.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&se.setValue(O,"batchingColorTexture",F._colorsTexture,R));let yi=H.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Ot.update(F,H,Qe),(Xe||Tt.receiveShadow!==F.receiveShadow)&&(Tt.receiveShadow=F.receiveShadow,se.setValue(O,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ge.envMap.value=St,Ge.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Ge.envMapIntensity.value=N.environmentIntensity),Xe&&(se.setValue(O,"toneMappingExposure",b.toneMappingExposure),Tt.needsLights&&Ns(Ge,vi),rt&&G.fog===!0&&mt.refreshFogUniforms(Ge,rt),mt.refreshMaterialUniforms(Ge,G,J,lt,u.state.transmissionRenderTarget[M.id]),ps.upload(O,ti(Tt),Ge,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ps.upload(O,ti(Tt),Ge,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&se.setValue(O,"center",F.center),se.setValue(O,"modelViewMatrix",F.modelViewMatrix),se.setValue(O,"normalMatrix",F.normalMatrix),se.setValue(O,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Be=G.uniformsGroups;for(let Pn=0,Ln=Be.length;Pn<Ln;Pn++){let dr=Be[Pn];U.update(dr,Qe),U.bind(dr,Qe)}}return Qe}function Ns(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Fs(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,N,H){Dt.get(M.texture).__webglTexture=N,Dt.get(M.depthTexture).__webglTexture=H;let G=Dt.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){let H=Dt.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,H=0){z=M,C=N,I=H;let G=!0,F=null,rt=!1,xt=!1;if(M){let St=Dt.get(M);if(St.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(St.__hasExternalTextures)R.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let wt=M.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&Dt.has(wt)&&(M.width!==wt.image.width||M.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}let Bt=M.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);let Nt=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?F=Nt[N][H]:F=Nt[N],rt=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?F=Dt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[H]:F=Nt,L.copy(M.viewport),W.copy(M.scissor),X=M.scissorTest}else L.copy(At).multiplyScalar(J).floor(),W.copy(Wt).multiplyScalar(J).floor(),X=ne;if(Pt.bindFramebuffer(O.FRAMEBUFFER,F)&&G&&Pt.drawBuffers(M,F),Pt.viewport(L),Pt.scissor(W),Pt.setScissorTest(X),rt){let St=Dt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,H)}else if(xt){let St=Dt.get(M.texture),Bt=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Bt)}w=-1},this.readRenderTargetPixels=function(M,N,H,G,F,rt,xt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){Pt.bindFramebuffer(O.FRAMEBUFFER,bt);try{let St=M.texture,Bt=St.format,Nt=St.type;if(!$t.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-G&&H>=0&&H<=M.height-F&&O.readPixels(N,H,G,F,Ct.convert(Bt),Ct.convert(Nt),rt)}finally{let St=z!==null?Dt.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(M,N,H,G,F,rt,xt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){let St=M.texture,Bt=St.format,Nt=St.type;if(!$t.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-G&&H>=0&&H<=M.height-F){Pt.bindFramebuffer(O.FRAMEBUFFER,bt);let wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(N,H,G,F,Ct.convert(Bt),Ct.convert(Nt),0);let te=z!==null?Dt.get(z).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,te);let ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Yd(O,ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(wt),O.deleteSync(ae),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,H=0){M.isTexture!==!0&&(Js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);let G=Math.pow(2,-H),F=Math.floor(M.image.width*G),rt=Math.floor(M.image.height*G),xt=N!==null?N.x:0,bt=N!==null?N.y:0;R.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,xt,bt,F,rt),Pt.unbindTexture()},this.copyTextureToTexture=function(M,N,H=null,G=null,F=0){M.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let rt,xt,bt,St,Bt,Nt,wt,te,ae,pe=M.isCompressedTexture?M.mipmaps[F]:M.image;H!==null?(rt=H.max.x-H.min.x,xt=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Bt=H.min.y,Nt=H.isBox3?H.min.z:0):(rt=pe.width,xt=pe.height,bt=pe.depth||1,St=0,Bt=0,Nt=0),G!==null?(wt=G.x,te=G.y,ae=G.z):(wt=0,te=0,ae=0);let Se=Ct.convert(N.format),ie=Ct.convert(N.type),Tt;N.isData3DTexture?(R.setTexture3D(N,0),Tt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Tt=O.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Tt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let dn=O.getParameter(O.UNPACK_ROW_LENGTH),re=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Qe=O.getParameter(O.UNPACK_SKIP_PIXELS),In=O.getParameter(O.UNPACK_SKIP_ROWS),Xe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Nt);let vi=M.isDataArrayTexture||M.isData3DTexture,se=N.isDataArrayTexture||N.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let Ge=Dt.get(M),yi=Dt.get(N),Be=Dt.get(Ge.__renderTarget),Pn=Dt.get(yi.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,Be.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Ln=0;Ln<bt;Ln++)vi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.get(M).__webglTexture,F,Nt+Ln),M.isDepthTexture?(se&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.get(N).__webglTexture,F,ae+Ln),O.blitFramebuffer(St,Bt,rt,xt,wt,te,rt,xt,O.DEPTH_BUFFER_BIT,O.NEAREST)):se?O.copyTexSubImage3D(Tt,F,wt,te,ae+Ln,St,Bt,rt,xt):O.copyTexSubImage2D(Tt,F,wt,te,ae+Ln,St,Bt,rt,xt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else se?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Tt,F,wt,te,ae,rt,xt,bt,Se,ie,pe.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Tt,F,wt,te,ae,rt,xt,bt,Se,pe.data):O.texSubImage3D(Tt,F,wt,te,ae,rt,xt,bt,Se,ie,pe):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,wt,te,rt,xt,Se,ie,pe.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,wt,te,pe.width,pe.height,Se,pe.data):O.texSubImage2D(O.TEXTURE_2D,F,wt,te,rt,xt,Se,ie,pe);O.pixelStorei(O.UNPACK_ROW_LENGTH,dn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,In),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe),F===0&&N.generateMipmaps&&O.generateMipmap(Tt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(M,N,H=null,G=null,F=0){return M.isTexture!==!0&&(Js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,M=arguments[2],N=arguments[3],F=arguments[4]||0),Js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,H,G,F)},this.initRenderTarget=function(M){Dt.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),Pt.unbindTexture()},this.resetState=function(){C=0,I=0,z=null,Pt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Es=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ho=class extends cn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Pe,h=Pe,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xl=class extends Oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uo=new V,fo=new V,bh=new ue,$s=new no,Gr=new ys,pa=new V,wh=new V,vl=class extends gn{constructor(t=new sn,e=new xl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)uo.fromBufferAttribute(e,s-1),fo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=uo.distanceTo(fo);t.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;bh.copy(s).invert(),$s.copy(t.ray).applyMatrix4(bh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=g,m=_-1;y<m;y+=c){let u=h.getX(y),A=h.getX(y+1),E=Wr(this,t,$s,l,u,A);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(_-1),m=h.getX(g),u=Wr(this,t,$s,l,y,m);u&&e.push(u)}}else{let g=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=g,m=_-1;y<m;y+=c){let u=Wr(this,t,$s,l,y,y+1);u&&e.push(u)}if(this.isLineLoop){let y=Wr(this,t,$s,l,_-1,g);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(uo.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),e.distanceSqToSegment(uo,fo,pa,wh)>n)return;pa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(pa);if(!(l<t.near||l>t.far))return{distance:l,point:wh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Eh=new V,Th=new V,po=class extends vl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eh.distanceTo(Th);t.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mo=class i extends sn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,f=new V,g=[],_=[],y=[],m=[];for(let u=0;u<=n;u++){let A=[],E=u/n,b=0;u===0&&o===0?b=.5/e:u===n&&l===Math.PI&&(b=-.5/e);for(let P=0;P<=e;P++){let C=P/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+E*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(C+b,1-E),A.push(c++)}h.push(A)}for(let u=0;u<n;u++)for(let A=0;A<e;A++){let E=h[u][A+1],b=h[u][A],P=h[u+1][A],C=h[u+1][A+1];(u!==0||o>0)&&g.push(E,b,C),(u!==n-1||l<Math.PI)&&g.push(b,P,C)}this.setIndex(g),this.setAttribute("position",new Ue(_,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Xr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function W0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yl=class extends Ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rc,endingEnd:Rc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,a=2*e-n;break;case Ic:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cc:o=t,l=2*n-e;break;case Ic:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),y=_*_,m=y*_,u=-f*m+2*f*y-f*_,A=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,E=(-1-g)*m+(1.5+g)*y+.5*_,b=g*m-g*y;for(let P=0;P!==a;++P)r[P]=u*o[h+P]+A*o[c+P]+E*o[l+P]+b*o[d+P];return r}},Ml=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Sl=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case zo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&W0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,g=d+n;for(let _=0;_!==n;++_){let y=e[d+_];if(y!==e[f+_]||y!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let g=0;g!==n;++g)e[f+g]=e[d+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=tl;var Vi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Kr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Cn{};bl.prototype.ValueTypeName="color";var wl=class extends Cn{};wl.prototype.ValueTypeName="number";var El=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)pi.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends Cn{InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Cn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Kr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Cn{};Tl.prototype.ValueTypeName="vector";var Al=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let g=c[d],_=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}},X0=new Al,Rl=class{constructor(t){this.manager=t!==void 0?t:X0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ol="\\[\\]\\.:\\/",q0=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",Y0="[^"+Ol.replace("\\.","")+"]",Z0=/((?:WC+[\/:])*)/.source.replace("WC",Bl),$0=/(WCOD+)?/.source.replace("WCOD",Y0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),Q0=new RegExp("^"+Z0+$0+J0+K0+"$"),j0=["material","materials","bones","map"],Cl=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(t){let e=Q0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);j0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Cl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Qn=[0,1911635,8267091,34641,11227702,6248271,12764103,16773608,16711757,16753408,16772135,58422,2731519,8615580,16742312,16764074,2693140,1121589,4333878,1200985,7614249,4797243,10651769,15986557,12456528,16739364,11069230,46403,416437,7685733,16739929,16752001],zn=32,Rs=256,$h=["top","side","bottom"],Oe=8,Gi=256,zl=[4,0,4],T_={colors:zn,tiles:Rs-1,tileSize:8,vox:Gi,voxSize:Oe,sfx:64,notes:32,patterns:64,mapSide:128,mapBlocks:512*1024,saveBytes:64*1024,screen:256},gi=i=>"#"+(i>>>0).toString(16).padStart(6,"0").slice(-6);var kl=(i,t,e)=>i+Oe*(t+Oe*e);function Vl(i){let t=atob(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}var Mo=24,Hl=8*Rs,_n=Math.PI*2;function nu(){let i=new Uint8Array(Mo*Hl),t=new ho(i,Mo,Hl,xo,An);return t.magFilter=Pe,t.minFilter=Pe,t.generateMipmaps=!1,t.flipY=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}function iu(i,t){let e=i.image.data;e.fill(0);for(let n=1;n<Rs;n++){let s=t[n];s&&$h.forEach((r,o)=>{let a=s[r];for(let l=0;l<8;l++)for(let c=0;c<8;c++)e[(n*8+(7-l))*Mo+o*8+c]=a[l*8+c]&31})}i.needsUpdate=!0}function So(i,t,e,n=[0,0,0],s=null){return{w:i,h:t,d:e,data:s||new Uint8Array(i*t*e),origin:[...n],pos:[0,0,0],angle:[0,0,0],dirty:!0,geometry:null,_m:new ue,_inv:new ue,_rot:new ue,_xfDirty:!0}}var su=(i,t,e,n)=>t+i.w*(e+i.h*n);function nr(i,t,e,n){return t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d?0:i.data[su(i,t,e,n)]}function bo(i,t,e,n,s){t<0||e<0||n<0||t>=i.w||e>=i.h||n>=i.d||(i.data[su(i,t,e,n)]=s&255,i.dirty=!0)}var Jh=new Rn;function ru(i,t=new ue){return Jh.set(-i[0]*_n,i[1]*_n,i[2]*_n,"YXZ"),t.makeRotationFromEuler(Jh)}function Cs(i){if(!i._xfDirty)return;ru(i.angle,i._rot);let t=new ue().makeTranslation(-i.origin[0],-i.origin[1],-i.origin[2]),e=new ue().makeTranslation(i.pos[0],i.pos[1],i.pos[2]);i._m.copy(e).multiply(i._rot).multiply(t),i._inv.copy(i._m).invert(),i._xfDirty=!1}var Gl=[{n:[0,1,0],f:0,v:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uv:[[0,1],[0,0],[1,0],[1,1]]},{n:[0,-1,0],f:2,v:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uv:[[0,1],[1,1],[1,0],[0,0]]},{n:[1,0,0],f:1,v:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[-1,0,0],f:1,v:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,1],f:1,v:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],uv:[[0,0],[1,0],[1,1],[0,1]]},{n:[0,0,-1],f:1,v:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],uv:[[0,0],[1,0],[1,1],[0,1]]}];function t_(i){let{w:t,h:e,d:n,data:s}=i,r=t*e,o=(A,E,b,P,C)=>{switch(C){case 0:return E===e-1||!s[P+t];case 1:return E===0||!s[P-t];case 2:return A===t-1||!s[P+1];case 3:return A===0||!s[P-1];case 4:return b===n-1||!s[P+r];default:return b===0||!s[P-r]}},a=0;for(let A=0,E=0;A<n;A++)for(let b=0;b<e;b++)for(let P=0;P<t;P++,E++)if(s[E])for(let C=0;C<6;C++)o(P,b,A,E,C)&&a++;let l=new Float32Array(a*12),c=new Float32Array(a*8),h=new Float32Array(a*12),d=a*4>65535?new Uint32Array(a*6):new Uint16Array(a*6),f=0,g=0,_=0,y=0,m=0;for(let A=0,E=0;A<n;A++)for(let b=0;b<e;b++)for(let P=0;P<t;P++,E++){let C=s[E];if(C)for(let I=0;I<6;I++){if(!o(P,b,A,E,I))continue;let z=Gl[I];for(let w=0;w<4;w++){let S=z.v[w];l[f++]=P+S[0],l[f++]=b+S[1],l[f++]=A+S[2],c[g++]=z.uv[w][0],c[g++]=z.uv[w][1],h[_++]=C,h[_++]=z.f,h[_++]=I+1}d[y++]=m,d[y++]=m+1,d[y++]=m+2,d[y++]=m,d[y++]=m+2,d[y++]=m+3,m+=4}}let u=new sn;return u.setAttribute("position",new We(l,3)),u.setAttribute("aUV",new We(c,2)),u.setAttribute("aTF",new We(h,3)),u.setIndex(new We(d,1)),u.computeBoundingSphere(),u}function ou(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=t_(i),i.dirty=!1),i.geometry}function e_(i=null,t=zl,e=""){return{name:e,pivot:[...t],data:i||new Uint8Array(Oe*Oe*Oe),dirty:!0,geometry:null}}function n_(i,t,e,n){return t<0||e<0||n<0||t>=Oe||e>=Oe||n>=Oe?0:i.data[kl(t,e,n)]}function i_(i){let t=[],e=[],n=[],s=0;for(let o=0;o<Oe;o++)for(let a=0;a<Oe;a++)for(let l=0;l<Oe;l++){let c=i.data[kl(l,a,o)];if(c)for(let h=0;h<Gl.length;h++){let d=Gl[h];if(!n_(i,l+d.n[0],a+d.n[1],o+d.n[2])){for(let f=0;f<4;f++)t.push(l+d.v[f][0],a+d.v[f][1],o+d.v[f][2]),e.push(c-1,h+1);n.push(s,s+1,s+2,s,s+2,s+3),s+=4}}}let r=new sn;return r.setAttribute("position",new Ue(t,3)),r.setAttribute("aCD",new Ue(e,2)),r.setIndex(new Ms(n,1)),r.computeBoundingSphere(),r}function au(i){return!i.dirty&&i.geometry||(i.geometry&&i.geometry.dispose(),i.geometry=i_(i),i.dirty=!1),i.geometry}var Kh=new ue,Qh=new ue,jh=new ue,tu=new ue;function lu(i,t,e,n,s){return Kh.makeTranslation(-i.pivot[0],-i.pivot[1],-i.pivot[2]),tu.makeScale(n[0]/Oe,n[1]/Oe,n[2]/Oe),ru(e,jh),Qh.makeTranslation(t[0],t[1],t[2]),s.copy(Qh).multiply(jh).multiply(tu).multiply(Kh)}function cu(i){let t=new Array(Gi).fill(null);return(i.vox||[]).forEach((e,n)=>{if(!e||n>=Gi)return;let s=e.data?Vl(e.data):null;(!s||s.length!==Oe*Oe*Oe)&&(s=null),t[n]=e_(s,e.pivot||zl,e.name||"")}),t}function hu(i){let t={value:Array.from({length:zn},()=>new V)};return Xl(t,i),t}function Xl(i,t){for(let e=0;e<zn;e++){let n=(t[e]??0)>>>0;i.value[e].set((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)}}var ir=()=>Array.from({length:zn},(i,t)=>t),Is=()=>new Array(zn).fill(0),uu=`
  float bayer4(vec2 p) {
    const float m[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
    ivec2 q = ivec2(mod(p, 4.0));
    return (m[q.x + 4 * q.y] + 0.5) / 16.0;
  }
`,ql=`
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
`,Yl=()=>({uTorch:{value:Array.from({length:8},()=>new xe)},uTorchFar:{value:new Array(8).fill(0)},uTorchN:{value:0}}),Zl=()=>({uCurve:{value:new xe(0,0,0,0)},uCurveA:{value:new V(0,0,0)},uCurveB:{value:new V(0,0,0)},uCurveP:{value:new V(0,-1,0)}}),$l=`
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
  ${uu}
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
`,Jl=i=>({uPalette:i,uRemap:{value:ir()},uTrans:{value:Is()},uOutline:{value:-1},uId:{value:1},uInner:{value:1},uFog:{value:new xe(0,0,0,0)},uFill:{value:new he(0,0)},...Zl(),...Yl(),uPix:{value:1}});function du(i,t){return new Ve({glslVersion:Bn,uniforms:{uAtlas:{value:i},...Jl(t)},vertexShader:`
      attribute vec2 aUV;
      attribute vec3 aTF;
      varying vec2 vUV;
      varying vec3 vTF;
      ${ql}
      void main() {
        vUV = aUV; vTF = aTF;
        place(position);
      }`,fragmentShader:`
      uniform sampler2D uAtlas;
      ${$l}
      varying vec2 vUV;
      varying vec3 vTF;
      void main() {
        float px = clamp(floor(vUV.x * 8.0), 0.0, 7.0);
        float py = clamp(floor(vUV.y * 8.0), 0.0, 7.0);
        float tile = floor(vTF.x + 0.5);
        float face = floor(vTF.y + 0.5);
        vec2 st = vec2((face * 8.0 + px + 0.5) / ${Mo.toFixed(1)}, (tile * 8.0 + py + 0.5) / ${Hl.toFixed(1)});
        int idx = int(texture2D(uAtlas, st).r * 255.0 + 0.5);
        writePixel(palColor(idx), floor(vTF.z + 0.5));
      }`})}function Kl(i){return new Ve({glslVersion:Bn,uniforms:{uColor:{value:7},...Jl(i)},vertexShader:`
      ${ql}
      void main() { place(position); }`,fragmentShader:`
      uniform float uColor;
      ${$l}
      void main() { writePixel(palColor(int(uColor + 0.5)), 0.0); }`})}function fu(i){return new Ve({glslVersion:Bn,uniforms:Jl(i),vertexShader:`
      attribute vec2 aCD;
      varying vec2 vCD;
      ${ql}
      void main() {
        vCD = aCD;
        place(position);
      }`,fragmentShader:`
      ${$l}
      varying vec2 vCD;
      void main() { writePixel(palColor(int(vCD.x + 0.5)), floor(vCD.y + 0.5)); }`})}function pu(i){let t=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{uPalette:i,uSky:{value:new he(0,0)},uPix:{value:1}},vertexShader:`
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
      ${uu}
      void main() {
        float t = clamp(dot(normalize(vRay), normalize(vUp)) / 0.7071, 0.0, 1.0);
        int c = t > bayer4(floor(gl_FragCoord.xy / uPix)) ? int(uSky.x + 0.5) : int(uSky.y + 0.5);
        outColor = vec4(uPalette[c], 1.0);
        outInfo = vec4(0.0);   // no outline, no draw
      }`}),e=new ke(new ki(2,2),t);return e.frustumCulled=!1,e.renderOrder=-1e9,e.visible=!1,e}function Ql(i){return new mn(i,i,{count:2,minFilter:Pe,magFilter:Pe,generateMipmaps:!1,depthTexture:new ws(i,i)})}function mu(i,t){let e=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:i.textures[0]},tInfo:{value:i.textures[1]},tDepth:{value:i.depthTexture},uPalette:t,uNear:{value:.05},uFar:{value:2e3},uOrtho:{value:0},uAny:{value:0},uMode:{value:0},uRect:{value:new xe(0,0,1e5,1e5)}},vertexShader:`
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
      }`});return{scene:Wl(e),camera:new zi,uniforms:e.uniforms}}function jl(i){return new mn(i,i,{type:Tn,format:ln,minFilter:Pe,magFilter:Pe,generateMipmaps:!1,depthBuffer:!1})}function Wl(i){let t=new ke(new ki(2,2),i);t.frustumCulled=!1;let e=new Es;return e.add(t),e}var eu="void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }";function gu(i){let t=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{tMask:{value:null},uDir:{value:new he(1,0)},uR:{value:1},uRect:{value:new xe(0,0,1e5,1e5)}},vertexShader:eu,fragmentShader:`
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
      }`}),e=new Ve({glslVersion:Bn,depthTest:!1,depthWrite:!1,uniforms:{tColor:{value:null},tInfo:{value:null},tDepth:{value:null},tMask:{value:null},uPalette:i,uNear:{value:.05},uFar:{value:2e3},uOrtho:{value:0}},vertexShader:eu,fragmentShader:`
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
      }`});return{growScene:Wl(t),grow:t.uniforms,paintScene:Wl(e),paint:e.uniforms,camera:new zi}}function _u(i,t){ee.enabled=!1;let e;try{e=new co({canvas:i,antialias:!1,preserveDrawingBuffer:!0})}catch(n){let s=typeof WebGL2RenderingContext>"u"?"This browser has no WebGL 2, which BLOCKO3D needs. Try updating it.":"This browser would not start 3D graphics (WebGL 2). Try closing other tabs and reloading, restarting the browser, or updating it. On iPhone and iPad, Lockdown Mode turns WebGL off.";throw new Error(s+" ("+(n&&n.message||n)+")")}return e.outputColorSpace=mi,e.setPixelRatio(1),t&&e.setSize(t,t,!1),e}function wo(i){return(i.maps||[]).map(t=>{let e=t.data?Vl(t.data):null,n=So(t.w,t.h,t.d,t.origin||[0,0,0],e&&e.length===t.w*t.h*t.d?e:null);return n.name=t.name||"",n})}function xu(i){let t=new Array(Rs).fill(null);return(i.tiles||[]).forEach((e,n)=>{n>0&&n<Rs&&e&&(t[n]=e)}),t}var s_=`
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
`,tc=new Map;for(let i of s_.trim().split(/\n\s*\n/)){let[t,...e]=i.split(`
`),n=t==="space"?" ":t,s=[];e.forEach((r,o)=>[...r].forEach((a,l)=>{a==="#"&&s.push([l,o])})),tc.set(n,s)}function Ps(i,t=1){return Math.max(...String(i).split(`
`).map(e=>[...e].length))*7*t}function yu(i,t,e,n,s=128,r=200){let o=String(t||"game").split(/\s+/).filter(Boolean);for(let a=4;a>=1;a--){let l=[];for(let d of o){let f=l[l.length-1];f!==void 0&&[...f+" "+d].length*7*a<=240?l[l.length-1]=f+" "+d:l.push(d)}if(!(l.every(d=>[...d].length*7*a<=240)&&l.length*10*a<=r)&&a>1)continue;let h=s-(l.length*10*a>>1);l.forEach((d,f)=>_i(i,d,256-[...d].length*7*a>>1,h+f*10*a,e,n,a,a));return}}function vu(i,t,e,n,s,r){let o=t,a=e;for(let l of String(i)){if(l===`
`){o=t,a+=10*s;continue}let c=tc.get(l)||tc.get("?");for(let[h,d]of c)r(o+(1+h)*n,a+(1+d)*s);o+=7*n}}var r_=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];function _i(i,t,e,n,s,r=null,o=1,a=1){r&&(i.fillStyle=r,vu(t,e,n,o,a,(c,h)=>{for(let[d,f]of r_)i.fillRect(c+d*o,h+f*a,o,a)})),i.fillStyle=s,vu(t,e,n,o,a,(c,h)=>i.fillRect(c,h,o,a));let l=String(t).split(`
`);return e+[...l[l.length-1]].length*7*o}function o_(){return{speed:16,loopStart:0,loopEnd:0,notes:Array.from({length:32},()=>({pitch:24,wave:0,vol:0,fx:0}))}}var jn=(i,t)=>(i>>>0).toString(16).padStart(t,"0").slice(-t);function Mu(i){let t=jn(i.speed,2)+jn(i.loopStart,2)+jn(i.loopEnd,2);for(let e of i.notes)t+=jn(e.pitch&63,2)+jn(e.wave&7,1)+jn(e.vol&7,1)+jn(e.fx&7,1);return t}function To(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{166}$/.test(t))return null;let e=(s,r)=>parseInt(t.substr(s,r),16),n={speed:Math.max(1,e(0,2)),loopStart:Math.min(32,e(2,2)),loopEnd:Math.min(32,e(4,2)),notes:[]};for(let s=0;s<32;s++){let r=6+s*5;n.notes.push({pitch:e(r,2)&63,wave:e(r+2,1)&7,vol:e(r+3,1)&7,fx:e(r+4,1)&7})}return n}var F_=Mu(o_());var a_=i=>440*Math.pow(2,(i-33)/12),Ls=i=>i.speed/120,sr=i=>i<.5?i*4-1:3-i*4;function l_(i,t,e){switch(i){case 0:return sr(t);case 1:return t<.875?t/.875*2-1:1-(t-.875)/.125*2;case 2:return t*2-1;case 3:return t<.5?.7:-.7;case 4:return t<.3?.7:-.7;case 5:return(sr(t)+sr(t*2%1)*.5)*.67;case 7:return(sr(t)+sr(e))*.5;default:return 0}}function c_(i,t=0,e=32){let n=[];for(let s=t;s<e;s++)n.push(s);return Su(i,n)}function Su(i,t){let e=Math.max(1,Math.round(Ls(i)*22050)),n=new Float32Array(e*t.length),s=0,r=0,o=0,a=0,l=0,c={pitch:0,wave:0,vol:0,fx:0};for(let h=0;h<t.length;h++){let d=t[h],f=d>=0?i.notes[d]:c,g=h>0&&t[h-1]>=0?i.notes[t[h-1]]:f,_=d>=0?d-d%4:0,y=i.notes.slice(_,_+4);for(let m=0;m<e;m++){let u=m/e,A=(h*e+m)/22050,E=f.pitch,b=f.vol/7;switch(f.fx){case 1:E=g.pitch+(f.pitch-g.pitch)*u,b=(g.vol+(f.vol-g.vol)*u)/7;break;case 2:E+=Math.sin(A*Math.PI*2*7)*.5;break;case 3:E=f.pitch*(1-u);break;case 4:b*=u;break;case 5:b*=1-u;break;case 6:case 7:{let I=Math.floor(A*(f.fx===6?30:15))%4;E=y[I].pitch;break}}let P=a_(E);s=(s+P/22050)%1,r=(r+P*1.006/22050)%1;let C;f.wave===6?(l+=P*8/22050,l>=1&&(l%=1,a=Math.random()*2-1),C=a*.7):C=l_(f.wave,s,r),o+=(b-o)*.02,n[h*e+m]=C*o*.35}}return n}function h_(i){if(i.loopEnd>i.loopStart)return[0,i.loopEnd];let t=0;return i.notes.forEach((e,n)=>{e.vol>0&&(t=n+1)}),[0,t]}var rr=64,bu=64;function u_(i){let t=(i.loopStart?1:0)|(i.loopBack?2:0)|(i.stop?4:0);return jn(t,1)+i.ch.map(e=>jn(e>=0&&e<64?e:bu,2)).join("")}function wu(i){let t=String(i||"").trim().toLowerCase();if(!/^[0-9a-f]{9}$/.test(t))return null;let e=parseInt(t[0],16),n=[0,1,2,3].map(s=>{let r=parseInt(t.substr(1+s*2,2),16);return r<64?r:bu});return{loopStart:!!(e&1),loopBack:!!(e&2),stop:!!(e&4),ch:n}}var ec=i=>!i||i.ch.every(t=>t>=64),Eu=i=>i.loopEnd>i.loopStart;function Tu(i,t){let e=0,n=0;for(let s of i.ch){let r=s<64?t[s]:null;if(!r)continue;let o=32*Ls(r);n||(n=o),Eu(r)||(e=Math.max(e,o))}return e||n}function d_(i,t){let e=[];for(let n=0;e.length<t;n++)Eu(i)&&n>=i.loopEnd&&(n=i.loopStart),e.push(n<32?n:-1);return e}function f_(i,t){let e=Tu(i,t),n=Math.round(e*22050),s=new Float32Array(Math.max(1,n));for(let r of i.ch){let o=r<64?t[r]:null;if(!o)continue;let a=Su(o,d_(o,Math.ceil(e/Ls(o))));for(let l=0;l<n&&l<a.length;l++)s[l]+=a[l]*.8}return s}function p_(i,t,e){let n=i[t];if(!n||n.stop)return-1;if(n.loopBack){for(let r=t;r>=0;r--)if(i[r]&&i[r].loopStart)return r;return e}let s=t+1;return s<rr&&!ec(i[s])?s:-1}var Eo=class{constructor(){this.ctx=null,this.channels=Array.from({length:4},()=>null),this.cache=new Map,this.volume=1,this.muted=!1,this.held=!1}setMuted(t){this.muted=!!t,this.gain&&(this.gain.gain.value=this.muted?0:1)}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.gain.gain.value=this.muted?0:1}if(this.held){this.suspend();return}this.wake()}wake(){this.ctx.state!=="running"&&this.ctx.state!=="closed"?this.ctx.resume().then(()=>{this.held?this.ctx.suspend():this.startPendingMusic()}):this.pendingMusic&&this.startPendingMusic()}get ready(){return!!this.ctx&&this.ctx.state==="running"}buffer(t,e,n,s){let r=t+"|"+n+"|"+s,o=this.cache.get(r);if(!o){let a=c_(e,n,s);o=this.ctx.createBuffer(1,Math.max(1,a.length),22050),o.copyToChannel(a,0),this.cache.set(r,o),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}return o}play(t,e=-1,n=0,s=32){let r=To(t);if(!r||!this.ready)return-1;let[o,a]=h_(r);if(o=Math.max(o,n|0),s<32&&(a=Math.min(a,o+Math.max(0,s|0))),a<=o)return-1;(e<0||e>=4)&&(e=this.freeChannel()),this.stop(e);let l=this.ctx.createBufferSource();l.buffer=this.buffer(t,r,o,a);let c=r.loopEnd>r.loopStart&&r.loopEnd>o&&s>=32;c&&(l.loop=!0,l.loopStart=Math.max(0,r.loopStart-o)*Ls(r),l.loopEnd=(r.loopEnd-o)*Ls(r)),l.connect(this.gain),l.start();let h={src:l,started:this.ctx.currentTime,sfx:r,from:o,loops:c,done:!1};return l.onended=()=>{h.done=!0,this.channels[e]===h&&(this.channels[e]=null)},this.channels[e]=h,e}freeChannel(){let t=0,e=1/0;for(let n=0;n<4;n++){let s=this.channels[n];if(!s)return n;s.started<e&&(e=s.started,t=n)}return t}stop(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];if(n)try{n.src.stop()}catch{}this.channels[e]=null}}release(t=-1){for(let e=0;e<4;e++){if(t>=0&&e!==t)continue;let n=this.channels[e];n&&(n.src.loop=!1)}}noteAt(t){let e=this.channels[t];if(!e||!this.ctx)return-1;let n=Ls(e.sfx),s=(this.ctx.currentTime-e.started)/n;if(e.loops){let r=e.sfx.loopStart-e.from,o=e.sfx.loopEnd-e.sfx.loopStart;s>=e.sfx.loopEnd-e.from&&(s=r+(s-r)%o)}return e.from+Math.floor(s)}music(t,e,n,s=0){this.musicStop(),!(n<0)&&(this.pendingMusic={getPatterns:t,getSounds:e,n,fadeMs:s},this.ready&&this.startPendingMusic())}startPendingMusic(){let t=this.pendingMusic;if(this.pendingMusic=null,!t||!this.ready)return;let e=t.getPatterns();if(ec(e[t.n]))return;let n=this.ctx.createGain();n.connect(this.gain);let s=this.ctx.currentTime;t.fadeMs>0&&(n.gain.setValueAtTime(0,s),n.gain.linearRampToValueAtTime(1,s+t.fadeMs/1e3));let r={...t,gain:n,cur:t.n,start:t.n,time:s+.05,sources:[],timeline:[]};this.song=r;let o=()=>{if(this.song!==r)return;let a=r.getPatterns(),l=r.getSounds();for(;r.cur>=0&&r.time<this.ctx.currentTime+.4;){let c=a[r.cur],h=ec(c)?0:Tu(c,l);if(!h){r.cur=-1;break}let d="p"+u_(c)+c.ch.map(_=>l[_]?Mu(l[_]):"").join("|"),f=this.cache.get(d);if(!f){let _=f_(c,l);f=this.ctx.createBuffer(1,_.length,22050),f.copyToChannel(_,0),this.cache.set(d,f),this.cache.size>256&&this.cache.delete(this.cache.keys().next().value)}let g=this.ctx.createBufferSource();g.buffer=f,g.connect(r.gain),g.start(r.time),r.sources.push(g),r.sources.length>8&&r.sources.shift(),r.timeline.push({time:r.time,pattern:r.cur,secs:h}),r.timeline.length>8&&r.timeline.shift(),r.time+=h,r.cur=p_(a,r.cur,r.start)}if(r.cur<0&&this.ctx.currentTime>r.time){this.musicStop();return}r.timer=setTimeout(o,100)};o()}musicStop(t=0){this.pendingMusic=null;let e=this.song;if(!e)return;this.song=null,clearTimeout(e.timer);let n=this.ctx.currentTime+t/1e3;t>0&&(e.gain.gain.setValueAtTime(e.gain.gain.value,this.ctx.currentTime),e.gain.gain.linearRampToValueAtTime(0,n));for(let s of e.sources)try{s.stop(n)}catch{}}musicPosition(){let t=this.song;if(!t||!this.ctx)return null;let e=this.ctx.currentTime;for(let n=t.timeline.length-1;n>=0;n--){let s=t.timeline[n];if(e>=s.time)return e<s.time+s.secs?{pattern:s.pattern,frac:(e-s.time)/s.secs}:null}return null}suspend(){this.held=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.held=!1,this.ctx&&this.wake()}};var Ao=class{constructor(t,e,n){this.w=t,this.h=e,this.out=new nc,this.prev=null,this.pending=null;let s=Math.max(2,n.length+1);this.bits=Math.max(1,Math.ceil(Math.log2(Math.min(256,s)))),this.trans=n.length<256?n.length:-1;let r=this.out;r.str("GIF89a"),r.u16(t),r.u16(e),r.byte(128|this.bits-1<<4|this.bits-1),r.byte(0),r.byte(0);for(let o=0;o<1<<this.bits;o++){let a=n[o]||0;r.byte(a>>16&255),r.byte(a>>8&255),r.byte(a&255)}r.byte(33),r.byte(255),r.byte(11),r.str("NETSCAPE2.0"),r.byte(3),r.byte(1),r.u16(0),r.byte(0),this.lzw=new ic}add(t,e){let{w:n,h:s,prev:r}=this;if(!r){this.pending={x:0,y:0,w:n,h:s,px:t.slice(),delay:e,trans:!1},this.prev=t.slice();return}let o=n,a=s,l=-1,c=-1;for(let _=0;_<s;_++){let y=_*n,m=-1,u=-1;for(let A=0;A<n;A++)t[y+A]!==r[y+A]&&(m<0&&(m=A),u=A);m>=0&&(m<o&&(o=m),u>l&&(l=u),_<a&&(a=_),c=_)}if(l<0){this.pending.delay+=e;return}this.flush();let h=l-o+1,d=c-a+1,f=new Uint8Array(h*d),g=this.trans;for(let _=0;_<d;_++){let y=(a+_)*n+o;for(let m=0;m<h;m++){let u=t[y+m];f[_*h+m]=g>=0&&u===r[y+m]?g:u,r[y+m]=u}}this.pending={x:o,y:a,w:h,h:d,px:f,delay:e,trans:g>=0}}flush(){let t=this.pending,e=this.out;t&&(this.pending=null,e.byte(33),e.byte(249),e.byte(4),e.byte(4|(t.trans?1:0)),e.u16(Math.max(2,Math.min(65535,Math.round(t.delay)))),e.byte(t.trans?this.trans:0),e.byte(0),e.byte(44),e.u16(t.x),e.u16(t.y),e.u16(t.w),e.u16(t.h),e.byte(0),this.lzw.encode(t.px,Math.max(2,this.bits),e))}finish(){return this.flush(),this.out.byte(59),this.out.bytes()}},nc=class{constructor(){this.buf=new Uint8Array(65536),this.n=0}byte(t){if(this.n===this.buf.length){let e=new Uint8Array(this.buf.length*2);e.set(this.buf),this.buf=e}this.buf[this.n++]=t}u16(t){this.byte(t&255),this.byte(t>>8&255)}str(t){for(let e=0;e<t.length;e++)this.byte(t.charCodeAt(e))}bytes(){return this.buf.slice(0,this.n)}},ic=class{constructor(){this.codes=new Int16Array(4096*256),this.stamp=new Int32Array(4096*256),this.gen=0}encode(t,e,n){let{codes:s,stamp:r}=this,o=1<<e,a=o+1,l=e+1,c=a+1,h=++this.gen,d=0,f=0,g=new Uint8Array(255),_=0;n.byte(e);let y=A=>{if(g[_++]=A,_===255){n.byte(255);for(let E=0;E<255;E++)n.byte(g[E]);_=0}},m=A=>{for(d|=A<<f,f+=l;f>=8;)y(d&255),d>>>=8,f-=8};m(o);let u=t[0];for(let A=1;A<t.length;A++){let E=t[A],b=u<<8|E;if(r[b]===h){u=s[b];continue}m(u),c===4096?(m(o),h=++this.gen,c=a+1,l=e+1):(c>=1<<l&&l++,r[b]=h,s[b]=c++),u=E}if(m(u),m(a),f>0&&y(d&255),_){n.byte(_);for(let A=0;A<_;A++)n.byte(g[A])}n.byte(0)}};var Ht=256,Au=1e3/60,x_={ArrowLeft:0,KeyA:0,ArrowRight:1,KeyD:1,ArrowUp:2,KeyW:2,ArrowDown:3,KeyS:3,KeyZ:4,KeyC:4,KeyN:4,Space:4,KeyX:5,KeyV:5,KeyM:5,Enter:6,NumpadEnter:6,KeyP:6},Ru=64*1024,Cu=i=>String(i||"game").toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"")||"game",kn=(i,t,e)=>Array.isArray(i)?[+i[0]||0,+i[1]||0,+i[2]||0]:[+i||0,+t||0,+e||0];function Iu({canvas:i,overlay:t,cart:e,onError:n=console.error,onLog:s=console.log,onRestart:r=()=>location.reload(),onSave:o=()=>{},onCover:a=null}){let l=_u(i,Ht),c=l.extensions.has("EXT_color_buffer_float"),h="blocky3d.res",d=1;try{d=c?Math.min(3,Math.max(1,parseInt(localStorage.getItem(h),10)||1)):1}catch{}let f=new Es,g=new Ze(90,1,.05,2e3),_=new bs(-1,1,1,-1,.05,2e3),y=g,m=Ql(Ht*d),u=null,A=[0,6,-10],E=[0,0,0],b=t.getContext("2d");t.width=t.height=Ht;let P=Array.isArray(e.palette)&&e.palette.length===zn?[...e.palette]:[...Qn],C=hu(P),I=mu(m,C);I.uniforms.uNear.value=y.near,I.uniforms.uFar.value=y.far;let z=gu(C);z.paint.uNear.value=y.near,z.paint.uFar.value=y.far;function w(p){d=c?Math.min(3,Math.max(1,p|0)):1;try{localStorage.setItem(h,String(d))}catch{}let x=Ht*d;l.setSize(x,x,!1),m.dispose(),m=Ql(x),u&&(u[0].dispose(),u[1].dispose(),u=null),d>1&&(u=[jl(x),jl(x)]);let T=I.uniforms;T.tColor.value=m.textures[0],T.tInfo.value=m.textures[1],T.tDepth.value=m.depthTexture}w(d);let S=pu(C);f.add(S);let L=nu();iu(L,xu(e));let W=wo(e),X=Array.from({length:64},(p,x)=>e.sfx&&e.sfx[x]||null),K=X.map(p=>p?To(p):null),st=Array.from({length:rr},(p,x)=>wu(e.music&&e.music[x])),Z=new Eo,lt="blocky3d.save."+Cu(e.name),J=cu(e),ct=ir(),vt=Is(),At=0,Wt=-1,ne=-1,j=!0,at=null,Et=0,dt=0,It=null,kt=0,qt=0,fe=!1,Vt=null,ge=90,O=0,He=[0,"view","down"],jt=Zl(),$t=Yl(),Pt=[],_e=64,Dt=8,R=new V,v=[],k=null,tt=[],it=!1,Q=[0,0,Ht-1,Ht-1],Rt=new Bi(1,1,1),mt=new mo(1,24,16),gt={map:[],vox:[],cube:[],sphere:[],line:[]},Yt={map:0,vox:0,cube:0,sphere:0,line:0};function ot(p){let x=gt[p],T=x[Yt[p]];if(!T){if(p==="map")T=new ke(void 0,du(L,C)),T.matrixAutoUpdate=!1;else if(p==="vox")T=new ke(void 0,fu(C)),T.matrixAutoUpdate=!1;else if(p==="line"){let D=new sn;D.setAttribute("position",new Ue(new Float32Array(6),3)),T=new po(D,Kl(C)),T.frustumCulled=!1}else T=new ke(p==="cube"?Rt:mt,Kl(C));Object.assign(T.material.uniforms,jt,$t),x.push(T),f.add(T)}Yt[p]++,T.visible=!0;let B=T.material.uniforms;for(let D=0;D<zn;D++)B.uRemap.value[D]=ct[D],B.uTrans.value[D]=vt[D];return B.uOutline.value=ne<0?-1:ct[ne],B.uInner.value=j?1:0,It?B.uFog.value.set(It[0],It[1],It[2],1):B.uFog.value.w=0,B.uPix.value=d,B.uFill.value.set(Et,dt),B.uId.value=++qt,ne>=0&&(fe=!0),T.userData.view=k?k.i:0,k&&k.n++,T}let Mt=[[0,0,0]];function Lt(){if(!at)return Mt;let[p,x,T,B]=at,D=Y=>Y>0?Array.from({length:2*B+1},(nt,pt)=>(pt-B)*Y):[0],q=[[0,0,0]];for(let Y of D(p))for(let nt of D(x))for(let pt of D(T))(Y||nt||pt)&&q.push([Y,nt,pt]);return q}function Ot(p,[x,T,B]){let D=p.elements;D[12]+=x,D[13]+=T,D[14]+=B}let yt=p=>gi(P[ct[(p|0)&31]]??0);function Kt(p,x,T,B){return p=Math.floor(p),x=Math.floor(x),T=Math.floor(T),B=Math.floor(B),[Math.min(p,T),Math.min(x,B),Math.max(p,T),Math.max(x,B)]}function Ct(p){let x=W[p];if(!x)throw x===null?new Error(`map ${p} belonged to a scene that has since been replaced by scene_load`):new Error(`map ${p} does not exist (there are ${W.length} maps)`);return x}function de(p){let x=So(p.w,p.h,p.d,p.origin,p.data.slice());return x.name=p.name||"",x.pos=[...p.pos],x.angle=[...p.angle],x}let U=wo(e),ht=[];function $(){for(let p of ht)W[p]&&W[p].geometry&&W[p].geometry.dispose(),W[p]=null;for(ht=[];W.length&&W[W.length-1]===null;)W.pop()}let et=new V;function _t(p,x,T,B){return Cs(p),et.set(x,T,B).applyMatrix4(p._inv)}let ut=4,Ft=22,oe=new Array(Ft).fill(!1),Ee=Array.from({length:ut},()=>new Array(Ft).fill(!1)),Qt=Array.from({length:ut},()=>new Array(Ft).fill(!1)),Le=Array.from({length:ut},()=>[[0,0],[0,0]]),Je=.5,cr=[[7,0],[8,1],[9,2],[10,3],[11,4],[12,5],[13,6],[14,7],[15,8],[16,10],[17,11],[18,16]];function hr(p,x,T){let B=q=>!!(p.buttons[q]&&p.buttons[q].pressed),D=q=>Number.isFinite(p.axes[q])?p.axes[q]:0;x[0]=B(14)||D(0)<-Je,x[1]=B(15)||D(0)>Je,x[2]=B(12)||D(1)<-Je,x[3]=B(13)||D(1)>Je,x[4]=B(0)||B(2),x[5]=B(1)||B(3),x[6]=B(9);for(let[q,Y]of cr)x[q]=B(Y);T[0][0]=D(0),T[0][1]=D(1),T[1][0]=D(2),T[1][1]=D(3)}let xn=Array.from({length:ut},()=>new Array(Ft).fill(!1));function Us(){re();for(let x of xn)x.fill(!1);for(let x of Le)x[0][0]=x[0][1]=x[1][0]=x[1][1]=0;let p=[];try{p=navigator.getGamepads?[...navigator.getGamepads()]:[]}catch{p=[]}p.filter(x=>x&&x.connected).sort((x,T)=>x.index-T.index).slice(0,ut).forEach((x,T)=>hr(x,xn[T],Le[T])),Math.hypot(Nt[0],Nt[1])>0&&Math.hypot(Le[0][0][0],Le[0][0][1])<=xi&&(Le[0][0][0]=Nt[0],Le[0][0][1]=Nt[1]);for(let x=0;x<ut;x++)for(let T=0;T<Ft;T++)Ee[x][T]=Qt[x][T],Qt[x][T]=xn[x][T]||x===0&&(oe[T]||Bt[T]||St[T]);St.fill(!1)}let xi=.15;function ur(p,x){let T=Qt[x];if(!T)return[0,0];let[B,D]=Le[x][p?1:0],q=Math.hypot(B,D);if(q>xi){let zt=Math.min(1,(q-xi)/(1-xi))/q;return[B*zt,D*zt]}if(p)return[0,0];let Y=(T[1]?1:0)-(T[0]?1:0),nt=(T[3]?1:0)-(T[2]?1:0),pt=Y&&nt?Math.SQRT1_2:1;return[Y*pt,nt*pt]}let Ae=0,un=0,Ke=0,ti=0,ei=0,Wi=0,Ns=0,Fs=0,M=0,N=null,H=0,G=0,F=-1,rt=-1,xt=[],bt={0:19,2:20,1:21},St=new Array(Ft).fill(!1),Bt=new Array(Ft).fill(!1),Nt=[0,0],wt=0,te=null,ae=()=>{te&&te(je?0:wt)},pe=p=>{oe[p]=St[p]=!0},Se=()=>document.pointerLockElement===t,ie="mouse";window.addEventListener("pointerdown",p=>{ie=p.pointerType||"mouse"},!0);function Tt(p){let x=t.getBoundingClientRect();return[(p.clientX-x.left)/x.width*Ht,(p.clientY-x.top)/x.height*Ht]}function dn(){try{let p=t.requestPointerLock();p&&p.catch&&p.catch(()=>{})}catch{}}function re(){Ns=ti,Fs=ei,M=Wi,ti=ei=Wi=0}function Qe(p){Ae=[0,1,2].includes(p|0)?p|0:0,t.style.touchAction=Ae?"none":"";for(let x of[19,20,21])oe[x]=!1;N=null,Ae!==2&&Se()&&document.exitPointerLock()}let In=(p,x)=>xt.findIndex(T=>p>=T[0]&&p<T[0]+T[2]&&x>=T[1]&&x<T[1]+T[3]);t.addEventListener("contextmenu",p=>{Ae&&p.preventDefault()}),t.addEventListener("mousedown",p=>{if(Ae){if(Se()||([un,Ke]=Tt(p)),je){let x=In(un,Ke);x>=0&&p.button===0&&(rt=x);return}if(Ae===2&&!Se()){dn();return}bt[p.button]!==void 0&&pe(bt[p.button])}}),window.addEventListener("mouseup",p=>{bt[p.button]!==void 0&&(oe[bt[p.button]]=!1)}),window.addEventListener("mousemove",p=>{if(Ae){if(!Se()&&([un,Ke]=Tt(p),je)){let x=In(un,Ke);x>=0&&(F=x)}!je&&(Ae!==2||Se())&&(ti+=p.movementX||0,ei+=p.movementY||0)}}),t.addEventListener("wheel",p=>{Ae&&(p.preventDefault(),Wi+=p.deltaMode===1?p.deltaY/3:p.deltaMode===2?p.deltaY:p.deltaY/100)},{passive:!1}),t.addEventListener("pointerdown",p=>{if(!(!Ae||p.pointerType==="mouse"||N!==null)){p.preventDefault(),N=p.pointerId;try{t.setPointerCapture(p.pointerId)}catch{}if((Ae===1||je)&&([un,Ke]=Tt(p)),H=p.clientX,G=p.clientY,je){let x=In(un,Ke);x>=0&&(rt=x);return}Ae===1&&pe(19)}}),t.addEventListener("pointermove",p=>{p.pointerId===N&&(Ae===1&&([un,Ke]=Tt(p)),je||(ti+=p.clientX-H,ei+=p.clientY-G),H=p.clientX,G=p.clientY)});let Xe=p=>{p.pointerId===N&&(N=null,oe[19]=!1)};t.addEventListener("pointerup",Xe),t.addEventListener("pointercancel",Xe),document.addEventListener("pointerlockchange",()=>{!Se()&&Ae===2&&ni&&!je&&Uo(!0)});let vi=()=>Qt.some((p,x)=>p[6]&&!Ee[x][6]),se=0,Ge=null;function yi(){if(Ge===null)return Math.random();Ge=Ge+1831565813>>>0;let p=Ge;return p=Math.imul(p^p>>>15,p|1),p^=p+Math.imul(p^p>>>7,p|61),((p^p>>>14)>>>0)/4294967296}let Be={get palette(){return P},set palette(p){P=p},pal(p,x){if(p===void 0){ct=ir(),vt=Is();return}ct[p&31]=(x??p)&31},palt(p,x=!0){if(p===void 0){vt=Is();return}vt[p&31]=x?1:0},bg(p,x){At=ct[(p|0)&31],Wt=x==null||x===!1?-1:ct[(x|0)&31]},outline(p,x=!0){ne=p==null||p===!1?-1:(p|0)&31,j=ne<0||x!==!1},repeat(p,x,T,B=1){let D=nt=>+nt>0?+nt:0,q=[D(p),D(x),D(T)],Y=Math.max(0,Math.min(3,Math.floor(+B)||0));at=q.some(nt=>nt>0)&&Y>0?[...q,Y]:null},fillp(p,x=0){Et=p==null||p===!1?0:Math.max(0,Math.min(1,+p||0)),dt=x===-1?-1:ct[(x|0)&31]},torch(p,x,T,B=2,D=5){if(p===void 0){Pt=[];return}Pt.length>=_e||Pt.push([+p||0,+x||0,+T||0,Math.max(0,+B||0),Math.max(0,+D||0)])},fog(p,x=8,T=24){if(p==null||p===!1){It=null;return}It=[ct[(p|0)&31],Math.max(0,+x||0),Math.max(0,+T||0)]},cam_set_pos(p,x,T){A.splice(0,3,...kn(p,x,T))},cam_set_lookat(p,x,T){E.splice(0,3,...kn(p,x,T))},cam_set_fov(p){ge=Math.max(.01,Math.min(.49,+p||.25))*360},cam_set_ortho(p){O=Math.max(0,+p||0)},cam_set_curve(p,x="view",T="down"){if(x===!0&&(x="xz"),(x===!1||x===void 0||x===null)&&(x="view"),x=String(x),T=String(T),!["view","side"].includes(x)&&!/^(?!(.)\1)[xyz]{1,2}$/.test(x))throw new Error(`cam_set_curve: along is 'view', 'side', 'x', 'y', 'z' or two of x, y, z like 'xz'; got '${x}'`);if(!["down","away"].includes(T)&&!/^[+-][xyz]$/.test(T))throw new Error(`cam_set_curve: push is 'down', 'away' or a direction like '+z' or '-x'; got '${T}'`);He=[+p||0,x,T]},clip(p,x,T,B){if(p===void 0)Vt=null;else{let[D,q,Y,nt]=Kt(p,x,T,B);Vt=[Math.max(0,D),Math.max(0,q),Math.min(Ht-1,Y),Math.min(Ht-1,nt)]}it&&(uc(),hc()),dc()},map_new(p,x,T,B=[0,0,0]){return W.push(So(p|0,x|0,T|0,kn(B))),W.length-1},map_copy(p){return W.push(de(Ct(p))),W.length-1},map_reload(p){if(p==null){U.forEach((T,B)=>{W[B].data.set(T.data),W[B].dirty=!0});return}let x=U[p];if(!Number.isInteger(p)||!x){let T=U.length?`0-${U.length-1}`:"this cart has none";throw new Error(`map_reload(${p}): only the cart's maps can be reloaded (${T}); copies and map_new maps have no cart data`)}W[p].data.set(x.data),W[p].dirty=!0},map_stamp(p,x,T,B,D){let q=Ct(p),Y=Ct(x),nt=Math.floor(+T||0),pt=Math.floor(+B||0),zt=Math.floor(+D||0);for(let Jt=0;Jt<q.d;Jt++)for(let Ut=0;Ut<q.h;Ut++)for(let le=0;le<q.w;le++){let Me=q.data[le+q.w*(Ut+q.h*Jt)];Me&&bo(Y,nt+le,pt+Ut,zt+Jt,Me)}},map_box(p,x,T,B,D,q,Y,nt){let pt=Ct(p),zt=(Ce,ve)=>Math.max(0,Math.floor(Math.min(+Ce||0,+ve||0))),Jt=(Ce,ve,Un)=>Math.min(Un-1,Math.floor(Math.max(+Ce||0,+ve||0))),Ut=zt(x,D),le=Jt(x,D,pt.w),Me=zt(T,q),Re=Jt(T,q,pt.h),be=zt(B,Y),De=Jt(B,Y,pt.d),Te=(nt|0)&255;for(let Ce=be;Ce<=De;Ce++)for(let ve=Me;ve<=Re;ve++)for(let Un=Ut;Un<=le;Un++)pt.data[Un+pt.w*(ve+pt.h*Ce)]=Te;pt.dirty=!0},scene_load(p){let x=Array.isArray(e.scenes)?e.scenes:[],T=x[p];if(!T)throw new Error(`scene ${p} does not exist (there are ${x.length} scenes)`);$();let B={maps:[],named:{},things:[]};for(let D of T.maps||[]){let q=U[D.m];if(!q)continue;let Y=de(q);Y.pos=kn(D.pos),Y.angle=kn(D.angle),W.push(Y);let nt=W.length-1;ht.push(nt),B.maps.push(nt),D.name&&(B.named[D.name]=nt)}for(let D of T.vox||[])B.things.push([D.v|0,...kn(D.pos),+D.yaw||0]);return B},map_set_pos(p,x,T,B){let D=Ct(p);D.pos=kn(x,T,B),D._xfDirty=!0},map_set_angle(p,x,T,B){let D=Ct(p);D.angle=kn(x,T,B),D._xfDirty=!0},map_set_origin(p,x,T,B){let D=Ct(p),q=kn(x,T,B);Cs(D);let Y=new V(q[0]-D.origin[0],q[1]-D.origin[1],q[2]-D.origin[2]).applyMatrix4(D._rot);D.pos=[D.pos[0]+Y.x,D.pos[1]+Y.y,D.pos[2]+Y.z],D.origin=q,D._xfDirty=!0},map(p,x=!1){let T=Ct(p);ou(T),Cs(T);let B=0;for(let D of Lt()){let q=ot("map");B?q.material.uniforms.uId.value=B:B=q.material.uniforms.uId.value,q.geometry=T.geometry,q.matrix.copy(T._m),D!==Mt[0]&&Ot(q.matrix,D),q.material.side=x?En:On}},mget(p,x,T,B){return nr(Ct(p),Math.floor(x),Math.floor(T),Math.floor(B))},mset(p,x,T,B,D){bo(Ct(p),Math.floor(x),Math.floor(T),Math.floor(B),D|0)},msetw(p,x,T,B,D){let q=Ct(p),Y=_t(q,x,T,B);bo(q,Math.floor(Y.x),Math.floor(Y.y),Math.floor(Y.z),D|0)},mray(p,x,T,B,D,q,Y,nt=100){return dr(Ct(p),+x||0,+T||0,+B||0,+D||0,+q||0,+Y||0,+nt||0)},mtow(p,x,T,B){let D=Ct(p);return Cs(D),et.set(+x||0,+T||0,+B||0).applyMatrix4(D._m),[et.x,et.y,et.z]},wtom(p,x,T,B){let D=_t(Ct(p),+x||0,+T||0,+B||0);return[D.x,D.y,D.z]},mgetw(p,x,T,B,D){let q=Ct(p),Y=_t(q,x,T,B);if(D===void 0){let nt=Math.floor(Y.x),pt=Math.floor(Y.y),zt=Math.floor(Y.z);return[nr(q,nt,pt,zt),nt,pt,zt]}return Fu(q,Y.x,Y.y,Y.z,+D)},vox(p,x,T,B,D=0,q=0,Y=0,nt=1,pt=nt,zt=nt){let Jt=p|0;if(Jt<0||Jt>=Gi)throw new Error(`vox ${p} does not exist (models are 0-${Gi-1})`);let Ut=J[Jt];if(!Ut)return;let le=au(Ut),Me=null;for(let Re of Lt()){let be=ot("vox");be.geometry=le,Me?(be.matrix.copy(Me),Ot(be.matrix,Re)):(lu(Ut,[+x||0,+T||0,+B||0],[+D||0,+q||0,+Y||0],[+nt,+pt,+zt],be.matrix),Me=be.matrix)}},cube(p,x,T,B=1,D=7){for(let[q,Y,nt]of Lt()){let pt=ot("cube");pt.position.set(p+q,x+Y,T+nt),pt.scale.setScalar(B),pt.material.uniforms.uColor.value=D&31}},sphere(p,x,T,B=.5,D=7){for(let[q,Y,nt]of Lt()){let pt=ot("sphere");pt.position.set(p+q,x+Y,T+nt),pt.scale.setScalar(B),pt.material.uniforms.uColor.value=D&31}},line3(p,x,T,B,D,q,Y=7){for(let[nt,pt,zt]of Lt()){let Jt=ot("line"),Ut=Jt.geometry.attributes.position;Ut.array.set([p+nt,x+pt,T+zt,B+nt,D+pt,q+zt]),Ut.needsUpdate=!0,Jt.material.uniforms.uColor.value=Y&31}},print(p,x,T,B=7,D=null,q=1,Y=q){x===void 0&&(x=0,T=kt),q=Math.max(1,Math.round(+q||1)),Y=Math.max(1,Math.round(+Y||q));let nt=D!=null&&D!==!1&&D>=0,pt=_i(b,p,x|0,T|0,yt(B),nt?yt(D):null,q,Y);return kt=(T|0)+10*Y*String(p).split(`
`).length,pt},rect(p,x,T,B,D=7){let[q,Y,nt,pt]=Kt(p,x,T,B);b.fillStyle=yt(D),b.fillRect(q,Y,nt-q+1,1),b.fillRect(q,pt,nt-q+1,1),b.fillRect(q,Y,1,pt-Y+1),b.fillRect(nt,Y,1,pt-Y+1)},rectfill(p,x,T,B,D=7){let[q,Y,nt,pt]=Kt(p,x,T,B);b.fillStyle=yt(D),b.fillRect(q,Y,nt-q+1,pt-Y+1)},printh(...p){s(p.map(String).join(" "))},sfx(p,x=-1,T=0,B=32){if(p===-1){Z.stop(x);return}if(p===-2){Z.release(x);return}let D=typeof p=="string"?p:X[p|0];if(typeof p=="string"&&!To(p))throw new Error("sfx: that string is not a sound from the Sfx tab");D&&Z.play(D,x<4?x:-1,T,B)},music(p,x=0){if(p<0){Z.musicStop(x);return}if((p|0)>=rr)throw new Error(`music ${p} does not exist (patterns are 0-${rr-1})`);Z.music(()=>st,()=>K,p|0,x)},save(p){try{if(p==null)return localStorage.removeItem(lt),o(null),!0;let x=JSON.stringify(p);if(x.length>Ru)throw new Error(`save: data is too big (${x.length} characters, the limit is ${Ru})`);return localStorage.setItem(lt,x),o(x),!0}catch(x){if(x.message.startsWith("save:"))throw x;return!1}},load(){try{let p=localStorage.getItem(lt);return p===null?null:JSON.parse(p)}catch{return null}},btn(p,x=0){let T=Qt[x|0];return!!(T&&T[p|0])},mouse_set_mode(p){Qe(p)},mouse_pos(){return[un,Ke]},mouse_delta(){return[Ns,Fs]},mouse_wheel(){return M},mouse_locked(){return Se()},mouse_ray(){if(Ae!==2)return cc(un,Ke);let p=tt.length?tt[0].rect:Q;return cc((p[0]+p[2]+1)/2,(p[1]+p[3]+1)/2)},stick(p=0,x=0){return ur(p|0,x|0)},btnp(p,x=0){let T=Qt[x|0];return!!(T&&T[p|0]&&!Ee[x|0][p|0])},time(){return se/60},touch_set_mode(p){wt=[0,1,2,3].includes(p|0)?p|0:0,ae()},freeze(p,x){Bs=Math.max(0,Math.floor(+p||0)),zs=typeof x=="function"?x:null},t(){return se/60},rnd(p=1){let x=yi();return Array.isArray(p)?p[Math.floor(x*p.length)]:x*p},srand(p){Ge=p==null?null:Math.round(Number(p)*65536)>>>0},flr:Math.floor,ceil:Math.ceil,abs:Math.abs,sqrt:Math.sqrt,min:Math.min,max:Math.max,sgn(p){return p<0?-1:1},mid(p,x,T){return Math.max(Math.min(p,x),Math.min(Math.max(p,x),T))},sin(p){return Math.sin(p*_n)},cos(p){return Math.cos(p*_n)},atan2(p,x){return(Math.atan2(x,p)/_n+1)%1},dist(p,x){let T=Y=>Array.isArray(Y)?Y:Y&&typeof Y=="object"?"z"in Y?[Y.x,Y.y,Y.z]:[Y.x,Y.y]:[+Y],B=T(p),D=T(x),q=0;for(let Y=0;Y<Math.max(B.length,D.length);Y++){let nt=(+B[Y]||0)-(+D[Y]||0);q+=nt*nt}return Math.sqrt(q)},dir3(p=0,x=0){let T=Math.cos(x*_n);return[Math.sin(p*_n)*T,Math.sin(x*_n),Math.cos(p*_n)*T]},yaw_to(p,x){return(Math.atan2(+p||0,+x||0)/_n+1)%1},angdiff(p,x){return((x-p)%1+1.5)%1-.5},cam_orbit(p,x=0,T=0,B=8){let D=kn(p&&!Array.isArray(p)&&typeof p=="object"?[p.x,p.y,p.z]:p),q=Be.dir3(x,T);A.splice(0,3,D[0]-q[0]*B,D[1]-q[1]*B,D[2]-q[2]*B),E.splice(0,3,...D)},lerp(p,x,T){return Array.isArray(p)?p.map((B,D)=>B+((Array.isArray(x)?x[D]:x)-B)*T):p+(x-p)*T},mpush(p,x,T,B,D){let q=Array.isArray(p)?p:[p];x=+x||0,T=+T||0,B=+B||0;let Y=0,nt=0,pt=0,zt=-1,Jt=.5;for(let le=0;le<3;le++){let Me=!1;for(let Re of q){let be=Be.mgetw(Re,x,T,B,D);if(!be[0])continue;let[,,,,De,Te,Ce,ve]=be;x+=De*ve,T+=Te*ve,B+=Ce*ve,Y+=De*ve,nt+=Te*ve,pt+=Ce*ve,Te>Jt&&(Jt=Te,zt=Re|0),Me=!0}if(!Me)break}let Ut=Math.hypot(Y,nt,pt);return Ut>1e-9?[x,T,B,Y/Ut,nt/Ut,pt/Ut,zt]:[x,T,B,0,0,0,zt]},textw(p,x=1){return Ps(String(p))*Math.max(1,Math.round(+x||1))},printc(p,x,T=7,B=null,D=1,q=D){let[Y,,nt]=Vt||Q;return Be.print(p,Y+Math.floor((nt-Y+1-Be.textw(p,D))/2),x,T,B,D,q)}},Pn=new V,Ln=new V;function dr(p,x,T,B,D,q,Y,nt){let pt=[0,0,0,0,0,0,0,0];if(!(D||q||Y))return pt;Cs(p);let zt=Pn.set(x,T,B).applyMatrix4(p._inv),Jt=Ln.set(D,q,Y).transformDirection(p._inv),Ut=[zt.x,zt.y,zt.z],le=[Jt.x,Jt.y,Jt.z],Me=[p.w,p.h,p.d],Re=0,be=nt,De=-1;for(let Gt=0;Gt<3;Gt++){if(Math.abs(le[Gt])<1e-12){if(Ut[Gt]<0||Ut[Gt]>=Me[Gt])return pt;continue}let ye=(0-Ut[Gt])/le[Gt],Mn=(Me[Gt]-Ut[Gt])/le[Gt];if(ye>Mn&&([ye,Mn]=[Mn,ye]),ye>Re&&(Re=ye,De=Gt),Mn<be&&(be=Mn),Re>be)return pt}let Te=[0,0,0],Ce=[0,0,0],ve=[0,0,0],Un=[0,0,0],rn=[0,0,0];for(let Gt=0;Gt<3;Gt++){let ye=Ut[Gt]+le[Gt]*Re;Te[Gt]=Math.min(Me[Gt]-1,Math.max(0,Math.floor(Gt===De?ye+Math.sign(le[Gt])*1e-7:ye))),Ce[Gt]=Math.sign(le[Gt]),Un[Gt]=Ce[Gt]?Math.abs(1/le[Gt]):1/0,ve[Gt]=Ce[Gt]>0?(Te[Gt]+1-Ut[Gt])/le[Gt]:Ce[Gt]<0?(Te[Gt]-Ut[Gt])/le[Gt]:1/0}De>=0&&(rn[De]=-Ce[De]);let ii=Re;for(;;){let Gt=nr(p,Te[0],Te[1],Te[2]);if(Gt)return[Gt,Te[0],Te[1],Te[2],rn[0],rn[1],rn[2],ii];let ye=ve[0]<ve[1]?ve[0]<ve[2]?0:2:ve[1]<ve[2]?1:2;if(ii=ve[ye],ii>be||(Te[ye]+=Ce[ye],Te[ye]<0||Te[ye]>=Me[ye]))return pt;ve[ye]+=Un[ye],rn[0]=rn[1]=rn[2]=0,rn[ye]=-Ce[ye]}}let fr=new Ze(90,1,.05,2e3),Vn=new V,Nu=new V,Os=new bs(-1,1,1,-1,.05,2e3);function cc(p,x){let T=null;for(let zt=tt.length-1;zt>=0&&!T;zt--){let Jt=tt[zt].rect;p>=Jt[0]&&p<Jt[2]+1&&x>=Jt[1]&&x<Jt[3]+1&&(T=tt[zt])}T||(T={rect:Vt||Q,pos:A,look:E,fov:ge,ortho:O});let[B,D,q,Y]=T.rect,nt=(p-B)/(q-B+1)*2-1,pt=1-(x-D)/(Y-D+1)*2;if(T.ortho>0){Co(Os,T),Os.updateMatrixWorld();let zt=Nu.set(nt,pt,-1).unproject(Os);return Vn.set(nt,pt,1).unproject(Os).sub(zt).normalize(),zt.addScaledVector(Vn,-Os.near),[zt.x,zt.y,zt.z,Vn.x,Vn.y,Vn.z]}return Co(fr,T),fr.updateMatrixWorld(),Vn.set(nt,pt,.5).unproject(fr).sub(fr.position).normalize(),[T.pos[0],T.pos[1],T.pos[2],Vn.x,Vn.y,Vn.z]}function Co(p,x){let T=x.rect[2]-x.rect[0]+1,B=x.rect[3]-x.rect[1]+1;if(p.position.set(...x.pos),p.lookAt(...x.look),p.isOrthographicCamera){let D=(T>=B?x.ortho:x.ortho*T/B)/2,q=(B>=T?x.ortho:x.ortho*B/T)/2;p.left=-D,p.right=D,p.top=q,p.bottom=-q}else p.aspect=T/B,p.fov=T>B?2*Math.atan(Math.tan(x.fov*Math.PI/360)*B/T)*180/Math.PI:x.fov;p.updateProjectionMatrix()}function Fu(p,x,T,B,D){let q=null,Y=-1,nt=Math.floor(x-D),pt=Math.floor(x+D),zt=Math.floor(T-D),Jt=Math.floor(T+D),Ut=Math.floor(B-D),le=Math.floor(B+D);for(let Re=Ut;Re<=le;Re++)for(let be=zt;be<=Jt;be++)for(let De=nt;De<=pt;De++){let Te=nr(p,De,be,Re);if(!Te)continue;let Ce=Math.max(De,Math.min(x,De+1)),ve=Math.max(be,Math.min(T,be+1)),Un=Math.max(Re,Math.min(B,Re+1)),rn=x-Ce,ii=T-ve,Gt=B-Un,ye=Math.hypot(rn,ii,Gt);if(ye>=D)continue;let Mn;if(ye>1e-6)Mn=D-ye,rn/=ye,ii/=ye,Gt/=ye;else{let Mr=[[x-De,-1,0,0],[De+1-x,1,0,0],[T-be,0,-1,0],[be+1-T,0,1,0],[B-Re,0,0,-1],[Re+1-B,0,0,1]].reduce((Sc,bc)=>bc[0]<Sc[0]?bc:Sc);Mn=D+Mr[0],rn=Mr[1],ii=Mr[2],Gt=Mr[3]}Mn>Y&&(Y=Mn,q=[Te,De,be,Re,rn,ii,Gt,Mn])}if(!q)return[0,0,0,0,0,0,0,0];let Me=new V(q[4],q[5],q[6]).applyMatrix4(p._rot);return q[4]=Me.x,q[5]=Me.y,q[6]=Me.z,q}let Hn={},ni=!1,pr=0,Io=0,mr=0,gr=!1,Bs=0,zs=null;function hc(){k={i:v.length,rect:Vt||Q,n:0},v.push(k)}function uc(){k&&(k.pos=[...A],k.look=[...E],k.fov=ge,k.ortho=O,k.bg=At,k.bg2=Wt,k.curve=He)}let ks=!1;function dc(){ks&&(b.restore(),ks=!1),Vt&&(b.save(),b.beginPath(),b.rect(Vt[0],Vt[1],Vt[2]-Vt[0]+1,Vt[3]-Vt[1]+1),b.clip(),ks=!0)}function Po(){for(let p in Yt)Yt[p]=0;Pt=[],ks&&(b.restore(),ks=!1),b.clearRect(0,0,Ht,Ht),dc(),kt=0,qt=0,fe=!1,v=[],hc(),it=!0}function Vs(p,x,T,B,D){p?(p.viewport.set(x,T,B,D),p.scissor.set(x,T,B,D),p.scissorTest=!0):(l.setViewport(x,T,B,D),l.setScissor(x,T,B,D),l.setScissorTest(!0))}function Lo(){it=!1,uc();for(let T in gt)for(let B=Yt[T];B<gt[T].length;B++)gt[T][B].visible=!1;Xl(C,P);let p=v.filter(T=>T.n>0);p.length||(p=[{i:-1,rect:Q,pos:[...A],look:[...E],fov:ge,ortho:O,bg:At,bg2:Wt,curve:He}]);let x=Ht*d;(p.length>1||p[0].rect!==Q)&&(l.setRenderTarget(null),Vs(null,0,0,x,x),l.setClearColor(P[At]??0,1),l.clear());for(let T of p)zu(T,p.length>1);for(let T of[m,...u||[]])T.viewport.set(0,0,x,x),T.scissor.set(0,0,x,x),T.scissorTest=!1;l.setRenderTarget(null),l.setViewport(0,0,x,x),l.setScissorTest(!1),tt=p.map(T=>({rect:T.rect,pos:T.pos,look:T.look,fov:T.fov,ortho:T.ortho}))}function Ou(p){let[x,T,B]=p.curve||[0,"view","down"],D=p.look[0]-p.pos[0],q=p.look[2]-p.pos[2],Y=Math.hypot(D,q);Y<1e-6?(D=0,q=1):(D/=Y,q/=Y);let nt={x:[1,0,0],y:[0,1,0],z:[0,0,1]},pt=T==="view"?[[D,0,q]]:T==="side"?[[q,0,-D]]:[...T].map(Ut=>nt[Ut]),zt=B==="down"?[0,-1,0]:B==="away"?[D,0,q]:nt[B[1]].map(Ut=>B[0]==="-"?-Ut:Ut),Jt=jt;Jt.uCurve.value.set(x,p.look[0],p.look[1],p.look[2]),Jt.uCurveA.value.set(...pt[0]),Jt.uCurveB.value.set(...pt[1]||[0,0,0]),Jt.uCurveP.value.set(...zt);for(let Ut of["map","vox","cube","sphere"])for(let le of gt[Ut])le.frustumCulled=x===0}function Bu(){let p=Pt;if(p.length>Dt){let[x,T,B]=y.position.toArray();p=p.map(D=>[(D[0]-x)**2+(D[1]-T)**2+(D[2]-B)**2,D]).sort((D,q)=>D[0]-q[0]).slice(0,Dt).map(D=>D[1])}$t.uTorchN.value=p.length,p.length&&(y.updateMatrixWorld(),p.forEach(([x,T,B,D,q],Y)=>{R.set(x,T,B).applyMatrix4(y.matrixWorldInverse),$t.uTorch.value[Y].set(R.x,R.y,R.z,D),$t.uTorchFar.value[Y]=q}))}function zu(p,x){let[T,B,D,q]=p.rect,Y=T*d,nt=(Ht-1-q)*d,pt=(D-T+1)*d,zt=(q-B+1)*d;if(x)for(let le in gt)for(let Me=0;Me<Yt[le];Me++)gt[le][Me].visible=gt[le][Me].userData.view===p.i;y=p.ortho>0?_:g,Co(y,p),I.uniforms.uOrtho.value=z.paint.uOrtho.value=p.ortho>0?1:0,Ou(p),Bu(),S.visible=p.bg2>=0,S.visible&&(S.material.uniforms.uSky.value.set(p.bg,p.bg2),S.material.uniforms.uPix.value=d),Vs(m,Y,nt,pt,zt),l.setRenderTarget(m),l.setClearColor(P[p.bg]??0,1),l.clear(),l.render(f,y);let Jt=I.uniforms;if(Jt.uAny.value=fe?1:0,Jt.uRect.value.set(Y,nt,Y+pt-1,nt+zt-1),d===1||!fe){Jt.uMode.value=0,l.setRenderTarget(null),Vs(null,Y,nt,pt,zt),l.render(I.scene,I.camera);return}let Ut=z;Ut.grow.uRect.value.set(Y,nt,Y+pt-1,nt+zt-1),Jt.uMode.value=1;for(let le of u)Vs(le,Y,nt,pt,zt);l.setRenderTarget(u[0]),l.render(I.scene,I.camera),Ut.grow.uR.value=d-1,Ut.grow.tMask.value=u[0].texture,Ut.grow.uDir.value.set(1,0),l.setRenderTarget(u[1]),l.render(Ut.growScene,Ut.camera),Ut.grow.tMask.value=u[1].texture,Ut.grow.uDir.value.set(0,1),l.setRenderTarget(u[0]),l.render(Ut.growScene,Ut.camera),Ut.paint.tColor.value=m.textures[0],Ut.paint.tInfo.value=m.textures[1],Ut.paint.tDepth.value=m.depthTexture,Ut.paint.tMask.value=u[0].texture,l.setRenderTarget(null),Vs(null,Y,nt,pt,zt),l.render(Ut.paintScene,Ut.camera)}function Hs(p){try{return p(),!0}catch(x){return yr(),n(x),!1}}let vn=["Resume","Restart","Screenshot","Capture GIF"];a&&vn.push("Capture cover"),c&&vn.push("Resolution");let je=!1,yn=0,Dn="",Mi=0,fc=0,Si=document.createElement("canvas");Si.width=Si.height=Ht,Si.style.cssText="position:absolute;inset:0;width:100%;height:100%;image-rendering:pixelated;pointer-events:none;display:none",t.after(Si);let Do=Si.getContext("2d");function Uo(p){je=p,ae(),F=rt=-1;for(let x of[19,20,21])oe[x]=!1;Si.style.display=p?"block":"none",p?(yn=0,Dn="",fc=0,Z.suspend(),Se()&&document.exitPointerLock()):(Do.clearRect(0,0,Ht,Ht),Z.resume(),Ae===2&&ie==="mouse"&&dn())}function ku(){let p=Do;p.clearRect(0,0,Ht,Ht),p.fillStyle="rgba(0, 0, 0, 0.45)",p.fillRect(0,0,Ht,Ht);let x=156,T=26+vn.length*14,B=Ht-x>>1,D=Ht-T>>1;p.fillStyle=gi(Qn[0]),p.fillRect(B,D,x,T),p.fillStyle=gi(Qn[7]),p.fillRect(B,D,x,1),p.fillRect(B,D+T-1,x,1),p.fillRect(B,D,1,T),p.fillRect(B+x-1,D,1,T),_i(p,"Paused",B+(x-Ps("Paused")>>1),D+4,gi(Qn[6])),xt=vn.map((q,Y)=>[B+4,D+19+Y*14,x-8,14]),vn.forEach((q,Y)=>{let nt=Y===yn,pt=q==="Resolution"?`Resolution < ${d}x >`:q;_i(p,(nt?"> ":"  ")+pt,B+8,D+20+Y*14,gi(Qn[nt?10:7]))}),Dn&&performance.now()<Mi&&_i(p,Dn,Ht-Ps(Dn)>>1,D+T+6,gi(Qn[11]),gi(Qn[0]))}function Vu(){let p=Ht*d,x=document.createElement("canvas");x.width=x.height=p;let T=x.getContext("2d");T.imageSmoothingEnabled=!1,T.drawImage(i,0,0,p,p),T.drawImage(t,0,0,p,p);let B=pc("png");x.toBlob(D=>{D&&mc(D,B)},"image/png"),Dn="Screenshot saved",Mi=performance.now()+1500,s("screenshot saved: "+B)}function pc(p){let x=new Date().toISOString().slice(0,19).replace(/[-:]/g,"").replace("T","_");return`${Cu(e.name)}_${x}.${p}`}function mc(p,x){let T=document.createElement("a");T.href=URL.createObjectURL(p),T.download=x,document.body.append(T),T.click(),T.remove(),setTimeout(()=>URL.revokeObjectURL(T.href),2e3)}let gc=10,Gs=2,_r=gc*60/Gs,No=[],Xi=0,qi=0,Fo=-1/0,xr=!1,Yi=[],Oo=new Map,vr=null;function Hu(){Xi=qi=0,Fo=-1/0,Yi=[],Oo=new Map}function Gu(p){let x=Oo.get(p);if(x!==void 0)return x;if(Yi.length<255)x=Yi.push(p)-1;else{let T=1/0;for(let B=0;B<Yi.length;B++){let D=Yi[B],q=(p&255)-(D&255),Y=(p>>8&255)-(D>>8&255),nt=(p>>16&255)-(D>>16&255),pt=q*q+Y*Y+nt*nt;pt<T&&(T=pt,x=B)}}return Oo.set(p,x),x}function Wu(){if(gr||xr||se-Fo<Gs)return;if(Fo=se,!vr){let Y=document.createElement("canvas");Y.width=Y.height=Ht,vr=Y.getContext("2d",{willReadFrequently:!0}),vr.imageSmoothingEnabled=!1}let p=vr;p.fillStyle="#000",p.fillRect(0,0,Ht,Ht),p.drawImage(i,0,0,Ht,Ht),p.drawImage(t,0,0,Ht,Ht);let x=new Uint32Array(p.getImageData(0,0,Ht,Ht).data.buffer),T=No[Xi];T||(T=No[Xi]={px:new Uint8Array(Ht*Ht),f:0});let B=T.px,D=-1,q=0;for(let Y=0;Y<x.length;Y++){let nt=x[Y]&16777215;nt!==D&&(D=nt,q=Gu(nt)),B[Y]=q}T.f=se,Xi=(Xi+1)%_r,qi<_r&&qi++}async function Xu(){if(xr)return;if(qi<2){Dn="Nothing recorded yet",Mi=performance.now()+1500;return}xr=!0;let p=pc("gif");try{let x=[];for(let nt=0;nt<qi;nt++)x.push(No[(Xi-qi+nt+_r)%_r]);let T=x[x.length-1].f+Gs-gc*60;x=x.filter(nt=>nt.f>=T);let B=Yi.map(nt=>(nt&255)<<16|nt&65280|nt>>16&255),D=new Ao(Ht,Ht,B),q=nt=>Math.round((nt-x[0].f)*100/60),Y=performance.now();for(let nt=0;nt<x.length;nt++){let pt=nt+1<x.length?x[nt+1].f:x[nt].f+Gs;D.add(x[nt].px,q(pt)-q(x[nt].f)),performance.now()-Y>30&&(Dn=`Saving GIF ${Math.floor(nt*100/x.length)}%`,Mi=1/0,await new Promise(zt=>setTimeout(zt,0)),Y=performance.now())}mc(new Blob([D.finish()],{type:"image/gif"}),p),Dn="GIF saved",Mi=performance.now()+1500,s(`gif saved: ${p} (${((x[x.length-1].f+Gs-x[0].f)/60).toFixed(1)} s)`)}catch(x){Dn="GIF failed",Mi=performance.now()+1500,s("gif failed: "+(x&&x.message))}finally{xr=!1}}function qu(){let p=document.createElement("canvas");p.width=p.height=Ht;let x=p.getContext("2d");x.imageSmoothingEnabled=!1,x.drawImage(i,0,0,Ht,Ht),x.drawImage(t,0,0),a(p.toDataURL("image/png")),Dn="Cover captured",Mi=performance.now()+1500}function Yu(){let p=x=>Qt.some((T,B)=>T[x]&&!Ee[B][x]);if(!(++fc<15)){if(F>=0&&(yn=F,F=-1),rt>=0)return yn=rt,rt=-1,_c(vn[yn]);p(2)&&(yn=(yn+vn.length-1)%vn.length),p(3)&&(yn=(yn+1)%vn.length),vn[yn]==="Resolution"&&(p(0)||p(1))&&xc(p(1)?1:-1),(p(4)||p(5)||p(6))&&_c(p(6)?"Resume":vn[yn])}}function _c(p){p==="Resume"?Uo(!1):p==="Restart"?(yr(),r()):p==="Screenshot"?Vu():p==="Capture GIF"?Xu():p==="Capture cover"?qu():p==="Resolution"&&xc(1)}function xc(p){w((d-1+p+3)%3+1),b.clearRect(0,0,Ht,Ht),Po(),!(Hn._draw&&!Hs(Hn._draw))&&Lo()}function vc(){if(Us(),je)return Yu(),ni;if(vi())return Uo(!0),!0;if(se++,Bs>0){let p=zs;if(Bs--,Bs===0&&zs===p&&(zs=null),p&&!Hs(p))return!1}else if(Hn._update&&!Hs(Hn._update))return!1;return!0}function yc(){return je?(ku(),!0):(Po(),Hn._draw&&!Hs(Hn._draw)?!1:(Lo(),Wu(),!0))}function Mc(p){if(!ni||gr)return;mr+=Math.min(p-Io,100),Io=p;let x=0;for(;mr>=Au&&x<4;)if(mr-=Au,x++,!vc()||!ni)return;x>0&&!yc()||(pr=requestAnimationFrame(Mc))}function Zu(p=1,x=!0){if(gr=!0,cancelAnimationFrame(pr),!ni)return p===0;for(let T=0;T<p;T++)if(!vc()||!ni||(x||T===p-1)&&!yc())return!1;return!0}function $u(p){return Hn=p||{},Po(),Lo(),Hn._init&&!Hs(Hn._init)?!1:(ni=!0,Io=performance.now(),pr=requestAnimationFrame(Mc),!0)}function yr(){ni=!1,cancelAnimationFrame(pr),Z.stop(),Z.musicStop(),Se()&&document.exitPointerLock()}function Ju(){yr();for(let p of W)p&&p.geometry&&p.geometry.dispose();W.splice(0,W.length,...wo(e)),ht=[],P=Array.isArray(e.palette)&&e.palette.length===zn?[...e.palette]:[...Qn],ct=ir(),vt=Is(),At=0,Wt=-1,ne=-1,j=!0,It=null,Et=0,dt=0,at=null,kt=0,A.splice(0,3,0,6,-10),E.splice(0,3,0,0,0),ge=90,O=0,Vt=null,tt=[],He=[0,"view","down"],Hu(),se=0,mr=0,Bs=0,zs=null,Ge=null,gr=!1,wt=0,Nt[0]=Nt[1]=0,ae(),Qe(0),ti=ei=Wi=Ns=Fs=M=0;for(let p of[oe,Bt,St])p.fill(!1);for(let p of Qt)p.fill(!1);for(let p of Ee)p.fill(!1);je=!1,F=rt=-1,Si.style.display="none",Do.clearRect(0,0,Ht,Ht),Z.resume(),b.clearRect(0,0,Ht,Ht)}function Ku(p,x){Nt[0]=+p||0,Nt[1]=+x||0}function Qu(p,x){Bt[p]=!!x,x&&(St[p]=!0)}let Zi=!1;try{Zi=localStorage.getItem("blocky3d.mute")==="1"}catch{}Z.setMuted(Zi);function ju(p){Zi=!!p,Z.setMuted(Zi);try{localStorage.setItem("blocky3d.mute",Zi?"1":"0")}catch{}}function td(p,x){x&&Z.unlock();let T=x_[p.code];T!==void 0&&(oe[T]=x,x&&(St[T]=!0),p.preventDefault())}return{api:Be,start:$u,stop:yr,reset:Ju,step:Zu,key:td,maps:W,renderer:l,unlockAudio:()=>Z.unlock(),setButton:Qu,setStick:Ku,setMuted:ju,set onTouchMode(p){te=p,ae()},get touchMode(){return je?0:wt},get muted(){return Zi},get paused(){return je},get scale(){return d},setScale:w}}var v_=`
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
`,or=i=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,ar={pause:or('<rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" stroke="none"/>'),sound:or('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'),muted:or('<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>'),full:or('<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"/>'),exitFull:or('<path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5"/>')};function sc(i=document){let t=i.createElement("style");t.id="b3d-style",t.textContent=v_,i.head.prepend(t);let e=i.createElement("div");return e.id="b3d-shell",e.innerHTML=`
  <div id="screen">
    <canvas id="gl" width="256" height="256"></canvas>
    <canvas id="ui" width="256" height="256"></canvas>
  </div>
  <div class="b3d-sys">
    <button class="b3d-pause" title="Pause (Enter)" aria-label="Pause">${ar.pause}</button>
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
  </div>`,i.body.prepend(e),{canvas:i.getElementById("gl"),overlay:i.getElementById("ui")}}function rc(i,t=document){let e=t.getElementById("b3d-shell");if(!e)return;let n=t.defaultView,s=t.documentElement,r=P=>e.querySelector(P),o=()=>s.classList.add("b3d-touch"),a=n.matchMedia("(pointer: coarse)");a.matches&&o(),a.addEventListener&&a.addEventListener("change",()=>{a.matches&&o()}),n.addEventListener("pointerdown",P=>{(P.pointerType==="touch"||P.pointerType==="pen")&&o()},!0),n.focus(),n.addEventListener("pointerdown",()=>n.focus());let l=r(".b3d-dpad"),c=[".l",".r",".u",".d"].map(P=>l.querySelector(P)),h=new Map,d=0,f=()=>{let P=[!1,!1,!1,!1],C=l.getBoundingClientRect(),I=0,z=0;for(let[w,S]of h.values()){let L=(w-C.left)/C.width*2-1,W=(S-C.top)/C.height*2-1;if(d===1){let X=Math.hypot(L,W)/.9,K=X>1?1/X:1;I=L/.9*K,z=W/.9*K,I<-.5&&(P[0]=!0),I>.5&&(P[1]=!0),z<-.5&&(P[2]=!0),z>.5&&(P[3]=!0)}else if(d===2)Math.abs(L)>.06&&(P[L<0?0:1]=!0);else if(d===3)Math.abs(W)>.06&&(P[W<0?2:3]=!0);else{if(Math.hypot(L,W)<.2)continue;let X=Math.abs(L),K=Math.abs(W);X>K*.42&&(P[L<0?0:1]=!0),K>X*.42&&(P[W<0?2:3]=!0)}}P.forEach((w,S)=>{i.setButton(S,w),c[S].classList.toggle("on",w)}),i.setStick&&i.setStick(I,z),l.style.setProperty("--kx",I),l.style.setProperty("--ky",z),l.classList.toggle("on",d===1&&h.size>0)},g=P=>{P!==d&&(d=P,l.dataset.mode=String(P),f())};i.onTouchMode=g,l.addEventListener("pointerdown",P=>{P.preventDefault();try{l.setPointerCapture(P.pointerId)}catch{}h.set(P.pointerId,[P.clientX,P.clientY]),f()}),l.addEventListener("pointermove",P=>{h.has(P.pointerId)&&(h.set(P.pointerId,[P.clientX,P.clientY]),f())});for(let P of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(P,C=>{h.delete(C.pointerId)&&f()});[[".o",4],[".x",5]].forEach(([P,C])=>{let I=r(".b3d-ab "+P),z=w=>{i.setButton(C,w),I.classList.toggle("on",w)};I.addEventListener("pointerdown",w=>{w.preventDefault();try{I.setPointerCapture(w.pointerId)}catch{}z(!0)});for(let w of["pointerup","pointercancel","lostpointercapture"])I.addEventListener(w,()=>z(!1))}),e.addEventListener("contextmenu",P=>{P.target.closest("#screen")||P.preventDefault()});let _=(P,C)=>{let I=r(P),z=-1e9,w=()=>{let S=performance.now();S-z<500||(z=S,C(),I.blur())};return I.addEventListener("mousedown",S=>S.preventDefault()),I.addEventListener("pointerdown",S=>{S.pointerType!=="mouse"&&S.preventDefault()}),I.addEventListener("pointerup",S=>{S.pointerType!=="mouse"&&w()}),I.addEventListener("click",w),I};_(".b3d-pause",()=>{i.setButton(6,!0),i.setButton(6,!1)});let y=_(".b3d-mute",()=>{i.setMuted(!i.muted),m()}),m=()=>{y.innerHTML=i.muted?ar.muted:ar.sound,y.title=i.muted?"Unmute":"Mute",y.classList.toggle("on",i.muted)};m();let u=()=>t.fullscreenElement||t.webkitFullscreenElement,A=_(".b3d-full",()=>{try{let P=u()?(t.exitFullscreen||t.webkitExitFullscreen).call(t):(s.requestFullscreen||s.webkitRequestFullscreen).call(s);P&&P.catch&&P.catch(()=>{})}catch{}}),E=()=>{A.innerHTML=u()?ar.exitFull:ar.full,A.title=u()?"Exit fullscreen":"Fullscreen"},b=n.matchMedia("(display-mode: fullscreen)").matches||n.navigator.standalone===!0;A.hidden=b||!(t.fullscreenEnabled||t.webkitFullscreenEnabled),t.addEventListener("fullscreenchange",E),t.addEventListener("webkitfullscreenchange",E),E()}var hn=null,Ds=null,lr=null,Pu=null;function Lu(i,{canvas:t,overlay:e,onError:n=Ro,onLog:s=console.log,onRestart:r=Du,onSave:o,onCover:a,wire:l=!0}={}){return t||({canvas:t,overlay:e}=sc()),Ds=e,Pu=n,hn=Iu({canvas:t,overlay:e,cart:i,onError:n,onLog:s,onRestart:r,onSave:o,onCover:a}),Object.defineProperties(window,Object.getOwnPropertyDescriptors(hn.api)),window.addEventListener("keydown",c=>hn.key(c,!0)),window.addEventListener("keyup",c=>hn.key(c,!1)),window.addEventListener("pointerdown",()=>hn.unlockAudio()),l&&rc(hn),hn}function y_(i,t){let e=sc(),n=e.overlay.getContext("2d"),s=null,r=!1,o={setButton(f,g){s?s.setButton(f,g):g&&f!==6&&d()},setStick(f,g){s&&s.setStick(f,g)},onTouchMode:null,get muted(){if(s)return s.muted;try{return localStorage.getItem("blocky3d.mute")==="1"}catch{return!1}},setMuted(f){if(s)s.setMuted(f);else try{localStorage.setItem("blocky3d.mute",f?"1":"0")}catch{}}};rc(o);let a=f=>{n.imageSmoothingEnabled=!1,f?n.drawImage(f,0,0,256,256):(n.fillStyle="#1d2b53",n.fillRect(0,0,256,256),yu(n,i.name,"#fff1e8","#000000",56,88)),n.fillStyle="rgba(0, 0, 0, 0.6)",n.beginPath(),n.arc(128,128,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff1e8",n.beginPath(),n.moveTo(120,115),n.lineTo(120,141),n.lineTo(141,128),n.closePath(),n.fill()};if(typeof i.cover=="string"&&i.cover.startsWith("data:image/")){let f=new Image;f.onload=()=>{r||a(f)},f.onerror=()=>{r||a(null)},f.src=i.cover}else a(null);e.overlay.style.cursor="pointer";let l=f=>{f.ctrlKey||f.metaKey||f.altKey||/^(Tab|Escape|Shift|Control|Alt|Meta|F\d+)$/.test(f.key)||(f.preventDefault(),d())},c=()=>d();e.overlay.addEventListener("click",c),window.addEventListener("keydown",l);let h=()=>{if(r)return;let f=navigator.getGamepads?navigator.getGamepads():[];for(let g of f)if(g&&[0,1,2,3,9].some(_=>g.buttons[_]&&g.buttons[_].pressed))return d();requestAnimationFrame(h)};requestAnimationFrame(h);function d(){if(!r){r=!0,e.overlay.removeEventListener("click",c),window.removeEventListener("keydown",l),e.overlay.style.cursor="",n.clearRect(0,0,256,256);try{s=Lu(i,{...e,wire:!1})}catch(f){Ro(f);return}s.onTouchMode=o.onTouchMode,s.unlockAudio(),ac(t)}}}var oc='({ _init: typeof _init === "function" ? _init : null, _update: typeof _update === "function" ? _update : null, _draw: typeof _draw === "function" ? _draw : null })';function M_(i){return"(function () {"+String(i||"")+`
;return `+oc+`;
})`}function ac(i){lr=typeof i=="function"?i:null;let t;try{t=lr?lr():i||(0,eval)(oc)}catch(e){return Pu(e),!1}return hn.start(t)}function Du(){if(!lr){location.reload();return}hn.reset(),ac(lr)}function S_(){hn&&hn.stop()}function Ro(i){if(console.error(i),hn&&hn.stop(),!Ds)return;Ds.width!==256&&(Ds.width=Ds.height=256);let t=Ds.getContext("2d"),e=("Error: "+String(i&&i.message||i)).split(/\s+/),n=[""];for(let s of e){let r=n[n.length-1];r&&Ps(r+" "+s)>248?n.push(s):n[n.length-1]=r?r+" "+s:s}_i(t,n.join(`
`),4,4,"#ff004d","#000000")}function b_(){window.addEventListener("error",i=>Ro(i.error||i.message))}var Uu="0.1.0-alpha";window.Blocko3D={...lc,VERSION:Uu};window.Blocky3D=window.Blocko3D;})();
