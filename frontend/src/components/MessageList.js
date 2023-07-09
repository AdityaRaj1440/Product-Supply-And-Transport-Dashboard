import axios from "axios"
import { useState } from "react";

const MessageList= ({category, id, filterDetail}) => {

    const [messageList, setMessageList]= useState([])
    const [filterData, setFilterData]= useState([])

    if(messageList.length==0){
    const config = {
        headers: { category: category, id: id}
      };
    axios.get("http://localhost:3005/chats/get-all-chat-messages", config).then(response=> {
      setMessageList(response.data);
    })
}
else{
    if((filterData.length===0 ) && filterDetail[0]!=='None' ) {
        const config= { headers: {category: category, id: id, column: filterDetail[0], value: filterDetail[1]}}
        axios.get("http://localhost:3005/chats/get-filtered-chat-messages", config).then(response=> {
            if(response.data.length===0)
            {
                console.log('Empty data')
                alert('No Results Found. Reverting to all messages!')
                window.location.reload()
            }
            else{
                setFilterData(response.data)
            }

        })
    }
}
if(filterDetail[0]=='None' && filterData.length>0) {
    setFilterData([])
}
    return (
        <>
        <h1>All received messages</h1>
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>To</th>
                    <th>From</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
            {filterData.length>0?filterData.map((filterRow, index)=> (
                <tr>
                <td>{filterRow.o_id}</td>
                <td>{filterRow.to_address}</td>
                <td>{filterRow.from_address}</td>
                <td>{filterRow.message}</td>
            </tr> 
            )):Array.isArray(messageList)?messageList.map((messageReceived, index)=> ( 
                <tr>
                    <td>{messageReceived.o_id}</td>
                    <td>{messageReceived.to_address}</td>
                    <td>{messageReceived.from_address}</td>
                    <td>{messageReceived.message}</td>
                </tr>                    
                )):null}
            </tbody>
        </table>
        </>
    )
}

export default MessageList