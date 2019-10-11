let Utilities = {
    parseUrlParameters : (url) => {
        let urlparms = url.split("?");
        let kvs = urlparms[1].split("&");
        let parms = {};
        for(let kv of kvs) {
            let parm = kv.split('=');
            parms[parm[0]]=parm[1];
        }
        return parms;
    }
}