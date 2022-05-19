import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './Otherinfo';
import SignUpInfo from './SignUpInfo';

function SignUpForm() {

        const [page, setPage] = useState(0);
        const [formData, SetFormData] = useState({
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            username: "",
            nationality: "",
            other: "",
        });


        const FormTitles = ["Sign Up", "Personal Info" ,"Other"];

        const PageDisplay = () => {
            if (page === 0 ){
                return <SignUpInfo formData={formData} SetFormData={SetFormData}/>;
            }else if (page === 1){
                return <PersonalInfo formData={formData} SetFormData={SetFormData}/>;
            }else{
                return <OtherInfo formData={formData} SetFormData={SetFormData}/>;
            }
        };

  return (
    <div className='form'>
        <div className='progressbar'>
       { /* this a div bar that has an condional statement that changes depending on the state of the page */ }
            <div style={{width: page === 0 ? "33.3%" : page ===1 ? "66.6%" : "100%"}}></div>
        </div>
        <div className='form-container'>
        <div className="header">
            <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
            <button 
            disabled = {page === 0}
            onClick={()=>{
                setPage((currPage) => currPage - 1)}}>
                     Prev
                     </button>
            <button
            onClick={()=>{
                if(page === FormTitles.length - 1){
                    alert("FORM SUBMITTED")
                    console.log(formData)
                }else {
                    setPage((currPage) => currPage + 1);
                }
                }}>
                     {page === FormTitles.length - 1 ? "Submit" : "Next"}
                   
                    </button>
                </div>
            </div>
        </div>
  );
}

export default SignUpForm

