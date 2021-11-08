function colorChange(param) {
    document.getElementById("m_" + param.toString()).style.filter="invert(1)";
    document.getElementById("img_" + param.toString()).style.borderBottom="3px solid #00a0ff";
    document.getElementById("img_" + param.toString()).style.color="#ffffff";
} // Function change color in visual choosing menu
function colorBack(param) {
    document.getElementById("m_" + param.toString()).style.filter="invert(0)";
    document.getElementById("img_" + param.toString()).style.borderBottom="3px solid #ff6c00";
    document.getElementById("img_" + param.toString()).style.color="#b4b4b4";
}   // Function back color in visual choosing menu
