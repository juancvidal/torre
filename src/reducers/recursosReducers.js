
const INITIAL_STATE = {
    recursos: [],
    lastId: 4,
    file: '',
    type: '',
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_recursos':
            return {
                ...state,
                recursos: action.payload,
                cargando: false
            }
        case 'crear_recurso':
            return {
                ...state,
                recursos: action.payload
            }
        case 'editar_recurso':
            return {
                ...state,
                recursos: action.payload
            }
        case 'eliminar_recurso':
            return {
                ...state,
                recursos: action.payload
            }
        case 'set_file':
            return {
                ...state,
                file: action.payload
            }
        case 'set_type':
            return {
                ...state,
                type: action.payload
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