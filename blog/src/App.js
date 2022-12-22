 
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경]= useState(['JavaScript Study','React Study','Vue Study']);
  let [좋아요, 좋아요변경]= useState([0,0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  
  return (
    <div className="App">
      <div className = "black-nav">
        <h4>JUN BLOG</h4>
      </div>
    
     

     

{
        글제목.map(function(a, i){
          return <div className='list' key={i}>
          <h4 onClick={()=>{;setModal(!modal); settitle(i)} }> {글제목[i]} 
          <span onClick={(e)=>{ e.stopPropagation();
            let copy = [...좋아요]
            copy[i] = copy[i] + 1
            좋아요변경(copy)
          }}>       👍</span>{좋아요[i]}</h4>
          <p>참고 사이트: <a href='google.com'>google.com</a></p>
          <button onClick={()=>{
            let copy1 = [...글제목];
            copy1.splice(i, 1);
            글제목변경(copy1);
        
           
          }}>삭제</button>
          
        </div>
        })
      }
    <input onChange={(e)=> {입력값변경(e.target.value)}}></input>
    <button onClick={()=>{
      let copy = [...글제목];
      copy.unshift(입력값);
      글제목변경(copy)
    }}>공부한 내용 추가</button>
    
    {
        modal == true ? <Modal  title={title} 글제목변경={글제목변경} 글제목={글제목} /> : null
      }

 

    </div>
    
    

  );
      

    

  function Modal(props) {
    return(
      <div className='modal' >
        <h4>{props.글제목[props.title]}</h4>
        <p>공부한 내용 간단하게 정리: <input ></input></p>
        <p>공부한 날짜: <input ></input></p>
        <button onClick={()=>{
          {props.글제목변경(['Html Study','React Study','Vue Study'])}
        }}>글수정</button>
      </div>
    )
  }


}

export default App;

