import React from 'react';
import title_para from '../../data/title_para.json';
import features from '../../data/features.json';
import TopText from './TopText';
import FeatureList from './FeatureList';

const AppFeatures = () => {
  return (
    <>
        <TopText data={title_para} />
        <FeatureList data={features} />
    </>
  );
}

export default AppFeatures;