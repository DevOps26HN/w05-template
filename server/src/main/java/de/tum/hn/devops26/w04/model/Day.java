package de.tum.hn.devops26.w04.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.LocalDate;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Day(LocalDate date, List<Dish> dishes) {
}