import React from "react"

import Layout from "../components/layouts/Layout"

import { InnerBanner, Section } from "../components/elements"
import { SEO } from "../components/utilities"

import banner from "../images/banners/fair.png"

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You For Registering - Maumee Summer Fair | Celebrate Summer Fun With Us!" />
    <InnerBanner image={banner}>
      <h2>Thank You!</h2>
    </InnerBanner>
    <Section>
      <h2 style={{ "text-align": "center" }}>
        <img
          src="https://i0.wp.com/cdn.jotfor.ms/img/check-icon.png?resize=128%2C128&amp;ssl=1"
          alt=""
          width="128"
          height="128"
        />
        <br />
        Thank You!
      </h2>
      <div style={{ "text-align": "center" }}>
        <input name="cmd" type="hidden" value="_s-xclick" />
        <input name="hosted_button_id" type="hidden" value="J376595FG4RBL" />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "100%" }}>
                <span
                  style={{
                    "font-family": "arial, helvetica, sans-serif",
                    "font-size": "14pt",
                  }}
                >
                  <strong>Select Booth And Pay Now!</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ width: "100%" }}>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input name="cmd" type="hidden" value="_s-xclick" />
                  <br />
                  <input
                    name="hosted_button_id"
                    type="hidden"
                    value="J376595FG4RBL"
                  />
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td>
                          <input name="on0" type="hidden" value="Booth Types" />
                          Booth Types
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select name="os0">
                            <option value="Art / Craft">
                              Art / Craft $91.00 USD
                            </option>
                            <option value="Art / Craft Electric">
                              Art / Craft Electric $126.00 USD
                            </option>
                            <option value="Non-Profit">
                              Non-Profit $71.00 USD
                            </option>
                            <option value="Non-Profit Electric">
                              Non-Profit Electric $106.00 USD
                            </option>
                            <option value="Commercial Vendors">
                              Commercial Vendors $156.00 USD
                            </option>
                            <option value="Commercial Vendors Electric">
                              Commercial Vendors Electric $191.00 USD
                            </option>
                            <option value="Food / Drink Vendors">
                              Food / Drink Vendors $181.00 USD
                            </option>
                            <option value="Food / Drink Vendors Electric">
                              Food / Drink Vendors Electric $216.00 USD
                            </option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <input name="currency_code" type="hidden" value="USD" />
                  <br />
                  <input
                    alt="PayPal - The safer, easier way to pay online!"
                    name="submit"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
                    type="image"
                  />
                  <br />
                  <img
                    src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                    alt=""
                    width="1"
                    height="1"
                    border="0"
                  />
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  </Layout>
)

export default ThankYouPage
