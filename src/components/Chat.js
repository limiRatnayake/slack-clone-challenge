import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import { channels } from "../data/ChannelData";

function Chat() {
   return (
      <Container>
         <ChatHeader>
            <Main>
               <Channel>
                  #channel1
                  <StarBorderIcon />
               </Channel>
               <ChatDescription>
                  Company-wide announcements and work-based matters
               </ChatDescription>
            </Main>
            <ChatDetails>
               <Type>Details</Type>
               <InfoOutlinedIcon />
            </ChatDetails>
         </ChatHeader>
      </Container>
   );
}

export default Chat;

const Container = styled.div`
   //    width: 99%;
   background: linear-gradient(
      to right top,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.1)
   );
   margin: 15px;
   border-radius: 10px;
   border: 1px solid #f5f5f5;
`;

const ChatHeader = styled.div`
   border-bottom: 1px solid #f5f5f5;
   height: 64px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 16px;
   padding-right: 16px;
`;
const Main = styled.div``;
const Channel = styled.div`
   display: flex;
   align-items: center;
   font-weight: bold;
   padding-bottom: 10px;
`;
const ChatDescription = styled.div`
   color: gray;
`;
const ChatDetails = styled.div`
   display: flex;
   align-items: center;
   color: gray;
`;
const Type = styled.div`
   padding-right: 16px;
`;
