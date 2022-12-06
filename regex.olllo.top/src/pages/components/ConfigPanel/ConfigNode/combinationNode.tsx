import React, { memo, FC, useMemo } from 'react';
import { Row, Col, Input, Slider, Divider } from 'antd';
import { combinationAttrs, combinationAttrsPath } from './combinationAttrs';
import { EventChange } from '@/interface';
import ImgCrop from 'antd-img-crop';
import ImgUpload from '@/pages/components/upload/imgUpload';
import { UploadChangeParam } from 'antd/lib/upload';
import { regexType,regexSetting } from './../../../Graph/config';

const { TextArea } = Input;

export interface CombinationNodeType {
  combinationGraphicsAttrs: combinationAttrs;
  combinationInputChange: EventChange<
    React.ChangeEvent<HTMLInputElement>,
    combinationAttrsPath,
    combinationAttrs
  >;
  combinationSliderChange: EventChange<
    number,
    combinationAttrsPath,
    combinationAttrs
  >;
  imageUpload: (info: UploadChangeParam) => void;
}

const CombinationNode: FC<CombinationNodeType> = memo(function CombinationNode({
  combinationGraphicsAttrs,
  combinationInputChange,
  combinationSliderChange,
  imageUpload,
}) {
  // console.log('combinationGraphicsAttrs',combinationGraphicsAttrs)
  const render = useMemo(
    () => (
      <>
        <Divider>{ regexSetting.languange !== "English" ? "匹配内容" : "Match Content"}</Divider>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.textTextHint}</Col>
            <Col span={14}>
              <TextArea
                value={combinationGraphicsAttrs.textText}
                style={{ width: '100%' }}
                autoSize={{ minRows: 2 }}
                onChange={(val) =>
                  combinationInputChange(
                    val as any,
                    combinationAttrsPath.textText,
                    'textText',
                  )
                }
              />
            </Col>
          </Row>
      </>
    ),
    [combinationGraphicsAttrs],
  );

  const render_repeat = useMemo(
    () => (
      <>
        <Divider>{ regexSetting.languange !== "English" ? "匹配内容" : "Match Content"}</Divider>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.textTextHint}</Col>
            <Col span={14}>
              <TextArea
                value={combinationGraphicsAttrs.textText}
                style={{ width: '100%' }}
                autoSize={{ minRows: 2 }}
                onChange={(val) =>
                  combinationInputChange(
                    val as any,
                    combinationAttrsPath.textText,
                    'textText',
                  )
                }
              />
            </Col>
          </Row>

          <Divider>{ regexSetting.languange !== "English" ? "匹配内容" : "Match Content"}</Divider>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.params_hint1}</Col>
            <Col span={14}>
              <Input
                value={combinationGraphicsAttrs.repeat_min}
                style={{ width: '100%' }}
                onChange={(val) =>
                  combinationInputChange(
                    val,
                    combinationAttrsPath.repeat_min,
                    'repeat_min',
                  )
                }
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.params_hint2}</Col>
            <Col span={14}>
            <Input
                value={combinationGraphicsAttrs.repeat_max}
                style={{ width: '100%' }}
                onChange={(val) =>
                  combinationInputChange(
                    val,
                    combinationAttrsPath.repeat_max,
                    'repeat_max',
                  )
                }
              />
            </Col>
          </Row>
      </>
    ),
    [combinationGraphicsAttrs],
  );

  const render_seq = useMemo(
    () => (
      <>
          <Divider>{ regexSetting.languange !== "English" ? "参数设置" : "Parameters Setting"}</Divider>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.params_hint1}</Col>
            <Col span={14}>
              <Input
                value={combinationGraphicsAttrs.seq_start}
                style={{ width: '100%' }}
                onChange={(val) =>
                  combinationInputChange(
                    val,
                    combinationAttrsPath.seq_start,
                    'seq_start',
                  )
                }
              />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.params_hint2}</Col>
            <Col span={14}>
            <Input
                value={combinationGraphicsAttrs.seq_end}
                style={{ width: '100%' }}
                onChange={(val) =>
                  combinationInputChange(
                    val,
                    combinationAttrsPath.seq_end,
                    'seq_end',
                  )
                }
              />
            </Col>
          </Row>
      </>
    ),
    [combinationGraphicsAttrs],
  );

  const render_mynamedgroup = useMemo(
    () => (
      <>
          <Divider>{ regexSetting.languange !== "English" ? "名称设置" : "Name Setting"}</Divider>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.params_hint1}</Col>
            <Col span={14}>
              <Input
                value={combinationGraphicsAttrs.mynamedgroup_gname}
                style={{ width: '100%' }}
                onChange={(val) =>
                  combinationInputChange(
                    val,
                    combinationAttrsPath.mynamedgroup_gname,
                    'mynamedgroup_gname',
                  )
                }
              />
            </Col>
          </Row>
          <Divider>{ regexSetting.languange !== "English" ? "匹配内容" : "Match Content"}</Divider>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.textTextHint}</Col>
            <Col span={14}>
              <TextArea
                value={combinationGraphicsAttrs.textText}
                style={{ width: '100%' }}
                autoSize={{ minRows: 2 }}
                onChange={(val) =>
                  combinationInputChange(
                    val as any,
                    combinationAttrsPath.textText,
                    'textText',
                  )
                }
              />
            </Col>
          </Row>
      </>
    ),
    [combinationGraphicsAttrs],
  );

  const render_comsume = useMemo(
    () => (
      <>
          <Divider>{ regexSetting.languange !== "English" ? "参数设置" : "Parameters Setting"}</Divider>
          <Row align="middle">
            <Col span={8}>{combinationGraphicsAttrs.params_hint1}</Col>
            <Col span={14}>
              <Input
                value={combinationGraphicsAttrs.comsume_neg}
                style={{ width: '100%' }}
                onChange={(val) =>
                  combinationInputChange(
                    val,
                    combinationAttrsPath.comsume_neg,
                    'comsume_neg',
                  )
                }
              />
            </Col>
          </Row>
      </>
    ),
    [combinationGraphicsAttrs],
  );

  switch(combinationGraphicsAttrs.regex_type){
    case regexType.Repeat  :
      return <>{render_repeat}</>;
    case regexType.Seq  :
      return <>{render_seq}</>;
    case regexType.MyNamedGroup  :
      return <>{render_mynamedgroup}</>;
    case regexType.ConsumeBack  :
      return <>{render_comsume}</>;
    case regexType.ConsumeNext  :
      return <>{render_comsume}</>;

  }

  return <>{render}</>;

  
});


export default CombinationNode;
