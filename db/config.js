const _env = {
    user: 'root',
    password: '159753_Zxc',
    dbName: 'db_channels',
};

module.exports = () => {
    return `mongodb+srv://${_env.user}:${_env.password}@private-channels.arxhs.mongodb.net/${_env.dbName}?retryWrites=true&w=majority`;
};
