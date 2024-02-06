import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o,c as p,a as e,b as t,d as n,w as a,e as r}from"./app-un-IDmnc.js";const d={},c=e("h1",{id:"theme-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-api"},[e("span",null,"Theme API")])],-1),u=r(`<h2 id="basic-options" tabindex="-1"><a class="header-anchor" href="#basic-options"><span>Basic Options</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Name of the theme.</p><p>It should follow the naming convention, and ensure consistency with the package name when publishing to NPM:</p><ul><li>Non-scoped: <code>vuepress-theme-foo</code></li><li>Scoped: <code>@org/vuepress-theme-foo</code></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li><p>Details:</p><p>A theme should never be used multiple times, so this option is not supported in theme API.</p></li></ul><h2 id="theme-specific-options" tabindex="-1"><a class="header-anchor" href="#theme-specific-options"><span>Theme Specific Options</span></a></h2><h3 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>extends</span></a></h3><ul><li><p>Type: <code>Theme</code></p></li><li><p>Details:</p><p>The theme to inherit.</p><p>All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme directly. Theme specific options will override according to following rules:</p><ul><li><a href="#plugins">plugins</a>: When a same plugin is used in both child and parent theme, if the plugin does not support to be used multiple times, only the one used in the child theme will take effect.</li><li><a href="#templatebuild">templateBuild</a> / <a href="#templatedev">templateDev</a>: Child theme templates will override parent theme templates.</li></ul><p>Multi-level inheritance is supported, i.e. theme B could be extended from theme A, and then theme C could be extended from theme B. In other words, a theme could have a parent theme, a grandparent theme and so on.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/utils&#39;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// inherit the default theme</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>plugins</span></a></h3>`,10),h=e("li",null,[e("p",null,[t("Type: "),e("code",null,"(Plugin | Plugin[])[]")])],-1),m=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use in the theme.")],-1),f=e("p",null,"Also see:",-1),g=e("h3",{id:"templatebuild",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuild"},[e("span",null,"templateBuild")])],-1),v=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1),_=e("p",null,"Details:",-1),b=e("p",null,"Specify the path of the HTML template for build.",-1),k=e("p",null,"Also see:",-1),y=e("h3",{id:"templatebuildrenderer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatebuildrenderer"},[e("span",null,"templateBuildRenderer")])],-1),T=e("li",null,[e("p",null,[t("Type: "),e("code",null,"TemplateRenderer")])],-1),w=e("p",null,"Details:",-1),x=e("p",null,"Specify the HTML template renderer to be used for build.",-1),A=e("p",null,"Also see:",-1),P=e("h3",{id:"templatedev",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#templatedev"},[e("span",null,"templateDev")])],-1),D=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1),B=e("p",null,"Details:",-1),I=e("p",null,"Specify the HTML template for dev.",-1),N=e("p",null,"Also see:",-1);function S(C,R){const l=i("RouteLink");return o(),p("div",null,[c,e("p",null,[t("A VuePress theme also works as a plugin, so Theme API can accept all the options of "),n(l,{to:"/reference/plugin-api.html"},{default:a(()=>[t("Plugin API")]),_:1}),t(" with following differences.")]),u,e("ul",null,[h,m,e("li",null,[f,e("ul",null,[e("li",null,[n(l,{to:"/reference/config.html#plugins"},{default:a(()=>[t("Config > plugins")]),_:1})])])])]),g,e("ul",null,[v,e("li",null,[_,b,e("p",null,[t("It would override the default value of "),n(l,{to:"/reference/config.html#templatebuild"},{default:a(()=>[t("templateBuild")]),_:1}),t(", and could be overridden by user config.")])]),e("li",null,[k,e("ul",null,[e("li",null,[n(l,{to:"/reference/config.html#templatebuild"},{default:a(()=>[t("Config > templateBuild")]),_:1})])])])]),y,e("ul",null,[T,e("li",null,[w,x,e("p",null,[t("It would override the default value of "),n(l,{to:"/reference/config.html#templatebuildrenderer"},{default:a(()=>[t("templateBuildRenderer")]),_:1}),t(", and could be overridden by user config.")])]),e("li",null,[A,e("ul",null,[e("li",null,[n(l,{to:"/reference/config.html#templatebuildrenderer"},{default:a(()=>[t("Config > templateBuildRenderer")]),_:1})])])])]),P,e("ul",null,[D,e("li",null,[B,I,e("p",null,[t("It would override the default value of "),n(l,{to:"/reference/config.html#templatedev"},{default:a(()=>[t("templateDev")]),_:1}),t(", but could be overridden by user config.")])]),e("li",null,[N,e("ul",null,[e("li",null,[n(l,{to:"/reference/config.html#templatedev"},{default:a(()=>[t("Config > templateDev")]),_:1})])])])])])}const O=s(d,[["render",S],["__file","theme-api.html.vue"]]),L=JSON.parse('{"path":"/reference/theme-api.html","title":"Theme API","lang":"en-US","frontmatter":{"icon":"fa6-solid:palette","description":"Theme API A VuePress theme also works as a plugin, so Theme API can accept all the options of with following differences. Basic Options name Type: string Details: Name of the th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/theme-api.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/theme-api.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Theme API"}],["meta",{"property":"og:description","content":"Theme API A VuePress theme also works as a plugin, so Theme API can accept all the options of with following differences. Basic Options name Type: string Details: Name of the th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-06T14:32:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T14:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Theme API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T14:32:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic Options","slug":"basic-options","link":"#basic-options","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"multiple","slug":"multiple","link":"#multiple","children":[]}]},{"level":2,"title":"Theme Specific Options","slug":"theme-specific-options","link":"#theme-specific-options","children":[{"level":3,"title":"extends","slug":"extends","link":"#extends","children":[]},{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]},{"level":3,"title":"templateBuild","slug":"templatebuild","link":"#templatebuild","children":[]},{"level":3,"title":"templateBuildRenderer","slug":"templatebuildrenderer","link":"#templatebuildrenderer","children":[]},{"level":3,"title":"templateDev","slug":"templatedev","link":"#templatedev","children":[]}]}],"git":{"createdTime":1701614677000,"updatedTime":1707229978000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"reference/theme-api.md","localizedDate":"December 3, 2023","autoDesc":true}');export{O as comp,L as data};
