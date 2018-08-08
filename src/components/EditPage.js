import React from "react";

const EditPage = (props) => {
    console.log(props);
    return (
        <div>
        Editing the expenses with id of {props.match.params.id}
        </div>
    )
};

export default EditPage;