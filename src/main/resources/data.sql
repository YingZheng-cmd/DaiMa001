INSERT INTO planting_base (base_code, base_name, region, area_mu, manager)
SELECT 'BASE-001', '大岭山基地', '东莞大岭山', 120.5, '张三'
WHERE NOT EXISTS (SELECT 1 FROM planting_base);

INSERT INTO planting_tree (tree_code, tree_name, tree_age, health_status, register_date)
SELECT 'TREE-001', '莞香一号', 4, '健康', '2024-03-01'
WHERE NOT EXISTS (SELECT 1 FROM planting_tree);

INSERT INTO planting_batch (batch_code, base_name, plant_date, quantity, status)
SELECT 'BATCH-202403', '大岭山基地', '2024-03-15', 500, '进行中'
WHERE NOT EXISTS (SELECT 1 FROM planting_batch);

INSERT INTO maintenance_daily_record (record_code, base_name, maintenance_type, operator, operate_time)
SELECT 'MDR-001', '大岭山基地', '施肥', '李四', NOW()
WHERE NOT EXISTS (SELECT 1 FROM maintenance_daily_record);

INSERT INTO maintenance_pest_control_record (record_code, pest_type, solution, operator, effect_evaluation)
SELECT 'MPR-001', '蚜虫', '生物农药喷洒', '王五', '良好'
WHERE NOT EXISTS (SELECT 1 FROM maintenance_pest_control_record);

INSERT INTO process_harvest_record (harvest_code, base_name, harvest_date, weight_kg, qc_status)
SELECT 'HAR-001', '大岭山基地', '2025-01-18', 320.0, '已质检'
WHERE NOT EXISTS (SELECT 1 FROM process_harvest_record);

INSERT INTO process_processing_record (processing_code, raw_batch, processing_tech, output_quantity, manager)
SELECT 'PRO-001', 'BATCH-202403', '蒸煮+干燥', 210.0, '赵六'
WHERE NOT EXISTS (SELECT 1 FROM process_processing_record);

INSERT INTO inventory_storage (storage_code, warehouse_name, in_time, stock_quantity, status)
SELECT 'STO-001', '1号仓', NOW(), 580.0, '在库'
WHERE NOT EXISTS (SELECT 1 FROM inventory_storage);

INSERT INTO inventory_sales_record (sales_code, customer_name, sales_date, sales_amount, settlement_status)
SELECT 'SAL-001', '华南香业', '2025-02-10', 86500.00, '已结算'
WHERE NOT EXISTS (SELECT 1 FROM inventory_sales_record);

INSERT INTO system_user (user_code, name, role, phone, status)
SELECT 'U001', '管理员', '管理员', '13800000000', '启用'
WHERE NOT EXISTS (SELECT 1 FROM system_user);
