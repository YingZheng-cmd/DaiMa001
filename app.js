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
  },
  { key: 'analysis', label: '智能分析', type: 'single' }
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
        { name: '在管基地', value: '18', desc: '较上周 +2' },
        { name: '树种总数', value: '3,280', desc: '健康率 97.4%' },
        { name: '待处理告警', value: '7', desc: '高优先级 2 条' },
        { name: '本月销售额', value: '¥ 362,500', desc: '同比 +8.2%' }
      ],
      sectionMetrics: [
        { name: '种植管理', main: '基地 18 / 批次 62', sub: '今日新增批次 3 个' },
        { name: '管护管理', main: '日常记录 126', sub: '病虫害待处理 7 条' },
        { name: '采收加工', main: '采收单 41', sub: '待加工批次 9 个' },
        { name: '仓储销售', main: '库存 14.2 吨', sub: '今日销售单 6 笔' },
        { name: '系统管理', main: '活跃用户 23', sub: '在线 8 人' }
      ],
      analysisPrompt: '',
      analysisLoading: false,
      analysisResult: '等待分析任务执行。可输入指令后点击“开始智能分析”。'
    };
  },
  computed: {
    currentModule() {
      return moduleMap[this.activeKey] || null;
    },
    currentTitle() {
      if (this.activeKey === 'home') return '首页总览';
      if (this.activeKey === 'analysis') return '智能分析';
      return this.currentModule.label;
    },
    currentSubtitle() {
      if (this.activeKey === 'home') return '直观查看各板块关键数据与分析入口';
      if (this.activeKey === 'analysis') return 'AI 分析中心（接口预留，可接入大模型服务）';
      return `${this.currentModule.label}（表格与接口占位，待后端联调）`;
    },
    currentColumns() {
      return this.currentModule ? this.currentModule.columns : [];
    },
    currentRows() {
      if (!this.currentModule) return [];

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
    },
    fillPrompt(text) {
      this.analysisPrompt = text;
    },
    async runAnalysis() {
      if (!this.analysisPrompt.trim()) {
        this.analysisResult = '请输入分析指令后再执行。';
        return;
      }

      this.analysisLoading = true;
      this.analysisResult = 'AI 分析中，请稍候...';

      try {
        if (typeof AiApi !== 'undefined' && AiApi.runAnalysis) {
          const result = await AiApi.runAnalysis({ prompt: this.analysisPrompt });
          this.analysisResult = JSON.stringify(result, null, 2);
        } else {
          this.analysisResult = 'AiApi 未加载，请检查 api.js。';
        }
      } catch (error) {
        this.analysisResult = `接口暂不可用，已预留联调位置。\n\n请求: POST /api/ai/analysis/run\n参数: { prompt: string }\n\n错误信息: ${error.message}`;
      } finally {
        this.analysisLoading = false;
      }
    }
  }
}).mount('#app');
