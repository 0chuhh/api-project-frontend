import Cookies from "js-cookie";

export function CookieChangeListener(callback:Function, interval = 1000) {
    let lastCookie = Cookies.get('token');
    console.log(lastCookie)
    setInterval(()=> {
      let cookie = Cookies.get('token');
      if (cookie !== lastCookie) {
        try {
          callback();
        } finally {
          lastCookie = cookie;
        }
      }
    }, interval);
  }