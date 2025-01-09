import '../css/Home.css'

export default function Home(){
    return(
        <div className="main">
                <div className="main__container">
                    <div className="main__content">
                        <h1>HOW CAN</h1>
                        <h2>WE HELP YOU?</h2>
                        <p>#TheChangeables</p>
                        <button className="main__btn">
                            <a href="/SignUp">Sign Up</a>
                        </button>
                    </div>
                    <div className="main__img--container">
                        <img src="/src/components/images/smart_resize_re_q4mo.svg" alt="pic" id="main__img" />                    
                    </div>
                </div>
            </div>
    );
       
 
}
