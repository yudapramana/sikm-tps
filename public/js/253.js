"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[253],{2598:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(9669),r=n.n(t);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function i(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,(r=t.key,i=void 0,i=function(e,a){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,a||"default");if("object"!==s(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(r,"string"),"symbol"===s(i)?i:String(i)),t)}var r,i}const o=new(function(){function e(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e)}var a,n,t;return a=e,(n=[{key:"get",value:function(){return r().get("/api/guest").then((function(e){return console.log("response getGuests"),console.log(e),e}))}},{key:"store",value:function(e){return e.post("api/guest").then((function(e){return console.log("response storeGuest"),console.log(e),e}))}}])&&i(a.prototype,n),t&&i(a,t),Object.defineProperty(a,"prototype",{writable:!1}),e}())},882:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(3645),r=n.n(t)()((function(e){return e[1]}));r.push([e.id,".content-wrapper[data-v-dc429724],.main-footer[data-v-dc429724],.main-header[data-v-dc429724]{margin-left:0!important}.main-header[data-v-dc429724]{--bs-navbar-padding-x:1rem!important}",""]);const s=r},3645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var n=e(a);return a[2]?"@media ".concat(a[2]," {").concat(n,"}"):n})).join("")},a.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(t)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);t&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),a.push(l))}},a}},3379:(e,a,n)=>{var t,r=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},s=function(){var e={};return function(a){if(void 0===e[a]){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[a]=n}return e[a]}}(),i=[];function o(e){for(var a=-1,n=0;n<i.length;n++)if(i[n].identifier===e){a=n;break}return a}function l(e,a){for(var n={},t=[],r=0;r<e.length;r++){var s=e[r],l=a.base?s[0]+a.base:s[0],d=n[l]||0,u="".concat(l," ").concat(d);n[l]=d+1;var c=o(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(i[c].references++,i[c].updater(p)):i.push({identifier:u,updater:f(p,a),references:1}),t.push(u)}return t}function d(e){var a=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var r=n.nc;r&&(t.nonce=r)}if(Object.keys(t).forEach((function(e){a.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(a);else{var i=s(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}return a}var u,c=(u=[],function(e,a){return u[e]=a,u.filter(Boolean).join("\n")});function p(e,a,n,t){var r=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=c(a,r);else{var s=document.createTextNode(r),i=e.childNodes;i[a]&&e.removeChild(i[a]),i.length?e.insertBefore(s,i[a]):e.appendChild(s)}}function m(e,a,n){var t=n.css,r=n.media,s=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var h=null,g=0;function f(e,a){var n,t,r;if(a.singleton){var s=g++;n=h||(h=d(a)),t=p.bind(null,n,s,!1),r=p.bind(null,n,s,!0)}else n=d(a),t=m.bind(null,n,a),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else r()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=r());var n=l(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var r=o(n[t]);i[r].references--}for(var s=l(e,a),d=0;d<n.length;d++){var u=o(n[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=s}}}},5714:(e,a,n)=>{n.d(a,{ZP:()=>j});var t=n(9669),r=n.n(t),s=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,d=(e,a,n)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,u=(e,a)=>{for(var n in a||(a={}))i.call(a,n)&&d(e,n,a[n]);if(o)for(var n of o(a))l.call(a,n)&&d(e,n,a[n]);return e};const c=e=>void 0===e,p=e=>Array.isArray(e),m=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,h=(e,a,n,t)=>((a=a||{}).indices=!c(a.indices)&&a.indices,a.nullsAsUndefineds=!c(a.nullsAsUndefineds)&&a.nullsAsUndefineds,a.booleansAsIntegers=!c(a.booleansAsIntegers)&&a.booleansAsIntegers,a.allowEmptyArrays=!c(a.allowEmptyArrays)&&a.allowEmptyArrays,n=n||new FormData,c(e)||(null===e?a.nullsAsUndefineds||n.append(t,""):(e=>"boolean"==typeof e)(e)?a.booleansAsIntegers?n.append(t,e?1:0):n.append(t,e):p(e)?e.length?e.forEach(((e,r)=>{const s=t+"["+(a.indices?r:"")+"]";h(e,a,n,s)})):a.allowEmptyArrays&&n.append(t+"[]",""):(e=>e instanceof Date)(e)?n.append(t,e.toISOString()):!(e=>e===Object(e))(e)||(e=>m(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||m(e)?n.append(t,e):Object.keys(e).forEach((r=>{const s=e[r];if(p(s))for(;r.length>2&&r.lastIndexOf("[]")===r.length-2;)r=r.substring(0,r.length-2);h(s,a,n,t?t+"["+r+"]":r)}))),n);var g={serialize:h};function f(e){if(null===e||"object"!=typeof e)return e;const a=Array.isArray(e)?[]:{};return Object.keys(e).forEach((n=>{a[n]=f(e[n])})),a}function y(e){return Array.isArray(e)?e:[e]}function v(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>v(e)))}class b{constructor(){this.errors={},this.errors={}}set(e,a){"object"==typeof e?this.errors=e:this.set(u(u({},this.errors),{[e]:y(a)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return y(this.errors[e]||[])}only(...e){const a=[];return e.forEach((e=>{const n=this.get(e);n&&a.push(n)})),a}flatten(){return Object.values(this.errors).reduce(((e,a)=>e.concat(a)),[])}clear(e){const a={};e&&Object.keys(this.errors).forEach((n=>{n!==e&&(a[n]=this.errors[n])})),this.set(a)}}class k{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new b,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,f(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((a=>{this[a]=e[a]}))}data(){return this.keys().reduce(((e,a)=>u(u({},e),{[a]:this[a]})),{})}keys(){return Object.keys(this).filter((e=>!k.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),k.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!k.ignore.includes(e))).forEach((e=>{this[e]=f(this.originalData[e])}))}get(e,a={}){return this.submit("get",e,a)}post(e,a={}){return this.submit("post",e,a)}patch(e,a={}){return this.submit("patch",e,a)}put(e,a={}){return this.submit("put",e,a)}delete(e,a={}){return this.submit("delete",e,a)}submit(e,a,n={}){return this.startProcessing(),n=u({data:{},params:{},url:this.route(a),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},n),"get"===e.toLowerCase()?n.params=u(u({},this.data()),n.params):(n.data=u(u({},this.data()),n.data),v(n.data)&&!n.transformRequest&&(n.transformRequest=[e=>g.serialize(e)])),new Promise(((e,a)=>{(k.axios||r()).request(n).then((a=>{this.finishProcessing(),e(a)})).catch((e=>{this.handleErrors(e),a(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?u({},e.data.errors):e.data.message?{error:e.data.message}:u({},e.data):{error:k.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,a={}){let n=e;return Object.prototype.hasOwnProperty.call(k.routes,e)&&(n=decodeURI(k.routes[e])),"object"!=typeof a&&(a={id:a}),Object.keys(a).forEach((e=>{n=n.replace(`{${e}}`,a[e])})),n}onKeydown(e){const a=e.target;a.name&&this.errors.clear(a.name)}}k.routes={},k.errorMessage="Something went wrong. Please try again.",k.recentlySuccessfulTimeout=2e3,k.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const j=k},8065:(e,a,n)=>{n.d(a,{ne:()=>h,qz:()=>o});var t=n(821);Boolean;var r=n(3744);const s=["innerHTML"];const i={name:"HasError",extends:{props:{form:{type:Object,required:!0},field:{type:String,required:!0}}}},o=(0,r.Z)(i,[["render",function(e,a,n,r,i,o){return e.form.errors.has(e.field)?((0,t.openBlock)(),(0,t.createElementBlock)("div",{key:0,class:"invalid-feedback d-block",innerHTML:e.form.errors.get(e.field)},null,8,s)):(0,t.createCommentVNode)("",!0)}]]),l={key:0,class:"alert alert-danger alert-dismissible",role:"alert"},d=["innerHTML"],u=["innerHTML"],c=["innerHTML"];const p={props:{form:{type:Object,required:!0},dismissible:{type:Boolean,default:!0}},methods:{dismiss(){this.dismissible&&this.form.clear()}}},m={name:"AlertError",extends:{extends:p,props:{message:{type:String,default:"There were some problems with your input."}}}},h=(0,r.Z)(m,[["render",function(e,a,n,r,s,i){return e.form.errors.any()?((0,t.openBlock)(),(0,t.createElementBlock)("div",l,[e.dismissible?((0,t.openBlock)(),(0,t.createElementBlock)("button",{key:0,type:"button",class:"btn-close","aria-label":"Dismiss",onClick:a[0]||(a[0]=(...a)=>e.dismiss&&e.dismiss(...a))})):(0,t.createCommentVNode)("",!0),(0,t.renderSlot)(e.$slots,"default",{},(()=>[e.form.errors.has("error")?((0,t.openBlock)(),(0,t.createElementBlock)("div",{key:0,innerHTML:e.form.errors.get("error")},null,8,d)):e.form.errors.has("message")?((0,t.openBlock)(),(0,t.createElementBlock)("div",{key:1,innerHTML:e.form.errors.get("message")},null,8,u)):((0,t.openBlock)(),(0,t.createElementBlock)("div",{key:2,innerHTML:e.message},null,8,c))]))])):(0,t.createCommentVNode)("",!0)}]])},4760:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});var t=(0,n(821).createStaticVNode)('<div class="content-header" data-v-dc429724><div class="container" data-v-dc429724><div class="row mb-2 justify-content-md-center" data-v-dc429724><div class="col-sm-5" data-v-dc429724><h1 class="m-0" data-v-dc429724> Tentang <strong data-v-dc429724>SIKM KemenagPessel</strong></h1></div><div class="col-sm-5" data-v-dc429724><ol class="breadcrumb float-sm-right" data-v-dc429724><li class="breadcrumb-item" data-v-dc429724><a href="#" data-v-dc429724>SIKM KemenagPessel</a></li><li class="breadcrumb-item" data-v-dc429724><a href="#" data-v-dc429724>Tentang</a></li><li class="breadcrumb-item active" data-v-dc429724>Index</li></ol></div></div></div></div><div class="content" data-v-dc429724><div class="container" data-v-dc429724><div class="row justify-content-md-center" data-v-dc429724><div class="col-lg-10" data-v-dc429724><div class="card" data-v-dc429724><div class="card-header" data-v-dc429724><h4 class="card-title m-0" data-v-dc429724>Tentang Buku Tamu Digital </h4></div><div class="card-body" data-v-dc429724><div class="row p-2 m-2" data-v-dc429724><p data-v-dc429724> Survei Kepuasan Masyarakat dilaksanakan sesuai dengan ketentuan dalam Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 14 Tahun 2017 tentang Pedoman Penyusunan Survei Kepuasan Masyarakat. Pedoman ini menggantikan pedoman sebelumnya dalam Permenpanrb No. 16 Tahun 2014 tentang Pedoman Survei Kepuasan Masyarakat Terhadap Penyelenggaraan Pelayanan Publik. Peraturan sebelumnya dipandang tidak operasional dan memerlukan penjabaran teknis dalam pelaksanaannya. Sehingga perlu untuk disesuaikan dengan metode survei yang aplikatif dan mudah untuk dilaksanakan. Selain itu, Peraturan ini dimaksudkan untuk memberikan arahan dan pedoman yang jelas dan tegas bagi penyelenggara pelayanan publik. </p><p data-v-dc429724> Dalam Permenpan No. 14 Tahun 2017 disebutkan bahwa SKM ini bertujuan untuk mengukur tingkat kepuasan masyarakat sebagai pengguna layanan dan meningkatkan kualitas penyelenggaraan pelayanan publik. Dengan sasaran : </p><ol data-v-dc429724><li data-v-dc429724>Mendorong partisipasi masyarakat sebagai pengguna layanan dalam menilai kinerja penyelenggara pelayanan;</li><li data-v-dc429724>Mendorong penyelenggara pelayanan untuk meningkatkan kualitas pelayanan publik;</li><li data-v-dc429724>Mendorong penyelenggara pelayanan menjadi lebih inovatif dalam menyelenggarakan pelayanan publik;</li><li data-v-dc429724>Mengukur kecenderungan tingkat kepuasan masyarakat terhadap pelayanan publik.</li></ol><p data-v-dc429724> Unsur-unsur yang menjadi fokus dalam pelaksanaan Survei Kepuasan Masyarakat terdiri dari 9 unsur yang terdiri dari : </p><ol data-v-dc429724><li data-v-dc429724>Persyaratan adalah syarat yang harus dipenuhi dalam pengurusan suatu jenis pelayanan, baik persyaratan teknis maupun administratif</li><li data-v-dc429724>Sistem, mekanisme dan prosedur adalah tata cara pelayanan yang dilakukan bagi pemberi dan penerima pelayanan termasuk pengaduan</li><li data-v-dc429724>Waktu penyelesaian adalah jangka waktu yang diperlukan untuk menyelesaikan seluruh proses pelayanan dari setiap jenis pelayanan</li><li data-v-dc429724>Biaya/Tarif adalah ongkos yang dikenakan kepada penerima layanan dalam mengurus dan atau memperoleh pelayanan dari penyelenggara yang besarnya ditetapkan Berdasarkan kesepakatan antara penyelenggara dan masyarakat</li><li data-v-dc429724>Produk Spesifikasi Jenis Pelayanan adalah hasil pelayanan yang diberikan dan diterima sesuai dengan ketentuan yang ditetapkan. Produk pelayanan ini merupakan hasil dari setiap spesifikasi jenis pelayanan</li><li data-v-dc429724>Kompetensi Pelaksana adalah kemampuan yang harus dimiliki oleh pelaksana meliputi pengetahuan keahlian keterampilan dan pengalaman.</li><li data-v-dc429724>Perilaku Pelaksana adalah sikap petugas memberikan pelayanan</li><li data-v-dc429724>Penanganan pengaduan, saran dan masukan adalah tata cara pelaksanaan penanganan pengaduan dan tindak lanjut</li><li data-v-dc429724>Sarana adalah segala sesuatu yang dapat dipakai sebagai alat dalam mencapai maksud dan tujuan. Prasarana adalah segala sesuatu yang merupakan penunjang utama terselenggaranya suatu proses(usaha,pembangunan, proyek). Sarana yang digunakan untuk benda yang bergerak (komputer,mesin) dan prasarana untuk benda yang tidak bergerak (gedung).</li></ol></div></div></div></div></div></div></div>',2);n(2598);var r=n(5714),s=(n(6455),n(8065));const i={name:"Tentang",components:{"has-error":s.qz,"alert-error":s.ne},data:function(){return{loading:!1,disabled:!1,editModal:!1,form:new r.ZP({id:"",name:"",gender:"",no_hp:"",email:"",address:"",organisasi:"",jabatan:"",keperluan:"",tujuan:""})}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")},submitAnother:function(){return this.$router.push({name:"Landing"})}},created:function(){this.$Progress.start()},mounted:function(){this.$Progress.finish()}};var o=n(3379),l=n.n(o),d=n(882),u={insert:"head",singleton:!1};l()(d.Z,u);d.Z.locals;const c=(0,n(3744).Z)(i,[["render",function(e,a,n,r,s,i){return t}],["__scopeId","data-v-dc429724"]])}}]);