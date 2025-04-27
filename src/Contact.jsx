import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl">Contact</legend>

        <label className="label">Full Name</label>
        <input type="text" className="input" placeholder="Full Name" />

        <label className="label">Email</label>
        <input type="text" className="input" placeholder="Email" />

        <label className="label">Email</label>
        <input type="text" className="input" placeholder="Email" />
        <input type="submit" value="Submit" className="btn" />
      </fieldset>
      </div>
      <div className="tooltip">
    </div>
    </div>
  )
}

export default Contact