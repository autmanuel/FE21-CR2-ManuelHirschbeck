let tasks = [
    {
    taskName: "Finish code review",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lv2F7FFPSSBTGSBfm-1cbvgULBshFS-dVIfZRLsuKg&s",
    description:"Finish the code review for codefactory, or the trainers will eat all your lunch next week!",
    priority: 5,
    
},
{
    taskName: "Granny crossover help",
    image: "https://cdn.pixabay.com/photo/2016/04/01/08/45/cell-phone-1298944_1280.png",
    description:"Go help some grannies across the street, just for some extra karma!  ",
    priority: 1,
},
{
    taskName: "Visit the gym",
    image: "https://cdn.pixabay.com/photo/2018/06/19/11/49/jock-3484328_1280.png",
    description:"Go visit the gym, you lazy fool, you dont earn it to eat chocolate now!",
    priority: 3,
},
{
    taskName: "Study for codefactory",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lv2F7FFPSSBTGSBfm-1cbvgULBshFS-dVIfZRLsuKg&s",
    description:"You have to study more, if you lean back they eat you, you know that!",
    priority: 4,
},
{
    taskName: "Brush your teeth",
    image: "https://cdn.pixabay.com/photo/2016/09/15/23/48/brush-teeth-1672984_1280.jpg",
    description:"You should brush your teeth, thats why nobody want to talk with you!",
    priority: 3,
},
{
    taskName: "Food time",
    image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
    description:"Go get your daily calories, you need it, yummie yummie, in your tummy!",
    priority: 2,
},
{
    taskName: "coding session",
    image: "https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg",
    description:"If you have some time left, do a coding session with friends,be like the cool kids!  ",
    priority: 0,
},
{
    taskName: "Shopping list",
    image: "https://cdn.pixabay.com/photo/2016/03/31/23/24/buy-1297592_1280.png",
    description:"<ul><li>800g chicken filet</li><li>vegetables</li><li>100g rice</li></ul>",
    priority: 1,
},
{
    taskName: "Make your calls",
    image: "https://cdn.pixabay.com/photo/2017/01/02/09/35/boy-1946347_1280.jpg",
    description:"You know your important calls, time to do that today, after that your head is free.",
    priority: 3,
}
];


function priorTasks() {
    let resultHtml = '';
    for (let val of tasks) {
        let priorityColorClass = '';
        if (val.priority >= 0 && val.priority <= 1) {
            priorityColorClass = 'bg-success';
        } else if (val.priority >= 2 && val.priority <= 3) {
            priorityColorClass = 'bg-warning';
        } else if (val.priority >= 4 && val.priority <= 5) {
            priorityColorClass = 'bg-danger';
        }

        resultHtml += `
            <div class="card" style="width: 18rem;">
                <img src="${val.image}" class="card-img-top" alt="task-img">
                <div class="card-body text-center">
                    <h5 class="card-title">${val.taskName}</h5>
                    <p class="card-text">${val.description}</p>
                    <hr>
                    <p class="card-text text-start">
                        <i class="bi bi-exclamation-triangle-fill"></i> Priority level: 
                        <button class="btn btn-sm btn-primary priorLvl ${priorityColorClass}" type="button">${val.priority}</button>
                        <button class="btn btn-sm priorBtn btn-primary bg-success" type="button" data-index="${tasks.indexOf(val)}">increase</button><br>
                        <i class="bi bi-calendar3"></i> 10.02.2024
                    </p>
                    <hr>
                    <div class="d-grid gap-2 d-flex justify-content-end">
                        <button class="btn bg-danger btn-primary" type="button"><i class="bi bi-trash3-fill"></i> Delete</button>
                        <button class="btn bg-success btn-primary" type="button"><i class="bi bi-check-circle"></i> Done</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('result').innerHTML = resultHtml;

    document.querySelectorAll('.priorBtn').forEach(btn => {
        btn.addEventListener('click', function () {
            let index = this.getAttribute('data-index');
            if (tasks[index].priority < 5) {
                tasks[index].priority++;
                priorTasks();
            }
        });
    });
}

document.getElementById('sortBtn').addEventListener('click', function () {
    tasks.sort((a, b) => b.priority - a.priority);
    priorTasks();
});

priorTasks();