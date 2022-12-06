// Node类型
export enum shapeName {
  flowChartRect = 'flow-chart-rect', // 基本图形，带有title和text，title和text不可修改
  flowChartTitleRect = 'flow-chart-title-rect', // 简单图形，带有title和text，title不可修改，text可以修改
  flowChartTitleParamRect = 'flow-chart-title-param-rect', // 复杂图形，带有title，params和text，title不可以修改
}

// 节点类型
export enum regexType{ 
  default = 'none',
  // 快捷
  the_string = 'the_string', // 字符串
  not_include = 'not_include',
  begin_with = 'begin_with', // 以...开始
  end_with = 'end_with', // 以...结束

  // 基本单元
  any_code = 'any_code', // 任何字符
  the_number = 'number', // 数字
  letter = 'letter', // 字母
  big_letter = 'big_letter', // 大写字母
  small_letter = 'small_letter', // 小写字母
  
  include = 'include', // 包含

  the_number_seq = 'number_seq', // 数字序列
  the_letter_seq = 'letter_seq', // 字母序列


  // 基本元素
  Pattern = 'Pattern',
  Any = 'Any', // The regex |.  或
  
  NonCapture = 'NonCapture', // The regex:  非捕获分组
  
  Group = 'Group', // A regex group like: (abc) 分组
  NamedGroup = 'NamedGroup', // Named groups.
  MyNamedGroup = 'MyNamedGroup', // My Named groups. 自定义修改参数的顺序
  
  Repeat = 'Repeat', // The regex a{min, max)} 重复
  ZeroOrMore = 'ZeroOrMore', // The regex op +. It works alike Repeat. 重复0个或多个
  OneOrMore = 'OneOrMore', // The regex op *. It works alike Repeat. 重复一个或多个
  OneOrZero = 'OneOrZero', // The regex op ?. 0个或一个
  
  ConsumeNext = 'ConsumeNext', // Lookbehind assertion.(?<=...) or (?<...) based on neg argument. 断言
  ConsumeBack = 'ConsumeBack', // The regex lookahead assertion.(?=foo)bar

  Seq = 'Seq', // Map to a sequence like a-z, A-Z, 0-9 etc. It can only be used with Include or Exclude. 序列，a-z，A-Z，0-9
  Include = 'Include', //  Sets. [abc] 包含，里面是或的关系？a或b或c？
  Exclude = 'Exclude', // Excluding. 不包含  [^abc]
  
  // 基本的字符元素
  X = 'X', // The dot. 任意字符
  MetaB = 'MetaB', // The regex \B. 非单词边界
  Metab = 'Metab', // The regex \b. 单词边界
  Caret = 'Caret', // The regex ^. 开头
  Dollar = 'Dollar', // The regex $. 结尾

  Word = 'Word', // The \w metacharacter.  单词(字母，数字，下划线)
  NotWord = 'NotWord', // The \W metacharacter. 非单词

  // 增强元素
  String = 'String', // 字符串

  // 组合元素
  String_Group = 'String_Group',  // 字符串组，将字符串包含在组中，方便包含或不包含这类的字符型使用
  Caret_Group = 'Caret_Group', // 以...开头，包含字符串
  Dollar_Group = 'Dollar_Group', // 以...结尾，包含字符串
  Repeat_Group = 'Repeat_Group', // 重复，包含字符串组
  Seq_Include = 'Seq_Include', // 序列包含
  Seq_Exclude = 'Seq_Exclude', // 序列不包含
  Any_Group = 'Any_Group', // 或组

}

export enum regexConnectType{ // 线条类型
  join = 'join', // 连接
}

// 设置当前 语言
export const regexSetting = {
  languange: "NotEnglish", // English or not
  
  // post_url_to_get_regex = 'http://127.0.0.1:5000/get_regex'; // 本地
  // post_url_to_get_regex: 'http://zpvq29lz9zhg.ngrok2.xiaomiqiu.cn/get_regex', // 远程接口
  post_url_to_get_regex: 'http://zpvq29lz9zhg.ngrok.xiaomiqiu123.top/get_regex',
}

