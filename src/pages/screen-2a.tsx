import React from "react";
import styled from "@emotion/styled";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { colors } from "../constants";
import { SessionStore } from "../library/session-store";
import dayjs from "dayjs";
import Slider from "react-slick";
import "../static/slick.css";
import "../static/slick-theme.css";
import {
  TextBlock,
  SEO,
  Card,
  H2,
} from "../components";

const H4 = styled.h4`
margin: 5px 0;
`

export default class Prescreen1c extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
    };
  }


    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

        return (
            <div>
                <SEO title="Pre-Screen 2a" keywords={[`gatsby`, `application`, `react`]} />
                <H2>Benefit Formula</H2>
                <Slider {...settings}>
                  <section>
                    <h3>How does Social Security calculate my benefits?</h3>
                    <p>Social Security uses three things to calculate your Primary Insurance Amount, or your basic benefit before adjusting for early or late retirement.</p>
                  </section>
                  <section>
                    <h3>Step 1:</h3>
                    <p>Social Security calculates how much of your Average Indexed Monthly Earnings fall below your first <em>bend point</em>.</p>
                  </section>
                </Slider>
            </div>
         )
    }
}
