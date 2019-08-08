import React, { Component } from 'react';


export default class ToolbarRoboto extends Component {

    render() {
        return (
            <div className="toolbar102" style={this.props.showItemThree ? {} : { display: 'none' }}>
                <div className='left-items'>
                    <div className='left-itemDown102'>
                        <i className="fas fa-star silder__color103"></i>
                        <span className='left-itemText'>49a9ea</span>
                        <i className="fas fa-circle silder__color101"></i>
                        <span className='left-itemText'>#797978</span>
                    </div>
                </div>
                <div className='right-items'>
                    <div>
                        <i className="fas fa-link"></i>
                        <span>#797978</span>
                    </div>
                    <div className='right-itemText'>
                        <i className="far fa-file"></i>
                        <span>#797978</span>
                    </div>
                    <div className='silder__color104'>
                        <i className="fas fa-comment"></i>
                        <span>#797978</span>
                    </div>
                    <article className='silder__search right-itemText'>
                        <input className='silder__box' type="search" name="busqueda" placeholder="#797978" />
                    </article>
                </div>
            </div>
        );
    }
}