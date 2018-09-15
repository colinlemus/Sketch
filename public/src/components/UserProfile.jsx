var UserProfile = (function () {
    var user = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    }

    function setUsername(username) {
        user['username'] = username;
        sessionStorage.setItem("username", user['username']);
    }

    function setPassword(password) {
        user['password'] = password;
        sessionStorage.setItem("password", user['password']);
    }

    function setEmail(email) {
       user['email'] = email;
       sessionStorage.setItem("email", user['email']);
    }

    function setFirstName(firstName) {
       user['firstName'] = firstName;
       sessionStorage.setItem("firstName", user['firstName']);
    }

    function setLastName(lastName) {
       user['lastName'] = lastName;
       sessionStorage.setItem("lastName", user['lastName']);
    }

    function getUsername() {
        return user['username'];
    }

    function getPassword() {
        return user['password'];
    }

    function getEmail() {
        return user['email'];
    }

    function getFirstName() {
        return user['firstName'];
    }

    function getLastName() {
        return user['lastName'];
    }

    return {
        setUsername: setUsername,
        setPassword: setPassword,
        setEmail: setEmail,
        setFirstName: setFirstName,
        setLastName: setLastName,
        getUsername: getUsername,
        getPassword: getPassword,
        getEmail: getEmail,
        getFirstName: getFirstName,
        getLastName: getLastName
    }
})();

export default UserProfile;