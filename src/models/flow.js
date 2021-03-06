// 期刊表

const { Sequelize, Model } = require('sequelize')

const { sequelize } = require('../db')

class Flow extends Model {}

Flow.init({
  index: Sequelize.INTEGER,
  art_id: Sequelize.INTEGER,
  type: Sequelize.INTEGER
},{
  sequelize,
  tableName: 'flow'
})

module.exports = {
  Flow
}