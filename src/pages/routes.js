import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';
import VideoSurveillance from './GroupFunction1/VideoSurveillance';
import ProblemReport from './GroupFunction1/ProblemReport';
import CaregiverCoordinate from './GroupFunction1/CaregiverCoordinate';
import ResultTracking from './GroupFunction1/ResultTracking';
import AreaChoose from './GroupFunction1/MonitorCropStatus/AreaChoose';
import Monitor from './GroupFunction1/MonitorCropStatus/Monitor';
import AutoProblem from './AutoProblem';
import HandworkProblem from './HandworkProblem';
import AutoProbDetail from './AutoProbDetail';
import HandworkProbDetail from './HandworkProbDetail';
import ListUser from './User/components/listUser';
import DroneState from './Drones/DroneState'
import DroneStatistic from './Drones/DroneStatistic'
import FlySetting from './Drones/FlySetting'
import DroneConnectData from './Drones/DroneConnectData'
import ImageVideo from './ImageVideo'

export const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    path: '/auto-problem-detail',
    component: AutoProbDetail,
  },
  {
    path: '/hand-problem-detail',
    component: HandworkProbDetail,
  },
  {
    path: '/drone-state',
    component: () => <DroneState />,
  },
  {
    path: '/drones',
    component: () => <DroneConnectData />,
  },
  {
    path: '/fly-setting',
    component: () => <FlySetting />,
  },
  {
    path: '/drone-statistic',
    component: () => <DroneStatistic />,
  },
  {
    path: '/drone-data',
    component: () => <div>Kết nối dữ liệu từ drone</div>,
  },
  {
    path: '/flight-hub',
    component: () => <div>Flight Hub</div>,
  },
  {
    path: '/payloads',
    component: () => <div>PayloadManagement</div>,
  },
  {
    path: '/metadata',
    component: () => <ImageVideo />,
  },
  {
    path: '/problem',
    component: () => <div>Problem</div>,
  },
  {
    path: '/supervised-object',
    component: () => <div>Đối tượng giám sát</div>,
  },
  {
    path: '/statistic',
    component: () => <div>Báo cáo thống kê</div>,
  },
  {
    path: '/problems',
    component: () => <div>Sự cố</div>,
  },
  {
    path: '/warning',
    component: () => <div>Cảnh báo</div>,
  },
  {
    path: '/activity-log',
    component: () => <div>Lịch sử hoạt động</div>,
  },
  {
    path: '/surveillance-domain',
    component: () => <div>Miền giám sát</div>,
  },
  {
    path: '/handle-problem',
    component: () => <div>Xử lý sự cố</div>,
  },
  {
    path: '/auto-problem',
    component: AutoProblem
  },
  {
    path: '/handwork-problem',
    component: HandworkProblem
  },
  {
    path: '/user-management',
    component: ListUser,
  },
  {
    path: '/video-surveillance',
    component: VideoSurveillance,
  },
  {
    path: '/caregiver-coordinate',
    component: CaregiverCoordinate,
  },
  {
    path: '/result-tracking',
    component: ResultTracking,
  },
  {
    path: '/area-choose',
    component: AreaChoose,
  },
  {
    path: '/monitor',
    component: Monitor,
  },
  {
    path: '/problem-report',
    component: ProblemReport,
  },
];

export default () => (
  <Switch>
    {routes.map(({ path, exact = false, component: Component, ...rest }) => {
      return (
        <Route
          key={path}
          exact={exact}
          path={path}
          component={Component}
          {...rest}
        />
      );
    })}
    <Redirect to='/' />
  </Switch>
);
