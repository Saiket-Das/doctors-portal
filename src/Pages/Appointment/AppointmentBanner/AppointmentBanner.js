import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div className="hero min-h-screen"
                style={{ backgroundImage: `url('${bg}')` }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-40 gap-10" >
                    <img style={{ width: '594px' }} src={chair} className=" shadow-2xl" alt='' />

                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;