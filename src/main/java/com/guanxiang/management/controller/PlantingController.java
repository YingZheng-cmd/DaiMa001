package com.guanxiang.management.controller;

import com.guanxiang.management.entity.PlantingBase;
import com.guanxiang.management.entity.PlantingBatch;
import com.guanxiang.management.entity.PlantingTree;
import com.guanxiang.management.service.ManagementQueryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/planting")
public class PlantingController {

    private final ManagementQueryService managementQueryService;

    public PlantingController(ManagementQueryService managementQueryService) {
        this.managementQueryService = managementQueryService;
    }

    @GetMapping("/base/list")
    public List<PlantingBase> getBaseList() { return managementQueryService.getPlantingBases(); }

    @GetMapping("/tree/list")
    public List<PlantingTree> getTreeList() { return managementQueryService.getPlantingTrees(); }

    @GetMapping("/batch/list")
    public List<PlantingBatch> getBatchList() { return managementQueryService.getPlantingBatches(); }
}
