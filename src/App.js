import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from "./firebase";
import { FaceRounded } from "@material-ui/icons";

function App() {
   //App()has a state that means a database - to use it we call useState react function
   //useState is another react function it allow us to have a value and a function to change it
   const [rooms, setRooms] = useState([]);
   const getChannels = () => {
      db.collection("rooms").onSnapshot((snapshot) => {
         setRooms(
            snapshot.docs.map((doc) => {
               return { id: doc.id, name: doc.data().name };
            })
         );
      });
   };

   //useEffect is a function from react everytime it calls when something is updated  and only getChannel function calls once
   useEffect(() => {
      getChannels();
   }, []);

   console.log(rooms);
   return (
      <div className="App">
         <Router>
            <Container>
               <Header />
               <Main>
                  <Sidebar rooms={rooms} />
                  <Switch>
                     <Route path="/room">
                        <Chat />
                     </Route>
                     <Route path="/">
                        <Login />
                     </Route>
                  </Switch>
               </Main>
            </Container>
         </Router>
      </div>
   );
}

export default App;

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: grid;
   grid-template-rows: 40px auto;
   background: linear-gradient(to right top, #3eadcf, #abe9cd);
`;

const Main = styled.div`
   display: grid;
   background: linear-gradient(to right top, #3eadcf, #abe9cd);
   grid-template-columns: 260px auto;
`;
