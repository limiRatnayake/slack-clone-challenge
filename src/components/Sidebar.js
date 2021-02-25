import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItems } from "../data/SidebarData";
import { channels } from "../data/ChannelData";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";

function Sidebar(props) {
   //props are properties of a specific component

   const addChannel = () => {
      const promptName = prompt("Enter your channel name ?");
      if (promptName) {
         db.collection("rooms").add({
            name: promptName,
         });
      }
   };
   return (
      <Container>
         <WorkspaceContainer>
            <Name>Cleaver Programmer</Name>
            <NewMessage>
               <AddCircleOutlineIcon />
            </NewMessage>
         </WorkspaceContainer>

         <MainChannels>
            {sidebarItems.map((item) => (
               <MainChannelItem>
                  {item.icon}
                  {item.text}
               </MainChannelItem>
            ))}
         </MainChannels>
         <ChannelContainer>
            <NewChannelContainer>
               <div>Channel</div>
               <AddIcon onClick={addChannel} />
            </NewChannelContainer>
            <ChannelsList>
               {props.rooms.map((channelItems) => (
                  <Channel># {channelItems.name}</Channel>
               ))}
            </ChannelsList>
         </ChannelContainer>
      </Container>
   );
}

export default Sidebar;

const Container = styled.div`
   border-right: 1px solid #f5f5f5;
   background: linear-gradient(
      to right top,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.5)
   );
`;

const WorkspaceContainer = styled.div`
   color: black;
   height: 64px;
   display: flex;
   align-items: center;
   padding-left: 19px;
   justify-content: space-between;
   border-bottom: 1px solid #f5f5f5;
`;
const Name = styled.div`
   color: black;
`;
const NewMessage = styled.div`
   width: 36px;
   height: 36px;
   border-radius: 50%;
   background: white;
   color: #3f0e40;

   fill: #3f0e40;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 20px;
   cursor: pointer;
`;

const MainChannels = styled.div`
   padding-top: 20px;
`;
const MainChannelItem = styled.div`
   //    color: rgb(188, 171, 188);
   color: black;
   display: grid;
   grid-template-columns: 15% auto;
   height: 28px;
   align-items: center;
   padding-left: 19px;
   cursor: pointer;
   :hover {
      background: #fafafa;
   }
`;

const ChannelContainer = styled.div`
   //    color: rgb(188, 171, 188);
   color: black;
   margin-top: 10px;
`;
const NewChannelContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 28px;
   padding-left: 19px;
   padding-right: 12px;
`;

const ChannelsList = styled.div``;
const Channel = styled.div`
   height: 28px;
   display: flex;
   align-items: center;
   padding-left: 19px;
   cursor: pointer;
   :hover {
      background: white;
   }
`;
