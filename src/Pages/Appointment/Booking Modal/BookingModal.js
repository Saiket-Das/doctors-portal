import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots } = treatment;

    const handleBookig = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg mb-5 text-center">Booking for: {name}</h3>


                    {/* MODAL FORM  */}
                    <form
                        className='grid grid-cols-1 gap-3 justify-items-center p-5'
                        onSubmit={handleBookig}
                    >

                        {/* SELECTED TIME  */}
                        <input type="text" value={format(date, 'PP')}
                            className="input input-bordered input-secondary w-full max-w-xs"
                            readOnly disabled
                        />

                        {/* SLOT CHOOSE  */}
                        <select name='slot' className="select select-secondary w-full max-w-xs" required>
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name'
                            placeholder="Your name"
                            className="input input-bordered input-secondary w-full max-w-xs"
                        />

                        <input type="email" name='email' placeholder="Your email Address"
                            className="input input-bordered input-secondary w-full max-w-xs"
                        />

                        <input type="text" name='phone' placeholder="Your phone number"
                            className="input input-bordered input-secondary w-full max-w-xs"
                        />

                        <input type="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />

                    </form>

                </div>

            </div>
        </div >
    );
};

export default BookingModal;