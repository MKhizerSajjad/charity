!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("gridjs")):"function"==typeof define&&define.amd?define(["exports","gridjs"],e):e(((t||self).gridjs=t.gridjs||{},t.gridjs.plugins=t.gridjs.plugins||{},t.gridjs.plugins.selection={}),t.gridjs)}(this,function(t,e){function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}var n=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var i=e.prototype;return i.getInitialState=function(){return{rowIds:[]}},i.handle=function(t,e){"CHECK"===t&&this.check(e.ROW_ID),"UNCHECK"===t&&this.uncheck(e.ROW_ID)},i.check=function(t){this.state.rowIds.indexOf(t)>-1||this.setState({rowIds:[t].concat(this.state.rowIds)})},i.uncheck=function(t){var e=this.state.rowIds.indexOf(t);if(-1!==e){var s=[].concat(this.state.rowIds);s.splice(e,1),this.setState({rowIds:s})}},e}(e.BaseStore),o=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}s(e,t);var i=e.prototype;return i.check=function(t){this.dispatch("CHECK",{ROW_ID:t})},i.uncheck=function(t){this.dispatch("UNCHECK",{ROW_ID:t})},e}(e.BaseActions),r=/*#__PURE__*/function(t){function i(e,s){var i;if((i=t.call(this,e,s)||this).actions=void 0,i.store=void 0,i.storeUpdatedFn=void 0,i.isDataCell=function(t){return void 0!==t.row},i.getParentTR=function(){return i.base&&i.base.parentElement&&i.base.parentElement.parentElement},i.state={isChecked:!1},i.isDataCell(e)){if(e.store)i.store=e.store;else{var r=new n(i.config.dispatcher);i.store=r,e.plugin.props.store=r}i.actions=new o(i.config.dispatcher),i.storeUpdatedFn=i.storeUpdated.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i)),i.store.on("updated",i.storeUpdatedFn),e.cell.data&&i.check()}return i}s(i,t);var r=i.prototype;return r.componentWillUnmount=function(){this.store.off("updated",this.storeUpdatedFn)},r.componentDidMount=function(){this.store&&this.storeUpdated(this.store.state)},r.storeUpdated=function(t){var e=this.getParentTR();if(e){var s=t.rowIds.indexOf(this.props.id(this.props.row))>-1;this.setState({isChecked:s}),s?e.classList.add(this.props.selectedClassName):e.classList.remove(this.props.selectedClassName)}},r.check=function(){this.actions.check(this.props.id(this.props.row)),this.props.cell.update(!0)},r.uncheck=function(){this.actions.uncheck(this.props.id(this.props.row)),this.props.cell.update(!1)},r.toggle=function(){this.state.isChecked?this.uncheck():this.check()},r.render=function(){var t=this;return this.isDataCell(this.props)?e.h("input",{type:"checkbox",checked:this.state.isChecked,onChange:function(){return t.toggle()},className:this.props.checkboxClassName}):null},i}(e.PluginBaseComponent);r.defaultProps={selectedClassName:e.className("tr","selected"),checkboxClassName:e.className("checkbox")},t.RowSelection=r,t.RowSelectionActions=o,t.RowSelectionStore=n});
//# sourceMappingURL=selection.umd.js.map