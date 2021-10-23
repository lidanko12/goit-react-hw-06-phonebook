


import s from './App.module.css';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';


// const defaultContacts= [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     { id: 'id-5', name: 'Alex Baran', number: '067-21-51' },
//     ]

export default function App() {

  // const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts]);
    
  // const addContact = (name, number) => {
  //   const duplicate = contacts.find((contact) => contact.name === name);
  //   if (duplicate) {
  //     alert('Такой контакт уже существует!');
  //   } else {
  //     const contact = {
  //       name,
  //       number,
  //       id: shortid.generate(),
  //     };

  //     setContacts((prevState) => [contact, ...prevState]);
  //   }
  // };
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };
  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // };
  // const deleteContact = (contactId) => {
  //   setContacts((prevState) => prevState.filter((contact) => contact.id !== contactId));
  // };

  return (
    <>
      <h1 className={s}>Phonebook</h1>
      <ContactForm />
      <h2 className={s}>Contacts</h2>
      <Filter />
      <ContactList/>
    </>
  );
}




// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       { id: 'id-5', name: 'Alex Baran', number: '067-21-51' },
//     ],
//     filter: '',
//   };

//   addContact = ({ name, number }) => {
//     let duplicate = this.state.contacts.find(contact => contact.name === name);

//     if (duplicate) {
//       alert('Такой контакт уже существует!');
//     } else {
//       const contact = {
//         name,
//         number,
//         id: shortid.generate(),
//       };

//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, contact],
//       }));
//     }
//   };
//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts);
//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('Обновился стейт');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
//   // onSubmitHandler = data => {
//   //   console.log(data)
//   // }

//   render() {
//     const { filter } = this.state;
//     const VisibleContacts = this.getVisibleContacts();
//     return (
//       <>
//         <h1 className={s}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2 className={s}>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={VisibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </>
//     );
//   }
// }

// export default App;

// onSubmitData={this.onSubmitHandler}
