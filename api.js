const API_BASE_URL = '/api';

async function request(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  if (!res.ok) {
    throw new Error(`接口请求失败: ${res.status}`);
  }

  return res.json();
}

const PlantingApi = {
  getBaseList: () => request('/planting/base/list'),
  getTreeList: () => request('/planting/tree/list'),
  getBatchList: () => request('/planting/batch/list')
};

const MaintenanceApi = {
  getDailyRecordList: () => request('/maintenance/daily/list'),
  getPestControlList: () => request('/maintenance/pest-control/list')
};

const ProcessApi = {
  getHarvestList: () => request('/process/harvest/list'),
  getProcessingList: () => request('/process/processing/list')
};

const InventoryApi = {
  getStorageList: () => request('/inventory/storage/list'),
  getSalesList: () => request('/inventory/sales/list')
};

const SystemApi = {
  getUserList: () => request('/system/user/list')
};
