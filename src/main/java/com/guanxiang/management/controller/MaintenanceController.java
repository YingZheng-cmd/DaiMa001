package com.guanxiang.management.controller;

import com.guanxiang.management.entity.MaintenanceDailyRecord;
import com.guanxiang.management.entity.MaintenancePestControlRecord;
import com.guanxiang.management.service.ManagementQueryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance")
public class MaintenanceController {

    private final ManagementQueryService managementQueryService;

    public MaintenanceController(ManagementQueryService managementQueryService) {
        this.managementQueryService = managementQueryService;
    }

    @GetMapping("/daily/list")
    public List<MaintenanceDailyRecord> getDailyList() { return managementQueryService.getDailyRecords(); }

    @GetMapping("/pest-control/list")
    public List<MaintenancePestControlRecord> getPestControlList() {
        return managementQueryService.getPestControlRecords();
    }
}
