import React from "react";
import bg from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const ConatctUs = () => {
  return (
    <div
      className="my-24 flex justify-center items-center"
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      <div className="w-100 mx-auto p-14">
        <div className="text-center">
          <h4 className="text-base font-semibold text-primary">Conatct Us</h4>
          <h3 className="text-2xl text-white">Stay Contacted with us</h3>
        </div>

        <div className="mt-10">
          <input
            type="text"
            placeholder="Email Adress"
            className="w-96 input input-bordered input-md max-w-xs"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="w-96 input input-bordered input-md max-w-xs"
          />
          <br />
          <br />
          <textarea
            className="textarea w-80"
            cols="10"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <br />
          <br />
          <div className="flex justify-center">
            <PrimaryButton name="Submit"></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConatctUs;
