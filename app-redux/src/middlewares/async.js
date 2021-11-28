// Creamos aquí un Middleware
export const asyncMiddleware = store => next => action => {
    // preguntamos si el objeto action es una función y si es así se le pasar
    // dispatch y getState 
    if (typeof action === 'function') {
        return action (store.dispatch, store.getState) // importante retornar esto
    }
    return next(action)
}