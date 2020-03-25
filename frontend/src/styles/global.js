import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');


* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
*:focus {
    outline:0;
}
html,body,#root {
    height:100%
}
body{
    font: 400 14px 'Roboto' , sans-serif;
    background:#f0f0f5;
    -webkit-font-smoothing: antialiased;
}
 input, button ,textarea {
    font :400 18px 'Roboto', sans-serif;
}


button {
    cursor:pointer;
}

form input {
    width:100%;
    height:60px;
    color:#333;
    border:1px solid #dcdce6;
    border-radius:8px;
    padding:0 24px;
}
form textarea {
    width:100%;
    resize: vertical;
    min-height:140px;
    color:#333;
    border :1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height : 24px;
}
.back-link {
            display:flex;
            align-items:center;
            margin-top:40px;
            color:#41414d;
            font-size:18px;
            text-decoration:none;
            font-weight:500;
            transition : opacity 0.2s;
            
            svg {
                margin-right:8px;
            }
        }
.button {
    width:100%;
    height:60px;
    background: #e02041;
    border:0;
    border-radius:8px;
    color:#FFF;
    font-weight:bold;
    margin-top:16px;
    display:inline-block;
    text-align:center;
    text-decoration:none;
    font-size:18px;
    line-height:60px;
    transition: filter 0.2s
}
.button:hover{
    filter: brightness(90%);
}
`;
