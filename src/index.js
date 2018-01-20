module.exports = function splitAny(any) {
    if(any instanceof Array) {
        return any.map(splitAny);
    }
    if(typeof any == 'string') {
        return any.match(/\s/) ? any.split(/\s/).map(splitAny) : any.split(''); 
    }
    if(any instanceof Function) {
        return splitAny(any());
    }
    if(any instanceof Object) {
        return Object.keys(any).map((key) => [key, any[key]]);
    }
    if(typeof any == 'number') {
        return [...any.toString()].map(c => c == '-' ? c : +c);
    }
    throw TypeError('wrong type passed');
}
