* {
    padding: 0;
    margin: 0;
}

body {
    background-image: url("ph.jpg");
    background-size: 100%;
}

.stopwatch {
   transform: translate(-50%, -50%);
    position: absolute;
   top: 40%;
    left: 50%
}

.btn {
   transform: translate(-50%, -50%);
  position: absolute;
   top: 55%;
   left: 50%;
    width: 20%;
    display: flex;
    justify-content: space-around;
}

#startStopBtn,
#resetBtn {
    width: 100px;
    height: 45px;
    background-color: rgb(43, 226, 43);
    color: white;
    border-radius: 20px;
    border: none;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    cursor: pointer;
    outline: none;
}

#startStopBtn:hover {
    box-shadow: 0 0 20px rgb(59, 128, 20);
}

#resetBtn:hover {
    box-shadow: 0 0 20px rgb(59, 128, 20);
}

#display {

    font-size: 100px;
}
