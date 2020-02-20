
const INITIAL_STATE = {
    modulos: [],
    nroModulos: 0,
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_modulos':
            return {
                ...state,
                modulos: action.payload,
                cargando: false
            }
        case 'crear_modulo':
            return {
                ...state,
                modulos: action.payload
            }
        case 'editar_modulo':
            return {
                ...state,
                modulos: action.payload
            }
        case 'eliminar_modulo':
            return {
                ...state,
                modulos: action.payload
            }
        case 'cargando':
            return {
                ...state,
                cargando: true
            }
        case 'set_nro_modulos':
            return {
                ...state,
                nroModulos: action.payload
            }
        default:
            return state;
    }
}