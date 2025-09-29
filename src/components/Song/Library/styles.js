import styled from "styled-components";

const LibraryStyle=styled.div`

.title-main{
    color: white;
    text-align: center;
    margin: 1rem 0;
}

.library{
    background-color: white;
}

ul li{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem ;
}

button{
    background-color: #ff2a00;
    border: none;
    color: white;
    padding: 0.5;
    cursor: pointer;
}

`

export {
    LibraryStyle
}