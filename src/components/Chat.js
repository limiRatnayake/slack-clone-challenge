import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { channels } from "../data/ChannelData";

function Chat() {
   return (
      <Container>
         <ChatHeader>
            <Channel>
               <ChannelName>
                  #channel1
                  <StarBorderIcon />
               </ChannelName>
               <ChannelInfo>
                  Company-wide announcements and work-based matters
               </ChannelInfo>
            </Channel>

            <ChatDetails>
               <div>Details</div>
               <Info />
            </ChatDetails>
         </ChatHeader>
         <MessageContainer>
            <ChatMessage />
         </MessageContainer>
         <ChatInput />
      </Container>
   );
}

export default Chat;

const Container = styled.div`
   background: linear-gradient(
      to right top,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.1)
   );
   margin: 15px;
   border-radius: 10px;
   border: 1px solid #f5f5f5;
   display: grid;
   grid-template-rows: 64px auto min-content;
`;

const ChatHeader = styled.div`
   border-bottom: 1px solid #f5f5f5;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 20px;
   padding-right: 20px;
`;

const Channel = styled.div`
   font-weight: bold;
   padding-bottom: 10px;
`;
const ChannelName = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
`;
const ChannelInfo = styled.div`
   font-weight: 400;
   color: #606060;
   font-size: 13px;
   margin-top: 8px;
`;
const ChatDetails = styled.div`
   display: flex;
   align-items: center;
   color: #606060;
   margin-right: 16px;
`;
const Info = styled(InfoOutlinedIcon)`
   margin-left: 10px;
`;

const MessageContainer = styled.div`
   padding-left: 10px;
   padding-right: 10px;
   padding-top: 10px;

   overflow: hidden;

   .sc-eCssSg {
      border-radius: 17px;
   }
`;
