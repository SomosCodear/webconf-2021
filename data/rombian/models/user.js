import { DataTypes } from 'sequelize';
import { db } from '../db';

export const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
  },
  alias: {
    type: DataTypes.STRING,
  },
  current_x: {
    type: DataTypes.FLOAT,
  },
  current_y: {
    type: DataTypes.FLOAT,
  },
  current_zone: {
    type: DataTypes.STRING,
  },
  head_user_item_id: {
    type: DataTypes.INTEGER,
  },
  body_user_item_id: {
    type: DataTypes.INTEGER,
  },
  legs_user_item_id: {
    type: DataTypes.INTEGER,
  },
  profile_created: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
  },
});
