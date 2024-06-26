import{_ as c,E as a,Z as d,$ as h,a0 as e,a3 as t,a1 as i,a4 as r}from"./framework-64cb0dab.js";const n="/assets/notification-menu-5e1bb6db.png",g="/assets/email-config-ab32042d.png",p="/assets/mobile-config-4a8a8541.png",m="/assets/template-0df15266.png",f={},_=e("h1",{id:"notifications",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notifications","aria-hidden":"true"},"#"),t(" Notifications")],-1),u={class:"hint-container info"},b=e("p",{class:"hint-container-title"},"NOTE",-1),v={href:"https://www.crawlab.cn/en/prices",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"Crawlab allows users to receive email or mobile notifications.",-1),k=r('<h2 id="email" tabindex="-1"><a class="header-anchor" href="#email" aria-hidden="true">#</a> Email</h2><ol><li>Navigate to <code>Notifications</code> page <br><img src="'+n+'" alt="notifications-menu.png"></li><li>Click a notification config of <code>Email</code> type</li><li>Fill in the configuration form <br><img src="'+g+'" alt="email-config.png"></li><li>Click on <code>Save</code> button</li></ol><p>SMTP configurations:</p><ul><li><strong>SMTP Server</strong>: SMTP server address</li><li><strong>SMTP Port</strong>: SMTP server port</li><li><strong>SMTP User</strong>: SMTP server username</li><li><strong>SMTP Password</strong>: SMTP server password</li><li><strong>Sender Email</strong>: SMTP server sender email</li><li><strong>Sender Identity</strong>: SMTP server sender identity</li><li><strong>To</strong>: Recipient email</li><li><strong>CC</strong>: CC email</li></ul><h2 id="mobile" tabindex="-1"><a class="header-anchor" href="#mobile" aria-hidden="true">#</a> Mobile</h2><ol><li>Navigate to <code>Notifications</code> page <br><img src="'+n+'" alt="notifications-menu.png"></li><li>Click a notification config of <code>Mobile</code> type</li><li>Fill in the configuration form <br><img src="'+p+'" alt="mobile-config.png"></li><li>Click on <code>Save</code> button</li></ol>',6),S={class:"hint-container tip"},P=e("p",{class:"hint-container-title"},"Tips",-1),w=e("p",null,"Please refer to related documentation for how to get webhook tokens.",-1),x={href:"https://open.dingtalk.com/document/robots/custom-robot-access",target:"_blank",rel:"noopener noreferrer"},N={href:"https://developer.work.weixin.qq.com/document/path/91770",target:"_blank",rel:"noopener noreferrer"},C=r('<h2 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger" aria-hidden="true">#</a> Trigger</h2><ol><li>Navigate to the <code>Notifications</code> page <br><img src="'+n+'" alt="notifications-menu.png"></li><li>Click on the <code>Trigger</code> tab</li><li>Select the event types you want to trigger</li></ol><h2 id="template" tabindex="-1"><a class="header-anchor" href="#template" aria-hidden="true">#</a> Template</h2><ol><li>Navigate to <code>Notifications</code> page <br><img src="'+n+'" alt="notifications-menu.png"></li><li>Click a notification config of any type</li><li>Click on <code>Template</code> tab <br><img src="'+m+'" alt="template.png"></li></ol>',4),M={class:"hint-container tip"},y=e("p",{class:"hint-container-title"},"Tips",-1),E={href:"https://github.com/crawlab-team/template-parser",target:"_blank",rel:"noopener noreferrer"};function L(s,V){const o=a("ExternalLinkIcon"),l=a("SlideList");return d(),h("div",null,[_,e("div",u,[b,e("p",null,[t("This functionality is for "),e("a",v,[t("Pro Edition"),i(o)]),t(" only.")])]),T,i(l,{slides:s.$page.frontmatter.slides},null,8,["slides"]),k,e("div",S,[P,w,e("ul",null,[e("li",null,[e("a",x,[t("DingTalk"),i(o)])]),e("li",null,[e("a",N,[t("Wechat Work"),i(o)])])])]),C,e("div",M,[y,e("p",null,[t("To understand the syntax and variables of templates, please refer to "),e("a",E,[t("template-parser"),i(o)])])])])}const I=c(f,[["render",L],["__file","index.html.vue"]]);export{I as default};