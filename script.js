document.querySelector('#btn').onclick = function() {
    if (document.querySelector('#nouvelle_tache input').value.length == 0) {
        alert("Enter task");
    }else {
        document.querySelector('#liste').innerHTML += ` 
        <div class="liste">
            <span id="taskname">
                ${document.querySelector('#nouvelle_tache input').value}
            </span>
            <button class="delete">
                    X
                </button>
            </div>
`;

            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i <current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }
    }
}