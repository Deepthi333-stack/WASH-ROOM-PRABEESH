var APP_DATA = {
  "scenes": [
    {
      "id": "0-dry-area",
      "name": "DRY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.18533945688259834,
          "pitch": 0.08534974009101859,
          "rotation": 1.5707963267948966,
          "target": "2-wash-basin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wet-area",
      "name": "WET AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -3.0149047299267373,
          "pitch": -0.018605570775470426,
          "rotation": 1.5707963267948966,
          "target": "2-wash-basin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wash-basin",
      "name": "WASH BASIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -0.27001165268884897,
          "pitch": -0.4559883122116961,
          "rotation": 1.5707963267948966,
          "target": "1-wet-area"
        },
        {
          "yaw": 1.4830800370683734,
          "pitch": 0.059646833825247825,
          "rotation": 0,
          "target": "0-dry-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "WASH ROOM - PRABEESH",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
