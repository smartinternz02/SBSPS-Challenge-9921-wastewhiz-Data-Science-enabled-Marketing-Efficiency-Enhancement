import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Form() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-2xl">Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-900">
            Enter the details of the Deal below (Please fill in all the Fields for higher accuracy).
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
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
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
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
                  />
                </div>
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
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
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}


const fields = [
    "Weighted_amount",
    "Internal_rating",
    "Industry_Advertising/PR",
    "Industry_Aerospace/Defense",
    "Industry_Aircraft Parts",
    "Industry_Airlines/Air Couriers",
    "Industry_Alternative",
    "Industry_Apparel Products",
    "Industry_Apparel Retail",
    "Industry_Architecture/Engineering",
    "Industry_Associations",
    "Industry_Auto Manufacturers",
    "Industry_Auto Parts/Services",
    "Industry_Automotive/Transportation",
    "Industry_B2B eCommerce",
    "Industry_Banks",
    "Industry_Beverages (Alcoholic)",
    "Industry_Beverages (Non-Alcoholic)",
    "Industry_BioTech/Drugs",
    "Industry_Biotech/Healthcare",
    "Industry_Book",
    "Industry_Casinos/Gaming",
    "Industry_Catalog/MailOrder",
    "Industry_Chemical Manufacturing",
    "Industry_Computer Hardware",
    "Industry_Concrete/Cement",
    "Industry_Conglomerates",
    "Industry_Constr - Supplies",
    "Industry_Constr/Agric Machinery",
    "Industry_Construction Services",
    "Industry_Construction/Agriculture",
    "Industry_Consumer Products",
    "Industry_Database",
    "Industry_Department/Discount",
    "Industry_ERP",
    "Industry_Education/Training",
    "Industry_Electric Utilities",
    "Industry_Electronics",
    "Industry_Energy",
    "Industry_Entertainment/Media",
    "Industry_Fabricated Products",
    "Industry_Finance",
    "Industry_Finance Software",
    "Industry_Financial Services",
    "Industry_Food Processing",
    "Industry_Furniture/Fixtures",
    "Industry_Gold/Silver",
    "Industry_Government",
    "Industry_Grocery",
    "Industry_Health/Accident",
    "Industry_Healthcare Facilities/Services",
    "Industry_Home Improvement",
    "Industry_Hospitals/Clinics",
    "Industry_Hotels/Motels",
    "Industry_Human Resources",
    "Industry_ISPs",
    "Industry_Industrial Equip",
    "Industry_Information Services",
    "Industry_Insurance",
    "Industry_Internet",
    "Industry_Internet Consulting",
    "Industry_Internet Software",
    "Industry_Investment Bank/Brokerage",
    "Industry_Iron/Steel",
    "Industry_Legal",
    "Industry_Leisure/Hospitality",
    "Industry_Lending/Mortgage",
    "Industry_Life",
    "Industry_MSPs (Mgmt)",
    "Industry_Machine Tools",
    "Industry_Marketing/Advertising",
    "Industry_Materials/Manufacturing",
    "Industry_Medical Equipment",
    "Industry_Metals/Mining",
    "Industry_Movies",
    "Industry_Multimedia Software",
    "Industry_Music",
    "Industry_Natural Gas",
    "Industry_Network Infrastructure",
    "Industry_Networking/Comm.",
    "Industry_Newspapers",
    "Industry_Non-Profit",
    "Industry_OSPs (Optical)",
    "Industry_Office Equipment",
    "Industry_Office Supplies",
    "Industry_Oil, Gas, Coal",
    "Industry_Online Banking",
    "Industry_Other",
    "Industry_Other Biz Services",
    "Industry_Other Consulting",
    "Industry_Other Investment Firms",
    "Industry_Other Vehicles",
    "Industry_Outsourcing",
    "Industry_Packaging/Containers",
    "Industry_Periodicals",
    "Industry_Peripherals/Comp.",
    "Industry_Personal Services",
    "Industry_Personal/Household Products",
    "Industry_Photography",
    "Industry_Plastic/Rubber",
    "Industry_Plumbing/HVAC",
    "Industry_Printing Services",
    "Industry_Professional Services",
    "Industry_Property/Casualty",
    "Industry_Publishing",
    "Industry_REIT",
    "Industry_Railroads",
    "Industry_Real Estate",
    "Industry_Recreational Products",
    "Industry_Recreational Services",
    "Industry_Religious Groups",
    "Industry_Rentals/Leasing",
    "Industry_Restaurants",
    "Industry_Retail",
    "Industry_SaaS",
    "Industry_Sales/Marketing Services",
    "Industry_Sales/Marketing Software",
    "Industry_Schools",
    "Industry_Scientific",
    "Industry_Security Hardware",
    "Industry_Security Services",
    "Industry_Security Software",
    "Industry_Semiconductors",
    "Industry_Servers/Storage",
    "Industry_Service Providers",
    "Industry_Services",
    "Industry_Shipping",
    "Industry_Social Services",
    "Industry_Software",
    "Industry_Software Consulting",
    "Industry_Specialty",
    "Industry_Speech Recognition",
    "Industry_Staffing",
    "Industry_Staffing/Outsourcing/HR",
    "Industry_Supply Chain",
    "Industry_Technology Consulting",
    "Industry_Technology Retail",
    "Industry_Telecom Consulting",
    "Industry_Telecom Hardware",
    "Industry_Telecom Services/Telephone Companies",
    "Industry_Telecom Software",
    "Industry_Television/Cable",
    "Industry_Testing",
    "Industry_Training",
    "Industry_Trucking",
    "Industry_Trucks/Buses/RVs",
    "Industry_Utilities",
    "Industry_Venture Capital",
    "Industry_Vitamins/Nutritionals/Other",
    "Industry_WSPs (Wireless)",
    "Industry_Warehousing/Logistics",
    "Industry_Waste/Recycling",
    "Industry_Water Utilities",
    "Industry_Wireless Consulting",
    "Industry_Wireless Hardware",
    "Industry_Wood/Paper",
    "Industry_Wood/Timber",
    "Industry_eBusiness",
    "Industry_eCommerce",
    "Pitch_Product_2",
    "Lead_revenue_50 - 100 Million",
    "Lead_revenue_500 Million - 1 Billion",
    "Fund_category_Category 2",
    "Fund_category_Category 3",
    "Fund_category_Category 4",
    "Designation_CEO/Chairman/President",
    "Designation_CEO/Co-Founder/Chairman",
    "Designation_CEO/President",
    "Designation_Chairman/CEO/President",
    "Designation_Chairman/Chief Innovation Officer",
    "Designation_Chief Executive Officer",
    "Designation_Executive Vice President",
    "Designation_SVP/General Counsel ",
    "Designation_Vice President / GM (04-present) : VP Sales and Marketing (01-04)",
    "Hiring_candidate_role_Accommodation manager",
    "Hiring_candidate_role_Accountant, chartered",
    "Hiring_candidate_role_Accountant, chartered certified",
    "Hiring_candidate_role_Accountant, chartered management",
    "Hiring_candidate_role_Accountant, chartered public finance",
    "Hiring_candidate_role_Accounting technician",
    "Hiring_candidate_role_Actor",
    "Hiring_candidate_role_Actuary",
    "Hiring_candidate_role_Acupuncturist",
    "Hiring_candidate_role_Administrator",
    "Hiring_candidate_role_Administrator, Civil Service",
    "Hiring_candidate_role_Administrator, arts",
    "Hiring_candidate_role_Administrator, charities/voluntary organisations",
    "Hiring_candidate_role_Administrator, education",
    "Hiring_candidate_role_Administrator, local government",
    "Hiring_candidate_role_Administrator, sports",
    "Hiring_candidate_role_Adult guidance worker",
    "Hiring_candidate_role_Adult nurse",
    "Hiring_candidate_role_Advertising account executive",
    "Hiring_candidate_role_Advertising account planner",
    "Hiring_candidate_role_Advertising art director",
    "Hiring_candidate_role_Advertising copywriter",
    "Hiring_candidate_role_Advice worker",
    "Hiring_candidate_role_Aeronautical engineer",
    "Hiring_candidate_role_Agricultural consultant",
    "Hiring_candidate_role_Agricultural engineer",
    "Hiring_candidate_role_Aid worker",
    "Hiring_candidate_role_Air broker",
    "Hiring_candidate_role_Air cabin crew",
    "Hiring_candidate_role_Air traffic controller",
    "Hiring_candidate_role_Airline pilot",
    "Hiring_candidate_role_Ambulance person",
    "Hiring_candidate_role_Amenity horticulturist",
    "Hiring_candidate_role_Analytical chemist",
    "Hiring_candidate_role_Animal nutritionist",
    "Hiring_candidate_role_Animal technologist",
    "Hiring_candidate_role_Animator",
    "Hiring_candidate_role_Applications developer",
    "Hiring_candidate_role_Arboriculturist",
    "Hiring_candidate_role_Archaeologist",
    "Hiring_candidate_role_Architect",
    "Hiring_candidate_role_Architectural technologist",
    "Hiring_candidate_role_Archivist",
    "Hiring_candidate_role_Armed forces logistics/support/administrative officer",
    "Hiring_candidate_role_Armed forces operational officer",
    "Hiring_candidate_role_Armed forces technical officer",
    "Hiring_candidate_role_Armed forces training and education officer",
    "Hiring_candidate_role_Art gallery manager",
    "Hiring_candidate_role_Art therapist",
    "Hiring_candidate_role_Artist",
    "Hiring_candidate_role_Arts administrator",
    "Hiring_candidate_role_Arts development officer",
    "Hiring_candidate_role_Associate Professor",
    "Hiring_candidate_role_Astronomer",
    "Hiring_candidate_role_Audiological scientist",
    "Hiring_candidate_role_Automotive engineer",
    "Hiring_candidate_role_Banker",
    "Hiring_candidate_role_Barista",
    "Hiring_candidate_role_Barrister",
    "Hiring_candidate_role_Barrister's clerk",
    "Hiring_candidate_role_Best boy",
    "Hiring_candidate_role_Biochemist, clinical",
    "Hiring_candidate_role_Biomedical engineer",
    "Hiring_candidate_role_Biomedical scientist",
    "Hiring_candidate_role_Bonds trader",
    "Hiring_candidate_role_Bookseller",
    "Hiring_candidate_role_Brewing technologist",
    "Hiring_candidate_role_Broadcast engineer",
    "Hiring_candidate_role_Broadcast journalist",
    "Hiring_candidate_role_Broadcast presenter",
    "Hiring_candidate_role_Building control surveyor",
    "Hiring_candidate_role_Building services engineer",
    "Hiring_candidate_role_Building surveyor",
    "Hiring_candidate_role_Buyer, industrial",
    "Hiring_candidate_role_Buyer, retail",
    "Hiring_candidate_role_Cabin crew",
    "Hiring_candidate_role_Call centre manager",
    "Hiring_candidate_role_Camera operator",
    "Hiring_candidate_role_Careers adviser",
    "Hiring_candidate_role_Careers information officer",
    "Hiring_candidate_role_Cartographer",
    "Hiring_candidate_role_Catering manager",
    "Hiring_candidate_role_Ceramics designer",
    "Hiring_candidate_role_Charity fundraiser",
    "Hiring_candidate_role_Charity officer",
    "Hiring_candidate_role_Chartered accountant",
    "Hiring_candidate_role_Chartered certified accountant",
    "Hiring_candidate_role_Chartered legal executive (England and Wales)",
    "Hiring_candidate_role_Chartered loss adjuster",
    "Hiring_candidate_role_Chartered management accountant",
    "Hiring_candidate_role_Chartered public finance accountant",
    "Hiring_candidate_role_Chemical engineer",
    "Hiring_candidate_role_Chemist, analytical",
    "Hiring_candidate_role_Chief Executive Officer",
    "Hiring_candidate_role_Chief Financial Officer",
    "Hiring_candidate_role_Chief Marketing Officer",
    "Hiring_candidate_role_Chief Operating Officer",
    "Hiring_candidate_role_Chief Strategy Officer",
    "Hiring_candidate_role_Chief Technology Officer",
    "Hiring_candidate_role_Chief of Staff",
    "Hiring_candidate_role_Child psychotherapist",
    "Hiring_candidate_role_Chiropodist",
    "Hiring_candidate_role_Chiropractor",
    "Hiring_candidate_role_Civil Service administrator",
    "Hiring_candidate_role_Civil Service fast streamer",
    "Hiring_candidate_role_Civil engineer, consulting",
    "Hiring_candidate_role_Civil engineer, contracting",
    "Hiring_candidate_role_Claims inspector/assessor",
    "Hiring_candidate_role_Clinical biochemist",
    "Hiring_candidate_role_Clinical cytogeneticist",
    "Hiring_candidate_role_Clinical embryologist",
    "Hiring_candidate_role_Clinical molecular geneticist",
    "Hiring_candidate_role_Clinical psychologist",
    "Hiring_candidate_role_Clinical research associate",
    "Hiring_candidate_role_Clinical scientist, histocompatibility and immunogenetics",
    "Hiring_candidate_role_Clothing/textile technologist",
    "Hiring_candidate_role_Colour technologist",
    "Hiring_candidate_role_Commercial art gallery manager",
    "Hiring_candidate_role_Commercial horticulturist",
    "Hiring_candidate_role_Commercial/residential surveyor",
    "Hiring_candidate_role_Commissioning editor",
    "Hiring_candidate_role_Communications engineer",
    "Hiring_candidate_role_Community arts worker",
    "Hiring_candidate_role_Community development worker",
    "Hiring_candidate_role_Community education officer",
    "Hiring_candidate_role_Community pharmacist",
    "Hiring_candidate_role_Company secretary",
    "Hiring_candidate_role_Comptroller",
    "Hiring_candidate_role_Computer games developer",
    "Hiring_candidate_role_Conference centre manager",
    "Hiring_candidate_role_Conservation officer, historic buildings",
    "Hiring_candidate_role_Conservation officer, nature",
    "Hiring_candidate_role_Conservator, furniture",
    "Hiring_candidate_role_Conservator, museum/gallery",
    "Hiring_candidate_role_Consulting civil engineer",
    "Hiring_candidate_role_Contracting civil engineer",
    "Hiring_candidate_role_Contractor",
    "Hiring_candidate_role_Control and instrumentation engineer",
    "Hiring_candidate_role_Copy",
    "Hiring_candidate_role_Copywriter, advertising",
    "Hiring_candidate_role_Corporate investment banker",
    "Hiring_candidate_role_Corporate treasurer",
    "Hiring_candidate_role_Counselling psychologist",
    "Hiring_candidate_role_Counsellor",
    "Hiring_candidate_role_Curator",
    "Hiring_candidate_role_Customer service manager",
    "Hiring_candidate_role_Cytogeneticist",
    "Hiring_candidate_role_Dance movement psychotherapist",
    "Hiring_candidate_role_Dancer",
    "Hiring_candidate_role_Data processing manager",
    "Hiring_candidate_role_Data scientist",
    "Hiring_candidate_role_Database administrator",
    "Hiring_candidate_role_Dealer",
    "Hiring_candidate_role_Dentist",
    "Hiring_candidate_role_Designer, blown glass/stained glass",
    "Hiring_candidate_role_Designer, ceramics/pottery",
    "Hiring_candidate_role_Designer, exhibition/display",
    "Hiring_candidate_role_Designer, fashion/clothing",
    "Hiring_candidate_role_Designer, furniture",
    "Hiring_candidate_role_Designer, graphic",
    "Hiring_candidate_role_Designer, industrial/product",
    "Hiring_candidate_role_Designer, interior/spatial",
    "Hiring_candidate_role_Designer, jewellery",
    "Hiring_candidate_role_Designer, multimedia",
    "Hiring_candidate_role_Designer, television/film set",
    "Hiring_candidate_role_Designer, textile",
    "Hiring_candidate_role_Development worker, community",
    "Hiring_candidate_role_Development worker, international aid",
    "Hiring_candidate_role_Diagnostic radiographer",
    "Hiring_candidate_role_Dietitian",
    "Hiring_candidate_role_Diplomatic Services operational officer",
    "Hiring_candidate_role_Dispensing optician",
    "Hiring_candidate_role_Doctor, general practice",
    "Hiring_candidate_role_Doctor, hospital",
    "Hiring_candidate_role_Dramatherapist",
    "Hiring_candidate_role_Drilling engineer",
    "Hiring_candidate_role_Early years teacher",
    "Hiring_candidate_role_Ecologist",
    "Hiring_candidate_role_Economist",
    "Hiring_candidate_role_Editor, commissioning",
    "Hiring_candidate_role_Editor, film/video",
    "Hiring_candidate_role_Editor, magazine features",
    "Hiring_candidate_role_Editorial assistant",
    "Hiring_candidate_role_Education administrator",
    "Hiring_candidate_role_Education officer, community",
    "Hiring_candidate_role_Education officer, environmental",
    "Hiring_candidate_role_Education officer, museum",
    "Hiring_candidate_role_Educational psychologist",
    "Hiring_candidate_role_Electrical engineer",
    "Hiring_candidate_role_Electronics engineer",
    "Hiring_candidate_role_Embryologist, clinical",
    "Hiring_candidate_role_Emergency planning/management officer",
    "Hiring_candidate_role_Energy engineer",
    "Hiring_candidate_role_Energy manager",
    "Hiring_candidate_role_Engineer, aeronautical",
    "Hiring_candidate_role_Engineer, agricultural",
    "Hiring_candidate_role_Engineer, automotive",
    "Hiring_candidate_role_Engineer, biomedical",
    "Hiring_candidate_role_Engineer, broadcasting (operations)",
    "Hiring_candidate_role_Engineer, building services",
    "Hiring_candidate_role_Engineer, chemical",
    "Hiring_candidate_role_Engineer, civil (consulting)",
    "Hiring_candidate_role_Engineer, civil (contracting)",
    "Hiring_candidate_role_Engineer, communications",
    "Hiring_candidate_role_Engineer, control and instrumentation",
    "Hiring_candidate_role_Engineer, drilling",
    "Hiring_candidate_role_Engineer, electrical",
    "Hiring_candidate_role_Engineer, electronics",
    "Hiring_candidate_role_Engineer, energy",
    "Hiring_candidate_role_Engineer, land",
    "Hiring_candidate_role_Engineer, maintenance",
    "Hiring_candidate_role_Engineer, maintenance (IT)",
    "Hiring_candidate_role_Engineer, manufacturing",
    "Hiring_candidate_role_Engineer, manufacturing systems",
    "Hiring_candidate_role_Engineer, materials",
    "Hiring_candidate_role_Engineer, mining",
    "Hiring_candidate_role_Engineer, petroleum",
    "Hiring_candidate_role_Engineer, production",
    "Hiring_candidate_role_Engineer, site",
    "Hiring_candidate_role_Engineer, structural",
    "Hiring_candidate_role_Engineer, technical sales",
    "Hiring_candidate_role_Engineer, water",
    "Hiring_candidate_role_Engineering geologist",
    "Hiring_candidate_role_English as a foreign language teacher",
    "Hiring_candidate_role_English as a second language teacher",
    "Hiring_candidate_role_Environmental consultant",
    "Hiring_candidate_role_Environmental education officer",
    "Hiring_candidate_role_Environmental health practitioner",
    "Hiring_candidate_role_Equality and diversity officer",
    "Hiring_candidate_role_Equities trader",
    "Hiring_candidate_role_Ergonomist",
    "Hiring_candidate_role_Estate agent",
    "Hiring_candidate_role_Estate manager/land agent",
    "Hiring_candidate_role_Event organiser",
    "Hiring_candidate_role_Exercise physiologist",
    "Hiring_candidate_role_Exhibition designer",
    "Hiring_candidate_role_Exhibitions officer, museum/gallery",
    "Hiring_candidate_role_Facilities manager",
    "Hiring_candidate_role_Farm manager",
    "Hiring_candidate_role_Fashion designer",
    "Hiring_candidate_role_Fast food restaurant manager",
    "Hiring_candidate_role_Field seismologist",
    "Hiring_candidate_role_Field trials officer",
    "Hiring_candidate_role_Film/video editor",
    "Hiring_candidate_role_Financial adviser",
    "Hiring_candidate_role_Financial controller",
    "Hiring_candidate_role_Financial manager",
    "Hiring_candidate_role_Financial planner",
    "Hiring_candidate_role_Financial risk analyst",
    "Hiring_candidate_role_Financial trader",
    "Hiring_candidate_role_Fine artist",
    "Hiring_candidate_role_Firefighter",
    "Hiring_candidate_role_Fish farm manager",
    "Hiring_candidate_role_Fisheries officer",
    "Hiring_candidate_role_Fitness centre manager",
    "Hiring_candidate_role_Food technologist",
    "Hiring_candidate_role_Forensic psychologist",
    "Hiring_candidate_role_Forensic scientist",
    "Hiring_candidate_role_Forest/woodland manager",
    "Hiring_candidate_role_Freight forwarder",
    "Hiring_candidate_role_Furniture conservator/restorer",
    "Hiring_candidate_role_Furniture designer",
    "Hiring_candidate_role_Further education lecturer",
    "Hiring_candidate_role_Futures trader",
    "Hiring_candidate_role_Gaffer",
    "Hiring_candidate_role_Games developer",
    "Hiring_candidate_role_Garment/textile technologist",
    "Hiring_candidate_role_General practice doctor",
    "Hiring_candidate_role_Geneticist, molecular",
    "Hiring_candidate_role_Geochemist",
    "Hiring_candidate_role_Geographical information systems officer",
    "Hiring_candidate_role_Geologist, engineering",
    "Hiring_candidate_role_Geologist, wellsite",
    "Hiring_candidate_role_Geophysical data processor",
    "Hiring_candidate_role_Geophysicist/field seismologist",
    "Hiring_candidate_role_Geoscientist",
    "Hiring_candidate_role_Glass blower/designer",
    "Hiring_candidate_role_Government social research officer",
    "Hiring_candidate_role_Graphic designer",
    "Hiring_candidate_role_Haematologist",
    "Hiring_candidate_role_Health and safety adviser",
    "Hiring_candidate_role_Health and safety inspector",
    "Hiring_candidate_role_Health physicist",
    "Hiring_candidate_role_Health promotion specialist",
    "Hiring_candidate_role_Health service manager",
    "Hiring_candidate_role_Health visitor",
    "Hiring_candidate_role_Herbalist",
    "Hiring_candidate_role_Heritage manager",
    "Hiring_candidate_role_Herpetologist",
    "Hiring_candidate_role_Higher education careers adviser",
    "Hiring_candidate_role_Higher education lecturer",
    "Hiring_candidate_role_Historic buildings inspector/conservation officer",
    "Hiring_candidate_role_Holiday representative",
    "Hiring_candidate_role_Homeopath",
    "Hiring_candidate_role_Horticultural consultant",
    "Hiring_candidate_role_Horticultural therapist",
    "Hiring_candidate_role_Horticulturist, amenity",
    "Hiring_candidate_role_Horticulturist, commercial",
    "Hiring_candidate_role_Hospital doctor",
    "Hiring_candidate_role_Hospital pharmacist",
    "Hiring_candidate_role_Hotel manager",
    "Hiring_candidate_role_Housing manager/officer",
    "Hiring_candidate_role_Human resources officer",
    "Hiring_candidate_role_Hydrogeologist",
    "Hiring_candidate_role_Hydrographic surveyor",
    "Hiring_candidate_role_Hydrologist",
    "Hiring_candidate_role_IT consultant",
    "Hiring_candidate_role_IT sales professional",
    "Hiring_candidate_role_IT technical support officer",
    "Hiring_candidate_role_IT trainer",
    "Hiring_candidate_role_Illustrator",
    "Hiring_candidate_role_Immigration officer",
    "Hiring_candidate_role_Immunologist",
    "Hiring_candidate_role_Industrial buyer",
    "Hiring_candidate_role_Industrial/product designer",
    "Hiring_candidate_role_Information officer",
    "Hiring_candidate_role_Information systems manager",
    "Hiring_candidate_role_Insurance account manager",
    "Hiring_candidate_role_Insurance broker",
    "Hiring_candidate_role_Insurance claims handler",
    "Hiring_candidate_role_Insurance risk surveyor",
    "Hiring_candidate_role_Insurance underwriter",
    "Hiring_candidate_role_Intelligence analyst",
    "Hiring_candidate_role_Interior and spatial designer",
    "Hiring_candidate_role_International aid/development worker",
    "Hiring_candidate_role_Interpreter",
    "Hiring_candidate_role_Investment analyst",
    "Hiring_candidate_role_Investment banker, corporate",
    "Hiring_candidate_role_Investment banker, operational",
    "Hiring_candidate_role_Jewellery designer",
    "Hiring_candidate_role_Journalist, broadcasting",
    "Hiring_candidate_role_Journalist, magazine",
    "Hiring_candidate_role_Journalist, newspaper",
    "Hiring_candidate_role_Land",
    "Hiring_candidate_role_Land/geomatics surveyor",
    "Hiring_candidate_role_Landscape architect",
    "Hiring_candidate_role_Lawyer",
    "Hiring_candidate_role_Learning disability nurse",
    "Hiring_candidate_role_Learning mentor",
    "Hiring_candidate_role_Lecturer, further education",
    "Hiring_candidate_role_Lecturer, higher education",
    "Hiring_candidate_role_Legal executive",
    "Hiring_candidate_role_Legal secretary",
    "Hiring_candidate_role_Leisure centre manager",
    "Hiring_candidate_role_Lexicographer",
    "Hiring_candidate_role_Librarian, academic",
    "Hiring_candidate_role_Librarian, public",
    "Hiring_candidate_role_Licensed conveyancer",
    "Hiring_candidate_role_Lighting technician, broadcasting/film/video",
    "Hiring_candidate_role_Lobbyist",
    "Hiring_candidate_role_Local government officer",
    "Hiring_candidate_role_Location manager",
    "Hiring_candidate_role_Logistics and distribution manager",
    "Hiring_candidate_role_Loss adjuster, chartered",
    "Hiring_candidate_role_Magazine features editor",
    "Hiring_candidate_role_Magazine journalist",
    "Hiring_candidate_role_Maintenance engineer",
    "Hiring_candidate_role_Make",
    "Hiring_candidate_role_Management consultant",
    "Hiring_candidate_role_Manufacturing engineer",
    "Hiring_candidate_role_Manufacturing systems engineer",
    "Hiring_candidate_role_Marine scientist",
    "Hiring_candidate_role_Market researcher",
    "Hiring_candidate_role_Marketing executive",
    "Hiring_candidate_role_Materials engineer",
    "Hiring_candidate_role_Mechanical engineer",
    "Hiring_candidate_role_Media buyer",
    "Hiring_candidate_role_Media planner",
    "Hiring_candidate_role_Medical illustrator",
    "Hiring_candidate_role_Medical laboratory scientific officer",
    "Hiring_candidate_role_Medical physicist",
    "Hiring_candidate_role_Medical sales representative",
    "Hiring_candidate_role_Medical secretary",
    "Hiring_candidate_role_Medical technical officer",
    "Hiring_candidate_role_Mental health nurse",
    "Hiring_candidate_role_Merchandiser, retail",
    "Hiring_candidate_role_Merchant navy officer",
    "Hiring_candidate_role_Metallurgist",
    "Hiring_candidate_role_Meteorologist",
    "Hiring_candidate_role_Microbiologist",
    "Hiring_candidate_role_Midwife",
    "Hiring_candidate_role_Minerals surveyor",
    "Hiring_candidate_role_Mining engineer",
    "Hiring_candidate_role_Mudlogger",
    "Hiring_candidate_role_Multimedia programmer",
    "Hiring_candidate_role_Multimedia specialist",
    "Hiring_candidate_role_Museum education officer",
    "Hiring_candidate_role_Museum/gallery conservator",
    "Hiring_candidate_role_Museum/gallery curator",
    "Hiring_candidate_role_Museum/gallery exhibitions officer",
    "Hiring_candidate_role_Music therapist",
    "Hiring_candidate_role_Music tutor",
    "Hiring_candidate_role_Musician",
    "Hiring_candidate_role_Nature conservation officer",
    "Hiring_candidate_role_Naval architect",
    "Hiring_candidate_role_Network engineer",
    "Hiring_candidate_role_Neurosurgeon",
    "Hiring_candidate_role_Newspaper journalist",
    "Hiring_candidate_role_Nurse, adult",
    "Hiring_candidate_role_Nurse, children's",
    "Hiring_candidate_role_Nurse, learning disability",
    "Hiring_candidate_role_Nurse, mental health",
    "Hiring_candidate_role_Nutritional therapist",
    "Hiring_candidate_role_Occupational hygienist",
    "Hiring_candidate_role_Occupational psychologist",
    "Hiring_candidate_role_Occupational therapist",
    "Hiring_candidate_role_Oceanographer",
    "Hiring_candidate_role_Office manager",
    "Hiring_candidate_role_Oncologist",
    "Hiring_candidate_role_Operational investment banker",
    "Hiring_candidate_role_Operational researcher",
    "Hiring_candidate_role_Operations geologist",
    "Hiring_candidate_role_Ophthalmologist",
    "Hiring_candidate_role_Optician, dispensing",
    "Hiring_candidate_role_Optometrist",
    "Hiring_candidate_role_Orthoptist",
    "Hiring_candidate_role_Osteopath",
    "Hiring_candidate_role_Outdoor activities/education manager",
    "Hiring_candidate_role_Paediatric nurse",
    "Hiring_candidate_role_Paramedic",
    "Hiring_candidate_role_Passenger transport manager",
    "Hiring_candidate_role_Patent attorney",
    "Hiring_candidate_role_Patent examiner",
    "Hiring_candidate_role_Pathologist",
    "Hiring_candidate_role_Pension scheme manager",
    "Hiring_candidate_role_Pensions consultant",
    "Hiring_candidate_role_Personal assistant",
    "Hiring_candidate_role_Personnel officer",
    "Hiring_candidate_role_Petroleum engineer",
    "Hiring_candidate_role_Pharmacist, community",
    "Hiring_candidate_role_Pharmacist, hospital",
    "Hiring_candidate_role_Pharmacologist",
    "Hiring_candidate_role_Photographer",
    "Hiring_candidate_role_Physicist, medical",
    "Hiring_candidate_role_Physiological scientist",
    "Hiring_candidate_role_Physiotherapist",
    "Hiring_candidate_role_Phytotherapist",
    "Hiring_candidate_role_Pilot, airline",
    "Hiring_candidate_role_Planning and development surveyor",
    "Hiring_candidate_role_Plant breeder/geneticist",
    "Hiring_candidate_role_Podiatrist",
    "Hiring_candidate_role_Police officer",
    "Hiring_candidate_role_Politician's assistant",
    "Hiring_candidate_role_Presenter, broadcasting",
    "Hiring_candidate_role_Press photographer",
    "Hiring_candidate_role_Press sub",
    "Hiring_candidate_role_Primary school teacher",
    "Hiring_candidate_role_Print production planner",
    "Hiring_candidate_role_Printmaker",
    "Hiring_candidate_role_Prison officer",
    "Hiring_candidate_role_Private music teacher",
    "Hiring_candidate_role_Probation officer",
    "Hiring_candidate_role_Producer, radio",
    "Hiring_candidate_role_Producer, television/film/video",
    "Hiring_candidate_role_Product designer",
    "Hiring_candidate_role_Product manager",
    "Hiring_candidate_role_Product/process development scientist",
    "Hiring_candidate_role_Production assistant, radio",
    "Hiring_candidate_role_Production assistant, television",
    "Hiring_candidate_role_Production designer, theatre/television/film",
    "Hiring_candidate_role_Production engineer",
    "Hiring_candidate_role_Production manager",
    "Hiring_candidate_role_Professor Emeritus",
    "Hiring_candidate_role_Programme researcher, broadcasting/film/video",
    "Hiring_candidate_role_Programmer, applications",
    "Hiring_candidate_role_Programmer, multimedia",
    "Hiring_candidate_role_Programmer, systems",
    "Hiring_candidate_role_Proofreader",
    "Hiring_candidate_role_Psychiatric nurse",
    "Hiring_candidate_role_Psychiatrist",
    "Hiring_candidate_role_Psychologist, clinical",
    "Hiring_candidate_role_Psychologist, counselling",
    "Hiring_candidate_role_Psychologist, educational",
    "Hiring_candidate_role_Psychologist, forensic",
    "Hiring_candidate_role_Psychologist, occupational",
    "Hiring_candidate_role_Psychologist, prison and probation services",
    "Hiring_candidate_role_Psychologist, sport and exercise",
    "Hiring_candidate_role_Psychotherapist",
    "Hiring_candidate_role_Psychotherapist, child",
    "Hiring_candidate_role_Psychotherapist, dance movement",
    "Hiring_candidate_role_Public affairs consultant",
    "Hiring_candidate_role_Public house manager",
    "Hiring_candidate_role_Public librarian",
    "Hiring_candidate_role_Public relations account executive",
    "Hiring_candidate_role_Public relations officer",
    "Hiring_candidate_role_Publishing copy",
    "Hiring_candidate_role_Publishing rights manager",
    "Hiring_candidate_role_Purchasing manager",
    "Hiring_candidate_role_Quality manager",
    "Hiring_candidate_role_Quantity surveyor",
    "Hiring_candidate_role_Quarry manager",
    "Hiring_candidate_role_Race relations officer",
    "Hiring_candidate_role_Radiation protection practitioner",
    "Hiring_candidate_role_Radio broadcast assistant",
    "Hiring_candidate_role_Radio producer",
    "Hiring_candidate_role_Radiographer, diagnostic",
    "Hiring_candidate_role_Radiographer, therapeutic",
    "Hiring_candidate_role_Ranger/warden",
    "Hiring_candidate_role_Records manager",
    "Hiring_candidate_role_Recruitment consultant",
    "Hiring_candidate_role_Recycling officer",
    "Hiring_candidate_role_Regulatory affairs officer",
    "Hiring_candidate_role_Research officer, government",
    "Hiring_candidate_role_Research officer, political party",
    "Hiring_candidate_role_Research officer, trade union",
    "Hiring_candidate_role_Research scientist (life sciences)",
    "Hiring_candidate_role_Research scientist (maths)",
    "Hiring_candidate_role_Research scientist (medical)",
    "Hiring_candidate_role_Research scientist (physical sciences)",
    "Hiring_candidate_role_Restaurant manager",
    "Hiring_candidate_role_Restaurant manager, fast food",
    "Hiring_candidate_role_Retail banker",
    "Hiring_candidate_role_Retail buyer",
    "Hiring_candidate_role_Retail manager",
    "Hiring_candidate_role_Retail merchandiser",
    "Hiring_candidate_role_Risk analyst",
    "Hiring_candidate_role_Risk manager",
    "Hiring_candidate_role_Runner, broadcasting/film/video",
    "Hiring_candidate_role_Rural practice surveyor",
    "Hiring_candidate_role_Sales executive",
    "Hiring_candidate_role_Sales professional, IT",
    "Hiring_candidate_role_Sales promotion account executive",
    "Hiring_candidate_role_Science writer",
    "Hiring_candidate_role_Scientific laboratory technician",
    "Hiring_candidate_role_Scientist, audiological",
    "Hiring_candidate_role_Scientist, biomedical",
    "Hiring_candidate_role_Scientist, clinical (histocompatibility and immunogenetics)",
    "Hiring_candidate_role_Scientist, forensic",
    "Hiring_candidate_role_Scientist, marine",
    "Hiring_candidate_role_Scientist, physiological",
    "Hiring_candidate_role_Scientist, product/process development",
    "Hiring_candidate_role_Scientist, research (life sciences)",
    "Hiring_candidate_role_Scientist, research (maths)",
    "Hiring_candidate_role_Scientist, research (medical)",
    "Hiring_candidate_role_Scientist, research (physical sciences)",
    "Hiring_candidate_role_Scientist, water quality",
    "Hiring_candidate_role_Secondary school teacher",
    "Hiring_candidate_role_Secretary, company",
    "Hiring_candidate_role_Secretary/administrator",
    "Hiring_candidate_role_Seismic interpreter",
    "Hiring_candidate_role_Senior tax professional/tax inspector",
    "Hiring_candidate_role_Set designer",
    "Hiring_candidate_role_Ship broker",
    "Hiring_candidate_role_Site engineer",
    "Hiring_candidate_role_Social research officer, government",
    "Hiring_candidate_role_Social researcher",
    "Hiring_candidate_role_Social worker",
    "Hiring_candidate_role_Software engineer",
    "Hiring_candidate_role_Soil scientist",
    "Hiring_candidate_role_Solicitor",
    "Hiring_candidate_role_Solicitor, Scotland",
    "Hiring_candidate_role_Sound technician, broadcasting/film/video",
    "Hiring_candidate_role_Special educational needs teacher",
    "Hiring_candidate_role_Special effects artist",
    "Hiring_candidate_role_Speech and language therapist",
    "Hiring_candidate_role_Sport and exercise psychologist",
    "Hiring_candidate_role_Sports administrator",
    "Hiring_candidate_role_Sports coach",
    "Hiring_candidate_role_Sports development officer",
    "Hiring_candidate_role_Sports therapist",
    "Hiring_candidate_role_Stage manager",
    "Hiring_candidate_role_Statistician",
    "Hiring_candidate_role_Structural engineer",
    "Hiring_candidate_role_Sub",
    "Hiring_candidate_role_Surgeon",
    "Hiring_candidate_role_Surveyor, building",
    "Hiring_candidate_role_Surveyor, building control",
    "Hiring_candidate_role_Surveyor, commercial/residential",
    "Hiring_candidate_role_Surveyor, hydrographic",
    "Hiring_candidate_role_Surveyor, insurance",
    "Hiring_candidate_role_Surveyor, land/geomatics",
    "Hiring_candidate_role_Surveyor, minerals",
    "Hiring_candidate_role_Surveyor, mining",
    "Hiring_candidate_role_Surveyor, planning and development",
    "Hiring_candidate_role_Surveyor, quantity",
    "Hiring_candidate_role_Surveyor, rural practice",
    "Hiring_candidate_role_Systems analyst",
    "Hiring_candidate_role_Systems developer",
    "Hiring_candidate_role_TEFL teacher",
    "Hiring_candidate_role_Tax adviser",
    "Hiring_candidate_role_Tax inspector",
    "Hiring_candidate_role_Teacher, English as a foreign language",
    "Hiring_candidate_role_Teacher, adult education",
    "Hiring_candidate_role_Teacher, early years/pre",
    "Hiring_candidate_role_Teacher, music",
    "Hiring_candidate_role_Teacher, primary school",
    "Hiring_candidate_role_Teacher, secondary school",
    "Hiring_candidate_role_Teacher, special educational needs",
    "Hiring_candidate_role_Teaching laboratory technician",
    "Hiring_candidate_role_Technical author",
    "Hiring_candidate_role_Technical brewer",
    "Hiring_candidate_role_Technical sales engineer",
    "Hiring_candidate_role_Telecommunications researcher",
    "Hiring_candidate_role_Television camera operator",
    "Hiring_candidate_role_Television floor manager",
    "Hiring_candidate_role_Television production assistant",
    "Hiring_candidate_role_Television/film/video producer",
    "Hiring_candidate_role_Textile designer",
    "Hiring_candidate_role_Theatre director",
    "Hiring_candidate_role_Theatre manager",
    "Hiring_candidate_role_Theatre stage manager",
    "Hiring_candidate_role_Theme park manager",
    "Hiring_candidate_role_Therapeutic radiographer",
    "Hiring_candidate_role_Therapist, art",
    "Hiring_candidate_role_Therapist, drama",
    "Hiring_candidate_role_Therapist, horticultural",
    "Hiring_candidate_role_Therapist, music",
    "Hiring_candidate_role_Therapist, nutritional",
    "Hiring_candidate_role_Therapist, occupational",
    "Hiring_candidate_role_Therapist, speech and language",
    "Hiring_candidate_role_Therapist, sports",
    "Hiring_candidate_role_Tour manager",
    "Hiring_candidate_role_Tourism officer",
    "Hiring_candidate_role_Tourist information centre manager",
    "Hiring_candidate_role_Town planner",
    "Hiring_candidate_role_Toxicologist",
    "Hiring_candidate_role_Trade mark attorney",
    "Hiring_candidate_role_Trade union research officer",
    "Hiring_candidate_role_Trading standards officer",
    "Hiring_candidate_role_Training and development officer",
    "Hiring_candidate_role_Translator",
    "Hiring_candidate_role_Transport planner",
    "Hiring_candidate_role_Travel agency manager",
    "Hiring_candidate_role_Tree surgeon",
    "Hiring_candidate_role_Veterinary surgeon",
    "Hiring_candidate_role_Video editor",
    "Hiring_candidate_role_Visual merchandiser",
    "Hiring_candidate_role_Volunteer coordinator",
    "Hiring_candidate_role_Warden/ranger",
    "Hiring_candidate_role_Warehouse manager",
    "Hiring_candidate_role_Waste management officer",
    "Hiring_candidate_role_Water engineer",
    "Hiring_candidate_role_Water quality scientist",
    "Hiring_candidate_role_Web designer",
    "Hiring_candidate_role_Wellsite geologist",
    "Hiring_candidate_role_Writer",
    "Hiring_candidate_role_Youth worker",
    "Lead_source_Marketing Event",
    "Lead_source_Others",
    "Lead_source_Website",
    "Level_of_meeting_Level 2",
    "Level_of_meeting_Level 3",
    "Internal_POC_Ali,Mohamed",
    "Internal_POC_Anthony,Katherine D",
    "Internal_POC_Bannister,Joan",
    "Internal_POC_Booker,David L",
    "Internal_POC_Brown,Maxine A",
    "Internal_POC_Carter Sr,Clifton E",
    "Internal_POC_Cash,Tyrone J",
    "Internal_POC_Cashin,Marc C",
    "Internal_POC_Charles,Caleb",
    "Internal_POC_Clavey,Therese A",
    "Internal_POC_Davis,Brian R",
    "Internal_POC_Davis,Sharrice A",
    "Internal_POC_Dimattia,Frank D",
    "Internal_POC_Dunaway,Antoine",
    "Internal_POC_Dyson,William A",
    "Internal_POC_Featherstone,Adrian R",
    "Internal_POC_Gaskins Jr,Franklin D",
    "Internal_POC_Georgakopoulos,Vasilios T",
    "Internal_POC_Gilley,Janine",
    "Internal_POC_Gould,Lisa D",
    "Internal_POC_Green,Ann E",
    "Internal_POC_Green,Candy",
    "Internal_POC_Hameier,Kurt E",
    "Internal_POC_Hanyok,John J",
    "Internal_POC_Hebron,Artenia D",
    "Internal_POC_Heidelberg,Andre D",
    "Internal_POC_Himes,Maurice C",
    "Internal_POC_Houston,Arnold E",
    "Internal_POC_Irizarry,Yolanda",
    "Internal_POC_Jones,Eyvette W",
    "Internal_POC_Jones,Michael L",
    "Internal_POC_Kiepea,Prince A",
    "Internal_POC_Knox,Antonio D",
    "Internal_POC_Leu,Darren L",
    "Internal_POC_Logan,Kevin N",
    "Internal_POC_Mabrey,Kevin C",
    "Internal_POC_Maine,John P",
    "Internal_POC_Massiah,Gerard F",
    "Internal_POC_McKenstry,Loretta A",
    "Internal_POC_Meli,Teresa V",
    "Internal_POC_Moran,Natalie A",
    "Internal_POC_Morsy,Omar A",
    "Internal_POC_Murray,Younetta",
    "Internal_POC_Pappas,Mark S",
    "Internal_POC_Robinson,John C",
    "Internal_POC_Rocks,Michael J",
    "Internal_POC_Ross,Eric L",
    "Internal_POC_Ryker,David",
    "Internal_POC_Salyers,Daniel L",
    "Internal_POC_Shelton,Sidney P",
    "Internal_POC_Smith,Keenan H",
    "Internal_POC_Sutton,Michelle R",
    "Internal_POC_Thomas,Lori E",
    "Internal_POC_Tondeur,Keith D",
    "Internal_POC_Turner,Marlon D",
    "Internal_POC_Ullrich,Rose Anne",
    "Internal_POC_Van Arter,Derrick",
    "Internal_POC_Vickers Jr.,Henry J",
    "Internal_POC_Young,Valerie K",
    "Resource_Deliverable",
    "Resource_No",
    "Resource_Not enough",
    "Resource_We have all the requirements",
    "Resource_Yes",
    "Last_lead_update_5 days back",
    "Last_lead_update_Did not hear back after Level 1",
    "Last_lead_update_Following up but lead not responding",
    "Last_lead_update_More than 2 weeks",
    "Last_lead_update_More than a week back",
    "Last_lead_update_No track",
    "Last_lead_update_Pending",
    "Last_lead_update_Up-to-date",
    "Last_lead_update_more than a month"
];