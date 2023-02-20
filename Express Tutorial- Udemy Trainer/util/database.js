const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-complete','root','Sourabh@8989',{
    dialect:'mysql',host:'localhost'})

module.exports=sequelize;