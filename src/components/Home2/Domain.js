import React from 'react'

const Domain = () => {
    return (
        <section class="choose-domain">
            <div class="container">
                <div class="choose-domain__inner">
                    <div class="choose-domain__inner-top">
                        <h3 class="choose-domain__title">Find a Perfect Domain Name</h3>
                        <div class="choose-domain__right">
                            <form class="choose-domain__form" action="#">
                                <div class="choose-domain__input-box">
                                    <input type="text" name="domain" placeholder="Search domain name..." />
                                    <div class="choose-domain__name">
                                        <select class="selectpicker">
                                            <option value=".com" selected>.com</option>
                                            <option value=".info">.info </option>
                                            <option value=".net">.net</option>
                                            <option value=".org">.org</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="thm-btn choose-domain__btn">
                                    <span>
                                        Search now
                                        <i class="icon-arrow"></i>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="choose-domain__bottom">
                        <ul class="list-unstyled choose-domain__list">
                            <li>
                                <p class="choose-domain__type">.com</p>
                                <p class="choose-domain__price">$2.99/Year</p>
                            </li>
                            <li>
                                <p class="choose-domain__type">.store</p>
                                <p class="choose-domain__price">$1.99/Year</p>
                            </li>
                            <li>
                                <p class="choose-domain__type">.online</p>
                                <p class="choose-domain__price">$3.99/Year</p>
                            </li>
                            <li>
                                <p class="choose-domain__type">.co</p>
                                <p class="choose-domain__price">$1.99/Year</p>
                            </li>
                            <li>
                                <p class="choose-domain__type">.xyz</p>
                                <p class="choose-domain__price">$4.99/Year</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Domain