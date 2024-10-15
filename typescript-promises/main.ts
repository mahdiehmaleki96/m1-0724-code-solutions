import { takeAChance } from './take-a-chance.js';

takeAChance('Mahdieh')
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((error) => {
    console.log(error.message);
  });
