import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as p,c as u,d as l,a as e,w as a,b as n,e as i}from"./app-Vtomtg5h.js";const c={},h=e("h1",{id:"config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#config","aria-hidden":"true"},"#"),n(" Config")],-1),f=e("h2",{id:"site-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#site-config","aria-hidden":"true"},"#"),n(" Site Config")],-1),m=e("h3",{id:"base",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#base","aria-hidden":"true"},"#"),n(" base")],-1),g=i('<li><p>Type: <code>string</code></p></li><li><p>Default: <code>/</code></p></li><li><p>Details:</p><p>The base URL the site will be deployed at.</p><p>You will need to set this if you plan to deploy your site under a sub path. It should always start and end with a slash. For example, if you plan to deploy your site to GitHub pages at <code>https://foo.github.io/bar/</code>, then you should set <code>base</code> to <code>&quot;/bar/&quot;</code>.</p><p>The <code>base</code> is automatically prepended to the URLs that start with <code>/</code> in other options, so you only need to specify it once. (Except for attrs of <a href="#head">head</a>)</p><p>Notice that <code>base</code> should be an absolute URL pathname starting and ending with <code>/</code> .</p></li>',3),_=e("p",null,"Also see:",-1),k=e("h3",{id:"lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),n(" lang")],-1),b=i("<li><p>Type: <code>string</code></p></li><li><p>Default: <code>en-US</code></p></li><li><p>Details:</p><p>Language for the site.</p><p>This will be the <code>lang</code> attribute of the <code>&lt;html&gt;</code> tag in the rendered HTML.</p><p>This can be specified in different locales.</p></li>",3),w=e("p",null,"Also see:",-1),v=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),y=i('<h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;&#39;</code></p></li><li><p>Details:</p><p>Title for the site.</p><p>This will be the suffix for all page titles, and displayed in the navbar in the default theme.</p><p>This can be specified in different locales.</p></li><li><p>Also see:</p><ul><li><a href="#locales">Config &gt; locales</a></li></ul></li></ul><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3>',3),x=i("<li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;&#39;</code></p></li><li><p>Details:</p><p>Description for the site.</p><p>This will be the <code>content</code> attribute of <code>&lt;meta name=&quot;description&quot; /&gt;</code> tag in the rendered HTML, which will be overrode by the <code>description</code> field of page frontmatter.</p><p>This can be specified in different locales.</p></li>",3),D=e("p",null,"Also see:",-1),T=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),P=i(`<h3 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h3><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Default: <code>[]</code></p></li><li><p>Details:</p><p>Extra tags to inject into the <code>&lt;head&gt;</code> tag in the rendered HTML.</p><p>You can specify each tag in the form of <code>[tagName, { attrName: attrValue }, innerHTML?]</code>.</p><p>This can be specified in different locales.</p><p>Notice that if the <code>attrValue</code> is a pathname, it will be kept as-is without prepending <a href="#base">base</a> automatically, so remember to prepend it manually if needed.</p></li><li><p>Example:</p><p>To add a custom favicon:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rendered as：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/images/logo.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),A=e("li",null,[e("a",{href:"#locales"},"Config > locales")],-1),S=e("h3",{id:"locales",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#locales","aria-hidden":"true"},"#"),n(" locales")],-1),C=i('<li><p>Type: <code>{ [path: string]: Partial&lt;SiteLocaleData&gt; }</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>Specify locales for i18n support.</p><p>Acceptable fields:</p><ul><li><a href="#lang">lang</a></li><li><a href="#title">title</a></li><li><a href="#description">description</a></li><li><a href="#head">head</a></li></ul></li>',3),L=e("p",null,"Also see:",-1),O=e("h2",{id:"theme-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme-config","aria-hidden":"true"},"#"),n(" Theme Config")],-1),B=e("h3",{id:"theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),n(" theme")],-1),E=e("li",null,[e("p",null,[n("Type: "),e("code",null,"Theme")])],-1),M=e("li",null,[e("p",null,"Details:"),e("p",null,"Set the theme of your site."),e("p",null,"If this option is not set, the default theme will be used.")],-1),G=e("p",null,"Also see:",-1),I=e("h2",{id:"bundler-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundler-config","aria-hidden":"true"},"#"),n(" Bundler Config")],-1),q=e("h3",{id:"bundler",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundler","aria-hidden":"true"},"#"),n(" bundler")],-1),N=i("<li><p>Type: <code>Bundler</code></p></li><li><p>Details:</p><p>Set the bundler of your site.</p><p>If this option is not set, the default bundler will be used:</p><ul><li>With <code>vuepress</code> or <code>vuepress-vite</code>, the default bundler is vite.</li><li>With <code>vuepress-webpack</code>, the default bundler is webpack.</li></ul></li>",2),H=e("p",null,"Also see:",-1),R=i('<h2 id="common-config" tabindex="-1"><a class="header-anchor" href="#common-config" aria-hidden="true">#</a> Common Config</h2><h3 id="dest" tabindex="-1"><a class="header-anchor" href="#dest" aria-hidden="true">#</a> dest</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/dist`</code></p></li><li><p>Details:</p><p>Specify the output directory for <code>vuepress build</code> command.</p></li></ul><h3 id="temp" tabindex="-1"><a class="header-anchor" href="#temp" aria-hidden="true">#</a> temp</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/.temp`</code></p></li><li><p>Details:</p><p>Specify the directory for temporary files.</p></li></ul><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Since VuePress will load temp files during dev and build, the temp directory should be inside project root to resolve dependencies correctly.</p></div><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>`${sourceDir}/.vuepress/.cache`</code></p></li><li><p>Details:</p><p>Specify the directory for cache files.</p></li></ul><h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3>',9),V=e("li",null,[e("p",null,[n("Type: "),e("code",null,"string")])],-1),j=e("li",null,[e("p",null,[n("Default: "),e("code",null,"`${sourceDir}/.vuepress/public`")])],-1),F=e("li",null,[e("p",null,"Details:"),e("p",null,"Specify the directory for public files.")],-1),W=e("p",null,"Also see:",-1),Y=e("h3",{id:"debug",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debug","aria-hidden":"true"},"#"),n(" debug")],-1),U=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),$=e("li",null,[e("p",null,[n("Default: "),e("code",null,"false")])],-1),z=e("p",null,"Details:",-1),J=e("p",null,"Enable debug mode or not.",-1),K={href:"https://github.com/visionmedia/debug",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"DEBUG=vuepress*",-1),X=i('<h3 id="pagepatterns" tabindex="-1"><a class="header-anchor" href="#pagepatterns" aria-hidden="true">#</a> pagePatterns</h3><ul><li><p>Type: <code>string[]</code></p></li><li><p>Default: <code>[&#39;**/*.md&#39;, &#39;!.vuepress&#39;, &#39;!node_modules&#39;]</code></p></li><li><p>Details:</p><p>Specify the patterns of files you want to be resolved as pages. The patterns are relative to the source directory.</p></li></ul><h3 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h3>',3),Z=i("<li><p>Type: <code>string | null</code></p></li><li><p>Default: <code>null</code></p></li><li><p>Details:</p><p>Specify the pattern to generate permalink.</p><p>This will be overrode by the <code>permalinkPattern</code> field of page frontmatter.</p></li>",3),ee=e("p",null,"Also see:",-1),ne=i('<h2 id="dev-config" tabindex="-1"><a class="header-anchor" href="#dev-config" aria-hidden="true">#</a> Dev Config</h2><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> host</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;0.0.0.0&#39;</code></p></li><li><p>Details:</p><p>Specify the host to use for the dev server.</p></li></ul><h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> port</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>8080</code></p></li><li><p>Details:</p><p>Specify the port to use for the dev server.</p></li></ul><h3 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open</h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Whether to open the browser after dev-server had been started.</p></li></ul><h3 id="templatedev" tabindex="-1"><a class="header-anchor" href="#templatedev" aria-hidden="true">#</a> templateDev</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;@vuepress/client/templates/dev.html&#39;</code></p></li><li><p>Details:</p><p>Specify the path of the HTML template to be used for dev.</p></li></ul><h2 id="build-config" tabindex="-1"><a class="header-anchor" href="#build-config" aria-hidden="true">#</a> Build Config</h2><h3 id="shouldpreload" tabindex="-1"><a class="header-anchor" href="#shouldpreload" aria-hidden="true">#</a> shouldPreload</h3><ul><li><p>Type: <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>A function to control what files should have <code>&lt;link rel=&quot;preload&quot;&gt;</code> resource hints generated. Set to <code>true</code> or <code>false</code> to enable or disable totally.</p><p>By default, only those files that are required by current page will be preloaded. So you can keep it <code>true</code> in most cases.</p></li></ul><h3 id="shouldprefetch" tabindex="-1"><a class="header-anchor" href="#shouldprefetch" aria-hidden="true">#</a> shouldPrefetch</h3><ul><li><p>Type: <code>((file: string, type: string) =&gt; boolean)) | boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>A function to control what files should have <code>&lt;link rel=&quot;prefetch&quot;&gt;</code> resource hints generated. Set to <code>true</code> or <code>false</code> to enable or disable for all files.</p><p>If you set it to <code>true</code>, all files that required by other pages will be prefetched. This is good for small sites, which will speed up the navigation, but it might not be a good idea if you have lots of pages in your site.</p></li></ul><h3 id="templatebuild" tabindex="-1"><a class="header-anchor" href="#templatebuild" aria-hidden="true">#</a> templateBuild</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;@vuepress/client/templates/build.html&#39;</code></p></li><li><p>Details:</p><p>Specify the path of the HTML template to be used for build.</p></li></ul><h3 id="templatebuildrenderer" tabindex="-1"><a class="header-anchor" href="#templatebuildrenderer" aria-hidden="true">#</a> templateBuildRenderer</h3><ul><li><p>Type: <code>TemplateRenderer</code></p></li><li><p>Default: <code>templateRenderer</code></p></li><li><p>Details:</p><p>Specify the HTML template renderer to be used for build.</p></li></ul><h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config" aria-hidden="true">#</a> Markdown Config</h2><h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> markdown</h3>',20),le=e("li",null,[e("p",null,[n("Type: "),e("code",null,"MarkdownOptions")])],-1),te=e("li",null,[e("p",null,[n("Default: "),e("code",null,"{}")])],-1),ae=e("p",null,"Details:",-1),ie=e("p",null,"Configure VuePress built-in Markdown syntax extensions.",-1),oe={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},se=e("p",null,"Also see:",-1),de={href:"https://github.com/markdown-it/markdown-it#init-with-presets-and-options",target:"_blank",rel:"noopener noreferrer"},re=i(`<h3 id="markdown-anchor" tabindex="-1"><a class="header-anchor" href="#markdown-anchor" aria-hidden="true">#</a> markdown.anchor</h3><ul><li><p>Type: <code>AnchorPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  permalink<span class="token operator">:</span> anchorPlugin<span class="token punctuation">.</span>permalink<span class="token punctuation">.</span><span class="token function">ariaHidden</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;header-anchor&#39;</span><span class="token punctuation">,</span>
    <span class="token builtin">symbol</span><span class="token operator">:</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">,</span>
    space<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    placement<span class="token operator">:</span> <span class="token string">&#39;before&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),pe=e("p",null,"Details:",-1),ue={href:"https://github.com/valeriangalliat/markdown-it-anchor",target:"_blank",rel:"noopener noreferrer"},ce=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),he=e("p",null,"Also see:",-1),fe=i('<h3 id="markdown-assets" tabindex="-1"><a class="header-anchor" href="#markdown-assets" aria-hidden="true">#</a> markdown.assets</h3><ul><li><p>Type: <code>AssetsPluginOptions | false</code></p></li><li><p>Details:</p><p>Options for VuePress built-in markdown-it assets plugin.</p><p>Set to <code>false</code> to disable this plugin.</p></li></ul><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-code" tabindex="-1"><a class="header-anchor" href="#markdown-code" aria-hidden="true">#</a> markdown.code</h3>',4),me=e("li",null,[e("p",null,[n("Type: "),e("code",null,"CodePluginOptions | false")])],-1),ge=e("li",null,[e("p",null,"Details:"),e("p",null,"Options for VuePress built-in markdown-it code plugin."),e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")])],-1),_e=e("p",null,"Also see:",-1),ke=e("h4",{id:"markdown-code-highlightlines",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-highlightlines","aria-hidden":"true"},"#"),n(" markdown.code.highlightLines")],-1),be=e("li",null,[e("p",null,[n("Type: "),e("code",null,"boolean")])],-1),we=e("li",null,[e("p",null,[n("Default: "),e("code",null,"true")])],-1),ve=e("li",null,[e("p",null,"Details:"),e("p",null,"Enable code line highlighting or not.")],-1),ye=e("p",null,"Also see:",-1),xe=e("h4",{id:"markdown-code-linenumbers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-linenumbers","aria-hidden":"true"},"#"),n(" markdown.code.lineNumbers")],-1),De=i("<li><p>Type: <code>boolean | number</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Configure code line numbers.</p><ul><li>A <code>boolean</code> value is to enable line numbers or not.</li><li>A <code>number</code> value is the minimum number of lines to enable line numbers. For example, if you set it to <code>4</code>, line numbers will only be enabled when your code block has at least 4 lines of code.</li></ul></li>",3),Te=e("p",null,"Also see:",-1),Pe=i('<h4 id="markdown-code-prewrapper" tabindex="-1"><a class="header-anchor" href="#markdown-code-prewrapper" aria-hidden="true">#</a> markdown.code.preWrapper</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Enable the extra wrapper of the <code>&lt;pre&gt;</code> tag or not.</p><p>The wrapper is required by the <code>highlightLines</code> and <code>lineNumbers</code>. That means, if you disable <code>preWrapper</code>, the line highlighting and line numbers will also be disabled.</p></li></ul>',2),Ae={class:"hint-container tip"},Se=e("p",{class:"hint-container-title"},"Tips",-1),Ce={href:"https://prismjs.com/plugins/line-highlight/",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://prismjs.com/plugins/line-numbers/",target:"_blank",rel:"noopener noreferrer"},Oe=e("h4",{id:"markdown-code-vpre-block",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-vpre-block","aria-hidden":"true"},"#"),n(" markdown.code.vPre.block")],-1),Be=i("<li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Add <code>v-pre</code> directive to <code>&lt;pre&gt;</code> tag of code block or not.</p></li>",3),Ee=e("p",null,"Also see:",-1),Me=e("h4",{id:"markdown-code-vpre-inline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-code-vpre-inline","aria-hidden":"true"},"#"),n(" markdown.code.vPre.inline")],-1),Ge=i("<li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>Add <code>v-pre</code> directive to <code>&lt;code&gt;</code> tag of inline code or not.</p></li>",3),Ie=e("p",null,"Also see:",-1),qe=e("h3",{id:"markdown-component",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-component","aria-hidden":"true"},"#"),n(" markdown.component")],-1),Ne=e("li",null,[e("p",null,[n("Type: "),e("code",null,"undefined | false")])],-1),He=e("p",null,"Details:",-1),Re={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component",target:"_blank",rel:"noopener noreferrer"},Ve=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),je=e("div",{class:"hint-container caution"},[e("p",{class:"hint-container-title"},"Caution"),e("p",null,"You should not configure it unless you understand what it is for.")],-1),Fe=e("h3",{id:"markdown-emoji",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-emoji","aria-hidden":"true"},"#"),n(" markdown.emoji")],-1),We=e("li",null,[e("p",null,[n("Type: "),e("code",null,"EmojiPluginOptions | false")])],-1),Ye=e("p",null,"Details:",-1),Ue={href:"https://github.com/markdown-it/markdown-it-emoji",target:"_blank",rel:"noopener noreferrer"},$e=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),ze=e("p",null,"Also see:",-1),Je=e("h3",{id:"markdown-frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-frontmatter","aria-hidden":"true"},"#"),n(" markdown.frontmatter")],-1),Ke=e("li",null,[e("p",null,[n("Type: "),e("code",null,"FrontmatterPluginOptions | false")])],-1),Qe=e("p",null,"Details:",-1),Xe={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter",target:"_blank",rel:"noopener noreferrer"},Ze=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),en=e("p",null,"Also see:",-1),nn=i(`<div class="hint-container caution"><p class="hint-container-title">Caution</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-headers" tabindex="-1"><a class="header-anchor" href="#markdown-headers" aria-hidden="true">#</a> markdown.headers</h3><ul><li><p>Type: <code>HeadersPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),ln=e("p",null,"Details:",-1),tn={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-headers",target:"_blank",rel:"noopener noreferrer"},an=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),on=e("p",null,"Also see:",-1),sn=e("h3",{id:"markdown-importcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-importcode","aria-hidden":"true"},"#"),n(" markdown.importCode")],-1),dn=e("li",null,[e("p",null,[n("Type: "),e("code",null,"ImportCodePluginOptions | false")])],-1),rn=e("li",null,[e("p",null,"Details:"),e("p",null,"Options for VuePress built-in markdown-it import-code plugin."),e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")])],-1),pn=e("p",null,"Also see:",-1),un=i('<h4 id="markdown-importcode-handleimportpath" tabindex="-1"><a class="header-anchor" href="#markdown-importcode-handleimportpath" aria-hidden="true">#</a> markdown.importCode.handleImportPath</h4><ul><li><p>Type: <code>(str: string) =&gt; string</code></p></li><li><p>Default: <code>(str) =&gt; str</code></p></li><li><p>Details:</p><p>A function to handle the import path of the import code syntax.</p></li></ul><h3 id="markdown-links" tabindex="-1"><a class="header-anchor" href="#markdown-links" aria-hidden="true">#</a> markdown.links</h3>',3),cn=i("<li><p>Type: <code>LinksPluginOptions | false</code></p></li><li><p>Details:</p><p>Options for VuePress built-in markdown-it links plugin.</p><p>It will convert internal links to <code>&lt;RouterLink&gt;</code>, and add extra attributes and icon to external links.</p><p>Set to <code>false</code> to disable this plugin.</p></li>",2),hn=e("p",null,"Also see:",-1),fn=i('<h4 id="markdown-links-internaltag" tabindex="-1"><a class="header-anchor" href="#markdown-links-internaltag" aria-hidden="true">#</a> markdown.links.internalTag</h4><ul><li><p>Type: <code>&#39;a&#39; | &#39;RouterLink&#39;</code></p></li><li><p>Default: <code>&#39;RouterLink&#39;</code></p></li><li><p>Details:</p><p>Tag for internal links.</p><p>By default, this plugin will transform internal links to <code>&lt;RouterLink&gt;</code>. You can set this option to <code>&#39;a&#39;</code> to disable this feature.</p></li></ul><h4 id="markdown-links-externalattrs" tabindex="-1"><a class="header-anchor" href="#markdown-links-externalattrs" aria-hidden="true">#</a> markdown.links.externalAttrs</h4><ul><li><p>Type: <code>Record&lt;string, string&gt;</code></p></li><li><p>Default: <code>{ target: &#39;_blank&#39;, rel: &#39;noopener noreferrer&#39; }</code></p></li><li><p>Details:</p><p>Additional attributes for external links.</p></li></ul><h3 id="markdown-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-sfc" aria-hidden="true">#</a> markdown.sfc</h3>',5),mn=e("li",null,[e("p",null,[n("Type: "),e("code",null,"SfcPluginOptions | false")])],-1),gn=e("p",null,"Details:",-1),_n={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-sfc",target:"_blank",rel:"noopener noreferrer"},kn=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),bn=e("p",null,"Also see:",-1),wn=e("h3",{id:"markdown-slugify",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-slugify","aria-hidden":"true"},"#"),n(" markdown.slugify")],-1),vn=e("ul",null,[e("li",null,[e("p",null,[n("Type: "),e("code",null,"(str: string) => string")])]),e("li",null,[e("p",null,"Details:"),e("p",null,"The default slugify function.")])],-1),yn=e("h3",{id:"markdown-title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown-title","aria-hidden":"true"},"#"),n(" markdown.title")],-1),xn=e("li",null,[e("p",null,[n("Type: "),e("code",null,"undefined | false")])],-1),Dn=e("p",null,"Details:",-1),Tn={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-title",target:"_blank",rel:"noopener noreferrer"},Pn=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),An=i(`<div class="hint-container caution"><p class="hint-container-title">Caution</p><p>You should not configure it unless you understand what it is for.</p></div><h3 id="markdown-toc" tabindex="-1"><a class="header-anchor" href="#markdown-toc" aria-hidden="true">#</a> markdown.toc</h3><ul><li><p>Type: <code>TocPluginOptions | false</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Sn=e("p",null,"Details:",-1),Cn={href:"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc",target:"_blank",rel:"noopener noreferrer"},Ln=e("p",null,[n("Set to "),e("code",null,"false"),n(" to disable this plugin.")],-1),On=e("p",null,"Also see:",-1),Bn=e("h2",{id:"plugin-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-config","aria-hidden":"true"},"#"),n(" Plugin Config")],-1),En=e("h3",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),n(" plugins")],-1),Mn=e("li",null,[e("p",null,[n("Type: "),e("code",null,"(Plugin | Plugin[])[]")])],-1),Gn=e("li",null,[e("p",null,"Details:"),e("p",null,"Plugins to use."),e("p",null,"This option accepts an array, each item of which could be a plugin or an array of plugins.")],-1),In=e("p",null,"Also see:",-1),qn=e("h2",{id:"plugin-api",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-api","aria-hidden":"true"},"#"),n(" Plugin API")],-1),Nn=e("p",null,[n("User config file also works as a VuePress plugin, so all of the Plugin APIs are available except the "),e("code",null,"name"),n(" and "),e("code",null,"multiple"),n(" options.")],-1);function Hn(Rn,Vn){const d=s("NpmBadge"),t=s("RouterLink"),o=s("ExternalLinkIcon");return p(),u("div",null,[h,l(d,{package:"@vuepress/cli"}),l(d,{package:"@vuepress/core"}),f,m,e("ul",null,[g,e("li",null,[_,e("ul",null,[e("li",null,[l(t,{to:"/guide/assets.html#base-helper"},{default:a(()=>[n("Guide > Assets > Base Helper")]),_:1})]),e("li",null,[l(t,{to:"/guide/deployment.html"},{default:a(()=>[n("Guide > Deployment")]),_:1})])])])]),k,e("ul",null,[b,e("li",null,[w,e("ul",null,[v,e("li",null,[l(t,{to:"/reference/frontmatter.html#lang"},{default:a(()=>[n("Frontmatter > lang")]),_:1})])])])]),y,e("ul",null,[x,e("li",null,[D,e("ul",null,[T,e("li",null,[l(t,{to:"/reference/frontmatter.html#description"},{default:a(()=>[n("Frontmatter > description")]),_:1})])])])]),P,e("ul",null,[e("li",null,[n("Also see: "),e("ul",null,[A,e("li",null,[l(t,{to:"/reference/frontmatter.html#head"},{default:a(()=>[n("Frontmatter > head")]),_:1})])])])]),S,e("ul",null,[C,e("li",null,[L,e("ul",null,[e("li",null,[l(t,{to:"/guide/i18n.html"},{default:a(()=>[n("Guide > I18n")]),_:1})])])])]),O,B,e("ul",null,[E,M,e("li",null,[G,e("ul",null,[e("li",null,[l(t,{to:"/guide/theme.html"},{default:a(()=>[n("Guide > Theme")]),_:1})]),e("li",null,[l(t,{to:"/reference/default-theme/config.html"},{default:a(()=>[n("Default Theme > Config")]),_:1})])])])]),I,q,e("ul",null,[N,e("li",null,[H,e("ul",null,[e("li",null,[l(t,{to:"/guide/bundler.html"},{default:a(()=>[n("Guide > Bundler")]),_:1})]),e("li",null,[l(t,{to:"/reference/bundler/vite.html"},{default:a(()=>[n("Bundlers > Vite")]),_:1})]),e("li",null,[l(t,{to:"/reference/bundler/webpack.html"},{default:a(()=>[n("Bundlers > Webpack")]),_:1})])])])]),R,e("ul",null,[V,j,F,e("li",null,[W,e("ul",null,[e("li",null,[l(t,{to:"/guide/assets.html#public-files"},{default:a(()=>[n("Guide > Assets > Public Files")]),_:1})])])])]),Y,e("ul",null,[U,$,e("li",null,[z,J,e("p",null,[n("This would be helpful for developers. Also, we are using "),e("a",K,[n("debug"),l(o)]),n(" package for debug logging, which can be enabled via "),Q,n(" environment variable.")])])]),X,e("ul",null,[Z,e("li",null,[ee,e("ul",null,[e("li",null,[l(t,{to:"/reference/frontmatter.html#permalinkpattern"},{default:a(()=>[n("Frontmatter > permalinkPattern")]),_:1})])])])]),ne,e("ul",null,[le,te,e("li",null,[ae,ie,e("p",null,[n("It accepts all options of "),e("a",oe,[n("markdown-it"),l(o)]),n(", and the following additional options.")])]),e("li",null,[se,e("ul",null,[e("li",null,[e("a",de,[n("markdown-it > Init with presets and options"),l(o)])]),e("li",null,[l(t,{to:"/guide/markdown.html#syntax-extensions"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions")]),_:1})])])])]),re,e("ul",null,[e("li",null,[pe,e("p",null,[n("Options for "),e("a",ue,[n("markdown-it-anchor"),l(o)]),n(".")]),ce]),e("li",null,[he,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#header-anchors"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Header Anchors")]),_:1})])])])]),fe,e("ul",null,[me,ge,e("li",null,[_e,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#code-blocks"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Code Blocks")]),_:1})])])])]),ke,e("ul",null,[be,we,ve,e("li",null,[ye,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#line-highlighting"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Code Blocks > Line Highlighting")]),_:1})])])])]),xe,e("ul",null,[De,e("li",null,[Te,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#line-numbers"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Code Blocks > Line Numbers")]),_:1})])])])]),Pe,e("div",Ae,[Se,e("p",null,[n("You can disable it if you want to implement them in client side. For example, "),e("a",Ce,[n("Prismjs Line Highlight"),l(o)]),n(" or "),e("a",Le,[n("Prismjs Line Numbers"),l(o)]),n(".")])]),Oe,e("ul",null,[Be,e("li",null,[Ee,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#wrap-with-v-pre"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Code Blocks > Wrap with v-pre")]),_:1})])])])]),Me,e("ul",null,[Ge,e("li",null,[Ie,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#wrap-with-v-pre"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Code Blocks > Wrap with v-pre")]),_:1})])])])]),qe,e("ul",null,[Ne,e("li",null,[He,e("p",null,[n("Options for "),e("a",Re,[n("@mdit-vue/plugin-component"),l(o)]),n(".")]),Ve])]),je,Fe,e("ul",null,[We,e("li",null,[Ye,e("p",null,[n("Options for "),e("a",Ue,[n("markdown-it-emoji"),l(o)]),n(".")]),$e]),e("li",null,[ze,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#emoji"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Emoji")]),_:1})])])])]),Je,e("ul",null,[Ke,e("li",null,[Qe,e("p",null,[n("Options for "),e("a",Xe,[n("@mdit-vue/plugin-frontmatter"),l(o)]),n(".")]),Ze]),e("li",null,[en,e("ul",null,[e("li",null,[l(t,{to:"/guide/page.html#frontmatter"},{default:a(()=>[n("Guide > Page > Frontmatter")]),_:1})]),e("li",null,[l(t,{to:"/reference/node-api.html#frontmatter"},{default:a(()=>[n("Node API > Page Properties > frontmatter")]),_:1})])])])]),nn,e("ul",null,[e("li",null,[ln,e("p",null,[n("Options for "),e("a",tn,[n("@mdit-vue/plugin-headers"),l(o)]),n(".")]),an]),e("li",null,[on,e("ul",null,[e("li",null,[l(t,{to:"/reference/node-api.html#headers"},{default:a(()=>[n("Node API > Page Properties > headers")]),_:1})])])])]),sn,e("ul",null,[dn,rn,e("li",null,[pn,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#import-code-blocks"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Import Code Blocks")]),_:1})])])])]),un,e("ul",null,[cn,e("li",null,[hn,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#links"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Links")]),_:1})])])])]),fn,e("ul",null,[mn,e("li",null,[gn,e("p",null,[n("Options for "),e("a",_n,[n("@mdit-vue/plugin-sfc"),l(o)]),n(".")]),kn]),e("li",null,[bn,e("ul",null,[e("li",null,[l(t,{to:"/advanced/cookbook/markdown-and-vue-sfc.html"},{default:a(()=>[n("Cookbook > Markdown and Vue SFC")]),_:1})]),e("li",null,[l(t,{to:"/reference/node-api.html#sfcblocks"},{default:a(()=>[n("Node API > Page Properties > sfcBlocks")]),_:1})])])])]),wn,vn,yn,e("ul",null,[xn,e("li",null,[Dn,e("p",null,[n("Options for "),e("a",Tn,[n("@mdit-vue/plugin-title"),l(o)]),n(".")]),Pn])]),An,e("ul",null,[e("li",null,[Sn,e("p",null,[n("Options for "),e("a",Cn,[n("@mdit-vue/plugin-toc"),l(o)]),n(".")]),Ln]),e("li",null,[On,e("ul",null,[e("li",null,[l(t,{to:"/guide/markdown.html#table-of-contents"},{default:a(()=>[n("Guide > Markdown > Syntax Extensions > Table of Contents")]),_:1})])])])]),Bn,En,e("ul",null,[Mn,Gn,e("li",null,[In,e("ul",null,[e("li",null,[l(t,{to:"/guide/plugin.html"},{default:a(()=>[n("Guide > Plugin")]),_:1})])])])]),qn,Nn,e("p",null,[n("Please check out "),l(t,{to:"/reference/plugin-api.html"},{default:a(()=>[n("Plugin API Reference")]),_:1}),n(" for a full list of Plugin APIs.")])])}const Wn=r(c,[["render",Hn],["__file","config.html.vue"]]);export{Wn as default};
