const connection = require('../database/connection');
const crypto = require('crypto');


const getOngs = async (_req, res) => {
  const ongs = await connection('ongs').select('*');

  return res.json(ongs);
}

const createOng = async (req, res) => {
  const { name, email, whatsapp, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString('hex');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  })

  return res.json({ id });
}

module.exports = {
  getOngs,
  createOng,
}