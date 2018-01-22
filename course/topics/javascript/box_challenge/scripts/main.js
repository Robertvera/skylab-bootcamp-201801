function Box(secret, password) {
    this.getSecret = function (psw) {
        if (psw === password) return secret;
    },
    this.setSecret = function (_secret,psw) {
        if (psw === password)
            secret = _secret;        
    }
    this.changePassword = function (newPassword, oldPassword) {
        if (password === oldPassword)
        password = newPassword;
        return 'password changed'
    }
}

var box = new Box('La tierra es plana.','helloworld');