import { combineReducers } from 'redux';
import usuariosReducers from './usuariosReducers';
import preguntasReducers from './preguntasReducers';
import respuestasReducers from './respuestasReducers';
import modulosReducers from './modulosReducers';
import subtemasReducers from './subtemasReducers';
import tarjetasReducers from './tarjetasReducers';
import tarjetasSaberMasReducers from './tarjetasSaberMasReducers';
import respuestasTReducers from './respuestasTReducers';
import preguntasTReducers from './preguntasTReducers';
import recursosReducers from './recursosReducers';
export default combineReducers({
    usuariosReducers,
    preguntasReducers,
    respuestasReducers,
    modulosReducers,
    subtemasReducers,
    tarjetasReducers,
    tarjetasSaberMasReducers,
    respuestasTReducers,
    preguntasTReducers,
    recursosReducers
});