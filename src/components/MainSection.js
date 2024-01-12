import "../styles/MainSection.css"
import MainSectionBackground from "../assets/home01 (1).jpg"

const MainSection = () =>{
    return (
        <div>
            <div className= "MainSection">
                <img src={MainSectionBackground} alt="background"/>
                <div className="content">
                    <h2>
                        We are Beyond Banking
                    </h2>

                    <p>
                        With mission to make financial services more inclusive through technology,
                        OPay is dedicated to providing secure, easy to use & affordable financial services with super
                        fast user experience, amazing incentive package on transfer/airtime & data top-up, innovative
                        product to use as balance with amazing daily interest, reliable debit card with no charge and
                        best resolution experience etc. With OPay account, you can have full control of your finances,
                        payments & transactions with ease, all on one platform! Yes, OPay is your one-stop payment
                        services platform and more.
                    </p>

                    <div>
                        <p>
                            Licensed by CBN
                        </p>

                        <p>
                            Insured by <span>
                            NDIC
                        </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MainSection;