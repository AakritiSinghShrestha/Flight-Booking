package com.flightbooking.repository;


import com.flightbooking.entities.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepository extends JpaRepository<Passenger,Integer> {
        Passenger deleteById(int id);
}
