import React from 'react';

export default class Product extends React.Component{
  render(){
    console.dir(this.props['data-progress']);
    const width = {
      width:this.props['data-progress'] + '%'
    }
    const percentLocation = width.width == '100%' ? 'statusBar__band_right' :
    width.width == '0%' ? 'statusBar__band_left' : ''
    return(
      <div className="statusBar-wrap">
        <span className="statusBar__number">№3208957205790</span>
        <div className="statusBar">
          <div style={width} className={"statusBar__band " + percentLocation}>
            <span className="statusBar__percent">{this.props['data-progress']}%</span>
          </div>
        </div>
      </div>
    )
  }
}
