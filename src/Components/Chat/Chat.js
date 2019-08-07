import React, { Component } from 'react';
import avatar from '../../image/bender.png'

export default class Chat extends Component {

    render() {
        return (
            <div className="compose">
                <div>
                    <img src={avatar} alt="Avatar" className="avatar silder__Fav" />
                    <input type='text' className='compose-input' placeholder="Escribe un comentario" />
                </div>
                <div>
                    <i className="fas fa-paperclip toolbar-button"></i>
                    <i className="far fa-grin-alt toolbar-button"></i>
                    <i className="fas fa-paper-plane toolbar-button"></i>
                </div>


            </div>
        );
    }
}