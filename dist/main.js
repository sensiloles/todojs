!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function i(e,t){var n=document.createElement(e);Object.keys(t).forEach(function(e){n[e]=t[e]});for(var i=arguments.length,o=new Array(i>2?i-2:0),l=2;l<i;l++)o[l-2]=arguments[l];return o.length?(o.forEach(function(e){if("string"==typeof e){var t=document.createTextNode(e);n.appendChild(t)}else n.appendChild(e)}),n):n}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"init",function(){n.checkbox=i("input",{className:"checkbox",type:"checkbox",onchange:n.handleToggle}),n.title=i("label",{className:"title"},n.title),n.textField=i("input",{className:"textfield",type:"text"}),n.buttonEdit=i("button",{className:"edit",onclick:n.handleEdit},"Изменить"),n.buttonDelete=i("button",{className:"delete",onclick:n.handleDelete},"Удалить"),n.element=i("li",{className:"todo-item"},n.checkbox,n.title,n.textField,n.buttonEdit,n.buttonDelete)}),l(this,"handleToggle",function(){n.toggle()}),l(this,"handleEdit",function(){n.edit()}),l(this,"handleDelete",function(){n.remove(),n.destroyEvents()}),l(this,"toggle",function(){n.element.classList.toggle("completed")}),l(this,"edit",function(){n.isEditing?(n.title.innerHTML=n.textField.value,n.element.classList.toggle("editing"),n.buttonEdit.innerHTML="Изменить",n.isEditing=!1):(n.isEditing=!0,n.textField.value=n.title.innerHTML,n.element.classList.toggle("editing"),n.buttonEdit.innerHTML="Сохранить")}),l(this,"remove",function(){document.querySelector(".todo-list").removeChild(n.element)}),this.title=t,this.element=null,this.isEditing=!1,this.init()}var t,n,r;return t=e,(n=[{key:"destroyEvents",value:function(){this.checkbox.onchange=null,this.buttonEdit.onclick=null,this.buttonDelete.onclick=null}}])&&o(t.prototype,n),r&&o(t,r),e}();function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new function e(t,n,i){var o,l,r,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){u.todoForm.onSubmit=u.todoList.add.bind(u.todoList)},(l="init")in(o=this)?Object.defineProperty(o,l,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[l]=r,this.element=t,this.todoList=n,this.todoForm=i,this.init()}(document.querySelector(".app"),new function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"init",function(){n.addInput=document.querySelector(".add-input")}),u(this,"add",function(){n.todoItem=new r(n.addInput.value).element,n.element.appendChild(n.todoItem),n.addInput.value=null}),this.element=t,this.todoItem=null,this.init()}(document.querySelector(".todo-list")),new function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"init",function(){n.element.querySelector(".add-button").addEventListener("click",n.handleClickButtonAdd)}),c(this,"handleClickButtonAdd",function(e){e.preventDefault(),n.element.querySelector(".add-input").value?n.onSubmit():alert("Необходимо ввести название задачи")}),this.element=t,this.onSubmit=function(){},this.init()}(document.querySelector(".todo-form")))}]);