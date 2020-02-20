
const INITIAL_STATE = {
    tarjetasSaberMas: [],
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_tarjetas_sm':
            return {
                ...state,
                tarjetasSaberMas: action.payload,
                cargando: false
            }
        case 'crear_tarjeta_sm':
            return {
                ...state,
                tarjetasSaberMas: action.payload
            }
        case 'editar_tarjeta_sm':
            return {
                ...state,
                tarjetasSaberMas: action.payload
            }
        case 'eliminar_tarjeta_sm':
            return {
                ...state,
                tarjetasSaberMas: action.payload
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