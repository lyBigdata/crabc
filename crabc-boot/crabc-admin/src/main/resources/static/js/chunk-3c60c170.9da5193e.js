(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3c60c170"],{"12fd":function(e,t,a){"use strict";var i=a("2909"),n=(a("a9e3"),a("99af"),a("4de4"),a("d3b7"),a("d81d"),a("ceac")),s=a.n(n),o=[{dataIndex:"title",title:"接口编号",width:150},{dataIndex:"nickname",title:"接口名称",width:200}],r=[{dataIndex:"title",title:"接口编号",width:150},{dataIndex:"nickname",title:"接口名称",width:200}],p=[{dataIndex:"title",title:"应用名称",width:200}],c=[{dataIndex:"title",title:"应用名称",width:200}],d={inject:["reload"],props:{pageNum:{type:Number,default:1},pageSize:{type:Number,default:5},total:{type:Number,default:0},editRecord:{type:Object,default:function(){return{}}},openType:{type:String,default:""}},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),lableTitle:"",mockData:[],targetKeys:[],disabled:!1,showSearch:!0,leftColumns:"empower"==this.openType?p:o,rightColumns:"empower"==this.openType?c:r,rightSuccess:!1,leftSuccess:!1,pageNum:1,pageSize:2,total:0,leftData:[],rightData:[],allData:[]}},created:function(){switch(this.openType){case"Consumer":this.listRelationLeft(),this.listRelationRight(),this.lableTitle="应用名称";break;case"DataRole":this.getDataRoleLeft(),this.getDataRoleRight(),this.lableTitle="角色名称";break;case"empower":this.getEmpoweErData()}},mounted:function(){var e=this;setTimeout((function(){e.allData=e.leftData.concat(e.rightData);var t=[],a=[];e.allData.filter((function(a){"empower"==e.openType?t.push({key:a.consumerId,title:a.consumerName,nickname:a.nickname}):t.push({key:a.apiId,title:a.apiId,nickname:a.apiName})})),e.rightData.filter((function(t){"empower"==e.openType?a.push({key:t.consumerId,title:t.consumerName,nickname:t.nickname}):a.push({key:t.apiId,title:t.apiId,nickname:t.apiName})})),e.mockData=t,e.originTargetKeys=a.map((function(e){return e.key})),e.targetKeys=e.originTargetKeys}),500),setTimeout((function(){switch(e.openType){case"Consumer":e.form.setFieldsValue({groupName:e.editRecord.appName});break;case"DataRole":e.form.setFieldsValue({groupName:e.editRecord.roleName})}}),500)},methods:{handleSubmit:function(){var e=this;this.form.validateFields((function(t,a){if(!t)switch(e.openType){case"Consumer":e.relationUser();break;case"DataRole":e.relationUserDataRole();break;case"empower":e.editPowerList()}}))},onChange:function(e){this.targetKeys=e},onSearch:function(e){this.$refs.transfers.sourceSelectedKeys=[]},handleSelectChange:function(e,t){this.selectedKeys=[].concat(Object(i.a)(e),Object(i.a)(t))},pageChange:function(){this.$refs.transfers.sourceSelectedKeys=[]},triggerDisable:function(e){this.disabled=e},triggerShowSearch:function(e){this.showSearch=e},getRowSelection:function(e){var t=e.disabled,a=e.selectedKeys,i=e.itemSelectAll,n=e.itemSelect;return{getCheckboxProps:function(e){return{props:{disabled:t||e.disabled}}},onSelectAll:function(e,t){var n=t.filter((function(e){return!e.disabled})).map((function(e){return e.key})),o=e?s()(n,a):s()(a,n);i(o,e)},onSelect:function(e,t){var a=e.key;n(a,t)},selectedRowKeys:a}},listRelationLeft:function(){var e=this,t={appId:this.editRecord.appId,appName:this.editRecord.appName,keyName:this.searchName,pageNum:1,pageSize:this.pageSize};this.$api.account.chooseList(t).then((function(t){e.leftData=t.data.list,e.total=t.data.total,e.leftSuccess=!0}))},listRelationRight:function(){var e=this,t={appId:this.editRecord.appId,appName:this.editRecord.appName,keyName:this.searchName,pageNum:1,pageSize:this.pageSize};this.$api.account.choosed(t).then((function(t){e.rightData=t.data.list,e.total=t.data.total,e.rightSuccess=!0}))},relationUser:function(){var e=this,t={appId:this.editRecord.appId,apiIds:this.targetKeys};this.$api.account.addChoose(t).then((function(t){e.$message.success(t.data),e.reload()}))},getDataRoleLeft:function(){var e=this,t={roleId:this.editRecord.roleId,pageNum:1,pageSize:this.pageSize};this.$api.datarole.getDataRoleLeft(t).then((function(t){e.leftData=t.data.list,e.leftSuccess=!0}))},getDataRoleRight:function(){var e=this,t={roleId:this.editRecord.roleId,pageNum:1,pageSize:this.pageSize};this.$api.datarole.getDataRoleRight(t).then((function(t){e.rightData=t.data.list,e.rightSuccess=!0}))},getEmpoweErData:function(){var e=this,t={apiId:this.editRecord.apiId,apiCode:this.editRecord.apiCode};this.$api.serInterface.powerList(t).then((function(t){e.leftData=t.data.availableConsumer,e.rightData=t.data.authedConsumer,e.leftSuccess=!0,e.rightSuccess=!0}))},editPowerList:function(){var e=this,t={apiId:this.editRecord.apiId,apiCode:this.editRecord.apiCode,consumerIds:this.targetKeys};this.$api.serInterface.editPowerList(t).then((function(t){e.$message.success(t.data),e.$emit("closeModal",!0)}))},relationUserDataRole:function(){var e=this,t={roleId:this.editRecord.roleId,userIds:this.targetKeys};this.$api.datarole.relationUserDataRole(t).then((function(t){e.$message.success(t.data),e.reload()}))}}},l=a("2877"),u=Object(l.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-transfer",{ref:"transfers",attrs:{titles:"empower"!=e.openType?["可授权API","已授权API"]:["可授权应用","已授权应用"],"data-source":e.mockData,"target-keys":e.targetKeys,disabled:e.disabled,"show-search":e.showSearch,"filter-option":function(e,t){return t.title&&-1!==t.title.indexOf(e)||t.nickname&&-1!==t.nickname.indexOf(e)},"show-select-all":!1},on:{selectChange:e.handleSelectChange,change:e.onChange,search:e.onSearch},scopedSlots:e._u([{key:"children",fn:function(t){var i=t.props,n=i.direction,s=i.filteredItems,o=i.selectedKeys,r=i.disabled,p=t.on,c=p.itemSelectAll,d=p.itemSelect;return[a("a-table",{style:{pointerEvents:r?"none":null},attrs:{"row-selection":e.getRowSelection({disabled:r,selectedKeys:o,itemSelectAll:c,itemSelect:d}),columns:"left"===n?e.leftColumns:e.rightColumns,"data-source":s,size:"small","custom-row":function(e){var t=e.key,a=e.disabled;return{on:{click:function(){a||r||d(t,!o.includes(t))}}}},scroll:{x:(e.openType,200)}},on:{change:e.pageChange}})]}}])})],1)}),[],!1,null,null,null);t.a=u.exports},2909:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("6b75");var n=a("06c5");function s(e){return function(e){if(Array.isArray(e))return Object(i.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(n.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"2adc":function(e,t,a){"use strict";a("7b8a")},"2eaa":function(e,t,a){var i=a("d612"),n=a("8db3"),s=a("5edf"),o=a("7948"),r=a("b047f"),p=a("c584");e.exports=function(e,t,a,c){var d=-1,l=n,u=!0,h=e.length,m=[],f=t.length;if(!h)return m;a&&(t=o(t,r(a))),c?(l=s,u=!1):t.length>=200&&(l=p,u=!1,t=new i(t));e:for(;++d<h;){var g=e[d],v=null==a?g:a(g);if(g=c||0!==g?g:0,u&&v==v){for(var b=f;b--;)if(t[b]===v)continue e;m.push(g)}else l(t,v,c)||m.push(g)}return m}},"77d5":function(e,t,a){"use strict";a("ed00")},"7b8a":function(e,t,a){},"9aa1":function(e,t,a){"use strict";a.r(t);a("cd17");var i=a("ed3b");a("d81d"),a("d3b7"),a("25f0"),a("159b"),a("b0c0"),a("ddb0"),a("ac1f"),a("5319");var n={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let s;const o=new Uint8Array(16);function r(){if(!s&&(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(o)}const p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));function c(e,t=0){return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}var d=function(e,t,a){if(n.randomUUID&&!t&&!e)return n.randomUUID();const i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){a=a||0;for(let e=0;e<16;++e)t[a+e]=i[e];return t}return c(i)},l={inject:["reload"],props:{submitType:{type:String,default:""},editRecord:{type:Object,default:function(){return{}}}},data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"}),appId:"",appName:"",appCode:"",appDesc:"",department:"",treeData:[],isNew:!1,fetching:!1,pageSizeShow:!0,searchValue:"",total:10,totalPage:"",pageNo:1,pageSize:10,inputShow:!1,selectList:[],values:[],projectName:"",projectId:""}},components:{VNodes:{functional:!0,render:function(e,t){return t.props.vnodes}}},mounted:function(){var e=this;this.appId=this.editRecord.appId,"edit"===this.submitType?setTimeout((function(){e.projectId=e.editRecord.projectId,e.projectName=e.editRecord.projectName,e.editRecord.department&&0!=e.editRecord.department.length?(e.editRecord.department=e.editRecord.department.toString(),e.editRecord.department=e.editRecord.department.split(",")):e.editRecord.department=[],e.form.setFieldsValue({appName:e.editRecord.appName,appCode:e.editRecord.appCode,appKey:e.editRecord.appKey,appSecret:e.editRecord.appSecret,appDesc:e.editRecord.appDesc,department:e.editRecord.department,ips:e.editRecord.ips,projectId:e.editRecord.projectId,projectName:e.editRecord.projectName,appRemark:e.editRecord.appRemark})}),200):(this.getAppKey(),this.generateCode())},methods:{ipValidator:function(e,t,a){t&&t.length>0&&(t.indexOf("\n")>-1&&a(new Error("请使用英文分号作为IP规则分隔符")),t.indexOf("；")>-1&&a(new Error("请使用英文分号作为IP规则分隔符")),t.indexOf(" ")>-1&&a(new Error("请不要包含空格"))),a()},fn:function(e){var t=this;e.forEach((function(e){e.value=e.id,e.key=e.id,e.title=e.name,e.children=e.organizationVos,delete e.name,delete e.id,delete e.organizationVos,e.children.length>0&&t.fn(e.children)}))},handleSubmit:function(){var e=this;this.form.validateFields((function(t,a){t||(e.appName=a.appName,e.appCode=a.appCode,e.appDesc=a.appDesc,e.values=a,"new"===e.submitType&&e.insertApp(),"edit"===e.submitType&&e.updateApp())})),this.isNew=!1},getAppKey:function(){this.form.setFieldsValue({appKey:d().replace(/-/g,""),appSecret:d().replace(/-/g,"")})},generateCode:function(){this.form.setFieldsValue({appCode:d().replace(/-/g,"")})},insertApp:function(){var e=this;this.values.department?this.values.department=this.values.department.toString():this.values.department="";var t=Object.assign({isRegenerateSecret:this.isNew?1:0,appId:this.appId,appName:this.appName,appCode:this.appCode,appDesc:this.appDesc,appSecret:this.values.appSecret,appKey:this.values.appKey,ips:this.values.ips,appRemark:this.values.appRemark});this.$api.account.insertApp(t).then((function(t){e.$message.success(t.data),e.reload()}))},updateApp:function(){var e=this;"zero"!==this.projectId&&(this.values.appRemark=""),this.values.department?this.values.department=this.values.department.toString():this.values.department="";var t=Object.assign({isRegenerateSecret:this.isNew?1:0,appId:this.appId,appName:this.appName,appCode:this.appCode,appDesc:this.appDesc,appSecret:this.values.appSecret,appKey:this.values.appKey,ips:this.values.ips,appRemark:this.values.appRemark});this.$api.account.updateApp(t).then((function(t){e.$message.success("修改成功!"),e.reload()}))},isRegenerateSecret:function(){this.getAppKey()},handleAppCode:function(e,t,a){/^[a-zA-Z][a-zA-Z0-9]{4,24}$/.test(t)||a("输入值应包含大写字母或小写字母或数字，且已字母开头，长度为5-25个字符"),a()},handleChange:function(e){this.selectList[e]&&("zero"==this.selectList[e].id?this.inputShow=!0:(this.inputShow=!1,this.form.appRemark=""),this.projectId=this.selectList[e].id||"",this.projectName=this.selectList[e].name||"")},handleBlur:function(){this.pageNo=1,this.searchValue=""}}},u=a("2877"),h=Object(u.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("a-form",{attrs:{form:this.form,"label-col":{span:4},"wrapper-col":{span:20}},on:{submit:this.handleSubmit}},[t("a-form-item",{attrs:{label:"应用名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["appName",{rules:[{required:!0,message:"请输入应用名称!"}]}],expression:"['appName', { rules: [{ required: true, message: '请输入应用名称!' }] }]"}],staticStyle:{width:"350px"},attrs:{oninput:"value=value.replace(/\\s/g,'')",placeholder:"请输入应用名称",maxLength:25}})],1),t("a-form-item",{attrs:{label:"AppCode"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["appCode",{rules:[{required:!0,message:"请输入AppCode!"}]}],expression:"[\n          'appCode',\n          {\n            rules: [\n              { required: true, message: '请输入AppCode!' }\n              // { validator: handleAppCode  }\n            ]\n          }\n        ]"}],staticStyle:{width:"350px"},attrs:{placeholder:""}}),t("a-button",{attrs:{type:"link"},on:{click:this.generateCode}},[this._v("刷新")])],1),t("a-form-item",{attrs:{label:"AppKey"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["appKey",{rules:[{required:!0,message:"请输入AppKey!"}]}],expression:"['appKey', { rules: [{ required: true, message: '请输入AppKey!' }] }]"}],staticStyle:{width:"350px"},attrs:{placeholder:"请输入"}})],1),t("a-form-item",{attrs:{label:"AppSecret"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["appSecret",{rules:[{required:!0,message:"请输入AppSecret!"}]}],expression:"['appSecret', { rules: [{ required: true, message: '请输入AppSecret!' }] }]"}],staticStyle:{width:"350px"},attrs:{placeholder:"请输入"}}),t("a-button",{attrs:{type:"link"},on:{click:this.isRegenerateSecret}},[this._v("刷新")])],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:"zero"==this.projectId,expression:"this.projectId == 'zero'"}],attrs:{label:"应用备注"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["appRemark",{rules:[{required:!1,message:"请输入!"}]}],expression:"['appRemark', { rules: [{ required: false, message: '请输入!' }] }]"}]})],1),t("a-form-item",{attrs:{label:"应用描述"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["appDesc",{rules:[{required:!1}]}],expression:"['appDesc', { rules: [{ required: false }] }]"}],attrs:{placeholder:"请输入应用描述",rows:2}})],1),t("a-form-item",{attrs:{label:"IP白名单"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ips",{rules:[{required:!1},{validator:this.ipValidator}]}],expression:"['ips', { rules: [{ required: false },{validator:ipValidator}] }]"}],attrs:{placeholder:"多个IP使用;隔开",rows:3}})],1)],1)],1)}),[],!1,null,null,null).exports,m=a("12fd"),f=a("f3e4"),g={inject:["reload"],components:{ConsumerPopup:h,AssociatedUser:m.a},data:function(){return{headers:{Authorization:Object(f.a)()},visibleConsumer:!1,visibleAssociatedUser:!1,openType:"Consumer",modalTitle:"",inputVal:"",currentPage:1,totalPage:3,pageNum:1,pageSize:8,total:0,totalNum:0,appName:"",appCode:"",secretKey:"",submitType:"",batchDelData:[],editRecord:{},columns:[{title:"ID",dataIndex:"appId",key:"appId",width:80,ellipsis:!0},{title:"名称",dataIndex:"appName",key:"appName",width:170,ellipsis:!0},{title:"Code",dataIndex:"appCode",key:"appCode",ellipsis:!0},{title:"修改时间",dataIndex:"updateTime",key:"updateTime",width:180},{title:"状态",width:90,dataIndex:"type",key:"type",scopedSlots:{customRender:"type"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"},width:260,align:"left"}],tabData:[]}},computed:{rowSelection:function(){var e=this;return{onChange:function(t,a){e.batchDelData=a}}},pagination:function(){var e=this;Math.ceil(e.total/e.pageSize);return{showSizeChanger:!0,size:"small",pageSizeOptions:["10","20","50","100"],showQuickJumper:!0,pageSize:e.pageSize,total:e.totalNum,showTotal:function(t){return"共 ".concat(e.total," 条")},onChange:function(t,a){e.pageNum=t,e.getAppList()}}},count:function(){return!this.expand}},created:function(){this.getAppList(),this.init()},methods:{init:function(){},getAppList:function(){var e=this,t={appName:this.appName,appCode:this.appCode,pageNum:this.pageNum,pageSize:this.pageSize};this.$api.account.getAppList(t).then((function(t){e.tabData=t.data.list,e.total=t.data.total,e.totalNum=t.data.total}))},downloadFile:function(e){this.$api.develop.appDownload("应用列表.xlsx",e).then((function(e){}))},importData:function(e){"done"===e.file.status?this.$message.success("导入成功"):"error"===e.file.status&&this.$message.error("导入失败")},searchInput:function(){this.pageNum=1,this.getAppList()},resetClick:function(){this.reload()},addPopup:function(){this.visibleConsumer=!0,this.modalTitle="新建应用",this.submitType="new"},editPopup:function(e){this.visibleConsumer=!0,this.modalTitle="应用修改",this.submitType="edit",this.editRecord=e},associatedUser:function(e){this.visibleAssociatedUser=!0,this.editRecord=e},hideModalConsumer:function(){this.$refs.ConsumerFormData.handleSubmit()},hideModalAssociatedUser:function(){this.$refs.AssociatedUserFormData.handleSubmit()},batchDel:function(){var e=this;0===this.batchDelData.length?this.$message.warning("请勾选数据"):i.a.confirm({title:this.$t("批量删除"),content:this.$t("当前操作会删除已勾选数据，是否继续？"),onOk:function(){var t=[];e.batchDelData.map((function(e){t.push(e.appId)})),e.deleteApp(t)},onCancel:function(){}})},delSingle:function(e){var t=this;i.a.confirm({title:this.$t("删除"),content:this.$t("确定要删除当前应用吗？"),onOk:function(){var a=[];a.push(e.appId),t.deleteApp(a)},onCancel:function(){}})},openBtn:function(e){var t=this;0==e.enabled?i.a.confirm({title:this.$t("禁用"),content:this.$t("确定要禁用当前应用吗?"),onOk:function(){t.updateState(e,1)},onCancel:function(){}}):i.a.confirm({title:this.$t("启用"),content:this.$t("确定要启用当前应用吗?"),onOk:function(){t.updateState(e,0)},onCancel:function(){}})},updateState:function(e,t){var a=this;this.$api.account.updateState({appId:e.appId,enabled:t}).then((function(e){e.data&&a.$message.success("操作成功!"),a.getAppList()}))},deleteApp:function(e){var t=this;this.$api.account.deleteApp(e).then((function(e){t.$message.success(e.data),t.reload()}))}}},v=(a("77d5"),{name:"Application",components:{ConsumerComponents:Object(u.a)(g,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"consumer-components-box"},[a("div",{staticClass:"consumer-components-head"},[a("div",{staticClass:"consumer-components-head-top"},[a("span",[e._v(" 应用名称： "),a("a-input",{staticClass:"consumer-components-input",attrs:{placeholder:"请输入"},model:{value:e.appName,callback:function(t){e.appName=t},expression:"appName"}})],1),a("span",[a("a-button",{staticClass:"search-btn",staticStyle:{"margin-left":"0"},attrs:{type:"primary"},on:{click:e.searchInput}},[e._v("查询")]),a("a-button",{staticClass:"search-btn",staticStyle:{"margin-left":"0"},attrs:{icon:"plus"},on:{click:e.addPopup}},[e._v("新建")]),a("a-button",{staticStyle:{"margin-left":"5px"},attrs:{icon:"download"},on:{click:function(t){return e.downloadFile(e.appName)}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",accept:".xlsx",showUploadList:!1,headers:e.headers,action:"/api/box/sys/app/import"},on:{change:e.importData}},[a("a-button",{staticStyle:{margin:"0 5px"},attrs:{icon:"upload"}},[e._v("上传")])],1)],1)])]),a("div",{staticClass:"consumer-components-table"},[a("a-table",{attrs:{columns:e.columns,"data-source":e.tabData,"row-selection":e.rowSelection,pagination:e.pagination,scroll:{x:800}},scopedSlots:e._u([{key:"type",fn:function(t,i){return[a("span",{class:0!==i.enabled?"":"redSpan"},[e._v(" "+e._s(0!==i.enabled?"已启用":"已禁用")+" ")])]}},{key:"operation",fn:function(t,i){return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.associatedUser(i)}}},[e._v("授权API")]),a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.editPopup(i)}}},[e._v("编辑")]),a("a-button",{staticStyle:{color:"red"},attrs:{type:"link"},on:{click:function(t){return e.delSingle(i)}}},[e._v("删除")]),a("a-button",{class:0==i.enabled?"":"redSpan",attrs:{type:"link"},on:{click:function(t){return e.openBtn(i)}}},[e._v(e._s(0==i.enabled?"启用":"禁用"))])]}}])})],1),e.visibleConsumer?a("a-modal",{attrs:{maskClosable:!1,title:e.modalTitle,"ok-text":"确认","cancel-text":"取消",width:600},on:{ok:e.hideModalConsumer},model:{value:e.visibleConsumer,callback:function(t){e.visibleConsumer=t},expression:"visibleConsumer"}},[a("ConsumerPopup",{ref:"ConsumerFormData",attrs:{"submit-type":e.submitType,"edit-record":e.editRecord}})],1):e._e(),e.visibleAssociatedUser?a("a-modal",{attrs:{maskClosable:!1,title:"授权API","ok-text":"确认","cancel-text":"取消",width:"70%"},on:{ok:e.hideModalAssociatedUser},model:{value:e.visibleAssociatedUser,callback:function(t){e.visibleAssociatedUser=t},expression:"visibleAssociatedUser"}},[a("AssociatedUser",{ref:"AssociatedUserFormData",attrs:{"page-no":e.pageNum,"page-size":e.pageSize,total:e.total,"edit-record":e.editRecord,"open-type":e.openType}})],1):e._e()],1)}),[],!1,null,"0106382a",null).exports}}),b=(a("2adc"),Object(u.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"jurisdiction-box"},[t("header-content"),t("ConsumerComponents",{attrs:{tabType:"serManagement"}})],1)}),[],!1,null,"fe85c69e",null));t.default=b.exports},ceac:function(e,t,a){var i=a("2eaa"),n=a("5c69"),s=a("100e"),o=a("dcbe"),r=s((function(e,t){return o(e)?i(e,n(t,1,o,!0)):[]}));e.exports=r},ed00:function(e,t,a){}}]);