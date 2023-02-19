// EXPORT { ... }
import { add } from './helpers/module.js';
// EXPORT CONST/FUNCTION
import { log } from './helpers/module.js';
// EXPORT RENAME
import { subtract } from './helpers/module.js';

// IMPORT RENAME
import { log as print } from './helpers/module.js';
// IMPORT DEFAULT
import person from './helpers/module.js';
// IMPORT DEFAULT RENAME
import dude from './helpers/module.js';
// IMPORT ALL
import * as module from './helpers/module.js';

const sum = add(5, 3);
log(sum);

const sub = subtract(5, 3);
log(sub);

print('example 123');
print(person);
print(dude);

module.log(module.add(1, 2));

// JS RUNTIME ENVIRONMENTS OUTSIDE BROWSER
// https://nodejs.org/en/
// https://deno.land/
// https://bun.sh/

// MODULE - REQUIRED, EXPORTS
module.exports = { variable };
const variable = require('../../file.js');
