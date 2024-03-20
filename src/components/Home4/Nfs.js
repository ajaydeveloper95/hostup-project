import React from 'react'
import { Link } from 'react-router-dom'

const Nfs = () => {
  return (
    <section className="nfs-one">
            <div className="nfs-one__bg" style={{backgroundImage: `url(${require("../../assets/images/background/nfs-one-bg.jpg")})`}}></div>
            <div className="container">
                <div className="nfs-one__inner">
                    <div className="nfs-one__img">
                        <img src={require("../../assets/images/resources/nfs-one-img-1.png")} alt="img" />
                    </div>
                    <p className="nfs-one__text">Get ready to race now, Hurry!!! Members can play Need for <br /> Speed™
                        Unbound
                        for up to 10 hours</p>
                    <div className="nfs-one__btn-box">
                        <Link to="/about" className="thm-btn nfs-one__btn">
                            <span>
                                Play Now
                                <i className="icon-arrow"></i>
                            </span>
                        </Link>
                        <Link to="/about" className="thm-btn nfs-one__btn-2">
                            <span>
                                Watch Trailer
                                <i className="icon-arrow"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Nfs