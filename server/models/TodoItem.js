"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define(
    "TodoItem",
    {
      content: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    },
    {}
  );
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: "todoId",
      onDelete: "CASCADE"
    });
  };
  return TodoItem;
};
