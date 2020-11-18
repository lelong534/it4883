export const sidebarMenu = [
  {
    key: 'Dashboard',
    heading: 'Bảng điều khiển',
    icon: 'fa fa-home-alt',
    route: '/dashboard',
  },
  {
    key: 'Drones',
    heading: 'Điều khiển drone',
    icon: 'fas fa-drone-alt',
    route: '/drones',
    subMenu: [
      {
        key: 'DroneState',
        heading: 'Tình trạng drone',
        icon: 'fal fa-monitor-heart-rate',
        route: '/drone-state',
      },
      {
        key: 'FlySetting',
        heading: 'Thiết lập đường bay',
        icon: 'fa fa-user-chart',
        route: '/fly-setting',
      },
      {
        key: 'DroneStatistic',
        heading: 'Thống kê drone',
        icon: 'fa fa-file-chart-line',
        route: '/drone-statistic',
      },
    ],
  },
  {
    key: 'Function2',
    heading: 'Nhóm chức năng 2',
    icon: 'fas fa-chart-line',
    route: '/function2',
    subMenu: [
      {
        key: 'MetaData',
        heading: 'Lưu trữ hình ảnh',
        icon: 'fal fa-monitor-heart-rate',
        route: '/meta-data',
      },
      {
        key: 'Check',
        heading: 'Tra cứu',
        icon: 'fa fa-user-chart',
        route: '/check',
      },
      {
        key: 'Report',
        heading: 'Báo cáo thống kê',
        icon: 'fa fa-file-chart-line',
        route: '/report',
      },
    ],
  },
  {
    key: 'FlightHub',
    heading: 'Flight hub',
    icon: 'fab fa-hubspot',
    route: '/flight-hub',
  },
  {
    key: 'Payloads',
    heading: 'Payloads',
    icon: 'fas fa-layer-group',
    route: '/payloads',
  },
  {
    key: 'metadata',
    heading: 'Hình ảnh và video',
    icon: 'fas fa-images',
    route: '/metadata',
  },
  {
    key: 'Problems',
    heading: 'Sự cố',
    icon: 'fas fa-times-octagon',
    route: '/problems',
  },
  {
    key: 'SupervisedObject',
    heading: 'Đối tượng giám sát',
    icon: 'fas fa-binoculars',
    route: '/supervised-object',
  },
  {
    key: 'GeneralStatistic',
    heading: 'Báo cáo thống kê',
    icon: 'fas fa-chart-line',
    route: '/statistic',
  },
  {
    key: 'Warning',
    heading: 'Cảnh báo',
    icon: 'far fa-bell',
    route: '/warning',
  },
  {
    key: 'ActivityLog',
    heading: 'Lịch sử hoạt động',
    icon: 'fas fa-file-signature',
    route: '/activity-log',
    subMenu: [
      {
        key: 'LogUser',
        heading: 'Lịch sử hoạt động người dùng',
        icon: 'fas fa-user-circle',
        route: '/log-user',
      },
      {
        key: 'LogDrone',
        heading: 'Lịch sử hoạt động của drone',
        icon: 'fas fa-drone-alt',
        route: '/log-drone',
      },
      {
        key: 'LogProblem',
        heading: 'Lịch sử xử lý sự cố',
        icon: 'fas fa-toolbox',
        route: '/log-problem',
      },
      {
        key: 'LogWarn',
        heading: 'Lịch sử cảnh báo',
        icon: 'far fa-bell',
        route: '/log-warn',
      },
      {
        key: 'LogPayLoad',
        heading: 'Lịch sử hoạt động của PayLoad',
     
        icon: 'fas fa-layer-group',
        route: '/log-payload',
      },
      {
        key: 'LogMetaData',
        heading: 'Lịch sử lưu trữ hình ảnh/video',
        icon: 'fas fa-images',
        route: '/log-metadata',
      },
    ],
  },
  {
    key: 'SurveillanceDomain',
    heading: 'Miền giám sát',
    icon: 'fas fa-crop-alt',
    route: '/surveillance-domain',
  },
  {
    key: 'HandleProblem',
    heading: 'Xử lý sự cố',
    icon: 'fas fa-toolbox',
    route: '/handle-problem',
  },
  {
    key: 'UserManagement',
    heading: 'Quản lý người dùng',
    icon: 'fas fa-user-circle',
    route: '/user-management',
  },
  
];
