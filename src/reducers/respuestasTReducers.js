const INITIAL_STATE = {
    respuestasT: [],
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_respuestasT':
            return {
                ...state,
                respuestasT: action.payload,
                cargando: false
            }
        case 'crear_respuestasT':
            return {
                ...state,
                respuestasT: action.payload
            }
        case 'editar_respuestasT':
            return {
                ...state,
                respuestasT: action.payload
            }
        case 'eliminar_respuestasT':
            return {
                ...state,
                respuestasT: action.payload
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