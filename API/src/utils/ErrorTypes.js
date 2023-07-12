class InvalidIdError extends Error{
    constructor(props){
        super(props);
        this.name = "InvalidIdError";
    };
};

const setErrorInvalidId = message => new InvalidIdError(message);

class EmptyValueError extends Error{
    constructor(props){
        super(props);
        this.name = "EmptyValueError";
    };
};

const setErrorEmptyValue = message => new EmptyValueError(message);

module.exports = {
    setErrorInvalidId,
    setErrorEmptyValue
}