// shuttle_service.js
// Runnable Local Transit Service Fixture (Node.js & Express)
// Demonstrating unhandled query parameter crash and defensive validation guard

const express = require('express');
const app = express();
app.use(express.json());

// In memory coordinate database
const activeRoutes = {
  campus_loop_north: {
    route: 'campus_loop_north',
    shuttleId: 'BUS_104',
    status: 'in_transit',
    coordinates: {
      latitude: 42.3601,
      longitude: -71.0942
    },
    speedMph: 24,
    nextStop: 'Apex Student Union',
    estimatedArrivalMinutes: 3
  }
};

// GET /v1/campus/shuttle/coordinates
app.get('/v1/campus/shuttle/coordinates', (req, res) => {
  const route = req.query.route;

  // STEP 5 REPAIR: Defensive Input Validation Guard
  // Uncomment the lines below to protect the server from crashing:
  /*
  if (!route || route.trim() === '') {
    return res.status(400).json({
      statusCode: 400,
      error: 'route parameter is required'
    });
  }
  */

  // STEP 4 DEFECT: Dereferencing without checking presence
  // If route is omitted (undefined), route.trim() throws TypeError!
  const normalizedRoute = route.trim().toLowerCase();

  const shuttleData = activeRoutes[normalizedRoute];
  if (shuttleData) {
    return res.status(200).json(shuttleData);
  }

  res.status(404).json({
    statusCode: 404,
    error: 'Unknown shuttle route'
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Shuttle Transit Service running on http://localhost:${PORT}`);
  console.log(`Try baseline query: http://localhost:${PORT}/v1/campus/shuttle/coordinates?route=campus_loop_north`);
});
