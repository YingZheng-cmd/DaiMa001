const menuData = [
  { key: 'home', label: '首页', type: 'single' },
  {
    key: 'planting',
    label: '种植管理',
    children: [
      { key: 'planting-base', label: '种植基地管理', columns: ['基地编号', '基地名称', '区域', '面积(亩)', '负责人'], apiHint: '/api/planting/base/list' },
      { key: 'planting-tree', label: '莞香树种管理', columns: ['树种编号', '树种名称', '树龄(年)', '健康状态', '登记日期'], apiHint: '/api/planting/tree/list' },
      { key: 'planting-batch', label: '种植批次管理', columns: ['批次编号', '基地', '种植日期', '数量', '状态'], apiHint: '/api/planting/batch/list' }
    ]
  },
  {
    key: 'maintenance',
    label: '管护管理',
    children: [
      { key: 'maintenance-daily', label: '日常管护记录', columns: ['记录编号', '基地', '管护类型', '执行人', '时间'], apiHint: '/api/maintenance/daily/list' },
      { key: 'maintenance-pest', label: '病虫害防治记录', columns: ['记录编号', '病虫害类型', '防治方案', '执行人', '效果评估'], apiHint: '/api/maintenance/pest-control/list' }
    ]
  },
  {
    key: 'process',
    label: '采收加工',
    children: [
      { key: 'process-harvest', label: '采收记录管理', columns: ['采收单号', '基地', '采收日期', '重量(kg)', '质检状态'], apiHint: '/api/process/harvest/list' },
      { key: 'process-work', label: '加工处理记录', columns: ['加工单号', '原料批次', '加工工艺', '产出数量', '负责人'], apiHint: '/api/process/processing/list' }
    ]
  },
  {
    key: 'inventory',
    label: '仓储销售',
    children: [
      { key: 'inventory-storage', label: '仓储信息管理', columns: ['仓储编号', '仓库名称', '入库时间', '库存数量', '状态'], apiHint: '/api/inventory/storage/list' },
      { key: 'inventory-sales', label: '销售记录管理', columns: ['销售单号', '客户名称', '销售日期', '销售金额', '结算状态'], apiHint: '/api/inventory/sales/list' }
    ]
  },
  {
    key: 'system',
    label: '系统管理',
    children: [
      { key: 'system-user', label: '用户管理', columns: ['用户编号', '姓名', '角色', '手机号', '状态'], apiHint: '/api/system/user/list' }
    ]
  }
];

const allModules = menuData.flatMap(item => item.children || []);
const moduleMap = Object.fromEntries(allModules.map(item => [item.key, item]));

const { createApp } = Vue;

createApp({
  data() {
    return {
      menuData,
      allModules,
      activeKey: 'home',
      openGroups: {
        planting: true,
        maintenance: true,
        process: true,
        inventory: true,
        system: true
      },
      stats: [
        { name: '在管基地', value: '18', desc: '本月新增 2 个基地' },
        { name: '树种批次', value: '256', desc: '待审核 6 条记录' },
        { name: '病虫害告警', value: '7', desc: '高优先级 2 条' },
        { name: '本月销售额', value: '¥ 362,500', desc: '同比增长 8.2%' }
      ],
      progress: [
        { name: '春季补种任务', value: 68 },
        { name: '病虫害防治执行', value: 82 },
        { name: '采收批次录入', value: 54 }
      ]
    };
  },
  computed: {
    currentModule() {
      return moduleMap[this.activeKey] || null;
    },
    currentTitle() {
      return this.activeKey === 'home' ? '首页总览' : this.currentModule.label;
    },
    currentSubtitle() {
      return this.activeKey === 'home'
        ? '可视化看板 + 快捷跳转（Vue 版本）'
        : `${this.currentModule.label}（表格与接口占位，待后端联调）`;
    },
    currentColumns() {
      return this.currentModule ? this.currentModule.columns : [];
    },
    currentRows() {
      if (!this.currentModule) {
        return [];
      }

      return Array.from({ length: 5 }, (_, rowIndex) =>
        this.currentModule.columns.map((column, colIndex) => `${column}${rowIndex + colIndex + 1}`)
      );
    },
    currentApiPath() {
      return this.currentModule ? this.currentModule.apiHint : '/api';
    }
  },
  methods: {
    toggleGroup(groupKey) {
      this.openGroups[groupKey] = !this.openGroups[groupKey];
    },
    selectMenu(key) {
      this.activeKey = key;
    }
  }
}).mount('#app');
