const menuData = [
  { key: 'home', label: '首页', type: 'single' },
  {
    key: 'planting',
    label: '种植管理',
    children: [
      { key: 'planting-base', label: '种植基地管理', columns: ['基地编号', '基地名称', '区域', '面积(亩)', '负责人'] },
      { key: 'planting-tree', label: '莞香树种管理', columns: ['树种编号', '树种名称', '树龄(年)', '健康状态', '登记日期'] },
      { key: 'planting-batch', label: '种植批次管理', columns: ['批次编号', '基地', '种植日期', '数量', '状态'] }
    ]
  },
  {
    key: 'maintenance',
    label: '管护管理',
    children: [
      { key: 'maintenance-daily', label: '日常管护记录', columns: ['记录编号', '基地', '管护类型', '执行人', '时间'] },
      { key: 'maintenance-pest', label: '病虫害防治记录', columns: ['记录编号', '病虫害类型', '防治方案', '执行人', '效果评估'] }
    ]
  },
  {
    key: 'process',
    label: '采收加工',
    children: [
      { key: 'process-harvest', label: '采收记录管理', columns: ['采收单号', '基地', '采收日期', '重量(kg)', '质检状态'] },
      { key: 'process-work', label: '加工处理记录', columns: ['加工单号', '原料批次', '加工工艺', '产出数量', '负责人'] }
    ]
  },
  {
    key: 'inventory',
    label: '仓储销售',
    children: [
      { key: 'inventory-storage', label: '仓储信息管理', columns: ['仓储编号', '仓库名称', '入库时间', '库存数量', '状态'] },
      { key: 'inventory-sales', label: '销售记录管理', columns: ['销售单号', '客户名称', '销售日期', '销售金额', '结算状态'] }
    ]
  },
  {
    key: 'system',
    label: '系统管理',
    children: [
      { key: 'system-user', label: '用户管理', columns: ['用户编号', '姓名', '角色', '手机号', '状态'] }
    ]
  }
];

const topbarTip = document.querySelector('.topbar p');
const menuContainer = document.getElementById('menuContainer');
const tableContainer = document.getElementById('tableContainer');
const pageTitle = document.getElementById('pageTitle');

const allModules = menuData.flatMap(item => item.children || []);

const tableConfigs = {
  home: {
    title: '首页',
    subtitle: '可视化总览与模块快捷入口',
    columns: ['模块', '说明', '后端接口']
  }
};

allModules.forEach(sub => {
  tableConfigs[sub.key] = {
    title: sub.label,
    subtitle: `${sub.label}（预留接口，等待 Spring Boot 后端联调）`,
    columns: sub.columns
  };
});

let activeKey = 'home';

function renderMenu() {
  menuContainer.innerHTML = '';

  menuData.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'menu-item';

    if (item.type === 'single') {
      const link = document.createElement('button');
      link.className = `menu-link ${activeKey === item.key ? 'active' : ''}`;
      link.textContent = item.label;
      link.onclick = () => selectMenu(item.key);
      wrapper.appendChild(link);
    } else {
      const group = document.createElement('div');
      group.className = 'menu-group open';

      const titleBtn = document.createElement('button');
      titleBtn.className = 'menu-group-title';
      titleBtn.innerHTML = `<span>${item.label}</span><span class="arrow">⌃</span>`;
      titleBtn.onclick = () => group.classList.toggle('open');

      const subMenu = document.createElement('div');
      subMenu.className = 'sub-menu';

      item.children.forEach(sub => {
        const subBtn = document.createElement('button');
        subBtn.className = `sub-link ${activeKey === sub.key ? 'active' : ''}`;
        subBtn.textContent = sub.label;
        subBtn.onclick = () => selectMenu(sub.key);
        subMenu.appendChild(subBtn);
      });

      group.appendChild(titleBtn);
      group.appendChild(subMenu);
      wrapper.appendChild(group);
    }

    menuContainer.appendChild(wrapper);
  });
}

function renderHomeDashboard() {
  const statCards = [
    { name: '种植基地', value: '18', desc: '在管基地总数' },
    { name: '树种批次', value: '256', desc: '在册树种/批次' },
    { name: '待处理病虫害', value: '7', desc: '需本周完成处置' },
    { name: '本月销售额', value: '¥ 362,500', desc: '仓储销售模块统计' }
  ];

  const quickNav = allModules.map(module => `
    <button class="quick-link" data-module-key="${module.key}" type="button">
      <strong>${module.label}</strong>
      <span>进入模块</span>
    </button>
  `).join('');

  tableContainer.innerHTML = `
    <section class="dashboard-grid">
      ${statCards.map(card => `
        <article class="overview-card">
          <p>${card.name}</p>
          <h3>${card.value}</h3>
          <small>${card.desc}</small>
        </article>
      `).join('')}
    </section>

    <article class="table-card">
      <h2>业务模块快捷入口</h2>
      <div class="quick-links">${quickNav}</div>
      <div class="tip">点击上方任一模块可直接跳转到对应表格管理页面。</div>
    </article>

    <article class="table-card">
      <h2>近期工作提醒</h2>
      <div class="task-list">
        <div class="task-item"><span>种植基地巡检</span><em>今日 14:00</em></div>
        <div class="task-item"><span>病虫害防治复盘</span><em>明日 10:00</em></div>
        <div class="task-item"><span>采收批次质检录入</span><em>本周内</em></div>
      </div>
    </article>
  `;

  tableContainer.querySelectorAll('.quick-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-module-key');
      if (key) {
        selectMenu(key);
      }
    });
  });
}

function renderTable(key) {
  if (key === 'home') {
    pageTitle.textContent = '首页';
    topbarTip.textContent = '可视化总览（支持一键跳转到各业务模块）';
    renderHomeDashboard();
    return;
  }

  const config = tableConfigs[key];
  pageTitle.textContent = config.title;
  topbarTip.textContent = config.subtitle;

  const columns = config.columns;
  const rows = Array.from({ length: 3 }, (_, idx) =>
    columns.map((col, colIndex) => `${col}${idx + 1 + colIndex}`)
  );

  tableContainer.innerHTML = `
    <article class="table-card">
      <h2>${config.title}</h2>
      <div class="table-toolbar">
        <button class="btn btn-primary" type="button">新增</button>
        <button class="btn" type="button">查询</button>
        <button class="btn" type="button">导出</button>
      </div>
      <table>
        <thead>
          <tr>
            ${columns.map(col => `<th>${col}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
      <div class="tip">接口预留示例：/api/${key.replace('-', '/').replace('-', '/')}/list</div>
    </article>
  `;
}

function selectMenu(key) {
  activeKey = key;
  renderMenu();
  renderTable(key);
}

function init() {
  renderMenu();
  renderTable(activeKey);
}

init();
