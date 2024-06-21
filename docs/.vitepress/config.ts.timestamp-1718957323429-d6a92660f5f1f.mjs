// docs/.vitepress/config.ts
import { defineConfig } from "file:///D:/Projects/yvan-ui-doc/node_modules/vitepress/dist/node/index.js";

// docs/utils.js
import fs from "fs";
import path from "path";
import yaml from "file:///D:/Projects/yvan-ui-doc/node_modules/js-yaml/dist/js-yaml.mjs";
function parseMarkdownFile(file) {
  let content = fs.readFileSync(file, "utf-8");
  const r = content.match(/---([\s\S]*?)---/);
  if (!r) {
    console.error("\u89E3\u6790\u5931\u8D25,\u627E\u4E0D\u5230\u6587\u6863\u5934", file, content);
    return;
  }
  const result3 = yaml.load(r[1]);
  return result3;
}
function deepTravDir(linkPrefix, rootDir, relDir) {
  const absDirPath = path.join(rootDir, relDir);
  const result3 = {};
  const absIndexFile = path.join(absDirPath, "/01_index.md");
  if (fs.existsSync(absIndexFile)) {
    const meta = parseMarkdownFile(absIndexFile);
    if (meta) {
      result3.text = meta.title;
    } else {
      result3.text = relDir;
    }
    result3.items = [
      { text: "\u4ECB\u7ECD", link: linkPrefix + relDir + "/01_index" }
    ];
  } else {
    return;
  }
  fs.readdirSync(absDirPath).forEach((file) => {
    const fullPath = path.join(absDirPath, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      const subItem = deepTravDir(linkPrefix, rootDir, "/" + file);
      if (subItem) {
        result3.items.push(subItem);
      }
    } else if (fullPath.endsWith(".md") && "" + file !== "01_index.md") {
      const item = { text: "", link: linkPrefix + relDir + "/" + file };
      item.link = item.link.substring(0, item.link.length - 3);
      const meta = parseMarkdownFile(fullPath);
      if (meta) {
        item.text = meta.title;
        if ("" + meta.navIgnore === "true") {
          return;
        }
      }
      result3.items.push(item);
    }
  });
  if (result3.items.length < 0) {
    delete result3.items;
  }
  result3.items.sort((a, b) => {
    if (a.items && !b.items) {
      return 1;
    }
    if (!a.items && b.items) {
      return -1;
    }
    return 0;
  });
  return result3;
}

// docs/wms/index.js
var __vite_injected_original_dirname = "D:\\Projects\\yvan-ui-doc\\docs\\wms";
var result = deepTravDir("/wms", __vite_injected_original_dirname, "");
var wms_default = {
  getNav() {
    const items = [
      { text: "\u4ECB\u7ECD", link: "/wms/01_index" }
    ];
    result.items.forEach((item) => {
      if (item.items) {
        items.push({
          text: item.text,
          link: item.items[0].link
        });
      }
    });
    return {
      text: "WMS\u7CFB\u7EDF",
      items
    };
  },
  /**
   * 获取侧边栏
   * @return {[{link: string, text: string}]}
   */
  getSidebar() {
    const ret = result.items.map((item) => {
      if (item.items) {
        return {
          collapsed: true,
          ...item
        };
      }
      return item;
    });
    return ret;
  }
};

// docs/yvanui/index.js
var __vite_injected_original_dirname2 = "D:\\Projects\\yvan-ui-doc\\docs\\yvanui";
var result2 = deepTravDir("/yvanui", __vite_injected_original_dirname2, "");
var yvanui_default = {
  getNav() {
    const items = [
      { text: "\u4ECB\u7ECD", link: "/yvanui/01_index" }
    ];
    result2.items.forEach((item) => {
      if (item.items) {
        items.push({
          text: item.text,
          link: item.items[0].link
        });
      }
    });
    return {
      text: "\u57FA\u7840\u5E73\u53F0",
      items
    };
  },
  /**
   * 获取侧边栏
   * @return {[{link: string, text: string}]}
   */
  getSidebar() {
    return result2.items.map((item) => {
      if (item.items) {
        return {
          collapsed: false,
          ...item
        };
      }
      return item;
    });
  }
};

// docs/doc/index.js
import path2 from "path";
import fs2 from "fs";
var __vite_injected_original_dirname3 = "D:\\Projects\\yvan-ui-doc\\docs\\doc";
function deepTrav2(linkPrefix, rootDir, relDir) {
  const absDirPath = path2.join(rootDir, relDir);
  console.log("scanDir", absDirPath);
  const result3 = {
    text: "\u6839\u76EE\u5F551",
    items: []
  };
  result3.items = [];
  fs2.readdirSync(absDirPath).forEach((file) => {
    const fullPath = path2.join(absDirPath, file);
    if (fs2.lstatSync(fullPath).isDirectory()) {
      const subItem = deepTrav2(linkPrefix, rootDir, relDir + "/" + file);
      subItem.text = file;
      if (subItem) {
        result3.items.push(subItem);
      }
    } else if (fullPath.endsWith(".md")) {
      const item = { text: "", link: linkPrefix + relDir + "/" + file };
      item.link = item.link.substring(0, item.link.length - 3);
      const meta = parseMarkdownFile(fullPath);
      if (meta) {
        item.text = meta.title;
      }
      result3.items.push(item);
    }
  });
  return result3;
}
var shareResult = deepTrav2("/doc", __vite_injected_original_dirname3, "/share");
shareResult.text = "\u5206\u4EAB";
var techResult = deepTrav2("/doc", __vite_injected_original_dirname3, "/tech");
techResult.text = "\u6280\u672F";
var doc_default = {
  getNav() {
    return {
      text: "\u968F\u7B14",
      items: [
        {
          text: "\u5206\u4EAB",
          items: [
            // 找到 shareResult 的 items 中 text值最大的5条记录
            ...shareResult.items.sort((a, b) => {
              if (a.text > b.text) {
                return -1;
              } else {
                return 1;
              }
            }).slice(0, 5)
          ]
        },
        // techResult,
        // shareResult,
        { text: "\u6280\u672F", link: "/doc/tech" },
        { text: "\u5173\u4E8E", link: "/author" }
      ]
    };
  },
  /**
   * 获取侧边栏
   */
  getSidebar() {
    return {
      "/doc/tech": [
        // {text: "技术1"},
        // {text: "技术2"},
        // {text: "技术3"},
        ...techResult.items
      ],
      "/doc/share": [
        // {text: "分享1"},
        // {text: "分享2"},
        // {text: "分享3"},
        ...shareResult.items
      ]
    };
  }
};

// docs/.vitepress/config.ts
import timeline from "file:///D:/Projects/yvan-ui-doc/node_modules/vitepress-markdown-timeline/dist/cjs/index.cjs.js";

// docs/.vitepress/theme/plugins/Callout.ts
function CallOutFn(md) {
  const RE = new RegExp(`^\\[\\!(\\w+)\\]([^\\n\\r]*)`, "i");
  md.core.ruler.after("block", "github-alerts", (state) => {
    const tokens = state.tokens;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type === "blockquote_open") {
        const open = tokens[i];
        const startIndex = i;
        while (tokens[i]?.type !== "blockquote_close" && i <= tokens.length)
          i += 1;
        const close = tokens[i];
        const endIndex = i;
        const firstContent = tokens.slice(startIndex, endIndex + 1).find((token) => token.type === "inline");
        if (!firstContent)
          continue;
        const match = firstContent.content.match(RE);
        if (!match)
          continue;
        const type = match[1].toLowerCase();
        const title = match[2].trim() || capitalize(type);
        firstContent.content = firstContent.content.slice(match[0].length).trimStart();
        open.type = "alert_open";
        open.tag = "YvCallOut";
        open.meta = {
          title,
          type
        };
        close.type = "alert_close";
        close.tag = "YvCallOut";
      }
    }
  });
  md.renderer.rules.alert_open = function(tokens, idx) {
    const { title, type } = tokens[idx].meta;
    return `<YvCallOut type="${type}" title="${title}">`;
  };
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
var Callout_default = CallOutFn;

