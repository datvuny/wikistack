const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',{logging:false});

// Test connection to db
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const Page = db.define('page', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  slug: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open','close')
  }
})

const User = db.define('user', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

db.sync({ force:true })



module.exports = {
    db, Page, User
  }