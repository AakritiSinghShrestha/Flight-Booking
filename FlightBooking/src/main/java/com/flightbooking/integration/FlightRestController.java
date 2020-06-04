package com.flightbooking.integration;

import com.flightbooking.dataTransferObject.CreateBookingRequest;
import com.flightbooking.dataTransferObject.updateBookingRequest;
import com.flightbooking.entities.Booking;
import com.flightbooking.entities.Flight;
import com.flightbooking.entities.Passenger;
import com.flightbooking.repository.BookingRepository;
import com.flightbooking.repository.FlightRepository;
import com.flightbooking.repository.PassengerRepository;
import com.flightbooking.utility.EmailUtility;
import com.flightbooking.utility.PDFGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class FlightRestController {

    @Autowired
    FlightRepository   flightRepository;

    @Autowired
    PassengerRepository passengerRepository;

    @Autowired
    BookingRepository bookingRepository ;

    @Autowired
    PDFGenerator  pdfGenerator;


    @Autowired
    EmailUtility emailUtility;

    @RequestMapping(value="/flights")
    public List<Flight> findFlights(@RequestParam("from") String from, @RequestParam("to") String to, @RequestParam("operatingAirlines") String operatingAirlines,  @RequestParam("departureDate") @DateTimeFormat(pattern = "MM-dd-yyyy") Date departureDate){

        return flightRepository.findFlights(from, to,operatingAirlines,departureDate);

//        public List<Flight> findFlights(){
//        return flightRepository.findAll();
       }





    @RequestMapping(value="/flights/{id}")
    public Flight findFlight(@PathVariable("id") int id){
        return flightRepository.findById(id).get();
    }





@RequestMapping(value="/booking",method = RequestMethod.POST)
@Transactional
    public Booking saveBooking(@RequestBody CreateBookingRequest request){
    Flight flight = flightRepository.findById(request.getFlightId()).get();



//    we need to create passenger int the database
    Passenger passenger = new Passenger();
    passenger.setFirstName(request.getPassengerFirstName());
    passenger.setLastName(request.getPassengerLastName());
    passenger.setMiddleName(request.getPassengerMiddleName());
    passenger.setEmail(request.getPassengerEmail());
    passenger.setPhone(request.getPassengerPhone());
    passenger.setCardNumber(request.getCardNumber());
    passenger.setExpirationDate(request.getExpirationDate());
    passenger.setSecurityCode(request.getSecurityCode());

    Passenger savePassenger = passengerRepository.save(passenger);


    Booking booking = new Booking();
    booking.setPassenger(savePassenger);
    booking.setFlight(flight);
    booking.setCheckedIn(false);

    Booking savedBooking = bookingRepository.save(booking);






//here is the entire path bookingpdf is folder name ,and booking is the file name and appending the booking id
    //to it and pdf is the extension
    String filePath="/Users/bikashshrestha/Documents/Project/bookingpdf/booking"+savedBooking.getId()+ ".pdf";
pdfGenerator.generateItinerary(savedBooking,filePath);


emailUtility.sendItinerary(passenger.getEmail(),filePath);


    return savedBooking;
    }

    

    @RequestMapping(value="/booking/{id}",method = RequestMethod.GET)
    public Booking findBooking(@PathVariable("id") int id){
        return bookingRepository.findById(id).get();
    }


    @RequestMapping(value="/booking/{id}",method = RequestMethod.DELETE)
    public  void  deletePassengerId(@PathVariable("id") int id){
        passengerRepository.deleteById( id);
    }



    @RequestMapping(value="/booking",method = RequestMethod.PUT)
    public Booking updateBooking(@RequestBody updateBookingRequest request){
        Booking booking = bookingRepository.findById(request.getId()).get();
        booking.setNumberOfBags(request.getNumberOfBags());
        booking.setCheckedIn(request.getCheckedIn());
        return bookingRepository.save(booking);
    }



}
