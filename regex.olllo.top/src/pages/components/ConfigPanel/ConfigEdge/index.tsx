import React, { useEffect, useState, useRef } from 'react';
import { Tabs, Row, Col, Input, Slider, Select, Button, Divider } from 'antd';
import FlowGraph from '@/pages/Graph';
import { Cell, Edge } from '@antv/x6';
import { useSetState } from '@/hooks';
import { regexSetting } from './../../../Graph/config';

const { TabPane } = Tabs;

export enum lineAttributes {
  stroke = 'line/stroke',
  strokeWidth = 'line/strokeWidth',
  strokeDasharray = 'line/strokeDasharray',
}
interface IProps {
  id: string;
}
interface EdgeAttrs {
  stroke: string;
  strokeWidth: number;
  connector: string;
  strokeDasharray: number;
}

export interface labelAttrsType {
  fontSize: number;
  fill: string;
  text: string;
}
export const labelsDefaults = {
  fontSize: 12,
  fill: '#666',
  text: '',
};

export const filterGetLabels = (labelArr: NonNullable<Edge.Label[]>) => {
  if (!labelArr.length) return labelsDefaults;
  return labelArr[0].attrs!.label;
};

export const handleGetLabels = (
  labelattrs: Partial<labelAttrsType>,
  labelsDefaults: labelAttrsType,
) => {
  return {
    attrs: { label: Object.assign({}, labelsDefaults, labelattrs) },
  };
};

export default function (props: IProps) {
  const { id } = props;
  const [labelattrs, setLabelattrs] =
    useSetState<labelAttrsType>(labelsDefaults);
  const [attrs, setAttrs] = useState<EdgeAttrs>({
    stroke: '#5F95FF',
    strokeWidth: 1,
    connector: 'normal',
    strokeDasharray: 0,
  });
  const cellRef = useRef<Cell>();

  useEffect(() => {
    if (id) {
      const { graph } = FlowGraph;
      const cell = graph.getCellById(id) as Edge;
      if (!cell || !cell.isEdge()) {
        return;
      }
      cellRef.current = cell as Edge;
      const connector = cell.getConnector() || {
        name: 'normal',
      };
      const getLabels = filterGetLabels(cell.getLabels());
      setAttr('stroke', cell.attr(lineAttributes.stroke));
      setAttr('strokeWidth', cell.attr(lineAttributes.strokeWidth));
      setAttr(
        'strokeDasharray',
        cell.attr(lineAttributes.strokeDasharray) || 0,
      );
      setAttr('connector', connector.name);
      setLabelattrs(getLabels);
    }
  }, [id]);

  const setAttr = (key: string, val: any) => {
    setAttrs((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const onStrokeChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAttr('stroke', val);
    cellRef.current!.attr(lineAttributes.stroke, val);
  };

  const onStrokeWidthChange = (
    val: number,
    path: lineAttributes,
    typeKey: string,
  ) => {
    setAttr(typeKey, val);
    cellRef.current!.attr(path, val);
  };

  const onConnectorChange = (val: string) => {
    setAttr('connector', val);
    const cell = cellRef.current as Edge;
    cell.setConnector(val);
  };

  const textChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    textKey: string,
    sliderVal?: number,
  ) => {
    const val = sliderVal ? sliderVal : e.target.value;
    const cell = cellRef.current as Edge;
    setLabelattrs({ [textKey]: val });
    cell.setLabels([handleGetLabels({ [textKey]: val }, labelattrs)]);
  };

  const removeConnector = () => {
    const cell = cellRef.current as Edge;
    cell.disconnect();
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab={ regexSetting.languange !== "English" ? "线条属性" : "Attribute of Line"} key="1">
        <Row align="middle">
          <Col span={8}>{ regexSetting.languange !== "English" ? "当前类型" : "Current Type"}  </Col>
          <Col span={14}>
            <Input
              style={{ width: '100%' }}
              value={ regexSetting.languange !== "English" ? "连接" : "Join"} 
            />
          </Col>
        </Row>

        <Divider></Divider>
        <Row align="middle">
          <Col>
            { regexSetting.languange !== "English" ? 
            "说明：线条的类型只有一种：“连接”，表示所连的元素有先后顺序。注意：元素在同一框架内，没有连线，表示为“或”的关系" 
            : "Note: There is only one type of line: 'Join', which means that the connected elements are in sequence. Note: elements in the same frame are not connected and are represented as 'or' relations."} 
          </Col>
        </Row>

        <Divider></Divider>
        <Row align="middle">
          <Col span={10}>{regexSetting.languange !== 'English' ? '删除该线条' : 'Delete the Line'}</Col>
          <Col span={14}>
            <Button
              type="primary"
              size="small"
              danger
              onClick={removeConnector}
            >
              {regexSetting.languange !== 'English' ? '删除' : "Delete"}
            </Button>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
}
