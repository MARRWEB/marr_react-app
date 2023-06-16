import { useRef, useMemo, useState, useEffect } from "react";

const { kakao } = window;

const Map = () => {
  const mapContainer = useRef(null);
  const [location, setLocation] = useState({ latitude: "", longitude: "" });

  const MapOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // 1) 현재 위치 가져오기
  const getCurrLocation = useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, MapOptions);
    }

    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 37.483034,
        longitude: 126.902435,
      });
    }
  }, [navigator.geolocation.getCurrentPosition]);

  // 2) 카카오맵 불러오기
  const kakaoMap = () => {
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapContainer.current, options);
    const marker = new window.kakao.maps.Marker({
      position: options.center,
    });

    marker.setMap(map);
  };

  useEffect(() => {
    kakao.maps.load(() => kakaoMap());
  }, [location]);

  return (
    <div className="Map">
      <div
        id="map"
        ref={mapContainer}
        style={{ width: "100%", height: "450px" }}
      ></div>
    </div>
  );
};

export default Map;
