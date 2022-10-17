(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{833:function(a,s,n){"use strict";n.r(s);var e=n(105),t=Object(e.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h3",{attrs:{id:"z3"}},[a._v("z3 "),n("a",{staticClass:"header-anchor",attrs:{href:"#z3"}},[a._v("#")])]),a._v(" "),n("p",[a._v("z3是python中的一个模块，它的主要作用是约束求解，也就是给定一些条件，就可以求出一组符合条件的解，同通过z3可以不用计算，就像解方程一样，但是要注意的是，z3只能求出符合条件的一组解，如果题目存在多解的情况，z3也只能求出一组解，现在可以来看一个题目，flag长度为33，并且要求了长度为33")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/z3/1.png",alt:"image-20211219155300172"}})]),a._v(" "),n("p",[a._v("程序主要的加密就是用我们输入值进行加减运算，得到a2")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/z3/2.png",alt:"image-20211219155333205"}})]),a._v(" "),n("p",[a._v("直接用z3来求解")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('from z3 import *\nP=[12864,5522,10710,6924,788,10715,10008,13022,15893,9754,7946,7490,5636,13477,\n   2198,5861,5799,5259,6464,6171,2269,9251,8315,2989,-199,2680]\na = [z3.BitVec("p%d" % i, 8)for i in range(33)]\nf="flag{"\ns=Solver()\ns.add(a[0]==ord(f[0]))\ns.add(a[1]==ord(f[1]))\ns.add(a[2]==ord(f[2]))\ns.add(a[3]==ord(f[3]))\ns.add(a[4]==ord(f[4]))\ns.add(P[0]==12*a[5]+44*a[7]+17*a[6]+100*a[8]+20*a[9]+75*a[10])\ns.add(P[1]==63*a[10]+58*a[9]+46*a[5]+25*a[8]-89*a[7]+12*a[6]+2)\ns.add(P[2]==23*a[8]+45*a[9]+26*a[5]+77*a[6]+11*a[10]+41*a[7]+6)\ns.add(P[3]==34*a[7]+12*a[8]+15*a[10]+19*a[9]+20*a[6]+44*a[5]+12)\ns.add(P[4]==4*a[9]+2*a[10]+5*a[7]-4*a[8]+8*a[6]+a[5]+20)\ns.add(P[5]==12*a[6]+10*a[7]+9*a[9]+8*a[8]+99*a[10]+85*a[5]+11)\ns.add(P[6]==11*a[11]+12*a[12]+33*a[13]+55*a[14]+77*a[15]+20*a[16]+24)\ns.add(P[7]==66*a[11]+45*a[13]+78*a[15]+21*a[14]+56*a[12]+3*a[16]+110)\ns.add(P[8]==65*a[12]+25*a[15]+78*a[16]+54*a[14]+96*a[11]+a[13]*13+5)\ns.add(P[9]==88*a[13]+20*a[14]+a[15]*7+a[16]*36+a[11]*11+a[12]*41+10)\ns.add(P[10]==a[14]*14+a[15]*55+a[16]*62+a[11]*17+a[12]*8+a[13]+410)\ns.add(P[11]==a[15]*52+a[16]+a[11]+a[12]*2+a[14]*5+a[13]*6+a[14]*88+50)\ns.add(P[12]==a[17]+a[18]+8*a[19]+9*a[20]+11*a[21]+85*a[22]+11)\ns.add(P[13]==a[18]*56+a[19]*65+a[20]*78+a[21]*22+a[22]*55+a[17]+26)\ns.add(P[14]==a[19]*19+a[20]*3-a[21]-a[22]+a[17]*6+a[18]*20-11)\ns.add(P[15]==a[20]*8+a[21]*77+a[22]*46+a[17]*4-a[18]*10-a[19]*5-30)\ns.add(P[16]==a[21]*21+a[22]*22+a[17]*17+a[18]*18+a[19]*19+a[20]*20+120)\ns.add(P[17]==a[22]*9+a[21]*85+a[20]*5+a[19]*9+a[18]*8+a[17]*4-600)\ns.add(P[18]==a[23]*5+a[24]*6+a[25]*7+a[26]*8+a[27]*88+a[28]*22-200)\ns.add(P[19]==a[24]*50+a[25]*80+a[26]*10+a[27]*7+a[28]*12-a[23]*20-640)\ns.add(P[20]==a[25]*14+a[26]*8+a[27]*4+a[28]*25+a[23]*3+a[24]*7-720)\ns.add(P[21]==a[26]*8+a[27]*80+a[28]*40+a[23]*6+a[24]*5+a[25]*60-500)\ns.add(P[22]==a[27]*10+a[28]*85+a[23]*40+a[24]*41+a[25]*25-a[26]*26-260)\ns.add(P[23]==a[28]*9+a[23]*9+a[24]*55-a[25]*10-a[26]-a[27])\ns.add(P[24]==a[29]+a[30]+a[20]-a[19]-a[18]*2+a[16]-250)\ns.add(P[25]==a[30]-a[29]+3*a[16]+4*a[5]+55*a[27]+a[25]-400)\n\nprint(s.check())\nanswer=s.model()\nprint(answer)\n\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br")])]),n("p",[a._v("得到程序的解为")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("flag{000000000000000111111111111}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("直接输入，得到flag")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/z3/3.png",alt:"image-20211219155450925"}})]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("flag{L1sten_t0_the_s1lence_Of_extinct10n!}\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])]),n("p",[a._v("z3的主要优势是直接正向模仿运算的过程，对于一些不好进行逆运算的加密算法来说是比较好的工具")])])}),[],!1,null,null,null);s.default=t.exports}}]);