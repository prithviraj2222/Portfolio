import { useState } from "react";
import CursorContext from "./CursorContext";

const CursorState = (props) => {
    const [cursor, setCursor] = useState("default");
    
    return (
        <CursorContext.Provider value={{cursor, setCursor}}>
             {props.children}
        </CursorContext.Provider>
    )
}

export default CursorState;