import React, { Component } from 'react';

export class Skills extends Component {
    render() {
        return (
     <div class="item">
     <h3 class="level-title">{this.props.item.name}</h3>
     <div class="progress level-bar">
         <div class="progress-bar theme-progress-bar" role="progressbar" style={{width: this.props.item.percent}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
     </div>                               
 </div>
        )
    }
}

export default Skills
