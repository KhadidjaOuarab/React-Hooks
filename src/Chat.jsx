import React from 'react'

function Chat({name,printValue,getValue,v}) {

    
    return (
        <div>
            <form onSubmit={printValue}>
            <h1>{name}</h1>
            <input onChange={getValue} type="text" ></input>
            <button type='submit' >Envoyer</button>
            </form>
            <h1>Message</h1>
            <p>{v}</p>
        </div>
    )
}

export default Chat
