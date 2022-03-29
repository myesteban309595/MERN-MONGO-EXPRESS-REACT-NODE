
const express = require('express')
const router = express.Router();

const Task = require('../models/tareas.models')

router.get('/', async (req, res) => {

    const tasks = await Task.find();
    res.json(tasks)

  });

  //^ GET all Tasks
router.get('/:id', async (req, res) => {

    const task = await Task.findById(req.params.id);
    res.json(task);

  });
  
  //^ ADD a new task

  router.post('/', async (req, res) => {

    const {tarea, descripcion } = req.body;
    console.log(tarea);

    // if(tarea && descripcion)
    // {
      
      const task = new Task({tarea, descripcion});
      await task.save();
  
      res.json({status: 'tarea guardada'});
      console.log(("tarea guardada ").bgGreen);

    //}else{
    //   res.json("los datos ingresados no han sido validados")
    //   console.log(("los datos ingresados no han sido validados ").bgRed);
    // //}

  });
  
  //^ UPDATE a new task
  router.put('/:id', async (req, res) => {

    const { tarea, descripcion } = req.body;

    const newTask = {tarea, descripcion};

    await Task.findByIdAndUpdate(req.params.id, newTask);

    res.json({status: 'Task Updated'});

  });
  
  //^ delete task
  router.delete('/:id', async (req, res) => {

    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea eliminada'});

  });
  

module.exports = router;