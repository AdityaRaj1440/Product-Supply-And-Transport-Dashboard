import io from 'socket.io-client'
import { useState, useEffect } from 'react'
import axios from 'axios'

const socket = io.connect("http://localhost:3005/")

const ChatRoom= ({o_id, m_id, t_id, sender_category}) => {

    const [room, setRoom]= useState("");
    const [message, setMessage]= useState("")
    const [chatList, setChatList]= useState([])


    const joinRoom = () => {
        console.log('joining room')
        console.log("list",chatList)
        socket.emit("join_room", o_id);
        setRoom(o_id)
    }
    
        if(room==="" || room!==o_id) {
            if(Array.isArray(chatList) || chatList.length==0){
                const config = {
                    headers: { "id": parseInt(o_id.slice(3))}
                  };
                axios.get('http://localhost:3005/chats/get-all-chats', config).then(response=> {
                    console.log(response.data)
                        setChatList(response.data)
                    })
                }
            joinRoom()
        }
        
    

    const sendMessage= (e) => {
        e.preventDefault()
        // console.log('Hello World!!:-', room)
        console.log("sending:",message)
        console.log("list1",chatList)
        const body= {
            "message": message,
            "o_id": parseInt(o_id.slice(3)),
            "sender_category": sender_category
        }
        socket.emit("send_message",{message, room})
        axios.post('http://localhost:3005/chats/add-chat', body).then(response=> {
            console.log('message saved')
            const mes= {"message": body.message, "sender_category": body.sender_category}
            console.log('Doing ig::',mes)
            setChatList(chatList=> [...chatList, mes])
            })
        // socket.emit("send_message",{message})

    }

    useEffect(()=> {
        socket.on("received_message", (data)=> {
            console.log("message is received")
            let sender= ""
            if(sender_category==='manufacturer')
                sender= 'transporter'
            else
                sender='manufacturer'
            const mes= {"message": data.message, "sender_category":sender}
            // console.log("i")
            const config = {
                headers: { "id": parseInt(o_id.slice(3))}
              };
            axios.get('http://localhost:3005/chats/get-all-chats', config).then(response=> {
                    console.log(response.data)
                        setChatList(response.data)
                    })
        })
    }, [socket])

    return (
    <div class="chatRoom">
        <center>
            <h1>{o_id}</h1>
        
        <table className="fixed_header">
            <thead>
            <tr>
               <th>MANUFACTURER</th>
               <th>TRANSPORTER</th> 
            </tr>
            <tr>
                <th>ID: {m_id}</th>
                <th>ID: {t_id}</th>
            </tr>
            </thead>
            <tbody>
            {Array.isArray(chatList)?chatList.map((chat, index)=> ( 
                <tr>
                    <td>{chat.sender_category==='manufacturer'?chat.message:null}</td>
                    <td>{chat.sender_category==='transporter'?chat.message:null}</td>
                </tr>                    
                )):null}
            </tbody>
            <center>
            <input placeholder="Message..." onChange={(e)=> setMessage(e.target.value)} id='messageAdd'/>
                <button onClick={sendMessage} id="sendMessage">Send Message</button>
                </center>
        </table>
        
        </center>
    </div>
    )
}

export default ChatRoom;