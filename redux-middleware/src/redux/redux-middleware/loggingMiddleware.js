export const loggingMiddleware = (store) =>(next)=> (action)=>{

    console.log("loggingMiddleware action:",action);
    next(action);
}