const INITIAL_STATE = {
    respuestas: [], 
    cargando: false   
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_respuestas':
            return { 
                ...state, 
                respuestas: action.payload,
                cargando: false
             }
        case 'crear_respuesta':
            return {
                ...state,
                respuestas: action.payload
            }
        case 'editar_respuesta':
            return {
                ...state,
                respuestas: action.payload
            }
        case 'eliminar_respuesta':
            return {
                ...state,
                respuestas: action.payload
            }
        case 'cargando':
            return {
                ...state,
                cargando: true
            }
        default:
            return state;
    }
}