import React, { FC } from 'react'
import { ErrorMessage, Field } from 'formik'
import { toAbsoluteUrl } from './../../../../../../../_metronic/helpers'
import { Link } from 'react-router-dom'

const Step2: FC = () => {
  
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bold d-flex align-items-center text-gray-900'>
          Choose Test Taker
          <i
            className='fas fa-exclamation-circle ms-2 fs-7 text-gray-500'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-muted fw-semibold fs-6'>
          Need guidance? Visit our
          <Link to="/dashboard" className='link-primary fw-bolder'>
            {' '}
            Help Page
          </Link>
          .
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>
          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='adult'
              id='kt_create_account_form_account_type_personal'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10' htmlFor='kt_create_account_form_account_type_personal'>

              <img alt='person' src={toAbsoluteUrl('/media/auth/user.png')} className='ctt-icon h-30px me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bold d-block fs-4 mb-2'>For Myself (18+)</span>
                <span className='text-muted fw-semibold fs-6'>
                  Are you an adult seeking insights into your learning abilities?
                </span>
              </span>
            </label>
          </div>

          <div className='col-lg-6'>
            <Field
              type='radio'
              className='btn-check'
              name='accountType'
              value='child'
              id='kt_create_account_form_account_type_corporate'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center' htmlFor='kt_create_account_form_account_type_corporate'
            >
              <img alt='child' src={toAbsoluteUrl('/media/auth/child.png')} className='ctt-icon h-30px me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bold d-block fs-4 mb-2'>For My Child</span>
                <span className='text-muted fw-semibold fs-6'>
                  Help your child by understanding their learning needs.
                </span>
              </span>
            </label>
          </div>

          <div className='text-danger mt-2'>
            <ErrorMessage name='accountType' />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Step2 }
