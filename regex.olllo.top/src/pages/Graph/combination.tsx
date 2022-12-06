import { Dom, Graph } from '@antv/x6';
import { shapeName,regexType,regexSetting } from './config';
import '@antv/x6-react-shape';
import './registeredNode';

export class CombinationGraphics {
  private graph: Graph;
  constructor(graph: Graph) {
    this.graph = graph;
    this.init();
   
  }
  public init() {

    if (regexSetting.languange === 'English'){
      const reg_String = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.String,
          },
          image: {
            'xlink:href':'/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'String',
            text_hint:'the String',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'Type String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
      });
  
      const reg_Pattern = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Pattern,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'Pattern',
            text_hint:'This class is used to join sub patterns. The sub patterns \
                          can be instances of Group, Repeat, str, etc. \
                          the only constraint it is not possible to pass instances of Any \
                          otherwise it would cause ambiguity in the raw regex string.\
                          ',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Any = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Any,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'Any',  
            text_hint:"The regex |.\
                          Usage:\
                              any = Any('abc', 'efg')\
                              print(any.mkregex())\
                          Output:\
                              'abc|efg'",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_MetaB = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.MetaB,
          },
          title:{
            text: 'MetaB',
            text_hint:"The regex \\B.\
                          Usage:\
                              pattern = Pattern(MetaB(), 'bar')\
                              print(pattern.mkregex())\
                          Output:\
                              \\Bbar",
          },
          text: {
            textWrap: {
              
              text: 'MetaB',
              text_hint: 'Fixed Element'
              
            },
          },
        },
      });
  
  
      const reg_Metab = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Metab,
          },
          title:{
            text: 'Metab',
            text_hint:"The regex \\b.\
                          Usage:\
                              pattern = Pattern(Metab(), 'bar')\
                              print(pattern.mkregex())\
                          Output:\
                              \\bbar",
          },
          text: {
            textWrap: {
              
              text:'Metab',
              text_hint: 'Fixed Element'
            },
          },
        },
      });
  
      const reg_Caret = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Caret,
          },
          title:{
            text: 'Caret',
            text_hint:"\
                          The regex ^.\
                          Usage:\
                              pattern = Pattern(Caret(), 'bar')\
                              print(pattern.mkregex())\
                          Output:\
                              ^bar\
                          ",
          },
          text: {
            textWrap: {
              text: 'Begin with',
              text_hint: 'Fixed Element'
            },
          },
        },
      });
  
  
      const reg_Dollar = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Dollar,
          },
          title:{
            text: 'Dollar',
            text_hint:"\
                          The regex $.\
                          Usage:\
                              pattern = Pattern('foobar', Dollar())\
                              print(pattern.mkregex())\
                          Output:\
                              foobar$\
                          ",
          },
          text: {
            textWrap: {
              text: 'to End',
              text_hint: 'Fixed Element'
            },
          },
        },
      });
  
  
      const reg_NonCapture = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.NonCapture,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'NonCapture',
            text_hint:"\
                          The regex:\
                              (:abc)\
                          Usage:\
                              group = NonCapture('foo')\
                              pattern = Pattern(group, 'bar')\
                              print(pattern.mkregex())\
                          Output:\
                              (?:foo)bar\
                          ",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Word = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Word,
          },
          title:{
            text: 'Word',
            text_hint:"\
                          The \\w metacharacter.\
                          Usage:\
                              repeat = Repeat(Word(), 1)\
                              pattern = Pattern(':', repeat)\
                              print(pattern.mkregex())\
                          Output:\
                              :\\w{1,}\
                          ",
          },
          text: {
            textWrap: {
              text:'Word',
              text_hint: 'Fixed Element'
            },
          },
        },
      });
  
  
      const reg_NotWord = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.NotWord,
          },
          title:{
            text: 'NotWord',
            text_hint:"\
                          The \\W metacharacter.\
                          Usage:\
                              repeat = Repeat(NotWord(), 1)\
                              pattern = Pattern(':', repeat)\
                              print(pattern.mkregex())\
                          Output:\
                              :\\W{1,}\
                          ",
          },
          text: {
            textWrap: {
              text:'NotWord',
              text_hint: 'Fixed Element'
            },
          },
        },
      });
  
  
      const reg_Group = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Group,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'Group',
            text_hint:"\
                          A regex group like:\
                              (abc)\
                          usage:\
                              group = Group('abc')\
                              pattern = Pattern(group, X(), group)\
                              print(pattern.mkregex())\
                          Output:\
                              (abc).\\1\
                          Notice that the first reference to the group it serializes\
                          to the regex group construct but the second one serializes to \
                          the group reference.\
                          ",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_NamedGroup = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.MyNamedGroup,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'NamedGroup',
            text_hint:"\
                          Named groups.\
                          Usage:\
                              group = NamedGroup('gname', 'abc', X(), 'efg')\
                              pattern  = Pattern(group, 'ijl')\
                              print(pattern)\
                          Output:\
                              (?P<gname>abc.efg)ijl\
                          ",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: 'Name of Group',
            gname: 'GroupName',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Repeat = this.graph.createNode({
        shape: shapeName.flowChartTitleParamRect,
        attrs: {
          regex: {
            type: regexType.Repeat,
          },
          body: {
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: 'rgba(95,149,255,0.05)',
          },
          head: {
            refWidth: '100%',
            stroke: 'transparent',
            height: 28,
            fill: 'rgba(95,149,255,0.7)',
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'Repeat',
            text_hint:"\
                          The regex a{min, max)}\
                          Usage:\
                              repeat = Repeat('a', 1)\
                              print(repeat)\
                          Output:\
                              a{1,}\
                          ",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1:'Min',
            min: '1',
            hint2:'Max',
            max: '8',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_ZeroOrMore = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.ZeroOrMore,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'ZeroOrMore',
            text_hint:" The regex op +. It works alike Repeat.",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_OneOrMore = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.OneOrMore,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'OneOrMore',
            text_hint:"The regex op *. It works alike Repeat.",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_OneOrZero = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.OneOrZero,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'OneOrZero',
            text_hint:"The regex op ?.",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_ConsumeNext = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.ConsumeNext,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'ConsumeNext',
            text_hint:"Lookbehind assertion. (?<=...) or (?<...) based on neg argument.",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: 'Not',
            neg: '0',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_ConsumeBack = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.ConsumeBack,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'ConsumeBack',
            text_hint:"The regex lookahead assertion. (?=foo)bar",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: 'Not',
            neg: '0',
          },
          text: {
            text: '',
            text_hint: 'String',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Seq = this.graph.createNode({
        shape: shapeName.flowChartTitleParamRect,
        attrs: {
          regex: {
            type: regexType.Seq,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'Seq',
            text_hint:"Map to a sequence like a-z, A-Z, 0-9 etc.\
                          It can only be used with Include or Exclude.",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: 'start',
            start: '0',
            hint2: 'end',
            end: '9',
          },
          text: {
            text: '',
            text_hint: '',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
      });
  
      const reg_Include = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Include,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'Include',
            text_hint:"Sets.\
                         [abc]",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'Multiple Characters',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Exclude = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Exclude,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'Exclude',
            text_hint:"Excluding.\
                          [^abc]",
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: 'Multiple Characters',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_X = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.X,
          },
          title:{
            text: 'X',
            text_hint:"The dot.\
                          .",
          },
          text: {
            textWrap: {
              text: 'Any Character',
              text_hint: 'Fixed Element'
            },
          },
        },
      });
      return {  reg_String,
        reg_Pattern, reg_Any, 
        reg_MetaB, reg_Metab, 
        reg_Caret, reg_Dollar, 
        reg_NonCapture, 
        reg_Word, reg_NotWord, 
        reg_Group, reg_NamedGroup, 
        reg_Repeat, reg_ZeroOrMore, reg_OneOrMore, reg_OneOrZero,
        reg_ConsumeNext, reg_ConsumeBack,
        reg_Seq, reg_Include, reg_Exclude,
        reg_X };
    }
    else{
      const reg_String = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.String,
          },
          image: {
            'xlink:href':'/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
  
            text: '字符串',
            text_hint:'填写你要查找的字符串',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
      });
  
      const reg_Pattern = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Pattern,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
  
            text: "连接模式",
  
            text_hint:'连接模式，将各个元素连接起来；注意不能直接连“或”元素，需要将“或元素”包含到“分组元素”中再连接；',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Any = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Any,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
  
            text:'或模式',
            text_hint:'在“或”元素中的多个元素，是“或”的关系。',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_MetaB = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.MetaB,
          },
          title:{
  
            text:'非单词边界',
            
            text_hint:'比如 not = b + 1，非单词边界是 n | o | t',

          },
          text: {
            textWrap: {
              text:'非单词边界',
  
              text_hint: '固定元素',
              
            },
          },
        },
      });
  
  
      const reg_Metab = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Metab,
          },
          title:{
  
            text:'单词边界',
            text_hint:'比如 a = b + 1，非单词边界是 a | =  | b | + | 1',
  
          },
          text: {
            textWrap: {
  
              text:'单词边界',
  
              text_hint: '固定元素',
  
            },
          },
        },
      });
  
      const reg_Caret = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Caret,
          },
          title:{
            text:'以...开始',
            
            text_hint:'查找以什么开始的字符串，可以拉入其他元素，比如字符串 abc，则为查找 abc 开头的字符串。',
  
          },
          text: {
            textWrap: {
  
              text:'开始：',
              text_hint: '固定元素',
            },
          },
        },
      });
  
  
      const reg_Dollar = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Dollar,
          },
          title:{
            text:'以...结尾',
            text_hint:'查找以什么结尾的字符串，可以拉入其他元素，比如拉入字符串 xyz，则为查找 xyz 结尾的字符串。',
          },
          text: {
            textWrap: {
              text:'：结尾',
              text_hint: '固定元素',
            },
          },
        },
      });
  
  
      const reg_NonCapture = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.NonCapture,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'非捕获分组',
            text_hint:'非捕获分组',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Word = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.Word,
          },
          title:{
            text:'单词',
            
            text_hint:'单词只由字母、数字、下划线组成，包含其他的字符则不算。',
          },
          text: {
            textWrap: {
              text:'单词',
              text_hint: '固定元素',
            },
          },
        },
      });
  
  
      const reg_NotWord = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.NotWord,
          },
          title:{
            text:'非单词',
            text_hint:'单词只由字母、数字、下划线组成，包含其他的字符则不算；所以也就是找出包含其他字符的组合字符串。',
          },
          text: {
            textWrap: {
              text:'非单词',
              text_hint: '固定元素',
            },
          },
        },
      });
  
  
      const reg_Group = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Group,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'分组',
            text_hint:'将各个单一的字符组合在一起',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_NamedGroup = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.MyNamedGroup,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'有名字的组',
            
            text_hint:'用来将复杂的组合放在一起，并起个名字。',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '组名称',
  
            gname: 'GroupName',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
  
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Repeat = this.graph.createNode({
        shape: shapeName.flowChartTitleParamRect,
        attrs: {
          regex: {
            type: regexType.Repeat,
          },
          body: {
            stroke: '#5F95FF',
            strokeWidth: 1,
            fill: 'rgba(95,149,255,0.05)',
          },
          head: {
            refWidth: '100%',
            stroke: 'transparent',
            height: 28,
            fill: 'rgba(95,149,255,0.7)',
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'重复',
            
            text_hint:'元素重复多少次，比如字符串abc重复1到3次，注意需要填写：重复最小次数和重复最大次数。',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '重复最小次数',
            min: '1',
            hint2: '重复最大次数',
            max: '8',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_ZeroOrMore = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.ZeroOrMore,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'0次或多次',
            
            text_hint:'元素重复0次以上（包括0次），比如字符串abc重复0到无限次。',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_OneOrMore = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.OneOrMore,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'1次或多次',
            
            text_hint:'元素重复1次以上（包括1次），比如字符串abc重复1到无限次。',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_OneOrZero = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.OneOrZero,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'1次或0次',
            
            text_hint:'元素重复1次或0次，比如字符串abc重复0次或1次。',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_ConsumeNext = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.ConsumeNext,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'左边断言',
            
            text_hint:'左边断言（前向断言），右边是正常需要匹配模式，而且要求前面的左边是某种模式（断言模式）；比如希望找到olllo模式，但是这个模式是跟在regex.的。',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '是否为反',
            neg: '0',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_ConsumeBack = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.ConsumeBack,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'右边断言',
            
            text_hint:'右边断言（后向断言），左边是正常需要匹配模式，而且要求紧跟着的右边是某种模式（断言模式）；比如希望找到olllo模式，但是这个模式是紧跟着.top的。',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '是否为反',
            neg: '0',
          },
          text: {
            text: '',
            text_hint: '字符串内容',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Seq = this.graph.createNode({
        shape: shapeName.flowChartTitleParamRect,
        attrs: {
          regex: {
            type: regexType.Seq,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'字符序列',
            text_hint:'字符序列，包含数字序列（参数0到9），字母序列（参数a到z，或者A到Z），比如填写5到9，则表示5，6，7，8，9。注意：序列只能用在‘包含字符’或‘不包含字符’元素中。',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '开始',
            start: '0',
            hint2: '结束',
            end: '9',
          },
          text: {
            text: '',
            text_hint: '',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
      });
  
      const reg_Include = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Include,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'包含字符',
            
            text_hint:'包含会将字符串分解为单字符，如果需要包含整个字符串，请使用"分组"元素。',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '多个字符',
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_Exclude = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.Exclude,
          },
          image: {
            'xlink:href':
              '/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'不包含字符',
            
            text_hint:'比如不包含序列a到f（小写字母）。不包含会将字符串分解为单字符。',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '多个字符',
  
            refX: 8,
            refY: 45,
            fontSize: 12,
            fill: 'rgba(0,0,0,0.6)',
            'text-anchor': 'start',
          },
        },
        data: {
          parent: true,
        },
      });
  
  
      const reg_X = this.graph.createNode({
        shape: shapeName.flowChartRect,
        attrs: {
          regex: {
            type: regexType.X,
          },
          title:{
  
            text:'任何字符',    
            text_hint:'代表任何字符，即什么字符都可以。',

          },
          text: {
            textWrap: {
              
              text: '任何字符',
              text_hint: '固定元素',
  
            },
          },
        },
      });

      return {  reg_String,
        reg_Pattern, reg_Any, 
        reg_MetaB, reg_Metab, 
        reg_Caret, reg_Dollar, 
        reg_NonCapture, 
        reg_Word, reg_NotWord, 
        reg_Group, reg_NamedGroup, 
        reg_Repeat, reg_ZeroOrMore, reg_OneOrMore, reg_OneOrZero,
        reg_ConsumeNext, reg_ConsumeBack,
        reg_Seq, reg_Include, reg_Exclude,
        reg_X };

      }
    
  }
}
