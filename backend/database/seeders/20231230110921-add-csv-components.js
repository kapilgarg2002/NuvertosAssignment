'use strict';
const fs = require('fs');
const {parse} = require('@fast-csv/parse');
/** @type {import('sequelize-cli').Migration} */
const tableName = 'compounds';
module.exports = {
  async up (queryInterface, Sequelize) {
    const allRows = [];

    await new Promise(resolve => {
      fs.createReadStream(__dirname + '/compound.csv')
        .pipe(parse({
          headers: true,
        }))
        .on('error', error => console.error(error))
        .on('data', row => {
          allRows.push({
            id: row.id,
            name: row.CompoundName,
            desc: row.CompounrDescription,
            image: row.strImageSource,
            updatedAt:  new Date(row.dateModified)
          });
        })
        .on('end', () => {
          queryInterface.bulkInsert(tableName, allRows);
          resolve();
        });
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete(tableName, null);
  }
};