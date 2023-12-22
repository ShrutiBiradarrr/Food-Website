const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const address = document.getElementById('address');
const messagee = document.getElementById('messagee');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidMobile = mobile => {
    const p = /^\d{10}$/;
    return p.test(mobile);
}
const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();

    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const addressValue = address.value.trim();
    const messageeValue = messagee.value.trim();

   
    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
    }
    if(lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(mobileValue === '') {
        setError(mobile, 'mobile no is required');
    } else if (!isValidMobile(mobileValue)) {
        setError(mobile, 'Provide a valid mobile number');
    } else {
        setSuccess(mobile);
    }

    if(addressValue === '') {
        setError(address, 'First Name is required');
    } else {
        setSuccess(address);
    }
    if(messageeValue === '') {
        setError(messagee, 'Type some message here');
    } else {
        setSuccess(messagee);
    }

};
