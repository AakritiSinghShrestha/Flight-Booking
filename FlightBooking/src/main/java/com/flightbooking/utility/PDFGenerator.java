package com.flightbooking.utility;


import com.flightbooking.entities.Booking;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;

import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.springframework.stereotype.Component;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

@Component
public class PDFGenerator {


    public void generateItinerary(Booking booking, String filepath) {
//filepath to which we want to save and attached in email
       // 1.created the documents instance
        Document document = new Document();

            try {
                //2.we have created PdfWriter.getInstance
                PdfWriter.getInstance(document,new FileOutputStream(filepath));

                document.open();
                //3.whatever we put in this document will go in pdf
                //4.we have created the table no. oc column is 2 and we are filling the flight and passenger information on it.
                document.add(generateTable(booking));
                // generateTable method =create pfd table for us
                document.close();



            } catch (FileNotFoundException | DocumentException e) {
                e.printStackTrace();
            }

    }

    private PdfPTable generateTable(Booking booking) {
        //we want 3 column
        PdfPTable table =new PdfPTable(2);
        //to create a table column we use pdfPcell,each cell represent column
        PdfPCell cell;

        //1. cell is "flight Itinerary"
        //I want this particular cell span across the row i.e we are creating PdfPCell
        cell = new PdfPCell(new Phrase("Flight Itinerary"));
        //make sure that it span entire three column
        cell.setColspan(2);

        //add that cell to the table pass the cell
        table.addCell(cell);


        //2. cell is "flight Details"
        //I want this particular cell span across the row i.e we are creating PdfPCell
        cell = new PdfPCell(new Phrase("Flight details"));
        //make sure that it span entire three column
        cell.setColspan(2);

        //add that cell to the table pass the cell
        table.addCell(cell);


        //3. cell is all the details of flight
        table.addCell("Airlines");
        table.addCell(booking.getFlight().getOperatingAirlines());

        table.addCell("Departure City");
        table.addCell(booking.getFlight().getDepartureCity());

        table.addCell("Arrival City");
        table.addCell(booking.getFlight().getArrivalCity());

        table.addCell("Flight Number");
        table.addCell(booking.getFlight().getFlightNumber());


        //addcell doesnot accept the date so we need to invoke the toString method to this
        table.addCell("Departure Date");
        table.addCell(booking.getFlight().getDateOfDeparture().toString());


        //addcell doesnot accept the timeStamp so we need to invoke the toString method to this
        table.addCell("Departure Time");
        table.addCell(booking.getFlight().getEstimatedDepartureTime().toString());

        table.addCell("Arrival Date");
        table.addCell(booking.getFlight().getDateOfArrival().toString());

        table.addCell("Arrival Time");
        table.addCell(booking.getFlight().getDateOfArrival().toString());

        table.addCell("Price in $");
        table.addCell(booking.getFlight().getPrice().toString());




        //4. cell is "Passenger Details"
        //I want this particular cell span across the row i.e we are creating PdfPCell
        cell = new PdfPCell(new Phrase("Passenger details"));
        //make sure that it span entire three column
        cell.setColspan(2);

        //add that cell to the table pass the cell
        table.addCell(cell);



        //5. cell is all the details of passenger
        table.addCell("First Name");
        table.addCell(booking.getPassenger().getFirstName());

        table.addCell("Last Name");
        table.addCell(booking.getPassenger().getLastName());

        table.addCell("Middle Name");
        table.addCell(booking.getPassenger().getMiddleName());

        table.addCell("Email");
        table.addCell(booking.getPassenger().getEmail());

        table.addCell("Phone Number");
        table.addCell(booking.getPassenger().getPhone());







        return table ;
    }
}
