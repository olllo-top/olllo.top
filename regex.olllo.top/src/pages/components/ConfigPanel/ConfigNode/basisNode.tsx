import React, { memo, FC } from 'react';
import { Row, Col, Input, Slider, Divider } from 'antd';
import { attrsType, NodeAttrs } from './index';
import { EventChange } from '@/interface';
import { regexSetting } from './../../../Graph/config';

export interface BasisNodeType {
  attrs: NodeAttrs;
  sliderChange: EventChange<number, attrsType, NodeAttrs>;
  inputChange: EventChange<
    React.ChangeEvent<HTMLInputElement>,
    attrsType,
    NodeAttrs
  >;
}

const BasisNode: FC<BasisNodeType> = memo(function BasisNode({
  attrs,
  sliderChange,
  inputChange,
}) {
  return (
    <>
      <Divider>{ regexSetting.languange !== "English" ? "匹配内容" : "Match Content"}</Divider>
      <Row align="middle">
        <Col span={8}>{attrs.texthint}</Col>
        <Col span={14}>
          <Input
            value={attrs.text}
            style={{ width: '100%' }}
          />
        </Col>
      </Row>
      
    </>
  );
});

export default BasisNode;
