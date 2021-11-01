import React from "react";
import { Switch, Route } from "react-router-dom";
import ListPostPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import CreateLoginPage from "../pages/CreateLoginPage/CreateLoginPage"
import ErroPage from "../pages/ErroPage/ErroPage"


const Router = ({setRightButtonText}) => {
    return(
      
         
            <Switch>
                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path="/cadastro">
                    <CreateLoginPage setRightButtonText={setRightButtonText}/>
                </Route>

                <Route exact path="/lista-post">
                    <ListPostPage/>
                </Route>

                <Route exact path="/post/">
                    <PostPage/>
                </Route>

                <Route>
                    <ErroPage/>
                </Route>
            </Switch>
       
    )
}

export default Router