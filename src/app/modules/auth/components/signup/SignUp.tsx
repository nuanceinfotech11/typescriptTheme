import {useEffect, useRef, useState} from 'react'
import {StepperComponent} from './../../../../../_metronic/assets/ts/components'
import {Form, Formik, FormikValues} from 'formik'
import {Step1} from './component/steps/Step1'
import {Step2} from './component/steps/Step2'
import {Step3} from './component/steps/Step3'
// import { Step4 } from './component/steps/Step4'
import {Step5} from './component/steps/Step5'
import {createAccountSchemas, ICreateAccount, inits} from './component/CreateAccountWizardHelper'
import {toAbsoluteUrl, KTIcon} from './../../../../../_metronic/helpers'
import {Link, Navigate, useNavigate} from 'react-router-dom'

const SignUp = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const navigate = useNavigate()
  console.log("hello")
  // console.log('initValues',initValues)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const loginPage = () => {
    // <Navigate to='/auth' />
    console.log("hiii")
    // navigate('/auth')
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    console.log(values, actions, 'actions')
    if (!stepper.current) {
      return
    }

    console.log('cgfg',stepper.current.currentStepIndex , stepper.current.totalStepsNumber)

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])
  console.log('initValues',initValues)
  return (
    <div className='d-flex flex-column flex-root' id='kt_app_root'>
      {/* begin::Authentication - Multi-steps */}
      <div
        ref={stepperRef}
        className='d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep'
        id='kt_create_account_stepper'
      >
        {/* begin::Aside*/}
        <div className='d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px'>
          {/* begin::Wrapper*/}
          <div
            className='d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center'
            style={{backgroundImage: `url(${toAbsoluteUrl('/media/misc/auth-bg.png')})`}}
          >
            {/* begin::Header */}
            <div className='d-flex flex-center py-10 py-lg-20 mt-lg-20'>
              {/* begin::Logo */}
              <Link to='/'>
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/logos/brandLogo.png')}
                  className='h-70px'
                />
              </Link>
              {/* end::Logo */}
            </div>
            {/* end::Header */}

            {/* begin::body*/}
            <div className='d-flex flex-row-fluid justify-content-center p-10'>
              {/* begin::Nav*/}
              <div className='stepper-nav'>
                {/* begin::Step 1*/}
                <div className='stepper-item current' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon rounded-3'>
                      <i className='stepper-check fas fa-check fs-2'></i>
                      <span className='stepper-number'>1</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      <h3 className='stepper-title fs-2'>Sign Up</h3>
                      <div className='stepper-desc fw-normal'>To begin the assessment</div>
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 1*/}

                {/* begin::Step 2*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon rounded-3'>
                      <i className='stepper-check fas fa-check fs-2'></i>
                      <span className='stepper-number'>2</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      <h3 className='stepper-title fs-2'>Account Setup</h3>
                      <div className='stepper-desc fw-normal'>Who's taking the test?</div>
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 2*/}

                {/* begin::Step 3*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon rounded-3'>
                      <i className='stepper-check fas fa-check fs-2'></i>
                      <span className='stepper-number'>3</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      <h3 className='stepper-title fs-2'>Account Info</h3>
                      <div className='stepper-desc fw-normal'>Setup your account settings</div>
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 3*/}

                {/* begin::Step 4*/}
                {/* <div className='stepper-item' data-kt-stepper-element='nav'> */}
                {/* begin::Wrapper*/}
                {/* <div className='stepper-wrapper'> */}
                {/* begin::Icon*/}
                {/* <div className='stepper-icon rounded-3'> */}
                {/* <i className='stepper-check fas fa-check fs-2'></i> */}
                {/* <span className='stepper-number'>4</span> */}
                {/* </div> */}
                {/* end::Icon*/}

                {/* begin::Label*/}
                {/* <div className='stepper-label'> */}
                {/* <h3 className='stepper-title fs-2'>Billing Details</h3> */}
                {/* <div className='stepper-desc fw-normal'>Provide your payment info</div> */}
                {/* </div> */}
                {/* end::Label*/}
                {/* </div> */}
                {/* end::Wrapper*/}

                {/* begin::Line*/}
                {/* <div className='stepper-line h-40px'></div> */}
                {/* end::Line*/}
                {/* </div> */}
                {/* end::Step 4*/}

                {/* begin::Step 5*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon rounded-3'>
                      <i className='stepper-check fas fa-check fs-2'></i>
                      <span className='stepper-number'>4</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      <h3 className='stepper-title fs-2'>Completed</h3>
                      <div className='stepper-desc fw-normal'>Your account is created</div>
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}
                </div>
                {/* end::Step 5*/}
              </div>
              {/* end::Nav*/}
            </div>
            {/* end::body*/}

            {/* begin::footer */}
            {/* <div className="d-flex flex-center flex-wrap px-5 py-10"> */}
            {/* begin::Links */}
            {/* <div className="d-flex fw-normal">
                <Link to='/' className="text-success px-5" target="_blank">Terms</Link>
                <Link to='/' className="text-success px-5" target="_blank">Plans</Link>
                <Link to='/' className="text-success px-5" target="_blank">Contact Us</Link>
              </div> */}
            {/* end::Links */}
            {/* </div> */}
            {/* end::footer */}
          </div>
          {/* end::Wrapper*/}
        </div>
        {/* end::Aside*/}

        {/* begin::body*/}
        <div className='d-flex flex-column flex-lg-row-fluid py-10'>
          {/* begin::content*/}
          <div className='d-flex flex-center flex-column flex-column-fluid'>
            {/* begin::wrapper*/}
            <div className='w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto'>
              {/* begin::form*/}
              <Formik
                validationSchema={currentSchema}
                validateOnBlur={true}
                validateOnChange={true}
                initialValues={initValues}
                onSubmit={submitStep}
              >
                {() => (
                  <Form
                    className='my-auto pb-5 fv-plugins-bootstrap5 fv-plugins-framework'
                    noValidate
                    id='kt_create_account_form'
                  >
                    <div className='current' data-kt-stepper-element='content'>
                      <Step1 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step2 />
                    </div>

                    <div data-kt-stepper-element='content'>
                      <Step3 />
                    </div>

                    {/* <div data-kt-stepper-element='content'>
                      <Step4 />
                    </div> */}

                    <div data-kt-stepper-element='content'>
                      <Step5 />
                    </div>

                    <div className='d-flex flex-stack pt-10'>
                      <div className='mr-2'>
                        <button
                          onClick={prevStep}
                          type='button'
                          className='btn btn-lg btn-light-primary me-3'
                          data-kt-stepper-action='previous'
                        >
                          <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                          Previous
                        </button>
                      </div>
                      {stepper?.current?.currentStepIndex &&
                        stepper?.current?.currentStepIndex > 1 &&
                        stepper.current?.currentStepIndex !==
                          stepper.current?.totalStepsNumber! && (
                          <div>
                            <button type='submit' className='btn btn-lg btn-primary me-3' onClick={loginPage}>
                              <span className='indicator-label'>
                                {stepper.current?.currentStepIndex !==
                                  stepper.current?.totalStepsNumber! - 1 && 'Continue'}
                                {stepper.current?.currentStepIndex ===
                                  stepper.current?.totalStepsNumber! - 1 && 'Submit'}
                                <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                              </span>
                            </button>
                          </div>
                        )}
                    </div>
                  </Form>
                )}
              </Formik>
              {/* end::form*/}
            </div>
            {/* end::wrapper*/}
          </div>
          {/* end::body*/}
        </div>
        {/* end::body*/}
      </div>
      {/* end::Authentication - Multi-steps */}
    </div>
  )
}

export {SignUp}
