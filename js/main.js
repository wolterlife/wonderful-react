function colorChange(props) {
    document.getElementById("m_" + props.toString()).style.filter="invert(1)";
} // Function change color in visual choosing menu
function colorBack(props) {
    document.getElementById("m_" + props.toString()).style.filter="invert(0)";
}   // Function back color in visual choosing menu
