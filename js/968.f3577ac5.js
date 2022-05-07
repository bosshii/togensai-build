"use strict";(self["webpackChunk_10thTogenFes"]=self["webpackChunk_10thTogenFes"]||[]).push([[968],{2628:function(t,e,s){s.d(e,{Z:function(){return c}});var a=s(5648),i=s(144),n=s(8159),r=i.Z.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n.Z,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),o=s(6505),l=s(3325),c=(0,l.Z)(r,o.Z,a.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...o.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a.Z.options.computed.classes.call(this)}},styles(){const t={...a.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,s){s.d(e,{EB:function(){return l},ZB:function(){return o},h7:function(){return n}});var a=s(2628),i=s(4589);const n=(0,i.Ji)("v-card__actions"),r=(0,i.Ji)("v-card__subtitle"),o=(0,i.Ji)("v-card__text"),l=(0,i.Ji)("v-card__title");a.Z},6845:function(t,e,s){var a=s(7352),i=s(6257),n=s(4589),r=s(3325);e["Z"]=(0,r.Z)((0,a.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,i.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(t){this.content=t},unregisterContent(){this.content=null},registerHeader(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,n.z9)(this))}})},2443:function(t,e,s){var a=s(5827),i=s(8625),n=s(6952),r=s(6257),o=s(4589),l=s(3325);const c=(0,l.Z)(i.Z,n.Z,(0,r.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e["Z"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(t,e){t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((()=>this.isActive=t))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(t){return t(a.Fx,this.showLazyContent((()=>[t("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},(0,o.z9)(this))])])))}})},1192:function(t,e,s){var a=s(5827),i=s(172),n=s(6952),r=s(6257),o=s(6286),l=s(4589),c=s(3325);const p=(0,c.Z)(n.Z,(0,r.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e["Z"]=p.extend().extend({name:"v-expansion-panel-header",directives:{ripple:o.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(t){this.$emit("click",t)},genIcon(){const t=(0,l.z9)(this,"actions")||[this.$createElement(i.Z,this.expandIcon)];return this.$createElement(a.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render(t){return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,l.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},5630:function(t,e,s){s.d(e,{Z:function(){return n}});var a=s(4333),i=s(1824),n=a.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...a.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,i.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,i.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(t,e){const s=this.getValue(t,e),a=this.getValue(t,e+1);t.isActive=this.toggleMethod(s),t.nextIsActive=this.toggleMethod(a)}}})},247:function(t,e,s){s.d(e,{Z:function(){return r}});s(7273);var a=s(144);function i(t){return a.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:a,children:i}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:n}=a;if(n){a.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(a.staticClass+=` ${t.join(" ")}`)}return s.id&&(a.domProps=a.domProps||{},a.domProps.id=s.id),e(s.tag,a,i)}})}var n=s(6290),r=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:a}){let i;const{attrs:r}=s;return r&&(s.attrs={},i=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,n.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),a)}})},8159:function(t,e,s){s.d(e,{Z:function(){return u}});var a=s(5827),i=s(8083),n=s(6952),r=s(3536),o=s(1431),l=s(8085),c=s(4589),p=s(3325);const d=(0,p.Z)(n.Z,(0,r.d)(["absolute","fixed","top","bottom"]),o.Z,l.Z);var h=d.extend({name:"v-progress-linear",directives:{intersect:i.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,c.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,c.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,c.kb)(this.normalizedValue,"%"),width:(0,c.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?a.Z5:a.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,c.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,c.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,s){this.isVisible=s},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,c.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),u=h},6968:function(t,e,s){s.r(e),s.d(e,{default:function(){return X}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"programs"},[s("v-container",{staticClass:"my-5"},[s("div",{staticClass:"text-h3"},[t._v("企画")]),s("br"),s("br"),s("b",[t._v("目次:")]),t._v(" "),s("a",{attrs:{href:"#waittime"}},[t._v("待ち時間")]),t._v("・"),s("a",{attrs:{href:"#tfpt"}},[t._v("本部企画")]),t._v("・"),s("a",{attrs:{href:"#homeroom"}},[t._v("学年企画")]),t._v("・"),s("a",{attrs:{href:"#club"}},[t._v("部活動&生徒会")]),t._v("・"),s("a",{attrs:{href:"#team"}},[t._v("有志企画")]),t._v("・"),s("a",{attrs:{href:"#teacher"}},[t._v("教員主催企画")]),s("br"),t._v(" 今年も個性豊かな企画が沢山集まりました。皆さんのご来訪をお待ちしています！"),s("br"),s("br"),t._v("※写真・詳細情報は順次追加していきます "),s("br"),s("br"),s("div",{staticClass:"text-h4",attrs:{id:"waittime"}},[t._v("待ち時間一覧")]),t._v(" 待ち時間を確認して賢く兎原祭を回りましょう。待ち時間表示システムは兎原祭直前に公開いたします。"),s("br"),s("br"),s("div",{staticClass:"text-h4",attrs:{id:"time"}},[t._v("タイムテーブル")]),s("b",[t._v("第一アリーナ(体育館)、屋外ステージ、音楽室(A棟3階)")]),t._v("で行われる企画はそれぞれ実施時間が決まっています。音楽室の企画は、"),s("span",{staticStyle:{color:"#ff0000"}},[t._v("公演開始10分前から整理券を配布します。人数が限られていますのでお早めにお越しください！")]),s("br"),t._v("➪"),s("router-link",{attrs:{to:{name:"timetable"}}},[t._v("タイムテーブルはこちらから！")]),s("br"),s("br"),s("div",{staticClass:"text-h4",attrs:{id:"tfpt"}},[t._v("本部企画")]),s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3",xl:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:"/images/prg/minhaya.jpg",height:"auto"}}),s("v-card-actions",{staticClass:"mx-n2"},[s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticStyle:{width:"100%",padding:"10px 5px"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"pink accent-2"}},[t._v("$expand")])]},proxy:!0}])},[s("span",[s("b",[t._v("クイズ大会")]),s("br"),t._v("みんはや&対面 "),s("router-link",{attrs:{to:{name:"quiz"}}},[t._v("詳細はこちら")])],1)]),s("v-expansion-panel-content",{staticClass:"px-4 mx-n7"},[s("div",{staticStyle:{color:"black"}},[t._v("クイズ企画がパワーアップ！神大附属のクイズ王は誰だ！？"),s("router-link",{attrs:{to:{name:"quiz"}}},[t._v("詳細はこちら！")])],1)])],1)],1)],1)],1)],1),s("v-col",{attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3",xl:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:"/images/prg/radio.png",height:"auto"}}),s("v-card-actions",{staticClass:"mx-n2"},[s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticStyle:{width:"100%",padding:"10px 5px"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"pink accent-2"}},[t._v("$expand")])]},proxy:!0}])},[s("span",[s("b",[t._v("とげラジ")]),s("br"),s("router-link",{attrs:{to:{name:"radio"}}},[t._v("詳細はこちら")])],1)]),s("v-expansion-panel-content",{staticClass:"px-4 mx-n7"},[s("div",{staticStyle:{color:"black"}},[t._v("昨年好評だったラジオ企画を今年も放送！"),s("router-link",{attrs:{to:{name:"radio"}}},[t._v("詳細はこちら！")])],1)])],1)],1)],1)],1)],1)],1),s("br"),s("div",{staticClass:"text-h4",attrs:{id:"homeroom"}},[t._v("学年企画")]),s("v-chip",{staticClass:"white--text",attrs:{color:"red"}},[t._v("NEW")]),t._v(" 学年企画のNo1を決めよう！"),s("router-link",{attrs:{to:{name:"k1"}}},[t._v("K-1グランプリ開催！")]),s("v-row",{attrs:{dense:""}},t._l(t.prgHomeroom,(function(e){return s("v-col",{key:e.title,attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3",xl:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,height:"auto"}}),s("v-card-actions",{staticClass:"mx-n2"},[s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticStyle:{width:"100%",padding:"10px 5px"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"pink accent-2"}},[t._v("$expand")])]},proxy:!0}],null,!0)},[s("span",[s("b",[t._v(t._s(e.title))]),s("br"),t._v(t._s(e.by)+" @ "+t._s(e.at))])]),s("v-expansion-panel-content",{staticClass:"px-4 mx-n7"},[s("div",{staticStyle:{color:"black"}},[t._v(t._s(e.desc))])])],1)],1)],1)],1)],1)})),1),s("br"),s("div",{staticClass:"text-h4",attrs:{id:"club"}},[t._v("部活・生徒会組織")]),s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3",xl:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:"/images/prg/asta.jpg",height:"auto"}}),s("v-card-actions",{staticClass:"mx-n2"},[s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticStyle:{width:"100%",padding:"10px 5px"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"pink accent-2"}},[t._v("$expand")])]},proxy:!0}])},[s("span",[s("b",[t._v("ASTA")]),s("br"),s("router-link",{attrs:{to:{name:"asta"}}},[t._v("詳細はこちら！")])],1)]),s("v-expansion-panel-content",{staticClass:"px-4 mx-n7"},[s("div",{staticStyle:{color:"black"}},[t._v("ASTAは各班がさまざまな展示・製作を予定しています！"),s("router-link",{attrs:{to:{name:"asta"}}},[t._v("【詳細はこちら！】")])],1)])],1)],1)],1)],1)],1),t._l(t.prgCouncil,(function(e){return s("v-col",{key:e.title,attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3",xl:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,height:"auto"}}),s("v-card-actions",{staticClass:"mx-n2"},[s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticStyle:{width:"100%",padding:"10px 5px"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"pink accent-2"}},[t._v("$expand")])]},proxy:!0}],null,!0)},[s("span",[s("b",[t._v(t._s(e.title))]),s("br"),t._v(t._s(e.by)+" @ "+t._s(e.at))])]),s("v-expansion-panel-content",{staticClass:"px-4 mx-n7"},[s("div",{staticStyle:{color:"black"}},[t._v(t._s(e.desc))])])],1)],1)],1)],1)],1)}))],2),s("br"),s("div",{staticClass:"text-h4",attrs:{id:"team"}},[t._v("有志企画")]),t._v(" 音楽室はA棟3階にございます。公演開始10分前から整理券を配布しますので、お早めにお越しください。 "),s("v-row",{attrs:{dense:""}},t._l(t.prgTeam,(function(e){return s("v-col",{key:e.title,attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3",xl:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,height:"auto"}}),s("v-card-actions",{staticClass:"mx-n2"},[s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticStyle:{width:"100%",padding:"10px 5px"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"pink accent-2"}},[t._v("$expand")])]},proxy:!0}],null,!0)},[s("span",[s("b",[t._v(t._s(e.title))]),s("br"),t._v(t._s(e.by)+" @ "+t._s(e.at))])]),s("v-expansion-panel-content",{staticClass:"px-4 mx-n7"},[s("div",{staticStyle:{color:"black"}},[t._v(t._s(e.desc))])])],1)],1)],1)],1)],1)})),1),s("br"),s("div",{staticClass:"text-h4",attrs:{id:"teacher"}},[t._v("教員主催企画")]),s("v-row",{attrs:{dense:""}},t._l(t.prgTeacher,(function(e){return s("v-col",{key:e.title,attrs:{cols:"6",xs:"6",sm:"4",md:"3",lg:"3",xl:"3"}},[s("v-card",[s("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,height:"auto"}}),s("v-card-actions",{staticClass:"mx-n2"},[s("v-expansion-panels",{attrs:{flat:"",accordion:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticStyle:{width:"100%",padding:"10px 5px"},scopedSlots:t._u([{key:"actions",fn:function(){return[s("v-icon",{attrs:{color:"pink accent-2"}},[t._v("$expand")])]},proxy:!0}],null,!0)},[s("span",[s("b",[t._v(t._s(e.title))]),s("br"),t._v(t._s(e.by)+" @ "+t._s(e.at))])]),s("v-expansion-panel-content",{staticClass:"px-4 mx-n7"},[s("div",{staticStyle:{color:"black"}},[t._v(t._s(e.desc))])])],1)],1)],1)],1)],1)})),1)],1)],1)},i=[],n={data(){return{show:!1,programs:[{cat:"homeroom",title:"スポーツワールド",at:"X棟n階",by:"2年生",src:"/images/prg/unknown.png",desc:"世界のスポーツの中で気軽に楽しめるもの２つを、コロナ禍の旅行へ行きにくい今だからこそ体験してもらいたいと思います。がんばったら景品もあるかも？ぜひ来てください！"},{cat:"homeroom",title:"迷Q",at:"X棟n階",by:"2年生",src:"/images/prg/meiq.png",desc:"世界に関するクイズを解きながら迷路を抜ける、迷路とクイズを融合した企画　　　　　あなたは薄暗い迷宮に迷い込んでしまった。あなたの目の前にあるのは世界に関する2択の問題たち。この問題は一定時間すると変わるらしい。あなたはクイズに正解し、この迷宮を抜け出せるだろうか。"},{cat:"homeroom",title:"ワールドカーニバルゲーム",at:"X棟n階",by:"2年生",src:"/images/prg/unknown.png",desc:"トマトをたらいの中に投げ込んだりトマト瓶を倒したりして得点を稼ぐゲーム。　　　　　この企画はスペインで催されるトマティーナという祭りを参考に起案されたものです。実際の祭りでトマトを投げ合う様にならって、トマトを投げて遊べるようになっています。企画を楽しんでいただけるように精力を尽くしますので、是非よろしくお願いします。"},{cat:"homeroom",title:"キノッコvsタケノッコ",at:"X棟n階",by:"3年生",src:"/images/prg/kinokotakenoko.png",desc:"ここはお菓子の星、アポロ。星には二つ国がある。その名も『タケノッコ王国』と『キノッコ王国』どちらの王子も同じ姫に恋をしてしまう。『勝てば姫をやる』という条件で戦うことに…。果たして姫はどちらの手に！？"},{cat:"homeroom",title:"校襲電話～あなたには見えますか～",at:"X棟n階",by:"3年生",src:"/images/prg/telephone.png",desc:"人間を恨んでいる人形、マリーさんと繋がった電話を切るために呪われた教室を通り、受話器を戻す、ミッション型のお化け屋敷です。　　　　　みなさん、こんにちは！突然ですがみなさんはお化けを信じていますか？信じてない人は一度、お化け屋敷「校襲電話」に来てみるといいでしょう。ただし、入って無事に帰って来れる補償はないです...あなたは託された任務を無事にクリアし、無事帰って来ることができるでしょうか。是非来てください‼️"},{cat:"homeroom",title:"とげたんリバーシ",at:"X棟n階",by:"3年生",src:"/images/prg/unknown.png",desc:"この企画では、日本と外国の遊びを楽しむことが出来ますよくある遊びから、あまりない遊びまで！おもいっきり力を使ってストレス発散し、大量のお菓子をゲットして幸せを感じましょう!?ぜひ遊びに来てください!!"},{cat:"homeroom",title:"Everybody!!!",at:"X棟n階",by:"4年生",src:"/images/prg/everybody.jpg",desc:"この企画では時間帯ごとにいろんな種類の(ミニゲーム、クイズ、ビンゴなど)大人数で行えるゲームを楽しめます！COVID-19対策を徹底して実施します。１人でも複数人でもかるーく遊びに来てください！"},{cat:"homeroom",title:"うばら堂",at:"X棟n階",by:"4年生",src:"/images/prg/ubaradou.png",desc:"この企画では、日本と外国の遊びを楽しむことが出来ます よくある遊びから、あまりない遊びまで！ おもいっきり力を使ってストレス発散し、大量のお菓子をゲットして幸せを感じましょう!? ぜひ遊びに来てください!!"},{cat:"homeroom",title:"縁日Fes",at:"X棟n階",by:"4年生",src:"/images/prg/ennichifes.png",desc:"スーパーボールすくいや射的などの屋台を出します。縁日で遊びたい人いたら、いつでも中庭にお越しください！射的でもスーパーボールでも何でもありますよ景品も御座います！とにかく中庭にお越しください！"},{cat:"homeroom",title:"劇「書きかけのミステリー」",at:"第1アリーナ",by:"5年生",src:"/images/prg/mistery.png",desc:"ある大富豪一家で起こった不可解な殺人事件。完全オリジナルストーリーで構成する難解ミステリー！端から端まで伏線だらけのこの事件、結末を読まれない自信あり。この事件、あなたに解けますか？"},{cat:"homeroom",title:"ぐるぐるダイナソーカップ",at:"X棟n階",by:"5年生",src:"/images/prg/dino.jpg",desc:"ぐるぐるダイナソーカップはタイムスリップできるカップに乗って恐竜時代に行き恐竜の世界を楽しむアトラクションです。ぐるぐるとたくさん回転するアトラクションなので飛ばされたり酔ったりしないように気をつけてください！Lets Dinosaur！"},{cat:"homeroom",title:"The Escape",at:"X棟n階",by:"5年生",src:"/images/prg/theescape.png",desc:"お化け屋敷と謎解きゲームの融合。ようこそ滅亡した世界へ。あなたは自然を失ったこの地球に一人きり。彼女からのメッセージを頼りに様々な謎を解き、脱出用ロケットへたどり着け。想像を超える謎やからくりに挑め。愛を忘れるな。"},{cat:"homeroom",title:"演劇「不思議の国のアリス」",at:"X棟n階",by:"6年生",src:"/images/prg/alice.jpg",desc:"6年演劇では「不思議の国のアリス」を上演します！中等生活最後の兎原祭、受験勉強もあり各々が時間の無い中力を合わせて仕上げました。言わずと知れた名作、不思議の国のアリスを楽器演奏も交えてぜひお楽しみください！"},{cat:"homeroom",title:"大型制作",at:"X棟n階",by:"6年生",src:"/images/prg/works.png",desc:"約50人で大規模製作に取り組みました！製作物は3つあり、チームラボ、つまようじアートに加え、9回生学年企画劇の舞台装置製作にも携わっています。個性豊かな製作物、ぜひ楽しんでください。"},{cat:"homeroom",title:"映像制作",at:"X棟n階",by:"6年生",src:"/images/prg/unknown.png",desc:"準備中"},{cat:"council",title:"ミュージカル「シンデレラ」",at:"X棟n階",by:"ESSパフォーマンス部",src:"/images/prg/essperformance.jpg",desc:"皆さんは観たくなる魔法にかかりましたか？誰も想像し得ない新感覚（多分）のMusical Cinderellaの開演です！Let’s get loud！✨✨"},{cat:"council",title:"公開ディベート",at:"X棟n階",by:"ESSディベート部",src:"/images/prg/essdebate.jpg",desc:"今年も公開英語ディベートを行います！個性豊かな部員たちが全国レベルのスピーチを披露してくれます。国語や社会でやった人もいるディベートが「競技」になるとどうなるのか...？結果を是非確かめに来てください！"},{cat:"council",title:"アニメ・ドラマの主題歌",at:"第1アリーナ",by:"吹奏楽部",src:"/images/prg/unknown.png",desc:"こんにちは!!吹奏楽部は、70名以上の大所帯で日々活動しています。普段は個性で溢れる私達ですが、演奏ではひとつに団結して美しい音楽を奏でます。ぜひステージにお越しください💕"},{cat:"council",title:"コーラス部",at:"第1アリーナ",by:"コーラス部",src:"/images/prg/unknown.png",desc:"こんにちは！コーラス部です！ 私達は「聴いてくださる方々に感動を」をモットーに日々楽しく活動しています。 兎原祭ではj-popからコンクール曲まで様々な曲を披露します。 また、合唱だけではなくダンスもあり、誰でも楽しめる内容となっているので、ぜひお越しください！"},{cat:"council",title:"魚・製作物展示・実験",at:"X棟n階",by:"科学研究部",src:"/images/prg/science.jpg",desc:"科学研究部では、魚や部員が製作したものを展示しています。また、エッグドロップチャレンジを行うこともできます。実験を行っているかもしれません。是非来てみて下さい。"},{cat:"council",title:"合格おみくじ・恋みくじ",at:"X棟n階",by:"男子バスケットボール部",src:"/images/prg/basketball.jpg",desc:"男子篭球部は普通の御籤だけではなく，大学受験，中学受験を占う合格御籤，恋愛経験豊富な我々のアドバイス付き恋御籤などを販売します．一回100円．割と豪華な景品あり．"},{cat:"council",title:"ギネス世界記録にチャレンジ！",at:"X棟n階",by:"男子テニス部",src:"/images/prg/stage.png",desc:"男子テニス部のとある部員がギネス世界記録に本気で挑戦します。この日のために汗水たらしてトレーニングを積んできました。本気で本気の彼の下剋上をご覧ください。"},{cat:"council",title:"クッキー販売",at:"中庭",by:"家庭科研究部",src:"/images/prg/kateken.jpg",desc:"伝統の味、家庭科研究部のクッキーを販売しています！味はプレーン、チョコチップ、抹茶、紅茶の4種類！是非お買い求め下さい✨"},{cat:"council",title:"フードドライブと食のクイズ",at:"X棟n階",by:"ESD foodプロジェクト",src:"/images/prg/esdfood.png",desc:"家に無駄になっている食品はありませんか?ESDフードプロジェクトでは今年度もフードドライブを行います!クイズも用意していますので、是非色々な食品を持ってきて下さい!"},{cat:"council",title:"カラフルで映える写真スポット",at:"X棟n階",by:"女子バレーボール部",src:"/images/prg/unknown.png",desc:"カラフルで映える写真スポットを作りました。女バレの明るく個性豊かな感じを表現しています。誰でも楽しめるので思い出づくりにぜひ気軽に来て写真を撮ってくれたらうれしいです！"},{cat:"council",title:"缶バッジ作りワークショップ・部員作品展示",at:"X棟n階",by:"美術部",src:"/images/prg/art.jpg",desc:"びーっ、びじゅつぶ！げんきげんき！（某教育テレビのマラカス付き妖精風）　毎年大盛況の缶バッジ作りワークショップ、今年も開催します！部員を唸らせる作品を作った方には何かいいことがあるかも！？"},{cat:"council",title:"クラシックやジャズ、Jpop",at:"X棟n階",by:"アンサンブル同好会",src:"/images/prg/unknown.png",desc:"アンサンブルの敷居をグッと下げて、お馴染みの楽曲を演奏します。クラシックやジャズ、Jpopと幅広いジャンルでお楽しみ頂けます。絶賛会員募集中！是非お越しください！皆さんを素敵なコンサート会場にお連れします。"},{cat:"council",title:"自作ゲーム",at:"X棟n階",by:"PC部",src:"/images/prg/unknown.png",desc:"プログラミングでゲーム作りや動画作りをみんなでしたり、1人でしたり和気藹々とした楽しくフレンドリーな部活動です。"},{cat:"council",title:"演劇部",at:"第1アリーナ",by:"演劇部",src:"/images/prg/unknown.png",desc:"こんにちは、演劇部です！今回の作品は、いわゆる「学園モノ」。今しか出せないリアルさを大切に表現します。また、今回は一部ダブルキャスト。キャストによる違いも楽しめる要素のひとつです。是非お越しください！"},{cat:"council",title:"学校グッズ販売",at:"X棟n階",by:"生徒会執行部",src:"/images/prg/goods.png",desc:"こんにちは！生徒会執行部です。中庭のアリーナ前で学校グッズを販売しています！ぜひお立ち寄りください！"},{cat:"team",title:"有志アニメーション",at:"X棟n階",by:"10回生有志",src:"/images/prg/animation.png",desc:"「悪霊退散!」でお馴染みの陰陽師、実は現代技術を駆使する者だった!?この世界に隔たりなんて存在しない。奇想天外な「歴史×テクノロジー」堂々登場！"},{cat:"team",title:"calm with heat(バンド)",at:"音楽室",by:"吹奏楽部・コーラス部有志",src:"/images/prg/musicroom.png",desc:"私達5人は吹奏楽部とコーラス部で構成されています！音楽を知り、音楽が好きな私達だからこその力のある演奏をします！みんなが一度は聞いたことのある曲をするのでぜひ聴きに来てください！"},{cat:"team",title:"Leo(バンド)",at:"音楽室",by:"10回生有志",src:"/images/prg/musicroom.png",desc:"私達は、10回生4人で構成されているバンドです！メンバーのボーカル兼エレキ、アコギ、キーボード、そして盛り上げ隊長(？)は、それぞれそれなりに個性的なメンバーです！バンドの名前は、8月の星座の名前から取りました。バンドを結成したのが丁度去年の8月だったからです。そんな私達が、約半年間かけて練習してきた数曲を、全力で演奏します！"},{cat:"team",title:"anima(バンド)",at:"音楽室",by:"9回生有志",src:"/images/prg/musicroom.png",desc:"こんにちは！私たちはanimaです。曲ごとによってメンバーが変わって出演するので、どの曲を誰がするかは当日のお楽しみ！最高に楽しいステージを届けるので一緒に盛り上がりましょう！"},{cat:"team",title:"うなぎパイ補完計画(バンド)",at:"音楽室",by:"11回生有志",src:"/images/prg/musicroom.png",desc:"うなぎパイ補完計画（仮）です。ノリと勢いだけで集まった６人組がアニメ曲を演奏します。サックスが入っていたりキーボードが二人だったり摩訶不思議なバンドですがぜひ聞きに来てください"},{cat:"team",title:"PIBARA(バンド)",at:"音楽室",by:"11回生有志",src:"/images/prg/musicroom.png",desc:"私たちPIBARAです！11回生5人で構成されたバンドグループです。未経験者もいる中、約1ヶ月間の練習で頑張って仕上げました！みんなが知ってる有名なあの曲も！？是非音楽室を覗いてみて下さい！！"},{cat:"team",title:"AsRicotta(ダンス)",at:"ステージ",by:"11～13回生有志",src:"/images/prg/stage.png",desc:"私たちアスリコットは11回生から13回生までのメンバーでダンスパフォーマンスをします！学年をまたいでのパフォーマンスも！？来たらあなたも盛り上がること間違いなし！ぜひ見に来てください！"},{cat:"teacher",title:"入学適性検査相談コーナー",at:"X棟n階",by:"入学適性検査推進室",src:"/images/prg/council.png",desc:"適性検査相談会を実施します。"},{cat:"teacher",title:"家庭科教科展示",at:"X棟n階",by:"家庭科",src:"/images/prg/council.png",desc:"生徒の日々の努力をご覧ください。"},{cat:"teacher",title:"先生とプレバト!!",at:"X棟n階",by:"国語科",src:"/images/prg/haiku.png",desc:"俳句の査定でお馴染みの才能査定ランキングが兎原祭にやってきます！見事才能アリに輝くのは誰だ！？"}]}},computed:{prgHomeroom(){return this.programs.filter((t=>"homeroom"===t.cat))},prgCouncil(){return this.programs.filter((t=>"council"===t.cat))},prgTeam(){return this.programs.filter((t=>"team"===t.cat))},prgTfpt(){return this.programs.filter((t=>"tfpt"===t.cat))},prgTeacher(){return this.programs.filter((t=>"teacher"===t.cat))}}},r=n,o=s(1001),l=s(3453),c=s.n(l),p=s(2628),d=s(7118),h=s(3325),u=s(5827),v=s(172),g=s(6952),m=s(7352),x=s(8085),b=s(2936),f=s(6505),y=s(9131),_=s(1824),k=(0,h.Z)(g.Z,y.Z,f.Z,x.Z,(0,m.d)("chipGroup"),(0,b.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...f.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(f.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,_.fK)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(v.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(u.Zq,t)},genClose(){return this.$createElement(v.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:s,data:a}=this.generateRouteLink();a.attrs={...a.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex},a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);const i=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(i,a),e)}}),C=s(2102),B=s(247),w=s(6845),S=s(2443),Z=s(1192),$=s(5630),P=s(6428),A=s(7047),E=s(2877),V=(0,o.Z)(r,a,i,!1,null,null,null),X=V.exports;c()(V,{VCard:p.Z,VCardActions:d.h7,VChip:k,VCol:C.Z,VContainer:B.Z,VExpansionPanel:w.Z,VExpansionPanelContent:S.Z,VExpansionPanelHeader:Z.Z,VExpansionPanels:$.Z,VIcon:P.Z,VImg:A.Z,VRow:E.Z})}}]);
//# sourceMappingURL=968.f3577ac5.js.map