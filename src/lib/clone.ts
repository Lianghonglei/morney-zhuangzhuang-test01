function clone<X>(data: X){
    return JSON.parse(JSON.stringify(data));
}

export default clone;