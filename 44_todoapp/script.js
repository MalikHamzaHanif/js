const taskss = "tasks";
const circle_nameoftask = "circle-nameoftask";
const circle = "circle";
function getSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    // Create first line of the cross
    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", "18");
    line1.setAttribute("y1", "6");
    line1.setAttribute("x2", "6");
    line1.setAttribute("y2", "18");

    // Create second line of the cross
    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", "6");
    line2.setAttribute("y1", "6");
    line2.setAttribute("x2", "18");
    line2.setAttribute("y2", "18");

    // Append lines to SVG
    svg.appendChild(line1);
    svg.appendChild(line2);

    return svg
}

function addTask() {
    const value = document.getElementsByTagName("input")[0].value
    if (value.length > 0) {
        const crossSvg = getSvg();
        const tasks = document.createElement('div');
        tasks.classList.toggle(taskss);
        const insideTask = document.createElement('div');
        insideTask.classList.add(circle_nameoftask);
        const divCircle = document.createElement('div');
        divCircle.classList.add(circle)
        const taskName = document.createElement('p');
        taskName.innerHTML = value
        tasks.appendChild(insideTask);
        insideTask.appendChild(divCircle)
        insideTask.appendChild(taskName)
        tasks.appendChild(crossSvg)
        const mainTask = document.getElementById("card-two");
        mainTask.appendChild(tasks);
        crossSvg.addEventListener("click", () => {
            mainTask.removeChild(tasks)
        })
        let lineThrough = 0;
        divCircle.addEventListener("click", () => {
            if (lineThrough == 0) {

                taskName.style.textDecoration = "line-through"
                lineThrough = 1;
            } else {
                taskName.style.textDecoration = "none"
                lineThrough = 0
            }
        })
    } else {
        alert("Please add task name");
    }



}
document.getElementsByTagName("button")[0].addEventListener("click", addTask)
