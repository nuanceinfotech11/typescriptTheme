/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../helpers'

type Props = {
  className: string
}

const AdamsAssessment: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bold mb-2 text-dark'>Adam's Assessment Journey</span>
          <span className='text-muted fw-semibold fs-7'>From Start to Success</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}

            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='setting' className='fs-2 me-3 text-muted' /> Comprehensive Survey
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-muted fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='fw-mormal timeline-content text-muted fw-bold ps-3'>Not Started</div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='teacher' className='fs-2 me-3' /> Provide Teacher's Email
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='fw-mormal timeline-content text-muted ps-3'>Pending</div>
            {/* end::Content */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='flask' className='fs-2 me-3' /> Test Process
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='fw-mormal timeline-content text-muted ps-3'>Pending</div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='file-up' className='fs-2 me-3' /> Upload Handwriting Sample Video
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='fw-mormal timeline-content text-muted ps-3'>Pending</div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='star' className='fs-2 me-3' /> Teacher's Feedback
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='fw-mormal timeline-content text-muted ps-3'>Pending</div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='message-add' className='fs-2 me-3' /> Chat with Psychologist
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='fw-mormal timeline-content text-muted ps-3'>Pending</div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='update-file' className='fs-2 me-3' /> Assessment Report
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='fw-mormal timeline-content text-muted ps-3'>Pending</div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bold text-gray-800 fs-6'>
              <span className='bullet bullet-vertical h-40px bg-muted me-5'></span>
              <KTIcon iconName='file-sheet' className='fs-2 me-3' /> Set Up Therapist Sessien
            </div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='fw-mormal timeline-content text-muted ps-3'>Pending</div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export {AdamsAssessment}
