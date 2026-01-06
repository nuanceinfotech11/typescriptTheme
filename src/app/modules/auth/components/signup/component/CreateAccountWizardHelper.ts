import * as Yup from 'yup'
import {differenceInYears} from 'date-fns'
import moment from 'moment'

export interface ICreateAccount {
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
  accountType: string
  adultFirstName: string
  adultLastName: string
  adultContactNumber: string
  adultGender: string
  otherGender: string
  adultState: string
  dateOfBirth: string
  children: Array<{
    childFirstName: string
    childLastName: string
    childBirthDay: string
    childGender: string
    childOtherGender: string
  }>
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}

const createAccountSchemas = [
  Yup.object({
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Minimum 8 symbols')
      .max(50, 'Maximum 50 symbols')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain letters, numbers, and symbols'
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(8, 'Minimum 8 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password confirmation is required')
      .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept the Terms and Conditions'),
  }),
  Yup.object({
    accountType: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    adultFirstName: Yup.string().required('First name is a required field'),
    adultLastName: Yup.string().required('Last name is a required field'),
    adultContactNumber: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        'Enter valid contact number'
      )
      .required('Contact is a required field'),
    adultGender: Yup.string().when('accountType', ([accountType], sch) => {
      return accountType === 'adult'
        ? sch.trim().min(2).required('Gender is a required field')
        : sch.notRequired()
    }),
    adultState: Yup.string().required('State is a required field'),
    // dateOfBirth: Yup.string().required('Date of birth is a required field'),
    dateOfBirth: Yup.string().when('accountType', ([accountType], sch) => {
      return accountType === 'adult'
        ? sch
            .required('Date of Birth is required')
            .test(
              'DOB',
              'Self-tests are available for individuals 18 years and older',
              function (value) {
                return moment().diff(moment(value), 'years') >= 18
              }
            )
        : sch.notRequired()
    }),

    // dateOfBirth: Yup.string()
    //   .required('Date of Birth is required')
    //   .test('DOB', 'Self-tests are available for individuals 18 years and older', function (value) {
    //     return moment().diff(moment(value), 'years') >= 18
    //   }),

    otherGender: Yup.string().when('adultGender', ([adultGender], sch) => {
      return adultGender === 'other'
        ? sch.trim().min(2).required('Gender description is a required field')
        : sch.notRequired()
    }),
    children: Yup.array().when('accountType', ([accountType], sch) => {
      if (accountType === 'child') {
        return sch.of(
          Yup.object().shape({
            childFirstName: Yup.string().required('First name is required'),
            childLastName: Yup.string().required('Last name is required'),
            childGender: Yup.string().trim().min(2).required('Gender is required'),
            childBirthDay: Yup.date()
              .required('Birth date is required')
              .test('DOB', 'Your child age should be less than 18', function (value) {
                return moment().diff(moment(value), 'years') < 18
              }),

            childOtherGender: Yup.string().when('childGender', ([childGender], childSch) => {
              return childGender === 'other'
                ? childSch.trim().min(2).required('Gender description is required')
                : childSch.notRequired()
            }),
          })
        )
      } else {
        return sch.notRequired()
      }
    }),
  }),
  Yup.object({
    nameOnCard: Yup.string().required().label('Name On Card'),
    cardNumber: Yup.string().required().label('Card Number'),
    cardExpiryMonth: Yup.string().required().label('Expiration Month'),
    cardExpiryYear: Yup.string().required().label('Expiration Year'),
    cardCvv: Yup.string().required().label('CVV'),
  }),
]

const inits: ICreateAccount = {
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
  accountType: 'adult',
  adultFirstName: '',
  adultLastName: '',
  adultContactNumber: '',
  adultGender: '',
  adultState: '',
  otherGender: '',
  dateOfBirth: '',
  children: [
    {
      childFirstName: '',
      childLastName: '',
      childBirthDay: '',
      childGender: '',
      childOtherGender: '',
    },
  ],
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

export {createAccountSchemas, inits}
