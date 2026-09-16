(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="170",Dh=0,tc=1,Ih=2,Sl=1,bl=2,Cn=3,jn=0,Ie=1,Je=2,qn=0,Oi=1,ec=2,nc=3,ic=4,Uh=5,ui=100,Nh=101,Fh=102,Oh=103,Bh=104,zh=200,kh=201,Hh=202,Gh=203,So=204,bo=205,Vh=206,Wh=207,Xh=208,qh=209,Yh=210,jh=211,$h=212,Kh=213,Jh=214,Eo=0,wo=1,To=2,Hi=3,Ao=4,Co=5,Ro=6,Po=7,El=0,Zh=1,Qh=2,Yn=0,tu=1,eu=2,nu=3,wl=4,iu=5,su=6,ru=7,Tl=300,Gi=301,Vi=302,Lo=303,Do=304,wr=306,_r=1e3,fi=1001,Io=1002,Ue=1003,ou=1004,Us=1005,xn=1006,Or=1007,pi=1008,Dn=1009,Al=1010,Cl=1011,Ms=1012,ma=1013,mi=1014,Rn=1015,bs=1016,ga=1017,_a=1018,Wi=1020,Rl=35902,Pl=1021,Ll=1022,un=1023,Dl=1024,Il=1025,Bi=1026,Xi=1027,va=1028,xa=1029,Ul=1030,ya=1031,Ma=1033,hr=33776,ur=33777,dr=33778,fr=33779,Uo=35840,No=35841,Fo=35842,Oo=35843,Bo=36196,zo=37492,ko=37496,Ho=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,qo=37813,Yo=37814,jo=37815,$o=37816,Ko=37817,Jo=37818,Zo=37819,Qo=37820,ta=37821,pr=36492,ea=36494,na=36495,Nl=36283,ia=36284,sa=36285,ra=36286,au=3200,cu=3201,Fl=0,lu=1,Xn="",Be="srgb",Yi="srgb-linear",Tr="linear",ie="srgb",Si=7680,sc=519,hu=512,uu=513,du=514,Ol=515,fu=516,pu=517,mu=518,gu=519,rc=35044,oc="300 es",Pn=2e3,vr=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,oa=180/Math.PI;function Es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function _u(i,t){return(i%t+t)%t}function Br(i,t,e){return(1-e)*i+e*t}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,o,a,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],x=s[4],v=s[7],P=s[2],C=s[5],w=s[8];return r[0]=o*_+a*y+c*P,r[3]=o*m+a*x+c*C,r[6]=o*f+a*v+c*w,r[1]=l*_+h*y+u*P,r[4]=l*m+h*x+u*C,r[7]=l*f+h*v+u*w,r[2]=d*_+p*y+g*P,r[5]=d*m+p*x+g*C,r[8]=d*f+p*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zr.makeScale(t,e)),this}rotate(t){return this.premultiply(zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new Nt;function Bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=xr("canvas");return i.style.display="block",i}const ac={};function ds(i){i in ac||(ac[i]=!0,console.warn(i))}function xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function yu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?Tr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const cc=[.64,.33,.3,.6,.15,.06],lc=[.2126,.7152,.0722],hc=[.3127,.329],uc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Yi]:{primaries:cc,whitePoint:hc,transfer:Tr,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:lc,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:cc,whitePoint:hc,transfer:ie,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:lc,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let bi;class Su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=xr("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bu=0;class zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kr(s[o].image)):r.push(kr(s[o]))}else r=kr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Su.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;class Le extends ji{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=fi,s=fi,r=xn,o=pi,a=un,c=Dn,l=Le.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Es(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Tl;Le.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(p+1)/2,P=(f+1)/2,C=(h+d)/4,w=(u+_)/4,R=(g+m)/4;return x>v&&x>P?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=w/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=C/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=R/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends wu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kl extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const P=Math.sqrt(x),C=Math.atan2(P,f*y);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const v=a*y;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hr.copy(this).projectOnVector(t),this.sub(Hr)}reflect(t){return this.sub(Hr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new A,fc=new ws;class Ts{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Fs.subVectors(this.max,ss),Ei.subVectors(t.a,ss),wi.subVectors(t.b,ss),Ti.subVectors(t.c,ss),Bn.subVectors(wi,Ei),zn.subVectors(Ti,wi),ei.subVectors(Ei,Ti);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-ei.y,ei.x,0];return!Gr(e,Ei,wi,Ti,Fs)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,Ei,wi,Ti,Fs))?!1:(Os.crossVectors(Bn,zn),e=[Os.x,Os.y,Os.z],Gr(e,Ei,wi,Ti,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bn=[new A,new A,new A,new A,new A,new A,new A,new A],an=new A,Ns=new Ts,Ei=new A,wi=new A,Ti=new A,Bn=new A,zn=new A,ei=new A,ss=new A,Fs=new A,Os=new A,ni=new A;function Gr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);const a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Au=new Ts,rs=new A,Vr=new A;class As{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(Vr)),this.expandByPoint(rs.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new A,Wr=new A,Bs=new A,kn=new A,Xr=new A,zs=new A,qr=new A;class Ar{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wr.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Wr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),a=kn.dot(this.direction),c=-kn.dot(Bs),l=kn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wr).addScaledVector(Bs,d),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){Xr.subVectors(e,t),zs.subVectors(n,t),qr.crossVectors(Xr,zs);let o=this.direction.dot(qr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const c=a*this.direction.dot(zs.crossVectors(kn,zs));if(c<0)return null;const l=a*this.direction.dot(Xr.cross(kn));if(l<0||c+l>o)return null;const h=-a*kn.dot(qr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cu,t,Ru)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Hn.crossVectors(n,ke),Hn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Hn.crossVectors(n,ke)),Hn.normalize(),ks.crossVectors(ke,Hn),s[0]=Hn.x,s[4]=ks.x,s[8]=ke.x,s[1]=Hn.y,s[5]=ks.y,s[9]=ke.y,s[2]=Hn.z,s[6]=ks.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],v=n[11],P=n[15],C=s[0],w=s[4],R=s[8],b=s[12],M=s[1],L=s[5],O=s[9],z=s[13],q=s[2],j=s[6],I=s[10],X=s[14],G=s[3],Q=s[7],rt=s[11],_t=s[15];return r[0]=o*C+a*M+c*q+l*G,r[4]=o*w+a*L+c*j+l*Q,r[8]=o*R+a*O+c*I+l*rt,r[12]=o*b+a*z+c*X+l*_t,r[1]=h*C+u*M+d*q+p*G,r[5]=h*w+u*L+d*j+p*Q,r[9]=h*R+u*O+d*I+p*rt,r[13]=h*b+u*z+d*X+p*_t,r[2]=g*C+_*M+m*q+f*G,r[6]=g*w+_*L+m*j+f*Q,r[10]=g*R+_*O+m*I+f*rt,r[14]=g*b+_*z+m*X+f*_t,r[3]=y*C+x*M+v*q+P*G,r[7]=y*w+x*L+v*j+P*Q,r[11]=y*R+x*O+v*I+P*rt,r[15]=y*b+x*z+v*X+P*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+_*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*l-_*d*l+_*c*p-a*m*p-u*c*f+a*d*f,x=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*f+o*u*f,P=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,C=e*y+n*x+s*v+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=y*w,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*w,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*w,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*w,t[4]=x*w,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*w,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*w,t[8]=v*w,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*w,t[12]=P*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=c*l,x=c*h,v=c*u,P=n.x,C=n.y,w=n.z;return s[0]=(1-(_+f))*P,s[1]=(p+v)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(p-v)*C,s[5]=(1-(d+f))*C,s[6]=(m+y)*C,s[7]=0,s[8]=(g+x)*w,s[9]=(m-y)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const l=1/r,h=1/o,u=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===Pn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h;let g,_;if(a===Pn)g=(o+r)*u,_=-2*u;else if(a===vr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new A,cn=new re,Cu=new A(0,0,0),Ru=new A(1,1,1),Hn=new A,ks=new A,ke=new A,pc=new re,mc=new ws;class In{constructor(t=0,e=0,n=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mc.setFromEuler(this),this.setFromQuaternion(mc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Sa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pu=0;const gc=new A,Ci=new ws,wn=new re,Hs=new A,os=new A,Lu=new A,Du=new ws,_c=new A(1,0,0),vc=new A(0,1,0),xc=new A(0,0,1),yc={type:"added"},Iu={type:"removed"},Ri={type:"childadded",child:null},Yr={type:"childremoved",child:null};class ye extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new A,e=new In,n=new ws,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Nt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(xc,t)}translateOnAxis(t,e){return gc.copy(t).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(os,Hs,this.up):wn.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(wn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,Lu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Du,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new A(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new A,Tn=new A,jr=new A,An=new A,Pi=new A,Li=new A,Mc=new A,$r=new A,Kr=new A,Jr=new A,Zr=new se,Qr=new se,to=new se;class Ze{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Tn.subVectors(n,e),jr.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Tn),c=ln.dot(jr),l=Tn.dot(Tn),h=Tn.dot(jr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(o,An.y),c.addScaledVector(a,An.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zr.setScalar(0),Qr.setScalar(0),to.setScalar(0),Zr.fromBufferAttribute(t,e),Qr.fromBufferAttribute(t,n),to.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zr,r.x),o.addScaledVector(Qr,r.y),o.addScaledVector(to,r.z),o}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Tn.subVectors(t,e),ln.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Pi.subVectors(s,n),Li.subVectors(r,n),$r.subVectors(t,n);const c=Pi.dot($r),l=Li.dot($r);if(c<=0&&l<=0)return e.copy(n);Kr.subVectors(t,s);const h=Pi.dot(Kr),u=Li.dot(Kr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Pi,o);Jr.subVectors(t,r);const p=Pi.dot(Jr),g=Li.dot(Jr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Li,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Mc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Mc,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function eo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=_u(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=eo(o,r,t+1/3),this.g=eo(o,r,t),this.b=eo(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Pe(Ce.r*255,0,255))*65536+Math.round(Pe(Ce.g*255,0,255))*256+Math.round(Pe(Ce.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Be){jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Gs);const n=Br(Gn.h,Gs.h,e),s=Br(Gn.s,Gs.s,e),r=Br(Gn.l,Gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new zt;zt.NAMES=Hl;let Uu=0;class vi extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Es(),this.name="",this.blending=Oi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=bo,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xe extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new A,Vs=new Et;class qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}}class Gl extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vl extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nu=0;const $e=new re,no=new ye,Di=new A,He=new Ts,as=new Ts,be=new A;class xe extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bl(t)?Vl:Gl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return no.lookAt(t),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(He.min,as.min),He.expandByPoint(be),be.addVectors(He.max,as.max),He.expandByPoint(be)):(He.expandByPoint(as.min),He.expandByPoint(as.max))}He.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(t,l),be.add(Di)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new A,c[R]=new A;const l=new A,h=new A,u=new A,d=new Et,p=new Et,g=new Et,_=new A,m=new A;function f(R,b,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[R].add(_),a[b].add(_),a[M].add(_),c[R].add(m),c[b].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,b=y.length;R<b;++R){const M=y[R],L=M.start,O=M.count;for(let z=L,q=L+O;z<q;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new A,v=new A,P=new A,C=new A;function w(R){P.fromBufferAttribute(s,R),C.copy(P);const b=a[R];x.copy(b),x.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(C,b);const L=v.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,L)}for(let R=0,b=y.length;R<b;++R){const M=y[R],L=M.start,O=M.count;for(let z=L,q=L+O;z<q;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sc=new re,ii=new Ar,Ws=new As,bc=new A,Xs=new A,qs=new A,Ys=new A,io=new A,js=new A,Ec=new A,$s=new A;class Jt extends ye{constructor(t=new xe,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(io.fromBufferAttribute(u,t),o?js.addScaledVector(io,h):js.addScaledVector(io.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(Ws.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ws,bc)===null||ii.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(Sc.copy(r).invert(),ii.copy(t.ray).applyMatrix4(Sc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,P=x;v<P;v+=3){const C=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);s=Ks(this,f,t,n,l,h,u,C,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Ks(this,o,t,n,l,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,P=x;v<P;v+=3){const C=v,w=v+1,R=v+2;s=Ks(this,f,t,n,l,h,u,C,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,x=m+1,v=m+2;s=Ks(this,o,t,n,l,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fu(i,t,e,n,s,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===jn,a),c===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo($s);return l<e.near||l>e.far?null:{distance:l,point:$s.clone(),object:i}}function Ks(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Xs),i.getVertexPosition(c,qs),i.getVertexPosition(l,Ys);const h=Fu(i,t,e,n,Xs,qs,Ys,Ec);if(h){const u=new A;Ze.getBarycoord(Ec,Xs,qs,Ys,u),s&&(h.uv=Ze.getInterpolatedAttribute(s,a,c,l,u,new Et)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};Ze.getNormal(Xs,qs,Ys,d.normal),h.face=d,h.barycoord=u}return h}class we extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function g(_,m,f,y,x,v,P,C,w,R,b){const M=v/w,L=P/R,O=v/2,z=P/2,q=C/2,j=w+1,I=R+1;let X=0,G=0;const Q=new A;for(let rt=0;rt<I;rt++){const _t=rt*L-z;for(let Lt=0;Lt<j;Lt++){const Qt=Lt*M-O;Q[_]=Qt*y,Q[m]=_t*x,Q[f]=q,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=C>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Lt/w),u.push(1-rt/R),X+=1}}for(let rt=0;rt<R;rt++)for(let _t=0;_t<w;_t++){const Lt=d+_t+j*rt,Qt=d+_t+j*(rt+1),W=d+(_t+1)+j*(rt+1),tt=d+(_t+1)+j*rt;c.push(Lt,Qt,tt),c.push(Qt,W,tt),G+=6}a.addGroup(p,G,b),p+=G,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ou(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Bu={clone:qi,merge:De};var zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xl extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new A,wc=new Et,Tc=new Et;class Ve extends Xl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,wc,Tc),e.subVectors(Tc,wc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Ui=1;class Hu extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Ii,Ui,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Ii,Ui,t,e);r.layers=this.layers,this.add(r);const o=new Ve(Ii,Ui,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Ii,Ui,t,e);a.layers=this.layers,this.add(a);const c=new Ve(Ii,Ui,t,e);c.layers=this.layers,this.add(c);const l=new Ve(Ii,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ql extends Le{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Gi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gu extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ql(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:qn});r.uniforms.tEquirect.value=e;const o=new Jt(s,r),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=xn),new Hu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const so=new A,Vu=new A,Wu=new Nt;class li{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=so.subVectors(n,e).cross(Vu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(so),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Wu.getNormalMatrix(t),s=this.coplanarPoint(so).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new As,Js=new A;class ba{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],y=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-p,v-f).normalize(),n[1].setComponents(c+r,d+l,m+p,v+f).normalize(),n[2].setComponents(c+o,d+h,m+g,v+y).normalize(),n[3].setComponents(c-o,d-h,m-g,v-y).normalize(),n[4].setComponents(c-a,d-u,m-_,v-x).normalize(),e===Pn)n[5].setComponents(c+a,d+u,m+_,v+x).normalize();else if(e===vr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class _i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const x=y+l*f,v=y+l*(f+1),P=y+1+l*(f+1),C=y+1+l*f;p.push(x,v,C),p.push(v,P,C)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.widthSegments,t.heightSegments)}}var qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yu=`#ifdef USE_ALPHAHASH
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
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ku=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
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
#endif`,Qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
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
#endif`,ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,id=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rd=`#ifdef USE_IRIDESCENCE
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
#endif`,od=`#ifdef USE_BUMPMAP
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,md=`#define PI 3.141592653589793
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
} // validated`,gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_d=`vec3 transformedNormal = objectNormal;
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
#endif`,vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
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
#endif`,wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Id=`#ifdef USE_GRADIENTMAP
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
}`,Ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Od=`uniform bool receiveShadow;
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
#endif`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
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
#endif`,Wd=`struct PhysicalMaterial {
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
}`,Xd=`
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
#endif`,qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ef=`#if defined( USE_POINTS_UV )
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
#endif`,nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,of=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mf=`#ifdef USE_NORMALMAP
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
#endif`,gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lf=`float getShadowMask() {
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
}`,Df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nf=`#ifdef USE_SKINNING
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
#endif`,Ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#ifdef USE_TRANSMISSION
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yf=`uniform sampler2D t2D;
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
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
}`,Qf=`#if DEPTH_PACKING == 3200
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
}`,tp=`#define DISTANCE
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
}`,ep=`#define DISTANCE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`uniform float scale;
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
}`,rp=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,ap=`uniform vec3 diffuse;
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
}`,cp=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,hp=`#define MATCAP
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
}`,up=`#define MATCAP
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
}`,dp=`#define NORMAL
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
}`,fp=`#define NORMAL
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
}`,pp=`#define PHONG
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
}`,mp=`#define PHONG
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
}`,gp=`#define STANDARD
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
}`,_p=`#define STANDARD
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
}`,vp=`#define TOON
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
}`,xp=`#define TOON
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
}`,yp=`uniform float size;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#include <common>
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
}`,bp=`uniform vec3 color;
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
}`,Ep=`uniform float rotation;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:qu,alphahash_pars_fragment:Yu,alphamap_fragment:ju,alphamap_pars_fragment:$u,alphatest_fragment:Ku,alphatest_pars_fragment:Ju,aomap_fragment:Zu,aomap_pars_fragment:Qu,batching_pars_vertex:td,batching_vertex:ed,begin_vertex:nd,beginnormal_vertex:id,bsdfs:sd,iridescence_fragment:rd,bumpmap_pars_fragment:od,clipping_planes_fragment:ad,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:ld,clipping_planes_vertex:hd,color_fragment:ud,color_pars_fragment:dd,color_pars_vertex:fd,color_vertex:pd,common:md,cube_uv_reflection_fragment:gd,defaultnormal_vertex:_d,displacementmap_pars_vertex:vd,displacementmap_vertex:xd,emissivemap_fragment:yd,emissivemap_pars_fragment:Md,colorspace_fragment:Sd,colorspace_pars_fragment:bd,envmap_fragment:Ed,envmap_common_pars_fragment:wd,envmap_pars_fragment:Td,envmap_pars_vertex:Ad,envmap_physical_pars_fragment:Bd,envmap_vertex:Cd,fog_vertex:Rd,fog_pars_vertex:Pd,fog_fragment:Ld,fog_pars_fragment:Dd,gradientmap_pars_fragment:Id,lightmap_pars_fragment:Ud,lights_lambert_fragment:Nd,lights_lambert_pars_fragment:Fd,lights_pars_begin:Od,lights_toon_fragment:zd,lights_toon_pars_fragment:kd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Wd,lights_fragment_begin:Xd,lights_fragment_maps:qd,lights_fragment_end:Yd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:$d,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Jd,map_fragment:Zd,map_pars_fragment:Qd,map_particle_fragment:tf,map_particle_pars_fragment:ef,metalnessmap_fragment:nf,metalnessmap_pars_fragment:sf,morphinstance_vertex:rf,morphcolor_vertex:of,morphnormal_vertex:af,morphtarget_pars_vertex:cf,morphtarget_vertex:lf,normal_fragment_begin:hf,normal_fragment_maps:uf,normal_pars_fragment:df,normal_pars_vertex:ff,normal_vertex:pf,normalmap_pars_fragment:mf,clearcoat_normal_fragment_begin:gf,clearcoat_normal_fragment_maps:_f,clearcoat_pars_fragment:vf,iridescence_pars_fragment:xf,opaque_fragment:yf,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:bf,dithering_fragment:Ef,dithering_pars_fragment:wf,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:Cf,shadowmap_pars_vertex:Rf,shadowmap_vertex:Pf,shadowmask_pars_fragment:Lf,skinbase_vertex:Df,skinning_pars_vertex:If,skinning_vertex:Uf,skinnormal_vertex:Nf,specularmap_fragment:Ff,specularmap_pars_fragment:Of,tonemapping_fragment:Bf,tonemapping_pars_fragment:zf,transmission_fragment:kf,transmission_pars_fragment:Hf,uv_pars_fragment:Gf,uv_pars_vertex:Vf,uv_vertex:Wf,worldpos_vertex:Xf,background_vert:qf,background_frag:Yf,backgroundCube_vert:jf,backgroundCube_frag:$f,cube_vert:Kf,cube_frag:Jf,depth_vert:Zf,depth_frag:Qf,distanceRGBA_vert:tp,distanceRGBA_frag:ep,equirect_vert:np,equirect_frag:ip,linedashed_vert:sp,linedashed_frag:rp,meshbasic_vert:op,meshbasic_frag:ap,meshlambert_vert:cp,meshlambert_frag:lp,meshmatcap_vert:hp,meshmatcap_frag:up,meshnormal_vert:dp,meshnormal_frag:fp,meshphong_vert:pp,meshphong_frag:mp,meshphysical_vert:gp,meshphysical_frag:_p,meshtoon_vert:vp,meshtoon_frag:xp,points_vert:yp,points_frag:Mp,shadow_vert:Sp,shadow_frag:bp,sprite_vert:Ep,sprite_frag:wp},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},mn={basic:{uniforms:De([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:De([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:De([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:De([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:De([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:De([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:De([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:De([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:De([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:De([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:De([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:De([it.common,it.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:De([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};mn.physical={uniforms:De([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Zs={r:0,b:0,g:0},ri=new In,Tp=new re;function Ap(i,t,e,n,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?f(a,c):v&&v.isColor&&(f(v,1),x=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===wr)?(h===void 0&&(h=new Jt(new we(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:qi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(x.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(ri)),h.material.toneMapped=jt.getTransfer(v.colorSpace)!==ie,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Jt(new _i(2,2),new Un({name:"BackgroundMaterial",uniforms:qi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,x){y.getRGB(Zs,Wl(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:_,addToRenderList:m}}function Cp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,L,O,z,q){let j=!1;const I=u(z,O,L);r!==I&&(r=I,l(r.object)),j=p(M,z,O,q),j&&g(M,z,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(M,L,O,z),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,O){const z=O.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let j=q[L.id];j===void 0&&(j={},q[L.id]=j);let I=j[z];return I===void 0&&(I=d(c()),j[z]=I),I}function d(M){const L=[],O=[],z=[];for(let q=0;q<e;q++)L[q]=0,O[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,L,O,z){const q=r.attributes,j=L.attributes;let I=0;const X=O.getAttributes();for(const G in X)if(X[G].location>=0){const rt=q[G];let _t=j[G];if(_t===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),rt===void 0||rt.attribute!==_t||_t&&rt.data!==_t.data)return!0;I++}return r.attributesNum!==I||r.index!==z}function g(M,L,O,z){const q={},j=L.attributes;let I=0;const X=O.getAttributes();for(const G in X)if(X[G].location>=0){let rt=j[G];rt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor));const _t={};_t.attribute=rt,rt&&rt.data&&(_t.data=rt.data),q[G]=_t,I++}r.attributes=q,r.attributesNum=I,r.index=z}function _(){const M=r.newAttributes;for(let L=0,O=M.length;L<O;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const O=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;O[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),q[M]!==L&&(i.vertexAttribDivisor(M,L),q[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let O=0,z=L.length;O<z;O++)L[O]!==M[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function x(M,L,O,z,q,j,I){I===!0?i.vertexAttribIPointer(M,L,O,q,j):i.vertexAttribPointer(M,L,O,z,q,j)}function v(M,L,O,z){_();const q=z.attributes,j=O.getAttributes(),I=L.defaultAttributeValues;for(const X in j){const G=j[X];if(G.location>=0){let Q=q[X];if(Q===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const rt=Q.normalized,_t=Q.itemSize,Lt=t.get(Q);if(Lt===void 0)continue;const Qt=Lt.buffer,W=Lt.type,tt=Lt.bytesPerElement,gt=W===i.INT||W===i.UNSIGNED_INT||Q.gpuType===ma;if(Q.isInterleavedBufferAttribute){const ot=Q.data,Ct=ot.stride,Dt=Q.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)f(G.location+kt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<G.locationSize;kt++)m(G.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let kt=0;kt<G.locationSize;kt++)x(G.location+kt,_t/G.locationSize,W,rt,Ct*tt,(Dt+_t/G.locationSize*kt)*tt,gt)}else{if(Q.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)f(G.location+ot,Q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ot=0;ot<G.locationSize;ot++)m(G.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let ot=0;ot<G.locationSize;ot++)x(G.location+ot,_t/G.locationSize,W,rt,_t*tt,_t/G.locationSize*ot*tt,gt)}}else if(I!==void 0){const rt=I[X];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(G.location,rt);break;case 3:i.vertexAttrib3fv(G.location,rt);break;case 4:i.vertexAttrib4fv(G.location,rt);break;default:i.vertexAttrib1fv(G.location,rt)}}}}y()}function P(){R();for(const M in n){const L=n[M];for(const O in L){const z=L[O];for(const q in z)h(z[q].object),delete z[q];delete L[O]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const O in L){const z=L[O];for(const q in z)h(z[q].object),delete z[q];delete L[O]}delete n[M.id]}function w(M){for(const L in n){const O=n[L];if(O[M.id]===void 0)continue;const z=O[M.id];for(const q in z)h(z[q].object),delete z[q];delete O[M.id]}}function R(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Rp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Pp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Rn&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:C}}function Lp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new li,a=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let v=f.clippingState||null;c.value=v,v=h(g,d,x,p);for(let P=0;P!==x;++P)v[P]=e[P];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Dp(i){let t=new WeakMap;function e(o,a){return a===Lo?o.mapping=Gi:a===Do&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lo||a===Do)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gu(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class jl extends Xl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fi=4,Ac=[.125,.215,.35,.446,.526,.582],di=20,ro=new jl,Cc=new zt;let oo=null,ao=0,co=0,lo=!1;const hi=(1+Math.sqrt(5))/2,Ni=1/hi,Rc=[new A(-hi,Ni,0),new A(hi,Ni,0),new A(-Ni,0,hi),new A(Ni,0,hi),new A(0,hi,-Ni),new A(0,hi,Ni),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,ao,co),this._renderer.xr.enabled=lo,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:bs,format:un,colorSpace:Yi,depthBuffer:!1},s=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ip(r)),this._blurMaterial=Up(r,t,e)}return s}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Cc),h.toneMapping=Yn,h.autoClear=!1;const p=new Xe({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new Jt(new we,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Cc),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):y===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;Qs(s,y*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Gi||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ro)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rc[(s-r-1)%Rc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const f=[];let y=0;for(let w=0;w<di;++w){const R=w/_,b=Math.exp(-R*R/2);f.push(b),w===0?y+=b:w<m&&(y+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],P=3*v*(s>x-Fi?s-x+Fi:0),C=4*(this._cubeSize-v);Qs(e,P,C,3*v,2*v),c.setRenderTarget(e),c.render(u,ro)}}function Ip(i){const t=[],e=[],n=[];let s=i;const r=i-Fi+1+Ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Fi?c=Ac[o-i+Fi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,R=C>2?0:-1,b=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(b,_*g*C),x.set(d,m*g*C);const M=[C,C,C,C,C,C];v.set(M,f*g*C)}const P=new xe;P.setAttribute("position",new qe(y,_)),P.setAttribute("uv",new qe(x,m)),P.setAttribute("faceIndex",new qe(v,f)),t.push(P),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(i,t,e){const n=new gi(i,t,e);return n.texture.mapping=wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Up(i,t,e){const n=new Float32Array(di),s=new A(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Dc(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ic(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ea(){return`

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
	`}function Np(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Lo||c===Do,h=c===Gi||c===Vi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Pc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Op(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,v=y.length;x<v;x+=3){const P=y[x+0],C=y[x+1],w=y[x+2];d.push(P,C,C,w,w,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const P=x+0,C=x+1,w=x+2;d.push(P,C,C,w,w,P)}}else return;const m=new(Bl(d)?Vl:Gl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Bp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kp(i,t,e){const n=new WeakMap,s=new se;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*C*4*u),R=new kl(w,P,C,u);R.type=Rn,R.needsUpdate=!0;const b=v*4;for(let L=0;L<u;L++){const O=f[L],z=y[L],q=x[L],j=P*C*4*L;for(let I=0;I<O.count;I++){const X=I*b;g===!0&&(s.fromBufferAttribute(O,I),w[j+X+0]=s.x,w[j+X+1]=s.y,w[j+X+2]=s.z,w[j+X+3]=0),_===!0&&(s.fromBufferAttribute(z,I),w[j+X+4]=s.x,w[j+X+5]=s.y,w[j+X+6]=s.z,w[j+X+7]=0),m===!0&&(s.fromBufferAttribute(q,I),w[j+X+8]=s.x,w[j+X+9]=s.y,w[j+X+10]=s.z,w[j+X+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Et(P,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class $l extends Le{constructor(t,e,n,s,r,o,a,c,l,h=Bi){if(h!==Bi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=mi),n===void 0&&h===Xi&&(n=Wi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Kl=new Le,Uc=new $l(1,1),Jl=new kl,Zl=new Tu,Ql=new ql,Nc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function $i(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nc[s];if(r===void 0&&(r=new Float32Array(s),Nc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),Se(e,n)}}function Yp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),Se(e,n)}}function jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),Se(e,n)}}function $p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uc.compareFunction=Ol,r=Uc):r=Kl,e.setTexture2D(t||r,s)}function sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zl,s)}function rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ql,s)}function om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jl,s)}function am(i){switch(i){case 5126:return Gp;case 35664:return Vp;case 35665:return Wp;case 35666:return Xp;case 35674:return qp;case 35675:return Yp;case 35676:return jp;case 5124:case 35670:return $p;case 35667:case 35671:return Kp;case 35668:case 35672:return Jp;case 35669:case 35673:return Zp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}function cm(i,t){i.uniform1fv(this.addr,t)}function lm(i,t){const e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function hm(i,t){const e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function um(i,t){const e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function dm(i,t){const e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fm(i,t){const e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pm(i,t){const e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mm(i,t){i.uniform1iv(this.addr,t)}function gm(i,t){i.uniform2iv(this.addr,t)}function _m(i,t){i.uniform3iv(this.addr,t)}function vm(i,t){i.uniform4iv(this.addr,t)}function xm(i,t){i.uniform1uiv(this.addr,t)}function ym(i,t){i.uniform2uiv(this.addr,t)}function Mm(i,t){i.uniform3uiv(this.addr,t)}function Sm(i,t){i.uniform4uiv(this.addr,t)}function bm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Kl,r[o])}function Em(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zl,r[o])}function wm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ql,r[o])}function Tm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jl,r[o])}function Am(i){switch(i){case 5126:return cm;case 35664:return lm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return ym;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Tm}}class Cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=am(e.type)}}class Rm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Am(e.type)}}class Pm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function kc(i,t){i.seq.push(t),i.map[t.id]=t}function Lm(i,t,e){const n=i.name,s=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){kc(e,l===void 0?new Cm(a,i,t):new Rm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Pm(a),kc(e,u)),e=u}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Lm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dm=37297;let Im=0;function Um(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gc=new Nt;function Nm(i){jt._getMatrix(Gc,jt.workingColorSpace,i);const t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Tr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Um(i.getShaderSource(t),o)}else return s}function Fm(i,t){const e=Nm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Om(i,t){let e;switch(t){case tu:e="Linear";break;case eu:e="Reinhard";break;case nu:e="Cineon";break;case wl:e="ACESFilmic";break;case su:e="AgX";break;case ru:e="Neutral";break;case iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new A;function Bm(){jt.getLuminanceCoefficients(tr);const i=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function km(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function fs(i){return i!==""}function Wc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(Gm,Wm)}const Vm=new Map;function Wm(i,t){let e=Ot[t];if(e===void 0){const n=Vm.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return aa(e)}const Xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(Xm,qm)}function qm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ym(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function jm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Vi:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $m(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case El:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case Qh:t="ENVMAP_BLENDING_ADD";break}return t}function Jm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ym(e),l=jm(e),h=$m(e),u=Km(e),d=Jm(e),p=zm(e),g=km(r),_=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),f.length>0&&(f+=`
`)):(m=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),f=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Om("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Fm("linearToOutputTexel",e.outputColorSpace),Bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=aa(o),o=Wc(o,e),o=Xc(o,e),a=aa(a),a=Wc(a,e),a=Xc(a,e),o=qc(o),a=qc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+o,v=y+f+a,P=Hc(s,s.VERTEX_SHADER,x),C=Hc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(P).trim(),q=s.getShaderInfoLog(C).trim();let j=!0,I=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,C);else{const X=Vc(s,P,"vertex"),G=Vc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+X+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(z===""||q==="")&&(I=!1);I&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(P),s.deleteShader(C),R=new gr(s,_),b=Hm(s,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Dm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Im++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let Qm=0;class tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new eg(t),e.set(t,n)),n}}class eg{constructor(t){this.id=Qm++,this.code=t,this.usedTimes=0}}function ng(i,t,e,n,s,r,o){const a=new Sa,c=new tg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,O,z){const q=O.fog,j=z.geometry,I=b.isMeshStandardMaterial?O.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||I),G=X&&X.mapping===wr?X.image.height:null,Q=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=rt!==void 0?rt.length:0;let Lt=0;j.morphAttributes.position!==void 0&&(Lt=1),j.morphAttributes.normal!==void 0&&(Lt=2),j.morphAttributes.color!==void 0&&(Lt=3);let Qt,W,tt,gt;if(Q){const ne=mn[Q];Qt=ne.vertexShader,W=ne.fragmentShader}else Qt=b.vertexShader,W=b.fragmentShader,c.update(b),tt=c.getVertexShaderID(b),gt=c.getFragmentShaderID(b);const ot=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Dt=z.isInstancedMesh===!0,kt=z.isBatchedMesh===!0,fe=!!b.map,qt=!!b.matcap,_e=!!X,F=!!b.aoMap,Ye=!!b.lightMap,Gt=!!b.bumpMap,Vt=!!b.normalMap,Tt=!!b.displacementMap,le=!!b.emissiveMap,wt=!!b.metalnessMap,T=!!b.roughnessMap,S=b.anisotropy>0,B=b.clearcoat>0,$=b.dispersion>0,Z=b.iridescence>0,Y=b.sheen>0,Mt=b.transmission>0,at=S&&!!b.anisotropyMap,ut=B&&!!b.clearcoatMap,Yt=B&&!!b.clearcoatNormalMap,et=B&&!!b.clearcoatRoughnessMap,ft=Z&&!!b.iridescenceMap,At=Z&&!!b.iridescenceThicknessMap,Rt=Y&&!!b.sheenColorMap,pt=Y&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Ft=!!b.specularColorMap,oe=!!b.specularIntensityMap,D=Mt&&!!b.transmissionMap,st=Mt&&!!b.thicknessMap,V=!!b.gradientMap,K=!!b.alphaMap,ht=b.alphaTest>0,ct=!!b.alphaHash,It=!!b.extensions;let pe=Yn;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Te={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Qt,fragmentShader:W,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:kt,batchingColor:kt&&z._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&z.instanceColor!==null,instancingMorph:Dt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Yi,alphaToCoverage:!!b.alphaToCoverage,map:fe,matcap:qt,envMap:_e,envMapMode:_e&&X.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Ye,bumpMap:Gt,normalMap:Vt,displacementMap:d&&Tt,emissiveMap:le,normalMapObjectSpace:Vt&&b.normalMapType===lu,normalMapTangentSpace:Vt&&b.normalMapType===Fl,metalnessMap:wt,roughnessMap:T,anisotropy:S,anisotropyMap:at,clearcoat:B,clearcoatMap:ut,clearcoatNormalMap:Yt,clearcoatRoughnessMap:et,dispersion:$,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Wt,specularColorMap:Ft,specularIntensityMap:oe,transmission:Mt,transmissionMap:D,thicknessMap:st,gradientMap:V,opaque:b.transparent===!1&&b.blending===Oi&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:ct,combine:b.combine,mapUv:fe&&_(b.map.channel),aoMapUv:F&&_(b.aoMap.channel),lightMapUv:Ye&&_(b.lightMap.channel),bumpMapUv:Gt&&_(b.bumpMap.channel),normalMapUv:Vt&&_(b.normalMap.channel),displacementMapUv:Tt&&_(b.displacementMap.channel),emissiveMapUv:le&&_(b.emissiveMap.channel),metalnessMapUv:wt&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:ut&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(b.sheenRoughnessMap.channel),specularMapUv:Wt&&_(b.specularMap.channel),specularColorMapUv:Ft&&_(b.specularColorMap.channel),specularIntensityMapUv:oe&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:st&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Vt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(fe||K),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:fe&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===ie,decodeVideoTextureEmissive:le&&b.emissiveMap.isVideoTexture===!0&&jt.getTransfer(b.emissiveMap.colorSpace)===ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Je,flipSided:b.side===Ie,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=g[b.type];let L;if(M){const O=mn[M];L=Bu.clone(O.uniforms)}else L=b.uniforms;return L}function P(b,M){let L;for(let O=0,z=h.length;O<z;O++){const q=h[O];if(q.cacheKey===M){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Zm(i,M,b,r),h.push(L)),L}function C(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:P,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:R}}function ig(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $c(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||sg),n.length>1&&n.sort(d||jc),s.length>1&&s.sort(d||jc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function rg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new $c,i.set(n,[o])):s>=r.length?(o=new $c,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function og(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new zt};break;case"SpotLight":e={position:new A,direction:new A,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cg=0;function lg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hg(i){const t=new og,e=ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new re,o=new re;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,x=0,v=0,P=0,C=0,w=0;l.sort(lg);for(let b=0,M=l.length;b<M;b++){const L=l[b],O=L.color,z=L.intensity,q=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(L.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(L.sh.coefficients[I],z);w++}else if(L.isDirectionalLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,G=e.get(L);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,y++}n.directional[p]=I,p++}else if(L.isSpotLight){const I=t.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(O).multiplyScalar(z),I.distance=q,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,n.spot[_]=I;const X=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,X.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[_]=X.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=j,v++}_++}else if(L.isRectAreaLight){const I=t.get(L);I.color.copy(O).multiplyScalar(z),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=I,m++}else if(L.isPointLight){const I=t.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),I.distance=L.distance,I.decay=L.decay,L.castShadow){const X=L.shadow,G=e.get(L);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=I,g++}else if(L.isHemisphereLight){const I=t.get(L);I.skyColor.copy(L.color).multiplyScalar(z),I.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[f]=I,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=w,n.version=cg++)}function c(l,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const x=l[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Kc(i){const t=new hg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ug(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Kc(i),t.set(s,[a])):r>=o.length?(a=new Kc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class dg extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fg extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`;function gg(i,t,e){let n=new ba;const s=new Et,r=new Et,o=new se,a=new dg({depthPacking:cu}),c=new fg,l={},h=e.maxTextureSize,u={[jn]:Ie,[Ie]:jn,[Je]:Je},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let f=this.type;this.render=function(C,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=f!==Cn&&this.type===Cn,q=f===Cn&&this.type!==Cn;for(let j=0,I=C.length;j<I;j++){const X=C[j],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();if(s.multiply(Q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||z===!0||q===!0){const _t=this.type!==Cn?{minFilter:Ue,magFilter:Ue}:{};G.map!==null&&G.map.dispose(),G.map=new gi(s.x,s.y,_t),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const rt=G.getViewportCount();for(let _t=0;_t<rt;_t++){const Lt=G.getViewport(_t);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(o),G.updateMatrices(X,_t),n=G.getFrustum(),v(w,R,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Cn&&y(G,R),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,L)};function y(C,w){const R=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(w,null,R,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(w,null,R,p,_,null)}function x(C,w,R,b){let M=null;const L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=M.uuid,z=w.uuid;let q=l[O];q===void 0&&(q={},l[O]=q);let j=q[z];j===void 0&&(j=M.clone(),q[z]=j,w.addEventListener("dispose",P)),M=j}if(M.visible=w.visible,M.wireframe=w.wireframe,b===Cn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=R}return M}function v(C,w,R,b,M){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Cn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const z=t.update(C),q=C.material;if(Array.isArray(q)){const j=z.groups;for(let I=0,X=j.length;I<X;I++){const G=j[I],Q=q[G.materialIndex];if(Q&&Q.visible){const rt=x(C,Q,b,M);C.onBeforeShadow(i,C,w,R,z,rt,G),i.renderBufferDirect(R,null,z,rt,C,G),C.onAfterShadow(i,C,w,R,z,rt,G)}}}else if(q.visible){const j=x(C,q,b,M);C.onBeforeShadow(i,C,w,R,z,j,null),i.renderBufferDirect(R,null,z,j,C,null),C.onAfterShadow(i,C,w,R,z,j,null)}}const O=C.children;for(let z=0,q=O.length;z<q;z++)v(O[z],w,R,b,M)}function P(C){C.target.removeEventListener("dispose",P);for(const R in l){const b=l[R],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const _g={[Eo]:wo,[To]:Ro,[Ao]:Po,[Hi]:Co,[wo]:Eo,[Ro]:To,[Po]:Ao,[Co]:Hi};function vg(i,t){function e(){let D=!1;const st=new se;let V=null;const K=new se(0,0,0,0);return{setMask:function(ht){V!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,It,pe,Te){Te===!0&&(ht*=pe,ct*=pe,It*=pe),st.set(ht,ct,It,pe),K.equals(st)===!1&&(i.clearColor(ht,ct,It,pe),K.copy(st))},reset:function(){D=!1,V=null,K.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,V=null,K=null,ht=null;return{setReversed:function(ct){if(st!==ct){const It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const pe=ht;ht=null,this.setClear(pe)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?ot(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ct){V!==ct&&!D&&(i.depthMask(ct),V=ct)},setFunc:function(ct){if(st&&(ct=_g[ct]),K!==ct){switch(ct){case Eo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case To:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Ao:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(st&&(ct=1-ct),i.clearDepth(ct),ht=ct)},reset:function(){D=!1,V=null,K=null,ht=null,st=!1}}}function s(){let D=!1,st=null,V=null,K=null,ht=null,ct=null,It=null,pe=null,Te=null;return{setTest:function(ne){D||(ne?ot(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ne){st!==ne&&!D&&(i.stencilMask(ne),st=ne)},setFunc:function(ne,rn,Mn){(V!==ne||K!==rn||ht!==Mn)&&(i.stencilFunc(ne,rn,Mn),V=ne,K=rn,ht=Mn)},setOp:function(ne,rn,Mn){(ct!==ne||It!==rn||pe!==Mn)&&(i.stencilOp(ne,rn,Mn),ct=ne,It=rn,pe=Mn)},setLocked:function(ne){D=ne},setClear:function(ne){Te!==ne&&(i.clearStencil(ne),Te=ne)},reset:function(){D=!1,st=null,V=null,K=null,ht=null,ct=null,It=null,pe=null,Te=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,v=null,P=null,C=null,w=new zt(0,0,0),R=0,b=!1,M=null,L=null,O=null,z=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),I=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),I=X>=2);let Q=null,rt={};const _t=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Qt=new se().fromArray(_t),W=new se().fromArray(Lt);function tt(D,st,V,K){const ht=new Uint8Array(4),ct=i.createTexture();i.bindTexture(D,ct),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<V;It++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(st+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ct}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Hi),Gt(!1),Vt(tc),ot(i.CULL_FACE),F(qn);function ot(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,st){return u[D]!==st?(i.bindFramebuffer(D,st),u[D]=st,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function kt(D,st){let V=p,K=!1;if(D){V=d.get(st),V===void 0&&(V=[],d.set(st,V));const ht=D.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,It=ht.length;ct<It;ct++)V[ct]=i.COLOR_ATTACHMENT0+ct;V.length=ht.length,K=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,K=!0);K&&i.drawBuffers(V)}function fe(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const qt={[ui]:i.FUNC_ADD,[Nh]:i.FUNC_SUBTRACT,[Fh]:i.FUNC_REVERSE_SUBTRACT};qt[Oh]=i.MIN,qt[Bh]=i.MAX;const _e={[zh]:i.ZERO,[kh]:i.ONE,[Hh]:i.SRC_COLOR,[So]:i.SRC_ALPHA,[Yh]:i.SRC_ALPHA_SATURATE,[Xh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[Gh]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[qh]:i.ONE_MINUS_DST_COLOR,[Wh]:i.ONE_MINUS_DST_ALPHA,[jh]:i.CONSTANT_COLOR,[$h]:i.ONE_MINUS_CONSTANT_COLOR,[Kh]:i.CONSTANT_ALPHA,[Jh]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,st,V,K,ht,ct,It,pe,Te,ne){if(D===qn){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),D!==Uh){if(D!==m||ne!==b){if((f!==ui||v!==ui)&&(i.blendEquation(i.FUNC_ADD),f=ui,v=ui),ne)switch(D){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFunc(i.ONE,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ec:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,P=null,C=null,w.set(0,0,0),R=0,m=D,b=ne}return}ht=ht||st,ct=ct||V,It=It||K,(st!==f||ht!==v)&&(i.blendEquationSeparate(qt[st],qt[ht]),f=st,v=ht),(V!==y||K!==x||ct!==P||It!==C)&&(i.blendFuncSeparate(_e[V],_e[K],_e[ct],_e[It]),y=V,x=K,P=ct,C=It),(pe.equals(w)===!1||Te!==R)&&(i.blendColor(pe.r,pe.g,pe.b,Te),w.copy(pe),R=Te),m=D,b=!1}function Ye(D,st){D.side===Je?Ct(i.CULL_FACE):ot(i.CULL_FACE);let V=D.side===Ie;st&&(V=!V),Gt(V),D.blending===Oi&&D.transparent===!1?F(qn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Vt(D){D!==Dh?(ot(i.CULL_FACE),D!==L&&(D===tc?i.cullFace(i.BACK):D===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),L=D}function Tt(D){D!==O&&(I&&i.lineWidth(D),O=D)}function le(D,st,V){D?(ot(i.POLYGON_OFFSET_FILL),(z!==st||q!==V)&&(i.polygonOffset(st,V),z=st,q=V)):Ct(i.POLYGON_OFFSET_FILL)}function wt(D){D?ot(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function T(D){D===void 0&&(D=i.TEXTURE0+j-1),Q!==D&&(i.activeTexture(D),Q=D)}function S(D,st,V){V===void 0&&(Q===null?V=i.TEXTURE0+j-1:V=Q);let K=rt[V];K===void 0&&(K={type:void 0,texture:void 0},rt[V]=K),(K.type!==D||K.texture!==st)&&(Q!==V&&(i.activeTexture(V),Q=V),i.bindTexture(D,st||gt[D]),K.type=D,K.texture=st)}function B(){const D=rt[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){Qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function pt(D){W.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function Wt(D,st){let V=l.get(st);V===void 0&&(V=new WeakMap,l.set(st,V));let K=V.get(D);K===void 0&&(K=i.getUniformBlockIndex(st,D.name),V.set(D,K))}function Ft(D,st){const K=l.get(st).get(D);c.get(st)!==K&&(i.uniformBlockBinding(st,K,D.__bindingPointIndex),c.set(st,K))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,rt={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,v=null,P=null,C=null,w=new zt(0,0,0),R=0,b=!1,M=null,L=null,O=null,z=null,q=null,Qt.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ct,bindFramebuffer:Dt,drawBuffers:kt,useProgram:fe,setBlending:F,setMaterial:Ye,setFlipSided:Gt,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:le,setScissorTest:wt,activeTexture:T,bindTexture:S,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:ft,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Rt,viewport:pt,reset:oe}}function Jc(i,t,e,n){const s=xg(n);switch(e){case Pl:return i*t;case Dl:return i*t;case Il:return i*t*2;case va:return i*t/s.components*s.byteLength;case xa:return i*t/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case Ll:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Ma:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case No:case Oo:return Math.max(i,16)*Math.max(t,8)/4;case Uo:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nl:case ia:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xg(i){switch(i){case Dn:case Al:return{byteLength:1,components:1};case Ms:case Cl:case bs:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case mi:case ma:case Rn:return{byteLength:4,components:1};case Rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return p?new OffscreenCanvas(T,S):xr("canvas")}function _(T,S,B){let $=1;const Z=wt(T);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor($*Z.width),Mt=Math.floor($*Z.height);u===void 0&&(u=g(Y,Mt));const at=S?g(Y,Mt):u;return at.width=Y,at.height=Mt,at.getContext("2d").drawImage(T,0,0,Y,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Mt+")."),at}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,S,B,$,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=S;if(S===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const Mt=Z?Tr:jt.getTransfer($);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Mt===ie?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(T,S){let B;return T?S===null||S===mi||S===Wi?B=i.DEPTH24_STENCIL8:S===Rn?B=i.DEPTH32F_STENCIL8:S===Ms&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mi||S===Wi?B=i.DEPTH_COMPONENT24:S===Rn?B=i.DEPTH_COMPONENT32F:S===Ms&&(B=i.DEPTH_COMPONENT16),B}function P(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ue&&T.minFilter!==xn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function C(T){const S=T.target;S.removeEventListener("dispose",C),R(S),S.isVideoTexture&&h.delete(S)}function w(T){const S=T.target;S.removeEventListener("dispose",w),M(S)}function R(T){const S=n.get(T);if(S.__webglInit===void 0)return;const B=T.source,$=d.get(B);if($){const Z=$[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(T),Object.keys($).length===0&&d.delete(B)}n.remove(T)}function b(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const B=T.source,$=d.get(B);delete $[S.__cacheKey],o.memory.textures--}function M(T){const S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Z=0;Z<S.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let $=0,Z=B.length;$<Z;$++){const Y=n.get(B[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(T)}let L=0;function O(){L=0}function z(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function q(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function j(T,S){const B=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(B,T,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function I(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){W(B,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function X(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){W(B,T,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function G(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){tt(B,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const Q={[_r]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},rt={[Ue]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},_t={[hu]:i.NEVER,[gu]:i.ALWAYS,[uu]:i.LESS,[Ol]:i.LEQUAL,[du]:i.EQUAL,[mu]:i.GEQUAL,[fu]:i.GREATER,[pu]:i.NOTEQUAL};function Lt(T,S){if(S.type===Rn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===xn||S.magFilter===Or||S.magFilter===Us||S.magFilter===pi||S.minFilter===xn||S.minFilter===Or||S.minFilter===Us||S.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Q[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,rt[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ue||S.minFilter!==Us&&S.minFilter!==pi||S.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const Y=q(S);if(Y!==T.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[Y].usedTimes++;const Mt=Z[T.__cacheKey];Mt!==void 0&&(Z[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(S)),T.__cacheKey=Y,T.__webglTexture=Z[Y].texture}return B}function W(T,S,B){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const Z=Qt(T,S),Y=S.source;e.bindTexture($,T.__webglTexture,i.TEXTURE0+B);const Mt=n.get(Y);if(Y.version!==Mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const at=jt.getPrimaries(jt.workingColorSpace),ut=S.colorSpace===Xn?null:jt.getPrimaries(S.colorSpace),Yt=S.colorSpace===Xn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=_(S.image,!1,s.maxTextureSize);et=le(S,et);const ft=r.convert(S.format,S.colorSpace),At=r.convert(S.type);let Rt=x(S.internalFormat,ft,At,S.colorSpace,S.isVideoTexture);Lt($,S);let pt;const Wt=S.mipmaps,Ft=S.isVideoTexture!==!0,oe=Mt.__version===void 0||Z===!0,D=Y.dataReady,st=P(S,et);if(S.isDepthTexture)Rt=v(S.format===Xi,S.type),oe&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,ft,At,null));else if(S.isDataTexture)if(Wt.length>0){Ft&&oe&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Wt[0].width,Wt[0].height);for(let V=0,K=Wt.length;V<K;V++)pt=Wt[V],Ft?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,V,Rt,pt.width,pt.height,0,ft,At,pt.data);S.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(i.TEXTURE_2D,st,Rt,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,ft,At,et.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,et.width,et.height,0,ft,At,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,Wt[0].width,Wt[0].height,et.depth);for(let V=0,K=Wt.length;V<K;V++)if(pt=Wt[V],S.format!==un)if(ft!==null)if(Ft){if(D)if(S.layerUpdates.size>0){const ht=Jc(pt.width,pt.height,S.format,S.type);for(const ct of S.layerUpdates){const It=pt.data.subarray(ct*ht/pt.data.BYTES_PER_ELEMENT,(ct+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ct,pt.width,pt.height,1,ft,It)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,et.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Rt,pt.width,pt.height,et.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,et.depth,ft,At,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Rt,pt.width,pt.height,et.depth,0,ft,At,pt.data)}else{Ft&&oe&&e.texStorage2D(i.TEXTURE_2D,st,Rt,Wt[0].width,Wt[0].height);for(let V=0,K=Wt.length;V<K;V++)pt=Wt[V],S.format!==un?ft!==null?Ft?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,At,pt.data):e.texImage2D(i.TEXTURE_2D,V,Rt,pt.width,pt.height,0,ft,At,pt.data)}else if(S.isDataArrayTexture)if(Ft){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,Rt,et.width,et.height,et.depth),D)if(S.layerUpdates.size>0){const V=Jc(et.width,et.height,S.format,S.type);for(const K of S.layerUpdates){const ht=et.data.subarray(K*V/et.data.BYTES_PER_ELEMENT,(K+1)*V/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,ft,At,ht)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ft,At,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,ft,At,et.data);else if(S.isData3DTexture)Ft?(oe&&e.texStorage3D(i.TEXTURE_3D,st,Rt,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ft,At,et.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,ft,At,et.data);else if(S.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(i.TEXTURE_2D,st,Rt,et.width,et.height);else{let V=et.width,K=et.height;for(let ht=0;ht<st;ht++)e.texImage2D(i.TEXTURE_2D,ht,Rt,V,K,0,ft,At,null),V>>=1,K>>=1}}else if(Wt.length>0){if(Ft&&oe){const V=wt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,st,Rt,V.width,V.height)}for(let V=0,K=Wt.length;V<K;V++)pt=Wt[V],Ft?D&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft,At,pt):e.texImage2D(i.TEXTURE_2D,V,Rt,ft,At,pt);S.generateMipmaps=!1}else if(Ft){if(oe){const V=wt(et);e.texStorage2D(i.TEXTURE_2D,st,Rt,V.width,V.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,At,et)}else e.texImage2D(i.TEXTURE_2D,0,Rt,ft,At,et);m(S)&&f($),Mt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function tt(T,S,B){if(S.image.length!==6)return;const $=Qt(T,S),Z=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const Mt=jt.getPrimaries(jt.workingColorSpace),at=S.colorSpace===Xn?null:jt.getPrimaries(S.colorSpace),ut=S.colorSpace===Xn||Mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Yt&&!et?ft[K]=_(S.image[K],!0,s.maxCubemapSize):ft[K]=et?S.image[K].image:S.image[K],ft[K]=le(S,ft[K]);const At=ft[0],Rt=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),Wt=x(S.internalFormat,Rt,pt,S.colorSpace),Ft=S.isVideoTexture!==!0,oe=Y.__version===void 0||$===!0,D=Z.dataReady;let st=P(S,At);Lt(i.TEXTURE_CUBE_MAP,S);let V;if(Yt){Ft&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Wt,At.width,At.height);for(let K=0;K<6;K++){V=ft[K].mipmaps;for(let ht=0;ht<V.length;ht++){const ct=V[ht];S.format!==un?Rt!==null?Ft?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,Rt,pt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Wt,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(V=S.mipmaps,Ft&&oe){V.length>0&&st++;const K=wt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,Wt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Ft?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,Rt,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,ft[K].width,ft[K].height,0,Rt,pt,ft[K].data);for(let ht=0;ht<V.length;ht++){const It=V[ht].image[K].image;Ft?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,It.width,It.height,Rt,pt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Wt,It.width,It.height,0,Rt,pt,It.data)}}else{Ft?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Wt,Rt,pt,ft[K]);for(let ht=0;ht<V.length;ht++){const ct=V[ht];Ft?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Rt,pt,ct.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Wt,Rt,pt,ct.image[K])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function gt(T,S,B,$,Z,Y){const Mt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),ut=x(B.internalFormat,Mt,at,B.colorSpace),Yt=n.get(S),et=n.get(B);if(et.__renderTarget=S,!Yt.__hasExternalTextures){const ft=Math.max(1,S.width>>Y),At=Math.max(1,S.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,ut,ft,At,S.depth,0,Mt,at,null):e.texImage2D(Z,Y,ut,ft,At,0,Mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,et.__webglTexture,0,Gt(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const $=S.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=v(S.stencilBuffer,Z),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Gt(S);Vt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,T)}else{const $=S.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],Mt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),ut=x(Y.internalFormat,Mt,at,Y.colorSpace),Yt=Gt(S);B&&Vt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ut,S.width,S.height):Vt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,ut,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ut,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const Z=$.__webglTexture,Y=Gt(S);if(S.depthTexture.format===Bi)Vt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Xi)Vt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=$}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ct(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),ot(S.__webglDepthbuffer[$],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ot(S.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(T,S,B){const $=n.get(T);S!==void 0&&gt($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(T)}function fe(T){const S=T.texture,B=n.get(T),$=n.get(S);T.addEventListener("dispose",w);const Z=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let ut=0;ut<S.mipmaps.length;ut++)B.__webglFramebuffer[at][ut]=i.createFramebuffer()}else B.__webglFramebuffer[at]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)B.__webglFramebuffer[at]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let at=0,ut=Z.length;at<ut;at++){const Yt=n.get(Z[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Vt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ut=Z[at];B.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Yt=r.convert(ut.format,ut.colorSpace),et=r.convert(ut.type),ft=x(ut.internalFormat,Yt,et,ut.colorSpace,T.isXRRenderTarget===!0),At=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,B.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)gt(B.__webglFramebuffer[at][ut],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else gt(B.__webglFramebuffer[at],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,ut=Z.length;at<ut;at++){const Yt=Z[at],et=n.get(Yt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Lt(i.TEXTURE_2D,Yt),gt(B.__webglFramebuffer,T,Yt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Lt(at,S),S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)gt(B.__webglFramebuffer[ut],T,S,i.COLOR_ATTACHMENT0,at,ut);else gt(B.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,at,0);m(S)&&f(at),e.unbindTexture()}T.depthBuffer&&Dt(T)}function qt(T){const S=T.textures;for(let B=0,$=S.length;B<$;B++){const Z=S[B];if(m(Z)){const Y=y(T),Mt=n.get(Z).__webglTexture;e.bindTexture(Y,Mt),f(Y),e.unbindTexture()}}}const _e=[],F=[];function Ye(T){if(T.samples>0){if(Vt(T)===!1){const S=T.textures,B=T.width,$=T.height;let Z=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(T),at=S.length>1;if(at)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Yt=n.get(S[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Z,i.NEAREST),c===!0&&(_e.length=0,F.length=0,_e.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_e.push(Y),F.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Yt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Vt(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(T){const S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function le(T,S){const B=T.colorSpace,$=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Yi&&B!==Xn&&(jt.getTransfer(B)===ie?($!==un||Z!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Vt}function Mg(i,t){function e(n,s=Xn){let r;const o=jt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Al)return i.BYTE;if(n===Cl)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===Pl)return i.ALPHA;if(n===Ll)return i.RGB;if(n===un)return i.RGBA;if(n===Dl)return i.LUMINANCE;if(n===Il)return i.LUMINANCE_ALPHA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===va)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===Ul)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===No||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bo||n===zo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===jo||n===$o||n===Ko||n===Jo||n===Zo||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ho)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$o)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ta)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===ea||n===na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===ia||n===sa||n===ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Sg extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
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

}`;class Tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:Eg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ag extends ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const _=new Tg,m=e.getContextAttributes();let f=null,y=null;const x=[],v=[],P=new Et;let C=null;const w=new Ve;w.viewport=new se;const R=new Ve;R.viewport=new se;const b=[w,R],M=new Sg;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let tt=x[W];return tt===void 0&&(tt=new uo,x[W]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(W){let tt=x[W];return tt===void 0&&(tt=new uo,x[W]=tt),tt.getGripSpace()},this.getHand=function(W){let tt=x[W];return tt===void 0&&(tt=new uo,x[W]=tt),tt.getHandSpace()};function z(W){const tt=v.indexOf(W.inputSource);if(tt===-1)return;const gt=x[tt];gt!==void 0&&(gt.update(W.inputSource,W.frame,l||o),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let W=0;W<x.length;W++){const tt=v[W];tt!==null&&(v[W]=null,x[W].disconnect(tt))}L=null,O=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gi(p.framebufferWidth,p.framebufferHeight,{format:un,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Xi:Bi,gt=m.stencil?Wi:mi);const Ct={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new gi(d.textureWidth,d.textureHeight,{format:un,type:Dn,depthTexture:new $l(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(W){for(let tt=0;tt<W.removed.length;tt++){const gt=W.removed[tt],ot=v.indexOf(gt);ot>=0&&(v[ot]=null,x[ot].disconnect(gt))}for(let tt=0;tt<W.added.length;tt++){const gt=W.added[tt];let ot=v.indexOf(gt);if(ot===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=v.length){v.push(gt),ot=Dt;break}else if(v[Dt]===null){v[Dt]=gt,ot=Dt;break}if(ot===-1)break}const Ct=x[ot];Ct&&Ct.connect(gt)}}const I=new A,X=new A;function G(W,tt,gt){I.setFromMatrixPosition(tt.matrixWorld),X.setFromMatrixPosition(gt.matrixWorld);const ot=I.distanceTo(X),Ct=tt.projectionMatrix.elements,Dt=gt.projectionMatrix.elements,kt=Ct[14]/(Ct[10]-1),fe=Ct[14]/(Ct[10]+1),qt=(Ct[9]+1)/Ct[5],_e=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],Ye=(Dt[8]+1)/Dt[0],Gt=kt*F,Vt=kt*Ye,Tt=ot/(-F+Ye),le=Tt*-F;if(tt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(le),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ct[10]===-1)W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const wt=kt+Tt,T=fe+Tt,S=Gt-le,B=Vt+(ot-le),$=qt*fe/T*wt,Z=_e*fe/T*wt;W.projectionMatrix.makePerspective(S,B,$,Z,wt,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Q(W,tt){tt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(tt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let tt=W.near,gt=W.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=R.near=w.near=tt,M.far=R.far=w.far=gt,(L!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,O=M.far),w.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,M.layers.mask=w.layers.mask|R.layers.mask;const ot=W.parent,Ct=M.cameras;Q(M,ot);for(let Dt=0;Dt<Ct.length;Dt++)Q(Ct[Dt],ot);Ct.length===2?G(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),rt(W,M,ot)};function rt(W,tt,gt){gt===null?W.matrix.copy(tt.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(tt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(tt.projectionMatrix),W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=oa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _t=null;function Lt(W,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ot=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Dt=0;Dt<gt.length;Dt++){const kt=gt[Dt];let fe=null;if(p!==null)fe=p.getViewport(kt);else{const _e=u.getViewSubImage(d,kt);fe=_e.viewport,Dt===0&&(t.setRenderTargetTextures(y,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),t.setRenderTarget(y))}let qt=b[Dt];qt===void 0&&(qt=new Ve,qt.layers.enable(Dt),qt.viewport=new se,b[Dt]=qt),qt.matrix.fromArray(kt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(kt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(fe.x,fe.y,fe.width,fe.height),Dt===0&&(M.matrix.copy(qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(qt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Dt=u.getDepthInformation(gt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let gt=0;gt<x.length;gt++){const ot=v[gt],Ct=x[gt];ot!==null&&Ct!==void 0&&Ct.update(ot,tt,l||o)}_t&&_t(W,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Qt=new Yl;Qt.setAnimationLoop(Lt),this.setAnimationLoop=function(W){_t=W},this.dispose=function(){}}}const oi=new In,Cg=new re;function Rg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ie&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ie&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,oi.copy(v),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(oi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const P=x.program;n.updateUBOMapping(y,P);const C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){const x=u();y.__bindingPointIndex=x;const v=i.createBuffer(),P=y.__size,C=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],v=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,w=v.length;C<w;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,M=R.length;b<M;b++){const L=R[b];if(p(L,C,b,P)===!0){const O=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let j=0;j<z.length;j++){const I=z[j],X=_(I);typeof I=="number"||typeof I=="boolean"?(L.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,O+q,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=0,L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=0,L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=0):(I.toArray(L.__data,q),q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,v,P){const C=y.value,w=x+"_"+v;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const R=P[w];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[w]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(y){const x=y.uniforms;let v=0;const P=16;for(let w=0,R=x.length;w<R;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,L=b.length;M<L;M++){const O=b[M],z=Array.isArray(O.value)?O.value:[O.value];for(let q=0,j=z.length;q<j;q++){const I=z[q],X=_(I),G=v%P,Q=G%X.boundary,rt=G+Q;v+=Q,rt!==0&&P-rt<X.storage&&(v+=P-rt),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=X.storage}}}const C=v%P;return C>0&&(v+=P-C),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Lg{constructor(t={}){const{canvas:e=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let P=!1,C=0,w=0,R=null,b=-1,M=null;const L=new se,O=new se;let z=null;const q=new zt(0);let j=0,I=e.width,X=e.height,G=1,Q=null,rt=null;const _t=new se(0,0,I,X),Lt=new se(0,0,I,X);let Qt=!1;const W=new ba;let tt=!1,gt=!1;const ot=new re,Ct=new re,Dt=new A,kt=new se,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function _e(){return R===null?G:1}let F=n;function Ye(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){const U="webgl2";if(F=Ye(U,E),F===null)throw Ye(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Gt,Vt,Tt,le,wt,T,S,B,$,Z,Y,Mt,at,ut,Yt,et,ft,At,Rt,pt,Wt,Ft,oe,D;function st(){Gt=new Fp(F),Gt.init(),Ft=new Mg(F,Gt),Vt=new Pp(F,Gt,t,Ft),Tt=new vg(F,Gt),Vt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),le=new zp(F),wt=new ig,T=new yg(F,Gt,Tt,wt,Vt,Ft,le),S=new Dp(v),B=new Np(v),$=new Xu(F),oe=new Cp(F,$),Z=new Op(F,$,le,oe),Y=new Hp(F,Z,$,le),Rt=new kp(F,Vt,T),et=new Lp(wt),Mt=new ng(v,S,B,Gt,Vt,oe,et),at=new Rg(v,wt),ut=new rg,Yt=new ug(Gt),At=new Ap(v,S,B,Tt,Y,p,c),ft=new gg(v,Y,Vt),D=new Pg(F,le,Vt,Tt),pt=new Rp(F,Gt,le),Wt=new Bp(F,Gt,le),le.programs=Mt.programs,v.capabilities=Vt,v.extensions=Gt,v.properties=wt,v.renderLists=ut,v.shadowMap=ft,v.state=Tt,v.info=le}st();const V=new Ag(v,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(I,X,!1))},this.getSize=function(E){return E.set(I,X)},this.setSize=function(E,U,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,X=U,e.width=Math.floor(E*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(I*G,X*G).floor()},this.setDrawingBufferSize=function(E,U,k){I=E,X=U,G=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,U,k,H){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,U,k,H),Tt.viewport(L.copy(_t).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Lt)},this.setScissor=function(E,U,k,H){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,U,k,H),Tt.scissor(O.copy(Lt).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){Tt.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(E=!0,U=!0,k=!0){let H=0;if(E){let N=!1;if(R!==null){const nt=R.texture.format;N=nt===Ma||nt===ya||nt===xa}if(N){const nt=R.texture.type,lt=nt===Dn||nt===mi||nt===Ms||nt===Wi||nt===ga||nt===_a,vt=At.getClearColor(),xt=At.getClearAlpha(),Pt=vt.r,Ut=vt.g,yt=vt.b;lt?(g[0]=Pt,g[1]=Ut,g[2]=yt,g[3]=xt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Pt,_[1]=Ut,_[2]=yt,_[3]=xt,F.clearBufferiv(F.COLOR,0,_))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),k&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),Yt.dispose(),wt.dispose(),S.dispose(),B.dispose(),Y.dispose(),oe.dispose(),D.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",qa),V.removeEventListener("sessionend",Ya),ti.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=le.autoReset,U=ft.enabled,k=ft.autoUpdate,H=ft.needsUpdate,N=ft.type;st(),le.autoReset=E,ft.enabled=U,ft.autoUpdate=k,ft.needsUpdate=H,ft.type=N}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function It(E){const U=E.target;U.removeEventListener("dispose",It),pe(U)}function pe(E){Te(E),wt.remove(E)}function Te(E){const U=wt.get(E).programs;U!==void 0&&(U.forEach(function(k){Mt.releaseProgram(k)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,H,N,nt){U===null&&(U=fe);const lt=N.isMesh&&N.matrixWorld.determinant()<0,vt=Rh(E,U,k,H,N);Tt.setMaterial(H,lt);let xt=k.index,Pt=1;if(H.wireframe===!0){if(xt=Z.getWireframeAttribute(k),xt===void 0)return;Pt=2}const Ut=k.drawRange,yt=k.attributes.position;let Kt=Ut.start*Pt,ae=(Ut.start+Ut.count)*Pt;nt!==null&&(Kt=Math.max(Kt,nt.start*Pt),ae=Math.min(ae,(nt.start+nt.count)*Pt)),xt!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,xt.count)):yt!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,yt.count));const he=ae-Kt;if(he<0||he===1/0)return;oe.setup(N,H,vt,k,xt);let Ne,te=pt;if(xt!==null&&(Ne=$.get(xt),te=Wt,te.setIndex(Ne)),N.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*_e()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(N.isLine){let St=H.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*_e()),N.isLineSegments?te.setMode(F.LINES):N.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else N.isPoints?te.setMode(F.POINTS):N.isSprite&&te.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)te.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,Sn=N._multiDrawCounts,ee=N._multiDrawCount,on=xt?$.get(xt).bytesPerElement:1,Mi=wt.get(H).currentProgram.getUniforms();for(let ze=0;ze<ee;ze++)Mi.setValue(F,"_gl_DrawID",ze),te.render(St[ze]/on,Sn[ze])}else if(N.isInstancedMesh)te.renderInstances(Kt,he,N.count);else if(k.isInstancedBufferGeometry){const St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Sn=Math.min(k.instanceCount,St);te.renderInstances(Kt,he,Sn)}else te.render(Kt,he)};function ne(E,U,k){E.transparent===!0&&E.side===Je&&E.forceSinglePass===!1?(E.side=Ie,E.needsUpdate=!0,Is(E,U,k),E.side=jn,E.needsUpdate=!0,Is(E,U,k),E.side=Je):Is(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),f=Yt.get(k),f.init(U),x.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const vt=nt[lt];ne(vt,k,N),H.add(vt)}else ne(nt,k,N),H.add(nt)}),x.pop(),f=null,H},this.compileAsync=function(E,U,k=null){const H=this.compile(E,U,k);return new Promise(N=>{function nt(){if(H.forEach(function(lt){wt.get(lt).currentProgram.isReady()&&H.delete(lt)}),H.size===0){N(E);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let rn=null;function Mn(E){rn&&rn(E)}function qa(){ti.stop()}function Ya(){ti.start()}const ti=new Yl;ti.setAnimationLoop(Mn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(E){rn=E,V.setAnimationLoop(E),E===null?ti.stop():ti.start()},V.addEventListener("sessionstart",qa),V.addEventListener("sessionend",Ya),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),f=Yt.get(E,x.length),f.init(U),x.push(f),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(Ct),gt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,gt),m=ut.get(E,y.length),m.init(),y.push(m),V.enabled===!0&&V.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Fr(nt,U,-1/0,v.sortObjects)}Fr(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,rt),qt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,qt&&At.addToRenderList(m,E),this.info.render.frame++,tt===!0&&et.beginShadows();const k=f.state.shadowsArray;ft.render(k,E,U),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let lt=0,vt=nt.length;lt<vt;lt++){const xt=nt[lt];$a(H,N,E,xt)}qt&&At.render(E);for(let lt=0,vt=nt.length;lt<vt;lt++){const xt=nt[lt];ja(m,E,xt,xt.viewport)}}else N.length>0&&$a(H,N,E,U),qt&&At.render(E),ja(m,E,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),oe.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(f=x[x.length-1],tt===!0&&et.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Fr(E,U,k,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){H&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ct);const lt=Y.update(E),vt=E.material;vt.visible&&m.push(E,lt,vt,k,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const lt=Y.update(E),vt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),kt.copy(lt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(Ct)),Array.isArray(vt)){const xt=lt.groups;for(let Pt=0,Ut=xt.length;Pt<Ut;Pt++){const yt=xt[Pt],Kt=vt[yt.materialIndex];Kt&&Kt.visible&&m.push(E,lt,Kt,k,kt.z,yt)}}else vt.visible&&m.push(E,lt,vt,k,kt.z,null)}}const nt=E.children;for(let lt=0,vt=nt.length;lt<vt;lt++)Fr(nt[lt],U,k,H)}function ja(E,U,k,H){const N=E.opaque,nt=E.transmissive,lt=E.transparent;f.setupLightsView(k),tt===!0&&et.setGlobalState(v.clippingPlanes,k),H&&Tt.viewport(L.copy(H)),N.length>0&&Ds(N,U,k),nt.length>0&&Ds(nt,U,k),lt.length>0&&Ds(lt,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function $a(E,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new gi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?bs:Dn,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const nt=f.state.transmissionRenderTarget[H.id],lt=H.viewport||L;nt.setSize(lt.z,lt.w);const vt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(q),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),qt&&At.render(k);const xt=v.toneMapping;v.toneMapping=Yn;const Pt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),tt===!0&&et.setGlobalState(v.clippingPlanes,H),Ds(E,k,H),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let yt=0,Kt=U.length;yt<Kt;yt++){const ae=U[yt],he=ae.object,Ne=ae.geometry,te=ae.material,St=ae.group;if(te.side===Je&&he.layers.test(H.layers)){const Sn=te.side;te.side=Ie,te.needsUpdate=!0,Ka(he,k,H,Ne,te,St),te.side=Sn,te.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}v.setRenderTarget(vt),v.setClearColor(q,j),Pt!==void 0&&(H.viewport=Pt),v.toneMapping=xt}function Ds(E,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=E.length;N<nt;N++){const lt=E[N],vt=lt.object,xt=lt.geometry,Pt=H===null?lt.material:H,Ut=lt.group;vt.layers.test(k.layers)&&Ka(vt,U,k,xt,Pt,Ut)}}function Ka(E,U,k,H,N,nt){E.onBeforeRender(v,U,k,H,N,nt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,k,H,E,nt),N.transparent===!0&&N.side===Je&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,v.renderBufferDirect(k,U,H,N,E,nt),N.side=jn,N.needsUpdate=!0,v.renderBufferDirect(k,U,H,N,E,nt),N.side=Je):v.renderBufferDirect(k,U,H,N,E,nt),E.onAfterRender(v,U,k,H,N,nt)}function Is(E,U,k){U.isScene!==!0&&(U=fe);const H=wt.get(E),N=f.state.lights,nt=f.state.shadowsArray,lt=N.state.version,vt=Mt.getParameters(E,N.state,nt,U,k),xt=Mt.getProgramCacheKey(vt);let Pt=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",It),Pt=new Map,H.programs=Pt);let Ut=Pt.get(xt);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===lt)return Za(E,vt),Ut}else vt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(vt,v),Ut=Mt.acquireProgram(vt,xt),Pt.set(xt,Ut),H.uniforms=vt.uniforms;const yt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=et.uniform),Za(E,vt),H.needsLights=Lh(E),H.lightsStateVersion=lt,H.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function Ja(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=gr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Za(E,U){const k=wt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Rh(E,U,k,H,N){U.isScene!==!0&&(U=fe),T.resetTextureUnits();const nt=U.fog,lt=H.isMeshStandardMaterial?U.environment:null,vt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Yi,xt=(H.isMeshStandardMaterial?B:S).get(H.envMap||lt),Pt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,ae=!!k.morphAttributes.color;let he=Yn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=v.toneMapping);const Ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=Ne!==void 0?Ne.length:0,St=wt.get(H),Sn=f.state.lights;if(tt===!0&&(gt===!0||E!==M)){const je=E===M&&H.id===b;et.setState(H,E,je)}let ee=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Sn.state.version||St.outputColorSpace!==vt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==xt||H.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==et.numPlanes||St.numIntersection!==et.numIntersection)||St.vertexAlphas!==Pt||St.vertexTangents!==Ut||St.morphTargets!==yt||St.morphNormals!==Kt||St.morphColors!==ae||St.toneMapping!==he||St.morphTargetsCount!==te)&&(ee=!0):(ee=!0,St.__version=H.version);let on=St.currentProgram;ee===!0&&(on=Is(H,U,N));let Mi=!1,ze=!1,es=!1;const ue=on.getUniforms(),dn=St.uniforms;if(Tt.useProgram(on.program)&&(Mi=!0,ze=!0,es=!0),H.id!==b&&(b=H.id,ze=!0),Mi||M!==E){Tt.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),yu(ot),Mu(ot),ue.setValue(F,"projectionMatrix",ot)):ue.setValue(F,"projectionMatrix",E.projectionMatrix),ue.setValue(F,"viewMatrix",E.matrixWorldInverse);const Fn=ue.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,Dt.setFromMatrixPosition(E.matrixWorld)),Vt.logarithmicDepthBuffer&&ue.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,ze=!0,es=!0)}if(N.isSkinnedMesh){ue.setOptional(F,N,"bindMatrix"),ue.setOptional(F,N,"bindMatrixInverse");const je=N.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),ue.setValue(F,"boneTexture",je.boneTexture,T))}N.isBatchedMesh&&(ue.setOptional(F,N,"batchingTexture"),ue.setValue(F,"batchingTexture",N._matricesTexture,T),ue.setOptional(F,N,"batchingIdTexture"),ue.setValue(F,"batchingIdTexture",N._indirectTexture,T),ue.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(F,"batchingColorTexture",N._colorsTexture,T));const ns=k.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Rt.update(N,k,on),(ze||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,ue.setValue(F,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(dn.envMap.value=xt,dn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),ze&&(ue.setValue(F,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&Ph(dn,es),nt&&H.fog===!0&&at.refreshFogUniforms(dn,nt),at.refreshMaterialUniforms(dn,H,G,X,f.state.transmissionRenderTarget[E.id]),gr.upload(F,Ja(St),dn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gr.upload(F,Ja(St),dn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(F,"center",N.center),ue.setValue(F,"modelViewMatrix",N.modelViewMatrix),ue.setValue(F,"normalMatrix",N.normalMatrix),ue.setValue(F,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const je=H.uniformsGroups;for(let Fn=0,On=je.length;Fn<On;Fn++){const Qa=je[Fn];D.update(Qa,on),D.bind(Qa,on)}}return on}function Ph(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Lh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,k){wt.get(E.texture).__webglTexture=U,wt.get(E.depthTexture).__webglTexture=k;const H=wt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=wt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){R=E,C=U,w=k;let H=!0,N=null,nt=!1,lt=!1;if(E){const xt=wt.get(E);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),H=!1;else if(xt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(xt.__hasExternalTextures)T.rebindTextures(E,wt.get(E.texture).__webglTexture,wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const yt=E.depthTexture;if(xt.__boundDepthTexture!==yt){if(yt!==null&&wt.has(yt)&&(E.width!==yt.image.width||E.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const Ut=wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][k]:N=Ut[U],nt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?N=wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[k]:N=Ut,L.copy(E.viewport),O.copy(E.scissor),z=E.scissorTest}else L.copy(_t).multiplyScalar(G).floor(),O.copy(Lt).multiplyScalar(G).floor(),z=Qt;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&H&&Tt.drawBuffers(E,N),Tt.viewport(L),Tt.scissor(O),Tt.setScissorTest(z),nt){const xt=wt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,k)}else if(lt){const xt=wt.get(E.texture),Pt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,k||0,Pt)}b=-1},this.readRenderTargetPixels=function(E,U,k,H,N,nt,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){Tt.bindFramebuffer(F.FRAMEBUFFER,vt);try{const xt=E.texture,Pt=xt.format,Ut=xt.type;if(!Vt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N&&F.readPixels(U,k,H,N,Ft.convert(Pt),Ft.convert(Ut),nt)}finally{const xt=R!==null?wt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,H,N,nt,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){const xt=E.texture,Pt=xt.format,Ut=xt.type;if(!Vt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,vt);const yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.bufferData(F.PIXEL_PACK_BUFFER,nt.byteLength,F.STREAM_READ),F.readPixels(U,k,H,N,Ft.convert(Pt),Ft.convert(Ut),0);const Kt=R!==null?wt.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,Kt);const ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await xu(F,ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,nt),F.deleteBuffer(yt),F.deleteSync(ae),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),lt=U!==null?U.x:0,vt=U!==null?U.y:0;T.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,lt,vt,N,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,H=null,N=0){E.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let nt,lt,vt,xt,Pt,Ut,yt,Kt,ae;const he=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(nt=k.max.x-k.min.x,lt=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,xt=k.min.x,Pt=k.min.y,Ut=k.isBox3?k.min.z:0):(nt=he.width,lt=he.height,vt=he.depth||1,xt=0,Pt=0,Ut=0),H!==null?(yt=H.x,Kt=H.y,ae=H.z):(yt=0,Kt=0,ae=0);const Ne=Ft.convert(U.format),te=Ft.convert(U.type);let St;U.isData3DTexture?(T.setTexture3D(U,0),St=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),St=F.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),St=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Sn=F.getParameter(F.UNPACK_ROW_LENGTH),ee=F.getParameter(F.UNPACK_IMAGE_HEIGHT),on=F.getParameter(F.UNPACK_SKIP_PIXELS),Mi=F.getParameter(F.UNPACK_SKIP_ROWS),ze=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut);const es=E.isDataArrayTexture||E.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const dn=wt.get(E),ns=wt.get(U),je=wt.get(dn.__renderTarget),Fn=wt.get(ns.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,je.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<vt;On++)es&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(E).__webglTexture,N,Ut+On),E.isDepthTexture?(ue&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(U).__webglTexture,N,ae+On),F.blitFramebuffer(xt,Pt,nt,lt,yt,Kt,nt,lt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ue?F.copyTexSubImage3D(St,N,yt,Kt,ae+On,xt,Pt,nt,lt):F.copyTexSubImage2D(St,N,yt,Kt,ae+On,xt,Pt,nt,lt);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ue?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(St,N,yt,Kt,ae,nt,lt,vt,Ne,te,he.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(St,N,yt,Kt,ae,nt,lt,vt,Ne,he.data):F.texSubImage3D(St,N,yt,Kt,ae,nt,lt,vt,Ne,te,he):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,yt,Kt,nt,lt,Ne,te,he.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,yt,Kt,he.width,he.height,Ne,he.data):F.texSubImage2D(F.TEXTURE_2D,N,yt,Kt,nt,lt,Ne,te,he);F.pixelStorei(F.UNPACK_ROW_LENGTH,Sn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee),F.pixelStorei(F.UNPACK_SKIP_PIXELS,on),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze),N===0&&U.generateMipmaps&&F.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,H=null,N=0){return E.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,H,N)},this.initRenderTarget=function(E){wt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,Tt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class wa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new wa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dg extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ig extends Le{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ue,h=Ue,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yr=new A,Mr=new A,Zc=new re,cs=new Ar,er=new As,fo=new A,Qc=new A;class Ug extends ye{constructor(t=new xe,e=new th){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)yr.fromBufferAttribute(e,s-1),Mr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=yr.distanceTo(Mr);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;Zc.copy(s).invert(),cs.copy(t.ray).applyMatrix4(Zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),y=h.getX(_+1),x=nr(this,t,cs,c,f,y);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=nr(this,t,cs,c,_,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=nr(this,t,cs,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=nr(this,t,cs,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(yr.fromBufferAttribute(o,s),Mr.fromBufferAttribute(o,r),e.distanceSqToSegment(yr,Mr,fo,Qc)>n)return;fo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fo);if(!(c<t.near||c>t.far))return{distance:c,point:Qc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const tl=new A,el=new A;class Ng extends Ug{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)tl.fromBufferAttribute(e,s),el.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tl.distanceTo(el);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rr extends vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nl=new re,ca=new Ar,ir=new As,sr=new A;class Ta extends ye{constructor(t=new xe,e=new Rr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;nl.copy(s).invert(),ca.copy(t.ray).applyMatrix4(nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);sr.fromBufferAttribute(u,m),il(sr,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)sr.fromBufferAttribute(u,g),il(sr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function il(i,t,e,n,s,r,o){const a=ca.distanceSqToPoint(i);if(a<e){const c=new A;ca.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class eh extends Le{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,c=new re;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Pe(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nh extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fg extends nh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Aa(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const rr=new A,po=new Aa,mo=new Aa,go=new Aa;class Og extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),l=rr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),po.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),mo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),go.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(po.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),mo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),go.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(po.calc(c),mo.calc(c),go.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bg(i,t){const e=1-i;return e*e*t}function zg(i,t){return 2*(1-i)*i*t}function kg(i,t){return i*i*t}function gs(i,t,e,n){return Bg(i,t)+zg(i,e)+kg(i,n)}function Hg(i,t){const e=1-i;return e*e*e*t}function Gg(i,t){const e=1-i;return 3*e*e*i*t}function Vg(i,t){return 3*(1-i)*i*i*t}function Wg(i,t){return i*i*i*t}function _s(i,t,e,n,s){return Hg(i,t)+Gg(i,e)+Vg(i,n)+Wg(i,s)}class Xg extends Nn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,s.x,r.x,o.x,a.x),_s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qg extends Nn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,s.x,r.x,o.x,a.x),_s(t,s.y,r.y,o.y,a.y),_s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yg extends Nn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jg extends Nn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $g extends Nn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cs extends Nn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y),gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kg extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(sl(a,c.x,l.x,h.x,u.x),sl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var Jg=Object.freeze({__proto__:null,ArcCurve:Fg,CatmullRomCurve3:Og,CubicBezierCurve:Xg,CubicBezierCurve3:qg,EllipseCurve:nh,LineCurve:Yg,LineCurve3:jg,QuadraticBezierCurve:$g,QuadraticBezierCurve3:Cs,SplineCurve:Kg});class Ca extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new Et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class de extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function y(){const v=new A,P=new A;let C=0;const w=(e-t)/n;for(let R=0;R<=r;R++){const b=[],M=R/r,L=M*(e-t)+t;for(let O=0;O<=s;O++){const z=O/s,q=z*c+a,j=Math.sin(q),I=Math.cos(q);P.x=L*j,P.y=-M*n+m,P.z=L*I,u.push(P.x,P.y,P.z),v.set(j,w,I).normalize(),d.push(v.x,v.y,v.z),p.push(z,1-M),b.push(g++)}_.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){const M=_[b][R],L=_[b+1][R],O=_[b+1][R+1],z=_[b][R+1];(t>0||b!==0)&&(h.push(M,L,z),C+=3),(e>0||b!==r-1)&&(h.push(L,O,z),C+=3)}l.addGroup(f,C,0),f+=C}function x(v){const P=g,C=new Et,w=new A;let R=0;const b=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let O=0;O<=s;O++){const q=O/s*c+a,j=Math.cos(q),I=Math.sin(q);w.x=b*I,w.y=m*M,w.z=b*j,u.push(w.x,w.y,w.z),d.push(0,M,0),C.x=j*.5+.5,C.y=I*.5*M+.5,p.push(C.x,C.y),g++}for(let O=0;O<s;O++){const z=P+O,q=L+O;v===!0?h.push(q,q+1,z):h.push(q+1,q,z),R+=3}l.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class nn extends de{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new A,v=new A,P=new A;for(let C=0;C<e.length;C+=3)p(e[C+0],x),p(e[C+1],v),p(e[C+2],P),c(x,v,P,y)}function c(y,x,v,P){const C=P+1,w=[];for(let R=0;R<=C;R++){w[R]=[];const b=y.clone().lerp(v,R/C),M=x.clone().lerp(v,R/C),L=C-R;for(let O=0;O<=L;O++)O===0&&R===C?w[R][O]=b:w[R][O]=b.clone().lerp(M,O/L)}for(let R=0;R<C;R++)for(let b=0;b<2*(C-R)-1;b++){const M=Math.floor(b/2);b%2===0?(d(w[R][M+1]),d(w[R+1][M]),d(w[R][M])):(d(w[R][M+1]),d(w[R+1][M+1]),d(w[R+1][M]))}}function l(y){const x=new A;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new A;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=m(y)/2/Math.PI+.5,P=f(y)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],P=o[y+4],C=Math.max(x,v,P),w=Math.min(x,v,P);C>.9&&w<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const y=new A,x=new A,v=new A,P=new A,C=new Et,w=new Et,R=new Et;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),C.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),P.copy(y).add(x).add(v).divideScalar(3);const L=m(P);_(C,M+0,y,L),_(w,M+2,x,L),_(R,M+4,v,L)}}function _(y,x,v,P){P<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.details)}}class Ki extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ki(t.radius,t.detail)}}const or=new A,ar=new A,_o=new A,cr=new Ze;class Zg extends xe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(mr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:f}=cr;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),cr.getNormal(_o),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,v=u[y],P=u[x],C=cr[h[y]],w=cr[h[x]],R=`${v}_${P}`,b=`${P}_${v}`;b in d&&d[b]?(_o.dot(d[b].normal)<=r&&(p.push(C.x,C.y,C.z),p.push(w.x,w.y,w.z)),d[b]=null):R in d||(d[R]={index0:l[y],index1:l[x],normal:_o.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];or.fromBufferAttribute(a,_),ar.fromBufferAttribute(a,m),p.push(or.x,or.y,or.z),p.push(ar.x,ar.y,ar.z)}this.setAttribute("position",new Zt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $n extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $n(t.radius,t.detail)}}class Ra extends Rs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ra(t.radius,t.detail)}}class Pa extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,p=new A,g=new Et;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const y=f+m,x=y,v=y+n+1,P=y+n+2,C=y+1;a.push(x,v,C),a.push(v,P,C)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xi extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const C=P/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-x),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const x=h[f][y+1],v=h[f][y],P=h[f+1][y],C=h[f+1][y+1];(f!==0||o>0)&&p.push(x,v,C),(f!==n-1||c<Math.PI)&&p.push(v,P,C)}this.setIndex(p),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pr extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class La extends xe{constructor(t=new Cs(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new Et;let h=new A;const u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),f()}function m(x){h=t.getPointAt(x/e,h);const v=o.normals[x],P=o.binormals[x];for(let C=0;C<=s;C++){const w=C/s*Math.PI*2,R=Math.sin(w),b=-Math.cos(w);c.x=b*v.x+R*P.x,c.y=b*v.y+R*P.y,c.z=b*v.z+R*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const P=(s+1)*(x-1)+(v-1),C=(s+1)*x+(v-1),w=(s+1)*x+v,R=(s+1)*(x-1)+v;g.push(P,C,R),g.push(C,w,R)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new La(new Jg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Da extends vi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new zt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ia extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qg extends Ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vo=new re,rl=new A,ol=new A;class ih{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(rl),ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ol),e.updateMatrixWorld(),vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const al=new re,ls=new A,xo=new A;class t0 extends ih{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),xo.copy(n.position),xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xo),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al)}}class Lr extends Ia{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new t0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e0 extends ih{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cl extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new e0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class n0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ll(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ll();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ll(){return performance.now()}const hl=new re;class i0{constructor(t,e,n=0,s=1/0){this.ray=new Ar(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(t,e=!0,n=[]){return la(t,this,n,e),n.sort(ul),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)la(t[s],this,n,e);return n.sort(ul),n}}function ul(i,t){return i.distance-t.distance}function la(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)la(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);const _n=[{key:"lai",name:"来路",en:"WHERE YOU COME FROM",sub:"看看别人怎样走过",act:"经历",color:"#FF8A3C",three:16747068,grass:16757628,rock:8014394,angle:180},{key:"cidi",name:"此地",en:"WHERE YOU STAND",sub:"看清你面对的条件",act:"条件",color:"#4DA3FF",three:5088255,grass:14674175,rock:5991308,angle:-90},{key:"cha",name:"岔路",en:"FORKED VIEWS",sub:"同一个问题，不同的走法",act:"分歧",color:"#FF4D6D",three:16731501,grass:16747122,rock:9189946,angle:0},{key:"yu",name:"遇见",en:"REAL PEOPLE",sub:"找到经历过它的人",act:"共鸣",color:"#FFD335",three:16765749,grass:16769674,rock:9202490,angle:135},{key:"wei",name:"未至",en:"NOT YET",sub:"还有你没想到的方向",act:"盲点",color:"#8CFF6B",three:9240427,grass:4153160,rock:2303548,angle:45},{key:"form",name:"成形",en:"BECOME",sub:"看见不同，形成自己",act:"整合",color:"#B98CFF",three:12160255,grass:15129855,rock:7035788,angle:0,center:!0}],Qe={};for(const i of _n)Qe[i.key]=i;const hn={radius:46,islandR:11,centerR:13.5},Ss=["lai","cidi","cha","wei"];function vs(i,t,e){return Math.max(t,Math.min(e,i))}function fn(i,t,e){return i+(t-i)*e}function s0(i){return 1-Math.pow(1-i,3)}function ha(i){return i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2}function r0(i){return 1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)}function sh(i){return i[Math.floor(Math.random()*i.length)]}function rh(i){return i*Math.PI/180}class oh{constructor(){this.list=[]}add(t,e,n,s){this.list.push({t:0,dur:t,onUpdate:e,onDone:n,ease:s||s0})}update(t){for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];n.t+=t;const s=vs(n.t/n.dur,0,1);n.onUpdate(n.ease(s)),s>=1&&(this.list.splice(e,1),n.onDone&&n.onDone())}}}function Sr(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function o0(){const i=new Uint8Array([70,160,235]),t=new Ig(i,3,1,va);return t.minFilter=Ue,t.magFilter=Ue,t.generateMipmaps=!1,t.needsUpdate=!0,t}const ah=o0(),tn=new Map;function mt(i,t){t=t||{};const e="T"+i+"_"+(t.emissive||0)+"_"+(t.ei||0);if(tn.has(e))return tn.get(e);const n=new Da({color:i,gradientMap:ah});return t.emissive&&(n.emissive=new zt(t.emissive),n.emissiveIntensity=t.ei!=null?t.ei:1),tn.set(e,n),n}function en(i,t,e){e=e||{};const n="G"+i+"_"+t+"_"+(e.transparent?1:0);if(tn.has(n))return tn.get(n);const s=new Xe({color:i});return s.toneMapped=!1,e.transparent&&(s.transparent=!0,s.opacity=t),tn.set(n,s),s}function dl(i){const t="B"+i;if(tn.has(t))return tn.get(t);const e=new Xe({color:i});return tn.set(t,e),e}function a0(i){const t="L"+i;if(tn.has(t))return tn.get(t);const e=new th({color:i});return tn.set(t,e),e}function ge(i,t,e){const n=new Zg(i.geometry,e??24),s=new Ng(n,a0(t??1316122));return i.add(s),i}const hs=new A;function Ke(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;hs.copy(t),hs[n]=0,hs.normalize();const l=.5*o/(o+a),h=1-hs.angleTo(i)/c;return Math.sign(hs[e])===1?h*l:a/(o+a)+l+l*(1-h)}class gn extends we{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new A,_=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Ke(g,c,"z","y",r,n),d[f+1]=1-Ke(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-Ke(g,c,"z","y",r,n),d[f+1]=1-Ke(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-Ke(g,c,"x","z",r,t),d[f+1]=Ke(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Ke(g,c,"x","z",r,t),d[f+1]=1-Ke(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Ke(g,c,"x","y",r,t),d[f+1]=1-Ke(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=Ke(g,c,"x","y",r,t),d[f+1]=1-Ke(g,c,"y","x",r,e);break}}}const ch=1316122;function Ua(i,t){t=t||{};const e=t.w||512,n=t.h||256,s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d");r.fillStyle=t.bg||"#fff8e7",r.fillRect(0,0,e,n),r.strokeStyle="#14151a",r.lineWidth=14,r.strokeRect(7,7,e-14,n-14),r.textAlign="center",r.textBaseline="middle";const o=Array.isArray(i)?i:[i];let a=n/2-(o.length-1)*(t.lineH||n/(o.length+1.2))/2;for(let l=0;l<o.length;l++){const h=o[l];r.fillStyle=l===0?t.color||"#14151a":t.subColor||"#6b6455",r.font=(l===0?"900 "+(t.mainSize||92):"700 "+(t.subSize||40))+'px "PingFang SC", "Microsoft YaHei", sans-serif',r.fillText(h,e/2,a),a+=t.lineH||n/(o.length+1.2)}const c=new eh(s);return c.colorSpace=Be,c.anisotropy=4,c}function bt(i,t,e,n,s){const r=new Jt(i,t);return e!=null&&r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function c0(i,t,e,n){const s=Sr(n||7),r=new Bt,o=bt(new de(i,i*.93,2.4,26),mt(t),0,0,0);o.receiveShadow=!0,r.add(ge(o));const a=bt(new de(i*.93,i*.16,8.5+s()*2,26),mt(e),0,-5.4,0);r.add(a);for(let c=0;c<3;c++){const l=.5+s()*.9,h=bt(new Ki(l,0),mt(e),(s()-.5)*i*1.5,-7-s()*4,(s()-.5)*i*1.5);r.add(h)}return r}function us(i,t,e){const n=Sr((e||3)*131+7);t=t||1;const s=new Bt,r=bt(new de(.16*t,.26*t,1.7*t,7),mt(8014386),0,.85*t,0);s.add(r);const o=[16758741,16752327,16765928];for(let a=0;a<3;a++){const c=bt(new $n((.75+n()*.45)*t,1),mt(o[a%3]),(n()-.5)*.9*t,(1.9+n()*.7)*t,(n()-.5)*.9*t);s.add(ge(c))}return s.position.copy(i),s}function lr(i,t,e){t=t||1;const n=new Bt,s=bt(new de(.12*t,.2*t,1.1*t,6),mt(5916210),0,.55*t,0);n.add(s);const r=bt(new nn(.85*t,1.5*t,7),mt(e),0,1.6*t,0),o=bt(new nn(.62*t,1.25*t,7),mt(e),0,2.5*t,0);return n.add(ge(r),ge(o)),n.position.copy(i),n}function pn(i,t,e){const n=new Bt,s=bt(new $n(.5*(t||1),1),mt(e||9426026),0,.3*(t||1),0);return n.add(ge(s)),n.position.copy(i),n}function l0(i,t){const e=new Bt;for(let n=0;n<3;n++){const s=bt(new nn(.07,.5,5),mt(t),Math.sin(n*2.1)*.12,.25,Math.cos(n*1.7)*.12);s.rotation.z=Math.sin(n*2.1)*.3,e.add(s)}return e.position.copy(i),e}function h0(i,t,e,n){t=t||1;const s=new Bt,r=bt(new gn(2.4*t,1.8*t,2.2*t,3,.12),mt(e),0,.9*t,0);s.add(ge(r));const o=bt(new nn(2.15*t,1.3*t,4),mt(n),0,2.4*t,0);o.rotation.y=Math.PI/4,s.add(ge(o));const a=bt(new gn(.6*t,1*t,.1,2,.05),mt(9067066),0,.5*t,1.12*t);s.add(a);const c=bt(new we(.55,.55,.06),en(16771488,1),.8*t,1.1*t,1.12*t);return s.add(c),s.position.copy(i),s}function yo(i,t,e,n,s){const r=new Bt,o=bt(new gn(t,e,n,2,.18),mt(16054015),0,e/2,0);r.add(ge(o));const a=Math.max(1,Math.floor(e/.9));for(let c=0;c<a;c++){const l=bt(new we(t*.72,.16,.05),en(s||5088255,1),0,.55+c*.9,n/2+.02);r.add(l);const h=l.clone();h.position.x=-0,h.rotation.y=Math.PI/2,h.position.z=0,h.position.y=.55+c*.9,h.position.x=t/2+.02,r.add(h)}return r.position.copy(i),r}function u0(i,t){t=t||1;const e=new Bt;for(const o of[-.8,.8])for(const a of[-.7,.7])e.add(bt(new de(.09*t,.11*t,1.1*t,6),mt(8018490),o*t,.55*t,a*t));const n=bt(new gn(2.6*t,1.4*t,2.2*t,3,.1),mt(14264426),0,1.75*t,0);e.add(ge(n));const s=bt(new nn(2.3*t,1.1*t,4),mt(4877194),0,3*t,0);s.rotation.y=Math.PI/4,e.add(ge(s));const r=bt(new xi(.16*t,8,8),en(16765749,1),0,1.15*t,1.2*t);return e.add(r),e.position.copy(i),e}function d0(i,t,e){const n=new Bt,s=bt(new de(.09,.11,2.6,6),mt(3817306),0,1.3,0);n.add(s);const r=Ua(t,Object.assign({w:512,h:256,mainSize:74,subSize:44},e)),o=new Jt(new we(2.9,1.5,.12),[mt(2303548),mt(2303548),mt(2303548),mt(2303548),new Xe({map:r}),mt(2303548)]);return o.position.set(0,2.9,0),o.castShadow=!0,n.add(ge(o,ch,1)),n.position.copy(i),n}function f0(i,t,e,n){const s=new Bt,r=bt(new de(.07,.09,1.7,6),mt(8018490),0,.85,0);s.add(r);const o=Ua(t,{w:420,h:170,mainSize:78,subSize:40}),a=new we(1.7,.72,.08),c=new Jt(a,[mt(e),mt(e),mt(e),mt(e),new Xe({map:o}),mt(e)]);return c.position.set(0,1.55,.05),c.castShadow=!0,s.add(ge(c,ch,1)),s.rotation.y=n,s.position.copy(i),s}function p0(i){const t=new Bt;for(let o=0;o<4;o++){const a=bt(new de(.09,.11,1.1,6),mt(6965810),Math.cos(o*Math.PI/2)*.28,.1,Math.sin(o*Math.PI/2)*.28);a.rotation.z=Math.cos(o*Math.PI/2)*1.35,a.rotation.x=Math.sin(o*Math.PI/2)*.5,t.add(a)}const e=bt(new Pr(.75,.1,6,12),mt(9079446),0,.06,0);e.rotation.x=Math.PI/2,e.castShadow=!1,t.add(e);const n=bt(new nn(.32,.85,7),en(16752717,1),0,.55,0);n.name="flame",t.add(n);const s=bt(new nn(.16,.5,6),en(16769674,1),0,.6,0);s.name="flame2",t.add(s);const r=new Lr(16752717,55,16,2);return r.position.set(0,1.4,0),r.name="firelight",t.add(r),t.position.copy(i),t}function m0(i,t,e,n){const s=new Bt,r=i.clone().add(t).multiplyScalar(.5);r.y-=Math.min(1.6,i.distanceTo(t)*.18);const o=new Cs(i,r,t),a=new Jt(new La(o,16,.025,5),mt(3817306));s.add(a);for(let c=1;c<e;c++){const l=o.getPoint(c/e),h=n[c%n.length],u=bt(new xi(.11,8,8),en(h,1),l.x,l.y-.12,l.z);u.name="bulb",s.add(u)}return s}function g0(i,t){const e=new Bt,n=bt(new Pr(1.7,.17,10,32),mt(2303548),0,2.1,0);e.add(ge(n));const s=new Xe({color:t,transparent:!0,opacity:0});s.toneMapped=!1,s.side=Je;const r=new Jt(new Ca(1.5,28),s);r.position.set(0,2.1,0),r.name="portalDisc",e.add(r);for(let a=0;a<5;a++){const c=a/5*Math.PI*2+.4,l=bt(new Ki(.22+a%2*.1,0),mt(3817308),Math.cos(c)*2.3,.18,Math.sin(c)*2.3);e.add(l)}const o=new Lr(t,0,14,2);return o.position.set(0,2.1,.6),o.name="portalLight",e.add(o),e.position.copy(i),e}function _0(i){const t=new Bt,e=bt(new de(2.5,2.9,.7,10),mt(16054015),0,.35,0);t.add(ge(e));const n=bt(new de(1.6,2.1,.5,10),mt(14674175),0,.9,0);t.add(ge(n));const s=bt(new $n(1.05,0),new Xe({color:8250367,transparent:!0,opacity:.92}),0,2.6,0);s.material.toneMapped=!1,s.name="crystal",t.add(ge(s,10482687,1));const r=bt(new $n(.55,0),en(15268863,1),0,2.6,0);r.name="crystalCore",t.add(r);for(let a=0;a<6;a++){const c=a/6*Math.PI*2,l=bt(new Ra(.16,0),en(10213375,1),Math.cos(c)*1.9,2.2+a%3*.5,Math.sin(c)*1.9);l.name="orbitStone",l.userData.orbitA=c,t.add(l)}const o=new Lr(8250367,30,22,2);return o.position.set(0,3.4,0),o.name="crystalLight",t.add(o),t.position.copy(i),t}function v0(i,t){const e=new Bt,n=bt(new de(.06,.08,3,6),mt(3817306),0,1.5,0);e.add(n);const s=new we(.06,.85,1.15),r=bt(s,mt(t),0,2.55,.62);return e.add(ge(r)),e.position.copy(i),e}function x0(i,t,e){const n=new Bt,s=i.clone().add(t).multiplyScalar(.5);s.y+=2.6;const r=new Cs(i,s,t),o=r.getLength(),a=Math.max(8,Math.round(o/1.15));for(let c=0;c<=a;c++){const l=c/a,h=r.getPoint(l),u=r.getTangent(l),d=bt(new we(1.5,.18,.72),mt(c%2===0?e:12159051),h.x,h.y,h.z);if(d.rotation.y=Math.atan2(u.x,u.z)+Math.PI/2,d.rotation.z=Math.sin(l*Math.PI)*.06,n.add(d),c%4===2){const p=bt(new de(.05,.06,1,5),mt(8018490),h.x,h.y+.5,h.z);n.add(p);const g=bt(new xi(.09,8,8),en(16765749,1),h.x,h.y+1.05,h.z);n.add(g)}}return n}function y0(i){const t=new Bt,e=bt(new de(.07,.09,2,6),mt(5916210),0,1,0);t.add(e);const n=bt(new we(1.5,.42,.07),mt(16731501),.55,1.8,0);n.rotation.z=-.35,t.add(ge(n));const s=bt(new we(1.5,.42,.07),mt(5088255),-.55,1.35,0);s.rotation.z=.35,t.add(ge(s));const r=bt(new nn(.16,.3,4),mt(16777215),1.32,1.96,0);r.rotation.z=-Math.PI/2-.35,t.add(r);const o=bt(new nn(.16,.3,4),mt(16777215),-1.32,1.2,0);return o.rotation.z=Math.PI/2+.35,t.add(o),t.position.copy(i),t}function ai(i,t,e){const n=new Bt,s=bt(new Ki(t||.5,0),mt(e||9079446),0,(t||.5)*.55,0);return n.add(ge(s)),n.position.copy(i),n}function ci(i){const t=new Bt,e=bt(new de(.42,.5,.14,7),mt(14274478),0,.07,0);return e.castShadow=!1,t.add(e),t.position.copy(i),t}function fl(i,t){const e=new Bt,n=bt(new de(.22,.22,1.7,8),mt(9068348),0,.22,0);return n.rotation.z=Math.PI/2,e.add(ge(n)),t&&(e.rotation.y=t),e.position.copy(i),e}function M0(){const i=new Bt,t=bt(new gn(1.05,1.2,.9,4,.2),mt(3042303),0,.95,0);i.add(ge(t));const e=bt(new gn(.72,.5,.1,3,.08),en(16765749,1),0,1.05,.46);e.name="face",i.add(e);const n=bt(new gn(.1,.22,.04,2,.03),dl(1316122),-.16,1.12,.52),s=n.clone();s.position.x=.16,n.name="eyeL",s.name="eyeR",i.add(n,s);const r=bt(new gn(.16,.05,.04,2,.02),dl(1316122),0,.95,.52);r.name="mouth",i.add(r);const o=bt(new de(.035,.05,.34,6),mt(4885050),.12,1.78,0);o.rotation.z=-.3,o.name="stem",i.add(o);const a=new xi(.16,8,8);a.scale(1,.55,.7);const c=bt(a,en(8190797,1),.24,1.96,0);c.name="sprout",i.add(c);const l=bt(new gn(.16,.5,.16,2,.07),mt(3042303),-.68,.95,0),h=l.clone();h.position.x=.68,l.name="armL",h.name="armR",i.add(l,h);const u=bt(new gn(.34,.16,.44,2,.06),mt(1851296),-.26,.08,.08),d=u.clone();d.position.x=.26,i.add(u,d);const p=bt(new nn(.14,.4,6),en(8190797,1),0,.28,-.3);p.rotation.x=Math.PI,p.name="jet",p.visible=!1,i.add(p);const g=new Lr(8190797,8,6,2);return g.position.set(0,1.6,0),g.name="bloomyLight",i.add(g),i}const Oe=1.2;function Wn(i){if(i.center)return new A(0,0,0);const t=rh(i.angle);return new A(Math.cos(t)*hn.radius,0,Math.sin(t)*hn.radius)}function S0(){const i=["varying vec3 vPos;","void main() {","  vPos = position;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),t=["varying vec3 vPos;","void main() {","  float h = normalize(vPos).y;","  vec3 top = vec3(0.045, 0.05, 0.16);","  vec3 mid = vec3(0.12, 0.10, 0.30);","  vec3 low = vec3(0.30, 0.16, 0.38);","  vec3 col = h > 0.0 ? mix(mid, top, pow(h, 0.72)) : mix(mid, low, clamp(-h * 2.4, 0.0, 1.0));","  gl_FragColor = vec4(col, 1.0);","}"].join(`
`),e=new Un({vertexShader:i,fragmentShader:t,side:Ie,depthWrite:!1});return e.fog=!1,new Jt(new xi(380,24,18),e)}function b0(){const t=new Float32Array(1860);for(let s=0;s<620;s++){const r=Math.random()*Math.PI*2,o=.04+Math.random()*1.45,a=300+Math.random()*60;t[s*3]=Math.cos(r)*Math.cos(o)*a,t[s*3+1]=Math.sin(o)*a,t[s*3+2]=Math.sin(r)*Math.cos(o)*a}const e=new xe;e.setAttribute("position",new qe(t,3));const n=new Rr({color:13621503,size:1.5,sizeAttenuation:!1,transparent:!0,opacity:.8});return n.toneMapped=!1,n.fog=!1,new Ta(e,n)}function E0(){const i=new _i(420,420,56,56);i.rotateX(-Math.PI/2);const t=new Da({color:2371708,gradientMap:ah,transparent:!0,opacity:.94}),e=new Jt(i,t);return e.position.y=-.4,e.receiveShadow=!0,e.userData.base=i.attributes.position.array.slice(),e}function w0(){const i=new Bt,t=new Jt(new de(2.6,2.6,.22,24),new Da({color:4155080,transparent:!0,opacity:.95}));t.position.y=.11,t.receiveShadow=!0,i.add(t);for(let e=0;e<10;e++){const n=e/10*Math.PI*2,s=new Jt(new Ki(.22+e%3*.08,0),mt(9079446));s.position.set(Math.cos(n)*2.78,.16,Math.sin(n)*2.78),s.castShadow=!0,i.add(s)}return i}class T0{constructor(){this.scene=new Dg,this.scene.fog=new wa(1448510,.0038),this.tweens=new oh,this.interactives=[],this.anchors={},this.updaters=[],this.islands={},this.energy=0,this.portalAwake=!1,this.portalGlow=0,this.locked={cha:!0,yu:!0,wei:!0},this.time=0,this.effects=null,this.scene.add(S0()),this.stars=b0(),this.scene.add(this.stars),this.water=E0(),this.scene.add(this.water),this.clouds=this.makeClouds(),this.scene.add(this.clouds),this.buildIslands(),this.buildMainland(),this.buildPaths(),this.buildBridges(),this.buildWaterfalls(),this.buildEngravedWalls(),this.buildSakuraFrame(),this.buildMist(),this.setupUpdaters()}setEffects(t){this.effects=t}makeClouds(){const t=new Bt,e=[[70,24,-40,1.6],[-90,30,-60,2.1],[40,27,95,1.8],[-55,22,75,1.3],[110,33,55,1.5],[0,36,-120,2.4]];for(let n=0;n<e.length;n++){const s=e[n],r=new Bt;for(let o=0;o<4;o++){const a=(.8+o%3*.5)*s[3],c=new Jt(new $n(a,1),mt(15922431));c.position.set((o-1.5)*a*.9,o%2*.4,(o%2-.5)*a),c.scale.y=.62,r.add(c)}r.position.set(s[0],s[1],s[2]),t.add(r)}return t}buildIslands(){for(const t of _n){const e=Wn(t),n=new Bt,s=c0(t.center?hn.centerR:hn.islandR,t.grass,t.rock,t.angle+9);n.add(s),this.decorate(t,n),n.position.set(e.x,-36,e.z);const r=new A(-e.x,0,-e.z);let o;t.center?o=new A(0,Oe,4.5):(r.normalize(),o=new A(e.x+r.x*5.2,Oe,e.z+r.z*5.2));const a=[];if(t.center)for(let c=0;c<3;c++){const l=c/3*Math.PI*2+.5;a.push(new A(Math.cos(l)*4.6,Oe+.2,Math.sin(l)*4.6))}else{const c=new A(-e.x,0,-e.z).normalize(),l=new A(-c.z,0,c.x);a.push(new A(e.x+c.x*4.2,Oe+.2,e.z+c.z*4.2)),a.push(new A(e.x+c.x*2+l.x*3.6,Oe+.2,e.z+c.z*2+l.z*3.6)),a.push(new A(e.x+c.x*2-l.x*3.6,Oe+.2,e.z+c.z*2-l.z*3.6))}this.anchors[t.key]={land:o,label:new A(e.x,9.4,e.z),center:new A(e.x,Oe+1.6,e.z),spots:a},n.traverse(c=>{c.isMesh&&(c.userData.region=t.key,this.interactives.push(c))}),this.islands[t.key]=n,this.scene.add(n)}}spreadTufts(t,e,n,s){const r=Sr(e.angle+100),o=e.key==="wei"?5204810:e.key==="cidi"?13623551:e.key==="yu"?15255914:e.key==="cha"?16758170:e.key==="form"?14207231:10149486,a=(e.center?1.25:1)*(hn.islandR-3.4);for(let c=0;c<s;c++){const l=r()*Math.PI*2,h=1.8+r()*(a-1.8);t.add(l0(new A(Math.cos(l)*h,n,Math.sin(l)*h),o))}}addFireflies(t,e,n,s,r,o,a){const c=new Float32Array(r*3),l=new Float32Array(r);for(let p=0;p<r;p++)c[p*3]=n+(Math.random()-.5)*o,c[p*3+1]=e+.7+Math.random()*2.6,c[p*3+2]=s+(Math.random()-.5)*o,l[p]=Math.random()*Math.PI*2;const h=new xe;h.setAttribute("position",new qe(c,3));const u=new Rr({color:a,size:.17,transparent:!0,opacity:.55,depthWrite:!1});u.toneMapped=!1;const d=new Ta(h,u);d.userData.base=c.slice(),d.userData.phases=l,t.add(d),this.fireflies=d}decorate(t,e){const n=Oe,s=(r,o,a)=>new A(r,o,a);if(t.key==="lai"){e.add(f0(s(4.8,n,-3.4),["来路","看看别人怎样走过"],16747068,-.55)),e.add(h0(s(-3.4,n,-2.4),1.15,16774108,15231562)),e.add(us(s(-6.3,n,1.6),1.25,1)),e.add(us(s(3.4,n,4.2),1.05,2)),e.add(us(s(-1.4,n,5.4),1.5,3)),e.add(pn(s(6.1,n,1),1.15,16763299)),e.add(pn(s(-6.5,n,-3.6),.9,16763299));for(let r=0;r<6;r++){const o=r/5;e.add(ci(s(fn(4.4,-2.2,o),n,fn(-2.8,-1.6,o))))}this.spreadTufts(e,t,n,7)}else if(t.key==="cidi"){e.add(yo(s(-3.8,n,-2.4),2.2,3.4,2.2,5088255)),e.add(yo(s(1.6,n,-3.8),2.6,5.2,2.4,8250367)),e.add(yo(s(4.4,n,1.6),2,2.3,2,5088255)),e.add(d0(s(-4.6,n,3.6),["此地","看清你面对的条件"])),e.add(pn(s(5.9,n,-2.4),1.1,12570879)),e.add(pn(s(-6.2,n,.8),.95,12570879));for(let r=0;r<6;r++){const o=r/5;e.add(ci(s(fn(.2,.8,o),n,fn(4.4,1.2,o))))}this.spreadTufts(e,t,n,6)}else if(t.key==="cha"){e.add(y0(s(.2,n,.6))),e.add(ai(s(-3.9,n,2.7),.95,10502208)),e.add(ai(s(3.6,n,3.1),.7,12080453)),e.add(ai(s(4.9,n,-2.6),.55,10502208)),e.add(pn(s(5.7,n,.9),1.1,16751226)),e.add(pn(s(-5.9,n,-2.2),.9,16751226));for(let r=0;r<5;r++){const o=r/4;e.add(ci(s(fn(-4.6,-1,o),n,fn(-.2,2.7,o)))),e.add(ci(s(fn(-4.6,-1,o),n,fn(.2,-2.7,o))))}this.spreadTufts(e,t,n,6)}else if(t.key==="yu"){const r=w0();r.position.set(-.6,n,-1.8),e.add(r),e.add(u0(s(-4.4,n,-2.8),1.1));const o=p0(s(1.6,n,2.6));e.add(o),this.campfireGroup=o,e.add(fl(s(2.9,n,3.4),.6)),e.add(fl(s(.1,n,4.1),-.35));const a=new Jt(new de(.07,.09,2.6,6),mt(3817306));a.position.set(-4.8,n+1.3,.9),a.castShadow=!0;const c=a.clone();c.position.set(4.6,n+1.3,-3.1),e.add(a,c);const l=m0(s(-4.8,n+2.55,.9),s(4.6,n+2.55,-3.1),7,[16765749,16747068,16731501]),h=[];l.traverse(u=>{u.name==="bulb"&&h.push(u)}),this.lanternBulbs=h,e.add(l),e.add(pn(s(6.2,n,-.8),1.1,13936970));for(let u=0;u<5;u++){const d=u/4;e.add(ci(s(fn(3.4,.6,d),n,fn(-3.2,1.4,d))))}this.spreadTufts(e,t,n,6)}else if(t.key==="wei"){e.add(lr(s(4.6,n,3.4),1.5,3033658)),e.add(lr(s(-4.9,n,2.3),1.2,3033658)),e.add(lr(s(2.9,n,-4.7),1.7,2374960)),e.add(lr(s(-2.5,n,4.9),1.35,3033658));const r=g0(s(.4,n,.4),9240427);e.add(r),this.portalGroup=r,this.addFireflies(e,n,.4,.4,26,7.5,9240427),e.add(ai(s(3.2,n,1.8),.6,3817308)),e.add(ai(s(-2.8,n,-1.9),.75,3817308)),e.add(ai(s(1.7,n,4.6),.5,3817308)),this.spreadTufts(e,t,n,6)}else if(t.key==="form"){const r=_0(s(0,n,0));e.add(r),this.crystalGroup=r;for(const o of _n){if(o.center)continue;const a=rh(o.angle);e.add(v0(s(Math.cos(a)*9.8,n,Math.sin(a)*9.8),o.three))}for(let o=0;o<10;o++){const a=o/10*Math.PI*2+.31;e.add(ci(s(Math.cos(a)*5.5,n,Math.sin(a)*5.5)))}e.add(pn(s(6.8,n,2.4),1.2,13351167)),e.add(pn(s(-6.4,n,-2.8),1,13351167)),e.add(pn(s(1.8,n,-7),.9,13351167)),this.spreadTufts(e,t,n,8)}}buildMainland(){const t=new Bt,e=new Jt(new de(62,57.5,2.6,42),mt(6254672));e.position.y=-2.3,e.receiveShadow=!0,t.add(e);const n=new Jt(new de(57.5,26,12,42),mt(4471378));n.position.y=-8.6,t.add(n);for(const r of _n){const o=Wn(r),a=r.center?16.5:15.2,c=new Jt(new de(a,a,.18,36),mt(r.center?9404344:r.grass));c.position.set(o.x,-1.02,o.z),c.receiveShadow=!0,t.add(c)}const s=Sr(20260915);for(let r=0;r<14;r++){const o=r/14*Math.PI*2+s()*.3,a=59+s()*3;t.add(ai(new A(Math.cos(o)*a,-1.4,Math.sin(o)*a),.6+s()*1.1,4471378))}this.scene.add(t)}buildPaths(){const t={};for(const o of _n)t[o.key]=Wn(o);const e=[["lai","cidi"],["cidi","cha"],["cha","wei"],["wei","yu"],["yu","lai"]],n=new Bt;for(const o of e){const a=t[o[0]],c=t[o[1]],l=a.distanceTo(c),h=Math.max(2,Math.floor(l/2.3));for(let u=1;u<h;u++){const d=u/h;n.add(ci(new A(a.x+(c.x-a.x)*d,-.84,a.z+(c.z-a.z)*d)))}}const s=[["cidi","cha"],["yu","lai"]],r=mt(9079446);for(const o of s){const a=t[o[0]],c=t[o[1]],l=(a.x+c.x)/2,h=(a.z+c.z)/2,u=new A(c.x-a.x,0,c.z-a.z).normalize(),d=new A(-u.z,0,u.x);for(const g of[-1,1]){const _=new Jt(new we(.55,3.1,.55),r);_.position.set(l+d.x*1.7*g,.62,h+d.z*1.7*g),_.castShadow=!0,n.add(_)}const p=new Jt(new we(4.3,.5,.7),r);p.position.set(l,2.45,h),p.rotation.y=Math.atan2(-u.x,-u.z),p.castShadow=!0,n.add(p)}this.scene.add(n)}makeFallTexture(){const t=document.createElement("canvas");t.width=32,t.height=128;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,128);n.addColorStop(0,"rgba(235,247,255,0.95)"),n.addColorStop(.55,"rgba(150,214,255,0.8)"),n.addColorStop(1,"rgba(90,150,230,0.12)"),e.fillStyle=n,e.fillRect(0,0,32,128);const s=new eh(t);return s.colorSpace=Be,s.wrapT=_r,s}buildWaterfalls(){this.fallMats=[];const t=[{key:"lai",a:.55,drop:2},{key:"cha",a:-.65,drop:2.2},{key:"wei",a:2.55,drop:2.1},{key:"cidi",a:.95,drop:1.8}],e=new Bt;for(const n of t){const s=Wn(Qe[n.key]),r=new A(-s.x,0,-s.z).normalize(),o=Math.cos(n.a),a=Math.sin(n.a),c=new A(r.x*o-r.z*a,0,r.x*a+r.z*o),l=new A(s.x+c.x*(hn.islandR-.8),0,s.z+c.z*(hn.islandR-.8)),h=n.drop,u=new Xe({map:this.makeFallTexture(),transparent:!0,opacity:.85,side:Je,depthWrite:!1}),d=new Jt(new _i(2.1,h),u);d.position.set(l.x,1.05-h/2,l.z),d.rotation.y=Math.atan2(s.x,s.z),e.add(d);const p=new Jt(new de(1.25,1.55,.14,18),new Xe({color:14676735,transparent:!0,opacity:.55,depthWrite:!1}));p.position.set(l.x,1.1-h,l.z),e.add(p),this.fallMats.push(u)}this.scene.add(e)}makeEngravedWall(t,e,n,s,r){const o=new Bt,a=new Jt(new we(e,n,.5),mt(3945800));a.position.y=n/2,a.castShadow=!0,o.add(a);const c=Ua(t,{bg:"#3c3548",color:"#ffe9a8",subColor:"#9ad0ff",mainSize:60,subSize:44,w:512,h:192}),l=new Jt(new _i(e*.94,n*.86),new Xe({map:c}));return l.position.set(0,n/2,.28),o.add(l),o.position.copy(s),o.rotation.y=r,o}buildEngravedWalls(){const t=new Bt;t.add(this.makeEngravedWall(["SAME QUESTION","MORE PERSPECTIVES"],8.4,3,new A(14,-.9,-13),.55)),t.add(this.makeEngravedWall(["ALL EXPERIENCES","MATTER"],7.2,2.8,new A(-31,-.9,-10),1.25)),t.add(this.makeEngravedWall(["DIFFERENT VIEWS","A WIDER YOU"],7.2,2.8,new A(31,-.9,10),-1.15)),this.scene.add(t)}buildSakuraFrame(){const t=Wn(Qe.lai),e=new A(-t.x,0,-t.z).normalize(),n=new A(t.x+e.x*7.4,Oe,t.z+e.z*7.4),s=new A(-e.z,0,e.x),r=new Bt;r.add(us(new A(n.x+s.x*2.5,Oe,n.z+s.z*2.5),1.25,11)),r.add(us(new A(n.x-s.x*2.5,Oe,n.z-s.z*2.5),1.25,23));const o=new Jt(new we(.4,.4,5.6),mt(13212251));o.position.set(n.x,Oe+2.15,n.z),o.rotation.y=Math.atan2(s.x,s.z),o.castShadow=!0,r.add(o),this.scene.add(r)}makeMistPuff(t,e,n,s,r,o){const a=new Jt(new $n(s,1),new Xe({color:r,transparent:!0,opacity:o,depthWrite:!1}));return a.position.set(t,e,n),a.userData.drift=Math.random()*Math.PI*2,a}buildMist(){this.mistGroups={};const t=[{key:"wei",color:5204826,n:4,spread:6.4,s:3.4},{key:"cha",color:10068152,n:3,spread:5.6,s:3},{key:"yu",color:10068152,n:3,spread:5.6,s:3}];for(const e of t){const n=Wn(Qe[e.key]),s=new Bt;for(let r=0;r<e.n;r++){const o=r/e.n*Math.PI*2,a=n.x+Math.cos(o)*e.spread*(.5+r%2*.35),c=n.z+Math.sin(o)*e.spread*(.5+r%2*.35);s.add(this.makeMistPuff(a,1.6+r%3*1.1,c,e.s*(.75+r%2*.3),e.color,.42))}s.visible=!1,this.scene.add(s),this.mistGroups[e.key]=s}}isLocked(t){return this.locked[t]===!0}setUnlocked(t,e){const n=!this.locked[t];if(this.locked[t]=!e,e&&!n){const s=this.mistGroups[t];if(s&&s.visible){const r=[];s.traverse(o=>{o.isMesh&&r.push(o)}),this.tweens.add(1.3,o=>{for(const a of r)a.material.opacity=.42*(1-o),a.scale.setScalar(1+o*.7)},()=>{s.visible=!1},ha)}if(this.effects){const r=Wn(Qe[t]);this.effects.spawnRipple(new A(r.x,1.1,r.z),16765286,2.2)}return!0}return!1}applyLocks(){for(const t in this.mistGroups){const e=this.mistGroups[t];e.visible=this.locked[t]===!0,e.visible&&e.traverse(n=>{n.isMesh&&(n.material.opacity=.42,n.scale.setScalar(1))})}}buildBridges(){this.bridgeGroup=new Bt;for(const t of _n){if(t.center)continue;const e=Wn(t),n=new A(-e.x,0,-e.z).normalize(),s=new A(n.x*(hn.centerR-1.2),Oe+.05,n.z*(hn.centerR-1.2)),r=new A(e.x-n.x*(hn.islandR-1.6),Oe+.05,e.z-n.z*(hn.islandR-1.6)),o=x0(s,r,t.key==="wei"?6974072:13212251);o.traverse(a=>{a.isMesh&&(a.userData.region=t.key,this.interactives.push(a))}),this.bridgeGroup.add(o)}this.scene.add(this.bridgeGroup)}rise(t){const e=["form","lai","cidi","cha","yu","wei"];let n=e.length;e.forEach((s,r)=>{const o=this.islands[s];setTimeout(()=>{this.tweens.add(1.6,a=>{o.position.y=-36*(1-a)},()=>{o.position.y=0,this.effects&&this.effects.spawnRipple(new A(o.position.x,-.28,o.position.z),10213375,2.4),n--,n===0&&t&&t()},ha)},140+r*300)})}setEnergy(t){this.energy=vs(t,0,1)}awakenPortal(){return this.portalAwake?!1:(this.portalAwake=!0,this.setUnlocked("wei",!0),this.tweens.add(1.6,t=>{this.portalGlow=t}),!0)}setupUpdaters(){this.updaters.push(c=>{const l=this.water.geometry.attributes.position.array,h=this.water.userData.base;for(let u=0;u<l.length;u+=3){const d=h[u],p=h[u+2];l[u+1]=Math.sin(d*.09+c*1.1)*.16+Math.cos(p*.11+c*.7)*.12}this.water.geometry.attributes.position.needsUpdate=!0}),this.updaters.push(c=>{this.stars.material.opacity=.72+Math.sin(c*.7)*.14,this.clouds.rotation.y=c*.006});const t=this.crystalGroup;if(t){const c=t.getObjectByName("crystal"),l=t.getObjectByName("crystalCore"),h=t.getObjectByName("crystalLight"),u=[];t.traverse(d=>{d.name==="orbitStone"&&u.push(d)}),this.updaters.push(d=>{c.rotation.y=d*.5,c.position.y=2.6+Math.sin(d*1.2)*.12,l.position.y=c.position.y,l.rotation.y=-d*.8,h.intensity=8+this.energy*55+Math.sin(d*2.4)*(3+this.energy*8);const p=1+this.energy*.3+Math.sin(d*2.4)*.02;c.scale.set(p,p*(1+this.energy*.12),p);for(let g=0;g<u.length;g++){const _=u[g],m=_.userData.orbitA+d*(.4+this.energy*.5);_.position.set(Math.cos(m)*1.9,2.2+Math.sin(d*1.5+m)*.3+g%3*.5,Math.sin(m)*1.9)}})}const e=this.portalGroup;if(e){const c=e.getObjectByName("portalDisc"),l=e.getObjectByName("portalLight");this.updaters.push(h=>{c.rotation.z=h*.3;const u=this.portalGlow;c.material.opacity=(.62+Math.sin(h*2.2)*.16)*u,l.intensity=(34+Math.sin(h*2.2)*10)*u})}const n=this.campfireGroup;if(n){const c=n.getObjectByName("flame"),l=n.getObjectByName("flame2"),h=n.getObjectByName("firelight");this.updaters.push(u=>{const d=1+Math.sin(u*11)*.12+Math.sin(u*23.7)*.07;c.scale.set(d,1+Math.sin(u*9.3)*.18,d),l.scale.setScalar(1+Math.sin(u*13.1)*.2),h.intensity=46+Math.sin(u*12.7)*10})}const s=this.lanternBulbs;s&&s.length&&this.updaters.push(c=>{for(let l=0;l<s.length;l++)s[l].scale.setScalar(.9+Math.sin(c*3+l*1.4)*.12)});const r=this.fireflies;r&&this.updaters.push(c=>{const l=r.geometry.attributes.position.array,h=r.userData.base,u=r.userData.phases;for(let d=0;d<u.length;d++)l[d*3]=h[d*3]+Math.sin(c*.7+u[d])*.6,l[d*3+1]=h[d*3+1]+Math.sin(c*1.3+u[d]*2)*.45,l[d*3+2]=h[d*3+2]+Math.cos(c*.6+u[d])*.6;r.geometry.attributes.position.needsUpdate=!0,r.material.opacity=.5+Math.sin(c*2.8)*.15+this.portalGlow*.35});const o=this.fallMats,a=this.mistGroups;this.updaters.push(c=>{if(o)for(let l=0;l<o.length;l++)o[l].map.offset.y=-(c*(.55+l*.09))%1;for(const l in a){const h=a[l];if(h.visible)for(const u of h.children)u.position.y+=Math.sin(c*.6+u.userData.drift)*.0035,u.rotation.y=c*.08+u.userData.drift}})}update(t){this.time+=t,this.tweens.update(t);for(let e=0;e<this.updaters.length;e++)this.updaters[e](this.time)}}class A0{constructor(t,e){this.camera=t,this.dom=e,this.target=new A(0,2,0),this.dTarget=this.target.clone(),this.theta=.85,this.phi=.98,this.radius=62,this.dTheta=this.theta,this.dPhi=this.phi,this.dRadius=this.radius,this.def={theta:.85,phi:.98,radius:62},this.lim={phiMin:.35,phiMax:1.12,rMin:24,rMax:95},this.didDrag=!1,this.pointers=new Map,this.pinchDist=0,this.enabled=!0,this._down=null;const n=e;n.style.touchAction="none",n.addEventListener("pointerdown",s=>this._onDown(s)),n.addEventListener("pointermove",s=>this._onMove(s)),n.addEventListener("pointerup",s=>this._onUp(s)),n.addEventListener("pointercancel",s=>this._onUp(s)),n.addEventListener("wheel",s=>this._onWheel(s),{passive:!1}),n.addEventListener("dblclick",()=>this.reset())}clampAll(){this.dPhi=vs(this.dPhi,this.lim.phiMin,this.lim.phiMax),this.dRadius=vs(this.dRadius,this.lim.rMin,this.lim.rMax)}reset(){this.dTheta=this.def.theta,this.dPhi=this.def.phi,this.dRadius=this.def.radius,this.dTarget.set(0,2,0)}focusOn(t,e,n){this.dTarget.set(t,2.5,e),n&&(this.dRadius=vs(n,this.lim.rMin,this.lim.rMax))}_onDown(t){if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this._down={x:t.clientX,y:t.clientY},this.didDrag=!1,this.pointers.size===2){const e=Array.from(this.pointers.values());this.pinchDist=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}}_onMove(t){if(!this.enabled||!this.pointers.has(t.pointerId))return;const e=this.pointers.get(t.pointerId),n=t.clientX-e.x,s=t.clientY-e.y;if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===2){const r=Array.from(this.pointers.values()),o=Math.hypot(r[0].x-r[1].x,r[0].y-r[1].y);this.pinchDist>0&&(this.dRadius*=this.pinchDist/o,this.clampAll()),this.pinchDist=o,this.didDrag=!0;return}Math.abs(t.clientX-this._down.x)+Math.abs(t.clientY-this._down.y)>6&&(this.didDrag=!0),this.didDrag&&(this.dTheta-=n*.0052,this.dPhi-=s*.0042,this.clampAll())}_onUp(t){this.pointers.delete(t.pointerId),this.pointers.size<2&&(this.pinchDist=0),this._down=null}_onWheel(t){t.preventDefault(),this.dRadius*=1+t.deltaY*.0011,this.clampAll()}update(t){const e=1-Math.exp(-t*6);this.theta+=(this.dTheta-this.theta)*e,this.phi+=(this.dPhi-this.phi)*e,this.radius+=(this.dRadius-this.radius)*e,this.target.lerp(this.dTarget,e);const n=Math.sin(this.phi);this.camera.position.set(this.target.x+this.radius*n*Math.sin(this.theta),this.target.y+this.radius*Math.cos(this.phi),this.target.z+this.radius*n*Math.cos(this.theta)),this.camera.lookAt(this.target)}}class C0{constructor(t,e){this.canvas=t,this.universe=e,this.renderer=new Lg({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bl,this.renderer.toneMapping=wl,this.renderer.toneMappingExposure=1.08,this.scene=e.scene,this.camera=new Ve(46,window.innerWidth/window.innerHeight,.1,900),this.rig=new A0(this.camera,t),this.raycaster=new i0,this.pointer=new Et(-10,-10),this.hovered=null,this.labels=[],this.frameHooks=[],this.clickHook=null,this.hoverHook=null,this.clock=new n0,this.running=!1,this.setupLights(),this.setupPointer(),window.addEventListener("resize",()=>this.onResize())}setupLights(){const t=new Qg(12570879,3813205,.9);this.scene.add(t);const e=new cl(16773848,2.3);e.position.set(42,62,30),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-75,e.shadow.camera.right=75,e.shadow.camera.top=75,e.shadow.camera.bottom=-75,e.shadow.camera.near=10,e.shadow.camera.far=220,e.shadow.bias=-4e-4,this.scene.add(e);const n=new cl(8250367,.5);n.position.set(-40,30,-50),this.scene.add(n)}setupPointer(){const t=this.canvas;t.addEventListener("pointermove",e=>{const n=t.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1}),t.addEventListener("pointerleave",()=>{this.pointer.set(-10,-10)}),t.addEventListener("pointerup",e=>{if(this.rig.didDrag)return;const n=t.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1;const s=this.pick();s&&this.clickHook&&this.clickHook(s)})}pick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=this.raycaster.intersectObjects(this.universe.interactives,!1);return t.length>0&&t[0].object.userData.region||null}onClickRegion(t){this.clickHook=t}onHoverRegion(t){this.hoverHook=t}onFrame(t){this.frameHooks.push(t)}addLabel(t,e){const n=e&&e.clone?e.clone():new A(e.x,e.y||0,e.z),s={el:t,pos:n};return this.labels.push(s),s}removeLabel(t){const e=this.labels.indexOf(t);e!==-1&&this.labels.splice(e,1)}updateLabels(){const t=window.innerWidth,e=window.innerHeight,n=new A;for(let s=0;s<this.labels.length;s++){const r=this.labels[s];if(n.copy(r.pos).project(this.camera),n.z>1){r.el.style.display="none";continue}r.el.style.display="",r.el.style.left=(n.x*.5+.5)*t+"px",r.el.style.top=(-n.y*.5+.5)*e+"px"}}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}start(){if(this.running)return;this.running=!0;const t=()=>{if(!this.running)return;requestAnimationFrame(t);const e=Math.min(this.clock.getDelta(),.05);for(let s=0;s<this.frameHooks.length;s++)this.frameHooks[s](e);this.universe.update(e),this.rig.update(e);const n=this.pick();n!==this.hovered&&(this.hovered=n,this.canvas.style.cursor=n?"pointer":"grab",this.hoverHook&&this.hoverHook(n)),this.updateLabels(),this.renderer.render(this.scene,this.camera)};requestAnimationFrame(t)}}class R0{constructor(t){this.group=new Bt,t.add(this.group),this.ripples=[],this.bursts=[]}spawnRipple(t,e,n){n=n||1;const s=new Pa(.9,1.06,40),r=new Xe({color:e??8250367,transparent:!0,opacity:.75,side:Je});r.toneMapped=!1;const o=new Jt(s,r);o.rotation.x=-Math.PI/2,o.position.set(t.x,t.y==null?-.3:t.y,t.z),o.userData={life:0,dur:1.6,max:(15+Math.random()*6)*n},this.group.add(o),this.ripples.push(o)}spawnBurst(t,e,n,s,r){n=n||26,s=s||5;const o=new Float32Array(n*3),a=[];for(let u=0;u<n;u++){o[u*3]=t.x,o[u*3+1]=t.y,o[u*3+2]=t.z;const d=Math.random()*Math.PI*2,p=Math.random()*s;a.push(new A(Math.cos(d)*p,(r??3.5)+Math.random()*2.5,Math.sin(d)*p))}const c=new xe;c.setAttribute("position",new qe(o,3));const l=new Rr({color:e??8190797,size:.22,transparent:!0,opacity:1,depthWrite:!1});l.toneMapped=!1;const h=new Ta(c,l);h.userData={life:0,dur:1.3,vels:a},this.group.add(h),this.bursts.push(h)}update(t){for(let e=this.ripples.length-1;e>=0;e--){const n=this.ripples[e];n.userData.life+=t;const s=n.userData.life/n.userData.dur;if(s>=1){this.group.remove(n),n.geometry.dispose(),n.material.dispose(),this.ripples.splice(e,1);continue}const r=.4+s*n.userData.max;n.scale.set(r,r,1),n.material.opacity=.75*(1-s)}for(let e=this.bursts.length-1;e>=0;e--){const n=this.bursts[e];n.userData.life+=t;const s=n.userData.life/n.userData.dur;if(s>=1){this.group.remove(n),n.geometry.dispose(),n.material.dispose(),this.bursts.splice(e,1);continue}const r=n.geometry.attributes.position.array,o=n.userData.vels;for(let a=0;a<o.length;a++)o[a].y-=5.5*t,r[a*3]+=o[a].x*t,r[a*3+1]+=o[a].y*t,r[a*3+2]+=o[a].z*t;n.geometry.attributes.position.needsUpdate=!0,n.material.opacity=1-s}}}const P0={hello:["我是Bloomy，陪你逛逛这个宇宙。","别急，我们慢慢看。","这里没有标准答案，只有不同的看见。"],arrive_lai:["这里是来路。看看别人走过的路。","每段经历都是一块路标。","先听听他们的故事吧。"],arrive_cidi:["此地。先看清你脚下的条件。","条件不会说谎，地图在这里。","把现实看仔细，是出发的资格。"],arrive_cha:["岔路到了。同一个问题，有人往左，有人往右。","分歧不是坏事，它是世界的另一面。","两种走法都摆着，不用急着选。"],arrive_yu:["篝火点着了，坐下来听听。","真实的人，比观点更暖。","遇见他者，是理解的开始。"],arrive_wei:["传送门后面，是你没想到的方向。","盲点被照亮的时候，别怕。","这里有点暗，但值得看。"],arrive_form:["中央岛。把你的看见放在一起试试。","轮到你了，写下你自己的答案。","水晶在等你的成形。"],collect:["收好了，放进你的背包。","这张卡会留在你的宇宙里。","不错的一站。"],compare:["把它们放在一起看，像两盏灯。","对照会让差异自己说话。","你开始看见不同了。"],portal:["传送门亮了！因为你把三条路都走过了。","未至岛为你打开。","准备好了，就去看看盲点吧。"],form_done:["成形了。这个答案是你的，不是世界的。","看见不同，然后形成自己。","为你的答案，轻轻鼓掌。"],waiting:["我在这里等你。","不着急，宇宙不关门。"],locked:["这扇门还没亮，再多走一条路试试。","先去来路、此地、岔路各看一眼，它会为你点亮。"]};class L0{constructor(){this.group=M0(),this.tweens=new oh,this.stateName="idle",this.time=0,this.blinkTimer=2+Math.random()*3,this.baseY=this.group.position.y,this.onSay=null,this.lastLineKey="",this.flying=!1}place(t){this.group.position.copy(t),this.baseY=t.y}say(t,e){if(t===this.lastLineKey&&!e)return;this.lastLineKey=t;const n=P0[t];n&&this.onSay&&this.onSay(sh(n))}setMood(t){this.stateName=t;const e=this.group.getObjectByName("bloomyLight");t==="searching"?e.color.setHex(16765749):t==="found"?e.color.setHex(8250367):e.color.setHex(8190797)}flyTo(t,e){if(this.flying)return;this.flying=!0,this.setMood("moving");const n=this.group.getObjectByName("jet"),s=this.group,r=s.position.clone(),o=r.distanceTo(t),a=r.clone().add(t).multiplyScalar(.5);a.y+=Math.min(9,2.5+o*.28);const c=new Cs(r,a,t);n.visible=!0;const l=t.clone().sub(r);Math.abs(l.x)+Math.abs(l.z)>.01&&(s.rotation.y=Math.atan2(l.x,l.z)),this.tweens.add(Math.max(1.1,o*.045),h=>{const u=c.getPoint(h);s.position.set(u.x,u.y,u.z),s.rotation.x=Math.sin(h*Math.PI)*-.22},()=>{n.visible=!1,s.rotation.x=0,this.baseY=t.y,this.tweens.add(.45,h=>{const u=1+Math.sin(h*Math.PI)*.12;s.scale.set(2-u,u,2-u)},()=>{s.scale.set(1,1,1),this.flying=!1,e&&e()},r0)},ha)}celebrate(){this.setMood("found");const t=this.group;this.tweens.add(.35,e=>{t.position.y=this.baseY+Math.sin(e*Math.PI)*.55},()=>{this.tweens.add(.35,e=>{t.position.y=this.baseY+Math.sin(e*Math.PI)*.35},()=>{t.position.y=this.baseY,this.setMood("idle")})})}update(t){this.time+=t,this.tweens.update(t);const e=this.group;!this.flying&&this.stateName!=="found"&&(e.position.y=this.baseY+Math.sin(this.time*2.1)*.06,e.rotation.y+=Math.sin(this.time*.8)*.0015);const n=e.getObjectByName("stem"),s=e.getObjectByName("sprout"),r=Math.sin(this.time*(this.stateName==="searching"?9:3))*(this.stateName==="searching"?.22:.1);n.rotation.z=-.3+r,s.rotation.z=r*.8;const o=e.getObjectByName("jet");o.visible&&o.scale.setScalar(.8+Math.sin(this.time*30)*.25),this.blinkTimer-=t;const a=e.getObjectByName("eyeL"),c=e.getObjectByName("eyeR");this.blinkTimer<=0?(a.scale.y=.12,c.scale.y=.12,this.blinkTimer=2.2+Math.random()*3.2):(a.scale.y+=(1-a.scale.y)*Math.min(1,t*14),c.scale.y=a.scale.y);const l=e.getObjectByName("mouth");this.stateName==="searching"?l.scale.set(1.35,1,1):this.stateName==="found"?l.scale.set(1.5,1.9,1):l.scale.set(1,1,1);const h=e.getObjectByName("bloomyLight");this.stateName==="searching"?h.intensity=8+Math.sin(this.time*10)*5:h.intensity=8+Math.sin(this.time*2.5)*1.5}}const ps=[{id:"paint",q:"AI 时代，还要学画画吗？",sub:"一个关于热爱、技能与时代的问题",cards:[{id:"paint-s1",type:"story",t:"画了二十年的人",who:"插画师，34 岁",body:["我从六岁开始画画，美院毕业后做了自由插画师。前几年接单接到排不开，这两年生成图把单张插画的价格压到了从前的一半。","奇怪的是，我反而画得更多了。客户说不清自己要什么的时候，我的手绘草稿成了最贵的沟通工具。","如果问我后不后悔学画，我只能说，画画让我在AI面前还有一张自己的脸。"],ask:"他靠的是什么，是手上的功夫，还是眼里的判断？",tags:["插画","自由职业"]},{id:"paint-s2",type:"story",t:"转行的美术生",who:"产品设计师，27 岁",body:["我学了十二年画，考上美院那年大家说我有前途。毕业时我发现，纯画画的岗位在变少，我转做了产品体验设计。","现在我的同事不会画画，但他们描述需求的能力很强。我偶尔替他们把想法画出来，那一瞬间他们眼睛是亮的。","手艺好像贬值了，但「能把想法变成看得见的东西」这件事，比以前更值钱了。"],ask:"如果画画的价值变了，变掉的是什么，留下的又是什么？",tags:["转行","设计"]},{id:"paint-s3",type:"story",t:"五十岁开始画画的阿姨",who:"社区学员，52 岁",body:["退休后我在社区班学画画，孙女说我画的比AI丑多了。我说AI画得好看，可这张是我画的呀。","学画之后我才发现，梧桐叶不是绿的，是黄里带一点褐。活了五十年，我是学画之后才第一次认真看过它。","我不参加比赛，也不卖画。画画是我和这个世界重新认识一遍的方式。"],ask:"如果画画从来不是一门「手艺」呢？",tags:["兴趣","自我"]},{id:"paint-f1",type:"fact",t:"AI 现在能做到什么",who:"来自此地 · 工具现状",body:["当前的生成模型可以在几十秒内产出风格成熟的插画、概念图和排版方案，风格模仿能力已经超过大多数初学者。","但它仍然不擅长：精确的多轮修改、跨图的角色一致性、对画面意图的准确理解。你说「再大气一点」，它需要猜。","换句话说，描述画面的语言越精确的人，越能把AI用好——而那种精确，恰恰来自视觉训练。"],ask:"工具的天花板在抬高，人的起点应该放在哪里？",tags:["AI工具","边界"]},{id:"paint-f2",type:"fact",t:"美术岗位正在变形",who:"来自此地 · 行业变化",body:["游戏与广告行业的初级外包原画岗位明显收缩，一张概念图从外包三张变成AI挑一张再修一张。","同时出现了新角色：AI美术指导、生成图修型师、视觉提示设计师——它们要求从业者既懂画面，又懂工具。","收缩的是「按张数计价的手」，长出来的是「按判断力计价的眼」。"],ask:"你看向的是正在消失的岗位，还是正在出现的岗位？",tags:["行业","岗位"]},{id:"paint-f3",type:"fact",t:"学画的真实成本",who:"来自此地 · 时间与路径",body:["到能画出「拿得出手」的素描，成人每周十小时大约需要一年；到商业接单水平通常三到五年。AI出图的时间成本接近零。","但绘画训练的副产品常常被忽略：观察力、构图判断、色彩直觉、把模糊感受外化的能力。这些不随工具贬值。","成本要算两笔：一笔是练手的时长，一笔是不练手会错过什么。"],ask:"你愿意为「副产品」付学费吗？",tags:["成本","训练"]},{id:"paint-v1",type:"view",t:"该学：练的是眼睛",who:"美术教育者",stance:"该学，但目的变了",body:["AI之后还坚持「学画画是为了画得像」当然荒谬，就像汽车时代练马拉松去送货。","但画画从来不只是输出图像，它是视力训练。你画过一百只手，才看得出一百张AI手里的破绽。","未来会画画的人，是能对图像说「这里不对」的人。这种人对AI有裁判权。"],ask:"这个说法让你服气的地方在哪，不服气的地方又在哪？",tags:["观点","判断力"]},{id:"paint-v2",type:"view",t:"不必学：把时间还给表达",who:"效率主义者",stance:"不必系统学，够用就好",body:["历史上每次工具革命都在淘汰手艺：印刷淘汰了抄经人，摄影淘汰了肖像画师。画画作为职业训练已经走到头了。","想表达的人应该直接学习表达：构图、叙事、审美，这些用现成工具就能练。把十年交给素描，是对生命的浪费。","爱迪生没有发明灯泡前先学了二十年烛台制作吗？没有。"],ask:"把「系统学画」换成「直接表达」，你失去了什么？",tags:["观点","效率"]},{id:"paint-v3",type:"view",t:"看你要「会画」还是「用画」",who:"中间立场",stance:"先想清楚要什么",body:["这个问题没有统一答案，只有分支答案。如果你的目标是职业输出，AI已经是更强的手，你要练的是指挥它的眼。","如果你的目标是表达和自我，画画的慢本身就是价值，AI再快也替代不了你画错的那一笔里藏着的你。","如果只是好奇，报个周末班，三个月你就知道答案了——答案从来不是想出来的，是试出来的。"],ask:"你的目标是哪一个？会不会两个都要？",tags:["观点","分支"]},{id:"paint-p1",type:"person",t:"游戏概念设计师",who:"老K，入行九年",quote:"我现在一半时间画图，一半时间改AI的图。改图比画图累，因为它考验的是你脑子里有没有标准。",body:["新人问我还要不要练基本功，我给他看AI生成的图：手感上无懈可击，但结构错误藏在细节里，不懂人体的人根本看不出来。","我们组今年只招了一个新人，面试考的不是画得多好，而是让他改一张AI图——他改出来的那一笔，决定了他去留。","我会继续学新的工具，但我庆幸自己在没有AI的年代练过手，那个练法给了我一副不会被骗的眼睛。"],ask:"他说「不会被骗的眼睛」，你想要吗？",tags:["从业者","招聘"]},{id:"paint-p2",type:"person",t:"小学美术老师",who:"周老师，教龄十七年",quote:"孩子们的画越来越像AI了：漂亮、完整、无聊。我在课堂上最常做的事，是让他们画得「难看」一点。",body:["现在的孩子从小看精致图像长大，下笔就模仿流行风格。可六岁孩子画的歪歪扭扭的家里，藏着AI永远生成不出的东西——他自己。","有家长问我，学画画以后会被AI取代吗，为什么还学。我说你搞反了，孩子学画画不是在学一门手艺，是在学怎么看见和记住。","如果有一天AI替孩子画了所有画，那一代人会失去一种语言，就像失去方言一样安静。"],ask:"你担心失去这种「方言」吗？",tags:["教育","孩子"]},{id:"paint-p3",type:"person",t:"从抵触到共事的美术",who:"阿蔡，独立游戏美术",quote:"我抵制过它，后来发现我抵制的不是AI，是我怕被淘汰的恐慌。恐慌不会帮你画好一张图。",body:["最早AI出图质量不行，我嘲笑它；去年开始，它出的图让我沉默了一星期。然后我开始研究它，像研究一个新同事的脾气。","现在我的流程是：AI出五十张，我挑三张拆解重组，再加手绘修正。产出是以前的三倍，代表作依然是手绘的那几张。","我没有变得不在乎，我只是想明白了一件事：淘汰我的不会是AI，是那个拿着AI就停止思考的自己。"],ask:"你和「新工具」的关系，更像他和AI，还是像过去的他？",tags:["心态","工作流"]},{id:"paint-b1",type:"blind",t:"也许你问错了问题",who:"来自未至 · 问题的另一面",body:["你问「要不要学画画」，隐含的假设是：这是一道利弊计算题，算对了就不焦虑了。","但很多人真正卡住的是另一件事：我隐隐想画，又怕自己画不好、怕来不及、怕投入没有回报。问题把渴望翻译成了投资决策。","如果是这样，真正要回答的不是「值不值得学」，而是「那个想画的我，为什么一直没有被允许存在」。"],ask:"这个问题背后，是不是还站着一个没被问出的问题？",tags:["盲点","动机"]},{id:"paint-b2",type:"blind",t:"时代不欠你一个答案",who:"来自未至 · 更远的盲点",body:["我们习惯让「时代」来批准自己的选择：时代变了，所以我可以放弃；时代需要，所以我应该坚持。","但时代是一个正在发生的谜面，不是答案。二十年后回头看，今天的每个选择都会同时显得聪明又愚蠢。","唯一不会作废的，是你在这个过程中长出的东西：审美、判断、表达的胆量，以及对自己诚实的习惯。也许问题从来不是「画画会不会贬值」，而是「你想成为在图像面前什么样的人」。"],ask:"十年后的你，会感谢现在的你在纠结什么？",tags:["盲点","长期"]}]},{id:"job",q:"毕业后，先就业还是先创业？",sub:"一条看起来安全的路，和一条看起来酷的路",cards:[{id:"job-s1",type:"story",t:"先打了三年工再创业的人",who:"创业者，30 岁",body:["毕业时我差点直接创业，恩师拦住了我，让我先进行业里干三年。那三年我看着两任老板怎么死、怎么活，工资卡里还攒下了第一笔本金。","创业后我踩的每一个坑，几乎都在前老板身上见过一遍。同届直接创业的两个同学，一个项目黄了背了债，一个还在硬撑。","但我必须诚实：如果不创业，那三年对我毫无意义。路是给要去的人准备的。"],ask:"他的三年是保险，还是拖延？关键取决于什么？",tags:["创业","经验"]},{id:"job-s2",type:"story",t:"应届就创业的人",who:"连续创业者，26 岁",body:["我毕业就创业，失败了两次，第三次的公司活到了现在，不大，二十个人。","应届创业最大的资本是无知者无畏和极低的生活成本，那时候我一个人住隔间，觉得失败也就那样。工作五年后的人，反而背上了房贷和职级，很难再押注。","但我也付出了代价：两次失败，一次抑郁，和一段没能挽回的感情。我不劝任何人走我的路，我只是走了。"],ask:"他说的「试错窗口期」，对你存在吗？",tags:["创业","代价"]},{id:"job-f1",type:"fact",t:"冷数据的另一面",who:"来自此地 · 概率与成本",body:["多数创业统计里，初创公司三年存活率通常不到一半，应届生创业的存活数字更低。但注意：创业失败不等于个人失败，很多能力与信用恰恰在失败中积累。","就业那条路也有隐性成本：第一份工作的行业选择，常常锚定了之后五到十年的职业轨道，换轨的难度逐年上升。","两条路的成本都存在，只是形式不同：一条是钱和时间，一条是可能被锁死的路径。"],ask:"你更能承受哪种成本？想象五年后的自己分别付了哪笔账。",tags:["数据","风险"]},{id:"job-f2",type:"fact",t:"你的「弹性」有多少",who:"来自此地 · 你的条件",body:["先看清手上的牌：有没有能接受你两三年没收入的家庭条件？有没有已经验证过需求的点子？有没有愿意跟你走的技术或销售搭档？","创业成功者的共同点不是胆子大，而是退路设计得好：失败也不至于伤及根基。","就业同理：选offer时看的不是起薪，而是这个平台能不能让你三年后拥有「选择的自由」。"],ask:"把你的牌摊开看看，这张牌桌容得下哪种打法？",tags:["条件","资源"]},{id:"job-v1",type:"view",t:"先就业：职场是最好的商学院",who:"职业规划师",stance:"先就业，别急着做老板",body:["应届生创业最常见的死法不是没想法，而是不会管人、不会算账、不会谈判——这些能力在职场里有人手把手教，创业里只能拿学费换。","先在大平台上看清一个行业如何运转，认识未来可能的合伙人和客户，这是创业最贵的三样东西：认知、人脉、信任。","创业是能力的结果，不是逃离就业的手段。想逃离上班的人，创业后会更痛苦，因为创业是「全天班的上班」。"],ask:"你想创业，是想创造点什么，还是不想上班？",tags:["观点","就业"]},{id:"job-v2",type:"view",t:"想清楚了就去：窗口不等人",who:"天使投资人",stance:"机会窗口优先于履历",body:["如果你手上恰好有一个真实的、被验证过的需求，而它又处在窗口期——先就业就是浪费时间。风口上的机会不等人攒够履历。","大公司教的是在成熟体系里做螺丝钉，创业需要的是从零搭体系的肌肉，两者甚至互相冲突。等你在职场里如鱼得水，多半说明你已经不适合创业了。","当然，先决条件是「真实需求」：有人愿意预付，有人反复催你交货。如果只是「我觉得是个机会」，那不是窗口，是幻觉。"],ask:"你手里的需求，经得起「有人愿意付钱」这个检验吗？",tags:["观点","窗口"]},{id:"job-p1",type:"person",t:"失败过一次的创业者",who:"老周，二次创业中",quote:"我第一次创业死于合伙人散伙。回头看，我们四个连「谁说了算」都没谈过，就敢一起注册公司。",body:["如果重来一次，我还是会创业，但我会先花三个月把股权、退出机制、分工吵清楚，把丑话说在蜜月期。","我的建议很具体：无论选哪条路，大学最后一年就去真实的地方待着——想就业的去实习，想创业的去小公司打杂，别在宿舍里用想象做决定。","另外，别把「先就业」理解成「放弃创业」。我现在的合伙人是前东家的同事，我的第一个客户是前东家的客户。"],ask:"他给出的「具体动作」，哪一条你明天就能做？",tags:["从业者","合伙"]},{id:"job-p2",type:"person",t:"招过一千个应届生的HR",who:"Lily，人力资源总监",quote:"面试时我发现，走哪条路的学生都有出彩的，共同点是：他们做决定的时候，清楚自己在放弃什么。",body:["我见过创业失败后进公司的孩子，简历上有一段失败，但聊起来全是对商业的真实理解，我们要的就是这种人。","也见过在好公司干了三年然后后悔没试过创业的，三十岁带着房贷，再也不敢动了。","所以别问哪条路对，问自己：这个决定是我自己做的，还是爸妈说的、同学都在做、短视频劝的？谁做的决定，谁才扛得住它的难。"],ask:"此刻的想法，有多少是你自己的声音？",tags:["HR","决策"]},{id:"job-b1",type:"blind",t:"这道题可能是伪二选一",who:"来自未至 · 被折叠的选项",body:["「先就业还是先创业」听起来像岔路口，但现实中存在第三条、第四条路：加入一个早期小公司（半就业半创业）、先做副业验证、gap半年做一个小项目再决定、先就业但定向跳向目标行业的核心岗位。","把连续的选择题看成单选题，是教育留给我们的思维惯性。人生不是一张试卷，没有规定你必须一次答完。","也许更真实的问题是：未来十二个月，你能做的最小的一次真实尝试是什么？"],ask:"有没有一个两个月的实验，能替你先探探路？",tags:["盲点","选项"]},{id:"job-b2",type:"blind",t:"家里人到底在怕什么",who:"来自未至 · 关系的盲点",body:["很多争论表面是「就业vs创业」，底层是两代人对安全的不同定义：父母经历过匮乏，安全等于稳定现金流；你成长在增长年代，安全等于不辜负可能性。","把创业决定包装成「跟你商量」，实际是希望父母批准；把反对理解为「他们不懂」，则错过了他们真正想说的——「我们怕你吃苦时没人接住你」。","也许该谈的不是路线，而是底线：如果最坏的情况发生，谁接住你，怎么接。谈妥了底线，路线之争往往自己就化了。"],ask:"你和他们，各自把「安全」定义成了什么？",tags:["盲点","家庭"]}]},{id:"switch",q:"30 岁转行，来得及吗？",sub:"年龄是倒计时，还是刻度尺",cards:[{id:"sw-s1",type:"story",t:"30 岁从会计转成程序员的人",who:"开发者，35 岁",body:["30岁那年我从财务转行写代码，头一年工资腰斩，和一个22岁的实习生做同桌，被人喊「叔」。","五年后我带团队了。财务背景让我成了公司里最懂业务的程序员，这是科班同学给不了的。","现在回头看，转行最难的不是学新东西，是接受前两年「从云端摔到地上」的心理落差。技术上的坎，反而都是小坎。"],ask:"他能熬过那两年，靠的是什么？你有没有同款燃料？",tags:["转行","技术"]},{id:"sw-s2",type:"story",t:"转了一半又回去的人",who:"前教师，34 岁",body:["32岁我厌倦了教学，裸辞转做新媒体运营，八个月后果然回去当老师了。那次「失败」教会我一件事：我厌倦的不是教师这个职业，是当时那所学校。","换到新学校后我教得比从前开心得多，还把做运营学的传播方法用在了课堂里。","我不后悔那八个月，它贵是贵了点，但它是我买过的最准的一份「自我检测报告」。不过如果重来，我会选择不裸辞，用假期先去兼职试水。"],ask:"你确定你厌倦的是「行业」，而不是「当前的位置」吗？",tags:["转行","试错"]},{id:"sw-f1",type:"fact",t:"劳动力市场的真实刻度",who:"来自此地 · 数据",body:["一线城市白领的平均职业生涯超过35年——30岁转行，你面对的不是「来不及」，而是「还剩三分之二」。","真实的门槛在别处：多数转行者会在头一两年经历职级与薪酬的回退，家庭现金储备决定你能不能付得起这笔「过桥费」。","另一个常被忽略的数据：招聘里「30岁」被卡的岗位，多集中在纯粹堆工时的初级岗位；而吃「判断力与复合背景」的岗位，30+反而是入场券。"],ask:"你要转去的那一行，卡的是年龄，还是资历结构？",tags:["数据","年龄"]},{id:"sw-f2",type:"fact",t:"转行的三条真实路径",who:"来自此地 · 路径",body:["路径一「平移」：带着现有技能进入新行业相邻岗位，比如从银行跳金融科技，损失最小。","路径二「嫁接」：在新领域找能最大化旧经验的位置，比如医生转医疗器械产品经理，旧经验变成护城河。","路径三「重建」：彻底归零学新手艺，成本最高，通常需要12到24个月的收入缓冲。多数「来不及」的惨案，都发生在没算清就选了路径三的人身上。"],ask:"你的目标，值得付路径三的价吗？还是路径一、二已经够用？",tags:["路径","策略"]},{id:"sw-v1",type:"view",t:"来得及：复利从今天算",who:"职业教练",stance:"来得及，但要换算法",body:["「来不及」是一种错误算法：拿你现在的年龄去比科班人的工龄。正确算法是拿你未来的40年减去转换成本。","30岁转行的人有个隐藏优势：你知道自己要什么。22岁的人选行业靠想象，你靠的是十年真实工作的体检报告。","但教练的忠告是：转行成功的都是「进攻型」选手——奔着新大陆去的；那些只想逃离旧大陆的人，常常在新大陆重复旧的痛苦。"],ask:"你的转行，是奔向什么，还是逃离什么？",tags:["观点","动机"]},{id:"sw-v2",type:"view",t:"先别急：多数「想转行」是症状",who:"心理咨询师",stance:"先诊断，再开刀",body:["来找我的咨询者里，十个人有八个把「职业倦怠」误诊为「入错行」。倦怠的处方是休息、边界和授权，不是换赛道。","真正的行业错配有三个稳定信号：你对行业新闻是真的兴奋而非焦虑驱动；你愿意业余时间免费做相关的事；你能列出这个行业让你讨厌的十件事并依然想来。","如果三个信号都不明显，先处理倦怠和位置问题。手术刀不该用来切头痛。"],ask:"对照那三个信号，你中了几个？",tags:["观点","倦怠"]},{id:"sw-p1",type:"person",t:"专收转行者的老板",who:"创业公司CEO，38岁",quote:"我的公司里一半是转行者。我招聘时不看他们从哪来，看他们能不能讲清楚「为什么是我」。",body:["转行者面试最大的误区是拼命证明自己像科班的人。别扮了，你的价值恰恰是那个「不一样」：客户视角、旧行业的资源、成年人解决问题的章法。","我看过太多人把30岁当死线，仓促选了个「风口行业」跳进去，两年后站在新的废墟上。行业没有救世主，只有匹配。","我建议每个想转行的人先做一件事：找到目标行业里三个30岁后转过去的人，请他们喝咖啡。三个真实的样本，胜过一百篇纠结的文章。"],ask:"你的「三个咖啡样本」名单上，有名字吗？",tags:["招聘","样本"]},{id:"sw-p2",type:"person",t:"转行者的配偶",who:"小杨，32岁，记账的人",quote:"他问我支不支持，我反问他：存款能撑多久、最坏打算是什么、如果失败了几时回到老本行。他答不上来，我们就没聊下去。",body:["三个月后他带着一张写满数字的表格回来了：18个月的缓冲金、每月最低开销、失败后的回归计划。那一刻我是真的放心了。","他现在在读夜校课程，累但眼睛发亮。这种亮，结婚七年我只见过两次，一次是婚礼，一次是现在。","家人反对的从来不是你的梦想，是你拿出梦想的样子像在赌博。把赌桌换成施工图，多数「反对票」会变成「监工证」。"],ask:"你的表格画好了吗？",tags:["家庭","计划"]},{id:"sw-b1",type:"blind",t:"「来得及吗」在问谁",who:"来自未至 · 提问的盲点",body:["你把这个问题抛给搜索引擎、抛给长辈、抛给我，其实是在寻找一个权威替你背书：只要你「来得及」，你就敢动。","但「来得及」的裁判席上坐着的是十年后的你自己，今天的任何人都只是代答。真正值得问的是：如果确定来得及，你想去哪？很多人答不出这一问——那才是死结。","还有一个更暗的版本：有些人反复问「来得及吗」，只是想让别人说出「来不及」，好名正言顺地不动。疼的是现状，熟悉的是现状。"],ask:"如果全世界都告诉你来得及，你的下一句话是什么？",tags:["盲点","授权"]},{id:"sw-b2",type:"blind",t:"第三条时间线",who:"来自未至 · 被忽略的活法",body:["这道题默认了人生只有两条时间线：留在原地，或者纵身一跃。但还有一种被严重低估的活法：主业不动，用三年时间在旁边「种一块自留地」。","写作、接单、做小项目、考证书——自留地的好处是试错免费、退路常在，长到能养活你了再收割。历史上大量成功的「转行」，其实是自留地慢慢变成了主宅。","它唯一的缺点是不够爽：没有裸辞的悲壮，没有重新开始的新鲜感。但它对普通人最友好——你不需要先成为勇者，才能开始。"],ask:"你的自留地，打算种什么？",tags:["盲点","渐进"]}]}],xs={story:{name:"来路",color:"#FF8A3C",icon:"◉"},fact:{name:"此地",color:"#4DA3FF",icon:"◆"},view:{name:"岔路",color:"#FF4D6D",icon:"⑂"},person:{name:"遇见",color:"#FFD335",icon:"☺"},blind:{name:"未至",color:"#8CFF6B",icon:"✦"}};function br(i){for(let t=0;t<ps.length;t++)if(ps[t].id===i)return ps[t];return ps[0]}function D0(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function I0(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function lh(i,t,e){const n=t.slice(),s=[];for(;s.length<e&&n.length;)s.push(n.splice(Math.floor(i()*n.length),1)[0]);return s}function pl(i,t){return t[Math.floor(i()*t.length)%t.length]}function hh(i){const t=String(i||"").trim(),e=t.replace(/[？?！!]+$/,""),n=e.split(/[，,。；;、]/).map(function(_){return _.trim()}).filter(Boolean),s=n[n.length-1]||e,r=n.length>1?n.slice(0,-1).join("，"):"";let o=s.replace(/^(那|那么|所以|请问|你说|到底|究竟|我就想问|就是想问)/,"").replace(/(吗|呢|么|吧|啊)$/,"").trim()||s.trim();const a=/还是/.test(s);let c=null,l=null;if(a){const _=s.indexOf("还是");c=s.slice(0,_).replace(/^(到底|究竟|该|要|会|先|是)/,"").trim()||"这条路",l=s.slice(_+2).replace(/(吗|呢|么|吧|啊)$/,"").trim()||"那条路"}const h=!a&&/(会不会|能不能|要不要|该不该|可不可以|是不是|有没有|值不值|来不来得及|[吗么])$/.test(s),u=!a&&!h&&/(来得及|什么时候|多久|晚不晚|赶得上|几年|几岁)/.test(s),d=!a&&/(怎么|怎样|如何|怎么办)/.test(s),p=!a&&/(为什么|为何)/.test(s);return{raw:t,clean:e,tail:s,topic:o,context:r,optA:c,optB:l,shape:a?"choice":h?"yesno":u?"when":d?"how":p?"why":"open"}}const uh=["林晚","周野","阿禾","老柯","苏离","陈叙","小满","何声","路遥","叶子","关山","白石"];function U0(i,t){const e=lh(t,uh,3),n=i.topic,s=i.clean,r=i.context,o=r?"在"+r+"的时候，":"";return i.shape==="choice"?[{id:"cx-s1",type:"story",t:"选了「"+i.optA+"」的人",who:e[0]+"，走过来的人",body:["「"+s+"」这个问题，"+e[0]+"当年用行动回答过："+o+"TA 选了"+i.optA+"，并且把这条路走出了自己的样子。","TA 说选完才明白："+i.optA+"不是终点，是一串新的小决定。真正的分岔不在选择那一刻，而在之后每一天怎么走。","但TA也承认代价：另一条路上的风景，TA 只能想象了。"],ask:"TA 的代价清单里，有你付不起的一项吗？",tags:["来路","选择"]},{id:"cx-s2",type:"story",t:"选了「"+i.optB+"」的人",who:e[1]+"，另一条路上的人",body:[e[1]+"在同一道题前选了"+i.optB+"。旁人以为TA想得最清楚，TA 自己说：其实是在行动里想清楚的。","「"+i.optB+"」给TA的是一种别人拿不走的手感——哪里的坑深、哪里的桥稳，都是脚底记下来的。","TA 的忠告是：别把另一条路浪漫化，也别妖魔化。路只对走路的人诚实。"],ask:"TA 说路对走路的人诚实——你准备好自己走了吗？",tags:["来路","另一面"]},{id:"cx-s3",type:"story",t:"两条路都踩过的人",who:e[2]+"，绕了远路的人",body:[e[2]+"先选了"+i.optA+"，中途换到"+i.optB+"，后来发现：对TA来说真正的问题不是二选一，而是自己一直没说出口的那个前提。","换路没有让TA失败，也没有让TA成功——让它成功的是每次换路前写下的一段话：我要什么，我拿什么换。","现在TA回答「"+s+"」的方式是反问：你愿意为哪条路上的麻烦负责？麻烦才是路的实体。"],ask:"你更愿意负责哪种麻烦？",tags:["来路","转换"]}]:i.shape==="yesno"?[{id:"cx-s1",type:"story",t:"把问题记在本子上的人",who:e[0]+"，每天经过同一个地方的人",body:["「"+s+"」——这个问题"+e[0]+"问过自己很多次，后来TA不再纠结答案，"+o+"而是连续一段时间做记录，把每次的观察写下来。","记录教会TA一件意外的事：答案不是一次性的，它每天都在重新发生。有时是，有时不是，更多的日子是「没注意」。","TA 的结论：这个问题真正给的不是「会或不会」，而是「你开始注意了」。"],ask:"TA 用记录代替了争论，你打算用什么代替？",tags:["来路","观察"]},{id:"cx-s2",type:"story",t:"答错过一次的人",who:e[1]+"，斩钉截铁过的人",body:[e[1]+"曾经非常笃定地回答过这道题，答案是不会。"+o+"后来那件事就发生在TA眼前，TA 却因为笃定而没有看见。","TA 复盘时发现：自己回答的其实不是问题，是当天的心情。心情低落时万物沉默，心情好时处处是证据。","现在TA学会了一句更诚实的话：我不知道，但我可以去看看。"],ask:"你现在的答案里，观察占几成，心情占几成？",tags:["来路","误判"]},{id:"cx-s3",type:"story",t:"从没问过的人",who:e[2]+"，就住在旁边的人",body:["对"+e[2]+"来说，「"+n+"」从来不是一个问题——太熟悉了，熟悉到从不需要问，就像没人问自己每天走的楼梯有几级。","直到有人认真地向TA求证细节，TA 才发现：自己说不出具体的样子。熟悉不等于了解，重复不等于看见。","提问的人反而看见了TA的忽略。一个好问题，能让熟悉的东西重新陌生一次。"],ask:"你最熟悉的那个答案里，藏着多少没核对过的细节？",tags:["来路","盲区"]}]:i.shape==="when"?[{id:"cx-s1",type:"story",t:"先出发的人",who:e[0]+"，没等想明白就动身的人",body:["「"+s+"」——"+e[0]+"当年没算清楚就出发了。"+o+"TA 的算法很朴素：先走一步，边走边校准，比在原地推演省时间。","前半段当然狼狈：绕路、回头、被人笑。但TA说狼狈本身就是进度条——所有能修正的错误，都是往前走的证据。","TA 现在的答案：来得及来不及，是走出来的结论，不是走进去的资格。"],ask:"你在等一个确保，还是等一个开始？",tags:["来路","出发"]},{id:"cx-s2",type:"story",t:"等了很久才动的人",who:e[1]+"，把窗口等过去的人",body:[e[1]+"反复问过这道题：问朋友、问长辈、问网络。每次得到的答案都不同，于是TA得出结论：再等等，等想清楚了再说。","等想清楚的那天，有些门已经换了主人。TA 不后悔等待本身，后悔的是把「问别人」当成了「做功课」。","TA 现在的建议：给问题设一个截止日，到期之前收集情报，到期之后用行动回答。"],ask:"你的问题，有截止日吗？",tags:["来路","窗口"]},{id:"cx-s3",type:"story",t:"中途换算法的人",who:e[2]+"，重新定义时间的人",body:[e[2]+"曾被「"+n+"」的进度压得喘不过气，直到有一天TA把时间线换了个算法：不看「还剩多少」，改看「每天能存下多少」。","换算法之后焦虑少了一半：进度不再取决于起点多早，而取决于今天有没有存入。TA 每天存一点，存的东西叫「不可撤销的经历」。","TA 说：来得及从来不是时间给的判决，是复利给的答案。"],ask:"如果从今天开始存，你想先存下什么？",tags:["来路","复利"]}]:[{id:"cx-s1",type:"story",t:"找到过答案的人",who:e[0]+"，走完一整段路的人",body:["「"+s+"」——"+e[0]+"花了很久才找到自己的答案。"+o+"TA 回忆，答案出现的时刻毫无仪式感：不是想通的，是做某件具体小事的途中顺路撞见的。","TA 总结：这类问题的答案不藏在思考的终点，藏在行动的中途。你得先移动，答案才有机会和你相遇。","而且答案会过期。TA 现在每隔一段时间就重新问自己一次，像给地图更新版本。"],ask:"你上一次更新自己的答案，是什么时候？",tags:["来路","行动"]},{id:"cx-s2",type:"story",t:"还在找的人",who:e[1]+"，正在路上的人",body:[e[1]+"到现在也没找到「"+n+"」的最终答案，但TA不再焦虑——因为TA把问题换成了复数：不是「答案是什么」，而是「有哪些可能的答案，各长什么样」。","TA 随身带一个小本子，每次遇到一个活得让TA羡慕的人，就记下对方的答案。本子快写满了，标准答案还是没出现，TA 却越来越笃定。","TA 说：找答案的路上，收集样本比证明唯一更有用。"],ask:"你的样本清单上，已经有哪些名字？",tags:["来路","样本"]},{id:"cx-s3",type:"story",t:"决定不再找的人",who:e[2]+"，放下问题的人",body:[e[2]+"曾经被「"+n+"」缠了很多年，直到某个普通的下午，TA发现自己已经很久没想起这个问题了。","不是找到了答案，是TA把问题拆散了：能行动的部分变成了习惯，不能行动的部分交还给了时间。问题被拆完，就不成问题了。","TA 说：有些问题的终点不是答案，是你长大了，问题够不着你了。"],ask:"这个问题里，哪一部分其实可以今天就变成习惯？",tags:["来路","放下"]}]}function N0(i,t){const e=i.topic,s=[{id:"cx-f1",type:"fact",t:"先把问题拆小",who:"来自此地 · 拆解",body:["「"+i.clean+"」太大，大到只能焦虑。把它拆成三个可以核对的小问题：什么条件下成立？在哪儿能观察到？拿什么当证据？","大问题让人原地打转，小问题让人抬脚就走。每核对一条，「"+e+"」周围的雾就散一层。","拆解本身不产生答案，但它把「未知」换成了「待查」——这两者的心情成本完全不同。"],ask:"三个小问题里，哪一个你今天就能核对？",tags:["此地","方法"]},{id:"cx-f2",type:"fact",t:"回答它的成本清单",who:"来自此地 · 成本",body:["认真回答这个问题，需要付三种成本：时间（去观察或尝试）、信息（找到对的人问）、诚实（接受自己不喜欢的答案）。","多数人愿意付前两种，最难付的是第三种——所以我们常常不是没找到答案，而是找到了又假装没看见。","先想清楚你愿意付哪几种，再讨论答案。付不起全部，就先付得起的那部分。"],ask:"三种成本里，你最不愿付的是哪种？为什么？",tags:["此地","代价"]},{id:"cx-f3",type:"fact",t:"哪些部分只能进入才知道",who:"来自此地 · 边界",body:["关于「"+e+"」，有些部分事前可以查证，有些部分只能身在其中才会知道。事前的推理能排除明显错的，给不了最终对的。","把问题里的信息分成两栏：现在就能核对的，和必须等它发生的。第一栏越满，第二栏的等待就越不慌。","承认边界不是认输，是把力气花在能花的地方。"],ask:"你的两栏清单，第一栏现在有几条？",tags:["此地","边界"]}];return i.shape==="choice"&&(s[0]={id:"cx-f1",type:"fact",t:"两个选项的事实底账",who:"来自此地 · 对账",body:["「"+i.optA+"」和「"+i.optB+"」听起来像气质之争，其实可以先对账：各自的真实日常、各自的收入与损耗、各自最坏情况的模样。","把两栏写出来之后，很多话术会失效——留下来的差异，才是真正需要你决策的差异。","对完账你会发现，选项描述的是目的地，账本描述的是路。走路的是你。"],ask:"两栏账本里，哪一条差异对你最重要？",tags:["此地","对账"]}),i.shape==="when"&&(s[1]={id:"cx-f2",type:"fact",t:"时间账要算两笔",who:"来自此地 · 时间",body:["「来得及吗」其实是两笔账：一笔是客观窗口（这件事的现实时间线有多长），一笔是你的缓冲（如果慢了，你能承受多少）。","多数「来不及」的恐慌来自只看第一笔。而真实决策里，第二笔往往更可控：缓冲可以攒，窗口只能等。","两笔都算清，问题就从「来得及吗」变成「愿意按哪个节奏走」。"],ask:"你的客观窗口和你的缓冲，各是多少？",tags:["此地","时间"]}),s}function F0(i,t){const e=i.topic,n=i.clean;if(i.shape==="choice")return[{id:"cx-v1",type:"view",t:"站「"+i.optA+"」：先落地再看",who:"稳字派",stance:"倾向 "+i.optA,body:["这一派认为，「"+i.optA+"」的真正优势不是更好，而是更早开始积累：位置、手感、信任，都是时间的函数，早一天开始就多复利一天。","至于「"+i.optB+"」的诱惑，稳字派的回答很冷静：机会永远有，但错过积累期的代价，比错过一两个机会大得多。","他们最护着的是确定性，最愿意牺牲的是可能性。"],ask:"这个立场最护着的东西，也正是你最想要的吗？",tags:["岔路","立场一"]},{id:"cx-v2",type:"view",t:"站「"+i.optB+"」：窗口不等人",who:"机会派",stance:"倾向 "+i.optB,body:["这一派认为，问题的关键不是哪条路更稳，而是哪个时机更真：真实的需求、真实的召唤、真实的窗口期，出现了就不该用「再等等」打发它。","稳字派害怕的动荡，机会派称之为学费。两者的账都能算自洽——区别在于他们对「后悔」的定义不同：前者怕选错，后者怕没试。","他们最护着的是可能性，最愿意牺牲的是确定性。"],ask:"你对「后悔」的定义，更接近哪一派？",tags:["岔路","立场二"]},{id:"cx-v3",type:"view",t:"第三条路：把它改成实验",who:"折中派",stance:"先试再选",body:["折中派拒绝在「"+i.optA+"」和「"+i.optB+"」之间硬选。他们的方案是：设计一个两到三个月的最小实验，让现实替你投票。","比如用业余时间小规模地活成「"+i.optB+"」的样子，同时保持「"+i.optA+"」的底线不破。实验期内只收集事实，不做结论。","实验结束时你要么得到了证据，要么得到了安心——两种结果都比空想值钱。"],ask:"如果设计这个实验，你的第一步是什么？",tags:["岔路","第三条路"]}];if(i.shape==="yesno")return[{id:"cx-v1",type:"view",t:"会——按「会」去准备",who:"行动派",stance:"倾向于「会」",body:["行动派认为，对「"+n+"」这类问题，最优策略常常不是猜对答案，而是按「会」去安排自己：醒了就去听、就去试、就去记。","按「会」准备的人，就算答案最后是不会，也得到了观察本身的乐趣；按「不会」躺平的人，两种结果都输。","因为行动的成本，往往低于等待答案的成本。"],ask:"如果只能按一个答案行动，你押哪边？",tags:["岔路","立场一"]},{id:"cx-v2",type:"view",t:"未必——先看你问的是哪一次",who:"怀疑派",stance:"倾向于「未必」",body:["怀疑派提醒：像「"+e+"」这种事，从来不给统一答案——条件一变，答案就变。想要一个放之四海皆准的结论，是想逃避「每次都要重新看」的责任。","他们见过太多人拿着三年前的答案回答今天的问题，还奇怪世界怎么不听话了。","承认「未必」，不是骑墙，是诚实的开始。"],ask:"你手里的答案，是哪一年核对的？",tags:["岔路","立场二"]},{id:"cx-v3",type:"view",t:"改写：什么条件下会",who:"改写派",stance:"换个问法",body:["改写派认为这道题的问法本身把人带偏了：「会不会」邀请你猜，「什么条件下会」邀请你查。","把「"+e+"」改写成条件句之后，问题就从占卜变成了工程：你不再等一个神谕，而是去凑齐那些条件，然后看它发生。","同样的世界，换一种问法，就从谜语变成了说明书。"],ask:"你愿意把这道题从谜语改写成说明书吗？",tags:["岔路","改写"]}];if(i.shape==="when")return[{id:"cx-v1",type:"view",t:"来得及：复利从今天算",who:"出发派",stance:"来得及",body:["出发派认为「来得及吗」用错了算法：拿现在的刻度去比别人家终点。正确的算法是未来的长度减去转换成本。","而且晚出发的人有一个隐藏优势：你知道自己要什么。这份明确，是早出发的人用很多弯路才换来的。","复利的可怕之处在于它只认起点之后的日子，不追究起点之前的犹豫。"],ask:"你的复利，想从哪一天开始计息？",tags:["岔路","立场一"]},{id:"cx-v2",type:"view",t:"先别急：确认不是想逃离",who:"诊断派",stance:"先诊断再出发",body:["诊断派见过太多「来不及」的焦虑，拆开之后里面装的不是热爱，是对现状的不耐。拿逃离当燃料出发，往往在新地方烧完就熄火。","他们给出三个检验信号：你是被目的地吸引，还是被身后追赶？你愿意为它付哪种具体的代价？你能说出它难看的十件事并依然想去吗？","信号齐了，多晚都来得及；信号不齐，多早都算仓促。"],ask:"三个信号，你中了几个？",tags:["岔路","立场二"]},{id:"cx-v3",type:"view",t:"自留地：不必全押",who:"耕种派",stance:"第三种时间线",body:["耕种派拒绝「要么现在全力一跃，要么永远放弃」的二分法。他们的方案是种一块自留地：主业不动，用业余时间让「"+e+"」慢慢长。","自留地的好处是试错免费、退路常在。长到能养活你了再收割，长不大也不伤根本。很多漂亮的转身，最初都是自留地。","它唯一的缺点是不够壮烈——但你要的是壮烈，还是「"+e+"」本身？"],ask:"你的自留地，打算种什么？",tags:["岔路","第三条路"]}];const s=i.shape==="why";return[{id:"cx-v1",type:"view",t:s?"原因常常不止一个":"从条件入手",who:"拆解派",stance:s?"先拆原因":"先看条件",body:[s?"拆解派面对「"+n+"」会先泼一盆冷水：「为什么」背后很少只有一个原因。把它问成「哪几个原因、各占几分」，比寻找那个唯一元凶更接近真相。":"拆解派面对「"+n+"」会先放下问题的情绪部分，把「"+e+"」拆成一组条件：哪些已经具备，哪些还缺，哪些根本不重要。",s?"被追问「为什么」的人会防御，被问「哪几个原因」的人会思考。问法决定了你能拿到哪一层真实。":"条件清单的好处是诚实：它把「我想要」和「我能要」放在同一张纸上，让它们当面谈。","这一派相信：情绪负责发起问题，条件负责回答问题。"],ask:"你的条件清单上，哪一条最难凑齐？",tags:["岔路","立场一"]},{id:"cx-v2",type:"view",t:s?"问原因，不如问功能":"从动机入手",who:"动机派",stance:s?"换一层问":"先看动机",body:[s?"动机派会绕到问题背后：追问原因固然有趣，但更有用的是问「知道原因之后我要做什么」。如果什么都不做，原因只是谈资。":"动机派面对「"+n+"」会先问一个更基本的问题：你为什么想问它？是想解决它，还是想确认自己已经在认真生活？",s?"有些「为什么」其实是「凭什么」的情绪版——识别出这一层，问题就从求解释变成了求安放。":"同一个问题，解决问题的问法和确认自己的问法，走的是两条完全不同的路。走错路，答案再好也没用。","他们最护着的是诚实：对自己诚实的问题，才有诚实的答案。"],ask:"这个问题对你，是工具还是镜子？",tags:["岔路","立场二"]},{id:"cx-v3",type:"view",t:"先做一个最小的实验",who:"实验派",stance:"用行动回答",body:["实验派对所有「想不明白」的问题使用同一招：设计一个成本最低、周期最短的现实实验，让世界亲自作答。","「"+e+"」想不清楚，就不想了——把可能的答案列出来，挑一个最便宜的先试。现实反馈一周，胜过空想一年。","他们相信：思考负责出题，行动负责阅卷。"],ask:"最便宜的那个实验，需要你付出什么？",tags:["岔路","实验"]}]}function O0(i,t){const e=lh(t,uh,3),n=i.topic,s=i.clean,r=["这个问题我给过答案，答案后来又变了两次。","我不劝任何人抄我的答案，我只负责把它讲清楚。","别人以为我在回答问题，其实我在回答我自己。","我花了三年才敢承认：我一直知道答案，只是不想付那个代价。","问题问出口的那一刻，答案已经开始成形了。"];return[{id:"cx-p1",type:"person",t:"经历过这件事的人",who:e[0]+"，走在你前面的人",quote:"「"+s+"」——"+pl(t,r),body:[e[0]+"在这道题上比你多走了几年。TA 记得自己当初问出这个问题时的样子：又急又怕，急着要答案，怕答案不如意。","现在TA回头看，发现问题从来没被「回答」过——它是被TA的日子过掉的。每往前走一段，问题就自动改写一次。","TA 给你的唯一建议：别在起点处反复验算，把验算留给路上。"],ask:"TA 说问题是被日子过掉的，你信几分？",tags:["遇见","先行者"]},{id:"cx-p2",type:"person",t:"和你站在同一道题前的人",who:e[1]+"，同路人",quote:pl(t,r),body:[e[1]+"此刻也在找「"+n+"」的答案。TA 的进度不比你快，困惑不比你少，唯一不同的是TA把寻找本身当成了计划的一部分。","TA 说最安慰TA的不是任何答案，而是发现「原来不止我一个人在问」——同问本身就是一种答案的雏形。","TA 有个习惯：每收集到一个别人的答案，就写下自己当时的第一反应。半年后回看，TA 的答案是从那些反应里长出来的。"],ask:"如果你也记下自己的第一反应，半年后回看会看到什么？",tags:["遇见","同路人"]},{id:"cx-p3",type:"person",t:"答案会落在TA身上的人",who:e[2]+"，被这个问题牵连的人",quote:"你的答案不只是你的事——它也会落在我身上。",body:[e[2]+"很少被问到「"+s+"」，但这个问题的一切结果，最终都会落到TA的生活里。TA 是这道题的隐性当事人。","TA 说：问问题的人常常只看见选项，看不见选项旁边站着的人。不是不该选，是选之前值得看一眼。","TA 不要求你按TA的期待回答。TA只想确认：你知道TA在旁边吗？"],ask:"这道题的隐性当事人，你想到了谁？",tags:["遇见","他者"]}]}function B0(i,t){const e=i.topic,n=i.clean;let s;i.shape==="choice"?s={id:"cx-b1",type:"blind",t:"两条路是全部地图吗",who:"来自未至 · 被折叠的选项",body:["「"+i.optA+"还是"+i.optB+"」听起来像岔路口，但这个问法悄悄折叠了第三、第四条路：两条都走一段、交错着走、走一条缝合出来的新路，或者干脆原地先修补给。","把连续的人生看成单选题，是考试留给我们的思维惯性。人生不收卷，也不给标准答题卡。","真正的问题也许不是「选哪个」，而是「未来十二个月，你能做的最小一次真实尝试是什么」。"],ask:"被这道题折叠掉的选项里，有没有你其实想要的那个？",tags:["未至","盲点"]}:i.shape==="yesno"?s={id:"cx-b1",type:"blind",t:"「会或不会」是全部选项吗",who:"来自未至 · 二元的陷阱",body:["这道题藏着三个未检查的假设：答案是二元的（只有会与不会）；答案恒定（今天的是永远的）；知道答案之后你就自由了。","三条都值得怀疑。多数真实的问题答案随条件流动，而知道答案的人往往并不自由——他们只是换了一批新问题。","「"+e+"」真正在问的，也许是你愿不愿意进入一种持续的、动态的注意。"],ask:"你打算拿这个答案去做什么？先想这个，答案反而清楚。",tags:["未至","盲点"]}:i.shape==="when"?s={id:"cx-b1",type:"blind",t:"「来得及」在跟谁的表对时",who:"来自未至 · 时钟的盲点",body:["「"+n+"」默认存在一块公共时钟，所有人按同一刻度出发。但你心里那块表，走的是另一轨：它记录的不是年龄，是你为这件事真正投入过的天数。","有人问「来得及吗」，其实是想让别人替自己按停表——听到「来不及」就名正言顺地不动，疼的是现状，熟悉的是现状。","还有更暗的版本：反复问，只为听到「来得及」，好继续心安理得地等。"],ask:"如果全世界都告诉你来得及，你的下一句话是什么？",tags:["未至","盲点"]}:s={id:"cx-b1",type:"blind",t:i.shape==="why"?"这个问题在等一个权威吗":"这个问题在等一个标准答案吗",who:"来自未至 · 提问的姿态",body:["你把「"+n+"」抛给搜索引擎、抛给熟人、抛给宇宙——这个动作里藏着一个假设：存在一个比你更有资格的裁判，TA说了算，你才敢动。","但这类问题的裁判席上，坐着的是十年后的你自己。今天的所有人都只是代答，包括这本书、这个宇宙。","值得补问的一句是：如果确定有答案，你想立刻得到它吗？很多人在这一步沉默——他们要的不是答案，是准备答案的时间。"],ask:"你是在找答案，还是在找一个替你签字的人？",tags:["未至","盲点"]};const r={id:"cx-b2",type:"blind",t:"问题背后的那个人",who:"来自未至 · 更远的盲点",body:["你把一份担心或渴望，翻译成了「"+n+"」。翻译过程中，有些东西被压缩掉了：真正让你夜里睡不着的那个部分。","很多人问「"+e+"」，真正想确认的其实是另外几句：我准备好了吗？我还值得吗？有人和我一样吗？原问题只是这几句话的密码版。","把背后的那句话直接问出来，往往比原问题更疼，也更准。疼的部分，通常才是正题。"],ask:"如果这道题有翻译腔，它真正想说的是哪一句？",tags:["未至","你自己"]};return[s,r]}const ml={choice:"两条路之间，还有整张地图",yesno:"会或不会之外，还有你的看见",when:"时间给的是刻度，不是判决",how:"答案不藏在思考的终点",why:"原因是一层，更下面是你自己",open:"没有标准答案，只有不同的看见"};function dh(i){const t=hh(i),e=I0(D0(t.clean||t.raw)),n=[].concat(U0(t,e)).concat(N0(t)).concat(F0(t)).concat(O0(t,e)).concat(B0(t));return{id:"custom",q:t.raw,sub:ml[t.shape]||ml.open,cards:n}}const Na="guiyi-save-v1",Qn={story:"lai",fact:"cidi",view:"cha",person:"yu",blind:"wei"},z0=[{key:"fourlands",name:"四境足迹",desc:"到访过全部四座认知之岛"},{key:"different",name:"看见不同",desc:"第一次把两张卡放上对照桌"},{key:"others",name:"遇见他者",desc:"收下两位真实的人的故事"},{key:"blindlight",name:"盲点之光",desc:"打开未至岛的传送门"},{key:"become",name:"形成自己",desc:"在中央岛写下自己的答案"}];function k0(i){return{v:2,packId:i,pack:null,packOrigin:null,collected:[],marked:{},regions:{},compares:[],visited:[],achievements:[],answer:null,step:0,updatedAt:Date.now()}}function sn(i){i.updatedAt=Date.now();try{localStorage.setItem(Na,JSON.stringify(i))}catch{}}function fh(){try{const i=localStorage.getItem(Na);if(!i)return null;const t=JSON.parse(i);return!t||t.v!==1&&t.v!==2||!t.packId?null:t}catch{return null}}const H0=Object.keys(Qn);function G0(i){return!i||typeof i!="object"||Array.isArray(i)||!Array.isArray(i.cards)||i.cards.length===0||typeof i.q!="string"||!i.q.trim()?!1:H0.every(t=>i.cards.some(e=>e&&e.type===t))}function Fa(){try{localStorage.removeItem(Na)}catch{}}function V0(i,t){i.collected.indexOf(t.id)===-1&&i.collected.push(t.id),i.regions[t.id]=Qn[t.type]||"lai"}function W0(i,t,e){i.marked[t]===e?delete i.marked[t]:i.marked[t]=e}function X0(i,t,e){if(t===e)return!1;for(let n=0;n<i.compares.length;n++){const s=i.compares[n];if(s[0]===t&&s[1]===e||s[0]===e&&s[1]===t)return!1}return i.compares.push([t,e]),!0}function q0(i,t){i.visited.indexOf(t)===-1&&i.visited.push(t)}function Ps(i){return i.visited.indexOf("lai")!==-1&&i.visited.indexOf("cidi")!==-1&&i.visited.indexOf("cha")!==-1}function Ji(i,t){return i.collected.filter(e=>i.regions[e]===t).length}function Zi(i){return i.collected.filter(t=>i.regions[t]==="yu").length}function Ls(i){for(let t=0;t<Ss.length;t++)if(Ji(i,Ss[t])<1)return!1;return!(Zi(i)<1||i.compares.length<1)}function Dr(i){const t=.08+Math.min(i.collected.length,12)*.055+Math.min(i.compares.length,4)*.08;return i.answer?Math.min(1,t+.2):Math.min(.85,t)}function Y0(i){const t=[],e=s=>i.achievements.indexOf(s)!==-1;return Ss.every(s=>i.visited.indexOf(s)!==-1)&&!e("fourlands")&&(i.achievements.push("fourlands"),t.push("fourlands")),i.compares.length>=1&&!e("different")&&(i.achievements.push("different"),t.push("different")),Zi(i)>=2&&!e("others")&&(i.achievements.push("others"),t.push("others")),Ps(i)&&i.visited.indexOf("wei")!==-1&&!e("blindlight")&&(i.achievements.push("blindlight"),t.push("blindlight")),i.answer&&!e("become")&&(i.achievements.push("become"),t.push("become")),t}function Ir(i){return i.answer?4:i.compares.length>=1&&Zi(i)>=1?3:i.compares.length>=1?2:i.collected.length>=1?1:0}function Oa(i,t){for(let e=0;e<i.cards.length;e++)if(i.cards[e].id===t)return i.cards[e];return null}const ph=["story","fact","view","person","blind"],j0=330*1e3;class We extends Error{constructor(t,e){super(t),this.name="WorldError",this.status=e&&e.status||0}}function me(i){return typeof i=="string"}function yn(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function mh(i){if(!me(i))return!1;try{const t=new URL(i);return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}}function $0(i){const t=[],e=[],n=new Set;if(i==null)return{sources:e,warnings:t};if(!Array.isArray(i))return t.push("sources 不是数组，已忽略全部来源"),{sources:e,warnings:t};for(const s of i){if(!yn(s))continue;if(!me(s.id)||!s.id.trim()){t.push("一条来源缺少 id，已丢弃");continue}const r=s.id.trim();if(!mh(s.url)){t.push("来源「"+r+"」链接不是 http(s)，已丢弃");continue}if(n.has(r)){t.push("来源 id 重复："+r);continue}n.add(r),e.push({id:r,title:me(s.title)&&s.title.trim()?s.title.trim():s.url,url:s.url,author:me(s.author)?s.author.trim():"",excerpt:me(s.excerpt)?s.excerpt.trim():""})}return{sources:e,warnings:t}}function K0(i,t){if(!yn(i)||!me(i.id)||!i.id.trim()||ph.indexOf(i.type)===-1)return null;const e=new Set,n=[];if(Array.isArray(i.sourceIds))for(const o of i.sourceIds){if(!me(o))continue;const a=o.trim();!a||e.has(a)||!t.has(a)||(e.add(a),n.push(a))}const s=Array.isArray(i.body)?i.body.filter(o=>me(o)&&o.trim()):[],r={id:i.id.trim(),type:i.type,t:me(i.t)&&i.t.trim()?i.t.trim():i.id.trim(),who:me(i.who)?i.who.trim():"",body:s,ask:me(i.ask)?i.ask.trim():"",tags:Array.isArray(i.tags)?i.tags.filter(me):[],sourceIds:n};return me(i.stance)&&i.stance.trim()&&(r.stance=i.stance.trim()),me(i.quote)&&i.quote.trim()&&(r.quote=i.quote.trim()),r}function J0(i){if(!yn(i))throw new We("生成服务返回的不是 JSON 对象");if(!me(i.q)||!i.q.trim())throw new We("生成服务返回缺少问题文本（q）");const t=[],e=$0(i.sources);for(const l of e.warnings)t.push(l);const n=new Set(e.sources.map(l=>l.id));if(!Array.isArray(i.cards))throw new We("生成服务返回的 cards 不是数组");const s=[],r=new Set;for(const l of i.cards){const h=K0(l,n);if(!h){t.push("一张卡缺少 id 或类型不合法，已丢弃");continue}if(r.has(h.id)){t.push("卡 id 重复："+h.id+"，保留第一张");continue}r.add(h.id),s.push(h)}const o=ph.filter(l=>!s.some(h=>h.type===l));if(o.length)throw new We("返回的问题包缺少卡片类型："+o.join(" / "));let a;i.islandPlans!==void 0&&i.islandPlans!==null&&(yn(i.islandPlans)?a=i.islandPlans:t.push("islandPlans 形状不是对象，已忽略"));const c={id:me(i.id)&&i.id.trim()?i.id.trim():"remote",q:i.q.trim(),sub:me(i.sub)?i.sub:"",cards:s,sources:e.sources,provenance:yn(i.provenance)?i.provenance:{}};return!yn(i.provenance)&&i.provenance!==void 0&&t.push("provenance 形状不是对象，已置空"),a&&(c.islandPlans=a),{pack:c,warnings:t}}async function Z0(i,t){const e=String(i||"").trim();if(!e)throw new We("问题不能为空");const n=j0,s=typeof fetch=="function"?fetch:null;if(!s)throw new We("当前环境没有 fetch，无法请求生成服务");const r=typeof AbortController=="function"?new AbortController:null;let o=null;r&&(o=setTimeout(()=>{try{r.abort()}catch{}},n));let a;try{a=await s("/api/world",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e,withIslandPlans:!0}),signal:r?r.signal:void 0})}catch(l){throw l&&l.name==="AbortError"?new We("生成超时（"+Math.round(n/1e3)+" 秒）。服务端可能仍在计算。仍在进行的同一问题请求会合并；结束后重试可能重新生成。"):new We("无法连接生成服务（/api/world）："+(l&&l.message?l.message:"网络错误"))}finally{o&&clearTimeout(o)}if(!a.ok){let l="";try{const h=await a.json();yn(h&&h.error)&&me(h.error.message)?l="：["+(me(h.error.code)?h.error.code:"错误")+"] "+h.error.message:h&&me(h.message)?l="："+h.message:me(h&&h.error)&&(l="："+h.error)}catch{}throw a.status===429&&!l&&(l="：服务忙，请稍后重试"),new We("生成服务返回 "+a.status+l,{status:a.status})}let c;try{c=await a.json()}catch{throw new We("生成服务返回的不是有效 JSON")}return J0(c)}async function gh(i,t){const n=typeof fetch=="function"?fetch:null;if(!n)throw new We("当前环境没有 fetch");const s=typeof AbortController=="function"?new AbortController:null;let r=null;s&&(r=setTimeout(()=>{try{s.abort()}catch{}},26e4));try{const o=await n("/api/island/adapt",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),signal:s?s.signal:void 0});if(!o.ok){let c="";try{const l=await o.json();yn(l&&l.error)&&me(l.error.message)&&(c="："+l.error.message)}catch{}throw new We("island/adapt 返回 "+o.status+c,{status:o.status})}const a=await o.json();if(!yn(a)||a.ok!==!0||!yn(a.plan))throw new We("island/adapt 返回缺少 ok/plan");return{plan:a.plan,online:!0}}finally{r&&clearTimeout(r)}}const gl={lai:i=>"小径走完——这些来路都通向「"+i+"」的问法本身。",cidi:i=>"条件摆齐了。对着「"+i+"」再看一遍，哪一条最硬？",cha:()=>"两条岸都看过了。点 Bloomy → ⚖️ 比较观点，把最不一样的两张摆上桌。",yu:()=>"火光里都是真实的人。哪一句话你听进去了？",wei:i=>"雾散了。「"+i+"」被检查出了什么？",form:()=>"连线织成网，你的答案已经在长出来。"};function Ba(i,t){if(t==="local-demo")return{kind:"rule",text:"本地规则生成（演示）"};if(t==="legacy")return{kind:"rule",text:"本地规则重建"};const e=i&&i.provenance||{},n=e.llm&&typeof e.llm=="object"&&!Array.isArray(e.llm)?e.llm:{},s=e.engine||e.source||(n.model?"llm":""),r=typeof e.model=="string"&&e.model||typeof n.model=="string"&&n.model||"";return s==="llm"?{kind:"llm",text:"LLM 生成"+(r?" · "+r:"")}:s==="rule"?{kind:"rule",text:"规则生成"}:t==="api"?{kind:"unknown",text:"来源未标注"}:{kind:"unknown",text:"手工预设包"}}function _h(i,t){return t==="form"?i.cards:i.cards.filter(e=>Qn[e.type]===t)}function za(i,t){if(!i||typeof i!="object"||Array.isArray(i))return null;const e=new Set(t.map(a=>a.id)),n=[];if(Array.isArray(i.steps))for(const a of i.steps.slice(0,6))!a||typeof a!="object"||e.has(a.cardId)&&(typeof a.prompt!="string"||!a.prompt.trim()||n.push({cardId:a.cardId,prompt:a.prompt.trim()}));const s=typeof i.completion=="string"?i.completion.trim():"",r=typeof i.hint=="string"?i.hint.trim():"",o=Array.isArray(i.relHints)?i.relHints.filter(a=>typeof a=="string"&&a.trim()).map(a=>a.trim()).slice(0,6):[];return!n.length&&!s&&!r&&!o.length?null:{source:i.source==="llm"||i.source==="rule"?i.source:"unknown",hint:r,steps:n,completion:s,relHints:o}}function Q0(i){const t=i.indexOf("。");return t>0?i.slice(0,t+1):i}function t_(i,t,e){const n=[];(e.collected||[]).indexOf(i.id)!==-1&&e.marked[i.id]!=="doubt"&&n.push("你已收下「"+i.t+"」——"),e.marked[i.id]==="doubt"?n.push("你给「"+i.t+"」标过存疑，正好审一审："):e.marked[i.id]==="wow"&&n.push("「"+i.t+"」让你惊讶。"),(e.compares||[]).some(o=>o.indexOf(i.id)!==-1)&&n.push("它上过对照桌。");let s=i.ask;!s&&i.body&&i.body[0]&&(s="回到证据本身："+Q0(i.body[0])),s||(s="它给你的问题是什么？");const r=Qn[i.type];return t.shape==="choice"&&t.optA&&(r==="cha"||r==="cidi")&&(s+="（它把「"+t.optA+"」还是「"+t.optB+"」说得更有分量？）"),n.push(s),n.join(" ")}function e_(i){const t=n=>i.some(s=>s.type===n),e=[];return t("fact")&&t("view")&&e.push("事实 × 立场：这条数据撑得住那个观点吗？"),t("story")&&t("view")&&e.push("来路 × 立场：TA 的经历和观点对得上吗？"),t("person")&&t("story")&&e.push("两段经历：差的是哪一步？"),t("blind")&&e.push("盲点卡挑中了哪张的毛病？"),e.push("它们在你的问题里各占哪一块？"),e.slice(0,4)}function n_(i,t,e){const n=_h(i,t),s=hh(i.q),r=e||{collected:[],marked:{},compares:[]};return{source:"rule",hint:"",steps:n.map(o=>({cardId:o.id,prompt:t_(o,s,r)})),completion:gl[t]?gl[t](s.topic||i.q):"",relHints:t==="form"?e_(n):[]}}function i_(i,t,e){if(!i||!Array.isArray(i.cards))return null;const n=_h(i,t);if(!n.length&&t!=="form")return null;const s=i.islandPlans?za(i.islandPlans[t],n):null;return s?(s.source==="unknown"&&(s.source=Ba(i).kind==="rule"?"rule":"llm"),s):n_(i,t,s_(e))}function vh(i,t,e){const n=i||{},s=typeof e=="function"?e:l=>l,r=[],o=n.marked||{};for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&r.push((o[l]||"标记")+":"+s(l));for(const l of n.compares||[])r.push("对照:"+s(l[0])+"×"+s(l[1]));const a=n.regionChoices&&typeof n.regionChoices=="object"?n.regionChoices[t]:null;Array.isArray(a)&&r.push(...a);const c=Array.isArray(n.collected)?n.collected:[];for(const l of c.slice(-4))r.push("已收下:"+s(l));return r.slice(0,24)}function s_(i){return i||{collected:[],marked:{},compares:[]}}const xh="guiyi.communityQuestions",r_=30,o_=["AI 时代，还要学画画吗？","毕业后，先就业还是先创业？","30 岁转行，来得及吗？","考研还是工作？","天亮了，鸟会叫吗？","留在大城市，还是回小城生活？","为什么我越努力越焦虑？","怎样才能不怕当众发言？","现在开始学乐器，晚吗？","该不该为了喜欢的事放弃稳定？","朋友借钱拖着不还，我该开口要吗？","我到底适合做什么工作？","十年后的我，会怎么看今天这个决定？","如果不必完美，我敢不敢直接开始？"];function yh(i){return String(i||"").replace(/\s+/g," ").trim().slice(0,40)}function Mh(){try{const i=JSON.parse(localStorage.getItem(xh)||"[]");if(!Array.isArray(i))return[];const t=new Set,e=[];for(const n of i){const s=yh(n&&n.q);s.length<2||t.has(s)||(t.add(s),e.push({q:s,at:n&&n.at||0}))}return e}catch{return[]}}function a_(i){const t=yh(i);if(t.length<2)return!1;const e=Mh().filter(n=>n.q!==t);e.unshift({q:t,at:Date.now()});try{localStorage.setItem(xh,JSON.stringify(e.slice(0,r_)))}catch{}return!0}function c_(i){const t=Math.max(1,i),e=Mh().slice(0,2),n=new Set(e.map(o=>o.q)),s=o_.filter(o=>!n.has(o)),r=[];for(;r.length<t-e.length&&s.length;)r.push(s.splice(Math.floor(Math.random()*s.length),1)[0]);return[...e.map(o=>({q:o.q,from:"comm"})),...r.map(o=>({q:o,from:"seed"}))]}class l_{constructor(){this.enabled=!1,this.ctx=null,this.master=null,this.amb=null}_ensure(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.12,this.master.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume(),!0}toggle(){return this.enabled=!this.enabled,this.enabled?this._ambientOn():this._ambientOff(),this.enabled}_ambientOn(){if(!this._ensure()||this.amb)return;const t=this.ctx.createGain();t.gain.value=0,t.gain.linearRampToValueAtTime(.5,this.ctx.currentTime+2.5);const e=this.ctx.createOscillator();e.type="sine",e.frequency.value=108;const n=this.ctx.createOscillator();n.type="sine",n.frequency.value=162,n.detune.value=6;const s=this.ctx.createOscillator();s.type="triangle",s.frequency.value=324,s.detune.value=-8;const r=this.ctx.createGain();r.gain.value=.18,e.connect(t),n.connect(t),s.connect(r),r.connect(t),t.connect(this.master),e.start(),n.start(),s.start(),this.amb={g:t,oscs:[e,n,s]}}_ambientOff(){if(!this.amb)return;const t=this.amb;this.amb=null,t.g.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.6),setTimeout(()=>{t.oscs.forEach(e=>{try{e.stop()}catch{}})},800)}blip(t){if(!this.enabled||!this._ensure())return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="square",n.frequency.value=t||660;const s=this.ctx.createGain();s.gain.value=1e-4,s.gain.exponentialRampToValueAtTime(.4,e+.012),s.gain.exponentialRampToValueAtTime(1e-4,e+.14),n.connect(s),s.connect(this.master),n.start(e),n.stop(e+.16)}}class h_{constructor(t){this.cb=t,this.sfx=new l_,this.tags={},this.mmDots={},this.sayTimer=null,this.selPack="paint",this.radialOpen=!1,this.build()}el(t,e,n,s){const r=document.createElement(t);return e&&(r.className=e),s!=null&&(r.innerHTML=s),n&&n.appendChild(r),r}build(){let t=document.getElementById("ui");t||(t=this.el("div","",document.getElementById("app")),t.id="ui"),this.ui=t,this.buildTopbar(),this.buildBubble(),this.buildMinimap(),this.buildActionbar(),this.buildPhilosophyPanel(),this.toastwrap=this.el("div","toastwrap",t),this.buildGenerating(),this.buildRadial(),this.buildHelp(),this.buildIntro()}buildTopbar(){const t=this.el("div","topbar",this.ui),e=this.el("div","q-sticker panel",t);this.el("div","q-label",e,"当前问题 · QUESTION"),this.qText=this.el("div","q-text",e,"……"),this.qOrigin=this.el("div","q-origin",e),this.qOrigin.style.display="none";const n=this.el("div","hud-right",t),s=this.el("div","steps panel",n);this.stepEls=[];const r=["提问","探索","对照","遇见","成形"];for(let a=0;a<5;a++){const c=this.el("div","step",s,"<span class=st-num>"+(a+1)+"</span>"+r[a]);this.stepEls.push(c)}const o=this.el("div","iconrow",n);this.btnSound=this.el("button","icobtn",o,"🔇"),this.btnQuiet=this.el("button","icobtn",o,"🌙"),this.btnHelp=this.el("button","icobtn",o,"❓"),this.btnReset=this.el("button","icobtn",o,"↺"),this.btnSound.title="宇宙环境音",this.btnQuiet.title="安静模式（减少动效）",this.btnHelp.title="玩法说明",this.btnReset.title="重置宇宙",this.btnSound.addEventListener("click",()=>{const a=this.sfx.toggle();this.btnSound.textContent=a?"🔊":"🔇",this.btnSound.classList.toggle("on",a),a&&this.sfx.blip(760)}),this.btnQuiet.addEventListener("click",()=>{const a=document.body.classList.toggle("quiet");this.btnQuiet.classList.toggle("on",a),this.sfx.blip(520)}),this.btnHelp.addEventListener("click",()=>{this.helpBg.style.display="flex",this.sfx.blip(620)}),this.btnReset.addEventListener("click",()=>{this.cb.onReset()})}buildBubble(){this.bubbleWrap=this.el("div","bubble-wrap hide",this.ui);const t=this.el("div","bubble panel",this.bubbleWrap);this.el("div","b-ava",t,"🌱"),this.bubbleText=this.el("div","b-txt",t,"……"),this.el("button","b-close",t,"×").addEventListener("click",()=>this.hideBubble())}say(t,e){this.bubbleText.textContent=t,this.bubbleWrap.classList.remove("hide"),this.sayTimer&&clearTimeout(this.sayTimer),this.sayTimer=setTimeout(()=>this.hideBubble(),e||7e3)}hideBubble(){this.bubbleWrap.classList.add("hide")}buildMinimap(){const t=this.el("div","minimap",this.ui);for(const e of _n){let n=50,s=50;if(!e.center){const o=e.angle*Math.PI/180;n=50+Math.cos(o)*37,s=50+Math.sin(o)*37}const r=this.el("div","mm-dot",t);r.style.left=n+"%",r.style.top=s+"%",r.dataset.key=e.key,this.el("span","mm-name",r,e.name),this.mmDots[e.key]=r}t.addEventListener("click",e=>{const n=e.target.closest(".mm-dot");n&&n.dataset.key&&this.cb.onMinimap(n.dataset.key)})}buildActionbar(){const t=this.el("div","actionbar",this.ui);this.bloomyBtn=this.el("button","btn ghost",t,"🌱 Bloomy"),this.formBtn=this.el("button","btn primary",t,"✦ 去成形"),this.formBtn.style.display="none",this.bloomyBtn.addEventListener("click",e=>{e.stopPropagation();const n=this.bloomyBtn.getBoundingClientRect();this.openRadial(n.left+10,n.top-190)}),this.formBtn.addEventListener("click",()=>this.cb.onForm())}buildPhilosophyPanel(){const t=this.el("div","philosophy-panel panel",this.ui);this.el("div","philosophy-kicker",t,"归一 · 认知冒险"),this.philosophyLoop=this.el("div","philosophy-loop",t,'<span class="pl-active">提问</span><i>→</i><span>探索</span><i>→</i><span>对照</span><i>→</i><span>遇见</span><i>→</i><span>成形</span>'),this.el("div","philosophy-hint",t,"证据先于结论 · 每次回来，世界多一条路");const e=this.el("div","philosophy-islands",t);[["lai","经历","别人怎样走过"],["cidi","现实","我面对什么条件"],["cha","分歧","不同答案为何成立"],["wei","未知","我还没想到的可能"]].forEach(([n,s,r])=>{const o=this.el("button","philosophy-island",e);o.innerHTML="<b>"+s+"</b><small>"+r+"</small>",o.addEventListener("click",()=>this.cb.onMinimap(n))}),this.philosophyMission=this.el("div","philosophy-mission",t,"🧭 下一步：把一个问题交给宇宙")}setFormAvailable(t){this.formBtn.style.display=t?"":"none"}buildRadial(){this.radial=this.el("div","radial",this.ui),this.radial.style.display="none";const t=[["explain","💬 解释此地"],["compare","⚖️ 比较观点"],["next","🧭 建议下一站"],["reask","🌀 换个问法"]];for(const e of t)this.el("div","rd-item",this.radial,e[1]).addEventListener("click",s=>{s.stopPropagation(),this.closeRadial(),this.cb.onRadial(e[0])});document.addEventListener("click",()=>this.closeRadial())}openRadial(t,e){this.radial.style.left=Math.max(10,t)+"px",this.radial.style.top=Math.max(10,e)+"px",this.radial.style.display="flex",this.radialOpen=!0}closeRadial(){this.radialOpen&&(this.radial.style.display="none",this.radialOpen=!1)}buildGenerating(){this.genEl=this.el("div","generating",this.ui),this.genEl.style.display="none",this.genStamp=this.el("div","gen-stamp panel",this.genEl),this.el("div","gen-sub",this.genEl,"四座认知之岛，正从海面升起……")}showGenerating(t){this.genStamp.textContent=t,this.genEl.style.display="flex"}hideGenerating(){this.genEl.classList.add("fadeout"),setTimeout(()=>{this.genEl.style.display="none",this.genEl.classList.remove("fadeout")},750)}setStartBusy(t){this.startBtn&&(this.startBtn.disabled=t,this.startBtn.textContent=t?"生成中…":"开始探索 →"),this.askBtn&&(this.askBtn.disabled=t)}setPackOrigin(t){this.qOrigin&&(t?(this.qOrigin.textContent=t,this.qOrigin.style.display=""):(this.qOrigin.textContent="",this.qOrigin.style.display="none"))}showWorldError(t,e){this.hideWorldError();const n=this.el("div","modal-bg",this.ui);this.worldErrEl=n;const s=this.el("div","modal panel",n),r=this.el("button","modal-close",s,"×");this.el("div","help-title",s,"生成没有成功");const o=this.el("div","help-list",s);o.textContent=String(t||"生成服务暂时不可用。")+" 这不影响你本地已有的存档。";const a=this.el("div","intro-actions",s),c=this.el("button","btn primary",a,"重试生成"),l=this.el("button","btn ghost",a,"改用本地演示内容…");c.addEventListener("click",()=>{const h=e&&e.onRetry;this.hideWorldError(),h&&h()}),l.addEventListener("click",()=>{const h=e&&e.onDemo;this.hideWorldError(),h&&h()}),r.addEventListener("click",()=>this.hideWorldError()),n.addEventListener("click",h=>{h.target===n&&this.hideWorldError()})}hideWorldError(){this.worldErrEl&&(this.worldErrEl.remove(),this.worldErrEl=null)}showDemoChooser(t){this.hideDemoChooser();const e=this.el("div","modal-bg",this.ui);this.demoEl=e;const n=this.el("div","modal panel",e),s=this.el("button","modal-close",n,"×");this.el("div","help-title",n,"选择本地演示内容");const r=this.el("div","help-list",n),o=this.el("div","",r);o.textContent="在线生成暂不可用。以下为预先打磨的本地演示包，或按你输入的问题本地规则生成（非 LLM）。";const a=this.el("div","demo-choices",n);for(const l of ps){const h=this.el("button","btn ghost demo-choice",a);h.textContent=(l.sub?l.sub+" · ":"")+l.q,h.addEventListener("click",()=>{this.hideDemoChooser(),t({mode:"preset",packId:l.id})})}const c=this.el("button","btn ghost demo-choice",a);c.textContent="用我的问题本地生成（规则版，非 LLM）",c.addEventListener("click",()=>{const l=this.input?this.input.value.trim():"";this.hideDemoChooser(),t({mode:"rule",question:l})}),s.addEventListener("click",()=>this.hideDemoChooser()),e.addEventListener("click",l=>{l.target===e&&this.hideDemoChooser()})}hideDemoChooser(){this.demoEl&&(this.demoEl.remove(),this.demoEl=null)}buildHelp(){this.helpBg=this.el("div","modal-bg",this.ui),this.helpBg.style.display="none";const t=this.el("div","modal panel",this.helpBg),e=this.el("button","modal-close",t,"×");this.el("div","help-title",t,"怎么玩"),this.el("div","help-list",t,"<div><b>1 提问</b>：把你的问题交给宇宙，它不给你答案，只为它生成一片可探索的星空。</div><div><b>2 探索</b>：点击浮岛或小地图，去 来路 / 此地 / 岔路 收下不同的卡。每张卡都是一种看见。</div><div><b>3 对照</b>：把两张卡放上对照桌。差异自己会说话，你可以裁决，也可以先存着。</div><div><b>4 遇见</b>：去遇见岛，听真实的人讲话。共鸣比观点更接近理解。</div><div><b>5 成形</b>：走够四个方向、见过他者、做过对照之后，中央岛为你打开。写下属于你的答案。</div><div>🌱 <b>Bloomy</b> 是你的同伴，点击它随时可以让它解释、比较、带路，或换个问法。</div><div>🧠 <b>内容来源</b>：默认由服务端 LLM（含知乎检索）为你的问题实时生成问题包，来源徽标会如实标注；无服务时可在错误弹窗里显式选择本地演示内容。</div><div>📮 <b>问题漂流</b>：留下的问题只保存在本浏览器的本地存档里，仅作你自己下次进入时的参考标签；它不会发布到知乎，也不会同步给其他用户。</div><div>✦ 传送门提示：走完 来路 / 此地 / 岔路 三岛，未至岛的门会为你点亮。</div><div>🖐 拖拽旋转 · 滚轮缩放 · 双击回到全景。</div>"),e.addEventListener("click",()=>{this.helpBg.style.display="none"}),this.helpBg.addEventListener("click",n=>{n.target===this.helpBg&&(this.helpBg.style.display="none")})}buildIntro(){this.intro=this.el("div","intro",this.ui);const t=this.el("div","intro-card panel",this.intro);this.el("div","intro-crown",t,"🌱"),this.el("div","intro-brand",t,"GUIYI · 归一"),this.el("div","intro-title",t,"一问<em>一世界</em>"),this.el("div","intro-slogan",t,"看见不同，形成自己"),this.el("div","intro-lede",t,"把一个问题交给宇宙，它不会直接给你答案——它会生成一片可探索的 3D 星域：六座浮岛，五步旅程。你将穿过别人的来路、脚下的此地、分歧的岔路，遇见真实的人，照亮自己的盲点，最后在中央岛形成属于你的答案。"),this.el("div","intro-q",t,"看看别人在问什么 · 点一下作参考，或写下你自己的");const e=this.el("div","intro-chips",t);this.chipEls=[];const n=c_(3);for(const h of n){const u=this.el("button","chip"+(h.from==="comm"?" chip--comm":""),e);u.textContent=(h.from==="comm"?"📮 ":"")+h.q,u.title=h.from==="comm"?"本浏览器里之前留下的问题（不上传、不跨用户）":"点击把问题填进下面，作为参考",u.addEventListener("click",()=>{this.input.value=h.q,this.chipEls.forEach(d=>d.classList.remove("active")),u.classList.add("active"),this.input.focus()}),this.chipEls.push(u)}const s=this.el("div","intro-input",t);this.input=this.el("input","",s),this.input.placeholder="写下你自己的问题，宇宙会为它单独生成……",this.input.maxLength=40,this.askBtn=this.el("button","btn",s,"造一个宇宙");const r=this.el("div","intro-actions",t);this.startBtn=this.el("button","btn primary",r,"开始探索 →"),this.el("span","intro-hint",r,"建议用电脑全屏体验 · 支持触屏");const o=this.el("div","intro-continue",t);this.contRow=o,o.style.display="none",this.contInfo=this.el("span","",o,"发现未完成的宇宙");const a=this.el("button","btn small primary",o,"继续"),c=this.el("button","btn small ghost",o,"放弃存档"),l=()=>{const h=this.input.value.trim();this.sfx.blip(880),this.cb.onStart(h||null)};this.startBtn.addEventListener("click",l),this.askBtn.addEventListener("click",()=>{if(!this.input.value.trim()){this.input.focus();return}this.selPack="paint",l()}),a.addEventListener("click",()=>this.cb.onContinue()),c.addEventListener("click",()=>this.cb.onDiscard()),this.input.addEventListener("keydown",h=>{h.key==="Enter"&&l()})}showIntro(t){this.intro.style.display="flex",t?(this.contRow.style.display="flex",this.contInfo.textContent="发现未完成的宇宙：「"+t+"」"):this.contRow.style.display="none"}hideIntro(){this.intro.style.display="none"}setQuestion(t){this.qText.textContent=t}setStep(t){for(let e=0;e<5;e++){const n=this.stepEls[e];n.classList.toggle("done",e<t),n.classList.toggle("doing",e===t)}this.philosophyLoop&&this.philosophyLoop.querySelectorAll("span").forEach((e,n)=>e.classList.toggle("pl-active",n===t))}setMission(t){this.philosophyMission&&(this.philosophyMission.textContent="🧭 下一步："+String(t||"继续探索"))}createTag(t){const e=this.el("div","tag",document.getElementById("labels")),n=this.el("span","tag-dot",e);n.style.background=t.color,this.el("span","tag-name",e,t.name),this.el("span","tag-sub",e,t.sub);const s=this.el("span","tag-count",e,"0");return s.style.display="none",this.tags[t.key]={el:e,count:s},e}setTagCount(t,e){const n=this.tags[t];n&&(n.count.textContent=String(e),n.count.style.display=e>0?"":"none")}setVisited(t){for(const e in this.mmDots){const n=this.mmDots[e],s=Qe[e];n.classList.toggle("visited",t.indexOf(e)!==-1),n.style.background=t.indexOf(e)!==-1?s.color:"#555"}}setCurrent(t){for(const e in this.mmDots)this.mmDots[e].classList.toggle("current",e===t)}toast(t,e){const n=this.el("div","toast panel "+(e||"info"),this.toastwrap);n.textContent=t,setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},3400)}toastAchievement(t){this.toast("🏆 成就解锁 · "+t,"ach"),this.sfx.blip(990),setTimeout(()=>this.sfx.blip(1320),120)}}function u_(i){try{return new URL(i).host}catch{return i}}function yi(i,t){if(!i||!Array.isArray(i.sourceIds)||!i.sourceIds.length||!Array.isArray(t)||!t.length)return null;const e=new Map;for(const a of t)a&&a.id&&e.set(a.id,a);const n=[],s=new Set;for(const a of i.sourceIds){const c=e.get(a);!c||s.has(a)||!mh(c.url)||(s.add(a),n.push(c))}if(!n.length)return null;const r=document.createElement("div");r.className="src-refs",r.addEventListener("click",a=>a.stopPropagation());const o=document.createElement("span");o.className="src-refs__label",o.textContent="来源",r.appendChild(o);for(const a of n){const c=document.createElement("a");c.className="src-refs__link",c.href=a.url,c.target="_blank",c.rel="noopener noreferrer",c.textContent=a.title&&String(a.title).trim()||u_(a.url);const l=[a.author,a.excerpt].filter(h=>typeof h=="string"&&h.trim()).join(" · ");c.title=l||a.url,r.appendChild(c)}return r}function ki(i,t){if(!i||!Array.isArray(i.steps)||!t)return"";for(const e of i.steps)if(e&&e.cardId===t.id&&typeof e.prompt=="string"&&e.prompt.trim())return e.prompt.trim();return""}function Sh(i,t){const e=ki(i,t)||t&&t.ask||"";if(!e)return null;const n=document.createElement("div");return n.className="plan-ask",n.textContent="✦ "+e,n}function d_(i){if(!i)return null;const t=i.online||i.source==="llm"?"llm":i.source==="rule"?"rule":"unknown",e=i.online?"LLM 引导 · 在线":i.source==="llm"?"LLM 引导 · 本包计划":i.source==="rule"?"规则引导 · 本地推导":"引导 · 来源未标注",n=document.createElement("span");return n.className="plan-badge plan-badge--"+t,n.textContent=e,n}function ua(i,t){if(!i)return;i.textContent="";const e=d_(t);if(e&&i.appendChild(e),t&&typeof t.hint=="string"&&t.hint.trim()){const n=document.createElement("span");n.className="plan-hint",n.textContent=t.hint.trim(),i.appendChild(n)}}function Qi(i,t){return i&&typeof i.completion=="string"&&i.completion.trim()?i.completion.trim():t||""}const f_=[["a","我更信左边"],["b","我更信右边"],["half","各取一半"],["unsure","先都存疑"]],p_=[["agree","认同"],["doubt","存疑"],["wow","惊讶"]];class m_{constructor(t,e,n,s){this.cb=t,this.getState=e,this.getCollected=n,this.getSources=s||(()=>[]),this.drawerEl=null,this.readerEl=null,this.compareEl=null}el(t,e,n,s){const r=document.createElement(t);return e&&(r.className=e),s!=null&&(r.innerHTML=s),n&&n.appendChild(r),r}closeDrawer(){this.drawerEl&&(this.drawerEl.remove(),this.drawerEl=null)}closeReader(){this.readerEl&&(this.readerEl.remove(),this.readerEl=null)}closeCompare(){this.compareEl&&(this.compareEl.remove(),this.compareEl=null)}closeAll(){this.closeDrawer(),this.closeReader(),this.closeCompare()}openDrawer(t,e){this.closeDrawer();const n=this.el("div","drawer panel",document.getElementById("ui"));this.drawerEl=n;const s=this.el("div","drawer-head",n),r=this.el("span","d-dot",s);r.style.background=t.color,this.el("span","d-name",s,t.name),this.el("span","d-sub",s,t.sub+" · "+e.length+" 张卡"),this.el("button","drawer-close btn small",s,"×").addEventListener("click",()=>this.closeDrawer());const a=this.el("div","drawer-body",n),c=this.getState();for(const l of e){const h=xs[l.type],u=c.collected.indexOf(l.id)!==-1,d=this.el("div","mini-card"+(u?" got":""),a),p=this.el("span","mc-type",d,h.icon+" "+h.name);p.style.background=h.color;const g=this.el("div","mc-title",d);g.textContent=l.t;const _=this.el("div","mc-who",d);_.textContent=l.who,u&&this.el("span","mc-badge",d,"✓ 已收下"),d.addEventListener("click",()=>this.openReader(l))}}openReader(t){this.closeReader();const e=this.el("div","modal-bg",document.getElementById("ui"));this.readerEl=e;const n=this.el("div","modal panel",e);this.el("button","modal-close",n,"×").addEventListener("click",()=>this.closeReader()),e.addEventListener("click",x=>{x.target===e&&this.closeReader()});const r=xs[t.type],o=this.el("span","cr-type",n,r.icon+" "+r.name);o.style.background=r.color;const a=this.el("div","cr-title",n);a.textContent=t.t;const c=this.el("div","cr-who",n);if(c.textContent=t.who,t.type==="view"&&t.stance){const x=this.el("div","cr-views",n),v=this.el("div","cr-view",x);this.el("span","vw-k",v,"主张");const P=this.el("span","",v);P.textContent=t.stance}if(t.quote){const x=this.el("div","cr-quote",n);this.el("span","cr-quote-mark",x,"「");const v=this.el("span","",x);v.textContent=t.quote}const l=this.el("div","cr-body",n);for(const x of t.body){const v=this.el("div","",l);v.textContent=x}const h=this.el("div","cr-ask",n);h.textContent="✦ "+(t.ask||"");const u=this.el("div","cr-tags",n);for(const x of t.tags){const v=this.el("span","",u);v.textContent=x}const d=yi(t,this.getSources());d&&n.appendChild(d);const p=this.getState(),g=this.el("div","cr-actions",n),_=p.collected.indexOf(t.id)!==-1,m=this.el("button","btn primary",g,_?"✓ 已收下":"收下这张卡");_&&(m.disabled=!0),m.addEventListener("click",()=>{this.cb.onCollect(t),this.closeReader()}),this.el("button","btn ghost",g,"放上对照桌").addEventListener("click",()=>{this.closeReader(),this.openCompare(t.id)});const y=this.el("div","markrow",g);for(const x of p_){const v=p.marked[t.id]===x[0],P=this.el("button","markbtn"+(v?" active":""),y,x[1]);P.addEventListener("click",()=>{this.cb.onMark(t.id,x[0]),P.classList.toggle("active",this.getState().marked[t.id]===x[0])})}}openCompare(t){this.closeCompare();const e=this.getCollected();if(e.length<2)return;const n=this.el("div","modal-bg",document.getElementById("ui"));this.compareEl=n;const s=this.el("div","modal panel",n);this.el("button","modal-close",s,"×").addEventListener("click",()=>this.closeCompare()),n.addEventListener("click",y=>{y.target===n&&this.closeCompare()}),this.el("div","cmp-title",s,"⚖ 对照桌"),this.el("div","cmp-hint",s,"挑两张收下的卡放在一起。差异自己会说话，裁决只对你自己生效。");const o=this.el("div","cmp-pick",s),a=this.el("div","cmp-grid",s),c=this.el("div","cmp-note",s),l=this.el("div","cmp-verdict",s);let h=t||null,u=null;const d={},p=y=>{for(const x of e)if(x.id===y)return x;return null},g=y=>{const x=xs[y.type],v=this.el("div","cmp-card",a),P=this.el("span","mc-type",v,x.icon+" "+x.name);P.style.background=x.color;const C=this.el("div","cc-title",v);C.textContent=y.t;const w=this.el("div","cc-row",v);this.el("b","",w,"谁在说");const R=this.el("span","",w);R.textContent=" "+(y.stance||y.who);const b=this.el("div","cc-row",v);this.el("b","",b,"核心一句");const M=this.el("span","",b),L=y.body[0]||y.quote||"";M.textContent=" "+(L.length>56?L.slice(0,56)+"……":L)},_=(y,x)=>{const v=y.stance||y.who,P=x.stance||x.who;return"「"+y.t+"」说："+v+"；「"+x.t+"」说："+P+"。它们各有来处，也各有代价——差异先摆在这里，你的裁决只对你自己生效。"},m=()=>{for(const y in d)d[y].classList.toggle("sel-a",y===h),d[y].classList.toggle("sel-b",y===u)},f=()=>{a.innerHTML="",c.textContent="",l.innerHTML="";const y=h?p(h):null,x=u?p(u):null;if(y&&g(y),x&&g(x),y&&x){c.textContent=_(y,x);for(const v of f_)this.el("button","btn small ghost",l,v[1]).addEventListener("click",()=>{this.cb.onCompareConfirm(h,u,v[0]),this.closeCompare()})}else c.textContent="再选一张，对照桌就会亮起来。"};for(const y of e){const x=this.el("button","cmp-chip",o);x.textContent=y.t,d[y.id]=x,x.addEventListener("click",()=>{h===y.id?h=null:u===y.id?u=null:h?u=y.id:h=y.id,m(),f()})}m(),f()}}class g_{constructor(t){this.cb=t,this.bg=null}el(t,e,n,s){const r=document.createElement(t);return e&&(r.className=e),s!=null&&(r.textContent=s),n&&n.appendChild(r),r}close(){this.bg&&(this.bg.remove(),this.bg=null)}openComposer(t,e,n,s=[]){this.close();const r=this.el("div","modal-bg",document.getElementById("ui"));this.bg=r;const o=this.el("div","modal panel",r);this.el("div","fm-title",o,"✦ 成形 · 把看见放在一起"),this.el("div","fm-sub",o,"挑 1 到 3 张陪你走到这里的卡作为依据，写下你此刻的答案。"),this.el("div","fm-q",o,t);const a=this.el("div","form-guidance",o),c=f=>{if(a.textContent="",!!f){ua(this.el("div","plan-bar",a),f);for(const y of f.steps||[]){const x=e.find(v=>v.id===y.cardId);x&&this.el("div","plan-ask",a,"「"+x.t+"」："+y.prompt)}}};if(n&&(this.el("div","fm-label",o,"本轮整合任务 · 提示不是标准答案"),c(n)),this.cb.onReplanForm){const f=this.el("button","btn small",o,"在线调整整合提示"),y=this.el("div","plan-hint",o);f.addEventListener("click",async()=>{if(!f.disabled){f.disabled=!0,y.textContent="正在结合已选依据与探索记录调整提示…";try{const x=await this.cb.onReplanForm(Array.from(h));if(this.bg!==r||!r.isConnected)return;c(x),y.textContent="提示已更新，你正在写的答案已保留。"}catch(x){r.isConnected&&(y.textContent="在线调整未成功："+x.message)}finally{f.disabled=!1}}})}this.el("div","fm-label",o,"① 我的依据");const l=this.el("div","fm-pick",o),h=new Set;for(const f of e){const y=xs[f.type],x=this.el("div","fm-item",l);this.el("span","fm-box",x);const v=this.el("span","fm-t",x);v.textContent=y.icon+" "+f.t+" — "+f.who;const P=yi(f,s);P&&(P.addEventListener("click",C=>C.stopPropagation()),x.appendChild(P)),x.addEventListener("click",()=>{if(h.has(f.id))h.delete(f.id),x.classList.remove("sel");else{if(h.size>=3)return;h.add(f.id),x.classList.add("sel")}m()})}this.el("div","fm-label",o,"② 我的答案");const u=this.el("textarea","fm-textarea",o);u.placeholder="此刻，属于你自己的答案是……",this.el("div","fm-label",o,"③ 还带着的问题（可以不填）");const d=this.el("textarea","fm-textarea",o);d.placeholder="没有答案的问题，也值得被带着走";const p=this.el("div","",o);p.style.cssText="display:flex;justify-content:flex-end;gap:10px;align-items:center;";const g=this.el("span","",p);g.style.cssText="font-size:11.5px;color:#8a8064;font-weight:700;margin-right:auto;",g.textContent="答案没有对错，只有是不是你的。";const _=this.el("button","btn primary",p,"写下成形卡 ✦");_.disabled=!0;const m=()=>{_.disabled=h.size<1||u.value.trim().length<1};u.addEventListener("input",m),_.addEventListener("click",()=>{h.size<1||u.value.trim().length<1||this.cb.onSubmit({picks:Array.from(h),text:u.value.trim(),open:d.value.trim()})})}showAnswer(t,e,n,s){this.close();const r=this.el("div","modal-bg",document.getElementById("ui"));this.bg=r;const o=this.el("div","modal panel",r);this.el("button","modal-close",o,"×").addEventListener("click",()=>this.close());const c=this.el("div","ans-head",o);this.el("div","ans-brand",c,"GUIYI · 归一"),this.el("div","ans-big",c,"成 形 卡");const l=this.el("div","ans-qwrap",o);this.el("div","ans-q sticker",l,e);const h=this.el("div","ans-row",o);this.el("div","ar-label",h,"我带着这些看见");const u=this.el("div","ans-finds",h);for(const w of t.picks){let R=null;for(const O of s.cards)O.id===w&&(R=O);if(!R)continue;const b=xs[R.type],M=this.el("div","ans-find",u),L=this.el("span","af-dot",M);L.style.background=b.color,this.el("span","af-t",M,R.t),this.el("span","af-q",M,R.who)}const d=this.el("div","ans-row",o);this.el("div","ar-label",d,"我的答案");const p=this.el("div","ans-answer",d);if(p.textContent=t.text,t.open){const w=this.el("div","ans-row",o);this.el("div","ar-label",w,"还带着的问题");const R=this.el("div","ans-open",w);R.textContent=t.open}const g=this.el("div","ans-row",o);this.el("div","ar-label",g,"这条路");const _=this.el("div","ans-path",g),m=["提问","探索 "+n.cards+" 张","对照 "+n.compares+" 次","遇见 "+n.persons+" 位","成形"];for(let w=0;w<m.length;w++)w>0&&this.el("span","ap-arrow",_,"→"),this.el("span","ap-node",_,m[w]);const f=this.el("div","ans-row",o);this.el("div","ar-label",f,"留给下次探索的问题");const y=this.el("div","drift-wrap",f),x=this.el("input","drift-input",y);x.maxLength=40,x.value=String(t.open||e||"").slice(0,40),x.placeholder="写下你下次想继续探索的问题……";const v=this.el("button","btn small primary",y,"🕊 让它飞回入口");this.el("div","drift-note",f,"只保存在本浏览器，不会发布到知乎或分享给其他用户。下次可从入口标签继续探索。"),v.addEventListener("click",()=>{const w=x.value.trim();if(w.length<2){x.focus();return}a_(w);const R=v.getBoundingClientRect(),b=this.el("div","fly-question",document.body,"📮 "+w);b.style.left=Math.round(R.left)+"px",b.style.top=Math.round(R.top)+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>b.classList.add("fly-away"))),setTimeout(()=>{b.parentNode&&b.parentNode.removeChild(b)},1700),x.disabled=!0,v.disabled=!0,v.textContent="✓ 已飞回入口",this.cb.onFlyBack(w)});const P=this.el("div","ans-foot",o);this.el("span","ans-date",P,t.date||""),this.el("button","btn ghost",P,"换个问题，再来一次").addEventListener("click",()=>this.cb.onNewUniverse()),this.el("span","ans-note",P,"答案归你，问题还给宇宙。")}}function Ht(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}function Ee(i){return String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function ys(i,t=14){const e=String(i??"");return e.length>t?e.slice(0,t)+"…":e}function ka(i,t,e=4){const n=[],s=(i==null?void 0:i.y)??0;for(let r=0;r<t;r+=1){const o=-Math.PI/2+r*2*Math.PI/Math.max(t,1);n.push({x:((i==null?void 0:i.x)??0)+Math.cos(o)*e,y:s+.4,z:((i==null?void 0:i.z)??0)+Math.sin(o)*e})}return n}const __=[{who:"小径",t:"出发之前",body:["你还记得自己是带着什么问题上路的吗？"]}],v_={id:"lai",title:"来路 · 故事小径",hint:"依序点亮故事石，看看每块石下藏着什么",mount(i){var u;const{body:t,cards:e,placer:n,anchor:s,bloomy:r,effects:o,sources:a}=i,c=(e.length?e:__).slice(0,3),l=(u=s.spots)!=null&&u.length?s.spots:ka(s.center,Math.max(c.length,3));t.appendChild(Ht("p","mode-card","这条小径通向你出发的地方。走到石头旁点亮它，它会先告诉你一段来路上的话。"));let h=0;return c.forEach((d,p)=>{var _;const g=Ht("div","mode-stone mode-stone--locked");g.innerHTML='<span class="mode-stone__gem">🪨</span><span class="mode-stone__text"><b>故事石 '+(p+1)+"</b><small>尚未点亮</small></span>",g.addEventListener("click",()=>{var x,v,P,C,w,R,b;if(p!==h||g.classList.contains("mode-stone--lit"))return;g.classList.remove("mode-stone--locked"),g.classList.add("mode-stone--lit");const m=g.querySelector(".mode-stone__text");m.innerHTML="<b>"+Ee(d.who??"经历")+" · "+Ee(d.t??"")+"</b><small>"+Ee(((x=d.body)==null?void 0:x[0])??"")+"</small>";const f=Sh(i.plan,d);f&&m.appendChild(f);const y=yi(d,a);y&&m.appendChild(y),h+=1;try{(v=i.recordChoice)==null||v.call(i,"点亮来路「"+(d.t||"经历")+"」")}catch{}try{(P=o==null?void 0:o.burst)==null||P.call(o,l[p],"#ffb457")}catch{}try{(w=(C=r==null?void 0:r.hud)==null?void 0:C.toast)==null||w.call(C,h<c.length?"石头亮了，继续往前走":"小径全亮了")}catch{}if(h===c.length){t.appendChild(Ht("div","mode-done",Qi(i.plan,"✦ 小径点亮 · 来路已回望")));try{(b=(R=r==null?void 0:r.hud)==null?void 0:R.say)==null||b.call(R,"来路上的这些话，你现在听到的不一样了。")}catch{}i.done()}}),t.appendChild(g);try{(_=n==null?void 0:n.place)==null||_.call(n,Ht("div","mode-wall__tiplabel","🪨 "+(p+1)),l[p])}catch{}}),()=>{}}},Mo=["A","B","C"],x_=[{who:"此地",t:"当下的条件一",body:["先看清此刻已经成立的部分。"]},{who:"此地",t:"当下的条件二",body:["有些条件正在悄悄成立。"]},{who:"此地",t:"当下的条件三",body:["还有一个条件，等你确认。"]}],y_={id:"cidi",title:"此地 · 条件控制台",hint:"逐条翻动条件开关，读屏后拉下汇总杆",mount(i){var p;const{body:t,cards:e,placer:n,anchor:s,effects:r,sources:o}=i,a=(e.length?e:x_).slice(0,3),c=Math.max(a.length,1),l=a.map(()=>!1),h=Ht("div","mode-readout","条件待定 …");t.appendChild(h),a.forEach((g,_)=>{const m=Ht("div","mode-switch");m.innerHTML='<span class="mode-switch__lever"></span><span class="mode-switch__label"><b>条件 '+Mo[_]+"</b> · "+Ee(ys(g.t))+"</span>";const f=yi(g,o);f&&m.appendChild(f),m.addEventListener("click",()=>{l[_]=!l[_],m.classList.toggle("mode-switch--on",l[_]),d()}),t.appendChild(m)});const u=Ht("button","mode-btn","拉下汇总杆");u.disabled=!0,u.addEventListener("click",()=>{var g,_;try{(g=i.recordChoice)==null||g.call(i,"此地汇总条件："+a.filter((m,f)=>l[f]).map(m=>ys(m.t)).join("、"))}catch{}h.textContent=a.map(m=>"» "+(ki(i.plan,m)||m.ask||m.t||"")).join(`
`)+`
—— 这些条件叠在一起，你现在站在哪里？`,t.appendChild(Ht("div","mode-done",Qi(i.plan,"✦ 汇总完成 · 此地已校准")));try{(_=r==null?void 0:r.burst)==null||_.call(r,s.center,"#5aa9ff")}catch{}i.done()}),t.appendChild(u);function d(){const g=l.filter(Boolean).length,_=a.map((m,f)=>{var y;return l[f]?"✓ 条件 "+Mo[f]+"："+(m.who?m.who+" · ":"")+ys(m.t)+" — "+(((y=m.body)==null?void 0:y[0])??"")+(ki(i.plan,m)?`
    ✦ `+ki(i.plan,m):""):"□ 条件 "+Mo[f]+"：未开启"}).join(`
`);h.textContent=g<c?_+`
» 还差 `+(c-g)+" 个条件":_+`
» 条件齐了，可以拉杆汇总`,u.disabled=g<c}d();try{(p=n==null?void 0:n.place)==null||p.call(n,Ht("div","mode-wall__tiplabel","⚙ 条件控制台"),s.center)}catch{}return()=>{}}},M_=[{t:"左岸的路",body:["你还没走的那一条。"],ask:"如果不选它，你错过了什么？"},{t:"右岸的路",body:["另一条看起来更稳的路。"],ask:"如果只走它，你又错过了什么？"}],S_={id:"cha",title:"岔路 · 分岔桥",hint:"转动路牌选一条桥，走过去看看对岸",mount(i){var v,P;const{body:t,cards:e,placer:n,anchor:s,bloomy:r,effects:o,sources:a}=i,l=(e.length>=2?e:M_).slice(0,2).map(C=>({label:ys(C.t??"岸"),card:C})),h=((v=s.spots)==null?void 0:v.length)>=2?[s.spots[0],s.spots[s.spots.length-1]]:ka(s.center,2,5);let u=0,d=!1,p=!1;const g=new Set,_=Ht("div","mode-fork__sign");_.innerHTML='<span class="mode-fork__arm mode-fork__arm--left">'+Ee(l[0].label)+'</span><span class="mode-fork__arm mode-fork__arm--right">'+Ee(l[1].label)+'</span><span class="mode-fork__pole"></span>';const m=Ht("p","mode-card","路牌现在指向 "+l[0].label+"。点路牌可以换一条。"),f=Ht("div","mode-fork__path",'<div class="mode-fork__walk"><i></i></div>'),y=Ht("button","mode-btn","过桥去对岸"),x=Ht("div","mode-card","先选一条路，然后走过去。");_.addEventListener("click",()=>{d||(u=1-u,_.classList.toggle("mode-fork__sign--right",u===1),m.textContent="路牌现在指向 "+l[u].label+"。点路牌可以换一条。")}),y.addEventListener("click",()=>{var C;if(!d){d=!0,y.disabled=!0,f.querySelector("i").style.width="100%";try{(C=r==null?void 0:r.flyTo)==null||C.call(r,h[u])}catch{}setTimeout(()=>{var M,L,O,z;d=!1,y.disabled=!1,f.querySelector("i").style.width="0";const w=l[u].card,R=ki(i.plan,w)||w.ask||"";(M=i.recordChoice)==null||M.call(i,"过桥到「"+l[u].label+"」读「"+(w.t||"")+"」"),x.innerHTML="<b>"+Ee(l[u].label)+" · "+Ee(w.t??"")+"</b><br>"+Ee((w.body??[]).join(" "))+(R?'<br><span style="color:#ffd166">✦ '+Ee(R)+"</span>":"");const b=yi(w,a);if(b&&x.appendChild(b),!g.has(u)){g.add(u);try{(L=o==null?void 0:o.burst)==null||L.call(o,h[u],"#e2604f")}catch{}}if(!p&&g.size===l.length){p=!0,t.appendChild(Ht("div","mode-done",Qi(i.plan,"✦ 两条岸都看过 · 点 Bloomy → ⚖️ 比较观点")));try{(z=(O=r==null?void 0:r.hud)==null?void 0:O.say)==null||z.call(O,"另一条路还在那里。想回头的时候，随时可以再走一次。")}catch{}i.done()}y.textContent="再走另一条看看"},1700)}}),t.append(_,m,f,y,x);try{(P=n==null?void 0:n.place)==null||P.call(n,Ht("div","mode-wall__tiplabel","↗ 岔路"),s.center)}catch{}return()=>{}}},_l=["🧣","🎒","🧢","🍂"],b_=[{who:"同行者",t:"一段相似的经历",body:["我也在类似的地方停了很久。"],ask:"你当时是怎么熬过来的？"},{who:"同行者",t:"一段不同的经历",body:["我的路好像和你相反。"],ask:"如果换成我这样走，你会怎么选？"},{who:"同行者",t:"一句心里话",body:["其实我到现在也没完全想明白。"],ask:"没想明白的部分，你还愿意带着走吗？"}],E_={id:"yu",title:"遇见 · 篝火围坐",hint:"查看作者观点摘要，用自己的态度回应",mount(i){var u;const{body:t,cards:e,placer:n,anchor:s,bloomy:r,effects:o,sources:a}=i,c=(e.length?e:b_).slice(0,3),l=Ht("div","mode-fire","🔥");l.setAttribute("role","img"),t.appendChild(l);let h=0;c.forEach((d,p)=>{const g=Ht("div","mode-figure");g.innerHTML='<span class="mode-figure__face">'+_l[p%_l.length]+'</span><span class="mode-figure__bubble"><b>'+Ee(d.who??"同行者")+'</b><small style="display:block;opacity:.7">点这里，查看来源摘要</small></span>',g.addEventListener("click",()=>{if(g.classList.contains("mode-figure--done"))return;const _=g.querySelector(".mode-figure__bubble"),m=ki(i.plan,d)||d.ask||"";_.innerHTML="<b>"+Ee(d.who??"同行者")+" · "+Ee(d.t??"")+"</b><br>"+Ee((d.body??[]).join(" "))+(m?'<div class="mode-figure__ask">AI 探索追问：'+Ee(m)+"</div>":"")+'<div class="mode-figure__acts"></div>';const f=yi(d,a);f&&_.appendChild(f);const y=_.querySelector(".mode-figure__acts");["这与我的观察相符","这与我的观察不同"].forEach(v=>{const P=Ht("button","mode-btn mode-btn--ghost",v);P.addEventListener("click",()=>x(P)),y.appendChild(P)});function x(v){var C,w,R,b,M,L;(C=i.recordChoice)==null||C.call(i,"对「"+(d.t||"来源观点")+"」选择："+v.textContent),g.classList.add("mode-figure--done"),g.style.cursor="default",y.remove();const P=_.querySelector(".mode-figure__ask");if(P&&P.insertAdjacentHTML("beforeend",' <span style="opacity:.7">（你回应了）</span>'),h+=1,l.style.filter="drop-shadow(0 0 "+(10+h*5)+"px rgba(255,150,60,.9))",h===c.length){l.classList.add("mode-fire--bright"),t.appendChild(Ht("div","mode-done","✦ 篝火烧旺 · 遇见已围坐"));try{(w=o==null?void 0:o.burst)==null||w.call(o,s.center,"#ff9640")}catch{}try{(b=(R=r==null?void 0:r.hud)==null?void 0:R.say)==null||b.call(R,Qi(i.plan,"火光把每个人的样子都照清楚了。"))}catch{}i.done()}else try{(L=(M=r==null?void 0:r.hud)==null?void 0:M.toast)==null||L.call(M,"火光亮了一些")}catch{}}}),t.appendChild(g)});try{(u=n==null?void 0:n.place)==null||u.call(n,Ht("div","mode-wall__tiplabel","🔥 篝火"),s.center)}catch{}return()=>{}}},w_={id:"wei",title:"未至 · 迷雾光门",hint:"逐一拨散迷雾，收集隐藏的节点，唤醒光门",mount(i){var p;const{body:t,cards:e,placer:n,anchor:s,world:r,effects:o,bloomy:a,sources:c}=i,l=e.length,h=((p=s.spots)==null?void 0:p.length)>=l?s.spots.slice(0,l):ka(s.center,l,6),u=Ht("div","mode-gate","⛩️");t.appendChild(u);let d=0;return h.forEach((g,_)=>{var y;const m=e[_],f=Ht("div","mode-mist");f.innerHTML='<span class="mode-mist__icon">🌫️</span><span class="mode-mist__text"><b>迷雾 '+(_+1)+'</b><small>拨开看看</small></span><span class="mode-mist__gem">💎</span>',f.addEventListener("click",()=>{var C,w,R,b,M,L,O,z;if(f.classList.contains("mode-mist--cleared"))return;f.classList.add("mode-mist--cleared");const x=f.querySelector(".mode-mist__text");if(x.innerHTML="<b>节点 "+(_+1)+"</b><small>"+Ee((m==null?void 0:m.t)??"一段还没走到的关系")+"</small>",(C=m==null?void 0:m.body)!=null&&C[0]){const q=Ht("div","plan-evidence");q.textContent=m.body[0],x.appendChild(q)}const v=Sh(i.plan,m);v&&x.appendChild(v);const P=m?yi(m,c):null;P&&x.appendChild(P),d+=1;try{(w=i.recordChoice)==null||w.call(i,"拨开迷雾看「"+((m==null?void 0:m.t)||"")+"」")}catch{}try{(R=o==null?void 0:o.burst)==null||R.call(o,g,"#8ef2b1")}catch{}if(d===h.length){u.classList.add("mode-gate--open");try{(b=r==null?void 0:r.awakenPortal)==null||b.call(r)}catch{}t.appendChild(Ht("div","mode-done",Qi(i.plan,"✦ 光门已醒 · 未至在靠近")));try{(L=(M=a==null?void 0:a.hud)==null?void 0:M.say)==null||L.call(M,"迷雾散开的地方，门就亮了。还没到的，正在靠近。")}catch{}i.done()}else try{(z=(O=a==null?void 0:a.hud)==null?void 0:O.toast)==null||z.call(O,"散开了一团，还有 "+(h.length-d)+" 团")}catch{}}),t.appendChild(f);try{(y=n==null?void 0:n.place)==null||y.call(n,Ht("div","mode-wall__tiplabel","🌫️"),g)}catch{}}),()=>{}}},T_=["相互印证","彼此张力","层层递进"],vl="http://www.w3.org/2000/svg",A_={id:"form",title:"成形 · 关联壁",hint:"点两张卡连成线，给连线命名；也可拖动卡片重排",mount(i){var z,q,j;const{body:t,cards:e,state:n,placer:s,anchor:r,world:o,effects:a}=i,c=n==null?void 0:n.collected,l=c instanceof Set?c:Array.isArray(c)?new Set(c):null,h=((z=n==null?void 0:n.pack)==null?void 0:z.cards)??e,u=l?e.filter(I=>l.has(I.id)):e,d=(u.length>=2?u:h.length>=2?h:e).slice(0,6),p=Ht("div","mode-wall"),g=document.createElementNS(vl,"svg");p.appendChild(g),p.appendChild(Ht("div","mode-wall__core","❓")),t.appendChild(p);function _(){var Q;const I=Array.isArray((Q=i.plan)==null?void 0:Q.relHints)?i.plan.relHints:[];if(!I.length)return;const X=Ht("div","mode-relhints"),G=Ht("div","mode-relhints__title");G.textContent="这些关系，值得先连：",X.appendChild(G);for(const rt of I){const _t=Ht("div","mode-relhints__item");_t.textContent="· "+rt,X.appendChild(_t)}t.appendChild(X)}_(),(q=i.onPlanChange)==null||q.call(i,_);const m=d.map((I,X)=>{const G=X/Math.max(d.length,1)*Math.PI*2-Math.PI/2,Q=Ht("div","mode-chip",Ee(ys(I.t)));return Q.style.left=(.5+.36*Math.cos(G))*100+"%",Q.style.top=(.5+.36*Math.sin(G))*100+"%",p.appendChild(Q),{chip:Q,card:I}}),f=[];let y=null,x=null,v=0,P=0,C=0,w=!1;const R=I=>I.offsetLeft+I.offsetWidth/2,b=I=>I.offsetTop+I.offsetHeight/2;function M(){for(const I of f)I.line.setAttribute("x1",R(I.a)),I.line.setAttribute("y1",b(I.a)),I.line.setAttribute("x2",R(I.b)),I.line.setAttribute("y2",b(I.b)),I.labelEl&&(I.labelEl.style.left=(R(I.a)+R(I.b))/2+"px",I.labelEl.style.top=(b(I.a)+b(I.b))/2-10+"px")}function L(I,X){var _t,Lt,Qt;if(f.some(W=>W.a===I&&W.b===X||W.a===X&&W.b===I))return;const G=document.createElementNS(vl,"line");g.appendChild(G);const Q={a:I,b:X,line:G,rel:null,labelEl:null};f.push(Q),M();const rt=Ht("div","mode-figure__acts");rt.style.flexWrap="wrap",T_.forEach(W=>{const tt=Ht("button","mode-btn mode-btn--ghost",W);tt.addEventListener("click",()=>{var gt;(gt=i.recordChoice)==null||gt.call(i,"连线「"+Q.a.textContent+"×"+Q.b.textContent+"」="+W),Q.rel=W,Q.labelEl=Ht("div","mode-wall__tiplabel",Ee(W)),p.appendChild(Q.labelEl),rt.remove(),M(),O()}),rt.appendChild(tt)}),t.appendChild(rt);try{(Qt=(Lt=(_t=i.bloomy)==null?void 0:_t.hud)==null?void 0:Lt.toast)==null||Qt.call(Lt,"选一个词，命名这条关系")}catch{}}function O(){var I,X;if(!(w||f.filter(G=>G.rel).length<2)){w=!0,p.querySelector(".mode-wall__core").textContent="💡",t.appendChild(Ht("div","mode-done",Qi(i.plan,"✦ 思路成网 · 成形已连接")));try{(I=a==null?void 0:a.burst)==null||I.call(a,r.center,"#ffd166")}catch{}try{(X=o==null?void 0:o.setEnergy)==null||X.call(o,Math.min(1,((o==null?void 0:o.energy)??0)+.2))}catch{}i.done()}}m.forEach(({chip:I})=>{I.addEventListener("pointerdown",X=>{x=I,v=0,P=X.clientX-I.offsetLeft,C=X.clientY-I.offsetTop;try{I.setPointerCapture(X.pointerId)}catch{}I.classList.add("mode-chip--picked")}),I.addEventListener("pointermove",X=>{if(x!==I)return;const G=Math.min(Math.max(X.clientX-P,0),p.clientWidth-I.offsetWidth),Q=Math.min(Math.max(X.clientY-C,0),p.clientHeight-I.offsetHeight);v=Math.max(v,Math.abs(G-I.offsetLeft)+Math.abs(Q-I.offsetTop)),I.style.left=G+"px",I.style.top=Q+"px",M()}),I.addEventListener("pointerup",()=>{x===I&&(I.classList.remove("mode-chip--picked"),v<6?y&&y!==I?(L(y,I),y.classList.remove("mode-chip--picked"),y=null):y===I?y=null:(y=I,I.classList.add("mode-chip--picked")):y=null,x=null)})}),window.addEventListener("resize",M);try{(j=s==null?void 0:s.place)==null||j.call(s,Ht("div","mode-wall__tiplabel","💡 关联壁"),r.center)}catch{}return()=>{window.removeEventListener("resize",M),f.forEach(I=>{var X;try{I.line.remove(),(X=I.labelEl)==null||X.remove()}catch{}})}}},xl={lai:v_,cidi:y_,cha:S_,yu:E_,wei:w_,form:A_},C_={story:"lai",fact:"cidi",view:"cha",person:"yu",blind:"wei"};function R_(i){var n,s;const t=i.state??{},e=i.pack??t.pack??null;return Array.isArray(i.cards)?i.cards:Array.isArray(e==null?void 0:e.cards)?e.cards:Array.isArray(t.cards)?t.cards:Array.isArray((s=(n=i.PACKS)==null?void 0:n[0])==null?void 0:s.cards)?i.PACKS[0].cards:[]}function P_(i,t){var s;const e=R_(i);if(!e.length||t==="form")return e;const n=((s=i.state)==null?void 0:s.TYPE_REGION)??i.TYPE_REGION??C_;return e.filter(r=>n[r.type]===t)}function L_(i){const t=[];return{place(e,n){var r,o;let s=null;try{s=((o=(r=i.engine)==null?void 0:r.addLabel)==null?void 0:o.call(r,e,n))??null}catch{s=null}return t.push({el:e,handle:s}),s},clear(){var e,n;for(const s of t){try{(n=(e=i.engine)==null?void 0:e.removeLabel)==null||n.call(e,s.handle??s.el)}catch{}s.el.remove()}t.length=0}}}function D_(i){let t=null,e=0;function n(r,o){const a=document.createElement("button");return a.className="plan-adapt-btn",a.type="button",a.textContent="🔄 在线重规划",a.title="请求服务端 LLM 结合你的进度，为当前岛重新生成引导（可选，失败时保留本地引导）",a.addEventListener("click",async()=>{var l,h,u,d,p,g;if(a.disabled||!i.pack)return;a.disabled=!0,a.textContent="在线重规划中…";const c=e;try{const _=i.state||{},m=x=>{for(const v of i.pack.cards||[])if(v&&v.id===x)return"「"+(v.t||x)+"」";return x},f=await gh({question:i.pack.q,region:r,cards:o.cards,priorChoices:vh(_,r,m)}),y=za(f.plan,r==="form"?i.pack.cards||[]:o.cards);if(!y)throw new Error("plan empty");y.source="llm",y.online=!0,o.setPlan(y),(u=(h=(l=i.bloomy)==null?void 0:l.hud)==null?void 0:h.toast)==null||u.call(h,"LLM 已按你的进度重写本岛引导")}catch{(g=(p=(d=i.bloomy)==null?void 0:d.hud)==null?void 0:p.toast)==null||g.call(p,"在线适配不可用 · 保留本包/规则引导")}finally{a.disabled=!1,a.textContent="🔄 在线重规划"}}),a}function s(r,o){var c;if(typeof((c=i.ui)==null?void 0:c.createStage)=="function")return i.ui.createStage(r,o.title,o.hint);const a=document.createElement("div");return a.className="mode-stage",a.dataset.region=r,a.innerHTML='<div class="mode-stage__head"><span class="mode-stage__title"></span><span class="mode-stage__hint"></span></div><div class="mode-stage__body"></div>',a.querySelector(".mode-stage__title").textContent=o.title,a.querySelector(".mode-stage__hint").textContent=o.hint??"",(i.dom??document.body).appendChild(a),a}return{has(r){return!!xl[r]},isActive(r){return!!t&&t.key===r},enter(r,o){var y;this.leave();const a=xl[r];if(!a||!o)return!1;const c=s(r,a),l=L_(i),h=((y=c.querySelector)==null?void 0:y.call(c,".mode-stage__body"))??c,u=i_(i.pack,r,i.state),d=i.pack&&Array.isArray(i.pack.sources)?i.pack.sources:[],p=document.createElement("div");p.className="plan-bar",ua(p,u);const g=[],_={...i,stage:c,body:h,placer:l,anchor:o,cards:P_(i,r),sources:d,plan:u,planBar:p,onPlanChange(x){typeof x=="function"&&g.push(x)},recordChoice(x){var w;const v=i.state,P=typeof x=="string"?x.trim():"";if(!v||!P)return;(!v.regionChoices||typeof v.regionChoices!="object"||Array.isArray(v.regionChoices))&&(v.regionChoices={});const C=Array.isArray(v.regionChoices[r])?v.regionChoices[r]:[];C.push(P),v.regionChoices[r]=C.slice(-12);try{(w=i.save)==null||w.call(i)}catch{}},setPlan(x){var P;_.plan=x,ua(p,x),p.appendChild(m);const v=i.state;if(v&&v.pack===i.pack){(!v.pack.islandPlans||typeof v.pack.islandPlans!="object")&&(v.pack.islandPlans={}),v.pack.islandPlans[r]=x;try{(P=i.save)==null||P.call(i)}catch{}}for(const C of g)try{C(x)}catch{}},done(){var x,v,P,C,w,R,b;try{(v=(x=i.progress)==null?void 0:x.complete)==null||v.call(x,r)}catch{}try{(C=(P=i.effects)==null?void 0:P.ripple)==null||C.call(P,o.center,"#ffd166")}catch{}try{(b=(R=(w=i.bloomy)==null?void 0:w.hud)==null?void 0:R.toast)==null||b.call(R,"这一站，完成了")}catch{}}},m=n(r,_);i.pack&&p.appendChild(m),h.appendChild(p);let f=null;try{f=a.mount(_)??null}catch(x){console.warn("[modes] mount failed:",r,x)}return t={key:r,dispose:f,stage:c,placer:l},!0},leave(){var r,o,a;if(t){try{(r=t.dispose)==null||r.call(t)}catch{}t.placer.clear(),typeof((o=i.ui)==null?void 0:o.removeStage)=="function"?i.ui.removeStage():(a=t.stage)==null||a.remove(),t=null}}}}const yl={lai:"来路岛收着别人的故事。故事不是数据——它记录一个人在真实约束下怎么选。先看约束，再看选择。",cidi:"此地岛摆的是条件与事实。焦虑常常来自把未知当成已知；把条件翻清楚，题就先解了一半。",cha:"岔路岛上立场相撞。别急着站队，先问每个立场最护着的是什么、最愿意牺牲的是什么。",yu:"遇见岛上是真实的人。观点可以检索，但一个人讲出自己代价时的犹豫，检索不到。",wei:"未至岛照的是盲点。它不回答你的问题，它检查你的问题本身站不站得住。",form:"成形岛不生产答案，只收你自己长出来的答案。走够四个方向、见过他者、做过对照，水晶就会为你亮。"},I_=["换个问法试试：把「该不该」换成「我愿意为它付什么代价」。","另一个问法：如果两条路都通，你怕的到底是哪一条的什么？","试试问十年后的自己：现在这道题，还会是同一道题吗？","把问题倒过来：要推翻你现在的倾向，需要什么证据？"];let Xt=null,Re=null,vn=null,ce=null,dt=null,ts=null,Kn=null,J=null,$t=null,Er=null,Jn=!1,Ge=null,ms=0;const da=new Set,U_=["cha","yu"];function Ha(i){return i.progress||(i.progress={}),i.progress}function N_(i){const t=Ha(i);let e=0;for(const n in t)t[n]&&e++;return e}function Ga(){if(!J||!Xt)return;const i=N_(J);for(const t of U_)i>=1&&Xt.isLocked(t)&&(Xt.setUnlocked(t,!0),dt.toast("✦ 区域点亮 · "+Qe[t].name));(i>=2||Ps(J))&&Xt.isLocked("wei")&&Xt.awakenPortal()&&(dt.toast("✦ 迷雾散去 · 未至岛向你打开"),ce.say("portal",!0)),sn(J)}function Zn(){return J&&J.q||($t?$t.q:"")}function Va(){if(!J||!$t)return[];const i=[];for(const t of J.collected){const e=Oa($t,t);e&&i.push(e)}return i}function Ur(){return{cards:J.collected.length,compares:J.compares.length,persons:Zi(J)}}function bh(){const i=[];for(const t of Ss)t==="wei"&&!Ps(J)||Ji(J,t)<1&&i.push(Qe[t].name+"岛还没收卡");return Zi(J)<1&&i.push("还没去遇见岛"),J.compares.length<1&&i.push("还没做过对照"),i.join("、")||"再走一走，看看还缺什么"}function Nr(){if(!dt||!J)return;const i=Ch(),t={lai:"去经历岛收下一张真实来路",cidi:"去现实岛摆清你的条件",cha:"把两张卡放上对照桌",yu:"去遇见岛听一段真实视角",wei:"拨开迷雾，检查一个盲点",form:"去成形，把暂时判断写下来"};dt.setMission(t[i]||"继续探索你的问题")}function Wa(){const i=Y0(J);if(!(i.length<1)){sn(J);for(const t of i)for(const e of z0)e.key===t&&dt.toastAchievement(e.name)}}function Eh(i){const t=$t.cards.filter(e=>Qn[e.type]===i);ts.openDrawer(Qe[i],t)}function F_(i){if(da.has(i))return;da.add(i),Ha(J)[i]=!0;const t=($t?$t.cards:[]).filter(e=>Qn[e.type]===i);for(const e of t)Ah(e);if(sn(J),Ga(),i==="wei")try{Xt.awakenPortal()}catch{}}function Xa(){Jn=!0,dt.showGenerating(Zn()),Re.rig.reset(),Re.rig.dTarget.set(0,7,0),Re.rig.dRadius=24,Re.rig.dTheta=.35,Xt.rise(()=>{Re.rig.dTarget.set(0,2,0),Re.rig.dRadius=62,G_()})}function wh(i){return O_(null,i)}function Th(i,t){$t=i,J=k0($t.id),J.q=$t.q,J.pack=$t,J.packOrigin=t,sn(J),dt.setQuestion(J.q),dt.setPackOrigin(Ba($t,t).text)}async function O_(i,t){const e=++ms,n=String(t||"").trim();if(!n){dt.showDemoChooser(s=>{Ml(s)});return}dt.hideIntro(),dt.hideWorldError(),dt.hideDemoChooser(),dt.setQuestion(n),dt.setPackOrigin("生成中 · 服务端 LLM + 知乎检索…"),dt.setStartBusy(!0),Jn=!0,dt.showGenerating(n);try{const{pack:s,warnings:r}=await Z0(n);if(e!==ms)return;Th(s,"api");for(const o of r||[])dt.toast("提示 · "+o);Xa()}catch(s){if(e!==ms)return;Jn=!1,dt.hideGenerating(),dt.setPackOrigin(""),dt.showWorldError(s&&s.message?s.message:"生成服务暂时不可用。",{onRetry:()=>{wh(n)},onDemo:()=>{dt.showDemoChooser(r=>{Ml(r)})},onDismiss:()=>{dt.showIntro(null)}})}finally{e===ms&&dt.setStartBusy(!1)}}function Ml(i){const t=i&&i.mode;let e;t==="preset"?e=br(i.packId):i&&typeof i.question=="string"&&i.question.trim()?e=dh(i.question.trim()):e=br("paint"),dt.hideIntro(),dt.hideWorldError(),Th(e,"local-demo"),Xa()}function B_(){++ms;const i=fh();if(!i){dt.showIntro(null);return}if(J=i,G0(J.pack))$t=J.pack;else{const t=br(J.packId);$t=J.q&&t&&J.q!==t.q?dh(J.q):t,J.pack=$t,J.packOrigin="legacy",sn(J)}dt.hideIntro(),dt.setQuestion(Zn()),dt.setPackOrigin(Ba($t,J.packOrigin).text),Xa()}function z_(){Fa(),J=null,dt.showIntro(null)}function k_(){Fa(),location.reload()}function H_(){Fa(),location.reload()}function G_(){Jn=!1,dt.hideGenerating(),ce.group.visible=!0,ce.place(Xt.anchors.form.land.clone()),ce.celebrate(),ce.say("hello");const i=Ha(J);i.cha&&(Xt.locked.cha=!1),i.yu&&(Xt.locked.yu=!1),i.wei&&(Xt.locked.wei=!1,Xt.portalAwake=!0,Xt.portalGlow=1),Xt.applyLocks(),Ga(),dt.setStep(Ir(J)),dt.setVisited(J.visited);for(const t of _n)dt.setTagCount(t.key,Ji(J,t.key));Xt.setEnergy(Dr(J)),J.answer&&Kn.showAnswer(J.answer,Zn(),Ur(),$t),dt.setFormAvailable(Ls(J)&&!J.answer),Nr()}function fa(i){if(Jn||!J||ce.flying)return;if(i===Er){Ge&&Ge.has(i)&&i!=="form"?Ge.enter(i,Xt.anchors[i]):i!=="form"&&i!=="wei"&&Eh(i);return}if(i==="wei"&&!Ps(J)){ce.say("locked",!0),dt.toast("传送门未点亮 · 先走完 来路 / 此地 / 岔路");return}if(Xt.isLocked(i)){ce.say("locked",!0),dt.toast(Qe[i].name+"还在雾里 · 先在一处把探索做完，它自然会亮");return}Ge&&Ge.leave(),Er=i,ts.closeAll(),Kn.close(),Ge&&Ge.leave();const t=Xt.anchors[i].land.clone();ce.flyTo(t,()=>V_(i));const e=Xt.islands[i].position;Re.rig.focusOn(e.x,e.z,i==="form"?38:30),vn.spawnRipple(t,Qe[i].three,1.2)}function V_(i){var e;const t=J.visited.indexOf(i)===-1;if(q0(J,i),sn(J),i==="wei"&&t){Xt.awakenPortal();const n=Xt.islands.wei.position;vn.spawnBurst(new A(n.x+.4,3.3,n.z+.4),9240427,42,5.5,4),ce.say("portal",!0),dt.toast("✦ 传送门已点亮 · 未至岛向你打开")}else ce.say("arrive_"+i,!0);dt.setVisited(J.visited),dt.setCurrent(i);for(const n of _n)dt.setTagCount(n.key,Ji(J,n.key));dt.setStep(Ir(J)),Wa(),Ga(),i==="form"?J.answer?Kn.showAnswer(J.answer,Zn(),Ur(),$t):Ls(J)?Kn.openComposer(Zn(),Va(),(e=$t.islandPlans)==null?void 0:e.form,$t.sources||[]):dt.toast("成形条件未满足 · 还差："+bh()):Ge&&Ge.has(i)?Ge.enter(i,Xt.anchors[i]):Eh(i)}function Ah(i){if(!J)return;const t=J.collected.length;if(V0(J,i),J.collected.length===t)return;sn(J);const e=Qn[i.type];dt.setTagCount(e,Ji(J,e)),Xt.setEnergy(Dr(J));const n=ce.group.position;vn.spawnBurst(new A(n.x,n.y+2.2,n.z),8250367,26,4,3.2),ce.celebrate(),ce.say("collect",!0),dt.toast("收下 · "+i.t),dt.setStep(Ir(J)),dt.setFormAvailable(Ls(J)&&!J.answer),Nr()}function W_(i,t){J&&(W0(J,i,t),sn(J))}function X_(i){ts.openCompare(i.id)}function q_(i,t,e){if(!J)return;const n=X0(J,i,t);e&&(J.marked["cmp:"+i+"|"+t]=e),sn(J),n&&(ce.say("compare",!0),dt.toast("对照 +1 · 看见不同"),Xt.setEnergy(Dr(J)),dt.setStep(Ir(J)),dt.setFormAvailable(Ls(J)&&!J.answer),Nr(),Wa())}function Ch(){const i=["lai","cidi","cha"];for(const t of i)if(J.visited.indexOf(t)===-1)return t;for(const t of Ss)if(!(t==="wei"&&!Ps(J))&&Ji(J,t)<1)return t;return Zi(J)<1?"yu":J.compares.length<1?"cha":J.visited.indexOf("wei")===-1?"wei":"form"}function Y_(i){if(!(Jn||!J))if(i==="explain")dt.say(yl[Er]||yl.form,1e4);else if(i==="compare"){if(J.collected.length<2){dt.toast("先收下两张卡，再上对照桌");return}ts.openCompare(null)}else if(i==="next"){const t=Ch();t==="cha"&&J.compares.length<1&&dt.toast("对照还欠一次 · 岔路收卡后点 Bloomy → ⚖️ 比较观点"),fa(t)}else i==="reask"&&dt.say(sh(I_),9e3)}function j_(){var e;if(Jn||!J)return;if(J.answer){Kn.showAnswer(J.answer,Zn(),Ur(),$t);return}if(!Ls(J)){dt.toast("成形条件未满足 · 还差："+bh());return}Er="form",ts.closeAll(),Ge&&Ge.leave();const i=Xt.anchors.form.land.clone();ce.flyTo(i,null);const t=Xt.islands.form.position;Re.rig.focusOn(t.x,t.z,38),vn.spawnRipple(i,Qe.form.three,1.2),dt.setCurrent("form"),Kn.openComposer(Zn(),Va(),(e=$t.islandPlans)==null?void 0:e.form,$t.sources||[])}function $_(i){J&&(J.regionChoices||(J.regionChoices={}),J.regionChoices.form=["成形依据："+i.picks.map(t=>{var e;return((e=Oa($t,t))==null?void 0:e.t)||t}).join("、")],J.answer={picks:i.picks,text:i.text,open:i.open,date:new Date().toLocaleDateString("zh-CN")},sn(J),Xt.setEnergy(Dr(J)),vn.spawnBurst(new A(0,5.2,0),12160255,60,6.5,5),ce.celebrate(),ce.say("form_done",!0),dt.setStep(4),dt.setFormAvailable(!1),Nr(),Wa(),Kn.showAnswer(J.answer,Zn(),Ur(),$t))}async function K_(i){const t=J,e=$t,n=a=>{var c;return((c=Oa(e,a))==null?void 0:c.t)||a},s=["成形窗口已选依据："+(i||[]).map(n).join("、"),...vh(t,"form",n)],r=await gh({question:e.q,region:"form",cards:e.cards,priorChoices:s});if(J!==t||$t!==e)throw new Error("问题已切换，本次结果未应用");const o=za(r.plan,e.cards);if(!o)throw new Error("返回的整合计划无效");return o.source="llm",o.online=!0,e.islandPlans||(e.islandPlans={}),e.islandPlans.form=o,sn(t),o}function J_(){Xt=new T0,Re=new C0(document.getElementById("scene"),Xt),vn=new R0(Xt.scene),Xt.setEffects(vn),ce=new L0,ce.group.visible=!1,Xt.scene.add(ce.group),dt=new h_({onStart:wh,onContinue:B_,onDiscard:z_,onReset:k_,onMinimap:t=>fa(t),onForm:j_,onRadial:Y_}),ce.hud=dt,ce.onSay=t=>dt.say(t),ts=new m_({onCollect:Ah,onMark:W_,onCompareStart:X_,onCompareConfirm:q_},()=>J,()=>Va(),()=>$t&&Array.isArray($t.sources)?$t.sources:[]),Kn=new g_({onSubmit:$_,onReplanForm:K_,onNewUniverse:H_,onFlyBack:()=>dt.toast("📮 问题已存入本浏览器的漂流池 · 只会在你下次打开时的入口浮现")}),Ge=D_({get state(){return J},get pack(){return $t},save:()=>sn(J),TYPE_REGION:Qn,get cards(){return $t?$t.cards:[]},world:Xt,engine:Re,camera:Re.rig,bloomy:ce,effects:{burst(t,e){try{const n=t||ce.group.position,s=new zt(e).getHex();vn.spawnBurst(new A(n.x,(n.y||0)+1.2,n.z),s,30,4,3)}catch{}},ripple(t,e){try{vn.spawnRipple(t,new zt(e).getHex(),1.2)}catch{}}},progress:{isDone:t=>da.has(t),complete:t=>F_(t)}});for(const t of _n){const e=dt.createTag(t);Re.addLabel(e,Xt.anchors[t.key].label)}Re.onFrame(t=>{Jn&&(Re.rig.dTheta+=t*.12),ce.update(t),vn.update(t)}),Re.onClickRegion(t=>fa(t));const i=fh();dt.showIntro(i?i.q||br(i.packId).q:null),Re.start()}J_();
