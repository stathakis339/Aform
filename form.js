      // JavaScript για να δεις τα δεδομένα
      document.getElementById('appointmentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Αποτροπή ανανέωσης της σελίδας
  
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const comments = document.getElementById('comments').value;
  
        console.log("Όνομα:", name);
        console.log("Τηλέφωνο:", phone);
        console.log("Διεύθυνση:", address);
        console.log("Ημερομηνία:", date);
        console.log("Ώρα:", time);
        console.log("Σχόλια:", comments);
  
        alert("Τα στοιχεία σας καταχωρήθηκαν επιτυχώς! Θα επικοινωνήσουμε σύντομα.");
      });