var typeOf = require('../typeOf.js');

// obj will be the context that is needed for validation
function rule(obj) {

  return !!obj.description;
}

// log level
rule.level = 'error';

// message for log
rule.message = 'Resources need to provide a description.';

//section of document to check
rule.section = 'resource';

/* istanbul ignore else */
if (typeOf(exports, 'object')) {
  module.exports = rule;
}
