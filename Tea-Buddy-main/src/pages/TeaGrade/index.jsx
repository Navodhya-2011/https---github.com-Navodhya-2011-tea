import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {Text} from "../../components";
import Sidebar1 from "components/Sidebar1";
import GaugeChartComponent from 'components/GaugeChartComponent/index'; 

function SidebarItem({ iconSrc, altText, text, onClick, tabIndex }) {
  return (
    <div
      className="flex gap-5 justify-between self-start mt-10 ml-7 whitespace-nowrap max-md:mt-10 max-md:ml-2.5"
      onClick={onClick}
      tabIndex={tabIndex}
      role="button"
    >
      <img loading="lazy" src={iconSrc} alt={altText} className="shrink-0 w-5 aspect-[1.05]" />
      <div>{text}</div>
    </div>
  );
}

SidebarItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
};

SidebarItem.defaultProps = {
  altText: '',
  onClick: undefined,
  tabIndex: 0,
};

function MyComponent() {
  const [date, setDate] = useState('');
  const [teaGrade, setTeaGrade] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch('https://rpteagrade.el.r.appspot.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, tea_grade: teaGrade }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const result = await response.json();
      setPrediction(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pr-10 bg-gray-200 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <Sidebar1 className="flex flex-col w-[296px] h-screen gap-[122px] top-0 p-[22px] sm:p-5 rounded-tl-[30px] rounded-bl-[30px] bg-teal-600 !sticky overflow-auto" />
        <main className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
            <header className="self-start ml-5 text-4xl font-bold text-right text-black max-md:ml-2.5">Tea Grade Predictor</header>
            <section className="mt-10 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                  <header className="self-stretch px-6 pt-1 pb-16 my-auto w-full rounded-xl border border-gray-200 border-solid bg-white bg-opacity-90 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <section className="flex flex-col w-[85%] max-md:ml-0 max-md:w-full">
                        <header className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                          {/* <div className="self-center text-base font-medium text-white text-opacity-80">Troughs</div> */}
                          <div className="mt-4 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                              <section className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                                <header className="flex flex-col grow max-md:mt-10">
                                  <div className="text-lg font-bold leading-10 text-zinc-800">Predicted tea Quantity</div>
                                  <div className="self-stretch mt-5 text-zinc-600">Date</div>
                                  <div className="flex flex-row">
                                    <div className="flex flex-col items-end self-end mt-12 text-sm tracking-normal text-black max-md:mt-10" />
                                  </div>
                                </header>
                                <div className="max-md:mt-10">{prediction ? prediction.future_date : 'No data'}</div>
                                {/* <div className="ml-[300]"></div>{prediction && <GaugeChartComponent value={prediction.predicted_quantity_kg} />} */}
                                {/* <div className="mt-8">{prediction ? prediction.predicted_quantity_kg : 'No data'}</div> */}
                              </section>
                              <section className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                                <header className="flex flex-col grow items-center mt-16 text-sm tracking-normal text-black max-md:mt-10">
                                  <div className="self-stretch text-center text-zinc-600">Tea Grade Quantity</div>
                                  <div className="mt-12 max-md:mt-10">{prediction ? prediction.predicted_quantity_kg + ' kg' : 'No data'}</div>
                                </header>
                              </section>
                            </div>
                          </div>
                        </header>
                      </section>
                    </div>
                  </header>
                </article>
                <aside className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
                  <header className="flex gap-1 mt-5 text-xs font-semibold text-zinc-500 max-md:mt-10">
                    <div className="grow ml-0">{prediction ? <div>Future Date: {prediction.future_date}</div> : 'No data'}</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/790f255acf272d82e4d645255ca0446183a27b7056a555716acf20b72e7d5980?apiKey=6d870d8656874da68b697fca325108fd&" alt="Calendar icon" className="shrink-0 w-3.5 aspect-square" />
                  </header>
                </aside>
              </div>
            </section>
          </section>
          <section className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
            <header className="flex flex-col grow pt-5 pb-20 w-full rounded-xl border border-gray-200 border-solid bg-white bg-opacity-90 max-md:mt-6">
              {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e802dc12b2b186e6e931bd1c4ed77da7271b510da87c33742139c6082d3a683?apiKey=6d870d8656874da68b697fca325108fd&" alt="Settings icon" className="self-end w-3.5 aspect-square" /> */}
              <div className=" justify-center p-1 bg-white-A700_99 shadow-xs h-120">
              <div className="flex flex-col pr-2 pl-5 mt-4 max-md:pl-5">
                <div className="text-lg font-bold leading-10 text-zinc-800">Add Tea Grade Details</div>
                {/* <div className="self-end mt-2 mr-10 text-sm text-zinc-500 max-md:mr-2.5">(Customer Wise)</div> */}
              </div>
              <form className="flex flex-col items-center pr-2 pl-5 mt-6 text-sm text-zinc-500 max-md:pl-5" onSubmit={handleSubmit}>
                <label htmlFor="dateInput" className="sr-only">Date</label>
                <input
                  type="text"
                  id="dateInput"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="YYYY/MM/DD"
                  aria-label="Date"
                  className="flex gap-5 items-start px-5 py-2 mt-2 max-w-full text-base font-medium whitespace-nowrap bg-white rounded-xl shadow-sm text-stone-400 w-[231px] max-md:pl-5"
                />
                <label htmlFor="teaGradeInput" className="sr-only">Tea Grade</label>
                <input
                  type="text"
                  id="teaGradeInput"
                  value={teaGrade}
                  onChange={(e) => setTeaGrade(e.target.value)}
                  aria-label="Tea Grade"
                  className="shrink-0 mt-3.5 h-10 bg-white rounded-xl shadow-sm w-[231px]"
                />
                <button type="submit" className="justify-center items-start px-12 py-2.5 mt-16 max-w-full text-base font-bold text-white whitespace-nowrap rounded-xl shadow-sm bg-teal-600 bg-opacity-90 w-[177px] max-md:px-5 max-md:mt-10 mb-6" style={{ color: 'white' }}>Calculate</button>
              </form>
              </div>
              {error && <div className="text-red-500 mt-4">{error}</div>}
              {prediction && (
                <div className="mt-4 text-zinc-800">
                  <div>Tea Grade: {prediction.grade}</div>
                  <div>Future Date: {prediction.future_date}</div>
                  <div>Predicted Quantity (kg): {prediction.predicted_quantity_kg}</div>
                </div>
              )}
            </header>
          </section>
        </main>
        {prediction && (
          <div className="absolute bottom-5 right-80 w-[600px] h-[450px]">
            <GaugeChartComponent value={prediction.predicted_quantity_kg} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MyComponent;
