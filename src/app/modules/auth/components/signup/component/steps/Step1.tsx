/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { toAbsoluteUrl } from './../../../../../../../_metronic/helpers'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, useFormikContext } from 'formik'
import PasswordStrengthBar from 'react-password-strength-bar';
import { ICreateAccount } from '../CreateAccountWizardHelper';
console.log('initValues')
const Step1: FC = () => {
  const { values } = useFormikContext<ICreateAccount>();
// new page
  return (
    <div className='w-100 px-0 px-xl-20 px-xxl-0'>
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
        <div className='text-gray-500 fw-semibold fs-6'>To begin the assessment</div>
      </div>
      {/* begin::Heading */}

      {/* begin::Login options */}
      <div className='row g-3 mb-9'>
        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <Link to="/"
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
              className='h-15px me-3'
            />
            Sign in with Google
          </Link>
          {/* end::Google link */}
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6'>
          {/* begin::Google link */}
          <Link to='/'
            className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
          >
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
              className='theme-light-show h-15px me-3'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
              className='theme-dark-show h-15px me-3'
            />
            Sign in with Apple
          </Link>
          {/* end::Google link */}
        </div>
        {/* end::Col */}
      </div>
      {/* end::Login options */}

      {/* begin::Separator */}
      <div className='separator separator-content my-14'>
        <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
      </div>
      {/* end::Separator */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <Field type='email' placeholder="Email" name="email" className="form-control bg-transparent" />
        <div className='text-danger mt-2'>
          <ErrorMessage name='email' />
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <Field className="form-control bg-transparent" name='password' placeholder='Password' type='password' autoComplete='off' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='password' />
        </div>
        <PasswordStrengthBar className='ps-h-5px' shortScoreWord={values.password === '' ? '' : 'Too Short'} password={values.password} />
        {/* begin::Meter */}

        <div className='text-muted'>
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <Field className="form-control bg-transparent" placeholder='Repeat Password'
          type='password'
          name='confirmPassword'
          autoComplete='off' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='confirmPassword' />
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-8'>
        <label className='form-check form-check-inline' htmlFor='kt_login_toc_agree'>
          <Field className='form-check-input' type='checkbox' id='kt_login_toc_agree' name="acceptTerms" />

          <span className='cursor-pointer'>
            I Accept the {' '}
            <Link to='/' target='_blank' className='ms-1 link-primary'>
              Terms
            </Link>
            .
          </span>
        </label>
        <div className='text-danger mt-2'>
          <ErrorMessage name='acceptTerms' />
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      
      <div className='d-grid mb-10'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-primary'>
          <span className="indicator-label">Sign up</span>
        </button>
      </div>
      {/* end::Action */}

      <div className='text-gray-500 text-center fw-semibold fs-6'>
        Already have an Account? {' '}
        <Link to='/auth/registration' className='link-primary'>
          Sign in
        </Link>
      </div>
    </div>
  )
}

export { Step1 }
