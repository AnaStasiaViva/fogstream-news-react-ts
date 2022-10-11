import * as Yup from 'yup';

const fullNameRegExp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
const emailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const formValidationSchema = Yup.object({

  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .matches(fullNameRegExp, "firstname must contain letters")
    .required('Required'),

  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .matches(fullNameRegExp, "lastname must contain letters")
    .required('Required'),

  email: Yup.string()
    .email('Invalid email address')
    .matches(emailRegexp, "Please, provide correct email")
    .required('Required'),

  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(100, "Password is too long")
    .required('Required')
})
