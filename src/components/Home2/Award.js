import React from 'react'

const Award = () => {
  return (
    <section className="awarded-one">
            <div className="container">
                <div className="awarded-one__inner">
                    <h2 className="awarded-one__title">Awarded Leader in Employee <br /> Communications Software
                    </h2>
                    <ul className="list-unstyled awarded-one__list">
                        <li>
                            <div className="awarded-one__img">
                                <img src={require("../../assets/images/resources/awarded-1-1.png")} alt="img" />
                            </div>
                        </li>
                        <li>
                            <div className="awarded-one__img">
                                <img src={require("../../assets/images/resources/awarded-1-2.png")} alt="img" />
                            </div>
                        </li>
                        <li>
                            <div className="awarded-one__img">
                                <img src={require("../../assets/images/resources/awarded-1-3.png")} alt="img" />
                            </div>
                        </li>
                        <li>
                            <div className="awarded-one__img">
                                <img src={require("../../assets/images/resources/awarded-1-4.png")} alt="img" />
                            </div>
                        </li>
                        <li>
                            <div className="awarded-one__img">
                                <img src={require("../../assets/images/resources/awarded-1-5.png")} alt="img" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Award