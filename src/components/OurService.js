import MainSectionBackground from "../assets/home01 (1).jpg"
import "../styles/OurService.css"

const OurService = ()=>{
    return(
        <div className="OurService">
            <div>
                <h1>
                    Fund your Account, Make Transfers, Pay Bills
                </h1>
                <p>
                    Live life on your own terms! Add money to your OPay wallet and transfer to
                    other bank accounts for free. Enjoy bonuses on airtime & data top-ups and
                    fast bill payments at no extra charge.
                </p>
            </div>
            <div>
                <img src={MainSectionBackground} alt="pic"/>
            </div>

        </div>
    )
}

export default OurService;