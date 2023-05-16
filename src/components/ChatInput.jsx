import React, { useState  } from "react";
import { BsEmojiSmileFill ,BsBlockquoteRight,BsCodeSlash} from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";
import { GoMention } from "react-icons/go";
import {FaLink,FaBold,FaItalic,FaStrikethrough,FaListUl,FaListOl,FaFileUpload} from "react-icons/fa";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import "./chat.css";


export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  
  //const [boldText, setBoldText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
 
const [isBold, setIsBold] = useState(false);
const [isiltic, setitlic] = useState(false);
const [isstrike, setIsstrike] = useState(false);

  const handleButtonClick = () => {
    setIsBold(isBold?false:true);
    
  };
  const handleButtonitalic = () => {
    setitlic(isiltic?false:true);
  };
  const handleButtonstrike = () => {
    setIsstrike(isstrike?false:true);
  };
  
  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
  
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
 


  return (
    <Container>
      <div className="button-container">
       
        
      </div>
      <div >
      <div class="btn-group me-2" role="group" aria-label="First group" >
    
    <button type="button" class="btn btn-secondnary button1" onClick={handleButtonClick} title="BOLD"><FaBold/></button>
    <button type="button" class="btn btn-secondnary button1" onClick={handleButtonitalic} title="Italic"><FaItalic/></button>
    <button type="button" class="btn btn-secondnary button1" onClick={handleButtonstrike}title="StrikeThrough"><FaStrikethrough/></button>
    <button type="button" class="btn btn-secondnary button1" title="Link"><FaLink/></button>
    <button type="button" class="btn btn-secondnary button1" title=" Bulleted List"><FaListUl/></button>
    <button type="button" class="btn btn-secondnary button1" title=" Numbered List"><FaListOl/></button>
    <button type="button" class="btn btn-secondnary button1" title=" Blockquote"><BsBlockquoteRight/></button>
    <button type="button" class="btn btn-secondnary button1" title=" Code Snippet"><BsCodeSlash/></button>
    <button type="button" class="btn btn-secondnary button1" title=" Code block"><BiCodeBlock/></button>
  </div>


      <form className="input-container" onSubmit={(event) => sendChat(event)}>
      
        <input
         className= {isBold?'bold-input': isiltic?'italic-input' : isstrike?'strike':''}
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          
          value={msg} 
        />
        
        <button type="submit" title="Send message">
          <IoMdSend />
        </button>
        
      </form><div className="button-container">
        <div className="emoji" title="Emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
        
      
      <button type="button" class="btn btn-secondnary button1" title=" File upload"><FaFileUpload/></button>
    <button type="button" class="btn btn-secondnary button1" title=" Mention"><GoMention/></button></div>
    
    </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
 
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 70%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: white;
      }
    }
  }
`;
