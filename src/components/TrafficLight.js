import React, {Component} from 'react';
import './TrafficLight.css'
import classNames from 'classnames';

class TraficLight extends Component{
    
    
    render(){
        console.log(this.props.color);
        return(
            <div className={classNames(this.props.shape,{active: this.props.color === this.props.shape})}></div>
            
        );
    }
}

export default TraficLight;