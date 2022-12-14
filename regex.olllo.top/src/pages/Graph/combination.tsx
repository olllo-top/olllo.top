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
  
            text: '?????????',
            text_hint:'??????????????????????????????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
  
            text: "????????????",
  
            text_hint:'??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
  
            text:'?????????',
            text_hint:'???????????????????????????????????????????????????????????????',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
  
            text:'???????????????',
            
            text_hint:'?????? not = b + 1????????????????????? n | o | t',

          },
          text: {
            textWrap: {
              text:'???????????????',
  
              text_hint: '????????????',
              
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
  
            text:'????????????',
            text_hint:'?????? a = b + 1????????????????????? a | =  | b | + | 1',
  
          },
          text: {
            textWrap: {
  
              text:'????????????',
  
              text_hint: '????????????',
  
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
            text:'???...??????',
            
            text_hint:'?????????????????????????????????????????????????????????????????????????????? abc??????????????? abc ?????????????????????',
  
          },
          text: {
            textWrap: {
  
              text:'?????????',
              text_hint: '????????????',
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
            text:'???...??????',
            text_hint:'???????????????????????????????????????????????????????????????????????????????????? xyz??????????????? xyz ?????????????????????',
          },
          text: {
            textWrap: {
              text:'?????????',
              text_hint: '????????????',
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
            text:'???????????????',
            text_hint:'???????????????',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'??????',
            
            text_hint:'?????????????????????????????????????????????????????????????????????????????????',
          },
          text: {
            textWrap: {
              text:'??????',
              text_hint: '????????????',
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
            text:'?????????',
            text_hint:'?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????',
          },
          text: {
            textWrap: {
              text:'?????????',
              text_hint: '????????????',
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
            text:'??????',
            text_hint:'???????????????????????????????????????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'???????????????',
            
            text_hint:'?????????????????????????????????????????????????????????',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '?????????',
  
            gname: 'GroupName',
          },
          text: {
            text: '',
            text_hint: '???????????????',
  
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
            text:'??????',
            
            text_hint:'???????????????????????????????????????abc??????1???3?????????????????????????????????????????????????????????????????????',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '??????????????????',
            min: '1',
            hint2: '??????????????????',
            max: '8',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'0????????????',
            
            text_hint:'????????????0??????????????????0????????????????????????abc??????0???????????????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'1????????????',
            
            text_hint:'????????????1??????????????????1????????????????????????abc??????1???????????????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'1??????0???',
            
            text_hint:'????????????1??????0?????????????????????abc??????0??????1??????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'????????????',
            
            text_hint:'??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????olllo????????????????????????????????????regex.??????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '????????????',
            neg: '0',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'????????????',
            
            text_hint:'?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????olllo???????????????????????????????????????.top??????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '????????????',
            neg: '0',
          },
          text: {
            text: '',
            text_hint: '???????????????',
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
            text:'????????????',
            text_hint:'??????????????????????????????????????????0???9???????????????????????????a???z?????????A???Z??????????????????5???9????????????5???6???7???8???9????????????????????????????????????????????????????????????????????????????????????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          params: {
            hint1: '??????',
            start: '0',
            hint2: '??????',
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
            text:'????????????',
            
            text_hint:'???????????????????????????????????????????????????????????????????????????????????????"??????"?????????',
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '????????????',
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
            text:'???????????????',
            
            text_hint:'?????????????????????a???f??????????????????????????????????????????????????????????????????',
  
            refX: 30,
            refY: 9,
            fill: '#ffffff',
            fontSize: 12,
            'text-anchor': 'start',
          },
          text: {
            text: '',
            text_hint: '????????????',
  
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
  
            text:'????????????',    
            text_hint:'????????????????????????????????????????????????',

          },
          text: {
            textWrap: {
              
              text: '????????????',
              text_hint: '????????????',
  
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
