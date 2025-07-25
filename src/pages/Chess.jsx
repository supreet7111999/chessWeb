import { Chessboard } from 'react-chessboard';
import {socket} from '../utils/socket';
import { useEffect } from 'react';
import { useState } from 'react';


function Chess() {
  // const test=()=>{
  //   socket.emit("churan");
  // }
  const sendRoomId=async(roomId)=>{
    console.log("jhbhj");
    socket.emit("joinChat",(roomId));
  }
  const [roomId,setRoomId]=useState("");
  useEffect(()=>{
    // test();
    socket.emit("churan");
    console.log("churran");
  },[])
  const chessboardOptions = {
    // your config options here
    allowAutoScroll:true
  };

  return (
    <div  className='flex items-center justify-center w-[950px] h-[700px] gap-x-5 mx-[200px]'>
        <div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[250px] border p-4">
          <legend className="fieldset-legend">RoomId</legend>
          <input type="text" className="input" placeholder="My awesome page" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
          <button className="btn btn-neutral" onClick={()=>sendRoomId(roomId)}>Submit</button>
        </fieldset>
        </div>
        <Chessboard options={chessboardOptions} />
    </div>
  );
}

export default Chess;