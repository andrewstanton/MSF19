import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Table } from "../../utilities"

export const CraftVendorTable = () => (
  <StaticQuery
    query={graphql`
      query CraftQuery {
        allVendorsJson {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allVendorsJson
      let newArr = []
      edges.unshift(null)
      edges.forEach((vendor, ix) => {
        const newIx = (ix + (ix % 2)) / 2
        if (typeof newArr[newIx] !== "undefined") {
          newArr[newIx].push(vendor)
        } else {
          newArr[newIx] = [vendor]
        }
      })
      newArr.shift()
      return (
        <Table>
          {newArr.map(row => (
            <tr>
              {row.map(vendor => (
                <td colSpan={row.length < 2 ? 2 : 1}>
                  <span className="name">
                    {vendor !== null && vendor.node.name}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </Table>
      )
    }}
  />
)
