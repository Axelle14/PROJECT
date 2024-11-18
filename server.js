const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

let doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Dermatology" },
    { id: 3, name: "Dr. Emily Johnson", specialty: "Pediatrics" }
];

let appointments = [];

// Endpoint to get all doctors
app.get("/api/doctors", (req, res) => {
    res.json(doctors);
});

// Endpoint to get a doctor's profile
app.get("/api/doctors/:id", (req, res) => {
    const doctor = doctors.find(d => d.id === parseInt(req.params.id));
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ message: "Doctor not found" });
    }
});

// Endpoint to get all appointments
app.get("/api/appointments", (req, res) => {
    res.json(appointments);
});

// Endpoint to book an appointment
app.post("/api/appointments", (req, res) => {
    const { name, doctorId, date, time } = req.body;
    if (!name || !doctorId || !date || !time) {
        return res.status(400).json({ message: "All fields are required!" });
    }
    const newAppointment = { id: appointments.length + 1, name, doctorId, date, time };
    appointments.push(newAppointment);
    res.status(201).json(newAppointment);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
