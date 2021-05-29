import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const InsurancesBox = ({ title }) => {
  const {
    allInsurancesJson: { nodes: insurancesData },
  } = useStaticQuery(graphql`
    {
      allInsurancesJson {
        nodes {
          title
          data
        }
      }
    }
  `)

  return (
    <div>
      {insurancesData
        .filter(insurance => {
          return title ? insurance.title === title : true
        })
        .map(insurance => {
          return (
            <div class="mb-5">
              <h3 class="text-lg mb-3">{insurance.title}</h3>
              <p class="text-sm">{insurance.data}</p>
            </div>
          )
        })}
    </div>
  )
}

export default InsurancesBox
