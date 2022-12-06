import { Dom, Graph } from '@antv/x6';
import '@antv/x6-react-shape';
import React from 'react';
import { shapeName,regexType } from './config';
import './registeredNode';

export class BasicGraphics {
  private graph: Graph;
  constructor(graph: Graph) {
    this.graph = graph;
    this.init();
  }
  public init() {

    const reg_the_string = this.graph.createNode({
      regex_type: regexType.the_string,
      shape: shapeName.flowChartTitleRect,
      attrs: {
        image: {
          'xlink:href':
            'http://blog.lgf196.top/ant-simple-pro-document/logon.png',
          height: 16,
          x: 6,
          y: 6,
        },
        title: {
          text: '字符串',
          refX: 30,
          refY: 9,
          fill: '#ffffff',
          fontSize: 12,
          'text-anchor': 'start',
        },
        text: {
          text: '点击修改内容',
          refX: 8,
          refY: 45,
          fontSize: 12,
          fill: 'rgba(0,0,0,0.6)',
          'text-anchor': 'start',
        },
      },
    });

    const reg_not_include = this.graph.createNode({
      regex_type: regexType.the_string,
      shape: shapeName.flowChartTitleRect,
      attrs: {
        image: {
          'xlink:href':
            'http://blog.lgf196.top/ant-simple-pro-document/logon.png',
          height: 16,
          x: 6,
          y: 6,
        },
        title: {
          text: '不包含',
          refX: 30,
          refY: 9,
          fill: '#ffffff',
          fontSize: 12,
          'text-anchor': 'start',
        },
        text: {
          text: '点击修改内容',
          refX: 8,
          refY: 45,
          fontSize: 12,
          fill: 'rgba(0,0,0,0.6)',
          'text-anchor': 'start',
        },
      },
    });

    const reg_begin = this.graph.createNode({
      regex_type: regexType.begin_with,
      shape: shapeName.flowChartTitleRect,
      attrs: {
        image: {
          'xlink:href':
            'http://blog.lgf196.top/ant-simple-pro-document/logon.png',
          height: 16,
          x: 6,
          y: 6,
        },
        title: {
          text: '以...开始',
          refX: 30,
          refY: 9,
          fill: '#ffffff',
          fontSize: 12,
          'text-anchor': 'start',
        },
        text: {
          text: '点击修改内容',
          refX: 8,
          refY: 45,
          fontSize: 12,
          fill: 'rgba(0,0,0,0.6)',
          'text-anchor': 'start',
        },
      },
    });

    const reg_end = this.graph.createNode({
      regex_type: regexType.end_with,
      shape: shapeName.flowChartTitleRect,
      attrs: {
        image: {
          'xlink:href':
            'http://blog.lgf196.top/ant-simple-pro-document/logon.png',
          height: 16,
          x: 6,
          y: 6,
        },
        title: {
          text: '以...结束',
          refX: 30,
          refY: 9,
          fill: '#ffffff',
          fontSize: 12,
          'text-anchor': 'start',
        },
        text: {
          text: '点击修改内容',
          refX: 8,
          refY: 45,
          fontSize: 12,
          fill: 'rgba(0,0,0,0.6)',
          'text-anchor': 'start',
        },
      },
    });

    return {reg_the_string, reg_not_include, reg_begin, reg_end};
  }
}