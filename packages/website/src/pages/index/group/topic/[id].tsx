import React from 'react';
import { Outlet } from 'react-router-dom';

import ErrorBoundary from '@bangumi/website/components/ErrorBoundary';

const GroupTopicPage = () => (
  <ErrorBoundary fallback={<>Topic Not found</>}>
    <Outlet />
  </ErrorBoundary>
);

export default GroupTopicPage;
