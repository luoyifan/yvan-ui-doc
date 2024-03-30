---
title: 查询窗口设计
date: 2024-03-29 22:02
author: yvan
---

# 11.查询窗口设计
>[!widget] 查询窗口设计

```ignore
{ 
	"args": [ 
		{
			"type": "widget"
		} 
	] 
}
```

```dataview
table desc as "描述", name as "名称", columnCount as "字段数"
from "wms/11_查询窗口设计"
where contains(file.name, "widget.")
```

| 名称                               | 描述     | 字段数 | sqlId |
| ---------------------------------- | -------- | ---- | ---- |
| [AreaSearch](./widget.AreaSearch.md) | 库区检索 | 6 | selectArea |
| [CheckInputLoctionSearch](./widget.CheckInputLoctionSearch.md) | 盘点录入库位检索 | 45 | CheckInputLoctionSearch |
| [ContainerSearch](./widget.ContainerSearch.md) | 容器检索 | 8 | selectContainer |
| [CustomSearch](./widget.CustomSearch.md) | 客户检索 | 9 | selectCustom |
| [DevTableSearch](./widget.DevTableSearch.md) | 数据库表查询 | 4 | DevTableSearch |
| [DictSearch](./widget.DictSearch.md) | 字典项检索 | 3 | DictSearch |
| [InvLotAttSearch](./widget.InvLotAttSearch.md) | 批属性查询 | 12 | InvLotAttSearch |
| [InvPrimary](./widget.InvPrimary.md) | 容器库位库存 | 36 | selectInvPrimary |
| [ItemPackageSearch](./widget.ItemPackageSearch.md) | 包装检索 | 40 | selectItemPackage |
| [ItemSearch](./widget.ItemSearch.md) | 商品检索 | 23 | selectItem |
| [LocChangeSearch](./widget.LocChangeSearch.md) | 移库库位检索 | 6 | selectChangeLoc |
| [LocCheckSearch](./widget.LocCheckSearch.md) | 盘点库位检索 | 2 | LocCheckSearch |
| [LocGroupSearch](./widget.LocGroupSearch.md) | 库位组检索 | 4 | selectLocGroup |
| [LocSearch](./widget.LocSearch.md) | 货位检索 | 18 | selectLoc |
| [OwnerSearch](./widget.OwnerSearch.md) | 货主检索 | 13 | selectOwner |
| [RegionSearch](./widget.RegionSearch.md) | 区域检索 | 3 | RegionSearch |
| [ResourceSearch](./widget.ResourceSearch.md) | 菜单检索 | 3 | ResourceSearch |
| [SupplierSearch](./widget.SupplierSearch.md) | 供应商检索 | 8 | SupplierSearch |
| [UserSearch](./widget.UserSearch.md) | 用户检索 | 4 | selectUser |
| [UserWhSearch](./widget.UserWhSearch.md) | 用户仓库检索 | 5 | UserWhSearch |
| [WhSearch](./widget.WhSearch.md) | 仓库检索 | 6 | selectWh |

