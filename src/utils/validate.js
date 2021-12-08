export const validName = (name) => {
    const validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
    if (validNamePattern.test(name)) {
        return true;
    }
    return false;
};
export const confirmPassword = ((password, confirmpassword) => {
    if (password != confirmpassword) return false
    else return true
})