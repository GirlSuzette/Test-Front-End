import React, { Component } from 'react';
import Rick from '../../assets/pickle_rick.png'


export default class Toolbar extends Component {

    render() {
        return (
            <div className="toolbar" style={this.props.showItemOne ? {} : { display: 'none' }}>
                <div className='left-items'>
                    <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                    <span>Pickle Rich</span>
                    <div className='left-itemDown'>
                        <i className="fas fa-star silder__color103"></i>
                        <i className="fas fa-circle silder__color101"></i>
                        <span className='left-itemText'>Online</span>
                        <i className="fas fa-home"></i>
                        <span className='left-itemText'>Trabajando remoto</span>
                    </div>

                </div>
                <div className='right-items'>
                    <div>
                        <i className="fas fa-link"></i>
                        <span>Link</span>
                    </div>
                    <div className='right-itemText'>
                        <i className="far fa-file"></i>
                        <span>Archivo</span>
                    </div>
                    <div className='silder__color104'>
                        <i className="fas fa-comment"></i>
                        <span>Chat</span>
                    </div>
                    <article className='silder__search right-itemText'>
                        <input className='silder__box' type="search" name="busqueda" placeholder="Busca un mensaje" />
                    </article>
                </div>
            </div>
        );
    }
}