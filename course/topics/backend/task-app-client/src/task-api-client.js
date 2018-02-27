let taskAppApi;

(function () {

    const formBodyParser = bodyParser.urlencoded({ extended: false });

    taskAppApi = {

        render: axios.get('localhost:5000/api/tasks')
            .then((res) => {
                res.render('index')
            }),

        createTask: app.post('/tasks', {
            text: { body: { text } }
        })
            .then((res) => {

                res.redirect('/')
            })

    }
})