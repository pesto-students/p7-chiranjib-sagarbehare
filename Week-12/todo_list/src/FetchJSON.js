import React, { useEffect, useState } from "react";

function FetchJSON() {
    const [jsonData, setJsonData] = useState('sagar'); 
    

    useEffect(() =>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((json) => setJsonData(json));
    },[]);
    

    return (
        <div>{jsonData.message}</div>
    );

}

export default FetchJSON;