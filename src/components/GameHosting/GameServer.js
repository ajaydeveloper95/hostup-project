import React from 'react'

function GameServer() {
  return (
    <section className="game-server">
          <div
            className="game-server__shape-1 float-bob-y"
            style={{
              backgroundImage:
                "url(assets/images/shapes/game-server-shape-1.png)",
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="game-server__left">
                  <div className="game-server__img float-bob-y">
                    <img
                      src="assets/images/resources/game-server-img-1.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="game-server__right">
                  <h2 className="game-server__title">
                    Simplified dedicated game <br /> server management
                  </h2>
                  <p className="game-server__text">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                  <ul className="list-unstyled game-server__points">
                    <li>
                      <div className="icon">
                        <span className="icon-icon-check-2" />
                      </div>
                      <div className="text">
                        <h4>Simplified management</h4>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-icon-check-2" />
                      </div>
                      <div className="text">
                        <h4>Flexible and extensible</h4>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-icon-check-2" />
                      </div>
                      <div className="text">
                        <h4>Global reach</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default GameServer
