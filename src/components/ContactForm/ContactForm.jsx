import { PropTypes } from 'prop-types';

import { Formik } from 'formik';
import * as yup from 'yup';
import { FormWrapp, Input, Error, Label, SubmitButton } from 'components/ContactForm/ContactForm.styled';

const schema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),
    number: yup.string().min(4).max(12).matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),

})

const initialValues = {
    name: '',
    number: '',
}



export const ContactForm = ({ onSubmit }) => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={schema}>
                <FormWrapp autoComplete='off'>
                    <Label htmlFor='number'>Number</Label>
                        <Input
                            type="tel"
                            name="number"
                            placeholder='Please, enter your Number'
                            required
                            />
                            <Error name="number"component='div' />
                

                    <Label htmlFor='name'>Name</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder='Please, enter your Name'
                            required
                        />
                    <Error name="name" component='div'/>
                <SubmitButton type='submit'>Add contact</SubmitButton>
        
            </FormWrapp>

        </Formik>
    )


}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};