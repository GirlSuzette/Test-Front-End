import React, { Component } from 'react';
import Rick from '../../image/pickle_rick.png'


export default class ToolbarRoboto extends Component {

    render() {
        return (
            <div className="toolbar101" style={this.props.showItemTwo ? {} : { display: 'none' }}>
                <div className='left-items'>
                    <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                    <span>Roboto Regular 20- #172135</span>
                    <div className='left-itemDown101'>
                        <i className="fas fa-star silder__color103"></i>
                        <i className="fas fa-circle silder__color101"></i>
                        <span className='left-itemText'>Roboto Regular 16- #797978</span>
                        <i className="fas fa-home"></i>
                        <span className='left-itemText'>Roboto Regular 16- #797978</span>
                    </div>
                </div>
                <div className='right-items'>
                    <div>
                        <i className="fas fa-link"></i>
                        <span>Roboto Regular 14- #797978</span>
                    </div>
                    <div className='right-itemText'>
                        <i className="far fa-file"></i>
                        <span>Roboto Regular 14- #797978</span>
                    </div>
                    <div className='silder__color104'>
                        <i className="fas fa-comment"></i>
                        <span>Roboto Regular 14- #797978</span>
                    </div>
                    <article className='silder__search right-itemText'>
                        <input className='silder__box' type="search" name="busqueda" placeholder="Roboto Light 16- #797978" />
                    </article>
                </div>
            </div>
        );
    }
}