import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

/* redux */
import { useDispatch, useSelector } from "react-redux";
import { FetchPrivacy } from "../redux/slice/PrivacySlice";

const PrivacyPolicy = () => {
  
  /* redux */
  const dispatch = useDispatch();
  const { privacy_data } = useSelector((state) => state?.privacySlice);
  useEffect(() => {
    dispatch(FetchPrivacy());
  }, []);

  return (
    <>
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="breadcrumb-hero">
            <div className="container">
              <div className="breadcrumb-hero">
                <h2>Privacy Policy</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <ol>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>Privacy Policy</li>
            </ol>
            <hr />
          </div>
        </section>

        <section id="work-process" className="work-process">
          <div className="container">
            <div className="row content">
              <div className="col-md-12 pt-0 order-2 order-md-1">
                <p
                  dangerouslySetInnerHTML={{ __html: privacy_data.content }}
                ></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
