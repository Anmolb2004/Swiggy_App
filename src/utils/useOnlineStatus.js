import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    [onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
    
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])

    //boolean value is returned
    return onlineStatus;
}

export default useOnlineStatus;