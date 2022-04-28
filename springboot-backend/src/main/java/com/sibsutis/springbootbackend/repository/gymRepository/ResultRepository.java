package com.sibsutis.springbootbackend.repository.gymRepository;

import com.sibsutis.springbootbackend.model.gymModel.Result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends JpaRepository<Result,Long> {
}