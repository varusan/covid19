(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{377:function(t,e,n){var content=n(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0ddbce0c",content,!1,{sourceMap:!1})},382:function(t,e,n){var content=n(456);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3c46dd00",content,!1,{sourceMap:!1})},442:function(t,e,n){"use strict";var r=n(377);n.n(r).a},443:function(t,e,n){(e=n(12)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:#707070}.annotation{font-size:.75rem;color:#707070}@media screen and (min-width: 601px){.annotation{margin:0 0 0 auto}}",""]),t.exports=e},444:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"3/12/2020","url":"https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/1007473.html","text":"東京都緊急対応策（第三弾）の発表"},{"date":"3/12/2020","url":"https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/1007472.html","text":"都内医療機関、福祉施設等へのマスクの配布について"}]}')},455:function(t,e,n){"use strict";var r=n(382);n.n(r).a},456:function(t,e,n){(e=n(12)(!1)).push([t.i,".MainPage .DataBlock[data-v-179cc880]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-179cc880]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-179cc880]{padding:4px 8px}}",""]),t.exports=e},471:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n(388),o=r.default.extend({props:{title:{type:String,required:!0},icon:{type:String,required:!0},date:{type:String,required:!0}},computed:{formattedDate:function(){return Object(c.a)(this.date)}}}),d=(n(442),n(5)),l=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])])}),[],!1,null,null,null).exports,m=n(347),f=n(444),h=n(394),v=n(392),w=n(395),x=r.default.extend({components:{PageHeader:l,ConfirmedCasesNumberCard:h.a,ConfirmedCasesAttributesCard:v.a,TestedNumberCard:w.a},data:function(){var data={Data:m,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向"),date:m.lastUpdate},newsItems:f.newsItems};return data},head:function(){return{title:this.$t("県内の最新感染動向")}}}),_=(n(455),Object(d.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),t._m(0),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card")],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-show-count":"false"}},[this._v("Tweet")]),this._v(" "),e("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}})])}],!1,null,"179cc880",null));e.default=_.exports}}]);