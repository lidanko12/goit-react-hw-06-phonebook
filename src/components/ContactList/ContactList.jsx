
import s from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions'
import { getVisibleContacts } from '../../redux/phonebook/selector';


export default function ContactList({ contacts, onDeleteContact }) {
  const dispatch = useDispatch();
  const visibleContact = useSelector(getVisibleContacts);
  return (
  <ul className={s.list}>
      {visibleContact.map(({id,name,number }) => (
        <li className={s.listItem} key={id}>
          {`${name}: ${number}`}
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


