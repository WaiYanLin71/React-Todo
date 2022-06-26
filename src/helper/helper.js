const helper = {
    isArray: (_class) => {
        if (_class instanceof Array) {
            return _class;
        }
        return [];
    }
}

export default helper;