// var Todos = require("../model/todosFilm");

// function getTodos(res) {
//     Todos.find(function (err, todos) {

//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.json(todos);
//         }
//     });
// }

// module.exports = function (app) {
//     //get all todos
//     app.get("/api/todos", function (req, res) {
//         getTodos(res)
//     });

//     // / api/todo/123456
//     app.get("/api/todo/:id", function (req, res) {
//         Todos.findById({ _id: req.params.id }, function (err, todo) {
//             if (err) {
//                 throw err;
//             } else {
//                 res.json(todo);
//             }
//         })
//     });


//     //create a todo
//     app.post("/api/todo", function (req, res) {
//         var todo = {
//             text: req.body.text,
//             isDone: req.body.IsDone
//         };

//         Todos.create(todo, function (err, todo) {
//             if (err) {
//                 throw err;
//             } else {
//                 getTodos(res);
//             }
//         });
//     });
//     //update a todo

//     app.put("/api/todo", function (req, res) {
//         if (!req.body.id) {
//             return res.status(500).send("ID is required")
//         } else {
//             Todos.update({
//                 __id: req.body.id
//             }, {
//                     text: req.body.text.isDone,
//                     isDone: req.body.IsDone
//                 }, function (err, todo) {
//                     if (err) {
//                         return res.status(500).json(err);
//                     } else {
//                         getTodos(res);
//                     }
//                 })
//         }
//     });
//     //delete todo
//     app.delete("/api/todo/:id", function (req, res) {
//         Todos.remove({
//             __id: req.params.id
//         }, function (err, todoo) {
//             if (err) {
//                 return res.status(500).json(err);
//             } else {
//                 getTodos(res);
//             }
//         });
//     });
// }




// var Todos = require("../model/todosFilm");

// function getTodos(res) {
//     Todos.find(function (err, todos) {

//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.json(todos);
//         }
//     });
// }








var Films = require("../model/todosFilm");

function getFilm(res) {
    Films.find(function (err, filmms) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(filmms);
        }
    });
}


module.exports = function (app) {
    // get all todos
    app.get("/api/CreateFilm", function (req, res) {
            getFilm(res);
    });
    app.post("/api/CreateFilm", function (req, res) {
        var Film = {
            NameFilm: req.body.NameFilm,
            StyleFilm: req.body.StyleFilm,
            Comment: req.body.Comment
        };
        Films.create(Film, function (err, Film) {
            if (err) {
                throw err;
            } else {
                getFilm(res);
            }
        });
    });
}

// module.exports = function (app) {
//     app.get("API/CreateFilm", function (req, res) {
//         getFilm(res);
//     })
// }