// docs/.vitepress/theme/plugins/BeanSchemaCode.ts
function BeanSchemaCode(md) {
  const fenceDefault = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    if (token.info === "beanSchema") {
      const rawCode = token.content;
      let str = rawCode.replace(/"/g, "&quot;");
      return `<YvBeanSchema content="${str}" />`;
    } else if (token.info === "dataview") {
      return "";
    } else if (token.info === "bpmn") {
      return "";
    } else if (token.info === "ignore") {
      return "";
    }
    return fenceDefault(...args);
  };
}
var BeanSchemaCode_default = BeanSchemaCode;

// docs/.vitepress/theme/plugins/AssetsConvert.ts
function AssetsConvert(md) {
  let defaultRender = md.renderer.rules.text;
  let inLineRender = md.renderer.rules.html_inline;
  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (token.content.indexOf("![[") >= 0 && token.content.indexOf("]]") >= 0) {
      const item = token.content;
      const imgName = item.substring(3, item.length - 2).replace(/ /g, "%20");
      tokens[idx].content = `<img src="./_assets/${imgName}" alt="" loading="lazy">`;
      return inLineRender(tokens, idx, options, env, self);
    } else if (token.content.indexOf("[[") >= 0 && token.content.indexOf("]]") >= 0) {
      const item = token.content;
      const link = item.substring(2, item.length - 2);
      const linkArr = link.split("/");
      const text = linkArr[linkArr.length - 1];
      tokens[idx].content = `<a href="/${link}.html">${text}</a>`;
      return inLineRender(tokens, idx, options, env, self);
    }
    return defaultRender(tokens, idx, options, env, self);
  };
}
var AssetsConvert_default = AssetsConvert;

// docs/.vitepress/theme/plugins/index.ts
function applyPlugins(md) {
  md.use(Callout_default);
  md.use(BeanSchemaCode_default);
  md.use(AssetsConvert_default);
}

