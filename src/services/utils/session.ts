import { ReactSession } from 'react-client-session';

export function getSessionId():string {
    ReactSession.setStoreType("cookie")
    let sessionId
    try {
        sessionId = ReactSession.get("sessionid")
        return sessionId
    } catch (error) {
        setSessionId()
        sessionId = getSessionId()
        return sessionId
    }
}
const setSessionId = () =>{
    ReactSession.setStoreType("cookie");
    ReactSession.set("sessionid", Date.now().toString());
}