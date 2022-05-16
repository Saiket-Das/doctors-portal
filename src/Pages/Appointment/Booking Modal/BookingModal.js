import { format } from 'date-fns';
import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';




const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;

    const formatDate = format(date, 'PP');

    const handleBookig = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot: slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        // Booking data post in DATABASE 
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formatDate} at ${slot}`)
                }
                else {
                    toast.error(`You already have an appointment on ${data.booking?.date} at  ${data.booking?.slot}`)
                }
                setTreatment(null)
                refetch();
            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-semibold text-xl mb-5 text-center text-secondary">Booking for: {name}</h3>


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
                                // Why I use Index? Bcz we dont have slot key. so we use index to as a key props forcely 
                                slots.map((slot, index) =>
                                    < option
                                        key={index}
                                        value={slot} > {slot}
                                    </option>)
                            }
                        </select>

                        <input type="text" name='name'
                            value={user?.displayName || ''}
                            className="input input-bordered input-secondary w-full max-w-xs"
                            readOnly disabled
                        />

                        <input type="email" name='email'
                            value={user?.email || ''}
                            className="input input-bordered input-secondary w-full max-w-xs"
                            readOnly disabled
                        />

                        <input type="text" name='phone'
                            placeholder="Your phone number"
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