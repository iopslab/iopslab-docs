import{_ as s,E as i,Z as t,$ as o,a0 as e,a3 as n,a1 as r,a4 as c}from"./framework-64cb0dab.js";const l={},d=e("h1",{id:"environment-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment-variables","aria-hidden":"true"},"#"),n(" Environment Variables")],-1),p={class:"hint-container info"},h=e("p",{class:"hint-container-title"},"NOTE",-1),v={href:"https://www.crawlab.cn/prices",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>Crawlab allows users to set environment variables during spider runtime.</p><h2 id="setting-environment-variables" tabindex="-1"><a class="header-anchor" href="#setting-environment-variables" aria-hidden="true">#</a> Setting Environment Variables</h2><ol><li>Navigate to the <code>Environment Variables</code> page.</li><li>Click the <code>Create Environment Variable</code> button.</li><li>Fill in the configuration form.</li></ol><h2 id="accessing-environment-variables" tabindex="-1"><a class="header-anchor" href="#accessing-environment-variables" aria-hidden="true">#</a> Accessing Environment Variables</h2><p>Assuming we have set an environment variable with the key <code>FOO</code> and the value <code>BAR</code>, we can access it in a spider script using the following sample code.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os

foo <span class="token operator">=</span> os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;FOO&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token comment"># BAR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,_){const a=i("ExternalLinkIcon");return t(),o("div",null,[d,e("div",p,[h,e("p",null,[n("This feature is only available in the "),e("a",v,[n("Crawlab Pro Edition"),r(a)]),n(".")])]),u])}const k=s(l,[["render",m],["__file","index.html.vue"]]);export{k as default};
