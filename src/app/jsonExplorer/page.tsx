'use client';
import React from 'react';

import { data } from '@/components/JsonExplorer/__constants__/sampleData';
import JsonExplorer from '@/components/JsonExplorer/JsonExplorer';

const JsonExplorerPage: React.FC = () => {
  return <JsonExplorer data={data} />;
};

export default JsonExplorerPage;
