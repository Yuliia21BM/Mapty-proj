function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},s=t.parcelRequire5612;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire5612=s),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var o=r.default(e,t,"get");return a.default(e,o)};var r=u(s("fExtF")),a=u(s("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,o){d.default(e,t),t.set(e,o)};var c,d=(c=s("7K24o"))&&c.__esModule?c:{default:c};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,o){var n=_.default(e,t,"set");return h.default(e,n,o),o};var _=f(s("fExtF")),h=f(s("3LGG3"));function f(e){return e&&e.__esModule?e:{default:e}}var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e};const w=document.querySelector(".form"),g=document.querySelector(".workouts"),m=document.querySelector(".form__input--type"),k=document.querySelector(".form__input--distance"),y=document.querySelector(".form__input--duration"),b=document.querySelector(".form__input--cadence"),M=document.querySelector(".form__input--elevation");class x{_setDescription(){this.description=`${this.type[0].toUpperCase()}${this.type.slice(1)} on ${["January","February","March","April","May","June","July","August","September","October","November","December"][this.date.getMonth()]} ${this.date.getDate()}`}clicks(){this.clicks+=1}constructor(t,o,n){e(v)(this,"date",new Date),e(v)(this,"id",(Date.now()+"").slice(-10)),e(v)(this,"clicks",0),this.coords=t,this.distance=o,this.duration=n}}class S extends x{calcPace(){return this.pace=this.duration/this.distance,this.pace}constructor(t,o,n,s){super(t,o,n),e(v)(this,"type","running"),this.cadence=s,this.calcPace(),this._setDescription()}}class P extends x{calcSpeed(){return this.spped=this.distance/(this.duration/60),this.spped}constructor(t,o,n,s){super(t,o,n),e(v)(this,"type","cycling"),this.elevationGain=s,this.calcSpeed(),this._setDescription()}}var O=new WeakMap,$=new WeakMap,E=new WeakMap,F=new WeakMap;new class{_getPosition(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(this._loadMap.bind(this))}_loadMap(t){const{latitude:o}=t.coords,{longitude:n}=t.coords,s=[o,n];e(p)(this,O,L.map("map").setView(s,e(i)(this,$))),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e(i)(this,O)),e(i)(this,O).on("click",this._showForm.bind(this)),e(i)(this,F).forEach((e=>{this._renderWorkoutMarker(e),this._renderWorkout(e)}))}_showForm(t){e(p)(this,E,t),w.classList.remove("hidden"),k.focus()}_hideForm(){k.value=y.value=b.value=M.value="",w.style.display="none",w.classList.add("hidden"),setTimeout((()=>w.style.display="grid"),1e3)}_toggleElevationField(e){M.closest(".form__row").classList.toggle("form__row--hidden"),b.closest(".form__row").classList.toggle("form__row--hidden")}_newWorkout(t){const o=(...e)=>e.every((e=>Number.isFinite(e))),n=(...e)=>e.every((e=>e>0));t.preventDefault();const s=m.value,r=Number(k.value),a=Number(y.value),{lat:u,lng:l}=e(i)(this,E).latlng;let c;if("running"===s){const e=Number(b.value);if(!o(r,a,e)||!n(r,a,e))return alert("Input have to be positive number!");c=new S([u,l],r,a,e)}if("cycling"===s){const e=Number(M.value);if(!o(r,a,e)||!n(r,a))return alert("Input have to be positive number!");c=new P([u,l],r,a,e)}e(i)(this,F).push(c),this._renderWorkoutMarker(c),this._renderWorkout(c),this._hideForm(),this._setLocalStorage()}_renderWorkoutMarker(t){L.marker(t.coords).addTo(e(i)(this,O)).bindPopup(L.popup({maxWidth:250,maxHeight:100,autoClose:!1,closeOnClick:!1,className:`${t.type}-popup`})).setPopupContent(`${"running"===t.type?"🏃‍♂️":"🚴‍♀️"} ${t.description}`).openPopup()}_renderWorkout(e){let t=`\n    <li class="workout workout--${e.type}" data-id="${e.id}">\n          <h2 class="workout__title">${e.description}</h2>\n          <div class="workout__details">\n            <span class="workout__icon">${"running"===e.type?"🏃‍♂️":"🚴‍♀️"}</span>\n            <span class="workout__value">${e.distance}</span>\n            <span class="workout__unit">km</span>\n          </div>\n          <div class="workout__details">\n            <span class="workout__icon">⏱</span>\n            <span class="workout__value">${e.duration}</span>\n            <span class="workout__unit">min</span>\n          </div>\n    `;"running"===e.type&&(t+=`\n      <div class="workout__details">\n            <span class="workout__icon">⚡️</span>\n            <span class="workout__value">${e.pace.toFixed(1)}</span>\n            <span class="workout__unit">min/km</span>\n          </div>\n          <div class="workout__details">\n            <span class="workout__icon">🦶🏼</span>\n            <span class="workout__value">${e.cadence}</span>\n            <span class="workout__unit">spm</span>\n          </div>\n        </li>\n      `),"cycling"===e.type&&(t+=`<div class="workout__details">\n            <span class="workout__icon">⚡️</span>\n            <span class="workout__value">${e.spped.toFixed(1)}</span>\n            <span class="workout__unit">km/h</span>\n          </div>\n          <div class="workout__details">\n            <span class="workout__icon">⛰</span>\n            <span class="workout__value">${e.elevationGain}</span>\n            <span class="workout__unit">m</span>\n          </div>\n        </li>`),w.insertAdjacentHTML("afterend",t)}_moveToPopup(t){const o=t.target.closest(".workout");if(!o)return;const n=e(i)(this,F).find((e=>e.id===o.dataset.id));e(i)(this,O).setView(n.coords,e(i)(this,$),{animate:!0,pan:{duration:1}})}_setLocalStorage(){localStorage.setItem("workouts",JSON.stringify(e(i)(this,F)))}_getLocalStorage(){const t=JSON.parse(localStorage.getItem("workouts"));t&&e(p)(this,F,t)}reset(){localStorage.remove("workouts"),lacation.reload()}constructor(){e(l)(this,O,{writable:!0,value:void 0}),e(l)(this,$,{writable:!0,value:13}),e(l)(this,E,{writable:!0,value:void 0}),e(l)(this,F,{writable:!0,value:[]}),this._getPosition(),this._getLocalStorage(),w.addEventListener("submit",this._newWorkout.bind(this)),m.addEventListener("change",this._toggleElevationField.bind(this)),g.addEventListener("click",this._moveToPopup.bind(this))}};
//# sourceMappingURL=index.41b72fde.js.map
