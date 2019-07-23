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

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <div style={{ "text-align": "center" }}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="J376595FG4RBL" />
          <table style={{ "text-align": "center", width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Booth Types" />
                  Booth Types
                </td>
              </tr>
              <tr>
                <td>
                  <select name="os0">
                    <option value="Art / Craft">Art / Craft $91.00 USD</option>
                    <option value="Art / Craft Electric">
                      Art / Craft Electric $126.00 USD
                    </option>
                    <option value="Non-Profit">Non-Profit $71.00 USD</option>
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
                    <option value="2 Art / Craft">
                      2 Art / Craft $176.00 USD
                    </option>
                    <option value="2 Commercial">
                      2 Commercial $306.00 USD
                    </option>
                  </select>{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <input type="hidden" name="currency_code" value="USD" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </div>
      </form>
    </Section>
  </Layout>
)

export default ThankYouPage
