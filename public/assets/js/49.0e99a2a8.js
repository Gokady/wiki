(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{776:function(s,a,t){"use strict";t.r(a);var e=t(103),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"边界打点寻找内网入口"}},[s._v("边界打点寻找内网入口 "),t("a",{staticClass:"header-anchor",attrs:{href:"#边界打点寻找内网入口"}},[s._v("#")])]),s._v(" "),t("h1",{attrs:{id:"快速入口top5"}},[s._v("快速入口TOP5 "),t("a",{staticClass:"header-anchor",attrs:{href:"#快速入口top5"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("一、弱口令")])]),s._v(" "),t("p",[s._v("事实证明弱口令还是存在很多的，大多是一些正在开发测试的站点")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("高危服务：SSH、RDP、MySQL、MSSQL、redis\nWeb后台：弱智密码-admin、123456、654321、111111、qazwsx\n网络设备：边界路由、防火墙、交换机、SSO登录口、堡垒机\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("二、高危组件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Shiro反序列化（默认key，jsp写的登录点都测一下，很多网站还没修复）\nWeblogic反序列化（T3和IIOP协议反序列化导致的代码执行）\nStruts2命令执行（很少见了-重点关注016、045和046）\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("三、OA办公平台")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("致远-文件上传Getshell\n通达-文件上传Getshell\n泛微-SQL注入\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("四、VPN")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("结合社工的方式想办法获取目标的VPN账号，直接到内网\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("五、邮箱")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("注意收集目标邮箱，尝试破解进去一个，可以获得大量资料，或者邮件钓鱼\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h1",{attrs:{id:"常规web打点-漏洞挖掘"}},[s._v("常规Web打点-漏洞挖掘 "),t("a",{staticClass:"header-anchor",attrs:{href:"#常规web打点-漏洞挖掘"}},[s._v("#")])]),s._v(" "),t("h2",{attrs:{id:"漏洞挖掘步骤"}},[s._v("漏洞挖掘步骤 "),t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞挖掘步骤"}},[s._v("#")])]),s._v(" "),t("blockquote",[t("p",[s._v("（1）枚举程序入口点（GET-URL、POST数据、Cookie、HTTP消息头、API接口）")]),s._v(" "),t("p",[s._v("（2）思考可能出现的不安全状态（即漏洞，根据功能联想到可能出现的漏洞，比如登录框怎么挖掘漏洞）")]),s._v(" "),t("p",[s._v("（3）设法使入口点到达不安全状态")])]),s._v(" "),t("p",[t("strong",[s._v("从攻击面上来划分可以讲漏洞分为两大类，通用漏洞 和 上下文漏洞")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("通用型漏洞")])]),s._v(" "),t("p",[s._v("是指在我们对应用的业务逻辑不是非常熟悉的情况下能够找出的漏洞；")]),s._v(" "),t("p",[s._v("例如一些RCE（远程代码执行）、SQLi、XSS、等。")]),s._v(" "),t("p",[t("strong",[s._v("上下文漏洞")])]),s._v(" "),t("p",[s._v("是指需要在对应用的业务逻辑、认证方式等非常熟悉的情况下才能找到的漏洞，例如权限绕过等。")]),s._v(" "),t("p",[s._v("**漏洞的复杂性：**有时候需要多个漏洞一起结合利用")])]),s._v(" "),t("h2",{attrs:{id:"owasp-top10"}},[s._v("OWASP Top10 "),t("a",{staticClass:"header-anchor",attrs:{href:"#owasp-top10"}},[s._v("#")])]),s._v(" "),t("blockquote",[t("p",[s._v("1.注入：SQL注入、OS注入(命令执行)、LDAP注入")])]),s._v(" "),t("blockquote",[t("p",[s._v("2.失效的身份认证和会话管理：弱口令爆破、不安全的散列密码加密(MD5爆破)")])]),s._v(" "),t("blockquote",[t("p",[s._v("3.敏感数据泄漏：源码泄漏、配置文件暴露、www.zip备份文件、默认后台")])]),s._v(" "),t("blockquote",[t("p",[s._v("4.XML外部实体(XXE)")])]),s._v(" "),t("blockquote",[t("p",[s._v("5.失效的访问控制：管理页面仅能管理员权限访问；越权漏洞(垂直越权、水平越权); JWT-Cookie伪造")])]),s._v(" "),t("blockquote",[t("p",[s._v("6.安全配置错误：开放了不必要的功能(445端口、网页-默认安装页面未删除、页面报错)、默认密码或空密码")])]),s._v(" "),t("blockquote",[t("p",[s._v("7.跨站脚本(XSS)")])]),s._v(" "),t("blockquote",[t("p",[s._v("8.不安全的反序列化：java、php、python")])]),s._v(" "),t("blockquote",[t("p",[s._v("9.使用含有已知漏洞的组件：未打补丁的系统和组件、使用有已知漏洞的框架版本")])]),s._v(" "),t("blockquote",[t("p",[s._v("10.不足的日志记录和监控：代码被删除，日志被修改，无法溯源；应该记录登陆失败次数；监控问题没被管理员响应")])]),s._v(" "),t("h2",{attrs:{id:"登录框漏洞挖掘"}},[s._v("登录框漏洞挖掘 "),t("a",{staticClass:"header-anchor",attrs:{href:"#登录框漏洞挖掘"}},[s._v("#")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/hw/web-login.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"web漏洞扫描"}},[s._v("Web漏洞扫描 "),t("a",{staticClass:"header-anchor",attrs:{href:"#web漏洞扫描"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("【AWVS爬虫 + Xray被动扫描】联动")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、xray开启监听\n./xray webscan --listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:1111 --html-output resualt.html\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、AWVS添加任务，走xray代理\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h1",{attrs:{id:"社工打点"}},[s._v("社工打点 "),t("a",{staticClass:"header-anchor",attrs:{href:"#社工打点"}},[s._v("#")])]),s._v(" "),t("p",[s._v("邮件钓鱼")]),s._v(" "),t("p",[s._v("加工作群传exe木马")]),s._v(" "),t("p",[s._v("伪装客户联系供应商技术支持（获取系统密码）")])])}),[],!1,null,null,null);a.default=r.exports}}]);