import React from 'react';
import {Alert} from 'reactstrap';

const FormErrors = ({formErrors}) =>

    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <div>
                        <Alert className={"alert"} color="danger">
                            <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                        </Alert>
                    </div>
                )
            } else {
                return '';
            }
        })}
    </div>

export default FormErrors;