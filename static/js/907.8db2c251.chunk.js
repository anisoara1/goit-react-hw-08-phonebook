"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[907],{9907:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(2791),r=n(9434),s=n(3433),c=n(9439),o="ContactForm_form__dhl+T",i="ContactForm_formLabel__TSwxK",l="ContactForm_formName__9bHzl",u="ContactForm_formNumber__UMrmC",m="ContactForm_formBtn__qZGY3",d=n(3634),f=function(e){return e.contacts.items},h=function(e){return e.contacts.isLoading},_=function(e){return e.filter.filter},p=n(184),b=function(){var e=(0,a.useState)(""),t=(0,c.Z)(e,2),n=t[0],h=t[1],_=(0,a.useState)(""),b=(0,c.Z)(_,2),v=b[0],x=b[1],j=(0,r.I0)(),N=(0,r.v9)(f);return(0,p.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;-1!==(0,s.Z)(N).findIndex((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):j((0,d.uK)({name:n,number:v})),t.reset()},children:[(0,p.jsxs)("label",{className:i,children:["Name",(0,p.jsx)("input",{className:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:n,onChange:function(e){var t=e.target.value;h(t)}})]}),(0,p.jsxs)("label",{className:i,children:["Number",(0,p.jsx)("input",{className:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:v,onChange:function(e){var t=e.target.value;x(t)}})]}),(0,p.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})},v={contactListItemBtn:"ContactList_contactListItemBtn__TXYnT"},x=function(){var e=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}((0,r.v9)(f),(0,r.v9)(_)),t=(0,r.I0)();return(0,p.jsx)("div",{className:v.wraperContactList,children:(0,p.jsx)("ul",{className:v.contactList,children:e.map((function(e,n){return(0,p.jsxs)("li",{className:v.contactListItem,children:[e.name,": ",e.number,(0,p.jsx)("button",{type:"button",className:v.contactListItemBtn,onClick:function(){return function(e){return t((0,d.nE)(e))}(e.id)},children:"Delete"})]},n)}))})})},j="Filter_filterName__Y2kKA",N="Filter_filterLabel__+pnW-",C=n(4808),g=function(){var e=(0,r.I0)(),t=(0,r.v9)(_);return(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:N,children:"Find contacts by Name "}),(0,p.jsx)("input",{className:j,type:"text",name:"filter",placeholder:"Enter filter",value:t,onChange:function(t){e((0,C.Tv)(t.target.value))}})]})};function L(){var e=(0,r.I0)(),t=(0,r.v9)(h);return(0,a.useEffect)((function(){e((0,d.yF)())}),[e]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:(0,p.jsx)("title",{children:"Phonebook"})}),(0,p.jsx)(b,{}),(0,p.jsx)("div",{children:t&&"Request in progress..."}),(0,p.jsx)(g,{}),(0,p.jsx)(x,{})]})}}}]);
//# sourceMappingURL=907.8db2c251.chunk.js.map