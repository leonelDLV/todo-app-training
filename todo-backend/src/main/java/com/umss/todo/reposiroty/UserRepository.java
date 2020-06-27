package com.umss.todo.reposiroty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.umss.todo.reposiroty.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}