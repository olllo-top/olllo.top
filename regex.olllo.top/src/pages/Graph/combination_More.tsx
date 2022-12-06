import { Dom, Graph } from '@antv/x6';
import { shapeName,regexType,regexSetting } from './config';
import '@antv/x6-react-shape';
import './registeredNode';

export class CombinationGraphics_More {
  private graph: Graph;
  constructor(graph: Graph) {
    this.graph = graph;
    this.init();
  }
  public init() {
    let title_languange = '';
    if (regexSetting.languange === 'English'){
      const reg_String_Group = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.String_Group,
          },
          image: {
            'xlink:href':'/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text: 'String_Group',
            text_hint:"Combine String with Group",
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
      });
      const reg_Caret_Group = this.graph.createNode({
      });
  
      const reg_Dollar_Group = this.graph.createNode({
    
      });
  
      const reg_Repeat_Group = this.graph.createNode({
        
      });
  
      const reg_Seq_Include= this.graph.createNode({
        
      });
      const reg_Seq_Exclude= this.graph.createNode({
        
      });
  
      
  
      return {  reg_String_Group,
                reg_Caret_Group, reg_Dollar_Group,
                reg_Repeat_Group,
                reg_Seq_Include, reg_Seq_Exclude };
    }
    else{
      const reg_String_Group = this.graph.createNode({
        shape: shapeName.flowChartTitleRect,
        attrs: {
          regex: {
            type: regexType.String_Group,
          },
          image: {
            'xlink:href':'/static/favicon.png',
            height: 16,
            x: 6,
            y: 6,
          },
          title: {
            text:'字符串组',
            text_hint:'字符串组是字符串元素和分组元素的组合。',
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
      const reg_Caret_Group = this.graph.createNode({
      });
  
      const reg_Dollar_Group = this.graph.createNode({
    
      });
  
      const reg_Repeat_Group = this.graph.createNode({
        
      });
  
      const reg_Seq_Include= this.graph.createNode({
        
      });
      const reg_Seq_Exclude= this.graph.createNode({
        
      });
  
      
  
      return {  reg_String_Group,
                reg_Caret_Group, reg_Dollar_Group,
                reg_Repeat_Group,
                reg_Seq_Include, reg_Seq_Exclude };
    }
   

    
  }
}
