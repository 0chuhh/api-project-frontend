import Cookies from 'js-cookie';
export function getSessionId():string {
    let sessionId
    sessionId = Cookies.get('sessionId')?.toString()
    if(sessionId !== undefined){
        return sessionId
    }else{
        setSessionId()
        sessionId = getSessionId()
        return sessionId
    }
        
}
const setSessionId = () =>{
    var expires = new Date(Date.now());
    expires.setDate(expires.getDate() + 4);
    Cookies.set('sessionId', Date.now().toString(), {expires: expires, sameSite:'Lax', domain:'localhost'})
}