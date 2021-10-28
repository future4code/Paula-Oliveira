import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListPostPage from "../pages/ListPostPage/ListPostPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import CreateLoginPage from "../pages/CreateLoginPage/CreateLoginPage"
import ErroPage from "../pages/ErroPage/ErroPage"
import Header from "../components/Header/Header";

const Router = () => {
    return(
        <BrowserRouter>
         <Header/>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/cadastro">
                    <CreateLoginPage/>
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
        </BrowserRouter>
    )
}

export default Router