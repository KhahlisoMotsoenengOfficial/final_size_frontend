import "../css/Shop.css";

export default function Shop() {
  return (
    <>
      <div className="burger">
        <img
          src="/src/components/images/burger-backg.jpg"
          alt="login image"
          className="burger__img"
        />

        <form action="" className="burger__form">
          <h3 className="burger__message">Spicy Guacamole!</h3>
          <h2 className="burger__message">I smell February Release...</h2>
          <h1 className="burger__title">Let's build you a burger.</h1>
          <div className="burger__content">
            <div className="burger__box">
              <i class="fa-solid fa-burger"></i>
              <div className="burger__box-input">
                <input
                  type="text"
                  required
                  className="burger__input"
                  id="burger-particle"
                  placeholder=" "
                />
                <label for="burger-particle" className="burger__label">
                  Component
                </label>
              </div>
            </div>
          </div>

          <div className="burger__dropdown">
            <div className="button__select">
              <span classname="button__text">Select the Ingeredients</span>
              <span className="arrow__down">
                <i class="fa-regular fa-square-caret-down"></i>
              </span>
            </div>
            <ul className="ingredient__list">
              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="1aSize"
                />
                <label for="1aSize" className="ingredient__check-label">
                  UX/Interface - update existing
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="1bSize"
                />
                <label for="1bSize" className="ingredient__check-label">
                  UX/Interface - new
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="2Size"
                />
                <label for="2Size" className="ingredient__check-label">
                  DB creation/configuration
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="3Size"
                />
                <label for="3Size" className="ingredient__check-label">
                  Arch/Process flow
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="4Size"
                />
                <label for="4Size" className="ingredient__check-label">
                  Integration: VODS, PEP, Microservices
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="5Size"
                />
                <label for="5Size" className="ingredient__check-label">
                  Forms/Media or Templates - printing
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="6Size"
                />
                <label for="6Size" className="ingredient__check-label">
                  Device Integration: Headless solution integration
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="7aSize"
                />
                <label for="7aSize" className="ingredient__check-label">
                  Service/API consuming - Read: calling existing service
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="8Size"
                />
                <label for="8Size" className="ingredient__check-label">
                  Testing Dependency
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="9Size"
                />
                <label for="9Size" className="ingredient__check-label">
                  New Test Data/new environment
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="10Size"
                />
                <label for="10Size" className="ingredient__check-label">
                  IT Infrastructure required/Firewall rules, certs, VMs,
                  containers
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="10aSize"
                />
                <label for="10aSize" className="ingredient__check-label">
                  Monitoring: Dev effort
                </label>
              </li>

              <li className="ingredient">
                <input
                  type="checkbox"
                  className="ingredient__check-input"
                  id="10bSize"
                />
                <label for="10bSize" className="ingredient__check-label">
                  Monitoring: IT Ops effort
                </label>
              </li>
            </ul>
          </div>

          <button type="submit" className="submit__button">
            Submit
          </button>
          <p className="burger__cart">
            Ready to view your cart? <a href="/">View my burgers</a>
          </p>
        </form>
      </div>

    

      {/* <div className="main">
        <div className="burger__container">
          <div className="burger__content">
            <p>#TheChangeables</p>
            <h1>Name your burger.</h1>

            <button className="main__btn">
              <a href="/SignUp">Sign Up</a>
            </button>
          </div>
          <div className="main__img--container">
            <img
              src="/src/components/images/smart_resize_re_q4mo.svg"
              alt="pic"
              id="main__img"
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
