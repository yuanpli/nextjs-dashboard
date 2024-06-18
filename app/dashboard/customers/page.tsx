'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // window.location.href = '/api/excel';
    // window.location.assign('/dashboard/api/excel');
  }, []);

  // 页面内容可以空或放置一些加载指示器
  return <div>Loading...</div>;
}
