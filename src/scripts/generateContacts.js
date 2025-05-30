import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    contacts.push(contact);
  }
  await writeContacts(contacts);
};

generateContacts(5)
  .then(() => {
    console.log('Generation completed');
  })
  .catch(console.error);
