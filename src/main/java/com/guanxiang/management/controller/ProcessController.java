package com.guanxiang.management.controller;

import com.guanxiang.management.entity.ProcessHarvestRecord;
import com.guanxiang.management.entity.ProcessProcessingRecord;
import com.guanxiang.management.service.ManagementQueryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/process")
public class ProcessController {

    private final ManagementQueryService managementQueryService;

    public ProcessController(ManagementQueryService managementQueryService) {
        this.managementQueryService = managementQueryService;
    }

    @GetMapping("/harvest/list")
    public List<ProcessHarvestRecord> getHarvestList() { return managementQueryService.getHarvestRecords(); }

    @GetMapping("/processing/list")
    public List<ProcessProcessingRecord> getProcessingList() { return managementQueryService.getProcessingRecords(); }
}
