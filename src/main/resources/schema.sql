CREATE TABLE IF NOT EXISTS planting_base (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    base_code VARCHAR(64),
    base_name VARCHAR(128),
    region VARCHAR(128),
    area_mu DOUBLE,
    manager VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS planting_tree (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    tree_code VARCHAR(64),
    tree_name VARCHAR(128),
    tree_age INT,
    health_status VARCHAR(64),
    register_date DATE
);

CREATE TABLE IF NOT EXISTS planting_batch (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    batch_code VARCHAR(64),
    base_name VARCHAR(128),
    plant_date DATE,
    quantity INT,
    status VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS maintenance_daily_record (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    record_code VARCHAR(64),
    base_name VARCHAR(128),
    maintenance_type VARCHAR(128),
    operator VARCHAR(64),
    operate_time DATETIME
);

CREATE TABLE IF NOT EXISTS maintenance_pest_control_record (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    record_code VARCHAR(64),
    pest_type VARCHAR(128),
    solution VARCHAR(255),
    operator VARCHAR(64),
    effect_evaluation VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS process_harvest_record (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    harvest_code VARCHAR(64),
    base_name VARCHAR(128),
    harvest_date DATE,
    weight_kg DOUBLE,
    qc_status VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS process_processing_record (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    processing_code VARCHAR(64),
    raw_batch VARCHAR(64),
    processing_tech VARCHAR(128),
    output_quantity DOUBLE,
    manager VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS inventory_storage (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    storage_code VARCHAR(64),
    warehouse_name VARCHAR(128),
    in_time DATETIME,
    stock_quantity DOUBLE,
    status VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS inventory_sales_record (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    sales_code VARCHAR(64),
    customer_name VARCHAR(128),
    sales_date DATE,
    sales_amount DECIMAL(12,2),
    settlement_status VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS system_user (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_code VARCHAR(64),
    name VARCHAR(64),
    role VARCHAR(64),
    phone VARCHAR(32),
    status VARCHAR(64)
);

CREATE TABLE IF NOT EXISTS ai_analysis_log (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    prompt TEXT,
    analysis TEXT,
    model VARCHAR(64),
    created_at DATETIME
);
