package com.guanxiang.management.service;

import com.guanxiang.management.entity.*;
import com.guanxiang.management.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagementQueryService {

    private final PlantingBaseRepository plantingBaseRepository;
    private final PlantingTreeRepository plantingTreeRepository;
    private final PlantingBatchRepository plantingBatchRepository;
    private final MaintenanceDailyRecordRepository maintenanceDailyRecordRepository;
    private final MaintenancePestControlRecordRepository maintenancePestControlRecordRepository;
    private final ProcessHarvestRecordRepository processHarvestRecordRepository;
    private final ProcessProcessingRecordRepository processProcessingRecordRepository;
    private final InventoryStorageRepository inventoryStorageRepository;
    private final InventorySalesRecordRepository inventorySalesRecordRepository;
    private final SystemUserRepository systemUserRepository;

    public ManagementQueryService(PlantingBaseRepository plantingBaseRepository,
                                  PlantingTreeRepository plantingTreeRepository,
                                  PlantingBatchRepository plantingBatchRepository,
                                  MaintenanceDailyRecordRepository maintenanceDailyRecordRepository,
                                  MaintenancePestControlRecordRepository maintenancePestControlRecordRepository,
                                  ProcessHarvestRecordRepository processHarvestRecordRepository,
                                  ProcessProcessingRecordRepository processProcessingRecordRepository,
                                  InventoryStorageRepository inventoryStorageRepository,
                                  InventorySalesRecordRepository inventorySalesRecordRepository,
                                  SystemUserRepository systemUserRepository) {
        this.plantingBaseRepository = plantingBaseRepository;
        this.plantingTreeRepository = plantingTreeRepository;
        this.plantingBatchRepository = plantingBatchRepository;
        this.maintenanceDailyRecordRepository = maintenanceDailyRecordRepository;
        this.maintenancePestControlRecordRepository = maintenancePestControlRecordRepository;
        this.processHarvestRecordRepository = processHarvestRecordRepository;
        this.processProcessingRecordRepository = processProcessingRecordRepository;
        this.inventoryStorageRepository = inventoryStorageRepository;
        this.inventorySalesRecordRepository = inventorySalesRecordRepository;
        this.systemUserRepository = systemUserRepository;
    }

    public List<PlantingBase> getPlantingBases() { return plantingBaseRepository.findAll(); }
    public List<PlantingTree> getPlantingTrees() { return plantingTreeRepository.findAll(); }
    public List<PlantingBatch> getPlantingBatches() { return plantingBatchRepository.findAll(); }
    public List<MaintenanceDailyRecord> getDailyRecords() { return maintenanceDailyRecordRepository.findAll(); }
    public List<MaintenancePestControlRecord> getPestControlRecords() { return maintenancePestControlRecordRepository.findAll(); }
    public List<ProcessHarvestRecord> getHarvestRecords() { return processHarvestRecordRepository.findAll(); }
    public List<ProcessProcessingRecord> getProcessingRecords() { return processProcessingRecordRepository.findAll(); }
    public List<InventoryStorage> getStorages() { return inventoryStorageRepository.findAll(); }
    public List<InventorySalesRecord> getSalesRecords() { return inventorySalesRecordRepository.findAll(); }
    public List<SystemUser> getUsers() { return systemUserRepository.findAll(); }
}
