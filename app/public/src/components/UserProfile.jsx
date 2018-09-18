var UserProfile = (function () {
    var user = {
        username: localStorage.getItem('username') || '',
        password: localStorage.getItem('password') || '',
        email: localStorage.getItem('email') || '',
        firstName: localStorage.getItem('firstName') || '',
        lastName:localStorage.getItem('lastName') ||  '',
        logged: localStorage.getItem('logged') || false
    }

    function setUsername(username) {
        user['username'] = username;
        localStorage.setItem("username", user['username']);
    }

    function setPassword(password) {
        user['password'] = password;
        localStorage.setItem("password", user['password']);
    }

    function setEmail(email) {
       user['email'] = email;
       localStorage.setItem("email", user['email']);
    }

    function setFirstName(firstName) {
       user['firstName'] = firstName;
       localStorage.setItem("firstName", user['firstName']);
    }

    function setLastName(lastName) {
       user['lastName'] = lastName;
       localStorage.setItem("lastName", user['lastName']);
    }

    function setLoggedIn(logged) {
        user['logged'] = logged;
        localStorage.setItem('logged', user['logged']);
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
    
    function isLoggedIn() {
        return user['logged'];
    }

    return {
        setUsername: setUsername,
        setPassword: setPassword,
        setEmail: setEmail,
        setFirstName: setFirstName,
        setLastName: setLastName,
        setLoggedIn: setLoggedIn,
        getUsername: getUsername,
        getPassword: getPassword,
        getEmail: getEmail,
        getFirstName: getFirstName,
        getLastName: getLastName,
        isLoggedIn: isLoggedIn
    }
})();

export default UserProfile;