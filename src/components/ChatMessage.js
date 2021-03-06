import React from "react";
import styled from "styled-components";

function ChatMessage() {
   return (
      <Container>
         <UserAvatar>
            <img src="https://randomuser.me/api/portraits/women/70.jpg" />
         </UserAvatar>
         <MessageContent>
            <Name>
               Limani Ratnayake
               <span>2/23/2021 11:35:55 AM</span>
            </Name>
            <Text>This is the best challenge</Text>
         </MessageContent>
      </Container>
   );
}

export default ChatMessage;

const Container = styled.div`
   padding: 8px 20px;
   display: flex;
   background: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.5)
   );
   align-items: center;
   :hover {
      background: rgba(255, 255, 255, 0.6);
   }

   border-radius: 12px;
`;

const UserAvatar = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   overflow: hidden;
   margin-right: 8px;
   img {
      width: 100%;
   }
`;

const MessageContent = styled.div`
   display: flex;
   flex-direction: column;
`;
const Name = styled.span`
   font-weight: 900;
   font-size: 15px;
   line-height: 1.4;

   span {
      font-weight: 400;
      color: rgb(97, 96, 97);
      margin-left: 8px;
      font-size: 13px;
   }
`;
const Text = styled.span``;
