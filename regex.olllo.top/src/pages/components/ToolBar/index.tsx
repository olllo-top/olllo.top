import React,  { useEffect, useState } from 'react';
import { Toolbar } from '@antv/x6-react-components';
import FlowGraph from '../../Graph';
import { DataUri } from '@antv/x6';
import {
  ClearOutlined,
  SaveOutlined,
  PrinterOutlined,
  UndoOutlined,
  RedoOutlined,
  CopyOutlined,
  ScissorOutlined,
  SnippetsOutlined,
  FileImageOutlined, 
  UploadOutlined,
  DownSquareTwoTone,
} from '@ant-design/icons'; // https://ant.design/components/icon-cn/
import '@antv/x6-react-components/es/toolbar/style/index.css';

import Alert from '../../myComponents/alert';
import { regexSetting } from '../../Graph/config';

const Item = Toolbar.Item;
const Group = Toolbar.Group;

export default function () {
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const copy = () => {
    const { graph } = FlowGraph;
    const cells = graph.getSelectedCells();
    if (cells.length) {
      graph.copy(cells);
    }
    return false;
  };

  const cut = () => {
    const { graph } = FlowGraph;
    const cells = graph.getSelectedCells();
    if (cells.length) {
      graph.cut(cells);
    }
    return false;
  };

  const paste = () => {
    const { graph } = FlowGraph;
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 });
      graph.cleanSelection();
      graph.select(cells);
    }
    return false;
  };

  const save_json = () => {
    const { graph } = FlowGraph;
    var g = JSON.stringify(graph.toJSON(),undefined,4);
    var contentType = 'text/json';
    var fileName = 'regex.olllo.top.json';

    var a = document.createElement("a");
    var file = new Blob([g], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click(); 
  };


  const load_json = () =>{
    var l = document.getElementById('load_json_input');
    if (l !== null){
      l.click();
    }
  }
  
  const load_json_input = (e:any) => {
    // console.log(e.target.files);
    //console.log(e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();

      reader.readAsText(e.target.files[0]);

      reader.onload = (e: ProgressEvent) => {
        const temp = (e.target as FileReader).result;
        const graphData = JSON.parse(temp as any);
        
        console.log('reader',graphData);

        const { graph } = FlowGraph;
        graph.fromJSON(graphData);
      }      
      
    }
  }


  const popup=(x:string,y:string)=>{
    Alert.open({
        alertTip:x,
        alertType:y,
        closeAlert:function(){
            // console.log("关闭了...");
        }
    });
  }

  
  const get_regex = () => {  

    const { graph } = FlowGraph;
    var g = JSON.stringify(graph.toJSON(),undefined,4);

    const url = regexSetting.post_url_to_get_regex
  
    fetch(url,{
        method: 'POST',
        body: g,
        headers: {
                "Content-Type": "application/json;charset=utf8",
                'Access-Control-Request-Method': '*'
            },
        }).then(
            response => { 
                // console.log("获取数据") ; 
                response.json().then(
                    data => {
                        console.log(data);
                        if (data['result'] == 'ok'){
                          popup(data['value'],'show_ok');
                        }
                        else {
                          popup(data['value'],'show_bad');
                        }
                    }
                ).catch(
                    error => {
                        // console.log("获取数据出错",error);
                        popup(String(error),'show_bad');
                    })
            }    
        ).catch(error => {
                // console.log("在开始的时候出错", error);
                popup(String(error),'show_bad');
            }
    )

  };

  useEffect(() => {
    const { graph } = FlowGraph;
    const { history } = graph;
    setCanUndo(history.canUndo());
    setCanRedo(history.canRedo());
    history.on('change', () => {
      setCanUndo(history.canUndo());
      setCanRedo(history.canRedo());
    });

    graph.bindKey(['meta+z', 'ctrl+z'], () => {
      if (history.canUndo()) {
        history.undo();
      }
      return false;
    });
    graph.bindKey(['meta+shift+z', 'ctrl+y'], () => {
      if (history.canRedo()) {
        history.redo();
      }
      return false;
    });
    graph.bindKey(['meta+d', 'ctrl+d'], () => {
      graph.clearCells();
      return false;
    });
    graph.bindKey(['meta+s', 'ctrl+s'], () => {
      graph.toPNG((datauri: string) => {
        DataUri.downloadDataUri(datauri, 'chart.png');
      });
      return false;
    });
    graph.bindKey(['meta+p', 'ctrl+p'], () => {
      graph.printPreview();
      return false;
    });
    graph.bindKey(['meta+c', 'ctrl+c'], copy);
    graph.bindKey(['meta+v', 'ctrl+v'], paste);
    graph.bindKey(['meta+x', 'ctrl+x'], cut);
    graph.bindKey(['meta+l', 'ctrl+l'], load_json);
    graph.bindKey(['meta+j', 'ctrl+j'], save_json);
    graph.bindKey(['meta+g', 'ctrl+g'], get_regex);
  }, []);

  const handleClick = (name: string) => {
    const { graph } = FlowGraph;
    switch (name) {
      case 'undo':
        graph.history.undo();
        break;
      case 'redo':
        graph.history.redo();
        break;
      case 'delete':
        graph.clearCells();
        break;
      case 'save':
        graph.toPNG((datauri: string) => {
          DataUri.downloadDataUri(datauri, 'chart.png');
        });
        break;
      case 'print':
        graph.printPreview();
        break;
      case 'copy':
        copy();
        break;
      case 'cut':
        cut();
        break;
      case 'paste':
        paste();
        break;
      case 'load_json':
        load_json();
        break;
      case 'save_json':
        save_json();
        break;
      case 'get_regex':
        get_regex();
      default:
        break;
    }
  };

  return (
    <div>
      <Toolbar hoverEffect={true} size="big" onClick={handleClick}>
        <Group>
          <Item
            name="delete"
            icon={<ClearOutlined />}
            tooltip={ regexSetting.languange !== "English" ?" 清屏 (Cmd + D, Ctrl + D)" : ' Clear (Cmd + D, Ctrl + D)'}
          />
        </Group>
        <Group>
          <Item
            name="undo"
            tooltip={ regexSetting.languange !== "English" ? "上一步 (Cmd + Z, Ctrl + Z)" : "Undo (Cmd + Z, Ctrl + Z)"}
            icon={<UndoOutlined />}
            disabled={!canUndo}
          />
          <Item
            name="redo"
            tooltip={ regexSetting.languange !== "English" ? "下一步 (Cmd + Shift + Z, Ctrl + Y)" : "Redo (Cmd + Shift + Z, Ctrl + Y)"}
            icon={<RedoOutlined />}
            disabled={!canRedo}
          />
        </Group>
        <Group>
          <Item
            name="copy"
            tooltip={ regexSetting.languange !== "English" ? "复制 (Cmd + C, Ctrl + C)" : "Copy (Cmd + C, Ctrl + C)"}
            icon={<CopyOutlined />}
          />
          <Item
            name="cut"
            tooltip={ regexSetting.languange !== "English" ? "剪切 (Cmd + X, Ctrl + X)" : "Cut (Cmd + X, Ctrl + X)"}
            icon={<ScissorOutlined />}
          />
          <Item
            name="paste"
            tooltip={ regexSetting.languange !== "English" ? "粘贴 (Cmd + V, Ctrl + V)" : "Paste (Cmd + V, Ctrl + V)"}
            icon={<SnippetsOutlined />}
          />
        </Group>
        <Group>
          <Item
            name="save"
            icon={<FileImageOutlined />}
            tooltip={ regexSetting.languange !== "English" ?  "导出图片 (Cmd + S, Ctrl + S)": "Save as Image (Cmd + S, Ctrl + S)"}
          />
          <Item
            name="print"
            icon={<PrinterOutlined />}
            tooltip={ regexSetting.languange !== "English" ? "打印 (Cmd + P, Ctrl + P)" : "Print (Cmd + P, Ctrl + P)"}
          />
        </Group>

        <Group>
          <input
            id = "load_json_input"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => load_json_input(e)} 
          />
          <Item
            name="load_json"
            icon={<UploadOutlined />}
            tooltip={ regexSetting.languange !== "English" ? "读取数据 (Cmd + L, Ctrl + L)" : "Load Json (Cmd + L, Ctrl + L)"}
          />
          <Item
            name="save_json"
            icon={<SaveOutlined />}
            tooltip={ regexSetting.languange !== "English" ? "保存数据 (Cmd + J, Ctrl + J)" : "Save Json (Cmd + J, Ctrl + J)"}
          />
        </Group>
        
        <Group>
          <Item
            name="get_regex"
            icon={<DownSquareTwoTone />}
            tooltip={ regexSetting.languange !== "English" ? "获取RegEx (Cmd + G, Ctrl + G)" : "Get RegEx (Cmd + G, Ctrl + G)"}
          />
        </Group>
      </Toolbar>
    </div>
    
  );
}
