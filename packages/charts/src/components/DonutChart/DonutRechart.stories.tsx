import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { DonutChart } from '@ui5/webcomponents-react-charts/lib/next/DonutChart';
import React, {useEffect, useState} from 'react';
import { simpleDataSet } from '../../resources/DemoProps';
import {Spinner} from "@ui5/webcomponents-react";

export default {
  title: 'Charts - Unstable /  DonutChart',
  component: DonutChart
};

const LoadingDonutChart = ({loadingTime = 2000}) => {
  const [loading, setLoading] = useState('initial');

  useEffect(() => {
    if(loading === 'initial') {
      setTimeout(() => {
        setLoading('spinner');
      }, loadingTime);
    }
    if(loading === 'spinner') {
      setTimeout(() => {
        setLoading('loading');
        // setData(simpleDataSet);
      }, loadingTime);
    }
    if(loading === 'loading') {
      setTimeout(() => {
        setLoading('done');
      }, loadingTime);
    }
  }, [loading, setLoading, loadingTime]);

  if(loading === 'initial') return null;
  if(loading === 'spinner') return <Spinner />;

  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '350px', height: '350px' }}
      dataset={simpleDataSet}
      loading={loading === 'loading'}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
    />
  );
};

const gridStyles = {
  display: 'grid',
  gridGap: '1rem',
  flexDirection: 'row-reverse',
  overflow: 'hidden',
  position: 'relative',
  gridTemplateColumns: '50% 50%',
  minHeight: '200px'
};

export const renderGridStory = () => {
  return (
    // @ts-ignore
    <div style={gridStyles}>
      <LoadingDonutChart loadingTime={500} />
      <LoadingDonutChart loadingTime={1000} />
      <LoadingDonutChart loadingTime={1500} />
      <LoadingDonutChart loadingTime={2000} />
    </div>
  );
};

renderGridStory.story = {
  name: 'In Grid'
};

export const renderStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
    />
  );
};

renderStory.story = {
  name: 'Default'
};

export const renderCustomColorStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users',
        colors: ['#f00', 'green', 'var(--sapNegativeColor)']
      }}
    />
  );
};

renderCustomColorStory.story = {
  name: 'With custom color'
};

export const withPaddingStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
      chartConfig={{ paddingAngle: 5 }}
    />
  );
};

withPaddingStory.story = {
  name: 'With padding angle'
};

export const withCustomRadiusStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      chartConfig={{
        innerRadius: text('innerRadius', '20%')
      }}
      dimension={{
        accessor: 'name'
      }}
      measure={{
        accessor: 'users'
      }}
    />
  );
};

withCustomRadiusStory.story = {
  name: 'With custom inner radius'
};

export const loadingPlaceholder = () => <DonutChart style />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const withFormatedStory = () => {
  return (
    <DonutChart
      onLegendClick={action('onLegendClick')}
      onDataPointClick={action('onDataPointClick')}
      style={{ width: '50%' }}
      dataset={simpleDataSet}
      dimension={{
        accessor: 'name',
        formatter: (el) => el.slice(0, 3)
      }}
      measure={{
        accessor: 'users',
        formatter: (el) => el / 10
      }}
    />
  );
};

withFormatedStory.story = {
  name: 'With formatter'
};
