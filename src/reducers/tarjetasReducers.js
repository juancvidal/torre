
const INITIAL_STATE = {
    tarjetas: [],
    subtemas: [],
    nroTarjetas: 0,
    file: '',
    type: '',
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_tarjetas':
            return {
                ...state,
                tarjetas: action.payload,
                cargando: false
            }
        case 'traer_subtemas':
            return {
                ...state,
                subtemas: action.payload
            }
        case 'crear_tarjeta':
            return {
                ...state,
                tarjetas: action.payload
            }
        case 'editar_tarjeta':
            return {
                ...state,
                tarjetas: action.payload
            }
        case 'eliminar_tarjeta':
            return {
                ...state,
                tarjetas: action.payload
            }
        case 'cargando':
            return {
                ...state,
                cargando: true
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
        case 'set_nro_tarjetas':
            return {
                ...state,
                nroTarjetas: action.payload
            }
        default:
            return state;
    }
}