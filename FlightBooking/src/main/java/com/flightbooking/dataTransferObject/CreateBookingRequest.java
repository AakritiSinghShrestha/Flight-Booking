package com.flightbooking.dataTransferObject;

import java.util.Date;

public class CreateBookingRequest {
    private int flightId;
    private int passengerId;
    private String passengerFirstName;
    private String passengerLastName;
    private String passengerMiddleName;
    private String passengerEmail;
    private String passengerPhone;
    private String cardNumber;
    private Date expirationDate;
    private int securityCode;

    public int getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(int passengerId) {
        this.passengerId = passengerId;
    }


    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public String getPassengerFirstName() {
        return passengerFirstName;
    }

    public void setPassengerFirstName(String passengerFirstName) {
        this.passengerFirstName = passengerFirstName;
    }

    public String getPassengerLastName() {
        return passengerLastName;
    }

    public void setPassengerLastName(String passengerLastName) {
        this.passengerLastName = passengerLastName;
    }

    public String getPassengerMiddleName() {
        return passengerMiddleName;
    }

    public void setPassengerMiddleName(String passengerMiddleName) {
        this.passengerMiddleName = passengerMiddleName;
    }

    public String getPassengerEmail() {
        return passengerEmail;
    }

    public void setPassengerEmail(String passengerEmail) {
        this.passengerEmail = passengerEmail;
    }

    public String getPassengerPhone() {
        return passengerPhone;
    }

    public void setPassengerPhone(String passengerPhone) {
        this.passengerPhone = passengerPhone;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public int getSecurityCode() {
        return securityCode;
    }

    public void setSecurityCode(int securityCode) {
        this.securityCode = securityCode;
    }


    @Override
    public String toString() {
        return "CreateBookingRequest{" +
                "flightId=" + flightId +
                ", passengerId=" + passengerId +
                ", passengerFirstName='" + passengerFirstName +
                ", passengerLastName='" + passengerLastName +
                ", passengerMiddleName='" + passengerMiddleName +
                ", passengerEmail='" + passengerEmail +
                ", passengerPhone='" + passengerPhone +
                ", cardNumber='" + cardNumber +
                ", expirationDate=" + expirationDate +
                ", securityCode=" + securityCode +
                '}';
    }

}
