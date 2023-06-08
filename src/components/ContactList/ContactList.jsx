import { PropTypes } from 'prop-types';
import { ContactListMarkup, ContactListItem, ContactListHeader, ContactListText, ContactListButton } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ requiredCard, deleteCard }) => {

    return (
        <ContactListMarkup>
            {requiredCard.map(({ name, number, id }) => {
                return (
                    <ContactListItem key={id}>
                        <ContactListHeader>{name}</ContactListHeader>
                        <ContactListText>{number}</ContactListText>
                        <ContactListButton type='button' onClick={() => deleteCard(id)}>Delete</ContactListButton>
                    </ContactListItem>
                );
            })}
        </ContactListMarkup>
    );
};


ContactList.propTypes = {
  requiredCard: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
};