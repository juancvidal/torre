const INITIAL_STATE = {
    preguntas: [],
    respuestas: [],
    modulos: [],
    positionsDefaults: [],
    textsDefaults: [],
    scoresDefaults: [],
    ids: [],
    cargando: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'traer_preguntas':
            return {
                ...state,
                preguntas: action.payload,
                cargando: false
            }
        case 'traer_modulos':
            return {
                ...state,
                modulos: action.payload                
            }
        case 'crear_pregunta':
            return {
                ...state,
                preguntas: action.payload
            }
        case 'editar_pregunta':
            return {
                ...state,
                preguntas: action.payload
            }
        case 'eliminar_pregunta':
            return {
                ...state,
                preguntas: action.payload
            }
        case 'cargando':
            return {
                ...state,
                cargando: true
            }
        case 'traer_respuestas':
            return {
                ...state,
                respuestas: action.payload
            }
        case 'set_ids':
            return {
                ...state,
                ids: action.payload
            }
        case 'set_positions':
            return {
                ...state,
                positionsDefaults: action.payload
            }
        case 'set_texts':
            return {
                ...state,
                textsDefaults: action.payload
            }
        case 'set_scores':
            return {
                ...state,
                scoresDefaults: action.payload
            }
        case 'clear_position_defaults':
            return {
                ...state,
                positionsDefaults: action.payload
            }
        case 'clear_scores_defaults':
            return {
                ...state,
                scoresDefaults: action.payload
            }
        case 'clear_all_values':
            return {
                ...state,
                positionsDefaults: action.payload,
                textsDefaults: action.payload,
                scoresDefaults: action.payload,
            }
        default:
            return state;
    }
}