
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons, reserveDragon, cancelDragonReservation } from '../features/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  React.useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const handleReserveDragon = (dragonId) => {
    dispatch(reserveDragon(dragonId));
  };

  const handleCancelReservation = (dragonId) => {
    dispatch(cancelDragonReservation(dragonId));
  };

  return (
    <div>
      <h2>Dragons</h2>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            {dragon.name} - {dragon.type}
            {dragon.reserved ? (
              <button onClick={() => handleCancelReservation(dragon.id)}>
                Cancel Reservation
              </button>
            ) : (
              <button onClick={() => handleReserveDragon(dragon.id)}>Reserve Dragon</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dragons;
