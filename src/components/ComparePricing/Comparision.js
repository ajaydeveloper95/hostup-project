import React from "react";
import Shape1 from "../../assets/images/shapes/comparision-shape-1.png"
import Shape2 from "../../assets/images/shapes/comparision-shape-2.png"
import Shape3 from "../../assets/images/shapes/comparision-shape-3.png"

function Comparision() {
  return (
    <section className="comparision">
      <div className="comparision__shape-1 float-bob-y">
        <img src={Shape1} alt="img" />
      </div>
      <div className="comparision__shape-2 float-bob-y">
        <img src={Shape2} alt="img" />
      </div>
      <div className="comparision__shape-3 float-bob-x">
        <img src={Shape3} alt="img" />
      </div>
      <div className="container">
        <div className="comparision__section-title text-center">
          <h2 className="comparision__section-title__title">
            Hostup community based of <br /> 2350+ hosting providers
          </h2>
          <p className="comparision__section-title__text">
            The distracted by the readable content of a page when looking at its
            layout
          </p>
        </div>
        <div className="comparision__main-content-box">
          <div className="comparision__inner tabs-box text-center">
            <ul className="tab-buttons clearfix list-unstyled">
              <li data-tab="#reliability" className="tab-btn active-btn">
                <span>Reliability</span>
              </li>
              <li data-tab="#pricings" className="tab-btn">
                <span>Pricings</span>
              </li>
              <li data-tab="#friendly" className="tab-btn">
                <span>User Friendly</span>
              </li>
              <li data-tab="#support" className="tab-btn">
                <span>Support</span>
              </li>
              <li data-tab="#features" className="tab-btn">
                <span>Features</span>
              </li>
            </ul>
            <div className="tabs-content">
              {/*tab*/}
              <div className="tab active-tab" id="reliability">
                <div className="comparision__tab-content-box">
                  <div className="comparision__tab-content-img">
                    <canvas
                      className="bar-chart"
                      id="bar-chart-1"
                      data-chart-options='{
                                      "type": "bar",
                                      "data": {
                                        "labels": ["Hostup", "Fenco", "Melpe", "Paese", "Metrow", "Halsey", "Mili"],
                                        "datasets": [
                                          {
                                            "label": "data-1",
                                            "data": [9, 8, 7, 6, 5, 7, 8],
                                            "backgroundColor": [
                                              "rgba(14,182,121,1)",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF"
                                            ]
                                          }
                                        ]
                                      },
                                      "options": {
                                        "legend": {
                                          "display": false
                                        },
                                        "tooltips": {
                                          "enabled": false
                                        },
                                  "scales": {
                                    "xAxes": [{
                                        "gridLines": {
                                            "display": false
                                        }
                                    }],
                                    "yAxes": [{
                                        "gridLines": {
                                            "display": false
                                        },
                                        "ticks": {
                                            "beginAtZero": true
                                        }
                                    }]
                                }
                                      }
                                    }'
                    />
                  </div>
                </div>
              </div>
              {/*tab*/}
              {/*tab*/}
              <div className="tab" id="pricings">
                <div className="comparision__tab-content-box">
                  <div className="comparision__tab-content-img">
                    <canvas
                      className="bar-chart"
                      id="bar-chart-2"
                      data-chart-options='{
                                      "type": "bar",
                                      "data": {
                                        "labels": ["Hostup", "Fenco", "Melpe", "Paese", "Metrow", "Halsey", "Mili"],
                                        "datasets": [
                                          {
                                            "label": "data-1",
                                            "data": [9, 8, 7, 6, 5, 7, 8],
                                            "backgroundColor": [
                                              "rgba(14,182,121,1)",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF"
                                            ]
                                          }
                                        ]
                                      },
                                      "options": {
                                        "legend": {
                                          "display": false
                                        },
                                        "tooltips": {
                                          "enabled": false
                                        },
                                  "scales": {
                                    "xAxes": [{
                                        "gridLines": {
                                            "display": false
                                        }
                                    }],
                                    "yAxes": [{
                                        "gridLines": {
                                            "display": false
                                        },
                                        "ticks": {
                                            "beginAtZero": true
                                        }
                                    }]
                                }
                                      }
                                    }'
                    />
                  </div>
                </div>
              </div>
              {/*tab*/}
              {/*tab*/}
              <div className="tab" id="friendly">
                <div className="comparision__tab-content-box">
                  <div className="comparision__tab-content-img">
                    <canvas
                      className="bar-chart"
                      id="bar-chart-3"
                      data-chart-options='{
                                      "type": "bar",
                                      "data": {
                                        "labels": ["Hostup", "Fenco", "Melpe", "Paese", "Metrow", "Halsey", "Mili"],
                                        "datasets": [
                                          {
                                            "label": "data-1",
                                            "data": [9, 8, 7, 6, 5, 7, 8],
                                            "backgroundColor": [
                                              "rgba(14,182,121,1)",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF"
                                            ]
                                          }
                                        ]
                                      },
                                      "options": {
                                        "legend": {
                                          "display": false
                                        },
                                        "tooltips": {
                                          "enabled": false
                                        },
                                  "scales": {
                                    "xAxes": [{
                                        "gridLines": {
                                            "display": false
                                        }
                                    }],
                                    "yAxes": [{
                                        "gridLines": {
                                            "display": false
                                        },
                                        "ticks": {
                                            "beginAtZero": true
                                        }
                                    }]
                                }
                                      }
                                    }'
                    />
                  </div>
                </div>
              </div>
              {/*tab*/}
              {/*tab*/}
              <div className="tab" id="support">
                <div className="comparision__tab-content-box">
                  <div className="comparision__tab-content-img">
                    <canvas
                      className="bar-chart"
                      id="bar-chart-4"
                      data-chart-options='{
                                      "type": "bar",
                                      "data": {
                                        "labels": ["Hostup", "Fenco", "Melpe", "Paese", "Metrow", "Halsey", "Mili"],
                                        "datasets": [
                                          {
                                            "label": "data-1",
                                            "data": [9, 8, 7, 6, 5, 7, 8],
                                            "backgroundColor": [
                                              "rgba(14,182,121,1)",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF"
                                            ]
                                          }
                                        ]
                                      },
                                      "options": {
                                        "legend": {
                                          "display": false
                                        },
                                        "tooltips": {
                                          "enabled": false
                                        },
                                  "scales": {
                                    "xAxes": [{
                                        "gridLines": {
                                            "display": false
                                        }
                                    }],
                                    "yAxes": [{
                                        "gridLines": {
                                            "display": false
                                        },
                                        "ticks": {
                                            "beginAtZero": true
                                        }
                                    }]
                                }
                                      }
                                    }'
                    />
                  </div>
                </div>
              </div>
              {/*tab*/}
              {/*tab*/}
              <div className="tab" id="features">
                <div className="comparision__tab-content-box">
                  <div className="comparision__tab-content-img">
                    <canvas
                      className="bar-chart"
                      id="bar-chart-5"
                      data-chart-options='{
                                      "type": "bar",
                                      "data": {
                                        "labels": ["Hostup", "Fenco", "Melpe", "Paese", "Metrow", "Halsey", "Mili"],
                                        "datasets": [
                                          {
                                            "label": "data-1",
                                            "data": [9, 8, 7, 6, 5, 7, 8],
                                            "backgroundColor": [
                                              "rgba(14,182,121,1)",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF",
                                              "#F8CCB8",
                                              "#E6EBFF"
                                            ]
                                          }
                                        ]
                                      },
                                      "options": {
                                        "legend": {
                                          "display": false
                                        },
                                        "tooltips": {
                                          "enabled": false
                                        },
                                  "scales": {
                                    "xAxes": [{
                                        "gridLines": {
                                            "display": false
                                        }
                                    }],
                                    "yAxes": [{
                                        "gridLines": {
                                            "display": false
                                        },
                                        "ticks": {
                                            "beginAtZero": true
                                        }
                                    }]
                                }
                                      }
                                    }'
                    />
                  </div>
                </div>
              </div>
              {/*tab*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comparision;
