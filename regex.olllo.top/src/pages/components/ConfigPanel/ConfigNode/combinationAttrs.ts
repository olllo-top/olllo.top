export const defaultCombinationGraphicsAttrs = {
  titleText: '',
  titlefontSize: 12,
  titleFill: '',

  textText: '',
  textTextHint: '',
  textfontSize: 12,
  textFill: '',

  imageHref: [],
  imageW: 16,
  imageH: 16,
  imageX: 6,
  imageY: 6,

  regex_type: '',
  
  params_hint1:'',
  params_hint2:'',
  repeat_min:1,
  repeat_max:8,

  seq_start:'a',
  seq_end:'z',

  mynamedgroup_gname:'GroupName',

  comsume_neg:0,
};

export interface combinationAttrs<T = string, K = number> {
  titleText: T;
  titlefontSize: K;
  titleFill: T;

  textText: T;
  textTextHint: T;
  textfontSize: K;
  textFill: T;

  imageHref: any[];
  imageW: K;
  imageH: K;
  imageX: K;
  imageY: K;

  regex_type: T;

  params_hint1: T;
  params_hint2: T;

  repeat_min: K;
  repeat_max: K;

  seq_start: T;
  seq_end:  T;

  mynamedgroup_gname: T;

  comsume_neg: K;
}

export enum combinationAttrsPath {
  titleText = 'title/text', // 节点名称
  titlefontSize = 'title/fontSize',
  titleFill = 'title/fill',

  textText = 'text/text', // 节点内容
  textTextHint = 'text/text_hint', // 节点提示
  textfontSize = 'text/fontSize',
  textFill = 'text/fill',
 
  imageHref = 'image/xlink:href', // 图片
  imageW = 'image/width',
  imageH = 'image/height',
  imageX = 'image/x',
  imageY = 'image/y',

  regex_type = 'regex/type', // 节点的类型

  params_hint1= 'params/hint1', // 节点参数
  params_hint2= 'params/hint2',
  repeat_min = 'params/min',
  repeat_max = 'params/max',

  seq_start = 'params/start',
  seq_end = 'params/end',

  mynamedgroup_gname = 'params/gname',

  comsume_neg = 'params/neg',
}
