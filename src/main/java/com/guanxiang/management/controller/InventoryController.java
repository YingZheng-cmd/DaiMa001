package com.guanxiang.management.controller;

import com.guanxiang.management.entity.InventorySalesRecord;
import com.guanxiang.management.entity.InventoryStorage;
import com.guanxiang.management.service.ManagementQueryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    private final ManagementQueryService managementQueryService;

    public InventoryController(ManagementQueryService managementQueryService) {
        this.managementQueryService = managementQueryService;
    }

    @GetMapping("/storage/list")
    public List<InventoryStorage> getStorageList() { return managementQueryService.getStorages(); }

    @GetMapping("/sales/list")
    public List<InventorySalesRecord> getSalesList() { return managementQueryService.getSalesRecords(); }
}
