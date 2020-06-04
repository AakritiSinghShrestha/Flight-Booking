package com.flightbooking.utility;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Component

//1.Created the emailUtility class
public class EmailUtility {
@Autowired

//2.Injected the java mail sender in it
    private JavaMailSender sender;
    public void sendItinerary(String toAddress,String filePath){


        //3.Created the mulitipurpose mail extension message with the help of the sender
        MimeMessage message = sender.createMimeMessage();


        //4.created the message helper that will help to build the email message along with the attached
        //pass the message just created and boolean part tells true if there is additional documents
        //in that email or not
        try {
            MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
            messageHelper.setTo(toAddress);
            messageHelper.setSubject("Confirmation message  for your Flight Booking");
            messageHelper.setText("Please,Find your confirmation document attached");
            //this is not shown to the client
            messageHelper.addAttachment("Itinearary",new File(filePath));

            //5.invoke Sender.send that will send out the email that we have created
            //that we have configure in application properties
            sender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
