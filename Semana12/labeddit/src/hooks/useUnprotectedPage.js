import { useHistory } from "react-router-dom";
import { useLayoutEffect} from "react";
import { goToListPost } from "../routes/coordenator"

const useUnprotectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            goToListPost(history)
        }
    }, [history])
}

export default useUnprotectedPage
    
