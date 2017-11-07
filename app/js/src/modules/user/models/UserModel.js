define(['backbone'], function (Backbone) {

  return Backbone.Model.extend({

    defaults: {
      name  : '',
      day : '',
      age : '',
      sexo : ''
    }

  });

});
