// for css
import './Title.css'

function Title({header, desc}) {
  return (
    <div className='title d-flex justify-content-center align-items-center flex-column NA-text-gray mb-5'>
        <h3 className='m-0 pb-3 text-capitalize fw-bolder fs-2 position-relative'>
            {header}
        </h3>
        <p className='mt-3 text-center'>
            {desc}
        </p>
    </div>
  )
}

export default Title