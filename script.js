document.addEventListener("DOMContentLoaded", () => {
    // Fetch doctors for the Doctors page
    fetch("/api/doctors")
        .then(res => res.json())
        .then(doctors => {
            const doctorList = document.getElementById("doctor-list");
            doctors.forEach(doctor => {
                const li = document.createElement("li");
                li.textContent = `${doctor.name} - ${doctor.specialty}`;
                doctorList.appendChild(li);
            });

            // Populate doctor dropdown on Appointments page
            const doctorSelect = document.getElementById("doctor-select");
            doctors.forEach(doctor => {
                const option = document.createElement("option");
                option.value = doctor.id;
                option.textContent = `${doctor.name} - ${doctor.specialty}`;
                doctorSelect.appendChild(option);
            });
        });
});
