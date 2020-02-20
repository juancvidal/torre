
const INITIAL_STATE = {
    usuarios: [],
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_usuarios':
            return { 
                ...state, 
                usuarios: action.payload,
                cargando: false
             }
        case 'crear_usuario':
            return {
                ...state,
                usuarios: action.payload
            }
        case 'editar_usuario':
            return {
                ...state,
                usuarios: action.payload
            }
        case 'eliminar_usuario':
            return {
                ...state,
                usuarios: action.payload
            }
        case 'cargando':
            return { ...state, cargando: true }
        default:
            return state;
    }
}