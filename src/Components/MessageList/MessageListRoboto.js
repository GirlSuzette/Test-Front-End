import React, { Component } from 'react';
import { messagesParteOne, messagesParteTwo } from '../../utils/data'


export default class MessageListRoboto extends Component {


    render() {
        return (
            <div className="chat__container" >
                {messagesParteOne.map((item, index) => {
                    return (
                        <section key={index}>
                            <article className='chat__msj'>
                                <img src={`/assets/${item.user.image.toLowerCase()}.png`} alt="Avatar" className="avatar" />
                                <strong className='chat__text101'>{item.user.name}</strong>
                                <h6 className='chat__date'>{item.user.username}</h6>
                            </article>
                            <p className='chat__text100'>{item.message}</p>
                        </section>
                    )
                })
                }
                <hr />
                {messagesParteTwo.map((item, index) => {
                    return (
                        <section key={index}>
                            <article className='chat__msj'>
                                <img src={`/assets/${item.user.image.toLowerCase()}.png`} alt="Avatar" className="avatar" />
                                <strong className='chat__text101'>{item.user.name}</strong>
                                <h6 className='chat__date'>{item.user.username}</h6>
                            </article>
                            <p className='chat__text100'>{item.message}</p>
                        </section>
                    )
                })
                }
            </div >
        );
    }
}