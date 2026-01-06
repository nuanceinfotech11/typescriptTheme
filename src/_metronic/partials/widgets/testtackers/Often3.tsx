/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import clsx from 'clsx'
import {Pagination, ProgressBar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../helpers'
import {questioData} from '../../../helpers/howOftenQuestion/QuestionData'

type Props = {
  className?: string
  bgColor?: string
}
const now = 40
const Often3 = ({className}: Props) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionChange = (event) => {
    console.log(event, event.target.value)
    setSelectedOption(event.target.value)
  }

  return (
    <>
      <div
        className={clsx(
          'card card-xxl-stretch bgi-no-repeat bgi-size-contain flex-grow-1',
          className
        )}
      >
        <div className='card-header'>
          <h1 className='fs-1hx fw-bold mb-0 d-flex align-items-center'>
            <KTIcon iconName='message-question' className='fs-2 me-2 text-info' /> How often do you:
          </h1>
        </div>
        <div className='card-body d-flex flex-column justify-content-between position-relative'>
          {questioData.map(
            (Result, index) =>
              index < 1 && (
                <div className='d-flex flex-column flex-grow-1 gap-10 align-items-center justify-content-center' key={index}>
                    <h2 className='fs-2x lh-base mb-0 QTitle'>{Result.quetions}</h2>
                    <div className='d-flex gap-5'>
                      <div className='AnswersInputs AnsBox'>
                        <label
                          htmlFor='Never'
                          className={
                            selectedOption === 'Never'
                              ? 'btn btn-sm btn-primary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
                              : 'btn btn-sm btn-secondary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
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
                          <span className="material-icons fs-3x">cancel</span>
                          {Result.options[0]}
                          {/* {selectedOption === 'Never' ? 'Never' : 'Never'} */}
                        </label>
                      </div>

                      <div className='AnswersInputs AnsBox'>
                        <label
                          htmlFor='Rarely'
                          className={
                            selectedOption === 'Rarely'
                              ? 'btn btn-sm btn-primary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
                              : 'btn btn-sm btn-secondary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
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
                          <span className="material-icons fs-3x">timer</span>
                          {Result.options[1]}
                          {/* {selectedOption === 'Rarely' ? 'Rarely' : 'Rarely'} */}
                        </label>
                      </div>

                      {Result.options[2] !== undefined && (
                        <div className='AnswersInputs AnsBox'>
                          <label
                            htmlFor='Sometimes'
                            className={
                              selectedOption === 'Sometimes'
                                ? 'btn btn-sm btn-primary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
                                : 'btn btn-sm btn-secondary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
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
                            <span className="material-icons fs-3x">cached</span>
                            {Result.options[2]}
                            {/* {selectedOption === 'Sometimes' ? 'Sometimes' : 'Sometimes'} */}
                          </label>
                        </div>
                      )}

                      {Result.options[3] !== undefined && (
                        <div className='AnswersInputs AnsBox'>
                          <label
                            htmlFor='Frequently'
                            className={
                              selectedOption === 'Frequently'
                                ? 'btn btn-sm btn-primary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
                                : 'btn btn-sm btn-secondary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
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
                            <span className="material-icons fs-3x">auto_mode</span>
                            {Result.options[3]}
                            {/* {selectedOption === 'Frequently' ? 'Frequently' : 'Frequently'} */}
                          </label>
                        </div>
                      )}

                      {Result.options[4] !== undefined && (
                        <div className='AnswersInputs AnsBox'>
                          <label
                            htmlFor='Always'
                            className={
                              selectedOption === 'Always'
                                ? 'btn btn-sm btn-primary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
                                : 'btn btn-sm btn-secondary d-flex flex-column align-items-center border gap-3 fs-2 p-5'
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
                            <KTIcon iconName='time' className='fs-3x' />
                            {Result.options[4]}
                            {/* {selectedOption === 'Always' ? 'Always' : 'Always'} */}
                          </label>
                        </div>
                      )}
                    </div>
                </div>
              )
          )}

            <div className='mt-10 d-flex align-items-center gap-10'>
                <div className='ProgressBArs w-100'>
                    <h5 className='mb-3'>Test Process</h5>
                    <ProgressBar now={now} variant='primary' animated label={`${now}%`} />
                </div>
                <div className='d-flex gap-3'>
                    <Link to='/letsconnect' className='btn btn-secondary fw-semibold px-6 py-3 d-flex'>
                        <KTIcon iconName='arrow-left' className='fs-2 ms-2' /> Previous
                    </Link>
                    <Link to='/letsconnect' className='btn btn-success fw-semibold px-6 py-3 d-flex'>
                        Continue <KTIcon iconName='arrow-right' className='fs-2 ms-2' />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export {Often3}
