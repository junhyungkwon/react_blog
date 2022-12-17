 
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경]= useState(['남자 코트 추천','남자 정장 추천','남자 바지 추천']);
  let [좋아요, 좋아요변경]= useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(0);
  
  return (
    <div className="App">
      <div className = "black-nav">
        <h4>JUN BLOG</h4>
      </div>
    
      {/* <div className='list'>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}>가나다순정렬</button>



       <button onClick={()=>{ 
        let copy = [...글제목];
        copy[0]= '여자 코트 추천';
        글제목변경(copy)
      }}>글제목변경</button>
        <h4>{글제목[0]} <span onClick={()=>{좋아요변경(좋아요+1)}}>👍</span>{좋아요}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4> {글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}> {글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>  */}

     

{
        글제목.map(function(a, i){
          return <div className='list' key={i}>
          <h4 onClick={()=>{setModal(!modal); settitle(i)} }> {글제목[i]} 
          <span onClick={()=>{
            let copy = [...좋아요]
            copy[i] = copy[i] + 1
            좋아요변경(copy)
          }}>👍</span>{좋아요[i]}</h4>
          <p>2월 17일 발행</p>
        </div>
        })
      }
    
    {
        modal == true ? <Modal  title={title} 글제목변경={글제목변경} 글제목={글제목} /> : null
      }

 

    </div>
    
    

  );
      

    

  function Modal(props) {
    return(
      <div className='modal' >
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          {props.글제목변경(['여자 코트 추천','남자 정장 추천','남자 바지 추천'])}
        }}>글수정</button>
      </div>
    )
  }


}

export default App;
