/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import clsx from 'clsx'
import { Pagination, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { KTIcon } from '../../../helpers'
import { questioData } from '../../../helpers/howOftenQuestion/QuestionData'

type Props = {
  className?: string
  bgColor?: string
}
const now = 40
const HowOftenInner = ({ className }: Props) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (event) => {
    console.log(event, event.target.value)
    setSelectedOption(event.target.value)
  }

  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <div className='card-body d-flex flex-column justify-content-between position-relative'>
        <h1 className='fs-1hx fw-bold mb-6'>
          <KTIcon iconName='message-question' className='fs-2 me-2 text-info' /> How often do you:
        </h1>

        {questioData.map(
          (Result, index) =>
            index < 10 && (
              <div className='align-items-center mb-2 row' key={index}>
                <div className='col-xxl-7 col-lg-7'>
                  <h4 className='align-items-center d-flex fs-lg-6 fs-xxl-4 fw-normal mb-0'>
                    <KTIcon iconName='technology' className='fs-2 me-2 text-primary' />{' '}
                    {Result.quetions}
                  </h4>
                </div>
                <div className='col-xxl-5 col-lg-5'>
                  <div className='d-flex gap-2 justify-content-end'>
                    <div className='AnswersInputs'>
                      <label
                        htmlFor='Never'
                        className={
                          selectedOption === 'Never'
                            ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                            : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                        }
                      >
                        <input
                          className='d-none'
                          type='radio'
                          value='Never'
                          id='Never'
                          name={Result.options[0]}
                          checked={selectedOption === 'Never'}
                          onChange={handleOptionChange}
                        />
                        {Result.options[0]}
                        {/* {selectedOption === 'Never' ? 'Never' : 'Never'} */}
                      </label>
                    </div>
                    <div className='AnswersInputs'>
                      <label
                        htmlFor='Rarely'
                        className={
                          selectedOption === 'Rarely'
                            ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                            : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                        }
                      >
                        <input
                          className='d-none'
                          type='radio'
                          value={Result.options[1]}
                          id={Result.options[1]}
                          name={Result.options[1]}
                          checked={selectedOption === 'Rarely'}
                          onChange={handleOptionChange}
                        />
                        {Result.options[1]}
                        {/* {selectedOption === 'Rarely' ? 'Rarely' : 'Rarely'} */}
                      </label>
                    </div>
                    {Result.options[2] !== undefined && (
                      <div className='AnswersInputs'>
                        <label
                          htmlFor='Sometimes'
                          className={
                            selectedOption === 'Sometimes'
                              ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                              : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                          }
                        >
                          <input
                            className='d-none'
                            type='radio'
                            value={Result.options[2]}
                            id={Result.options[2]}
                            name={Result.options[2]}
                            checked={selectedOption === 'Sometimes'}
                            onChange={handleOptionChange}
                          />
                          {Result.options[2]}
                          {/* {selectedOption === 'Sometimes' ? 'Sometimes' : 'Sometimes'} */}
                        </label>
                      </div>
                    )}
                    {Result.options[3] !== undefined && (
                      <div className='AnswersInputs'>
                        <label
                          htmlFor='Frequently'
                          className={
                            selectedOption === 'Frequently'
                              ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                              : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                          }
                        >
                          <input
                            className='d-none'
                            type='radio'
                            value={Result.options[3]}
                            id={Result.options[3]}
                            name={Result.options[3]}
                            checked={selectedOption === 'Frequently'}
                            onChange={handleOptionChange}
                          />
                          {Result.options[3]}
                          {/* {selectedOption === 'Frequently' ? 'Frequently' : 'Frequently'} */}
                        </label>
                      </div>
                    )}
                    {Result.options[4] !== undefined && (
                      <div className='AnswersInputs'>
                        <label
                          htmlFor='Always'
                          className={
                            selectedOption === 'Always'
                              ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                              : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                          }
                        >
                          <input
                            className='d-none'
                            type='radio'
                            value={Result.options[4]}
                            id={Result.options[4]}
                            name={Result.options[4]}
                            checked={selectedOption === 'Always'}
                            onChange={handleOptionChange}
                          />
                          {Result.options[4]}
                          {/* {selectedOption === 'Always' ? 'Always' : 'Always'} */}
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
        )}



        <div className='my-5'>
          <h4 className='align-items-center d-flex fs-lg-6 fs-xxl-4 fw-normal mb-5'>
            <KTIcon iconName='technology' className='fs-2 me-2 text-primary' />{' '}
            <label htmlFor=''>What is the primary reason for referring for assessment?</label>
          </h4>
          <select className='form-select form-select-white' aria-label='Select example'>
            <option value='Academic difficulties or underperformance'>
              Academic difficulties or underperformance
            </option>
            <option value='Behavioral challenges in the classroom'>
              Behavioral challenges in the classroom
            </option>
            <option value='Suspected learning disabilities or disorders'>
              Suspected learning disabilities or disorders
            </option>
            <option value='Social or emotional concerns'>Social or emotional concerns</option>
            <option value='Attention-related issues (e.g., ADHD)'>
              Attention-related issues (e.g., ADHD)
            </option>
            <option value='Speech or language delays'>Speech or language delays</option>
            <option value='Fine or gross motor skill difficulties'>
              Fine or gross motor skill difficulties
            </option>
            <option value='Sensory processing issues'>Sensory processing issues</option>
            <option value='Memory or cognitive concerns'>Memory or cognitive concerns</option>
            <option value='Health-related issues impacting education'>
              Health-related issues impacting education
            </option>
            <option value='Giftedness or advanced abilities requiring enrichment'>
              Giftedness or advanced abilities requiring enrichment
            </option>
            <option value='Transition planning (e.g., moving to a higher grade or different school)'>
              Transition planning (e.g., moving to a higher grade or different school)
            </option>
            <option value='Absenteeism or truancy'>Absenteeism or truancy</option>
            <option value='Peer relationship problems'>Peer relationship problems</option>
            <option value='Family concerns impacting learning'>
              Family concerns impacting learning
            </option>
          </select>
        </div>

        <div className='align-items-center mb-5 row'>
          <div className='col-xxl-7 col-lg-7'>
            <h4 className='align-items-center d-flex fs-lg-6 fs-xxl-4 fw-normal mb-0'>
              <KTIcon iconName='technology' className='fs-2 me-2 text-primary' /> Has the test taker
              been diagnosed with a learning or other cognitive disorder in the past?
            </h4>
          </div>
          <div className='col-xxl-5 col-lg-5'>
            <div className='d-flex gap-2 justify-content-end'>
              <div className='AnswersInputs'>
                <label
                  htmlFor='diagnosedyes'
                  className={
                    selectedOption === 'diagnosedyes'
                      ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                      : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                  }
                >
                  <input
                    className='d-none'
                    type='radio'
                    value='diagnosedyes'
                    id='diagnosedyes'
                    name='diagnosed'
                    checked={selectedOption === 'diagnosedyes'}
                    onChange={handleOptionChange}
                  />
                  Yes
                </label>
              </div>

              <div className='AnswersInputs'>
                <label
                  htmlFor='diagnosedNo'
                  className={
                    selectedOption === 'diagnosedNo'
                      ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                      : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                  }
                >
                  <input
                    className='d-none'
                    type='radio'
                    value='diagnosedNo'
                    id='diagnosedNo'
                    name='diagnosed'
                    checked={selectedOption === 'diagnosedNo'}
                    onChange={handleOptionChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {selectedOption === 'diagnosedyes' &&
          <div className='FileInput mb-5'>
            <label htmlFor='fileupload' className='align-items-center border-dashed d-flex fs-3 h-100px justify-content-center rounded-3 text-center'>
              <input type="file" value="" id='fileupload' className='d-none' />
              <span>Upload Medical Report (Optional)</span>
            </label>
          </div>
        }

        <div className='align-items-center mb-5 row'>
          <div className='col-xxl-7 col-lg-7'>
            <h4 className='align-items-center d-flex fs-lg-6 fs-xxl-4 fw-normal mb-0'>
              <KTIcon iconName='technology' className='fs-2 me-2 text-primary' /> Has the test taker
              ever suffered a head injury or been diagnosed with a neurological problem?
            </h4>
          </div>
          <div className='col-xxl-5 col-lg-5'>
            <div className='d-flex gap-2 justify-content-end'>
              <div className='AnswersInputs'>
                <label
                  htmlFor='sufferedYes'
                  className={
                    selectedOption === 'sufferedYes'
                      ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                      : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                  }
                >
                  <input
                    className='d-none'
                    type='radio'
                    value='sufferedYes'
                    id='sufferedYes'
                    name='suffered'
                    checked={selectedOption === 'sufferedYes'}
                    onChange={handleOptionChange}
                  />
                  Yes
                </label>
              </div>

              <div className='AnswersInputs'>
                <label
                  htmlFor='sufferedNo'
                  className={
                    selectedOption === 'sufferedNo'
                      ? 'btn btn-sm btn-primary fs-lg-9 fs-xxl-7'
                      : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                  }
                >
                  <input
                    className='d-none'
                    type='radio'
                    value='sufferedNo'
                    id='sufferedNo'
                    name='suffered'
                    checked={selectedOption === 'sufferedNo'}
                    onChange={handleOptionChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {selectedOption === 'sufferedYes' &&
          <div className='FileInput '>
            <label htmlFor='fileupload' className='align-items-center border-dashed d-flex fs-3 h-100px justify-content-center rounded-3 text-center'>
              <input type="file" value="" id='fileupload' className='d-none' />
              <span>Upload Medical Report (Optional)</span>
            </label>
          </div>
        }


        <div className='Pagination bg-light-primary my-5 py-5'>
          <Pagination size='lg' >
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>

            <Pagination.Item active>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>

        <div className='mt-10 d-flex align-items-center gap-10'>
          <div className='ProgressBArs w-100'>
            <h5 className='mb-3'>Test Process</h5>
            <ProgressBar now={now} variant='primary' animated label={`${now}%`} />
          </div>
          <div>
            <Link to='/letsconnect' className='btn btn-success fw-semibold px-6 py-3 d-flex'>
              Continue <KTIcon iconName='arrow-right' className='fs-2 ms-2 text-white' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HowOftenInner }
