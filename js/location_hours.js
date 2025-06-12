        function getDirections() {
            const address = "141 E Emmaus Ave, Allentown, PA 18103";
            const encodedAddress = encodeURIComponent(address);
            
            // Try to open in Google Maps first, fallback to Apple Maps on iOS
            if (navigator.userAgent.indexOf('iPhone') > -1 || navigator.userAgent.indexOf('iPad') > -1) {
                window.open(`maps://maps.google.com/maps?daddr=${encodedAddress}`);
            } else {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`);
            }
        }