// docs/.vitepress/config.ts
var config_default = defineConfig({
  lang: "zh-CN",
  title: "\u94F6\u6CB3\u5F00\u53D1\u5E73\u53F0",
  description: "\u4F01\u4E1A\u7EA7\u65E0\u4EE3\u7801\u6846\u67B6",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // appearance: 'light',
  // postRender(context) {
  //     // ...
  //     console.log('postRender', context)
  // },
  // transformHead(context) {
  //     // ...
  //     console.log('transformHead', context)
  // },
  // transformPageData(pageData) {
  //     console.log('transformPageData', pageData)
  // },
  // transformHtml(code, id, context) {
  //     // ...
  //     console.log('transformHtml', code, id, context)
  // },
  themeConfig: {
    nav: [
      yvanui_default.getNav(),
      wms_default.getNav(),
      //@ts-ignore
      doc_default.getNav()
    ],
    sidebar: {
      "test": [
        {
          text: "test",
          collapsed: false,
          items: [
            { text: "test", link: "/atest/1.md" }
          ]
        }
      ],
      "/yvanui/": yvanui_default.getSidebar(),
      // '/yvanui/': [
      //     {
      //         text: 'basic', collapsed: false,
      //         items: [
      //             {text: 'basic', link: '/yvanui/basic/'},
      //         ]
      //     },
      //     {
      //         text: 'cmp', collapsed: false,
      //         items: [
      //             {text: 'button', link: '/yvanui/cmp/button'},
      //             {text: 'aggrid', link: '/yvanui/cmp/aggrid'},
      //         ]
      //     }
      // ],
      // 当用户位于 `config` 目录时，会显示此侧边栏
      "/wms/": wms_default.getSidebar(),
      // '/wms/': [
      //     {
      //         text: 'inbound', collapsed: false,
      //         items: [
      //             {text: 'button', link: '/wms/inbound/'},
      //         ]
      //     },
      //     {
      //         text: 'outbound', collapsed: false,
      //         items: [
      //             {text: 'button', link: '/wms/outbound/'},
      //         ]
      //     },
      //     {
      //         text: 'inner', collapsed: false,
      //         items: [
      //             {text: 'button', link: '/wms/inner/'},
      //         ]
      //     }
      // ]
      ...doc_default.getSidebar()
    },
    //页脚
    footer: {
      copyright: 'Copyright \xA9 2024 \u5907\u6848\u53F7\uFF1A<a href="https://beian.miit.gov.cn/">\u9102ICP\u590718029062\u53F7</a>'
    },
    //本地搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "\u641C\u7D22\u6587\u6863",
                buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
              },
              modal: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                footer: {
                  selectText: "\u9009\u62E9",
                  navigateText: "\u5207\u6362"
                }
              }
            }
          }
        }
      }
    },
    //手机端深浅模式文字修改
    darkModeSwitchLabel: "\u6DF1\u6D45\u6A21\u5F0F",
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: "\u76EE\u5F55",
    //返回顶部文字修改(移动端)
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    //大纲显示2-3级标题
    outline: {
      level: [1, 3],
      label: "\u5F53\u524D\u9875\u5927\u7EB2"
    },
    //自定义上下页名
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    }
  },
  // buildEnd(config) {
  //     // ...
  //     console.log('buildEnd', config)
  // },
  // vite: {
  //     plugins: [
  //         VitePressPreprocessMdPlugin(),
  //     ],
  // },
  vite: {
    build: {
      chunkSizeWarningLimit: 2e3
    }
  },
  //markdown配置
  markdown: {
    linkify: false,
    lineNumbers: true,
    // highlight: function (str, lang) {
    //     if (lang === 'beanSchema') {
    //         // 将 str 中的双引号变成 \"
    //         str = str.replace(/"/g, '\\"')
    //             .replace(/\n/g, '\\n')
    //         // let v = JSON.parse(str)
    //         // v = JSON.stringify(v).replace(/"/g, '\\"')
    //
    //         // const ret = `<YvBeanSchema content="${str}" />`
    //         // console.log(ret)
    //         // const ret = `<div a="${str}" />`
    //         const ret = 'a'
    //         return ret
    //     }
    // },
    config: (md) => {
      md.use(timeline);
      applyPlugins(md);
    },
    image: {
      lazyLoading: true
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzL3V0aWxzLmpzIiwgImRvY3Mvd21zL2luZGV4LmpzIiwgImRvY3MveXZhbnVpL2luZGV4LmpzIiwgImRvY3MvZG9jL2luZGV4LmpzIiwgImRvY3MvLnZpdGVwcmVzcy90aGVtZS9wbHVnaW5zL0NhbGxvdXQudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL3BsdWdpbnMvQmVhblNjaGVtYUNvZGUudHMiLCAiZG9jcy8udml0ZXByZXNzL3RoZW1lL3BsdWdpbnMvQXNzZXRzQ29udmVydC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvcGx1Z2lucy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHl2YW4tdWktZG9jXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxceXZhbi11aS1kb2NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMveXZhbi11aS1kb2MvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlcHJlc3MnXHJcbmltcG9ydCB3bXMgZnJvbSAnLi4vd21zL2luZGV4J1xyXG5pbXBvcnQgeXZhbnVpIGZyb20gJy4uL3l2YW51aS9pbmRleCdcclxuaW1wb3J0IGRvYyBmcm9tICcuLi9kb2MvaW5kZXgnXHJcbmltcG9ydCB0aW1lbGluZSBmcm9tIFwidml0ZXByZXNzLW1hcmtkb3duLXRpbWVsaW5lXCJcclxuaW1wb3J0IHthcHBseVBsdWdpbnN9IGZyb20gXCIuL3RoZW1lL3BsdWdpbnNcIjtcclxuXHJcbi8vIHJlZmVyIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWcgZm9yIGRldGFpbHNcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L21hcmtkb3duLWl0LWdpdGh1Yi1hbGVydHNcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL21hcmtkb3duLWl0L21hcmtkb3duLWl0LWNvbnRhaW5lclxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgbGFuZzogJ3poLUNOJyxcclxuICAgIHRpdGxlOiAnXHU5NEY2XHU2Q0IzXHU1RjAwXHU1M0QxXHU1RTczXHU1M0YwJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnXHU0RjAxXHU0RTFBXHU3RUE3XHU2NUUwXHU0RUUzXHU3ODAxXHU2ODQ2XHU2N0I2JyxcclxuICAgIGhlYWQ6IFtbJ2xpbmsnLCB7cmVsOiAnaWNvbicsIGhyZWY6ICcvZmF2aWNvbi5pY28nfV1dLFxyXG4gICAgLy8gYXBwZWFyYW5jZTogJ2xpZ2h0JyxcclxuICAgIC8vIHBvc3RSZW5kZXIoY29udGV4dCkge1xyXG4gICAgLy8gICAgIC8vIC4uLlxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdwb3N0UmVuZGVyJywgY29udGV4dClcclxuICAgIC8vIH0sXHJcbiAgICAvLyB0cmFuc2Zvcm1IZWFkKGNvbnRleHQpIHtcclxuICAgIC8vICAgICAvLyAuLi5cclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndHJhbnNmb3JtSGVhZCcsIGNvbnRleHQpXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gdHJhbnNmb3JtUGFnZURhdGEocGFnZURhdGEpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndHJhbnNmb3JtUGFnZURhdGEnLCBwYWdlRGF0YSlcclxuICAgIC8vIH0sXHJcbiAgICAvLyB0cmFuc2Zvcm1IdG1sKGNvZGUsIGlkLCBjb250ZXh0KSB7XHJcbiAgICAvLyAgICAgLy8gLi4uXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3RyYW5zZm9ybUh0bWwnLCBjb2RlLCBpZCwgY29udGV4dClcclxuICAgIC8vIH0sXHJcbiAgICB0aGVtZUNvbmZpZzoge1xyXG5cclxuICAgICAgICBuYXY6IFtcclxuICAgICAgICAgICAgeXZhbnVpLmdldE5hdigpLFxyXG4gICAgICAgICAgICB3bXMuZ2V0TmF2KCksXHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBkb2MuZ2V0TmF2KCksXHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgc2lkZWJhcjoge1xyXG4gICAgICAgICAgICAndGVzdCc6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAndGVzdCcsIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICd0ZXN0JywgbGluazogJy9hdGVzdC8xLm1kJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgICcveXZhbnVpLyc6IHl2YW51aS5nZXRTaWRlYmFyKCksXHJcbiAgICAgICAgICAgIC8vICcveXZhbnVpLyc6IFtcclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0ZXh0OiAnYmFzaWMnLCBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHt0ZXh0OiAnYmFzaWMnLCBsaW5rOiAnL3l2YW51aS9iYXNpYy8nfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBdXHJcbiAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRleHQ6ICdjbXAnLCBjb2xsYXBzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHt0ZXh0OiAnYnV0dG9uJywgbGluazogJy95dmFudWkvY21wL2J1dHRvbid9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7dGV4dDogJ2FnZ3JpZCcsIGxpbms6ICcveXZhbnVpL2NtcC9hZ2dyaWQnfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBdXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIF0sXHJcblxyXG4gICAgICAgICAgICAvLyBcdTVGNTNcdTc1MjhcdTYyMzdcdTRGNERcdTRFOEUgYGNvbmZpZ2AgXHU3NkVFXHU1RjU1XHU2NUY2XHVGRjBDXHU0RjFBXHU2NjNFXHU3OTNBXHU2QjY0XHU0RkE3XHU4RkI5XHU2ODBGXHJcbiAgICAgICAgICAgICcvd21zLyc6IHdtcy5nZXRTaWRlYmFyKCksXHJcbiAgICAgICAgICAgIC8vICcvd21zLyc6IFtcclxuICAgICAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0ZXh0OiAnaW5ib3VuZCcsIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAge3RleHQ6ICdidXR0b24nLCBsaW5rOiAnL3dtcy9pbmJvdW5kLyd9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIF1cclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGV4dDogJ291dGJvdW5kJywgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7dGV4dDogJ2J1dHRvbicsIGxpbms6ICcvd21zL291dGJvdW5kLyd9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIF1cclxuICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGV4dDogJ2lubmVyJywgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7dGV4dDogJ2J1dHRvbicsIGxpbms6ICcvd21zL2lubmVyLyd9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIF1cclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gXVxyXG4gICAgICAgICAgICAuLi5kb2MuZ2V0U2lkZWJhcigpLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vXHU5ODc1XHU4MTFBXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogJ0NvcHlyaWdodCBcdTAwQTkgMjAyNCBcdTU5MDdcdTY4NDhcdTUzRjdcdUZGMUE8YSBocmVmPVwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIj5cdTkxMDJJQ1BcdTU5MDcxODAyOTA2Mlx1NTNGNzwvYT4nLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyXHJcbiAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgemg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU2MjdFXHU1MjMwXHU3NkY4XHU1MTczXHU3RUQzXHU2NzlDJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiAnXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU2NzYxXHU0RUY2JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogJ1x1OTAwOVx1NjJFOScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL1x1NjI0Qlx1NjczQVx1N0FFRlx1NkRGMVx1NkQ0NVx1NkEyMVx1NUYwRlx1NjU4N1x1NUI1N1x1NEZFRVx1NjUzOVxyXG4gICAgICAgIGRhcmtNb2RlU3dpdGNoTGFiZWw6ICdcdTZERjFcdTZENDVcdTZBMjFcdTVGMEYnLFxyXG5cclxuICAgICAgICAvL1x1NEZBN1x1OEZCOVx1NjgwRlx1NjU4N1x1NUI1N1x1NjZGNFx1NjUzOShcdTc5RkJcdTUyQThcdTdBRUYpXHJcbiAgICAgICAgc2lkZWJhck1lbnVMYWJlbDogJ1x1NzZFRVx1NUY1NScsXHJcblxyXG4gICAgICAgIC8vXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4XHU2NTg3XHU1QjU3XHU0RkVFXHU2NTM5KFx1NzlGQlx1NTJBOFx1N0FFRilcclxuICAgICAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4JyxcclxuXHJcbiAgICAgICAgLy9cdTU5MjdcdTdFQjJcdTY2M0VcdTc5M0EyLTNcdTdFQTdcdTY4MDdcdTk4OThcclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIGxldmVsOiBbMSwgM10sXHJcbiAgICAgICAgICAgIGxhYmVsOiAnXHU1RjUzXHU1MjREXHU5ODc1XHU1OTI3XHU3RUIyJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTBBXHU0RTBCXHU5ODc1XHU1NDBEXHJcbiAgICAgICAgZG9jRm9vdGVyOiB7XHJcbiAgICAgICAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxyXG4gICAgICAgICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU5ODc1JyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBidWlsZEVuZChjb25maWcpIHtcclxuICAgIC8vICAgICAvLyAuLi5cclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnYnVpbGRFbmQnLCBjb25maWcpXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHZpdGU6IHtcclxuICAgIC8vICAgICBwbHVnaW5zOiBbXHJcbiAgICAvLyAgICAgICAgIFZpdGVQcmVzc1ByZXByb2Nlc3NNZFBsdWdpbigpLFxyXG4gICAgLy8gICAgIF0sXHJcbiAgICAvLyB9LFxyXG4gICAgdml0ZToge1xyXG4gICAgICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy9tYXJrZG93blx1OTE0RFx1N0Y2RVxyXG4gICAgbWFya2Rvd246IHtcclxuICAgICAgICBsaW5raWZ5OiBmYWxzZSxcclxuICAgICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgICAgICAvLyBoaWdobGlnaHQ6IGZ1bmN0aW9uIChzdHIsIGxhbmcpIHtcclxuICAgICAgICAvLyAgICAgaWYgKGxhbmcgPT09ICdiZWFuU2NoZW1hJykge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gXHU1QzA2IHN0ciBcdTRFMkRcdTc2ODRcdTUzQ0NcdTVGMTVcdTUzRjdcdTUzRDhcdTYyMTAgXFxcIlxyXG4gICAgICAgIC8vICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJylcclxuICAgICAgICAvLyAgICAgICAgIC8vIGxldCB2ID0gSlNPTi5wYXJzZShzdHIpXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB2ID0gSlNPTi5zdHJpbmdpZnkodikucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IHJldCA9IGA8WXZCZWFuU2NoZW1hIGNvbnRlbnQ9XCIke3N0cn1cIiAvPmBcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJldClcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnN0IHJldCA9IGA8ZGl2IGE9XCIke3N0cn1cIiAvPmBcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHJldCA9ICdhJ1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHJldFxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBjb25maWc6IChtZCkgPT4ge1xyXG4gICAgICAgICAgICBtZC51c2UodGltZWxpbmUpO1xyXG4gICAgICAgICAgICBhcHBseVBsdWdpbnMobWQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZToge1xyXG4gICAgICAgICAgICBsYXp5TG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHl2YW4tdWktZG9jXFxcXGRvY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHl2YW4tdWktZG9jXFxcXGRvY3NcXFxcdXRpbHMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL3l2YW4tdWktZG9jL2RvY3MvdXRpbHMuanNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB5YW1sIGZyb20gJ2pzLXlhbWwnXHJcblxyXG4vKipcclxuICogXHU4OUUzXHU2NzkwIG1hcmtEb3duIFx1NjU4N1x1NEVGNlx1RkYwQ1x1NjNEMFx1NTNENlx1NTFGQSBtZXRhIFx1NTE0M1x1NjU3MFx1NjM2RVx1NEZFMVx1NjA2RlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWFya2Rvd25GaWxlKGZpbGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdwYXJzZU1hcmtkb3duRmlsZSAtPiAnICsgZmlsZSlcclxuICAgIC8vIFx1ODNCN1x1NTNENlx1NjU4N1x1NEVGNlx1NTE4NVx1NUJCOVxyXG4gICAgbGV0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZSwgJ3V0Zi04Jyk7XHJcblxyXG4gICAgLy8gXHU2M0QwXHU1M0Q2XHU3QjJDXHU0RTAwXHU0RTJBIC0tLSBcdTgxRjMgLS0tIFx1NzY4NFx1NTE4NVx1NUJCOSwgXHU1RTc2XHU0RTE0XHU3NTI4IHlhbWwgXHU2ODNDXHU1RjBGXHU4OUUzXHU2NzkwXHU0RUQ2XHJcbiAgICBjb25zdCByID0gY29udGVudC5tYXRjaCgvLS0tKFtcXHNcXFNdKj8pLS0tLyk7XHJcbiAgICBpZiAoIXIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdcdTg5RTNcdTY3OTBcdTU5MzFcdThEMjUsXHU2MjdFXHU0RTBEXHU1MjMwXHU2NTg3XHU2ODYzXHU1OTM0JywgZmlsZSwgY29udGVudClcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSB5YW1sLmxvYWQoclsxXSlcclxuXHJcbiAgICAvLyBcdTVDMDZcdTU2RkVcdTcyNDdcdTY4M0NcdTVGMEZcdTUwNUFcdThGNkNcdTYzNjJcclxuICAgIC8vICFbW1Bhc3RlZCBpbWFnZSAyMDI0MDMxNTE1MjQyMC5wbmddXVxyXG4gICAgLy8gXHU4RjZDXHU2MzYyXHU0RTNBXHJcbiAgICAvLyAhW10oLi9fYXNzZXRzL1Bhc3RlZCUyMGltYWdlJTIwMjAyNDAzMTUxNTI0MjAucG5nKVxyXG4gICAgLy8gY29udGVudC5tYXRjaCgvIVxcW1xcWyhbXFxzXFxTXSo/KVxcXVxcXS9nKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgaW1nTmFtZSA9IGl0ZW0uc3Vic3RyaW5nKDQsIGl0ZW0ubGVuZ3RoIC0gMik7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmIChpbWdOYW1lLmluZGV4T2YoJy8nKSA+PSAwKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIFx1NTZGRVx1NzI0N1x1NEUyRFx1NTMwNVx1NTQyQiAvIFx1N0IyNlx1NTNGNywgXHU4RjZDXHU2MzYyXHU0RTNBICFbXShcdTU2RkVcdTcyNDdcdTU3MzBcdTU3NDApIFx1NjgzQ1x1NUYwRlxyXG4gICAgLy8gICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGl0ZW0sIGAhW10oJHtpbWdOYW1lfSlgKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gXHU4RjZDXHU2MzYyXHU0RTNBIFVSTEVuY29kZSBcdTY4M0NcdTVGMEZcclxuICAgIC8vICAgICBjb25zdCBpbWdOYW1lTmV3ID0gaW1nTmFtZS5yZXBsYWNlKC8gL2csICclMjAnKTtcclxuICAgIC8vICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGl0ZW0sIGAhW10oX2Fzc2V0cy8ke2ltZ05hbWVOZXd9KWApO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICogXHU2REYxXHU1RUE2XHU2MjZCXHU2M0NGXHU2NTg3XHU0RUY2XHU1OTM5LFx1ODNCN1x1NTNENlx1NjI0MFx1NjcwOSBtZCBcdTY1ODdcdTRFRjZcdTc2ODRcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcclxuICogQHBhcmFtIHJvb3REaXIgXHU2ODM5XHU3NkVFXHU1RjU1LCBcdTZCRDRcdTU5ODIgQzpcXFByb2plY3RzXFx5dmFuLXVpLWRvY1xcZG9jc1xcd21zXHJcbiAqIEBwYXJhbSByZWxEaXIgXHU2REYxXHU1RUE2XHU5MDREXHU1Mzg2XHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0LCBcdTZCRDRcdTU5ODIgJy9hZ3YnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcFRyYXZEaXIobGlua1ByZWZpeCwgcm9vdERpciwgcmVsRGlyKSB7XHJcbiAgICBjb25zdCBhYnNEaXJQYXRoID0gcGF0aC5qb2luKHJvb3REaXIsIHJlbERpcilcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzY2FuRGlyJywgZGlyKVxyXG4gICAgY29uc3QgcmVzdWx0ID0ge31cclxuXHJcbiAgICAvLyBcdTY3RTVcdTYyN0VcdTY3MDlcdTZDQTFcdTY3MDkgMDFfaW5kZXgubWRcclxuICAgIGNvbnN0IGFic0luZGV4RmlsZSA9IHBhdGguam9pbihhYnNEaXJQYXRoLCAnLzAxX2luZGV4Lm1kJylcclxuICAgIGlmIChmcy5leGlzdHNTeW5jKGFic0luZGV4RmlsZSkpIHtcclxuICAgICAgICBjb25zdCBtZXRhID0gcGFyc2VNYXJrZG93bkZpbGUoYWJzSW5kZXhGaWxlKTtcclxuICAgICAgICBpZiAobWV0YSkge1xyXG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IG1ldGEudGl0bGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSByZWxEaXJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0Lml0ZW1zID0gW1xyXG4gICAgICAgICAgICB7dGV4dDogJ1x1NEVDQlx1N0VDRCcsIGxpbms6IGxpbmtQcmVmaXggKyByZWxEaXIgKyAnLzAxX2luZGV4J31cclxuICAgICAgICBdXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3B1c2gnLCByZXN1bHQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGZzLnJlYWRkaXJTeW5jKGFic0RpclBhdGgpLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oYWJzRGlyUGF0aCwgZmlsZSk7XHJcblxyXG4gICAgICAgIGlmIChmcy5sc3RhdFN5bmMoZnVsbFBhdGgpLmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViSXRlbSA9IGRlZXBUcmF2RGlyKGxpbmtQcmVmaXgsIHJvb3REaXIsIFwiL1wiICsgZmlsZSk7XHJcbiAgICAgICAgICAgIGlmIChzdWJJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuaXRlbXMucHVzaChzdWJJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGZ1bGxQYXRoLmVuZHNXaXRoKCcubWQnKSAmJiAoJycgKyBmaWxlKSAhPT0gJzAxX2luZGV4Lm1kJykge1xyXG4gICAgICAgICAgICAvLyBcdThGRDhcdTY3MDlcdTUxNzZcdTRFRDZcdTY1ODdcdTRFRjZcdUZGMENcdTU4OUVcdTUyQTBcdTUyMzAgaXRlbXMgXHU0RTJEXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7dGV4dDogJycsIGxpbms6IGxpbmtQcmVmaXggKyByZWxEaXIgKyAnLycgKyBmaWxlfVxyXG5cclxuICAgICAgICAgICAgLy8gXHU1M0JCXHU2Mzg5XHU1NDBFXHU3RjAwXHJcbiAgICAgICAgICAgIGl0ZW0ubGluayA9IGl0ZW0ubGluay5zdWJzdHJpbmcoMCwgaXRlbS5saW5rLmxlbmd0aCAtIDMpXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBwYXJzZU1hcmtkb3duRmlsZShmdWxsUGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnRleHQgPSBtZXRhLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCgnJyArIG1ldGEubmF2SWdub3JlKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NUI1MFx1NjU4N1x1NEVGNlx1NTkzOVx1RkYwQ1x1NUMzMVx1NEUwRFx1OTcwMFx1ODk4MSBpdGVtc1xyXG4gICAgaWYgKHJlc3VsdC5pdGVtcy5sZW5ndGggPCAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHJlc3VsdC5pdGVtc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFx1NjI4QVx1NjU4N1x1NEVGNlx1NjM5Mlx1NTcyOFx1NTI0RFx1OTc2Mlx1RkYwQ1x1NjcwOVx1NUI1MFx1OTg3OVx1NzZFRVx1NzY4NFx1NjM5Mlx1NTcyOFx1NTQwRVx1OTc2MlxyXG4gICAgcmVzdWx0Lml0ZW1zLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS5pdGVtcyAmJiAhYi5pdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhLml0ZW1zICYmIGIuaXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx5dmFuLXVpLWRvY1xcXFxkb2NzXFxcXHdtc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxceXZhbi11aS1kb2NcXFxcZG9jc1xcXFx3bXNcXFxcaW5kZXguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3RzL3l2YW4tdWktZG9jL2RvY3Mvd21zL2luZGV4LmpzXCI7aW1wb3J0IHtkZWVwVHJhdkRpcn0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG4vLyBjb25zb2xlLmxvZygnZGVlcFRyYXZNYXJrZG93bkZpbGUnLCBfX2Rpcm5hbWUpO1xyXG5jb25zdCByZXN1bHQgPSBkZWVwVHJhdkRpcignL3dtcycsIF9fZGlybmFtZSwgJycpXHJcbi8vIGNvbnNvbGUubG9nKCdSZXN1bHQ6ICcsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXROYXYoKSB7XHJcbiAgICAgICAgLy8gXHU1M0VBXHU1QzA2XHU0RTAwXHU3RUE3XHU3NkVFXHU1RjU1XHU2NTNFXHU1MjMwXHU1QkZDXHU4MjJBXHU2ODBGXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHt0ZXh0OiAnXHU0RUNCXHU3RUNEJywgbGluazogJy93bXMvMDFfaW5kZXgnfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgcmVzdWx0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogaXRlbS5pdGVtc1swXS5saW5rXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogJ1dNU1x1N0NGQlx1N0VERicsXHJcbiAgICAgICAgICAgIGl0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RkE3XHU4RkI5XHU2ODBGXHJcbiAgICAgKiBAcmV0dXJuIHtbe2xpbms6IHN0cmluZywgdGV4dDogc3RyaW5nfV19XHJcbiAgICAgKi9cclxuICAgIGdldFNpZGViYXIoKSB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0Lml0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmV0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpdGVtLnRleHQgPT09ICdcdTY1NzBcdTYzNkVcdTVFOTNcdThCQkVcdThCQTEnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpdGVtLml0ZW1zLnNwbGljZSgxLCBpdGVtLml0ZW1zLnNpemUgLSAxKVxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gcmV0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChpdGVtLnRleHQgPT09ICdcdTVCNTdcdTUxNzhcdThCQkVcdThCQTEnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpdGVtLml0ZW1zLnNwbGljZSgxLCBpdGVtLml0ZW1zLnNpemUgLSAxKVxyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHtcclxuLy8gICAgIHRleHQ6IFwiV01TXHU3Q0ZCXHU3RURGXCIsXHJcbi8vICAgICBpdGVtczogW1xyXG4vLyAgICAgICAgIHt0ZXh0OiAnXHU0RUNCXHU3RUNEJywgbGluazogJy93bXMvaW50cm9kdWNlJ30sXHJcbi8vICAgICAgICAge3RleHQ6ICdcdTU3RkFcdTc4NDBcdThENDRcdTY1OTknLCBsaW5rOiAnL3dtcy9iYXMvJ30sXHJcbi8vICAgICAgICAge3RleHQ6ICdcdTUxNjVcdTVFOTMnLCBsaW5rOiAnL3dtcy9pbmJvdW5kLyd9LFxyXG4vLyAgICAgICAgIHt0ZXh0OiAnXHU1MUZBXHU1RTkzJywgbGluazogJy93bXMvb3V0Ym91bmQvJ30sXHJcbi8vICAgICAgICAge3RleHQ6ICdcdTVFOTNcdTUxODVcdTRGNUNcdTRFMUEnLCBsaW5rOiAnL3dtcy9pbm5lci8nfSxcclxuLy8gICAgICAgICB7dGV4dDogJ1x1NTkxQVx1N0E3Rlx1NUU5MycsIGxpbms6ICcvd21zL3NodXR0bGUvJ30sXHJcbi8vICAgICAgICAge3RleHQ6ICdcdTdBQ0JcdTRGNTNcdTVFOTMnLCBsaW5rOiAnL3dtcy9waWxlci8nfSxcclxuLy8gICAgICAgICB7dGV4dDogJ0FHVicsIGxpbms6ICcvd21zL2Fndi8nfSxcclxuLy8gICAgIF0sXHJcbi8vIH0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHl2YW4tdWktZG9jXFxcXGRvY3NcXFxceXZhbnVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx5dmFuLXVpLWRvY1xcXFxkb2NzXFxcXHl2YW51aVxcXFxpbmRleC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMveXZhbi11aS1kb2MvZG9jcy95dmFudWkvaW5kZXguanNcIjtpbXBvcnQge2RlZXBUcmF2RGlyfSBmcm9tICcuLi91dGlscydcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdkZWVwVHJhdk1hcmtkb3duRmlsZScsIF9fZGlybmFtZSk7XHJcbmNvbnN0IHJlc3VsdCA9IGRlZXBUcmF2RGlyKCcveXZhbnVpJywgX19kaXJuYW1lLCAnJylcclxuLy8gY29uc29sZS5sb2coJ1Jlc3VsdDogJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGdldE5hdigpIHtcclxuICAgICAgICAvLyBcdTUzRUFcdTVDMDZcdTRFMDBcdTdFQTdcdTc2RUVcdTVGNTVcdTY1M0VcdTUyMzBcdTVCRkNcdTgyMkFcdTY4MEZcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge3RleHQ6ICdcdTRFQ0JcdTdFQ0QnLCBsaW5rOiAnL3l2YW51aS8wMV9pbmRleCd9LFxyXG4gICAgICAgIF1cclxuICAgICAgICByZXN1bHQuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBpdGVtLml0ZW1zWzBdLmxpbmtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU1RTczXHU1M0YwJyxcclxuICAgICAgICAgICAgaXRlbXNcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRGQTdcdThGQjlcdTY4MEZcclxuICAgICAqIEByZXR1cm4ge1t7bGluazogc3RyaW5nLCB0ZXh0OiBzdHJpbmd9XX1cclxuICAgICAqL1xyXG4gICAgZ2V0U2lkZWJhcigpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0Lml0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHtcclxuLy8gICAgIHRleHQ6IFwiXHU1N0ZBXHU3ODQwXHU1RTczXHU1M0YwXCIsXHJcbi8vICAgICBpdGVtczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgICAgdGV4dDogJ1x1NEVDQlx1N0VDRCcsXHJcbi8vICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbi8vICAgICAgICAgICAgICAgICB7dGV4dDogJ1x1NTdGQVx1NjcyQ1x1NEVDQlx1N0VDRCcsIGxpbms6ICcveXZhbnVpL2Jhc2ljLyd9LFxyXG4vLyAgICAgICAgICAgICBdXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICAgIHRleHQ6ICdcdUQ4M0NcdURGNDlcdTYzMDdcdTUzNTcnLFxyXG4vLyAgICAgICAgICAgICBpdGVtczogW1xyXG4vLyAgICAgICAgICAgICAgICAge3RleHQ6ICdcdTU3RkFcdTc4NDAnLCBsaW5rOiAnL3l2YW51aS9iYXNpYy8nfSxcclxuLy8gICAgICAgICAgICAgICAgIHt0ZXh0OiAnXHU1MjlGXHU4MEZEXHU4QkJFXHU4QkExJywgbGluazogJy95dmFudWkvcGFnZS8nfSxcclxuLy8gICAgICAgICAgICAgICAgIHt0ZXh0OiAnXHU2NTcwXHU2MzZFXHU1RTkzJywgbGluazogJy95dmFudWkvZGF0YWJhc2UvJ30sXHJcbi8vICAgICAgICAgICAgICAgICB7dGV4dDogJ1x1NUI1N1x1NTE3OCcsIGxpbms6ICcveXZhbnVpL2RpY3QvJ30sXHJcbi8vICAgICAgICAgICAgICAgICB7dGV4dDogJ1x1NjU3MFx1NjM2RVx1N0E5N1x1NTNFMycsIGxpbms6ICcveXZhbnVpL3dpZGdldC8nfSxcclxuLy8gICAgICAgICAgICAgICAgIHt0ZXh0OiAnXHU1REU1XHU1MTc3JywgbGluazogJy95dmFudWkvdG9vbC8nfSxcclxuLy8gICAgICAgICAgICAgXVxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICB0ZXh0OiAnXHU4RkRCXHU5NjM2JyxcclxuLy8gICAgICAgICAgICAgaXRlbXM6IFtcclxuLy8gICAgICAgICAgICAgICAgIHt0ZXh0OiAnXHU4MUVBXHU1QjlBXHU0RTQ5XHU3RUM0XHU0RUY2JywgbGluazogJy95dmFudWkvY3JlYXRlX2NtcC8nfSxcclxuLy8gICAgICAgICAgICAgICAgIHt0ZXh0OiAnXHU4OUM0XHU1MjE5JywgbGluazogJy95dmFudWkvcnVsZS8nfSxcclxuLy8gICAgICAgICAgICAgICAgIHt0ZXh0OiAnXHU2RDQxXHU3QTBCJywgbGluazogJy95dmFudWkvYnBtbi8nfSxcclxuLy8gICAgICAgICAgICAgICAgIHt0ZXh0OiAnXHU2M0E1XHU1M0UzJywgbGluazogJy95dmFudWkvY29ubmVjdG9yLyd9LFxyXG4vLyAgICAgICAgICAgICBdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgXSxcclxuLy8gfSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxceXZhbi11aS1kb2NcXFxcZG9jc1xcXFxkb2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHl2YW4tdWktZG9jXFxcXGRvY3NcXFxcZG9jXFxcXGluZGV4LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy95dmFuLXVpLWRvYy9kb2NzL2RvYy9pbmRleC5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHtkZWVwVHJhdkRpciwgcGFyc2VNYXJrZG93bkZpbGV9IGZyb20gJy4uL3V0aWxzJ1xyXG5cclxuZnVuY3Rpb24gZGVlcFRyYXYyKGxpbmtQcmVmaXgsIHJvb3REaXIsIHJlbERpcikge1xyXG4gICAgY29uc3QgYWJzRGlyUGF0aCA9IHBhdGguam9pbihyb290RGlyLCByZWxEaXIpXHJcbiAgICBjb25zb2xlLmxvZygnc2NhbkRpcicsIGFic0RpclBhdGgpXHJcbiAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjgzOVx1NzZFRVx1NUY1NTEnLFxyXG4gICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgfVxyXG4gICAgcmVzdWx0Lml0ZW1zID0gW11cclxuXHJcbiAgICBmcy5yZWFkZGlyU3luYyhhYnNEaXJQYXRoKS5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKGFic0RpclBhdGgsIGZpbGUpO1xyXG5cclxuICAgICAgICBpZiAoZnMubHN0YXRTeW5jKGZ1bGxQYXRoKS5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ykl0ZW0gPSBkZWVwVHJhdjIobGlua1ByZWZpeCwgcm9vdERpciwgcmVsRGlyICsgXCIvXCIgKyBmaWxlKTtcclxuICAgICAgICAgICAgc3ViSXRlbS50ZXh0ID0gZmlsZVxyXG4gICAgICAgICAgICBpZiAoc3ViSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lml0ZW1zLnB1c2goc3ViSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChmdWxsUGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHt0ZXh0OiAnJywgbGluazogbGlua1ByZWZpeCArIHJlbERpciArICcvJyArIGZpbGV9XHJcblxyXG4gICAgICAgICAgICAvLyBcdTUzQkJcdTYzODlcdTU0MEVcdTdGMDBcclxuICAgICAgICAgICAgaXRlbS5saW5rID0gaXRlbS5saW5rLnN1YnN0cmluZygwLCBpdGVtLmxpbmsubGVuZ3RoIC0gMylcclxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IHBhcnNlTWFya2Rvd25GaWxlKGZ1bGxQYXRoKTtcclxuICAgICAgICAgICAgaWYgKG1ldGEpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udGV4dCA9IG1ldGEudGl0bGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5jb25zdCBzaGFyZVJlc3VsdCA9IGRlZXBUcmF2MignL2RvYycsIF9fZGlybmFtZSwgJy9zaGFyZScpXHJcbnNoYXJlUmVzdWx0LnRleHQgPSAnXHU1MjA2XHU0RUFCJ1xyXG5jb25zdCB0ZWNoUmVzdWx0ID0gZGVlcFRyYXYyKCcvZG9jJywgX19kaXJuYW1lLCAnL3RlY2gnKVxyXG50ZWNoUmVzdWx0LnRleHQgPSAnXHU2MjgwXHU2NzJGJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0TmF2KCkge1xyXG4gICAgICAgIC8vIFx1NTNFQVx1NUMwNlx1NEUwMFx1N0VBN1x1NzZFRVx1NUY1NVx1NjUzRVx1NTIzMFx1NUJGQ1x1ODIyQVx1NjgwRlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTk2OEZcdTdCMTQnLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1MjA2XHU0RUFCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXHU2MjdFXHU1MjMwIHNoYXJlUmVzdWx0IFx1NzY4NCBpdGVtcyBcdTRFMkQgdGV4dFx1NTAzQ1x1NjcwMFx1NTkyN1x1NzY4NDVcdTY3NjFcdThCQjBcdTVGNTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2hhcmVSZXN1bHQuaXRlbXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEudGV4dCA+IGIudGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5zbGljZSgwLCA1KVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyB0ZWNoUmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgLy8gc2hhcmVSZXN1bHQsXHJcbiAgICAgICAgICAgICAgICB7dGV4dDogXCJcdTYyODBcdTY3MkZcIiwgbGluazogJy9kb2MvdGVjaCd9LFxyXG4gICAgICAgICAgICAgICAge3RleHQ6IFwiXHU1MTczXHU0RThFXCIsIGxpbms6ICcvYXV0aG9yJ30sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RkE3XHU4RkI5XHU2ODBGXHJcbiAgICAgKi9cclxuICAgIGdldFNpZGViYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJy9kb2MvdGVjaCc6IFtcclxuICAgICAgICAgICAgICAgIC8vIHt0ZXh0OiBcIlx1NjI4MFx1NjcyRjFcIn0sXHJcbiAgICAgICAgICAgICAgICAvLyB7dGV4dDogXCJcdTYyODBcdTY3MkYyXCJ9LFxyXG4gICAgICAgICAgICAgICAgLy8ge3RleHQ6IFwiXHU2MjgwXHU2NzJGM1wifSxcclxuICAgICAgICAgICAgICAgIC4uLnRlY2hSZXN1bHQuaXRlbXMsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICcvZG9jL3NoYXJlJzogW1xyXG4gICAgICAgICAgICAgICAgLy8ge3RleHQ6IFwiXHU1MjA2XHU0RUFCMVwifSxcclxuICAgICAgICAgICAgICAgIC8vIHt0ZXh0OiBcIlx1NTIwNlx1NEVBQjJcIn0sXHJcbiAgICAgICAgICAgICAgICAvLyB7dGV4dDogXCJcdTUyMDZcdTRFQUIzXCJ9LFxyXG4gICAgICAgICAgICAgICAgLi4uc2hhcmVSZXN1bHQuaXRlbXMsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB7XHJcbi8vICAgICB0ZXh0OiBcIldNU1x1N0NGQlx1N0VERlwiLFxyXG4vLyAgICAgaXRlbXM6IFtcclxuLy8gICAgICAgICB7dGV4dDogJ1x1NEVDQlx1N0VDRCcsIGxpbms6ICcvd21zL2ludHJvZHVjZSd9LFxyXG4vLyAgICAgICAgIHt0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU4RDQ0XHU2NTk5JywgbGluazogJy93bXMvYmFzLyd9LFxyXG4vLyAgICAgICAgIHt0ZXh0OiAnXHU1MTY1XHU1RTkzJywgbGluazogJy93bXMvaW5ib3VuZC8nfSxcclxuLy8gICAgICAgICB7dGV4dDogJ1x1NTFGQVx1NUU5MycsIGxpbms6ICcvd21zL291dGJvdW5kLyd9LFxyXG4vLyAgICAgICAgIHt0ZXh0OiAnXHU1RTkzXHU1MTg1XHU0RjVDXHU0RTFBJywgbGluazogJy93bXMvaW5uZXIvJ30sXHJcbi8vICAgICAgICAge3RleHQ6ICdcdTU5MUFcdTdBN0ZcdTVFOTMnLCBsaW5rOiAnL3dtcy9zaHV0dGxlLyd9LFxyXG4vLyAgICAgICAgIHt0ZXh0OiAnXHU3QUNCXHU0RjUzXHU1RTkzJywgbGluazogJy93bXMvcGlsZXIvJ30sXHJcbi8vICAgICAgICAge3RleHQ6ICdBR1YnLCBsaW5rOiAnL3dtcy9hZ3YvJ30sXHJcbi8vICAgICBdLFxyXG4vLyB9IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx5dmFuLXVpLWRvY1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxceXZhbi11aS1kb2NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHBsdWdpbnNcXFxcQ2FsbG91dC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMveXZhbi11aS1kb2MvZG9jcy8udml0ZXByZXNzL3RoZW1lL3BsdWdpbnMvQ2FsbG91dC50c1wiOy8qKlxyXG4gKiBcdTg5RTNcdTY3OTAgT2JzaWRpYW4gXHU3Njg0IENhbGxPdXQgXHU4QkVEXHU2Q0Q1XHJcbiAqID4gWyFDYWxsT3V0VHlwZV0gQ2FsbE91dFRpdGxlXHJcbiAqID4gQ2FsbE91dENvbnRlbnQxXHJcbiAqID4gQ2FsbE91dENvbnRlbnQyXHJcbiAqID4gQ2FsbE91dENvbnRlbnQzXHJcbiAqXHJcbiAqIFx1ODlFM1x1Njc5MFx1ODFGM1x1NjIxMFxyXG4gKlxyXG4gKiA8WXZDYWxsT3V0IHR5cGU9XCJDYWxsT3V0VHlwZVwiIHRpdGxlPVwiQ2FsbE91dFRpdGxlXCI+XHJcbiAqICAgICA8c2xvdCAvPlxyXG4gKiA8L1l2Q2FsbE91dD5cclxuICovXHJcbmZ1bmN0aW9uIENhbGxPdXRGbihtZCkge1xyXG4gICAgY29uc3QgUkUgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcIShcXFxcdyspXFxcXF0oW15cXFxcblxcXFxyXSopYCwgJ2knKVxyXG5cclxuICAgIG1kLmNvcmUucnVsZXIuYWZ0ZXIoJ2Jsb2NrJywgJ2dpdGh1Yi1hbGVydHMnLCAoc3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSBzdGF0ZS50b2tlbnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICdibG9ja3F1b3RlX29wZW4nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcGVuID0gdG9rZW5zW2ldXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRva2Vuc1tpXT8udHlwZSAhPT0gJ2Jsb2NrcXVvdGVfY2xvc2UnICYmIGkgPD0gdG9rZW5zLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICBpICs9IDFcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlID0gdG9rZW5zW2ldXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IGlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0Q29udGVudCA9IHRva2Vucy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCArIDEpLmZpbmQodG9rZW4gPT4gdG9rZW4udHlwZSA9PT0gJ2lubGluZScpXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0Q29udGVudClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBmaXJzdENvbnRlbnQuY29udGVudC5tYXRjaChSRSlcclxuICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IG1hdGNoWzJdLnRyaW0oKSB8fCBjYXBpdGFsaXplKHR5cGUpXHJcbiAgICAgICAgICAgICAgICBmaXJzdENvbnRlbnQuY29udGVudCA9IGZpcnN0Q29udGVudC5jb250ZW50LnNsaWNlKG1hdGNoWzBdLmxlbmd0aCkudHJpbVN0YXJ0KClcclxuICAgICAgICAgICAgICAgIG9wZW4udHlwZSA9ICdhbGVydF9vcGVuJ1xyXG4gICAgICAgICAgICAgICAgb3Blbi50YWcgPSAnWXZDYWxsT3V0J1xyXG4gICAgICAgICAgICAgICAgb3Blbi5tZXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbG9zZS50eXBlID0gJ2FsZXJ0X2Nsb3NlJ1xyXG4gICAgICAgICAgICAgICAgY2xvc2UudGFnID0gJ1l2Q2FsbE91dCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBtZC5yZW5kZXJlci5ydWxlcy5hbGVydF9vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4KSB7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlLCB0eXBlfSA9IHRva2Vuc1tpZHhdLm1ldGFcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWxlcnRPcGVuJywgdGl0bGUsIHR5cGUpXHJcbiAgICAgICAgcmV0dXJuIGA8WXZDYWxsT3V0IHR5cGU9XCIke3R5cGV9XCIgdGl0bGU9XCIke3RpdGxlfVwiPmBcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxsT3V0Rm4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHl2YW4tdWktZG9jXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx5dmFuLXVpLWRvY1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxccGx1Z2luc1xcXFxCZWFuU2NoZW1hQ29kZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMveXZhbi11aS1kb2MvZG9jcy8udml0ZXByZXNzL3RoZW1lL3BsdWdpbnMvQmVhblNjaGVtYUNvZGUudHNcIjsvKipcclxuICogXHU4OUUzXHU2NzkwIE9ic2lkaWFuIFx1NzY4NCBDYWxsT3V0IFx1OEJFRFx1NkNENVxyXG4gKiA+IFshQ2FsbE91dFR5cGVdIENhbGxPdXRUaXRsZVxyXG4gKiA+IENhbGxPdXRDb250ZW50MVxyXG4gKiA+IENhbGxPdXRDb250ZW50MlxyXG4gKiA+IENhbGxPdXRDb250ZW50M1xyXG4gKlxyXG4gKiBcdTg5RTNcdTY3OTBcdTgxRjNcdTYyMTBcclxuICpcclxuICogPFl2Q2FsbE91dCB0eXBlPVwiQ2FsbE91dFR5cGVcIiB0aXRsZT1cIkNhbGxPdXRUaXRsZVwiPlxyXG4gKiAgICAgPHNsb3QgLz5cclxuICogPC9ZdkNhbGxPdXQ+XHJcbiAqL1xyXG5mdW5jdGlvbiBCZWFuU2NoZW1hQ29kZShtZCkge1xyXG4gICAgY29uc3QgZmVuY2VEZWZhdWx0ID0gbWQucmVuZGVyZXIucnVsZXMuZmVuY2VcclxuICAgIG1kLnJlbmRlcmVyLnJ1bGVzLmZlbmNlID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBjb25zdCBbdG9rZW5zLCBpZHhdID0gYXJnc1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2lkeF1cclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmluZm8gPT09ICdiZWFuU2NoZW1hJykge1xyXG4gICAgICAgICAgICBjb25zdCByYXdDb2RlID0gdG9rZW4uY29udGVudFxyXG4gICAgICAgICAgICAvLyBcdTVDMDZcdTUzQ0NcdTVGMTVcdTUzRjdcdTUzRDhcdTYyMTAgJnF1b3Q7XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSByYXdDb2RlLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxyXG4gICAgICAgICAgICByZXR1cm4gYDxZdkJlYW5TY2hlbWEgY29udGVudD1cIiR7c3RyfVwiIC8+YFxyXG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4uaW5mbyA9PT0gJ2RhdGF2aWV3Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9IGVsc2UgaWYgKHRva2VuLmluZm8gPT09ICdicG1uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9IGVsc2UgaWYgKHRva2VuLmluZm8gPT09ICdpZ25vcmUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmVuY2VEZWZhdWx0KC4uLmFyZ3MpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlYW5TY2hlbWFDb2RlIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFx5dmFuLXVpLWRvY1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxceXZhbi11aS1kb2NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHBsdWdpbnNcXFxcQXNzZXRzQ29udmVydC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMveXZhbi11aS1kb2MvZG9jcy8udml0ZXByZXNzL3RoZW1lL3BsdWdpbnMvQXNzZXRzQ29udmVydC50c1wiO2Z1bmN0aW9uIEFzc2V0c0NvbnZlcnQobWQpIHtcclxuICAgIGxldCBkZWZhdWx0UmVuZGVyID0gbWQucmVuZGVyZXIucnVsZXMudGV4dDtcclxuICAgIGxldCBpbkxpbmVSZW5kZXIgPSBtZC5yZW5kZXJlci5ydWxlcy5odG1sX2lubGluZTtcclxuXHJcbiAgICBtZC5yZW5kZXJlci5ydWxlcy50ZXh0ID0gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpZHhdO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uY29udGVudC5pbmRleE9mKCchW1snKSA+PSAwICYmIHRva2VuLmNvbnRlbnQuaW5kZXhPZignXV0nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIG9ic2lkaWFuIFx1NTZGRVx1NzI0N1x1NjgzQ1x1NUYwRlx1OEY2Q1x1NjM2MlxyXG4gICAgICAgICAgICAvLyAhW1tQYXN0ZWQgaW1hZ2UgMjAyNDAzMTUxNTI0MjAucG5nXV1cclxuICAgICAgICAgICAgLy8gXHU4RjZDXHU2MzYyXHU0RTNBXHJcbiAgICAgICAgICAgIC8vICFbXSguL19hc3NldHMvUGFzdGVkJTIwaW1hZ2UlMjAyMDI0MDMxNTE1MjQyMC5wbmcpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdG9rZW4uY29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgaW1nTmFtZSA9IGl0ZW0uc3Vic3RyaW5nKDMsIGl0ZW0ubGVuZ3RoIC0gMilcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICclMjAnKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1nTmFtZSA9JywgaW1nTmFtZSlcclxuXHJcbiAgICAgICAgICAgIHRva2Vuc1tpZHhdLmNvbnRlbnQgPSBgPGltZyBzcmM9XCIuL19hc3NldHMvJHtpbWdOYW1lfVwiIGFsdD1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+YFxyXG4gICAgICAgICAgICByZXR1cm4gaW5MaW5lUmVuZGVyKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRva2VuLmNvbnRlbnQuaW5kZXhPZignW1snKSA+PSAwICYmIHRva2VuLmNvbnRlbnQuaW5kZXhPZignXV0nKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIG9ic2lkaWFuIFx1NTkxNlx1OTRGRVx1OEY2Q1x1NjM2MlxyXG4gICAgICAgICAgICAvLyBbW3l2YW51aS8wMV9iYXNlLzAyX2JlYW5fc2NoZW1hXV1cclxuICAgICAgICAgICAgLy8gXHU4RjZDXHU2MzYyXHU0RTNBXHJcbiAgICAgICAgICAgIC8vIFswMl9iZWFuX3NjaGVtYV0oL3l2YW51aS8wMV9iYXNlLzAyX2JlYW5fc2NoZW1hKVxyXG4gICAgICAgICAgICAvLyA8YSBocmVmPVwiL3l2YW51aS8wMV9iYXNlLzAyX2JlYW5fc2NoZW1hLmh0bWxcIj4zMzM8L2E+XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdG9rZW4uY29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgbGluayA9IGl0ZW0uc3Vic3RyaW5nKDIsIGl0ZW0ubGVuZ3RoIC0gMilcclxuICAgICAgICAgICAgY29uc3QgbGlua0FyciA9IGxpbmsuc3BsaXQoJy8nKVxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gbGlua0FycltsaW5rQXJyLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIHRva2Vuc1tpZHhdLmNvbnRlbnQgPSBgPGEgaHJlZj1cIi8ke2xpbmt9Lmh0bWxcIj4ke3RleHR9PC9hPmBcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpbkxpbmVSZW5kZXIodG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFJlbmRlcih0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52LCBzZWxmKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRzQ29udmVydCIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUHJvamVjdHNcXFxceXZhbi11aS1kb2NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHRoZW1lXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXHl2YW4tdWktZG9jXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxwbHVnaW5zXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy95dmFuLXVpLWRvYy9kb2NzLy52aXRlcHJlc3MvdGhlbWUvcGx1Z2lucy9pbmRleC50c1wiO2ltcG9ydCBDYWxsb3V0IGZyb20gXCIuL0NhbGxvdXRcIjtcclxuaW1wb3J0IEJlYW5TY2hlbWFDb2RlIGZyb20gXCIuL0JlYW5TY2hlbWFDb2RlXCI7XHJcbmltcG9ydCBBc3NldHNDb252ZXJ0IGZyb20gXCIuL0Fzc2V0c0NvbnZlcnRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBseVBsdWdpbnMobWQ6IGFueSkge1xyXG4gICAgbWQudXNlKENhbGxvdXQpO1xyXG4gICAgbWQudXNlKEJlYW5TY2hlbWFDb2RlKTtcclxuICAgIG1kLnVzZShBc3NldHNDb252ZXJ0KTtcclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVMsU0FBUSxvQkFBbUI7OztBQ0FoRSxPQUFPLFFBQVE7QUFDalIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sVUFBVTtBQUtWLFNBQVMsa0JBQWtCLE1BQU07QUFHcEMsTUFBSSxVQUFVLEdBQUcsYUFBYSxNQUFNLE9BQU87QUFHM0MsUUFBTSxJQUFJLFFBQVEsTUFBTSxrQkFBa0I7QUFDMUMsTUFBSSxDQUFDLEdBQUc7QUFDSixZQUFRLE1BQU0saUVBQWUsTUFBTSxPQUFPO0FBQzFDO0FBQUEsRUFDSjtBQUNBLFFBQU1BLFVBQVMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBb0I3QixTQUFPQTtBQUNYO0FBT08sU0FB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QUFBLGNBQ0o7QUFBQSxZQUNKO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBO0FBQUEsSUFHQSxxQkFBcUI7QUFBQTtBQUFBLElBR3JCLGtCQUFrQjtBQUFBO0FBQUEsSUFHbEIsa0JBQWtCO0FBQUE7QUFBQSxJQUdsQixTQUFTO0FBQUEsTUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDWDtBQUFBO0FBQUEsSUFHQSxXQUFXO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDVjtBQUFBLEVBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVlBLE1BQU07QUFBQSxJQUNGLE9BQU87QUFBQSxNQUNILHVCQUF1QjtBQUFBLElBQzNCO0FBQUEsRUFDSjtBQUFBO0FBQUEsRUFHQSxVQUFVO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFnQmIsUUFBUSxDQUFDLE9BQU87QUFDWixTQUFHLElBQUksUUFBUTtBQUNmLG1CQUFhLEVBQUU7QUFBQSxJQUNuQjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsYUFBYTtBQUFBLElBQ2pCO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbInJlc3VsdCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJyZXN1bHQiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicGF0aCIsICJmcyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJwYXRoIiwgInJlc3VsdCIsICJmcyIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSJdCn0K
