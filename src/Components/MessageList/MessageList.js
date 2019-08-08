import React, { Component } from 'react';
import axios from 'axios';

export default class MessageList extends Component {
    state = {
        Items: ''
    }

    componentDidMount = () => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => this.setState({ Items: response.data.messages }))
            .catch(e => console.log(e))

    }

    render() {
        return (
            <div className="chat__container" >
                {Array.from(this.state.Items).map((item, index) => {
                    return (
                        <section key={index}>
                            <article className='chat__msj'>
                                <img src={`/assets/${item.user.username.toLowerCase()}.png`} alt="Avatar" className="avatar" />
                                <strong className='chat__text101'>{item.user.name}</strong>
                                <h6 className='chat__date'>5 Nov - 1:37 PM</h6>
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