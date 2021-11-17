import React from "react";
import { useHistory } from "react-router-dom";

export const FunctionChangePage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }



}