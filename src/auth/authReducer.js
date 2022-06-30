const types = {
    login: "[auth] Login",
    logout: "[auth] Logout",
};

export const authReducer = (state = {}, action) => {
    switch (action) {
        case types.login:
            return {
                ...action.payload,
                isLogged: true,
            };
        case types.logout:
            return {
                isLogged: false,
            };
        default:
            break;
    }
};
