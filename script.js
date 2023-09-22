const appointments = [];

function bookAppointment() {
    const bookingDateTime =document.getElementById('bookingDateTime');
    const bookingdateTimevalue = bookingDateTime.value;

    if (bookingdateTimevalue === '') {
        alert('please book an appointment');
        return;
    }

    const now = new Date();
    const selectedDateTime = new Date(bookingdateTimevalue);

    if (selectedDateTime < now) {
        alert('You can not book an appointment in the past');
        return;
    }

    const comfirmbooking = document.getElementById('confirmationMessage');
    comfirmbooking.innerHTML = `Apppointment booked for ${bookingdateTimevalue.toLocaleString()}.`;

    appointments.push(selectedDateTime);
    displayAppointments();

    function cancelAppointments(index) {
        appointments.splice(index, 1)
        displayAppointments();
    };

    function displayAppointments() {
        const appointmentsList = document.getElementById('appointmentList')

        appointmentsList.innerHTML = '';
        appointments.forEach((app, index)=>{
            const li = document.createElement('li');
            li.innerHTML = `appointment on ${app.toLocaleString()}`;

            const cancelButton = document.createElement('button');
            cancelButton.innerHTML = 'cancel'
            cancelButton.onclick = () => cancelAppointments(index)

            li.appendChild(cancelButton);
            appointmentsList.appendChild(li);
        })
    };


}