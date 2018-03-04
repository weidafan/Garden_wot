curl -i -H "Content-Type: application/json" \
-H "Accept: application/json" \
-X PUT 'http://localhost:8484/pi/actuators/leds/1' \
-d '{"value": false}'
