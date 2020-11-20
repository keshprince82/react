import { Field, Form } from 'react-final-form';
import React from "react";
import {render} from "react-dom";
export default function Advform() {
    function onSubmit(values) {
        alert(JSON.stringify(values))
    }
    return (
        <Form
            onSubmit={onSubmit}
            validate={(values)=>{
                const sam={};
                if(!values.firstName){
                    sam.firstName="Required"
                }
                if(!values.lastName){
                    sam.lastName="Required"
                }
                return sam
            }}
            render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                    <Field name="firstName">

                        {({input, meta}) => (
                            <div>
                                first name
                                <input {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}

                            </div>
                        )
                        }
                    </Field>
                    </div>
                    <div>
                    <Field name="lastName">
                        {({ input,meta }) => (
                            <div>
                                lastname
                                <input  {...input}  />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>

                        )} 
                        </Field>
                    </div>
                    <button type="submit">clicl</button>
                    <br/>
                    {values.firstName}
                </form>
               
            )}
        />
       
    )
}