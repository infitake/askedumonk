import React, { Component } from "react";
import { Link } from "react-router-dom";
class Law extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="coursedetauilstop">
          <div className="container1">
            <div className="row">
              <div className="col-md-2 col-xs-2">
                <img src={require("../.././images/law.law.jpg")} alt="" />
              </div>
              <div className="col-md-7 col-xs-10 clgprofiledes">
                <h3>Law &amp; Health Care</h3>
                <h6 className="locationclg">
                  <i className="fa fa-graduation-cap" />
                  Courses After 12
                </h6>
              </div>
              <div className="col-md-3 col-xs-12 mt-15 blockbtn" />
            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div className="row">
              <div className="col-md-12" role="main">
                <div className="coursedessside detail-content-wrapper">
                  <div id="section-0" className="detail-content">
                    <h2 className="heading-new">
                      <span>About Law </span>
                    </h2>
                    <div className="coursecontdes">
                      <p />
                      <p>
                        <strong />
                      </p>
                      <p dir="ltr">
                        <strong />
                      </p>
                      <p />
                      <p>
                        <br />
                      </p>
                      <p />
                    </div>
                  </div>

                  <div id="section-1" className="detail-content clearfix">
                    <h2 className="heading-new">
                      <span>Courses</span>
                    </h2>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-law">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Laws
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-art">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Arts
                          &amp; Law (B.A, LLB)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-commerce">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Commerce
                          &amp; Law (B.Com, LLB)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                    <div className="col-md-4 mrgn-branches">
                      <Link to="/bachelor-business">
                        <p className="brnchname">
                          <i className="fa fa-database" /> Bachelor of Business
                          Administration &amp; Law (BBA, LLB)
                        </p>
                        <p>
                          <i className="fa fa-angle-right" />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Law;
