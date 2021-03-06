const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: [-73.9878584, 40.7484405],
      creator: 'u1'
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: [-73.9878584, 40.7484405],
      creator: 'u2'
    }
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid

  const place = DUMMY_PLACES.find(place => {
    return place.id == placeId
  });

  if(!place) {
    throw new HttpError('Could not find a place for the provided ID', 404);
  }

  res.json({place: place});
}

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid

  const place = DUMMY_PLACES.find(place => {
    return place.creator == userId
  });

  if(!place) {
    return next(new HttpError('Could not find a place for the provided ID', 404));
  }

  res.json({place: place});
 }

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
