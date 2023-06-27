"use strict";(globalThis.webpackChunkhubs=globalThis.webpackChunkhubs||[]).push([[6262],{"./src/react-components/room/AvatarSettingsSidebar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AvatarSettingsSidebar_stories});__webpack_require__("./node_modules/react/index.js");var RoomLayout=__webpack_require__("./src/react-components/layout/RoomLayout.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Sidebar=__webpack_require__("./src/react-components/sidebar/Sidebar.js"),CloseButton=__webpack_require__("./src/react-components/input/CloseButton.js"),BackButton=__webpack_require__("./src/react-components/input/BackButton.js"),AvatarSettingsContent=__webpack_require__("./src/react-components/room/AvatarSettingsContent.js"),message=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["className","showBackButton","onBack","onClose"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AvatarSettingsSidebar(_ref){let{className,showBackButton,onBack,onClose}=_ref,rest=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(Sidebar.Y,{title:(0,jsx_runtime.jsx)(message.Z,{id:"avatar-settings-sidebar.title",defaultMessage:"Avatar Settings"}),beforeTitle:showBackButton?(0,jsx_runtime.jsx)(BackButton.x,{onClick:onBack}):(0,jsx_runtime.jsx)(CloseButton.P,{onClick:onClose}),className,children:(0,jsx_runtime.jsx)(AvatarSettingsContent.O,_objectSpread({},rest))})}var _Base$parameters,_Base$parameters2,_Base$parameters2$doc;function AvatarSettingsSidebar_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function AvatarSettingsSidebar_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?AvatarSettingsSidebar_stories_ownKeys(Object(source),!0).forEach((function(key){AvatarSettingsSidebar_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AvatarSettingsSidebar_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function AvatarSettingsSidebar_stories_defineProperty(obj,key,value){return(key=function AvatarSettingsSidebar_stories_toPropertyKey(arg){var key=function AvatarSettingsSidebar_stories_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}AvatarSettingsSidebar.displayName="AvatarSettingsSidebar",AvatarSettingsSidebar.propTypes={showBackButton:prop_types_default().bool,className:prop_types_default().string,onBack:prop_types_default().func,onClose:prop_types_default().func},AvatarSettingsSidebar.__docgenInfo={description:"",methods:[],displayName:"AvatarSettingsSidebar",props:{showBackButton:{description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},onBack:{description:"",type:{name:"func"},required:!1},onClose:{description:"",type:{name:"func"},required:!1}}};const AvatarSettingsSidebar_stories={title:"Room/AvatarSettingsSidebar",parameters:{layout:"fullscreen"}},Base=()=>(0,jsx_runtime.jsx)(RoomLayout.s,{sidebar:(0,jsx_runtime.jsx)(AvatarSettingsSidebar,{})});Base.displayName="Base",Base.parameters=AvatarSettingsSidebar_stories_objectSpread(AvatarSettingsSidebar_stories_objectSpread({},Base.parameters),{},{docs:AvatarSettingsSidebar_stories_objectSpread(AvatarSettingsSidebar_stories_objectSpread({},null===(_Base$parameters=Base.parameters)||void 0===_Base$parameters?void 0:_Base$parameters.docs),{},{source:AvatarSettingsSidebar_stories_objectSpread({originalSource:"() => <RoomLayout sidebar={<AvatarSettingsSidebar />} />"},null===(_Base$parameters2=Base.parameters)||void 0===_Base$parameters2||null===(_Base$parameters2$doc=_Base$parameters2.docs)||void 0===_Base$parameters2$doc?void 0:_Base$parameters2$doc.source)})});const __namedExportsOrder=["Base"];Base.__docgenInfo={description:"",methods:[],displayName:"Base"}},"./src/react-components/input/CloseButton.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CloseButton_CloseButton});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),IconButton=__webpack_require__("./src/react-components/input/IconButton.js"),Close=__webpack_require__("./src/react-components/icons/Close.svg"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),CloseButton=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/input/CloseButton.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CloseButton.Z,options);const input_CloseButton=CloseButton.Z&&CloseButton.Z.locals?CloseButton.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["lg","className"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CloseButton_CloseButton(_ref){let{lg,className}=_ref,rest=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)(IconButton.h,_objectSpread(_objectSpread({className:classnames_default()({[input_CloseButton.lg]:lg},className)},rest),{},{children:(0,jsx_runtime.jsx)(Close.r,{width:16,height:16})}))}CloseButton_CloseButton.displayName="CloseButton",CloseButton_CloseButton.propTypes={className:prop_types_default().string,lg:prop_types_default().bool},CloseButton_CloseButton.__docgenInfo={description:"",methods:[],displayName:"CloseButton",props:{className:{description:"",type:{name:"string"},required:!1},lg:{description:"",type:{name:"bool"},required:!1}}}},"./src/react-components/sidebar/Sidebar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Sidebar_Sidebar});__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Sidebar=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/sidebar/Sidebar.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Sidebar.Z,options);const sidebar_Sidebar=Sidebar.Z&&Sidebar.Z.locals?Sidebar.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Sidebar_Sidebar(_ref){let{title,beforeTitle,afterTitle,children,contentClassName,className,disableOverflowScroll}=_ref;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(sidebar_Sidebar.sidebar,className),children:[(title||beforeTitle||afterTitle)&&(0,jsx_runtime.jsxs)("div",{className:sidebar_Sidebar.header,children:[(0,jsx_runtime.jsx)("div",{className:sidebar_Sidebar.beforeTitle,children:beforeTitle}),(0,jsx_runtime.jsx)("h5",{children:title}),(0,jsx_runtime.jsx)("div",{className:sidebar_Sidebar.afterTitle,children:afterTitle})]}),(0,jsx_runtime.jsx)("div",{className:classnames_default()(sidebar_Sidebar.content,disableOverflowScroll?"":sidebar_Sidebar.overflowY,contentClassName),children})]})}Sidebar_Sidebar.displayName="Sidebar",Sidebar_Sidebar.propTypes={title:prop_types_default().node,beforeTitle:prop_types_default().node,afterTitle:prop_types_default().node,children:prop_types_default().node,className:prop_types_default().string,contentClassName:prop_types_default().string,disableOverflowScroll:prop_types_default().bool},Sidebar_Sidebar.defaultProps={disableOverflowScroll:!1},Sidebar_Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{disableOverflowScroll:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},title:{description:"",type:{name:"node"},required:!1},beforeTitle:{description:"",type:{name:"node"},required:!1},afterTitle:{description:"",type:{name:"node"},required:!1},children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1},contentClassName:{description:"",type:{name:"string"},required:!1}}}},"./src/react-components/icons/Close.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgClose});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgClose=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17 17 3 3",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17 3 3 17",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/input/CloseButton.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(min-width: 992px)and (min-height: 600px){.CloseButton__lg__CMV4C svg{height:20px;width:20px}}","",{version:3,sources:["webpack://./src/react-components/input/CloseButton.scss"],names:[],mappings:"AAGE,gDACE,4BACE,WAAA,CACA,UAAA,CAAA",sourcesContent:['@use "../styles/theme.scss";\n\n:local(.lg) {\n  @media(min-width: theme.$breakpoint-lg) and (min-height: theme.$breakpoint-vr) {\n    svg {\n      height: 20px;\n      width: 20px;\n    }\n  }\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={lg:"CloseButton__lg__CMV4C"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/react-components/sidebar/Sidebar.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Sidebar__sidebar__KYENJ{position:relative;display:flex;flex-direction:column;height:100%;background-color:var(--background1-color);pointer-events:auto;overflow-wrap:break-word}@media(min-width: 992px)and (min-height: 600px){.Sidebar__sidebar__KYENJ{border-left:1px solid var(--border1-color)}}.Sidebar__header__zbsTL{display:flex;height:48px;flex-shrink:0;border-bottom:1px solid var(--border1-color);align-items:center;justify-content:center}.Sidebar__before-title__SDmnu{position:absolute;left:0;margin-left:16px}.Sidebar__after-title__tQwef{position:absolute;right:0;margin-right:16px}.Sidebar__content__PP6Vz{position:absolute;top:48px;left:0;right:0;bottom:0;display:flex;flex:1;flex-direction:column}.Sidebar__overflow-y__iAkyO{overflow-y:auto}","",{version:3,sources:["webpack://./src/react-components/sidebar/Sidebar.scss","webpack://./src/react-components/styles/theme.scss"],names:[],mappings:"AAEA,yBACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,WAAA,CACA,yCC8JkB,CD7JlB,mBAAA,CACA,wBAAA,CAEA,gDATF,yBAUI,0CAAA,CAAA,CAIJ,wBACE,YAAA,CACA,WAAA,CACA,aAAA,CACA,4CAAA,CACA,kBAAA,CACA,sBAAA,CAGF,8BACE,iBAAA,CACA,MAAA,CACA,gBAAA,CAGF,6BACE,iBAAA,CACA,OAAA,CACA,iBAAA,CAGF,yBACE,iBAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,YAAA,CACA,MAAA,CACA,qBAAA,CAGF,4BACE,eAAA",sourcesContent:['@use "../styles/theme.scss";\n\n:local(.sidebar) {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background-color: theme.$background1-color;\n  pointer-events: auto;\n  overflow-wrap: break-word;\n  \n  @media(min-width: theme.$breakpoint-lg) and (min-height: theme.$breakpoint-vr) {\n    border-left: 1px solid theme.$border1-color;\n  }\n}\n\n:local(.header) {\n  display: flex;\n  height: 48px;\n  flex-shrink: 0;\n  border-bottom: 1px solid theme.$border1-color;\n  align-items: center;\n  justify-content: center;\n}\n\n:local(.before-title) {\n  position: absolute;\n  left: 0;\n  margin-left: 16px;\n}\n\n:local(.after-title) {\n  position: absolute;\n  right: 0;\n  margin-right: 16px;\n}\n\n:local(.content) {\n  position: absolute;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n:local(.overflow-y) {\n  overflow-y: auto;\n}\n',"// default below 576px (Portrait Phones)\n$breakpoint-sm: 576px; // Landscape Phones\n$breakpoint-md: 768px; // Tablets\n$breakpoint-lg: 992px; // Desktops\n$breakpoint-xl: 1200px; // Large Desktops\n$breakpoint-xxl: 1600px; // Extra Large Desktops\n$breakpoint-vr: 600px; // Standalone VR Browsers\n\n$transparent: transparent;\n$transparent-hover: rgba(0, 0, 0, 0.08);\n$transparent-pressed: rgba(0, 0, 0, 0.12);\n\n$white: #FFFFFF;\n$white-hover: #E7E7E7;\n$white-pressed: #DBDBDB;\n\n$lightgrey: #E7E7E7;\n$lightgrey-hover: #F5F5F5;\n$lightgrey-pressed: #DBDBDB;\n\n$grey: #BBBBBB;\n$grey-hover: #C7C7C7;\n$grey-pressed: #ADADAD;\n\n$darkgrey: #868686;\n$darkgrey-hover: #949494;\n$darkgrey-pressed: #7A7A7A;\n\n$black: #000000;\n$black-hover: #404040;\n$black-pressed: #7A7A7A;\n\n$red: #F5325C;\n$red-hover: #F64B70;\n$red-pressed: #F41A49;\n\n$orange: #FF8500;\n$orange-hover: #FF911A;\n$orange-pressed: #E67800;\n\n$green: #7ED320;\n$green-hover: #8CDF2F;\n$green-pressed: #72BE1D;\n\n$blue: #007AB8;\n$blue-hover: #008BD1;\n$blue-pressed: #00699E;\n\n$purple: #7854F6;\n$purple-hover: #8C6EF7;\n$purple-pressed: #663DF5;\n\n$recessed-bg: #f9f9f9;\n\n$yellow: #FFC000;\n\n// Brand Colors\n$spoke-primary-color: #2F80ED;\n$twitter-primary-color: #6FC0FD;\n$slack-primary-color: #611F69;\n$discord--primary-color: #7289DA;\n\n// Discord Bot Page Colors\n$discord-bg-color: #2A2D32;\n$discord-text1-color: white;\n$discord-text2-color: #A3A3A3;\n$discord-text3-color: rgb(127, 127, 127);\n$discord-text4-color: rgb(64, 64, 64);\n\n$font-size-xs: 10px;\n$font-size-sm: 12px;\n$font-size-md: 14px;\n$font-size-lg: 20px;\n$font-size-xl: 24px;\n$font-size-2xl: 28px;\n\n$font-weight-regular: 400;\n$font-weight-medium: 500;\n$font-weight-bold: 700;\n\n$border-radius-regular: 8px;\n$border-radius-small: 6px;\n\n$outline-width: 3px;\n\n$spacing-2xs: 4px;\n$spacing-xs: 8px;\n$spacing-sm: 12px;\n$spacing-md: 16px;\n$spacing-lg: 20px;\n$spacing-xl: 24px;\n\n// Theme SCSS Variables:\n// Reference these variables in the Hubs codebase.\n// The CSS variables they reference are defined in ./global.scss such that they are only included on the page once.\n$font-family-default: var(--font-family-default);\n$font-family-monospace: var(--font-family-monospace);\n\n$text1-color: var(--text1-color);\n$text1-color-hover: var(--text1-color-hover);\n$text1-color-pressed: var(--text1-color-pressed);\n$text2-color: var(--text2-color);\n$text2-color-hover: var(--text2-color-hover);\n$text2-color-pressed: var(--text2-color-pressed);\n$text3-color: var(--text3-color);\n$text3-color-hover: var(--text3-color-hover);\n$text3-color-pressed: var(--text3-color-pressed);\n$text4-color: var(--text4-color);\n$text4-color-hover: var(--text4-color-hover);\n$text4-color-pressed: var(--text4-color-pressed);\n$text5-color: var(--text5-color);\n$text5-color-hover: var(--text5-color-hover);\n$text5-color-pressed: var(--text5-color-pressed);\n$text-inverted-color: var(--text-inverted-color);\n\n$link-color: var(--link-color);\n$link-color-hover: var(--link-color-hover);\n$link-color-pressed: var(--link-color-pressed);\n\n$accept-color: var(--accept-color);\n$accept-border-color: var(--accept-border-color);\n$accept-color-hover: var(--accept-color-hover);\n$accept-color-pressed: var(--accept-color-pressed);\n\n$cancel-color: var(--cancel-color);\n$cancel-color-hover: var(--cancel-color-hover);\n$cancel-color-pressed: var(--cancel-color-pressed);\n\n$accent1-color: var(--accent1-color);\n$accent1-border-color: var(--accent1-border-color);\n$accent1-color-hover: var(--accent1-color-hover);\n$accent1-color-pressed: var(--accent1-color-pressed);\n\n$accent2-color: var(--accent2-color);\n$accent2-border-color: var(--accent2-border-color);\n$accent2-color-hover: var(--accent2-color-hover);\n$accent2-color-pressed: var(--accent2-color-pressed);\n\n$accent3-color: var(--accent3-color);\n$accent3-color-hover: var(--accent3-color-hover);\n$accent3-color-pressed: var(--accent3-color-pressed);\n$accent3-border-color: var(--accent3-border-color);\n\n$accent4-color: var(--accent4-color);\n$accent4-border-color: var(--accent4-border-color);\n$accent4-color-hover: var(--accent4-color-hover);\n$accent4-color-pressed: var(--accent4-color-pressed);\n\n$accent5-color: var(--accent5-color);\n$accent5-border-color: var(--accent5-border-color);\n$accent5-color-hover: var(--accent5-color-hover);\n$accent5-color-pressed: var(--accent5-color-pressed);\n\n$accent6-color: var(--accent6-color);\n$accent6-color-hover: var(--accent6-color-hover);\n$accent6-color-pressed: var(--accent6-color-pressed);\n\n$primary-color: var(--primary-color);\n$primary-color-hover: var(--primary-color-hover);\n$primary-color-pressed: var(--primary-color-pressed);\n\n$secondary-color: var(--secondary-color);\n$secondary-color-hover: var(--secondary-color-hover);\n$secondary-color-pressed: var(--secondary-color-pressed);\n\n$background1-color: var(--background1-color);\n$background2-color: var(--background2-color);\n$background3-color: var(--background3-color);\n$background4-color: var(--background4-color);\n\n$loading-screen-background: var(--loading-screen-background);\n\n$border1-color: var(--border1-color);\n$border2-color: var(--border2-color);\n$border3-color: var(--border3-color);\n\n$outline-color: var(--outline-color);\n\n$shadow-color: var(--shadow-color);\n\n$basic-color: var(--basic-color);\n$basic-color-hover: var(--basic-color-hover);\n$basic-color-pressed: var(--basic-color-pressed);\n$basic-border-color: var(--basic-border-color);\n\n$disabled-text-color: var(--disabled-text-color);\n$disabled-bg-color: var(--disabled-bg-color);\n$disabled-icon-color: var(--disabled-icon-color);\n\n$radio-border-color: var(--radio-border-color);\n$radio-bg-color: var(--radio-bg-color);\n$radio-bg-color-hover: var(--radio-bg-color-hover);\n$radio-bg-color-pressed: var(--radio-bg-color-pressed);\n\n$toggle-button-color: var(--toggle-button-color);\n\n$input-bg-color: var(--input-bg-color);\n$input-icon-color: var(--input-icon-color);\n$input-border-color: var(--input-border-color);\n$input-border-color-hover: var(--input-border-color-hover);\n$input-outline-color: var(--input-outline-color);\n\n$list-bg-color-hover: var(--list-bg-color-hover);\n$list-bg-color-pressed: var(--list-bg-color-pressed);\n\n$dropdown-bg-color: var(--dropdown-bg-color);\n$dropdown-border-color: var(--dropdown-border-color);\n$dropdown-shadow-color: var(--dropdown-shadow-color);\n\n$button-text-color: var(--button-text-color);\n$button-border-color: var(--button-border-color);\n$button-bg-color: var(--button-bg-color);\n$button-bg-color-hover: var(--button-bg-color-hover);\n$button-bg-color-pressed: var(--button-bg-color-pressed);\n\n$active-text-color: var(--active-text-color);\n$active-color: var(--active-color);\n$active-color-hover: var(--active-color-hover);\n$active-color-pressed: var(--active-color-pressed);\n\n$chat-bubble-bg-color-sent: var(--chat-bubble-bg-color-sent);\n$chat-bubble-text-color-sent: var(--chat-bubble-text-color-sent);\n$chat-bubble-link-color-sent-hover: var(--chat-bubble-link-color-sent-hover);\n$chat-bubble-link-color-sent-pressed: var(--chat-bubble-link-color-sent-pressed);\n$chat-bubble-bg-color-received: var(--chat-bubble-bg-color-received);\n\n$tip-text-color: var(--tip-text-color);\n$tip-bg-color: var(--tip-bg-color);\n$tip-button-color: var(--tip-button-color);\n$tip-button-color-hover: var(--tip-button-color-hover);\n$tip-button-color-pressed: var(--tip-button-color-pressed);\n\n$favorite-color: var(--favorite-color);\n\n$admin-color: var(--admin-color);\n\n$error-color: var(--error-color);\n$error-color-hover: var(--error-color-hover);\n$error-color-pressed: var(--error-color-pressed);\n\n$status-unread-color: var(--status-unread-color);\n$status-recording-color: var(--status-recording-color);\n$status-enabled-color: var(--status-enabled-color);\n$status-disabled-color: var(--status-disabled-color);\n\n$overlay-bg-color: var(--overlay-bg-color);\n$overlay-text-color: var(--overlay-text-color);\n$overlay-border-color: var(--overlay-border-color);\n$overlay-outline-color: var(--overlay-outline-color);\n\n$toolbar-icon-color: var(--toolbar-icon-color);\n$toolbar-icon-selected-bg: var(--toolbar-icon-selected-bg);\n$toolbar-basic-icon-color: var(--toolbar-basic-icon-color);\n$toolbar-basic-selected-icon-color: var(--toolbar-basic-selected-icon-color);\n$toolbar-basic-color: var(--toolbar-basic-color);\n$toolbar-basic-color-hover: var(--toolbar-basic-color-hover);\n$toolbar-basic-color-pressed: var(--toolbar-basic-color-pressed);\n$toolbar-basic-border-color: var(--toolbar-basic-border-color);\n$toolbar-label-accent1: var(--toolbar-label-accent1);\n$toolbar-label-accent2: var(--toolbar-label-accent2);\n$toolbar-label-accent3: var(--toolbar-label-accent3);\n$toolbar-label-accent4: var(--toolbar-label-accent4);\n$toolbar-label-accent5: var(--toolbar-label-accent5);\n\n$tile-text-color: var(--tile-text-color);\n$tile-bg-color: var(--tile-bg-color);\n$tile-bg-color-hover: var(--tile-bg-color-hover);\n$tile-bg-color-pressed: var(--tile-bg-color-pressed);\n$tile-button-text-color: var(--tile-button-text-color);\n$tile-button-bg-color: var(--tile-button-bg-color);\n$tile-button-bg-color-hover: var(--tile-button-bg-color-hover);\n$tile-button-bg-color-pressed: var(--tile-button-bg-color-pressed);\n$tile-button-border-color: var(--tile-button-border-color);\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={sidebar:"Sidebar__sidebar__KYENJ",header:"Sidebar__header__zbsTL","before-title":"Sidebar__before-title__SDmnu",beforeTitle:"Sidebar__before-title__SDmnu","after-title":"Sidebar__after-title__tQwef",afterTitle:"Sidebar__after-title__tQwef",content:"Sidebar__content__PP6Vz","overflow-y":"Sidebar__overflow-y__iAkyO",overflowY:"Sidebar__overflow-y__iAkyO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);