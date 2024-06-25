import{_ as t,c as e,o as d,a6 as l}from"./chunks/framework.BbZoItmV.js";const a="/assets/img.B8Anpu-6.png",c=JSON.parse('{"title":"日期范围输入框 daterangefield","description":"","frontmatter":{"title":"日期范围输入框 daterangefield"},"headers":[],"relativePath":"yvanui/02_pages/11_daterangefield.md","filePath":"yvanui/02_pages/11_daterangefield.md"}'),r={name:"yvanui/02_pages/11_daterangefield.md"},i=l('<h1 id="日期范围输入框-daterangefield-组件" tabindex="-1">日期范围输入框 daterangefield 组件 <a class="header-anchor" href="#日期范围输入框-daterangefield-组件" aria-label="Permalink to &quot;日期范围输入框 daterangefield 组件&quot;">​</a></h1><p>DateRangeField是一种表单组件，用于方便用户输入起始日期和结束日期。它提供了一个直观的界面，使用户能够轻松选择日期范围，从而更方便地进行日期选择和筛选操作</p><h4 id="功能描述" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述" aria-label="Permalink to &quot;功能描述&quot;">​</a></h4><ol><li>允许用户选择起始日期和结束日期，以定义一个日期范围。</li><li>提供日历选择器界面，用户可以通过点击日历上的日期来选择特定的起始日期和结束日期。</li><li>允许用户手动输入日期，以满足特定需求或直接输入已知的日期值。</li><li>对用户输入的日期进行格式验证，确保输入的日期符合指定的日期格式要求。</li></ol><h4 id="示例显示" tabindex="-1">示例显示 <a class="header-anchor" href="#示例显示" aria-label="Permalink to &quot;示例显示&quot;">​</a></h4><p><img src="'+a+'" alt="" loading="lazy"></p><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><p>调用组件的事件，同上button组件</p><table><thead><tr><th style="text-align:left;">事件名称</th><th>说明</th><th>参数和示例</th></tr></thead><tbody><tr><td style="text-align:left;">focus</td><td>获取焦点时触发</td><td>daterangefield1_focus(){}</td></tr><tr><td style="text-align:left;">blur</td><td>失去焦点触发</td><td>daterangefield1_blur(){}</td></tr><tr><td style="text-align:left;">change</td><td>更改时触发</td><td>daterangefield1_change(){}</td></tr><tr><td style="text-align:left;">input</td><td>输入时触发</td><td>daterangefield1_input(){}</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">方法名称</th><th>说明</th><th>参数和示例</th></tr></thead><tbody><tr><td style="text-align:left;">--</td><td>--</td><td>--</td></tr></tbody></table><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性名称</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td style="text-align:left;">reference</td><td>设置组件的refs</td><td>refs:daterangefield1</td></tr><tr><td style="text-align:left;">value</td><td>设置开始值（必填项，否则运行时组件切换没反应）</td><td>bind:{value:&#39;{startDate}&#39;}</td></tr><tr><td style="text-align:left;">value2</td><td>设置结束值（必填项，否则运行时组件切换没反应）</td><td>bind:{value2:&#39;{endDate}&#39;}</td></tr><tr><td style="text-align:left;">hidden</td><td>隐藏或显示组件，默认为false</td><td>hidden:false</td></tr><tr><td style="text-align:left;">fieldLabel</td><td>标签名</td><td>fieldLabel:&#39;NewDate&#39;</td></tr><tr><td style="text-align:left;">required</td><td>组件是否必填，默认为false</td><td>required:false</td></tr><tr><td style="text-align:left;">weight</td><td>权重的宽度，6中选择，1、2、3、4、5、6，默认为1</td><td>weight：1</td></tr><tr><td style="text-align:left;">labelWidth</td><td>标签宽度，默认为auto</td><td>labelWidth:80</td></tr><tr><td style="text-align:left;">size</td><td>设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false</td><td>size:default</td></tr><tr><td style="text-align:left;">validateOnRuleChange</td><td>是否立刻校验，默认为false</td><td>validateOnRuleChange:false</td></tr><tr><td style="text-align:left;">showMessage</td><td>是否显示错误，默认为false</td><td>showMessage:false</td></tr><tr><td style="text-align:left;">inlineMessage</td><td>是否显示内敛错误，默认为false</td><td>inlineMessage:false</td></tr><tr><td style="text-align:left;">startPlaceholder</td><td>开始日期占位字符，默认为空</td><td>startPlaceholder:&#39;&#39;</td></tr><tr><td style="text-align:left;">endPlaceholder</td><td>结束日期占位字符，空</td><td>endPlaceholder:&#39;&#39;</td></tr><tr><td style="text-align:left;">maxlength</td><td>最大长度，默认为空</td><td>maxlength:&#39;&#39;</td></tr><tr><td style="text-align:left;">valueFormat</td><td>日期格式，默认为YYYY-MM-DD</td><td>valueFormat:&#39;&#39;</td></tr><tr><td style="text-align:left;">disabled</td><td>是否禁用组件，默认为false</td><td>disabled:false</td></tr><tr><td style="text-align:left;">readonly</td><td>是否允许只读，默认为false</td><td>readonly:false</td></tr><tr><td style="text-align:left;">marginTop</td><td>距上的内边距，默认为0</td><td>paddingTop:5</td></tr><tr><td style="text-align:left;">marginRight</td><td>距右的内边距，默认为0</td><td>paddingRight:5</td></tr><tr><td style="text-align:left;">marginBottom</td><td>距下的内边距，默认为0</td><td>paddingBottom:5</td></tr><tr><td style="text-align:left;">marginLeft</td><td>距左的内边距，默认为0</td><td>paddingLeft:5</td></tr><tr><td style="text-align:left;">cssBackgroundColor</td><td>设置整个组件的背景色，默认为none</td><td>cssBackgroundColor:&quot;#722ed1&quot;</td></tr><tr><td style="text-align:left;">labelBackgroundColor</td><td>设置组件label的背景色，默认为none</td><td>labelBackgroundColor: &#39;#eb2f96&#39;</td></tr><tr><td style="text-align:left;">labelSize</td><td>设置组件label的文字大小，默认为14px</td><td>labelSize: &#39;12px&#39;</td></tr><tr><td style="text-align:left;">labelColor</td><td>设置组件label的文字颜色，默认为&#39;#606266&#39;</td><td>labelColor: &#39;#fbadd2&#39;</td></tr><tr><td style="text-align:left;">isLabelBlod</td><td>是否设置label的字题为粗体,默认为false</td><td>isLabelBlod:true</td></tr><tr><td style="text-align:left;">valueBackgroundColor</td><td>设置组件value的背景色，默认为none</td><td>valueBackgroundColor: &#39;#eb2f96&#39;</td></tr><tr><td style="text-align:left;">valueSize</td><td>设置组件value的文字大小，默认为14px</td><td>valueSize: &#39;12px&#39;</td></tr><tr><td style="text-align:left;">valueColor</td><td>设置组件value的文字颜色，默认为&#39;#606266&#39;</td><td>valueColor: &#39;#fbadd2&#39;</td></tr></tbody></table>',13),n=[i];function s(o,f,g,h,u,x){return d(),e("div",null,n)}const y=t(r,[["render",s]]);export{c as __pageData,y as default};
