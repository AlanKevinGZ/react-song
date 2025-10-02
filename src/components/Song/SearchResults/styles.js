import styled from "styled-components";


const ResultStyle = styled.div`
.section-title{
    color: white;
}
.add_btn{
    background-color: #00d9ff;
    margin: 0 1rem;
    color: white;
    border: none;
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
}
.songs-list{
    background-color: #00d9ff;
    padding: 1rem;
}
p.no-result{
    color: #ffff;
}

button{
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
`

export {
    ResultStyle
}