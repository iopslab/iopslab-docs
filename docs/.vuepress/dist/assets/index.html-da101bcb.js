import{_ as o,E as l,Z as c,$ as h,a0 as e,a3 as a,a1 as t,a2 as r,a4 as d}from"./framework-64cb0dab.js";const s={},p=d('<h1 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h1><p><em>插件</em> 是可以延伸既定功能的扩展。在 Crawlab 中，用户可以使用 <em>插件框架</em> 来自定义爬虫管理平台。</p><h2 id="为什么用插件" tabindex="-1"><a class="header-anchor" href="#为什么用插件" aria-hidden="true">#</a> 为什么用插件</h2><p>为什么我们不直接捣鼓一下 Crawlab 源代码来满足自定义需求？其原因是需要考虑 <strong>可维护性</strong>。当您修改 Crawlab 的核心模块时，可能会产生项目维护方面的风险，因为一旦将来有版本升级，您的自定义功能很可能会遭到破坏。</p><p>一个良好设计的插件很少会跟 Crawlab 紧耦合，因此 Crawlab 的版本升级更新将不容易对插件造成严重影响。插件是可插拔的，并且能很容易被安装或卸载。</p><h2 id="插件框架" tabindex="-1"><a class="header-anchor" href="#插件框架" aria-hidden="true">#</a> 插件框架</h2><p><em>插件框架</em> 是内置在 Crawlab 里的，它用于管理官方和第三方插件。Crawlab 用户能够基于 <em>Crawlab 插件框架 (CPF)</em> 来开发插件。</p><h2 id="官方插件" tabindex="-1"><a class="header-anchor" href="#官方插件" aria-hidden="true">#</a> 官方插件</h2>',8),u={href:"https://github.com/crawlab-team",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/orgs/crawlab-team/repositories",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"plugin-",-1),f=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"描述"),e("th",null,"仓库链接")])],-1),m=e("td",null,"发送消息提醒，例如邮件通知、手机推送",-1),g={href:"https://github.com/crawlab-team/plugin-notification",target:"_blank",rel:"noopener noreferrer"},w=e("td",null,"安装依赖并管理依赖和运行环境",-1),x={href:"https://github.com/crawlab-team/plugin-dependency",target:"_blank",rel:"noopener noreferrer"},C=e("td",null,"提供高级网络爬虫功能，包括框架支持，例如 Scrapy 等",-1),k={href:"https://github.com/crawlab-team/plugin-spider-assistant",target:"_blank",rel:"noopener noreferrer"},v=d('<h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>插件安装完成之后，您需要在浏览器中刷新页面来显示插件的 UI 组件。</p></div><p>在 Crawlab 中有多种安装插件的方式。</p><h3 id="通过名称安装" tabindex="-1"><a class="header-anchor" href="#通过名称安装" aria-hidden="true">#</a> 通过名称安装</h3><p>您可以通过在 <code>安装插件</code> 对话框中输入插件名称来安装 <a href="#%E5%AE%98%E6%96%B9%E6%8F%92%E4%BB%B6">官方插件</a>。</p><ol><li>导航至 <code>插件</code> 页面</li><li>选择 <code>公共</code></li><li>在您想要安装的插件上点击 <code>安装</code> 按钮</li></ol><h3 id="通过-git-安装" tabindex="-1"><a class="header-anchor" href="#通过-git-安装" aria-hidden="true">#</a> 通过 Git 安装</h3><p>如果您知道 Crawlab 插件的 Git URL，您可以通过它来安装插件。</p><ol><li>导航至 <code>插件</code> 页面</li><li>选择 <code>Git</code></li><li>在 <code>安装 URL</code> 字段中输入插件 URL</li><li>点击 <code>确定</code>.</li></ol><h3 id="通过本地安装" tabindex="-1"><a class="header-anchor" href="#通过本地安装" aria-hidden="true">#</a> 通过本地安装</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这个方式仅适合用源码开发 Crawlab 时使用。</p></div><ol><li>导航至 <code>插件</code> 页面</li><li>选择 <code>本地</code></li><li>在 <code>安装路径</code> 字段中输入插件 URL</li><li>点击 <code>确定</code>.</li></ol><h3 id="安装源" tabindex="-1"><a class="header-anchor" href="#安装源" aria-hidden="true">#</a> 安装源</h3><div class="hint-container warning"><p class="hint-container-title">注意</p><p><em>安装源</em> 仅对官方插件生效。</p></div><p>默认的官方插件安装源是 <code>GitHub</code>。但是 GitHub 不总是最佳安装源。例如，如果您所在地是中国大陆，连接到 GitHub 可能会有些慢。这时您可以选择 <code>安装源</code> 为 <code>Gitee</code> 来大幅加速官方插件的安装。</p><h2 id="卸载插件" tabindex="-1"><a class="header-anchor" href="#卸载插件" aria-hidden="true">#</a> 卸载插件</h2><p>您可以在 <code>插件</code> 页面里点击右侧的 <code>删除</code> 按钮来卸载插件。</p><h2 id="启动-停止" tabindex="-1"><a class="header-anchor" href="#启动-停止" aria-hidden="true">#</a> 启动/停止</h2><p>您可以在 <code>插件</code> 页面里点击右侧的 <code>启动</code> 或 <code>停止</code> 按钮来启动或停止插件。</p>',19);function E(G,L){const n=l("ExternalLinkIcon"),i=l("RouterLink");return c(),h("div",null,[p,e("p",null,[e("a",u,[a("Crawlab 开发团队"),t(n)]),a(" 开发了一些公开的官方插件，并在提供长期维护。官方 Crawlab 插件在 "),e("a",b,[a("Crawlab 开发团队 GitHub 仓库"),t(n)]),a("，每一个仓库都带有前缀 "),_,a("。")]),e("table",null,[f,e("tbody",null,[e("tr",null,[e("td",null,[t(i,{to:"/zh/guide/plugin/plugin-notification.html"},{default:r(()=>[a("public-notification")]),_:1})]),m,e("td",null,[e("a",g,[a("链接"),t(n)])])]),e("tr",null,[e("td",null,[t(i,{to:"/zh/guide/plugin/plugin-dependency.html"},{default:r(()=>[a("public-dependency")]),_:1})]),w,e("td",null,[e("a",x,[a("链接"),t(n)])])]),e("tr",null,[e("td",null,[t(i,{to:"/zh/guide/plugin/plugin-spider-assistant.html"},{default:r(()=>[a("public-spider-assistant")]),_:1})]),C,e("td",null,[e("a",k,[a("链接"),t(n)])])])])]),v])}const R=o(s,[["render",E],["__file","index.html.vue"]]);export{R as default};