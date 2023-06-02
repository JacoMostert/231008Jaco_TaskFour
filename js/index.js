document.addEventListener('DOMContentLoaded', function() {

    var form = document.querySelector('.form-container form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var formData = [];

        var vehicleData = {};

        vehicleData.vehicleType = form.elements['vehicle-type'].value;

        vehicleData.make = form.elements['make'].value;
        vehicleData.model = form.elements['model'].value;
        vehicleData.registration = form.elements['registration'].value;

        vehicleData.condition = form.elements['condition'].value;

        formData.push(vehicleData);

        console.log('Form Data:', formData);

    });
});

document.addEventListener('DOMContentLoaded', function() {

    var form = document.querySelector('form');

    var formData = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var vehicleType = form.elements['vehicle-type'].value;

        var condition = form.elements['condition of vehicle'].value;

        var vehicleData = {
            vehicleType: vehicleType,
            condition: condition
        };

        formData.push(vehicleData);

        console.log('Form Data:', formData);

    });
});