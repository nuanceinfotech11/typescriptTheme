import React, {FC, useEffect } from 'react'
import {KTIcon} from './../../../../../../../_metronic/helpers'
import {ErrorMessage, Field, FieldArray, useFormikContext} from 'formik'
import {Link} from 'react-router-dom'
import {ICreateAccount} from '../CreateAccountWizardHelper'
import {usaStates} from 'typed-usa-states'
import 'react-datepicker/dist/react-datepicker.css'

const Step3: FC = () => {
  const {values, errors} = useFormikContext<ICreateAccount>()
  const formik = useFormikContext();

  const pickDate = () => {
    const defaultDob = new Date();
    defaultDob.setFullYear(defaultDob.getFullYear() - 18);
    const formattedDate = defaultDob.toISOString().split('T')[0];
    formik.setFieldValue('dateOfBirth', formattedDate);
  }
  console.log("hello")
  // console.log('initValues')
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Account Info</h2>
        <div className='text-gray-400 fw-bold fs-6'>
          If you need more info, please check out
          <Link to='/dashboard' className='text-primary fw-bolder'>
            {' '}
            Help Page
          </Link>
          .
        </div>
      </div>

      {/* for my self */}
      {values.accountType === 'adult' && (
        <div className='row mb-10'>
          <div className='col-md-6'>
            <div className='mb-6 fv-row'>
              <label className='form-label mb-3'>First Name:</label>
              <Field
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='adultFirstName'
              />
              <div className='text-danger mt-2'>
                <ErrorMessage name='adultFirstName' />
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='mb-6 fv-row'>
              <label className='form-label mb-3'>Last Name:</label>
              <Field
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='adultLastName'
              />
              <div className='text-danger mt-2'>
                <ErrorMessage name='adultLastName' />
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='mb-6 fv-row'>
              <label className='form-label mb-3'>Contact Phone Number:</label>
              <Field
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='adultContactNumber'
              />
              <div className='text-danger mt-2'>
                <ErrorMessage name='adultContactNumber' />
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='mb-6 fv-row'>
              <label className='form-label mb-3'>Gender:</label>
              <Field
                as='select'
                className='form-select form-select-lg form-select-solid selectpicker'
                name='adultGender'
              >
                <option value='' label='' />
                <option value='male' label='Male' />
                <option value='female' label='Female' />
                <option value='non-binary' label='Non-binary' />
                <option value='na' label='Prefer Not to Say' />
                <option value='other' label='Other' />
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='adultGender' />
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='mb-6 fv-row'>
              <label className='form-label mb-3'>State:</label>
              <Field
                as='select'
                className='form-select form-select-lg form-select-solid selectpicker'
                name='adultState'
              >
                <option value='' label='' />
                {usaStates.map((item, index) => (
                  <option key={index} value={item.abbreviation} label={item.name} />
                ))}
              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='adultState' />
              </div>
            </div>
          </div>

          {values.adultGender === 'other' && (
            <div className='col-md-6'>
              <div className='mb-6 fv-row'>
                <label className='form-label mb-3'>Enter your Gender</label>
                <Field
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  name='otherGender'
                />
                <div className='text-danger mt-2'>
                  <ErrorMessage name='otherGender' />
                </div>
              </div>
            </div>
          )}

          <div className='col-md-6'>
            <div className='mb-6 fv-row'>
              <label className='form-label mb-3'>Date Of Birth:</label>
              <Field
                type='date'
                className='form-control form-control-lg form-control-solid'
                name='dateOfBirth'
                onClick={pickDate}
              />
              <div className='text-danger mt-2'>
                <ErrorMessage name='dateOfBirth' />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* for my self end*/}

      {/* for child */}
      {values.accountType === 'child' && (
        <div>
          <div className='mb-8'>
            <label className='fw-bolder text-gray-800 fs-5 mb-5'>Parent/Guardian</label>
            <div className='row mb-8'>
              <div className='col-md-6'>
                <div className='mb-6 fv-row'>
                  <label className='form-label mb-3'>First Name:</label>
                  <Field
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    name='adultFirstName'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='adultFirstName' />
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-6 fv-row'>
                  <label className='form-label mb-3'>Last Name:</label>
                  <Field
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    name='adultLastName'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='adultLastName' />
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-6 fv-row'>
                  <label className='form-label mb-3'>Contact Phone Number:</label>
                  <Field
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    name='adultContactNumber'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='adultContactNumber' />
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='mb-6 fv-row'>
                  <label className='form-label mb-3'>State:</label>
                  <Field
                    as='select'
                    className='form-select form-select-lg form-select-solid selectpicker'
                    name='adultState'
                  >
                    <option value='' label='' />
                    {usaStates.map((item, index) => (
                      <option key={index} value={item.abbreviation} label={item.name} />
                    ))}
                  </Field>
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='adultState' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <FieldArray name='children'>
              {({push, remove}) => (
                <>
                  {values?.children?.map((child, index) => {
                    return (
                      <div key={index} className='mb-8'>
                        <div className='d-flex gap-5'>
                          <label className='fw-bolder text-gray-800 fs-5 mb-5'>Child Details</label>
                          {index > 0 && (
                            <div onClick={() => remove(index)} className='me-4'>
                              <KTIcon className='fs-2' iconName='trash' />
                            </div>
                          )}
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='mb-6 fv-row'>
                              <label className='form-label mb-3'>First Name:</label>
                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name={`children.${index}.childFirstName`}
                              />
                              <div className='text-danger mt-2'>
                                <ErrorMessage name={`children.${index}.childFirstName`} />
                              </div>
                            </div>
                          </div>

                          <div className='col-md-6'>
                            <div className='mb-6 fv-row'>
                              <label className='form-label mb-3'>Last Name:</label>
                              <Field
                                type='text'
                                className='form-control form-control-lg form-control-solid'
                                name={`children.${index}.childLastName`}
                              />
                              <div className='text-danger mt-2'>
                                <ErrorMessage name={`children.${index}.childLastName`} />
                              </div>
                            </div>
                          </div>

                          <div className='col-md-6'>
                            <div className='mb-6 fv-row'>
                              <label className='form-label mb-3'>Child Birthday:</label>
                              <Field
                                type='date'
                                className='form-control form-control-lg form-control-solid'
                                name={`children.${index}.childBirthDay`}
                              />
                              <div className='text-danger mt-2'>
                                <ErrorMessage name={`children.${index}.childBirthDay`} />
                              </div>
                            </div>
                          </div>

                          <div className='col-md-6'>
                            <div className='mb-6 fv-row'>
                              <label className='form-label mb-3'>Gender</label>
                              <Field
                                as='select'
                                className='form-select form-select-lg form-select-solid selectpicker'
                                name={`children.${index}.childGender`}
                              >
                                <option value='' label='' />
                                <option value='male' label='Male' />
                                <option value='female' label='Female' />
                                <option value='non-binary' label='Non-binary' />
                                <option value='na' label='Prefer Not to Say' />
                                <option value='other' label='Other' />
                              </Field>
                              <div className='text-danger mt-2'>
                                <ErrorMessage name={`children.${index}.childGender`} />
                              </div>
                            </div>
                          </div>
                          {values.children[index].childGender === 'other' && (
                            <div className='col-md-6'>
                              <div className='mb-6 fv-row'>
                                <label className='form-label mb-3'>Enter your Gender</label>
                                <Field
                                  type='text'
                                  className='form-control form-control-lg form-control-solid'
                                  name={`children.${index}.childOtherGender`}
                                />
                                <div className='text-danger mt-2'>
                                  <ErrorMessage name={`children.${index}.childOtherGender`} />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}

                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='d-flex align-items-center'>
                        <button
                          onClick={() =>
                            push({
                              childFirstName: '',
                              childLastName: '',
                              childBirthDay: '',
                              childGender: '',
                              childOtherGender: '',
                            })
                          }
                          type='button'
                          className='btn btn-lg btn-primary me-3'
                        >
                          Add Child
                          <span className='indicator-label'>
                            <KTIcon iconName='plus' className='fs-3 ms-2 me-0' />
                          </span>
                        </button>
                        <span>
                          Save $50 for every additional child! <i>up to 5 children</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </FieldArray>
          </div>
        </div>
      )}
      {/* for child end*/}
    </div>
  )
}

export {Step3}
