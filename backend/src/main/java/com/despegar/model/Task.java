package com.despegar.model;

import com.despegar.enums.StateEnum;

import java.util.Date;

public class Task {
  private Integer id;
  private String name;
  private Integer value;
  private Boolean divided;
  private StateEnum state;

  public Task() {}

  public Task(Integer id, String name, Integer value, StateEnum state) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.state = state;
  }

  public StateEnum getState() {
    return state;
  }

  public Integer getValue() {
    return value;
  }

  public void setValue(Integer value) {
    this.value = value;
  }

  public void setState(StateEnum state) {
    this.state = state;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Boolean getDivided() {
    return divided;
  }

  public void setDivided(Boolean divided) {
    this.divided = divided;
  }
}
