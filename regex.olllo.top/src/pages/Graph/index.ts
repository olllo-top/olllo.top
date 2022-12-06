import { Graph, Addon, FunctionExt, Shape } from '@antv/x6';
import './registeredNode';
import graphData from './data';
import graphData_en from './data_en';
import { BasicGraphics } from './basic'
import { CombinationGraphics } from './combination';
import { CombinationGraphics_More } from './combination_More';
import { regexConnectType,regexSetting} from './config';
export default class FlowGraph {
  public static graph: Graph;

  private static stencil: Addon.Stencil;

  public static init() {
    this.graph = new Graph({
      container: document.getElementById('container')!,
      width: 1000,
      height: 800,
      resizing: {
        enabled: true,
      },
      grid: {
        size: 10,
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#cccccc',
            thickness: 1,
          },
          {
            color: '#5F95FF',
            thickness: 1,
            factor: 4,
          },
        ],
      },
      selecting: {
        enabled: true,
        multiple: true,
        rubberband: true,
        movable: true,
        showNodeSelectionBox: true,
        filter: ['groupNode'],
      },
      connecting: {
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        highlight: true,
        snap: true,
        createEdge() {
          return new Shape.Edge({
            attrs: {
              regex: {
                type: regexConnectType.join,
              },
              line: {
                stroke: '#5F95FF',
                strokeWidth: 1,
                targetMarker: {
                  name: 'classic',
                  size: 8,
                  width: 8,
                  height: 8,
                },
              },
            },
            router: {
              name: 'manhattan',
            },
            zIndex: 0,
          });
        },
        validateConnection({
          sourceView,
          targetView,
          sourceMagnet,
          targetMagnet,
        }) {
          if (sourceView === targetView) {
            return false;
          }
          if (!sourceMagnet) {
            return false;
          }
          if (!targetMagnet) {
            return false;
          }
          return true;
        },
      },
      highlighting: {
        magnetAvailable: {
          name: 'stroke',
          args: {
            padding: 4,
            attrs: {
              strokeWidth: 4,
              stroke: 'rgba(223,234,255)',
            },
          },
        },
        // 合并的时候边框变红
        embedding: {
          name: 'stroke',
          args: {
            padding: -1,
            attrs: {
              stroke: '#73d13d',
            },
          },
        },
      },
      snapline: true,
      history: true,
      clipboard: {
        enabled: true,
      },
      keyboard: {
        enabled: true,
      },
      embedding: {
        enabled: true,
        findParent({ node }) {
          const bbox = node.getBBox();
          return this.getNodes().filter((node) => {
            // 只有 data.parent 为 true 的节点才是父节点
            const data = node.getData<any>();
            if (data && data.parent) {
              const targetBBox = node.getBBox();
              return bbox.isIntersectWithRect(targetBBox);
            }

            return false;
          });
        },
      },

    });


    this.initStencil();
    this.initShape();
    this.initGraphShape();
    this.initEvent();
    return this.graph;
  }

  private static initStencil() {
    let title_languange = '基本元素'
    if (regexSetting.languange === 'English'){
      title_languange = 'Basic'
    }

    this.stencil = new Addon.Stencil({
      target: this.graph,
      stencilGraphWidth: 240,
      groups: [
        {
          name: 'basic',
          title: title_languange,
          collapsable: true,
          graphHeight: 1080,
        },
      ],
    });
    const stencilContainer = document.querySelector('#stencil');
    stencilContainer?.appendChild(this.stencil.container);
  }

  private static initShape() {
    const { graph } = this;
    const { reg_String,
      reg_Pattern, reg_Any, 
      reg_MetaB, reg_Metab, 
      reg_Caret, reg_Dollar, 
      reg_NonCapture, 
      reg_Word, reg_NotWord, 
      reg_Group, reg_NamedGroup, 
      reg_Repeat, reg_ZeroOrMore, reg_OneOrMore, reg_OneOrZero,
      reg_ConsumeNext, reg_ConsumeBack,
      reg_Seq, reg_Include, reg_Exclude,
      reg_X } = new CombinationGraphics(graph).init();

    const { reg_String_Group,
      reg_Caret_Group, reg_Dollar_Group,
      reg_Repeat_Group,
      reg_Seq_Include, reg_Seq_Exclude   } = new CombinationGraphics_More(graph).init();

    
    this.stencil.load([
      reg_X,
      reg_Caret, reg_Dollar,
      reg_Word, reg_NotWord, 
      reg_MetaB, reg_Metab, 

      reg_String, reg_String_Group,
      reg_Any,  reg_Group, 
      reg_Repeat, reg_ZeroOrMore, reg_OneOrMore, reg_OneOrZero,
      reg_Seq, reg_Include, reg_Exclude,

      reg_ConsumeNext, reg_ConsumeBack,

      reg_NonCapture, reg_NamedGroup, 
      reg_Pattern,

      ], 'basic');
    
  }

  private static initGraphShape() {
    if (regexSetting.languange === 'English'){
      this.graph.fromJSON(graphData_en as any);

    }
    else{
      this.graph.fromJSON(graphData as any);
    }
  }
   

  private static showPorts(ports: NodeListOf<SVGAElement>, show: boolean) {
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden';
    }
  }

  private static initEvent() {
    const { graph } = this;
    const container = document.getElementById('container')!;

    graph.on('node:contextmenu', ({ cell, view }) => {
      const oldText = cell.attr('text/textWrap/text') as string;
      const elem = view.container.querySelector('.x6-edit-text') as HTMLElement;
      if (elem == null) {
        return;
      }
      cell.attr('text/style/display', 'none');
      if (elem) {
        elem.style.display = '';
        elem.contentEditable = 'true';
        elem.innerText = oldText;
        elem.focus();
      }
      const onBlur = () => {
        cell.attr('text/textWrap/text', elem.innerText);
        cell.attr('text/style/display', '');
        elem.style.display = 'none';
        elem.contentEditable = 'false';
      };
      elem.addEventListener('blur', () => {
        onBlur();
        elem.removeEventListener('blur', onBlur);
      });
    });
    graph.on(
      'node:mouseenter',
      FunctionExt.debounce(() => {
        const ports = container.querySelectorAll(
          '.x6-port-body',
        ) as NodeListOf<SVGAElement>;
        this.showPorts(ports, true);
      }),
      500,
    );
    graph.on('node:mouseleave', () => {
      const ports = container.querySelectorAll(
        '.x6-port-body',
      ) as NodeListOf<SVGAElement>;
      this.showPorts(ports, false);
    });

    graph.on('node:collapse', ({ node, e }: any) => {
      e.stopPropagation();
      node.toggleCollapse();
      const collapsed = node.isCollapsed();
      const cells = node.getDescendants();
      cells.forEach((n: any) => {
        if (collapsed) {
          n.hide();
        } else {
          n.show();
        }
      });
    });


    graph.on('node:embedded', ({ cell }) => {

      // if (cell.shape !== 'groupNode') {
      //   cell.toFront();
      // }
    });

    graph.bindKey('backspace', () => {
      const cells = graph.getSelectedCells();
      if (cells.length) {
        graph.removeCells(cells);
      }
    });

    graph.on('node:change:parent', ({ node,cell }) => {
      // console.log(node.parent)
      // 根据是否有父类（包含），来改变提示
      if (node.parent === null){
        node.attr({
          body: {
            stroke: '#5F95FF',
          },
        })
      }
      else{
        // 加入组
        const chirld_cells = cell.getChildren()
        if (chirld_cells) {
          chirld_cells.forEach((c) => {
            c.toFront(); // 置顶
          });
        }

        node.attr({
          body: {
            stroke: '#73d13d',
          },
        })
      }

      
    });
  }
}
