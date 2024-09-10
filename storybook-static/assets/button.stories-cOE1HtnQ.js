import{t as x,D as v,a as T,T as f}from"./twig-KBwagFgK.js";import{R as b}from"./index-RYns6xqu.js";T(f);f.cache(!1);const n=o=>b.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),s=(o={})=>{const a=x.twig({id:"/Users/tharpol/code/vite-storybook-2/src/stories/components/twig-button/button.twig",data:[{type:"raw",value:'<button class="',position:{start:0,end:15}},{type:"output",position:{start:15,end:62},stack:[{type:"Twig.expression.type.variable",value:"modifier_class",match:["modifier_class"],position:{start:15,end:62}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:15,end:62},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:15,end:62}},{type:"Twig.expression.type.string",value:"button--primary",position:{start:15,end:62}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:15,end:62},expression:!1}]}]},{type:"raw",value:'">',position:{start:62,end:64}},{type:"output",position:{start:64,end:95},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:64,end:95}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:64,end:95},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:64,end:95}},{type:"Twig.expression.type.string",value:"Click me!",position:{start:64,end:95}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:64,end:95},expression:!1}]}]},{type:"raw",value:"</button>",position:{start:95,end:95}}],precompiled:!0});a.options.allowInlineIncludes=!0;try{return n(a.render({attributes:new v,...o}))}catch(w){return n("An error occurred whilst rendering /Users/tharpol/code/vite-storybook-2/src/stories/components/twig-button/button.twig: "+w.toString())}},B={title:"Example/Button2",tags:["autodocs"],argTypes:{title:{control:{type:"text"}},modifier:{control:{type:"select"},options:["primary","secondary","tertiary"]}},component:s},t={args:{title:"Click me"}},e={args:{title:"Click mek",modifier:"secondary"}},r={name:"Button group",render:()=>`
    ${s({title:"Button 1",modifier:"primary"})} 
    ${s({title:"Button 2",modifier:"secondary"})}
  `};var i,p,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Click me'
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,l,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: "Click mek",
    modifier: "secondary"
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,y,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Button group',
  render: () => \`
    \${Button({
    title: 'Button 1',
    modifier: 'primary'
  })} 
    \${Button({
    title: 'Button 2',
    modifier: 'secondary'
  })}
  \`
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const S=["Default","Primary","ButtonStrip"];export{r as ButtonStrip,t as Default,e as Primary,S as __namedExportsOrder,B as default};
