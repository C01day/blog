(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{822:function(t,a,s){"use strict";s.r(a);var i=s(36),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("时间序列分类的python库："),s("a",{attrs:{href:"https://pyts.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Python Package for Time Series Classification: pyts")])]),t._v(" "),s("h2",{attrs:{id:"动态时间规整-dynamic-time-warping-dtw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态时间规整-dynamic-time-warping-dtw"}},[t._v("#")]),t._v(" 动态时间规整(Dynamic Time Warping,DTW)")]),t._v(" "),s("p",[t._v("动态时间规整，顾名思义，通过规整时间维度来找到两个时间序列之间的最佳对应。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/11/09/uRE1nxUIZjPzBHY.jpg",alt:""}})]),t._v(" "),s("p",[t._v("DTW采用动态规划来计算两个时间序列之间的相似性（和最长公共子序列类似）：")]),t._v(" "),s("p",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("=")]),s("mi",[t._v("D")]),s("mi",[t._v("i")]),s("mi",[t._v("s")]),s("mi",[t._v("t")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("+")]),s("mi",[t._v("m")]),s("mi",[t._v("i")]),s("mi",[t._v("n")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("D")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("D")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("D")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("D[i,j]=Dist[i,j]+min(D[i-1,j],D[i,j-1],D[i-1,j-1])\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("min")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("])")])])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.loli.net/2021/11/09/xLaqgAhV3lNoRE1.jpg",alt:""}})]),t._v(" "),s("p",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("D[i,j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("表示长度为"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.65952em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v("和"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.85396em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v("的两个时间序列之间的归整路径距离。")]),t._v(" "),s("p",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("D")]),s("mi",[t._v("i")]),s("mi",[t._v("s")]),s("mi",[t._v("t")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Dist[i,j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("为任意经典的距离计算方法，例如欧几里得距离。")]),t._v(" "),s("h2",{attrs:{id:"shapelets算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shapelets算法"}},[t._v("#")]),t._v(" Shapelets算法")]),t._v(" "),s("p",[t._v("Shapelets是时间序列中最能代表该类时间序列的一段连续子序列。")]),t._v(" "),s("p",[t._v("提出Shapelets概念："),s("a",{attrs:{href:"https://www.cs.ucr.edu/~eamonn/shaplet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Time Series Shapelets: A New Primitive for Data Mining")])]),t._v(" "),s("p",[t._v("Shapelets系列汇总："),s("a",{attrs:{href:"http://www.jsjkx.com/CN/article/openArticlePDF.jsp?id=17732",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于shapelets的时间序列分类研究")])]),t._v(" "),s("el-row",[s("el-col",{attrs:{span:6}},[s("el-card",{staticStyle:{"border-radius":"8px","align-items":"center"},attrs:{shadow:"always"}},[s("a",{staticStyle:{"text-decoration":"none",color:"#202124",margin:"auto",display:"flex","align-items":"center"},attrs:{target:"_blank",href:"https://colab.research.google.com/drive/1slow3kX4bFWi0Z4USE1X9BvxazGqVsFp?usp=sharing"}},[s("img",{staticStyle:{margin:"auto"},attrs:{src:"https://www.tensorflow.org/images/colab_logo_32px.png"}}),t._v("Run in Colab\n")])])],1)],1),t._v(" "),s("h2",{attrs:{id:"符号聚集近似-symbolic-aggregate-approximation-sax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#符号聚集近似-symbolic-aggregate-approximation-sax"}},[t._v("#")]),t._v(" 符号聚集近似(Symbolic Aggregate Approximation,SAX)")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);