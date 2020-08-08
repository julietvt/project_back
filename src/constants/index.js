const NAME_PATTERN = /^[A-Z][a-z]{0,100}$;
const PASSWORD_PATTERN=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,60}$/;
const SALT=6;

const ROLE = Object.freeze({
    USER: 'USER',
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
});

const ACTION = Object.freeze({
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
});

module.exports = {
    NAME_PATTERN,
    SALT,
    PASSWORD_PATTERN,
    ACTION,
    ROLE
};