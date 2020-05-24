export default function location(callback) {
  var geolocation = new BMap.Geolocation()
  // 调用百度地图api 中的获取当前位置接口
  geolocation.getCurrentPosition(function(r) {
    if (this.getStatus() === BMAP_STATUS_SUCCESS) {
      // 获取当前位置经纬度
      var myGeo = new BMap.Geocoder()
      myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(
        result
      ) {
        if (result) {
          const { city } = result.addressComponents
          callback && callback(city)
        }
      })
    }
  })
}
