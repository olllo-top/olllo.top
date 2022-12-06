import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './alert.css';
import { regexSetting } from '../Graph/config';
 
 
let defaultState = {
  alertStatus:false,
  alertTip:"提示",
  alertType:"show_ok",
  closeAlert:function(){}
}
 
class Alert extends Component{

  state = {
    ...defaultState
  };
  // css动画组件设置为目标组件
  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }
  // 关闭弹框
  confirm = () => {
    this.setState({
      alertStatus:false
    })
    this.state.closeAlert();
  }
  open =(options)=>{
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options
    })
  }
  close(){
    this.state.closeAlert();
    this.setState({
      ...defaultState
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
   
  render(){
    if (regexSetting.languange === 'English') {
      if (this.state.alertType == 'show_ok')
      return (
        <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName='hide'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>

          <div className="alert-con" style={this.state.alertStatus? {display:'block'}:{display:'none'}}>

            <div className="alert-context">
              <div className="alert-title"><a href={'http://www.olllo.top/visualr/#source='+this.state.alertTip} target="_blank" >Regex Result（Click re-Check）:</a></div>

              <div className="alert-content-detail">{this.state.alertTip}</div>
              
              <div className="alert-content-img"><img src="./static/favicon.png"  alt="olllo.top" /></div>

              <div className="alert-hint"><p>o................lll................o</p></div>
              
              <div className="comfirm" onClick={this.confirm}>OK</div>
            </div>

          </div>

        </ReactCSSTransitionGroup>
        
      );

      return (
        <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName='hide'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>

          <div className="alert-con" style={this.state.alertStatus? {display:'block'}:{display:'none'}}>

            <div className="alert-context-bad">
              <div className="alert-title-bad">Error</div>
              <div className="alert-content-detail-bad"><p>{this.state.alertTip}</p></div>
      
              <div className="comfirm" onClick={this.confirm}>OK</div>
            </div>

          </div>

        </ReactCSSTransitionGroup>
        
      );
    }
    
    
    if (this.state.alertType == 'show_ok')
      return (
        <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName='hide'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>

          <div className="alert-con" style={this.state.alertStatus? {display:'block'}:{display:'none'}}>

            <div className="alert-context">
              <div className="alert-title"><a href={'http://www.olllo.top/visualr/#source='+this.state.alertTip} target="_blank" >正则表达式（点击验证）</a></div>

              <div className="alert-content-detail">{this.state.alertTip}</div>
              
              <div className="alert-content-img"><img src="./static/weixin.png"  alt="olllo微信" /><img src="./static/zhifubao.png"  alt="olllo支付宝" /></div>

              <div className="alert-hint">帮到你了吗？扫码请我吃个汉堡包吧！</div>
              
              <div className="comfirm" onClick={this.confirm}>确认</div>
            </div>

          </div>

        </ReactCSSTransitionGroup>
        
      );

    return (
      <ReactCSSTransitionGroup
        component={this.FirstChild}
        transitionName='hide'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>

        <div className="alert-con" style={this.state.alertStatus? {display:'block'}:{display:'none'}}>

          <div className="alert-context-bad">
            <div className="alert-title-bad">出错</div>
            <div className="alert-content-detail-bad"><p>{this.state.alertTip}</p></div>
    
            <div className="comfirm" onClick={this.confirm}>确认</div>
          </div>

        </div>

      </ReactCSSTransitionGroup>
      
    );


    }
  }
  

let div = document.createElement('div');
let props = {
   
};
document.body.appendChild(div);
 
let Box = ReactDOM.render(React.createElement(
  Alert,
  props
),div);
 
 
 
export default Box;



 