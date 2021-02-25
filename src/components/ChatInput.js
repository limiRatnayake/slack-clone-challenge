import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function ChatInput() {
   return (
      <Container>
         <InputContainer>
            <form>
               <input type="text" placeholder="Message here ....." />
               {/* <SendButton>
                  <Send />
               </SendButton> */}
               <MessageButtons>
                  <TextFormatButtons>
                     <FormatBoldIcon />
                     <FormatItalicIcon />
                     <FormatListNumberedIcon />
                     <FormatListBulletedIcon />
                  </TextFormatButtons>
                  <InsertButtons>
                     <InsertEmoticonIcon />
                     <AttachFileIcon />
                     <SendIcon />
                  </InsertButtons>
               </MessageButtons>
            </form>
         </InputContainer>
      </Container>
   );
}

export default ChatInput;
const Container = styled.div`
   padding-left: 20px;
   padding-right: 20px;
   padding-bottom: 20px;
`;
const InputContainer = styled.div`
   border: 1px solid #f5f5f5;
   border-radius: 4px;

   form {
      height: 60px;
      align-items: center;
      padding-left: 10px;
      justify-content: space-between;
      input {
         flex: 1;
         border: none;
         font-size: 13px;
         background-color: transparent;
         height: 30px;
      }
      input:focus {
         outline: none;
      }
   }
`;

const MessageButtons = styled.div`
   display: flex;
   justify-content: space-between;
   color: #606060;

   .MuiSvgIcon-root {
      width: 20px;
      padding-right: 8px;
      cursor: pointer;
   }
`;

const TextFormatButtons = styled.div`
   display: flex;
   justify-content: space-between;
`;
const InsertButtons = styled.div``;

const SendButton = styled.div`
   background: #007a5a;
   border-radius: 2px;
   width: 32px;
   height: 32px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 5px;
   cursor: pointer;

   .MuiSvgIcon-root {
      width: 18px;
   }

   :hover {
      background: #148567;
   }
`;
