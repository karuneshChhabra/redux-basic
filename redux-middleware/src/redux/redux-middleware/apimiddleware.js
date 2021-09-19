export const apimiddleware = (store) =>(next) => (action)=>{

    console.log(action);
    if(!action.meta || action.meta.type !== 'api'){
        return next(action);
    }
    
    const URL= [action.meta.URL]
    console.log(URL);
    const fetchOptions = Object.assign({},action.meta);

    fetch(URL,fetchOptions)
    .then(res=>res.json(),
    err=>{
        console.log(err);
    }).then(res=>{
    if(res){
            console.log(res);
    }
    }).catch(err=>{
        console.log(err);
    });
    var actionValues= Object.assign({},action);

    delete actionValues.meta;

    store.dispatch(actionValues);


    


}