package com.example.demo.service;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    // GET ALL TASKS
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // CREATE TASK
    public Task createTask(Task task) {

        System.out.println("Task title: " + task.getTitle());

        if (task.getUser() != null) {
            System.out.println("User ID: " + task.getUser().getId());
        } else {
            System.out.println("User is NULL");
        }

        return taskRepository.save(task);
    }

    // UPDATE TASK
    public Task updateTask(Long id, Task updatedTask) {

        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        task.setTitle(updatedTask.getTitle());
        task.setDeadline(updatedTask.getDeadline());
        task.setPriority(updatedTask.getPriority());
        task.setStatus(updatedTask.getStatus());
        task.setDescription(updatedTask.getDescription());

        return taskRepository.save(task);
    }

    // DELETE TASK
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public List<Task> getTasksByUser(Long userId) {
        return taskRepository.findByUserId(userId);
    }
}