---
title: 文件上传 filefield
---

# 文件上传 filefield 组件

filefield组件是一种用户界面控件，允许用户通过通过点击或者拖拽上传文件。多应用于表单场景，为用户提供便捷的文件上传功能。

## 组件示例
```javascript
{
    xtype: 'filefield',
    fieldLabel: '文件',
    bind: {
        value: '{form.file}',
    },
    hidden: false,
    disabled: false,
    loading: false,
    cls: '',
    placeholder: '请输入',
    size: 'default',
    readonly: false,
    weight: 1,
    required: true,
    showFileList: true,
    listeners: {
        success: '{filefield1_success}',
    },
    action: '/wms_api/api/pages/sys/pdaVersion/PdaPackUpload@uploadFile',
    autoUpload: true,
    method: 'post',
}
```

## 编写后端方法
![[13_filefield/img02.png]]
```groovy
/**
 * 文件上传
 * @param request
 * @return
 */
static def uploadFile(HttpServletRequest request) {
    String deploy = request.getHeader("deploy")
    SecurityContext context = SecurityContextHolder.getContext()
    if (context == null) {
        throw new BusinessException("当前用户未登录")
    }
    MultipartFile file = ((StandardMultipartHttpServletRequest) ((HttpRequestCachingWrapper) request).getRequest()).getFile("file");
    FileUploadRequest uploadRequest = new FileUploadRequest(DEFAULT_BUCKET_NAME, file.getInputStream())
    uploadRequest.setFileName(file.getOriginalFilename())
    uploadRequest.setFileSize(file.getSize())
    uploadRequest.setContentType(file.getContentType())
    FileSystemClient fileClient = SpringContextHolder.getBean(FileSystemClient.class)
    FileUploadResponse response = fileClient.upload(uploadRequest)
    return Model.newSuccess(response)
}
```

## 事件

| 事件名称          | 说明                | 参数和示例                    |
|:--------------|-------------------|--------------------------|
| preview       | 点击文件列表中已上传的文件时触发  | file1_preview() {}       |
| remove        | 文件列表移除文件时触发       | file1_remove() {}        |
| success       | 文件上传成功时触发         | file1_success() {}       |
| error         | 文件上传失败时触发         | file1_error() {}         |
| progress      | 文件上传时触发           | file1_progress() {}      |
| change        | 文件状态改变时触发         | file1_change() {}        |
| exceed        | 当超出限制时触发          | file1_exceed() {}        |
| before_upload | 上传文件之前时触发         | file1_before_upload() {} |
| before_remove | 删除文件之前时触发         | file1_before_remove() {} |

## 方法

| 方法名称           | 说明        | 参数和示例                        |
|:---------------|-----------|------------------------------|
| submit         | 提交上传      | this.refs.file1.submit()     |
| clearFiles     | 清空已上传文件列表 | this.refs.file1.clearFiles() |

## 属性

| 属性名称            | 说明                                                  | 示例                       |
|:----------------|-----------------------------------------------------|--------------------------|
| reference       | 设置组件的refs                                           | refs:file1               |
| modal           | 设置组件的modal值名（必填项，否则运行时组件切换没反应）                      | bind:{value:'{iconUrl}'} |
| hidden          | 隐藏或显示组件，默认为false                                    | hidden:false             |
| required        | 组件是否必填，默认为false                                     | required:false           |
| weight          | 权重的宽度，6中选择，1、2、3、4、5、6，默认为1                         | weight：1                 |
| labelWidth      | 标签宽度，默认为auto                                        | labelWidth:80            |
| size            | 设置组件的尺寸大小，三种选项large（大）、default（中）、small（小），默认为false | size:default             |
| disabled        | 是否禁用组件，默认为false                                     | disabled:false           |
| readonly        | 是否允许只读，默认为false                                     | readonly:false           |
| marginTop       | 距上的内边距，默认为0                                         | paddingTop:5             |
| marginRight     | 距右的内边距，默认为0                                         | paddingRight:5           |
| marginBottom    | 距下的内边距，默认为0                                         | paddingBottom:5          |
| marginLeft      | 距左的内边距，默认为0                                         | paddingLeft:5            |
