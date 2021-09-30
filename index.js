!function(){"use strict";function e(e,t,s,n,i,r,a,o){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=s,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):i&&(l=o?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,l):[l]}return{exports:e,options:c}}const t={};var s=e({props:{changes:Object}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"lbvs-changes"},e._l(e.changes,(function(t,n){return s("li",{key:n},[s("span",{attrs:{"data-status":t,title:e.$t("versions.label.status."+t)}},[e._v(" "+e._s(t)+" ")]),e._v(" "+e._s(n)+" ")])})),0)}),[],!1,n,null,null,null);function n(e){for(let s in t)this[s]=t[s]}var i=function(){return s.exports}();const r={};var a=e({data:()=>({error:{message:null,details:{lockedModels:{}}}}),methods:{open(e){this.error=e,this.$refs.dialog.open()}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("k-dialog",{ref:"dialog",staticClass:"lbvs-create-error-dialog",attrs:{"cancel-button":e.$t("close"),"submit-button":!1}},[s("p",{staticClass:"lbvs-create-error-dialog-message"},[e._v(" "+e._s(e.error.message)+" ")]),s("ul",{staticClass:"lbvs-create-error-dialog-list"},e._l(e.error.details.lockedModels,(function(t,n){return s("li",{key:n},[e._v(" "+e._s(n)+" "),s("span",[e._v("("+e._s(t.join(", "))+")")])])})),0)])}),[],!1,o,null,null,null);function o(e){for(let t in r)this[t]=r[t]}var l=function(){return a.exports}();const c={};var u=e({data:()=>({instance:null,inProgress:!1,stagedChanges:{}}),computed:{fields(){return{label:{autofocus:!0,icon:"title",label:this.$t("versions.label.label"),type:"text"}}}},methods:{async onSubmit(){if(!0!==this.inProgress)try{this.inProgress=!0;let e=this.$refs.form.value.label;if(!e)throw this.$t("field.required");await this.$store.dispatch({type:"versions/createVersion",instance:this.instance,label:e}),this.$store.dispatch("notification/success",":)"),this.$refs.dialog.close()}catch(e){this.$refs.dialog.error(e.message||e)}finally{this.inProgress=!1}},async open(e){this.instance=e;try{this.stagedChanges=await this.$store.dispatch({type:"versions/prepareVersionCreation",instance:this.instance})}catch(t){if("error.versions.lockFiles"===t.key)return this.$refs.errorDialog.open(t);throw t}this.$refs.dialog.open()}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("k-dialog",{ref:"dialog",attrs:{size:"large","submit-button":e.$t("versions.button.create"),theme:"positive"},on:{submit:e.onSubmit}},[s("k-form",{ref:"form",attrs:{fields:e.fields},on:{submit:e.onSubmit},scopedSlots:e._u([{key:"header",fn:function(){return[s("k-field",{staticClass:"lbvs-create-changes",attrs:{label:e.$t("versions.label.changes")}},[s("lbvs-changes",{attrs:{changes:e.stagedChanges}})],1)]},proxy:!0}])})],1),s("lbvs-create-error-dialog",{ref:"errorDialog"})],1)}),[],!1,v,null,null,null);function v(e){for(let t in c)this[t]=c[t]}var d=function(){return u.exports}();const h={};var p=e({data:()=>({inProgress:!1,version:null}),methods:{async onSubmit(){if(!0!==this.inProgress)try{this.inProgress=!0,await this.$store.dispatch({type:"versions/deleteVersion",version:this.version.name}),this.$store.dispatch("notification/success",":)"),this.$refs.dialog.close()}catch(e){this.$refs.dialog.error(e.message||e)}finally{this.inProgress=!1}},open(e){this.version=e,this.$refs.dialog.open()}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("k-dialog",{ref:"dialog",staticClass:"lbvs-version-dialog lbvs-version-delete-dialog",attrs:{icon:"trash","submit-button":e.$t("versions.button.delete"),theme:"negative"},on:{submit:e.onSubmit}},[e.version?s("lbvs-version",{attrs:{version:e.version}}):e._e(),s("p",[e._v(e._s(e.$t("versions.message.delete")))])],1)}),[],!1,f,null,null,null);function f(e){for(let t in h)this[t]=h[t]}var b=function(){return p.exports}();const g={};var m=e({data:()=>({inProgress:!1,version:null}),computed:{fields(){let e=this.$store.getters["versions/currentInstance"],t=Object.values(this.$store.state.versions.data.instances).map((e=>({text:e.name,value:e.name})));return{instance:{disabled:t.length<=1,empty:!1,icon:"box",label:this.$t("versions.label.targetInstance"),options:t,placeholder:e.name,type:"select",value:e.name}}}},methods:{async onSubmit(){if(!0!==this.inProgress)try{this.inProgress=!0;let e=this.$refs.form.value.instance||this.$store.getters["versions/currentInstance"].name;await this.$store.dispatch({type:"versions/deployVersion",version:this.version.name,instance:e}),this.$store.dispatch("notification/success",":)"),this.$refs.dialog.close()}catch(e){this.$refs.dialog.error(e.message||e)}finally{this.inProgress=!1}},open(e){this.version=e,this.$refs.dialog.open()}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("k-dialog",{ref:"dialog",staticClass:"lbvs-version-dialog",attrs:{"submit-button":e.$t("versions.button.deploy"),theme:"positive"},on:{submit:e.onSubmit}},[e.version?s("lbvs-version",{attrs:{version:e.version}}):e._e(),s("k-form",{ref:"form",attrs:{fields:e.fields},on:{submit:e.onSubmit}})],1)}),[],!1,_,null,null,null);function _(e){for(let t in g)this[t]=g[t]}var $=function(){return m.exports}();const y={};var k=e({data:()=>({data:null,version:{}}),computed:{details(){return this.data?[{title:this.$t("versions.label.fileSize"),value:this.data.filesize}]:[]},supportsClipboard(){try{return window.navigator.clipboard.writeText,!0}catch(e){return!1}}},methods:{async copyToClipboard(){await window.navigator.clipboard.writeText(this.data.url),this.$store.dispatch("notification/success",":)")},download(){window.location=this.data.url,this.$store.dispatch("notification/success",":)")},async open(e){this.data=null,this.version=e,this.$refs.dialog.open();let t=await this.$store.dispatch({type:"versions/exportVersion",version:this.version.name});e===this.version&&(this.data=t)}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("k-dialog",{ref:"dialog",staticClass:"lbvs-version-dialog",attrs:{"cancel-button":e.$t(e.data?"close":"cancel"),"submit-button":!1}},[e.version?s("lbvs-version",{attrs:{details:e.details,version:e.version}}):e._e(),e.data?s("k-button-group",[s("k-button",{attrs:{icon:"download"},on:{click:e.download}},[e._v(" "+e._s(e.$t("versions.button.download"))+" ")]),s("k-button",{attrs:{icon:"copy",disabled:!e.supportsClipboard},on:{click:e.copyToClipboard}},[e._v(" "+e._s(e.$t("versions.button.copyLink"))+" ")])],1):s("p",[e._v(" "+e._s(e.$t("versions.message.exporting"))+" ")])],1)}),[],!1,C,null,null,null);function C(e){for(let t in y)this[t]=y[t]}var w=function(){return k.exports}();const x={props:{inline:Boolean,instance:Object},computed:{element(){return this.inline?"span":"strong"}}},S={};var D=e(x,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.element,{tag:"component",staticClass:"lbvs-instance-name",style:{backgroundColor:e.instance.color}},[e._v(" "+e._s(e.instance.name)+" ")])}),[],!1,E,null,null,null);function E(e){for(let t in S)this[t]=S[t]}var T=function(){return D.exports}();const V={};var O=e({computed:{canCreateVersion(){return!0===this.$permissions["lukasbestle.versions"].create&&Object.keys(this.currentChanges).length>0},currentChanges(){return this.$store.getters["versions/currentInstance"].changes}},methods:{onCreate(){let e=this.$store.getters["versions/currentInstance"].name;return this.$refs.createDialog.open(e)}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lbvs-status"},[s("k-view",[s("k-grid",[s("k-column",{attrs:{width:"1/3"}},[s("header",{staticClass:"k-section-header"},[s("k-headline",[e._v(" "+e._s(e.$t("versions.label.instances"))+" ")])],1),s("ul",{staticClass:"lbvs-status-instances"},e._l(e.$store.state.versions.data.instances,(function(t){return s("li",{key:t.name,class:{current:t.isCurrent}},[s("lbvs-instance-name",{attrs:{instance:t}}),t.isCurrent?s("span",{staticClass:"lbvs-status-current"},[e._v(" "+e._s(e.$t("versions.label.current"))+" ")]):e._e(),t.version?s("lbvs-version",{attrs:{version:{name:t.version,label:t.versionLabel}}}):e._e()],1)})),0)]),s("k-column",{staticClass:"lbvs-status-changes",attrs:{width:"2/3"}},[s("header",{staticClass:"k-section-header"},[s("k-headline",[e._v(" "+e._s(e.$t("versions.label.changes"))+" ")]),s("k-button-group",[s("k-button",{attrs:{icon:"add",disabled:!1===e.canCreateVersion},on:{click:e.onCreate}},[e._v(" "+e._s(e.$t("versions.button.create"))+" ")])],1)],1),s("lbvs-changes",{attrs:{changes:e.currentChanges}})],1)],1)],1),s("lbvs-create-dialog",{ref:"createDialog"})],1)}),[],!1,P,null,null,null);function P(e){for(let t in V)this[t]=V[t]}var j=function(){return O.exports}();const A={props:{details:{type:Array,default:()=>[]},instances:Boolean,version:Object},computed:{mergedDetails(){return[{title:this.$t("versions.label.versionName"),value:this.version.name},...this.details].filter((e=>e.value))}}},I={};var L=e(A,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lbvs-version"},[s("span",{staticClass:"lbvs-version-header"},[s("strong",[e._v(e._s(e.version.label))]),e.instances?e._l(e.version.instances,(function(t){return s("lbvs-instance-name",{key:t,attrs:{inline:!0,instance:e.$store.state.versions.data.instances[t]}})})):e._e()],2),s("dl",{staticClass:"lbvs-version-details"},[e._l(e.mergedDetails,(function(t){return[s("dt",{key:t.title,staticClass:"k-offscreen"},[e._v(" "+e._s(t.title)+": ")]),s("dd",{key:t.title,attrs:{title:t.title}},[e._v(" "+e._s(t.value)+" ")])]}))],2)])}),[],!1,M,null,null,null);function M(e){for(let t in I)this[t]=I[t]}var R=function(){return L.exports}();const N={};var Y=e({computed:{items(){return Object.values(this.$store.state.versions.data.versions)}},methods:{onOption(e,t){return this.$refs[e+"Dialog"].open(t)},options(e){let t=this.$permissions["lukasbestle.versions"];return[{click:"export",disabled:!0!==t.export,icon:"download",text:this.$t("versions.button.export")},{click:"deploy",disabled:!0!==t.deploy,icon:"wand",text:this.$t("versions.button.deploy")},{click:"delete",disabled:!0!==t.delete||e.instances.length>0,icon:"trash",text:this.$t("versions.button.delete")}]},versionDetails(e){return[{title:this.$t("versions.label.creation"),value:this.versionDetailsToString("creationData",{created:e.created?this.$library.dayjs.unix(e.created).format("YYYY-MM-DD HH:mm"):"?",creator:e.creatorName||e.creatorEmail||"?"})},{title:this.$t("versions.label.originInstance"),value:this.versionDetailsToString("from",{originInstance:e.originInstance||"?"})}]},versionDetailsToString(e,t){return!0===Object.values(t).every((e=>"?"===e))?null:this.$t("versions.label."+e,t)}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lbvs-versions"},[s("k-view",[s("header",{staticClass:"k-section-header"},[s("k-headline",[e._v(" "+e._s(e.$t("versions.label.versions"))+" ")])],1),e.items.length?s("k-list",e._l(e.items,(function(t,n){return s("k-list-item",e._b({key:n,attrs:{image:!0,options:e.options(t)},on:{action:function(s){return e.onOption(s,t)}},scopedSlots:e._u([{key:"image",fn:function(){return[e._v(" "+e._s(n+1)+" ")]},proxy:!0}],null,!0)},"k-list-item",t,!1),[s("lbvs-version",{attrs:{details:e.versionDetails(t),instances:!0,version:t}})],1)})),1):s("k-empty",{attrs:{layout:"cards"}},[e._v(" "+e._s(e.$t("versions.label.empty"))+" ")])],1),s("lbvs-export-dialog",{ref:"exportDialog"}),s("lbvs-deploy-dialog",{ref:"deployDialog"}),s("lbvs-delete-dialog",{ref:"deleteDialog"})],1)}),[],!1,z,null,null,null);function z(e){for(let t in N)this[t]=N[t]}var B=function(){return Y.exports}();const F={};var H=e({data:()=>({isLoading:!0}),async mounted(){!0!==this.$permissions["lukasbestle.versions"].access&&this.$go("/");try{this.isLoading=!0,await this.$store.dispatch("versions/load")}finally{this.isLoading=!1}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("k-inside",[s("div",{staticClass:"lbvs-view"},[e.isLoading?s("k-loader"):[s("lbvs-status"),s("lbvs-versions")]],2)])}),[],!1,U,null,null,null);function U(e){for(let t in F)this[t]=F[t]}var X=function(){return H.exports}();panel.plugin("lukasbestle/versions",{components:{"lbvs-changes":i,"lbvs-create-error-dialog":l,"lbvs-create-dialog":d,"lbvs-delete-dialog":b,"lbvs-deploy-dialog":$,"lbvs-export-dialog":w,"lbvs-instance-name":T,"lbvs-status":j,"lbvs-version":R,"lbvs-versions":B,"lbvs-versions-view":X},created(e){e.$store.registerModule("versions",(e=>({namespaced:!0,state:{data:{instances:{},versions:{}}},getters:{currentInstance:e=>Object.values(e.data.instances).find((e=>e.isCurrent))},mutations:{SET_DATA(e,{instances:t,versions:s}){e.data.instances=t,e.data.versions=s}},actions:{async load({commit:t}){t("SET_DATA",await e.$api.get("versions"))},prepareVersionCreation:async(t,{instance:s})=>await e.$api.post("versions/prepareCreation",{instance:s}),async createVersion({commit:t},{instance:s,label:n}){t("SET_DATA",await e.$api.post("versions/create",{instance:s,label:n}))},async deleteVersion({commit:t},{version:s}){t("SET_DATA",await e.$api.delete("versions/versions/"+s))},async deployVersion({commit:t},{instance:s,version:n}){t("SET_DATA",await e.$api.post("versions/versions/"+n+"/deploy",{instance:s}))},exportVersion:async(t,{version:s})=>await e.$api.post("versions/versions/"+s+"/export")}}))(e))}})}();
