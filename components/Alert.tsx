import React from "react";

interface Props {
    message: string;
}

const Alert: React.FC<Props> = ({ message }) => {
    return (
        <div className="alert alert-dark">{message}</div>
    );
};

export default Alert;
