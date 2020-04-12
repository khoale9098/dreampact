import React from 'react';
import { SvgStyle, GroupStyle, PathStyle } from './styles';
import { SvgProps, PathProps } from './types';

export const Svg = ({ transform, fill, paths, fillAll, error, viewBox, ...props }: SvgProps) => {
  const key: string = paths
    .map(({ d }: any) => d)
    .join('')
    .replace(/[ ,-.]/g, '');

  const RenderPaths = () =>
    paths &&
    paths.map((path: PathProps) => {
      const p = path;
      if (fillAll) {
        delete p.fill;
      }
      return <PathStyle {...p} key={p.d} fill={p.fill} />;
    });

  return (
    <SvgStyle key={key} viewBox={viewBox} error={error} {...props}>
      <GroupStyle transform={transform} fill={fill}>
        {RenderPaths()}
      </GroupStyle>
    </SvgStyle>
  );
};

export * from './types';
export * from './styles';
