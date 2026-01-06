/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import clsx from 'clsx'
import {Button, ProgressBar} from 'react-bootstrap'
import {KTIcon} from '../../../helpers'
import axios from 'axios'
import { getApiData } from '../../../../utils/Utils'

type Props = {
  className?: string
  bgColor?: string
}

type QuestionDataItem = {
  question: string;
  answers: any[];
  question_id: Number;
};

const now = 40
const Often2 = ({className}: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [buttonContinue, setButtonCountinue] = useState<Boolean>(false)
  const [assessmentValue, setAssessmentValue] = useState('')
  const [disorderValue, setDisorderValue] = useState('')
  const [neurologicalProblemValue, setNeurologicalProblemValue] = useState('')
  const [activeQuestionLength, setActiveQuestionLength] = useState<number>(0);
  const [questionDataApi, setQuestionDataApi] = useState<QuestionDataItem[]>([]);

  const itemsPerPage = 7
  // const totalPages = Math.ceil(questioData.length / itemsPerPage)
  // console.log(questioData.length)
  // console.log(currentPage,'currentPage')

  const totalPages = 20;

  const totalItems = Array.from({length: totalPages}, (_, index) => index + 1)
  const paginationLimit = 5
 
  // console.log(renderedData)
  //  const getData = () =>{
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const handlePageChange = (page: number) => {
    console.log("page",page)

    let currentPageWithLocal = localStorage.getItem('currentPage');
    let currentPageNo = currentPageWithLocal ? parseInt(currentPageWithLocal, 10) : 0

    localStorage.setItem('currentPage', `${page+currentPageNo}`);
    setCurrentPage(page)
  }
  const [selections, setSelections] = useState<string[]>(Object.keys(questionDataApi).map(() => ''))

  // console.log(selections,'selections')
  const handleOptionChange = (index, value) => () => {
    // console.log('index, value==============',index, value)
    setSelections((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions]
      newSelectedOptions[index] = value
      return newSelectedOptions
    })
  }
  // console.log('activeQuestionLength', activeQuestionLength, selections.length)
  const hideContinue = () => {
    const activeCountElements = document.querySelectorAll('.activeCount')

    const activeCountLength = activeCountElements.length
    // console.log('activeCountLength',activeCountLength, 'startIndex', startIndex)
    setActiveQuestionLength(activeCountLength+startIndex);
    if (startIndex + activeCountLength === endIndex) {
      setButtonCountinue(true)
    } else {
      // setButtonCountinue(false)
    }
  }
  useEffect(() => {
    hideContinue()
  }, [selections, currentPage])

  const handleChange = (event) => {
    setAssessmentValue(event.target.value)
  }

  const handleChangeDisorder = (event) => {
    setDisorderValue(event.target.value)
  }
  const handleChangeNeurological = (event) => {
    setNeurologicalProblemValue(event.target.value)
  }
  // console.log('startIndex',startIndex)

  const Fetchdata = async () => {
    try {
      let currentPageWithLocal = localStorage.getItem('currentPage');
    let currentPageNo = currentPageWithLocal ? parseInt(currentPageWithLocal, 10) : 0
      const response = await getApiData(`/questions/${currentPage-1}`);
      console.log('responser',response)
      setQuestionDataApi(response?.data)
    }catch(err){
      console.log(err)
    }
   
  };

  useEffect(() => {
    Fetchdata();
  }, [currentPage]);




  // const apiData = () => {
  //   let currentPageWithLocal = localStorage.getItem('currentPage');
  //   let currentPageNo = currentPageWithLocal ? parseInt(currentPageWithLocal, 10) : 0
  //   console.log('currentPageWithLocal',currentPageWithLocal, currentPageWithLocal ? parseInt(currentPageWithLocal, 10) : 0)
  //   console.log('logic', currentPageNo > 0 ? currentPageNo-1 : currentPage-1 , currentPageNo , currentPage)
  //   axios.get(`http://18.237.108.200/questions/${currentPage-1}`, { 'headers': { "ngrok-skip-browser-warning": "69420" } })
  //       .then(response => {
  //           // console.log(response)
  //           setQuestionDataApi(response?.data)
  //       })
  //       .catch(error => {
  //           console.log(error)
  //       }
  //       )                         
  // }

  // useEffect(()=>{
  //   apiData()
  // },[currentPage])

  return (
    <div className={clsx('card card-xxl-stretch bgi-no-repeat bgi-size-contain', className)}>
      <div className='card-body d-flex flex-column justify-content-between position-relative'>
        <h1 className='fs-1hx fw-bold mb-6'>
          <KTIcon iconName='message-question' className='fs-2 me-2 text-info' /> How often do you:
        </h1>

        {questionDataApi && questionDataApi?.map((Result, index) => (
          <div className='align-items-center mb-3 row' key={index + startIndex}>
            <div className='col-lg-12'>
              <div className='p-4 bg-light border rounded'>
                <div className='row align-items-center'>
                  <div className='col-xxl-7 col-lg-7'>
                    <h4 className='align-items-center d-flex fs-lg-6 fs-xxl-4 fw-normal mb-0'>
                      <KTIcon iconName='technology' className='fs-2 me-2 text-primary' />{' '}
                      {Result && Result?.question}
                      {/* {index+startIndex} */}
                    </h4>
                  </div>

                  <div className='col-xxl-5 col-lg-5'>
                    <div className='d-flex gap-2 justify-content-end'>
                      {Result && Result?.answers.map((option, optionIndex) => (
                        <div className='AnswersInputs' key={optionIndex}>
                          <label
                            htmlFor={option}
                            className={
                              option === selections[index + startIndex]
                                ? `btn btn-sm btn-primary fs-lg-9 fs-xxl-7 activeCount `
                                : 'btn btn-sm btn-secondary fs-lg-9 fs-xxl-7'
                            }
                            onClick={handleOptionChange(index + startIndex, option)}
                          >
                            {option}
                            {/* {index+startIndex} */}

                            {/* {selectedOption === 'Never' ? 'Never' : 'Never'} */}
                          </label>
                          <input
                            className='d-none'
                            type='radio'
                            id={option}
                            name={`question-${index}`}
                            value={option}
                            // onChange={handleOptionChange(index + startIndex, option)}
                            // checked={Result.selectedOption === selections[index]}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {currentPage === totalPages && (
          <div>
            <div className='my-5'>
              <h4 className='align-items-center d-flex fs-lg-6 fs-xxl-4 fw-normal mb-5'>
                <KTIcon iconName='technology' className='fs-2 me-2 text-primary' />{' '}
                <label htmlFor=''>What is the primary reason for referring for assessment?</label>
              </h4>
              <select
                className='form-select form-select-white'
                aria-label='Select example'
                value={assessmentValue}
                onChange={handleChange}
              >
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
                  <KTIcon iconName='technology' className='fs-2 me-2 text-primary' /> Has the test
                  taker been diagnosed with a learning or other cognitive disorder in the past?
                </h4>
              </div>
              <div className='col-xxl-5 col-lg-5'>
                <div className='d-flex gap-2 justify-content-end'>
                  <div className='AnswersInputs'>
                    <label
                      htmlFor='diagnosedyes'
                      className={
                        disorderValue === 'diagnosedyes'
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
                        checked={disorderValue === 'diagnosedyes'}
                        onChange={handleChangeDisorder}
                      />
                      Yes
                    </label>
                  </div>

                  <div className='AnswersInputs'>
                    <label
                      htmlFor='diagnosedNo'
                      className={
                        disorderValue === 'diagnosedNo'
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
                        checked={disorderValue === 'diagnosedNo'}
                        onChange={handleChangeDisorder}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {disorderValue === 'diagnosedyes' && (
              <div className='FileInput mb-5'>
                <label htmlFor='fileupload'>
                  <input type='file' value='' id='fileupload' className='d-none' />
                  <span className='btn btn-sm btn-primary cursor-pointer'>
                    Upload Medical Report
                  </span>
                </label>
              </div>
            )}

            <div className='align-items-center mb-5 row'>
              <div className='col-xxl-7 col-lg-7'>
                <h4 className='align-items-center d-flex fs-lg-6 fs-xxl-4 fw-normal mb-0'>
                  <KTIcon iconName='technology' className='fs-2 me-2 text-primary' /> Has the test
                  taker ever suffered a head injury or been diagnosed with a neurological problem?
                </h4>
              </div>
              <div className='col-xxl-5 col-lg-5'>
                <div className='d-flex gap-2 justify-content-end'>
                  <div className='AnswersInputs'>
                    <label
                      htmlFor='sufferedYes'
                      className={
                        neurologicalProblemValue === 'sufferedYes'
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
                        checked={neurologicalProblemValue === 'sufferedYes'}
                        onChange={handleChangeNeurological}
                      />
                      Yes
                    </label>
                  </div>

                  <div className='AnswersInputs'>
                    <label
                      htmlFor='sufferedNo'
                      className={
                        neurologicalProblemValue === 'sufferedNo'
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
                        checked={neurologicalProblemValue === 'sufferedNo'}
                        onChange={handleChangeNeurological}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {neurologicalProblemValue === 'sufferedYes' && (
              <div className='FileInput mb-5'>
                <label htmlFor='fileupload'>
                  <input type='file' value='' id='fileupload' className='d-none' />
                  <span className='btn btn-sm btn-primary cursor-pointer'>
                    Upload Medical Report
                  </span>
                </label>
              </div>
            )}
          </div>
        )}

        <div className='mt-10 d-flex align-items-center gap-10'>
          <div className='ProgressBArs w-100'>
            <h5 className='mb-3'>Test Process</h5>
            <ProgressBar
              now={(activeQuestionLength / 140) * 100}
              variant='primary'
              animated
              label={`${((activeQuestionLength / 140) * 100).toFixed(0)}%`}
            />
          </div>
          <div>
            {buttonContinue && (
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`btn btn-success fw-semibold px-6 py-3 d-flex`}
              >
                Continue <KTIcon iconName='arrow-right' className='fs-2 ms-2 text-white' />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export {Often2}
