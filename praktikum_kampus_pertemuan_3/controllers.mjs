import users from './data.mjs';

// kode perintah /controller
const index = () => {
    users.forEach(function (user) {
        console.log(user);
    });
};

export default index;
