
//guardar en el cache dinamico
function updateCacheDinamic( dinamicCache, req, resp) {

    if( resp.ok ){

        return caches.open( dinamicCache ).then( cache => {
                            cache.put(req,resp.clone());
                            return resp.clone();
                        })

    }else{
        return resp;
    }

}
