import "./BookingForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const validateDate = (date) => {
    return date >= new Date().toISOString().split("T")[0];
  };

  const nav = useNavigate();

  const getIsFormValid = () => {
    return validateDate(date) && time && guests > 0 && occasion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/confirmed-booking", {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Book a table</h2>
          <div className="Field">
            <label htmlFor="date">
              Date<sup>*</sup>
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              placeholder="Date"
            />
          </div>
          <div className="Field">
            <label htmlFor="res-time">Time</label>
            <select
              id="res-time "
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div className="Field">
            <label>
              Number of guests<sup>*</sup>
            </label>
            <input
              type="number"
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }}
              placeholder="Number of guests"
            />
          </div>
          <div className="Field">
            <label>
              Occasion <sup>*</sup>
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="role">Occasion</option>
              <option value="individual">Birthday</option>
              <option value="business">Anniversary</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Make your reservation
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default BookingForm;
