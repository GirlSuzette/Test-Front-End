import React, { Component } from 'react';
import logo from '../../assets/Rick-and-morty.png';
import avatar from '../../assets/bender.png';
import Rick from '../../assets/pickle_rick.png'

export default class SidebarRoboto extends Component {

    render() {
        return (
            <div className="app__title">
                <article className='silder__flex'>
                    <img src={logo} alt="logo" className="silder__img" />
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </article>
                <hr className='silder__divide' />
                <article className='silder__search'>
                    <input className='silder__box' type="search" name="busqueda" placeholder="Busca personas y canales" />
                </article>
                <hr className='silder__divide' />
                <article>
                    <span>Roboto Regular 16 - #e6e6e6</span>
                    <div>
                        <i className="fas fa-circle silder__color101"></i>
                        <img src={avatar} alt="Avatar" className="avatar silder__Fav" />
                        <span>Roboto Light 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-circle silder__color102"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Roboto Regular 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-moon"></i>
                        <span className="silder__Fav" ># Roboto Light 14 - #ccccc</span>
                    </div>
                </article>
                <hr className='silder__divide' />
                <article>
                    <span>Recientes Regular 16 - #e6e6e6</span>
                    <div>
                        <i className="fas fa-circle silder__color101"></i>
                        <img src={avatar} alt="Avatar" className="avatar silder__Fav" />
                        <span>Roboto Light 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-moon"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Roboto Light 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-circle silder__color102"></i>
                        <span className="silder__Fav avatar" ># Roboto Light 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-circle silder__color102"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Roboto Light 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-moon"></i>
                        <span className="silder__Fav" ># Roboto Light 14 - #ccccc</span>
                    </div>
                </article>
                <hr className='silder__divide' />
                <article >
                    <span>Canales:</span>
                    <div className='silder__Caneles'>
                        <span className="silder__Fav" ># Roboto Light 14 - #ccccc</span>
                    </div>
                    <div className='silder__Caneles'>
                        <span className="silder__Fav" ># Roboto Light 14 - #ccccc</span>
                    </div>
                    <div className='silder__Caneles'>
                        <span className="silder__Fav" ># Roboto Light 14 - #ccccc</span>
                    </div>
                </article>
                <hr className='silder__divide' />
                <article >
                    <span>Personas:</span>
                    <div>
                        <i className="fas fa-circle silder__color102"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Roboto Light 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-moon"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Roboto Light 14 - #ccccc</span>
                    </div>
                    <div>
                        <i className="fas fa-circle silder__color101"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Pickie Rick</span>
                    </div>
                    <div>
                        <i className="fas fa-circle silder__color102"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Pickie Rick</span>
                    </div>
                    <div>
                        <i className="fas fa-circle silder__color101"></i>
                        <img src={Rick} alt="Avatar" className="avatar silder__Fav" />
                        <span>Pickie Rick</span>
                    </div>
                </article>
            </div>
        );
    }
}