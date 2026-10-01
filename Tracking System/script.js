let tasks = [];

let notes = [];


function addTask() {

    const title =
        document.getElementById("taskTitle").value;

    const description =
        document.getElementById("taskDescription").value;

    const deadline =
        document.getElementById("taskDeadline").value;


    if (
        title === "" ||
        description === "" ||
        deadline === ""
    ) {

        alert("Please complete all fields.");

        return;
    }


    const task = {

        id: Date.now(),

        title: title,

        description: description,

        deadline: deadline,

        completed: false

    };


    tasks.push(task);


    document.getElementById("taskTitle").value = "";

    document.getElementById("taskDescription").value = "";

    document.getElementById("taskDeadline").value = "";


    alert("Task added successfully!");

    displayTasks();

}


function displayTasks() {

    let html = "";

    let pending = 0;

    let completed = 0;


    tasks.forEach(function(task) {

        if (task.completed) {

            completed++;

        } else {

            pending++;

        }


        html += `

            <div class="task">

                <h3 class="${task.completed ? "completed" : ""}">
                    ${task.title}
                </h3>

                <p>
                    ${task.description}
                </p>

                <p>
                    Deadline: ${task.deadline}
                </p>

                <button
                    class="complete-btn"
                    onclick="completeTask(${task.id})">

                    ${task.completed
                        ? "Mark as Pending"
                        : "Complete"}

                </button>


                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">

                    Delete

                </button>

            </div>

        `;

    });


    if (html === "") {

        html = "<p>No tasks yet.</p>";

    }


    document.getElementById("taskList")
        .innerHTML = html;


    document.getElementById("upcomingTasks")
        .innerHTML = html;


    document.getElementById("pendingCount")
        .textContent = pending;


    document.getElementById("completedCount")
        .textContent = completed;

}


function completeTask(id) {

    tasks.forEach(function(task) {

        if (task.id === id) {

            task.completed = !task.completed;

        }

    });


    displayTasks();

}


function deleteTask(id) {

    if (
        confirm("Are you sure you want to delete this task?")
    ) {

        tasks = tasks.filter(function(task) {

            return task.id !== id;

        });


        displayTasks();

    }

}


function addNote() {

    const subject =
        document.getElementById("noteSubject").value;

    const content =
        document.getElementById("noteContent").value;


    if (
        subject === "" ||
        content === ""
    ) {

        alert("Please complete all fields.");

        return;
    }


    const note = {

        id: Date.now(),

        subject: subject,

        content: content

    };


    notes.push(note);


    document.getElementById("noteSubject").value = "";

    document.getElementById("noteContent").value = "";


    alert("Study note added successfully!");

    displayNotes();

}


function displayNotes() {

    let html = "";


    notes.forEach(function(note) {

        html += `

            <div class="note">

                <h3>
                    ${note.subject}
                </h3>

                <p>
                    ${note.content}
                </p>

                <button
                    class="delete-btn"
                    onclick="deleteNote(${note.id})">

                    Delete

                </button>

            </div>

        `;

    });


    if (html === "") {

        html = "<p>No study notes yet.</p>";

    }


    document.getElementById("noteList")
        .innerHTML = html;


    document.getElementById("notesCount")
        .textContent = notes.length;

}