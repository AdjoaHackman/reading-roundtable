const User = require('./User');
const Books = require("./Books");
const Opinion = require("./opinion");

User.hasMany(Opinion, {
    foreignKey: "user_id"
});
Opinion.hasOne(User, {
    foreignKey: "user_id"
});

Books.hasMany(Opinion, {
    foreignKey: "book_id"
});
Opinions.hasOne(Book, {
    foreignKey: "book_id"
});

module.exports = { User, Books, Opinion };
