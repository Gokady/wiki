(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{827:function(e,s,t){"use strict";t.r(s);var l=t(105),n=Object(l.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"工具查杀"}},[e._v("工具查杀 "),t("a",{staticClass:"header-anchor",attrs:{href:"#工具查杀"}},[e._v("#")])]),e._v(" "),t("blockquote",[t("p",[e._v("常见的检测方法有"),t("strong",[e._v("基于主机的流量-文件-日志检测")]),e._v("、"),t("strong",[e._v("关键字(危险函数)匹配")]),e._v("、"),t("strong",[e._v("语义分析")]),e._v("等")])]),e._v(" "),t("p",[e._v("使用工具查杀Web目录")]),e._v(" "),t("p",[e._v("Windows：D盾 - http://www.d99net.net/down/WebShellKill_V2.0.9.zip")]),e._v(" "),t("p",[e._v("Linux：河马 - https://www.shellpub.com/")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("工具查杀不靠谱，还是要手动查看Web目录下的可解析执行文件；\n\n通过Web访问日志分析可快速定位到webshell位置。\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"网站被植入webshell的应急响应流程"}},[e._v("网站被植入WebShell的应急响应流程 "),t("a",{staticClass:"header-anchor",attrs:{href:"#网站被植入webshell的应急响应流程"}},[e._v("#")])]),e._v(" "),t("p",[e._v("主要关注Web日志，看有哪些异常的HTTP访问")]),e._v(" "),t("p",[e._v("如果有备份源码的情况下可以，用文件对比的方法快速定位Webshell")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("1、定位时间和范围")]),e._v("：扫描WebShell位置；定位文件创建的时间；检查Web根目录.htaccess文件")]),e._v(" "),t("p",[t("strong",[e._v("2、Web日志审计")]),e._v("：例如查看access.log（"),t("code",[e._v("/var/log/nginx")]),e._v("），下载到本地审计")]),e._v(" "),t("p",[t("strong",[e._v("3、漏洞分析")]),e._v("：分析可能存在漏洞的地方，复现漏洞GetShell。")]),e._v(" "),t("p",[t("strong",[e._v("4、漏洞修复")]),e._v("：清除WebShell并修复漏洞")]),e._v(" "),t("p",[t("strong",[e._v("5、对系统和Web应用进行安全加固")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);