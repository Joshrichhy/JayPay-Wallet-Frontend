import "../styles/TopNav.css"
import "../styles/MainSection.css"
import MainSectionBackground from "../assets/home01 (1).jpg"
import React, {useState} from "react"

const TopNav = () =>{
    const [showPersonalModal, setShowPersonalModal] = useState(false);
    const [showCompanyModal, setShowCompanyModal] = useState(false);
    function companyModal() {
        setShowPersonalModal(false);
        setShowCompanyModal(true)


    }

    function personalModal() {

        setShowPersonalModal(true);
        setShowCompanyModal(false)


    }

    function closeModal (){
      setShowCompanyModal(false);
    }

    return (
        <div>
            <div className= "TopNav">
                <h1>JayPay</h1>
                <ol className="Personal"  onClick={personalModal}>Personal</ol>
                <ol>Business</ol>
                <ol className="Company" onClick={companyModal} >Company</ol>
            </div>

            {showCompanyModal && (
                <div className= "modalCompany" >
                    <ol>About Us</ol>
                    <ol>Contact Us</ol>
                    <ol>Press & Media</ol>
                    <ol>CSR</ol>
                </div>
            )
            }

        </div>

    )
}

export default TopNav;