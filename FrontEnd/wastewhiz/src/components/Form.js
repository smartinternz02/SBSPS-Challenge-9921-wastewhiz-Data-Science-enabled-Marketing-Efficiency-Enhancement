import React, { Fragment as ReactFragment } from 'react'
import { useState } from 'react'
import {useHttpClient} from '../hooks/http-hook'
import Loader from './Loader'
import Modal from './Modal'
import '../pages/Customers.css'

export default function Form() {
  const [prediction, setPrediction] = useState(0)
  const [deal, setDeal] = useState()
  const [weighted, setWeighted] = useState()
  const [internal, setInternal] = useState()
  const [industry, setIndustry] = useState('')
  const [pitch, setPitch] = useState('')
  const [revenue, setRevenue] = useState('')
  const [fund, setFund] = useState('')
  const [designation, setDesignation] = useState('')
  const [hiring, setHiring] = useState('')
  const [source, setSource] = useState('')
  const [level, setLevel] = useState('')
  const [resource, setResource] = useState('')
  const [update, setUpdate] = useState('')
  const [poc, setPOC] = useState('')
  const [geography, setGeography] = useState('')

  const [valid, setValid] = useState(false)

  const { isLoading, error, sendRequest, clearError } = useHttpClient();


  

  const handleSubmit = async (e) => {
    
    const data = {
      deal,
      weighted,
      internal,
      industry,
      pitch,
      revenue,
      fund,
      designation,
      hiring,
      source,
      level,
      resource,
      update,
      poc, 
      geography
    }

    try {
      const response = await sendRequest(
        'http://localhost:8000/api/dashboard/predictions',
        'POST',
        JSON.stringify(data),
        {
          'Content-Type': 'application/json'
        }
      )
      console.log(response)
      setPrediction(response)
    } catch (err) {
      console.log(err)
    }

    // sendRequest(
    //   'http://localhost:8000/api/dashboard/predictions',
    //   'POST',
    //   JSON.stringify(data),
    //   {
    //     'Content-Type': 'application/json'
    //   }
    // )
      
    console.log(data)
    e.preventDefault()
  }

  

  const handleDeal = (e) => {
    setDeal(e.target.value)
  }

  const handleWeighted = (e) => {
    setWeighted(e.target.value)
  }

  const handleInternal = (e) => {
    setInternal(e.target.value)
  }

  const handleIndustry = (e) => {
    setIndustry(e.target.value)
  }

  const handlePitch = (e) => {
    setPitch(e.target.value)
  }

  const handleRevenue = (e) => {
    setRevenue(e.target.value)
  }

  const handleFund = (e) => {
    setFund(e.target.value)
  }

  const handleDesignation = (e) => {
    setDesignation(e.target.value)
  }

  const handleHiring = (e) => {
    setHiring(e.target.value)
  }

  const handleSource = (e) => {
    setSource(e.target.value)
  }

  const handleLevel = (e) => {
    setLevel(e.target.value)
  }

  const handleResource = (e) => {
    setResource(e.target.value)
  }

  const handleUpdate = (e) => {
    setUpdate(e.target.value)
  }

  const handlePOC = (e) => {
    setPOC(e.target.value)
  }

  const handleGeography = (e) => {
    setGeography(e.target.value)
  }

  const clearPred = () => {
    setPrediction(0)
  }




  return (
    <ReactFragment>
    {error && <Modal icon="error" title="Error" text={error} onClear={clearError} />}
    {prediction && <Modal icon="success" title={`${prediction}%`} iconColor="rgb(22 101 52)" text={`The Success Probability is ${prediction}%`} onClear={clearPred} />}
    {isLoading && 
      <Loader 
        asOverlay 
        text={'Predicting the success probability...'} 
      />}
    <div className="form-container">
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12" >
          <h2 className="text-base font-semibold leading-7 text-2xl">Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-900">
            Enter the details of the Deal below (Please fill in all the Fields for higher accuracy).
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1 place-items-left" >
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Deal Value
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Deal_name"
                    id="Deal_name"
                    className="block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Deal Value"
                    value={deal}
                    onChange={(e)=> handleDeal(e)}
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Weighted Amount
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Weighted_amount"
                    id="Weighted_amount"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Weighted Amount"
                    value={weighted}
                    onChange={(e)=> handleWeighted(e)}

                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Internal Rating
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="Internal_rating"
                    id="Internal_rating"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Internal Rating"
                    value={internal}
                    onChange={(e)=> handleInternal(e)}

                  />
                </div>
              </div>
            </div>
          </div>
        </div> 

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 place-items-left" >
        <div className="sm:col-span-3" >
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Industry
          </label>
          <div className="mt-1">
            <select
              id="Industry"
              name="Industry"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              value={industry}
              onChange={(e)=> handleIndustry(e)}
            >
              <option>Advertising/PR</option>
              <option>Aerospace/Defense</option>
              <option>Aircraft Parts</option>
              <option>Airlines/Air Couriers</option>
              <option>Alternative</option>
              <option>Apparel Products</option>
              <option>Apparel Retail</option>
              <option>Architecture/Engineering</option>
              <option>Associations</option>
              <option>Auto Manufacturers</option>
              <option>Auto Parts/Services</option>
              <option>Automotive/Transportation</option>
              <option>B2B eCommerce</option>
              <option>Banks</option>
              <option>Beverages (Alcoholic)</option>
              <option>Beverages (Non-Alcoholic)</option>
              <option>BioTech/Drugs</option>
              <option>Biotech/Healthcare</option>
              <option>Book</option>
              <option>Casinos/Gaming</option>
              <option>Catalog/MailOrder</option>
              <option>Chemical Manufacturing</option>
              <option>Computer Hardware</option>
              <option>Concrete/Cement</option>
              <option>Conglomerates</option>
              <option>Constr - Supplies</option>
              <option>Constr/Agric Machinery</option>
              <option>Construction Services</option>
              <option>Construction/Agriculture</option>
              <option>Consumer Products</option>
              <option>Database</option>
              <option>Department/Discount</option>
              <option>ERP</option>
              <option>Education/Training</option>
              <option>Electric Utilities</option>
              <option>Electronics</option>
              <option>Energy</option>
              <option>Entertainment/Media</option>
              <option>Fabricated Products</option>
              <option>Finance</option>
              <option>Finance Software</option>
              <option>Financial Services</option>
              <option>Food Processing</option>
              <option>Furniture/Fixtures</option>
              <option>Gold/Silver</option>
              <option>Government</option>
              <option>Grocery</option>
              <option>Health/Accident</option>
              <option>Healthcare Facilities/Services</option>
              <option>Home Improvement</option>
              <option>Hospitals/Clinics</option>
              <option>Hotels/Motels</option>
              <option>Human Resources</option>
              <option>ISPs</option>
              <option>Industrial Equip</option>
              <option>Information Services</option>
              <option>Insurance</option>
              <option>Internet</option>
              <option>Internet Consulting</option>
              <option>Internet Software</option>
              <option>Investment Bank/Brokerage</option>
              <option>Iron/Steel</option>
              <option>Legal</option>
              <option>Leisure/Hospitality</option>
              <option>Lending/Mortgage</option>
              <option>Life</option>
              <option>MSPs (Mgmt)</option>
              <option>Machine Tools</option>
              <option>Marketing/Advertising</option>
              <option>Materials/Manufacturing</option>
              <option>Medical Equipment</option>
              <option>Metals/Mining</option>
              <option>Movies</option>
              <option>Multimedia Software</option>
              <option>Music</option>
              <option>Natural Gas</option>
              <option>Network Infrastructure</option>
              <option>Networking/Comm.</option>
              <option>Newspapers</option>
              <option>Non-Profit</option>
              <option>OSPs (Optical)</option>
              <option>Office Equipment</option>
              <option>Office Supplies</option>
              <option>Oil, Gas, Coal</option>
              <option>Online Banking</option>
              <option>Other</option>
              <option>Other Biz Services</option>
              <option>Other Consulting</option>
              <option>Other Investment Firms</option>
              <option>Other Vehicles</option>
              <option>Outsourcing</option>
              <option>Packaging/Containers</option>
              <option>Periodicals</option>
              <option>Peripherals/Comp.</option>
              <option>Personal Services</option>
              <option>Personal/Household Products</option>
              <option>Photography</option>
              <option>Plastic/Rubber</option>
              <option>Plumbing/HVAC</option>
              <option>Printing Services</option>
              <option>Professional Services</option>
              <option>Property/Casualty</option>
              <option>Publishing</option>
              <option>REIT</option>
              <option>Railroads</option>
              <option>Real Estate</option>
              <option>Recreational Products</option>
              <option>Recreational Services</option>
              <option>Religious Groups</option>
              <option>Rentals/Leasing</option>
              <option>Restaurants</option>
              <option>Retail</option>
              <option>SaaS</option>
              <option>Sales/Marketing Services</option>
              <option>Sales/Marketing Software</option>
              <option>Schools</option>
              <option>Scientific</option>
              <option>Security Hardware</option>
              <option>Security Services</option>
              <option>Security Software</option>
              <option>Semiconductors</option>
              <option>Servers/Storage</option>
              <option>Service Providers</option>
              <option>Services</option>
              <option>Shipping</option>
              <option>Social Services</option>
              <option>Software</option>
              <option>Software Consulting</option>
              <option>Specialty</option>
              <option>Speech Recognition</option>
              <option>Staffing</option>
              <option>Staffing/Outsourcing/HR</option>
              <option>Supply Chain</option>
              <option>Technology Consulting</option>
              <option>Technology Retail</option>
              <option>Telecom Consulting</option>
              <option>Telecom Hardware</option>
              <option>Telecom Services/Telephone Companies</option>
              <option>Telecom Software</option>
              <option>Television/Cable</option>
              <option>Testing</option>
              <option>Training</option>
              <option>Trucking</option>
              <option>Trucks/Buses/RVs</option>
              <option>Utilities</option>
              <option>Venture Capital</option>
              <option>Vitamins/Nutritionals/Other</option>
              <option>WSPs (Wireless)</option>
              <option>Warehousing/Logistics</option>
              <option>Waste/Recycling</option>
              <option>Water Utilities</option>
              <option>Wireless Consulting</option>
              <option>Wireless Hardware</option>
              <option>Wood/Paper</option>
              <option>Wood/Timber</option>
              <option>eBusiness</option>
              <option>eCommerce</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Pitch Product
          </label>
          <div className="mt-2">
            <select
              id="Pitch_Product_2"
              name="Pitch_Product_2"
              onChange={(e)=> handlePitch(e)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Product 1</option>
              <option>Product 2</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Lead Revenue  
          </label>
          <div className="mt-2">
            <select

              id="Lead_revenue_50 - 100 Million"
              name="Lead_revenue_50 - 100 Million"
              onChange={(e)=> handleRevenue(e)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>50 - 100 Million</option>
              <option>500 Million - 1 Billion</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Fund Category
          </label>
          <div className="mt-2">
            <select
              id="Fund_category_Category 2"
              name="Fund_category_Category 2"
              onChange={(e)=> handleFund(e)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Designation
          </label>
          <div className="mt-2">
            <select
              id="Designation"
              name="Designation"
              onChange={(e)=> handleDesignation(e)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>CEO/Chairman/President</option>
              <option>CEO/Co-Founder/Chairman</option>
              <option>CEO/President</option>
              <option>Chairman/CEO/President</option>
              <option>Chairman/Chief Innovation Officer</option>
              <option>Chief Executive Officer</option>
              <option>Executive Vice President</option>
              <option>SVP/General Counsel </option>
              <option>Vice President / GM (04-present) : VP Sales and Marketing (01-04)</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Hiring Candidate Role
          </label>
          <div className="mt-2">
            <select
              id="Hiring_candidate"
              name="Hiring_candidate"
              onChange={(e)=> handleHiring(e)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Accommodation manager</option>
              <option>Accountant, chartered</option>
              <option>Accountant, chartered certified</option>
              <option>Accountant, chartered management</option>
              <option>Accountant, chartered public finance</option>
              <option>Accounting technician</option>
              <option>Actor</option>
              <option>Actuary</option>
              <option>Acupuncturist</option>
              <option>Administrator</option>
              <option>Administrator, Civil Service</option>
              <option>Administrator, arts</option>
              <option>Administrator, charities/voluntary organisations</option>
              <option>Administrator, education</option>
              <option>Administrator, local government</option>
              <option>Administrator, sports</option>
              <option>Adult guidance worker</option>
              <option>Adult nurse</option>
              <option>Advertising account executive</option>
              <option>Advertising account planner</option>
              <option>Advertising art director</option>
              <option>Advertising copywriter</option>
              <option>Advice worker</option>
              <option>Aeronautical engineer</option>
              <option>Agricultural consultant</option>
              <option>Agricultural engineer</option>
              <option>Aid worker</option>
              <option>Air broker</option>
              <option>Air cabin crew</option>
              <option>Air traffic controller</option>
              <option>Airline pilot</option>
              <option>Ambulance person</option>
              <option>Amenity horticulturist</option>
              <option>Analytical chemist</option>
              <option>Animal nutritionist</option>
              <option>Animal technologist</option>
              <option>Animator</option>
              <option>Applications developer</option>
              <option>Arboriculturist</option>
              <option>Archaeologist</option>
              <option>Architect</option>
              <option>Architectural technologist</option>
              <option>Archivist</option>
              <option>Armed forces logistics/support/administrative officer</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Lead Source
          </label>
          <div className="mt-2">
            <select
              id="Lead_source"
              name="Lead_source"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e)=> handleSource(e)}
              >
              <option>Marketing Event</option>
              <option>Website</option>
              <option>Others</option>
              
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Level of Meeting
          </label>
          <div className="mt-2">
            <select
              id="Level_of_meeting"
              name="Level_of_meeting"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e)=> handleLevel(e)}
              >
              <option>Level 2</option>
              <option>level 3</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Internal POC 
          </label>
          <div className="mt-2">
            <select

              id="Internal_POC"
              name="Internal_POC"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e)=> handlePOC(e)}
              >
              <option>Ali,Mohamed</option>
              <option>Anthony,Katherine D</option>
              <option>Bannister,Joan</option>
              <option>Booker,David L</option>
              <option>Brown,Maxine A</option>
              <option>Carter Sr,Clifton E</option>
              <option>Cash,Tyrone J</option>
              <option>Cashin,Marc C</option>
              <option>Charles,Caleb</option>
              <option>Clavey,Therese A</option>
              <option>Davis,Brian R</option>
              <option>Davis,Sharrice A</option>
              <option>Dimattia,Frank D</option> 
              <option>Dunaway,Antoine</option>  
              <option>Dyson,William A</option>
              <option>Featherstone,Adrian R</option>
              <option>Gaskins Jr,Franklin D</option>
              <option>Georgakopoulos,Vasilios T</option>
              <option>Gilley,Janine</option>
              <option>Gould,Lisa D</option>

            </select>
          </div>
        </div>


        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Resource
          </label>
          <div className="mt-2">
            <select
              id="Resource"
              name="Resource"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e)=> handleResource(e)}
              >
              <option>Deliverable</option>
              <option>No</option>
              <option>Not enough</option>
              <option>We have all the requirements</option>
              <option>Yes</option>
            </select>
          </div>
        </div>


        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Last Lead Update
          </label>
          <div className="mt-2">
            <select
              id="Last_lead_update"
              name="Last_lead_update"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(e)=> handleUpdate(e)}
              >
              <option>5 days back</option>
              <option>Did not hear back after Level 1</option>
              <option>Following up but lead not responding</option>
              <option>More than 2 weeks</option>
              <option>More than a week back</option>
              <option>No track</option>
              <option>Pending</option>
              <option>Up-to-date</option>
              <option>more than a month</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Geography
          </label>
          <div className="mt-2">
            <select

              id="Geography"
              name="Geography"
              onChange={(e)=> handleGeography(e)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"

              >
              <option>India</option>
              <option>USA</option>
            </select>
          </div>
        </div>

        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          type='button'
          className='inline-flex items-center px-40 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-800 hover:bg-green-950 focus:outline-none'
          disabled={isLoading}
        >
          PREDICT
        </button>

      
      </div>
    </form>
    </div>
    </ReactFragment>
  )
}
