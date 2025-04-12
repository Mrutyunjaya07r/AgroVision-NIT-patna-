import React from 'react';

const schemes = [
  { name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)", link: "https://pmkisan.gov.in/", launchDate: "February 24, 2019", detail: "Provides financial support to farmers with direct income transfers." },
  { name: "Pradhan Mantri Kisan MaanDhan Yojana (PM-KMY)", link: "https://maandhan.in/", launchDate: "August 9, 2019", detail: "Pension scheme for small and marginal farmers." },
  { name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)", link: "https://pmfby.gov.in/", launchDate: "January 13, 2016", detail: "Crop insurance scheme to provide financial aid in case of crop loss." },
  { name: "Modified Interest Subvention Scheme (MISS)", link: "https://www.agricoop.nic.in/", launchDate: "2013", detail: "Provides interest subvention on short-term crop loans." },
  { name: "Agriculture Infrastructure Fund (AIF)", link: "https://agriinfra.dac.gov.in/", launchDate: "July 8, 2020", detail: "Financial support for post-harvest infrastructure and projects." },
  { name: "Formation & Promotion of new 10,000 FPOs", link: "https://fpo.nabard.org/", launchDate: "February 2020", detail: "Encourages formation of Farmer Producer Organizations (FPOs)." },
  { name: "National Beekeeping and Honey Mission (NBHM)", link: "https://nbhm.gov.in/", launchDate: "2020", detail: "Promotes beekeeping industry and honey production." },
  { name: "Market Intervention Scheme and Price Support Scheme (MIS-PSS)", link: "https://www.agricoop.nic.in/", launchDate: "Ongoing", detail: "Ensures fair prices for farmers by government intervention." },
  { name: "Namo Drone Didi", link: "https://www.agricoop.nic.in/", launchDate: "2024", detail: "Encourages drone technology for agricultural applications." },
  { name: "Rashtriya Krishi Vikas Yojana (RKVY)", link: "https://rkvy.nic.in/", launchDate: "August 2007", detail: "Enhances agricultural productivity through planned investments." },
  { name: "Soil Health Card (SHC)", link: "https://soilhealth.dac.gov.in/", launchDate: "February 19, 2015", detail: "Provides soil health status reports to farmers." },
  { name: "Rainfed Area Development (RAD)", link: "https://www.agricoop.nic.in/", launchDate: "2011", detail: "Supports sustainable agriculture in rainfed areas." },
  { name: "Per Drop More Crop (PDMC)", link: "https://pmksy.gov.in/microirrigation/", launchDate: "2015", detail: "Promotes efficient use of water in irrigation." },
  { name: "Micro Irrigation Fund (MIF)", link: "https://pmksy.gov.in/", launchDate: "2019", detail: "Financial assistance for micro-irrigation projects." },
  { name: "Paramparagat Krishi Vikas Yojana (PKVY)", link: "https://pkvy.nic.in/", launchDate: "2015", detail: "Promotes organic farming among farmers." }
];

function GovementScheme() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Government Schemes</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Scheme Name</th>
              <th className="border p-2">Launch Date</th>
              <th className="border p-2">Details</th>
              <th className="border p-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((scheme, index) => (
              <tr key={index} className="border">
                <td className="border p-2">{scheme.name}</td>
                <td className="border p-2">{scheme.launchDate}</td>
                <td className="border p-2">{scheme.detail}</td>
                <td className="border p-2">
                  <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Visit Website
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GovementScheme;
