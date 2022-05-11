const knex = require("../db/connection");

function read(id) {
  return knex("reviews").select("*").where({ review_id: id }).first();
}

function destroy(id) {
  return knex("reviews").where({ review_id: id }).del();
}

function update (updatedReview, review_id) {
  return knex("reviews")
    .select("*")
    .where({review_id})
    .update(updatedReview)
    .then(updatedRecords => updatedRecords[0])
}

module.exports = {
  read,
  destroy,
  update,
};