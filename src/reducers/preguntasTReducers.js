const INITIAL_STATE = {
    preguntasT: [],
    subtemas: [],
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_preguntasT':
            return {
                ...state,
                preguntasT: action.payload,
                cargando: false
            }
        case 'traer_subtemas':
            return {
                ...state,
                subtemas: action.payload
            }
        case 'crear_preguntaT':
            return {
                ...state,
                preguntasT: action.payload
            }
        case 'editar_preguntaT':
            return {
                ...state,
                preguntasT: action.payload
            }
        case 'eliminar_preguntaT':
            return {
                ...state,
                preguntasT: action.payload
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