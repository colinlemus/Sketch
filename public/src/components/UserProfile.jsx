var UserProfile = (function () {
    var user = {
        id: localStorage.getItem('id') || '',
        username: localStorage.getItem('username') || '',
        password: localStorage.getItem('password') || '',
        email: localStorage.getItem('email') || '',
        firstName: localStorage.getItem('firstName') || '',
        lastName: localStorage.getItem('lastName') || '',
        score: localStorage.getItem('score') || '',
        logged: localStorage.getItem('logged') || false
    }

    function setID(id) {
        user['id'] = id;
        localStorage.setItem("id", user['id']);
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

    function setScore(score) {
        user['score'] = score;
        localStorage.setItem("score", user['score']);
    }

    function setLoggedIn(logged) {
        user['logged'] = logged;
        localStorage.setItem('logged', user['logged']);
    }

    function getID() {
        return user['id'];
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

    function getScore() {
        return user['score'];
    }

    function isLoggedIn() {
        return user['logged'];
    }

    return {
        setID: setID,
        setUsername: setUsername,
        setPassword: setPassword,
        setEmail: setEmail,
        setFirstName: setFirstName,
        setLastName: setLastName,
        setScore: setScore,
        setLoggedIn: setLoggedIn,
        getID: getID,
        getUsername: getUsername,
        getPassword: getPassword,
        getEmail: getEmail,
        getFirstName: getFirstName,
        getLastName: getLastName,
        getScore: getScore,
        isLoggedIn: isLoggedIn
    }
})();

export default UserProfile;