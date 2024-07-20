$(document).ready(function() {
    function getWeatherByLocation(lat, lon) {
        var apiKey = 'fd1a3b69d3ed9aa2949abd75f9adcad6'; // Ganti dengan API Key yang valid
        var url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=id`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                var forecastList = data.list;
                var todayDate = new Date();
                var today = todayDate.toISOString().split('T')[0];
                var tomorrowDate = new Date();
                tomorrowDate.setDate(tomorrowDate.getDate() + 1);
                var tomorrow = tomorrowDate.toISOString().split('T')[0];

                var weatherInfo = `
                    <h3>Cuaca di ${data.city.name}</h3>
                    <h4>Hari Ini (${today})</h4>
                    <div class="forecast-container" id="today-forecast">
                `;

                forecastList.forEach(function(forecast) {
                    if (forecast.dt_txt.startsWith(today)) {
                        weatherInfo += `
                            <div class="forecast-item">
                                <p>${forecast.dt_txt.split(' ')[1]}</p>
                                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="icon">
                                <p>${forecast.main.temp}°C</p>
                                <p>${forecast.weather[0].description}</p>
                            </div>
                        `;
                    }
                });

                weatherInfo += `
                    </div>
                    <h4>Besok (${tomorrow})</h4>
                    <div class="forecast-container" id="tomorrow-forecast">
                `;

                forecastList.forEach(function(forecast) {
                    if (forecast.dt_txt.startsWith(tomorrow)) {
                        weatherInfo += `
                            <div class="forecast-item">
                                <p>${forecast.dt_txt.split(' ')[1]}</p>
                                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="icon">
                                <p>${forecast.main.temp}°C</p>
                                <p>${forecast.weather[0].description}</p>
                            </div>
                        `;
                    }
                });

                weatherInfo += '</div>';
                $('#weather-result').html(weatherInfo);
            },
            error: function(error) {
                var errorMessage = 'Kota tidak ditemukan, coba lagi.';
                if (error.responseJSON && error.responseJSON.message) {
                    errorMessage = error.responseJSON.message;
                }
                $('#weather-result').html(`<p>${errorMessage}</p>`);
            }
        });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                getWeatherByLocation(lat, lon);
            }, function(error) {
                $('#weather-result').html('<p>Gagal mendapatkan lokasi Anda. Pastikan layanan lokasi aktif dan coba lagi.</p>');
            });
        } else {
            $('#weather-result').html('<p>Browser Anda tidak mendukung Geolocation.</p>');
        }
    }

    getLocation();

    $('#weather-form').on('submit', function(event) {
        event.preventDefault();
        var city = $('#city').val();
        var apiKey = 'fd1a3b69d3ed9aa2949abd75f9adcad6'; // Ganti dengan API Key yang valid
        var url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},ID&appid=${apiKey}&units=metric&lang=id`;

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                var forecastList = data.list;
                var todayDate = new Date();
                var today = todayDate.toISOString().split('T')[0];
                var tomorrowDate = new Date();
                tomorrowDate.setDate(tomorrowDate.getDate() + 1);
                var tomorrow = tomorrowDate.toISOString().split('T')[0];

                var weatherInfo = `
                    <h3>Cuaca di ${data.city.name}</h3>
                    <h4>Hari Ini (${today})</h4>
                    <div class="forecast-container" id="today-forecast">
                `;

                forecastList.forEach(function(forecast) {
                    if (forecast.dt_txt.startsWith(today)) {
                        weatherInfo += `
                            <div class="forecast-item">
                                <p>${forecast.dt_txt.split(' ')[1]}</p>
                                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="icon">
                                <p>${forecast.main.temp}°C</p>
                                <p>${forecast.weather[0].description}</p>
                            </div>
                        `;
                    }
                });

                weatherInfo += `
                    </div>
                    <h4>Besok (${tomorrow})</h4>
                    <div class="forecast-container" id="tomorrow-forecast">
                `;

                forecastList.forEach(function(forecast) {
                    if (forecast.dt_txt.startsWith(tomorrow)) {
                        weatherInfo += `
                            <div class="forecast-item">
                                <p>${forecast.dt_txt.split(' ')[1]}</p>
                                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="icon">
                                <p>${forecast.main.temp}°C</p>
                                <p>${forecast.weather[0].description}</p>
                            </div>
                        `;
                    }
                });

                weatherInfo += '</div>';
                $('#weather-result').html(weatherInfo);
            },
            error: function(error) {
                var errorMessage = 'Kota tidak ditemukan, coba lagi.';
                if (error.responseJSON && error.responseJSON.message) {
                    errorMessage = error.responseJSON.message;
                }
                $('#weather-result').html(`<p>${errorMessage}</p>`);
            }
        });
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        var formData = $(this).serialize();

        $.post('email.php', formData, function(response) {
            $('#feedbackModalBody').html(response);
            $('#feedbackModal').modal('show');
        });
    });
});
