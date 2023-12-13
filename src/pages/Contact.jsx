import React from "react";
import Layout from "../components/Layout";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Contact() {
  return (
    <Layout>
      <div className="contact">
        <h4>Contact my resturant </h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui maxime
          facere excepturi cumque iste culpa maiores, ipsum incidunt, quam
          explicabo sit aliquam delectus temporibus facilis. Enim repellat nobis
          nulla qui.
        </p>
        <table>
          <thead>
            <th>contact details</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <MdOutlineSupportAgent id="concti1" />
                1800-00-0000
              </td>
            </tr>
            <tr>
              <td>
                <MdEmail id="concti2" />
                help@myrest.com
              </td>
            </tr>
            <tr>
              <td>
                <IoCall id="concti3" />
                1234567890
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
