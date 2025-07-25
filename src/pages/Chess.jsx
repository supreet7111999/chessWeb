import { Chessboard } from 'react-chessboard';
import {socket} from '../utils/socket';
import { useEffect } from 'react';


function Chess() {
  // const test=()=>{
  //   socket.emit("churan");
  // }
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
    <div style={{width:'700px',margin:'auto',height:'700px'}}>
        <Chessboard options={chessboardOptions} />
    </div>
  );
}

export default Chess;