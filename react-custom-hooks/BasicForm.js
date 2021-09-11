import useInput from "../hooks/useInput";

const BasicForm = (props) => {

  const {value:firstName,valid:firstNameIsValid,hasError:firstNameIsInvalid,inputValueChangeHandler:firstNameValueChangeHandler,
    inputOnBlurHandler:firstNameOnBlurHandler} = useInput(value=>value.trim()!=="")
  
  const {value:lastName,valid:lastNameIsValid,hasError:lastNameIsInvalid,inputValueChangeHandler:lastNameValueChangeHandler,
    inputOnBlurHandler:lastNameOnBlurHandler} = useInput(value=>value.trim()!=="")

  const {value:email,valid:emailIsValid,hasError:emailIsInvalid,inputValueChangeHandler:emailValueChangeHandler,
    inputOnBlurHandler:emailOnBlurHandler} = useInput(value=>value.includes('@'))  

  let formIsValid = false

  if(firstNameIsValid&&lastNameIsValid&&emailIsValid){
    formIsValid = true
  }

  const formSubmitHandler = event =>{
    event.preventDefault()

    console.log(firstName,lastName,email)
    
  }

  const firstNameClassName = firstNameIsInvalid?'form-control invalid':'form-control'
  const lastNameClassName = lastNameIsInvalid?'form-control invalid':'form-control'
  const emailClassName = emailIsInvalid?'form-control invalid':'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClassName}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameValueChangeHandler}
          onBlur={firstNameOnBlurHandler} />
          {firstNameIsInvalid&& <p className='error-text'>First name cannot be empty</p>}

          
        </div>
        <div className={lastNameClassName}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameValueChangeHandler}
          onBlur={lastNameOnBlurHandler}/>
          {lastNameIsInvalid&& <p className='error-text'>Last name cannot be empty</p>}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailValueChangeHandler}
        onBlur={emailOnBlurHandler} />
        {emailIsInvalid&& <p className='error-text'>Invalid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
