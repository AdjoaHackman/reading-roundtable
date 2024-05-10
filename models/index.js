const User = require('./User');
const Book = require("./Book");
const Opinion = require("./opinion");

User.hasMany(Opinion, {
    foreignKey: "user_id"
});
Opinion.hasOne(User, {
    foreignKey: "user_id"
});

Book.hasMany(Opinion, {
    foreignKey: "book_id"
});
Opinion.hasOne(Book, {
    foreignKey: "book_id"
});

module.exports = { User, Book, Opinion };
