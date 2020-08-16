import React, { Component } from "react";

import Button from "@material-ui/core/Button";


export default function SubmitButton({type}) {
    const buttonType = type ? type : 'button';
    return (
        <Button type={buttonType} variant="contained" color="primary">Submit</Button>
    )
}
