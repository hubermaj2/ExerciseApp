/* B"H

*/

const session = {
    user: null,
    id: null,
    type: null,
    notifications: [],
    login(user, id, type){
        user = user;
        id = id;
        type = type;
    },
    addNotification(text, type='info'){
        this.notifications.push({text, type})
    },
    deleteNotification(i){
        this.notifications.splice(i, 1);
    }
};

export default session;