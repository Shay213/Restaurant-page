const formValidation = function(){
    const form = document.getElementById('form1');
    form.noValidate = true;
    const inputs = form.querySelectorAll('input');
    const patterns = {
        firstName: /^[a-z]+$/i,
        phone: /^(\d{3})-(\d{3})-(\d{4})$/,
        email: 'd',
        persons: /^[1-9]+$/,
        date: ''

    };

    const validInputs = {
        firstName: false,
        phone: false,
        email: false,
        persons: false,
        date: false,
        changeValue: function(inputName, value){
            this[inputName] = value;
        }
    }

    inputs.forEach(el => {
        el.addEventListener('change', e => {
            validate(e.target, patterns[e.target.attributes.name.value], validInputs, false);
        }, {once: true});
    });

    form.addEventListener('submit', e => {
        if(isFormValid(validInputs)){
            //form is valid
        }else{
            //form is invalid
            e.preventDefault();
            //check if any empty fields
            Array.from(inputs).forEach(el => {
                if(el.value === ''){
                    el.className = 'required';
                }
            });
        }
    });
};

function isFormValid(validInputs){
    let valid = true;
    for(let key in validInputs){
        if(!validInputs[key]){
            valid = false;
            break;
        }
    }
    return valid;
}

function validate(field, regex,validInputs, once){
    if(field.attributes.name.value === 'email' || field.attributes.name.value === 'date'){
        //built in validity
        isValid(field.checkValidity());
    }else{
        //regex validity
        isValid(regex.test(field.value));
    }

    if(!once){
        field.addEventListener('keyup', e => {
            validate(field, regex, validInputs, true);
        });
    }

    function isValid(test){
        if(test){
            field.className = 'valid';
            validInputs.changeValue(field.attributes.name.value, true);
        } else{
            field.className = 'invalid';
            validInputs.changeValue(field.attributes.name.value, false);  
        }
    }
}

export default formValidation