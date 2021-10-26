import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListPostPage from "../pages/ListPostPage/ListPostPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/PostPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage"
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
                    <RegistrationPage/>
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