import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  await writeContacts([...contacts, newContact]);
};

addOneContact()
  .then(() => {
    console.log('Contact generated');
  })
  .catch(console.error);
