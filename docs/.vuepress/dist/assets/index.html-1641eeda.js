import{_ as i,E as n,Z as l,$ as c,a0 as a,a3 as e,a1 as r,a2 as o,a4 as d}from"./framework-64cb0dab.js";const h={},u=d('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h3 id="what-is-crawlab" tabindex="-1"><a class="header-anchor" href="#what-is-crawlab" aria-hidden="true">#</a> What is Crawlab?</h3><p>Crawlab is an open-source web crawler management platform. Its design goal is to help users easily create, manage, and monitor web crawler tasks. Crawlab provides a user-friendly graphical interface that allows users to configure crawler tasks, set crawling rules, monitor the crawling status, and view the crawling results.</p><p>You can check the <a href="../guide">Introduction section</a> for more information.</p><h3 id="why-can-crawlab-execute-crawlers-written-in-different-programming-languages-and-frameworks" tabindex="-1"><a class="header-anchor" href="#why-can-crawlab-execute-crawlers-written-in-different-programming-languages-and-frameworks" aria-hidden="true">#</a> Why can Crawlab execute crawlers written in different programming languages and frameworks?</h3><p>Crawlab executes crawler tasks based on Shell commands. Therefore, theoretically, any crawler that can be run using Shell commands can be executed in Crawlab if the environment allows.</p><p>The <code>Execution Command</code> and <code>Parameters</code> in the crawler are concatenated to form the actual Shell command for the crawler task. For example, if the <code>Execute Command</code> of a certain crawler is <code>python main.py</code> and the parameter is <code>spider1</code>, then the Shell command for the crawler task will be <code>python main.py spider1</code>.</p><h3 id="why-does-crawlab-always-pull-version-v0-6-0-instead-of-the-latest-version" tabindex="-1"><a class="header-anchor" href="#why-does-crawlab-always-pull-version-v0-6-0-instead-of-the-latest-version" aria-hidden="true">#</a> Why does Crawlab always pull version v0.6.0 instead of the latest version?</h3>',8),p={href:"https://mirror.ccs.tencentyun.com",target:"_blank",rel:"noopener noreferrer"},w=a("h3",{id:"does-crawlab-support-scrapy",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#does-crawlab-support-scrapy","aria-hidden":"true"},"#"),e(" Does Crawlab support Scrapy?")],-1),m=a("p",null,[e("Yes, Crawlab supports Scrapy, and it has a built-in pipeline that can be used. You just need to add "),a("code",null,"crawlab.CrawlabPipeline"),e(" to the "),a("code",null,"ITEM_PIPELINS"),e(" in the "),a("code",null,"settings.py"),e(" file to integrate it.")],-1),f=a("h3",{id:"does-crawlab-support-selenium",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#does-crawlab-support-selenium","aria-hidden":"true"},"#"),e(" Does Crawlab support Selenium?")],-1);function b(g,_){const s=n("ExternalLinkIcon"),t=n("RouterLink");return l(),c("div",null,[u,a("p",null,[e("For users in China, it is highly possible that you have configured the Aliyun mirror proxy. Please use other mirror proxies, such as "),a("a",p,[e("Tencent Cloud mirror proxy"),r(s)]),e(".")]),w,m,a("p",null,[e("For more details, please refer to "),r(t,{to:"/en/guide/spider/integration.html"},{default:o(()=>[e("Spider Integration")]),_:1}),e(".")]),f,a("p",null,[e("Yes, Crawlab supports Selenium for web scraping. For more details, please refer to "),r(t,{to:"/en/guide/spider/selenium.html"},{default:o(()=>[e("Selenium Spider Integration")]),_:1}),e(".")])])}const x=i(h,[["render",b],["__file","index.html.vue"]]);export{x as default};
