const admin = require('firebase-admin');

module.exports = function(req, res) {
  // verificar se o usuario enviou um telefone
  if (!req.body.phone) return res.status(422).send({ terror: 'Bad Input' });
  // formata o celular para remover tracos e parentenses
  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  // cria um novo usuario usando esse celular
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
  // responde para o usuario
};
