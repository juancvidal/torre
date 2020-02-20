
const INITIAL_STATE = {
    subtemas: [],
    modulos: [],
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_subtemas':
            return {
                ...state,
                subtemas: action.payload,
                cargando: false
            }
        case 'traer_modulos':
            return {
                ...state,
                modulos: action.payload
            }
        case 'crear_subtema':
            return {
                ...state,
                subtemas: action.payload
            }
        case 'editar_subtema':
            return {
                ...state,
                subtemas: action.payload
            }
        case 'eliminar_subtema':
            return {
                ...state,
                subtemas: action.payload
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