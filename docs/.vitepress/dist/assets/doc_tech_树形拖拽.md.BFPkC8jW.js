import{_ as a,c as p,o as t,a6 as s}from"./chunks/framework.DZm5WilM.js";const e="/assets/Pasted%20image%2020240331234742.VKL14I7L.png",i="/assets/Pasted%20image%2020240331234748.DIxtMXKE.png",o="/assets/Pasted%20image%2020240331234753.BRaGybxi.png",l="/assets/Pasted%20image%2020240331234758.BlUxWWke.png",n="/assets/Pasted%20image%2020240331234803.CEbP_BDz.png",r="/assets/Pasted%20image%2020240331234811.DWB0Gshm.png",c="/assets/Pasted%20image%2020240331234815.WZr2mIo0.png",d="/assets/Pasted%20image%2020240331234820.nqNeIj2w.png",_="/assets/Pasted%20image%2020240331234825.Dz_nXwJD.png",g="/assets/Pasted%20image%2020240331234831.CYUPFGja.png",m="/assets/Pasted%20image%2020240331234837.BFhToR_C.png",T=JSON.parse('{"title":"树形拖拽","description":"","frontmatter":{"title":"树形拖拽","date":"2024-03-31 23:40","author":"yvan","refs":"https://www.uisdc.com/drag-sort","tags":["tech/drag-drop"]},"headers":[],"relativePath":"doc/tech/树形拖拽.md","filePath":"doc/tech/树形拖拽.md"}'),h={name:"doc/tech/树形拖拽.md"},P=s('<h1 id="树形拖拽的多种组件和交互" tabindex="-1">树形拖拽的多种组件和交互 <a class="header-anchor" href="#树形拖拽的多种组件和交互" aria-label="Permalink to &quot;树形拖拽的多种组件和交互&quot;">​</a></h1><p>在 B 端产品中，我目前接触的拖动排序的组件包含以下两个大类：</p><ol><li>一级目录常规排序（非树结构）</li><li>树组件多层级排序</li></ol><p>对于分类 2「树组件多层级排序」又包含两个小类：</p><ol><li>同层级排序（横线高亮显示即将放的位置）</li><li>跨层级排序</li></ol><p>对于小分类「跨层级排序」又可以细分为四个场景：</p><ol><li>父级未展开时：拖动到父级、父级整行高亮</li><li>父级未展开时：拖动长按停留在父级时，父级自动展开子级</li><li>父级已展开时：拖动到子级时，父级整行高亮，拖动到的位置出现高亮横线</li><li>父级已展开时：拖动到子级文件夹时，父级不需要高亮，子级文件夹目录整行高亮（子级已展开和未展开的交互与父级同理）</li></ol><p><img src="'+e+'" alt="" loading="lazy"></p><h1 id="拖动排序场景和交互实操" tabindex="-1">拖动排序场景和交互实操 <a class="header-anchor" href="#拖动排序场景和交互实操" aria-label="Permalink to &quot;拖动排序场景和交互实操&quot;">​</a></h1><p>上面已经总结了排序的组件和场景，下面我们就一起来看看不同组件在不同场景下的具体交互，通过实际项目设计详细介绍拖动排序的功能。</p><p><strong>1. 一级目录常规排序（非树结构）</strong></p><p>数据默认展示类似列表数据一样，平铺左对齐排版，当拖动排序时，鼠标移动到需要排序的数据行，长按鼠标右键并拖动数据上下移动，被拖动的数据原位置置灰（也可以直接消失）。</p><p>同时，被拖动的数据跟着鼠标走，移动到其它位置时，在将要放下的位置出现蓝色高亮分割线（还可以做到所有数据实时变化位置效果）这样能让用户更加直观地看到数据位置的变化。</p><p><img src="'+i+'" alt="" loading="lazy"></p><p><img src="'+o+'" alt="" loading="lazy"></p><p>此类需求一般是针对一级数据排序，数据结构比较简单，没有文件夹多级树状结构，下面列举几个工作中遇到的需求场景，以及分享几个其它产品中遇到的交互，便于大家理解。</p><p>由于 B 端产品具保密性，所以下面分享的截图非工作实际数据，大家只要明白需求场景和交互即可。</p><p>需求场景 1：产品业务中有很多的表单，表单中的字段顺序在不同企业中不同，应该如何设计呢？</p><p><img src="'+l+'" alt="" loading="lazy"></p><p>在设计时，可以将表单所有的字段罗列出来，然后用户通过自定义排序字段即可，这里的交互就可以直接采用上下拖动排序。</p><p>需求场景 2：飞书中有多个应用，对于每个用户而言，自己所关注的应用不同，优先级不同，该如何设计？</p><p><img src="'+n+'" alt="" loading="lazy"></p><p>同理，飞书也是对用户个人的应该设计了拖动排序功能，可以根据自己关注的应该排序应该的位置，从而更快的找到自己常用的应用，提高工作效率。</p><p>无论是对于列表数据还是卡片数据的排序都可以采用这种拖动排序的交互。</p><p><strong>2. 树组件多层级排序</strong></p><p>①同层级排序（横线高亮显示即将放的位置）</p><p>树组件同层级排序默认展示和拖动时效果与一级目录常规排序一致。</p><p><img src="'+r+'" alt="" loading="lazy"></p><p><img src="'+c+'" alt="" loading="lazy"></p><p>②跨层级排序</p><p>父级未展开时：拖动到父级、父级整行高亮</p><p>如下图，当需要把文件夹「数据名称显示 004」放在「数据名称显示 003」文件夹中，鼠标拖动数据放在「数据名称显示 003」时，「数据名称显示 003」整行会出现蓝色高亮，表示被拖动的数据即将放在该文件夹内。</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>父级未展开时：拖动长按停留在父级时，父级自动展开子级</p><p>如下图，按照上面的步骤拖动时，当鼠标一直停留在「数据名称显示 003」的位置时，该文件夹会自动展开二级目录，这是一个拖动排序比较友好的交互，可以让用户再次看到该目录下的数据结构，并快速一次性选择需要放的位置。</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>父级已展开时：拖动到子级时，父级整行高亮，拖动到的位置出现高亮横线</p><p>如下图，在上图基础上，当鼠标继续拖动数据，想要放在二级目录中时，数据一级目录同样会显示高亮，告诉用户当前数据的层级关系。</p><p>同时，二级数据中会出现蓝色高亮分割线，标识被拖动的数据即将放的位置，这样就能清晰的知道被拖动的数据将放在那个目录的那个位置。</p><p><img src="'+g+'" alt="" loading="lazy"></p><p>父级已展开时：拖动到子级文件夹时，父级不需要高亮，子级文件夹目录整行高亮（子级已展开和未展开的交互与父级同理）</p><p>当需要将数据拖动到二级文件夹内时，只需要高亮二级文件夹即可。</p><p><img src="'+m+'" alt="" loading="lazy"></p><p>关于树组件多层级排序的使用场景和交互比较复杂，上面我根据不同场景分别列出了交互展示方式，下面再根据实际业务需求列举案例说明，因为此场景主要是针对交互和显示，所以我就直接拿动图展示，便于大家理解。</p><p><a href="https://image.uisdc.com/wp-content/uploads/2023/09/uisdc-bd-20230919-1-1.mp4" target="_blank" rel="noreferrer">https://image.uisdc.com/wp-content/uploads/2023/09/uisdc-bd-20230919-1-1.mp4</a></p>',45),u=[P];function f(y,z,b,B,x,w){return t(),p("div",null,u)}const k=a(h,[["render",f]]);export{T as __pageData,k as default};
