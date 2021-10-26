import { createMuiTheme } from "@material-ui/core";
import { firstColor, secondColor } from "./colors";

const theme = createMuiTheme({
    palette:{
        primary:{
            main: firstColor,
            contrastText: "white"
        },
        text:{
            primary: secondColor
        }
    }
})

export default theme