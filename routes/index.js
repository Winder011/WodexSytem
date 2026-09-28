var express = require('express');
var router = express.Router();

var companyContext = {
  title: 'Wodex Systems | Ingeniería de Software & Plataformas a la Medida',
  companyName: 'Wodex Systems',
  logoUrl: '/img/img_logo.png',
  status: 'Sistemas Operativos 99.99%'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', companyContext);
});

/* Receive quote requests submitted from the contact form. */
router.post('/contacto', function(req, res, next) {
  var quoteRequest = {
    name: req.body.name,
    email: req.body.email,
    company: req.body.company,
    project: req.body.project
  };

  // This is the integration point for a CRM, email provider, or ticketing system.
  console.info('Nueva solicitud de cotización:', quoteRequest);

  res.status(202).json({
    message: 'Tu solicitud fue recibida. Nuestro equipo te contactará pronto.'
  });
});

module.exports = router;
