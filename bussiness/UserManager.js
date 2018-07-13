class UserManager {

    static hasBooked(uid) {
        return !!this.userList[uid];
    }

}
UserManager.userList = {};
module.exports = UserManager;